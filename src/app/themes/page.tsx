import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { themesPage } from "@/lib/themes-content";

const page = themesPage;

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
