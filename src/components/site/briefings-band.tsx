"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { briefingSchema, briefingSectors, subscriberId, type BriefingValues } from "@/lib/briefings";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Arrow, phoneFull } from "./primitives";

const blurb = "Receive research and analysis to inform your next decision.";
const label = "text-[11.5px] font-normal leading-[1.6] text-body-dark";
const check = "size-[18px] shrink-0 accent-primary";
const inputs = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
] as const;

function BriefingsForm() {
  const [done, setDone] = useState(false);
  const { toast } = useToast();
  const form = useForm<BriefingValues>({
    resolver: zodResolver(briefingSchema),
    defaultValues: { name: "", email: "", phone: "", sectors: [], otherSector: "", subscribe: false, website: "" },
  });
  const loading = form.formState.isSubmitting;

  const onSubmit = async ({ website, subscribe, otherSector, ...person }: BriefingValues) => {
    // Only bots fill the hidden field. They see the normal answer and nothing is saved.
    if (website) return setDone(true);
    try {
      if (!firestore) throw new Error("Firebase is not configured");
      const details = { ...person, otherSector: person.sectors.includes("Other") ? otherSector : "" };
      const now = serverTimestamp();
      await addDoc(collection(firestore, "briefingLeads"), { ...details, subscribed: subscribe, createdAt: now });
      if (subscribe) {
        const entry = { ...details, status: "subscribed", token: crypto.randomUUID(), createdAt: now, subscribedAt: now };
        await setDoc(doc(firestore, "briefingSubscribers", await subscriberId(person.email)), entry).catch((error) => {
          // The rules only let visitors create an entry, so a refusal here means this address is already on the list.
          if (error.code !== "permission-denied") throw error;
        });
      }
      track("generate_lead", { lead_source: "briefings", subscribed: subscribe });
      setDone(true);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: `Your registration did not go through. Please try again or email ${contact.email}.`,
      });
    }
  };

  if (done) {
    return (
      <p role="status" className="m-0 py-6 text-[18px] leading-[1.4] text-white">
        Thank you. You are registered for Credence Intelligence briefings.
      </p>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid grid-cols-2 gap-x-7 gap-y-[22px] max-[720px]:grid-cols-1">
        {inputs.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-0">
                <FormLabel className={label}>{f.label}</FormLabel>
                <FormControl>
                  <input type={f.type} autoComplete={f.autoComplete} className="fld" {...field} />
                </FormControl>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-full flex flex-col space-y-0">
              <FormLabel className={label}>Phone Number (optional, starting with your country code)</FormLabel>
              <FormControl>
                <input type="tel" autoComplete="tel" placeholder="+254 712 345 678" className="fld placeholder:text-mute" {...field} />
              </FormControl>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sectors"
          render={({ field }) => (
            <FormItem className="col-span-full space-y-0">
              <fieldset className="m-0 border-0 p-0">
                <legend className={cn(label, "mb-2 p-0")}>Sector or Area of Work</legend>
                <div className="grid grid-cols-3 gap-x-7 max-[720px]:grid-cols-2">
                  {briefingSectors.map((sector) => (
                    <label key={sector} className="flex min-h-11 cursor-pointer items-center gap-3 text-[14.5px] text-white">
                      <input
                        type="checkbox"
                        className={check}
                        checked={field.value.includes(sector)}
                        onChange={(e) => field.onChange(e.target.checked ? [...field.value, sector] : field.value.filter((s) => s !== sector))}
                      />
                      {sector}
                    </label>
                  ))}
                </div>
              </fieldset>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        {form.watch("sectors").includes("Other") && (
          <FormField
            control={form.control}
            name="otherSector"
            render={({ field }) => (
              <FormItem className="col-span-full flex flex-col space-y-0">
                <FormLabel className={label}>Your sector or area of work (optional)</FormLabel>
                <FormControl>
                  <input type="text" className="fld" {...field} />
                </FormControl>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
        )}
        <label className="col-span-full flex cursor-pointer items-start gap-3 text-[14px] text-white">
          <input type="checkbox" className={cn(check, "mt-0.5")} {...form.register("subscribe")} />
          I would like to receive Credence Intelligence briefings by email.
        </label>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" {...form.register("website")} />
        <p className="col-span-full m-0 text-[12px] text-body-dark">
          We use these details to register your interest in Credence Intelligence briefings. See our{" "}
          <Link href="/privacy-policy" target="_blank" className="text-white underline hover:text-primary">
            Privacy Policy
          </Link>
          . You can unsubscribe at any time using the link in any briefing or by{" "}
          <a href={`mailto:${contact.email}?subject=Unsubscribe%20from%20Credence%20Intelligence%20briefings`} className="text-white underline hover:text-primary">
            emailing {contact.email}
          </a>
          .
        </p>
        <div className="col-span-full mt-2">
          <button
            type="submit"
            disabled={loading}
            className={cn("pill inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[13px] font-semibold text-ink disabled:pointer-events-none disabled:opacity-50", phoneFull)}
          >
            {loading ? "Registering…" : "Register for Briefings"}
            {!loading && <Arrow />}
          </button>
        </div>
      </form>
    </Form>
  );
}

/** Ink band with the sign-up for Credence Intelligence briefings. */
export function BriefingsBand() {
  const [open, setOpen] = useState(false);
  return (
    <section id="briefings" className="on-dark bg-ink py-28 text-white">
      <div className="wrap grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-7">
        <h2 className="h2 m-0 text-balance text-[clamp(29px,2.88vw,41.5px)] font-normal leading-[1.1] tracking-[-0.035em]">Get Credence Intelligence Briefings</h2>
        <div className="flex max-w-[720px] flex-col items-start gap-[18px]">
          <p className="m-0 text-[15.5px] text-body-dark">{blurb}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn("pill mt-2.5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-[22px] py-[13px] text-[13px] font-semibold text-ink", phoneFull)}
          >
            Register for Briefings
            <Arrow />
          </button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none border-line-dark bg-ink text-white sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-normal text-white">Credence Intelligence Briefings</DialogTitle>
            <DialogDescription className="text-body-dark">{blurb}</DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <BriefingsForm />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
