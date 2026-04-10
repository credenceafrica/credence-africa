
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Landmark, Users, Share2, ExternalLink, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalEvent, getUpcomingEvents } from "@/lib/external-data";

export default function ConvenePage() {
  const [events, setEvents] = useState<ExternalEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const ev = await getUpcomingEvents();
        setEvents(ev);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
            alt="Corporate Event Management Kenya"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Corporate Event Management in Kenya
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  CREDENCE CONVENE™
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Institutional events structured for executive communication, stakeholder alignment, and governance credibility.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Decision Environments
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  We build forums where participation and messaging support institutional priorities beyond the event.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Plan Your Event <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Discuss Your Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Strategic Event Planning & Delivery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We design conferences and summits as structured platforms for sector positioning, market visibility, and executive engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Conferences and Summits", 
                icon: <Share2 className="size-8 text-primary" />,
                desc: "Platforms designed to introduce organizations at the center of sector conversations." 
              },
              { 
                title: "Policy Forums", 
                icon: <Landmark className="size-8 text-primary" />,
                desc: "Bringing together regulators and industry leaders for dialogue and alignment." 
              },
              { 
                title: "Business Events", 
                icon: <Users className="size-8 text-primary" />,
                desc: "High-level coordination of executive events where quality of engagement is paramount." 
              }
            ].map((item) => (
              <Card key={item.title} className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl font-normal leading-tight text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-normal text-foreground">Upcoming & Live Events</h2>
              <p className="text-muted-foreground text-sm font-light">Real-time opportunities to engage across our institutional ecosystem.</p>
            </div>
            <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white h-12 px-8">
              <Link href="https://engage.credence.africa" target="_blank" className="flex items-center gap-2">
                View All Events <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading events...</div>
          ) : events.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {events.slice(0, 3).map((event) => (
                <Link key={event.id} href={event.url} target="_blank" className="group block h-full">
                  <div className="border border-border group-hover:border-primary transition-colors bg-white flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image 
                        src={event.image || "https://picsum.photos/seed/event/800/500"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-4 flex-grow">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{event.date}</div>
                      <h3 className="text-lg font-normal leading-tight group-hover:text-primary transition-colors text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 font-light">{event.description}</p>
                    </div>
                    <div className="p-6 pt-0 mt-auto border-t border-border/50">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-primary pt-4 group-hover:underline">
                        Get Details <ArrowRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground border border-dashed rounded-none">
              No live events scheduled at this moment.
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal">Partner with CREDENCE CONVENE™</h2>
            <p className="text-lg text-muted-foreground font-light">Let’s discuss your next corporate AGM, conference, or institutional convening.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a href="mailto:connect@credence.africa" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                <Mail className="size-6 text-primary" /> connect@credence.africa
              </a>
              <a href="tel:+254719468240" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                <Phone className="size-6 text-primary" /> +254 719 468 240
              </a>
            </div>
            <Button asChild size="lg" className="rounded-none px-12 h-16 font-bold text-lg mt-4">
              <Link href="/consult">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
