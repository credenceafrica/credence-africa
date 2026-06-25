import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Bold concept — "The Evidence Dossier": research presented as the disciplined
// chain from an open institutional question to decision-grade evidence. The page
// reads like the cover, contents and method of a commissioned study, not a card
// grid. Signature moment: a horizontal evidence-chain rail (Question → Field →
// Analysis → Evidence) and a genuine numbered method sequence (where numbers are
// earned, because the work IS a sequence).

// The five commissioned-research disciplines, drawn from the services data.
const disciplines = [
  {
    no: "A",
    title: "Sector and market studies",
    body: "Structured studies of how a sector works — its players, value chains, economics, growth drivers and constraints — built to inform a specific capital or market decision.",
  },
  {
    no: "B",
    title: "Market sizing and demand assessment",
    body: "Bottom-up and top-down sizing, demand modelling and addressable-market estimates that put a defensible number behind an opportunity rather than a hopeful one.",
  },
  {
    no: "C",
    title: "Policy and regulatory analysis",
    body: "Reading the regulatory environment as it stands and as it is likely to move — licensing, reform direction and the institutional interests that shape outcomes.",
  },
  {
    no: "D",
    title: "Institutional and ecosystem diagnostics",
    body: "Diagnostics of an institution or an ecosystem — capability, structure, relationships and gaps — to ground decisions about strengthening, partnership or entry.",
  },
  {
    no: "E",
    title: "Evidence and decision-support reporting",
    body: "Reporting built for the people who decide — clear findings, weighted evidence and an explicit line from what we found to what it means for the choice in front of you.",
  },
];

// A real sequence — numbered legitimately, because commissioning research is a chain.
const method = [
  {
    step: "01",
    title: "Frame the question",
    body: "We sharpen the decision behind the brief — what is being chosen, by whom and on what evidence — so the study answers it rather than circling it.",
  },
  {
    step: "02",
    title: "Design the evidence base",
    body: "We set the method, sources and field plan: what counts as evidence here, where it lives and how we will gather it without spending on what does not move the decision.",
  },
  {
    step: "03",
    title: "Gather and test",
    body: "We collect from the field, the data and the people who know — then we stress the findings, triangulate sources and discard what will not hold up to scrutiny.",
  },
  {
    step: "04",
    title: "Report to the decision",
    body: "We deliver findings weighted by confidence, with an explicit line from evidence to implication — so the decision-maker can act, defend the call and move.",
  },
];

// The evidence chain — the signature rail.
const chain = [
  { label: "Question", note: "The decision, stated plainly." },
  { label: "Field", note: "Sources, data and people." },
  { label: "Analysis", note: "Tested, triangulated, weighted." },
  { label: "Evidence", note: "Findings built to decide on." },
];

const audience = [
  "Investors and funds sizing an opportunity before they deploy capital",
  "Institutions entering a sector or market that they do not yet know cold",
  "Public-sector and ecosystem actors who need a diagnostic before reform or design",
  "Boards and executive teams who need an independent evidence base for a high-stakes call",
];

