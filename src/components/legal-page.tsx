import { Hero } from "@/components/site/hero";
import { Pill, num } from "@/components/site/primitives";
import { type LegalPolicy, legalContact, legalLastUpdated } from "@/lib/legal";

/** Legal template: the client's numbered sections beside the lead statement, then a contact box. */
export function LegalPage({ policy }: { policy: LegalPolicy }) {
  return (
    <div className="w-full bg-white leading-[1.7] text-ink">
      <Hero
        crumbs={[{ label: "Legal" }, { label: policy.title }]}
        title={policy.title}
        intro={`Last updated: ${legalLastUpdated}`}
        mobileTitle={40}
      />

      <section className="pb-32 pt-28">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12">
          <div>
            <div className="eb mb-[18px] text-[13.5px]">Last updated: {legalLastUpdated}</div>
            <p className="m-0 max-w-[420px] text-[26px] leading-[1.3] tracking-[-0.02em]">{policy.intro}</p>
          </div>

          {/* Spans 2 only from 768px: below that the grid is one column and `span 2` would add a phantom column that overflows. */}
          <div className="min-w-0 border-t border-line md:col-span-2">
            {policy.sections.map((s, i) => (
              <div key={s.id} id={s.id} className="grid grid-cols-[64px_1fr] gap-4 border-b border-line py-7">
                <span className="text-[36px] font-light leading-none text-[#B5B5B5]">{num(i)}</span>
                <div>
                  <h2 className="mb-2.5 mt-0 text-[20px] font-medium tracking-[-0.01em]">{s.heading}</h2>
                  {s.blocks.map((b, j) =>
                    b.type === "p" ? (
                      <p key={j} className="mb-2.5 mt-0 text-[16px] text-body">
                        {b.text}
                      </p>
                    ) : (
                      <ul key={j} className="m-0 flex list-none flex-col p-0 text-[16px] text-body">
                        {b.items.map((item) => (
                          <li key={item} className="flex gap-2.5 py-1.5">
                            <span aria-hidden="true" className="mt-[11px] size-1.5 shrink-0 bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </div>
            ))}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 bg-ink p-9 text-white">
              <div>
                <h2 className="mb-2 mt-0 text-[30px] font-normal tracking-[-0.03em]">
                  {policy.title.includes("Terms") ? "Questions about these Terms?" : "Questions about this policy?"}
                </h2>
                <p className="m-0 max-w-[560px] text-[15px] text-body-dark">
                  Email {legalContact.email} or write to Credence Africa, {legalContact.address}.
                </p>
              </div>
              <Pill href={`mailto:${legalContact.email}`} variant="light">
                {legalContact.email}
              </Pill>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
