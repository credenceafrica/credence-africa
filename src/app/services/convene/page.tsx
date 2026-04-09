
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ArrowUpRight, Landmark, Users, Share2, ExternalLink } from "lucide-react";
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
      {/* Hero Section - Split Layout with White Background */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-24">
            <div className="space-y-10 order-2 lg:order-1">
              <h1 className="text-foreground leading-tight">
                Corporate Event Management Services in Kenya
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
                <div className="space-y-3">
                  <h2 className="text-sm font-bold text-primary tracking-widest uppercase">CREDENCE CONVENE™</h2>
                  <p className="text-base leading-relaxed font-light">
                    Design and delivery of institutional events structured for executive communication and stakeholder alignment.
                  </p>
                </div>
                <div className="space-y-3 lg:border-l lg:pl-8">
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">Decision Environments</p>
                  <p className="text-base leading-relaxed font-light">
                    We build forums where participation and messaging support institutional priorities beyond the event.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                  <Link href="/consult">
                    Plan Your Event <ArrowUpRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-transparent">
                  <Link href="/consult">
                    Discuss Your Event
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden order-1 lg:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                alt="Corporate Event Management Kenya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conference Planning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Strategic Event Planning & Delivery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We design conferences and summits as structured platforms for sector positioning, market visibility, and executive engagement with partners and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Conferences and Summits", 
                icon: <Share2 className="size-8 text-primary" />,
                desc: "Platforms designed to introduce organizations at the center of sector conversations and market visibility." 
              },
              { 
                title: "Policy Forums", 
                icon: <Landmark className="size-8 text-primary" />,
                desc: "Structured environments bringing together regulators, leaders, and actors for dialogue and alignment." 
              },
              { 
                title: "Business Events", 
                icon: <Users className="size-8 text-primary" />,
                desc: "High-level coordination of executive events where flow and experience influence the quality of engagement." 
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

      {/* AGM Planning */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal text-foreground">AGM Planning Services in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Corporate AGMs operate as formal governance platforms where accountability, reporting, and shareholder communication must be delivered with precision.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "AGM Planning and Delivery", desc: "End to end planning covering agenda structuring and participant coordination." },
                  { title: "Shareholder Meetings", desc: "Structured delivery for meetings where participation discipline is essential." },
                  { title: "Board Meetings", desc: "Support for environments requiring executive level coordination and discretion." }
                ].map((item) => (
                  <div key={item.title} className="space-y-2 border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-normal text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop"
                alt="Governance Meeting"
                fill
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Plan a Corporate AGM, Conference, or Policy Forum.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                If your organization is planning a corporate event in Kenya, CREDENCE CONVENE™ provides the strategy and structure required to deliver it with credibility.
              </p>
            </div>
            <div className="bg-white p-10 md:p-16 space-y-10 shadow-2xl text-black rounded-none">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal">Start Your Event Plan</h3>
                <p className="text-muted-foreground text-sm font-light">A senior advisor will contact you to discuss your objectives.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none h-16 text-lg font-bold">
                  <Link href="/consult">Plan Your Event</Link>
                </Button>
              </div>
            </div>
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
              No live events scheduled at this moment. Please check back later.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
