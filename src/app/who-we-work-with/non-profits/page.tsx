import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Non-Profits and Development Organizations",
  description:
    "Credence Africa helps non-profits, NGOs, foundations and development organizations become better governed, more credible, more fundable and more effective in delivering impact.",
};

const institutions = ["Non-Profits", "NGOs", "Foundations", "Development Organizations"];

const overview = [
  "Mission-driven institutions carry some of Africa's most important mandates, in health, education, livelihoods, rights, climate and community development. But delivering impact at scale requires more than commitment. It requires strong governance, donor confidence, disciplined systems, credible advocacy and evidence of results.",
  "Credence Africa supports social impact institutions across funding, governance, capability, advocacy and visibility, helping organizations move from project-to-project survival toward institutional strength and sustainable impact.",
];

const why = [
  "A dedicated Grant Ready pathway covering donor readiness, blended finance design and compliance and reporting",
  "The School of Social Impact and Civic Leadership, built specifically for nonprofit and civic institutions",
  "Advocacy and policy engagement support grounded in stakeholder mapping and public interest credibility",
  "Convening capability for policy dialogues, public participation and multi-stakeholder consultations",
  "Research, impact narratives and thought leadership through Credible Perspectives",
];

const support: { title: string; lines: string[] }[] = [
  {
    title: "Funding, Grants and Blended Finance",
    lines: [
      "Grant funding and donor readiness: positioning, proposals and institutional credibility",
      "Blended finance design for social enterprises, projects and impact programs",
      "Donor capital integration and DFI positioning",
      "Donor compliance, reporting systems and accountability frameworks",
      "Follow-on funding readiness and diversified resource mobilization",
    ],
  },
  {
    title: "Governance and Institutional Strengthening",
    lines: [
      "School of Social Impact and Civic Leadership: governance, strategy, fundraising, partnerships, advocacy, program design and impact measurement",
      "Board Governance Academy for trustees and directors of mission-driven institutions",
      "Organizational Strengthening Academy: institutional diagnostics, policy development, compliance readiness and performance systems",
      "Staff Development Academy for program, administrative and frontline teams",
      "Certified Data Analyst Professional for monitoring, evaluation and evidence-based decision making",
    ],
  },
  {
    title: "Advocacy, Policy and Public Engagement",
    lines: [
      "Policy analysis, position development and advocacy strategy",
      "Participation in reform processes, consultations and coalition engagement",
      "Stakeholder mapping and engagement sequencing",
      "Public interest communication and issue management",
    ],
  },
  {
    title: "Convening and Stakeholder Platforms",
    lines: [
      "Policy roundtables, sector dialogues and public participation forums",
      "Stakeholder consultations with documented proceedings, resolutions and action matrices",
      "Communiques, policy briefs and follow-up engagement plans",
      "Community engagement and program activation through Credence Engage",
    ],
  },
  {
    title: "Research, Visibility and Impact Communication",
    lines: [
      "Research, publications and sector analysis through Credible Perspectives",
      "Impact narratives, executive commentary and media production",
      "Thought leadership positioning within your sector and with funders",
    ],
  },
];

const sectors = [
  "Healthcare and public health",
  "Education and skills",
  "Agriculture and food security",
  "Climate and the green economy",
  "Financial inclusion",
  "Gender and inclusion",
  "Governance and community development",
];

/** Lines written as "Label: detail" get the label at full weight of the ground, the detail muted. */
function SupportLine({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  if (idx === -1) {
    return (
      <p className="text-pretty break-words text-base font-light leading-relaxed text-background/75">{text}</p>
    );
  }
  return (
    <p className="text-pretty break-words text-base font-light leading-relaxed text-background/75">
      <span className="text-background">{text.slice(0, idx)}:</span> {text.slice(idx + 2)}
    </p>
  );
}

export default function NonProfitsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-primary">Who We Work With</p>
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Strengthening the Institutions That Deliver Public Value
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80">
              Credence Africa helps non-profits, NGOs, foundations and development organizations become better
              governed, more credible, more fundable and more effective in delivering impact.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 md:mt-16">
            {institutions.map((item) => (
              <li key={item} className="break-words text-sm font-light text-background/60">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Overview: light. Two paragraphs sit side by side under a single rule. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Overview
          </h2>
          <div className="mt-8 grid gap-8 border-t border-foreground/12 pt-8 md:mt-10 md:grid-cols-2 md:gap-12 md:pt-10">
            {overview.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/75 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why: deep red ground, white text. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Why Non-Profits Work With Credence Africa
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/20 border-y border-white/20">
                {why.map((item) => (
                  <li key={item} className="flex gap-4 py-5 md:py-6">
                    <span className="mt-[0.55rem] size-1.5 shrink-0 bg-white" aria-hidden="true" />
                    <p className="min-w-0 text-pretty break-words text-base font-light leading-relaxed text-white/85 md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Support: navy. Stacked index, one rail row per group. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Non-Profits and Development Organizations
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/15 border-y border-white/15 md:mt-14">
            {support.map((group) => (
              <div key={group.title} className="grid gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <h3 className="text-pretty break-words text-lg font-normal leading-snug text-primary md:text-xl">
                    {group.title}
                  </h3>
                </div>
                <div className="min-w-0 md:col-span-8">
                  <ul className="divide-y divide-white/10">
                    {group.lines.map((line) => (
                      <li key={line} className="py-3 first:pt-0 last:pb-0 md:py-4">
                        <SupportLine text={line} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectors: light. Hairline ledger grid. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Sectors We Serve You Across
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 border-b border-foreground/12 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <li
                    key={sector}
                    className="border-t border-foreground/12 py-4 pr-4 text-pretty break-words text-base font-light leading-relaxed text-foreground/80 md:py-5"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Start the Conversation: deep red. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your organization is pursuing donor funding, strengthening governance, building advocacy capability
              or convening stakeholders, book a consultation. We will help you build the institutional strength your
              mission deserves.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ConsultationDialog
                size="lg"
                triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90"
              >
                Book a Consultation
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </ConsultationDialog>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-primary"
              >
                <Link href="/who-we-work-with">Who We Work With</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
