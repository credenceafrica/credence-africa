
"use client";

import { Button } from "@/components/ui/button";
import { getServices, Service } from "@/lib/services";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalEvent, ExternalCourse, ExternalPublication, getUpcomingEvents, getFeaturedCourses, getRecentPublications } from "@/lib/external-data";

const valueDimensions = [
    {
        n: "01",
        title: "Insight and Direction",
        description: "We help institutions understand markets, policy shifts, stakeholder environments and strategic opportunities through intelligence, research and executive insight."
    },
    {
        n: "02",
        title: "Advisory and Structuring",
        description: "We help institutions define capital pathways, market entry strategies, regulatory positioning and growth frameworks that can move into implementation."
    },
    {
        n: "03",
        title: "Capability and Leadership",
        description: "We strengthen the human and institutional capacity required to govern, execute and scale across complex environments."
    },
    {
        n: "04",
        title: "Convening and Engagement",
        description: "We create environments that align stakeholders, activate audiences, build influence and generate commercial momentum."
    },
    {
        n: "05",
        title: "Relationships and Continuity",
        description: "We sustain access, community and long term ecosystem position through networks, recurring engagement and connected institutional relationships."
    }
];

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
          setLoading(true);
          try {
            const fetchedServices = await getServices();
            setServices(fetchedServices);
          } catch (error) {
              console.error("Failed to fetch data:", error);
          } finally {
            setLoading(false);
          }
      }
      fetchData();
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section - Full Background Image with Content Box Overlay */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        {/* Hero background: Nairobi central business district at golden hour, photo by Amani Nation via Unsplash */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-nairobi.jpg"
            alt="Nairobi's central business district skyline at golden hour"
            fill
            className="object-cover scale-x-100"
            priority
          />
        </div>
        
        {/* Content Box Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-t-4 border-primary space-y-8 md:space-y-10">
            <h1 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
              Enabling the Institutions That Build Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Execution Systems
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Credence Africa is a pan-African institution building enterprise enabling capital deployment, policy alignment, market entry and intelligence across growth markets.
                </p>
              </div>
              <div className="hidden md:block md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Integrated Support
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  We integrate advisory, executive education, convenings and networks into one execution system for institutions shaping growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-light">
                <Link href="/consult" className="justify-center">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-light bg-white">
                <Link href="#platforms" className="justify-center">
                  Explore Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Platforms Bar */}
      <div id="platforms" className="relative z-20 w-full bg-white border-b shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {services
            .filter((service) => ["capital", "trade", "public-affairs", "events"].includes(service.id))
            .map((service) => (
            <Link 
              key={service.id} 
              href={service.href} 
              className="p-6 md:p-8 flex flex-col justify-between hover:bg-accent/30 transition-colors group h-full bg-white"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-normal text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="size-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.longDescription}
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex items-center text-primary font-light transition-colors text-xs md:text-sm group/btn">
                  {service.buttonText} <ArrowRight className="ml-1.5 size-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="border-t border-border flex justify-center md:justify-end px-6 md:px-8 py-4">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-primary font-light text-xs md:text-sm uppercase tracking-widest transition-colors hover:text-primary/70">
            View all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Who We Work With: full-bleed light band */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4 md:space-y-6">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-foreground">Who We Work With</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light max-w-3xl">
              Credence Africa works with enterprises, growth stage businesses, cooperatives, collective investment structures, financial institutions, funds, fintech platforms, governments, regulatory agencies, development partners, donor programs, nonprofits, social enterprises, trade bodies, regional platforms and cross border investors seeking stronger execution across Africa’s growth markets.
            </p>
          </div>
        </div>
      </section>

      {/* Why Credence Africa: full-bleed navy "Execution Ledger" band */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="cred-rise grid gap-10 lg:grid-cols-12 lg:gap-16">
                {/* The thesis: why institutions choose us */}
                <div className="lg:col-span-4">
                    <h2 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                        Why Credence Africa
                    </h2>
                    <p className="mt-5 text-pretty text-lg font-light leading-relaxed text-background/90">
                        Institutions choose Credence Africa because execution in African markets is interconnected.
                    </p>
                    <p className="mt-4 max-w-md text-pretty text-base font-light leading-relaxed text-background/75">
                        We bring these dimensions together through one integrated execution system, moving institutions from insight to action, from participation to partnership and from strategic intent to measurable outcomes.
                    </p>
                    <p className="mt-8 max-w-md text-pretty text-base font-normal leading-snug text-background">
                        Five connected dimensions, from first insight to lasting partnership.
                    </p>
                </div>

                {/* How we create value: five connected dimensions as a ledger */}
                <div className="lg:col-span-8">
                    <div className="border-y border-white/15 divide-y divide-white/15">
                        {valueDimensions.map((item) => (
                            <div
                                key={item.n}
                                className="grid gap-x-6 gap-y-2 py-7 sm:grid-cols-12 md:py-8"
                            >
                                <div className="flex items-baseline gap-4 sm:col-span-5">
                                    <span
                                        className="shrink-0 font-normal tabular-nums text-primary [font-size:clamp(1.1rem,2vw,1.5rem)]"
                                        aria-hidden="true"
                                    >
                                        {item.n}
                                    </span>
                                    <h3 className="text-xl font-normal leading-tight text-background md:text-2xl">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-background/75 sm:col-span-7 md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* Partner with Credence Africa: full-bleed light band */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center space-y-6 md:space-y-8">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-foreground">Partner with Credence Africa</h2>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-light max-w-4xl mx-auto">
              If your institution is raising capital, entering markets, shaping policy, building leadership capability, convening stakeholders, producing intelligence or strengthening ecosystem position, Credence Africa provides the strategic integration and execution support to move that mandate forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4">
               <Button asChild size="lg" className="rounded-none px-8 h-14 text-base font-light">
                <Link href="/consult" className="justify-center">Book a Consultation</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="rounded-none px-8 h-14 text-base font-light bg-white border-primary text-primary">
                <Link href="#platforms" className="justify-center">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: full-bleed deep-red drench */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
            <p className="mx-auto max-w-3xl text-pretty text-lg font-light leading-relaxed text-white sm:text-xl md:text-2xl">
              Credence Africa delivers capital raising, market entry, public affairs, executive education, strategic convenings, events, intelligence and networks across Africa’s growth markets.
            </p>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Tell us the mandate. We will map the fastest credible path to execution.
            </p>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
               <Button asChild size="lg" variant="secondary" className="rounded-none px-8 h-14 text-base font-light bg-white text-[#aa3018] hover:bg-white/90 border-none">
                <Link href="/consult" className="justify-center">Book A Strategy Call</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#aa3018] rounded-none px-8 h-14 text-base font-light">
                <Link href="/consult" className="justify-center">Send An Inquiry</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
