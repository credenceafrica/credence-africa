import { ServicePageView } from "@/components/site/service-page";
import { servicePages } from "@/lib/service-pages";

export default function CapitalRaisingPage() {
  return <ServicePageView page={servicePages["capital-raising"]} consult="capital" />;
}
