import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Investors and Capital Platforms",
  description:
    "Credence Africa works with private equity, venture capital, family offices, DFIs, banks, funds and investment platforms to source opportunity, manage risk, support portfolios and stay ahead of policy and market shifts.",
};

export default function InvestorsAndCapitalPlatformsPage() {
  return <AudiencePageView page={audiencePages["investors-and-capital-platforms"]} />;
}
