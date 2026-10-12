import { contact } from "@/lib/contact";
import { consultHref } from "@/lib/landing-content";
import type { ServicePage } from "@/lib/service-pages";
import { cn } from "@/lib/utils";
import { Hero, type HeroLink } from "./hero";
import { Check, CtaBand, FaqJsonLd, FaqList, Pill, num } from "./primitives";

/** The service template's two grounds. Any `bg` other than "dark" ("cream", "white") renders light. */
const themes = {
  light: {
    section: "bg-white text-ink",
    fg: "text-ink",
    muted: "text-body-2",
    accent: "text-primary-deep",
    card: "bg-white",
    line: "border-line",
    chip: "border-chip",
    tile: "bg-ink",
    num: "text-[#B5B5B5]",
    btn: "dark",
  },
  dark: {
    section: "bg-ink text-white",
    fg: "text-white",
    muted: "text-body-dark",
    accent: "text-primary",
    card: "bg-panel",
    line: "border-line-dark",
    chip: "border-[#4A4A4A]",
    tile: "bg-tile",
    num: "text-[#5C5C5C]",
    btn: "accent",
  },
} as const;

/** Description heights that stagger the vermillion rules across the steps. */
const stepTops = ["h-24", "h-32", "h-20", "h-28", "h-[104px]"];

const h2 = "h2 m-0 text-[clamp(32px,3.3vw,48px)] font-normal leading-[1.1] tracking-[-0.035em]";
const cols = "grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-12";

// The design's closing line gives the street address without the floor and suite.
const street = contact.addressShort.replace(/^.*Suite \d+, /, "");

