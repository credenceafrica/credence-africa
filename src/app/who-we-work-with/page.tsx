import { CopyPageView, pageMetadata } from "@/components/site/copy-sections";
import { whoWeWorkWithPage } from "@/lib/audience-pages";

const page = whoWeWorkWithPage;

export const metadata = pageMetadata(page);

export default function Page() {
  return <CopyPageView page={page} />;
}
