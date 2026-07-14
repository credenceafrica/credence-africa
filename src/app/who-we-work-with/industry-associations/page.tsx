import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Industry Associations and Ecosystem Actors",
  description:
    "Credence Africa helps industry associations, chambers, professional bodies, sector platforms and ecosystem builders strengthen their institutions, serve members better, shape policy and convene their sectors with credibility.",
};

const ACTORS = [
  "Industry Associations",
  "Chambers",
  "Professional Bodies",
  "Sector Platforms",
  "Ecosystem Builders",
];

/** The four verbs of the association mandate, echoed from the Overview. */
const MANDATE = ["Represent", "Convene", "Develop", "Defend"];

const REASONS = [
  "Advocacy and policy engagement support built on stakeholder mapping and reform participation",
  "Institutional strengthening for secretariats, boards and governance structures",
  "Member capacity building delivered through the Credence Institute's schools and academies",
  "End-to-end convening capability for association events, sector dialogues and expos",
  "Sector research, market intelligence and thought leadership through Credible Perspectives",
];

const SUPPORT: { id: string; title: string; items: string[] }[] = [
  {
    id: "policy-advocacy",
    title: "Policy, Advocacy and Sector Representation",
    items: [
      "Policy analysis and institutional position development",
      "Advocacy strategy, reform participation and consultation response",
      "Coalition engagement and multi-stakeholder alignment",
      "Stakeholder mapping and political economy insight",
      "Engagement with ministries, regulators, counties and agencies on behalf of the sector",
    ],
  },
  {
    id: "institutional-strengthening",
    title: "Institutional Strengthening and Governance",
    items: [
      "Board Governance Academy for association boards and councils",
      "Organizational Strengthening Academy: governance improvement, operating systems, compliance readiness and performance frameworks",
      "Management and Leadership Academy for secretariat leadership",
      "Staff Development Academy for secretariat teams",
      "Sustainable revenue and member value model development",
    ],
  },
  {
    id: "member-services",
    title: "Member Services and Capacity Building",
    items: [
      "Co-designed member training through the relevant schools and academies, from entrepreneurship and cooperative governance to technical and professional credentials",
      "Certification programs that raise professional standards across the sector",
      "Member capital readiness and market access programs",
      "Sector-specific executive education and leadership development",
    ],
  },
  {
    id: "convening-platforms",
    title: "Convening, Events and Sector Platforms",
    items: [
      "Credence Convene: association meetings, AGMs, sector convenings, executive roundtables and policy dialogues with documented outcomes",
      "Credence Engage: member recruitment drives, trade expos, exhibitions and audience activation",
      "Partnership and co-hosting opportunities across Credence Events platforms, including Credence Business Week, Policy & Markets and the Public Affairs Conference",
      "Awards, recognition platforms and flagship sector days",
    ],
  },
  {
    id: "intelligence-visibility",
    title: "Intelligence, Research and Sector Visibility",
    items: [
      "Sector research, market briefs and policy intelligence through Credible Perspectives",
      "Thought leadership content: commentary, interviews, podcasts and publications",
      "Sector narratives and public positioning that build institutional credibility",
      "Curated sector communities and strategic networks through Credence Networks",
    ],
  },
];

const SECTORS = [
  "Financial services",
  "Cooperatives",
  "Agribusiness",
  "Healthcare",
  "Mobility and transport",
  "Energy and the green economy",
  "The creative economy",
  "Technology and the digital economy",
  "Trade",
  "Manufacturing",
  "Professional services",
];

