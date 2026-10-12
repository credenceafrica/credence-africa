import { consultHref, type LandingPage } from "@/lib/landing-content";
import { Hero } from "./site/hero";
import { Check, Chip, CtaBand, FaqJsonLd, FaqList, IconTile, Pill, SmartLink, num } from "./site/primitives";

/** Target, chart and compass: the three "How Credence Africa helps" tiles, in order. */
const HELP_ICONS = [
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  "M4 20V10M10 20V4M16 20v-7M22 20H2",
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",
];

const h2Lg = "h2 m-0 text-[clamp(32px,3.4vw,50px)] font-normal leading-[1.1] tracking-[-0.035em]";
const h2Md = "h2 m-0 text-[clamp(32px,3.2vw,46px)] font-normal leading-[1.1] tracking-[-0.035em]";

/** Sector and theme landing page: one template for both modules. */
export function LandingDetail({ page }: { page: LandingPage }) {
  const sector = page.kind === "sector";
  const eyebrow = sector ? "Sectors" : "Themes";
  const back = sector ? { label: "All Sectors", href: "/sectors" } : { label: "All Themes", href: "/themes" };
  const [p1 = "", p2 = ""] = page.positioning.paragraphs;
  const [primary, secondary] = page.actions;

  return (
    <div className="w-full bg-white text-ink">
      <FaqJsonLd items={page.faqs} />

      <Hero
        title={page.h1}
        intro={page.intro}
        crumbs={[{ label: eyebrow, href: back.href }, { label: page.crumb }]}
        btn1={{ label: primary.label, href: consultHref(primary.consult) }}
        btn2={{ label: secondary.label, href: consultHref(secondary.consult) }}
        mobileTitle={42}
      />

      {/* Overview */}
      <section className="pb-28 pt-32">
        <div className="wrap">
          <h2 className="h2 m-0 max-w-[1080px] text-[clamp(32px,3.4vw,50px)] font-normal leading-[1.12] tracking-[-0.035em]">
            {page.positioning.heading}. <span className="text-mute">{p1}</span>
          </h2>
          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-8">
            <SmartLink href={back.href} className="eb hit text-[13.5px] hover:text-primary-deep">
              {eyebrow}
            </SmartLink>
            <div className="flex max-w-[560px] flex-col gap-6">
              <p className="m-0 text-[17px] font-medium leading-[1.6]">{p2}</p>
              <div className="flex flex-wrap gap-3">
                <Pill href={consultHref(primary.consult)} variant="dark">
                  {primary.label}
                </Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where clients need support */}
      <section className="pb-32">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-14 border-t border-line pt-[72px]">
          <div>
            <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
            <h2 className={`${h2Md} mb-[18px]`}>Where clients need support</h2>
            <p className="m-0 max-w-[420px] text-[16px] text-body-2">{page.needs.lead}</p>
          </div>
          <div className="flex flex-col">
            {page.needs.items.map((text, i) => (
              <div key={text} className="grid grid-cols-[72px_1fr] items-baseline gap-4 border-b border-line py-6">
                <span className="text-[44px] font-light leading-none text-[#B5B5B5]">{num(i)}</span>
                <span className="text-[17px] font-medium leading-[1.45]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Credence Africa helps */}
      <section className="pb-32">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
          <h2 className={`${h2Lg} mb-14 text-mute`}>How Credence Africa helps</h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-l border-t border-line">
            {page.helps.map((h, i) => (
              <div key={h.heading} className="flex flex-col gap-3.5 bg-white px-7 pb-[34px] pt-[30px]">
                <IconTile path={HELP_ICONS[i % HELP_ICONS.length]} className="mb-10" />
                <h3 className="m-0 text-[21px] font-medium leading-[1.25] tracking-[-0.01em]">{h.heading}</h3>
                <p className="mb-1.5 mt-0 text-[14.5px] text-body-2">{h.blurb}</p>
                <ul className="m-0 flex list-none flex-col p-0">
                  {h.items.map((item) => (
                    <li key={item} className="flex gap-2.5 border-t border-line-soft py-2.5 text-[14.5px]">
                      <Check className="text-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority mandates and who we work with */}
      <section className="on-dark bg-ink py-32 text-white">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
          <h2 className={`${h2Lg} mb-14 max-w-[900px]`}>
            Priority mandates <span className="text-[#7A7A7A]">The engagements this work is most often built around.</span>
          </h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] border-l border-t border-line-dark">
            <div className="bg-panel px-[30px] pb-5 pt-[30px]">
              <h3 className="mb-1 mt-0 text-[15px] font-medium tracking-[-0.01em] text-[#A3A3A3]">Priority mandates</h3>
              <p className="mb-[18px] mt-0 text-[14px] text-[#A3A3A3]">The engagements this work is most often built around.</p>
              {page.mandates.map((m) => (
                <div key={m} className="flex gap-3.5 border-t border-line-dark py-4 text-[17px]">
                  <span className="mt-2.5 size-1.5 shrink-0 bg-primary" />
                  {m}
                </div>
              ))}
            </div>
            <div className="bg-panel px-[30px] pb-5 pt-[30px]">
              <h3 className="mb-1 mt-0 text-[15px] font-medium tracking-[-0.01em] text-[#A3A3A3]">Who we work with</h3>
              <div className="h-[18px]" />
              {page.audiences.map((w) => (
                <div key={w} className="flex gap-3.5 border-t border-line-dark py-4 text-[17px]">
                  <span className="mt-2.5 size-1.5 shrink-0 bg-primary" />
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional priorities, why Credence Africa, related services */}
      <section className="py-32">
        <div className="wrap">
          {[
            { n: "1", h: "Africa, Kenya, Nigeria and South Africa", p: page.geography, last: false },
            { n: "2", h: "Why Credence Africa", p: page.why, last: true },
          ].map((row) => (
            <div key={row.n} className={`grid grid-cols-[96px_1fr] gap-6 border-t border-line py-10 ${row.last ? "border-b" : ""}`}>
              <span className="text-[72px] font-light leading-[0.9] text-[#C9C6C2]">{row.n}</span>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-8">
                <h2 className="h2 m-0 text-[34px] font-normal leading-[1.15] tracking-[-0.03em]">{row.h}</h2>
                <p className="m-0 text-[16.5px] text-body">{row.p}</p>
              </div>
            </div>
          ))}
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            <span className="eb mr-3 text-[13.5px]">Related</span>
            {page.links.map((l) => (
              <Chip key={l.href} href={l.href}>
                {l.label}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-32">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-14">
          <div>
            <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
            <h2 className={h2Md}>Frequently asked questions</h2>
          </div>
          <FaqList items={page.faqs} variant="sector" />
        </div>
      </section>

      <CtaBand heading={page.closing.heading} text={page.closing.body}>
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href={consultHref(page.closing.consult)} variant="light">
            {page.closing.label}
          </Pill>
          <Pill href={back.href} variant="outlineAccent">
            {back.label}
          </Pill>
        </div>
      </CtaBand>
    </div>
  );
}
