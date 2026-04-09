
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
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  ShieldCheck, 
  Target, 
  Users, 
  ArrowUpRight,
  MessageSquare,
  Map,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const targetAudience = [
  "Regulated businesses managing licensing and multi-agency interfaces",
  "Companies entering or expanding into policy-critical sectors",
  "Investors and project sponsors with public sector interfaces",
  "Industry associations engaging on reform and institutional alignment",
  "Development actors operating in policy-sensitive sectors",
  "Executive teams that need stronger public affairs capability"
];

const solvingPoints = [
  "Navigate complex licensing and regulatory approvals",
  "Build structured government relations strategies",
  "Anticipate and respond to policy reform",
  "Shape policy positions with greater credibility",
  "Map stakeholder interests and political economy risk",
  "Coordinate interfaces across ministries and regulators",
  "Understand upcoming regulation effects on market entry"
];

const advisoryServices = [
  {
    title: "Government Relations",
    description: "Disciplined engagement with government and public institutions. Includes stakeholder mapping and issue framing.",
    icon: <Users className="size-6 text-primary" />
  },
  {
    title: "Regulatory Navigation",
    description: "Support for licensing, approvals, and compliance. Includes approvals strategy and sequencing across multiple bodies.",
    icon: <ShieldCheck className="size-6 text-primary" />
  },
  {
    title: "Policy & Advocacy",
    description: "Interpretation of policy change and strategic participation in reform environments and advocacy planning.",
    icon: <MessageSquare className="size-6 text-primary" />
  },
  {
    title: "Stakeholder Insight",
    description: "Understanding who influences outcomes and how institutional interests shape decisions and issue sensitivity.",
    icon: <Map className="size-6 text-primary" />
  },
  {
    title: "Interface Management",
    description: "Practical coordination across meetings, submissions, and approvals tracking across public sector actors.",
    icon: <Target className="size-6 text-primary" />
  },
  {
    title: "Institutional Clarity",
    description: "Positioning leadership teams to move with stronger foresight and better positioning in regulated markets.",
    icon: <Landmark className="size-6 text-primary" />
  }
];

const faqs = [
  { q: "What is the first step when facing a regulatory or policy issue?", a: "The first step is to define the issue precisely. That includes understanding the relevant institutions, approval points, stakeholder interests, timing, commercial implications, and likely reform pathway." },
  { q: "Do you support both government relations and regulatory approvals?", a: "Yes. Credence Africa supports strategic engagement with public institutions and the practical coordination required across approvals, submissions, follow-up, and issue tracking." },
  { q: "Can you support policy reform and advocacy?", a: "Yes. We support policy interpretation, position development, consultation engagement, advocacy strategy, and structured participation in reform environments." },
  { q: "What is POLICY & MARKETS™?", a: "POLICY & MARKETS™ is Credence Africa’s virtual and in person executive briefing platform focused on upcoming policy, regulation, and the market implications of reform." },
  { q: "Can POLICY & MARKETS™ be delivered for a sector, institution, or association?", a: "Yes. It can be delivered as a public session, a private institutional briefing, a sector roundtable, an executive forum, or a closed dialogue depending on the audience and issue." },
  { q: "Do you support market entrants in regulated sectors?", a: "Yes. We support market entrants through regulatory scanning, approvals planning, stakeholder mapping, public sector engagement, and issue coordination." },
  { q: "Can you provide ongoing public affairs support?", a: "Yes. Ongoing support can be structured through retained advisory, issue monitoring, stakeholder engagement, or recurring POLICY & MARKETS™ sessions." }
];

export default function PublicAffairsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split Layout with White Background */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-24">
            <div className="space-y-10 order-2 lg:order-1">
              <h1 className="text-foreground leading-tight">
                Public Affairs and Regulatory Strategy in Africa
              </h1>
              
              <div className="space-y-4 max-w-2xl">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Clarity
                </p>
                <p className="text-xl font-light text-muted-foreground leading-relaxed">
                  Navigate regulation, policy, and institutional complexity with strategic clarity and foresight.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                  <Link href="/consult">
                    Book a Public Affairs Consultation <ArrowUpRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-transparent">
                  <Link href="/consult">
                    Discuss a Policy Mandate
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden order-1 lg:order-2">
              <Image 
                src="https://picsum.photos/seed/pa1/1200/1200"
                alt="Public Affairs"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal text-foreground">Public Affairs: Where Policy Shapes Markets</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                In African markets, commercial execution is influenced by regulation. Reform can alter sector economics. We provide a structured platform bringing together regulatory strategy and stakeholder mapping.
              </p>
            </div>
            <div className="space-y-8 bg-muted/20 p-8 border-l-4 border-primary">
              <p className="text-base leading-relaxed text-foreground/80 font-light">
                Credence Africa advises institutions that need more than fragmented engagement. We coordinate interfaces across regulators and agencies to help you move with institutional coherence.
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 px-8">
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center text-foreground">Core Advisory Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow">
                <CardHeader className="p-8 pb-4">
                   <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-normal leading-tight group-hover:text-primary transition-colors text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solve Points */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Strategic Support Across Regulation</h2>
            <p className="text-muted-foreground leading-relaxed font-light">
              We help leadership teams interpret the environment accurately and move with greater confidence across complex licensing pathways.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solvingPoints.map((point) => (
              <div key={point} className="p-8 border hover:border-primary transition-all flex flex-col h-full border-l-4 border-l-transparent hover:border-l-primary bg-white">
                <p className="text-sm text-foreground/80 leading-relaxed font-light flex-grow">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY & MARKETS™ Section */}
      <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-3xl md:text-5xl font-normal">Why POLICY & MARKETS™ Matters</h2>
                  <p className="text-xl font-light text-white/70 leading-relaxed">
                      Most institutions struggle because they interpret change too late. Our executive platform gives you a dedicated forum to understand what is coming and why it matters.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-16 font-bold mt-8">
                      <Link href="/consult">Join the Next Session</Link>
                  </Button>
              </div>
          </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center text-foreground">Public Affairs FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-lg py-6 text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Support for Institutions That Need Clarity and Control.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                If your institution is navigating approvals or stakeholder pressure, Credence Africa provides the execution discipline to move your mandate forward.
              </p>
            </div>
            <div className="bg-white p-10 space-y-8 shadow-2xl text-black">
              <div className="space-y-2">
                <h3 className="text-2xl font-normal">Start Your Mandate</h3>
                <p className="text-muted-foreground text-sm font-light">Discuss your regulatory challenge with a senior advisor.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none h-16 text-lg font-bold">
                  <Link href="/consult">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
