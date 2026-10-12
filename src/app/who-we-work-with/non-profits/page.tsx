import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Nonprofits and Development Organisations",
  description:
    "Credence Africa helps nonprofits, NGOs, foundations and development organisations become better governed, more credible, more fundable and more effective in delivering impact.",
};

export default function NonProfitsPage() {
  return <AudiencePageView page={audiencePages["non-profits"]} />;
}
