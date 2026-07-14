import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Foreign Investors",
  description:
    "Credence Africa helps foreign investors and international companies assess opportunity, navigate regulation, establish presence and execute transactions across Africa's growth markets.",
};

/** "Why Foreign Investors Work With Credence Africa": two rows carry a system name. */
const reasons: { title: string; desc?: string }[] = [
  {
    title: "ACCESS AFRICA™",
    desc: "A structured system for compliant, commercially viable market entry.",
  },
  {
    title: "AFRICA INTEL™",
    desc: "Intelligence reports, ecosystem access and capital intelligence before deployment.",
  },
  {
    title:
      "Deep regulatory navigation and political economy insight across East, West, Southern and North Africa",
  },
  { title: "Structured government relations and public sector interface management" },
  {
    title:
      "Direct access to deal flow, partners and decision makers through flagship platforms and curated networks",
  },
];

/** ACCESS AFRICA™ is a genuine ordered sequence: blueprint, setup, launch, command. */
const entryStages: { name: string; desc: string }[] = [
  {
    name: "Market Entry Blueprint™",
    desc: "Entry pathway, licensing mapping and operating model design.",
  },
  {
    name: "Market Setup System™",
    desc: "Entity establishment, approvals and regulatory coordination.",
  },
  {
    name: "Market Launch Engine™",
    desc: "Route to market, distribution, partnerships and commercial activation.",
  },
  {
    name: "Market Command™",
    desc: "Ongoing coordination, performance oversight and multi-market rollout.",
  },
];

const supportGroups: { title: string; items: string[] }[] = [
  {
    title: "Market Intelligence and Opportunity Assessment",
    items: [
      "Intelligence reports, market sizing and demand assessment (AFRICA INTEL™)",
      "Jurisdiction selection and prioritization based on opportunity, regulation, timing and strategic fit",
      "Political economy and risk analysis",
      "Stakeholder mapping and influence analysis",
      "Capital Intelligence Framework™ for investors evaluating expansion opportunities",
    ],
  },
  {
    title: "Transaction and Investment Support",
    items: [
      "Investment pipeline development and opportunity screening",
      "Due diligence support and local counterpart assessment",
      "Deal structuring, negotiation preparation and transaction documentation readiness",
      "M&A support and strategic transaction positioning",
      "Post-investment monitoring, reporting and portfolio support",
    ],
  },
  {
    title: "Public Affairs and Regulatory Navigation",
    items: [
      "Licensing, approvals strategy and sequencing across multiple public bodies",
      "Government relations and institutional engagement planning",
      "Regulatory scanning and forward visibility on reform (POLICY & MARKETS™)",
      "Public sector interface management: meetings, submissions, follow-up and escalation",
    ],
  },
  {
    title: "Access, Platforms and Networks",
    items: [
      "Nairobi Investment Summit (November): Kenya and East Africa's investment gateway platform, including the Family Office and Investor Forum and DFI Roundtable",
      "Capital Africa (February): private capital, wealth and investment ecosystems",
      "Curated introductions to enterprises, projects, partners and public institutions",
      "Trade missions, transaction activation and buyer-seller facilitation",
    ],
  },
];

const sectors = [
  "Financial services and fintech",
  "Agribusiness and food systems",
  "Healthcare",
  "Energy and the green economy",
  "Infrastructure and industrial development",
  "Mobility and logistics",
  "Technology and the digital economy",
  "Real assets",
];

export default function ForeignInvestorsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-primary">
              Foreign Investors
            </p>
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Enter African Markets with Clarity, Credibility and{" "}
              <span className="text-primary">Local Insight</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Credence Africa helps foreign investors and international companies assess opportunity,
              navigate regulation, establish presence and execute transactions across Africa's growth
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview: light. Full-width heading over a two-column prose spread. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Overview
          </h2>
          <div className="cred-rule mt-8 h-px w-full bg-foreground/12" aria-hidden="true" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              Africa offers some of the world's most compelling growth opportunities; execution
              risk is real. Regulatory environments differ across jurisdictions. Political economy
              dynamics shape outcomes. Reliable intelligence, credible local relationships and
              disciplined market entry make the difference between ambition and results.
            </p>
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              Credence Africa serves as a trusted execution partner for foreign investors and market
              entrants, combining market intelligence, entry strategy, regulatory navigation,
              stakeholder access and transaction support into a single coordinated system.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why: deep red ground, white text. Single-column ledger. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Foreign Investors Work With Credence Africa
          </h2>
          <div className="mt-10 border-y border-white/20 divide-y divide-white/20 md:mt-12">
            {reasons.map((reason) => (
              <div key={reason.title} className="py-6 md:py-7">
                {reason.desc ? (
                  <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                    <h3 className="break-words text-lg font-normal leading-snug text-white md:col-span-4 md:text-xl">
                      {reason.title}
                    </h3>
                    <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-white/80 md:col-span-8">
                      {reason.desc}
                    </p>
                  </div>
                ) : (
                  <p className="max-w-3xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
                    {reason.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACCESS AFRICA™: navy. A genuine four-stage sequence, so it is numbered. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Market Entry and Establishment{" "}
                <span className="break-words text-primary">(ACCESS AFRICA&trade;)</span>
              </h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-background/70">
                Four stages, run in sequence, from the first licensing map to multi-market rollout.
              </p>
            </div>

            <ol className="border-y border-white/15 divide-y divide-white/15 lg:col-span-8">
              {entryStages.map((stage, i) => (
                <li key={stage.name} className="grid grid-cols-[3rem_1fr] gap-4 py-6 md:gap-8 md:py-8">
                  <span className="text-lg font-light tabular-nums text-primary md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-normal leading-snug text-background md:text-xl">
                      {stage.name}
                    </h3>
                    <p className="mt-1.5 max-w-prose text-pretty text-base font-light leading-relaxed text-background/75">
                      {stage.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. How We Support: light. Stacked index, one hairline row per capability. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Foreign Investors
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-foreground/70">
              Market entry is one part of the mandate. Four further capabilities carry the work from
              intelligence through transaction, regulation and access.
            </p>
          </div>

          <div className="mt-12 border-y border-foreground/12 divide-y divide-foreground/12">
            {supportGroups.map((group) => (
              <div key={group.title} className="grid gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12">
                <h3 className="text-balance text-lg font-normal leading-snug text-foreground md:col-span-4 md:text-xl">
                  {group.title}
                </h3>
                <ul className="space-y-4 md:col-span-8">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span
                        className="mt-3 h-px w-4 shrink-0 bg-primary md:mt-3.5"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words text-pretty text-base font-light leading-relaxed text-foreground/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sectors: navy. A hairline index of terms. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Sectors We Serve You Across
              </h2>
            </div>
            <ul className="border-t border-white/15 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="break-words border-b border-white/15 py-5 pr-6 text-base font-light leading-relaxed text-background/80"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Start the Conversation: deep red. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If you are evaluating African markets, planning entry or executing a transaction, begin
              with a market entry or capital consultation. We will help you move with intelligence,
              structure and local credibility.
            </p>
            <div className="mt-9">
              <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90">
                Book a Consultation
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
