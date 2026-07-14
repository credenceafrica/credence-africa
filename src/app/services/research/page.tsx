import { ConsultationDialog } from "@/components/consultation-dialog";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Research & Market Intelligence: one service, two instruments working as a
// single chain: the evidence base you can defend and the commercial visibility
// you act on before you deploy. The page reads like a commissioned dossier that
// carries both a study and a field brief, not two stitched pages. Signature
// moment: a horizontal chain rail (Question -> Field -> Analysis -> Sight) that
// closes the loop from evidence to a live commercial read.

// Research: the evidence base. Five commissioned disciplines.
const research = [
  {
    no: "A",
    title: "Sector and market studies",
    body: "Structured studies of how a sector works: its players, value chains, economics, growth drivers and constraints, built to inform a specific capital or market decision.",
  },
  {
    no: "B",
    title: "Market sizing and demand assessment",
    body: "Bottom-up and top-down sizing, demand modelling and addressable-market estimates that put a defensible number behind an opportunity rather than a hopeful one.",
  },
  {
    no: "C",
    title: "Policy and regulatory analysis",
    body: "Reading the regulatory environment as it stands and as it is likely to move: licensing, reform direction and the institutional interests that shape outcomes.",
  },
  {
    no: "D",
    title: "Institutional and ecosystem diagnostics",
    body: "Diagnostics of an institution or an ecosystem: capability, structure, relationships and gaps, to ground decisions about strengthening, partnership or entry.",
  },
  {
    no: "E",
    title: "Evidence and decision-support reporting",
    body: "Reporting built for the people who decide: clear findings, weighted evidence and an explicit line from what we found to what it means for the choice in front of you.",
  },
];

// Market Intelligence: commercial visibility before you deploy. Four lines of sight.
const intelligence = [
  {
    no: "F",
    title: "Ecosystem and stakeholder mapping",
    body: "A working map of the actors that shape an opportunity: regulators, incumbents, capital, distribution and the partners who turn a plan into a presence on the ground.",
  },
  {
    no: "G",
    title: "Opportunity and entry scans",
    body: "Focused scans that test a specific opportunity or entry route: sizing the prize, surfacing the barriers and pricing the move before commitment. Visibility sharp enough to act on.",
  },
  {
    no: "H",
    title: "Capital and investment intelligence",
    body: "The lay of the money around a market or sector: active investors, deal flow, valuation reference points and the financing structures already in play.",
  },
  {
    no: "I",
    title: "Ongoing intelligence subscriptions",
    body: "A standing line of sight for teams that need to stay current: recurring briefs, monitoring and signal alerts as a market, sector or capital landscape moves around you.",
  },
];

// A real sequence, numbered legitimately, because the work is a chain from an
// open question to a live commercial read.
const method = [
  {
    step: "01",
    title: "Frame the question",
    body: "We sharpen the decision behind the brief: what is being chosen, by whom and on what evidence, so the work answers it rather than circling it.",
  },
  {
    step: "02",
    title: "Design the base",
    body: "We set the method, sources and field plan: what counts as evidence here, where it lives and how we gather it without spending on what does not move the decision.",
  },
  {
    step: "03",
    title: "Gather and test",
    body: "We collect from the field, the data and the people who know, then stress the findings, triangulate sources and discard what will not hold up to scrutiny.",
  },
  {
    step: "04",
    title: "Deliver to the decision",
    body: "We hand over findings weighted by confidence with an explicit line to implication and keep a standing read where the landscape needs watching.",
  },
];

// The chain rail: the signature. Now closes on live commercial sight.
const chain = [
  { label: "Question", note: "The decision, stated plainly." },
  { label: "Field", note: "Sources, data and people." },
  { label: "Analysis", note: "Tested, triangulated, weighted." },
  { label: "Sight", note: "Evidence and a commercial read." },
];

