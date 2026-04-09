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
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  ShieldCheck, 
  Target, 
  Zap, 
  Users, 
  BarChart, 
  ArrowUpRight,
  Search,
  MessageSquare,
  FileText,
  Map,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const targetAudience = [
  "Regulated businesses managing licensing, compliance exposure, and multi-agency interfaces",
  "Companies entering or expanding into sectors where approvals and regulatory clarity are critical",
  "Investors, funds, and project sponsors with public sector, infrastructure, or market-shaping interfaces",
  "Industry associations, chambers, and sector platforms engaging on reform and institutional alignment",
  "Development actors and ecosystem institutions operating in policy-sensitive sectors",
  "Boards, founders, and executive teams that need stronger public affairs capability to support growth"
];

const solvingPoints = [
  "Navigate complex licensing and regulatory approval environments",
  "Build structured government relations and institutional engagement strategies",
  "Anticipate and respond to policy reform and legislative change",
  "Shape policy positions and advocacy priorities with greater credibility",
  "Map stakeholder interests, influence patterns, and political economy risk",
  "Coordinate public sector interfaces across ministries, regulators, counties, and agencies",
  "Understand how upcoming regulation may affect market entry, operations, investment, or sector growth"
];

const advisoryServices = [
  {
    title: "Government Relations and Institutional Engagement",
    description: "We help institutions build disciplined and credible engagement with government and public institutions. This includes stakeholder identification, engagement planning, institutional positioning, issue framing, and support across high-value public sector interfaces.",
    icon: <Users className="size-6 text-primary" />
  },
  {
    title: "Regulatory Navigation and Approvals",
    description: "We support institutions facing licensing, approvals, compliance requirements, and regulatory coordination challenges. This includes regulatory scanning, approvals strategy, sequencing, escalation support, and coordination across multiple public bodies.",
    icon: <ShieldCheck className="size-6 text-primary" />
  },
  {
    title: "Policy Advisory and Advocacy",
    description: "We help institutions interpret policy change, develop positions, participate in reform processes, and engage strategically in consultation and advocacy environments. This includes policy analysis, response strategy, advocacy planning, and stakeholder engagement around reform.",
    icon: <MessageSquare className="size-6 text-primary" />
  },
  {
    title: "Stakeholder Mapping and Political Economy Insight",
    description: "We help clients understand who influences outcomes, where alignment or friction may emerge, and how institutional interests shape decisions. This includes stakeholder mapping, influence analysis, issue sensitivity assessment, and engagement sequencing.",
    icon: <Map className="size-6 text-primary" />
  },
  {
    title: "Public Sector Interface Management",
    description: "We support the practical execution side of public affairs mandates. This includes preparation for meetings, submissions, follow-up, approvals tracking, issue escalation, and structured coordination across public institutions.",
    icon: <Target className="size-6 text-primary" />
  }
];

const productPathways = [
  {
    title: "Government Relations",
    shortCopy: "Structured engagement with public institutions to support growth, positioning, and strategic alignment.",
    description: "For institutions that need structured, senior-level engagement with ministries, regulators, counties, agencies, and public sector stakeholders.",
    details: "Government Relations supports relationship planning, issue management, institutional positioning, and engagement strategy where commercial or strategic objectives depend on effective public sector alignment.",
    cta: "Discuss Government Relations"
  },
  {
    title: "Regulatory Navigator",
    shortCopy: "Regulatory scanning, approvals strategy, and coordinated support across complex licensing environments.",
    description: "For institutions managing approvals, licensing pathways, regulatory change, and compliance-related decision environments.",
    details: "Regulatory Navigator supports regulatory scanning, licensing strategy, approvals sequencing, issue identification, and coordination across complex regulatory systems.",
    cta: "Explore Regulatory Navigator"
  },
  {
    title: "Policy Advocacy",
    shortCopy: "Policy analysis, consultation engagement, and advocacy strategy for institutions operating in reform-driven sectors.",
    description: "For institutions engaging policy reform, sector dialogue, consultation processes, and market-shaping regulation.",
    details: "Policy Advocacy supports policy analysis, institutional position development, advocacy strategy, reform participation, consultation response, and coalition engagement.",
    cta: "Discuss Policy Advocacy"
  },
  {
    title: "POLICY & MARKETS™",
    shortCopy: "Executive briefings and strategic forums on upcoming policy, regulation, and market implications.",
    description: "For institutions that need forward visibility on emerging policy, upcoming regulation, and the market implications of reform.",
    details: "Credence Africa’s executive briefing and convening platform delivered through virtual sessions and in-person forums. It breaks down regulatory change, pending legislation, sector-specific reform, and institutional developments.",
    items: [
      "Executive policy briefings",
      "Regulatory outlook sessions",
      "Sector-specific reform roundtables",
      "Market implication discussions",
      "Leadership dialogues on policy risk and strategic response"
    ],
    cta: "Join the Next POLICY & MARKETS™ Session",
    highlight: true
  },
  {
    title: "Public Sector Interface",
    shortCopy: "Practical coordination across submissions, meetings, approvals, and public sector processes.",
    description: "For institutions requiring structured support across live approvals, submissions, meetings, and public sector processes.",
    details: "Public Sector Interface supports execution where progress depends on disciplined engagement, coordinated follow-through, and consistent management of public sector interactions.",
    cta: "Discuss Public Sector Interface"
  }
];

