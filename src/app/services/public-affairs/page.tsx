"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Users,
  MessageSquare,
  Map,
  Search,
  FileText,
  Handshake,
  Mail,
  Phone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const advisoryServices = [
  {
    title: "Government Relations and Institutional Engagement",
    description:
      "We help institutions build disciplined and credible engagement with government and public institutions. This includes stakeholder identification, engagement planning, institutional positioning, issue framing and support across high value public sector interfaces.",
    icon: Users,
  },
  {
    title: "Regulatory Navigation and Approvals",
    description:
      "We support institutions facing licensing, approvals, compliance requirements and regulatory coordination challenges. This includes regulatory scanning, approvals strategy, sequencing, escalation support and coordination across multiple public bodies.",
    icon: ShieldCheck,
  },
  {
    title: "Policy Advisory and Advocacy",
    description:
      "We help institutions interpret policy change, develop positions, participate in reform processes and engage strategically in consultation and advocacy environments. This includes policy analysis, response strategy, advocacy planning and stakeholder engagement around reform.",
    icon: MessageSquare,
  },
  {
    title: "Stakeholder Mapping and Political Economy Insight",
    description:
      "We help clients understand who influences outcomes, where alignment or friction may emerge and how institutional interests shape decisions. This includes stakeholder mapping, influence analysis, issue sensitivity assessment and engagement sequencing.",
    icon: Map,
  },
  {
    title: "Public Sector Interface Management",
    description:
      "We support the practical execution side of public affairs mandates. This includes preparation for meetings, submissions, follow up, approvals tracking, issue escalation and structured coordination across public institutions.",
    icon: Handshake,
  },
];

const productPathways = [
  {
    title: "Government Relations",
    description:
      "For institutions that need structured, senior level engagement with ministries, regulators, counties, agencies and public sector stakeholders.",
    focus:
      "Supports relationship planning, issue management, institutional positioning and engagement strategy where commercial or strategic objectives depend on effective public sector alignment.",
    icon: Users,
    cta: "Discuss Government Relations",
  },
  {
    title: "Regulatory Navigator",
    description:
      "For institutions managing approvals, licensing pathways, regulatory change and compliance related decision environments.",
    focus:
      "Supports regulatory scanning, licensing strategy, approvals sequencing, issue identification and coordination across complex regulatory systems.",
    icon: Search,
    cta: "Explore Regulatory Navigator",
  },
  {
    title: "Policy Advocacy",
    description:
      "For institutions engaging policy reform, sector dialogue, consultation processes and market shaping regulation.",
    focus:
      "Supports policy analysis, institutional position development, advocacy strategy, reform participation, consultation response and coalition engagement.",
    icon: FileText,
    cta: "Discuss Policy Advocacy",
  },
  {
    title: "POLICY & MARKETS™",
    description:
      "For institutions that need forward visibility on emerging policy, upcoming regulation and the market implications of reform.",
    focus:
      "Executive policy briefings, regulatory outlook sessions and sector specific reform roundtables designed to help you interpret regulatory direction early.",
    icon: Zap,
    cta: "Join POLICY & MARKETS™",
  },
  {
    title: "Public Sector Interface",
    description:
      "For institutions requiring structured support across live approvals, submissions, meetings and public sector processes.",
    focus:
      "Supports execution where progress depends on disciplined engagement, coordinated follow through and consistent management of public sector interactions.",
    icon: Handshake,
    cta: "Discuss Public Sector Interface",
  },
];

const whoWeAdvise = [
  "Regulated businesses managing licensing, compliance exposure and multi agency interfaces",
  "Companies entering or expanding into sectors where approvals and regulatory clarity are critical",
  "Investors, funds and project sponsors with public sector, infrastructure or market shaping interfaces",
  "Industry associations, chambers and sector platforms engaging on reform and institutional alignment",
  "Development actors and ecosystem institutions operating in policy sensitive sectors",
  "Boards, founders and executive teams that need stronger public affairs capability to support growth",
];

