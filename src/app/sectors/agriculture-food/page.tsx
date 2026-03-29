import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function AgricultureFoodPage() {
  const programmaticInterventions = [
    "Agri-Finance Access Platforms — blended finance, cooperative savings, input-credit systems, and guarantees for farmers, SMEs, and processors.",
    "Climate-Smart Agriculture Labs — piloting regenerative farming, water-smart irrigation, renewable-powered cold chains, and low-carbon supply chains.",
    "Value Chain Modernization — processing hubs, cold storage, aggregation centers, digital traceability, and farm-to-market logistics.",
    "Market Integration Programs — export readiness, AfCFTA/EAC/SADC trade facilitation, and structured market entry for SMEs and cooperatives.",
    "Food Security & Resilience Initiatives — integrating agriculture with nutrition, school feeding programs, and social protection safety nets.",
    "Agri-Insurance & Risk Management Models — weather-indexed insurance, cooperative crop insurance pools, and disaster recovery funds.",
    "AgriTech & Digital Extension Services — precision farming tools, mobile agronomy platforms, and cooperative-level MIS systems.",
    "Youth & Women in Agri-Enterprise — incubation and acceleration of gender- and youth-led agri-enterprises, with leadership and financing tracks.",
  ];

  const advisoryServices = [
    "Agribusiness Structuring & Compliance — legal, tax, and governance frameworks for cooperatives, SMEs, and investors.",
    "Investment Readiness & Capital Raising — preparing agri-enterprises for debt, equity, and blended finance access.",
    "Trade & Policy Advisory — helping clients navigate agricultural trade agreements, tariffs, and compliance across COMESA, EAC, and AfCFTA.",
    "Sustainable Land & Resource Use Planning — advisory on land titling, environmental compliance, and climate adaptation planning.",
    "Public-Private Partnership Structuring — designing PPPs for irrigation schemes, food parks, agro-processing zones, and logistics infrastructure.",
    "Impact Measurement & ESG Integration — designing sector-specific ESG frameworks and impact dashboards for agribusiness projects.",
  ];
  
  const impactPathways = [
    "Farmers earning higher, stable incomes through cooperative structuring and access to finance.",
    "Reduced post-harvest losses via modern processing, cold storage, and efficient logistics.",
    "Expanded access to regional and global markets, including AfCFTA-driven opportunities.",
    "Stronger climate-aligned, resilient food systems.",
    "Empowered youth and women agripreneurs scaling competitive enterprises.",
    "Agricultural cooperatives driving inclusive rural economic transformation.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Agriculture & Food</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We strengthen Africa’s food systems through cooperative enterprise, climate-smart farming, and agribusiness structuring. Our work links farmers, processors, and markets into integrated value chains that are productive, profitable, and resilient.</p>
          <p>By aligning agriculture with finance, technology, and regional trade frameworks, we support the shift from subsistence to enterprise, unlocking investment opportunities and driving rural transformation.</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Programmatic Interventions</h2>
          <ul className="space-y-4">
            {programmaticInterventions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="size-5 text-primary mt-1 shrink-0" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Advisory & Consulting</h2>
          <ul className="space-y-4">
            {advisoryServices.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="size-5 text-primary mt-1 shrink-0" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

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