const issuesList = [
  "Licensing reform and approval bottlenecks",
  "Entry into regulated sectors",
  "Emerging sector regulation and oversight changes",
  "Policy reforms affecting market access or business models",
  "Investor or project mandates requiring public sector coordination",
  "Advocacy around consultation, reform, or institutional positioning",
  "Regulatory uncertainty affecting expansion or deployment decisions",
  "National and county-level interface challenges",
  "Market-shaping legislation with commercial consequences",
  "Sector ecosystems that require informed dialogue through POLICY & MARKETS™"
];

const representativeMandates = [
  "A company entering a regulated market and requiring approvals strategy, stakeholder mapping, and regulator engagement support",
  "An investor-backed project requiring structured coordination across ministries, regulators, and implementing institutions",
  "A business responding to upcoming regulatory change and needing strategic interpretation and response planning",
  "An association preparing consultation submissions and sector engagement around reform",
  "An executive team seeking a recurring briefing platform to interpret policy developments affecting its sector",
  "A market entrant that needs stronger public positioning and institutional alignment before launch",
  "A sector platform or ecosystem body convening POLICY & MARKETS™ to help members understand upcoming reform"
];

const engagementSteps = [
  { title: "1. Consultation", desc: "We begin by understanding the issue, the institution, the market context, the regulatory environment, and the strategic objective." },
  { title: "2. Mandate Structuring", desc: "We define the advisory pathway, key issues, stakeholder environment, work scope, sequencing, and delivery model." },
  { title: "3. Mapping and Positioning", desc: "We assess relevant institutions, decision pathways, stakeholder interests, reform signals, and issue sensitivities." },
  { title: "4. Execution", desc: "We support implementation through meetings, submissions, approvals coordination, policy analysis, and advocacy engagement." },
  { title: "5. Ongoing Advisory", desc: "Where required, we continue with issue monitoring, stakeholder coordination, regulatory tracking, and reform interpretation." }
];

const faqs = [
  { q: "What is the first step when facing a regulatory or policy issue?", a: "The first step is to define the issue precisely. That includes understanding the relevant institutions, approval points, stakeholder interests, timing, commercial implications, and likely reform pathway." },
  { q: "Do you support both government relations and regulatory approvals?", a: "Yes. Credence Africa supports strategic engagement with public institutions and the practical coordination required across approvals, submissions, follow-up, and issue tracking." },
  { q: "Can you support policy reform and advocacy?", a: "Yes. We support policy interpretation, position development, consultation engagement, advocacy strategy, and structured participation in reform environments." },
  { q: "What is POLICY & MARKETS™?", a: "POLICY & MARKETS™ is Credence Africa’s virtual and in-person executive briefing platform focused on upcoming policy, regulation, and the market implications of reform." },
  { q: "Can POLICY & MARKETS™ be delivered for a sector, institution, or association?", a: "Yes. It can be delivered as a public session, a private institutional briefing, a sector roundtable, an executive forum, or a closed dialogue depending on the audience and issue." },
  { q: "Do you support market entrants in regulated sectors?", a: "Yes. We support market entrants through regulatory scanning, approvals planning, stakeholder mapping, public sector engagement, and issue coordination." },
  { q: "Can you provide ongoing public affairs support?", a: "Yes. Ongoing support can be structured through retained advisory, issue monitoring, stakeholder engagement, or recurring POLICY & MARKETS™ sessions." }
];

