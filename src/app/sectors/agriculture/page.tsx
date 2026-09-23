import type { Metadata } from "next";
import { LandingDetail } from "@/components/landing-detail";
import { sectorsBySlug } from "@/lib/sectors-content";

const sector = sectorsBySlug["agriculture"];

export const metadata: Metadata = {
  title: sector.seoTitle,
  description: sector.metaDescription,
  keywords: sector.keywords,
  alternates: { canonical: "/sectors/agriculture" },
};

export default function Page() {
  return <LandingDetail page={sector} />;
}
