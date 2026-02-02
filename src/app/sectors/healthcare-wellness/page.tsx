import { Card, CardContent } from "@/components/ui/card";
import { Check, Banknote, Monitor, Truck, Shield, GraduationCap, Building, Users, Database, HeartPulse } from "lucide-react";

export default function HealthcareWellnessPage() {
  const interventions = [
    { icon: <Banknote className="size-8 text-primary" />, title: "Healthcare Finance Platforms", text: "Blended finance, risk guarantees, and insurance-backed solutions for health facilities." },
    { icon: <Monitor className="size-8 text-primary" />, title: "Digital Health & Telemedicine", text: "Leveraging mobile platforms and AI diagnostics to expand access to remote populations." },
    { icon: <Truck className="size-8 text-primary" />, title: "Healthcare Supply Chain Programs", text: "Modernizing procurement and distribution to improve access to medicines." },
    { icon: <Shield className="size-8 text-primary" />, title: "Patient Safety & Quality Standards", text: "Building systems for ethics, accreditation, and continuous compliance." },
    { icon: <GraduationCap className="size-8 text-primary" />, title: "Workforce Skilling & Entrepreneurship", text: "Equipping health professionals with clinical, managerial, and enterprise skills." },
    { icon: <Building className="size-8 text-primary" />, title: "Healthcare Infrastructure Solutions", text: "Supporting facility expansion, PPP models, and climate-smart hospitals." },
    { icon: <Users className="size-8 text-primary" />, title: "Community Health & Preventive Care", text: "Advancing grassroots initiatives for early detection and primary care." },
    { icon: <Database className="size-8 text-primary" />, title: "Health Data & Insights Platforms", text: "Enabling real-time monitoring of health outcomes and disease surveillance." },
  ];

  const impactPathways = [
    "Expanded healthcare access and affordability for underserved populations.",
    "Digitally enabled health systems reducing barriers to timely and quality care.",
    "Financially resilient health institutions ready for investment.",
    "Empowered health workers as professionals, entrepreneurs, and cooperative leaders.",
    "Improved supply chain integrity for essential drugs and technologies.",
    "Stronger preventive care systems reducing long-term health burdens.",
    "Climate-smart hospitals aligned with sustainability and resilience goals.",
    "Restored public trust in healthcare through accountability and quality assurance.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Healthcare & Wellness</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We strengthen Africa’s healthcare ecosystem by combining professionalism with entrepreneurial and digital models. Our approach recognizes that healthcare in Africa is not only a service but also a cornerstone of economic and social stability. We link hospitals, clinics, policymakers, insurers, and private investors to design systems that are financially viable, accessible, and patient-centered.</p>
          <p>By addressing financing gaps, fragmented supply chains, workforce shortages, and slow adoption of digital health solutions, we enable healthcare institutions to transition from fragile and donor-dependent models to sustainable, scalable systems of care. We also integrate healthcare with broader development goals, including climate resilience, gender equity, and cooperative-led service delivery.</p>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
