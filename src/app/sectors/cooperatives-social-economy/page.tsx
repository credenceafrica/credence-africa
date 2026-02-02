import { Card, CardContent } from "@/components/ui/card";
import { Check, Handshake, GraduationCap, TestTube, Wind, Calendar, BarChart, FileText, Settings, AreaChart, Award, Banknote } from "lucide-react";

export default function CooperativesSocialEconomyPage() {
  const interventions = [
    { icon: <GraduationCap className="size-8 text-primary" />, title: "Coop Leadership Academy", text: "Empowering leaders with accredited training in governance, financial management, and strategic leadership." },
    { icon: <TestTube className="size-8 text-primary" />, title: "Coop Innovate Labs", text: "A hub for co-developing sector-specific technologies tailored to the needs of cooperatives." },
    { icon: <Wind className="size-8 text-primary" />, title: "Coop Climate", text: "Supporting cooperatives in adopting renewable energy, carbon reduction strategies, and accessing climate finance." },
    { icon: <Calendar className="size-8 text-primary" />, title: "Coop Festival", text: "Celebrating cooperative achievements through exhibitions, networking, and entertainment to inspire collaboration." },
    { icon: <BarChart className="size-8 text-primary" />, title: "Coop Business Summit", text: "High-level forums connecting leaders, policymakers, and experts to shape growth strategies." },
    { icon: <FileText className="size-8 text-primary" />, title: "Coop Impact", text: "Showcasing cooperative contributions through reports, case studies, and data-driven insights." },
    { icon: <Settings className="size-8 text-primary" />, title: "Coop Policy Forum", text: "Influencing policy for cooperative growth through dialogues with policymakers and development partners." },
    { icon: <AreaChart className="size-8 text-primary" />, title: "Coop Connect Expo", text: "A premier marketplace for showcasing cooperative products and services, fostering B2B opportunities." },
    { icon: <Award className="size-8 text-primary" />, title: "Coop Excellence Awards", text: "Recognizing cooperatives excelling in governance, sustainability, innovation, and community impact." },
    { icon: <Banknote className="size-8 text-primary" />, title: "Coop Finance Accelerator", text: "Unlocking financial potential by facilitating access to affordable financing and providing financial literacy tools." },
  ];

  const impactPathways = [
    "Enhancing operational excellence through tailored training and capacity building.",
    "Fostering innovation and sustainability with technology and climate-smart practices.",
    "Advocating for a stronger cooperative ecosystem with enabling policies.",
    "Expanding market access by connecting cooperatives to local, regional, and global opportunities.",
    "Promoting inclusive growth by empowering women, youth, and marginalized communities.",
    "Driving measurable outcomes in efficiency, sustainability, and socio-economic transformation.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Cooperatives & Social Economy</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We are a transformative initiative dedicated to redefining the cooperative sector across the continent. By delivering innovative solutions, forging strategic partnerships, and advocating for sustainable practices, we empower cooperatives to thrive as key players in driving socio-economic transformation.</p>
          <p>Focusing on operational excellence, innovation, and inclusive growth, we promote cooperatives as vital engines of economic resilience and community development. We are dedicated to strengthening the cooperative movement at its core by offering targeted solutions that enhance performance, expand market access, and amplify sector-wide impact.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Flagship Offerings</h2>
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
        <h2 className="text-3xl font-bold text-center mb-10">Key Areas of Impact</h2>
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
