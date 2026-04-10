"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  TrendingUp,
  Ship,
  BarChart3,
  Search,
  Zap,
  Mail,
  Phone,
  Building2,
  Scale,
  Map,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solveItems = [
  "Select the right markets based on opportunity, regulation, timing, and strategic fit",
  "Build credible market entry pathways across East, West, Southern, and North Africa",
  "Structure route to market, channel, distribution, and partnership models",
  "Navigate licensing, regulatory approvals, and operating requirements",
  "Expand across regional blocs including EAC, COMESA, ECOWAS, and SADC",
  "Build cross border trade flows, supply chain systems, and transaction pathways",
  "Strengthen access to market intelligence, stakeholders, partners, and commercial networks",
  "Support African businesses pursuing export growth and international expansion",
  "Coordinate rollout, commercial activation, and ongoing growth across multiple jurisdictions",
];

const coreServices = [
  {
    title: "Market Entry Strategy in Africa",
    desc: "We help institutions assess markets, prioritize jurisdictions, map regulatory requirements, and design entry pathways.",
    items: [
      "Jurisdiction selection and prioritization",
      "Market sizing and demand assessment",
      "Licensing pathways and approval mapping",
      "Entity establishment and operating model design",
      "Pricing and positioning planning",
      "Route to market strategy",
      "Political economy and risk analysis",
    ],
  },
  {
    title: "Cross Border Trade Facilitation",
    desc: "We support institutions building structured trade pathways through stronger transaction design and commercial coordination.",
    items: [
      "Trade structuring and transaction design",
      "Commercial contracting and deal support",
      "Trade finance and payment alignment",
      "Cross border compliance coordination",
      "Logistics and supply chain planning",
      "Trade missions and transaction activation",
      "Buyer and seller engagement facilitation",
    ],
  },
  {
    title: "Regional Expansion Across Africa",
    desc: "We help institutions scale from one market into multiple jurisdictions through coordinated strategy and oversight.",
    items: [
      "Regional expansion strategy and sequencing",
      "Multi country operating model design",
      "Distribution and partner ecosystem development",
      "Regional compliance mapping",
      "Cross border tax and treasury coordination",
      "Expansion dashboards and performance tracking",
      "Phased multi market scaling support",
    ],
  },
  {
    title: "Global Expansion From Africa",
    desc: "We support African businesses entering international markets with stronger export readiness and global positioning.",
    items: [
      "Global market selection and prioritization",
      "Export readiness and trade structuring",
      "International compliance design",
      "Distribution and buyer access strategy",
      "Global payments alignment",
      "International brand positioning",
      "Global growth coordination",
    ],
  },
];

const productPathways = [
  {
    title: "ACCESS AFRICA™",
    tagline: "For institutions entering African markets seeking a compliant and commercially viable presence.",
    tracks: ["Market Entry Blueprint™", "Market Setup System™", "Market Launch Engine™", "Market Command™"],
    bestFor: "Foreign companies, investors assessing establishment, and regulated businesses requiring setup support.",
    icon: <Building2 className="size-8 text-primary" />,
    cta: "Discuss ACCESS AFRICA™",
  },
  {
    title: "GROWTH HACKING™",
    tagline: "For institutions expanding across multiple African markets with coordinated regional execution.",
    tracks: ["Regional Scaling Blueprint™", "Multi Market Expansion System™", "Market Development Engine™", "Growth Command™"],
    bestFor: "Businesses scaling across Africa, multi country operators, and institutions building regional systems.",
    icon: <TrendingUp className="size-8 text-primary" />,
    cta: "Explore GROWTH HACKING™",
  },
  {
    title: "GO GLOBAL™",
    tagline: "For African businesses seeking structured expansion into international markets.",
    tracks: ["Global Markets Blueprint™", "Global Structuring Framework™", "Global Access Engine™", "Global Command™"],
    bestFor: "African enterprises seeking export growth, international expansion, or structured entry outside Africa.",
    icon: <Globe className="size-8 text-primary" />,
    cta: "Discuss GO GLOBAL™",
  },
  {
    title: "TRADE AFRICA™",
    tagline: "For institutions executing cross border trade flows, transactions, and supply chain systems.",
    tracks: ["Trade Structuring Framework™", "Supply Chain System™", "Trade Activation Engine™", "Trade Command™"],
    bestFor: "Importers, exporters, distributors, trade platforms, and institutions executing cross border transactions.",
    icon: <Ship className="size-8 text-primary" />,
    cta: "Discuss TRADE AFRICA™",
  },
  {
    title: "AFRICA INTEL™",
    tagline: "For institutions that need stronger intelligence and commercial visibility before entry or expansion.",
    tracks: ["Intelligence Reports", "Ecosystem Access Engine™", "Capital Intelligence Framework™", "Intelligence Subscription"],
    bestFor: "Investors, market entrants, growth teams, and businesses requiring intelligence before deployment.",
    icon: <Search className="size-8 text-primary" />,
    cta: "Explore AFRICA INTEL™",
  },
];

