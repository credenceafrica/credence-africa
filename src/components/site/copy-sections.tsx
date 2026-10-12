import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { HeroProps } from "./hero";
import { Arrow, Chip, CtaBand, FaqList, IconTile, Pill, SmartLink, num } from "./primitives";

export type CopyLink = { label: string; href: string };

/** A body section of the long-form pages (Home, About, Services). */
export type CopySection = {
  type: "statement" | "split" | "cards" | "steps" | "directory" | "faq" | "cta";
  id?: string;
  /** Sets the section on ink. Steps and the closing band are always dark. */
  dark?: boolean;
  /** CSS padding override, e.g. "128px 0". */
  pad?: string;
  eb?: string;
  h2?: string;
  /** Statement: the dark lead and its grey continuation. */
  lead?: string;
  rest?: string;
  /** Closing band text. */
  p?: string;
  paras?: string[];
  links?: CopyLink[];
  chips?: CopyLink[];
  chipsLabel?: string;
  cards?: { t: string; b: string; href: string; cta?: string }[];
  steps?: string[];
  items?: { label: string; href: string; icon: string }[];
  faqs?: { q: string; a: string }[];
  img?: { src: string; alt: string; pos?: string };
};

export type CopyPage = { hero: HeroProps; sections: CopySection[] };

const h2Section = "h2 m-0 text-balance text-[clamp(32px,3.2vw,46px)] font-normal leading-[1.1] tracking-[-0.035em]";

/** Heading left, copy right; one column under 900px. */
const split = "grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-7";

function Links({ links, dark }: { links: CopyLink[]; dark: boolean }) {
  return (
    <div className="mt-2.5 flex flex-wrap gap-3">
      {links.map((l, j) =>
        j === 0 ? (
          <Pill key={l.href + j} href={l.href} variant={dark ? "light" : "dark"}>
            {l.label}
          </Pill>
        ) : (
          <Pill key={l.href + j} href={l.href} variant={dark ? "outline" : "outlineDark"}>
            {l.label}
          </Pill>
        ),
      )}
    </div>
  );
}

