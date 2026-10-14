import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { servicePages } from "@/lib/service-pages";

const page = servicePages["capital-raising/investor-reporting"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
