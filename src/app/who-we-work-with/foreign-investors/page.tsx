import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Foreign Investors",
  description:
    "Credence Africa helps foreign investors and international companies assess opportunity, navigate regulation, establish presence and execute transactions across Africa's growth markets.",
};

export default function ForeignInvestorsPage() {
  return <AudiencePageView page={audiencePages["foreign-investors"]} />;
}
