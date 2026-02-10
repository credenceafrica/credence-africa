
import { BarChart, Building, FileText, Globe, Scale } from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
}

const services: Omit<Service, 'slug'>[] = [
  {
    id: "capital-raising",
    icon: <BarChart className="size-10 text-primary" />,
    title: "Capital Raising & Blended Finance",
    description: "Unlock capital and structure for impact across markets. We design investment-ready pipelines, mobilize blended finance, and connect clients with DFIs, private equity, banks, and philanthropic funders.",
    details: [
      "Capital stack structuring & investment readiness",
      "Blended finance strategy & donor capital positioning",
      "Financial modeling & investor documentation",
      "Capital access facilitation & deal advisory",
    ]
  },
  {
    id: "public-affairs",
    icon: <Scale className="size-10 text-primary" />,
    title: "Public Affairs & Advocacy",
    description: "Shape policy, structure influence, and strengthen institutions. We provide regulatory navigation, compliance strategy, government relations, and advocacy campaigns.",
    details: [
      "Regulatory navigation & compliance strategy",
      "Government relations & institutional engagement",
      "Public policy consulting & legislative development",
      "Advocacy campaigns & influence strategy",
    ]
  },
  {
    id: "trade-investment",
    icon: <Globe className="size-10 text-primary" />,
    title: "Trade & Investment Structuring",
    description: "Enter markets confidently with strategic positioning and compliance. We support cross-border structuring, investment facilitation, and trade ecosystem alignment.",
    details: [
      "Market entry & localization strategy",
      "Licensing, permitting, & regulatory navigation",
      "Market intelligence & investment scanning",
      "Trade, incentives, & policy facilitation",
      "Diaspora market re-entry structuring",
    ]
  },
  {
    id: "enterprise-architecture",
    icon: <Building className="size-10 text-primary" />,
    title: "Enterprise Architecture & Transformation Strategy",
    description: "Design institutions, engineer growth, and structure impact. We build legal, financial, and governance frameworks for startups, cooperatives, and mission-driven organizations.",
    details: [
      "Strategic structuring & investment readiness",
      "Mission-aligned structuring for faith-based & public benefit institutions",
      "Legacy & intergenerational transition planning",
      "Institutional turnaround & governance redesign",
      "Program design & scalable delivery models",
    ]
  },
  {
    id: "ip-commercialization",
    icon: <FileText className="size-10 text-primary" />,
    title: "IP Commercialization, Brand & Talent Strategy",
    description: "Protect ideas, monetize identity, and scale influence. We help creators and enterprises structure IP portfolios, negotiate deals, and build revenue-generating models.",
    details: [
      "IP strategy, protection, & ownership structuring",
      "Licensing, franchising, & revenue modeling",
      "Talent & influencer deal structuring",
      "Digital monetization strategy",
      "IP-based wealth structuring & estate planning",
    ]
  },
];

function slugify(text: string) {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
}

const servicesWithSlugs: Service[] = services.map(service => ({
    ...service,
    slug: slugify(service.title),
}));

export async function getServices(): Promise<Service[]> {
    return Promise.resolve(servicesWithSlugs);
}
