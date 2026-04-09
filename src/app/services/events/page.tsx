
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
  { month: "February", title: "Capital Africa", desc: "Investment flows and opportunities in Africa." },
  { month: "March", title: "Credence Women Week", desc: "Convening across business, creativity, and recognition." },
  { month: "May", title: "The Cooperative Expo", desc: "Market access and cooperative sector growth." },
  { month: "June", title: "Public Affairs Conference", desc: "Governance, policy reform, and institutional dialogue." },
  { month: "July", title: "Credence Business Week", desc: "Sector-specific business growth and financing." },
  { month: "August", title: "Mobility Week", desc: "Transport systems, infrastructure, and innovation." }
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
      {/* Hero Section - Full Background Image with Content Box Overlay */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/events-hero/1200/1200"
            alt="Credence Events"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="bg-white p-8 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-10">
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
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult">Partner with Us</Link>
              </Button>
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
    </div>
  );
}
