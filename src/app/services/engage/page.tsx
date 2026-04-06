
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Megaphone, 
  Phone, 
  Mail, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Zap, 
  Users, 
  BarChart, 
  Link as LinkIcon,
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const modelPhases = [
  {
    title: "1. Pre-Event Positioning",
    subtitle: "📣 Build Visibility Before You Step on Stage",
    description: "Build brand visibility, establish credibility, and spark anticipation before the event even begins.",
    activities: [
      "Co-branded thought leadership (articles, op-eds, interviews)",
      "Targeted influencer engagement",
      "Custom invitations & guest curation",
      "Stakeholder briefings",
      "Multi-channel campaign build-up"
    ]
  },
  {
    title: "2. Live Event Visibility",
    subtitle: "🎤 Maximize Impact During the Moment",
    description: "Maximize your impact and engagement in real-time, capturing leads and making key connections.",
    activities: [
      "Featured speaking roles or panel curation",
      "Branded on-site activations (lounges, booths, showcases)",
      "Facilitated introductions to key decision-makers",
      "High-trust networking experiences",
      "Lead capture & interactive engagement tools",
      "VIP access to curated policy circles"
    ]
  },
  {
    title: "3. Post-Event Momentum",
    subtitle: "♻️ Extend Influence Long After the Event Ends",
    description: "Sustain influence, deepen trust, and convert awareness into lasting brand authority.",
    activities: [
      "Branded recap videos & highlight reels",
      "Follow-up webinars & masterclasses",
      "Media placements & thought leadership spotlights",
      "Lead intel engagement & analytics reports",
      "Evergreen content repackaged for campaigns"
    ]
  }
];

const whyWorks = [
  { title: "Strategic", description: "Every phase drives measurable engagement.", icon: <Target className="size-6" /> },
  { title: "Continuous", description: "Builds lasting presence, not one-day impressions.", icon: <TrendingUp className="size-6" /> },
  { title: "Insightful", description: "Real-time reporting, lead tracking, content ROI.", icon: <BarChart className="size-6" /> },
  { title: "Tailored", description: "Customized by sector, audience, and campaign goal.", icon: <ShieldCheck className="size-6" /> }
];

const partnershipTiers = [
  {
    title: "Strategic Partner",
    description: "Co-create and lead a flagship platform with comprehensive, year-round visibility.",
    features: [
      "Keynote & Agenda-Setting Role",
      "Lead Partner Branding Across Assets",
      "Curated 1-on-1 Introductions",
      "Custom Content Creation (Reports, Videos)",
      "Lead Generation & Analytics Dashboard",
      "VIP Access to Exclusive Networking"
    ]
  },
  {
    title: "Influence Partner",
    description: "Shape the conversation with targeted visibility and strategic positioning.",
    features: [
      "Panel Speaking or Moderation Opportunity",
      "Prominent Branding on Event Materials",
      "Access to VIP Networking Sessions",
      "Content Co-Creation & Feature",
      "Lead Capture & Contact Sharing",
      "Social Media & Press Release Feature"
    ]
  },
  {
    title: "Visibility Partner",
    description: "Establish essential brand presence at key audience touchpoints.",
    features: [
      "Brand Visibility on Website & Materials",
      "Exhibition Space / Digital Booth",
      "General Networking Access",
      "Logo Placement in Communications",
      "Social Media Mentions",
      "Access to Post-Event Summary"
    ]
  }
];

