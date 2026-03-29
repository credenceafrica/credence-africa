
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Handshake, Mic, School, Church, HeartPulse, Bus, Users, Laptop, Briefcase, Building, Plane } from "lucide-react";
import Link from "next/link";

const sectors = [
    { icon: <Leaf className="size-6"/>, name: "Agriculture & Food", description: "Enhancing agribusiness operations, supply chain efficiency, and climate-smart farming.", href: "/sectors/agriculture-food" },
    { icon: <Mic className="size-6"/>, name: "Creative & Digital Economy", description: "Supporting artists, digital entrepreneurs, and content creators with commercialization and IP protection.", href: "/sectors/creative-digital-economy" },
    { icon: <School className="size-6"/>, name: "Education & Skills Development", description: "Equipping educators and policymakers with modern strategies in curriculum and institutional leadership.", href: "/sectors/education-skills-development" },
    { icon: <Church className="size-6"/>, name: "Faith-Based Organizations", description: "Providing governance, fundraising, and community impact strategies.", href: "/sectors/faith-based-organizations" },
    { icon: <HeartPulse className="size-6"/>, name: "Healthcare & Wellness", description: "Improving healthcare management, financing, and digital health solutions.", href: "/sectors/healthcare-wellness" },
    { icon: <Plane className="size-6"/>, name: "Hospitality & Tourism", description: "Driving sustainable tourism and business growth strategies.", href: "/sectors/hospitality-tourism" },
    { icon: <Users className="size-6"/>, name: "Non-Profit Sector", description: "Strengthening impact measurement, fundraising, and governance.", href: "/sectors/non-profit-sector" },
    { icon: <Building className="size-6"/>, name: "Public Sector & Governance", description: "Enhancing policy development, regulatory frameworks, and governance efficiency.", href: "/sectors/public-sector-governance" },
    { icon: <Briefcase className="size-6"/>, name: "SMEs & Startups", description: "Providing business model innovation, funding access, and scaling strategies.", href: "/sectors/smes-startups" },
    { icon: <Laptop className="size-6"/>, name: "Technology & Digital Economy", description: "Driving innovation in fintech, AI, blockchain, and digital transformation.", href: "/sectors/technology-digital-economy" },
    { icon: <Handshake className="size-6"/>, name: "Cooperatives & Social Economy", description: "Strengthening governance, leadership, and financial sustainability.", href: "/sectors/cooperatives-social-economy" },
    { icon: <Bus className="size-6"/>, name: "Mobility & Logistics", description: "Advancing smart transport, sustainable mobility, and logistics solutions.", href: "/sectors/mobility-logistics" },
];

export default function SectorsPage() {
    return (
        <div className="py-16 lg:py-24 mx-auto lg:w-85">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Sectors We Serve</h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">At Credence Africa, our work spans multiple sectors where social enterprise, policy reform, and capital access intersect.</p>
                <p className="mt-4 max-w-4xl mx-auto">Each intervention builds resilient institutions, drives inclusive growth, and creates measurable impact.</p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectors.map(sector => (
                    <Card key={sector.name} id={sector.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="text-primary">{sector.icon}</div>
                            <CardTitle>{sector.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-muted-foreground flex-grow">{sector.description}</p>
                            <Button asChild variant="link" className="p-0 mt-4 self-start">
                                <Link href={sector.href}>Learn More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <section className="mt-24 bg-secondary py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold">Why Partner with Credence Africa?</h2>
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg">Expert-Led Insights</h3>
                            <p className="text-muted-foreground mt-2">Work with seasoned industry experts, legal professionals, and policymakers.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                            <p className="text-muted-foreground mt-2">Customized interventions addressing unique sectoral challenges.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Innovative Approaches</h3>
                            <p className="text-muted-foreground mt-2">Africa-centric strategies blending global best practices.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Measurable Impact</h3>
                            <p className="text-muted-foreground mt-2">Outcomes that drive growth, resilience, and transformation.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mt-24 text-center">
                 <h2 className="text-3xl font-bold">Let’s Shape the Future Together</h2>
                 <div className="mt-6 flex justify-center items-center gap-6">
                    <p>📧 connect@credence.africa</p>
                    <p>☎️ +254 719 468 240</p>
                 </div>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/consult">Book a Strategy Call</Link>
                 </Button>
            </section>
        </div>
    );
}
