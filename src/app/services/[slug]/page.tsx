
import { notFound } from "next/navigation";
import { getService, getServices } from "@/lib/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
    const services = await getServices();
    return services.map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps) {
    const service = await getService(params.slug);
    if (!service) {
      return {
        title: "Service Not Found",
      };
    }
    return {
      title: service.title,
      description: service.description,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24 mx-auto lg:w-70">
      <div className="text-center">
        <div className="inline-block ">{service.icon}</div>
        <h1 className="text-4xl font-bold mt-4">{service.title}</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-6">Key Offerings</h2>
          <ul className="space-y-4">
            {service.details.map(detail => (
              <li key={detail} className="flex items-start gap-4">
                <Check className="size-5 text-primary mt-1 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Ready to take the next step?</h3>
            <p className="mt-4 text-muted-foreground">Let's discuss how our expertise in {service.title.toLowerCase()} can help you achieve your goals.</p>
            <Button asChild className="mt-6">
                <Link href="/consult">Book a Consultation</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
