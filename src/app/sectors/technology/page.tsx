import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { sectorsBySlug } from "@/lib/sectors-content";

const page = sectorsBySlug["technology"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
