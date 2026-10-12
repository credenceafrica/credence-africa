import type { Metadata } from "next";
import { AudiencePageView } from "@/components/site/audience-page";
import { audiencePages } from "@/lib/audience-pages";

export const metadata: Metadata = {
  title: "Startups and Innovators",
  description:
    "Credence Africa helps startups, founders and innovators become investor-ready, navigate regulation, access markets and build the systems and credibility that growth demands.",
};

export default function StartupsAndInnovatorsPage() {
  return <AudiencePageView page={audiencePages["startups-and-innovators"]} />;
}
