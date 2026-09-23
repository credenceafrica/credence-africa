import type { Metadata } from "next";
import { LandingDetail } from "@/components/landing-detail";
import { themesBySlug } from "@/lib/themes-content";

const theme = themesBySlug["governance"];

export const metadata: Metadata = {
  title: theme.seoTitle,
  description: theme.metaDescription,
  keywords: theme.keywords,
  alternates: { canonical: "/themes/governance" },
};

export default function Page() {
  return <LandingDetail page={theme} />;
}
