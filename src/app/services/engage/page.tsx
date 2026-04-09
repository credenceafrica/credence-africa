
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Zap, Target, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EngagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split Layout with White Background */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-24">
            <div className="space-y-10 order-2 lg:order-1">
              <h1 className="text-foreground leading-tight">
                Market Activation Events in Kenya
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
                <div className="space-y-3">
                  <h2 className="text-sm font-bold text-primary tracking-widest uppercase">CREDENCE ENGAGE™</h2>
                  <p className="text-base leading-relaxed font-light">
                    Market-facing events structured for customer acquisition and commercial growth across African markets.
                  </p>
                </div>
                <div className="space-y-3 lg:border-l lg:pl-8">
                  <p className="text-sm font-bold text-primary tracking-widest uppercase">Conversion Platforms</p>
                  <p className="text-base leading-relaxed font-light">
                    Environments that move audiences from awareness to participation through product launches and expos.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                  <Link href="/consult">
                    Plan Your Activation <ArrowUpRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-transparent">
                  <Link href="/consult">
                    Launch Your Campaign
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden order-1 lg:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
                alt="Market Activation Kenya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground">Market Activation Event Management</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              CREDENCE ENGAGE™ structures events as audience driven platforms segmented by purchasing power, decision authority, and participation intent.
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
                  Defining audience segments and engagement pathways aligned with commercial objectives.
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
                  Designing environments where brands are experienced through direct interaction and engagement.
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
                  Integrating partners into active commercial environments that support transactions and deal flow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revenue Driven Models */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Revenue-Driven Event Models</h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                CREDENCE ENGAGE™ events are built around participation economics. Each event is structured to support brand objectives and create commercial value.
              </p>
            </div>
            <div className="bg-white/5 p-10 border border-white/10 rounded-none">
              <ul className="grid gap-5">
                {[
                  "Event design and execution fees for brands",
                  "Campaign retainers for engagement programs",
                  "Ticketing and paid audience access",
                  "Exhibition and marketplace participation fees",
                  "Deal room participation and facilitation"
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

      {/* Final Conversion Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Plan a Market Activation or Trade Event in Kenya.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                If your organization is planning a product launch or trade expo, CREDENCE ENGAGE™ provides the strategy and execution required to deliver measurable outcomes.
              </p>
            </div>
            <div className="bg-white p-10 md:p-16 space-y-10 shadow-2xl text-black rounded-none">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal">Start Your Activation</h3>
                <p className="text-muted-foreground text-sm font-light">Speak with a senior advisor about your campaign.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none h-16 text-lg font-bold">
                  <Link href="/consult">Plan Your Activation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
