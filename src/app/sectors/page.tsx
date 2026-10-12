import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Arrow, CtaBand, IconTile, Pill, SmartLink, num } from "@/components/site/primitives";
import { sectorList } from "@/lib/sectors-content";
import { audiencesBySlug } from "@/lib/audiences";

export const metadata: Metadata = {
  title: "Sectors We Cover",
  description:
    "The seven sectors where Credence Africa builds institutions, from agribusiness and energy to financial services, healthcare, mobility, technology and the consumer economy across Africa's growth markets.",
};

/** The design's order for the "Who we work with" band on this page. */
const AUDIENCE_ORDER = [
  "cooperatives",
  "corporations",
  "growth-stage-smes",
  "foreign-investors",
  "startups-and-innovators",
  "non-profits",
  "faith-based-institutions",
  "governments-and-public-institutions",
  "investors-and-capital-platforms",
  "industry-associations",
];

const h2 = "h2 m-0 max-w-[1000px] text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]";

export default function SectorsPage() {
  return (
    <>
      <Hero
        title="Expertise for the sector you operate in"
        intro="Our work spans the sectors driving Africa's economic and social transformation, where capital, policy and enterprise intersect."
        crumbs={[{ label: "Sectors" }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
        btn2={{ label: "Explore Our Themes", href: "/themes" }}
      />

      <section className="bg-white py-32 text-ink">
        <div className="wrap">
          <div className="eb mb-5 text-[13.5px]">Sectors</div>
          <h2 className={`${h2} mb-16 text-mute`}>
            Each engagement builds resilient institutions, drives inclusive growth and creates measurable impact.
          </h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-l border-t border-line">
            {sectorList.map((s, i) => (
              <SmartLink key={s.slug} href={`/sectors/${s.slug}`} className="cell flex min-h-[300px] flex-col gap-3 bg-white p-7 text-ink">
                <div className="flex items-start justify-between">
                  <IconTile path={s.icon} />
                  <span className="text-[15px] text-mute">{num(i)}</span>
                </div>
                <h3 className="mb-0 mt-10 text-[21px] font-medium leading-[1.25] tracking-[-0.01em]">{s.name}</h3>
                <p className="m-0 text-[14.5px] text-body-2">{s.scope}</p>
                <span className="mt-1.5 inline-flex items-center gap-2 text-[14px] font-semibold">
                  Explore sector
                  <Arrow />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-32 text-white">
        <div className="wrap">
          <div className="eb mb-5 text-[13.5px]">Who we work with</div>
          <h2 className={`${h2} mb-14 text-[#7A7A7A]`}>
            We work with the institutions and organisations shaping Africa&apos;s economic and social development.
          </h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] border-l border-t border-line-dark">
            {AUDIENCE_ORDER.map((slug) => (
              <SmartLink
                key={slug}
                href={`/who-we-work-with/${slug}`}
                className="flex min-h-[92px] items-center justify-between gap-3 bg-panel px-6 py-[22px] text-[16px] text-white hover:text-primary"
              >
                {audiencesBySlug[slug].name}
                <Arrow className="text-primary" />
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure which sector frames your mandate?"
        text="Tell us the objective. We will map the fastest credible path to execution."
        textWidth="max-w-[600px]"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href="/consult" variant="light">
            Book a Consultation
          </Pill>
          <Pill href="/themes" variant="outlineAccent">
            Explore Our Themes
          </Pill>
        </div>
      </CtaBand>
    </>
  );
}
