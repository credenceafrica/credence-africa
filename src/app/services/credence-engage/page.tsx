"use client";

import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Mail,
  Phone,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getEventPortfolio, PortfolioEvent } from "@/lib/external-data";

/* ------------------------------------------------------------------ */
/*  Content: the four arms of the convening system                    */
/* ------------------------------------------------------------------ */

const digitalConferences = [
  {
    title: "Capital Series™",
    description: "Financing and funding across sectors.",
    tracks: [
      {
        name: "Financing Tracks (For Profit)",
        items: ["Agribusiness", "Food Businesses", "Healthcare Businesses", "Creative Businesses", "Tourism and Hospitality Businesses", "Mobility (Infrastructure & Asset)", "Manufacturing Businesses", "Digital Infrastructure", "Renewable Energy", "e-Mobility"],
      },
      {
        name: "Funding Tracks (Non-Profit)",
        items: ["Public Healthcare Systems", "Agri-Food Systems", "Gender Interventions", "Social Enterprises", "TVET Education", "Primary Education", "Childcare Services", "Mental Health Services", "Transport Systems", "Housing & Urban Regeneration"],
      },
    ],
  },
  {
    title: "Growth and Scaling Series™",
    description: "Enterprise expansion and operational systems.",
    items: ["Healthcare Businesses", "Beauty and Wellness", "Fitness Businesses", "Tourism and Travel", "Luxury Experience Businesses", "Manufacturing and Industrial", "Food Businesses"],
  },
  {
    title: "Policy and Markets Series™",
    description: "Regulation, reform and market systems.",
    items: ["Healthcare Edition", "SACCO Regulation & Reform", "VASP & Digital Assets", "Capital Markets & Financial Regulation", "Trade & Industrial Policy", "Digital Economy & Data", "Energy & Infrastructure", "Housing & Urban Development", "Public Finance & Tax", "Gender Policy Frameworks"],
  },
];

// CONVENE: formal / institutional / policy convenings
const conveneRows = [
  { title: "Conferences and Summits", desc: "Sector platforms positioning organizations at the center of market visibility and executive engagement with partners and stakeholders." },
  { title: "Corporate AGMs and Shareholder Meetings", desc: "Formal governance platforms where accountability, reporting and shareholder communication are delivered with precision and protocol discipline." },
  { title: "Board Meetings and Retreats", desc: "Governance environments and offsite strategy sessions requiring executive coordination, discretion and institutional standards." },
  { title: "Investor Briefings and Analyst Sessions", desc: "High-stakes communication environments where clarity, structure and confidence shape stakeholder decisions and institutional credibility." },
  { title: "SACCO Delegate and Member Meetings", desc: "Cooperative forums with defined participation structures, agenda discipline and coordinated execution that strengthen member confidence." },
  { title: "Policy Dialogue and Multistakeholder Forums", desc: "Structured platforms engaging regulators, institutions and sector actors around reform, governance and implementation priorities." },
  { title: "Executive Roundtables and High-Trust Forums", desc: "Invitation-only convenings where discretion, audience quality and institutional relevance define the experience." },
];

const conveneAudience = [
  "Corporates and private companies",
  "Listed companies and issuers",
  "Financial institutions",
  "SACCOs and cooperatives",
  "Associations and organizations",
  "Regulators and public sector",
  "Development partners",
  "Professional networks",
];

// ENGAGE: market activation
const engageRows = [
  { title: "Event Strategy and Audience Design", desc: "Audience segments, engagement pathways and participation models aligned to commercial objectives and target market behavior." },
  { title: "Brand Positioning and Experiential Activation", desc: "Environments where brands are experienced through interaction and demonstration rather than passive visibility." },
  { title: "Product Launches and Market Entry Campaigns", desc: "Launch platforms that introduce products, position brands and drive early adoption across target audiences." },
  { title: "Exhibitions and Trade Show Platforms", desc: "Expos that enable brands to showcase offerings and engage directly with target markets, buyers and partners." },
  { title: "Marketplaces and Buyer-Seller Platforms", desc: "Curated environments connecting businesses with buyers, distributors, partners and investors." },
  { title: "Deal Rooms and Transaction Environments", desc: "Facilitated spaces supporting negotiations, partnerships and commercial transactions during and after the event." },
  { title: "Audience Acquisition and Lead Generation", desc: "Platforms that attract, qualify and convert high-intent audiences into customers, users or participants." },
];

