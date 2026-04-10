"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Landmark,
  ShieldCheck,
  TrendingUp,
  FileText,
  Search,
  Zap,
  Mail,
  Phone,
  Layout,
  MessageSquare,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalEvent, getUpcomingEvents } from "@/lib/external-data";

const conferenceServices = [
  {
    title: "Conferences and Summits",
    desc: "Design and delivery of conferences that position organizations at the center of sector conversations, market visibility, and executive engagement with partners and stakeholders.",
  },
  {
    title: "Policy Forums and Sector Convenings",
    desc: "Structured environments that bring together regulators, industry leaders, associations, and development actors for dialogue, coordination, and sector alignment.",
  },
  {
    title: "Business Events and High Level Convenings",
    desc: "Coordination of executive events where audience composition, flow, and experience directly influence the quality of engagement and decision making.",
  },
];

const agmServices = [
  {
    title: "AGM Planning and Delivery",
    desc: "End to end planning covering agenda structuring, participant coordination, compliance with meeting protocols, and controlled execution environments.",
  },
  {
    title: "Shareholder Meetings",
    desc: "Structured delivery for shareholder meetings where communication clarity, participation discipline, and documentation standards are essential.",
  },
  {
    title: "Board Meetings",
    desc: "Support for governance environments requiring executive level coordination, discretion, and alignment with institutional standards.",
  },
];

const investorServices = [
  {
    title: "Investor Briefings and Analyst Sessions",
    desc: "Event design focused on communicating performance, strategy, and outlook with clarity, structure, and professional delivery.",
  },
  {
    title: "Executive Communication Forums",
    desc: "High level environments that support leadership visibility, stakeholder alignment, and institutional positioning.",
  },
  {
    title: "Investor Relations and Stakeholder Meetings",
    desc: "Coordination of formal engagement platforms that strengthen investor confidence and reinforce institutional credibility.",
  },
];

const saccoServices = [
  {
    title: "SACCO Delegate Meetings",
    desc: "Planning and delivery of delegate forums with defined participation structures, agenda discipline, and coordinated execution.",
  },
  {
    title: "SACCO Members Meetings",
    desc: "Management of members meetings with a focus on accessibility, communication clarity, and a consistent participant experience.",
  },
  {
    title: "SACCO Annual Meetings and Member Forums",
    desc: "Support for cooperative institutions seeking to strengthen engagement, governance processes, and member confidence through well executed forums.",
  },
];

const policyServices = [
  {
    title: "Policy Dialogue and Consultation Forums",
    desc: "Structured platforms for engaging regulators, institutions, and sector actors around reform, governance, and implementation priorities.",
  },
  {
    title: "Stakeholder Engagement and Public Forums",
    desc: "Event environments designed to manage broad participation while maintaining coherence and productive dialogue.",
  },
  {
    title: "Regulatory and Multistakeholder Convenings",
    desc: "Coordination of forums where multiple actors engage around standards, compliance, sector coordination, and institutional alignment.",
  },
];

