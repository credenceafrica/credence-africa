"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  interest: z.string().min(1, "Area of interest is required"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export const consultationInterests = [
  { value: "capital-raising", label: "Capital Raising & Investment Structuring" },
  { value: "events", label: "Credence Engage" },
  { value: "institute", label: "Credence Institute: Executive Education" },
  { value: "public-affairs", label: "Public Affairs & Policy Advisory" },
  { value: "research", label: "Research & Market Intelligence" },
  { value: "trade-growth", label: "Trade & Growth Advisory" },
  { value: "other", label: "Other / Not sure yet" },
];

const fieldClass =
  "h-12 rounded-none border-foreground/20 bg-white text-base text-foreground placeholder:text-foreground/55 focus-visible:ring-primary";

export function ConsultationForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
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
      await addDoc(collection(firestore, "consultations"), {
        ...data,
        createdAt: serverTimestamp(),
      });
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
                  <Input placeholder="Your organization" className={fieldClass} {...field} />
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
          {loading ? "Sending…" : "Submit request"}
          {!loading && <ArrowRight className="ml-2 size-5" aria-hidden="true" />}
        </Button>
      </form>
    </Form>
  );
}
