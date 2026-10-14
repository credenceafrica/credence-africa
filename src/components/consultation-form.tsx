"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Arrow } from "@/components/site/primitives";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase";
import { track } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  consultationInterests,
  consultationSchema,
  type ConsultationValues,
} from "@/lib/consultation";

const countries = ["Kenya", "Nigeria", "South Africa", "Uganda", "Tanzania", "Rwanda", "Ghana", "Other"];

const inputs = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone number (optional)", type: "tel", autoComplete: "tel" },
  { name: "company", label: "Company (optional)", type: "text", autoComplete: "organization" },
] as const;

const item = "flex flex-col space-y-0";
const label = "text-[13px] font-normal leading-[1.6] text-body-dark";

/**
 * The consultation request form: underlined fields for a dark ground. The Consult page makes it
 * the design's ink panel through `id`, `className` and a heading passed as `children`; the dialogs
 * render it bare on their ink content.
 */
export function ConsultationForm({
  defaultInterest = "",
  onSuccess,
  id,
  className,
  children,
}: {
  defaultInterest?: string;
  onSuccess?: () => void;
  id?: string;
  className?: string;
  /** Rendered first, full width, inside the form grid. */
  children?: ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "Kenya",
      interest: defaultInterest,
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: ConsultationValues) => {
    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your request did not send. Please try again or email us directly.",
      });
      return;
    }
    setLoading(true);
    try {
      const submission = await addDoc(collection(firestore, "consultations"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      // Also send it to the Power Automate flow. Best-effort by design: not awaited,
      // so it never delays or fails the request, and keepalive lets it finish even if
      // the dialog closes or the visitor leaves the page straight away.
      void fetch("/api/consultations/forward", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submissionId: submission.id, pageUrl: window.location.href }),
        keepalive: true,
      }).catch(() => {});
      track("generate_lead", { lead_source: "consultation", interest: data.interest });
      toast({
        title: "Request sent",
        description: "Thank you. A senior advisor will be in touch within 24 hours.",
      });
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your request did not send. Please try again or email us directly.",
      });
      console.error("Error submitting form: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid grid-cols-2 gap-x-7 gap-y-[22px]", className)}
      >
        {children}
        <div className="col-span-full grid grid-cols-2 gap-x-7 gap-y-[22px] max-[720px]:grid-cols-1">
          {inputs.map((f) => (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name}
              render={({ field }) => (
                <FormItem className={item}>
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
            name="country"
            render={({ field }) => (
              <FormItem className={item}>
                <FormLabel className={label}>Country</FormLabel>
                <FormControl>
                  <select className="fld" {...field}>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem className={item}>
                <FormLabel className={label}>Area of interest</FormLabel>
                <FormControl>
                  <select className="fld" {...field}>
                    <option value="">Select an area</option>
                    <optgroup label="Advisory">
                      {consultationInterests
                        .filter((i) => i.group)
                        .map((i) => (
                          <option key={i.value} value={i.value}>
                            {i.label}
                          </option>
                        ))}
                    </optgroup>
                    {consultationInterests
                      .filter((i) => !i.group)
                      .map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                  </select>
                </FormControl>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className={cn(item, "col-span-full")}>
              <FormLabel className={label}>Message</FormLabel>
              <FormControl>
                <textarea rows={5} className="fld" {...field} />
              </FormControl>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <label className="col-span-full flex cursor-pointer items-start gap-3 text-[14px] text-body-dark">
          <input
            type="checkbox"
            className="mt-0.5 size-[18px] shrink-0 accent-primary"
            {...form.register("newsletter")}
          />
          Optional: send me occasional Credence Africa insights and event updates. This is separate from our
          response to your enquiry.
        </label>
        <div className="col-span-full mt-2 flex flex-wrap items-center justify-between gap-4">
          <p className="m-0 text-[13.5px] text-body-dark">
            We use these details to respond to your enquiry. See our{" "}
            <Link href="/privacy-policy" className="text-white underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={loading}
            className="pill inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14.5px] font-semibold text-ink disabled:pointer-events-none disabled:opacity-50"
          >
            {loading ? "Sending…" : "Submit Request"}
            {!loading && <Arrow />}
          </button>
        </div>
      </form>
    </Form>
  );
}
