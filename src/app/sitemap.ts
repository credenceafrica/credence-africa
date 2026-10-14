import type { MetadataRoute } from "next";
import { getSiteGroups, siteUrl } from "@/lib/site-map";

// Insights and events come from live data, so the list is rebuilt at most hourly.
export const revalidate = 3600;

/** The same pages as /site-map, minus links to the sister sites. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hrefs = (await getSiteGroups()).flatMap((g) => g.items.map((l) => l.href));
  return [...new Set(hrefs)].filter((h) => h.startsWith("/")).map((h) => ({ url: new URL(h, siteUrl).href }));
}
