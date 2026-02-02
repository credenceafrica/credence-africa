
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const featuredStudies = [
  "Unlocking Venture Capital for a Kenyan Mobility Startup",
  "Cross-Border IP Structuring for a Creative Tech Company",
  "Tax Optimization for an Agro-Export Business",
  "Regulatory Licensing for a Pan-African Fintech Platform",
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
            await addDoc(collection(db, 'caseStudyAccessRequests'), {
                ...data,
                createdAt: serverTimestamp(),
            });
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
    <div className="py-16 lg:py-24 space-y-24 mx-auto lg:w-85">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Strategy That Works. Results That Scale.</p>
        <p className="mt-4 max-w-4xl mx-auto">Explore how Credence Africa has supported businesses, governments, cooperatives, and digital ventures with practical, execution-ready advisory.</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Case Studies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredStudies.map(study => (
            <Card key={study} className="bg-secondary">
              <div className="p-6">
                <p className="font-semibold">{study}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Access Full Reports</h2>
            <p className="text-muted-foreground">Complete the form to unlock in-depth case study downloads and gain access to our full library of reports on strategy and execution in African markets.</p>
        </div>
        <Card className="p-8">
            <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="+254 123 456789" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                             <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
             <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position / Title</FormLabel>
                            <FormControl>
                                <Input placeholder="CEO" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>LinkedIn Profile URL</FormLabel>
                            <FormControl>
                                <Input placeholder="linkedin.com/in/..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
             <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization / Company Name (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Company Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
             <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message / Specific Areas of Interest (Optional)</FormLabel>
                            <FormControl>
                                <Textarea id="message" placeholder="I'm interested in..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Submitting...' : 'Request Access'}
            </Button>
          </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
