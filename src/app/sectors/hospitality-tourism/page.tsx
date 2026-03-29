import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Leaf, Smile, DollarSign, Globe, BadgeInfo, GraduationCap, Link, Plane } from "lucide-react";

export default function HospitalityTourismPage() {
  const interventions = [
    { icon: <Zap className="size-8 text-primary" />, title: "Tourism Recovery & Resilience", text: "Equipping operators to withstand shocks like pandemics and climate events." },
    { icon: <Leaf className="size-8 text-primary" />, title: "Sustainable Tourism Models", text: "Mainstreaming ESG standards, eco-lodges, and regenerative tourism." },
    { icon: <Smile className="size-8 text-primary" />, title: "Customer Experience Hubs", text: "Improving guest relations, digital bookings, and data-driven service excellence." },
    { icon: <DollarSign className="size-8 text-primary" />, title: "Tourism Investment Facilitation", text: "Linking SMEs to blended finance, equity, and credit tools for expansion." },
    { icon: <Globe className="size-8 text-primary" />, title: "Heritage & Culture Integration", text: "Positioning African identity, art, and culture as key differentiators." },
    { icon: <BadgeInfo className="size-8 text-primary" />, title: "Destination Marketing & Branding", text: "Supporting Africa-branded campaigns to boost arrivals." },
    { icon: <GraduationCap className="size-8 text-primary" />, title: "Hospitality Workforce Development", text: "Upskilling staff in risk management, guest services, and digital systems." },
    { icon: <Link className="size-8 text-primary" />, title: "Infrastructure & SME Linkages", text: "Connecting small operators to wider hospitality value chains." },
  ];
  
  const impactPathways = [
    "A sustainable, shock-resilient tourism industry anchored in ESG.",
    "Increased foreign exchange earnings and expanded domestic tourism.",
    "Greater SME participation in regional and global tourism value chains.",
    "African heritage and cultural identity driving competitiveness.",
    "Professionalized hospitality services meeting international benchmarks.",
    "Enhanced resilience of local operators through finance and training.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Hospitality & Tourism</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We strengthen Africa’s hospitality and tourism ecosystems through ESG compliance, professional service excellence, and SME-driven growth. By equipping operators with access to capital, digital tools, and sustainable models, we build resilient tourism economies that attract investment, create jobs, and showcase Africa’s cultural and natural assets to the world.</p>
          <p>Tourism in Africa faces dual pressures: fragile infrastructure and global shocks on one hand, and immense opportunities for domestic, regional, and international growth on the other. Our interventions are designed to bridge this gap — professionalizing operators, unlocking capital, and embedding sustainability in ways that scale long-term competitiveness.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
