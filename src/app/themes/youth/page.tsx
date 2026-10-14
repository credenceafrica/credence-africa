import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { themesBySlug } from "@/lib/themes-content";

const page = themesBySlug["youth"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
