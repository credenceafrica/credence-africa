"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  HandCoins,
  Users,
  Building2,
  Mail,
  Phone,
  BarChart3,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const targetAudience = [
  "Growth stage businesses preparing for equity, debt, or hybrid capital",
  "Companies seeking expansion capital for regional or international growth",
  "Project sponsors developing bankable infrastructure, energy, real asset, or large scale commercial projects",
  "Social enterprises and nonprofits seeking donor funding, grant readiness, or blended finance",
  "Cooperatives and SACCOs seeking institutional capital, member capital mobilization, or diversified investment structures",
  "Funds, investment platforms, and portfolio companies requiring investor relations, reporting, or post investment support",
  "Institutions preparing for mergers, acquisitions, strategic exits, or secondary transactions"
];

const capitalPathways = [
  { title: "Private Capital", desc: "Private equity, venture capital, angel investment, family office capital, and strategic investment." },
  { title: "Private Debt", desc: "Structured debt, working capital facilities, trade finance, project finance, and credit facilities." },
  { title: "Development Finance", desc: "DFI aligned capital, concessional funding, catalytic capital, and development focused finance structures." },
  { title: "Grants and Donor Funding", desc: "Grant funding, technical assistance, donor aligned capital, and institutional fundraising pathways." },
  { title: "Blended Finance", desc: "Capital structures that combine grants, concessional capital, debt, equity, or public sector support." },
  { title: "Alternative and Diaspora Capital", desc: "Crowdfunding, diaspora capital, community investment, and non traditional capital pathways." },
  { title: "Public and Institutional Capital", desc: "Alignment with sovereign, sub-sovereign, public, or institutional financing structures." }
];

const coreServices = [
  {
    title: "Investor Readiness and Capital Strategy",
    desc: "Strengthening foundations required for investor confidence.",
    items: [
      "Capital strategy design aligned to business stage and funding objective",
      "Financial modeling, valuation logic, and return frameworks",
      "Corporate structuring and governance alignment",
      "Investment memoranda, pitch materials, and institutional deal narrative",
      "Data room architecture and due diligence readiness",
      "Commercial model refinement and unit economics validation"
    ]
  },
  {
    title: "Capital Raising and Transaction Support",
    desc: "Engaging capital providers and moving fundraising into execution.",
    items: [
      "Investor targeting across PE, VC, Family Offices, DFIs, and Banks",
      "Capital pipeline development and investor mapping",
      "Lender and investor engagement strategy",
      "Term sheet support and negotiation preparation",
      "Transaction documentation readiness",
      "M&A support and strategic transaction positioning"
    ]
  },
  {
    title: "Capital Structuring and Blended Finance Design",
    desc: "Reflecting risk, return, impact, and long term growth.",
    items: [
      "Capital stack design across equity, debt, grants, and concessional funding",
      "Blended finance structures for social enterprises and projects",
      "Donor capital integration and DFI positioning",
      "Risk allocation and financing optimization",
      "Public-private capital alignment",
      "Structuring frameworks for scalable impact models"
    ]
  },
  {
    title: "Post-Investment Performance and Investor Relations",
    desc: "Maintaining credibility and readiness for follow-on capital.",
    items: [
      "Investor reporting systems and governance support",
      "Performance tracking and KPI frameworks",
      "Donor compliance and reporting support",
      "Shareholder and stakeholder communication frameworks",
      "Board reporting and governance documentation",
      "Follow-on funding readiness and capital planning"
    ]
  }
];

const productPathways = [
  {
    title: "Enterprise Growth Capital",
    desc: "For scale-ups and SMEs preparing for institutional capital.",
    tracks: ["Growth Capital Readiness", "Debt and Structured Finance", "Investor Relations"],
    bestFor: "Businesses raising expansion capital or refining capital structure.",
    icon: <TrendingUp className="size-8 text-primary" />,
    cta: "Discuss Enterprise Growth Capital"
  },
  {
    title: "Grant Ready",
    desc: "For impact institutions seeking donor funding or blended capital.",
    tracks: ["Grant Funding and Donor Readiness", "Blended Finance Design", "Compliance & Reporting"],
    bestFor: "Organizations pursuing grants, donor partnerships, or catalytic funding.",
    icon: <HandCoins className="size-8 text-primary" />,
    cta: "Explore Grant Ready"
  },
  {
    title: "Cooperative Finance",
    desc: "For SACCOs and cooperatives seeking growth capital or diversified models.",
    tracks: ["Cooperative Growth Financing", "Blended Finance Access", "Diversified Investment"],
    bestFor: "SACCOs, housing, and agricultural cooperatives.",
    icon: <Users className="size-8 text-primary" />,
    cta: "Discuss Cooperative Finance"
  },
  {
    title: "Project Finance",
    desc: "For infrastructure and real asset projects requiring bankability.",
    tracks: ["Project Bankability", "Capital Structuring", "Transaction Execution"],
    bestFor: "Infrastructure developers, energy sponsors, and industrial projects.",
    icon: <Building2 className="size-8 text-primary" />,
    cta: "Discuss Project Finance Support"
  }
];

