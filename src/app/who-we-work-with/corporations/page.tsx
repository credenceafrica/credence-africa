import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Corporations",
  description:
    "Credence Africa helps corporations raise and deploy capital, enter and expand across markets, navigate policy and regulation, build leadership capability and engage stakeholders with credibility.",
};

export default function CorporationsPage() {
  return <AudiencePageView page={audiencePages["corporations"]} />;
}
