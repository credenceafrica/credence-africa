"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Target,
  BarChart,
  Mail,
  Phone,
  Rocket,
  Layout,
  Users,
  Handshake,
  Search,
  PieChart,
  Globe,
  Building,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const activationServices = [
  {
    title: "Event Strategy and Audience Design",
    desc: "We define audience segments, engagement pathways, and participation models that align event structure with commercial objectives and target market behavior.",
    icon: <Target className="size-8 text-primary" />,
  },
  {
    title: "Brand Positioning and Experiential Activation",
    desc: "We design environments where brands are experienced through interaction, demonstration, and direct engagement rather than passive visibility.",
    icon: <Zap className="size-8 text-primary" />,
  },
  {
    title: "Commercial Integration and Marketplace Design",
    desc: "We structure events to integrate sponsors, exhibitors, and partners into active commercial environments that support transactions and deal flow.",
    icon: <BarChart className="size-8 text-primary" />,
  },
];

const productLaunchServices = [
  {
    title: "Product Launch Events and Market Entry Campaigns",
    desc: "Launch platforms designed to introduce products, position brands, and drive early adoption across target audiences.",
  },
  {
    title: "Experiential Brand Activation and Customer Engagement",
    desc: "Interactive environments where customers engage directly with products, services, and brand narratives.",
  },
  {
    title: "Product Demonstrations and Showcase Platforms",
    desc: "Structured demonstration formats that support understanding, interest, and conversion.",
  },
];

const tradeExpoServices = [
  {
    title: "Exhibitions and Trade Show Platforms",
    desc: "Design and execution of expos that enable brands to showcase offerings and engage directly with target markets.",
  },
  {
    title: "Marketplaces and Buyer Seller Engagement Platforms",
    desc: "Curated environments where businesses connect with buyers, distributors, partners, and investors.",
  },
  {
    title: "Deal Rooms and Transaction Environments",
    desc: "Facilitated spaces designed to support negotiations, partnerships, and commercial transactions during and after the event.",
  },
];

const acquisitionServices = [
  {
    title: "Audience Acquisition and Lead Generation Events",
    desc: "Platforms designed to attract, qualify, and convert high intent audiences into customers, users, or participants.",
  },
  {
    title: "Community and Ecosystem Engagement Platforms",
    desc: "Events that connect brands and institutions with communities, networks, and ecosystem participants to build long term engagement.",
  },
  {
    title: "Regulatory and Stakeholder Engagement Platforms",
    desc: "Market facing environments where institutions engage regulators, partners, and stakeholders within commercial and compliance contexts.",
  },
];