const faqs = [
  { q: "What is the first step before raising capital in Africa?", a: "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, transaction materials, capital objective, and the type of funding that best fits the mandate." },
  { q: "How do I know whether I need equity, debt, grant funding, or blended finance?", a: "The right capital structure depends on growth stage, cash flow profile, repayment ability, project nature, investor expectations, impact objectives, and institutional readiness. Credence Africa helps clients determine the most suitable capital pathway before engagement begins." },
  { q: "What does investor readiness include?", a: "Investor readiness includes financial modeling, governance alignment, capital structuring, diligence preparation, deal materials, management positioning, data room preparation, and a capital narrative that makes commercial sense to the target capital provider." },
  { q: "Do you support blended finance and development finance mandates?", a: "Yes. Credence Africa supports blended finance design, DFI positioning, donor aligned funding strategies, risk allocation frameworks, and structures that combine grants, concessional capital, debt, and equity." },
  { q: "Can you support grant funding and donor readiness?", a: "Yes. We support donor mapping, proposal systems, funding pipeline development, compliance preparation, grant positioning, blended finance integration, and reporting structures." },
  { q: "Can you support institutions after capital has been raised?", a: "Yes. We support post investment reporting, governance, donor compliance, stakeholder communication, follow on funding readiness, and investor relations." },
  { q: "Do you work only with startups?", a: "No. This service supports growth stage businesses, established enterprises, social enterprises, cooperatives, project sponsors, funds, and other institutions with capital mandates." }
];

