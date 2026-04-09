
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
  Coins, 
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

const pathways = [
  { title: "Private Capital", desc: "Private equity, venture capital, angel investment, and family office capital." },
  { title: "Private Debt", desc: "Structured debt, working capital, trade finance, and project finance." },
  { title: "Development Finance", desc: "DFI-aligned capital, concessional funding, and catalytic structures." },
  { title: "Grants & Donor Funding", desc: "Technical assistance and institutional fundraising pathways." },
  { title: "Blended Finance", desc: "Structures combining grants, debt, and equity for scalable impact." },
  { title: "Alternative Capital", desc: "Crowdfunding, diaspora capital, and community investment pathways." },
  { title: "Institutional Capital", desc: "Alignment with sovereign, sub-sovereign, and public financing." }
];

const advisoryServices = [
  {
    title: "Investor Readiness and Capital Strategy",
    desc: "We help institutions prepare for capital by strengthening foundations required for investor confidence.",
    items: [
      "Capital strategy design aligned to business stage",
      "Financial modeling and valuation logic",
      "Corporate structuring and governance alignment",
      "Investment memoranda and pitch materials",
      "Data room architecture and due diligence readiness"
    ]
  },
  {
    title: "Capital Raising and Transaction Support",
    desc: "We help clients engage capital providers and move fundraising efforts into structured execution.",
    items: [
      "Investor targeting and mapping",
      "Lender and investor engagement strategy",
      "Term sheet support and negotiation prep",
      "Transaction documentation readiness",
      "Fundraising support for equity and debt"
    ]
  },
  {
    title: "Capital Structuring and Blended Finance Design",
    desc: "We help clients structure capital in a way that reflects risk, return, and long-term growth.",
    items: [
      "Capital stack design (equity, debt, grants)",
      "Blended finance structures for social enterprises",
      "Donor capital integration and DFI positioning",
      "Risk allocation and financing optimization"
    ]
  },
  {
    title: "Post-Investment Performance and relations",
    desc: "We help institutions maintain credibility after funding by strengthening reporting and governance.",
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
    details: "Supports expansion capital, debt strategy, and post-raise systems.",
    icon: <TrendingUp className="size-8 text-primary" />
  },
  {
    id: "grant",
    title: "Grant Ready",
    description: "For nonprofits and impact institutions seeking catalytic funding.",
    details: "Supports donor positioning, blended finance, and compliance.",
    icon: <HandCoins className="size-8 text-primary" />
  },
  {
    id: "cooperative",
    title: "Cooperative Finance",
    description: "For SACCOs and member-based financial institutions.",
    details: "Supports capital mobilization and diversified investment models.",
    icon: <Users className="size-8 text-primary" />
  },
  {
    id: "project",
    title: "Project Finance",
    description: "For infrastructure and large-scale commercial assets.",
    details: "Supports bankability, financial modeling, and closing mandates.",
    icon: <Building2 className="size-8 text-primary" />
  }
];

const faqs = [
  { q: "What is the first step before raising capital in Africa?", a: "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, transaction materials, capital objective, and the type of funding that best fits the mandate." },
  { q: "How do I know whether I need equity, debt, grant funding, or blended finance?", a: "The right capital structure depends on growth stage, cash flow profile, repayment ability, project nature, investor expectations, impact objectives, and institutional readiness. Credence Africa helps clients determine the most suitable capital pathway before engagement begins." },
  { q: "What does investor readiness include?", a: "Investor readiness includes financial modeling, governance alignment, capital structuring, diligence preparation, deal materials, management positioning, data room preparation, and a capital narrative that makes commercial sense to the target capital provider." },
  { q: "Do you support blended finance and development finance mandates?", a: "Yes. Credence Africa supports blended finance design, DFI positioning, donor aligned funding strategies, risk allocation frameworks, and structures that combine grants, concessional capital, debt, and equity." },
  { q: "Can you support grant funding and donor readiness?", a: "Yes. We support donor mapping, proposal systems, funding pipeline development, compliance preparation, grant positioning, blended finance integration, and reporting structures." },
  { q: "Do you support project finance and infrastructure mandates?", a: "Yes. We support bankability, feasibility aligned financial modeling, capital structuring, investor and lender targeting, transaction readiness, and financial close support for bankable projects." },
  { q: "Can you support institutions after capital has been raised?", a: "Yes. We support post investment reporting, governance, donor compliance, stakeholder communication, follow on funding readiness, and investor relations." },
  { q: "Do you work only with startups?", a: "No. This service supports growth stage businesses, established enterprises, social enterprises, cooperatives, project sponsors, funds, and other institutions with capital mandates." }
];

export default function CapitalRaisingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split Layout with White Background */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-24">
            <div className="space-y-10 order-2 lg:order-1">
              <h1 className="text-foreground leading-tight">
                Capital Raising and Investment Structuring
              </h1>
              
              <div className="space-y-4 max-w-2xl">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Capital
                </p>
                <p className="text-xl font-light text-muted-foreground leading-relaxed">
                  Raise capital with stronger structure, clearer positioning, and greater investor confidence.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                  <Link href="/consult">
                    Book a Capital Strategy Consultation <ArrowUpRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-transparent">
                  <Link href="/consult">
                    Discuss Your Mandate
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden order-1 lg:order-2">
              <Image 
                src="https://picsum.photos/seed/capital1/1200/1200"
                alt="Capital Raising"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal text-foreground">Capital Raising Strategy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Capital raising is an executive function. It shapes growth, timing, governance, and strategic flexibility. We help institutions define the right funding strategy, improve investor readiness, and structure financing options.
              </p>
            </div>
            <div className="space-y-8 bg-muted/20 p-8 border-l-4 border-primary">
              <p className="text-base leading-relaxed text-foreground/80 font-light">
                Credence Africa advises institutions that need a more disciplined route from capital need to capital deployment. We help leadership teams coordinate capital engagement and strengthen credibility after capital is secured.
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 px-8">
                <Link href="/consult">Speak to the Team <ArrowRight className="ml-2 size-4" /></Link>
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
            <p className="text-muted-foreground">We work with businesses, projects, and funds seeking to raise or manage capital across Africa.</p>
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
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center text-foreground">Capital Raising Advisory Services</h2>
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

      {/* Pathways */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center text-foreground">Fundraising Pathways</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productPathways.map((path) => (
              <div key={path.id} className="p-8 bg-white border hover:border-primary transition-all flex flex-col h-full space-y-6">
                <div className="p-3 bg-muted/30 w-fit">{path.icon}</div>
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-normal text-foreground">{path.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{path.description}</p>
                </div>
                <Button asChild variant="link" className="p-0 text-primary font-bold group-hover:underline self-start">
                  <Link href="/consult">Discuss Pathway <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
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

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Raise Capital With<br />Institutional Confidence.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                If your institution is preparing to raise capital, structure a funding pathway, or align donor and commercial capital, Credence Africa provides the execution discipline to move that agenda forward.
              </p>
            </div>
            <div className="bg-white p-10 space-y-8 shadow-2xl text-black">
              <div className="space-y-2">
                <h3 className="text-2xl font-normal">Start Your Capital Strategy</h3>
                <p className="text-muted-foreground text-sm font-light">Speak with a senior advisor about your mandate.</p>
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
