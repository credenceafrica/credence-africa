import { Card, CardContent } from "@/components/ui/card";
import { Check, Waypoints, Cpu, Puzzle, Settings, Wifi, Group, Laptop } from "lucide-react";

export default function TechnologyDigitalEconomyPage() {
  const interventions = [
    { icon: <Waypoints className="size-8 text-primary" />, title: "Fintech Growth Platforms", text: "Compliance, funding, and adoption models for financial inclusion and cooperative banking." },
    { icon: <Cpu className="size-8 text-primary" />, title: "AI & Data Economy Labs", text: "Applied AI for agriculture, healthcare, and governance, built with ethics and local datasets." },
    { icon: <Puzzle className="size-8 text-primary" />, title: "Blockchain & Digital Assets", text: "Transparent systems for land registries, supply chains, and climate finance." },
    { icon: <Settings className="size-8 text-primary" />, title: "Digital Policy & Regulation", text: "Enabling frameworks for fintech, data protection, and cross-border digital trade." },
    { icon: <Wifi className="size-8 text-primary" />, title: "Digital Inclusion Initiatives", text: "Affordable connectivity, digital literacy, and community-based tech adoption hubs." },
    { icon: <Group className="size-8 text-primary" />, title: "Sector-Specific Tech Integration", text: "Embedding digital tools in agri-value chains, mobility logistics, and hospital systems." },
  ];

  const impactPathways = [
    "Operational efficiency across sectors through applied tech adoption.",
    "Scaled African-led digital enterprises creating locally relevant solutions.",
    "Capital mobilized into frontier technology aligned with development outcomes.",
    "Regulatory systems that protect citizens while supporting innovation.",
    "Broader digital inclusion across gender, youth, rural, and urban populations.",
    "Technology as infrastructure for transformation, not an end in itself."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Technology & Digital Economy</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Technology in Africa must move beyond hype cycles to become a practical enabler of transformation across agriculture, health, finance, mobility, education, and governance. The continent’s challenge is not inventing the next Silicon Valley—it is embedding technology into operations, systems, and institutions so that it solves real problems and drives inclusive growth.</p>
          <p>At Credence Africa, we focus on applied digital transformation: fintech for cooperative banking, AI for public service delivery, blockchain for supply chain trust, and edtech for skills delivery. We bridge capital, regulation, and innovation to ensure technology serves Africa’s social and economic priorities rather than becoming extractive or exclusionary.</p>
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