export default function CapitalRaisingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Capital Raising Africa"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24">
          <div className="bg-white p-6 md:p-12 lg:p-16 max-w-4xl shadow-2xl border-l-8 border-primary space-y-8 md:space-y-10">
            <h1 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-[2.5rem]">
              Capital Raising and Investment Structuring in Africa
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-foreground/80">
              <div className="space-y-2 md:space-y-3">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Institutional Capital
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Raise capital with stronger structure, clearer positioning, and greater investor confidence across African markets.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 md:border-l md:pl-8">
                <p className="text-[10px] md:text-sm text-primary font-bold tracking-widest uppercase">
                  Strategic Ready
                </p>
                <p className="text-sm md:text-base leading-relaxed font-light">
                  Credence Africa helps institutions prepare for capital, structure investment, and move transactions forward.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 md:gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base font-medium">
                <Link href="/consult" className="justify-center">
                  Book a Capital Strategy Consultation <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-base font-medium bg-white">
                <Link href="/consult" className="justify-center">
                  Discuss a Capital Raising Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Raising Strategy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Executive Function</h2>
              <h3 className="text-3xl md:text-4xl font-normal text-foreground leading-tight">Capital Raising Strategy</h3>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Capital raising shapes growth, timing, governance, investor confidence, and long term strategic flexibility. Institutions seeking capital need more than presentation materials.</p>
                <p>They need a capital pathway aligned to business model, growth stage, funding objective, risk profile, and transaction readiness.</p>
              </div>
              <Button asChild variant="outline" className="rounded-none border-2 border-primary text-primary h-12 px-8">
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>
            <div className="bg-muted p-8 md:p-12 border-l-4 border-primary">
              <p className="text-xl font-light italic leading-relaxed">
                "We help leadership teams define the right funding strategy, improve investor readiness, and approach capital with greater control over outcomes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-normal text-foreground">Designed for Businesses, Projects, Funds, and Institutions Raising Capital</h2>
            <p className="text-muted-foreground font-light">This service is built for institutions that need to raise, structure, or manage capital across Africa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border hover:border-primary transition-colors group">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-1" />
                <p className="text-sm leading-relaxed text-foreground/90 font-light">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/consult">Discuss Your Capital Objective <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capital Raising Pathways */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Capital Raising Pathways</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto font-light">Choose the right capital pathway before time and resources are committed to investor engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capitalPathways.map((path) => (
              <div key={path.title} className="space-y-4 p-8 border hover:shadow-md transition-shadow">
                <h4 className="font-normal text-xl text-primary">{path.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">{path.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-none px-10">
              <Link href="/consult">Explore the Right Capital Pathway</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Advisory Services */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-normal mb-16 text-center">Capital Raising Advisory Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="rounded-none border-none shadow-sm flex flex-col">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl md:text-2xl font-normal text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2 font-light">{service.desc}</p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm border-b border-border/50 pb-2 font-light">
                        <ArrowRight className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-none px-10">
              <Link href="/consult">Book a Capital Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Pathways */}
      <section className="py-24 bg-background border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal">Fundraising Pathways</h2>
            <p className="text-muted-foreground font-light">Specialized tracks matching your institution's profile and readiness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productPathways.map((product) => (
              <Card key={product.title} className="rounded-none border hover:border-primary transition-colors flex flex-col">
                <CardHeader className="p-8">
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle className="text-2xl font-normal text-foreground">{product.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-light mt-2">{product.desc}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Core Tracks</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {product.tracks.map(t => (
                          <li key={t} className="flex items-center gap-2 text-sm font-light">
                            <div className="w-1 h-1 bg-primary rounded-full" /> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Best Suited For</p>
                      <p className="text-sm font-light">{product.bestFor}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-8 rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/consult">{product.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal">Strategic Approach to Capital Raising</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Institutions engage Credence Africa when capital begins to shape strategic direction. We bring structure to readiness, documentation, and transaction preparation.
              </p>
              <Button asChild size="lg" className="rounded-none px-10">
                <Link href="/consult">See How Your Mandate Can Be Structured</Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Choose the right capital pathway intelligently",
                "Bring structure to documentation and prep",
                "Improve visibility across funding instruments",
                "Connect capital strategy with governance",
                "Support stronger capital engagement",
                "Match the institution's capital cycle stage"
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white shadow-sm border-l-2 border-primary">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-1" />
                  <span className="text-xs font-light leading-tight">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capital Raising Mandates */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-normal">Capital Raising Mandates</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Growth capital raises", "Regional expansion scale-up", "Debt and structured finance", 
                "Project finance & bankability", "Blended finance structuring", "Donor aligned funding", 
                "Catalytic capital strategy", "Grant readiness systems", "Investor relations", 
                "M&A and exit positioning", "Capital restructuring and refinancing support"
              ].map((m) => (
                <span key={m} className="px-4 py-2 bg-muted text-xs font-light border border-border/50">{m}</span>
              ))}
            </div>
            <Button asChild size="lg" variant="outline" className="mt-12 rounded-none border-2 border-primary text-primary px-12">
              <Link href="/consult">Discuss Your Mandate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">How Engagement Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Capital Consultation", desc: "Understanding funding objective, need, and transaction context." },
              { step: "2", title: "Mandate Structuring", desc: "Defining advisory pathway, scope, and workplan." },
              { step: "3", title: "Readiness & Preparation", desc: "Strengthening financial, strategic, and governance foundations." },
              { step: "4", title: "Engagement & Execution", desc: "Targeting investors and structuring negotiations." },
              { step: "5", title: "Post-Investment Support", desc: "Ongoing reporting, governance, and follow-on readiness." }
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
              <Link href="/consult">Book a Capital Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-normal mb-12 text-center">Capital Raising FAQs</h2>
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
              <h2 className="text-3xl md:text-4xl font-normal leading-tight">Capital Raising Support</h2>
              <p className="text-lg opacity-80 font-light leading-relaxed">
                If your institution is preparing to raise capital, structure a funding pathway, or align donor and commercial capital, Credence Africa provides the strategic support to move that agenda forward with clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="rounded-none bg-white text-primary hover:bg-white/90 h-14 px-8">
                  <Link href="/consult">Book a Capital Strategy Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-2 border-white text-white hover:bg-white/10 h-14 px-8">
                  <Link href="/consult">Discuss a Capital Raising Mandate</Link>
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/5 border-white/10 p-8 md:p-12 rounded-none text-white">
              <h3 className="text-2xl font-normal mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <a href="mailto:connect@credence.africa" className="flex items-center gap-4 text-xl hover:text-white transition-colors group">
                  <Mail className="size-6 text-white group-hover:scale-110 transition-transform" /> connect@credence.africa
                </a>
                <a href="tel:+254719468240" className="flex items-center gap-4 text-xl hover:text-white transition-colors group">
                  <Phone className="size-6 text-white group-hover:scale-110 transition-transform" /> +254 719 468 240
                </a>
                <div className="pt-4 text-white/60 font-light">
                  Applewood Adams, Ngong Road<br />Nairobi, Kenya
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
