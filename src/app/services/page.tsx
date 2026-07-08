import { getServices, Service } from "@/lib/services";
import { ConsultationDialog } from "@/components/consultation-dialog";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Platforms",
  description:
    "The integrated platforms through which Credence Africa helps institutions raise capital, enter markets, navigate policy, build capability, generate intelligence and convene stakeholders across Africa.",
};

type ThemeKey = "vermillion" | "navy" | "light";

const GROUPS: { label: string; blurb: string; ids: string[]; theme: ThemeKey }[] = [
  {
    label: "Advisory",
    blurb: "Strategy, capital and policy: the mandates that move institutions forward.",
    ids: ["capital", "public-affairs", "trade"],
    theme: "vermillion",
  },
  {
    label: "Intelligence & Insight",
    blurb: "The evidence, intelligence and perspective behind confident decisions.",
    ids: ["perspectives", "research"],
    theme: "navy",
  },
  {
    label: "Capability & Convening",
    blurb: "Institutional capacity and the platforms where it compounds.",
    ids: ["institute", "events"],
    theme: "light",
  },
];

// Each band commits to one ground colour; text colours clear WCAG AA for body.
// The Advisory band uses a deepened brand red (#aa3018) so white text passes AA
// (white ~6.7:1, white/85 ~4.8:1); white on bright vermillion fails for small text.
const THEME: Record<
  ThemeKey,
  {
    section: string;
    title: string;
    blurb: string;
    frame: string;
    divide: string;
    rowText: string;
    rowDesc: string;
    rowMeta: string;
    icon: string;
    arrow: string;
    underline: string;
    hover: string;
    ring: string;
  }
> = {
  vermillion: {
    section: "bg-[#aa3018]",
    title: "text-white",
    blurb: "text-white/85",
    frame: "border-white/25",
    divide: "divide-white/25",
    rowText: "text-white",
    rowDesc: "text-white/85",
    rowMeta: "text-white/80",
    icon: "text-white/60",
    arrow: "text-white",
    underline: "bg-white",
    hover: "hover:bg-white/[0.06]",
    ring: "focus-visible:ring-white focus-visible:ring-offset-[#aa3018]",
  },
  navy: {
    section: "bg-foreground",
    title: "text-primary",
    blurb: "text-background/80",
    frame: "border-white/15",
    divide: "divide-white/15",
    rowText: "text-background",
    rowDesc: "text-background/75",
    rowMeta: "text-background/60",
    icon: "text-background/50",
    arrow: "text-primary",
    underline: "bg-primary",
    hover: "hover:bg-white/[0.06]",
    ring: "focus-visible:ring-background focus-visible:ring-offset-foreground",
  },
  light: {
    section: "bg-background",
    title: "text-primary",
    blurb: "text-foreground/70",
    frame: "border-foreground/12",
    divide: "divide-foreground/12",
    rowText: "text-foreground",
    rowDesc: "text-foreground/75",
    rowMeta: "text-foreground/60",
    icon: "text-foreground/40",
    arrow: "text-primary",
    underline: "bg-primary",
    hover: "hover:bg-foreground/5",
    ring: "focus-visible:ring-primary focus-visible:ring-offset-background",
  },
};

function PlatformRow({ service, t }: { service: Service; t: (typeof THEME)[ThemeKey] }) {
  const isExternal = service.href.startsWith("http");

  return (
    <Link
      href={service.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group/row relative flex min-h-[8.5rem] items-start gap-6 py-7 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:gap-10 md:py-9 ${t.hover} ${t.ring}`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className={`relative inline-block text-2xl font-normal leading-tight md:text-3xl ${t.rowText}`}>
            {service.title}
            <span
              className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/row:scale-x-100 ${t.underline}`}
              aria-hidden="true"
            />
          </h3>
          {isExternal && (
            <span className={`inline-flex items-center gap-0.5 text-xs ${t.rowMeta}`}>
              · External
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </span>
          )}
        </div>
        <p className={`mt-2 text-sm font-medium md:text-base ${t.rowText}`}>{service.description}</p>
        <p className={`mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed ${t.rowDesc}`}>
          {service.longDescription}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4 pt-1">
        <span className={`hidden md:inline-flex [&_svg]:size-6 ${t.icon}`} aria-hidden="true">
          {service.icon}
        </span>
        {isExternal ? (
          <ArrowUpRight
            className={`size-6 shrink-0 transition-transform duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 ${t.arrow}`}
            aria-hidden="true"
          />
        ) : (
          <ArrowRight
            className={`size-6 shrink-0 transition-transform duration-300 group-hover/row:translate-x-1.5 ${t.arrow}`}
            aria-hidden="true"
          />
        )}
      </div>
    </Link>
  );
}

export default async function ServicesPage() {
  const services = await getServices();
  const byId = new Map(services.map((s) => [s.id, s] as const));

  return (
    <div className="overflow-x-hidden">
      {/* Header: full-bleed navy; flows straight into the first (vermillion) band */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="mt-6 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Our <span className="text-primary">Platforms</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Eight integrated platforms: one execution system for institutions shaping Africa's growth.
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-background/70 md:text-base">
              At Credence Africa we design the strategic infrastructure that turns ambition into
              institution, for enterprises, cooperatives, nonprofits, public benefit actors and
              governments navigating complexity, unlocking capital and driving sustainable
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Platform bands: each group owns a full-bleed ground colour */}
      {GROUPS.map((group) => {
        const items = group.ids
          .map((id) => byId.get(id))
          .filter((s): s is Service => Boolean(s));
        if (items.length === 0) return null;
        const t = THEME[group.theme];

        return (
          <section key={group.label} className={t.section}>
            <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <h2
                    className={`text-balance font-normal leading-[1.1] tracking-[-0.01em] ${t.title} [font-size:clamp(1.75rem,3.5vw,2.5rem)]`}
                  >
                    {group.label}
                  </h2>
                  <p className={`mt-5 max-w-sm text-base font-light leading-relaxed ${t.blurb}`}>
                    {group.blurb}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className={`border-y ${t.frame} divide-y ${t.divide}`}>
                    {items.map((service) => (
                      <PlatformRow key={service.id} service={service} t={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA: second deep-red drench, bookending the navy header */}
      <section className="bg-[#aa3018]">
        <div className="container mx-auto space-y-6 px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-balance font-normal leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
            Not sure which platform fits your mandate?
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/85">
            Tell us the objective. We will map the fastest credible path to execution.
          </p>
          <ConsultationDialog
            size="lg"
            triggerClassName="h-14 rounded-none border-none bg-white px-8 text-base font-light text-[#aa3018] hover:bg-white/90"
          >
            Book a Consultation
          </ConsultationDialog>
        </div>
      </section>
    </div>
  );
}
