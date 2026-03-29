import { Card, CardContent } from "@/components/ui/card";
import { Check, BookOpen, MonitorPlay, Shield, Briefcase, Users, GraduationCap, Globe, Banknote, Rocket } from "lucide-react";


export default function EducationSkillsDevelopmentPage() {
  const interventions = [
      { icon: <BookOpen className="size-8 text-primary" />, title: "Curriculum Innovation Labs", text: "Designing competency-based, industry-aligned models that connect classrooms to real economies." },
      { icon: <MonitorPlay className="size-8 text-primary" />, title: "Digital Learning Hubs", text: "Scaling edtech adoption for schools, TVETs, and higher education for accessible quality." },
      { icon: <Shield className="size-8 text-primary" />, title: "Institutional Leadership Programs", text: "Strengthening governance, financial stewardship, and strategic leadership in education." },
      { icon: <Briefcase className="size-8 text-primary" />, title: "Skills-to-Enterprise Pathways", text: "Linking vocational training to SMEs, startups, and job creation in growth sectors." },
      { icon: <Users className="size-8 text-primary" />, title: "Policy Advisory Platforms", text: "Supporting ministries to design reforms, financing models, and PPPs." },
      { icon: <GraduationCap className="size-8 text-primary" />, title: "Teacher & Trainer Professionalization", text: "Continuous skilling for educators in modern pedagogy and digital fluency." },
      { icon: <Globe className="size-8 text-primary" />, title: "Regional Skills Frameworks", text: "Harmonizing training standards across EAC, COMESA, and AfCFTA." },
      { icon: <Banknote className="size-8 text-primary" />, title: "Education Finance & Access Solutions", text: "Creating blended financing models to make education affordable." },
      { icon: <Rocket className="size-8 text-primary" />, title: "Youth Futures Accelerator™", text: "Combining training, mentorship, and incubation for young people." },
  ];

  const impactPathways = [
    "Youth equipped with market-relevant skills and clear entry routes into work and enterprise.",
    "Digitally enabled schools, TVETs, and universities that can scale access and improve learning outcomes.",
    "Education institutions with professionalized governance and financial sustainability.",
    "Policy frameworks that align education with industrialization, innovation, and national economic strategies.",
    "Expanded access to affordable education through innovative financing and cooperative-led models.",
    "A workforce that is regionally mobile and globally competitive, reducing underemployment and skills mismatch."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Education & Skills Development</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>Africa’s greatest opportunity is also its greatest challenge: a fast-growing youth population entering systems that are underfunded, misaligned with labor markets, and increasingly privatized. Education risks becoming both unaffordable and irrelevant if not urgently restructured.</p>
          <p>At Credence Africa, we bridge the gap between learning and livelihoods. We align education systems with labor market demand, enterprise growth, and national development priorities. Through partnerships with governments, training institutions, and the private sector, we drive curriculum innovation, digital adoption, and enterprise-linked skilling to build a resilient, future-ready workforce that can compete locally, regionally, and globally.</p>
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
