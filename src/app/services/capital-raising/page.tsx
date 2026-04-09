
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  CheckCircle2, 
  HandCoins, 
  Building2, 
  ArrowUpRight,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const targetAudience = [
  "Growth stage businesses preparing for equity, debt, or hybrid capital",
  "Companies seeking expansion capital for regional or international growth",
  "Project sponsors developing bankable infrastructure or energy projects",
  "Social enterprises and nonprofits seeking donor funding or blended finance",
  "Cooperatives seeking institutional capital or diversified investment models",
  "Funds and platforms requiring investor relations and post-investment support",
  "Institutions preparing for mergers, acquisitions, or strategic exits"
];

const advisoryServices = [
  {
    title: "Investor Readiness and Capital Strategy",
    desc: "Strengthening foundations required for investor confidence.",
    items: [
      "Capital strategy design aligned to business stage",
      "Financial modeling and valuation logic",
      "Corporate structuring and governance alignment",
      "Investment memoranda and pitch materials"
    ]
  },
  {
    title: "Capital Raising and Transaction Support",
    desc: "Engaging capital providers and moving fundraising into execution.",
    items: [
      "Investor targeting and mapping",
      "Lender and investor engagement strategy",
      "Term sheet support and negotiation prep",
      "Transaction documentation readiness"
    ]
  },
  {
    title: "Capital Structuring and Blended Finance Design",
    desc: "Structuring capital to reflect risk, return, and long-term growth.",
    items: [
      "Capital stack design (equity, debt, grants)",
      "Blended finance structures for social enterprises",
      "Donor capital integration and DFI positioning",
      "Risk allocation and financing optimization"
    ]
  },
  {
    title: "Post-Investment Performance and Relations",
    desc: "Maintaining credibility after funding through reporting and governance.",
    items: [
      "Investor reporting systems",
      "Performance tracking and KPI frameworks",
      "Donor compliance and reporting support",
      "Shareholder communication frameworks"
    ]
  }
];

const productPathways = [
  {
    id: "enterprise",
    title: "Enterprise Growth Capital",
    description: "For scale-ups and SMEs preparing for institutional capital.",
    icon: <TrendingUp className="size-8 text-primary" />
  },
  {
    id: "grant",
    title: "Grant Ready",
    description: "For nonprofits and impact institutions seeking catalytic funding.",
    icon: <HandCoins className="size-8 text-primary" />
  },
  {
    id: "cooperative",
    title: "Cooperative Finance",
    description: "For SACCOs and member-based financial institutions.",
    icon: <Users className="size-8 text-primary" />
  },
  {
    id: "project",
    title: "Project Finance",
    description: "For infrastructure and large-scale commercial assets.",
    icon: <Building2 className="size-8 text-primary" />
  }
];

const faqs = [
  { q: "What is the first step before raising capital in Africa?", a: "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, and transaction materials." },
  { q: "How do I know whether I need equity, debt, grant funding, or blended finance?", a: "The right structure depends on growth stage, cash flow, and risk profile. Credence Africa helps determine the most suitable pathway before engagement begins." },
  { q: "Do you work only with startups?", a: "No. This service supports growth stage businesses, established enterprises, social enterprises, cooperatives, project sponsors, and other institutions with capital mandates." }
];

export default function CapitalRaisingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Background Image with Content Box Overlay */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/capital1/1200/1200"
            alt="Capital Raising"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="bg-white p-8 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-10">
            <h1 className="text-foreground leading-tight">
              Capital Raising and Investment Structuring
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
              <div className="space-y-3">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Capital
                </p>
                <p className="text-base leading-relaxed font-light">
                  Raise capital with stronger structure, clearer positioning, and greater investor confidence across African markets.
                </p>
              </div>
              <div className="space-y-3 lg:border-l lg:pl-8">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Strategic Ready
                </p>
                <p className="text-base leading-relaxed font-light">
                  From investor readiness and financial structuring to transaction support and post-investment performance.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult">
                  Discuss Your Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Built for Growth Institutions</h2>
            <p className="text-muted-foreground text-lg">Supporting businesses, projects, and funds seeking capital.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center text-foreground">Core Advisory Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm h-full flex flex-col">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-normal text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">{service.desc}</p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm border-b border-border/50 pb-2">
                        <ArrowRight className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-none px-10 font-bold h-14">
              <Link href="/consult">Book a Capital Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center text-foreground">Capital Raising FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed font-light">
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