const faqs = [
  {
    q: "What is the first step before entering a new African market?",
    a: "The first step is to assess the market opportunity, regulatory environment, route to market options, operating implications, and strategic fit with the institution’s business model and growth goals.",
  },
  {
    q: "Do you support entry into one market or multi country expansion?",
    a: "Yes. Credence Africa supports both single market entry and phased multi country expansion across regional blocs.",
  },
  {
    q: "Do you help with regulatory and licensing issues?",
    a: "Yes. We support licensing pathway mapping, regulatory approvals planning, compliance coordination, and market setup considerations as part of entry and expansion.",
  },
  {
    q: "Can you support trade facilitation and cross border transactions?",
    a: "Yes. We support trade structuring, commercial contracting, payment pathway design, logistics alignment, supply chain coordination, and transaction activation.",
  },
  {
    q: "Do you work with African businesses expanding globally?",
    a: "Yes. GO GLOBAL™ supports export readiness, international market selection, cross border structuring, partnership development, and global market entry coordination.",
  },
  {
    q: "Do you provide market intelligence before expansion begins?",
    a: "Yes. AFRICA INTEL™ supports sector analysis, opportunity mapping, competitor review, stakeholder mapping, partner identification, and ongoing market monitoring.",
  },
];

export default function TradeGrowthPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Trade and Growth Advisory Africa"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Trade and Growth Advisory for Market Entry and Expansion in Africa
            </h1>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Market Entry
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Enter African markets with clarity. Expand across borders with structure. Scale with commercial precision.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Regional Scale
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Credence Africa helps institutions establish presence, expand across regional blocs, and build global growth pathways.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Discuss Market Entry Strategy <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Plan Cross Border Expansion
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Executive Positioning</h2>
              <h3 className="text-3xl md:text-4xl font-normal text-foreground leading-tight">Market Entry and Expansion Built for Institutions Ready to Execute</h3>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Growth in Africa is shaped by more than market opportunity. It is shaped by regulatory access, market sequencing, route to market strategy, partner quality, and operating model design.</p>
                <p>We help clients move from market interest to market execution through advisory that connects commercial strategy, compliance, ecosystem access, and operational rollout.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary h-12 px-8">
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>
            <div className="bg-muted p-8 md:p-12 border-l-4 border-primary">
              <p className="text-xl font-light italic leading-relaxed">
                "This gives executive teams a clearer basis for market selection, faster decision making, and stronger control over expansion risk."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Advise */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Designed for Institutions Expanding Into, Across, and Beyond Africa</h2>
            <p className="text-muted-foreground font-light">Built for organizations whose growth agenda depends on entering new markets or scaling across borders.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Foreign companies entering African markets",
              "Businesses expanding into additional jurisdictions",
              "African companies building regional scale",
              "African enterprises preparing for global entry",
              "Investors evaluating expansion opportunities",
              "Trade and market development actors",
              "Regulated businesses managing cross border complexity",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90 font-light">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/consult">Discuss Your Expansion Objective <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Help Solve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">What Credence Africa Helps You Solve</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A clear path from market ambition to market execution. We help leadership teams answer the questions that matter before capital is deployed.
              </p>
              <div className="grid gap-4">
                {solveItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <p className="text-sm font-light text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-none px-10">
                <Link href="/consult">Explore the Right Growth Pathway</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
                alt="Strategic Growth"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-normal mb-16 text-center">Core Advisory Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm flex flex-col">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl md:text-2xl font-normal text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2 font-light">{service.desc}</p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm border-b border-border/50 pb-2 font-light">
                        <ArrowRight className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-none px-10">
              <Link href="/consult">Discuss Market Entry Strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Pathways */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Product Pathways</h2>
            <p className="text-muted-foreground font-light">Grounding your expansion in a structured system built for outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPathways.map((product) => (
              <Card key={product.title} className="rounded-none border hover:border-primary transition-colors flex flex-col">
                <CardHeader className="p-8">
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle className="text-2xl font-normal text-foreground">{product.title}</CardTitle>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mt-2">{product.tagline}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <div className="grid grid-cols-1 gap-2">
                      {product.tracks.map(t => (
                        <div key={t} className="flex items-center gap-2 text-xs font-light py-1 border-b border-border/30">
                          <Zap className="size-3 text-primary" /> {t}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Best Suited For</p>
                      <p className="text-xs font-light leading-relaxed">{product.bestFor}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-8 rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/consult">{product.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Executive Teams Engage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">A More Strategic Approach to Expansion</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Institutions engage Credence Africa when route to market, regulatory timing, partner quality, and operating model design begin to shape investment outcomes.
              </p>
              <div className="space-y-4">
                {[
                  "Choose markets more intelligently",
                  "Bring structure to entry, scale, trade, and channel strategy",
                  "Improve visibility across regulation and execution risk",
                  "Connect market intelligence with commercial decision making",
                  "Support stronger rollout discipline across jurisdictions",
                  "Productized pathways matching your growth cycle"
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-light">{val}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-none px-10">
                <Link href="/consult">See How Your Expansion Can Be Structured</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white p-8 flex flex-col justify-center border">
                  <p className="text-3xl font-bold text-primary">01</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Market Selection</p>
                </div>
                <div className="aspect-[3/4] bg-primary p-8 flex flex-col justify-end text-white">
                  <p className="text-3xl font-bold">02</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Regulatory Access</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] bg-muted p-8 flex flex-col justify-end">
                  <p className="text-3xl font-bold text-primary">03</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Route to Market</p>
                </div>
                <div className="aspect-square bg-black p-8 flex flex-col justify-center text-white">
                  <p className="text-3xl font-bold text-primary">04</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Execution Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Sectors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-12">Priority Sectors</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Financial services and fintech", "Digital services and technology", "Healthcare and health systems",
              "Agribusiness and food systems", "Manufacturing and industrial trade", "Logistics and mobility",
              "Education and skills platforms", "Creative economy and digital content", "Infrastructure linked commercial platforms"
            ].map((sector) => (
              <span key={sector} className="px-6 py-3 bg-muted text-xs font-bold uppercase tracking-widest border border-border/50">{sector}</span>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-12 rounded-none border-primary text-primary px-12">
            <Link href="/consult">Discuss Sector Specific Expansion</Link>
          </Button>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">How Engagement Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Expansion Consultation", desc: "Understanding geographic scope, sector context, and execution priorities." },
              { step: "2", title: "Mandate Structuring", desc: "Defining product track, sequencing logic, markets, and delivery model." },
              { step: "3", title: "Market Readiness", desc: "Regulatory mapping, operating model design, and partner identification." },
              { step: "4", title: "Execution & Activation", desc: "Support across entry, launch, trade execution, and commercial activation." },
              { step: "5", title: "Ongoing Growth", desc: "Scale, performance management, and new market rollout coordination." }
            ].map((s) => (
              <div key={s.step} className="space-y-4">
                <div className="text-4xl font-bold text-primary opacity-20">{s.step}</div>
                <h4 className="font-normal text-lg leading-tight">{s.title}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-none px-12 h-14 font-bold">
              <Link href="/consult">Plan Cross Border Expansion</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-normal mb-12 text-center">Trade & Growth FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-base md:text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-6 leading-relaxed font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Conversion */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8">
            Trade and Growth Support for Institutions Ready to Expand Across Africa
          </h2>
          <p className="text-lg opacity-80 font-light leading-relaxed mb-12">
            If your institution is entering African markets, building cross border trade pathways, or taking African products global, Credence Africa provides the strategic support to move that mandate forward with structure and clarity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button asChild size="lg" variant="secondary" className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-10">
              <Link href="/consult">Discuss Market Entry Strategy</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white/10 h-14 px-10">
              <Link href="/consult">Plan Cross Border Expansion</Link>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white border-t border-white/20 pt-12">
            <a href="mailto:connect@credence.africa" className="flex items-center gap-3 hover:underline">
              <Mail className="size-5" /> connect@credence.africa
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-3 hover:underline">
              <Phone className="size-5" /> +254 719 468 240
            </a>
            <span className="flex items-center gap-3">
              <Map className="size-5" /> Nairobi, Kenya
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
