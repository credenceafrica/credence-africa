
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowUpRight,
  Landmark,
  ShieldCheck,
  Users,
  MessageSquare,
  Map
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const advisoryServices = [
  {
    title: "Government Relations",
    description: "Disciplined engagement with public institutions. Includes stakeholder mapping and issue framing.",
    icon: <Users className="size-6 text-primary" />
  },
  {
    title: "Regulatory Navigation",
    description: "Support for licensing, approvals, and compliance coordination across multiple public bodies.",
    icon: <ShieldCheck className="size-6 text-primary" />
  },
  {
    title: "Policy & Advocacy",
    description: "Interpretation of policy change and strategic participation in reform environments.",
    icon: <MessageSquare className="size-6 text-primary" />
  },
  {
    title: "Stakeholder Insight",
    description: "Understanding who influences outcomes and how institutional interests shape decisions.",
    icon: <Map className="size-6 text-primary" />
  }
];

const faqs = [
  { q: "What is the first step when facing a regulatory or policy issue?", a: "The first step is to define the issue precisely, including understanding the relevant institutions and timing." },
  { q: "Do you support both government relations and regulatory approvals?", a: "Yes. Credence Africa supports both strategic engagement and the practical coordination required across approvals." },
  { q: "What is POLICY & MARKETS™?", a: "It is our virtual and in-person executive briefing platform focused on upcoming policy and market implications." }
];

export default function PublicAffairsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/pa1/1200/1200"
            alt="Public Affairs"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Public Affairs and Regulatory Strategy in Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Clarity
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Navigate regulation, policy, and institutional complexity with strategic clarity and foresight.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Regulatory Influence
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Engage government, manage regulatory exposure, secure approvals, and shape policy positioning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Discuss a Policy Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-normal mb-12 md:mb-16 text-center text-foreground">Core Advisory Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow">
                <CardHeader className="p-6 md:p-8 pb-4">
                   <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-lg md:text-xl font-normal leading-tight group-hover:text-primary transition-colors text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-4 flex-grow">
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY & MARKETS™ Section */}
      <section className="py-16 md:py-24 bg-black text-white px-4">
          <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                  <h2 className="text-2xl md:text-5xl font-normal">Why POLICY & MARKETS™ Matters</h2>
                  <p className="text-base md:text-xl font-light text-white/70 leading-relaxed">
                      Most institutions struggle because they interpret change too late. Our executive platform gives you a dedicated forum to understand what is coming.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-16 font-bold mt-4 md:mt-8 w-full sm:w-auto">
                      <Link href="/consult" className="justify-center">Join the Next Session</Link>
                  </Button>
              </div>
          </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-normal mb-10 md:mb-12 text-center text-foreground">Public Affairs FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-base md:text-lg py-6 text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-6 leading-relaxed font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
