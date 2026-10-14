import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { audiencesBySlug } from "@/lib/audience-pages";

const page = audiencesBySlug["corporations"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
