import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["capital-raising/cooperative-finance"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
