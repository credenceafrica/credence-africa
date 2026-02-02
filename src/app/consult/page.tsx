
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
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
            await addDoc(collection(db, 'consultations'), {
                ...data,
                createdAt: serverTimestamp(),
            });
            toast({
                title: "Request Sent!",
                description: "Thank you for your consultation request. We will be in touch shortly.",
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
    <div className="py-16 lg:py-24 mx-auto lg:w-85">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Book a Consultation</h1>
          <p className="text-xl text-muted-foreground">Let’s discuss how we can help you navigate Africa's opportunity zones.</p>
          <p>A senior advisor will contact you within 24 hours to schedule a strategy call. For direct inquiries, feel free to reach out to us.</p>
          <div className="space-y-3">
             <p className="flex items-center gap-3"><Mail className="size-5 text-primary" /> <a href="mailto:connect@credence.africa" className="hover:underline">connect@credence.africa</a></p>
             <p className="flex items-center gap-3"><Phone className="size-5 text-primary" /> <a href="tel:+254719468240" className="hover:underline">+254 719 468 240</a></p>
          </div>
        </div>
        
        <Card className="p-8 shadow-lg">
          <CardContent className="p-0">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
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
                                <Input placeholder="+254 712 345678" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              </div>
               <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company (optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Company" {...field} />
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
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input placeholder="Kenya" {...field} />
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
                            <FormLabel>Area of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="capital-raising">Capital Raising & Blended Finance</SelectItem>
                                    <SelectItem value="public-affairs">Public Affairs & Advocacy</SelectItem>
                                    <SelectItem value="trade-investment">Trade & Investment Structuring</SelectItem>
                                    <SelectItem value="enterprise-architecture">Enterprise Architecture & Transformation</SelectItem>
                                    <SelectItem value="ip-commercialization">IP Commercialization & Talent Strategy</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                 <Textarea placeholder="Tell us about your project or challenge." rows={4} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
