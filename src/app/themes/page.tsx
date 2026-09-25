import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { themeList } from "@/lib/themes-content";

export const metadata: Metadata = {
  title: "Cross-Sector Themes",
  description:
    "The cross-sector themes Credence Africa works across, from capital, trade and industrialisation to climate, policy, governance, inclusion and urban transformation in Kenya, Nigeria, South Africa and the wider continent.",
  alternates: { canonical: "/themes" },
};

export default function ThemesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Cross-Sector <span className="text-primary">Themes</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Some agendas run through every sector. Capital, trade, industrialisation,
              infrastructure, technology, climate, policy, governance, inclusion and skills shape
              the decision whatever market a client operates in.
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
              Our themes apply that expertise across the economy, while our sector practices hold the
              market-specific knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* The fourteen themes: light ledger */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="border-y border-foreground/12 divide-y divide-foreground/12">
            {themeList.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.slug}
                  href={`/themes/${t.slug}`}
                  className="group flex items-start gap-5 py-7 transition-colors duration-300 hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:gap-6 md:py-8"
                >
                  <Icon className="mt-1 size-7 shrink-0 text-primary md:size-8" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <h2 className="relative inline-block break-words text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                      {t.name}
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
                        aria-hidden="true"
                      />
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">
                      {t.scope}
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

      {/* CTA: deep-red + white */}
      <section className="bg-primary">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Working across more than one theme?
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/85">
            Most mandates are. Tell us the decision and we will structure the work around it.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ConsultationDialog
              size="lg"
              triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90"
            >
              Book a Consultation
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </ConsultationDialog>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-primary"
            >
              <Link href="/sectors">Explore Our Sectors</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
