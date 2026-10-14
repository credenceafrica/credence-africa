import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { sectorsPage } from "@/lib/sectors-content";

const page = sectorsPage;

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
