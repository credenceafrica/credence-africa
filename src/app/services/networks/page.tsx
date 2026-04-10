
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Coins, 
  UserCheck, 
  HandHeart, 
  Sparkles, 
  TrendingUp,
  Globe,
  Share2,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const networks = [
  {
    title: "Credible Business Network",
    description: "Business Networking, Market Access and Enterprise Expansion for Executives and Founders.",
    icon: <Briefcase className="size-8 text-primary" />,
    items: [
      "Access to business partnerships and deal flow",
      "Exposure to investors and institutional partners",
      "Peer exchange on scaling, operations, and governance",
      "Participation in business forums and executive sessions"
    ],
    cta: "Join the Business Network"
  },
  {
    title: "Credible Chamas Network",
    description: "Investment Communities, Collective Capital and Structured Wealth Platforms Across Africa.",
    icon: <Coins className="size-8 text-primary" />,
    items: [
      "Access to curated investment opportunities",
      "Governance and structuring support",
      "Financial literacy and wealth frameworks",
      "Connections to legal, tax, and advisory ecosystems"
    ],
    cta: "Join the Chamas Network"
  },
  {
    title: "Credible Cooperatives Network",
    description: "Cooperative Ecosystems, SACCO Networks and Institutional Market Access Platforms.",
    icon: <Users className="size-8 text-primary" />,
    items: [
      "Access to buyers, partners, and institutional markets",
      "Governance, compliance, and leadership development",
      "Participation in expos, clinics, and sector forums",
      "Connection to policy, finance, and advisory platforms"
    ],
    cta: "Join the Cooperatives Network"
  },
  {
    title: "Credible Experts Network",
    description: "Professional Networks, Advisory Opportunities and Thought Leadership Platforms for Specialists.",
    icon: <UserCheck className="size-8 text-primary" />,
    items: [
      "Visibility as a domain expert within the ecosystem",
      "Access to advisory and consulting opportunities",
      "Participation in research, media, and thought leadership",
      "Connection to institutions requiring expertise"
    ],
    cta: "Join the Experts Network"
  },
  {
    title: "Credible Faith Network",
    description: "Faith Based Leadership Networks, Community Systems and Social Impact Platforms.",
    icon: <HandHeart className="size-8 text-primary" />,
    items: [
      "Institutional development and governance frameworks",
      "Access to partnerships and community programs",
      "Leadership development opportunities",
      "Participation in civic and social initiatives"
    ],
    cta: "Join the Faith Network"
  },
  {
    title: "Credible Life Network",
    description: "Leadership Development, Personal Growth and Strategic Life Design for Professionals.",
    icon: <Sparkles className="size-8 text-primary" />,
    items: [
      "Access to leadership and personal development frameworks",
      "Peer accountability and support structures",
      "Curated learning and development programs",
      "Integration with professional and business networks"
    ],
    cta: "Join the Life Network"
  },
  {
    title: "Credible Women Network",
    description: "Women in Business, Leadership and Wealth Creation Networks Across Africa.",
    icon: <TrendingUp className="size-8 text-primary" />,
    items: [
      "Access to investment, ownership, and wealth pathways",
      "Participation in summits, clinics, and advisory sessions",
      "Connection to capital, institutions, and opportunities",
      "Peer networks supporting leadership and growth"
    ],
    cta: "Join the Women Network"
  }
];

export default function NetworksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
            alt="Professional Networks Africa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Credible Networks
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Network Infrastructure
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Membership communities connecting leaders, experts, and institutions across Africa's business and policy systems.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Strategic Relationships
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Build high-value relationships and access opportunities in curated environments aligned to your strategic direction.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Join a Network <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Partner with Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Engage Networks */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Why Engage Credible Networks</h2>
            <p className="text-muted-foreground text-sm md:text-lg">Access curated professional networks, strategic partnerships, and high-value communities.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "Curated professional networks aligned to sectors and roles",
              "Structured membership communities built on trust and relevance",
              "Access to partnerships, markets, and institutional relationships",
              "Environments for peer learning, collaboration, and deal flow",
              "Integration with intelligence, advisory, and convening platforms"
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group h-full">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-xs md:text-sm leading-relaxed text-foreground/90 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Communities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Our Membership Communities</h2>
            <p className="text-muted-foreground text-sm md:text-lg">Specialized networks reflecting key areas of leadership and enterprise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networks.map((network) => (
              <Card key={network.title} className="rounded-none border shadow-sm flex flex-col hover:border-primary transition-colors group">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{network.icon}</div>
                  <CardTitle className="text-xl font-normal text-foreground">{network.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{network.description}</p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow flex flex-col">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {network.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-muted-foreground border-b border-border/50 pb-2">
                        <ArrowRight className="size-3 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/consult">{network.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Value */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-normal">For Institutional Partners</h2>
              <p className="text-base md:text-lg font-light text-white/70 leading-relaxed">
                Credible Networks enables institutions to access defined audiences and structured communities across multiple sectors.
              </p>
              <div className="grid gap-4 pt-4">
                {[
                  "Direct access to decision makers",
                  "Market entry and expansion platforms",
                  "Partnership development and ecosystem engagement",
                  "Product distribution and customer acquisition",
                  "Thought leadership and strategic positioning"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary" />
                    <span className="text-sm font-light text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10 p-8 md:p-12 rounded-none">
              <div className="space-y-8">
                <h3 className="text-xl font-normal">Engage the Ecosystem</h3>
                <p className="text-sm text-white/60 font-light">
                  Partner with Credible Networks to expand your reach, strengthen your positioning, and connect to opportunities across Africa.
                </p>
                <div className="flex flex-col gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none py-6">
                    <Link href="/consult">Apply for Membership</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none py-6">
                    <Link href="/consult">Become a Partner</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-normal mb-8 max-w-4xl mx-auto">
            Join Africa’s Leading Professional Networks and Business Communities
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:connect@credence.africa" className="flex items-center gap-3 text-xl hover:text-white transition-colors">
              <Mail className="size-6" /> connect@credence.africa
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-3 text-xl hover:text-white transition-colors">
              <Phone className="size-6" /> +254 719 468 240
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Button asChild size="lg" variant="secondary" className="rounded-none px-10 h-14 text-base font-bold bg-white text-primary hover:bg-white/90">
              <Link href="/consult">Apply for Membership</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-white hover:text-primary rounded-none bg-transparent px-10 h-14 text-base font-bold">
              <Link href="/consult">Explore All Communities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
