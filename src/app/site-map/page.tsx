import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Arrow, SmartLink } from "@/components/site/primitives";
import { getSiteGroups } from "@/lib/site-map";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Every page on the Credence Africa website: services, sectors, themes, who we work with, insights, events and policies.",
};

// Insights and events come from live data, refreshed hourly.
export const revalidate = 3600;

/**
 * Not part of the design canvas; built from its hero, split grid and hairline lists.
 * Lives at /site-map because Next reserves /sitemap for app/sitemap.ts (a page there fails the whole app).
 */
export default async function SitemapPage() {
  const groups = await getSiteGroups();

  return (
    <>
      <Hero
        title="Sitemap"
        intro="Every page on the Credence Africa website, grouped the way the site is organised."
        crumbs={[{ label: "Sitemap" }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
      />

      <section className="bg-white pb-32 pt-28 text-ink">
        <div className="wrap">
          {groups.map((g) => (
            <div
              key={g.label}
              className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-14 border-t border-line py-12 max-[900px]:grid-cols-1 max-[900px]:gap-6"
            >
              <h2 className="m-0 text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.15] tracking-[-0.03em]">
                {g.label} <span className="text-mute">({g.items.length})</span>
              </h2>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-8 p-0">
                {g.items.map((l) => (
                  <li key={l.href} className="border-b border-line-soft">
                    <SmartLink
                      href={l.href}
                      className="flex items-center justify-between gap-4 py-3.5 text-[15.5px] leading-[1.4] text-ink hover:text-primary-deep"
                    >
                      {l.label}
                      <Arrow size={14} className="shrink-0 text-mute" />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
