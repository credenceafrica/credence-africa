import { ConsultationForm } from "@/components/consultation-form";
import { Hero } from "@/components/site/hero";
import { Arrow, SmartLink, num } from "@/components/site/primitives";
import { contact, contactLabels } from "@/lib/contact";
import { consultationInterestValues } from "@/lib/consultation";

const routes = [
  {
    t: "Institutional brief",
    b: "Advisory, commissioned training, client events, research or media: use the form on this page.",
    href: "#brief",
  },
  {
    t: "Programs and courses",
    b: "Explore individual programs and enrolment routes on Credence Institute.",
    href: "https://institute.credence.africa/",
  },
  {
    t: "Events and registration",
    b: "Find current events, dates and participation terms on the event platform.",
    href: "https://engage.credence.africa/",
  },
];

const contacts = [
  { label: contactLabels.email, value: contact.email, href: `mailto:${contact.email}` },
  { label: contactLabels.phone, value: contact.phone, href: `tel:${contact.phoneHref}` },
  { label: contactLabels.address, value: contact.addressShort, href: contact.mapsUrl },
  { label: "WhatsApp", value: contact.phone, href: `https://wa.me/${contact.phoneHref.slice(1)}` },
];

const steps = [
  "Tell us the objective, institution, geography, timeframe and available budget.",
  "We review the requirements and discuss the appropriate service.",
  "A written proposal sets out the approach, outputs, assumptions, client inputs and commercial terms.",
];

const h2 = "h2 mb-7 mt-0 font-normal leading-[1.1] tracking-[-0.035em]";

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ consult?: string | string[] }>;
}) {
  // `?consult=<key>` (from consultHref and the child sites) preselects that area in the form.
  const { consult } = await searchParams;
  const interest = typeof consult === "string" && consultationInterestValues.includes(consult) ? consult : "";

  return (
    <>
      <Hero
        crumbs={[{ label: "Consult" }]}
        title="Tell us what you want to achieve"
        intro="Contact Credence Africa about advisory, learning, events or intelligence. Share your organization, intended output, market and timing for an initial assessment."
      />

      <section className="py-32">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] items-start gap-14">
          <div>
            <h2 className={`${h2} text-[clamp(34px,3.5vw,50px)]`}>Choose your inquiry route</h2>
            <div className="mb-16 border-t border-line">
              {routes.map((r) => (
                <SmartLink
                  key={r.t}
                  href={r.href}
                  className="grid grid-cols-[1fr_24px] items-center gap-4 border-b border-line py-[22px] hover:text-primary-deep"
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-[17px] font-medium">{r.t}</span>
                    <span className="text-[14.5px] text-body-3">{r.b}</span>
                  </span>
                  <Arrow size={16} />
                </SmartLink>
              ))}
            </div>

            <h2 className={`${h2} text-[clamp(30px,3vw,42px)]`}>Contact Credence Africa</h2>
            {/* Label column: 120px, narrowing on small phones so the email never pushes the row off screen. */}
            <div className="mb-14 border-t border-line">
              {contacts.map((c) => (
                <SmartLink
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("https://") ? "_blank" : undefined}
                  rel={c.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="grid grid-cols-[minmax(0,120px)_1fr_24px] items-center gap-4 border-b border-line py-5 hover:text-primary-deep"
                >
                  <span className="text-[13.5px] text-body-3">{c.label}</span>
                  <span className="text-[16.5px] font-medium">{c.value}</span>
                  <Arrow size={16} />
                </SmartLink>
              ))}
            </div>

            <h3 className="mb-2 mt-0 text-[20px] font-medium tracking-[-0.01em]">What happens next</h3>
            <div>
              {steps.map((t, i) => (
                <div key={t} className="grid grid-cols-[56px_1fr] items-baseline gap-3 border-b border-line py-[18px]">
                  <span className="text-[36px] font-light leading-none text-[#B5B5B5]">{num(i)}</span>
                  <span className="text-[16px]">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keyed so following another ?consult= link while on this page re-seeds the form. */}
          <ConsultationForm key={interest} id="brief" defaultInterest={interest} className="on-dark bg-ink p-11 text-white">
            <h2 className="col-span-full mb-1.5 mt-0 text-[34px] font-normal leading-[1.1] tracking-[-0.03em]">
              Share your requirement
            </h2>
            <p className="col-span-full -mt-2 mb-1 text-[15px] text-body-dark">
              Describe your organization, objective, location, timing, budget range and the output you need.
            </p>
          </ConsultationForm>
        </div>
      </section>
    </>
  );
}
