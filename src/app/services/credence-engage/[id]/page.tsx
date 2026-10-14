import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Hero } from "@/components/site/hero";
import { Arrow, Check, CtaBand, Pill, SmartLink } from "@/components/site/primitives";
import { EventCheckoutButton } from "@/components/site/event-checkout-button";
import {
  getEventById,
  getEventPortfolio,
  getEventTickets,
  TICKET_CATEGORIES,
  type EventDetail,
  type Ticket,
} from "@/lib/external-data";
import { ctaLabel, eventPlace, isPastDate, splitDescription, splitPortfolio, typeLabel } from "@/lib/event-display";
import { consultHref } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

// Registration status and ticket sale windows depend on the time of the request.
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

/** One Firestore read per request, shared by the metadata and the page. */
const getEvent = cache(getEventById);

const SITE = "https://www.credence.africa";

const ICON = {
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  grid: "M4 5h16v14H4zM4 9h16M9 9v10",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
};

const dayFmt = new Intl.DateTimeFormat("en-US", { day: "2-digit", timeZone: "UTC" });
const monFmt = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });

function dateParts(value?: string) {
  const d = value ? new Date(value) : null;
  if (!d || isNaN(d.getTime())) return null;
  return { day: dayFmt.format(d), mon: monFmt.format(d).toUpperCase(), year: String(d.getUTCFullYear()) };
}

/** "15 OCT 2026", "25–26 NOV 2026" or "29 MAY – 01 JUN 2026". */
function dateLabel(start?: string, end?: string) {
  const s = dateParts(start);
  const e = dateParts(end);
  if (!s) return "";
  if (!e || (e.day === s.day && e.mon === s.mon && e.year === s.year)) return `${s.day} ${s.mon} ${s.year}`;
  if (e.mon === s.mon && e.year === s.year) return `${s.day}–${e.day} ${s.mon} ${s.year}`;
  return `${s.day} ${s.mon} – ${e.day} ${e.mon} ${e.year}`;
}

/** Breadcrumb label: the title cut at a word boundary near 28 characters. */
function shortTitle(title: string) {
  const cut = title.length > 28 ? title.lastIndexOf(" ", 28) : -1;
  return cut > 0 ? title.slice(0, cut).replace(/[\s:;,&–-]+$/, "") : title;
}

// shortcut: sale dates carry no zone, so they are read in the server's zone (UTC in production,
// three hours behind Nairobi); store zoned timestamps in Engage if sale cut-offs must be exact.
function isTicketOnSale(ticket: Ticket): { onSale: boolean; reason?: string } {
  const now = Date.now();
  if (ticket.quantity !== undefined && ticket.quantity <= 0) {
    return { onSale: false, reason: "Sold Out" };
  }
  if (ticket.startSaleDate) {
    const start = new Date(ticket.startSaleDate).getTime();
    if (!isNaN(start) && now < start) {
      return { onSale: false, reason: "Sales Not Started" };
    }
  }
  if (ticket.endSaleDate) {
    const end = new Date(ticket.endSaleDate).getTime();
    if (!isNaN(end) && now > end) {
      return { onSale: false, reason: "Sales Closed" };
    }
  }
  return { onSale: true };
}

const kes = (n: number) => `KES ${n.toLocaleString("en-US")}`;

