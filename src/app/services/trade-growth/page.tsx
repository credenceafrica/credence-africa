"use client";

import { ConsultationDialog } from "@/components/consultation-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe,
  Search,
  Ship,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Content (every fact preserved from the original page)              */
/* ------------------------------------------------------------------ */

const solveItems = [
  "Select the right markets based on opportunity, regulation, timing and strategic fit",
  "Build credible market entry pathways across East, West, Southern and North Africa",
  "Structure route to market, channel, distribution and partnership models",
  "Navigate licensing, regulatory approvals and operating requirements",
  "Expand across regional blocs including EAC, COMESA, ECOWAS and SADC",
  "Build cross border trade flows, supply chain systems and transaction pathways",
  "Strengthen access to market intelligence, stakeholders, partners and commercial networks",
  "Support African businesses pursuing export growth and international expansion",
  "Coordinate rollout, commercial activation and ongoing growth across multiple jurisdictions",
];

const coreServices = [
  {
    no: "01",
    title: "Market Entry Strategy in Africa",
    desc: "We help institutions assess markets, prioritize jurisdictions, map regulatory requirements and design entry pathways.",
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
    no: "02",
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
    no: "03",
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
    no: "04",
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
    tagline:
      "For institutions entering African markets seeking a compliant and commercially viable presence.",
    tracks: [
      "Market Entry Blueprint™",
      "Market Setup System™",
      "Market Launch Engine™",
      "Market Command™",
    ],
    bestFor:
      "Foreign companies, investors assessing establishment and regulated businesses requiring setup support.",
    Icon: Building2,
    cta: "Discuss ACCESS AFRICA™",
  },
  {
    title: "GROWTH HACKING™",
    tagline:
      "For institutions expanding across multiple African markets with coordinated regional execution.",
    tracks: [
      "Regional Scaling Blueprint™",
      "Multi Market Expansion System™",
      "Market Development Engine™",
      "Growth Command™",
    ],
    bestFor:
      "Businesses scaling across Africa, multi country operators and institutions building regional systems.",
    Icon: TrendingUp,
    cta: "Explore GROWTH HACKING™",
  },
  {
    title: "GO GLOBAL™",
    tagline:
      "For African businesses seeking structured expansion into international markets.",
    tracks: [
      "Global Markets Blueprint™",
      "Global Structuring Framework™",
      "Global Access Engine™",
      "Global Command™",
    ],
    bestFor:
      "African enterprises seeking export growth, international expansion or structured entry outside Africa.",
    Icon: Globe,
    cta: "Discuss GO GLOBAL™",
  },
  {
    title: "TRADE AFRICA™",
    tagline:
      "For institutions executing cross border trade flows, transactions and supply chain systems.",
    tracks: [
      "Trade Structuring Framework™",
      "Supply Chain System™",
      "Trade Activation Engine™",
      "Trade Command™",
    ],
    bestFor:
      "Importers, exporters, distributors, trade platforms and institutions executing cross border transactions.",
    Icon: Ship,
    cta: "Discuss TRADE AFRICA™",
  },
  {
    title: "AFRICA INTEL™",
    tagline:
      "For institutions that need stronger intelligence and commercial visibility before entry or expansion.",
    tracks: [
      "Intelligence Reports",
      "Ecosystem Access Engine™",
      "Capital Intelligence Framework™",
      "Intelligence Subscription",
    ],
    bestFor:
      "Investors, market entrants, growth teams and businesses requiring intelligence before deployment.",
    Icon: Search,
    cta: "Explore AFRICA INTEL™",
  },
];

const advisedFor = [
  "Foreign companies entering African markets",
  "Businesses expanding into additional jurisdictions",
  "African companies building regional scale",
  "African enterprises preparing for global entry",
  "Investors evaluating expansion opportunities",
  "Trade and market development actors",
  "Regulated businesses managing cross border complexity",
];

const whyEngage = [
  "Choose markets more intelligently",
  "Bring structure to entry, scale, trade and channel strategy",
  "Improve visibility across regulation and execution risk",
  "Connect market intelligence with commercial decision making",
  "Support stronger rollout discipline across jurisdictions",
  "Productized pathways matching your growth cycle",
];

const sectors = [
  "Financial services and fintech",
  "Digital services and technology",
  "Healthcare and health systems",
  "Agribusiness and food systems",
  "Manufacturing and industrial trade",
  "Logistics and mobility",
  "Education and skills platforms",
  "Creative economy and digital content",
  "Infrastructure linked commercial platforms",
];

