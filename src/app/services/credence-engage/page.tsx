import { ServicePageView } from "@/components/site/service-page";
import { servicePages } from "@/lib/service-pages";

export default function CredenceEngagePage() {
  return <ServicePageView page={servicePages["credence-engage"]} consult="engage" />;
}
