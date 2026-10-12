"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Arrow, SmartLink } from "./site/primitives";

export type NavMenu = {
  key: "services" | "sectors" | "themes" | "who";
  label: string;
  href: string;
  /** Label of the menu's first row, which links to the index page. */
  all: string;
  items: { label: string; href: string }[];
};

type Section = NavMenu["key"] | "about" | "events" | "insights" | "home" | "none";

/** Which nav item a route belongs to. The Engage page lists its events, so it lights Events. */
function sectionOf(path: string): Section {
  if (path === "/") return "home";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/events") || path.startsWith("/services/credence-engage/")) return "events";
  if (path.startsWith("/services")) return "services";
  if (path.startsWith("/sectors")) return "sectors";
  if (path.startsWith("/themes")) return "themes";
  if (path.startsWith("/who-we-work-with")) return "who";
  if (path.startsWith("/insights")) return "insights";
  return "none";
}

const ON = "#FF4820";
const OFF = "rgba(255,255,255,0.9)";

// Insights is Credible Perspectives, opened in a new tab as the header did before the redesign.
const perspectives = { href: "https://perspectives.credence.africa", target: "_blank", rel: "noopener noreferrer" };

/** Transparent header laid over each page's photographic hero. */
export function Header({ menus }: { menus: NavMenu[] }) {
  const pathname = usePathname();
  const active = sectionOf(pathname);
  const [open, setOpen] = useState<NavMenu["key"] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  // Below 1180px pages run long, so the header returns as a bar when the reader scrolls up.
  const [bar, setBar] = useState<"top" | "shown" | "hidden">("top");
  const mobileOpenRef = useRef(false);

  // Close menus on navigation, on Escape and on a click outside the nav.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setBar("top");
  }, [pathname]);
  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 0) {
        setBar("top");
        last = 0;
        return;
      }
      if (mobileOpenRef.current || Math.abs(y - last) < 8) return;
      const down = y > last;
      last = y;
      // While the header is still in view at the top of the page it simply scrolls with it.
      setBar((b) => (b === "top" && y < 84 ? "top" : down ? "hidden" : "shown"));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const linkColor = (s: Section) => ({ color: active === s ? ON : OFF });

  return (
    <header
      className={cn(
        "cr-hdr absolute inset-x-0 top-0 z-50 w-full border-b border-white/[0.16] bg-[rgba(10,10,10,0.28)] text-white backdrop-blur-[6px] transition-[transform,background-color] duration-300 ease-out focus-within:translate-y-0",
        bar !== "top" && "max-[1180px]:fixed max-[1180px]:bg-[rgba(10,10,10,0.94)]",
        bar === "hidden" && "max-[1180px]:-translate-y-full",
      )}
    >
      <div className="mx-auto flex min-h-[84px] max-w-[1400px] items-center justify-between gap-6 px-10 py-[18px] max-[720px]:px-5">
        <Link href="/" aria-label="Credence Africa home" className="cr-logo hit flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-light.png"
            alt="Credence Africa — Enabling institutions that build Africa"
            className="block h-7 w-auto max-w-[62vw]"
          />
        </Link>

        <nav ref={navRef} aria-label="Main" className="flex items-center gap-0.5 whitespace-nowrap text-[14.5px] max-[1180px]:hidden">
          <Link href="/about" className="cr-nl px-3 py-2.5 font-medium" style={linkColor("about")}>
            About Us
          </Link>
          {menus.map((m) => {
            const isOpen = open === m.key;
            return (
              <div key={m.key} className="relative">
                <button
                  type="button"
                  className="cr-nl flex min-h-11 cursor-pointer items-center gap-[5px] whitespace-nowrap border-0 bg-transparent px-3 py-2.5 font-medium"
                  style={linkColor(m.key)}
                  aria-expanded={isOpen}
                  aria-controls={`menu-${m.key}`}
                  onClick={() => setOpen(isOpen ? null : m.key)}
                >
                  {m.label}
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id={`menu-${m.key}`}
                    className="cr-drop absolute left-0 top-[calc(100%+18px)] z-[60] flex min-w-[340px] flex-col border border-line-dark bg-panel p-2 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                  >
                    <SmartLink
                      href={m.href}
                      className="mb-1 flex items-center justify-between border-b border-line-dark px-3.5 py-3 font-semibold text-primary"
                    >
                      {m.all}
                      <Arrow />
                    </SmartLink>
                    {m.items.map((it) => (
                      <SmartLink key={it.href} href={it.href} className="cr-di whitespace-normal px-3.5 py-2.5 font-normal text-[#E5E5E5]">
                        {it.label}
                      </SmartLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/events" className="cr-nl px-3 py-2.5 font-medium" style={linkColor("events")}>
            Events
          </Link>
          <a {...perspectives} className="cr-nl px-3 py-2.5 font-medium" style={linkColor("insights")}>
            Insights
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/consult"
            className="pill inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-[14.5px] font-semibold text-ink max-[1180px]:hidden"
          >
            Book a Consultation
            <Arrow />
          </Link>
          <button
            type="button"
            className="hidden size-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-transparent text-white max-[1180px]:inline-flex"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpen(null);
            }}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="cr-drop flex max-h-[calc(100dvh-85px)] flex-col overflow-y-auto overscroll-contain border-t border-line-dark bg-ink px-10 pb-6 pt-3 max-[720px]:px-5"
        >
          {[{ label: "About Us", href: "/about" }, ...menus.map((m) => ({ label: m.label, href: m.href })), { label: "Events", href: "/events" }, { label: "Insights", ...perspectives }].map(({ label, ...l }) => (
            <SmartLink key={l.href} {...l} onClick={() => setMobileOpen(false)} className="border-b border-line-dark py-3.5 text-[18px] text-white">
              {label}
            </SmartLink>
          ))}
          <Link href="/consult" className="pill mt-[18px] rounded-full bg-primary px-5 py-3.5 text-center font-semibold text-ink">
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
