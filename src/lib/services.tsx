
import { Users, Megaphone, GraduationCap, Newspaper } from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    buttonText: string;
}

const services: Service[] = [
  {
    id: "advisory",
    slug: "advisory",
    href: "https://advisory.credence.africa",
    icon: <Users className="size-8 text-primary" />,
    title: "Credence Advisory",
    description: "Strategic Advisory for Africa’s Next Growth Frontier",
    longDescription: "Credence Advisory partners with investors, institutions, and enterprises to design and execute strategies that perform under complexity. We move beyond advice to deliver governance aligned strategy, capital structuring, and cross border execution built for scale, resilience, and long term value creation.",
    buttonText: "Engage Advisory"
  },
  {
    id: "institute",
    slug: "institute",
    href: "https://institute.credence.africa",
    icon: <GraduationCap className="size-8 text-primary" />,
    title: "Credence Institute",
    description: "Learning, Training, and Professional Advancement",
    longDescription: "Credence Institute delivers professional and executive programs that translate learning into applied capability. Our work strengthens decision quality, institutional capacity, and governance maturity for professionals and organizations shaping Africa’s economic and public systems.",
    buttonText: "Explore Programs"
  },
  {
    id: "engage",
    slug: "engage",
    href: "https://engage.credence.africa",
    icon: <Megaphone className="size-8 text-primary" />,
    title: "Credence Engage",
    description: "Events and Strategic Convenings",
    longDescription: "Credence Engage designs and delivers high impact events that transform expertise into influence. By integrating technology, sector knowledge, and strategic curation, our platforms move beyond attendance to enable insight exchange, relationship formation, and decision making at scale, generating measurable institutional and commercial outcomes.",
    buttonText: "Explore Events"
  },
  {
    id: "perspectives",
    slug: "perspectives",
    href: "https://perspectives.credence.africa/insights",
    icon: <Newspaper className="size-8 text-primary" />,
    title: "Credence - Credible Perspectives",
    description: "Research, Media, and Thought Leadership",
    longDescription: "Credible Perspectives is the research grounded media and publication arm of the Credence ecosystem. It operates as a research led executive platform delivering original analysis, expert commentary, publications, and podcasts that inform senior decision makers and shape strategy, governance, and capital allocation across Africa.",
    buttonText: "Explore Insights"
  },
];

export async function getServices(): Promise<Service[]> {
    return Promise.resolve(services);
}

export async function getService(slug: string): Promise<Service | undefined> {
    return Promise.resolve(services.find(s => s.slug === slug));
}
