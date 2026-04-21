
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Layers,
  Target,
  Users,
  Briefcase,
  Megaphone,
  Globe,
  Mail,
  Phone,
  Layout,
  Clock,
  MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getEventPortfolio, PortfolioEvent } from "@/lib/external-data";

const digitalConferences = [
  {
    title: "Capital Series™",
    description: "Financing and funding across sectors.",
    tracks: [
      { 
        name: "Financing Tracks (For Profit)", 
        items: ["Agribusiness", "Food Businesses", "Healthcare Businesses", "Creative Businesses", "Tourism and Hospitality Businesses", "Mobility (Infrastructure & Asset)", "Manufacturing Businesses", "Digital Infrastructure", "Renewable Energy", "e-Mobility"] 
      },
      { 
        name: "Funding Tracks (Non-Profit)", 
        items: ["Public Healthcare Systems", "Agri-Food Systems", "Gender Interventions", "Social Enterprises", "TVET Education", "Primary Education", "Childcare Services", "Mental Health Services", "Transport Systems", "Housing & Urban Regeneration"] 
      }
    ]
  },
  {
    title: "Growth and Scaling Series™",
    description: "Enterprise expansion and operational systems.",
    items: ["Healthcare Businesses", "Beauty and Wellness", "Fitness Businesses", "Tourism and Travel", "Luxury Experience Businesses", "Manufacturing and Industrial", "Food Businesses"]
  },
  {
    title: "Policy and Markets Series™",
    description: "Regulation, reform, and market systems.",
    items: ["Healthcare Edition", "SACCO Regulation & Reform", "VASP & Digital Assets", "Capital Markets & Financial Regulation", "Trade & Industrial Policy", "Digital Economy & Data", "Energy & Infrastructure", "Housing & Urban Development", "Public Finance & Tax", "Gender Policy Frameworks"]
  }
];

