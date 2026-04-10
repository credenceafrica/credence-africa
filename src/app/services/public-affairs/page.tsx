"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowUpRight,
  Landmark,
  ShieldCheck,
  Users,
  MessageSquare,
  Map,
  Search,
  FileText,
  Handshake,
  CheckCircle2,
  Mail,
  Phone,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const advisoryServices = [
  {
    title: "Government Relations and Institutional Engagement",
    description: "We help institutions build disciplined and credible engagement with government and public institutions. This includes stakeholder identification, engagement planning, institutional positioning, issue framing, and support across high value public sector interfaces.",
    icon: <Users className="size-8 text-primary" />
  },
  {
    title: "Regulatory Navigation and Approvals",
    description: "We support institutions facing licensing, approvals, compliance requirements, and regulatory coordination challenges. This includes regulatory scanning, approvals strategy, sequencing, escalation support, and coordination across multiple public bodies.",
    icon: <ShieldCheck className="size-8 text-primary" />
  },
  {
    title: "Policy Advisory and Advocacy",
    description: "We help institutions interpret policy change, develop positions, participate in reform processes, and engage strategically in consultation and advocacy environments. This includes policy analysis, response strategy, advocacy planning, and stakeholder engagement around reform.",
    icon: <MessageSquare className="size-8 text-primary" />
  },
  {
    title: "Stakeholder Mapping and Political Economy Insight",
    description: "We help clients understand who influences outcomes, where alignment or friction may emerge, and how institutional interests shape decisions. This includes stakeholder mapping, influence analysis, issue sensitivity assessment, and engagement sequencing.",
    icon: <Map className="size-8 text-primary" />
  },
  {
    title: "Public Sector Interface Management",
    description: "We support the practical execution side of public affairs mandates. This includes preparation for meetings, submissions, follow up, approvals tracking, issue escalation, and structured coordination across public institutions.",
    icon: <Handshake className="size-8 text-primary" />
  }
];

const productPathways = [
  {
    title: "Government Relations",
    description: "For institutions that need structured, senior level engagement with ministries, regulators, counties, agencies, and public sector stakeholders.",
    focus: "Supports relationship planning, issue management, institutional positioning, and engagement strategy where objectives depend on effective public sector alignment.",
    icon: <Users className="size-8 text-primary" />,
    cta: "Discuss Government Relations"
  },
  {
    title: "Regulatory Navigator",
    description: "For institutions managing approvals, licensing pathways, regulatory change, and compliance related decision environments.",
    focus: "Supports regulatory scanning, licensing strategy, approvals sequencing, issue identification, and coordination across complex regulatory systems.",
    icon: <Search className="size-8 text-primary" />,
    cta: "Explore Regulatory Navigator"
  },
  {
    title: "Policy Advocacy",
    description: "For institutions engaging policy reform, sector dialogue, consultation processes, and market shaping regulation.",
    focus: "Supports policy analysis, institutional position development, advocacy strategy, reform participation, consultation response, and coalition engagement.",
    icon: <FileText className="size-8 text-primary" />,
    cta: "Discuss Policy Advocacy"
  },
  {
    title: "POLICY & MARKETS™",
    description: "For institutions that need forward visibility on emerging policy, upcoming regulation, and the market implications of reform.",
    focus: "Executive policy briefings, regulatory outlook sessions, and sector specific reform roundtables designed to help you interpret regulatory direction early.",
    icon: <Zap className="size-8 text-primary" />,
    cta: "Join POLICY & MARKETS™"
  },
  {
    title: "Public Sector Interface",
    description: "For institutions requiring structured support across live approvals, submissions, meetings, and public sector processes.",
    focus: "Supports execution where progress depends on disciplined engagement, coordinated follow through, and consistent management of public sector interactions.",
    icon: <Handshake className="size-8 text-primary" />,
    cta: "Discuss Public Sector Interface"
  }
];