const engagement = [
  {
    step: "1",
    title: "Expansion Consultation",
    desc: "Understanding geographic scope, sector context and execution priorities.",
  },
  {
    step: "2",
    title: "Mandate Structuring",
    desc: "Defining product track, sequencing logic, markets and delivery model.",
  },
  {
    step: "3",
    title: "Market Readiness",
    desc: "Regulatory mapping, operating model design and partner identification.",
  },
  {
    step: "4",
    title: "Execution & Activation",
    desc: "Support across entry, launch, trade execution and commercial activation.",
  },
  {
    step: "5",
    title: "Ongoing Growth",
    desc: "Scale, performance management and new market rollout coordination.",
  },
];

const faqs = [
  {
    q: "What is the first step before entering a new African market?",
    a: "The first step is to assess the market opportunity, regulatory environment, route to market options, operating implications and strategic fit with the institution’s business model and growth goals.",
  },
  {
    q: "Do you support entry into one market or multi country expansion?",
    a: "Yes. Credence Africa supports both single market entry and phased multi country expansion across regional blocs.",
  },
  {
    q: "Do you help with regulatory and licensing issues?",
    a: "Yes. We support licensing pathway mapping, regulatory approvals planning, compliance coordination and market setup considerations as part of entry and expansion.",
  },
  {
    q: "Can you support trade facilitation and cross border transactions?",
    a: "Yes. We support trade structuring, commercial contracting, payment pathway design, logistics alignment, supply chain coordination and transaction activation.",
  },
  {
    q: "Do you work with African businesses expanding globally?",
    a: "Yes. GO GLOBAL™ supports export readiness, international market selection, cross border structuring, partnership development and global market entry coordination.",
  },
  {
    q: "Do you provide market intelligence before expansion begins?",
    a: "Yes. AFRICA INTEL™ supports sector analysis, opportunity mapping, competitor review, stakeholder mapping, partner identification and ongoing market monitoring.",
  },
];

/* The three directions of travel: the page's organizing spine.
   These are real, sequential stages of expansion, so numbering is earned. */
