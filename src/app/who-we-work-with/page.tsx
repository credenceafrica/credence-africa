import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { audiences } from "@/lib/audiences";
import { ConsultationDialog } from "@/components/consultation-dialog";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "The institutions Credence Africa works with, from cooperatives and corporations to governments, investors, founders and the associations that represent whole sectors.",
};

export default function WhoWeWorkWithPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Who We <span className="text-primary">Work With</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-background/80 md:text-lg">
              Credence Africa works with the institutions shaping Africa's economic and social
              development. Each one arrives with a different mandate. Each one gets the same
              integrated execution system.
            </p>
          </div>
        </div>
      </section>

      {/* The ten: light band, ledger rows */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Ten institutions. One system.
              </h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-foreground/75">
                Find the mandate that matches yours and see exactly how we work with institutions
                like it.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                {audiences.map((audience) => {
                  const Icon = audience.icon;
                  return (
                    <li key={audience.slug}>
                      <Link
                        href={`/who-we-work-with/${audience.slug}`}
                        className="group flex items-start gap-5 py-6 transition-colors hover:bg-foreground/[0.03]"
                      >
                        <Icon
                          className="mt-1 size-6 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="flex items-center gap-2 text-lg font-normal leading-tight text-foreground md:text-xl">
                            <span className="break-words">{audience.name}</span>
                            <ArrowUpRight
                              className="size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                              aria-hidden="true"
                            />
                          </h3>
                          <p className="mt-2 text-base font-light leading-relaxed text-foreground/75">
                            {audience.blurb}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: deep-red drench */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Tell us the mandate.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-lg">
            A senior advisor will map the fastest credible path to execution, whatever kind of
            institution you lead.
          </p>
          <div className="mt-10 flex justify-center">
            <ConsultationDialog triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90">
              Book a Consultation
            </ConsultationDialog>
          </div>
        </div>
      </section>
    </div>
  );
}
