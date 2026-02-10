
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/services";
import Link from "next/link";

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <div className="py-16 lg:py-24 mx-auto lg:w-70">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Strategic. Sector-Driven. Built for Execution.</p>
        <p className="mt-4 max-w-4xl mx-auto">At Credence Africa, we design the strategic infrastructure that turns ambition into institution. Our services are tailored for enterprises, cooperatives, nonprofits, public benefit actors, and governments navigating complexity, unlocking capital, and driving sustainable transformation.</p>
      </div>

      <div className="mt-16 grid gap-20">
        {services.map(service => (
          <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-12 scroll-mt-24 items-center">
            <div className="space-y-4">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  {service.icon}
                  <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
                </div>
              <p className="text-muted-foreground text-center md:text-left">{service.description}</p>
              <div className="flex justify-center md:justify-start">
                  <Button asChild className="mt-4">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {service.details.map(detail => (
                  <li key={detail} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
