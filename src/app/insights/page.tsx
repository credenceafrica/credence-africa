"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Hero } from "@/components/site/hero";
import { Arrow, Pill, SmartLink, num } from "@/components/site/primitives";
import { getInsights, type Insight } from "@/lib/insights";

const categories = [
  { t: "Capital, Investment and Blended Finance", b: "Funding trends, investor mandates and catalytic finance models." },
  { t: "Regulatory, Compliance and Licensing", b: "Legislation updates, licensing pathways and compliance navigation." },
  { t: "Policy, Public Affairs and Government Strategy", b: "Bills, policy reforms, ESG mandates and advocacy intelligence." },
  { t: "IP, Brand and Digital Asset Strategy", b: "IP monetisation, NIL rights and influencer strategy." },
  { t: "Corporate Structuring, Tax and Expansion", b: "Cross-border structuring, tax efficiency and jurisdictional risk." },
  { t: "Market Entry and Sector Intelligence", b: "Localization playbooks, sector outlooks and trade updates." },
];

const h2 = "h2 m-0 text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.1] tracking-[-0.035em]";

export default function InsightsPage() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      setLoading(true);
      try {
        const fetchedInsights = await getInsights();
        setInsights(fetchedInsights);
      } catch (error) {
        console.error("Failed to fetch insights:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, []);

  return (
    <>
      <Hero
        title="Credence Insights"
        intro="Clarity that Powers Strategy. Intelligence that Shapes Action. Expert briefings, regulatory intelligence, capital-market updates and sector-specific analysis for Africa-focused businesses, investors and innovators."
        crumbs={[{ label: "Insights" }]}
        btn1={{ label: "Book a Consultation", href: "/consult" }}
      />

      <section className="bg-white py-32 text-ink">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className={h2}>Recent Insights</h2>
            <Pill href="https://perspectives.credence.africa" variant="dark">
              View all on Credible Perspectives
            </Pill>
          </div>
          {loading ? (
            <p className="m-0 text-[15.5px] text-body-2">Loading insights...</p>
          ) : insights.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7">
              {insights.map((p) => (
                <SmartLink key={p.id} href={`/insights/${p.slug}`} className="flex flex-col gap-3.5 text-ink">
                  <div className="ph relative h-[240px]">
                    {p.image && <Image src={p.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" className="object-cover" />}
                    <span className="absolute bottom-2.5 left-2.5 flex gap-1 text-[11.5px] text-ink">
                      <span className="bg-white px-2 py-[3px]">{p.date}</span>
                      {p.category && <span className="bg-primary px-2 py-[3px]">{p.category}</span>}
                    </span>
                  </div>
                  <h3 className="m-0 text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">{p.title}</h3>
                </SmartLink>
              ))}
            </div>
          ) : (
            <p className="m-0 text-[15.5px] text-body-2">No insights found.</p>
          )}
        </div>
      </section>

      <section className="bg-white pb-32 text-ink">
        <div className="wrap">
          <div className="eb mb-[18px] text-[13.5px]">Credence Insights</div>
          <h2 className={`${h2} mb-14 text-mute`}>Content Categories</h2>
          <div className="bgrid grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-l border-t border-line">
            {categories.map((c, i) => (
              <div key={c.t} className="flex min-h-[220px] flex-col gap-2.5 bg-white p-7">
                <span className="tile flex size-11 items-center justify-center bg-ink text-[17px] text-primary">{num(i)}</span>
                <h3 className="mb-0 mt-9 text-[19px] font-medium leading-[1.3] tracking-[-0.01em]">{c.t}</h3>
                <p className="m-0 text-[14.5px] text-body-2">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-28 text-white">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-end gap-10">
          <div>
            <h2 className="h2 mb-3.5 mt-0 text-[clamp(34px,3.5vw,50px)] font-normal leading-[1.1] tracking-[-0.035em]">
              Subscribe to the Credence insights briefing
            </h2>
            <p className="m-0 text-[16.5px] text-body-dark">Receive strategic intelligence straight to your inbox.</p>
          </div>
          {/* No newsletter backend yet: method="dialog" runs the browser's email check, then neither reloads nor sends. */}
          <form method="dialog" className="flex flex-wrap items-end gap-4">
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input id="nl-email" type="email" required autoComplete="email" placeholder="Email" className="fld flex-[1_1_240px]" />
            <button
              type="submit"
              className="pill inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14.5px] font-semibold text-ink"
            >
              Subscribe
              <Arrow />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
