import type { Metadata } from "next";
import { CopyPageView } from "@/components/site/copy-sections";
import { servicesPage } from "@/lib/copy-pages";

export const metadata: Metadata = {
  title: { absolute: "Credence Africa Services | Advisory, Training, Events and Research" },
  description:
    "Compare Credence Africa's advisory, training, event management, research and intelligence services. Choose the route that fits your institutional objective.",
};

export default function ServicesPage() {
  return <CopyPageView page={servicesPage} />;
}
