
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Coins, Globe, Megaphone, Phone, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    title: "Pan-African Perspective",
    description: "Operating across multiple jurisdictions at the nexus of capital, compliance, governance, and policy."
  },
  {
    title: "Growth Catalysts",
    description: "Unlocking capital, structuring entities, navigating regulation, and scaling impact."
  },
  {
    title: "Execution Partners",
    description: "Delivering actionable strategies that withstand scrutiny in high-complexity environments."
  }
];

const solutions = [
  "Capital and investment readiness for high-growth ventures",
  "Regulatory licensing and multi-agency compliance strategy",
  "Market entry across East Africa and diaspora re-entry structuring",
  "Cross-border tax and entity structuring",
  "Government relations, public policy tracking, and advocacy",
  "Monetization of IP, content, brand, and digital assets",
  "Succession, legacy, and trust planning for entrepreneurs and families"
];

const featuredSolutions = [
  {
    title: "Capital Raising & Investment Structuring",
    description: "Unlock capital and structure for impact across markets. We design investment-ready pipelines and mobilize blended finance.",
    icon: <Coins className="size-8 text-primary" />
  },
  {
    title: "Public Affairs & Policy Advocacy",
    description: "Shape policy, structure influence, and strengthen institutions. We provide regulatory navigation and advocacy campaigns.",
    icon: <Megaphone className="size-8 text-primary" />
  },
  {
    title: "Trade & Market Entry Facilitation",
    description: "Enter markets confidently with strategic positioning. We support cross-border structuring and trade alignment.",
    icon: <Globe className="size-8 text-primary" />
  }
];

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Background Image with Content Box Overlay */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/advisory.jpg"
            alt="Strategic Advisory"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Box Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="bg-white p-8 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-10">
            <h1 className="text-foreground leading-tight">
              Trade and Growth Advisory in Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
              <div className="space-y-3">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Strategic Positioning
                </p>
                <p className="text-base leading-relaxed font-light">
                  We provide the strategic blueprints for businesses to scale across Africa's growth markets, navigating cross-border trade and AfCFTA alignment.
                </p>
              </div>
              <div className="space-y-3 lg:border-l lg:pl-8">
                <p className="text-sm text-primary font-bold tracking-widest uppercase">
                  Growth Catalysts
                </p>
                <p className="text-base leading-relaxed font-light">
                  Unlocking capital, structuring entities, and navigating complex jurisdictional entry for sustainable expansion.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult">
                  Book a Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult">
                  Discuss Your Growth
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-normal mb-6">The Growth Partner</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Credence Africa is a pan-African strategic advisory platform operating at the intersection of capital, governance, compliance, and public affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-white border-none shadow-sm rounded-none p-8 space-y-4 hover:shadow-md transition-all duration-300">
                <h4 className="font-normal text-xl text-primary">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide - Strategy & Solutions */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal text-foreground">What We Provide</h2>
              <div className="relative p-8 bg-white border-l-4 border-primary">
                <p className="text-xl italic font-light leading-relaxed text-foreground/80">
                  "We combine deep local understanding with global-standard execution to help clients navigate Africa's opportunity zones."
                </p>
                <p className="mt-4 font-bold text-primary">— Credence Advisory Strategy</p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-normal mb-8 text-foreground">What We Solve</h3>
                <div className="grid gap-6">
                  {solutions.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 group">
                      <div className="text-primary font-bold text-lg opacity-40 group-hover:opacity-100 transition-opacity tabular-nums shrink-0">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <p className="text-foreground/90 leading-tight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise - Featured Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-normal mb-4">Featured Solutions</h3>
            <p className="text-muted-foreground">Strategic. Sector-Driven. Built for Execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => (
              <Card key={solution.title} className="flex flex-col rounded-none border-2 hover:border-primary transition-colors group">
                <div className="p-8 space-y-6 flex-grow">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h4 className="text-xl font-normal leading-tight text-foreground">{solution.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button variant="link" className="p-0 text-primary font-bold group-hover:underline">
                    Learn More <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-normal leading-tight text-foreground">
                Let’s Shape Africa’s<br />Growth Frontier<br />Together.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Whether you are raising capital, structuring across borders, or navigating regulatory reform — Credence Africa is your trusted execution partner.
              </p>
            </div>

            <Card className="p-8 md:p-12 shadow-xl rounded-none border-none">
              <div className="space-y-8">
                <div className="space-y-6">
                  <a href="mailto:connect@credence.africa" className="flex items-center gap-4 text-xl hover:text-primary transition-colors text-foreground">
                    <Mail className="size-6 text-primary" /> connect@credence.africa
                  </a>
                  <a href="tel:+254719468240" className="flex items-center gap-4 text-xl hover:text-primary transition-colors text-foreground">
                    <Phone className="size-6 text-primary" /> +254 719 468 240
                  </a>
                </div>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-8 h-16 text-lg font-bold">
                  <Link href="/consult">Book a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