const corridor = [
  {
    tag: "INTO",
    title: "Into Africa",
    line: "Enter African markets with clarity.",
  },
  {
    tag: "ACROSS",
    title: "Across Africa",
    line: "Expand across borders with structure.",
  },
  {
    tag: "BEYOND",
    title: "Beyond Africa",
    line: "Scale globally with commercial precision.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TradeGrowthPage() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes tg-corridor {
          from { transform: translateX(-0.5rem); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
        .tg-corridor-item { animation: tg-corridor 0.6s ease-out both; }
        .tg-arrow { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .group:hover .tg-arrow,
        .tg-row:hover .tg-arrow { transform: translateX(0.6rem); }
        @media (prefers-reduced-motion: reduce) {
          .tg-corridor-item { animation: none; }
          .tg-arrow { transition: none; }
          .group:hover .tg-arrow,
          .tg-row:hover .tg-arrow { transform: none; }
        }
      `}</style>

      {/* ============================================================ */}
      {/* HERO: navy drench with image + corridor manifest             */}
      {/* ============================================================ */}
      <section className="relative isolate overflow-hidden bg-foreground">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Trade corridor and skyline across an African growth market"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Trade &amp; Growth Advisory
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Market entry and expansion across Africa and beyond
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/85 md:text-xl">
            Credence Africa helps institutions establish presence, expand across
            regional blocs and build global growth pathways, from market interest
            to market execution.
          </p>

          {/* Corridor manifest: the three directions of travel */}
          <div className="mt-12 grid border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {corridor.map((c, i) => (
              <div
                key={c.tag}
                className="tg-corridor-item flex items-baseline gap-4 py-6 sm:flex-col sm:gap-3 sm:px-6 sm:first:pl-0"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {c.tag}
                </span>
                <span className="text-base font-light leading-snug text-background/80">
                  {c.line}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ConsultationDialog triggerClassName="h-14 rounded-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90">
              Discuss Market Entry Strategy
              <ArrowUpRight className="ml-1 size-5 tg-arrow" />
            </ConsultationDialog>
            <ConsultationDialog
              variant="outline"
              triggerClassName="h-14 rounded-none border-2 border-background/40 bg-transparent px-8 text-base font-light text-background hover:bg-background/10 hover:text-background"
            >
              Plan Cross Border Expansion
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POSITIONING: light ground, large pull-statement              */}
      {/* ============================================================ */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aa3018]">
                Executive Positioning
              </p>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Built for institutions ready to execute
              </h2>
              <ConsultationDialog
                variant="outline"
                triggerClassName="mt-8 h-14 rounded-none border-2 border-primary bg-background px-8 text-base font-light text-[#aa3018] hover:bg-primary hover:text-foreground"
              >
                Speak to the Team
              </ConsultationDialog>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <p className="text-balance font-light leading-[1.25] tracking-[-0.01em] text-foreground [font-size:clamp(1.4rem,2.6vw,2rem)]">
                Growth in Africa is shaped by more than market opportunity. It is
                shaped by regulatory access, market sequencing, route to market
                strategy, partner quality and operating model design.
              </p>
              <p className="max-w-2xl text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                We help clients move from market interest to market execution
                through advisory that connects commercial strategy, compliance,
                ecosystem access and operational rollout.
              </p>
              <p className="border-t border-border pt-6 text-base font-light italic leading-relaxed text-foreground/80 md:text-lg">
                “This gives executive teams a clearer basis for market selection,
                faster decision making and stronger control over expansion risk.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHO WE ADVISE: navy band, ledger rows                        */}
      {/* ============================================================ */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Into, across <span className="text-primary">and beyond</span> Africa
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/80">
                Built for organizations whose growth agenda depends on entering
                new markets or scaling across borders.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-y border-white/15 divide-y divide-white/15">
                {advisedFor.map((item) => (
                  <div
                    key={item}
                    className="tg-row group flex items-center gap-6 py-5 transition-colors hover:bg-white/[0.06]"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-primary"
                      aria-hidden="true"
                    />
                    <p className="flex-1 text-base font-light leading-snug text-background md:text-lg">
                      {item}
                    </p>
                    <ArrowRight
                      className="size-5 shrink-0 text-background/40 tg-arrow"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
              <ConsultationDialog asChild triggerClassName="group mt-8 inline-flex items-center gap-2 text-sm font-light uppercase tracking-[0.15em] text-primary transition-colors hover:text-primary/70">
                Discuss your expansion objective
                <ArrowRight className="size-4 tg-arrow" aria-hidden="true" />
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE SOLVE: light ground, two-column ledger               */}
      {/* ============================================================ */}
      <section className="bg-[#F2F2F2]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aa3018]">
              From ambition to execution
            </p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              What Credence Africa helps you solve
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              A clear path from market ambition to market execution. We help
              leadership teams answer the questions that matter before capital is
              deployed.
            </p>
          </div>

          <div className="mt-12 grid border-t border-border md:grid-cols-2 md:gap-x-12">
            {solveItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-border py-5"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-primary"
                  aria-hidden="true"
                />
                <p className="text-base font-light leading-relaxed text-foreground/85">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <ConsultationDialog triggerClassName="mt-10 h-14 w-full rounded-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90 sm:w-auto">
            Explore the Right Growth Pathway
          </ConsultationDialog>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CORE ADVISORY SERVICES: deep-red drench, expandable rows     */}
      {/* white text on #aa3018 (~6.7:1) passes AA                     */}
      {/* ============================================================ */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
              Core advisory
            </p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Four mandates that move institutions across markets
            </h2>
          </div>

          <div className="mt-12 border-t border-white/25">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="grid gap-6 border-b border-white/25 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-light tabular-nums text-white/70 [font-size:clamp(2rem,5vw,3.5rem)] leading-none">
                      {service.no}
                    </span>
                    <h3 className="text-balance font-normal leading-tight text-white [font-size:clamp(1.35rem,2.4vw,1.9rem)]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/85 md:text-base">
                    {service.desc}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 border-b border-white/15 py-2 text-sm font-light leading-snug text-white/90"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-white/70"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <ConsultationDialog triggerClassName="mt-12 h-14 rounded-none bg-foreground px-8 text-base font-light text-background hover:bg-foreground/90">
            Discuss Market Entry Strategy
          </ConsultationDialog>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT PATHWAYS: light ground, passport-stamp register      */}
      {/* ============================================================ */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aa3018]">
              Product pathways
            </p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Productized systems built for outcomes
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              Grounding your expansion in a structured system, matched to where you
              are in the growth cycle.
            </p>
          </div>

          <div className="mt-12 border-t border-border">
            {productPathways.map(({ title, tagline, tracks, bestFor, Icon, cta }) => (
              <div
                key={title}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-4">
                  <Icon
                    className="size-8 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-normal leading-tight text-foreground [font-size:clamp(1.5rem,3vw,2.25rem)]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-foreground/75">
                    {tagline}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                    Tracks
                  </p>
                  <ul className="mt-3 space-y-px">
                    {tracks.map((track) => (
                      <li
                        key={track}
                        className="flex items-center gap-3 border-b border-border py-2.5 text-sm font-light text-foreground/85"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 bg-primary"
                          aria-hidden="true"
                        />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col md:col-span-3">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                    Best suited for
                  </p>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-foreground/75">
                    {bestFor}
                  </p>
                  <ConsultationDialog asChild triggerClassName="group mt-5 inline-flex items-center gap-2 text-sm font-light uppercase tracking-[0.12em] text-[#aa3018] transition-colors hover:text-[#aa3018]/70">
                    {cta}
                    <ArrowRight className="size-4 tg-arrow" aria-hidden="true" />
                  </ConsultationDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY ENGAGE: navy band with image + value ledger              */}
      {/* ============================================================ */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Why executive teams engage
              </p>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                A more strategic approach to expansion
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-background/80 md:text-lg">
                Institutions engage Credence Africa when route to market,
                regulatory timing, partner quality and operating model design begin
                to shape investment outcomes.
              </p>

              <div className="mt-8 border-t border-white/15">
                {whyEngage.map((val) => (
                  <div
                    key={val}
                    className="flex items-start gap-4 border-b border-white/15 py-4"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                      aria-hidden="true"
                    />
                    <p className="text-base font-light leading-snug text-background/90">
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              <ConsultationDialog triggerClassName="mt-8 h-14 w-full rounded-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90 sm:w-auto">
                See How Your Expansion Can Be Structured
              </ConsultationDialog>
            </div>

            <div className="relative min-h-[22rem] lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
                alt="Strategy session planning regional market expansion"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRIORITY SECTORS: light ground, ledger rows                  */}
      {/* ============================================================ */}
      <section className="bg-[#F2F2F2]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aa3018]">
                Priority sectors
              </p>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Where our expansion work concentrates
              </h2>
              <ConsultationDialog
                variant="outline"
                triggerClassName="mt-8 h-14 w-full rounded-none border-2 border-primary bg-transparent px-8 text-base font-light text-[#aa3018] hover:bg-primary hover:text-foreground sm:w-auto"
              >
                Discuss Sector Specific Expansion
              </ConsultationDialog>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-border">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className="flex items-baseline gap-5 border-b border-border py-4"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15em] bg-primary"
                      aria-hidden="true"
                    />
                    <p className="text-base font-light text-foreground/85 md:text-lg">
                      {sector}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW ENGAGEMENT WORKS: navy band, sequential corridor         */}
      {/* (a real 5-step sequence, so numbering is earned)             */}
      {/* ============================================================ */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            How engagement works
          </h2>

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
            {engagement.map((s, i) => (
              <div
                key={s.step}
                className="group relative flex flex-col border-t-2 border-primary pt-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-light tabular-nums text-primary [font-size:clamp(2rem,4vw,2.75rem)] leading-none">
                    {s.step}
                  </span>
                  {i < engagement.length - 1 && (
                    <ArrowRight
                      className="hidden size-5 text-background/30 tg-arrow lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-normal leading-tight text-background">
                  {s.title}
                </h3>
                <p className="mt-3 pr-4 text-sm font-light leading-relaxed text-background/75">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <ConsultationDialog triggerClassName="mt-14 h-14 rounded-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90">
            Plan Cross Border Expansion
          </ConsultationDialog>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQs: light ground                                           */}
      {/* ============================================================ */}
      <section className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Trade &amp; Growth FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-border last:border-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-normal text-foreground hover:no-underline md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm font-light leading-relaxed text-foreground/75 md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CONVERSION: deep-red drench (white passes AA on it)    */}
      {/* ============================================================ */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Trade and growth support for institutions ready to expand across
              Africa
            </h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your institution is entering African markets, building cross border
              trade pathways or taking African products global, Credence Africa
              provides the strategic support to move that mandate forward with
              structure and clarity.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ConsultationDialog triggerClassName="h-14 rounded-none bg-foreground px-8 text-base font-light text-background hover:bg-foreground/90">
                Discuss Market Entry Strategy
              </ConsultationDialog>
              <ConsultationDialog
                variant="outline"
                triggerClassName="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white/10 hover:text-white"
              >
                Plan Cross Border Expansion
              </ConsultationDialog>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/25 pt-10 text-white md:flex-row md:items-center md:gap-12">
            <a
              href="mailto:connect@credence.africa"
              className="flex items-center gap-3 text-sm font-light hover:underline md:text-base"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              connect@credence.africa
            </a>
            <a
              href="tel:+254719468240"
              className="flex items-center gap-3 text-sm font-light hover:underline md:text-base"
            >
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              +254 719 468 240
            </a>
            <span className="flex items-center gap-3 text-sm font-light md:text-base">
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              Nairobi, Kenya
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
