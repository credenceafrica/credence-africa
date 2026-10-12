import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { CopySections } from "@/components/site/copy-sections";
import { FaqJsonLd } from "@/components/site/primitives";
import { servicesPage } from "@/lib/copy-pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The integrated platforms through which Credence Africa helps institutions raise capital, enter markets, navigate policy, build capability, generate intelligence and convene stakeholders across Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <FaqJsonLd items={servicesPage.sections.find((s) => s.type === "faq")?.faqs ?? []} />
      <Hero {...servicesPage.hero} />
      <CopySections sections={servicesPage.sections} />
    </>
  );
}
