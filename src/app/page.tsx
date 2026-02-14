
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices, Service } from "@/lib/services.tsx";
import { ArrowRight, CheckCircle, Mail, Phone, Scale, Users, FileText, Landmark, Megaphone, GraduationCap, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getInsights, type Insight } from "@/lib/insights";

const whatWeSolve = [
    "Capital and investment readiness for high-growth ventures",
    "Regulatory licensing and multi-agency compliance strategy",
    "Market entry across East Africa and diaspora re-entry structuring",
    "Cross-border tax and entity structuring",
    "Government relations, public policy tracking, and advocacy",
    "Monetization of IP, content, brand, and digital assets",
    "Succession, legacy, and trust planning for entrepreneurs and families",
]

const caseStudyHighlights = [
    { icon: <Users className="size-6 text-primary" />, text: "Scaling operations for high-growth ventures." },
    { icon: <Scale className="size-6 text-primary" />, text: "Attracting catalytic funding for social enterprises." },
    { icon: <FileText className="size-6 text-primary" />, text: "Unlocking compliance bottlenecks for fintech innovators." },
    { icon: <Landmark className="size-6 text-primary" />, text: "Influencing regulation for development partners." },
]

export default function Home() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
          setLoading(true);
          try {
            const [fetchedInsights, fetchedServices] = await Promise.all([
                getInsights(),
                getServices()
            ]);
            setInsights(fetchedInsights);
            setServices(fetchedServices);
          } catch (error) {
              console.error("Failed to fetch data:", error);
          } finally {
            setLoading(false);
          }
      }
      fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-24 py-16 lg:py-24 mx-auto lg:w-90">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Strategic Advisory for Africa’s Next Growth Frontier</h1>
          <p className="text-xl text-muted-foreground">
            Smart insights. Practical execution. Structures that scale in complexity and across borders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consult">Book a Consultation</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-[28rem] rounded-lg overflow-hidden shadow-lg">
            <Image 
                src="/hero.jpg"
                alt="Growth Frontier"
                fill
                className="object-cover"
                data-ai-hint="abstract growth"
            />
        </div>
      </section>

      {/* Engage and Institute Section */}
        <section className="grid sm:grid-cols-2 gap-8">
            <Link href="https://advisory.credence.africa" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="bg-primary text-primary-foreground h-full transition-shadow hover:shadow-lg flex flex-col w-full">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <Users className="size-8 text-primary-foreground" />
                            <div>
                                <CardTitle>Credence Advisory</CardTitle>
                                <CardDescription className="text-primary-foreground/80">Strategic Advisory for Africa’s Next Growth Frontier</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-primary-foreground/90">Smart insights. Practical execution. Structures that scale in complexity and across borders.</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild variant="secondary">
                            <span className="flex items-center">Visit Platform <ArrowRight className="ml-2" /></span>
                        </Button>
                    </div>
                </Card>
            </Link>
            <Link href="https://engage.credence.africa" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="border-primary border-2 h-full transition-shadow hover:shadow-lg flex flex-col w-full">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <Megaphone className="size-8 text-primary" />
                            <div>
                                <CardTitle>Credence Engage</CardTitle>
                                <CardDescription>Events and influence platforms</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Credence Engage builds platforms of visibility, influence, and access that translate institutional goals into strategic relationships and market leadership.</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild variant="outline">
                            <span className="flex items-center">Visit Platform <ArrowRight className="ml-2" /></span>
                        </Button>
                    </div>
                </Card>
            </Link>
             <Link href="https://institute.credence.africa" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="border-border h-full transition-shadow hover:shadow-lg flex flex-col w-full">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <GraduationCap className="size-8 text-primary" />
                            <div>
                                <CardTitle>Credence Institute</CardTitle>
                                <CardDescription>Learning and leadership</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Credence Institute delivers capacity and leadership programs that move knowledge into practice, preparing Africa’s professionals and institutions for high-performance governance and economic transformation.</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild variant="outline">
                             <span className="flex items-center">Visit Platform <ArrowRight className="ml-2" /></span>
                        </Button>
                    </div>
                </Card>
            </Link>
            <Link href="http://perspectives.credence.africa/" target="_blank" rel="noopener noreferrer" className="flex">
                <Card className="border-border h-full transition-shadow hover:shadow-lg flex flex-col w-full">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <Newspaper className="size-8 text-primary" />
                            <div>
                                <CardTitle>Credence-Credible Perspectives</CardTitle>
                                <CardDescription>Media and insights</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">The thought leadership platform of the Credence ecosystem, amplifying insight and analysis that shape Africa’s public dialogue, policy reform, and institutional accountability.</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild variant="outline">
                            <span className="flex items-center">Explore Insights <ArrowRight className="ml-2" /></span>
                        </Button>
                    </div>
                </Card>
            </Link>
        </section>
      
      {/* Who We Are */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Credence Africa is a pan-African strategic advisory and social enterprise platform operating at the intersection of capital, governance, compliance, and public affairs. We help businesses, governments, nonprofits, and financial institutions navigate Africa’s opportunity zones where risk meets scale.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6">
                <h3 className="font-semibold text-xl">Pan-African Perspective</h3>
                <p className="mt-2 text-muted-foreground">Operating across multiple jurisdictions at the nexus of capital, compliance, governance, and policy.</p>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-xl">Growth Catalysts</h3>
                <p className="mt-2 text-muted-foreground">Unlocking capital, structuring entities, navigating regulation, and scaling impact.</p>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-xl">Execution Partners</h3>
                <p className="mt-2 text-muted-foreground">Delivering actionable strategies that withstand scrutiny in high-complexity environments.</p>
            </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild variant="outline">
                <Link href="/about">Our Full Story</Link>
            </Button>
            <Button asChild>
                <Link href="/about#team">Meet the Team</Link>
            </Button>
        </div>
      </section>

      {/* Quote & Stats */}
      <section className="bg-secondary py-20 text-center">
          <div className="container mx-auto">
            <p className="text-2xl font-medium max-w-4xl mx-auto">&quot;We combine deep local understanding with global-standard execution to help clients navigate Africa&apos;s opportunity zones — where risk meets scale.&quot;</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <p className="text-4xl font-bold text-primary">10+</p>
                    <p className="mt-2 text-muted-foreground">Years of Experience</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="mt-2 text-muted-foreground">Clients Served</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">8</p>
                    <p className="mt-2 text-muted-foreground">African Markets</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">$25M+</p>
                    <p className="mt-2 text-muted-foreground">Capital Facilitated</p>
                </div>
            </div>
          </div>
      </section>

      {/* What We Solve */}
      <section>
        <h2 className="text-3xl font-bold text-center">What We Solve</h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {whatWeSolve.map((item) => (
                <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-primary mt-1 shrink-0" />
                    <p>{item}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section>
          <h2 className="text-3xl font-bold text-center">Our Platforms</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((solution) => (
                  <Card key={solution.title}>
                      <CardHeader>
                          <CardTitle>{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground mb-4">{solution.description}</p>
                          <Button asChild variant="link" className="p-0">
                            <Link href={solution.href} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="ml-2 size-4" /></Link>
                          </Button>
                      </CardContent>
                  </Card>
              ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/services">See All Platforms</Link>
            </Button>
          </div>
      </section>

      {/* Recent Insights */}
      <section>
        <h2 className="text-3xl font-bold text-center">Recent Insights</h2>
        <div className="mt-12 grid gap-6">
            {loading ? (
                <p className="text-center">Loading insights...</p>
            ) : insights.length > 0 ? (
                insights.slice(0, 5).map((insight) => (
                <div key={insight.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg">
                    <div>
                    <Link href={`/insights/${insight.slug}`}>
                        <h3 className="font-semibold text-lg hover:text-primary hover:underline">{insight.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{insight.date}</p>
                    </div>
                    <Button asChild variant="link" className="mt-2 sm:mt-0">
                    <Link href={`/insights/${insight.slug}`}>Read More</Link>
                    </Button>
                </div>
                ))
            ) : (
                <p className="text-center text-muted-foreground">No insights published yet.</p>
            )}
            </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/insights">Read All Insights</Link>
            </Button>
          </div>
      </section>

      {/* Case Studies */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold">Case Studies</h2>
                <p className="mt-4 text-muted-foreground">
                    See how we’ve helped clients scale operations, attract catalytic funding, unlock compliance bottlenecks, and influence regulation across Africa.
                </p>
                <div className="mt-6 space-y-4">
                    {caseStudyHighlights.map((highlight) => (
                        <div key={highlight.text} className="flex items-start gap-4">
                            {highlight.icon}
                            <p className="pt-0.5">{highlight.text}</p>
                        </div>
                    ))}
                </div>
                <Button asChild className="mt-8">
                    <Link href="/case-studies">View Case Studies</Link>
                </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                    src="/credcase.webp"
                    alt="Team in a meeting"
                    fill
                    className="object-cover"
                    data-ai-hint="business meeting"
                />
            </div>
        </section>
      
      {/* Trust & Impact */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Trust & Impact</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-muted-foreground">
            <p><strong>10+ years</strong> shaping enterprises, cooperatives, and institutions</p>
            <p><strong>50+ clients</strong> and partners across government, finance, and civil society</p>
            <p><strong>8 African markets</strong> actively engaged</p>
            <p><strong>$25M+ capital</strong> facilitated for enterprises and social ventures</p>
        </div>
        <p className="mt-12 text-muted-foreground">
            <strong>Trusted by:</strong> Growth-stage startups, cooperative unions, fintech innovators, development partners, and public agencies.
        </p>
        <div className="mt-8">
            <Button asChild variant="outline">
                <Link href="/about#partners">Meet Our Partners</Link>
            </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 text-center rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Let’s Shape Africa’s Growth Frontier Together</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Whether you are raising capital, structuring across borders, or navigating regulatory reform — Credence Africa is your trusted execution partner.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
             <a href="mailto:connect@credence.africa" className="flex items-center gap-2 hover:underline">
                <Mail /> <span>connect@credence.africa</span>
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-2 hover:underline">
                <Phone /> <span>+254 719 468 240</span>
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-4">
             <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Strategy Call</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-transparent hover:text-primary-foreground bg-transparent">
              <Link href="/consult">Send an Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
