
import { GraduationCap, Newspaper, Landmark, Globe, Coins, Calendar, Microscope } from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    buttonText: string;
    /** Optional capability bullets, rendered on the service page's "What We Deliver" section. */
    details?: string[];
}

const services: Service[] = [
  {
    id: "capital",
    slug: "capital-raising",
    href: "/services/capital-raising",
    icon: <Coins className="size-8" />,
    title: "Capital Raising & Investment Structuring",
    description: "Become capital-ready and mobilize growth capital.",
    longDescription: "We help enterprises, institutions and projects become investment-ready: structuring funding, engaging investors and mobilizing growth capital across equity, debt, blended finance and DFI pathways.",
    buttonText: "Learn More"
  },
  {
    id: "trade",
    slug: "trade-growth",
    href: "/services/trade-growth",
    icon: <Globe className="size-8" />,
    title: "Trade & Growth Advisory",
    description: "Enter markets and scale across borders.",
    longDescription: "We help institutions select markets, design entry pathways, structure cross-border trade and scale across African and global markets with commercial precision.",
    buttonText: "Learn More"
  },
  {
    id: "public-affairs",
    slug: "public-affairs",
    href: "/services/public-affairs",
    icon: <Landmark className="size-8" />,
    title: "Public Affairs & Policy Advisory",
    description: "Navigate policy, regulation and stakeholders.",
    longDescription: "We help institutions engage policy environments, navigate regulation and approvals, build government relations and shape public-interest outcomes with credibility.",
    buttonText: "Learn More"
  },
  {
    id: "institute",
    slug: "institute",
    href: "https://institute.credence.africa",
    icon: <GraduationCap className="size-8" />,
    title: "Credence Institute",
    description: "Capability and institutional strengthening.",
    longDescription: "Executive education, professional credentials, leadership development and institutional strengthening, delivered through schools and academies serving sectors across Africa.",
    buttonText: "Explore Programs"
  },
  {
    id: "research",
    slug: "research",
    href: "/services/research",
    icon: <Microscope className="size-8" />,
    title: "Research & Market Intelligence",
    description: "Evidence and intelligence for decisions.",
    longDescription: "Commissioned research, sector studies, market sizing, ecosystem mapping and ongoing market intelligence that give institutions the evidence and commercial visibility to make confident capital, market and governance decisions.",
    buttonText: "Learn More",
    details: [
      "Sector and market studies",
      "Market sizing and demand assessment",
      "Policy and regulatory analysis",
      "Ecosystem and stakeholder mapping",
      "Opportunity and entry scans",
      "Capital and investment intelligence",
      "Ongoing intelligence subscriptions",
      "Evidence and decision-support reporting"
    ]
  },
  {
    id: "perspectives",
    slug: "perspectives",
    href: "https://perspectives.credence.africa",
    icon: <Newspaper className="size-8" />,
    title: "Credible Perspectives",
    description: "Research, media and thought leadership.",
    longDescription: "Our media platform: executive insights, sector analysis, interviews and commentary that help leaders interpret policy, markets and capital with clarity.",
    buttonText: "Explore Insights"
  },
  {
    id: "events",
    slug: "events",
    href: "/services/events",
    icon: <Calendar className="size-8" />,
    title: "Events, Community & Convenings",
    description: "Convene, activate and build communities.",
    longDescription: "From policy roundtables and executive convenings to market activations, flagship summits and curated networks, we turn engagement into decisions, partnerships and lasting ecosystem value.",
    buttonText: "View Events"
  },
];

export async function getServices(): Promise<Service[]> {
    return Promise.resolve(services);
}

export async function getService(slug: string): Promise<Service | undefined> {
    return Promise.resolve(services.find(s => s.slug === slug));
}
