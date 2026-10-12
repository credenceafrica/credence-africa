import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Cooperatives",
  description:
    "Credence Africa partners with cooperatives, SACCOs, chamas, producer groups and community finance institutions to strengthen governance, unlock capital, deepen member value and build institutions that last.",
};

export default function CooperativesPage() {
  return <AudiencePageView page={audiencePages["cooperatives"]} />;
}
