
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
  Coins, 
  HandCoins, 
  Building2, 
  Briefcase, 
  LineChart, 
  ShieldCheck, 
  Target, 
  Zap, 
  Users, 
  BarChart, 
  Phone, 
  Mail, 
  ArrowUpRight,
  TrendingUp,
  Landmark,
  FileText,
  PieChart
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const targetAudience = [
  "Growth stage businesses preparing for equity, debt, or hybrid capital",
  "Companies seeking expansion capital for regional or international growth",
  "Project sponsors developing bankable infrastructure, energy, real asset, or large scale commercial projects",
  "Social enterprises and nonprofits seeking donor funding, grant readiness, or blended finance",
  "Cooperatives and SACCOs seeking institutional capital, member capital mobilization, or diversified investment structures",
  "Funds, investment platforms, and portfolio companies requiring investor relations, reporting, or post investment support",
  "Institutions preparing for mergers, acquisitions, strategic exits, or secondary transactions"
];

const pathways = [
  { title: "Private Capital", desc: "Private equity, venture capital, angel investment, family office capital, and strategic investment" },
  { title: "Private Debt", desc: "Structured debt, working capital facilities, trade finance, project finance, and credit facilities" },
  { title: "Development Finance", desc: "DFI aligned capital, concessional funding, catalytic capital, and development focused finance structures" },
  { title: "Grants and Donor Funding", desc: "Grant funding, technical assistance, donor aligned capital, and institutional fundraising pathways" },
  { title: "Blended Finance", desc: "Capital structures that combine grants, concessional capital, debt, equity, or public sector support" },
  { title: "Alternative and Diaspora Capital", desc: "Crowdfunding, diaspora capital, community investment, and non traditional capital pathways" },
  { title: "Public and Institutional Capital", desc: "Where relevant, alignment with sovereign, sub sovereign, public, or institutional financing structures" }
];

const advisoryServices = [
  {
    title: "Investor Readiness and Capital Strategy",
    desc: "We help institutions prepare for capital by strengthening the business, financial, governance, and transaction foundations required for investor confidence.",
    items: [
      "Capital strategy design aligned to business stage and funding objective",
      "Financial modeling, valuation logic, scenario planning, and return frameworks",
      "Corporate structuring and governance alignment",
      "Investment memoranda, pitch materials, and institutional deal narrative",
      "Data room architecture and due diligence readiness",
      "Commercial model refinement and unit economics validation",
      "Management positioning and investor engagement preparation"
    ]
  },
  {
    title: "Capital Raising and Transaction Support",
    desc: "We help clients engage capital providers, shape transaction processes, and move fundraising efforts into structured execution.",
    items: [
      "Investor targeting across private equity, venture capital, family offices, DFIs, banks, and grant makers",
      "Capital pipeline development and investor mapping",
      "Lender and investor engagement strategy",
      "Term sheet support and negotiation preparation",
      "Transaction documentation readiness",
      "Fundraising support for equity, debt, and blended capital mandates",
      "M&A support, exit strategy preparation, and strategic transaction positioning"
    ]
  },
  {
    title: "Capital Structuring and Blended Finance Design",
    desc: "We help clients structure capital in a way that reflects risk, return, impact, repayment ability, and long term growth.",
    items: [
      "Capital stack design across equity, debt, grants, and concessional funding",
      "Blended finance structures for businesses, social enterprises, cooperatives, and projects",
      "Donor capital integration and DFI positioning",
      "Risk allocation and financing optimization",
      "Public private capital alignment where required",
      "Structuring frameworks for scalable impact and development focused models"
    ]
  },
  {
    title: "Post Investment Performance and Investor Relations",
    desc: "We help institutions maintain credibility after funding by strengthening governance, reporting, stakeholder communication, and readiness for follow on capital.",
    items: [
      "Investor reporting systems and governance support",
      "Performance tracking, milestone reporting, and KPI frameworks",
      "Donor compliance and reporting support",
      "Shareholder and stakeholder communication frameworks",
      "Board reporting and governance documentation",
      "Follow on funding readiness and capital planning",
      "Back office support for funds, investment platforms, and portfolio companies"
    ]
  }
];

