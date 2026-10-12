import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { CopySections } from "@/components/site/copy-sections";
import { FaqJsonLd } from "@/components/site/primitives";
import { aboutPage } from "@/lib/copy-pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Credence Africa blends precision with perspective: execution-ready advisory, context-driven structuring and integrated expertise for institutions shaping Africa's growth.",
};

export default function AboutPage() {
  return (
    <>
      <FaqJsonLd items={aboutPage.sections.find((s) => s.type === "faq")?.faqs ?? []} />
      <Hero {...aboutPage.hero} />
      <CopySections sections={aboutPage.sections} />
    </>
  );
}