/** A service page: hero, the page's blocks in order, then the closing band. */
export function ServicePageView({ page, consult }: { page: ServicePage; consult: string }) {
  const to = consultHref(consult);
  // Hero buttons go to the consult form unless the data names another page.
  const heroLink = (l?: HeroLink) => l && { ...l, href: l.href === "/consult" ? to : l.href };
  const { blocks, cta } = page;

  return (
    <>
      <Hero {...page.hero} btn1={heroLink(page.hero.btn1)} btn2={heroLink(page.hero.btn2)} mobileTitle={40} />

      {blocks.map((b, i) => {
        const dark = b.bg === "dark";
        const t = dark ? themes.dark : themes.light;
        const eyebrow = b.eyebrow || page.eyebrow;
        // Deviation from TplService (light blocks always "112px 0 0"): as in TplCopy, a light block
        // before a dark one keeps its bottom space, so its closing button doesn't sit on the dark band.
        const pad = dark ? "py-[120px]" : i === blocks.length - 1 || blocks[i + 1].bg === "dark" ? "pb-32 pt-28" : "pt-28";
        const btn = b.btn ? (
          <Pill href={to} variant={t.btn}>
            {b.btn}
          </Pill>
        ) : null;

        return (
          <section key={i} id={b.id || `s${i}`} className={cn(t.section, pad)}>
            <div className="wrap">
              {b.type === "text" && (
                <div className={cn(cols, "border-t pt-14", t.line)}>
                  <div>
                    <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
                    <h2 className={h2}>{b.h}</h2>
                  </div>
                  <div className={cn("flex flex-col gap-[18px] text-[16.5px]", t.muted)}>
                    {b.paras?.map((p) => (
                      <p key={p} className="m-0">
                        {p}
                      </p>
                    ))}
                    {b.quote && (
                      <blockquote
                        className={cn(
                          "mt-2.5 border-l-2 border-primary py-1 pl-[22px] text-[26px] leading-[1.25] tracking-[-0.02em]",
                          t.fg,
                        )}
                      >
                        {b.quote}
                        {b.quoteBy && <span className={cn("mt-2.5 block text-[13.5px]", t.muted)}>{b.quoteBy}</span>}
                      </blockquote>
                    )}
                    {btn && <div>{btn}</div>}
                  </div>
                </div>
              )}

              {b.type === "list" && (
                <div className={cn(cols, "border-t pt-14", t.line)}>
                  <div className="flex flex-col items-start gap-[18px]">
                    <div className="eb text-[13.5px]">{eyebrow}</div>
                    <h2 className={h2}>{b.h}</h2>
                    <p className={cn("m-0 max-w-[480px] text-[16.5px]", t.muted)}>{b.intro}</p>
                    {btn}
                  </div>
                  <ol className="m-0 flex list-none flex-col p-0">
                    {b.items?.map((text, j) => (
                      <li key={text} className={cn("grid grid-cols-[64px_1fr] items-baseline gap-4 border-b py-5", t.line)}>
                        <span className={cn("text-[36px] font-light leading-none", t.num)}>{num(j)}</span>
                        <span className="text-[16.5px] font-medium leading-[1.45]">{text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {b.type === "cards" && (
                <>
                  <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
                  <h2 className={cn(h2, "mb-3.5 max-w-[980px]")}>{b.h}</h2>
                  <p className={cn("mb-12 mt-0 max-w-[760px] text-[16.5px]", t.muted)}>{b.intro}</p>
                  <div
                    className={cn("bgrid grid border-l border-t", t.line)}
                    style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${b.min || "260px"}, 100%), 1fr))` }}
                  >
                    {b.cards?.map((c, j) => (
                      <div key={c.t + j} className={cn("flex min-h-[240px] flex-col gap-3 px-[26px] pb-[30px] pt-7", t.card)}>
                        <span className={cn("tile mb-7 flex size-11 items-center justify-center text-[18px] text-primary", t.tile)}>
                          {c.tag || num(j)}
                        </span>
                        <h3 className="m-0 text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">{c.t}</h3>
                        {c.sub && <p className={cn("m-0 text-[13.5px] font-semibold", t.accent)}>{c.sub}</p>}
                        {c.b && <p className={cn("m-0 text-[14.5px]", t.muted)}>{c.b}</p>}
                        {c.items?.length ? (
                          <ul className="mb-0 mt-1 flex list-none flex-col p-0">
                            {c.items.map((item) => (
                              <li key={item} className={cn("flex gap-2.5 border-t py-2 text-[14px]", t.line)}>
                                <Check size={15} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {c.best && (
                          <p className={cn("mb-0 mt-1 text-[13.5px]", t.muted)}>
                            <strong className={cn("font-semibold", t.fg)}>Best suited for:</strong> {c.best}
                          </p>
                        )}
                        {c.btn && (
                          <Pill
                            href={to}
                            variant={dark ? "outline" : "outlineDark"}
                            className={cn("hit mt-auto self-start px-4 py-[9px] text-[13.5px]", dark && "border-white")}
                          >
                            {c.btn}
                          </Pill>
                        )}
                      </div>
                    ))}
                  </div>
                  {btn && <div className={cn("flex justify-end border border-t-0 px-[26px] py-5", t.line)}>{btn}</div>}
                </>
              )}

              {b.type === "tags" && (
                <div className={cn(cols, "border-t pt-14", t.line)}>
                  <div className="flex flex-col items-start gap-[18px]">
                    <div className="eb text-[13.5px]">{eyebrow}</div>
                    <h2 className={h2}>{b.h}</h2>
                    {btn}
                  </div>
                  <div className="flex flex-wrap content-start gap-2.5">
                    {b.items?.map((tag) => (
                      <span key={tag} className={cn("rounded-full border px-[18px] py-2.5 text-[15px]", t.chip)}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {b.type === "steps" && (
                <>
                  <div className="eb mb-[18px] text-[13.5px]">{eyebrow}</div>
                  <h2 className={cn(h2, "mb-3.5")}>{b.h}</h2>
                  <p className={cn("mb-12 mt-0 text-[16.5px]", t.muted)}>{b.intro}</p>
                  <div className={cn("bgrid grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] border-l border-t", t.line)}>
                    {b.steps?.map((s, j) => (
                      <div key={s.t} className={cn("flex min-h-[280px] flex-col", t.card)}>
                        <div className={cn("px-6 py-[22px] text-[14px]", t.muted, stepTops[j % stepTops.length])}>{s.b}</div>
                        <div className="mt-auto flex flex-col gap-1.5 border-t-[3px] border-primary px-6 pb-6 pt-[18px]">
                          <span className="text-[34px] leading-none tracking-[-0.03em]">{s.num || num(j)}</span>
                          <span className="text-[16px] font-medium">{s.t}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {btn && <div className="mt-10 flex justify-center">{btn}</div>}
                </>
              )}

              {b.type === "faq" && (
                <>
                  <div className={cols}>
                    <h2 className="h2 m-0 text-[clamp(32px,3.2vw,46px)] font-normal leading-[1.1] tracking-[-0.035em]">{b.h}</h2>
                    <FaqList items={b.faqs ?? []} variant="service" />
                  </div>
                  <FaqJsonLd items={b.faqs ?? []} />
                </>
              )}
            </div>
          </section>
        );
      })}

      <CtaBand heading={cta.h} text={cta.p} size="page" textWidth="max-w-[640px]">
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href={to} variant="light">
            {cta.btn1}
          </Pill>
          {cta.btn2 && (
            <Pill href={to} variant="outlineAccent">
              {cta.btn2}
            </Pill>
          )}
        </div>
        <p className="mb-0 mt-2 text-[14px] text-[#A3A3A3]">
          <a href={`mailto:${contact.email}`} className="text-white hover:text-primary">
            {contact.email}
          </a>{" "}
          ·{" "}
          <a href={`tel:${contact.phoneHref}`} className="text-white hover:text-primary">
            {contact.phone}
          </a>{" "}
          · {street}
        </p>
      </CtaBand>
    </>
  );
}
