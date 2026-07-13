import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Governments and Public Institutions",
  description:
    "Credence Africa supports national governments, county governments, regulators, agencies and public institutions to design credible engagement, attract investment, strengthen capability and deliver institutional results.",
};

const institutions = [
  "National governments",
  "County governments",
  "Regulators",
  "Agencies",
  "Public institutions",
];

/** The four modes named in the Overview, lifted out as an index of the partnership. */
const modes = [
  "Convening",
  "Capacity building",
  "Investment enablement",
  "Policy intelligence",
];

const why = [
  "Proven capability in designing and managing formal, decision-oriented convenings through Credence Convene",
  "Public participation and stakeholder consultation support with documented, actionable outcomes",
  "Executive education and institutional strengthening for boards, management and staff of public bodies",
  "Investment promotion platforms, including the Nairobi Investment Summit, connecting government with investors and DFIs",
  "Policy intelligence and sector analysis through Credible Perspectives and POLICY & MARKETS™",
];

const support: { title: string; items: string[] }[] = [
  {
    title: "Convening, Public Participation and Stakeholder Engagement",
    items: [
      "Public participation forums designed and documented to meet legal and legitimacy standards",
      "Policy roundtables, regulatory dialogues and sector convenings",
      "Stakeholder mapping, invitation management and balanced representation",
      "Meeting documentation, resolutions, communiques, action matrices and policy briefs",
      "Follow-up engagement plans that turn dialogue into coordinated action",
    ],
  },
  {
    title: "Institutional Capability and Executive Education",
    items: [
      "Board Governance Academy for boards of state corporations, agencies and public institutions",
      "Management and Leadership Academy for senior and middle managers in public service",
      "Staff Development Academy: productivity, service delivery, digital skills and professional effectiveness",
      "Organizational Strengthening Academy: diagnostics, systems, compliance and performance frameworks",
      "Professional credentials in financial regulation, regulatory compliance, cybersecurity, digital governance and data analysis",
    ],
  },
  {
    title: "Investment Enablement and Market Development",
    items: [
      "Investment promotion platforms and investor engagement, including the Nairobi Investment Summit",
      "Project bankability and structuring support for public and public-private projects",
      "Trade facilitation and market development initiatives",
      "Engagement with DFIs, development partners and private capital",
    ],
  },
  {
    title: "Policy Design, Reform and Intelligence",
    items: [
      "Policy analysis, research and sector intelligence",
      "Reform consultation design and facilitation",
      "Regulatory impact insight and market implications of reform",
      "Policy briefs and institutional publications through Credible Perspectives",
    ],
  },
  {
    title: "Public Communication and Citizen Engagement",
    items: [
      "Public engagement campaigns and community activations",
      "Program uptake campaigns: explaining services, driving registration and collecting feedback",
      "Media and social amplification for public initiatives",
    ],
  },
];

const sectors = [
  "Financial sector regulation",
  "Cooperative development",
  "Agriculture",
  "Health systems",
  "Education and skills",
  "Transport and infrastructure",
  "Energy and climate",
  "Trade and industrialization",
  "The digital economy",
];

/** Lines written as "Label: detail" carry the label at full strength, the detail muted. */
function SupportLine({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  if (idx === -1) {
    return (
      <p className="text-pretty break-words text-base font-light leading-relaxed text-white/80">
        {text}
      </p>
    );
  }
  return (
    <p className="text-pretty break-words text-base font-light leading-relaxed text-white/80">
      <span className="text-white">{text.slice(0, idx)}:</span> {text.slice(idx + 2)}
    </p>
  );
}

export default function GovernmentsAndPublicInstitutionsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy. Title and intro split across the rail, the mandate holders on a strip beneath. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-primary">
                Who We Work With
              </p>
              <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Partnering with Public Institutions to Deliver Policy, Markets and Public Value
              </h1>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className="max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80">
                Credence Africa supports national governments, county governments, regulators,
                agencies and public institutions to design credible engagement, attract investment,
                strengthen capability and deliver institutional results.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-2 md:mt-16 lg:grid-cols-5">
            {institutions.map((item) => (
              <li
                key={item}
                className="break-words border-t border-white/15 py-4 pr-4 text-sm font-light text-background/60"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Overview: light. Prose on the left measure, the four modes indexed on an offset column. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Overview
          </h2>

          <div className="mt-10 grid gap-10 border-t border-foreground/12 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                Public institutions sit at the center of Africa&rsquo;s transformation, setting
                policy, regulating markets, delivering services and shaping the environment in which
                enterprise and investment grow. Delivering on these mandates requires credible
                stakeholder engagement, strong institutional capability, quality intelligence and
                platforms where government, markets and citizens can meet productively.
              </p>
              <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                Credence Africa works with governments and public institutions as a professional,
                structured and credible partner across convening, capacity building, investment
                enablement and policy intelligence.
              </p>
            </div>

            <ul className="divide-y divide-foreground/12 border-y border-foreground/12 lg:col-span-4 lg:col-start-9 lg:self-start">
              {modes.map((mode) => (
                <li
                  key={mode}
                  className="break-words py-4 text-base font-light leading-relaxed text-foreground md:py-5 md:text-lg"
                >
                  {mode}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Why: navy. Five arguments across a two-column hairline ledger. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Public Institutions Work With Credence Africa
          </h2>

          <ul className="mt-10 grid grid-cols-1 border-b border-white/15 md:mt-12 md:grid-cols-2">
            {why.map((reason) => (
              <li
                key={reason}
                className="flex gap-4 border-t border-white/15 py-6 md:py-7 md:pr-10"
              >
                <span className="mt-[0.6rem] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                <p className="min-w-0 text-pretty break-words text-base font-light leading-relaxed text-background/85 md:text-lg">
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How We Support: deep red. The substance band. Each group is a spread: title over a
          hairline table of the work itself. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Governments and Public Institutions
            </h2>
          </div>

          <div className="mt-10 border-t border-white/25 md:mt-14">
            {support.map((group) => (
              <div key={group.title} className="border-b border-white/25 py-8 md:py-12">
                <h3 className="text-pretty break-words text-lg font-normal leading-snug text-white md:text-xl">
                  {group.title}
                </h3>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="min-w-0 border-t border-white/25 py-4 sm:pr-8 md:py-5"
                    >
                      <SupportLine text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sectors: light. A flat three-column index. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>

          <ul className="mt-10 grid grid-cols-1 border-b border-foreground/12 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="break-words border-t border-foreground/12 py-4 pr-6 text-base font-light leading-relaxed text-foreground/80 md:py-5 md:text-lg"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Start the Conversation: deep red ground, white type, white button. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your institution is planning a public participation process, strengthening
              institutional capability, promoting investment or convening a sector, engage Credence
              Africa. We bring structure, credibility and follow-through.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ConsultationDialog
                size="lg"
                triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90"
              >
                Book a Consultation
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </ConsultationDialog>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-[#aa3018]"
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
