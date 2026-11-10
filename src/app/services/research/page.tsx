import { CopySections, pageMetadata } from "@/components/site/copy-sections";
import { BriefingsBand } from "@/components/site/briefings-band";
import { Hero } from "@/components/site/hero";
import { FaqJsonLd } from "@/components/site/primitives";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["research"];
const faqAt = page.sections.findIndex((s) => s.type === "faq");

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <FaqJsonLd items={page.sections[faqAt].faqs ?? []} />
      <Hero {...page.hero} />
      <CopySections sections={page.sections.slice(0, faqAt)} />
      <BriefingsBand />
      <CopySections sections={page.sections.slice(faqAt)} />
    </>
  );
}