export default function PublicAffairsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden bg-black text-white">
        <Image 
          src="https://picsum.photos/seed/pa1/1920/1080"
          alt="Public Affairs and Regulatory Strategy"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-[1]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-8">
            <h1 className="leading-tight">
              Public Affairs and Regulatory Strategy in Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 text-white/90 font-light">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-primary font-normal">
                  Institutional Clarity
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Navigate regulation, policy, and institutional complexity with strategic clarity. We help institutions engage government and manage regulatory exposure.
                </p>
              </div>
              <div className="space-y-4 border-l border-white/20 pl-8">
                <p className="text-xl md:text-2xl text-primary font-normal">
                  Strategic Influence
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Supporting executive teams, investors, and market entrants to respond to emerging reform where public sector engagement influences long-term outcomes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-7 text-lg font-normal">
                <Link href="/consult">
                  Book a Public Affairs Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 rounded-none px-8 py-7 text-lg font-normal bg-transparent">
                <Link href="/consult">
                  Discuss a Regulatory or Policy Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Positioning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal">Public Affairs: Where Policy Shapes Markets</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In African markets, commercial execution is often influenced by regulation, institutional process, and policy direction. Licensing determines speed to market. Reform can alter sector economics. Government engagement can affect approvals, partnerships, market structure, and long-term operating certainty.
              </p>
            </div>
            <div className="space-y-8 bg-muted/20 p-8 border-l-4 border-primary">
              <p className="text-base leading-relaxed text-foreground/80 font-light">
                Credence Africa advises institutions that need more than fragmented engagement. We provide a structured public affairs platform that brings together regulatory strategy, government relations, stakeholder mapping, and policy analysis.
              </p>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-normal uppercase tracking-widest text-xs h-12 px-8">
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Advise */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-normal">Designed for Executive Teams, Institutional Platforms, and Regulated Market Participants</h2>
            <p className="text-muted-foreground">This service is built for institutions whose commercial priorities are materially shaped by public systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
            <div className="flex items-center justify-center p-8 bg-primary/5 border border-dashed border-primary">
              <Button asChild variant="link" className="text-primary font-normal text-base hover:underline p-0">
                <Link href="/consult">Discuss Your Public Affairs Objective <ArrowUpRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solving Points */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Strategic Support Across Regulation, Policy, and Institutional Engagement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Credence Africa supports institutions dealing with regulatory exposure, approvals complexity, and reform risk.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solvingPoints.map((point) => (
              <div key={point} className="p-8 border hover:bg-accent/50 transition-all flex flex-col h-full border-l-4 border-l-transparent hover:border-l-primary">
                <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{point}</p>
              </div>
            ))}
             <div className="p-8 border bg-primary text-white flex flex-col justify-center items-center text-center">
                 <p className="text-sm font-light mb-6">Need foresight on a specific jurisdictional reform?</p>
                 <Button asChild variant="secondary" className="rounded-none w-full font-bold">
                     <Link href="/consult">Explore the Pathway</Link>
                 </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">Core Advisory Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow">
                <CardHeader className="p-8 pb-4">
                   <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-normal leading-tight group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-none px-10 font-normal py-6 text-lg">
              <Link href="/consult">Book a Public Affairs Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Pathways */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Pathways</h2>
            <h3 className="text-3xl md:text-4xl font-normal">Public Affairs Product Pathways</h3>
            <p className="text-muted-foreground">Engage Credence Africa based on your specific institutional profile and objective.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPathways.map((path) => (
              <div key={path.title} className={cn(
                  "p-10 border hover:border-primary transition-all flex flex-col h-full space-y-6",
                  path.highlight && "bg-muted/30 border-primary/20"
              )}>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-normal">{path.title}</h3>
                  <p className="text-xs font-bold text-primary italic leading-tight">{path.shortCopy}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{path.description}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed font-light">{path.details}</p>
                  
                  {path.items && (
                      <ul className="space-y-2 pt-4">
                          {path.items.map(item => (
                              <li key={item} className="flex gap-2 text-xs">
                                  <ArrowRight className="size-3 text-primary shrink-0 mt-0.5" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                  )}
                </div>
                <Button asChild variant={path.highlight ? "default" : "outline"} className="rounded-none w-full font-normal py-6">
                  <Link href="/consult">{path.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Executive Teams Engage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-normal">Why Executive Teams Engage Credence Africa</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      Institutions engage Credence Africa when policy and regulation begin to shape growth, timing, or investor confidence. We translate complexity into actionable priority.
                  </p>
              </div>
              <div className="grid gap-4">
                  {[
                      "Translate regulatory complexity into strategic priorities",
                      "Bring structure to government engagement",
                      "Anticipate reform risk before disruption occurs",
                      "Connect mapping with real execution pathways",
                      "Access POLICY & MARKETS™ for early visibility"
                  ].map((val, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white border">
                          <div className="text-primary font-bold text-lg opacity-40">{(idx + 1).toString().padStart(2, '0')}</div>
                          <p className="text-sm">{val}</p>
                      </div>
                  ))}
              </div>
          </div>
           <div className="mt-16 text-center">
             <Button asChild size="lg" className="rounded-none px-12 font-normal py-6 text-lg">
                <Link href="/consult">See How Your Mandate Can Be Structured</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Issues & Mandates */}
      <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                  <div className="space-y-8">
                      <h2 className="text-2xl font-normal border-b pb-4">Issues We Commonly Support</h2>
                      <div className="grid gap-3">
                          {issuesList.map(issue => (
                              <div key={issue} className="flex items-start gap-3 text-sm">
                                  <CheckCircle2 className="size-4 text-primary mt-1 shrink-0" />
                                  <span>{issue}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="space-y-8">
                       <h2 className="text-2xl font-normal border-b pb-4">Representative Mandates</h2>
                       <div className="space-y-6">
                           {representativeMandates.map((mandate, idx) => (
                               <div key={idx} className="p-6 bg-muted/20 border-l-4 border-primary">
                                   <p className="text-sm italic leading-relaxed">"{mandate}"</p>
                               </div>
                           ))}
                       </div>
                  </div>
              </div>
               <div className="mt-16 text-center">
                <Button asChild variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-normal px-10 h-14">
                    <Link href="/consult">Talk Through a Similar Mandate</Link>
                </Button>
              </div>
          </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">A Clear Path From Issue to Execution</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {engagementSteps.map((step) => (
              <div key={step.title} className="space-y-4 group">
                <h4 className="text-primary font-normal text-lg border-b pb-4 group-hover:border-primary transition-all">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Button asChild size="lg" className="rounded-none px-12 font-normal py-6 text-lg">
                <Link href="/consult">Book a Public Affairs Consultation</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* POLICY & MARKETS™ Section */}
      <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-3xl md:text-5xl font-normal">Why POLICY & MARKETS™ Matters</h2>
                  <p className="text-xl font-light text-white/70 leading-relaxed">
                      A Strategic Product for Leadership Teams That Need Early Visibility. We don't just track change—we help you interpret it before it becomes disruption.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 pt-8">
                      <div className="space-y-3">
                          <h3 className="text-primary font-bold uppercase text-xs tracking-widest">Early Visibility</h3>
                          <p className="text-sm text-white/60">Identify risk earlier and allocate attention more intelligently.</p>
                      </div>
                      <div className="space-y-3">
                          <h3 className="text-primary font-bold uppercase text-xs tracking-widest">Decision Clarity</h3>
                          <p className="text-sm text-white/60">Move policy discussion out of the abstract and into decision making.</p>
                      </div>
                      <div className="space-y-3">
                          <h3 className="text-primary font-bold uppercase text-xs tracking-widest">Internal Readiness</h3>
                          <p className="text-sm text-white/60">Build organizational capacity before reform begins to affect operations.</p>
                      </div>
                  </div>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-14 font-normal mt-8">
                      <Link href="/consult">Join the Next POLICY & MARKETS™ Session</Link>
                  </Button>
              </div>
          </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-12 text-center">Public Affairs FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-normal text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight">
                Public Affairs Support for Institutions That Need Clarity, Credibility, and Strategic Control.
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl">
                If your institution is navigating approvals, policy reform, or stakeholder pressure, Credence Africa provides the execution discipline to move that mandate forward.
              </p>
              <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                 <div className="flex items-center gap-3"><Mail className="size-5" /> connect@credence.africa</div>
                 <div className="flex items-center gap-3"><Phone className="size-5" /> +254 719 468 240</div>
              </div>
            </div>
            <div className="bg-white p-10 space-y-8 shadow-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-normal text-black">Start Your Public Affairs Mandate</h3>
                <p className="text-muted-foreground text-sm">Discuss your specific regulatory or policy challenge with a senior advisor.</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-none py-8 text-lg font-normal">
                  <Link href="/consult">Book a Public Affairs Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full rounded-none py-8 text-lg font-normal border-primary text-primary hover:bg-primary/10">
                  <Link href="/consult">Discuss a Regulatory or Policy Mandate</Link>
                </Button>
                <Button asChild variant="link" className="text-primary font-bold uppercase tracking-widest text-xs h-auto py-2">
                    <Link href="/consult">Join POLICY & MARKETS™</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}