import { Card, CardContent } from "@/components/ui/card";
import { Check, Goal, Coins, Recycle, Shield, Megaphone, Milestone, Users, Handshake, HandHeart } from "lucide-react";


export default function NonProfitSectorPage() {
  const interventions = [
    { icon: <Goal className="size-8 text-primary" />, title: "Impact Measurement & Learning", text: "Dashboards and evaluation frameworks to track outcomes and strengthen accountability." },
    { icon: <Coins className="size-8 text-primary" />, title: "Fundraising & Donor Diversification", text: "Multi-stream financing strategies blending grants, philanthropy, and impact investment." },
    { icon: <Recycle className="size-8 text-primary" />, title: "Social Enterprise Structuring", text: "Hybrid models that generate income while delivering mission impact." },
    { icon: <Shield className="size-8 text-primary" />, title: "Nonprofit Governance Labs", text: "Board strengthening, compliance systems, and anti-corruption safeguards." },
    { icon: <Megaphone className="size-8 text-primary" />, title: "Advocacy & Civic Engagement", text: "Collective advocacy for legal reforms and inclusive policymaking." },
    { icon: <Milestone className="size-8 text-primary" />, title: "Philanthropy Innovation Models", text: "New African-led philanthropic frameworks, endowments, and pooled funds." },
    { icon: <Users className="size-8 text-primary" />, title: "Localization & Aid Transition Support", text: "Helping organizations adapt as aid shifts towards locally led development." },
    { icon: <Handshake className="size-8 text-primary" />, title: "Development Partnerships & Policy", text: "Pathways for nonprofits to influence government budgets and donor agendas." },
  ];

  const impactPathways = [
    "Financially resilient nonprofits with diversified funding models.",
    "Professionalized governance and transparency, enhancing trust and credibility.",
    "Nonprofits positioned as development partners, not subcontractors.",
    "Locally led institutions shaping policy and development priorities.",
    "Stronger civic space, with nonprofits championing accountability.",
    "Shift from aid-dependence to enterprise-driven sustainability."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Non-Profit Sector</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Africa’s nonprofit, philanthropy, and development sector is at a crossroads. For decades, aid has driven programs, but too often it has created dependency, fragmented priorities, and shallow impact. Meanwhile, African societies are grappling with youth unemployment, fragile health systems, climate risks, and governance gaps that require bold, locally led solutions.</p>
          <p>At Credence Africa, we reposition nonprofits, foundations, and social enterprises to move from aid-dependence to enterprise-driven sustainability and systemic influence. We focus on governance, financial resilience, and policy engagement, equipping organizations to align with Africa’s growth agenda and deliver measurable impact at scale.</p>
          <p>Our model builds professional, investable, and trusted institutions — nonprofits that can partner credibly with governments, attract blended capital, and influence national and continental policy priorities.</p>
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