export default function EngagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="/engage.webp"
          alt="Lead, Connect & Influence"
          fill
          className="object-cover"
          priority
        />
        {/* Cinematic Dark Overlay - Darkened for high text visibility */}
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-tight">
              Lead, Connect & Influence in Africa.
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl">
              We help brands shape conversations, influence decisions, and drive measurable impact across Africa’s most dynamic sectors.
            </p>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-8 text-lg font-medium">
                <Link href="/consult">
                  Partner With Us <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/20 rounded-none px-4 border-none text-lg font-medium">
                <Link href="https://engage.credence.africa/" target="_blank" className="flex items-center">
                  View Events <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Influence Model - Core Phases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Cred360 Influence Model</h2>
            <h3 className="text-3xl md:text-4xl font-normal mb-6">A Full-Cycle System for Visibility</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our model ensures you build a lasting presence, not just one-day impressions. We manage the entire strategic lifecycle of your influence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modelPhases.map((phase) => (
              <Card key={phase.title} className="bg-white border-none shadow-sm rounded-none p-8 space-y-6 hover:shadow-md transition-all duration-300">
                <div className="space-y-2">
                  <h4 className="font-normal text-xl text-primary">{phase.title}</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{phase.subtitle}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                <ul className="space-y-3 pt-4 border-t">
                  {phase.activities.map(activity => (
                    <li key={activity} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cred360 Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorks.map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-normal text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influence. Not Just Impressions. */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">Influence.<br />Not Just Impressions.</h2>
              <div className="relative p-8 bg-white border-l-4 border-primary">
                <p className="text-xl italic font-light leading-relaxed text-foreground/80">
                  "We don't play to the crowd—we build the room. And we make sure you belong in it."
                </p>
                <p className="mt-4 font-bold text-primary">— Credence Engage Strategy</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you work with Credence Engage, you're not just booking an event—you're entering a high-trust platform built for visibility that matters and access that converts.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                { title: "Direct Access to Power Circles", desc: "Policy shapers, investors, regulators, and market leaders.", icon: <Users className="size-6" /> },
                { title: "Visibility That Lasts", desc: "Across platforms, timelines, and curated ecosystems.", icon: <Zap className="size-6" /> },
                { title: "Events Engineered for Strategy", desc: "Built for outcome and alignment, not spectacle.", icon: <ShieldCheck className="size-6" /> },
                { title: "ROI You Can Measure", desc: "Lead capture, content assets, and brand lift metrics.", icon: <BarChart className="size-6" /> }
              ].map((benefit) => (
                <div key={benefit.title} className="flex gap-6 p-6 border group hover:border-primary transition-colors">
                  <div className="text-primary shrink-0">{benefit.icon}</div>
                  <div className="space-y-1">
                    <h4 className="font-normal text-lg">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Partnerships</h2>
            <h3 className="text-3xl md:text-4xl font-normal">Sponsorship & Strategic Partnerships</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Convert visibility into influence by partnering with Africa's premier strategic events platform. Our partnerships are designed for strategic alignment, not just impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier) => (
              <Card key={tier.title} className="flex flex-col rounded-none border-2 hover:border-primary transition-colors group">
                <div className="p-8 space-y-6 flex-grow">
                  <h4 className="text-xl font-normal leading-tight">{tier.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 pt-6 border-t">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <ArrowRight className="size-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button asChild className="w-full rounded-none font-bold">
                    <Link href="/consult">Become a {tier.title.split(' ')[0]} Partner</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Contact Us Today</h2>
              <h3 className="text-4xl md:text-5xl font-normal leading-tight">
                Let’s Build Strategic<br />Influence Together.
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Shape Conversations. Own the Room. Lead the Narrative. Let's design a strategic visibility and influence plan that aligns your mission with Africa's most catalytic opportunities.
              </p>
            </div>

            <Card className="p-8 md:p-12 shadow-xl rounded-none border-none bg-white text-black">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-4 text-xl">
                    <a href="mailto:connect@credence.africa" className="flex items-center justify-center lg:justify-start gap-4 hover:text-primary transition-colors">
                      <Mail className="size-6 text-primary" /> connect@credence.africa
                    </a>
                    <span className="hidden lg:inline text-muted-foreground/30">|</span>
                    <a href="tel:+254719468240" className="flex items-center justify-center lg:justify-start gap-4 hover:text-primary transition-colors">
                      <Phone className="size-6 text-primary" /> +254 719 468 240
                    </a>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-8 text-lg font-bold">
                  <Link href="/consult">Start a Conversation</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