const faqs = [
  { 
    q: "What is the first step when facing a regulatory or policy issue?", 
    a: "The first step is to define the issue precisely. That includes understanding the relevant institutions, approval points, stakeholder interests, timing, commercial implications, and likely reform pathway." 
  },
  { 
    q: "Do you support both government relations and regulatory approvals?", 
    a: "Yes. Credence Africa supports strategic engagement with public institutions and the practical coordination required across approvals, submissions, follow up, and issue tracking." 
  },
  { 
    q: "Can you support policy reform and advocacy?", 
    a: "Yes. We support policy interpretation, position development, consultation engagement, advocacy strategy, and structured participation in reform environments." 
  },
  { 
    q: "What is POLICY & MARKETS™?", 
    a: "POLICY & MARKETS™ is Credence Africa’s virtual and in person executive briefing platform focused on upcoming policy, regulation, and the market implications of reform." 
  },
  { 
    q: "Can POLICY & MARKETS™ be delivered for a sector, institution, or association?", 
    a: "Yes. It can be delivered as a public session, a private institutional briefing, a sector roundtable, an executive forum, or a closed dialogue depending on the audience and issue." 
  },
  { 
    q: "Do you support market entrants in regulated sectors?", 
    a: "Yes. We support market entrants through regulatory scanning, approvals planning, stakeholder mapping, public sector engagement, and issue coordination." 
  },
  { 
    q: "Can you provide ongoing public affairs support?", 
    a: "Yes. Ongoing support can be structured through retained advisory, issue monitoring, stakeholder engagement, or recurring POLICY & MARKETS™ sessions." 
  }
];

