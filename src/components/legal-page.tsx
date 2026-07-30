import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  type LegalBlock,
  type LegalPolicy,
  legalContact,
  legalLastUpdated,
  legalPolicies,
} from "@/lib/legal";

// Turns any email address inside body text into a mailto link. Ink text with a vermillion
// underline keeps it AA-legible (vermillion text on white would fail small-text contrast).
const EMAIL_SPLIT = /([\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,})/g;
const EMAIL_TEST = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

function renderText(text: string) {
  return text.split(EMAIL_SPLIT).map((part, i) =>
    EMAIL_TEST.test(part) ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-normal text-foreground underline decoration-primary decoration-1 underline-offset-2 transition-[text-decoration-thickness] hover:decoration-2"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return (
      <p className="max-w-[68ch] text-base font-light leading-relaxed text-foreground/80">
        {renderText(block.text)}
      </p>
    );
  }
  return (
    <ul className="max-w-[68ch] space-y-3">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base font-light leading-relaxed text-foreground/80">
          <span className="mt-[0.55rem] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
          <span>{renderText(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function TableOfContents({ sections }: { sections: LegalPolicy["sections"] }) {
  return (
    <ol className="space-y-2.5">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="group flex gap-2.5 text-sm font-light leading-snug text-foreground/70 transition-colors hover:text-primary"
          >
            <span className="tabular-nums text-primary/70">{i + 1}.</span>
            <span>{s.heading}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalPage({ policy }: { policy: LegalPolicy }) {
  const others = legalPolicies.filter((p) => p.slug !== policy.slug);

  return (
    <div className="overflow-x-hidden">
      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-light text-background/60">Last updated {legalLastUpdated}</p>
            <h1 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              {policy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-background/80 md:text-lg">
              {policy.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Body: light band, TOC rail + prose */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Desktop TOC: sticky rail */}
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="On this page" className="lg:sticky lg:top-28">
                <p className="text-sm font-medium text-foreground/50">On this page</p>
                <div className="mt-4">
                  <TableOfContents sections={policy.sections} />
                </div>
              </nav>
            </aside>

            <div className="lg:col-span-9">
              {/* Mobile TOC: collapsible */}
              <details className="mb-10 border border-foreground/15 lg:hidden">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-foreground marker:hidden">
                  On this page
                </summary>
                <nav aria-label="On this page" className="border-t border-foreground/15 px-4 py-4">
                  <TableOfContents sections={policy.sections} />
                </nav>
              </details>

              <article className="space-y-10">
                {policy.sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-t border-foreground/12 pt-10 first:border-t-0 first:pt-0"
                  >
                    <h2 className="font-normal leading-snug tracking-[-0.005em] text-foreground [font-size:clamp(1.15rem,2vw,1.375rem)]">
                      <span className="text-primary">{i + 1}.</span> {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.blocks.map((block, bi) => (
                        <Block key={bi} block={block} />
                      ))}
                    </div>
                  </section>
                ))}
              </article>

              {/* Contact + cross-links */}
              <div className="mt-16 grid gap-10 border-t border-foreground/12 pt-10 sm:grid-cols-2">
                <div>
                  <h2 className="font-normal leading-snug text-foreground [font-size:clamp(1.15rem,2vw,1.375rem)]">
                    Questions about this policy?
                  </h2>
                  <p className="mt-3 max-w-[42ch] text-base font-light leading-relaxed text-foreground/80">
                    Email{" "}
                    <a
                      href={`mailto:${legalContact.email}`}
                      className="font-normal text-foreground underline decoration-primary decoration-1 underline-offset-2 hover:decoration-2"
                    >
                      {legalContact.email}
                    </a>{" "}
                    or write to us at {legalContact.address}.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/50">More legal</p>
                  <ul className="mt-4 divide-y divide-foreground/12 border-y border-foreground/12">
                    {others.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${p.slug}`}
                          className="group flex items-center gap-3 py-3.5 text-base font-light text-foreground transition-colors hover:text-primary"
                        >
                          <span>{p.title}</span>
                          <ArrowUpRight
                            className="ml-auto size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