const engageRevenue = [
  "Event design and execution fees for brands and corporates",
  "Campaign retainers for ongoing engagement programs",
  "Ticketing and paid audience access where applicable",
  "Exhibition and marketplace participation fees",
  "Deal room participation and transaction facilitation",
  "Data and lead generation monetization",
  "Conversion into advisory, capital and trade facilitation mandates",
];

// NETWORKS: the curated "Credible" communities
const networks = [
  { title: "Credible Business Network", description: "Business networking, market access and enterprise expansion for executives and founders." },
  { title: "Credible Chamas Network", description: "Investment communities, collective capital and structured wealth platforms across Africa." },
  { title: "Credible Cooperatives Network", description: "Cooperative ecosystems, SACCO networks and institutional market access platforms." },
  { title: "Credible Experts Network", description: "Professional networks, advisory opportunities and thought leadership platforms for specialists." },
  { title: "Credible Faith Network", description: "Faith-based leadership networks, community systems and social impact platforms." },
  { title: "Credible Life Network", description: "Leadership development, personal growth and strategic life design for professionals." },
  { title: "Credible Women Network", description: "Women in business, leadership and wealth creation networks across Africa." },
];

const sponsorshipTiers = [
  {
    tier: "Strategic Partner",
    subtitle: "Brand leadership. Market activation",
    focus: "For institutions seeking scale, dominance and direct access.",
    benefits: ["Keynote speaking", "Category leadership", "Lead partner branding", "Pavilion ownership", "Branded forums", "Lead capture & analytics", "Deal room participation"],
  },
  {
    tier: "Influence Partner",
    subtitle: "Thought leadership. Policy positioning",
    focus: "For advisory firms, development partners and institutions shaping sectors.",
    benefits: ["Speaking & panel participation", "Authority positioning", "Publication inclusion", "Policy roundtables", "Executive briefings", "Institutional matching"],
  },
  {
    tier: "Visibility Partner",
    subtitle: "Market entry. Product engagement",
    focus: "For companies launching products or entering markets.",
    benefits: ["Exhibition presence", "Product demonstrations", "Launch support", "Direct buyer engagement", "Campaign visibility", "Lead capture"],
  },
];