export default function EventsPage() {
  const [eventPortfolio, setEventPortfolio] = useState<PortfolioEvent[]>([]);
  const [portfolioLoading, setPortfolioLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const events = await getEventPortfolio();
        setEventPortfolio(events);
      } catch (e) {
        console.error(e);
      } finally {
        setPortfolioLoading(false);
      }
    }
    fetchPortfolio();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/events.png"
            alt="Credence Events"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Credence Events™
            </h1>
            
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg md:text-xl font-normal text-primary">
                Events in Kenya for Capital, Policy, Markets, and Strategic Partnerships
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Credence Events™ is a portfolio of proprietary events designed to convene investors, institutions, policymakers, sector leaders, founders, development actors, and commercial partners in structured environments engineered for outcomes.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light md:border-l md:pl-8">
                  These events function as market infrastructure where capital allocation, policy direction, stakeholder access, and commercial opportunity are brought into one room to accelerate transactions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Partner with Us <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="#portfolio" className="justify-center">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Decision Makers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Designed for Decision Makers</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Credence Events™ creates and owns high-value events structured as institutional-grade environments where:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "a", text: "Audience quality aligns to decision making authority" },
              { label: "b", text: "Content is built around real commercial and policy relevance" },
              { label: "c", text: "Sponsors and partners are integrated into the core experience" },
              { label: "d", text: "Engagement formats support transactions, partnerships, and outcomes" }
            ].map((item) => (
              <div key={item.label} className="p-8 border border-border bg-white space-y-4">
                <span className="text-primary font-bold text-2xl opacity-20">{item.label}</span>
                <p className="text-sm font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Design and Ownership */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-normal mb-12 text-center">Event Design and Ownership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Sector Aligned Events", icon: <Layers />, desc: "Built around investment themes, policy priorities, and market systems." },
              { title: "Audience Curation", icon: <Users />, desc: "Targeted participation of investors, corporates, regulators, and founders." },
              { title: "Sponsorship Structuring", icon: <Target />, desc: "Integration of brands into conversations aligned to outcomes." },
              { title: "Exhibitions & Marketplaces", icon: <Layout />, desc: "Commercial environments for showcasing products directly to target audiences." },
              { title: "Deal Rooms & Clinics", icon: <Briefcase />, desc: "Private formats enabling capital discussions and transactions." },
              { title: "Content Distribution", icon: <Globe />, desc: "Extended into reports, interviews, and thought leadership." },
              { title: "Ecosystem Development", icon: <Users />, desc: "Structured to build long-term communities and repeat engagement." }
            ].map((item) => (
              <Card key={item.title} className="rounded-none border-none shadow-sm p-8 space-y-4 hover:shadow-md transition-shadow">
                <div className="text-primary">{item.icon}</div>
                <h3 className="text-xl font-normal">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Growth & Who This Is For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-normal">Credence Events for Business Growth</h2>
              <p className="text-muted-foreground font-light leading-relaxed">Use these events to:</p>
              <ul className="space-y-4">
                {["Enter and position within markets", "Access investors, regulators, and institutional stakeholders", "Generate qualified leads and partnerships", "Build authority within sectors and policy environments", "Launch products, initiatives, and sector programs"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 lg:border-l lg:pl-16">
              <h2 className="text-2xl md:text-4xl font-normal">Who This Is For</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Corporates & Financial Institutions",
                  "Investors, Funds & Asset Managers",
                  "Development Partners & Foundations",
                  "Regulators & Public Institutions",
                  "Industry Associations",
                  "Advisory Firms",
                  "High-growth Businesses"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-light">
                    <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Credence Event Portfolio</h2>
            <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">Annual Events in Kenya</p>
          </div>

          {portfolioLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white shadow-sm flex flex-col animate-pulse">
                  <div className="bg-muted aspect-[4/3] w-full" />
                  <div className="p-6 space-y-4">
                    <div className="h-3 bg-muted rounded w-16" />
                    <div className="h-5 bg-muted rounded w-3/4" />
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-5/6" />
                    </div>
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="h-6 bg-muted rounded w-20" />
                      <div className="h-10 bg-muted rounded w-28" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : eventPortfolio.length === 0 ? (
            <p className="text-center text-muted-foreground font-light">Our event portfolio will be announced soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventPortfolio.map((event) => (
                <div key={event.id} className="bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col group overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary" />
                    )}
                    <div className="absolute top-4 right-4 bg-foreground/90 text-white flex flex-col items-center justify-center w-16 h-16 rounded-md shadow-md">
                      <span className="text-2xl font-bold leading-none">{event.day}</span>
                      <span className="text-[11px] font-medium uppercase tracking-wider mt-1">{event.month}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    {event.time && (
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                        <Clock className="size-4" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3 pt-2 mt-auto">
                      {event.category ? (
                        <span className="bg-muted text-foreground/70 text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                          {event.category}
                        </span>
                      ) : <span />}
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 h-10 text-sm font-semibold"
                      >
                        <Link href={event.url}>
                          Get Ticket <ArrowRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Digital Conferences */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-normal">Credence Digital Conferences</h2>
            <p className="text-lg font-light text-white/70">Capital, Growth, and Policy Engagement</p>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Credence Digital Conferences extend engagement beyond physical events into a continuous system that sustains capital access, enterprise growth, and regulatory insight across the year.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {digitalConferences.map((conf) => (
              <div key={conf.title} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-primary">{conf.title}</h3>
                  <p className="text-sm text-white/60 font-light">{conf.description}</p>
                </div>
                {conf.tracks ? (
                  <div className="space-y-8">
                    {conf.tracks.map((track) => (
                      <div key={track.name} className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">{track.name}</h4>
                        <ul className="space-y-2">
                          {track.items.map((item) => (
                            <li key={item} className="text-xs font-light text-white/80 flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {conf.items?.map((item) => (
                      <li key={item} className="text-xs font-light text-white/80 flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Sponsorship and Partnership</h2>
            <p className="text-muted-foreground font-light">Convert Visibility into Influence</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                tier: "Strategic Partner", 
                subtitle: "Brand Leadership. Market Activation", 
                focus: "Best suited for institutions seeking scale, dominance, and direct access.",
                benefits: ["Keynote speaking", "Category leadership", "Lead partner branding", "Pavilion ownership", "Branded forums", "Lead capture & analytics", "Deal room participation"]
              },
              { 
                tier: "Influence Partner", 
                subtitle: "Thought Leadership. Policy Positioning", 
                focus: "Best suited for advisory firms, development partners, and institutions shaping sectors.",
                benefits: ["Speaking & panel participation", "Authority positioning", "Publication inclusion", "Policy roundtables", "Executive briefings", "Institutional matching"]
              },
              { 
                tier: "Visibility Partner", 
                subtitle: "Market Entry. Product Engagement", 
                focus: "Best suited for companies launching products or entering markets.",
                benefits: ["Exhibition presence", "Product demonstrations", "Launch support", "Direct buyer engagement", "Campaign visibility", "Lead capture"]
              }
            ].map((tier) => (
              <Card key={tier.tier} className="rounded-none border shadow-sm flex flex-col hover:border-primary transition-colors group">
                <CardHeader className="p-8 pb-4 space-y-2">
                  <CardTitle className="text-2xl font-normal text-primary">{tier.tier}</CardTitle>
                  <p className="text-sm font-bold text-foreground">{tier.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2">{tier.focus}</p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-40">Benefits</p>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 text-xs font-light border-b border-border/50 pb-2">
                          <CheckCircle2 className="size-4 text-primary shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full mt-8 rounded-none h-12 font-bold uppercase tracking-widest text-xs">
                    <Link href="/consult">Become a Partner</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Commercial Outcomes & Use Cases */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-normal">Built for Commercial Outcomes</h2>
              <ul className="space-y-4">
                {[
                  "Curated audiences aligned to decision making",
                  "Sector relevant themes tied to opportunity",
                  "Integrated partner visibility",
                  "Engagement formats supporting pipeline",
                  "Pathways to partnerships, capital, and mandates"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-normal">Use Cases</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Launch products & initiatives",
                  "Enter or expand within markets",
                  "Access investors & regulators",
                  "Build authority and influence",
                  "Generate leads & partnerships",
                  "Participate in deal rooms"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-light">
                    <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-normal mb-6">Own the Room Where Markets Move</h2>
          <p className="text-lg opacity-80 mb-12 max-w-3xl mx-auto font-light">
            Credence Events™ creates environments where influence is built, partnerships are formed, and opportunities convert into structured engagements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
            {["Sponsor", "Partner", "Exhibit", "Speak", "Participate"].map((action) => (
              <div key={action} className="border border-white/20 p-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-colors cursor-default">
                {action}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:connect@credence.africa" className="flex items-center gap-3 text-xl hover:text-white transition-colors">
              <Mail className="size-6" /> connect@credence.africa
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-3 text-xl hover:text-white transition-colors">
              <Phone className="size-6" /> +254 719 468 240
            </a>
          </div>
          
          <Button asChild size="lg" variant="secondary" className="rounded-none px-12 h-16 text-base font-bold bg-white text-primary hover:bg-white/90">
            <Link href="/consult">Discuss Your Objectives</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
