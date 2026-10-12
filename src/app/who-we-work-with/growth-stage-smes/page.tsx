import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Growth-Stage SMEs and Enterprises",
  description:
    "Credence Africa helps growth-stage businesses become capital ready, expand into new markets, strengthen governance and systems and build long-term enterprise value.",
};

export default function GrowthStageSmesPage() {
  return <AudiencePageView page={audiencePages["growth-stage-smes"]} />;
}
