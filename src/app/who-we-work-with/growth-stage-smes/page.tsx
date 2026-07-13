import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Growth-Stage SMEs and Enterprises",
  description:
    "Credence Africa helps growth-stage businesses become capital ready, expand into new markets, strengthen governance and systems and build long-term enterprise value.",
};

const overview = [
  "Growth-stage enterprises sit at the heart of Africa's economic transformation. Yet scaling is where many businesses stall. Capital is harder to access without structure. Markets are harder to enter without intelligence. Growth is harder to sustain without governance, systems and disciplined execution.",
  "Credence Africa is built to move enterprises from survival and experimentation into structured growth, commercial discipline, market visibility and long-term value, combining advisory, training, platforms and networks into one growth system.",
];

const whyCredence = [
  "A dedicated Enterprise Growth Capital pathway for SMEs preparing for equity, debt or hybrid capital",
  "Practical market entry and export systems built for African businesses, including GO GLOBAL™",
  "Hands-on enterprise development through the Entrepreneurship Academy and School of Business and Enterprise Development",
  "Direct access to investors and buyers through Capital Africa, Credence Business Week and the Nairobi Investment Summit",
  "Ongoing visibility and community through Credible Perspectives and the Credible Business Network",
];

const support: { group: string; lines: string[] }[] = [
  {
    group: "Capital Raising and Investor Readiness",
    lines: [
      "Growth capital readiness: capital strategy, financial modeling, valuation logic and unit economics validation",
      "Investment memoranda, pitch materials and data room architecture",
      "Debt and structured finance advisory",
      "Investor targeting, engagement strategy and negotiation preparation",
      "Investor relations, reporting systems and follow-on funding readiness",
    ],
  },
  {
    group: "Market Expansion and Trade",
    lines: [
      "Market selection, entry strategy and route-to-market design",
      "Regional expansion across EAC, COMESA, ECOWAS and SADC",
      "Export readiness and international expansion through GO GLOBAL™",
      "Trade structuring, buyer engagement and supply chain planning",
      "Strategic partnerships and commercial ecosystem development",
    ],
  },
  {
    group: "Enterprise Development and Capability",
    lines: [
      "Entrepreneurship Academy: business modelling, capital readiness, market access, sales, operations, governance and financial discipline",
      "Practice Growth Academy for firms selling expertise, advisory and professional services",
      "Management and Leadership Academy for founders building management teams",
      "Certified Data Analyst Professional and other credentials that build data, compliance and digital capability",
    ],
  },
  {
    group: "Regulatory and Policy Support",
    lines: [
      "Licensing pathways, approvals strategy and compliance readiness",
      "Regulatory scanning and engagement with regulators and counties",
      "Policy insight on upcoming regulation affecting your market",
    ],
  },
  {
    group: "Platforms, Visibility and Networks",
    lines: [
      "Capital Africa (February): Africa's flagship investment and capital platform",
      "Credence Business Week (August): trade, markets and sector business ecosystems",
      "Nairobi Investment Summit (November): investment pitches, showcases and investor connection",
      "Credible Business media segment and the Credible Business Network",
    ],
  },
];

const sectors = [
  "Agribusiness",
  "Financial services and fintech",
  "Healthcare and wellness",
  "Mobility and logistics",
  "Technology and the digital economy",
  "The creative economy",
  "The green and blue economies",
  "Manufacturing and industrial development",
];

export default function GrowthStageSmesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: deep-red ground, white type. The page opens and closes in deep red. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <p className="text-xs font-light uppercase tracking-[0.2em] text-white/70">Who We Work With</p>
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              From Growth Ambition to Structured, Investable, Scalable Enterprise
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-white/85">
              Credence Africa helps growth-stage businesses become capital ready, expand into new markets, strengthen
              governance and systems and build long-term enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview: navy, two columns of prose under a hairline. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-primary [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Overview
          </h2>
          <div className="mt-10 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-2 md:gap-12">
            {overview.map((p, i) => (
              <p key={i} className="max-w-prose text-pretty text-base font-light leading-relaxed text-background/80 md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why: light, single-line ledger rows. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Growth-Stage SMEs Work With Credence Africa
          </h2>
          <div className="mt-10 border-y border-foreground/12 divide-y divide-foreground/12 md:mt-12">
            {whyCredence.map((line, i) => (
              <div key={i} className="flex gap-4 py-6 md:gap-5 md:py-7">
                <span className="mt-[0.6rem] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                <p className="max-w-3xl text-pretty break-words text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Support: deep-red, the substance band. A stacked index: group name on the
          left rail, its work as hairline-divided lines on the right. Nested hairlines, no cards. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            How We Support Growth-Stage SMEs
          </h2>

          <div className="mt-10 border-t border-white/25 md:mt-14">
            {support.map((block) => (
              <div
                key={block.group}
                className="grid gap-6 border-b border-white/25 py-10 lg:grid-cols-12 lg:gap-16 md:py-12"
              >
                <div className="lg:col-span-4">
                  <h3 className="text-pretty break-words text-lg font-normal leading-snug text-white md:text-xl">
                    {block.group}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <ul className="divide-y divide-white/20 border-t border-white/20 lg:border-t-0 lg:divide-white/15">
                    {block.lines.map((line, i) => (
                      <li
                        key={i}
                        className={`text-pretty break-words text-base font-light leading-relaxed text-white/85 ${
                          i === 0 ? "pb-4 pt-4 lg:pt-0" : "py-4"
                        }`}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectors: navy, a ruled index of the sectors we serve you across. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="break-words border-t border-white/15 py-5 text-base font-light leading-relaxed text-background/85"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Start the Conversation: back to deep red, white type, white button. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your business is preparing to raise capital, enter a new market or professionalize for scale, start
              with a capital or growth consultation. We will help you define the pathway, close the gaps and execute.
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
