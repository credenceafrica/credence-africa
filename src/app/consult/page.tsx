import { Mail, Phone, MapPin } from "lucide-react";
import { ConsultationForm } from "@/components/consultation-form";

const steps = [
  "Send us the brief: tell us the mandate and where you are.",
  "A senior advisor reviews it and responds within 24 hours.",
  "We map the fastest credible path to execution on a strategy call.",
];

export default function ConsultationPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero: navy */}
      <section className="bg-foreground">
        <div className="container mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="cred-rise max-w-3xl">
            <h1 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-background [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              Book a <span className="text-primary">Consultation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/80 md:text-xl">
              Tell us the mandate. A senior advisor will map the fastest credible path to execution:
              across capital, markets, policy and capability.
            </p>
          </div>
        </div>
      </section>

      {/* Form band: light */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left rail: how to reach us + what happens next */}
            <div className="lg:col-span-5">
              <h2 className="text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
                Talk to a senior advisor
              </h2>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-foreground/75">
                Reach us directly or send the form and we will come to you.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:connect@credence.africa"
                  className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">connect@credence.africa</span>
                </a>
                <a
                  href="tel:+254719468240"
                  className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">+254 719 468 240</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/EeS5D837UZnSDsEZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base md:text-lg">Applewood Adams, Ngong Road, Nairobi</span>
                </a>
              </div>

              <div className="mt-10 border-t border-foreground/12 pt-8">
                <h3 className="text-lg font-normal text-foreground">What happens next</h3>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="shrink-0 text-xl font-normal tabular-nums leading-none text-primary"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/75 md:text-base">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: the form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
