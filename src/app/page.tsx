
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices, Service } from "@/lib/services.tsx";
import { ArrowRight, CheckCircle, Mail, Phone, Calendar, BookOpen, Newspaper, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalEvent, ExternalCourse, ExternalPublication } from "@/lib/external-data";
import PlaceholderImages from "@/lib/placeholder-images.json";

const whatWeSolve = [
    "Capital and investment readiness for high-growth ventures",
    "Regulatory licensing and multi-agency compliance strategy",
    "Market entry across East Africa and diaspora re-entry structuring",
    "Cross-border tax and entity structuring",
    "Government relations, public policy tracking, and advocacy",
    "Monetization of IP, content, brand, and digital assets",
    "Succession, legacy, and trust planning for entrepreneurs and families",
]

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [events, setEvents] = useState<ExternalEvent[]>([]);
  const [courses, setCourses] = useState<ExternalCourse[]>([]);
  const [publications, setPublications] = useState<ExternalPublication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
          setLoading(true);
          try {
            const fetchedServices = await getServices();
            setServices(fetchedServices);

            // Fetch live data from internal proxy API
            const response = await fetch('/api/live-data');
            const liveData = await response.json();
            
            if (liveData) {
                setEvents(liveData.events || []);
                setCourses(liveData.courses || []);
                setPublications(liveData.publications || []);
            }
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
                src={PlaceholderImages.hero}
                alt="Growth Frontier"
                fill
                className="object-cover"
                data-ai-hint="abstract growth"
            />
        </div>
      </section>

      {/* Platforms Section */}
        <section className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
                <Link key={service.id} href={service.href} target="_blank" rel="noopener noreferrer" className="flex">
                    <Card className={cn(
                        "h-full transition-all hover:shadow-lg flex flex-col w-full border-2",
                        service.id === 'advisory' ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                    )}>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <div className={cn("size-8", service.id === 'advisory' ? "text-primary-foreground" : "text-primary")}>
                                    {service.icon}
                                </div>
                                <div>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription className={service.id === 'advisory' ? "text-primary-foreground/80" : ""}>
                                        {service.description}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className={service.id === 'advisory' ? "text-primary-foreground/90" : "text-muted-foreground"}>
                                {service.longDescription}
                            </p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button asChild variant={service.id === 'advisory' ? "secondary" : "outline"}>
                                <span className="flex items-center">
                                    {service.buttonText} <ArrowRight className="ml-2" />
                                </span>
                            </Button>
                        </div>
                    </Card>
                </Link>
            ))}
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

      {/* Upcoming Events Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Upcoming Events</h2>
                <p className="text-muted-foreground max-w-2xl">Strategic convenings that transform expertise into influence. Join us at our next high-impact event.</p>
            </div>
            <Button asChild variant="outline">
                <Link href="https://engage.credence.africa/" target="_blank">
                    View All Events <ExternalLink className="ml-2 size-4" />
                </Link>
            </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
                <Link key={event.id} href={event.url} target="_blank" className="block group">
                    <Card className="hover:shadow-md transition-shadow h-full border-border group-hover:border-primary">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                                <Calendar className="size-4" /> 
                                <span>{event.date}</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{event.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            {loading && !events.length && <p className="text-muted-foreground italic">Fetching latest events...</p>}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Featured Courses</h2>
                <p className="text-muted-foreground max-w-2xl">Professional and executive programs that translate learning into applied capability.</p>
            </div>
            <Button asChild variant="outline">
                <Link href="https://institute.credence.africa/" target="_blank">
                    Explore Programs <ExternalLink className="ml-2 size-4" />
                </Link>
            </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
                <Link key={course.id} href={course.url} target="_blank" className="block group">
                    <Card className="hover:shadow-md transition-shadow h-full border-border group-hover:border-primary">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                                <BookOpen className="size-4" /> 
                                <span>{course.tag}</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{course.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            {loading && !courses.length && <p className="text-muted-foreground italic">Fetching latest courses...</p>}
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Recent Publications</h2>
                <p className="text-muted-foreground max-w-2xl">Original analysis and research-grounded commentary shaping strategy across Africa.</p>
            </div>
            <Button asChild variant="outline">
                <Link href="https://perspectives.credence.africa/insights" target="_blank">
                    View Insights <ExternalLink className="ml-2 size-4" />
                </Link>
            </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {publications.slice(0, 3).map((pub) => (
                <Link key={pub.id} href={pub.url} target="_blank" className="block group">
                    <Card className="hover:shadow-md transition-shadow h-full border-border group-hover:border-primary">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                                <Newspaper className="size-4" /> 
                                <span>{pub.type}</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{pub.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{pub.description}</p>
                            <div className="mt-4 text-primary font-medium flex items-center group-hover:underline">
                                Read Analysis <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            {loading && !publications.length && <p className="text-muted-foreground italic col-span-3">Fetching latest publications...</p>}
        </div>
      </section>
      
      {/* Trust & Impact */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Trust &amp; Impact</h2>
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
