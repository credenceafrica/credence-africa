import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Industry Associations and Ecosystem Actors",
  description:
    "Credence Africa helps industry associations, chambers, professional bodies, sector platforms and ecosystem builders strengthen their institutions, serve members better, shape policy and convene their sectors with credibility.",
};

export default function IndustryAssociationsPage() {
  return <AudiencePageView page={audiencePages["industry-associations"]} />;
}
