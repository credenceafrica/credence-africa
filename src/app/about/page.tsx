import type { Metadata } from "next";
import { CopyPageView } from "@/components/site/copy-sections";
import { aboutPage } from "@/lib/copy-pages";

export const metadata: Metadata = {
  title: { absolute: "About Credence Africa | Institutional Advisory and Services" },
  description:
    "Learn how Credence Africa connects advisory, training, events, research and intelligence for enterprises, investors and institutions in African markets.",
};

export default function AboutPage() {
  return <CopyPageView page={aboutPage} />;
}