export default function ResearchPage() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes res-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .res-rail-line { transform-origin: left; animation: res-draw 1.1s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        }
        @media (prefers-reduced-motion: reduce) {
          .res-rail-line { transform: scaleX(1); }
        }
      `}</style>

      {/* ── Hero: the dossier cover. Full-bleed navy. ── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1 w-10 bg-primary" aria-hidden="true" />
                Commissioned Research
              </div>
              <h1 className="mt-8 text-balance font-normal leading-[1.04] tracking-[-0.02em] text-background [font-size:clamp(2.75rem,7vw,5.5rem)]">
                Evidence before the
                <span className="text-primary"> decision.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
                We run the studies institutions commission when a capital, market or
                governance call is too consequential to make on instinct.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
                Sector and market studies, market sizing, policy and regulatory analysis,
                institutional diagnostics and decision-support reporting — assembled into a
                defensible evidence base. Distinct from Credible Perspectives, our public
                media platform: this work is private, commissioned and built for your call.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-none border-none bg-primary px-8 text-base font-bold text-foreground hover:bg-primary/90"
                >
                  <Link href="/consult">
                    Commission a Study <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-none border-2 border-background/30 bg-transparent px-8 text-base font-medium text-background hover:bg-background/5"
                >
                  <Link href="/consult">Scope a Research Question</Link>
                </Button>
              </div>
            </div>

            {/* Cover plate — a stamped dossier face, not a metric card. */}
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between border border-background/20 p-8 md:p-10">
                <div className="flex items-baseline justify-between border-b border-background/15 pb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-background/60">
                    Dossier
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Confidential
                  </span>
                </div>
                <dl className="space-y-6 py-8">
                  {[
                    ["Object", "An institutional decision"],
                    ["Output", "A defensible evidence base"],
                    ["Scope", "Sector · Market · Policy · Institution"],
                    ["Reach", "Across Africa's growth markets"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-background/50">
                        {k}
                      </dt>
                      <dd className="mt-1 text-lg font-light leading-snug text-background">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="border-t border-background/15 pt-6 text-sm font-light leading-relaxed text-background/65">
                  Every study answers a stated question — and is built to hold up when the
                  decision is challenged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature: the evidence chain rail. Full-bleed light. ── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,4vw,2.5rem)]">
              Research is a chain. We hold every link.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
              An opinion can skip steps. Evidence cannot. We move from the question to the
              field, from the field to analysis and from analysis to evidence you can decide
              on — with each link tested before it carries weight.
            </p>
          </div>

          {/* The rail */}
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-foreground/15 md:block" aria-hidden="true">
              <span className="res-rail-line block h-full w-full bg-primary" />
            </div>
            <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
              {chain.map((c, i) => (
                <li key={c.label} className="relative">
                  <span
                    className="block size-6 shrink-0 border border-foreground/20 bg-primary md:absolute md:-top-0 md:left-0"
                    aria-hidden="true"
                  />
                  <div className="mt-4 md:mt-12">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl font-normal leading-tight text-foreground md:text-2xl">
                        {c.label}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm font-light leading-relaxed text-foreground/75">
                      {c.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Disciplines: ledger rows on a vermillion drench (deepened red for AA white). ── */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-white [font-size:clamp(2.25rem,4.5vw,3.5rem)]">
                What we study
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-white/85">
                Five commissioned disciplines. We take the brief, frame the question and run
                the one — or the combination — your decision actually needs.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-y border-white/25 divide-y divide-white/25">
                {disciplines.map((d) => (
                  <div key={d.title} className="flex items-start gap-6 py-7 md:gap-10 md:py-9">
                    <span
                      className="shrink-0 text-2xl font-normal leading-none text-white/55 md:text-3xl"
                      aria-hidden="true"
                    >
                      {d.no}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-normal leading-tight text-white md:text-2xl">
                        {d.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-white/85 md:text-base">
                        {d.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Method: a genuine numbered sequence. Full-bleed light. ── */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,4vw,2.5rem)]">
              How a study runs
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
              Four steps, run in order. The discipline is in the sequence — we do not analyse
              what we have not framed nor report what we have not tested.
            </p>
          </div>

          <ol className="mt-14 border-t border-foreground/12">
            {method.map((m) => (
              <li
                key={m.step}
                className="grid gap-4 border-b border-foreground/12 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-3">
                  <span className="font-normal leading-none tracking-[-0.02em] text-primary [font-size:clamp(2.5rem,5vw,4rem)]">
                    {m.step}
                  </span>
                </div>
                <h3 className="self-center text-xl font-normal leading-tight text-foreground md:col-span-4 md:text-2xl">
                  {m.title}
                </h3>
                <p className="self-center max-w-xl text-sm font-light leading-relaxed text-foreground/75 md:col-span-5 md:text-base">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Who commissions this. Full-bleed navy. ── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.05] tracking-[-0.02em] text-primary [font-size:clamp(2.25rem,4.5vw,3.5rem)]">
                Who commissions it
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/80">
                Institutions that need an evidence base before they move — not a view, a
                basis they can act on and defend.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-white/15 divide-y divide-white/15">
                {audience.map((a, i) => (
                  <div key={i} className="flex items-baseline gap-5 py-6 md:gap-8 md:py-7">
                    <span
                      className="mt-2 size-2.5 shrink-0 translate-y-px bg-primary"
                      aria-hidden="true"
                    />
                    <p className="text-base font-light leading-relaxed text-background/85 md:text-lg">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA: deepened-red drench, white text + white button (AA-safe close). ── */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,4vw,2.75rem)]">
                Tell us the decision. We will build the evidence.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 md:text-lg">
                Bring the question you are weighing — a market to size, a sector to read, a
                policy to anticipate or an institution to diagnose. We will scope the study,
                set the method and deliver evidence built for the call.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-none border-none bg-white px-10 text-base font-bold text-[#aa3018] hover:bg-white/90"
                >
                  <Link href="/consult">Commission a Study</Link>
                </Button>
                <a
                  href="mailto:connect@credence.africa"
                  className="group inline-flex h-14 items-center justify-center gap-2 border-2 border-white bg-transparent px-10 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#aa3018] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#aa3018]"
                >
                  connect@credence.africa
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
