"use client";

import { ConsultationDialog } from "@/components/consultation-dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  HandCoins,
  Users,
  Building2,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const targetAudience = [
  "Growth stage businesses preparing for equity, debt or hybrid capital",
  "Companies seeking expansion capital for regional or international growth",
  "Project sponsors developing bankable infrastructure, energy, real asset or large scale commercial projects",
  "Social enterprises and nonprofits seeking donor funding, grant readiness or blended finance",
  "Cooperatives and SACCOs seeking institutional capital, member capital mobilization or diversified investment structures",
  "Funds, investment platforms and portfolio companies requiring investor relations, reporting or post investment support",
  "Institutions preparing for mergers, acquisitions, strategic exits or secondary transactions",
];

const capitalPathways = [
  { title: "Private Capital", desc: "Private equity, venture capital, angel investment, family office capital and strategic investment." },
  { title: "Private Debt", desc: "Structured debt, working capital facilities, trade finance, project finance and credit facilities." },
  { title: "Development Finance", desc: "DFI aligned capital, concessional funding, catalytic capital and development focused finance structures." },
  { title: "Grants and Donor Funding", desc: "Grant funding, technical assistance, donor aligned capital and institutional fundraising pathways." },
  { title: "Blended Finance", desc: "Capital structures that combine grants, concessional capital, debt, equity or public sector support." },
  { title: "Alternative and Diaspora Capital", desc: "Crowdfunding, diaspora capital, community investment and non traditional capital pathways." },
  { title: "Public and Institutional Capital", desc: "Alignment with sovereign, sub-sovereign, public or institutional financing structures." },
];

const coreServices = [
  {
    title: "Investor Readiness and Capital Strategy",
    desc: "Strengthening the foundations required for investor confidence.",
    items: [
      "Capital strategy design aligned to business stage and funding objective",
      "Financial modeling, valuation logic and return frameworks",
      "Corporate structuring and governance alignment",
      "Investment memoranda, pitch materials and institutional deal narrative",
      "Data room architecture and due diligence readiness",
      "Commercial model refinement and unit economics validation",
    ],
  },
  {
    title: "Capital Raising and Transaction Support",
    desc: "Engaging capital providers and moving fundraising into execution.",
    items: [
      "Investor targeting across PE, VC, Family Offices, DFIs and Banks",
      "Capital pipeline development and investor mapping",
      "Lender and investor engagement strategy",
      "Term sheet support and negotiation preparation",
      "Transaction documentation readiness",
      "M&A support and strategic transaction positioning",
    ],
  },
  {
    title: "Capital Structuring and Blended Finance Design",
    desc: "Reflecting risk, return, impact and long term growth.",
    items: [
      "Capital stack design across equity, debt, grants and concessional funding",
      "Blended finance structures for social enterprises and projects",
      "Donor capital integration and DFI positioning",
      "Risk allocation and financing optimization",
      "Public-private capital alignment",
      "Structuring frameworks for scalable impact models",
    ],
  },
  {
    title: "Post-Investment Performance and Investor Relations",
    desc: "Maintaining credibility and readiness for follow-on capital.",
    items: [
      "Investor reporting systems and governance support",
      "Performance tracking and KPI frameworks",
      "Donor compliance and reporting support",
      "Shareholder and stakeholder communication frameworks",
      "Board reporting and governance documentation",
      "Follow-on funding readiness and capital planning",
    ],
  },
];

const productPathways = [
  {
    title: "Enterprise Growth Capital",
    desc: "For scale-ups and SMEs preparing for institutional capital.",
    tracks: ["Growth Capital Readiness", "Debt and Structured Finance", "Investor Relations"],
    bestFor: "Businesses raising expansion capital or refining capital structure.",
    icon: TrendingUp,
    cta: "Discuss Enterprise Growth Capital",
  },
  {
    title: "Grant Ready",
    desc: "For impact institutions seeking donor funding or blended capital.",
    tracks: ["Grant Funding and Donor Readiness", "Blended Finance Design", "Compliance and Reporting"],
    bestFor: "Organizations pursuing grants, donor partnerships or catalytic funding.",
    icon: HandCoins,
    cta: "Explore Grant Ready",
  },
  {
    title: "Cooperative Finance",
    desc: "For SACCOs and cooperatives seeking growth capital or diversified models.",
    tracks: ["Cooperative Growth Financing", "Blended Finance Access", "Diversified Investment"],
    bestFor: "SACCOs, housing and agricultural cooperatives.",
    icon: Users,
    cta: "Discuss Cooperative Finance",
  },
  {
    title: "Project Finance",
    desc: "For infrastructure and real asset projects requiring bankability.",
    tracks: ["Project Bankability", "Capital Structuring", "Transaction Execution"],
    bestFor: "Infrastructure developers, energy sponsors and industrial projects.",
    icon: Building2,
    cta: "Discuss Project Finance Support",
  },
];

