import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Market Intelligence — "The Reconnaissance Field"
//
// Bold concept: intelligence framed as the vantage point you take BEFORE you
// commit capital. The page reads like a field brief, not a SaaS dashboard:
// a deep-navy reconnaissance hero, a single committed vermillion thesis band,
// and the five intelligence capabilities presented as a genuine ordered
// sequence (scan -> map -> assess -> price capital -> maintain watch) of
// oversized full-width ledger rows. Hierarchy comes from scale and committed
// colour, not from repeated icon cards.
//
// Contrast (verified, WCAG 2.1 AA):
//  - Navy ground (#020817): white text 17.9:1; white/80 ~ 12:1; primary
//    (#EB4928) on navy is large display only.
//  - Deep-red thesis band (#aa3018): white ~6.7:1, white/85 ~4.8:1 — body OK.
//  - Light ground (#F2F2F2): foreground (#020817) body; foreground/75 for
//    secondary body (passes), never muted-foreground for body.
//  - Ink button on vermillion / deep-red bands per the Ink-on-vermillion rule.
// ---------------------------------------------------------------------------

const recon = [
  {
    figure: "01",
    title: "Market & Sector Intelligence Reports",
    lead: "The terrain, read before you move.",
    body: "Structured reads on a market or sector — demand drivers, competitive structure, regulatory posture and the commercial dynamics that decide who wins. The standing brief a decision rests on.",
    points: [
      "Market structure and competitive landscape",
      "Demand drivers and growth dynamics",
      "Regulatory and policy posture",
      "Commercial risk and timing signals",
    ],
  },
  {
    figure: "02",
    title: "Ecosystem & Stakeholder Mapping",
    lead: "Who holds the levers — and who you reach first.",
    body: "A map of the actors that shape an opportunity: regulators, incumbents, capital, distribution and the partners that turn a plan into a presence. Relationships rendered as a working diagram.",
    points: [
      "Regulator, incumbent and capital mapping",
      "Partner, distribution and channel networks",
      "Influence and decision-pathway analysis",
      "Stakeholder access and entry points",
    ],
  },
  {
    figure: "03",
    title: "Opportunity & Entry Scans",
    lead: "Where the opening is and what it costs to take it.",
    body: "Focused scans that test a specific opportunity or entry route — sizing the prize, surfacing the barriers and pricing the move before commitment. Visibility sharp enough to act on.",
    points: [
      "Opportunity sizing and prioritization",
      "Entry-route and barrier assessment",
      "Competitor and white-space scans",
      "Commercial viability signals",
    ],
  },
  {
    figure: "04",
    title: "Capital & Investment Intelligence",
    lead: "Where capital is moving and on what terms.",
    body: "Intelligence on the capital landscape around a market or sector — active investors, deal flow, valuation reference points and the financing structures already in play. The lay of the money.",
    points: [
      "Active investor and deal-flow tracking",
      "Valuation and transaction reference points",
      "Financing structures and capital appetite",
      "Investment-thesis validation inputs",
    ],
  },
  {
    figure: "05",
    title: "Ongoing Intelligence Subscriptions",
    lead: "Visibility that does not go stale.",
    body: "A standing intelligence line for teams that need to stay current — recurring briefs, monitoring and signal alerts as a market, sector or capital landscape moves around you.",
    points: [
      "Recurring market and sector briefings",
      "Continuous signal and event monitoring",
      "Regulatory and capital movement alerts",
      "Decision-ready updates on a set cadence",
    ],
  },
];

const audience = [
  "Investors sizing a market or sector before they allocate",
  "Market entrants assessing a jurisdiction or entry route",
  "Growth teams pressure-testing an expansion thesis",
  "Funds and platforms tracking deal flow and capital movement",
  "Corporates scanning adjacent opportunities and white space",
  "Leadership teams that need standing commercial visibility",
];

const distinctions = [
  {
    name: "Market Intelligence",
    role: "Commercial visibility — fast, structured reads that let you see a market before you deploy.",
    here: true,
  },
  {
    name: "Research",
    role: "Bespoke analysis — commissioned studies and primary work built for a specific question.",
    href: "/services/research",
  },
  {
    name: "Credible Perspectives",
    role: "Media and thought leadership — executive insight and commentary on policy, markets and capital.",
    href: "https://perspectives.credence.africa",
  },
];

