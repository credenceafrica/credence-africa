"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Minus,
  Plus,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import {
  Ticket,
  EventDetail,
  createEventRegistration,
  sendRegistrationEmail,
} from "@/lib/external-data";
import { payWithPaystack, PaystackClosedError } from "@/lib/paystack";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: EventDetail;
  ticket: Ticket | null;
}

const CURRENCY = "KES";

type Stage = "form" | "paying" | "processing" | "success";

export function EventCheckoutDialog({ open, onOpenChange, event, ticket }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [stage, setStage] = useState<Stage>("form");
  const [error, setError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    ticketNumber: string;
    ticketUrl: string;
  } | null>(null);

  const submitting = stage === "paying" || stage === "processing";

  const minQty = ticket ? Math.max(1, ticket.minBuyLimit || 1) : 1;
  const maxQty = ticket
    ? Math.max(minQty, Math.min(ticket.maxBuyLimit || 10, ticket.quantity || 0))
    : 1;

  useEffect(() => {
    if (ticket) {
      setQuantity(Math.max(1, ticket.minBuyLimit || 1));
    }
  }, [ticket]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setInterest("");
        setCompanyName("");
        setCompanyDescription("");
        setError(null);
        setSuccessInfo(null);
        setStage("form");
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!ticket) return null;

  const category = String(ticket.category).toLowerCase();
  const isExhibitor = category === "exhibitor";
  const total = ticket.price * quantity;

  function decrement() {
    setQuantity((q) => Math.max(minQty, q - 1));
  }

  function increment() {
    setQuantity((q) => Math.min(maxQty, q + 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ticket) return;
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please complete all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (isExhibitor && !companyName.trim()) {
      setError("Company name is required for exhibitor tickets.");
      return;
    }
    if (quantity < minQty || quantity > maxQty) {
      setError(`Please select between ${minQty} and ${maxQty} tickets.`);
      return;
    }

    try {
      let paystackReference: string | undefined;
      if (total > 0) {
        setStage("paying");
        const response = await payWithPaystack({
          email,
          amount: total * 100,
          currency: CURRENCY,
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || undefined,
          phone,
          metadata: {
            eventId: event.id,
            eventName: event.name,
            ticketId: ticket.id,
            ticketName: ticket.name,
            ticketCategory: ticket.category,
            quantity,
          },
        });
        paystackReference = response.reference;
      }

      setStage("processing");
      const registration = await createEventRegistration(event.id, {
        name: name.trim(),
        email,
        phone: phone.trim(),
        ticketId: ticket.id,
        ticketName: ticket.name,
        ticketCategory: String(ticket.category),
        interest: interest.trim() || null,
        exhibitorCompanyName: isExhibitor ? companyName.trim() : null,
        exhibitorDescription: isExhibitor ? companyDescription.trim() : null,
        quantity,
        unitPrice: ticket.price,
        totalAmount: total,
        currency: CURRENCY,
        paystackReference,
      });

      sendRegistrationEmail({
        email,
        name: name.trim(),
        eventName: event.name,
        ticketNumber: registration.ticketNumber,
        eventBannerUrl: event.thumbnail,
        ticketUrl: registration.ticketUrl,
        startDate: event.startDate,
        startTime: event.startTime,
      });

      setSuccessInfo({
        ticketNumber: registration.ticketNumber,
        ticketUrl: registration.ticketUrl,
      });
      setStage("success");
    } catch (err) {
      if (err instanceof PaystackClosedError) {
        setError("Payment was cancelled before completing.");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
      setStage("form");
    }
  }

  const dialogOpen = open && stage !== "paying";

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(next) => {
        if (submitting) return;
        onOpenChange(next);
      }}
    >
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {stage === "success" && successInfo ? (
          <div className="space-y-4 text-center py-4">
            <CheckCircle2 className="size-14 text-green-600 mx-auto" />
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-center">Registration Confirmed</DialogTitle>
              <DialogDescription className="text-center">
                Your {ticket.name} ticket for {event.name} is confirmed. A receipt has been sent to {email}.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted/50 p-4 rounded-md space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Ticket Number</p>
              <p className="font-bold text-lg tracking-wider">{successInfo.ticketNumber}</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full h-12 font-semibold">
                <a href={successInfo.ticketUrl} target="_blank" rel="noopener noreferrer">
                  View Ticket <ExternalLink className="ml-2 size-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full h-12" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          </div>
        ) : stage === "processing" ? (
          <div className="space-y-4 text-center py-10">
            <Loader2 className="size-14 text-primary mx-auto animate-spin" />
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-center">Confirming Your Registration</DialogTitle>
              <DialogDescription className="text-center">
                Payment received. We're finalizing your ticket and sending your receipt — this will only take a moment.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <DialogHeader>
              <DialogTitle>Get {ticket.name} Ticket</DialogTitle>
              <DialogDescription className="capitalize">
                {String(ticket.category)} · {total > 0 ? `${CURRENCY} ${ticket.price.toLocaleString()} each` : "Free"}
              </DialogDescription>
            </DialogHeader>

            {maxQty > 1 && (
              <div className="space-y-2">
                <Label>Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={decrement}
                    disabled={quantity <= minQty || submitting}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={increment}
                    disabled={quantity >= maxQty || submitting}
                  >
                    <Plus className="size-4" />
                  </Button>
                  <span className="text-xs text-muted-foreground ml-2">
                    Min {minQty} · Max {maxQty}
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={submitting}
                required
              />
            </div>

            {isExhibitor ? (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="companyName">Company name</Label>
                  <Input
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    disabled={submitting}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="companyDescription">Company description</Label>
                  <Textarea
                    id="companyDescription"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    disabled={submitting}
                    rows={3}
                  />
                </div>
              </>
            ) : (
              <div className="space-y-1.5">
                <Label htmlFor="interest">Areas of interest (optional)</Label>
                <Input
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  disabled={submitting}
                  placeholder="What do you hope to get out of this event?"
                />
              </div>
            )}

            {error && (
              <div className="flex items-start gap-2 bg-destructive/10 text-destructive p-3 rounded text-sm">
                <AlertCircle className="size-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="border-t pt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-xl font-bold">
                {total > 0 ? `${CURRENCY} ${total.toLocaleString()}` : "Free"}
              </span>
            </div>

            <Button
              type="submit"
              className="w-full h-12 font-semibold bg-primary hover:bg-primary/90 text-white"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Processing…
                </>
              ) : total > 0 ? (
                "Pay with Paystack"
              ) : (
                "Complete Registration"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
