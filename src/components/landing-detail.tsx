import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";
import { ArrowRight } from "lucide-react";
import {
  GEOGRAPHY_HEADING,
  type LandingAction,
  type LandingPage,
} from "@/lib/landing-content";

/** Canonical title treatment: one size site-wide, no hero tier. */
const TITLE =
  "text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)]";

/** Canonical button treatment: one size site-wide. */
const BTN = "h-14 rounded-none px-8 text-base font-light";

const SOLID_ON_RED = `${BTN} border-none bg-white text-primary hover:bg-white/90`;
const OUTLINE_ON_RED = `${BTN} border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary`;
const SOLID_ON_NAVY = `${BTN} border-none bg-primary text-white hover:bg-primary/90`;
const OUTLINE_ON_NAVY = `${BTN} border-2 border-white/40 bg-transparent text-background hover:bg-background hover:text-foreground`;

function Actions({
  actions,
  primaryClass,
  secondaryClass,
}: {
  actions: readonly LandingAction[];
  primaryClass: string;
  secondaryClass: string;
}) {
  const [primary, secondary] = actions;
  return (
    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
      <ConsultationDialog size="lg" interest={primary.consult} triggerClassName={primaryClass}>
        {primary.label}
        <ArrowRight className="ml-2 size-5" aria-hidden="true" />
      </ConsultationDialog>
      <ConsultationDialog size="lg" interest={secondary.consult} triggerClassName={secondaryClass}>
        {secondary.label}
      </ConsultationDialog>
    </div>
  );
}

/** A bulleted ledger list on any ground. */
function Ledger({
  items,
  frame,
  divide,
  marker,
  text,
}: {
  items: string[];
  frame: string;
  divide: string;
  marker: string;
  text: string;
}) {
  return (
    <ul className={`border-y ${frame} divide-y ${divide}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-5 md:gap-5 md:py-6">
          <span className={`mt-[0.55rem] size-1.5 shrink-0 ${marker}`} aria-hidden="true" />
          <span className={`text-pretty text-base font-light leading-relaxed md:text-lg ${text}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LandingDetail({ page }: { page: LandingPage }) {
  const Icon = page.icon;
  const indexHref = page.kind === "sector" ? "/sectors" : "/themes";
  const indexLabel = page.kind === "sector" ? "All Sectors" : "All Themes";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <Icon className="size-10 text-primary" aria-hidden="true" />
            <h1 className={`mt-6 text-background ${TITLE}`}>{page.h1}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80 md:text-xl">
              {page.intro}
            </p>
            <Actions
              actions={page.actions}
              primaryClass={SOLID_ON_NAVY}
              secondaryClass={OUTLINE_ON_NAVY}
            />
          </div>
        </div>
      </section>

      {/* Positioning + where clients need support: light */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className={`text-foreground ${TITLE}`}>{page.positioning.heading}</h2>
            </div>
            <div className="space-y-5 lg:col-span-8">
              {page.positioning.paragraphs.map((p) => (
                <p key={p} className="max-w-2xl text-pretty text-lg font-light leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16 md:mt-24">
            <div className="lg:col-span-4">
              <h2 className={`text-foreground ${TITLE}`}>Where clients need support</h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-foreground/70">
                {page.needs.lead}
              </p>
            </div>
            <div className="lg:col-span-8">
              <Ledger
                items={page.needs.items}
                frame="border-foreground/12"
                divide="divide-foreground/12"
                marker="bg-primary"
                text="text-foreground/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Credence Africa helps: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className={`text-primary ${TITLE}`}>How Credence Africa helps</h2>
          <div className="mt-12 space-y-14 md:mt-16 md:space-y-16">
            {page.helps.map((block) => (
              <div key={block.heading} className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-normal leading-snug text-background md:text-2xl">
                    {block.heading}
                  </h3>
                  <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-background/70">
                    {block.blurb}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <Ledger
                    items={block.items}
                    frame="border-white/15"
                    divide="divide-white/15"
                    marker="bg-primary"
                    text="text-background/85"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority mandates: red */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className={`text-white ${TITLE}`}>Priority mandates</h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-white/85">
                The engagements this work is most often built around.
              </p>
            </div>
            <div className="lg:col-span-8">
              <Ledger
                items={page.mandates}
                frame="border-white/25"
                divide="divide-white/25"
                marker="bg-white"
                text="text-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with, geography, why: light */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className={`text-foreground ${TITLE}`}>Who we work with</h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-px border border-foreground/12 bg-foreground/12">
                {page.audiences.map((a) => (
                  <li key={a} className="flex items-center gap-3 bg-background p-5 md:p-6">
                    <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-base font-normal text-foreground md:text-lg">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className={`text-foreground ${TITLE}`}>{GEOGRAPHY_HEADING}</h2>
              <p className="mt-6 text-pretty text-lg font-light leading-relaxed text-foreground/80">
                {page.geography}
              </p>
            </div>
            <div>
              <h2 className={`text-foreground ${TITLE}`}>Why Credence Africa</h2>
              <p className="mt-6 text-pretty text-lg font-light leading-relaxed text-foreground/80">
                {page.why}
              </p>
            </div>
          </div>

          {page.links.length > 0 && (
            <div className="mt-16 border-t border-foreground/12 pt-8 md:mt-24">
              <h2 className="text-sm font-normal uppercase tracking-[0.12em] text-foreground/60">
                Related
              </h2>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {page.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-base font-light text-foreground/80 transition-colors hover:text-primary md:text-lg"
                    >
                      {l.label}
                      <ArrowRight
                        className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* FAQ: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className={`text-primary ${TITLE}`}>Frequently asked questions</h2>
            </div>
            <div className="lg:col-span-8">
              <dl className="border-y border-white/15 divide-y divide-white/15">
                {page.faqs.map((f) => (
                  <div key={f.q} className="py-6 md:py-7">
                    <dt className="text-lg font-normal leading-snug text-background md:text-xl">
                      {f.q}
                    </dt>
                    <dd className="mt-2 text-pretty text-base font-light leading-relaxed text-background/75">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA: red */}
      <section className="bg-primary">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className={`mx-auto max-w-3xl text-white ${TITLE}`}>{page.closing.heading}</h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/85">
            {page.closing.body}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ConsultationDialog
              size="lg"
              interest={page.closing.consult}
              triggerClassName={SOLID_ON_RED}
            >
              {page.closing.label}
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </ConsultationDialog>
            <Button asChild size="lg" variant="outline" className={OUTLINE_ON_RED}>
              <Link href={indexHref}>{indexLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