export default function PublicAffairsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop"
            alt="Public Affairs Africa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Public Affairs and Regulatory Strategy in Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Clarity
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Navigate regulation, policy, and institutional complexity with strategic clarity.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Regulatory Influence
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Engage government, manage regulatory exposure, secure approvals, and shape policy positioning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Book a Public Affairs Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Discuss a Regulatory Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Executive Positioning</h2>
              <h3 className="text-3xl md:text-4xl font-normal text-foreground leading-tight">Public Affairs: Where Policy Shapes Markets</h3>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>In African markets, commercial execution is often influenced by regulation, institutional process, and policy direction. Licensing determines speed to market. Reform can alter sector economics.</p>
                <p>Credence Africa provides a structured platform that brings together regulatory strategy, government relations, stakeholder mapping, policy analysis, and execution support to help institutions move with greater coherence.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary h-12 px-8">
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>
            <div className="bg-muted p-8 md:p-12 border-l-4 border-primary">
              <p className="text-xl font-light italic leading-relaxed">
                "Licensing determines speed to market. Reform can alter sector economics. We help institutions move with stronger foresight and better positioning."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Advise */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Designed for Executive Teams and Regulated Market Participants</h2>
            <p className="text-muted-foreground font-light">Built for institutions whose commercial priorities are materially shaped by public systems or policy change.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Regulated businesses managing multi-agency interfaces",
              "Companies entering sectors where approvals are critical",
              "Investors and funds with market-shaping interfaces",
              "Industry associations engaging on reform",
              "Development actors in policy-sensitive sectors",
              "Boards requiring stronger public affairs capability",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90 font-light">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/consult">Discuss Your Public Affairs Objective <ArrowUpRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Help Solve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Strategic Support Across Regulation and Policy</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We help leadership teams interpret the environment accurately, structure the right engagement pathway, and move with greater confidence.
              </p>
              <div className="space-y-4">
                {[
                  "Navigate complex licensing and regulatory approvals",
                  "Build structured government relations strategies",
                  "Anticipate and respond to policy reform and legislative change",
                  "Shape policy positions and advocacy priorities",
                  "Map stakeholder interests and political economy risk",
                  "Coordinate public sector interfaces across multiple levels"
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-light text-foreground/80">{val}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-none px-10">
                <Link href="/consult">Explore the Right Public Affairs Pathway</Link>
              </Button>
            </div>
            <div className="relative aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop"
                alt="Institutional Engagement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-normal mb-16 text-center">Core Advisory Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-normal text-primary leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-none px-10">
              <Link href="/consult">Book a Public Affairs Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Pathways */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Product Pathways</h2>
            <p className="text-muted-foreground font-light">Specialized tracks matching your institution's profile and strategic needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPathways.map((product) => (
              <Card key={product.title} className="rounded-none border hover:border-primary transition-colors flex flex-col">
                <CardHeader className="p-8">
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle className="text-2xl font-normal text-foreground">{product.title}</CardTitle>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mt-2">{product.description}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed flex-grow">{product.focus}</p>
                  <Button asChild variant="outline" className="w-full mt-8 rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/consult">{product.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why POLICY & MARKETS™ Matters */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight text-primary">Why POLICY & MARKETS™ Matters</h2>
              <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
                <p>Most institutions do not struggle because policy change happens. They struggle because they interpret it too late, engage too late, or respond without structure.</p>
                <p>POLICY & MARKETS™ exists to solve that problem. It gives leadership teams, sector platforms, investors, and regulated businesses a dedicated forum to understand what is coming, why it matters, and who is driving it.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Executive policy briefings",
                  "Regulatory outlook sessions",
                  "Sector specific roundtables",
                  "Market implication discussions",
                  "Closed door briefings",
                  "Strategic response planning"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Zap className="size-4 text-primary" /> {item}
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-16 font-bold w-full sm:w-auto">
                <Link href="/consult">Join the Next Session</Link>
              </Button>
            </div>
            <div className="relative aspect-video lg:aspect-square bg-muted/10 border border-white/10 p-12 flex flex-col justify-center text-center space-y-8">
               <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Early Visibility</p>
                  <h4 className="text-2xl font-normal italic">"Move policy discussion out of the abstract and into decision making."</h4>
               </div>
               <div className="border-t border-white/10 pt-8 space-y-4">
                  <p className="text-sm font-light">Identify risk earlier, allocate attention more intelligently, and build internal readiness before reform begins to affect outcomes.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">A More Strategic Approach to Public Affairs</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Institutions engage Credence Africa when fragmented communication with public institutions is no longer enough. We translate regulatory complexity into actionable priorities.
              </p>
              <div className="space-y-4">
                {[
                  "Translate complexity into actionable strategic priorities",
                  "Bring structure to government engagement and positioning",
                  "Anticipate reform risk before operational disruption",
                  "Connect stakeholder mapping with execution pathways",
                  "Interpret change early through POLICY & MARKETS™"
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                    <span className="text-sm font-light leading-tight">{val}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-none px-10">
                <Link href="/consult">See How Your Mandate Can Be Structured</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-muted relative">
                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Strategy" fill className="object-cover grayscale" />
              </div>
              <div className="aspect-[3/4] bg-primary relative translate-y-8">
                <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" alt="Execution" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">How Engagement Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Understanding the issue, institutional context, and strategic objective." },
              { step: "2", title: "Mandate Structuring", desc: "Defining advisory pathway, scope, sequencing, and delivery model." },
              { step: "3", title: "Mapping & Positioning", desc: "Assessing institutions, decision pathways, and reform signals." },
              { step: "4", title: "Execution", desc: "Support through meetings, submissions, and advocacy engagement." },
              { step: "5", title: "Ongoing Advisory", desc: "Issue monitoring, regulatory tracking, and executive support." }
            ].map((s) => (
              <div key={s.step} className="space-y-4">
                <div className="text-4xl font-bold text-primary opacity-20">{s.step}</div>
                <h4 className="font-normal text-lg leading-tight">{s.title}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-none px-12 h-14 font-bold">
              <Link href="/consult">Book a Public Affairs Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-normal mb-12 text-center">Public Affairs FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-base md:text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-6 leading-relaxed font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">Public Affairs Support for Strategic Control</h2>
              <p className="text-lg opacity-80 font-light leading-relaxed">
                If your institution is navigating approvals, policy reform, stakeholder pressure, or emerging regulation, Credence Africa provides the strategic support to move that mandate forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-8">
                  <Link href="/consult">Book a Public Affairs Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white/10 h-14 px-8">
                  <Link href="/consult">Discuss a Policy Mandate</Link>
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/5 border-white/10 p-8 md:p-12 rounded-none text-white">
              <h3 className="text-2xl font-normal mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <a href="mailto:connect@credence.africa" className="flex items-center gap-4 text-xl hover:text-white transition-colors">
                  <Mail className="size-6 text-white" /> connect@credence.africa
                </a>
                <a href="tel:+254719468240" className="flex items-center gap-4 text-xl hover:text-white transition-colors">
                  <Phone className="size-6 text-white" /> +254 719 468 240
                </a>
                <Button asChild variant="link" className="text-white p-0 text-lg hover:underline">
                   <Link href="/consult" className="flex items-center gap-2">Join POLICY & MARKETS™ <ArrowUpRight className="size-5" /></Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