const audience = [
  "Investors and funds sizing a market or sector before they deploy capital",
  "Institutions entering a jurisdiction or sector they do not yet know cold",
  "Growth teams pressure-testing an expansion thesis before they commit",
  "Public-sector and ecosystem actors who need a diagnostic before reform or design",
  "Boards and leadership teams who need an independent evidence base for a high-stakes call",
  "Corporates and platforms tracking deal flow, capital movement and adjacent white space",
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

      {/* Hero: the dossier cover. Full-bleed navy. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="cred-rise lg:col-span-7">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-1 w-10 bg-primary" aria-hidden="true" />
                Research and Market Intelligence
              </div>
              <h1 className="mt-8 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                The evidence and the
                <span className="text-primary"> sight.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
                One service that gives institutions both the defensible evidence base and the
                commercial visibility to make confident capital, market and governance calls.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
                Commissioned studies, sector and market sizing, policy analysis and institutional
                diagnostics build the evidence. Ecosystem mapping, entry scans, capital intelligence
                and standing subscriptions give you the read before you deploy. Distinct from
                Credible Perspectives, our public media platform: this work is private, commissioned
                and built for your call.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ConsultationDialog
                  size="lg"
                  triggerClassName="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90"
                >
                  Commission a Study <ArrowRight className="ml-2 size-5" />
                </ConsultationDialog>
                <ConsultationDialog
                  size="lg"
                  variant="outline"
                  triggerClassName="h-14 rounded-none border-2 border-background/30 bg-transparent px-8 text-base font-light text-background hover:bg-background/5"
                >
                  Scope a Market Scan
                </ConsultationDialog>
              </div>
            </div>

            {/* Cover plate: a stamped dossier face, not a metric card. */}
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
                    ["Output", "Evidence plus a commercial read"],
                    ["Scope", "Sector · Market · Policy · Capital"],
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
                  Every engagement answers a stated question and is built to hold up when the
                  decision is challenged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis: why both instruments belong to one service. Deep-red drench, white text. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Evidence you can defend. Sight you can act on.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="max-w-2xl text-lg font-light leading-relaxed text-white">
                In Africa&apos;s growth markets the difference between a confident move and a costly
                one is rarely ambition: it is what you know. Some decisions need a commissioned
                evidence base that holds up under challenge. Others need commercial visibility fast
                enough to act on now. Most consequential calls need both.
              </p>
              <p className="max-w-2xl text-base font-light leading-relaxed text-white/85">
                We run the disciplined study when the question is too consequential for instinct and
                we run the field read when you need to see a market before you deploy. One team, one
                chain of evidence, sized to the decision in front of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature: the chain rail. Full-bleed light. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              It is a chain. We hold every link.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
              An opinion can skip steps. Evidence cannot. We move from the question to the field,
              from the field to analysis and from analysis to a read you can decide on: evidence
              weighted for the record and commercial sight sharp enough to move on.
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

      {/* What we run: two instruments as grouped ledger rows on a vermillion drench. */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              What we run
            </h2>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/85">
              Two instruments under one mandate. We take the brief, frame the question and run the
              evidence work, the commercial read or the combination your decision actually needs.
            </p>
          </div>

          {/* The evidence base */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                The evidence base
              </p>
              <h3 className="mt-4 font-normal leading-[1.1] text-white [font-size:clamp(1.5rem,2.6vw,2rem)]">
                Research
              </h3>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/85">
                Commissioned, primary work built for a specific question and the record it has to
                stand up to.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-white/25 divide-y divide-white/25">
                {research.map((d) => (
                  <div key={d.title} className="flex items-start gap-6 py-7 md:gap-10 md:py-8">
                    <span
                      className="shrink-0 text-2xl font-normal leading-none text-white/55 md:text-3xl"
                      aria-hidden="true"
                    >
                      {d.no}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xl font-normal leading-tight text-white md:text-2xl">
                        {d.title}
                      </h4>
                      <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-white/85 md:text-base">
                        {d.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial visibility */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Commercial visibility
              </p>
              <h3 className="mt-4 font-normal leading-[1.1] text-white [font-size:clamp(1.5rem,2.6vw,2rem)]">
                Market Intelligence
              </h3>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/85">
                Fast, structured reads that let you see a market, an ecosystem or a capital landscape
                before you deploy.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-y border-white/25 divide-y divide-white/25">
                {intelligence.map((d) => (
                  <div key={d.title} className="flex items-start gap-6 py-7 md:gap-10 md:py-8">
                    <span
                      className="shrink-0 text-2xl font-normal leading-none text-white/55 md:text-3xl"
                      aria-hidden="true"
                    >
                      {d.no}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xl font-normal leading-tight text-white md:text-2xl">
                        {d.title}
                      </h4>
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

      {/* Method: a genuine numbered sequence. Full-bleed light. */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              How an engagement runs
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
              Four steps, run in order, whether the brief calls for a full study, a fast commercial
              read or both. The discipline is in the sequence: we do not analyse what we have not
              framed nor report what we have not tested.
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

      {/* Who commissions this. Full-bleed navy. */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-primary [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Who commissions it
              </h2>
              <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-background/80">
                Institutions that need a basis before they move: not a view, an evidence base and a
                commercial read they can act on and defend.
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

      {/* Closing CTA: deep-red drench, white text plus white button (AA-safe close). */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Tell us the decision. We will build the evidence and the read.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 md:text-lg">
                Bring the call you are weighing: a market to size, a sector to read, a policy to
                anticipate, an institution to diagnose or a landscape to keep sight of. We will scope
                the work, set the method and deliver a basis built for the decision.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <ConsultationDialog
                  size="lg"
                  triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-primary hover:bg-white/90"
                >
                  Commission a Study
                </ConsultationDialog>
                <a
                  href="mailto:connect@credence.africa"
                  className="group inline-flex h-14 items-center justify-center gap-2 border-2 border-white bg-transparent px-8 text-base font-light text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