const approachValues = [
  "Choose the right capital pathway intelligently",
  "Bring structure to documentation and preparation",
  "Improve visibility across funding instruments",
  "Connect capital strategy with governance",
  "Support stronger capital engagement",
  "Match the institution's capital cycle stage",
];

const mandates = [
  "Growth capital raises",
  "Regional expansion scale-up",
  "Debt and structured finance",
  "Project finance and bankability",
  "Blended finance structuring",
  "Donor aligned funding",
  "Catalytic capital strategy",
  "Grant readiness systems",
  "Investor relations",
  "M&A and exit positioning",
  "Capital restructuring and refinancing support",
];

const engagement = [
  { title: "Capital Consultation", desc: "Understanding funding objective, need and transaction context." },
  { title: "Mandate Structuring", desc: "Defining the advisory pathway, scope and workplan." },
  { title: "Readiness and Preparation", desc: "Strengthening financial, strategic and governance foundations." },
  { title: "Engagement and Execution", desc: "Targeting investors and structuring negotiations." },
  { title: "Post-Investment Support", desc: "Ongoing reporting, governance and follow-on readiness." },
];

const faqs = [
  { q: "What is the first step before raising capital in Africa?", a: "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, transaction materials, capital objective and the type of funding that best fits the mandate." },
  { q: "How do I know whether I need equity, debt, grant funding or blended finance?", a: "The right capital structure depends on growth stage, cash flow profile, repayment ability, project nature, investor expectations, impact objectives and institutional readiness. Credence Africa helps clients determine the most suitable capital pathway before engagement begins." },
  { q: "What does investor readiness include?", a: "Investor readiness includes financial modeling, governance alignment, capital structuring, diligence preparation, deal materials, management positioning, data room preparation and a capital narrative that makes commercial sense to the target capital provider." },
  { q: "Do you support blended finance and development finance mandates?", a: "Yes. Credence Africa supports blended finance design, DFI positioning, donor aligned funding strategies, risk allocation frameworks and structures that combine grants, concessional capital, debt and equity." },
  { q: "Can you support grant funding and donor readiness?", a: "Yes. We support donor mapping, proposal systems, funding pipeline development, compliance preparation, grant positioning, blended finance integration and reporting structures." },
  { q: "Can you support institutions after capital has been raised?", a: "Yes. We support post investment reporting, governance, donor compliance, stakeholder communication, follow on funding readiness and investor relations." },
  { q: "Do you work only with startups?", a: "No. This service supports growth stage businesses, established enterprises, social enterprises, cooperatives, project sponsors, funds and other institutions with capital mandates." },
];

