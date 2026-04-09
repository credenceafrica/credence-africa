
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Users, 
  Target, 
  Zap, 
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalEvent, getUpcomingEvents } from "@/lib/external-data";

const eventPortfolio = [
  { month: "February", title: "Capital Africa", desc: "Investment, capital flows, and investment opportunities in Africa" },
  { month: "March", title: "Credence Women Week", desc: "A multi-format convening across business, creativity, and recognition." },
  { month: "May", title: "The Cooperative Expo", desc: "Market access, member engagement, and cooperative sector growth" },
  { month: "June", title: "Public Affairs Conference", desc: "Governance, policy reform, and institutional dialogue" },
  { month: "July", title: "Credence Business Week", desc: "Sector-specific business growth and financing." },
  { month: "August", title: "Mobility Week", desc: "Transport systems, infrastructure, and innovation" },
  { month: "September", title: "Impact Finance Summit", desc: "Development finance and inclusive growth" },
  { month: "October", title: "Sacco Day", desc: "Financial services and governance for cooperatives" },
  { month: "November", title: "Credible Experts Week", desc: "Expert visibility and knowledge leadership" },
  { month: "December", title: "CBC Festival", desc: "Commerce, community, and opportunity" }
];

const partnershipTiers = [
  {
    title: "Strategic Partner",
    tagline: "Brand Leadership. Market Activation",
    benefits: ["Keynote speaking within program", "Lead partner branding", "Pavilion ownership", "Access to curated investors"]
  },
  {
    title: "Influence Partner",
    tagline: "Thought Leadership. Policy Positioning",
    benefits: ["Speaking and panel participation", "Inclusion in publications", "Institutional matching"]
  },
  {
    title: "Visibility Partner",
    tagline: "Market Entry. Product Engagement",
    benefits: ["Exhibition and showcase presence", "Product demonstrations", "Lead capture"]
  }
];

export default function EventsPage() {
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
                Credence Events™ Portfolio
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">
                    Strategic Convergence
                  </p>
                  <p className="text-base leading-relaxed font-light">
                    Flagship convenings where capital and policy converge. Summits engineered for institutional outcomes.
                  </p>
                </div>
                <div className="space-y-3 lg:border-l lg:pl-8">
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">
                    Market Infrastructure
                  </p>
                  <p className="text-base leading-relaxed font-light">
                    Providing the environment for capital allocation and policy direction to accelerate transactions.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                  <Link href="#portfolio">View Portfolio</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-transparent">
                  <Link href="#partnerships">Partner with Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden order-1 lg:order-2">
              <Image 
                src="https://picsum.photos/seed/events-hero/1200/1200"
                alt="Credence Events"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Infrastructure Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Market Infrastructure for Growth</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              These events function as infrastructure where capital allocation, policy direction, and commercial opportunity are brought into one room.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl font-normal text-primary">Designed for Decision Makers</h3>
              <div className="grid gap-4">
                {[
                  "Audience quality aligns to decision-making authority",
                  "Content is built around real commercial relevance",
                  "Engagement formats support transactions and outcomes"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-muted/20 border-l-2 border-primary">
                    <p className="text-sm font-light text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Event Ownership", icon: <Zap /> },
                { title: "Audience Curation", icon: <Users /> },
                { title: "Partnerships", icon: <Target /> },
                { title: "Exhibitions", icon: <Globe /> }
              ].map((cap) => (
                <div key={cap.title} className="p-6 border hover:border-primary transition-colors flex flex-col gap-4 bg-white">
                  <div className="text-primary">{cap.icon}</div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">{cap.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Annual Event Portfolio</h2>
            <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">Proprietary Convenings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventPortfolio.map((event) => (
              <Card key={event.title} className="rounded-none border-none shadow-sm group hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest group-hover:bg-black transition-colors">
                  {event.month}
                </div>
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-normal group-hover:text-primary transition-colors text-foreground">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{event.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnerships" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Convert Visibility into Influence</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Sponsorship Tiers</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier) => (
              <Card key={tier.title} className="rounded-none border-2 hover:border-primary transition-colors flex flex-col">
                <div className="p-10 flex-grow space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-normal text-foreground">{tier.title}</h3>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{tier.tagline}</p>
                  </div>
                  <ul className="space-y-3 pt-6 border-t">
                    {tier.benefits.map(benefit => (
                      <li key={benefit} className="text-xs flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0">
                  <Button asChild className="w-full rounded-none font-bold h-12">
                    <Link href="/consult">Become a Partner</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight">Own the Room Where Markets Move</h2>
          <p className="text-xl font-light text-white/70">
            Credence Events™ creates environments where influence is built and partnerships are formed.
          </p>
          <Button asChild size="lg" className="rounded-none px-12 h-16 text-lg font-normal bg-primary hover:bg-primary/90">
            <Link href="/consult">Connect With the Team</Link>
          </Button>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-normal text-foreground">Upcoming & Live Events</h2>
              <p className="text-muted-foreground text-sm font-light">Real-time opportunities to engage across our ecosystem.</p>
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
            <div className="text-center py-12 text-muted-foreground border border-dashed rounded-none font-light italic">
              No live events scheduled at this moment.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
