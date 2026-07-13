import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Investors and Capital Platforms",
  description:
    "Credence Africa works with private equity, venture capital, family offices, DFIs, banks, funds and investment platforms to source opportunity, manage risk, support portfolios and stay ahead of policy and market shifts.",
};

/** "Why Investors Work With Credence Africa": one row carries a colon-led term. */
const reasons: string[] = [
  "Curated deal flow and pipeline development across sectors and stages",
  "Transaction support spanning diligence readiness, structuring and negotiation preparation",
  "Political economy insight and regulatory intelligence that protect capital",
  "Portfolio-level support: governance, reporting, performance tracking and follow-on readiness",
  "Flagship capital platforms, including Capital Africa and the Nairobi Investment Summit",
];

/**
 * Three of the five support groups track capital through its own cycle: pipeline,
 * transaction, portfolio. They are set as parallel columns of one spread.
 */
const cycle: { title: string; lines: string[] }[] = [
  {
    title: "Deal Flow and Pipeline Development",
    lines: [
      "Capital pipeline development and investor mapping across sectors",
      "Opportunity screening aligned to mandate, ticket size and thesis",
      "Investment-ready enterprises emerging from our readiness pathways",
      "Project pipelines in infrastructure, energy, real assets and agribusiness",
      "Curated introductions through our networks and platforms",
    ],
  },
  {
    title: "Transaction and Diligence Support",
    lines: [
      "Due diligence support and counterpart assessment",
      "Capital structuring across equity, debt, mezzanine and blended structures",
      "Blended finance design and DFI positioning for impact-aligned capital",
      "Term sheet support, negotiation preparation and documentation readiness",
      "M&A support and strategic transaction positioning",
    ],
  },
  {
    title: "Portfolio and Post-Investment Support",
    lines: [
      "Investor reporting systems and governance support for portfolio companies",
      "Performance tracking and KPI frameworks",
      "Board reporting, governance documentation and institutional strengthening",
      "Capability building for portfolio management teams through the Credence Institute",
      "Follow-on funding readiness and exit positioning",
    ],
  },
];

/** The two groups that run alongside every mandate rather than inside the cycle. */
const standing: { title: string; lines: string[] }[] = [
  {
    title: "Market, Policy and Political Economy Intelligence",
    lines: [
      "AFRICA INTEL™: intelligence reports, ecosystem access and the Capital Intelligence Framework™",
      "POLICY & MARKETS™: executive briefings on emerging regulation and market implications of reform",
      "Sector analysis and market briefs through Credible Perspectives",
      "Stakeholder mapping and political economy risk assessment",
    ],
  },
  {
    title: "Capital Convenings and Networks",
    lines: [
      "Capital Africa (February): The African Opportunity showcase, Steak & Bullish private gathering of wealth, fund and asset managers and the Alpha Club Awards",
      "Nairobi Investment Summit (November): Family Office and Investor Forum, DFI and Development Finance Roundtable and private capital networking",
      "Sector financing platforms: Financing Education, Financing Healthcare, Financing Agribusiness and Financing Mobility",
      "Curated investor communities and strategic networks",
    ],
  },
];

const sectors: string[] = [
  "Financial services and fintech",
  "Agribusiness",
  "Healthcare",
  "Energy and climate",
  "Infrastructure and real assets",
  "Mobility and logistics",
  "Technology and the digital economy",
  "The creative economy",
];

/**
 * Many lines read "Named platform: what it carries". Where a name leads, it takes the
 * weight and the rest sits back. `tone` carries the band's colour pair.
 */
function LedgerLine({
  line,
  strong,
  soft,
}: {
  line: string;
  strong: string;
  soft: string;
}) {
  const idx = line.indexOf(": ");
  if (idx === -1) {
    return (
      <p className={`text-pretty break-words text-base font-light leading-relaxed ${soft}`}>{line}</p>
    );
  }
  return (
    <p className={`text-pretty break-words text-base font-light leading-relaxed ${soft}`}>
      <span className={`font-normal ${strong}`}>{line.slice(0, idx)}</span>
      {": "}
      {line.slice(idx + 2)}
    </p>
  );
}

export default function InvestorsAndCapitalPlatformsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy. The page's single kicker. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise">
            <p className="text-xs font-light uppercase tracking-[0.2em] text-primary">
              Investors and Capital Platforms
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Deal Flow, Diligence Support and Market Intelligence for{" "}
              <span className="text-primary">Capital Deployed in Africa</span>
            </h1>
            <p className="mt-8 max-w-3xl text-pretty text-lg font-light leading-relaxed text-background/80">
              Credence Africa works with private equity, venture capital, family offices, DFIs, banks,
              funds and investment platforms to source opportunity, manage risk, support portfolios and
              stay ahead of policy and market shifts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview: deep red. The thesis line carries the heading; the argument runs beneath it. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-4xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Deploying capital in African markets rewards those with better intelligence, better access
            and better execution support.
          </h2>

          <div className="mt-10 h-px w-full bg-white/25 md:mt-12" aria-hidden="true" />

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              Investors need credible deal flow, reliable diligence, regulatory and political economy
              insight, portfolio support and rooms where serious capital meets serious opportunity.
            </p>
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              Credence Africa serves the capital ecosystem end to end, from pipeline development and
              transaction support to post-investment performance, investor convenings and market
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why: light. Heading above a single wide ledger, no rail. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Investors Work With Credence Africa
          </h2>

          <div className="mt-10 divide-y divide-foreground/12 border-y border-foreground/12 md:mt-12">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-4 py-6 md:gap-6 md:py-7">
                <span className="mt-3 h-px w-6 shrink-0 bg-primary md:mt-3.5 md:w-8" aria-hidden="true" />
                <div className="min-w-0 max-w-3xl">
                  <LedgerLine line={reason} strong="text-foreground" soft="text-foreground/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Support, part one: navy. The capital cycle as three parallel columns,
          separated by vertical hairlines on wide screens and stacked on mobile. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-primary [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Investors and Capital Platforms
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-background/70">
              Three mandates carry capital through its cycle, from pipeline to exit positioning. Two more
              run alongside them.
            </p>
          </div>

          <div className="mt-12 grid divide-y divide-white/15 border-y border-white/15 md:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {cycle.map((group) => (
              <div
                key={group.title}
                className="py-8 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0"
              >
                <h3 className="break-words text-lg font-normal leading-snug text-background md:text-xl">
                  {group.title}
                </h3>
                <ul className="mt-6 divide-y divide-white/10">
                  {group.lines.map((line) => (
                    <li key={line} className="py-3.5 first:pt-0">
                      <LedgerLine line={line} strong="text-background" soft="text-background/75" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Support, part two: deep red with white text. The two standing capabilities. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Intelligence, Convenings and Networks
          </h2>

          <div className="mt-10 divide-y divide-white/20 border-y border-white/20 md:mt-12">
            {standing.map((group) => (
              <div key={group.title} className="grid gap-6 py-8 lg:grid-cols-12 lg:gap-16 md:py-12">
                <h3 className="break-words text-lg font-normal leading-snug text-white lg:col-span-4 md:text-xl">
                  {group.title}
                </h3>
                <ul className="divide-y divide-white/15 lg:col-span-8">
                  {group.lines.map((line) => (
                    <li key={line} className="py-3.5 first:pt-0 last:pb-0">
                      <LedgerLine line={line} strong="text-white" soft="text-white/80" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sectors: light. A ruled index, hairlines on both axes. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>

          <div className="mt-10 grid grid-cols-1 border-l border-t border-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <p
                key={sector}
                className="break-words border-b border-r border-foreground/12 px-5 py-6 text-base font-light leading-relaxed text-foreground/80"
              >
                {sector}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Start the Conversation: deep red. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If you are building a pipeline, executing a transaction, supporting a portfolio or seeking
              sharper market intelligence, engage Credence Africa. We help capital move with confidence in
              African markets.
            </p>
            <div className="mt-10">
              <ConsultationDialog
                size="lg"
                triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90"
              >
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
