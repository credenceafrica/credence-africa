
import { getService, getServices } from "@/lib/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getService(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  const allServices = await getServices();

  if (!service) {
    notFound();
  }
  
  const otherServices = allServices.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="py-16 lg:py-24 space-y-24 mx-auto lg:w-85">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
                <header className="space-y-4">
                    <div className="flex items-center gap-4">
                        {service.icon}
                        <h1 className="text-4xl font-bold">{service.title}</h1>
                    </div>
                    <p className="text-xl text-muted-foreground">{service.description}</p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold mb-6">What We Deliver</h2>
                     <ul className="space-y-4">
                        {service.details.map(detail => (
                        <li key={detail} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                            <span className="text-lg">{detail}</span>
                        </li>
                        ))}
                    </ul>
                </section>
            </div>
            
            <aside className="space-y-8">
                <Card className="bg-secondary">
                    <CardHeader>
                        <CardTitle>Ready to Get Started?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6 text-muted-foreground">Let's discuss how we can apply our expertise to your unique challenges.</p>
                        <Button asChild className="w-full" size="lg">
                            <Link href="/consult">Book a Consultation</Link>
                        </Button>
                    </CardContent>
                </Card>

                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Other Services</h3>
                    <div className="space-y-4">
                        {otherServices.map(other => (
                             <Link href={`/services/${other.slug}`} key={other.id} className="block p-4 border rounded-lg hover:bg-accent">
                                <h4 className="font-semibold">{other.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{other.description}</p>
                             </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    </div>
  );
}
