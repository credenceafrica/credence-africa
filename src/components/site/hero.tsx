import Image from "next/image";
import { cn } from "@/lib/utils";
import { Arrow, SmartLink, phoneFull } from "./primitives";

export type Crumb = { label: string; href?: string };
export type HeroLink = { label: string; href: string };

export type HeroProps = {
  title: string;
  /** Home only: the start of the description. `intro` is the rest, dropped on phones. */
  sub?: string;
  intro?: string;
  /** Trail after Home; the last entry is the current page. */
  crumbs?: Crumb[];
  btn1?: HeroLink;
  btn2?: HeroLink;
  /** Home only: white feature card at the right of the base row. */
  card?: { label: string; title: string; text: string; href: string };
  /** "full" fills the screen (Home), "tall" tops out at 820px, otherwise 660px. */
  size?: "full" | "tall" | "default";
  /** Some templates set the title to a fixed size at phone width. */
  mobileTitle?: 34 | 36;
  imgAlt?: string;
};

const minH = {
  full: "min-h-[100svh]",
  tall: "min-h-[max(600px,min(86svh,820px))]",
  default: "min-h-[max(540px,min(72svh,660px))]",
};
// The canvas sets these phone sizes; below about 400px they scale down so long words still fit.
const mobileTitleCls = {
  34: "max-[720px]:!text-[clamp(27px,8.5vw,34px)]",
  36: "max-[720px]:!text-[clamp(28px,9vw,36px)]",
};

/** Full-bleed photographic hero the header sits over. */
export function Hero({
  title,
  sub,
  intro,
  crumbs,
  btn1,
  btn2,
  card,
  size = "default",
  mobileTitle,
  imgAlt = "Professionals in discussion on a terrace overlooking a modern African city skyline",
}: HeroProps) {
  const home = size === "full";
  const trail = crumbs?.length ? [{ label: "Home", href: "/" }, ...crumbs] : [];
  const scrollCue = (
    <div className={cn("flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/75", home ? "self-start max-[983px]:hidden" : "max-[900px]:hidden")}>
      Scroll down
      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
  const buttons = btn1 && (
    <div className={cn("flex flex-wrap gap-3", !home && "cr-in cr-d3 mt-8")}>
      <SmartLink
        href={btn1.href}
        className={cn("pill inline-flex items-center gap-2 rounded-full bg-white font-semibold text-ink", home ? "px-[22px] py-[13px] text-[13px]" : "px-6 py-3.5 text-[13.5px]", phoneFull)}
      >
        {btn1.label}
        <Arrow />
      </SmartLink>
      {btn2 && (
        <SmartLink
          href={btn2.href}
          className={cn("pill inline-flex items-center rounded-full border border-white/70 bg-ink font-medium text-white", home ? "px-[22px] py-3 text-[13px]" : "px-6 py-[13px] text-[13.5px]", phoneFull)}
        >
          {btn2.label}
        </SmartLink>
      )}
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

      {home ? (
        // Home keeps its earlier layout instead of the canvas's November hero (the user's call).
        <div className={cn("relative mx-auto flex max-w-[1400px] flex-col justify-end px-10 pb-10 pt-[196px] max-[720px]:px-5", minH.full)}>
          <h1 className="cr-in cr-d2 m-0 max-w-[1000px] text-balance text-[clamp(41.5px,5.58vw,81px)] font-normal leading-[0.98] tracking-[-0.045em]">{title}</h1>

          {/* The title-to-divider gap stops at 96px; a taller screen adds the extra above the title. */}
          <div className="max-h-24 min-h-14 grow" />

          {/* Two columns from 984px; below that it stacks. */}
          <div className="cr-in cr-d3 grid grid-cols-[minmax(0,460px)_minmax(0,420px)] items-end justify-between gap-8 border-t border-white/20 pt-7 max-[983px]:grid-cols-1">
            <div className="flex flex-col gap-6 self-start">
              <p className="m-0 max-w-[460px] text-[14.5px] leading-[1.6] text-white/[0.86]">
                {sub}
                {intro && <span className="max-[720px]:hidden"> {intro}</span>}
              </p>
              {buttons}
              {scrollCue}
            </div>

            {card && (
              <SmartLink
                href={card.href}
                className="cr-card cr-in cr-d4 flex min-h-[168px] bg-white text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-[983px]:max-w-[560px]"
              >
                <div className="flex flex-[1_1_0] flex-col gap-2 px-[22px] py-5">
                  <span className="text-[11px] font-semibold text-primary-deep">{card.label}</span>
                  <span className="text-[16px] font-medium leading-[1.25] tracking-[-0.01em]">{card.title}</span>
                  <span className="text-[12px] leading-[1.5] text-body-2">{card.text}</span>
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
          </div>
        </div>
      ) : (
        <div className={cn("relative mx-auto grid max-w-[1400px] grid-rows-[1fr_auto] px-10 max-[720px]:px-5", minH[size])}>
          <div className="flex max-w-[760px] flex-col justify-end pb-12 pt-[140px]">
            {trail.length > 0 && (
              <nav className="cr-in cr-d1 mb-7" aria-label="Breadcrumb">
                <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[12.5px] text-white/[0.72]">
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
                "cr-in cr-d2 m-0 text-balance font-normal tracking-[-0.04em]",
                size === "tall" ? "text-[clamp(36px,4.4vw,64px)]" : "text-[clamp(32px,3.8vw,54px)]",
                // After the size: tailwind-merge drops a leading class that precedes a font-size class.
                "leading-[1.03]",
                mobileTitle && mobileTitleCls[mobileTitle],
              )}
            >
              {title}
            </h1>

            {intro && <p className="cr-in cr-d3 mb-0 mt-[22px] max-w-[620px] text-[clamp(14.5px,1.1vw,16.5px)] leading-[1.6] text-white/[0.86]">{intro}</p>}

            {buttons}
          </div>

          <div className="cr-in cr-d4 flex min-h-11 items-center border-t border-white/20 pb-[26px] pt-5">{scrollCue}</div>
        </div>
      )}
    </section>
  );
}
