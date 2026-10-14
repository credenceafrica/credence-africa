"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Hero } from "@/components/site/hero";
import { Arrow, num } from "@/components/site/primitives";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase";
import { track } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const featuredStudies = [
  { tag: "Capital Raising", t: "Unlocking Venture Capital for a Kenyan Mobility Startup" },
  { tag: "Structuring", t: "Cross-Border IP Structuring for a Creative Tech Company" },
  { tag: "Tax", t: "Tax Optimization for an Agro-Export Business" },
  { tag: "Regulatory", t: "Regulatory Licensing for a Pan-African Fintech Platform" },
];

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  position: z.string().min(1, "Position is required"),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal('')),
  organization: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const inputs = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "position", label: "Position / Title", type: "text", autoComplete: "organization-title" },
  { name: "linkedin", label: "LinkedIn Profile URL", type: "url", autoComplete: "url" },
  { name: "organization", label: "Organisation / Company Name (Optional)", type: "text", autoComplete: "organization" },
] as const;

const item = "flex flex-col space-y-0";
const label = "text-[13px] font-normal leading-[1.6] text-body-dark";
const h2 = "h2 mt-0 text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]";

export default function CaseStudiesPage() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            position: "",
            linkedin: "",
            organization: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        try {
            if (!firestore) throw new Error("Firestore is not configured");
            await addDoc(collection(firestore, 'caseStudyAccessRequests'), {
                ...data,
                createdAt: serverTimestamp(),
            });
            track("generate_lead", { lead_source: "case_study_reports" });
            toast({
                title: "Request Sent!",
                description: "Thank you. We have received your request and will be in touch shortly.",
            });
            form.reset();
        } catch (error) {
             toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again.",
            });
            console.error("Error submitting form: ", error);
        } finally {
            setLoading(false);
        }
    };


  return (
    <>
      <Hero
        crumbs={[{ label: "Case Studies" }]}
        title="Strategy That Works. Results That Scale."
        intro="We have supported businesses, governments, cooperatives and digital ventures with practical advisory that can be put into action."
        btn1={{ label: "Book a Consultation", href: "/consult" }}
      />

      <section className="py-32">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">Case Studies</div>
          <h2 className={`${h2} mb-14`}>Featured case studies</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7">
            {featuredStudies.map((c, i) => (
              <div key={c.t} className="flex flex-col gap-4">
                <div className="ph relative h-60">
                  <span className="absolute bottom-2.5 left-2.5 flex gap-1">
                    <span className="bg-white px-2 py-[3px] text-[11.5px] text-ink">{num(i)}</span>
                    <span className="bg-primary px-2 py-[3px] text-[11.5px] text-ink">{c.tag}</span>
                  </span>
                </div>
                <h3 className="m-0 text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">{c.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-32 text-white">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-14">
          <div>
            <div className="eb mb-[18px] text-[13.5px]">Case Studies</div>
            <h2 className={`${h2} mb-[18px]`}>Access full reports</h2>
            <p className="m-0 max-w-[460px] text-[16.5px] text-body-dark">
              Complete the form to download in-depth case studies and access our full library of reports on strategy and
              execution in African markets.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-x-7 gap-y-[22px] border border-line-dark p-10"
            >
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
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className={`${item} col-span-full`}>
                    <FormLabel className={label}>Message / Specific Areas of Interest (Optional)</FormLabel>
                    <FormControl>
                      <textarea rows={4} className="fld" {...field} />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
              <div className="col-span-full flex flex-wrap items-center justify-between gap-4">
                <p className="m-0 text-[13.5px] text-body-dark">
                  By submitting, you agree to our{" "}
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
                  {loading ? "Submitting..." : "Request Access"}
                  {!loading && <Arrow />}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
