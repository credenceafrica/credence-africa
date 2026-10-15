import Image from "next/image";
import { cn } from "@/lib/utils";
import { Arrow, SmartLink } from "./primitives";

export type Crumb = { label: string; href?: string };
export type HeroLink = { label: string; href: string };

export type HeroProps = {
  title: string;
  intro?: string;
  /** Trail after Home; the last entry is the current page. */
  crumbs?: Crumb[];
  btn1?: HeroLink;
  btn2?: HeroLink;
  /** White feature card at the right of the hero's base row. */
  card?: { label: string; title: string; text: string; href: string };
  /** White key/value panel in place of the card. */
  side?: { title: string; tag: string; rows: { k: string; v: string }[] };
  /** "full" fills the screen (Home), "tall" is 820px, otherwise 660px. */
  size?: "full" | "tall" | "default";
  /** Some templates set the title to a fixed size at phone width. */
  mobileTitle?: 38 | 40 | 42;
  imgAlt?: string;
};

const minH = { full: "min-h-[100svh]", tall: "min-h-[820px]", default: "min-h-[660px]" };
// The canvas sets these phone sizes; below about 400px they scale down so long words still fit.
const mobileTitleCls = {
  38: "max-[720px]:!text-[clamp(30px,9.5vw,38px)]",
  40: "max-[720px]:!text-[clamp(31px,10vw,40px)]",
  42: "max-[720px]:!text-[clamp(32px,10.5vw,42px)]",
};

/** Full-bleed photographic hero the header sits over. */
export function Hero({
  title,
  intro,
  crumbs,
  btn1,
  btn2,
  card,
  side,
  size = "default",
  mobileTitle,
  imgAlt = "Professionals in discussion on a terrace overlooking a modern African city skyline",
}: HeroProps) {
  const tall = size !== "default";
  // Home (deviation from the canvas, at the user's request): no scroll-cue column; the intro sits on
  // the left with the cue under it and the card on the far right.
  const home = size === "full";
  const trail = crumbs?.length ? [{ label: "Home", href: "/" }, ...crumbs] : [];
  const scrollCue = (
    <div className="flex items-center gap-2 self-start text-[12px] uppercase tracking-[0.12em] text-white/75 max-[983px]:hidden">
      Scroll down
      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );

  return (
    <section className={cn("relative w-full overflow-hidden bg-ink text-white", minH[size])}>
      <Image
        src="/hero-terrace.jpg"
        alt={imgAlt}
        fill
        priority
        sizes="100vw"
        className="cr-hero-img object-cover [object-position:72%_center]"
      />
      <div
        aria-hidden="true"
        className="cr-hero-shade absolute inset-0"
        // Darkens the top, bottom and left (where the text sits) and leaves the people on the right clear.
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0) 28%, rgba(10,10,10,0) 52%, rgba(10,10,10,0.82) 100%), linear-gradient(90deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.12) 100%)",
        }}
      />

      <div className={cn("relative mx-auto flex max-w-[1400px] flex-col px-10 pb-10 pt-[196px] max-[720px]:px-5", minH[size], home && "justify-end")}>
        {trail.length > 0 && (
          <nav className="cr-in cr-d1 mb-6" aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[14px] text-white/[0.72]">
              {trail.map((c, i) => {
                const last = i === trail.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-white/40">
                        /
                      </span>
                    )}
                    {last ? (
                      <span aria-current="page" className="eb text-white">
                        {c.label}
                      </span>
                    ) : c.href ? (
                      <SmartLink href={c.href} className="hit text-white/[0.72]">
                        {c.label}
                      </SmartLink>
                    ) : (
                      <span>{c.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <h1
          className={cn(
            "cr-in cr-d2 m-0 max-w-[1000px] text-balance font-normal tracking-[-0.045em]",
            tall ? "text-[clamp(46px,6.2vw,90px)]" : "text-[clamp(44px,5.6vw,80px)]",
            // After the size: tailwind-merge drops a leading class that precedes a font-size class.
            "leading-[0.98]",
            mobileTitle && mobileTitleCls[mobileTitle],
          )}
        >
          {title}
        </h1>

        {/* On Home the title-to-divider gap stops at 96px; a taller screen adds the extra above the title. */}
        <div className={cn("min-h-14 grow", home && "max-h-24")} />

        {/* Three columns from 984px (two on Home). Below that it stacks: two columns would give the scroll cue a column of its own. */}
        <div
          className={cn(
            "cr-in cr-d3 grid items-end gap-8 border-t border-white/20 pt-7 max-[983px]:grid-cols-1",
            home ? "grid-cols-[minmax(0,460px)_minmax(0,420px)] justify-between" : "grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))]",
          )}
        >
          {!home && scrollCue}

          <div className="flex flex-col gap-6 self-start">
            {intro && <p className="m-0 max-w-[460px] text-[16px] leading-[1.6] text-white/[0.86]">{intro}</p>}
            {btn1 && (
              <div className="flex flex-wrap gap-3">
                <SmartLink
                  href={btn1.href}
                  className="pill inline-flex items-center gap-2 rounded-full bg-white px-[22px] py-[13px] text-[14.5px] font-semibold text-ink"
                >
                  {btn1.label}
                  <Arrow />
                </SmartLink>
                {btn2 && (
                  <SmartLink
                    href={btn2.href}
                    className="pill inline-flex items-center rounded-full border border-white/70 px-[22px] py-3 text-[14.5px] font-medium text-white"
                  >
                    {btn2.label}
                  </SmartLink>
                )}
              </div>
            )}
            {home && scrollCue}
          </div>

          {card && (
            <SmartLink
              href={card.href}
              className="cr-card cr-in cr-d4 flex min-h-[168px] bg-white text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-[983px]:max-w-[560px]"
            >
              <div className="flex flex-[1_1_0] flex-col gap-2 px-[22px] py-5">
                <span className="text-[12px] font-semibold text-primary-deep">{card.label}</span>
                <span className="text-[18px] font-medium leading-[1.25] tracking-[-0.01em]">{card.title}</span>
                <span className="text-[13.5px] leading-[1.5] text-body-2">{card.text}</span>
                <span aria-hidden="true" className="mt-auto flex gap-1.5 pt-2">
                  <span className="cr-bar h-[3px] w-7 bg-ink" />
                  <span className="h-[3px] w-[18px] bg-[#D4D4D4]" />
                  <span className="h-[3px] w-[18px] bg-[#D4D4D4]" />
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/partners-handshake.jpg" alt="" className="m-[8px_8px_8px_0] block w-[38%] object-cover" />
            </SmartLink>
          )}

          {side && (
            <div className="bg-white px-[22px] py-5 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-[983px]:max-w-[560px]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[18px] font-medium">{side.title}</span>
                <span className="rounded-full border border-[#D4D4D4] px-2.5 py-0.5 text-[12px]">{side.tag}</span>
              </div>
              {side.rows.map((r) => (
                <div key={r.k} className="flex justify-between gap-4 border-t border-line py-[9px] text-[13.5px]">
                  <span className="text-body-3">{r.k}</span>
                  <span className="text-right font-medium">{r.v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
