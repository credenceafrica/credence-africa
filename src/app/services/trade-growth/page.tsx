import { ServicePageView } from "@/components/site/service-page";
import { servicePages } from "@/lib/service-pages";

export default function TradeGrowthPage() {
  return <ServicePageView page={servicePages["trade-growth"]} consult="trade" />;
}
