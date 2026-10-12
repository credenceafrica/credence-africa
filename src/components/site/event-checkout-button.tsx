"use client";

import { useState, type ReactNode } from "react";
import { EventCheckoutDialog } from "@/components/event-checkout-dialog";
import type { EventDetail, Ticket } from "@/lib/external-data";

/** Opens the on-site checkout (Paystack for paid tickets) for one ticket. */
export function EventCheckoutButton({
  event,
  ticket,
  className,
  children,
}: {
  event: EventDetail;
  ticket: Ticket;
  className?: string;
  children: ReactNode;
}) {
  const [checkoutTicket, setCheckoutTicket] = useState<Ticket | null>(null);

  return (
    <>
      <button type="button" onClick={() => setCheckoutTicket(ticket)} className={className}>
        {children}
      </button>
      <EventCheckoutDialog
        open={!!checkoutTicket}
        onOpenChange={(next) => {
          if (!next) setCheckoutTicket(null);
        }}
        event={event}
        ticket={checkoutTicket}
      />
    </>
  );
}
