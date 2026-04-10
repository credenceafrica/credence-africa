
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Zap, Target, BarChart, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EngagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
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
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Market Activation Events in Kenya
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  CREDENCE ENGAGE™
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Market-facing events structured for customer acquisition, product adoption, and adoption across African markets.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Conversion Platforms
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Environments that move audiences from awareness to participation through product launches, activations, and expos.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Plan Your Activation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
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
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Strategic Activation Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              CREDENCE ENGAGE™ structures events as audience driven platforms aligned to clear commercial outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4">
                <Target className="size-8 text-primary mb-4" />
                <CardTitle className="text-xl font-normal text-foreground">Event Strategy</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Defining audience segments and pathways aligned with commercial objectives.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4">
                <Zap className="size-8 text-primary mb-4" />
                <CardTitle className="text-xl font-normal text-foreground">Brand Positioning</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Environments where brands are experienced through direct interaction and engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-8 pb-4">
                <BarChart className="size-8 text-primary mb-4" />
                <CardTitle className="text-xl font-normal text-foreground">Commercial Integration</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Integrating partners into commercial environments that support transactions and deal flow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal">Activate Your Market with CREDENCE ENGAGE™</h2>
            <p className="text-lg text-muted-foreground font-light">Ready to launch a product or host a trade expo? Let’s build your conversion platform.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a href="mailto:connect@credence.africa" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                <Mail className="size-6 text-primary" /> connect@credence.africa
              </a>
              <a href="tel:+254719468240" className="flex items-center gap-3 text-xl hover:text-primary transition-colors">
                <Phone className="size-6 text-primary" /> +254 719 468 240
              </a>
            </div>
            <Button asChild size="lg" className="rounded-none px-12 h-16 font-bold text-lg mt-4">
              <Link href="/consult">Launch a Campaign</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