export default function CapitalRaisingPage() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes crStackRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cr-rise { animation: crStackRise 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .cr-rise { animation: none; }
        }
      `}</style>

      {/* HERO: navy gravitas drench with image as a held-in panel, not full-bleed wash */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="cr-rise lg:col-span-7">
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Capital Raising and Investment Structuring
              </p>
              <h1 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Capital, structured for the institutions building Africa
              </h1>
              <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-background/80">
                Raise capital with stronger structure, clearer positioning and greater investor
                confidence across African markets. We help institutions prepare for capital,
                structure investment and move transactions forward.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-background hover:bg-primary/90 whitespace-normal text-center">
                  Book a Capital Strategy Consultation
                  <ArrowUpRight className="ml-1 size-5" aria-hidden="true" />
                </ConsultationDialog>
                <ConsultationDialog
                  variant="outline"
                  triggerClassName="h-14 rounded-none border-2 border-background/40 bg-transparent px-8 text-base font-light text-background hover:bg-background/10 hover:text-background"
                >
                  Discuss a Capital Raising Mandate
                </ConsultationDialog>
              </div>
            </div>

            <div className="cr-rise relative min-h-[16rem] lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Financial markets and institutional capital across Africa"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-foreground/20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* THE FUNCTION: light ledger statement, large pull-quote scale */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Executive function</p>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Capital raising shapes growth, timing and strategic flexibility
              </h2>
              <div className="mt-6 max-w-md space-y-4 text-base font-light leading-relaxed text-foreground/75">
                <p>
                  Institutions seeking capital need more than presentation materials. They need a
                  capital pathway aligned to business model, growth stage, funding objective, risk
                  profile and transaction readiness.
                </p>
              </div>
              <ConsultationDialog
                variant="outline"
                triggerClassName="mt-8 h-14 rounded-none border-2 border-primary bg-transparent px-8 text-base font-light text-primary hover:bg-primary hover:text-background"
              >
                Speak to the Team
              </ConsultationDialog>
            </div>

            <div className="flex items-center border-t border-foreground/12 pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <p className="text-balance font-normal leading-[1.15] tracking-[-0.01em] text-foreground [font-size:clamp(1.5rem,2.6vw,2.25rem)]">
                We help leadership teams define the right funding strategy, improve investor
                readiness and approach capital with{" "}
                <span className="text-primary">greater control over outcomes.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR: vermillion drench (deep red so white passes AA), ledger rows */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Built for institutions raising capital
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-white/85">
                For businesses, projects, funds and institutions that need to raise, structure or
                manage capital across Africa.
              </p>
              <ConsultationDialog triggerClassName="mt-8 h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90">
                Discuss Your Capital Objective
                <ArrowRight className="ml-1 size-4" aria-hidden="true" />
              </ConsultationDialog>
            </div>

            <div className="lg:col-span-8">
              <ol className="divide-y divide-white/25 border-y border-white/25">
                {targetAudience.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 py-5">
                    <span className="shrink-0 font-mono text-sm font-bold tabular-nums text-white/85">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-light leading-relaxed text-white">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CAPITAL PATHWAYS: light, full-width ledger rows, large index */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The instruments</p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Capital raising pathways
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-foreground/75">
              Choose the right capital pathway before time and resources are committed to investor
              engagement.
            </p>
          </div>

          <div className="mt-12 divide-y divide-foreground/12 border-y border-foreground/12">
            {capitalPathways.map((path, i) => (
              <div key={path.title} className="grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-5 md:col-span-5">
                  <span className="font-mono text-sm font-bold tabular-nums text-foreground/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-normal leading-tight text-primary [font-size:clamp(1.5rem,2.6vw,2rem)]">
                    {path.title}
                  </h3>
                </div>
                <p className="text-base font-light leading-relaxed text-foreground/75 md:col-span-7">
                  {path.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-background hover:bg-primary/90">
              Explore the Right Capital Pathway
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* CORE ADVISORY SERVICES: navy band, four indexed working blocks */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What we run</p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Capital raising advisory services
            </h2>
          </div>

          <div className="mt-12 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
            {coreServices.map((service, i) => (
              <div key={service.title} className="bg-foreground p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm font-bold tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-normal leading-tight text-background [font-size:clamp(1.35rem,2vw,1.75rem)]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 pl-9 text-sm font-light leading-relaxed text-background/75">
                  {service.desc}
                </p>
                <ul className="mt-6 divide-y divide-white/15 border-t border-white/15 pl-9">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-3 text-sm font-light leading-relaxed text-background/80"
                    >
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-background hover:bg-primary/90 whitespace-normal text-center">
              Book a Capital Strategy Consultation
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* FUNDRAISING PATHWAYS: light; four tracks as ledger panels with icons */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Specialized tracks</p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Fundraising pathways
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-foreground/75">
              Specialized tracks matching your institution&apos;s profile and readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-foreground/12 bg-foreground/12 md:grid-cols-2">
            {productPathways.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.title} className="flex flex-col bg-background p-8 md:p-10">
                  <Icon className="size-9 text-primary" aria-hidden="true" />
                  <h3 className="mt-6 font-normal leading-tight text-foreground [font-size:clamp(1.5rem,2.4vw,2rem)]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-base font-light leading-relaxed text-foreground/75">
                    {product.desc}
                  </p>

                  <div className="mt-6 border-t border-foreground/12 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                      Core tracks
                    </p>
                    <ul className="mt-3 space-y-2">
                      {product.tracks.map((track) => (
                        <li key={track} className="flex items-center gap-3 text-sm font-light text-foreground/85">
                          <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                          {track}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-foreground/12 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                      Best suited for
                    </p>
                    <p className="mt-2 text-sm font-light leading-relaxed text-foreground/85">
                      {product.bestFor}
                    </p>
                  </div>

                  <ConsultationDialog
                    variant="outline"
                    triggerClassName="mt-8 h-14 w-full rounded-none border-2 border-primary bg-transparent text-base font-light text-primary hover:bg-primary hover:text-background"
                  >
                    {product.cta}
                  </ConsultationDialog>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRATEGIC APPROACH: deep-red drench, white text passes AA */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Strategic approach to capital raising
              </h2>
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/90">
                Institutions engage Credence Africa when capital begins to shape strategic
                direction. We bring structure to readiness, documentation and transaction
                preparation.
              </p>
              <ConsultationDialog triggerClassName="mt-8 h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90 whitespace-normal text-center">
                See How Your Mandate Can Be Structured
              </ConsultationDialog>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/25 border-y border-white/25">
                {approachValues.map((value) => (
                  <li key={value} className="flex items-center gap-4 py-5">
                    <ArrowRight className="size-5 shrink-0 text-white" aria-hidden="true" />
                    <span className="text-base font-light leading-relaxed text-white md:text-lg">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATES: light, dense tag field */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Where we operate</p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Capital raising mandates
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {mandates.map((mandate) => (
              <span
                key={mandate}
                className="border border-foreground/15 bg-muted px-4 py-2.5 text-sm font-light text-foreground/85"
              >
                {mandate}
              </span>
            ))}
          </div>
          <ConsultationDialog
            variant="outline"
            triggerClassName="mt-10 h-14 rounded-none border-2 border-primary bg-transparent px-8 text-base font-light text-primary hover:bg-primary hover:text-background"
          >
            Discuss Your Mandate
          </ConsultationDialog>
        </div>
      </section>

      {/* HOW ENGAGEMENT WORKS: navy band; real 5-step sequence */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The sequence</p>
            <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How engagement works
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-white/15 border-y border-white/15">
            {engagement.map((step, i) => (
              <li key={step.title} className="grid items-baseline gap-3 py-7 md:grid-cols-12 md:gap-8">
                <div className="flex items-baseline gap-5 md:col-span-5">
                  <span className="font-normal leading-none text-primary [font-size:clamp(2rem,3.5vw,3rem)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-normal leading-tight text-background [font-size:clamp(1.25rem,2vw,1.6rem)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-base font-light leading-relaxed text-background/75 md:col-span-7">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-background hover:bg-primary/90 whitespace-normal text-center">
              Book a Capital Strategy Consultation
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* FAQs: light; preserved Radix accordion interactivity */}
      <section className="bg-background">
        <div className="container mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Capital raising FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-foreground/12 last:border-0">
                <AccordionTrigger className="py-6 text-left font-normal text-foreground [font-size:clamp(1.05rem,1.6vw,1.25rem)]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base font-light leading-relaxed text-foreground/75">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CONVERSION: deep-red drench close, white text passes AA */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Capital raising support
              </h2>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90">
                If your institution is preparing to raise capital, structure a funding pathway or
                align donor and commercial capital, Credence Africa provides the strategic support
                to move that agenda forward with clarity.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90 whitespace-normal text-center">
                  Book a Capital Strategy Consultation
                </ConsultationDialog>
                <ConsultationDialog
                  variant="outline"
                  triggerClassName="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-[#aa3018]"
                >
                  Discuss a Capital Raising Mandate
                </ConsultationDialog>
              </div>
            </div>

            <div className="border-t border-white/25 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <h3 className="font-normal text-white [font-size:clamp(1.35rem,2vw,1.75rem)]">
                Direct contact
              </h3>
              <div className="mt-8 space-y-5">
                <a
                  href="mailto:connect@credence.africa"
                  className="group flex items-center gap-4 text-lg text-white transition-opacity hover:opacity-80"
                >
                  <Mail className="size-6 shrink-0" aria-hidden="true" />
                  connect@credence.africa
                </a>
                <a
                  href="tel:+254719468240"
                  className="group flex items-center gap-4 text-lg text-white transition-opacity hover:opacity-80"
                >
                  <Phone className="size-6 shrink-0" aria-hidden="true" />
                  +254 719 468 240
                </a>
                <p className="pt-4 font-light leading-relaxed text-white/75">
                  Applewood Adams, Ngong Road
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