const ARMS = [
  { id: "convene", num: "01", name: "Convene", tag: "Formal & Policy Convenings" },
  { id: "events", num: "02", name: "Events", tag: "Owned Flagship Platforms" },
  { id: "engage", num: "03", name: "Engage", tag: "Market Activation" },
  { id: "networks", num: "04", name: "Networks", tag: "Credible Communities" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

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
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes cred-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cred-rise { animation: cred-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .cred-rule { transform: scaleX(0); transform-origin: left; animation: cred-rule 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes cred-rule { to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) {
          .cred-rise, .cred-rule { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      {/* ============================================================ */}
      {/*  HERO: deep-red drench, white text (passes AA at ~6.7:1)     */}
      {/* ============================================================ */}
      <section className="relative isolate bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-[0.16] mix-blend-multiply">
          <Image src="/events.png" alt="" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="cred-rise max-w-4xl">
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              Credence Engage
            </p>
            <h1 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              The rooms where<br className="hidden sm:block" /> markets move.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
              One convening engine for capital, policy, markets and strategic partnerships: engineered as institutional-grade environments where allocation, access and opportunity are brought into the same room to accelerate outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ConsultationDialog size="lg" triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90">
                Partner with Us <ArrowUpRight className="ml-2 size-5" />
              </ConsultationDialog>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-2 border-white bg-transparent px-8 text-base font-light text-white hover:bg-white hover:text-primary">
                <Link href="#portfolio" className="justify-center">View the Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THE FOUR ARMS: index of one system (a real sequence)       */}
      {/* ============================================================ */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-background">
                One system, <span className="text-primary">four arms</span>
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/75">
                Credence convenes the continent through four connected platforms: from closed-door governance to open markets to standing communities.
              </p>
            </div>
            <nav className="lg:col-span-8" aria-label="Convening arms">
              <ol className="divide-y divide-white/15 border-y border-white/15">
                {ARMS.map((arm) => (
                  <li key={arm.id}>
                    <a
                      href={`#${arm.id}`}
                      className="group flex items-baseline gap-5 py-6 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground md:gap-8 md:py-7"
                    >
                      <span className="font-normal tabular-nums text-primary [font-size:clamp(1.25rem,3vw,2rem)]">{arm.num}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-2xl font-normal leading-tight md:text-3xl">{arm.name}</span>
                        <span className="mt-1 block text-sm font-light text-background/70">{arm.tag}</span>
                      </span>
                      <ArrowRight className="size-6 shrink-0 self-center text-primary transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  01 · CONVENE: light ground, ledger rows                    */}
      {/* ============================================================ */}
      <section id="convene" className="scroll-mt-20 bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-normal tabular-nums text-primary [font-size:clamp(2rem,5vw,3.5rem)] leading-none">01</p>
              <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
                Convene
              </h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-foreground">Formal & Policy Convenings</p>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-foreground/75">
                Corporate and institutional events built as decision environments: AGMs, conferences, investor briefings and policy forums delivered with governance credibility and precision.
              </p>
              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">Who we work with</p>
                <ul className="flex flex-wrap gap-2">
                  {conveneAudience.map((a) => (
                    <li key={a} className="border border-foreground/15 px-3 py-1.5 text-xs font-light text-foreground/80">{a}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                {conveneRows.map((row) => (
                  <li key={row.title} className="py-6 md:py-7">
                    <h3 className="text-xl font-normal leading-tight text-foreground md:text-2xl">{row.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-foreground/75">{row.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  02 · EVENTS: owned flagship platforms. Navy ground.        */}
      {/*  Holds the LIVE PORTFOLIO + ticketing (preserved).           */}
      {/* ============================================================ */}
      <section id="events" className="scroll-mt-20 bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-normal tabular-nums text-primary [font-size:clamp(2rem,5vw,3.5rem)] leading-none">02</p>
              <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-background">
                Credence Events™
              </h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-primary">Owned Flagship Platforms</p>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/75">
                Proprietary events that function as market infrastructure, convening investors, policymakers, sector leaders and commercial partners in structured environments engineered to accelerate transactions.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-12">
              {/* Designed for decision makers */}
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-background/60">Designed for decision makers</p>
                <ul className="divide-y divide-white/15 border-y border-white/15">
                  {[
                    "Audience quality aligns to decision-making authority",
                    "Content is built around real commercial and policy relevance",
                    "Sponsors and partners are integrated into the core experience",
                    "Engagement formats support transactions, partnerships and outcomes",
                  ].map((text) => (
                    <li key={text} className="py-4 text-base font-light leading-relaxed text-background/85">{text}</li>
                  ))}
                </ul>
              </div>
              {/* Design & ownership capabilities */}
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-background/60">Event design and ownership</p>
                <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {[
                    { t: "Sector-Aligned Events", d: "Built around investment themes, policy priorities and market systems." },
                    { t: "Audience Curation", d: "Targeted participation of investors, corporates, regulators and founders." },
                    { t: "Sponsorship Structuring", d: "Integration of brands into conversations aligned to outcomes." },
                    { t: "Exhibitions & Marketplaces", d: "Commercial environments for showcasing products to target audiences." },
                    { t: "Deal Rooms & Clinics", d: "Private formats enabling capital discussions and transactions." },
                    { t: "Content Distribution", d: "Extended into reports, interviews and thought leadership." },
                  ].map((c) => (
                    <div key={c.t} className="border-t border-white/15 pt-4">
                      <h3 className="text-lg font-normal text-background">{c.t}</h3>
                      <p className="mt-1.5 text-sm font-light leading-relaxed text-background/70">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live portfolio: preserved data fetch + ticketing links */}
        <div id="portfolio" className="scroll-mt-20 border-t border-white/15">
          <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-normal leading-tight [font-size:clamp(1.75rem,3.5vw,2.5rem)]">The Event Portfolio</h3>
                <p className="mt-2 text-sm font-light text-background/70">Live and upcoming convenings across Kenya.</p>
              </div>
            </div>

            {portfolioLoading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex animate-pulse flex-col bg-white/5">
                    <div className="aspect-[4/3] w-full bg-white/10" />
                    <div className="space-y-4 p-6">
                      <div className="h-3 w-16 bg-white/10" />
                      <div className="h-5 w-3/4 bg-white/10" />
                      <div className="h-3 w-full bg-white/10" />
                      <div className="h-10 w-28 bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            ) : eventPortfolio.length === 0 ? (
              <p className="border border-white/15 py-12 text-center text-base font-light text-background/70">
                Our event portfolio will be announced soon.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {eventPortfolio.map((event) => (
                  <article key={event.id} className="group flex flex-col bg-white text-foreground transition-shadow hover:shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-primary" />
                      )}
                      <div className="absolute right-0 top-0 flex h-16 w-16 flex-col items-center justify-center bg-foreground text-white">
                        <span className="text-2xl font-normal leading-none">{event.day}</span>
                        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em]">{event.month}</span>
                      </div>
                    </div>

                    <div className="flex flex-grow flex-col gap-3 p-6">
                      {event.time && (
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/75">
                          <Clock className="size-4 text-primary" aria-hidden="true" /> <span>{event.time}</span>
                        </div>
                      )}
                      <h4 className="text-lg font-normal leading-snug text-foreground">{event.title}</h4>
                      <p className="line-clamp-2 text-sm font-light leading-relaxed text-foreground/75">{event.description}</p>
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm font-light text-foreground/70">
                          <MapPin className="size-4 shrink-0" /> <span className="truncate">{event.location}</span>
                        </div>
                      )}
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                        {event.category ? (
                          <span className="bg-muted px-3 py-1.5 text-xs font-medium capitalize text-foreground/75">{event.category}</span>
                        ) : <span />}
                        <Button asChild className="h-14 rounded-none bg-foreground px-8 text-base font-light text-background hover:bg-foreground/90">
                          <Link href={event.url}>Get Ticket <ArrowRight className="ml-1 size-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Digital conferences: continuous, year-round system */}
        <div className="border-t border-white/15">
          <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <h3 className="font-normal leading-tight [font-size:clamp(1.75rem,3.5vw,2.5rem)]">Digital Conferences</h3>
              <p className="mt-3 text-base font-light leading-relaxed text-background/70">
                Engagement extended beyond physical events into a continuous system that sustains capital access, enterprise growth and regulatory insight across the year.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-3">
              {digitalConferences.map((conf) => (
                <div key={conf.title} className="border-t border-white/15 pt-6">
                  <h4 className="text-xl font-normal text-primary">{conf.title}</h4>
                  <p className="mt-1 text-sm font-light text-background/70">{conf.description}</p>
                  {conf.tracks ? (
                    <div className="mt-6 space-y-6">
                      {conf.tracks.map((track) => (
                        <div key={track.name}>
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-background/50">{track.name}</p>
                          <ul className="space-y-2">
                            {track.items.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm font-light text-background/85">
                                <span className="size-1 shrink-0 bg-primary" aria-hidden="true" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-6 space-y-2">
                      {conf.items?.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-light text-background/85">
                          <span className="size-1 shrink-0 bg-primary" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  03 · ENGAGE: market activation. Light ground.              */}
      {/* ============================================================ */}
      <section id="engage" className="scroll-mt-20 bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-normal tabular-nums text-primary [font-size:clamp(2rem,5vw,3.5rem)] leading-none">03</p>
              <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
                Engage
              </h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-foreground">Market Activation</p>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-foreground/75">
                Market-facing events structured as conversion platforms: built around participation economics where brands, institutions and partners engage defined audiences across physical, hybrid and digital environments.
              </p>
              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">Revenue-driven models</p>
                <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                  {engageRevenue.map((r) => (
                    <li key={r} className="py-3 text-sm font-light leading-relaxed text-foreground/75">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-foreground/12 border-y border-foreground/12">
                {engageRows.map((row) => (
                  <li key={row.title} className="py-6 md:py-7">
                    <h3 className="text-xl font-normal leading-tight text-foreground md:text-2xl">{row.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-foreground/75">{row.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-3">
                {[
                  { t: "Pre-event", d: "Positioning, audience targeting, partnership structuring and campaign design." },
                  { t: "Live event", d: "Onsite activations, exhibitions, demonstrations and engagement platforms." },
                  { t: "Post-event", d: "Lead capture, audience analytics and conversion strategies that extend value." },
                ].map((step) => (
                  <div key={step.t} className="border-t-2 border-primary pt-4">
                    <h4 className="text-base font-normal text-foreground">{step.t}</h4>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground/75">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  04 · NETWORKS: Credible communities. Navy ground.          */}
      {/* ============================================================ */}
      <section id="networks" className="scroll-mt-20 bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-normal tabular-nums text-primary [font-size:clamp(2rem,5vw,3.5rem)] leading-none">04</p>
              <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-background">
                Credible Networks
              </h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-primary">Curated Communities</p>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/75">
                Standing membership communities connecting leaders, experts and institutions across Africa's business and policy systems, where relationships compound between convenings.
              </p>
              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-background/60">For institutional partners</p>
                <ul className="space-y-2.5">
                  {[
                    "Direct access to decision makers",
                    "Market entry and expansion platforms",
                    "Partnership and ecosystem engagement",
                    "Product distribution and customer acquisition",
                    "Thought leadership and strategic positioning",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-light text-background/85">
                      <span className="mt-1.5 size-1 shrink-0 bg-primary" aria-hidden="true" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ol className="divide-y divide-white/15 border-y border-white/15">
                {networks.map((n, idx) => (
                  <li key={n.title} className="flex items-baseline gap-5 py-6 md:gap-8">
                    <span className="text-sm font-light tabular-nums text-background/40">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-normal leading-tight text-background md:text-2xl">{n.title}</h3>
                      <p className="mt-1.5 max-w-2xl text-sm font-light leading-relaxed text-background/70">{n.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <ConsultationDialog size="lg" triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-white hover:bg-primary/90">
                  Apply for Membership <ArrowUpRight className="ml-2 size-5" />
                </ConsultationDialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SPONSORSHIP: deep-red band (white passes AA at ~6.7:1)     */}
      {/* ============================================================ */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-white">
              Sponsorship and partnership
            </h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/85">
              Convert visibility into influence. Three tiers of integration across the convening system.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-white/25 bg-white/25 lg:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <div key={tier.tier} className="flex flex-col bg-primary p-8">
                <h3 className="text-2xl font-normal text-white">{tier.tier}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-white">{tier.subtitle}</p>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/85">{tier.focus}</p>
                <ul className="mt-6 flex-grow space-y-2.5 border-t border-white/25 pt-6">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm font-light text-white/90">
                      <span className="mt-1.5 size-1 shrink-0 bg-white" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
                <ConsultationDialog triggerClassName="mt-8 h-14 w-full rounded-none border-none bg-white text-base font-light text-foreground hover:bg-white/90">
                  Become a Partner
                </ConsultationDialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA: deep-red drench, white text, the engine close   */}
      {/* ============================================================ */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] [font-size:clamp(1.75rem,3.5vw,2.5rem)] text-white">
              Own the room where markets move.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90">
              Tell us the objective: convene, activate, host or join. We will map the right environment, audience and engagement model to deliver it with credibility and precision.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px border border-white/25 bg-white/25 md:grid-cols-5">
            {["Sponsor", "Partner", "Exhibit", "Speak", "Participate"].map((action) => (
              <li key={action} className="bg-primary p-5 text-center text-xs font-bold uppercase tracking-[0.15em] text-white">
                {action}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <a href="mailto:connect@credence.africa" className="flex items-center gap-3 text-base font-medium text-white hover:underline">
              <Mail className="size-5" /> connect@credence.africa
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-3 text-base font-medium text-white hover:underline">
              <Phone className="size-5" /> +254 719 468 240
            </a>
            <span className="flex items-center gap-3 text-base font-medium text-white">
              <Landmark className="size-5" /> Nairobi, Kenya
            </span>
          </div>

          <div className="mt-12 flex justify-center">
            <ConsultationDialog size="lg" triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90">
              Discuss Your Objectives
            </ConsultationDialog>
          </div>
        </div>
      </section>
    </div>
  );
}
