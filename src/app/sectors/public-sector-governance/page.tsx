import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageSquareQuote, ShieldCheck, Banknote, Laptop, UserCheck, GraduationCap, Map, Users, Landmark } from "lucide-react";

export default function PublicSectorGovernancePage() {
  const interventions = [
    { icon: <MessageSquareQuote className="size-8 text-primary" />, title: "Policy Reform Dialogues", text: "Platforms for governments, civil society, and the private sector to co-create inclusive laws." },
    { icon: <ShieldCheck className="size-8 text-primary" />, title: "Governance & Accountability Models", text: "Anti-corruption systems, ethics frameworks, and performance audits." },
    { icon: <Banknote className="size-8 text-primary" />, title: "Public Finance Reform Labs", text: "Programs on revenue mobilization, tax justice, and budgeting efficiency." },
    { icon: <Laptop className="size-8 text-primary" />, title: "Digital Governance Systems", text: "E-government platforms, open data initiatives, and AI-enabled service delivery." },
    { icon: <UserCheck className="size-8 text-primary" />, title: "Citizen Engagement Platforms", text: "Structured civic participation through scorecards and digital platforms." },
    { icon: <GraduationCap className="size-8 text-primary" />, title: "Institutional Leadership & Capacity", text: "Training for civil servants to deliver with integrity and competence." },
    { icon: <Map className="size-8 text-primary" />, title: "Decentralization & County Governance", text: "Strengthening sub-national governance with fiscal autonomy and planning tools." },
    { icon: <Users className="size-8 text-primary" />, title: "Civic Space Protection", text: "Supporting legal frameworks that safeguard freedom of expression and association." },
  ];

  const impactPathways = [
    "Transparent and accountable public institutions trusted by citizens.",
    "Efficient and equitable mobilization of resources for development.",
    "Digitally enabled governments delivering faster, fairer, and more reliable services.",
    "Expanded civic space, empowering citizens to shape governance outcomes.",
    "Public institutions capable of driving structural transformation in key sectors."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Public Sector & Governance</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Africa’s economic transformation hinges on one critical pillar: the credibility and capacity of public institutions. Yet across the continent, public administration remains constrained by weak governance, corruption, underfunded systems, and shallow citizen engagement. Civic spaces are shrinking, tax systems struggle to mobilize domestic revenue, and public finance often fails to translate into service delivery.</p>
          <p>At Credence Africa, we strengthen governance systems by embedding transparency, accountability, and citizen-centered service delivery. Our approach combines policy reform, institutional capacity-building, and digital governance to create governments that are responsive, credible, and capable of driving Africa’s next growth frontier.</p>
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
