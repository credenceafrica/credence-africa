import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Arrow, CtaBand, Pill, SmartLink, num } from "@/components/site/primitives";
import { themeList } from "@/lib/themes-content";

export const metadata: Metadata = {
  title: "Cross-Sector Themes",
  description:
    "The seven cross-sector themes Credence Africa works across, from climate resilience and governance integrity to gender, youth, consumer trust, economic inclusion and workforce productivity in Kenya, Nigeria, South Africa and the wider continent.",
  alternates: { canonical: "/themes" },
};

export default function ThemesPage() {
  return (
    <>
      <Hero
        title="Shared priorities across sectors and institutions"
        intro="Some agendas, including climate, consumer trust, inclusion, gender, governance, workforce productivity and youth, shape decisions in every sector and market. Our themes apply that expertise across the economy, while our sector practices bring market-specific knowledge."
        crumbs={[{ label: "Themes" }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
        btn2={{ label: "Explore Our Sectors", href: "/sectors" }}
      />

      <section className="bg-white py-32 text-ink">
        <div className="wrap">
          <div className="flex flex-col border-t border-line">
            {themeList.map((t, i) => (
              <SmartLink
                key={t.slug}
                href={`/themes/${t.slug}`}
                className="cell grid grid-cols-[96px_minmax(0,1.2fr)_minmax(0,1fr)_48px] items-center gap-6 border-b border-line bg-white px-2 py-[34px] text-ink max-[720px]:!grid-cols-[56px_1fr]"
              >
                <span className="text-[56px] font-light leading-none text-[#C9C6C2]">{num(i)}</span>
                <h2 className="m-0 text-[clamp(22px,2.2vw,32px)] font-normal leading-[1.15] tracking-[-0.03em]">{t.name}</h2>
                <p className="m-0 text-[15px] text-body-2 max-[720px]:!hidden">{t.scope}</p>
                <span className="flex size-11 items-center justify-center rounded-full border border-chip max-[720px]:!hidden">
                  <Arrow size={16} />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Working across more than one theme?"
        text="Most mandates are. Tell us the decision and we will structure the work around it."
        textWidth="max-w-[600px]"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href="/consult" variant="light">
            Book a Consultation
          </Pill>
          <Pill href="/sectors" variant="outlineAccent">
            Explore Our Sectors
          </Pill>
        </div>
      </CtaBand>
    </>
  );
}
