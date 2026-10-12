import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Governments and Public Institutions",
  description:
    "Credence Africa supports national governments, county governments, regulators, agencies and public institutions to design credible engagement, attract investment, strengthen capability and deliver institutional results.",
};

export default function GovernmentsAndPublicInstitutionsPage() {
  return <AudiencePageView page={audiencePages["governments-and-public-institutions"]} />;
}
