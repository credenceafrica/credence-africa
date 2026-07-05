import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { ProfileDownloadDialog } from "@/components/profile-download-dialog";

export const metadata: Metadata = {
  title: "About",
  description:
    "Credence Africa blends precision with perspective: execution-ready advisory, context-driven structuring and integrated expertise for institutions shaping Africa's growth.",
};

const model = [
  {
    n: "01",
    title: "Execution-Ready Advisory",
    desc: "Blueprints built for immediate, risk-managed implementation, not slideware.",
  },
  {
    n: "02",
    title: "Context-Driven Structuring",
    desc: "Strategies aligned with local law, policy and markets, designed for how Africa actually works.",
  },
  {
    n: "03",
    title: "Cross-Functional Expertise",
    desc: "Finance, law, policy and innovation integrated into one execution system.",
  },
  {
    n: "04",
    title: "Influence & Compliance",
    desc: "Shaping the rules where it matters while keeping institutions credible and compliant.",
  },
  {
    n: "05",
    title: "Growth with Integrity",
    desc: "Sustainable, scalable and strategically sound: growth that earns trust.",
  },
];

const partners = [
  "Startups & Scale-Ups",
  "SACCOs, Cooperatives & Financial Institutions",
  "Development Finance Actors & NGOs",
  "Family Offices & High Net-Worth Individuals",
  "Public Sector Entities",
  "Industry Associations & Advocacy Platforms",
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero: full-bleed photo with an ink content panel */}
      <section className="relative isolate bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-nairobi.jpg"
            alt="Nairobi's central business district by day, one of the African growth markets Credence Africa works across"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/80 md:bg-gradient-to-r md:from-foreground md:via-foreground/85 md:to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cred-rise max-w-2xl py-24 md:py-36">
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Blending precision with perspective.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-background/90 md:text-xl">
              We deliver strategy that reflects the real-world dynamics of doing business in
              Africa: deep local understanding matched with global-standard execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision: light band */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Our Mission
              </h2>
              <p className="mt-4 max-w-prose text-lg font-light leading-relaxed text-foreground/80">
                Equip African enterprises and institutions with actionable, context-aligned
                advisory for capital access, strategic structuring and resilience.
              </p>
            </div>
            <div>
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Our Vision
              </h2>
              <p className="mt-4 max-w-prose text-lg font-light leading-relaxed text-foreground/80">
                Become the continent's most trusted partner in structuring sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Credence Africa Model: deep-red band, ledger rows */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                The Credence Africa Model
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-white/85">
                Five disciplines that turn strategy into institution.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-white/25 divide-y divide-white/25">
                {model.map((m) => (
                  <div key={m.n} className="flex items-baseline gap-5 py-7 md:gap-8">
                    <span
                      className="shrink-0 font-normal tabular-nums text-white/60 [font-size:clamp(1.25rem,2.5vw,1.75rem)]"
                      aria-hidden="true"
                    >
                      {m.n}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-normal leading-tight text-white md:text-2xl">
                        {m.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With: light band */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Who We Work With
              </h2>
              <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-foreground/75">
                Institutions shaping Africa's economic and social development.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid border border-border bg-border gap-px sm:grid-cols-2">
                {partners.map((partner) => (
                  <li
                    key={partner}
                    className="flex items-center gap-3 bg-background p-6 md:p-7"
                  >
                    <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-base font-normal text-foreground md:text-lg">
                      {partner}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA: deep-red band, white text */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Build with a partner that executes.
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/90">
            Get the full picture of our services, impact and approach. Or start the conversation.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ProfileDownloadDialog triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90" />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-[#aa3018]"
            >
              <Link href="/consult">
                Book a Consultation
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
