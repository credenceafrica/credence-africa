import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Faith-Based Institutions",
  description:
    "Credence Africa helps churches, ministries, faith-based organisations and faith-rooted enterprises steward resources well, govern with integrity, build sustainable ventures and engage public life with credibility.",
};

export default function FaithBasedInstitutionsPage() {
  return <AudiencePageView page={audiencePages["faith-based-institutions"]} />;
}