const roundtableServices = [
  {
    title: "Executive Roundtables",
    desc: "Curated sessions that bring together decision makers for focused dialogue, insight exchange, and relationship building.",
  },
  {
    title: "Board Retreats and Strategy Sessions",
    desc: "Offsite environments designed to support leadership alignment, strategic reflection, and structured decision making.",
  },
  {
    title: "Private Leadership and High Trust Forums",
    desc: "Invitation only convenings where discretion, audience quality, and institutional relevance define the experience.",
  },
];

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
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
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
            <div className="space-y-4">
              <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                CREDENCE CONVENE™
              </p>
              <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
                Corporate Event Management Services in Kenya
              </h1>
              <p className="text-lg md:text-xl font-normal text-muted-foreground italic">
                Corporate AGMs, Conferences, Investor Briefings, and Policy Forums
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-sm md:text-base leading-relaxed font-light">
                  CREDENCE CONVENE™ designs and delivers corporate and institutional events in Kenya structured for executive communication, stakeholder alignment, governance credibility, and measurable outcomes.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Each engagement is built as a decision environment where participation, messaging, and execution support institutional priorities beyond the event itself.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Plan Your Event <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Discuss Your Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-lg md:text-xl text-center font-light leading-relaxed">
            We work with corporates, financial institutions, SACCOs, associations, regulators, and development partners to plan and execute conferences, corporate AGMs, investor briefings, policy forums, SACCO delegate and members meetings, executive roundtables, board retreats, and stakeholder engagement platforms aligned to strategic objectives.
          </p>
        </div>
      </section>

      {/* Conference Planning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                Conference Planning and Event Management Services in Kenya
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We design conferences and summits as structured platforms for sector positioning, institutional visibility, and stakeholder engagement.
              </p>
              <div className="space-y-6">
                {conferenceServices.map((service) => (
                  <div key={service.title} className="space-y-2">
                    <h3 className="text-xl font-normal text-primary">{service.title}</h3>
                    <p className="text-sm font-light text-foreground/70 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74ec0f7319e?q=80&w=2070&auto=format&fit=crop"
                alt="Conference Planning Kenya"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AGM Planning */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal">AGM Planning Services in Kenya</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Corporate AGMs operate as formal governance platforms where accountability, reporting, and shareholder communication must be delivered with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agmServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm p-8 space-y-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-normal text-primary leading-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Briefings */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Investor Briefings Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Investor Briefing Events in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Investor events are high stakes communication environments where perception, clarity, and confidence shape stakeholder decisions.
              </p>
              <div className="grid gap-8">
                {investorServices.map((service) => (
                  <div key={service.title} className="flex gap-4">
                    <div className="w-1 h-auto bg-primary shrink-0" />
                    <div className="space-y-1">
                      <h3 className="text-lg font-normal">{service.title}</h3>
                      <p className="text-sm font-light text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SACCO Meetings */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">SACCO Delegates and Sacco Members Meetings in Kenya</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Governance critical environments where participation, communication, and trust directly affect institutional stability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saccoServices.map((service) => (
              <div key={service.title} className="bg-white p-8 border hover:border-primary transition-colors flex flex-col h-full">
                <h3 className="text-xl font-normal text-primary mb-4">{service.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Forums */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Policy Forums and Stakeholder Engagement Events in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Platforms that support multistakeholder dialogue and regulatory consultation while maintaining clarity, neutrality, and direction.
              </p>
              <div className="space-y-6">
                {policyServices.map((service) => (
                  <div key={service.title} className="flex gap-4 items-start">
                    <CheckCircle2 className="size-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-normal">{service.title}</h3>
                      <p className="text-sm font-light text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted p-12 border-l-8 border-primary">
              <h3 className="text-2xl font-normal mb-6">Executive Roundtables and Board Retreats in Kenya</h3>
              <p className="text-sm font-light text-muted-foreground mb-8 leading-relaxed">
                Executive convenings operate in high trust environments where depth, alignment, and strategic engagement determine value.
              </p>
              <div className="space-y-6">
                {roundtableServices.map((service) => (
                  <div key={service.title} className="pb-4 border-b border-border/50 last:border-0">
                    <h4 className="font-normal text-lg leading-tight mb-2">{service.title}</h4>
                    <p className="text-xs font-light text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center">Event Management Services for Institutions</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground font-light text-center mb-12">
              We support organizations operating in environments where stakeholder coordination, communication, and institutional credibility influence outcomes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Corporates and private companies",
                "Listed companies and issuers",
                "Financial institutions",
                "SACCOs and cooperatives",
                "Associations and organizations",
                "Regulators and public sector",
                "Development partners",
                "Professional networks",
              ].map((val) => (
                <div key={val} className="p-4 border bg-white text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center">
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* End to End */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">End to End Event Planning, Strategy, and Delivery in Kenya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Event Strategy and Audience Architecture",
                desc: "Definition of purpose, stakeholder mapping, invitation logic, and program structure to ensure relevance and participation quality.",
              },
              {
                title: "Event Execution and Delivery",
                desc: "Full coordination across logistics, production, protocol, scheduling, and participant experience with a focus on precision and control.",
              },
              {
                title: "Post Event Continuity and Reporting",
                desc: "Structured follow through including reporting, stakeholder engagement, and transition into advisory or institutional engagement.",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-5xl font-bold text-primary opacity-10">{idx + 1}</div>
                <h3 className="text-xl font-normal leading-tight">{item.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                Why Organizations Choose CREDENCE CONVENE™ in Kenya
              </h2>
              <p className="text-lg opacity-70 font-light leading-relaxed">
                Organizations engage us where convenings must deliver alignment, credibility, and institutional traction.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic stakeholder mapping and audience architecture",
                  "Program design aligned to governance and sector priorities",
                  "High trust audience curation across institutions and leadership",
                  "Execution discipline across logistics, protocol, and coordination",
                  "Continuity into advisory, research, and institutional engagement",
                ].map((strength) => (
                  <div key={strength} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-light">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-12 bg-white/5 border border-white/10 flex flex-col justify-center text-center space-y-8">
              <h3 className="text-2xl font-normal">Plan a Corporate AGM, Conference, or Stakeholder Forum</h3>
              <p className="text-sm font-light opacity-60">Identify the right event, audience, and engagement model aligned to your objectives.</p>
              <Button asChild size="lg" className="rounded-none px-12 h-16 font-bold text-lg">
                <Link href="/consult">Plan Your Event</Link>
              </Button>
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
            <Button asChild variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-8">
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

      {/* Final Conversion Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8">
            Plan a Corporate AGM, Conference, Investor Briefing, or Stakeholder Forum in Kenya
          </h2>
          <p className="text-lg opacity-80 font-light leading-relaxed mb-12">
            If your organization is planning a corporate AGM, conference, investor briefing, policy forum, SACCO delegate meeting, board retreat, or institutional convening, CREDENCE CONVENE™ provides the strategy, structure, and execution required to deliver it with credibility and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button asChild size="lg" variant="secondary" className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-10">
              <Link href="/consult">Plan Your Event</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-white text-white hover:bg-white/10 h-14 px-10">
              <Link href="/consult">Discuss Your Event</Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white border-t border-white/20 pt-12">
            <a href="mailto:connect@credence.africa" className="flex items-center gap-3 hover:underline">
              <Mail className="size-5" /> connect@credence.africa
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-3 hover:underline">
              <Phone className="size-5" /> +254 719 468 240
            </a>
            <span className="flex items-center gap-3">
              <Landmark className="size-5" /> Nairobi, Kenya
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
