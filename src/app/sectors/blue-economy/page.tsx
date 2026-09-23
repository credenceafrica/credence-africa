import type { Metadata } from "next";
import { LandingDetail } from "@/components/landing-detail";
import { sectorsBySlug } from "@/lib/sectors-content";

const sector = sectorsBySlug["blue-economy"];

export const metadata: Metadata = {
  title: sector.seoTitle,
  description: sector.metaDescription,
  keywords: sector.keywords,
  alternates: { canonical: "/sectors/blue-economy" },
};

export default function Page() {
  return <LandingDetail page={sector} />;
}
