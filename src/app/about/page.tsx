import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PlaceHolderImages from "@/lib/placeholder-images.json";

const partners = [
    "Startups & Scale-Ups",
    "SACCOs, Cooperatives & Financial Institutions",
    "Development Finance Actors & NGOs",
    "Family Offices & High Net-Worth Individuals",
    "Public Sector Entities",
    "Industry Associations & Advocacy Platforms",
]

export default function AboutUsPage() {
  return (
    <div className="py-16 lg:py-24 space-y-24 mx-auto lg:w-85">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Blending Precision with Perspective.</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Navigating Complexity with Strategy.</p>
        <p className="mt-6 max-w-4xl mx-auto">We deliver strategy that reflects the real-world dynamics of doing business in Africa, combining deep local understanding with global-standard execution.</p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">Equip African enterprises and institutions with actionable, context-aligned advisory for capital access, strategic structuring, and resilience.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="mt-4 text-muted-foreground">Become the continent’s most trusted partner in structuring sustainable growth.</p>
        </div>
      </section>

      {/* The Credence Africa Model */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">The Credence Africa Model</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardHeader><CardTitle>1. Execution-Ready Advisory</CardTitle></CardHeader>
                <CardContent>Blueprints for immediate, risk-managed implementation.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>2. Context-Driven Structuring</CardTitle></CardHeader>
                <CardContent>Strategies aligned with local law, policy, and markets.</CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>3. Cross-Functional Expertise</CardTitle></CardHeader>
                <CardContent>Integrating finance, law, policy, and innovation.</CardContent>
            </Card>
             <Card>
                <CardHeader><CardTitle>4. Influence + Compliance</CardTitle></CardHeader>
                <CardContent>Shaping rules while ensuring compliance.</CardContent>
            </Card>
             <Card>
                <CardHeader><CardTitle>5. Growth with Integrity</CardTitle></CardHeader>
                <CardContent>Sustainable, scalable, and strategically sound solutions.</CardContent>
            </Card>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="partners" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Who We Work With</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map(partner => (
                <div key={partner} className="flex items-start gap-4">
                    <CheckCircle className="size-6 text-primary mt-1 shrink-0" />
                    <p>{partner}</p>
                </div>
            ))}
        </div>
      </section>
      
      {/* Download Profile */}
      <section className="text-center bg-secondary py-16">
        <h2 className="text-3xl font-bold">Download Our Company Profile</h2>
        <p className="mt-4 text-muted-foreground">Get a comprehensive overview of our services, impact, and approach.</p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#">
            <Download className="mr-2 h-5 w-5" />
            Download Profile
          </Link>
        </Button>
      </section>
    </div>
  );
}