/** Lines written as "Label: detail" carry the label at full ink, the detail muted. */
function SupportLine({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  if (idx === -1) {
    return (
      <span className="text-pretty break-words text-base font-light leading-relaxed text-foreground/70">
        {text}
      </span>
    );
  }
  return (
    <span className="text-pretty break-words text-base font-light leading-relaxed text-foreground/70">
      <span className="text-foreground">{text.slice(0, idx)}:</span> {text.slice(idx + 2)}
    </span>
  );
}

export default function IndustryAssociationsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy. The headline is a triad, so it is set as three stacked lines,
          the third landing in vermillion. Actor types close the band on a hairline index. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="text-xs font-light uppercase tracking-[0.2em] text-background/50">
                Who We Work With
              </p>
              <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                <span className="block">Stronger Associations.</span>
                <span className="block">Stronger Sectors.</span>
                <span className="block text-primary">Stronger Ecosystems.</span>
              </h1>
            </div>

            <div className="lg:col-span-6 lg:self-end">
              <p className="max-w-prose text-pretty border-t border-white/15 pt-6 text-base font-light leading-relaxed text-background/80 md:text-lg">
                Credence Africa helps industry associations, chambers, professional bodies, sector
                platforms and ecosystem builders strengthen their institutions, serve members better,
                shape policy and convene their sectors with credibility.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 border-b border-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {ACTORS.map((actor) => (
              <li
                key={actor}
                className="break-words border-t border-white/15 py-4 pr-4 text-sm font-light text-background/60"
              >
                {actor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Overview: light. Prose left; the four verbs of the mandate set as a
          hairline column at the right, echoing the sentence that names them. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Overview
              </h2>
              <div className="mt-8 max-w-prose space-y-6 border-t border-foreground/12 pt-8">
                <p className="text-pretty text-base font-light leading-relaxed text-foreground md:text-lg">
                  Associations and ecosystem institutions carry a unique mandate: to represent,
                  convene, develop and defend the interests of entire sectors. Doing this well
                  requires institutional strength, credible policy engagement, valuable member
                  services, sustainable revenue models and platforms that bring the sector together.
                </p>
                <p className="text-pretty text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                  Credence Africa partners with associations and ecosystem actors across governance,
                  advocacy, member capability, convening and intelligence, helping representative
                  institutions become more credible, more valuable to members and more influential in
                  shaping their sectors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:self-end">
              <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                {MANDATE.map((verb) => (
                  <li key={verb} className="flex items-center gap-4 py-4 md:py-5">
                    <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="break-words text-lg font-normal leading-snug text-foreground">
                      {verb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why: deep red. Full-width heading, then five reasons as one calm column of
          divided rows held to the left three quarters of the band. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Associations Work With Credence Africa
          </h2>

          <ul className="mt-10 max-w-4xl divide-y divide-white/25 border-y border-white/25 md:mt-14">
            {REASONS.map((reason) => (
              <li
                key={reason}
                className="text-pretty break-words py-6 pr-4 text-base font-light leading-relaxed text-white/90 md:py-8 md:text-lg"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How We Support: light. A two-column rail. A standing index of the five groups
          holds the left column; the ledger of groups runs down the right. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                  How We Support Associations and Ecosystem Actors
                </h2>

                <nav aria-label="Support areas" className="mt-8 hidden lg:block">
                  <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                    {SUPPORT.map((group) => (
                      <li key={group.id}>
                        <Link
                          href={`#${group.id}`}
                          className="block break-words py-3 pr-4 text-sm font-light leading-relaxed text-foreground/60 transition-colors hover:text-primary"
                        >
                          {group.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="min-w-0 divide-y divide-foreground/12 border-y border-foreground/12 lg:col-span-8">
              {SUPPORT.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-28 py-10 md:py-12">
                  <h3 className="flex gap-4 text-pretty break-words text-lg font-normal leading-snug text-foreground md:text-xl">
                    <span className="mt-[0.6rem] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="min-w-0">{group.title}</span>
                  </h3>

                  <ul className="mt-5 divide-y divide-foreground/10 md:mt-6">
                    {group.items.map((item) => (
                      <li key={item} className="min-w-0 py-3 first:pt-0 last:pb-0 md:py-4">
                        <SupportLine text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sectors: navy. A wide hairline index of the sectors the association may span. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>

          <ul className="mt-10 grid grid-cols-1 border-b border-white/15 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <li
                key={sector}
                className="text-pretty break-words border-t border-white/15 py-5 pr-4 text-base font-light leading-relaxed text-background/80 md:py-6 md:text-lg"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Start the Conversation: deep red ground, white type and a white button. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your association is strengthening its institution, shaping sector policy, building
              member value or convening your industry, partner with Credence Africa. We help
              representative institutions lead.
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
