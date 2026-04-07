
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ArrowUpRight, Zap, Target, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Activation and Event Management Kenya | Product Launches, Trade Expos, Brand Activations',
  description: 'Market activation and event management services in Kenya for product launches, trade expos, brand activations, deal rooms, and audience engagement platforms designed for customer acquisition and commercial growth.',
};

export default function EngagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
          alt="Market Activation Kenya"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Market Activation and Audience Engagement Events in Kenya for Brands, Corporates, and Institutions
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-primary">CREDENCE ENGAGE™</h2>
              <p className="text-xl font-light text-white/90">
                Market Activation and Event Management in Kenya for Product Launches, Trade Expos, and Brand Engagement
              </p>
              <p className="text-base text-white/70 max-w-2xl font-light leading-relaxed">
                CREDENCE ENGAGE™ designs and delivers market facing events in Kenya structured for customer acquisition, product adoption, stakeholder engagement, and commercial growth. Each engagement is built as a conversion platform where brands, institutions, and partners engage directly with defined audiences across physical, hybrid, and digital environments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-7 text-lg font-normal">
                <Link href="/consult">
                  Plan Your Activation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 rounded-none px-8 py-7 text-lg font-normal bg-transparent">
                <Link href="/consult">
                  Launch Your Campaign
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal">Market Activation Event Management Services in Kenya</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CREDENCE ENGAGE™ structures events as audience driven platforms segmented by purchasing power, decision authority, and participation intent. This ensures each event is aligned to clear commercial outcomes including acquisition, engagement, conversion, and retention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4 text-center md:text-left">
                <Target className="size-8 text-primary mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-2xl font-normal">Event Strategy and Audience Design</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center md:text-left">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We define audience segments, engagement pathways, and participation models that align event structure with commercial objectives and target market behavior.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4 text-center md:text-left">
                <Zap className="size-8 text-primary mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-2xl font-normal">Brand Positioning and Experiential Activation</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center md:text-left">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We design environments where brands are experienced through interaction, demonstration, and direct engagement rather than passive visibility.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4 text-center md:text-left">
                <BarChart className="size-8 text-primary mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-2xl font-normal">Commercial Integration and Marketplace Design</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-center md:text-left">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We structure events to integrate sponsors, exhibitors, and partners into active commercial environments that support transactions and deal flow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Launches */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Product Launches and Brand Activation Events in Kenya</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Product launches and brand activations require controlled environments where messaging, experience, and audience engagement translate into adoption and market traction.
              </p>
              <div className="space-y-10">
                <div className="space-y-2 border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-normal">Product Launch Events and Market Entry Campaigns</h3>
                  <p className="text-sm text-muted-foreground">Launch platforms designed to introduce products, position brands, and drive early adoption across target audiences.</p>
                </div>
                <div className="space-y-2 border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-normal">Experiential Brand Activation and Customer Engagement</h3>
                  <p className="text-sm text-muted-foreground">Interactive environments where customers engage directly with products, services, and brand narratives.</p>
                </div>
                <div className="space-y-2 border-l-2 border-primary pl-6">
                  <h3 className="text-xl font-normal">Product Demonstrations and Showcase Platforms</h3>
                  <p className="text-sm text-muted-foreground">Structured demonstration formats that support understanding, interest, and conversion.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
                alt="Product Launch Event"
                fill
                className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Trade Expos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal">Trade Expos and Marketplace Event Platforms in Kenya</h2>
            <p className="text-muted-foreground leading-relaxed">
              Trade expos and marketplace platforms create structured environments for visibility, pipeline development, and commercial engagement between businesses, buyers, investors, and partners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Exhibitions and Trade Show Platforms", desc: "Design and execution of expos that enable brands to showcase offerings and engage directly with target markets." },
              { title: "Marketplaces and Buyer Seller Engagement Platforms", desc: "Curated environments where businesses connect with buyers, distributors, partners, and investors." },
              { title: "Deal Rooms and Transaction Environments", desc: "Facilitated spaces designed to support negotiations, partnerships, and commercial transactions during and after the event." }
            ].map((item) => (
              <div key={item.title} className="p-10 border border-muted-foreground/20 hover:border-primary transition-all space-y-4 group">
                <h3 className="text-xl font-normal group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Acquisition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Customer Acquisition and Market Engagement Events in Kenya</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Events are structured to move audiences from awareness to participation through direct engagement, targeted messaging, and structured interaction.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                { title: "Audience Acquisition and Lead Generation Events", desc: "Platforms designed to attract, qualify, and convert high intent audiences into customers, users, or participants." },
                { title: "Community and Ecosystem Engagement Platforms", desc: "Events that connect brands and institutions with communities, networks, and ecosystem participants to build long term engagement." },
                { title: "Regulatory and Stakeholder Engagement Platforms", desc: "Market facing environments where institutions engage regulators, partners, and stakeholders within commercial and compliance contexts." }
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

      {/* End to End Execution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-16">End to End Market Activation and Event Execution in Kenya</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-px bg-muted-foreground/20 -z-10" />
            {[
              { title: "Pre Event Strategy and Campaign Development", desc: "Event positioning, audience targeting, partnership structuring, and campaign design aligned to market objectives." },
              { title: "Live Event Execution and Audience Engagement", desc: "Delivery across onsite activations, exhibitions, demonstrations, and engagement platforms that drive interaction and participation." },
              { title: "Post Event Conversion and Data Utilization", desc: "Lead capture, audience analytics, follow up systems, and conversion strategies that extend value beyond the event." }
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

      {/* Revenue Driven Models */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Revenue Driven Event Models and Commercial Structuring</h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                CREDENCE ENGAGE™ events are built around participation economics and campaign based monetization. Each event is structured to generate revenue, support brand objectives, and create commercial value across stakeholders.
              </p>
            </div>
            <div className="bg-white/5 p-10 md:p-16 border border-white/10 rounded-none">
              <h3 className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold mb-10">Revenue Streams</h3>
              <ul className="grid gap-5">
                {[
                  "Event design and execution fees for brands and corporates",
                  "Campaign retainers for ongoing engagement programs",
                  "Ticketing and paid audience access where applicable",
                  "Exhibition and marketplace participation fees",
                  "Deal room participation and transaction facilitation",
                  "Data and lead generation monetization",
                  "Conversion into advisory, capital, and trade facilitation mandates"
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 text-sm text-white/80 font-light">
                    <ArrowRight className="size-4 text-primary mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal">Who We Work With</h2>
            <p className="text-muted-foreground font-light">CREDENCE ENGAGE™ supports organizations that require direct market access, customer engagement, and commercial activation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Corporates and enterprise brands",
              "Growth stage and scaling businesses",
              "Financial institutions and investment platforms",
              "Development partners and ecosystem programs",
              "Trade bodies and industry associations",
              "Startups launching products or entering markets",
              "Platforms driving adoption, usage, or behavioral change"
            ].map(item => (
              <div key={item} className="px-8 py-4 bg-muted/20 border border-muted-foreground/10 text-sm font-light hover:border-primary transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brands Choose */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-normal">Why Brands Choose CREDENCE ENGAGE™</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                CREDENCE ENGAGE™ is designed for execution environments where visibility must translate into engagement and engagement into outcomes. The approach integrates audience design, experiential activation, and commercial structuring into a single delivery model.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary text-center lg:text-left">Key Strengths</h3>
              <div className="grid gap-4">
                {[
                  { title: "Audience first event architecture", desc: "Based on participation intent." },
                  { title: "Integration of brand experience", desc: "With commercial outcomes." },
                  { title: "Strong execution", desc: "Across activations, expos, and marketplaces." },
                  { title: "Structured lead capture", desc: "And audience analytics systems." },
                  { title: "Conversion focused design", desc: "Linking events to revenue and growth." }
                ].map(item => (
                  <div key={item.title} className="p-8 bg-white border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow space-y-1">
                    <h4 className="text-base font-normal">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Plan a Market Activation, Product Launch, or Trade Event in Kenya
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                If your organization is planning a product launch, trade expo, brand activation, deal room, marketplace platform, or customer acquisition event in Kenya, CREDENCE ENGAGE™ provides the strategy, audience design, and execution required to deliver measurable commercial outcomes.
              </p>
            </div>
            <div className="bg-white p-10 md:p-16 space-y-10 shadow-2xl text-black rounded-none">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal">Start Your Activation Plan</h3>
                <p className="text-muted-foreground text-sm font-light">A senior advisor will contact you within 24 hours to discuss your specific campaign objectives.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none py-10 text-lg font-normal bg-primary hover:bg-primary/90 text-white">
                  <Link href="/consult">Plan Your Activation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full rounded-none py-10 text-lg font-normal border-primary text-primary hover:bg-primary/10">
                  <Link href="/consult">Discuss Your Campaign</Link>
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
    </div>
  );
}
