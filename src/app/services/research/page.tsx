import { ServicePageView } from "@/components/site/service-page";
import { servicePages } from "@/lib/service-pages";

export default function ResearchPage() {
  return <ServicePageView page={servicePages["research"]} consult="research" />;
}