const productPathways = [
  {
    id: "enterprise",
    title: "Enterprise Growth Capital",
    description: "For scale ups, SMEs, and growth stage businesses preparing for institutional capital.",
    details: "Enterprise Growth Capital supports businesses that need growth capital, debt structuring, investor readiness, transaction preparation, or stronger post raise investor systems.",
    tracks: ["Growth Capital Readiness", "Debt and Structured Finance", "Investor Relations and Capital Management"],
    bestFor: "Businesses raising expansion capital, preparing for investor engagement, refining capital structure, or building follow on funding readiness.",
    icon: <TrendingUp className="size-8 text-primary" />
  },
  {
    id: "grant",
    title: "Grant Ready",
    description: "For nonprofits, social enterprises, and impact institutions seeking donor funding, grants, or blended capital.",
    details: "Grant Ready supports organizations that need grant readiness, donor positioning, proposal systems, blended finance design, compliance frameworks, and reporting infrastructure.",
    tracks: ["Grant Funding and Donor Readiness", "Blended Finance and Impact Capital", "Donor Compliance and Reporting"],
    bestFor: "Organizations pursuing grants, donor partnerships, impact capital, catalytic funding, or program to capital transition strategies.",
    icon: <HandCoins className="size-8 text-primary" />
  },
  {
    id: "cooperative",
    title: "Cooperative Finance",
    description: "For SACCOs, cooperatives, and member based institutions seeking growth capital, structured finance, or diversified investment models.",
    details: "Cooperative Finance supports cooperative institutions seeking capital mobilization, blended finance, institutional investor alignment, project financing, regulatory positioning, and long term member wealth creation strategies.",
    tracks: ["Cooperative Growth Financing", "Cooperative Blended Finance and Grant Access", "Cooperative Diversified Investment"],
    bestFor: "SACCOs, housing cooperatives, agricultural cooperatives, investment cooperatives, and member based financial institutions.",
    icon: <Users className="size-8 text-primary" />
  },
  {
    id: "project",
    title: "Project Finance",
    description: "For infrastructure, real asset, and large scale commercial projects requiring bankability, capital structuring, and transaction execution support.",
    details: "Project Finance supports sponsors and institutions building bankable projects that require feasibility, financial modeling, capital stack design, lender targeting, transaction readiness, and financial close support.",
    tracks: ["Project Bankability", "Capital Structuring and Financing", "Transaction Readiness and Execution"],
    bestFor: "Infrastructure developers, real asset sponsors, public private initiatives, energy projects, mobility assets, industrial projects, and large scale development platforms.",
    icon: <Building2 className="size-8 text-primary" />
  }
];

const engagementSteps = [
  { title: "1. Capital Consultation", desc: "We begin by understanding the funding objective, capital need, institution type, stage of growth, and transaction context." },
  { title: "2. Mandate Structuring", desc: "We translate the capital objective into a defined advisory pathway, establishing scopes, timelines, and readiness priorities." },
  { title: "3. Readiness and Transaction Preparation", desc: "We strengthen the financial, strategic, governance, and documentation foundations required for engagement." },
  { title: "4. Capital Engagement and Execution", desc: "We support capital targeting, investor engagement, transaction structuring, and negotiation readiness." },
  { title: "5. Post Investment Support", desc: "We continue with investor reporting, governance, donor compliance, and follow on funding readiness." }
];

const faqs = [
  { q: "What is the first step before raising capital in Africa?", a: "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, transaction materials, capital objective, and the type of funding that best fits the mandate." },
  { q: "How do I know whether I need equity, debt, grant funding, or blended finance?", a: "The right capital structure depends on growth stage, cash flow profile, repayment ability, project nature, investor expectations, impact objectives, and institutional readiness. Credence Africa helps clients determine the most suitable capital pathway before engagement begins." },
  { q: "What does investor readiness include?", a: "Investor readiness includes financial modeling, governance alignment, capital structuring, diligence preparation, deal materials, management positioning, data room preparation, and a capital narrative that makes commercial sense to the target capital provider." },
  { q: "Do you support blended finance and development finance mandates?", a: "Yes. Credence Africa supports blended finance design, DFI positioning, donor aligned funding strategies, risk allocation frameworks, and structures that combine grants, concessional capital, debt, and equity." },
  { q: "Can you support grant funding and donor readiness?", a: "Yes. We support donor mapping, proposal systems, funding pipeline development, compliance preparation, grant positioning, blended finance integration, and reporting structures." },
  { q: "Do you support project finance and infrastructure mandates?", a: "Yes. We support bankability, feasibility aligned financial modeling, capital structuring, investor and lender targeting, transaction readiness, and financial close support for bankable projects." },
  { q: "Can you support institutions after capital has been raised?", a: "Yes. We support post investment reporting, governance, donor compliance, stakeholder communication, follow on funding readiness, and investor relations." }
];

