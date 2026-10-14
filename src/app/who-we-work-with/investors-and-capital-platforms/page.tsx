import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { audiencesBySlug } from "@/lib/audience-pages";

const page = audiencesBySlug["investors-and-capital-platforms"];

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
