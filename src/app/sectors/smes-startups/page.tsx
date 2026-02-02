import { Card, CardContent } from "@/components/ui/card";
import { Check, HandCoins, Building, LineChart, ShieldHalf, UserRound, Rocket, Globe, Recycle, Briefcase } from "lucide-react";

export default function SmesStartupsPage() {
  const interventions = [
    { icon: <HandCoins className="size-8 text-primary" />, title: "SME Capital Access Platforms", text: "Blended finance, angel networks, and diaspora investment channels." },
    { icon: <Building className="size-8 text-primary" />, title: "Enterprise Structuring Programs", text: "Legal incorporation, governance systems, tax strategy, and compliance readiness." },
    { icon: <LineChart className="size-8 text-primary" />, title: "Market Expansion Labs", text: "Regional growth strategies powered by AfCFTA, franchising, and export facilitation." },
    { icon: <ShieldHalf className="size-8 text-primary" />, title: "Resilience & Recovery Programs", text: "Turnaround strategies, crisis management, and SME risk insurance." },
    { icon: <UserRound className="size-8 text-primary" />, title: "Women & Youth Enterprise Programs", text: "Tailored leadership, financing, and mentorship for inclusive entrepreneurship." },
    { icon: <Rocket className="size-8 text-primary" />, title: "Innovation & Digital Enterprise Hubs", text: "Startup accelerators for fintech, agri-tech, health-tech, and mobility-tech." },
    { icon: <Globe className="size-8 text-primary" />, title: "Diaspora & Cross-Border Models", text: "Structuring diaspora investments, re-entry ventures, and regional scaling." },
    { icon: <Recycle className="size-8 text-primary" />, title: "Enterprise-to-Cooperative Conversions", text: "Helping informal businesses grow into cooperative-backed SMEs." },
  ];

  const impactPathways = [
    "More investment-ready SMEs and startups with access to blended capital.",
    "Reduced startup failure rates through structuring and risk management.",
    "Inclusive entrepreneurship growth with women and youth at the center.",
    "SMEs scaling across borders into AfCFTA, COMESA, and global markets.",
    "Transformative entrepreneurship ecosystems driving employment and industrialization."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">SMEs & Startups</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Entrepreneurship is Africa’s most powerful lever for aconomic transformation. Yet too often it is trapped in the micro-enterprise survival cycle undercapitalized, informal, and disconnected from scalable markets. To unlock real transformation, African entrepreneurship must move beyond subsistence trading into investment-ready, structured, and innovation-driven enterprises.</p>
          <p>At Credence Africa, we localize entrepreneurship models to African realities — building on cooperative capital, diaspora linkages, AfCFTA trade opportunities, and blended finance. Our work equips SMEs and startups to become regional growth engines, job creators, and global competitors.</p>
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
