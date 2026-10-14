import type { PortfolioEvent, Ticket } from "@/lib/external-data";

/** Display rules shared by the events listing and the event page. */

/** The description's first sentence is the summary; the rest reads as paragraphs. */
export function splitDescription(text = "") {
  const paras = text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const first = paras[0] ?? "";
  const summary = first.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? first;
  const rest = first.slice(summary.length).trim();
  return { summary, about: rest ? [rest, ...paras.slice(1)] : paras.slice(1) };
}

/** Engage stores some event types in lower case ("networking"). */
export const typeLabel = (type?: string) => (type ? type.charAt(0).toUpperCase() + type.slice(1) : "");

/** The venue, or "Virtual" for online events. `kind` is the event kind or type. */
export const eventPlace = (location?: string, kind?: string) =>
  location?.trim() || (/virtual/i.test(kind ?? "") ? "Virtual" : "");

/** True once the UTC day of `date` is over. Events without a readable date stay upcoming. */
export function isPastDate(date?: string) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return !!date && new Date(date).getTime() < today.getTime();
}

/** Upcoming soonest first, past most recent first (the portfolio arrives oldest first). */
export function splitPortfolio(events: PortfolioEvent[]) {
  return {
    upcoming: events.filter((e) => !isPastDate(e.startDate)),
    past: events.filter((e) => isPastDate(e.startDate)).reverse(),
  };
}

/** The design labels paid events "Get Ticket" and free ones "Register Now". */
export const ctaLabel = (tickets: Ticket[]) => (tickets.some((t) => t.price > 0) ? "Get Ticket" : "Register Now");