export default function EngagePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
            alt="Market Activation Kenya"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                CREDENCE ENGAGE™
              </p>
              <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
                Market Activation and Audience Engagement Events in Kenya for Brands, Corporates, and Institutions
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-sm md:text-base leading-relaxed font-light">
                  CREDENCE ENGAGE™ designs and delivers market facing events in Kenya structured for customer acquisition, product adoption, stakeholder engagement, and commercial growth.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Each engagement is built as a conversion platform where brands, institutions, and partners engage directly with defined audiences across physical, hybrid, and digital environments.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Plan Your Activation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Launch Your Campaign
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
            We support corporates, growth businesses, financial institutions, development platforms, and ecosystem actors to activate markets, launch products, build pipelines, and create transaction environments that move audiences from awareness to participation.
          </p>
        </div>
      </section>

      {/* Market Activation Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight">
              Market Activation Event Management Services in Kenya
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              CREDENCE ENGAGE™ structures events as audience driven platforms segmented by purchasing power, decision authority, and participation intent. This ensures each event is aligned to clear commercial outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activationServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm p-8 space-y-4 hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-normal text-primary leading-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed flex-grow">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Launches */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">
                Product Launches and Brand Activation Events in Kenya
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Product launches and brand activations require controlled environments where messaging, experience, and audience engagement translate into adoption and market traction.
              </p>
              <div className="space-y-6">
                {productLaunchServices.map((service) => (
                  <div key={service.title} className="space-y-2 border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-normal">{service.title}</h3>
                    <p className="text-sm font-light text-foreground/70 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=2070&auto=format&fit=crop"
                alt="Product Launch Kenya"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade Expos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74ec0f7319e?q=80&w=2070&auto=format&fit=crop"
                alt="Trade Expos Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Trade Expos and Marketplace Event Platforms in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Trade expos and marketplace platforms create structured environments for visibility, pipeline development, and commercial engagement between businesses, buyers, investors, and partners.
              </p>
              <div className="grid gap-8">
                {tradeExpoServices.map((service) => (
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

      {/* Customer Acquisition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Customer Acquisition and Market Engagement Events in Kenya</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Events are structured to move audiences from awareness to participation through direct engagement, targeted messaging, and structured interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acquisitionServices.map((service) => (
              <div key={service.title} className="bg-white p-8 border hover:border-primary transition-colors flex flex-col h-full shadow-sm">
                <h3 className="text-xl font-normal text-primary mb-4">{service.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End to End */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">End to End Market Activation and Event Execution in Kenya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Pre Event Strategy and Campaign Development",
                desc: "Event positioning, audience targeting, partnership structuring, and campaign design aligned to market objectives.",
              },
              {
                title: "Live Event Execution and Audience Engagement",
                desc: "Delivery across onsite activations, exhibitions, demonstrations, and engagement platforms that drive interaction and participation.",
              },
              {
                title: "Post Event Conversion and Data Utilization",
                desc: "Lead capture, audience analytics, follow up systems, and conversion strategies that extend value beyond the event.",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 text-center">
                <div className="text-5xl font-bold text-primary opacity-10">{idx + 1}</div>
                <h3 className="text-xl font-normal leading-tight">{item.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight text-primary">
                Revenue Driven Event Models and Commercial Structuring
              </h2>
              <p className="text-lg opacity-70 font-light leading-relaxed">
                CREDENCE ENGAGE™ events are built around participation economics and campaign based monetization. Each event is structured to generate revenue and create commercial value across stakeholders.
              </p>
              <div className="grid gap-4">
                {[
                  "Event design and execution fees for brands and corporates",
                  "Campaign retainers for ongoing engagement programs",
                  "Ticketing and paid audience access where applicable",
                  "Exhibition and marketplace participation fees",
                  "Deal room participation and transaction facilitation",
                  "Data and lead generation monetization",
                  "Conversion into advisory, capital, and trade facilitation mandates"
                ].map((val) => (
                  <div key={val} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-light opacity-90">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 bg-white/5 border border-white/10 flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-normal">Who We Work With</h3>
              <div className="grid gap-4">
                {[
                  "Corporates and enterprise brands",
                  "Growth stage and scaling businesses",
                  "Financial institutions and investment platforms",
                  "Development partners and ecosystem programs",
                  "Trade bodies and industry associations",
                  "Startups launching products or entering markets",
                  "Platforms driving adoption, usage, or behavioral change"
                ].map((val) => (
                  <div key={val} className="text-sm font-light border-b border-white/10 pb-2 last:border-0">{val}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Why Brands Choose CREDENCE ENGAGE™</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                CREDENCE ENGAGE™ is designed for execution environments where visibility must translate into engagement and engagement into outcomes.
              </p>
              <div className="space-y-4">
                {[
                  "Audience first event architecture based on participation intent",
                  "Integration of brand experience with commercial outcomes",
                  "Strong execution across activations, expos, and marketplaces",
                  "Structured lead capture and audience analytics systems",
                  "Conversion focused design linking events to revenue and growth"
                ].map((strength) => (
                  <div key={strength} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-light">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-12 bg-muted flex flex-col justify-center text-center space-y-8 border-l-8 border-primary">
              <h3 className="text-2xl font-normal text-foreground">Plan a Market Activation, Product Launch, or Trade Event in Kenya</h3>
              <p className="text-sm font-light text-muted-foreground">Deliver measurable commercial outcomes through strategy, audience design, and execution.</p>
              <Button asChild size="lg" className="rounded-none px-12 h-16 font-bold text-lg">
                <Link href="/consult">Plan Your Activation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8">
            Activate Your Market with CREDENCE ENGAGE™
          </h2>
          <p className="text-lg opacity-80 font-light leading-relaxed mb-12">
            If your organization is planning a product launch, trade expo, brand activation, deal room, marketplace platform, or customer acquisition event in Kenya, we provide the strategy, audience design, and execution required to deliver measurable commercial outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button asChild size="lg" variant="secondary" className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-10">
              <Link href="/consult">Plan Your Activation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-white text-white hover:bg-white/10 h-14 px-10">
              <Link href="/consult">Discuss Your Campaign</Link>
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
              <Building className="size-5" /> Nairobi, Kenya
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
