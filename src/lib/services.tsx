
import { Users, Megaphone, GraduationCap, Newspaper, Landmark, Globe, Coins, Share2, Calendar } from "lucide-react";

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
    id: "capital",
    slug: "capital-raising",
    href: "/services/capital-raising",
    icon: <Coins className="size-8" />,
    title: "Capital Raising & Investment Structuring",
    description: "Structuring for impact and scale.",
    longDescription: "Unlocking capital and structuring for impact across markets. We design investment-ready pipelines, mobilize blended finance, and connect clients with DFIs, private equity, and institutional funders.",
    buttonText: "Learn More"
  },
  {
    id: "trade",
    slug: "trade-growth",
    href: "/services/advisory",
    icon: <Globe className="size-8" />,
    title: "Trade & Growth Advisory",
    description: "Strategic market positioning and expansion.",
    longDescription: "Navigating cross-border trade, AfCFTA alignment, and jurisdictional entry. We provide the strategic blueprints for businesses to scale across Africa's growth markets.",
    buttonText: "Learn More"
  },
  {
    id: "public-affairs",
    slug: "public-affairs",
    href: "/services/advisory",
    icon: <Landmark className="size-8" />,
    title: "Public Affairs & Policy Advisory",
    description: "Navigating regulatory intelligence and influence.",
    longDescription: "Strengthening institutional alignment and shaping policy. We provide regulatory navigation, compliance strategy, government relations, and advocacy for sustainable growth.",
    buttonText: "Learn More"
  },
  {
    id: "institute",
    slug: "institute",
    href: "https://institute.credence.africa",
    icon: <GraduationCap className="size-8" />,
    title: "Credence Institute",
    description: "Learning, Training, and Professional Advancement",
    longDescription: "Executive education, governance development, leadership training, and institutional capacity building for governments, corporates, development partners, and ecosystem actors.",
    buttonText: "Explore Programs"
  },
  {
    id: "convene",
    slug: "convene",
    href: "https://engage.credence.africa",
    icon: <Share2 className="size-8" />,
    title: "Credence Convene",
    description: "Aligning institutions and strategic priorities.",
    longDescription: "Policy forums, sector convenings, association events, and multistakeholder dialogues designed to align institutions, sectors, and strategic priorities.",
    buttonText: "View Forums"
  },
  {
    id: "engage",
    slug: "engage",
    href: "/services/engage",
    icon: <Megaphone className="size-8" />,
    title: "Credence Engage",
    description: "Market activation and audience engagement.",
    longDescription: "Market activation, audience engagement, trade expos, deal environments, stakeholder engagement, and commercial activation for institutions and brands seeking stronger market connection.",
    buttonText: "Explore Engagement"
  },
  {
    id: "events",
    slug: "events",
    href: "https://engage.credence.africa",
    icon: <Calendar className="size-8" />,
    title: "Credence Events",
    description: "Flagship convenings where capital and policy converge.",
    longDescription: "Credence owned conferences, summits, expos, and flagship convenings where capital, policy, audiences, and partnerships converge to create visibility, transactions, and long term ecosystem value.",
    buttonText: "View Events"
  },
  {
    id: "perspectives",
    slug: "perspectives",
    href: "https://perspectives.credence.africa",
    icon: <Newspaper className="size-8" />,
    title: "Credible Perspectives",
    description: "Research, Media, and Thought Leadership",
    longDescription: "Research, market intelligence, executive insights, media, and thought leadership that help institutions interpret policy, markets, governance, and capital with greater clarity.",
    buttonText: "Explore Insights"
  },
  {
    id: "networks",
    slug: "networks",
    href: "#",
    icon: <Users className="size-8" />,
    title: "Credence Networks",
    description: "Communities strengthening connection and visibility.",
    longDescription: "Curated communities and strategic networks that strengthen access, visibility, connection, and long term institutional relationships across Africa.",
    buttonText: "Join Networks"
  },
];

export async function getServices(): Promise<Service[]> {
    return Promise.resolve(services);
}

export async function getService(slug: string): Promise<Service | undefined> {
    return Promise.resolve(services.find(s => s.slug === slug));
}
