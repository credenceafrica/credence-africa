import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Startups and Innovators",
  description:
    "Credence Africa helps startups, founders and innovators become investor ready, navigate regulation, access markets and build the systems and credibility that growth demands.",
};

const reasons = [
  "Investor readiness and capital raising support tuned to venture, impact and blended capital",
  "Regulatory navigation for innovators operating in regulated and emerging sectors",
  "Founder-focused capability building through the Entrepreneurship Academy and applied technical academies",
  "Pitch and showcase platforms at Capital Africa, the Nairobi Investment Summit and Credence Business Week",
  "Community, visibility and ecosystem access through Credible Perspectives and Credence Networks",
];

const support: { title: string; items: string[] }[] = [
  {
    title: "Capital Readiness and Fundraising",
    items: [
      "Capital strategy aligned to stage and funding objective",
      "Financial modeling, valuation logic and unit economics validation",
      "Pitch materials, investment memoranda and data room readiness",
      "Investor targeting across VC, angels, family offices, DFIs and impact investors",
      "Term sheet support, negotiation preparation and post-investment reporting",
    ],
  },
  {
    title: "Regulatory and Policy Navigation",
    items: [
      "Licensing pathways and approvals strategy for fintech, healthtech, mobility and digital businesses",
      "Regulatory scanning and engagement with regulators and agencies",
      "Policy insight on emerging regulation shaping your market",
      "Support in consultation processes and sector reform dialogue",
    ],
  },
  {
    title: "Founder and Team Capability",
    items: [
      "Entrepreneurship Academy: business modelling, capital readiness, sales, operations, governance and investor engagement",
      "Engineering and Applied Technology Academy: product development, technical execution and innovation readiness",
      "Creative Economy Academy for creators and creative businesses",
      "Gig Economy Academy for digital workers and platform-based founders",
      "Credentials in data analysis, cybersecurity and digital governance as teams scale",
    ],
  },
  {
    title: "Market Access and Growth",
    items: [
      "Route-to-market and distribution strategy",
      "Commercial partnerships and ecosystem development",
      "Regional expansion planning across African markets",
      "Product activation, launches and lead generation through Credence Engage",
    ],
  },
  {
    title: "Visibility, Platforms and Community",
    items: [
      "Investment pitches and showcases at the Nairobi Investment Summit",
      "Capital Africa: connection to private capital and wealth ecosystems",
      "Credence Business Week sector platforms, including digital, creative and technology tracks",
      "Credible Business content and the Credible Business Network",
    ],
  },
];

const sectors = [
  "Fintech and digital finance",
  "Healthtech",
  "Agritech",
  "Mobility and electric transport",
  "Clean energy and climate innovation",
  "The creative and digital content economy",
  "Enterprise technology and AI",
];

// Items shaped "Programme: what it covers" get the programme name held in full ink
// and the coverage in a lighter weight on the same line.
function SupportLine({ item }: { item: string }) {
  const idx = item.indexOf(": ");
  if (idx === -1) return <>{item}</>;
  return (
    <>
      <span className="text-foreground">{item.slice(0, idx)}</span>
      <span className="text-foreground/60">: {item.slice(idx + 2)}</span>
    </>
  );
}

export default function StartupsAndInnovatorsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Opening statement: navy. Headline, intro and the overview held in one band. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-4xl">
            <h1 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Turning Innovation into{" "}
              <span className="text-primary">Structured, Investable, Scalable</span> Enterprise
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Credence Africa helps startups, founders and innovators become investor ready, navigate
              regulation, access markets and build the systems and credibility that growth demands.
            </p>
          </div>

          <div className="mt-14 border-t border-white/15 pt-12 md:mt-16">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-background/70">
                Africa's innovators are building solutions for the continent's biggest opportunities, in
                fintech, healthtech, agritech, mobility, energy and the creative and digital economies. But
                great products alone do not build great companies. Startups need capital readiness,
                regulatory clarity, commercial discipline, market access and credible visibility.
              </p>
              <p className="max-w-prose text-pretty text-base font-light leading-relaxed text-background/70">
                Credence Africa works with startups and innovators from early structure through scale,
                helping founders turn talent and traction into structured, competitive and investable
                enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The argument: deep-red slab, white type, five full-bleed ledger rows. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-2xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Why Startups Work With Credence Africa
          </h2>

          <div className="mt-10 divide-y divide-white/20 border-y border-white/20 md:mt-12">
            {reasons.map((reason) => (
              <p
                key={reason}
                className="max-w-4xl text-pretty break-words py-6 text-base font-light leading-relaxed text-white md:py-7 md:text-lg"
              >
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The substance: light. Five entries in one continuous index, items on a hairline matrix. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-2xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            How We Support Startups and Innovators
          </h2>

          <div className="mt-10 divide-y divide-foreground/12 border-t border-foreground/12 md:mt-14">
            {support.map((group) => (
              <div key={group.title} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-10">
                <h3 className="text-lg font-normal leading-snug text-foreground lg:col-span-4 lg:text-xl">
                  {group.title}
                </h3>
                <ul className="lg:col-span-8 sm:grid sm:grid-cols-2 sm:gap-x-10">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="break-words border-t border-foreground/12 py-3.5 text-pretty text-base font-light leading-relaxed text-foreground/75"
                    >
                      <SupportLine item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach: navy. The sector list as a hairline index. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="max-w-2xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Sectors We <span className="text-primary">Serve You Across</span>
          </h2>

          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="break-words border-t border-white/15 py-5 text-base font-light leading-relaxed text-background/85 md:text-lg"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The close: deep-red. */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Start the Conversation
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-white/85 md:text-lg">
                If you are raising a round, entering a regulated market or building the structure investors
                expect, book a founder consultation. We will help you get ready, get connected and get
                funded.
              </p>
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <ConsultationDialog
                size="lg"
                triggerClassName="h-14 w-full rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90 sm:w-auto"
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
