"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  Globe, 
  Users, 
  Target, 
  Zap, 
  ShieldCheck, 
  BarChart, 
  MessageSquare,
  Search,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalEvent, getUpcomingEvents } from "@/lib/external-data";

const eventPortfolio = [
  { month: "February", title: "Capital Africa", desc: "Investment, capital flows, and investment opportunities in Africa" },
  { month: "March", title: "Credence Women Week", desc: "A multi-format convening across business, creativity, cooperatives, leadership, and recognition.", tracks: ["Women and Faith", "Women Creatives Circle", "Women and Business", "Women and Coops", "Credible Women Awards"] },
  { month: "May", title: "The Cooperative Expo", desc: "Market access, member engagement, financing, compliance, and cooperative sector growth" },
  { month: "June", title: "Public Affairs Conference", desc: "Governance, policy reform, regulation, and institutional dialogue" },
  { month: "July", title: "Credence Business Week", desc: "Sector-specific business growth, financing, and market access.", tracks: ["Agribusiness and Food", "Beauty, Wellness, and Aesthetics", "Creative Economy", "Healthcare", "Manufacturing", "Tech and Digital", "Tourism and Hospitality"] },
  { month: "August", title: "Mobility Week", desc: "Transport systems, infrastructure, financing, and innovation" },
  { month: "September", title: "Impact Finance Summit", desc: "Development finance, capital deployment, and inclusive growth" },
  { month: "October", title: "Credible Saccos | Sacco Day", desc: "Financial services, governance, member engagement, and sector growth" },
  { month: "November", title: "Credible Experts Week and Awards", desc: "Expert visibility, knowledge leadership, and recognition" },
  { month: "December", title: "CBC Festival", desc: "Commerce, community engagement, education, and opportunity" }
];

const digitalConferences = [
  {
    title: "Capital Series™",
    subtitle: "Financing and funding across sectors",
    sections: [
      {
        name: "For-Profit Enterprises",
        items: ["Financing Agribusiness", "Financing Food Business", "Financing Healthcare", "Financing Creative Business", "Financing Tourism and Hospitality", "Financing Mobility (Infrastructure & Asset)", "Financing Manufacturing", "Financing Digital Infrastructure", "Financing Renewable Energy", "Financing e-Mobility"]
      },
      {
        name: "Non-Profit and Development",
        items: ["Funding Public Healthcare Systems", "Funding Agri-Food Systems", "Funding Gender Interventions", "Funding Social Enterprises", "Funding TVET Education", "Funding Primary Education", "Funding Childcare Services", "Funding Mental Health Services", "Funding Transport Systems", "Funding Housing and Urban Regeneration"]
      }
    ]
  },
  {
    title: "Growth and Scaling Series™",
    subtitle: "Enterprise expansion and operational systems",
    items: ["Growing and Scaling Healthcare Businesses", "Growing and Scaling Beauty and Wellness Businesses", "Growing and Scaling Fitness Businesses", "Growing Tourism and Travel Businesses", "Scaling Luxury Travel and Experience Businesses", "Scaling Manufacturing and Industrial Businesses", "Scaling Food Businesses"]
  },
  {
    title: "Policy and Markets Series™",
    subtitle: "Regulation, reform, and market systems",
    items: ["Policy and Markets Healthcare Edition", "Policy and Markets SACCO Regulation and Reform", "Policy and Markets VASP Regulation and Digital Assets", "Policy and Markets Capital Markets and Financial Regulation", "Policy and Markets Trade, Manufacturing, and Industrial Policy", "Policy and Markets Digital Economy and Data Regulation", "Policy and Markets Energy and Infrastructure Regulation", "Policy and Markets Housing and Urban Development", "Policy and Markets Public Finance and Tax Systems", "Policy and Markets Gender Policy and Inclusion Frameworks"]
  }
];

