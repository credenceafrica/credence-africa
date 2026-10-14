import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The up-right arrow on every primary link. Hovering its link nudges it (see `.arrow`). */
export function Arrow({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("arrow shrink-0", className)}
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/** Site routes go through next/link; anchors, mail, phone and the sister sites stay plain links. */
export function SmartLink({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}

const pillVariants = {
  /** White on a dark or photo ground. */
  light: "bg-white py-[13px] font-semibold text-ink",
  /** Ink on a light ground. */
  dark: "bg-ink py-[13px] font-semibold text-white",
  /** Vermillion with ink text. */
  accent: "bg-primary py-[13px] font-semibold text-ink",
  /** Outline on a dark ground; text stays white. */
  outline: "border border-white/70 py-3 font-medium text-white",
  /** Outline on a dark ground whose text warms to vermillion on hover. */
  outlineAccent: "border border-white/70 py-3 font-medium text-white hover:text-primary",
  /** Outline on a light ground. */
  outlineDark: "border border-ink py-3 font-medium text-ink",
} as const;

export type PillVariant = keyof typeof pillVariants;

/** Rounded call-to-action link. Primary variants carry the arrow by default. */
export function Pill({
  href,
  variant,
  arrow,
  className,
  children,
}: {
  href: string;
  variant: PillVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const withArrow = arrow ?? !variant.startsWith("outline");
  return (
    <SmartLink
      href={href}
      className={cn(
        "pill inline-flex items-center gap-2 rounded-full px-[22px] text-[14.5px]",
        pillVariants[variant],
        className,
      )}
    >
      {children}
      {withArrow && <Arrow />}
    </SmartLink>
  );
}

/** Bordered pill used for tags and related links on a light ground. */
export function Chip({ href, children, className }: { href?: string; children: ReactNode; className?: string }) {
  const cls = cn("rounded-full border border-chip px-4 py-[9px] text-[14px] font-medium", className);
  return href ? (
    <SmartLink href={href} className={cn("chip hit", cls)}>
      {children}
    </SmartLink>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** 44px ink square holding a vermillion stroke icon, from an SVG path string. */
export function IconTile({ path, className }: { path: string; className?: string }) {
  return (
    <span className={cn("tile flex size-11 shrink-0 items-center justify-center bg-ink", className)}>
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF4820"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </span>
  );
}

/** Checkmark bullet for the "how we help" and support lists. */
export function Check({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("mt-[3px] shrink-0", className)}
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

/** Two-digit index, as the design numbers cards, needs and steps. */
export const num = (i: number) => String(i + 1).padStart(2, "0");

/** Native details/summary accordion. Keyboard and screen-reader support come with the elements. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq min-w-0 border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="border-b border-line">
          <summary className="flex items-center justify-between gap-4 py-6 font-medium">
            <h3 className="m-0 text-[17px] font-medium leading-[1.4]">{f.q}</h3>
            <span className="faq-plus flex size-8 shrink-0 items-center justify-center rounded-full border border-chip">
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mb-6 max-w-[600px] text-[15.5px] text-body-2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data for a set of questions. */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const ctaHeading = {
  copy: "text-[clamp(40px,5.2vw,80px)] leading-[1.02]",
  page: "text-[clamp(40px,5vw,76px)] leading-[1.02]",
  large: "text-[clamp(44px,6vw,92px)] leading-none",
  event: "text-[clamp(38px,4.8vw,72px)] leading-[1.04]",
} as const;

/** Closing band over the city photograph. */
export function CtaBand({
  heading,
  text,
  size = "page",
  textWidth = "max-w-[620px]",
  padding = "py-[160px]",
  children,
}: {
  heading: string;
  text?: string;
  size?: keyof typeof ctaHeading;
  textWidth?: string;
  padding?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("ph-city relative overflow-hidden text-white", padding)}>
      <div className="wrap relative flex max-w-[1000px] flex-col items-center gap-6 text-center">
        <h2 className={cn("h2 m-0 text-balance font-normal tracking-[-0.045em]", ctaHeading[size])}>{heading}</h2>
        {text && <p className={cn("m-0 text-[17px] text-[#D4D4D4]", textWidth)}>{text}</p>}
        {children}
      </div>
    </section>
  );
}
