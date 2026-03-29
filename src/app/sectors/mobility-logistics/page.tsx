import { Card, CardContent } from "@/components/ui/card";
import { Check, Bus, Rocket, Banknote, ShieldCheck, UserCheck, Heart, Handshake } from "lucide-react";

export default function MobilityLogisticsPage() {
    const interventions = [
        { icon: <Rocket className="size-8 text-primary" />, title: "Green & Equitable Mobility", text: "Scaling EV deployment, promoting inclusive urban design, and integrating transport into climate policies." },
        { icon: <Banknote className="size-8 text-primary" />, title: "Finance & Investment", text: "Mobilizing blended finance, building investment-ready projects, and enabling cooperative financing models." },
        { icon: <ShieldCheck className="size-8 text-primary" />, title: "Legal & Policy Reform", text: "Drafting progressive transport policies and harmonizing regulations across counties and borders." },
        { icon: <Handshake className="size-8 text-primary" />, title: "Informal Sector Transformation", text: "Structuring informal operators into formal cooperatives with digital systems and shared assets." },
        { icon: <UserCheck className="size-8 text-primary" />, title: "Inclusive Leadership & Skills", text: "Providing TVET-linked skilling, apprenticeships, and leadership pathways for youth and women." },
        { icon: <Heart className="size-8 text-primary" />, title: "Safety & Social Protection", text: "Implementing smart driver training, safe transit zones, and digital ID systems for operators." },
    ];

    const impactPathways = [
        "A cleaner, safer, and more efficient mobility ecosystem for all.",
        "Formalized transport sector with cooperative-led enterprises.",
        "Increased capital flows into sustainable transport infrastructure.",
        "Empowered youth and women in the mobility economy.",
        "Enhanced safety and security for commuters and transport workers."
    ];

    return (
        <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Mobility & Logistics</h1>
            </header>

            <section>
                <h2 className="text-3xl font-bold text-center">Our Approach</h2>
                <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                    <p>Credence Mobility is a pan-African platform reimagining how people and goods move across the continent. We are building a cleaner, safer, cooperative-led, and economically empowering mobility ecosystem — for everyday commuters and for the transport workforce that keeps Africa moving.</p>
                    <p>As a social enterprise and strategic convener, we operate at the intersection of infrastructure, finance, policy reform, skills development, and digital innovation. Our work champions cooperative-led models and supports governments in planning and delivery, accelerating inclusive, future-ready transformation through multi-stakeholder partnerships.</p>
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
