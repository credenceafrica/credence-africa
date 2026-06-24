import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { sectorList } from "@/lib/sectors-content";

export const metadata: Metadata = {
  title: "Sectors We Cover",
  description:
    "The sectors where Credence Africa builds institutions — from agribusiness and the green and blue economies to financial services, technology, trade and industrial development across Africa's growth markets.",
};

const clients = [
  "Cooperatives",
  "Corporations",
  "Growth-Stage SMEs & Enterprises",
  "Foreign Investors",
  "Startups & Innovators",
  "Non-Profits & Development Organizations",
  "Faith-Based Institutions",
  "Governments & Public Institutions",
  "Investors & Capital Platforms",
  "Industry Associations & Ecosystem Actors",
];

export default function SectorsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero — navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-background [font-size:clamp(2.75rem,7vw,5.5rem)]">
              Sectors We <span className="text-primary">Cover</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Our work spans the sectors driving Africa's economic and social transformation — where
              capital, policy and enterprise intersect.
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
              Each engagement builds resilient institutions, drives inclusive growth and creates
              measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* The ten sectors — light ledger */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="border-y border-foreground/12 divide-y divide-foreground/12">
            {sectorList.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/sectors/${s.slug}`}
                  className="group flex items-start gap-5 py-7 transition-colors duration-300 hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:gap-6 md:py-8"
                >
                  <Icon className="mt-1 size-7 shrink-0 text-primary md:size-8" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <h2 className="relative inline-block text-xl font-normal leading-tight text-foreground md:text-2xl">
                      {s.name}
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
                        aria-hidden="true"
                      />
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">
                      {s.scope}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 size-6 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Work With — navy hairline grid */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-primary [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Who We Work With
              </h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-background/70">
                Credence Africa works with institutions and organizations shaping Africa's economic
                and social development.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {clients.map((client) => (
                  <li key={client} className="flex items-center gap-3 bg-foreground p-5 md:p-6">
                    <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-base font-normal text-background md:text-lg">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — deep-red + white */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance text-2xl font-normal leading-snug text-white md:text-4xl">
            Not sure which sector frames your mandate?
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/85">
            Tell us the objective. We will map the fastest credible path to execution.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none border-none bg-white px-8 text-base font-medium text-[#aa3018] hover:bg-white/90"
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
              className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-medium text-white hover:bg-white hover:text-[#aa3018]"
            >
              <Link href="/services">Explore Our Platforms</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
