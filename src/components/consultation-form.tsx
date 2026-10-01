"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
  consultationInterests,
  consultationSchema,
  type ConsultationValues,
} from "@/lib/consultation";

const fieldClass =
  "h-12 rounded-none border-foreground/20 bg-white text-base text-foreground placeholder:text-foreground/55 focus-visible:ring-primary";

export function ConsultationForm({
  defaultInterest = "",
  onSuccess,
}: {
  defaultInterest?: string;
  onSuccess?: () => void;
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
      country: "",
      interest: defaultInterest,
      message: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" className={fieldClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="+254 712 345678" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Company (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your organisation" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Kenya" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Area of interest</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-none">
                  {consultationInterests.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your mandate, project or challenge."
                  rows={5}
                  className="resize-none rounded-none border-foreground/20 bg-white text-base text-foreground placeholder:text-foreground/55 focus-visible:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="h-14 w-full rounded-none border-none bg-primary text-base font-light text-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
        >
          {loading ? "Sending…" : "Submit Request"}
          {!loading && <ArrowRight className="ml-2 size-5" aria-hidden="true" />}
        </Button>

        <p className="text-sm font-light leading-relaxed text-foreground/65">
          By submitting this form you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="font-normal text-foreground underline decoration-primary decoration-1 underline-offset-2 hover:decoration-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </Form>
  );
}
