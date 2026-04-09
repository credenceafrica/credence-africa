"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ArrowUpRight, Zap, Target, Landmark, Users, Search, Share2, ExternalLink } from "lucide-react";
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
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
          alt="Corporate Event Management Kenya"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-8">
            <h1 className="leading-tight">
              Corporate Event Management Services in Kenya
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 text-white/90 font-light">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-normal text-primary">CREDENCE CONVENE™</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Design and delivery of institutional events structured for executive communication, stakeholder alignment, and governance credibility.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/20 pl-8">
                <p className="text-xl md:text-2xl font-normal text-primary">Decision Environments</p>
                <p className="text-base md:text-lg leading-relaxed">
                  We build forums where participation and messaging support institutional priorities beyond the event itself, from AGMs to Policy Forums.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-7 text-lg font-normal">
                <Link href="/consult">
                  Plan Your Event <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 rounded-none px-8 py-7 text-lg font-normal bg-transparent">
                <Link href="/consult">
                  Discuss Your Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Planning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal">Conference Planning and Event Management Services in Kenya</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design conferences and summits as structured platforms for sector positioning, institutional visibility, and stakeholder engagement. Each conference is designed to convene the right participants, frame the right conversations, and create continuity into partnerships, transactions, or policy outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Conferences and Summits", 
                icon: <Share2 className="size-8 text-primary" />,
                desc: "Design and delivery of conferences that position organizations at the center of sector conversations, market visibility, and executive engagement with partners and stakeholders." 
              },
              { 
                title: "Policy Forums and Sector Convenings", 
                icon: <Landmark className="size-8 text-primary" />,
                desc: "Structured environments that bring together regulators, industry leaders, associations, and development actors for dialogue, coordination, and sector alignment." 
              },
              { 
                title: "Business Events and High Level Convenings", 
                icon: <Users className="size-8 text-primary" />,
                desc: "Coordination of executive events where audience composition, flow, and experience directly influence the quality of engagement and decision making." 
              }
            ].map((item) => (
              <Card key={item.title} className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-2xl font-normal leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-normal">AGM Planning Services in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Corporate AGMs operate as formal governance platforms where accountability, reporting, and shareholder communication must be delivered with precision. The event structure must support clarity, order, and institutional confidence at every stage of execution.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "AGM Planning and Delivery", desc: "End to end planning covering agenda structuring, participant coordination, compliance with meeting protocols, and controlled execution environments." },
                  { title: "Shareholder Meetings", desc: "Structured delivery for shareholder meetings where communication clarity, participation discipline, and documentation standards are essential." },
                  { title: "Board Meetings", desc: "Support for governance environments requiring executive level coordination, discretion, and alignment with institutional standards." }
                ].map((item) => (
                  <div key={item.title} className="space-y-2 border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-normal">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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

      {/* Investor Briefing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal">Investor Briefing Events in Kenya</h2>
            <p className="text-muted-foreground leading-relaxed">
              Investor events are high stakes communication environments where perception, clarity, and confidence shape stakeholder decisions. Delivery must align messaging, audience expectations, and executive presentation within a controlled and credible format.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Investor Briefings and Analyst Sessions", desc: "Event design focused on communicating performance, strategy, and outlook with clarity, structure, and professional delivery." },
              { title: "Executive Communication Forums", desc: "High level environments that support leadership visibility, stakeholder alignment, and institutional positioning." },
              { title: "Investor Relations and Stakeholder Meetings", desc: "Coordination of formal engagement platforms that strengthen investor confidence and reinforce institutional credibility." }
            ].map((item) => (
              <div key={item.title} className="p-10 border border-muted-foreground/20 hover:border-primary transition-all space-y-4 group">
                <h3 className="text-xl font-normal group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SACCO Meetings */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">SACCO Delegates and Sacco Members Meetings in Kenya</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                SACCO delegate and members meetings are governance critical environments where participation, communication, and trust directly affect institutional stability. These meetings require structured formats that support orderly engagement and clear decision processes.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                { title: "SACCO Delegate Meetings", desc: "Planning and delivery of delegate forums with defined participation structures, agenda discipline, and coordinated execution." },
                { title: "SACCO Members Meetings", desc: "Management of members meetings with a focus on accessibility, communication clarity, and a consistent participant experience." },
                { title: "SACCO Annual Meetings and Member Forums", desc: "Support for cooperative institutions seeking to strengthen engagement, governance processes, and member confidence through well executed forums." }
              ].map(item => (
                <div key={item.title} className="flex gap-6 p-8 bg-white border border-transparent hover:border-primary transition-all group shadow-sm">
                  <div className="text-primary mt-1 shrink-0"><CheckCircle2 className="size-6 opacity-40 group-hover:opacity-100 transition-opacity" /></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-normal">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy & Stakeholder */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-normal">Policy Forums and Stakeholder Engagement Events in Kenya</h2>
            <p className="text-lg text-muted-foreground mt-4 font-light">
              Policy forums require environments that can support multistakeholder dialogue, regulatory consultation, and institutional alignment. The structure of the convening must enable participation while maintaining clarity, neutrality, and direction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Policy Dialogue and Consultation Forums", icon: <Target /> },
              { title: "Stakeholder Engagement and Public Forums", icon: <Users /> },
              { title: "Regulatory and Multistakeholder Convenings", icon: <Landmark /> }
            ].map((item) => (
              <div key={item.title} className="p-8 border hover:bg-accent/50 transition-all flex flex-col items-center text-center gap-4">
                <div className="text-primary">{item.icon}</div>
                <h3 className="text-lg font-normal">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Roundtables */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Executive Roundtables and Board Retreats in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Executive convenings operate in high trust environments where the quality of discussion, confidentiality, and participant relevance determine value. These formats are designed for depth, alignment, and strategic engagement rather than scale.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { title: "Executive Roundtables", desc: "Curated sessions that bring together decision makers for focused dialogue, insight exchange, and relationship building." },
                { title: "Board Retreats and Strategy Sessions", desc: "Offsite environments designed to support leadership alignment, strategic reflection, and structured decision making." },
                { title: "Private Leadership and High Trust Forums", desc: "Invitation only convenings where discretion, audience quality, and institutional relevance define the experience." }
              ].map(item => (
                <div key={item.title} className="p-6 bg-white border-l-4 border-primary shadow-sm space-y-1">
                  <h4 className="text-base font-normal">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal">Event Management Services in Kenya for Corporates, Institutions, and Associations</h2>
            <p className="text-muted-foreground font-light">We support organizations operating in environments where stakeholder coordination, communication, and institutional credibility influence outcomes.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Corporates and private companies",
              "Listed companies and issuers",
              "Financial institutions and investment platforms",
              "SACCOs and cooperative institutions",
              "Associations and membership organizations",
              "Regulators and public sector institutions",
              "Development partners and donor programs",
              "Sector alliances and professional networks"
            ].map(item => (
              <div key={item} className="px-8 py-4 bg-muted/20 border border-muted-foreground/10 text-sm font-light hover:border-primary transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End to End Planning */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-16">End to End Event Planning, Strategy, and Delivery in Kenya</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              { title: "Event Strategy and Audience Architecture", desc: "Definition of purpose, stakeholder mapping, invitation logic, and program structure to ensure relevance and participation quality." },
              { title: "Event Execution and Delivery", desc: "Full coordination across logistics, production, protocol, scheduling, and participant experience with a focus on precision and control." },
              { title: "Post Event Continuity and Reporting", desc: "Structured follow through including reporting, stakeholder engagement, and transition into advisory or institutional engagement where required." }
            ].map((step, idx) => (
              <div key={step.title} className="space-y-6">
                <div className="size-12 rounded-none bg-primary text-white flex items-center justify-center mx-auto text-xl font-normal">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-normal">{step.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">Why Organizations Choose CREDENCE CONVENE™ in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Organizations engage CREDENCE CONVENE™ where convenings must deliver alignment, credibility, and institutional traction. The approach combines strategic design with disciplined execution in environments where participation quality and outcomes matter.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Strategic stakeholder mapping and audience architecture",
                "Program design aligned to governance and sector priorities",
                "High trust audience curation across institutions and leadership",
                "Execution discipline across logistics, protocol, and coordination",
                "Continuity into advisory, research, and institutional engagement"
              ].map((strength, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-border/50">
                  <div className="text-primary font-bold text-lg opacity-40">{(idx + 1).toString().padStart(2, '0')}</div>
                  <p className="text-sm font-normal">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Plan a Corporate AGM, Conference, Investor Briefing, or Stakeholder Forum in Kenya
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl">
                If your organization is planning a corporate AGM, conference, investor briefing, policy forum, SACCO delegate meeting, SACCO members meeting, executive roundtable, board retreat, or institutional convening in Kenya, CREDENCE CONVENE™ provides the strategy, structure, and execution required to deliver it with credibility and precision.
              </p>
            </div>
            <div className="bg-white p-10 md:p-16 space-y-10 shadow-2xl text-black rounded-none">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal">Start Your Event Plan</h3>
                <p className="text-muted-foreground text-sm font-light">A senior advisor will contact you within 24 hours to discuss your specific event objectives.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none py-10 text-lg font-normal bg-primary hover:bg-primary/90 text-white">
                  <Link href="/consult">Plan Your Event</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full rounded-none py-10 text-lg font-normal border-primary text-primary hover:bg-primary/10">
                  <Link href="/consult">Discuss Your Event</Link>
                </Button>
              </div>
              <div className="pt-8 border-t space-y-3 text-center text-xs">
                <p className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Direct Contact</p>
                <p className="text-sm font-light">connect@credence.africa | +254 719 468 240</p>
                <p className="text-muted-foreground">Applewood Adams, Ngong Road, Nairobi, Kenya</p>
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
              <h2 className="text-2xl md:text-3xl font-normal">Upcoming & Live Events</h2>
              <p className="text-muted-foreground text-sm">Real-time opportunities to engage across our institutional ecosystem.</p>
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