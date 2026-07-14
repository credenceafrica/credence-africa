import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Faith-Based Institutions",
  description:
    "Credence Africa helps churches, ministries, faith-based organizations and faith-rooted enterprises steward resources well, govern with integrity, build sustainable ventures and engage public life with credibility.",
};

const INSTITUTIONS = [
  "Churches",
  "Ministries",
  "Faith-Based Organizations",
  "Faith-Rooted Enterprises",
];

const REASONS = [
  "Advisory that respects mission while bringing commercial and governance discipline",
  "Support for structuring faith-owned assets, enterprises and investment vehicles",
  "Governance and leadership development for boards, clergy and institutional leaders",
  "Faith & Polity, our dedicated platform on faith, leadership, ethics and public life",
  "Credible Faith, a media segment exploring faith, values, stewardship and purpose",
];

const SUPPORT: { title: string; items: string[] }[] = [
  {
    title: "Stewardship, Enterprise and Investment",
    items: [
      "Enterprise development for faith-owned businesses, schools, health facilities and social ventures",
      "Investment structuring for institutional assets, land and endowments",
      "Blended finance and donor capital design for mission-driven projects",
      "Financial management systems, reporting and accountability frameworks",
      "Capital readiness for expansion and development projects",
    ],
  },
  {
    title: "Governance and Leadership Development",
    items: [
      "Board Governance Academy for trustees, boards and oversight committees",
      "Management and Leadership Academy for institutional and ministry leaders",
      "Organizational Strengthening Academy: policies, systems, compliance and institutional resilience",
      "Staff Development Academy for administrative and service teams",
      "Personal Development and Career Growth Academy for emerging leaders within faith communities",
    ],
  },
  {
    title: "Public Engagement and Policy",
    items: [
      "Public interest communication and institutional positioning",
      "Stakeholder engagement with government and community institutions",
      "Policy insight on regulation affecting faith-based schools, health facilities and charities",
      "Support in public participation and civic dialogue",
    ],
  },
  {
    title: "Convening and Community Platforms",
    items: [
      "Faith & Polity (Easter weekend): faith, leadership, ethics, governance and public discourse",
      "Women & Faith, part of Credence Women's Week (March)",
      "Credence Convene for conferences, leadership forums and institutional gatherings",
      "Credence Engage for community outreach and program activations",
    ],
  },
  {
    title: "Media, Insight and Networks",
    items: [
      "Credible Faith: content on faith, leadership, values, stewardship, ethics, family, work and public life",
      "Credible Life: personal growth, relationships, wellness and everyday leadership",
      "Credible Life Network: a trusted community for connection and growth",
    ],
  },
];

const SECTORS = [
  "Education",
  "Healthcare and wellness",
  "Community finance and savings",
  "Agriculture and land-based enterprise",
  "Housing",
  "Media",
  "Social development",
];

/** Lines written as "Label: detail" carry the label at full weight, the detail muted. */
function SupportLine({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  if (idx === -1) {
    return (
      <span className="text-pretty break-words text-base font-light leading-relaxed text-background/75">
        {text}
      </span>
    );
  }
  return (
    <span className="text-pretty break-words text-base font-light leading-relaxed text-background/75">
      <span className="text-background">{text.slice(0, idx)}:</span> {text.slice(idx + 2)}
    </span>
  );
}

export default function FaithBasedInstitutionsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy. Editorial masthead: headline left, deck held on a hairline at the right. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-light uppercase tracking-[0.2em] text-background/50">
                Who We Work With
              </p>
              <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Stewardship, Governance and Enterprise for{" "}
                <span className="text-primary">Faith-Rooted Institutions</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:self-end">
              <p className="border-t border-white/15 pt-6 text-pretty text-base font-light leading-relaxed text-background/80 md:text-lg">
                Credence Africa helps churches, ministries, faith-based organizations and
                faith-rooted enterprises steward resources well, govern with integrity, build
                sustainable ventures and engage public life with credibility.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid grid-cols-1 border-b border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {INSTITUTIONS.map((item) => (
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

      {/* 2. Overview: deep red ground, white type. Prose held as two divided ledger rows. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Overview
              </h2>
            </div>

            <div className="divide-y divide-white/20 border-y border-white/20 lg:col-span-8">
              <p className="max-w-prose text-pretty py-6 text-base font-light leading-relaxed text-white md:py-8 md:text-lg">
                Faith-based institutions are among Africa&rsquo;s most trusted and far-reaching
                organizations, stewarding congregations, communities, schools, health facilities,
                savings groups, land and enterprises. That trust carries responsibility: for sound
                governance, financial discipline, accountable leadership and sustainable models that
                serve both mission and community.
              </p>
              <p className="max-w-prose text-pretty py-6 text-base font-light leading-relaxed text-white/85 md:py-8 md:text-lg">
                Credence Africa works with faith-based institutions to strengthen governance and
                stewardship, structure and grow faith-rooted enterprises and investments, build
                leadership capability and engage thoughtfully at the intersection of faith and public
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why: light. Five reasons set as a two-column hairline ledger. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Faith-Based Institutions Work With Credence Africa
          </h2>

          <ul className="mt-10 grid grid-cols-1 border-b border-foreground/12 md:mt-14 md:grid-cols-2 md:gap-x-16">
            {REASONS.map((reason) => (
              <li
                key={reason}
                className="text-pretty break-words border-t border-foreground/12 py-6 pr-4 text-base font-light leading-relaxed text-foreground/80 md:py-8 md:text-lg"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How We Support: navy. A stacked chapter index: group title, then its lines
          flowing across a two-column hairline sub-ledger. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Faith-Based Institutions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/15 border-y border-white/15 md:mt-14">
            {SUPPORT.map((group) => (
              <div key={group.title} className="py-10 md:py-14">
                <h3 className="text-pretty break-words text-lg font-normal leading-snug text-primary md:text-xl">
                  {group.title}
                </h3>

                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="min-w-0 border-t border-white/10 py-4 pr-4 first:border-t-0 first:pt-0 md:py-5 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0"
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

      {/* 5. Sectors: light. Three-column hairline index; short labels, calm band. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We Serve You Across
          </h2>

          <ul className="mt-10 grid grid-cols-1 border-b border-foreground/12 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <li
                key={sector}
                className="text-pretty break-words border-t border-foreground/12 py-5 pr-4 text-base font-light leading-relaxed text-foreground/80 md:py-6 md:text-lg"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Start the Conversation: deep red. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              If your institution is strengthening governance, structuring an enterprise or
              investment, developing leaders or engaging public life, book a consultation. We will
              help you steward well and build for generations.
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