export default function CapitalRaisingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="https://picsum.photos/seed/capital1/1920/1080"
          alt="Capital Raising and Investment Structuring"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-tight">
              Capital Raising and Investment Structuring in Africa
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light text-white/90">
                Raise capital with stronger structure, clearer positioning, and greater investor confidence.
              </p>
              <p className="text-base text-white/70 max-w-2xl font-light">
                Credence Africa helps businesses, project sponsors, cooperatives, social enterprises, funds, and growth focused institutions prepare for capital, structure investment opportunities, engage the right capital providers, and move transactions forward across African markets.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-7 text-lg font-normal">
                <Link href="/consult">
                  Book a Capital Strategy Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 rounded-none px-8 py-7 text-lg font-normal bg-transparent">
                <Link href="/consult">
                  Discuss a Capital Raising Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Raising Strategy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal">Capital Raising Strategy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Capital raising is an executive function. It shapes growth, timing, governance, investor confidence, and long term strategic flexibility. Institutions seeking capital need more than presentation materials. They need a capital pathway aligned to business model, growth stage, funding objective, capital structure, risk profile, and transaction readiness.
              </p>
            </div>
            <div className="space-y-8 bg-muted/20 p-8 border-l-4 border-primary">
              <p className="text-base leading-relaxed text-foreground/80">
                Credence Africa advises institutions that need a more disciplined route from capital need to capital deployment. We help leadership teams define the right funding strategy, improve investor readiness, structure financing options, coordinate capital engagement, and strengthen credibility after capital is secured.
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-bold">
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
            <h2 className="text-3xl md:text-4xl font-normal">Designed for Businesses, Projects, Funds, and Institutions Raising Capital</h2>
            <p className="text-muted-foreground">This service is built for institutions that need to raise, structure, or manage capital across Africa.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
            <div className="flex items-center justify-center p-8 bg-primary/5 border border-dashed border-primary">
              <Button asChild variant="link" className="text-primary font-bold text-base hover:underline p-0">
                <Link href="/consult">Discuss Your Capital Objective <ArrowUpRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Capital Raising Pathways</h2>
            <p className="text-muted-foreground leading-relaxed">
              Credence Africa supports multiple forms of capital depending on mandate type, institutional profile, funding need, and stage of growth. This gives clients a more strategic basis for choosing the right capital pathway before time and resources are committed to investor engagement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathways.map((path) => (
              <div key={path.title} className="p-8 border hover:bg-accent/50 transition-all flex flex-col h-full">
                <h3 className="text-lg font-normal text-primary mb-4">{path.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{path.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild className="rounded-none px-8 font-bold">
              <Link href="/consult">Explore the Right Capital Pathway</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">Capital Raising Advisory Services</h2>
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
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Pathways */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal">Fundraising Pathways</h2>
            <p className="text-muted-foreground">The platform is structured through four product pathways that match where your institution is in the capital cycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productPathways.map((path) => (
              <div key={path.id} className="p-10 border hover:border-primary transition-all flex flex-col h-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted/30">{path.icon}</div>
                  <h3 className="text-2xl font-normal">{path.title}</h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-sm font-bold text-primary italic">{path.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{path.details}</p>
                  <div className="space-y-2 pt-4">
                    <p className="text-xs uppercase tracking-widest font-bold text-foreground/60">Core Tracks:</p>
                    <div className="flex flex-wrap gap-2">
                      {path.tracks.map(t => <span key={t} className="px-3 py-1 bg-muted text-[10px] font-bold uppercase">{t}</span>)}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs font-bold text-foreground/80 mb-2">Best Suited For:</p>
                    <p className="text-sm text-muted-foreground">{path.bestFor}</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="rounded-none w-full border-primary text-primary font-bold hover:bg-primary hover:text-white">
                  <Link href="/consult">Discuss {path.title}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">A Clear Path From Capital Need to Capital Deployment</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {engagementSteps.map((step) => (
              <div key={step.title} className="space-y-4 group">
                <h4 className="text-primary font-normal text-lg border-b pb-4 group-hover:border-primary transition-all">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Button asChild size="lg" className="rounded-none px-12 font-bold py-6">
                <Link href="/consult">Book a Capital Strategy Consultation</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center">Capital Raising FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Raise Capital With<br />Institutional Confidence.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl">
                If your institution is preparing to raise capital, structure a funding pathway, or align donor and commercial capital, Credence Africa provides the execution discipline to move that agenda forward.
              </p>
              <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                 <div className="flex items-center gap-3"><Mail className="size-5" /> connect@credence.africa</div>
                 <div className="flex items-center gap-3"><Phone className="size-5" /> +254 719 468 240</div>
              </div>
            </div>
            <div className="bg-white p-10 space-y-8 shadow-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal text-black">Start Your Capital Strategy</h3>
                <p className="text-muted-foreground text-sm">A senior advisor will contact you to discuss your specific mandate.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none py-8 text-lg font-bold">
                  <Link href="/consult">Book a Capital Strategy Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full rounded-none py-8 text-lg font-bold border-primary text-primary hover:bg-primary/10">
                  <Link href="/consult">Discuss a Capital Raising Mandate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
