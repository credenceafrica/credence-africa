import type { Metadata } from "next";
import { ConsultationDialog } from "@/components/consultation-dialog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporations",
  description:
    "Credence Africa helps corporations raise and deploy capital, enter and expand across markets, navigate policy and regulation, build leadership capability and engage stakeholders with credibility.",
};

/** The overview's dependency chain, read as a ledger of what growth rests on. */
const dependencies: { term: string; rests: string }[] = [
  { term: "Market entry", rests: "depends on regulatory clarity" },
  { term: "Expansion", rests: "depends on capital" },
  { term: "License to operate", rests: "depends on stakeholder trust" },
  { term: "Performance", rests: "depends on leadership and institutional capability" },
];

const reasons: string[] = [
  "One integrated partner across capital, markets, policy, capability and stakeholder engagement",
  "Structured market entry and regional expansion systems, including ACCESS AFRICA™, GROWTH HACKING™ and TRADE AFRICA™",
  "Senior-level government relations and regulatory navigation support across ministries, regulators, counties and agencies",
  "Executive education and institutional strengthening for boards, management and staff",
  "Flagship platforms, from Capital Africa to Credence Business Week, that put your brand where policy, markets and capital meet",
];

const support: { group: string; lines: string[] }[] = [
  {
    group: "Capital and Transaction Support",
    lines: [
      "Capital strategy, financial modeling and investment structuring",
      "Investor targeting across private equity, DFIs, banks and strategic partners",
      "Term sheet support, negotiation preparation and transaction documentation readiness",
      "M&A support and strategic transaction positioning",
      "Investor relations, board reporting and follow-on capital planning",
    ],
  },
  {
    group: "Trade, Market Entry and Regional Growth",
    lines: [
      "Market selection, sizing and entry pathway design (ACCESS AFRICA™)",
      "Regional scaling across EAC, COMESA, ECOWAS and SADC (GROWTH HACKING™)",
      "Route-to-market, channel, distribution and partnership models",
      "Cross-border trade structuring, supply chain systems and transaction execution (TRADE AFRICA™)",
      "Market intelligence and commercial visibility before deployment (AFRICA INTEL™)",
    ],
  },
  {
    group: "Public Affairs and Policy Advisory",
    lines: [
      "Government relations and institutional engagement strategy",
      "Regulatory navigation, licensing, approvals sequencing and multi-agency coordination",
      "Policy advocacy, reform participation and consultation response",
      "Political economy insight, stakeholder mapping and issue management",
      "POLICY & MARKETS™: executive briefings and regulatory outlook sessions for forward visibility",
    ],
  },
  {
    group: "Executive Education and Institutional Strengthening",
    lines: [
      "Board Governance Academy for directors and senior executives",
      "Management and Leadership Academy for senior and middle managers",
      "Staff Development Academy for frontline, administrative and technical teams",
      "Professional credentials in regulatory compliance, cybersecurity, digital governance and data analysis",
    ],
  },
  {
    group: "Events, Activation and Stakeholder Engagement",
    lines: [
      "Credence Engage: product launches, roadshows, activations, experiential marketing and lead generation",
      "Credence Convene: AGMs, investor briefings, executive roundtables and stakeholder forums",
      "Sponsorship and thought leadership platforms across Capital Africa, Credence Business Week, the Public Affairs Conference and sector events",
    ],
  },
  {
    group: "Intelligence, Visibility and Networks",
    lines: [
      "Credible Perspectives: sector analysis, executive commentary, market briefs and media production",
      "Thought leadership positioning and institutional narrative development",
      "Credible Business Network: curated access to leaders, partners and sector conversations",
    ],
  },
];

const sectors: string[] = [
  "Financial services",
  "Agribusiness",
  "Healthcare and wellness",
  "Mobility, transport and logistics",
  "Technology and the digital economy",
  "Energy and the green economy",
  "The creative economy",
  "Trade, infrastructure and industrial development",
];

/**
 * Support lines are either "Named thing: what it covers" or a single clause.
 * Where a name leads, it carries the weight; the rest sits back.
 */
function SupportLine({ line }: { line: string }) {
  const idx = line.indexOf(": ");
  if (idx === -1) {
    return <p className="text-pretty text-base font-light leading-relaxed text-background/70">{line}</p>;
  }
  return (
    <p className="text-pretty text-base font-light leading-relaxed text-background/70">
      <span className="break-words font-normal text-background">{line.slice(0, idx)}</span>
      {": "}
      {line.slice(idx + 2)}
    </p>
  );
}

export default function CorporationsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise">
            <p className="text-xs font-light uppercase tracking-[0.2em] text-primary">Who We Work With</p>
            <h1 className="mt-6 max-w-4xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Strategic Advisory and Execution Support for Corporates Operating and Growing Across Africa
            </h1>
            <p className="mt-8 max-w-3xl text-pretty text-lg font-light leading-relaxed text-background/80">
              Credence Africa helps corporations raise and deploy capital, enter and expand across markets, navigate
              policy and regulation, build leadership capability and engage stakeholders with credibility.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview thesis: deep red, white. The dependency chain as a two-term ledger. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Corporate growth in African markets is interconnected.
          </h2>

          <div className="mt-12 border-y border-white/20 divide-y divide-white/20">
            {dependencies.map((d) => (
              <div key={d.term} className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6 md:py-6">
                <p className="break-words text-lg font-normal leading-snug text-white sm:col-span-4 md:text-xl">
                  {d.term}
                </p>
                <p className="text-pretty text-base font-light leading-relaxed text-white/80 sm:col-span-8">
                  {d.rests}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why: light. Integration paragraph on the rail, reasons as unmarked ledger rows. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Why Corporations Work With Credence Africa
              </h2>
              <p className="mt-6 max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/70">
                Credence Africa integrates strategic advisory, executive education, convenings, intelligence and
                networks into one execution system for corporations shaping growth across the continent, whether you are
                consolidating a home market, expanding regionally or repositioning for the future.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-y border-foreground/12 divide-y divide-foreground/12">
                {reasons.map((reason) => (
                  <p
                    key={reason}
                    className="text-pretty py-6 text-base font-light leading-relaxed text-foreground/80 md:py-7 md:text-lg"
                  >
                    {reason}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Support: navy. Six groups as a ledger of ledgers. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-primary [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Corporations
            </h2>
          </div>

          <div className="mt-12 border-t border-white/15 divide-y divide-white/15 md:mt-16">
            {support.map((block) => (
              <div key={block.group} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-16 md:py-12">
                <div className="lg:col-span-4">
                  <h3 className="break-words text-lg font-normal leading-snug text-background md:text-xl">
                    {block.group}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <div className="divide-y divide-white/10">
                    {block.lines.map((line) => (
                      <div key={line} className="py-3.5 first:pt-0">
                        <SupportLine line={line} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectors: light. A quiet grid of hairline cells. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>

          <div className="mt-10 grid grid-cols-1 border-t border-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <p
                key={sector}
                className="break-words border-b border-foreground/12 py-5 pr-6 text-base font-light leading-relaxed text-foreground/80"
              >
                {sector}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA: deep red. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your corporation is raising capital, entering a market, managing regulatory exposure or building
              institutional capability, Credence Africa provides the strategic integration and execution support to move
              the mandate forward. Book a corporate advisory consultation.
            </p>
            <div className="mt-10">
              <ConsultationDialog
                size="lg"
                triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90"
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
