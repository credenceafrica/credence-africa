
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices, Service } from "@/lib/services.tsx";
import { ArrowRight, Calendar, BookOpen, Newspaper, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalEvent, ExternalCourse, ExternalPublication, getUpcomingEvents, getFeaturedCourses, getRecentPublications } from "@/lib/external-data";

const whatWeSolve = [
    "Capital and investment readiness for high-growth ventures",
    "Regulatory licensing and multi-agency compliance strategy",
    "Market entry across East Africa and diaspora re-entry structuring",
    "Cross-border tax and entity structuring",
    "Government relations, public policy tracking, and advocacy",
    "Monetization of IP, content, brand, and digital assets",
    "Succession, legacy, and trust planning for entrepreneurs and families",
]

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
      {/* Hero Section - 100vh inclusive of header */}
      <section className="relative h-[calc(100vh-96px)] min-h-[600px] flex flex-col overflow-hidden bg-black">
        <Image 
          src="/hero.jpg"
          alt="Building the Institutions That Build Africa"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-end pb-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight">
              Building the Institutions That Build Africa
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-primary font-bold tracking-wider">
                Capital. Policy. Markets. Executed Across Africa Human Capability. Institutional Capacity. Market Intelligence
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                Credence Africa is a pan African institution building enterprise enabling capital deployment, policy alignment, market entry, institutional capability, strategic convening, intelligence, and ecosystem engagement across Africa. We bring together advisory, executive education, convenings, audience engagement, proprietary events, thought leadership, and networks into one integrated execution system for institutions shaping growth across the continent.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-8 text-lg font-medium">
                <Link href="/consult">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/20 rounded-none px-4 border-none text-lg font-medium">
                <Link href="#platforms" className="flex items-center">
                  Explore Our Work <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Platforms Bar */}
      <div id="platforms" className="relative z-20 w-full bg-white border-t-4 border-primary shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.href} 
              target={service.href.startsWith('http') ? "_blank" : undefined}
              rel={service.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="p-8 flex flex-col justify-between hover:bg-accent/30 transition-colors group h-full bg-white"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-foreground">
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
        {/* Who We Are */}
        <section id="who-we-are" className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              Credence Africa is a pan-African strategic advisory and social enterprise platform operating at the intersection of capital, governance, compliance, and public affairs. We help businesses, governments, nonprofits, and financial institutions navigate Africa’s opportunity zones where risk meets scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-sm rounded-none p-8 space-y-4 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl text-primary">Pan-African Perspective</h3>
                  <p className="text-muted-foreground leading-relaxed">Operating across multiple jurisdictions at the nexus of capital, compliance, governance, and policy.</p>
              </Card>
              <Card className="bg-white border-none shadow-sm rounded-none p-8 space-y-4 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl text-primary">Growth Catalysts</h3>
                  <p className="text-muted-foreground leading-relaxed">Unlocking capital, structuring entities, navigating regulation, and scaling impact.</p>
              </Card>
              <Card className="bg-white border-none shadow-sm rounded-none p-8 space-y-4 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl text-primary">Execution Partners</h3>
                  <p className="text-muted-foreground leading-relaxed">Delivering actionable strategies that withstand scrutiny in high-complexity environments.</p>
              </Card>
          </div>
        </section>

        {/* What We Solve */}
        <section className="bg-muted/20 p-10 md:p-16 rounded-none">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center md:text-left">What We Solve</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {whatWeSolve.map((item, index) => (
                    <div key={item} className="flex items-start gap-6 group">
                        <div className="text-primary font-bold text-2xl opacity-40 group-hover:opacity-100 transition-opacity tabular-nums shrink-0">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <p className="text-foreground/90 text-lg leading-snug">{item}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
                  <p className="text-muted-foreground text-base max-w-2xl">Strategic convenings that transform expertise into influence.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none h-10 px-6 text-sm font-semibold">
                  <Link href="https://engage.credence.africa/" target="_blank">
                      View All Events <ExternalLink className="ml-2 size-4" />
                  </Link>
              </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {events.slice(0, 3).map((event) => (
                  <Link key={event.id} href={event.url} target="_blank" className="group block">
                      <div className="relative overflow-hidden bg-white border border-border group-hover:border-primary transition-all duration-300 rounded-none shadow-sm flex flex-col h-full">
                          <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                              <Image 
                                  src={event.image || "https://picsum.photos/seed/event/800/500"}
                                  alt={event.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  data-ai-hint="event cover"
                              />
                              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 font-bold text-[10px] uppercase tracking-widest">
                                  {formatEventDate(event.date)}
                              </div>
                          </div>
                          <div className="p-6 space-y-4 flex-grow flex flex-col">
                              <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                                  Strategic Convening
                              </div>
                              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors truncate">
                                  {toTitleCase(event.title)}
                              </h3>
                              <div className="flex items-center text-xs text-muted-foreground gap-4 pt-2">
                                  <div className="flex items-center gap-1.5">
                                      <Calendar className="size-3 text-primary" />
                                      <span>{event.date}</span>
                                  </div>
                                  <span className="opacity-30">|</span>
                                  <span>Africa Strategy Hub</span>
                              </div>
                          </div>
                          <div className="p-6 pt-0 mt-auto border-t border-border/50 bg-muted/5">
                              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary pt-4 group-hover:underline">
                                  Get Tickets <ArrowUpRight className="size-4" />
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
                  <p className="text-muted-foreground text-base max-w-2xl">Professional and executive programs for institutional capacity building.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none h-10 px-6 text-sm font-semibold">
                  <Link href="https://institute.credence.africa/" target="_blank">
                      Explore Programs <ExternalLink className="ml-2 size-4" />
                  </Link>
              </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {courses.slice(0, 3).map((course) => (
                  <Link key={course.id} href={course.url} target="_blank" className="group block">
                      <div className="relative overflow-hidden bg-white border border-border group-hover:border-primary transition-all duration-300 rounded-none shadow-sm flex flex-col h-full">
                          <div className="p-6 space-y-4 flex-grow flex flex-col">
                              <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                                  <BookOpen className="size-3" /> 
                                  <span>{course.tag}</span>
                              </div>
                              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors truncate">
                                  {toTitleCase(course.title)}
                              </h3>
                              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                  {course.description}
                              </p>
                          </div>
                          <div className="p-6 pt-0 mt-auto border-t border-border/50 bg-muted/5">
                              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary pt-4 group-hover:underline">
                                  View Program <ArrowRight className="size-4" />
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
        </section>

        {/* Recent Publications Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold">Recent Publications</h2>
                  <p className="text-muted-foreground text-base max-w-2xl">Original analysis and research-grounded commentary shaping strategy across Africa.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none h-10 px-6 text-sm font-semibold">
                  <Link href="https://perspectives.credence.africa/" target="_blank">
                      View All Insights <ExternalLink className="ml-2 size-4" />
                  </Link>
              </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {publications.slice(0, 3).map((pub) => (
                  <Link key={pub.id} href={pub.url} target="_blank" className="group block">
                      <div className="relative overflow-hidden bg-white border border-border group-hover:border-primary transition-all duration-300 rounded-none shadow-sm flex flex-col h-full">
                          <div className="p-6 space-y-4 flex-grow flex flex-col">
                              <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                                  <Newspaper className="size-3" /> 
                                  <span>{pub.type}</span>
                              </div>
                              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors truncate">
                                  {toTitleCase(pub.title)}
                              </h3>
                              <div className="text-muted-foreground text-sm line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: pub.description }} />
                          </div>
                          <div className="p-6 pt-0 mt-auto border-t border-border/50 bg-muted/5">
                              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary pt-4 group-hover:underline">
                                  Read Analysis <ArrowRight className="size-4" />
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-20 text-center rounded-none shadow-2xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Let’s Shape Africa’s Growth Frontier Together</h2>
            <p className="mt-8 max-w-3xl mx-auto text-lg opacity-90 font-light leading-relaxed">
              Whether you are raising capital, structuring across borders, or navigating regulatory reform — Credence Africa is your trusted execution partner.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
               <Button asChild size="lg" variant="secondary" className="rounded-none px-10 text-base font-bold">
                <Link href="/consult">Book A Strategy Call</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-primary rounded-none bg-transparent px-10 text-base font-bold">
                <Link href="/consult">Send An Inquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
