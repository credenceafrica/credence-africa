import { Card, CardContent } from "@/components/ui/card";
import { Check, HandCoins, Scale, Building, TrendingUp, Lightbulb, Link, Users, GraduationCap, Sparkles } from "lucide-react";

export default function CreativeDigitalEconomyPage() {
  const interventions = [
    { icon: <HandCoins className="size-8 text-primary" />, title: "Creator Capital Models", text: "Cooperative finance, blended capital, and investor-ready funds designed for creatives." },
    { icon: <Scale className="size-8 text-primary" />, title: "IP & Ownership Systems", text: "Licensing, royalties, trademarks, and contract structuring for long-term income." },
    { icon: <Building className="size-8 text-primary" />, title: "Creative Enterprise Structuring", text: "Legal, financial, and organizational models to formalize talent into scalable businesses." },
    { icon: <TrendingUp className="size-8 text-primary" />, title: "Market Expansion Initiatives", text: "AfCFTA-enabled trade, cross-border distribution, and international collaborations." },
    { icon: <Lightbulb className="size-8 text-primary" />, title: "Digital Innovation Ecosystems", text: "Incubation for e-sports, gaming, digital art, NFTs, and emerging creative-tech." },
    { icon: <Users className="size-8 text-primary" />, title: "Policy & Advocacy Platforms", text: "Engaging governments to prioritize the creative sector in economic planning." },
    { icon: <Link className="size-8 text-primary" />, title: "Content Commercialization Tools", text: "Streaming, syndication, brand partnerships, and tech platforms to monetize content globally." },
    { icon: <Users className="size-8 text-primary" />, title: "Creative Cooperatives & Collectives", text: "Structures for artists to pool resources, negotiate better contracts, and scale." },
    { icon: <GraduationCap className="size-8 text-primary" />, title: "Skills & Enterprise Labs", text: "Linking creatives with entrepreneurial, legal, and financial training." },
  ];

  const impactPathways = [
    "African creatives retain ownership of their intellectual property and income streams.",
    "Globally competitive African brands achieve visibility and fair value in international markets.",
    "Youth employment expands through new digital economy and creative sector opportunities.",
    "Informal survival models are replaced with structured, investor-ready enterprises.",
    "Africa’s cultural and digital voice is amplified in global markets, influencing culture, technology, and trade.",
    "Capital flows into the creative economy through tailored investment vehicles and policy alignment.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Creative & Digital Economy</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Africa’s creative and digital economy is massively underdeveloped and undercapitalized, despite being one of the continent’s fastest-growing youth-driven sectors. Musicians, designers, filmmakers, athletes, influencers, and digital creators generate immense cultural value but often lack the structures, financing, and protections to monetize their work sustainably.</p>
          <p>At Credence Africa, we empower creatives and digital entrepreneurs to transform talent into enterprise. Our approach integrates IP protection, cooperative ownership, capital mobilization, and policy advocacy to formalize the sector, scale enterprises, and position Africa as a global cultural and digital powerhouse.</p>
          <p>We move creators beyond hustle economics into sustainable wealth creation, while ensuring cultural authenticity, inclusivity, and African ownership remain at the center.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {interventions.map(item => (
                 <Card key={item.title}>
                    <CardContent className="p-6">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactPathways.map((item, index) => (
                <Card key={index}>
                    <CardContent className="p-6 flex items-start gap-4">
                         <Check className="size-6 text-primary mt-1 shrink-0" />
                         <p>{item}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

    </div>
  );
}
