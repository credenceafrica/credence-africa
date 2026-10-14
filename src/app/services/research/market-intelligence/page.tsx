import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["research/market-intelligence"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
