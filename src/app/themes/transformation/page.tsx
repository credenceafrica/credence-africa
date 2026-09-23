import type { Metadata } from "next";
import { LandingDetail } from "@/components/landing-detail";
import { themesBySlug } from "@/lib/themes-content";

const theme = themesBySlug["transformation"];

export const metadata: Metadata = {
  title: theme.seoTitle,
  description: theme.metaDescription,
  keywords: theme.keywords,
  alternates: { canonical: "/themes/transformation" },
};

export default function Page() {
  return <LandingDetail page={theme} />;
}
