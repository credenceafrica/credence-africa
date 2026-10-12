import type { NavMenu } from "@/components/header";
import { sectorList } from "@/lib/sectors-content";
import { themeList } from "@/lib/themes-content";
import { audiences } from "@/lib/audiences";
import { getInsights } from "@/lib/insights";
import { getEventPortfolio } from "@/lib/external-data";

export type SiteLink = { label: string; href: string };

export const siteUrl = "https://www.credence.africa";

/** The header's dropdowns. The sitemaps (/sitemap.xml and /site-map) list the same pages. */
export const navMenus: NavMenu[] = [
  {
    key: "services",
    label: "Services",
    href: "/services",
    all: "All Services",
    items: [
      { label: "Capital Raising and Investment Structuring", href: "/services/capital-raising" },
      { label: "Public Affairs and Policy Advisory", href: "/services/public-affairs" },
      { label: "Trade and Growth Advisory", href: "/services/trade-growth" },
      { label: "Research and Market Intelligence", href: "/services/research" },
      { label: "Credible Perspectives", href: "https://perspectives.credence.africa" },
      { label: "Credence Institute", href: "https://institute.credence.africa" },
      { label: "Credence Engage", href: "/services/credence-engage" },
    ],
  },
  {
    key: "sectors",
    label: "Sectors",
    href: "/sectors",
    all: "All Sectors",
    items: sectorList.map((s) => ({ label: s.name, href: `/sectors/${s.slug}` })),
  },
  {
    key: "themes",
    label: "Themes",
    href: "/themes",
    all: "All Themes",
    items: themeList.map((t) => ({ label: t.name, href: `/themes/${t.slug}` })),
  },
  {
    key: "who",
    label: "Who We Work With",
    href: "/who-we-work-with",
    all: "Overview",
    items: audiences.map((a) => ({ label: a.name, href: `/who-we-work-with/${a.slug}` })),
  },
];

export const mainPages: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Themes", href: "/themes" },
  { label: "Who We Work With", href: "/who-we-work-with" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  { label: "Book a Consultation", href: "/consult" },
];

export const legalPages: SiteLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

/** Every page on the site, grouped as the site groups them, with the live insights and events. */
export async function getSiteGroups(): Promise<{ label: string; items: SiteLink[] }[]> {
  const [insights, events] = await Promise.all([getInsights(), getEventPortfolio()]);
  return [
    { label: "Main pages", items: mainPages },
    ...navMenus.map((m) => ({ label: m.label, items: m.items })),
    { label: "Insights", items: insights.map((i) => ({ label: i.title, href: `/insights/${i.slug}` })) },
    { label: "Events", items: events.map((e) => ({ label: e.title, href: `/services/credence-engage/${e.id}` })) },
    { label: "Legal", items: legalPages },
  ].filter((g) => g.items.length > 0);
}