const partnershipTiers = [
  {
    title: "Strategic Partner",
    tagline: "Brand Leadership. Market Visibility. Market Activation",
    desc: "Best suited for institutions seeking scale, dominance, and direct access to high-value audiences.",
    benefits: ["Keynote speaking within main program", "Category leadership positioning", "Lead partner branding across all assets", "Pavilion ownership and premium exhibition presence", "Branded engagement forums and client sessions", "Integration across content, media, and digital channels", "Access to curated executives and investors", "Lead capture, profiling, and analytics", "Participation in deal rooms and advisory clinics", "Investor and client matching aligned to offerings"]
  },
  {
    title: "Influence Partner",
    tagline: "Thought Leadership. Policy Positioning. Market Expansion",
    desc: "Best suited for advisory firms, development partners, and institutions shaping sectors.",
    benefits: ["Speaking and panel participation", "Authority positioning within sector conversations", "Inclusion in publications and thought leadership outputs", "Participation in policy dialogues and roundtables", "Executive briefings and workshops", "Institutional and investor matching", "Post-event engagement and pipeline development"]
  },
  {
    title: "Visibility Partner",
    tagline: "Market Entry. Market Access. Product Engagement",
    desc: "Best suited for companies launching products or entering markets.",
    benefits: ["Exhibition and showcase presence", "Product demonstrations and activations", "Launch and market entry support", "Direct engagement with buyers and stakeholders", "Inclusion in campaigns and promotional visibility", "Lead capture and customer engagement"]
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
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="https://picsum.photos/seed/events-hero/1920/1080"
          alt="Credence Events"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-8">
            <h1 className="leading-tight">
              Credence Events™
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 text-white/90 font-light">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-primary font-normal">
                  Strategic Convergence
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Flagship convenings where capital and policy converge. We own and design conferences, summits, and expos engineered for outcomes.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/20 pl-8">
                <p className="text-xl md:text-2xl text-primary font-normal">
                  Market Infrastructure
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Providing the environment for capital allocation, policy direction, and commercial opportunity to accelerate transaction and ecosystem value.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="rounded-none px-8 py-7">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 rounded-none px-8 py-7 bg-transparent">
                <Link href="#partnerships">Sponsor or Exhibit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Infrastructure Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal">Market Infrastructure for Growth</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These events function as market infrastructure where capital allocation, policy direction, stakeholder access, and commercial opportunity are brought into one room to accelerate transactions, partnerships, visibility, and long-term ecosystem growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl font-normal text-primary">Designed for Decision Makers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Credence Events™ creates and owns high-value events across investment themes, sectors, and economic systems. Each event is structured as an institutional-grade environment.
              </p>
              <div className="grid gap-4">
                {[
                  { label: "a", text: "Audience quality aligns to decision-making authority" },
                  { label: "b", text: "Content is built around real commercial and policy relevance" },
                  { label: "c", text: "Sponsors and partners are integrated into the core experience" },
                  { label: "d", text: "Engagement formats support transactions, partnerships, and outcomes" }
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 bg-muted/20 border-l-2 border-primary">
                    <span className="text-primary font-bold">{item.label}</span>
                    <p className="text-sm font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Event Design & Ownership", icon: <Zap /> },
                { title: "Audience Curation", icon: <Users /> },
                { title: "Partnership Structuring", icon: <Target /> },
                { title: "Exhibitions & Marketplaces", icon: <Globe /> },
                { title: "Deal Rooms & Advisory", icon: <Search /> },
                { title: "Content Distribution", icon: <MessageSquare /> }
              ].map((cap) => (
                <div key={cap.title} className="p-6 border hover:border-primary transition-colors flex flex-col gap-4">
                  <div className="text-primary">{cap.icon}</div>
                  <h4 className="text-sm font-normal uppercase tracking-wider">{cap.title}</h4>
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
            <h2 className="text-3xl md:text-4xl font-normal">Annual Events in Kenya</h2>
            <p className="text-muted-foreground">The Credence Event Portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventPortfolio.map((event) => (
              <Card key={event.title} className="rounded-none border-none shadow-sm group hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest group-hover:bg-black transition-colors">
                  {event.month}
                </div>
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-normal group-hover:text-primary transition-colors">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                  {event.tracks && (
                    <ul className="space-y-1.5 border-t pt-4">
                      {event.tracks.map(track => (
                        <li key={track} className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 flex items-center gap-2">
                          <div className="size-1 rounded-full bg-primary" /> {track}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Conferences */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-normal">Credence Digital Conferences</h2>
            <p className="text-xl font-light text-white/70">Capital, Growth, and Policy Engagement</p>
            <p className="text-sm text-white/50 leading-relaxed max-w-2xl mx-auto">
              Extending engagement beyond physical events into a continuous system that sustains capital access, enterprise growth, and regulatory insight across the year.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {digitalConferences.map((series) => (
              <div key={series.title} className="space-y-8 p-10 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-primary">{series.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">{series.subtitle}</p>
                </div>
                
                {series.sections ? (
                  <div className="space-y-8">
                    {series.sections.map(sec => (
                      <div key={series.title + sec.name} className="space-y-4">
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest border-b border-primary/20 pb-2">{sec.name}</h4>
                        <ul className="space-y-2">
                          {sec.items.map(item => (
                            <li key={item} className="text-xs text-white/60 flex items-start gap-2">
                              <ArrowRight className="size-3 text-primary shrink-0 mt-0.5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {series.items?.map(item => (
                      <li key={item} className="text-xs text-white/60 flex items-start gap-2 border-b border-white/5 pb-2">
                        <ArrowRight className="size-3 text-primary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section id="partnerships" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Convert Visibility into Influence</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Sponsorship and Partnership Opportunities</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier) => (
              <Card key={tier.title} className="rounded-none border-2 hover:border-primary transition-colors flex flex-col">
                <div className="p-10 flex-grow space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-normal">{tier.title}</h3>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{tier.tagline}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-3 pt-6 border-t">
                    {tier.benefits.map(benefit => (
                      <li key={benefit} className="text-xs flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0">
                  <Button asChild className="w-full rounded-none font-bold py-6">
                    <Link href="/consult">Become an {tier.title.split(' ')[0]} Partner</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Outcomes */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">Built for Commercial Outcomes</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Each event is designed with clear commercial and strategic logic to ensure measurable results for our partners and participants.
              </p>
              <div className="grid gap-4">
                {[
                  "Curated audiences aligned to decision making",
                  "Sector relevant themes tied to opportunity",
                  "Integrated partner visibility within the experience",
                  "Engagement formats that support pipeline generation",
                  "Direct pathways to partnerships, capital, and mandates"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white border">
                    <div className="text-primary font-bold text-lg opacity-40">{(idx + 1).toString().padStart(2, '0')}</div>
                    <p className="text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 bg-white p-12 border-l-8 border-primary shadow-xl">
              <h3 className="text-2xl font-normal">Use Cases</h3>
              <p className="text-sm text-muted-foreground">Organizations engage Credence Events™ to:</p>
              <ul className="space-y-4">
                {[
                  "Launch products and sector initiatives",
                  "Enter or expand within markets",
                  "Access investors, regulators, and institutions",
                  "Build authority and influence within sectors",
                  "Generate leads and partnerships",
                  "Participate in deal rooms and advisory engagements"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-normal">
                    <ArrowUpRight className="size-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engage Section */}
      <section id="engage" className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          <h2 className="text-3xl md:text-5xl font-normal">Own the Room Where Markets Move</h2>
          <p className="text-xl font-light text-white/70">
            Credence Events™ creates environments where influence is built, partnerships are formed, and opportunities convert into structured engagements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Sponsor", "Partner", "Exhibit", "Speak", "Participate"].map(mode => (
              <div key={mode} className="p-4 border border-white/20 hover:border-primary hover:text-primary transition-all cursor-default">
                <span className="text-xs font-bold uppercase tracking-widest">{mode}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-sm text-white/50 mb-8">Contact the team to identify the right event, audience, and engagement model aligned to your commercial and strategic objectives.</p>
            <Button asChild size="lg" className="rounded-none px-12 py-8 text-lg font-normal bg-primary hover:bg-primary/90">
              <Link href="/consult">Connect With the Events Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-normal">Upcoming & Live Events</h2>
              <p className="text-muted-foreground text-sm">Real-time opportunities to engage across our ecosystem.</p>
            </div>
            <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white">
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
                <Link key={event.id} href={event.url} target="_blank" className="group block">
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
                      <h3 className="text-lg font-normal leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
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