import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { contact } from "@/lib/contact";
import { UnsubscribeButton } from "./unsubscribe-button";

export const metadata: Metadata = { title: "Unsubscribe", robots: { index: false, follow: false } };

export default async function UnsubscribePage({ searchParams }: { searchParams: Promise<{ id?: string; token?: string }> }) {
  const { id, token } = await searchParams;
  return (
    <div className="w-full bg-white text-ink">
      <Hero title="Credence Intelligence Briefings" crumbs={[{ label: "Unsubscribe" }]} />
      <section className="py-28">
        <div className="wrap">
          {id && token ? (
            <UnsubscribeButton id={id} token={token} />
          ) : (
            <p className="m-0 max-w-[720px] text-[15.5px] text-body">
              To stop receiving briefings, use the unsubscribe link in any briefing email or email{" "}
              <a href={`mailto:${contact.email}?subject=Unsubscribe%20from%20Credence%20Intelligence%20briefings`} className="underline">
                {contact.email}
              </a>{" "}
              and we will remove you.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
