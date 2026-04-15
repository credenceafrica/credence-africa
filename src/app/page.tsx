
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServices, Service } from "@/lib/services.tsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalEvent, ExternalCourse, ExternalPublication, getUpcomingEvents, getFeaturedCourses, getRecentPublications } from "@/lib/external-data";

const valueCreation = [
    {
        title: "1. Insight and Direction",
        description: "We help institutions understand markets, policy shifts, stakeholder environments, and strategic opportunities through intelligence, research, and executive insight."
    },
    {
        title: "2. Advisory and Structuring",
        description: "We help institutions define capital pathways, market entry strategies, regulatory positioning, and growth frameworks that can move into implementation."
    },
    {
        title: "3. Capability and Leadership",
        description: "We strengthen the human and institutional capacity required to govern, execute, and scale across complex environments."
    },
    {
        title: "4. Convening and Engagement",
        description: "We create environments that align stakeholders, activate audiences, build influence, and generate commercial momentum."
    },
    {
        title: "5. Relationships and Continuity",
        description: "We sustain access, community, and long term ecosystem position through networks, recurring engagement, and connected institutional relationships."
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
        {/* Full-width Background Image - Flipped Horizontally */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-two.png"
            alt="Building the Institutions That Build Africa"
            fill
            className="object-cover scale-x-100"
            priority
          />
        </div>
        
        {/* Content Box Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Building the Institutions That Build Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Execution Systems
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Credence Africa is a pan-African institution building enterprise enabling capital deployment, policy alignment, market entry, and intelligence across growth markets.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Integrated Support
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  We integrate advisory, executive education, convenings, and networks into one execution system for institutions shaping growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
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
          {services.slice(0, 4).map((service) => (
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
                <div className="flex items-center text-primary font-bold transition-colors text-xs md:text-sm group/btn">
                  {service.buttonText} <ArrowRight className="ml-1.5 size-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
        {/* What Credence Africa Does */}
        <section id="what-we-do" className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">What Credence Africa Does</h2>
            <p className="text-base md:text-xl text-foreground/80 leading-relaxed font-light">
              Credence Africa helps institutions move from strategy to execution across the areas that most often determine growth in African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <Card key={service.id} className="bg-white border-none shadow-sm rounded-none p-6 md:p-8 space-y-4 hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary group h-full flex flex-col">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="font-normal text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                        {service.longDescription}
                    </p>
                    <div className="pt-4 mt-auto">
                        <Link href={service.href} className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:underline">
                            {service.buttonText} <ArrowUpRight className="size-3" />
                        </Link>
                    </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Who We Work With */}
        <section className="bg-primary/5 p-8 md:p-16 border-l-8 border-primary">
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Who We Work With</h2>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-light">
              Credence Africa works with enterprises, growth stage businesses, cooperatives, collective investment structures, financial institutions, funds, fintech platforms, governments, regulatory agencies, development partners, donor programs, nonprofits, social enterprises, trade bodies, regional platforms, and cross border investors seeking stronger execution across Africa’s growth markets.
            </p>
          </div>
        </section>

        {/* Why Credence Africa */}
        <section className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div className="space-y-4 md:space-y-6">
                    <h2 className="text-2xl md:text-4xl font-normal text-foreground">Why Credence Africa</h2>
                    <p className="text-base md:text-xl text-foreground/90 leading-relaxed font-light">
                        Institutions choose Credence Africa because execution in African markets is interconnected.
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light border-l-4 border-primary pl-6 md:pl-8">
                        Credence Africa brings these dimensions together through one integrated execution system. We help institutions move from insight to action, from participation to partnership, and from strategic intent to measurable outcomes.
                    </p>
                </div>
            </div>
        </section>

        {/* How Credence Africa Creates Value */}
        <section className="bg-white py-16 md:py-24 border-y">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl md:text-4xl font-normal text-foreground">How Credence Africa Creates Value</h2>
                    <p className="text-muted-foreground text-base md:text-lg">Integrated strategies for institutional growth.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {valueCreation.map((item) => (
                        <div key={item.title} className="space-y-4 p-6 md:p-8 border hover:border-primary transition-colors group">
                            <h3 className="text-lg md:text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Partner with Credence Africa */}
        <section className="bg-muted/20 p-8 md:p-16 rounded-none">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Partner with Credence Africa</h2>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-light max-w-4xl mx-auto">
              If your institution is raising capital, entering markets, shaping policy, building leadership capability, convening stakeholders, producing intelligence, or strengthening ecosystem position, Credence Africa provides the strategic integration and execution support to move that mandate forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4">
               <Button asChild size="lg" className="rounded-none px-10 h-14 text-base font-bold">
                <Link href="/consult" className="justify-center">Book a Consultation</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="rounded-none px-10 h-14 text-base font-bold bg-white border-primary text-primary">
                <Link href="#platforms" className="justify-center">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center rounded-none shadow-2xl px-4">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-3xl font-normal leading-relaxed max-w-5xl mx-auto opacity-95">
              Credence Africa delivers capital raising, market entry, public affairs, executive education, strategic convenings, events, intelligence, and networks across Africa’s growth markets.
            </h2>
            <p className="mt-6 text-base md:text-lg opacity-80 max-w-3xl mx-auto font-light leading-relaxed">
              If you want a sharper next step, I would turn this into a homepage wireframe with section by section design instructions and CTA hierarchy.
            </p>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
               <Button asChild size="lg" variant="secondary" className="rounded-none px-10 h-14 text-base font-bold bg-white text-primary hover:bg-white/90 border-none">
                <Link href="/consult" className="justify-center">Book A Strategy Call</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-primary rounded-none bg-transparent px-10 h-14 text-base font-bold">
                <Link href="/consult" className="justify-center">Send An Inquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
