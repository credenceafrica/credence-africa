"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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

const interests = [
  { value: "capital-raising", label: "Capital Raising & Investment Structuring" },
  { value: "trade-growth", label: "Trade & Growth Advisory" },
  { value: "public-affairs", label: "Public Affairs & Policy Advisory" },
  { value: "institute", label: "Credence Institute: Executive Education" },
  { value: "research", label: "Research & Market Intelligence" },
  { value: "events", label: "Events, Community & Convenings" },
  { value: "other", label: "Other / Not sure yet" },
];

const steps = [
  "Send us the brief: tell us the mandate and where you are.",
  "A senior advisor reviews it and responds within 24 hours.",
  "We map the fastest credible path to execution on a strategy call.",
];

const fieldClass =
  "h-12 rounded-none border-foreground/20 bg-white text-base text-foreground placeholder:text-foreground/55 focus-visible:ring-primary";

export default function ConsultationPage() {
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
    <div className="overflow-x-hidden">
      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-background [font-size:clamp(2.5rem,6vw,4.5rem)]">
              Book a <span className="text-primary">Consultation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Tell us the mandate. A senior advisor will map the fastest credible path to execution:
              across capital, markets, policy and capability.
            </p>
          </div>
        </div>
      </section>

      {/* Form band: light */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left rail: how to reach us + what happens next */}
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Talk to a senior advisor
              </h2>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-foreground/75">
                Reach us directly or send the form and we will come to you.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:connect@credence.africa"
                  className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">connect@credence.africa</span>
                </a>
                <a
                  href="tel:+254719468240"
                  className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">+254 719 468 240</span>
                </a>
                <p className="flex items-start gap-3 text-foreground">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">Applewood Adams, Ngong Road, Nairobi</span>
                </p>
              </div>

              <div className="mt-10 border-t border-foreground/12 pt-8">
                <h3 className="text-lg font-normal text-foreground">What happens next</h3>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="shrink-0 text-xl font-normal tabular-nums leading-none text-primary"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: the form */}
            <div className="lg:col-span-7">
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
                            {interests.map((item) => (
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
                    className="h-14 w-full rounded-none border-none bg-primary text-base font-medium text-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
                  >
                    {loading ? "Sending…" : "Submit request"}
                    {!loading && <ArrowRight className="ml-2 size-5" aria-hidden="true" />}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
