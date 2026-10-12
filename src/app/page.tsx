import { Hero } from "@/components/site/hero";
import { CopySections } from "@/components/site/copy-sections";
import { FaqJsonLd } from "@/components/site/primitives";
import { homePage } from "@/lib/copy-pages";

export default function Home() {
  return (
    <>
      <FaqJsonLd items={homePage.sections.find((s) => s.type === "faq")?.faqs ?? []} />
      <Hero {...homePage.hero} />
      <CopySections sections={homePage.sections} />
    </>
  );
}
