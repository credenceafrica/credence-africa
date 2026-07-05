import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Sector } from "@/lib/sectors-content";

type Ground = "navy" | "light" | "red";

const GROUND: Record<
  Ground,
  {
    section: string;
    label: string;
    blurb: string;
    frame: string;
    divide: string;
    rowTitle: string;
    rowDesc: string;
    rowLine: string;
    marker: string;
  }
> = {
  navy: {
    section: "bg-foreground",
    label: "text-primary",
    blurb: "text-background/70",
    frame: "border-white/15",
    divide: "divide-white/15",
    rowTitle: "text-background",
    rowDesc: "text-background/75",
    rowLine: "text-background/90",
    marker: "bg-primary",
  },
  light: {
    section: "bg-background",
    label: "text-foreground",
    blurb: "text-foreground/70",
    frame: "border-foreground/12",
    divide: "divide-foreground/12",
    rowTitle: "text-foreground",
    rowDesc: "text-foreground/70",
    rowLine: "text-foreground/80",
    marker: "bg-primary",
  },
  red: {
    section: "bg-[#aa3018]",
    label: "text-white",
    blurb: "text-white/85",
    frame: "border-white/25",
    divide: "divide-white/25",
    rowTitle: "text-white",
    rowDesc: "text-white/85",
    rowLine: "text-white/90",
    marker: "bg-white",
  },
};

// Items are "Title: description." strings (interventions, advisory) or a single
// sentence (impact). Split on the colon separator; no separator → render as one line.
function splitItem(item: string): { title: string; desc: string } {
  const idx = item.indexOf(": ");
  if (idx === -1) return { title: item, desc: "" };
  return { title: item.slice(0, idx), desc: item.slice(idx + 2) };
}

function LedgerBand({
  ground,
  label,
  blurb,
  items,
}: {
  ground: Ground;
  label: string;
  blurb: string;
  items: string[];
}) {
  const g = GROUND[ground];
  return (
    <section className={g.section}>
      <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2
              className={`text-balance font-normal leading-[1.1] tracking-[-0.01em] ${g.label} [font-size:clamp(1.75rem,3.5vw,2.5rem)]`}
            >
              {label}
            </h2>
            <p className={`mt-4 max-w-sm text-base font-light leading-relaxed ${g.blurb}`}>{blurb}</p>
          </div>

          <div className="lg:col-span-8">
            <div className={`border-y ${g.frame} divide-y ${g.divide}`}>
              {items.map((item, i) => {
                const { title, desc } = splitItem(item);
                return (
                  <div key={i} className="flex gap-4 py-6 md:gap-5 md:py-7">
                    <span className={`mt-[0.6rem] size-1.5 shrink-0 ${g.marker}`} aria-hidden="true" />
                    {desc ? (
                      <div className="min-w-0">
                        <h3 className={`text-lg font-normal leading-snug md:text-xl ${g.rowTitle}`}>{title}</h3>
                        <p className={`mt-1.5 text-pretty text-sm leading-relaxed md:text-base ${g.rowDesc}`}>
                          {desc}
                        </p>
                      </div>
                    ) : (
                      <p className={`text-pretty text-base font-light leading-relaxed md:text-lg ${g.rowLine}`}>
                        {title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectorDetail({ sector }: { sector: Sector }) {
  const Icon = sector.icon;
  return (
    <div className="overflow-x-hidden">
      {/* Hero: navy, sector icon as the identity mark */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <Icon className="size-10 text-primary" aria-hidden="true" />
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              {sector.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-background/80 md:text-xl">
              {sector.scope}
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach: light */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Our Approach
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-8">
              {sector.approach.map((p, i) => (
                <p key={i} className="max-w-2xl text-pretty text-lg font-light leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LedgerBand
        ground="red"
        label="Programmatic Interventions"
        blurb="Programs, platforms and labs we deploy on the ground."
        items={sector.interventions}
      />
      <LedgerBand
        ground="light"
        label="Advisory & Consulting"
        blurb="Advisory mandates that structure, finance and de-risk the work."
        items={sector.advisory}
      />
      <LedgerBand
        ground="navy"
        label="Impact Pathways"
        blurb="The outcomes this work is built to produce."
        items={sector.impact}
      />

      {/* CTA: deep-red + white */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Building institutions in {sector.name}?
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/85">
            Tell us the mandate. We will map the fastest credible path to execution.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90"
            >
              <Link href="/consult">
                Book a Consultation
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-[#aa3018]"
            >
              <Link href="/sectors">All Sectors</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
