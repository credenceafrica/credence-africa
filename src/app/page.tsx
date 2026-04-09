
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

const toTitleCase = (str: string) => {
  if (!str) return "";
  return str.toLowerCase().split(' ').map(word => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

const formatEventDate = (dateString: string) => {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  const day = d.getDate().toString().padStart(2, '0');
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const year = d.getFullYear().toString().slice(-2);
  return `${day} ${month} / ${year}`;
};

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [events, setEvents] = useState<ExternalEvent[]>([]);
  const [courses, setCourses] = useState<ExternalCourse[]>([]);
  const [publications, setPublications] = useState<ExternalPublication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
          setLoading(true);
          try {
            const fetchedServices = await getServices();
            setServices(fetchedServices);
            const [ev, cor, pub] = await Promise.all([
                getUpcomingEvents(),
                getFeaturedCourses(),
                getRecentPublications()
            ]);
            setEvents(ev)
            setCourses(cor)
            setPublications(pub)
          } catch (error) {
              console.error("Failed to fetch data:", error);
          } finally {
            setLoading(false);
          }
      }
      fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Background Image with Content Box Overlay */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg"
            alt="Building the Institutions That Build Africa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Box Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="bg-white p-8 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-10">
            <h1 className="text-foreground leading-tight">
              Building the Institutions That Build Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
              <div className="space-y-3">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Execution Systems
                </p>
                <p className="text-base leading-relaxed font-light">
                  Credence Africa is a pan-African institution building enterprise enabling capital deployment, policy alignment, market entry, and intelligence across growth markets.
                </p>
              </div>
              <div className="space-y-3 lg:border-l lg:pl-8">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Integrated Support
                </p>
                <p className="text-base leading-relaxed font-light">
                  We integrate advisory, executive education, convenings, and networks into one execution system for institutions shaping growth.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="#platforms">
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
              className="p-8 flex flex-col justify-between hover:bg-accent/30 transition-colors group h-full bg-white"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-normal text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="size-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.longDescription}
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center text-primary font-bold transition-colors text-sm group/btn">
                  {service.buttonText} <ArrowRight className="ml-1.5 size-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24">
        {/* What Credence Africa Does */}
        <section id="what-we-do" className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">What Credence Africa Does</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              Credence Africa helps institutions move from strategy to execution across the areas that most often determine growth in African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="bg-white border-none shadow-sm rounded-none p-8 space-y-4 hover:shadow-md transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary group h-full flex flex-col">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="font-normal text-xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.longDescription}
                    </p>
                    <div className="pt-4 mt-auto">
                        <Link href={service.href} className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:underline">
                            {service.buttonText} <ArrowUpRight className="size-3" />
                        </Link>
                    </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Who We Work With */}
        <section className="bg-primary/5 p-10 md:p-16 border-l-8 border-primary">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Who We Work With</h2>
            <p className="text-sm text-foreground/80 leading-relaxed font-light">
              Credence Africa works with enterprises, growth stage businesses, cooperatives, collective investment structures, financial institutions, funds, fintech platforms, governments, regulatory agencies, development partners, donor programs, nonprofits, social enterprises, trade bodies, regional platforms, and cross border investors seeking stronger execution across Africa’s growth markets.
            </p>
          </div>
        </section>

        {/* Why Credence Africa */}
        <section className="max-w-7xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-normal text-foreground">Why Credence Africa</h2>
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                        Institutions choose Credence Africa because execution in African markets is interconnected.
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light border-l-4 border-primary pl-8">
                        Credence Africa brings these dimensions together through one integrated execution system. We help institutions move from insight to action, from participation to partnership, and from strategic intent to measurable outcomes.
                    </p>
                </div>
            </div>
        </section>

        {/* How Credence Africa Creates Value */}
        <section className="bg-white py-24 border-y">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-normal text-foreground">How Credence Africa Creates Value</h2>
                    <p className="text-muted-foreground text-lg">Integrated strategies for institutional growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {valueCreation.map((item) => (
                        <div key={item.title} className="space-y-4 p-8 border hover:border-primary transition-colors group">
                            <h3 className="text-xl font-normal text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Partner with Credence Africa */}
        <section className="bg-muted/20 p-10 md:p-16 rounded-none">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Partner with Credence Africa</h2>
            <p className="text-lg text-foreground/90 leading-relaxed font-light max-w-4xl mx-auto">
              If your institution is raising capital, entering markets, shaping policy, building leadership capability, convening stakeholders, producing intelligence, or strengthening ecosystem position, Credence Africa provides the strategic integration and execution support to move that mandate forward.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
               <Button asChild size="lg" className="rounded-none px-10 h-14 text-base font-bold">
                <Link href="/consult">Book a Consultation</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="rounded-none px-10 h-14 text-base font-bold bg-white border-primary text-primary">
                <Link href="#platforms">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-20 text-center rounded-none shadow-2xl px-4">
          <div className="container mx-auto">
            <h2 className="text-sm md:text-base font-normal leading-tight max-w-5xl mx-auto uppercase tracking-widest opacity-90">
              Credence Africa delivers capital raising, market entry, public affairs, executive education, strategic convenings, events, intelligence, and networks across Africa’s growth markets.
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
               <Button asChild size="lg" variant="secondary" className="rounded-none px-10 h-14 text-base font-bold bg-white text-primary hover:bg-white/90 border-none">
                <Link href="/consult">Book A Strategy Call</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-primary rounded-none bg-transparent px-10 h-14 text-base font-bold">
                <Link href="/consult">Send An Inquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
