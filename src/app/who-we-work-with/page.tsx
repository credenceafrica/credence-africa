import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Arrow, CtaBand, IconTile, Pill, SmartLink, num } from "@/components/site/primitives";
import { audiences } from "@/lib/audiences";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "The institutions Credence Africa works with, from cooperatives and corporations to governments, investors, founders and the associations that represent whole sectors.",
};

/** The design's stroke icon for each audience. */
const ICONS: Record<string, string> = {
  cooperatives:
    "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 19v-1a4 4 0 0 0-3-3.8M16 4.2a3 3 0 0 1 0 5.6",
  corporations: "M4 21V5l8-2v18M12 7l8 2v12M8 8v.01M8 12v.01M8 16v.01M16 12v.01M16 16v.01M2 21h20",
  "faith-based-institutions": "M12 20s-7-4.4-9.3-8.8A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5.2C19 15.6 12 20 12 20z",
  "foreign-investors": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  "governments-and-public-institutions": "M3 21h18M5 21V10M9.5 21V10M14.5 21V10M19 21V10M2 10l10-6 10 6z",
  "growth-stage-smes": "M3 17l6-6 4 4 8-8M15 7h6v6",
  "industry-associations": "M3 11v2l13 5V6zM16 9a3 3 0 0 1 0 6M7 13v5h3",
  "investors-and-capital-platforms": "M4 20V10M10 20V4M16 20v-7M22 20H2",
  "non-profits":
    "M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 7v4M12 11l-6 6M12 11l6 6",
  "startups-and-innovators": "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18",
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      <Hero
        title="Support for the institutions building Africa"
        intro="We work with the institutions that shape Africa's economic and social development. Each has a different mandate, and each gets the same integrated execution system."
        crumbs={[{ label: "Who We Work With" }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
      />

      <section className="bg-white py-32 text-ink">
        <div className="wrap">
          <h2 className="h2 mb-16 mt-0 max-w-[1000px] text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]">
            Ten kinds of institution. One system.{" "}
            <span className="text-mute">
              Find the mandate that matches yours and see exactly how we work with institutions like it.
            </span>
          </h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] border-l border-t border-line">
            {audiences.map((a, i) => (
              <SmartLink
                key={a.slug}
                href={`/who-we-work-with/${a.slug}`}
                className="cell flex min-h-[280px] flex-col gap-3 bg-white p-[26px] text-ink"
              >
                <div className="flex items-start justify-between">
                  <IconTile path={ICONS[a.slug]} />
                  <span className="text-[15px] text-mute">{num(i)}</span>
                </div>
                <h3 className="mb-0 mt-8 text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">{a.name}</h3>
                <p className="m-0 text-[14.5px] text-body-2">{a.blurb}</p>
                <span className="mt-1 inline-flex items-center gap-2 text-[14px] font-semibold">
                  See how we work together
                  <Arrow />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Tell us the mandate."
        text="A senior advisor will map the fastest credible path to execution, whatever kind of institution you lead."
        size="large"
        textWidth="max-w-[600px]"
      >
        <Pill href="/consult" variant="light">
          Book a Consultation
        </Pill>
      </CtaBand>
    </>
  );
}