function priceLine(tickets: Ticket[]) {
  const prices = tickets.map((t) => t.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (max === 0) return "Free registration";
  if (min === max) return kes(min);
  if (min > 0) return `From ${kes(min)}`;
  return `Free registration or paid tickets from ${kes(Math.min(...prices.filter((p) => p > 0)))}`;
}

/** Google Calendar template link; needs an ISO date and an HH:MM start time. */
function calendarHref(event: EventDetail, details: string, location: string) {
  const { startDate, endDate, startTime, endTime } = event;
  const time = /^\d{2}:\d{2}$/;
  if (!startDate || !/^\d{4}-\d{2}-\d{2}$/.test(startDate) || !startTime || !time.test(startTime)) return undefined;
  const stamp = (d: string, t: string) => `${d.replace(/-/g, "")}T${t.replace(":", "")}00`;
  const start = stamp(startDate, startTime);
  const endDay = endDate && /^\d{4}-\d{2}-\d{2}$/.test(endDate) ? endDate : startDate;
  const end = stamp(endDay, endTime && time.test(endTime) ? endTime : startTime);
  const query = new URLSearchParams({
    action: "TEMPLATE",
    text: event.name.trim(),
    dates: `${start}/${end > start ? end : start}`,
    ctz: "Africa/Nairobi",
    details,
    location,
  });
  return `https://calendar.google.com/calendar/render?${query}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);
  if (!event) return { title: "Event not found" };
  const title = event.name.trim();
  const description = splitDescription(event.description).summary || undefined;
  return {
    // The Engage layout's plain title drops the site template for its children, so add it here.
    title: { absolute: `${title} | Credence Africa` },
    description,
    alternates: { canonical: `/services/credence-engage/${id}` },
    openGraph: { title, description, images: event.thumbnail ? [event.thumbnail] : undefined },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const [event, rawTickets, portfolio] = await Promise.all([getEvent(id), getEventTickets(id), getEventPortfolio()]);
  if (!event) notFound();

  const past = isPastDate(event.endDate || event.startDate);
  const order: readonly string[] = TICKET_CATEGORIES;
  const rank = (t: Ticket) => {
    const i = order.indexOf(String(t.category).toLowerCase());
    return i === -1 ? order.length : i;
  };
  const tickets = [...rawTickets].sort((a, b) => rank(a) - rank(b));
  const sale = new Map(tickets.map((t) => [t.id, isTicketOnSale(t)]));
  const buyable = tickets.filter((t) => sale.get(t.id)?.onSale);
  // A single open ticket without extras needs no list: the register button checks it out directly.
  const listTickets =
    !past && tickets.length > 0 && !(tickets.length === 1 && buyable.length === 1 && !tickets[0].features.length);

  const name = event.name.trim();
  const url = `${SITE}/services/credence-engage/${event.id}`;
  const { summary: rawSummary, about } = splitDescription(event.description);
  const summary = rawSummary || "More details about this event will be shared soon.";
  const virtual = /virtual/i.test(event.eventKind || event.eventType || "");
  const where = eventPlace(event.location, event.eventKind || event.eventType) || "Venue to be confirmed";
  const format = typeLabel(event.eventType);
  const start = dateParts(event.startDate);
  const time =
    event.startTime && event.endTime && event.endTime > event.startTime
      ? `${event.startTime}–${event.endTime}`
      : event.startTime;
  const cta = ctaLabel(tickets);
  const price = tickets.length
    ? priceLine(tickets)
    : past
      ? "Registration Closed"
      : "Ticket sales for this event have not been set up yet. Please check back soon.";
  const calendar = past ? undefined : calendarHref(event, `${summary}\n\n${url}`, where);

  const facts = [
    { k: "Date", v: dateLabel(event.startDate, event.endDate), icon: ICON.cal },
    { k: "Time", v: time && `${time} EAT`, icon: ICON.clock },
    { k: "Format", v: format, icon: ICON.grid },
    { k: "Location", v: where, icon: ICON.pin },
  ].filter((f) => f.v);

  const { upcoming, past: earlier } = splitPortfolio(portfolio);
  const more = [...upcoming, ...earlier].filter((e) => e.id !== event.id).slice(0, 3);

  const zoned = (date?: string, t?: string) => date && (t ? `${date}T${t}:00+03:00` : date);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description: summary,
    url,
    image: event.thumbnail ? [event.thumbnail] : undefined,
    startDate: zoned(event.startDate, event.startTime),
    endDate: zoned(event.endDate || event.startDate, event.endTime),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: `https://schema.org/${virtual ? "Online" : "Offline"}EventAttendanceMode`,
    location: virtual ? { "@type": "VirtualLocation", url } : { "@type": "Place", name: where, address: where },
    organizer: { "@type": "Organization", name: "Credence Africa", url: SITE },
    offers: tickets.map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price,
      priceCurrency: "KES",
      url,
      availability: `https://schema.org/${sale.get(t.id)?.reason === "Sold Out" ? "SoldOut" : "InStock"}`,
    })),
  };

  const ctaPill =
    "pill flex w-full items-center justify-center gap-2 rounded-full bg-primary px-[22px] py-[15px] text-[15px] font-semibold text-ink";
  const outlinePill =
    "pill mt-2.5 flex items-center justify-center gap-2 rounded-full border border-white/30 px-[22px] py-[13px] text-[14.5px] font-medium text-white hover:text-primary";
  const h2Sub = "m-0 text-[clamp(28px,2.6vw,36px)] font-normal leading-[1.15] tracking-[-0.035em]";

  return (
    <div className="w-full bg-white leading-[1.65] text-ink">
      {/* Firestore text: `<` is escaped so a description cannot close the script tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <Hero
        title={name}
        intro={summary}
        crumbs={[{ label: "Events", href: "/events" }, { label: shortTitle(name) }]}
        btn1={past ? { label: "See upcoming events", href: "/events" } : { label: cta, href: "#register" }}
        btn2={{ label: "All events", href: "/events" }}
        mobileTitle={38}
      />

      {/* Key facts */}
      <section className="bg-white">
        <div className="wrap">
          <div className="bgrid -mt-px grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] border-l border-t border-line">
            {facts.map((f) => (
              <div key={f.k} className="flex items-start gap-3.5 bg-white px-[26px] py-6">
                <span className="flex size-10 shrink-0 items-center justify-center bg-ink">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF4820"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={f.icon} />
                  </svg>
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[12px] uppercase tracking-[0.1em] text-mute">{f.k}</span>
                  <span className="text-[16.5px] font-medium leading-[1.35]">{f.v}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main + registration */}
      <section className="pb-28 pt-24">
        <div className="wrap grid grid-cols-[minmax(0,1fr)_380px] items-start gap-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-12">
          <div className="flex min-w-0 flex-col gap-[72px]">
            <div>
              <div className="eb mb-[18px] text-[13.5px]">About this event</div>
              <h2 className="mb-5 mt-0 max-w-[720px] text-[clamp(30px,3vw,42px)] font-normal leading-[1.12] tracking-[-0.035em]">
                {summary}
              </h2>
              {about.map((p, i) => (
                <p key={i} className="mb-4 mt-0 max-w-[720px] text-[17.5px] text-body">
                  {p}
                </p>
              ))}
            </div>

            {/* Ticket choice behind the register button, kept from the previous page. */}
            {listTickets && (
              <div id="tickets" className="scroll-mt-8">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className={h2Sub}>Tickets</h2>
                  <span className="text-[13.5px] text-mute">Choose the ticket type that best fits your engagement</span>
                </div>
                <div className="border-t border-ink">
                  {tickets.map((t) => {
                    const reason = sale.get(t.id)?.reason;
                    return (
                      <div
                        key={t.id}
                        className="grid grid-cols-[120px_1fr_auto] items-start gap-6 border-b border-line py-[22px] max-[720px]:grid-cols-1 max-[720px]:gap-1.5"
                      >
                        <span className="text-[15px] font-medium capitalize text-primary-deep">{String(t.category)}</span>
                        <span className="flex flex-col gap-1">
                          <span className="text-[18px] font-medium leading-[1.35]">{t.name}</span>
                          <span className="text-[15px] text-body-3">{t.price > 0 ? kes(t.price) : "Free"}</span>
                          {t.features.length > 0 && (
                            <ul className="m-0 mt-1.5 flex list-none flex-col gap-1.5 p-0">
                              {t.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-[14.5px] text-body-3">
                                  <Check size={14} className="text-primary-deep" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </span>
                        {reason ? (
                          <span className="justify-self-start whitespace-nowrap rounded-full border border-line px-5 py-3 text-[14px] font-medium text-mute max-[720px]:mt-3">
                            {reason}
                          </span>
                        ) : (
                          <EventCheckoutButton
                            event={event}
                            ticket={t}
                            className="pill inline-flex items-center gap-2 justify-self-start whitespace-nowrap rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-white max-[720px]:mt-3"
                          >
                            Get Ticket<span className="sr-only">: {t.name}</span>
                            <Arrow />
                          </EventCheckoutButton>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Registration card */}
          <aside id="register" className="scroll-mt-8">
            <div className="sticky top-8 flex flex-col gap-4">
              <div className="on-dark bg-ink p-8 text-white">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em]",
                      past ? "text-mute" : "text-primary",
                    )}
                  >
                    <span aria-hidden="true" className={cn("size-[7px] rounded-full", past ? "bg-mute" : "bg-primary")} />
                    {past ? "Past event" : "Upcoming"}
                  </span>
                  <span className="text-right text-[13px] text-mute">{format}</span>
                </div>
                {start && (
                  <div className="mb-2 flex items-end gap-3.5">
                    <span className="text-[84px] font-light leading-[0.85] tracking-[-0.04em]">{start.day}</span>
                    <span className="pb-1.5 text-[15px] tracking-[0.1em]">
                      {start.mon} {start.year}
                      {time && (
                        <>
                          <br />
                          <span className="text-mute">{time} EAT</span>
                        </>
                      )}
                    </span>
                  </div>
                )}
                <p className="mb-6 mt-5 border-t border-line-dark pt-5 text-[15px] text-body-dark">{price}</p>
                {past ? (
                  <>
                    <span className="flex items-center justify-center rounded-full bg-tile px-[22px] py-[15px] text-[15px] font-medium text-body-dark">
                      This event has taken place
                    </span>
                    <SmartLink href="/events" className={outlinePill}>
                      See upcoming events
                    </SmartLink>
                  </>
                ) : (
                  <>
                    {buyable.length === 1 ? (
                      <EventCheckoutButton event={event} ticket={buyable[0]} className={ctaPill}>
                        {cta}
                        <Arrow />
                      </EventCheckoutButton>
                    ) : tickets.length > 0 ? (
                      <a href="#tickets" className={ctaPill}>
                        {cta}
                        <Arrow />
                      </a>
                    ) : null}
                    {calendar && (
                      <a href={calendar} target="_blank" rel="noopener noreferrer" className={outlinePill}>
                        Add to calendar
                      </a>
                    )}
                  </>
                )}
                <p className="mb-0 mt-[18px] text-[13px] text-mute">
                  Programme, ticket options and participation terms are confirmed on the{" "}
                  <a href="https://engage.credence.africa/" className="text-white underline hover:text-primary">
                    event platform
                  </a>
                  .
                </p>
              </div>
              <div className="border border-line px-[26px] py-6">
                <div className="mb-1.5 text-[16.5px] font-medium">Sponsor, exhibit or partner</div>
                <p className="mb-3.5 mt-0 text-[14.5px] text-body-3">
                  Explore sponsorship, exhibition or partnership opportunities where an event offers a relevant audience
                  and a documented package.
                </p>
                <SmartLink
                  href={consultHref("engage")}
                  className="hit inline-flex items-center gap-2 text-[14px] font-semibold hover:text-primary-deep"
                >
                  Enquire about partnership
                  <Arrow size={13} />
                </SmartLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Venue */}
      <section className="pb-28">
        <div className="wrap">
          <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] border border-line max-[860px]:grid-cols-1">
            <div className="flex flex-col gap-3.5 p-10">
              <div className="eb text-[13.5px]">Venue and access</div>
              <h2 className="m-0 text-[30px] font-normal leading-[1.15] tracking-[-0.03em]">{where}</h2>
              {virtual && (
                <p className="m-0 text-[16px] text-body-3">
                  This is a virtual event. Joining details are shared with registered participants.
                </p>
              )}
            </div>
            <div aria-hidden="true" className="ph min-h-[300px]" />
          </div>
        </div>
      </section>

      {/* More events */}
      {more.length > 0 && (
        <section className="pb-32">
          <div className="wrap">
            <div className="mb-2 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-10">
              <h2 className="m-0 text-[clamp(30px,3vw,42px)] font-normal leading-[1.1] tracking-[-0.035em]">More events</h2>
              <SmartLink
                href="/events"
                className="pill inline-flex items-center gap-2 rounded-full border border-ink px-5 py-[11px] text-[14.5px] font-medium hover:text-primary-deep"
              >
                All events
              </SmartLink>
            </div>
            {more.map((e) => (
              <SmartLink
                key={e.id}
                href={e.url}
                className="cell group grid grid-cols-[110px_minmax(0,1fr)_minmax(0,0.5fr)_24px] items-center gap-6 border-b border-line bg-white px-2 py-6 text-ink max-[720px]:grid-cols-[80px_1fr_24px]"
              >
                <span className="text-[30px] leading-none tracking-[-0.03em]">
                  {e.day} <span className="text-[13px] tracking-[0.08em] text-mute">{e.month}</span>
                </span>
                <span className="text-[18px] font-medium leading-[1.35] group-hover:text-primary-deep">{e.title}</span>
                <span className="text-[14px] text-body-3 max-[720px]:hidden">{eventPlace(e.location, e.category)}</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="arrow"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </SmartLink>
            ))}
          </div>
        </section>
      )}

      <CtaBand
        heading="Events planned around your purpose"
        text="Credence Engage accepts client event briefs. Explain the event purpose, date, location, audience, budget and support required so the commission can be defined."
        size="event"
        padding="py-[150px]"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href="/services/credence-engage" variant="light">
            Commission an event
          </Pill>
          <Pill href={consultHref("engage")} variant="outlineAccent">
            Book a consultation
          </Pill>
        </div>
      </CtaBand>
    </div>
  );
}
