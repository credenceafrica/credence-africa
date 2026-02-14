
import { Users, Megaphone, GraduationCap, Newspaper } from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
}

const services: Service[] = [
  {
    id: "advisory",
    slug: "advisory",
    href: "https://advisory.credence.africa",
    icon: <Users className="size-8 text-primary" />,
    title: "Advisory | Credence Advisory",
    description: "Strategic Advisory for Africa’s Next Growth Frontier.",
    details: []
  },
  {
    id: "events",
    slug: "events",
    href: "https://engage.credence.africa",
    icon: <Megaphone className="size-8 text-primary" />,
    title: "Events | Credence Engage",
    description: "Events and influence platforms that build relationships and market leadership.",
    details: []
  },
  {
    id: "training",
    slug: "training",
    href: "https://institute.credence.africa",
    icon: <GraduationCap className="size-8 text-primary" />,
    title: "Training | Credence Institute",
    description: "Learning and leadership programs for high-performance governance.",
    details: []
  },
  {
    id: "research-insights",
    slug: "research-insights",
    href: "http://perspectives.credence.africa/",
    icon: <Newspaper className="size-8 text-primary" />,
    title: "Research & Insights | Credence-Credible Perspectives",
    description: "Media and insights shaping Africa’s public dialogue and policy reform.",
    details: []
  },
];

export async function getServices(): Promise<Service[]> {
    return Promise.resolve(services);
}

export async function getService(slug: string): Promise<Service | undefined> {
    // This data structure no longer supports individual service pages.
    return Promise.resolve(undefined);
}
