import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Arrow, SmartLink } from "@/components/site/primitives";
import { getEventPortfolio, getEventTickets } from "@/lib/external-data";
import { ctaLabel, eventPlace, splitDescription, splitPortfolio, typeLabel } from "@/lib/event-display";
import { consultHref } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past summits, forums, roundtables and expos hosted by Credence Engage: the convenings where capital, policy and markets meet across Africa.",
  alternates: { canonical: "/events" },
};

// The live Engage portfolio, refreshed every five minutes.
export const revalidate = 300;

const h2 = "h2 m-0 text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]";

export default async function EventsPage() {
  const { upcoming, past } = splitPortfolio(await getEventPortfolio());
  const tickets = await Promise.all(upcoming.map((e) => getEventTickets(e.id)));

  return (
    <div className="w-full bg-white text-ink">
      <Hero
        title="Strategic Events and Influence in Africa"
        intro="Browse upcoming summits, forums and expos hosted by Credence Engage."
        crumbs={[{ label: "Credence Engage" }]}
        btn1={{ label: "View All Events", href: "#all-events" }}
        btn2={{ label: "Let's Talk", href: consultHref("engage") }}
        card={{
          label: "Credence Engage",
          title: "Partner with Us",
          text: "The rooms where markets move.",
          href: "/services/credence-engage",
        }}
      />

      <section className="py-32">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">Credence Engage</div>
          <h2 className={cn(h2, "mb-14")}>
            Upcoming Events <span className="text-mute">({upcoming.length})</span>
          </h2>
          {upcoming.length > 0 ? (
            <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(460px,100%),1fr))] border-l border-t border-line">
              {upcoming.map((e, i) => (
                // Stacks at phone width, where the 220px date panel would leave the copy a sliver.
                <div key={e.id} className="grid min-h-[320px] grid-cols-[220px_1fr] bg-white max-[720px]:grid-cols-1">
                  <div className="ph-dark on-dark flex flex-col justify-between gap-6 p-7 text-white">
                    <span className="text-[13px] text-primary">{typeLabel(e.category)}</span>
                    <div>
                      <div className="text-[84px] leading-[0.9] tracking-[-0.04em]">{e.day}</div>
                      <div className="text-[15px] tracking-[0.1em]">
                        {e.month}
                        {e.time && ` · ${e.time}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-[30px] py-7">
                    <h3 className="m-0 text-[22px] font-medium leading-[1.25] tracking-[-0.01em]">{e.title}</h3>
                    <p className="m-0 text-[15px] text-body-2">{splitDescription(e.description).summary}</p>
                    <SmartLink
                      href={e.url}
                      className="pill mt-auto inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-white"
                    >
                      {ctaLabel(tickets[i])}
                      <span className="sr-only">: {e.title}</span>
                      <Arrow />
                    </SmartLink>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="m-0 border-t border-line pt-7 text-[17px] text-body-3">
              No upcoming events are scheduled right now.
            </p>
          )}
        </div>
      </section>

      <section id="all-events" className="pb-32">
        <div className="wrap">
          <h2 className={cn(h2, "mb-10")}>
            Past Events <span className="text-mute">({past.length})</span>
          </h2>
          {past.length > 0 ? (
            <div className="border-t border-line">
              {past.map((e) => {
                const virtual = /virtual/i.test(e.category ?? "");
                const where = [eventPlace(e.location, e.category), virtual ? "" : typeLabel(e.category)]
                  .filter(Boolean)
                  .join(" · ");
                return (
                  <div
                    key={e.id}
                    className="cell grid grid-cols-[110px_minmax(0,1fr)_minmax(0,0.6fr)_auto] items-center gap-6 border-b border-line bg-white px-2 py-[22px] max-[720px]:grid-cols-[72px_1fr]"
                  >
                    <span className="text-[28px] leading-none tracking-[-0.03em]">
                      {e.day} <span className="text-[14px] tracking-[0.08em] text-mute">{e.month}</span>
                    </span>
                    <h3 className="m-0 text-[17px] font-medium leading-[1.35] tracking-[-0.01em]">{e.title}</h3>
                    <span className="text-[14px] text-body-3 max-[720px]:col-start-2">{where}</span>
                    <SmartLink
                      href={e.url}
                      className="pill hit justify-self-start whitespace-nowrap rounded-full border border-ink px-4 py-2 text-[13.5px] font-medium hover:text-primary-deep max-[720px]:col-start-2"
                    >
                      View Event<span className="sr-only">: {e.title}</span>
                    </SmartLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="m-0 border-t border-line pt-7 text-[17px] text-body-3">No past events to show yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
