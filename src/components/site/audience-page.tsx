import type { AudiencePage } from "@/lib/audience-pages";
import { Hero } from "./hero";
import { Check, CtaBand, IconTile, Pill, num } from "./primitives";

/** Support-area icons, cycled in order. */
const supportIcons = [
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  "M3 21h18M5 21V10M9.5 21V10M14.5 21V10M19 21V10M2 10l10-6 10 6z",
  "M3 17l6-6 4 4 8-8M15 7h6v6",
  "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 19v-1a4 4 0 0 0-3-3.8M16 4.2a3 3 0 0 1 0 5.6",
  "M4 20V10M10 20V4M16 20v-7M22 20H2",
];

/** Step description heights (96/128/80/112px), cycled so the vermillion rules stagger. */
const stepTop = ["h-24", "h-32", "h-20", "h-28"];

const tag = "rounded-full border border-chip px-3.5 py-[7px] text-[14px]";
const h2 = "h2 font-normal tracking-[-0.035em]";

/** One Who We Work With page, as the design's audience template lays it out. */
export function AudiencePageView({ page }: { page: AudiencePage }) {
  const [o1 = "", o2] = page.overview;

  return (
    <>
      <Hero
        title={page.title}
        intro={page.intro}
        crumbs={[{ label: "Who We Work With", href: "/who-we-work-with" }, { label: page.crumb ?? page.eyebrow }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
        btn2={{ label: "Who We Work With", href: "/who-we-work-with" }}
        mobileTitle={40}
      />

      <section className="bg-white pb-28 pt-32 text-ink">
        <div className="wrap">
          <h2 className={`${h2} m-0 max-w-[1080px] text-[clamp(32px,3.4vw,50px)] leading-[1.12]`}>
            {page.overviewH} <span className="text-mute">{o1}</span>
          </h2>
          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-8">
            <div className="eb text-[13.5px]">Overview</div>
            <div className="flex max-w-[580px] flex-col gap-[22px]">
              {o2 && <p className="m-0 text-[17px] font-medium leading-[1.6]">{o2}</p>}
              {page.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {page.tags.map((t) => (
                    <span key={t} className={tag}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <div>
                <Pill href="/consult" variant="dark">
                  Book a Consultation
                </Pill>
              </div>
            </div>
          </div>
          {page.pillars?.length ? (
            <div className="bgrid mt-[72px] grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] border-l border-t border-line">
              {page.pillars.map((p, i) => (
                <div key={p} className="flex min-h-[160px] flex-col justify-between bg-white px-[26px] pb-7 pt-6">
                  <span className="text-[14px] text-mute">{num(i)}</span>
                  <span className="text-[30px] leading-[1.1] tracking-[-0.03em]">{p}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white pb-32 text-ink">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-14 border-t border-line pt-[72px]">
          <div>
            <div className="eb mb-[18px] text-[13.5px]">{page.eyebrow}</div>
            <h2 className={`${h2} m-0 text-[clamp(32px,3.2vw,46px)] leading-[1.1]`}>{page.whyH}</h2>
          </div>
          <div className="flex flex-col">
            {page.why.map((w, i) => (
              <div key={w} className="grid grid-cols-[72px_1fr] items-baseline gap-4 border-b border-line py-6">
                <span className="text-[44px] font-light leading-none text-[#B5B5B5]">{num(i)}</span>
                <span className="text-[17px] font-medium leading-[1.45]">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.strip && (
        <section className="on-dark bg-ink py-32 text-white">
          <div className="wrap">
            <h2 className={`${h2} mb-14 mt-0 max-w-[980px] text-[clamp(32px,3.4vw,50px)] leading-[1.1]`}>
              {page.strip.h} <span className="text-[#7A7A7A]">{page.strip.intro}</span>
            </h2>
            <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] border-l border-t border-line-dark">
              {page.strip.steps.map((s, i) => (
                <div key={s.n} className="flex min-h-[260px] flex-col bg-panel">
                  <div className={`px-6 py-[22px] text-[14px] text-[#A3A3A3] ${stepTop[i % stepTop.length]}`}>{s.b}</div>
                  <div className="mt-auto flex flex-col gap-1.5 border-t-[3px] border-primary px-6 pb-6 pt-[18px]">
                    <span className="text-[34px] leading-none tracking-[-0.03em] text-white">{s.n}</span>
                    <span className="text-[16px] font-medium text-white">{s.t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white pb-32 text-ink">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">{page.eyebrow}</div>
          <h2 className={`${h2} mb-14 mt-0 max-w-[900px] text-[clamp(32px,3.4vw,50px)] leading-[1.1] text-mute`}>
            {page.supportH}
          </h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-l border-t border-line">
            {page.support.map((c, i) => (
              <div key={c.t} className="flex flex-col gap-3.5 bg-white px-7 pb-8 pt-[30px]">
                <IconTile path={supportIcons[i % supportIcons.length]} className="mb-8" />
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] tracking-[-0.01em]">{c.t}</h3>
                <ul className="m-0 flex list-none flex-col p-0">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2.5 border-t border-line-soft py-2.5 text-[14.5px]">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5 border border-t-0 border-line px-7 py-[26px]">
            <h3 className="m-0 shrink-0 text-[16px] font-medium tracking-[-0.01em]">{page.sectorsH}</h3>
            <div className="flex flex-wrap gap-2">
              {page.sectors.map((s) => (
                <span key={s} className={tag}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading="Start the Conversation" text={page.ctaP} size="large">
        <div className="flex flex-wrap justify-center gap-3">
          <Pill href="/consult" variant="light">
            Book a Consultation
          </Pill>
          <Pill href="/who-we-work-with" variant="outlineAccent">
            Who We Work With
          </Pill>
        </div>
      </CtaBand>
    </>
  );
}
