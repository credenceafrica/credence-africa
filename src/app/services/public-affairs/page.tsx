import { ServicePageView } from "@/components/site/service-page";
import { servicePages } from "@/lib/service-pages";

export default function PublicAffairsPage() {
  return <ServicePageView page={servicePages["public-affairs"]} consult="public-affairs" />;
}
