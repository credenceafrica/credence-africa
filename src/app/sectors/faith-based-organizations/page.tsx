
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, Briefcase, Banknote, HandHeart, MessageSquareQuote, Shield, Laptop, Handshake, BookOpen, Coins } from "lucide-react";

export default function FaithBasedOrganizationsPage() {
  const programmaticInterventions = [
    { icon: <ShieldCheck className="size-8 text-primary" />, title: "Faith Governance & Accountability Models", text: "Strengthening boards and leadership councils with systems for financial transparency, ethical stewardship, and compliance." },
    { icon: <Briefcase className="size-8 text-primary" />, title: "Faith Ventures Structuring", text: "Designing cooperative initiatives, social enterprises, and mission-aligned businesses to reduce reliance on offerings and donations." },
    { icon: <Banknote className="size-8 text-primary" />, title: "Endowment & Asset Management", text: "Establishing endowment funds, real estate trusts, and investment portfolios for long-term financial security." },
    { icon: <HandHeart className="size-8 text-primary" />, title: "Community Service & Social Impact Models", text: "Scaling faith-driven service delivery in education, healthcare, social welfare, and community media with professional standards." },
    { icon: <MessageSquareQuote className="size-8 text-primary" />, title: "Faith & Public Policy Dialogues", text: "Supporting leaders to engage civic processes, influence governance, and promote ethical, accountable politics." },
    { icon: <Shield className="size-8 text-primary" />, title: "Safeguarding & Protection Frameworks", text: "Building institutional systems to protect children, women, and vulnerable groups against abuse and exploitation." },
    { icon: <Laptop className="size-8 text-primary" />, title: "Faith Sector Digital Transformation", text: "Supporting adoption of financial management systems, digital giving platforms, governance dashboards, and communication tools for modern ministry." },
    { icon: <Handshake className="size-8 text-primary" />, title: "Conflict Mediation & Peacebuilding Platforms", text: "Training faith leaders to mediate community disputes, prevent electoral violence, and advance interfaith harmony." },
    { icon: <BookOpen className="size-8 text-primary" />, title: "Civic Education Through Faith Institutions", text: "Leveraging the influence of faith platforms to teach values of justice, equity, taxation, and responsible citizenship." },
    { icon: <Coins className="size-8 text-primary" />, title: "Faith-Based Finance & Cooperative Models", text: "Structuring cooperative SACCOs, insurance schemes, and group-based finance systems within congregations to empower members economically." },
  ];
  
  const impactPathways = [
    "Transparent, financially sustainable institutions capable of stewarding resources with integrity.",
    "Faith leaders as credible governance actors shaping public discourse and civic responsibility.",
    "Professionalized delivery of education, healthcare, and social services through structured faith enterprises.",
    "Reduced vulnerability to financial mismanagement and donor-dependency.",
    "Stronger protection systems for children, women, and marginalized groups within faith communities.",
    "Digitally enabled religious organizations with modern systems for finance, accountability, and communication.",
    "Faith institutions as economic engines through ventures, cooperatives, and local enterprise models.",
    "Strengthened peace, justice, and civic engagement anchored in Africa’s values and traditions of faith.",
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Faith-Based Organizations</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We partner with churches, mosques, temples, and interfaith networks to evolve from fragile, donation-reliant models into professional, transparent, and economically resilient institutions. Faith-based organizations hold unmatched influence in Africa’s social fabric—yet many remain vulnerable to financial fragility, weak governance, and limited capacity to scale their community impact.</p>
          <p>Our work restores credibility and sustainability to religious institutions by embedding governance reforms, financial stewardship, social enterprise structuring, and civic engagement strategies. In doing so, we position faith communities not only as spiritual anchors but as drivers of Africa’s inclusive growth, ethical leadership, and institutional renewal.</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmaticInterventions.map(item => (
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
