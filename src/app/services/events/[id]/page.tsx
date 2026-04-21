"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Share2,
  Ticket as TicketIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  EventDetail,
  getEventById,
  getEventTickets,
  Ticket,
} from "@/lib/external-data";
import { EventCheckoutDialog } from "@/components/event-checkout-dialog";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDateRange(start?: string, end?: string): string {
  if (!start) return "Date TBA";
  const startDate = new Date(start);
  if (isNaN(startDate.getTime())) return "Date TBA";
  const startFormatted = dateFormatter.format(startDate);
  if (!end || end === start) return startFormatted;
  const endDate = new Date(end);
  if (isNaN(endDate.getTime())) return startFormatted;
  return `${startFormatted} - ${dateFormatter.format(endDate)}`;
}

function formatTimeRange(start?: string, end?: string): string | null {
  if (!start && !end) return null;
  if (start && end) return `${start} - ${end}`;
  return start || end || null;
}

function isRegistrationOpen(endDate?: string): boolean {
  if (!endDate) return true;
  const end = new Date(endDate);
  if (isNaN(end.getTime())) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return end.getTime() >= today.getTime();
}

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

function groupTicketsByCategory(tickets: Ticket[]): { category: string; tickets: Ticket[] }[] {
  const order = ["attendee", "exhibitor", "sponsor", "corporate", "podcast", "webinar"];
  const map = new Map<string, Ticket[]>();
  for (const t of tickets) {
    const key = String(t.category).toLowerCase();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(t);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => {
      const ai = order.indexOf(a);
      const bi = order.indexOf(b);
      if (ai === -1 && bi === -1) return a.localeCompare(b);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    })
    .map(([category, tickets]) => ({ category, tickets }));
}