/** Renders the long-form page body section by section, as the design's copy template does. */
export function CopySections({ sections }: { sections: CopySection[] }) {
  return (
    <div className="w-full">
      {sections.map((s, i) => {
        const dark = !!s.dark || s.type === "cta" || s.type === "steps";
        const next = sections[i + 1];
        const pad =
          s.pad ??
          (dark ? "112px 0" : next && next.type === "split" && !next.dark ? "112px 0 0" : "112px 0 128px");
        const theme = dark
          ? { section: "on-dark bg-ink text-white", line: "border-line-dark", body: "text-body-dark" }
          : { section: "bg-white text-ink", line: "border-line", body: "text-body" };
        const style: CSSProperties = { padding: pad };

        switch (s.type) {
          case "statement": {
            const padB = next && (next.type === "split" || next.type === "cards") && !next.dark ? "0" : "128px";
            return (
              <section key={i} className="bg-white text-ink" style={{ padding: `128px 0 ${padB}` }}>
                <div className="wrap">
                  <p className="h2 m-0 max-w-[1080px] text-[clamp(30px,3.4vw,50px)] font-normal leading-[1.12] tracking-[-0.035em]">
                    {s.lead} <span className="text-mute">{s.rest}</span>
                  </p>
                </div>
              </section>
            );
          }

          case "split":
            return (
              <section key={i} id={s.id || undefined} className={theme.section} style={style}>
                <div className="wrap">
                  <div className={cn(split, "border-t pt-10", theme.line)}>
                    <div>
                      {s.eb && <div className="eb mb-[18px] text-[13.5px]">{s.eb}</div>}
                      <h2 className={h2Section}>{s.h2}</h2>
                    </div>
                    <div className="flex max-w-[720px] flex-col gap-[18px]">
                      {s.paras?.map((p) => (
                        <p key={p} className={cn("m-0 text-[17px]", theme.body)}>
                          {p}
                        </p>
                      ))}
                      {s.chips?.length ? (
                        <div className="mt-2 flex flex-wrap gap-2.5">
                          {s.chips.map((c) =>
                            dark ? (
                              <SmartLink key={c.href} href={c.href} className="rounded-full border border-[#3A3A3A] px-4 py-[9px] text-[14px] font-medium hover:text-primary">
                                {c.label}
                              </SmartLink>
                            ) : (
                              <Chip key={c.href} href={c.href}>
                                {c.label}
                              </Chip>
                            ),
                          )}
                        </div>
                      ) : null}
                      {s.links?.length ? <Links links={s.links} dark={dark} /> : null}
                    </div>
                  </div>
                  {s.img && (
                    <div className="relative mt-[72px] h-[480px] overflow-hidden bg-tile max-[720px]:h-[300px]">
                      <Image
                        src={s.img.src}
                        alt={s.img.alt}
                        fill
                        sizes="(min-width: 1400px) 1320px, 100vw"
                        className="object-cover"
                        style={{ objectPosition: s.img.pos ?? "center 35%" }}
                      />
                    </div>
                  )}
                </div>
              </section>
            );

          case "cards":
            return (
              <section key={i} id={s.id || undefined} className={theme.section} style={style}>
                <div className="wrap">
                  <div className={cn(split, "mb-14")}>
                    <div>
                      {s.eb && <div className="eb mb-[18px] text-[13.5px]">{s.eb}</div>}
                      <h2 className={h2Section}>{s.h2}</h2>
                    </div>
                    <div className="flex max-w-[720px] flex-col gap-[18px]">
                      {s.paras?.map((p) => (
                        <p key={p} className={cn("m-0 text-[17px]", theme.body)}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className={cn("bgrid grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] border-l border-t", theme.line)}>
                    {s.cards?.map((c, j) => (
                      <SmartLink
                        key={c.t}
                        href={c.href}
                        className={cn(
                          "flex min-h-[300px] flex-col gap-3 p-7",
                          dark ? "bg-panel text-white" : "cell bg-white text-ink",
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <span className={cn("tile flex size-11 items-center justify-center text-[17px] text-primary", dark ? "bg-tile" : "bg-ink")}>
                            {num(j)}
                          </span>
                          <Arrow size={18} className="text-mute" />
                        </div>
                        <h3 className="mb-0 mt-9 text-[21px] font-medium leading-[1.25] tracking-[-0.01em]">{c.t}</h3>
                        <p className={cn("m-0 text-[15px]", theme.body)}>{c.b}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[14px] font-semibold">
                          {c.cta ?? "Explore"}
                          <Arrow />
                        </span>
                      </SmartLink>
                    ))}
                  </div>
                  {s.img && (
                    <div className="relative mt-14 h-[520px] overflow-hidden bg-tile max-[720px]:h-[300px]">
                      <Image
                        src={s.img.src}
                        alt={s.img.alt}
                        fill
                        sizes="(min-width: 1400px) 1320px, 100vw"
                        className="object-cover"
                        style={{ objectPosition: s.img.pos ?? "center 35%" }}
                      />
                    </div>
                  )}
                </div>
              </section>
            );

          case "steps":
            return (
              <section key={i} className="on-dark bg-ink py-32 text-white">
                <div className="wrap">
                  <h2 className="h2 mb-16 mt-0 max-w-[900px] text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]">
                    {s.h2}
                  </h2>
                  <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] border-l border-t border-line-dark">
                    {s.steps?.map((t, j) => (
                      <div key={t} className="flex min-h-[220px] flex-col bg-panel">
                        <div className="px-6 py-[22px] text-[44px] font-light leading-none text-[#5A5A5A]">{num(j)}</div>
                        <div className="mx-6 border-t-[3px] border-primary pb-7 pt-5 text-[16px] leading-[1.55] text-[#E5E5E5]">{t}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case "directory":
            return (
              <section key={i} className="bg-white py-32 text-ink">
                <div className="wrap">
                  <div className={cn(split, "mb-14")}>
                    <h2 className={h2Section}>{s.h2}</h2>
                    <div className="flex max-w-[720px] flex-col gap-[18px]">
                      {s.paras?.map((p) => (
                        <p key={p} className="m-0 text-[17px] text-body">
                          {p}
                        </p>
                      ))}
                      {s.links?.length ? <Links links={s.links} dark={false} /> : null}
                    </div>
                  </div>
                  <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] border-l border-t border-line">
                    {s.items?.map((a) => (
                      <SmartLink key={a.href} href={a.href} className="cell flex min-h-[180px] flex-col gap-4 bg-white p-6 text-ink">
                        <div className="flex items-start justify-between">
                          <IconTile path={a.icon} />
                          <Arrow size={16} className="text-mute" />
                        </div>
                        <h3 className="mb-0 mt-auto text-[17px] font-medium leading-[1.3] tracking-[-0.01em]">{a.label}</h3>
                      </SmartLink>
                    ))}
                  </div>
                  {s.chips?.length ? (
                    <div className="flex flex-wrap items-center gap-2.5 border border-t-0 border-line px-6 py-[22px]">
                      <span className="eb mr-3 text-[13.5px]">{s.chipsLabel}</span>
                      {s.chips.map((c) => (
                        <Chip key={c.href} href={c.href} className="px-[15px] py-2">
                          {c.label}
                        </Chip>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>
            );

          case "faq":
            return (
              <section key={i} className="bg-white py-32 text-ink">
                <div className="wrap">
                  <div className={split}>
                    <h2 className="h2 m-0 text-[clamp(32px,3.2vw,46px)] font-normal leading-[1.1] tracking-[-0.035em]">{s.h2}</h2>
                    <FaqList items={s.faqs ?? []} variant="copy" />
                  </div>
                </div>
              </section>
            );

          case "cta":
            return (
              <CtaBand key={i} heading={s.h2 ?? ""} text={s.p ?? ""} size="copy">
                <div className="flex flex-wrap justify-center gap-3">
                  {s.links?.map((l, j) => (
                    <Pill key={l.href + j} href={l.href} variant={j === 0 ? "light" : "outline"}>
                      {l.label}
                    </Pill>
                  ))}
                </div>
              </CtaBand>
            );
        }
      })}
    </div>
  );
}
