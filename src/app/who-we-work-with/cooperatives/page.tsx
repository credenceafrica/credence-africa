import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Cooperatives",
  description:
    "Credence Africa partners with cooperatives, SACCOs, chamas, producer groups and community finance institutions to strengthen governance, unlock capital, deepen member value and build institutions that last.",
};

const REASONS = [
  "Deep specialization in cooperative finance, governance and regulation, including SASRA and the wider regulatory environment",
  "A dedicated Cooperative Finance pathway for institutions seeking growth capital, blended finance or diversified investment models",
  "A dedicated Cooperative Academy delivering practical training for boards, management teams and member education officers",
  "Flagship sector platforms including The Cooperative Expo and SACCO Day that connect cooperatives to regulators, partners and markets",
  "Curated communities through the Credible Cooperatives Network and Credible Chamas Network",
];

const SUPPORT: { title: string; lead: string; items: string[] }[] = [
  {
    title: "Capital and Investment Support",
    lead: "Through our Cooperative Finance pathway, we help SACCOs, service cooperatives and agricultural cooperatives access and structure capital for growth and impact.",
    items: [
      "Cooperative growth financing strategy and capital readiness",
      "Member capital mobilization and diversified investment structures",
      "Blended finance access for cooperative projects and social impact mandates",
      "Financial modeling, governance alignment and investor engagement",
      "Post-investment reporting, performance tracking and follow-on funding readiness",
    ],
  },
  {
    title: "Governance, Compliance and Capacity Building",
    lead: "Through the Credence Institute, we close capability gaps across cooperative boards, management, staff and members.",
    items: [
      "Cooperative Academy: governance, compliance, member education, financial management, leadership, strategy, risk management, reporting and accountability",
      "Board Governance Academy: fiduciary responsibility, strategy oversight, ethics, regulatory accountability and board effectiveness for cooperative boards",
      "Certified Regulatory Compliance Professional: SASRA, FRC, CBK, anti-money laundering, data protection and institutional compliance systems",
      "Certified Digital Credit Professional: digital lending, credit governance, borrower assessment, collections and portfolio performance for SACCO credit teams",
      "Certified Digital Transformation and Cybersecurity Professional: secure digital adoption and cyber resilience for member institutions",
    ],
  },
  {
    title: "Public Affairs and Policy Advisory",
    lead: "We help cooperative institutions engage regulators and policymakers with credibility and discipline.",
    items: [
      "Regulatory navigation, licensing and approvals support",
      "Engagement with SASRA, ministries, county governments and sector agencies",
      "Policy advocacy on cooperative sector reform and member interests",
      "Stakeholder mapping and structured public sector interface management",
    ],
  },
  {
    title: "Trade, Markets and Growth",
    lead: "For producer cooperatives and commercially active societies, we open pathways to markets and value chains.",
    items: [
      "Market access strategy for cooperative products and services",
      "Value chain positioning, aggregation and commercial partnerships",
      "Cross-border trade facilitation and regional market expansion",
      "Commercial ecosystem development and business facilitation",
    ],
  },
  {
    title: "Events, Community and Convenings",
    lead: "We give cooperatives credible platforms to convene, engage members and connect with the wider ecosystem.",
    items: [
      "The Cooperative Expo (May), with regional editions in Mt Kenya, Coast, Lake Region and Rift Valley",
      "Credible SACCOs / SACCO Day (October): leadership, finance, governance and sector recognition",
      "Credence Convene: AGMs, member forums, delegate meetings, governance engagements and stakeholder consultations",
      "Credence Engage: member recruitment drives, product uptake campaigns and community activations",
    ],
  },
  {
    title: "Intelligence, Media and Networks",
    lead: "We keep cooperative leaders informed, visible and connected.",
    items: [
      "Credible Cooperatives: research, commentary, interviews and sector analysis on cooperative governance, financial inclusion and institutional growth",
      "Credible Chamas: content and insight for savings groups, investment groups and community finance",
      "Credible Cooperatives Network and Credible Chamas Network: trusted communities for information, opportunity access and peer connection",
    ],
  },
];