export default function EventDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [shared, setShared] = useState(false);
  const [checkoutTicket, setCheckoutTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    if (!id) return;
    async function fetchAll() {
      try {
        const [eventData, ticketData] = await Promise.all([
          getEventById(id),
          getEventTickets(id),
        ]);
        console.log(ticketData);
        setEvent(eventData);
        setTickets(ticketData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
        setTicketsLoading(false);
      }
    }
    fetchAll();
  }, [id]);

  async function handleShare() {
    if (typeof window === "undefined") return;
    const url = event?.shortLink
      ? `${window.location.origin}/e/${event.shortLink}`
      : window.location.href;
    const title = event?.name || "Credence Event";
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    } catch (e) {
      console.error(e);
    }
  }

  if (loading) {
    return (
      <div className="py-24 container mx-auto px-4">
        <div className="animate-pulse space-y-6 max-w-4xl">
          <div className="h-96 bg-muted rounded" />
          <div className="h-8 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="py-24 container mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-semibold">Event not found</h1>
        <p className="text-muted-foreground font-light">
          The event you are looking for is no longer available.
        </p>
        <Button asChild className="rounded-none">
          <Link href="/services/events#portfolio">
            <ArrowLeft className="mr-2 size-4" /> Back to Events
          </Link>
        </Button>
      </div>
    );
  }

  const dateRange = formatDateRange(event.startDate, event.endDate);
  const timeRange = formatTimeRange(event.startTime, event.endTime);
  const registrationOpen = isRegistrationOpen(event.endDate);
  const ticketGroups = groupTicketsByCategory(tickets);
  const hasTickets = tickets.length > 0;

  function scrollToTickets() {
    const el = document.getElementById("tickets");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          {event.thumbnail ? (
            <Image
              src={event.thumbnail}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
          <div className="max-w-4xl space-y-6 text-white">
            {event.eventType && (
              <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-md">
                {event.eventType}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {event.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                <span>{dateRange}</span>
              </div>
              {timeRange && (
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-primary" />
                  <span>{timeRange}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold inline-block border-b-2 border-primary pb-2">
                  About the Event
                </h2>
                <div className="text-foreground/80 font-light leading-relaxed whitespace-pre-line text-base">
                  {event.description || "More details about this event will be shared soon."}
                </div>
              </div>

              <div id="tickets" className="space-y-6 scroll-mt-24">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-semibold inline-block border-b-2 border-primary pb-2">
                    Tickets
                  </h2>
                  <p className="text-muted-foreground font-light text-sm">
                    Choose the ticket type that best fits your engagement with {event.name}.
                  </p>
                </div>

                {ticketsLoading ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="bg-white p-6 shadow-sm space-y-4 animate-pulse">
                        <div className="h-4 bg-muted rounded w-20" />
                        <div className="h-6 bg-muted rounded w-3/4" />
                        <div className="h-8 bg-muted rounded w-1/2" />
                        <div className="h-10 bg-muted rounded w-full" />
                      </div>
                    ))}
                  </div>
                ) : !hasTickets ? (
                  <div className="bg-white p-8 text-center shadow-sm border">
                    <p className="text-muted-foreground font-light">
                      Ticket sales for this event have not been set up yet. Please check back soon.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {ticketGroups.map((group) => (
                      <div key={group.category} className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                          {group.category}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {group.tickets.map((ticket) => {
                            const saleStatus = isTicketOnSale(ticket);
                            const canBuy = saleStatus.onSale && registrationOpen;
                            return (
                              <Card
                                key={ticket.id}
                                className="rounded-lg border shadow-sm flex flex-col p-6 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <h4 className="text-lg font-semibold text-foreground">{ticket.name}</h4>
                                  <span className="bg-muted text-foreground/70 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {String(ticket.category)}
                                  </span>
                                </div>

                                <div className="mt-3">
                                  {ticket.price > 0 ? (
                                    <span className="text-2xl font-bold text-foreground">
                                      KES {ticket.price.toLocaleString()}
                                    </span>
                                  ) : (
                                    <span className="text-2xl font-bold text-foreground">Free</span>
                                  )}
                                </div>

                                {ticket.features?.length > 0 && (
                                  <ul className="mt-4 space-y-2">
                                    {ticket.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                <div className="mt-auto pt-6">
                                  <Button
                                    type="button"
                                    onClick={() => setCheckoutTicket(ticket)}
                                    disabled={!canBuy}
                                    className="w-full h-11 font-semibold bg-primary hover:bg-primary/90 text-white disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                                  >
                                    {canBuy ? "Get Ticket" : saleStatus.reason || "Unavailable"}
                                  </Button>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/5">
                  <Link href="/services/events#portfolio">
                    <ArrowLeft className="mr-2 size-4" /> Back to Portfolio
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <Card className="rounded-lg overflow-hidden shadow-md border lg:sticky lg:top-24">
                <div className={`p-6 text-center text-white ${registrationOpen ? "bg-primary" : "bg-muted-foreground"}`}>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">
                    Event Access
                  </p>
                  <p className="text-xl font-bold">
                    {registrationOpen ? "Open for Registration" : "Registration Closed"}
                  </p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="size-10 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0">
                      <Calendar className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">Date & Time</p>
                      <p className="text-sm text-muted-foreground">{dateRange}</p>
                      {timeRange && <p className="text-sm text-muted-foreground">{timeRange}</p>}
                    </div>
                  </div>

                  {event.location && (
                    <div className="flex gap-4">
                      <div className="size-10 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0">
                        <MapPin className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground break-words">{event.location}</p>
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-6 space-y-3">
                    {registrationOpen ? (
                      <Button
                        type="button"
                        onClick={scrollToTickets}
                        className="w-full h-12 font-semibold bg-primary hover:bg-primary/90 text-white rounded-md"
                      >
                        <TicketIcon className="mr-2 size-4" />
                        Get Tickets
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="w-full h-12 font-semibold bg-primary/40 text-white rounded-md cursor-not-allowed"
                      >
                        Registration Closed
                      </Button>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 font-semibold rounded-md"
                      onClick={handleShare}
                    >
                      <Share2 className="mr-2 size-4" />
                      {shared ? "Link Copied" : "Spread the Word"}
                    </Button>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <EventCheckoutDialog
        open={!!checkoutTicket}
        onOpenChange={(next) => {
          if (!next) setCheckoutTicket(null);
        }}
        event={event}
        ticket={checkoutTicket}
      />
    </div>
  );
}
