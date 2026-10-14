import type { Metadata } from "next";
import { CopyPageView } from "@/components/site/copy-sections";
import { homePage } from "@/lib/copy-pages";

export const metadata: Metadata = {
  title: { absolute: "Credence Africa | Advisory, Training, Events and Intelligence" },
  description:
    "Advisory, professional training, event management and research for institutions working in Kenya and African markets. Explore Credence Africa's services.",
};

export default function Home() {
  return <CopyPageView page={homePage} />;
}