export default function MarketIntelligencePage() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes mi-sweep {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .mi-sweep {
            transform-origin: left;
            animation: mi-sweep 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
        }
      `}</style>

      {/* ============================================================== */}
      {/* HERO — deep-navy reconnaissance frame                          */}
      {/* ============================================================== */}
      <section className="relative bg-foreground">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.22] grayscale"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="cred-rise max-w-4xl">
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-background/70">
              Africa Intel — Market Intelligence
            </p>
            <h1 className="mt-5 text-balance font-normal leading-[1.04] tracking-[-0.02em] text-background [font-size:clamp(2.75rem,7vw,5.5rem)]">
              See the market <span className="text-primary">before</span> you commit the capital.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-background/85 md:text-xl">
              Commercial visibility for investors, market entrants and growth teams — the
              structured read on a market, an ecosystem or a capital landscape that tells you
              where the opportunity is and what it costs to take it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="h-14 rounded-none border-none bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/consult">
                  Commission Intelligence <ArrowUpRight className="ml-1 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-none border-2 border-background/40 bg-transparent px-8 text-base font-semibold text-background hover:bg-background/10 hover:text-background"
              >
                <Link href="/consult">Discuss a Market Scan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* THESIS — single committed deep-red band                        */}
      {/* white on #aa3018 ~6.7:1; white/85 ~4.8:1 (body passes AA)      */}
      {/* ============================================================== */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.01em] text-white [font-size:clamp(1.9rem,4vw,3rem)]">
                Capital deployed blind is capital at risk.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="max-w-2xl text-lg font-light leading-relaxed text-white">
                In Africa&apos;s growth markets the difference between a confident move and a
                costly one is rarely ambition — it is visibility. Who already operates here. What
                the regulator will allow. Where capital is flowing and on what terms.
              </p>
              <p className="max-w-2xl text-base font-light leading-relaxed text-white/85">
                Market Intelligence gives decision-makers that picture before they deploy:
                structured, sourced and decision-ready. Not a study you wait months for —
                commercial visibility sharp enough to act on now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* THE FIELD — five capabilities as an ordered sequence of        */}
      {/* oversized full-width ledger rows on the light ground           */}
      {/* ============================================================== */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              The Intelligence Field
            </p>
            <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,3rem)]">
              Five lines of sight, read in order — from the terrain to the standing watch.
            </h2>
          </div>

          <div className="mt-14 border-t border-foreground/15">
            {recon.map((item) => (
              <article
                key={item.figure}
                className="grid gap-y-6 border-b border-foreground/15 py-10 md:grid-cols-12 md:gap-x-10 md:py-14"
              >
                <div className="md:col-span-3">
                  <div
                    className="font-normal leading-none tracking-[-0.04em] text-primary [font-size:clamp(3rem,7vw,5rem)]"
                    aria-hidden="true"
                  >
                    {item.figure}
                  </div>
                  <p className="mt-3 max-w-[18rem] text-base font-light leading-snug text-foreground/75">
                    {item.lead}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-balance text-2xl font-normal leading-tight text-foreground md:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-foreground/75">
                    {item.body}
                  </p>
                </div>

                <ul className="space-y-3 md:col-span-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <ArrowRight
                        className="mt-1 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light leading-relaxed text-foreground/80">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              className="h-14 rounded-none border-none bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/consult">
                Scope the Intelligence You Need <ArrowRight className="ml-1 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* WHO RELIES ON IT — navy band, full-width hairline rows         */}
      {/* ============================================================== */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.9rem,4vw,3rem)]">
                Built for the people who move <span className="text-primary">first</span>.
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/80">
                If your next decision turns on visibility you do not yet have, this is the line you
                draw on.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/15">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="flex items-baseline gap-5 border-b border-white/15 py-5"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 translate-y-[0.45rem] bg-primary"
                      aria-hidden="true"
                    />
                    <p className="text-base font-light leading-relaxed text-background/90 md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* WHERE IT SITS — distinct from Research and Perspectives        */}
      {/* ============================================================== */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              Where It Sits
            </p>
            <h2 className="mt-4 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.9rem,4vw,3rem)]">
              Visibility, bespoke analysis and perspective are three different instruments.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
              Market Intelligence is the fast, structured read for commercial decisions. Reach for
              Research when a question needs commissioned primary work and Credible Perspectives
              when you want media and thought leadership.
            </p>
          </div>

          <div className="mt-12 border-t border-foreground/15">
            {distinctions.map((d) => {
              const isExternal = d.href?.startsWith("http");
              const inner = (
                <>
                  <div className="md:col-span-4">
                    <h3
                      className={`text-2xl font-normal leading-tight md:text-3xl ${
                        d.here ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {d.name}
                    </h3>
                    {d.here && (
                      <span className="mt-2 inline-block text-xs font-bold uppercase tracking-[0.15em] text-foreground/60">
                        You are here
                      </span>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-6 md:col-span-8">
                    <p className="max-w-2xl text-base font-light leading-relaxed text-foreground/75">
                      {d.role}
                    </p>
                    {d.href && (
                      <span className="shrink-0 pt-1 text-primary" aria-hidden="true">
                        {isExternal ? (
                          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover/dist:-translate-y-0.5 group-hover/dist:translate-x-0.5" />
                        ) : (
                          <ArrowRight className="size-5 transition-transform duration-300 group-hover/dist:translate-x-1" />
                        )}
                      </span>
                    )}
                  </div>
                </>
              );

              const rowClass =
                "grid gap-y-3 border-b border-foreground/15 py-7 md:grid-cols-12 md:gap-x-10";

              return d.href ? (
                <Link
                  key={d.name}
                  href={d.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`group/dist transition-colors duration-300 hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${rowClass}`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={d.name} className={rowClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* HOW ENGAGEMENT WORKS — genuine four-step sequence              */}
      {/* ============================================================== */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.9rem,4vw,3rem)]">
            From a question to a decision-ready read.
          </h2>
          <div className="relative mt-14">
            <span
              className="mi-sweep absolute left-0 top-0 hidden h-px w-full bg-primary/60 md:block"
              aria-hidden="true"
            />
            <div className="grid gap-10 md:grid-cols-4 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Frame the Question",
                  desc: "We define the decision the intelligence has to serve — the market, the move and what visibility is missing.",
                },
                {
                  step: "2",
                  title: "Set the Scope",
                  desc: "Reports, mapping, scans, capital intelligence or a standing subscription — matched to the decision and its timing.",
                },
                {
                  step: "3",
                  title: "Gather & Verify",
                  desc: "Sourced, structured and cross-checked against the people and signals that actually move the market.",
                },
                {
                  step: "4",
                  title: "Deliver to Decide",
                  desc: "A decision-ready read, with the option to keep a standing line of sight as the landscape moves.",
                },
              ].map((s) => (
                <div key={s.step} className="md:pt-10">
                  <div
                    className="font-normal leading-none tracking-[-0.04em] text-primary [font-size:clamp(2.5rem,5vw,3.5rem)]"
                    aria-hidden="true"
                  >
                    {s.step}
                  </div>
                  <h3 className="mt-4 text-xl font-normal leading-tight text-background">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-background/75">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* CLOSE — committed deep-red drench, white text + white CTA       */}
      {/* white on #aa3018 ~6.7:1; white/90 ~5.5:1 (passes AA body)       */}
      {/* ============================================================== */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.08] tracking-[-0.02em] text-white [font-size:clamp(2rem,5vw,3.75rem)]">
              Move with sight, not assumption.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90">
              Tell us the market and the decision in front of you. We will scope the intelligence
              that gives you commercial visibility before you deploy a shilling.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="h-14 rounded-none border-none bg-white px-10 text-base font-semibold text-[#aa3018] hover:bg-white/90"
              >
                <Link href="/consult">Commission Intelligence</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-none border-2 border-white bg-transparent px-10 text-base font-semibold text-white hover:bg-white hover:text-[#aa3018]"
              >
                <Link href="/consult">Discuss a Market Scan</Link>
              </Button>
            </div>

            <div className="mt-14 flex flex-col gap-5 border-t border-white/25 pt-10 text-white sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
              <a
                href="mailto:connect@credence.africa"
                className="inline-flex items-center gap-3 text-base font-light hover:underline"
              >
                <Mail className="size-5" aria-hidden="true" /> connect@credence.africa
              </a>
              <a
                href="tel:+254719468240"
                className="inline-flex items-center gap-3 text-base font-light hover:underline"
              >
                <Phone className="size-5" aria-hidden="true" /> +254 719 468 240
              </a>
              <span className="inline-flex items-center gap-3 text-base font-light">
                <MapPin className="size-5" aria-hidden="true" /> Nairobi, Kenya
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