const whatWeSolve = [
  "Navigate complex licensing and regulatory approval environments",
  "Build structured government relations and institutional engagement strategies",
  "Anticipate and respond to policy reform and legislative change",
  "Shape policy positions and advocacy priorities with greater credibility",
  "Map stakeholder interests, influence patterns and political economy risk",
  "Coordinate public sector interfaces across ministries, regulators, counties and agencies",
  "Understand how upcoming regulation may affect market entry, operations, investment or sector growth",
];

const strategicApproach = [
  "Translate complexity into actionable strategic priorities",
  "Bring structure to government engagement and institutional positioning",
  "Anticipate reform risk before operational disruption",
  "Connect stakeholder mapping with execution pathways",
  "Interpret change early through POLICY & MARKETS™",
];

const policyMarketsFormats = [
  "Executive policy briefings",
  "Regulatory outlook sessions",
  "Sector specific roundtables",
  "Market implication discussions",
  "Closed door briefings",
  "Strategic response planning",
];

const engagementSteps = [
  { step: "01", title: "Consultation", desc: "Understanding the issue, institutional context and strategic objective." },
  { step: "02", title: "Mandate Structuring", desc: "Defining advisory pathway, scope, sequencing and delivery model." },
  { step: "03", title: "Mapping & Positioning", desc: "Assessing institutions, decision pathways and reform signals." },
  { step: "04", title: "Execution", desc: "Support through meetings, submissions and advocacy engagement." },
  { step: "05", title: "Ongoing Advisory", desc: "Issue monitoring, regulatory tracking and executive support." },
];

const faqs = [
  {
    q: "What is the first step when facing a regulatory or policy issue?",
    a: "The first step is to define the issue precisely. That includes understanding the relevant institutions, approval points, stakeholder interests, timing, commercial implications and likely reform pathway.",
  },
  {
    q: "Do you support both government relations and regulatory approvals?",
    a: "Yes. Credence Africa supports strategic engagement with public institutions and the practical coordination required across approvals, submissions, follow up and issue tracking.",
  },
  {
    q: "Can you support policy reform and advocacy?",
    a: "Yes. We support policy interpretation, position development, consultation engagement, advocacy strategy and structured participation in reform environments.",
  },
  {
    q: "What is POLICY & MARKETS™?",
    a: "POLICY & MARKETS™ is Credence Africa’s virtual and in person executive briefing platform focused on upcoming policy, regulation and the market implications of reform.",
  },
  {
    q: "Can POLICY & MARKETS™ be delivered for a sector, institution or association?",
    a: "Yes. It can be delivered as a public session, a private institutional briefing, a sector roundtable, an executive forum or a closed dialogue depending on the audience and issue.",
  },
  {
    q: "Do you support market entrants in regulated sectors?",
    a: "Yes. We support market entrants through regulatory scanning, approvals planning, stakeholder mapping, public sector engagement and issue coordination.",
  },
  {
    q: "Can you provide ongoing public affairs support?",
    a: "Yes. Ongoing support can be structured through retained advisory, issue monitoring, stakeholder engagement or recurring POLICY & MARKETS™ sessions.",
  },
];

// Deepened brand red for white-text bands (white ~6.7:1, white/85 ~4.8:1).
const DEEP_RED = "#aa3018";

