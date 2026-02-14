
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/services";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <div className="py-16 lg:py-24 mx-auto lg:w-70">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Platforms</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Strategic. Sector-Driven. Built for Execution.</p>
        <p className="mt-4 max-w-4xl mx-auto">At Credence Africa, we design the strategic infrastructure that turns ambition into institution. Our platforms are tailored for enterprises, cooperatives, nonprofits, public benefit actors, and governments navigating complexity, unlocking capital, and driving sustainable transformation.</p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-8">
        {services.map(service => (
            <Card key={service.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex flex-col flex-grow p-6">
                    <div className="flex-grow">
                      <div className="flex items-start gap-4">
                          <div className="text-primary mt-1">{service.icon}</div>
                          <div>
                              <h2 className="text-2xl font-semibold">{service.title}</h2>
                              <p className="text-muted-foreground mt-2">{service.longDescription}</p>
                          </div>
                      </div>
                    </div>
                     <Button asChild variant="link" className="p-0 mt-4 self-start">
                        <Link href={service.href} target="_blank" rel="noopener noreferrer">
                            {service.buttonText} <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                </div>
            </Card>
        ))}
      </div>
    </div>
  );
}