const SECTORS: { label: string; detail?: string }[] = [
  { label: "Financial services", detail: "SACCOs, cooperative finance, digital credit" },
  {
    label: "Agribusiness",
    detail: "Producer and marketing cooperatives, agri-processing, agri-finance",
  },
  { label: "Mobility and transport", detail: "Transport SACCOs and fleet cooperatives" },
  { label: "Housing and the wider green and creative economies" },
];

export default function CooperativesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <p className="text-xs font-light uppercase tracking-[0.2em] text-background/50">
              Who We Work With
            </p>
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Building Better Governed, Better Capitalized, More Sustainable{" "}
              <span className="text-primary">Cooperatives</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Credence Africa partners with cooperatives, SACCOs, chamas, producer groups and
              community finance institutions to strengthen governance, unlock capital, deepen member
              value and build institutions that last.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview: light, editorial two-column deck */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Overview
          </h2>
          <div className="mt-10 grid gap-8 border-t border-foreground/12 pt-10 md:grid-cols-2 md:gap-12">
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              Cooperatives are among Africa&rsquo;s most powerful vehicles for shared prosperity,
              financial inclusion and grassroots economic participation. Yet many cooperative
              institutions face persistent challenges: governance gaps, compliance pressure, limited
              access to institutional capital, thin management capability and difficulty converting
              member loyalty into sustainable growth.
            </p>
            <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              Credence Africa works with cooperative institutions across their full life cycle, from
              formation and formalization to growth financing, diversification and institutional
              transformation. We combine advisory, capacity building, convening, intelligence and
              community platforms into one integrated system built for the cooperative movement.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why: deep red ground, white type, argument list on hairlines */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Cooperatives Work With Credence Africa
          </h2>
          <ul className="mt-10 max-w-5xl divide-y divide-white/20 border-y border-white/20">
            {REASONS.map((reason) => (
              <li
                key={reason}
                className="text-pretty break-words py-6 text-base font-light leading-relaxed text-white md:py-7 md:text-lg"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How We Support: navy spine, six divided ledger rows on a two-column rail */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How We Support Cooperatives
            </h2>
          </div>

          <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
            {SUPPORT.map((group) => (
              <div key={group.title} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-16 lg:py-12">
                <div className="lg:col-span-5">
                  <h3 className="text-balance break-words text-lg font-normal leading-snug text-background md:text-xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-pretty text-base font-light leading-relaxed text-background/70">
                    {group.lead}
                  </p>
                </div>

                <ul className="space-y-4 lg:col-span-7">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span
                        className="mt-[0.6rem] size-1.5 shrink-0 bg-primary"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 text-pretty break-words text-base font-light leading-relaxed text-background/85">
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

      {/* 5. Sectors: light, index rows */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Sectors We Serve You Across
              </h2>
            </div>

            <div className="lg:col-span-8">
              <dl className="divide-y divide-foreground/12 border-y border-foreground/12">
                {SECTORS.map((sector) => (
                  <div
                    key={sector.label}
                    className="gap-2 py-6 md:flex md:items-baseline md:justify-between md:gap-10"
                  >
                    <dt className="text-pretty break-words text-lg font-normal leading-snug text-foreground md:text-xl">
                      {sector.label}
                    </dt>
                    {sector.detail ? (
                      <dd className="mt-2 text-pretty break-words text-base font-light leading-relaxed text-foreground/70 md:mt-0 md:max-w-sm md:text-right">
                        {sector.detail}
                      </dd>
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Start the Conversation: deep red */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Start the Conversation
            </h2>
            <p className="mt-6 text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
              Whether you are a SACCO preparing for institutional capital, a producer cooperative
              seeking markets or a board strengthening governance and compliance, Credence Africa is
              built to walk with you. Book a consultation to discuss your cooperative&rsquo;s growth,
              governance or capital objective.
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