export default function PublicAffairsPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes pa-rise {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: none; }
          }
          .pa-rise { animation: pa-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .pa-bar {
            transform: scaleY(0);
            transform-origin: top;
            animation: pa-barIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }
          @keyframes pa-barIn { to { transform: scaleY(1); } }
        }
      `}</style>

      {/* ───────────── Hero — navy ground, image plate, no side-stripe ───────────── */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
          <Image
            src="/public-affairs.png"
            alt="Institutional engagement across African public systems"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #020817 0%, rgba(2,8,23,0.55) 35%, rgba(2,8,23,0.15) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-36">
          <div className="pa-rise max-w-3xl">
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Public Affairs &amp; Policy Advisory
            </p>
            <h1 className="mt-5 text-balance font-normal leading-[1.04] tracking-[-0.02em] text-background [font-size:clamp(2.5rem,6.5vw,5rem)]">
              Where policy shapes <span className="text-primary">markets</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-background/85 md:text-xl">
              Navigate regulation, policy and institutional complexity with strategic clarity —
              and engage government, manage regulatory exposure, secure approvals and shape policy
              positioning across African markets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-none border-none bg-primary px-8 text-base font-bold text-white hover:bg-primary/90"
              >
                <Link href="/consult" className="justify-center">
                  Book a Public Affairs Consultation
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-none border-2 border-background/40 bg-transparent px-8 text-base font-medium text-background hover:bg-background/10 hover:text-background"
              >
                <Link href="/consult" className="justify-center">
                  Discuss a Regulatory Mandate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Executive positioning — light ground ───────────── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,3rem)]">
                Public affairs, run as a discipline — not as fragmented engagement.
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                <p>
                  In African markets, commercial execution is often influenced by regulation,
                  institutional process and policy direction. Licensing determines speed to market.
                  Reform can alter sector economics. Government engagement can affect approvals,
                  partnerships, market structure and long term operating certainty.
                </p>
                <p>
                  Credence Africa advises institutions that need more than fragmented engagement
                  across ministries, regulators, agencies and public actors. We provide a structured
                  public affairs platform that brings together regulatory strategy, government
                  relations, stakeholder mapping, policy analysis and execution support. The
                  objective is clear — to help institutions move with stronger foresight, better
                  positioning and greater institutional coherence.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-12 rounded-none border-2 border-primary bg-white px-8 text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/consult">Speak to the Team</Link>
              </Button>
            </div>

            {/* Pull-quote as a deep-red plate (white passes AA) */}
            <div className="lg:col-span-5">
              <figure className="flex h-full flex-col justify-between bg-[#aa3018] p-8 md:p-10">
                <blockquote className="text-balance font-normal leading-snug text-white [font-size:clamp(1.4rem,2.2vw,1.85rem)]">
                  “Licensing determines speed to market. Reform can alter sector economics. We help
                  institutions move with stronger foresight and better positioning.”
                </blockquote>
                <figcaption className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                  The Credence Public Affairs Platform
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Core advisory services — navy band, ledger rows ───────────── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-primary [font-size:clamp(2rem,4vw,3rem)]">
                Core advisory
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/75">
                Five disciplines that turn regulatory complexity into a deliberate, sequenced
                mandate.
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-none border-none bg-primary px-8 font-bold text-white hover:bg-primary/90"
              >
                <Link href="/consult">Book a Consultation</Link>
              </Button>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-white/15 border-y border-white/15">
                {advisoryServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="flex items-start gap-5 py-7 md:gap-8 md:py-9"
                    >
                      <Icon
                        className="mt-1 size-7 shrink-0 text-primary md:size-8"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <h3 className="text-xl font-normal leading-tight text-background md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-background/75 md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── What we help solve — light, with image ───────────── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,2.8rem)]">
                Strategic support across regulation, policy and institutional engagement
              </h2>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-foreground/75">
                We help leadership teams interpret the environment accurately, structure the right
                engagement pathway and move with greater confidence.
              </p>
              <ul className="mt-8 divide-y divide-foreground/12 border-y border-foreground/12">
                {whatWeSolve.map((val) => (
                  <li key={val} className="flex items-start gap-4 py-4">
                    <span
                      className="mt-2 size-2 shrink-0 bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-light leading-relaxed text-foreground/80 md:text-base">
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 h-14 rounded-none border-none bg-primary px-10 font-bold text-white hover:bg-primary/90"
              >
                <Link href="/consult">Explore the Right Public Affairs Pathway</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/5] w-full lg:sticky lg:top-24">
              <Image
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop"
                alt="Institutional engagement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Who we advise — deep-red drench (white passes AA) ───────────── */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-white [font-size:clamp(1.9rem,4vw,2.75rem)]">
              Built for executive teams, institutional platforms and regulated market participants
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 md:text-lg">
              For institutions whose commercial priorities are materially shaped by public systems,
              regulatory frameworks or policy change.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/25 bg-white/25 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeAdvise.map((item) => (
              <div key={item} className="bg-[#aa3018] p-6 md:p-8">
                <p className="text-sm font-light leading-relaxed text-white/85 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/consult"
              className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 text-base font-bold text-white transition-opacity hover:opacity-80"
            >
              Discuss Your Public Affairs Objective
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Product pathways — light, ledger rows ───────────── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-foreground [font-size:clamp(2rem,4.5vw,3.25rem)]">
              Product <span className="text-primary">pathways</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              Specialized tracks matching your institution&apos;s profile and strategic needs.
            </p>
          </div>

          <div className="mt-12 divide-y divide-foreground/12 border-y border-foreground/12">
            {productPathways.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.title}
                  href="/consult"
                  className="group grid gap-5 py-8 transition-colors hover:bg-foreground/[0.03] md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4">
                      <Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />
                      <h3 className="text-2xl font-normal leading-tight text-foreground md:text-[1.75rem]">
                        {product.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm font-light leading-relaxed text-foreground/75">
                      {product.description}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm font-light leading-relaxed text-foreground/75 md:text-base">
                      {product.focus}
                    </p>
                  </div>
                  <div className="flex items-center md:col-span-2 md:justify-end">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
                      {product.cta}
                      <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Why POLICY & MARKETS™ matters — deep navy feature ───────────── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Early visibility
              </p>
              <h2 className="mt-5 text-balance font-normal leading-[1.05] tracking-[-0.02em] text-background [font-size:clamp(2rem,4.5vw,3.5rem)]">
                Why <span className="text-primary">POLICY &amp; MARKETS™</span> matters
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-lg font-light leading-relaxed text-background/80">
                <p>
                  Most institutions do not struggle because policy change happens. They struggle
                  because they interpret it too late, engage too late or respond without structure.
                </p>
                <p>
                  POLICY &amp; MARKETS™ exists to solve that problem. It gives leadership teams,
                  sector platforms, investors and regulated businesses a dedicated forum to
                  understand what is coming, why it matters and who is driving it.
                </p>
              </div>

              <div className="mt-10 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {policyMarketsFormats.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-foreground p-4 text-sm text-background/90 md:p-5"
                  >
                    <Zap className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-10 h-14 rounded-none border-none bg-primary px-10 font-bold text-white hover:bg-primary/90"
              >
                <Link href="/consult">Join the Next Session</Link>
              </Button>
            </div>

            <div className="lg:col-span-5 lg:pt-14">
              <div className="border border-white/15 p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  The shift it creates
                </p>
                <p className="mt-5 text-balance font-normal leading-snug text-background [font-size:clamp(1.4rem,2.2vw,1.9rem)]">
                  “Move policy discussion out of the abstract and into decision making.”
                </p>
                <div className="mt-8 border-t border-white/15 pt-8">
                  <p className="text-sm font-light leading-relaxed text-background/80">
                    Identify risk earlier, allocate attention more intelligently and build internal
                    readiness before reform begins to affect outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── A more strategic approach — light, with images ───────────── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                  alt="Strategy session"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative aspect-[3/4] translate-y-8">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                  alt="Execution review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,2.8rem)]">
                A more strategic approach to public affairs
              </h2>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-foreground/75">
                Institutions engage Credence Africa when fragmented communication with public
                institutions is no longer enough. We translate regulatory complexity into actionable
                priorities.
              </p>
              <ul className="mt-8 divide-y divide-foreground/12 border-y border-foreground/12">
                {strategicApproach.map((val) => (
                  <li key={val} className="flex items-start gap-4 py-4">
                    <span className="mt-2 size-2 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-sm font-light leading-relaxed text-foreground/80 md:text-base">
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 h-14 rounded-none border-none bg-primary px-10 font-bold text-white hover:bg-primary/90"
              >
                <Link href="/consult">See How Your Mandate Can Be Structured</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── How engagement works — navy, vertical ledger spine ───────────── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              The sequence
            </p>
            <h2 className="mt-5 text-balance font-normal leading-[1.05] tracking-[-0.02em] text-background [font-size:clamp(2rem,4.5vw,3.25rem)]">
              How engagement works
            </h2>
          </div>

          <div className="relative mt-14 pl-10 md:pl-14">
            {/* The spine */}
            <span
              className="pa-bar absolute left-[0.4rem] top-1 h-[calc(100%-2rem)] w-px bg-primary/50 md:left-[0.65rem]"
              aria-hidden="true"
            />
            <ol className="space-y-10 md:space-y-12">
              {engagementSteps.map((s) => (
                <li key={s.step} className="relative">
                  <span
                    className="absolute -left-10 top-1.5 flex size-[0.85rem] items-center justify-center md:-left-14"
                    aria-hidden="true"
                  >
                    <span className="size-[0.85rem] bg-primary" />
                  </span>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                    <span className="font-normal leading-none text-primary [font-size:clamp(1.5rem,2.5vw,2rem)]">
                      {s.step}
                    </span>
                    <div className="md:flex-1">
                      <h3 className="text-xl font-normal text-background md:text-2xl">{s.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-background/75 md:text-base">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 pl-10 md:pl-14">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none border-none bg-primary px-12 font-bold text-white hover:bg-primary/90"
            >
              <Link href="/consult">Book a Public Affairs Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────────── FAQs — light ───────────── */}
      <section className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,2.75rem)]">
            Public affairs FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-foreground/12 last:border-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-normal text-foreground hover:no-underline md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm font-light leading-relaxed text-foreground/75 md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ───────────── Final conversion — deep red drench (white passes AA) ───────────── */}
      <section style={{ backgroundColor: DEEP_RED }} className="text-white">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.06] tracking-[-0.01em] [font-size:clamp(2rem,4.5vw,3.25rem)]">
                Public affairs support for strategic control
              </h2>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/90">
                If your institution is navigating approvals, government engagement, policy reform,
                stakeholder pressure or emerging regulation that may affect growth, market access or
                investor confidence, Credence Africa provides the strategic support and execution
                discipline to move the mandate forward.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-none border-none bg-white px-8 font-bold text-[#aa3018] hover:bg-white/90"
                >
                  <Link href="/consult">Book a Public Affairs Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-none border-2 border-white bg-transparent px-8 font-medium text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/consult">Discuss a Regulatory or Policy Mandate</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/30 p-8 md:p-10">
                <h3 className="text-2xl font-normal">Direct contact</h3>
                <div className="mt-8 space-y-6">
                  <a
                    href="mailto:connect@credence.africa"
                    className="flex items-center gap-4 text-lg transition-opacity hover:opacity-80 md:text-xl"
                  >
                    <Mail className="size-6 shrink-0" aria-hidden="true" /> connect@credence.africa
                  </a>
                  <a
                    href="tel:+254719468240"
                    className="flex items-center gap-4 text-lg transition-opacity hover:opacity-80 md:text-xl"
                  >
                    <Phone className="size-6 shrink-0" aria-hidden="true" /> +254 719 468 240
                  </a>
                  <Link
                    href="/consult"
                    className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 text-lg font-bold text-white transition-opacity hover:opacity-80"
                  >
                    Join POLICY &amp; MARKETS™
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
