import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Church,
  Coins,
  Globe,
  HeartHandshake,
  Landmark,
  Network,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";

export type Audience = {
  slug: string;
  name: string;
  /** Page headline, straight from the client document. */
  headline: string;
  /** One-line summary used in the header dropdown, the index page and the homepage list. */
  blurb: string;
  icon: LucideIcon;
};

/**
 * The institutions Credence Africa works with. Each has a page at
 * /who-we-work-with/<slug>. Kept in alphabetical order: the header dropdown,
 * the index page and the homepage list all render this order directly.
 */
export const audiences: Audience[] = [
  {
    slug: "cooperatives",
    name: "Cooperatives",
    headline: "Building Better Governed, Better Capitalized, More Sustainable Cooperatives",
    blurb: "Governance, capital and member value for SACCOs, chamas and producer groups.",
    icon: Users,
  },
  {
    slug: "corporations",
    name: "Corporations",
    headline: "Strategic Advisory and Execution Support for Corporates Operating and Growing Across Africa",
    blurb: "Capital, market entry, policy and capability for corporates scaling across Africa.",
    icon: Building2,
  },
  {
    slug: "faith-based-institutions",
    name: "Faith-Based Institutions",
    headline: "Stewardship, Governance and Enterprise for Faith-Rooted Institutions",
    blurb: "Stewardship, governance and enterprise for faith-rooted institutions.",
    icon: Church,
  },
  {
    slug: "foreign-investors",
    name: "Foreign Investors",
    headline: "Enter African Markets with Clarity, Credibility and Local Insight",
    blurb: "Market intelligence, entry strategy and transaction support for entering Africa.",
    icon: Globe,
  },
  {
    slug: "governments-and-public-institutions",
    name: "Governments and Public Institutions",
    headline: "Partnering with Public Institutions to Deliver Policy, Markets and Public Value",
    blurb: "Convening, capability, investment enablement and policy intelligence.",
    icon: Landmark,
  },
  {
    slug: "growth-stage-smes",
    name: "Growth-Stage SMEs and Enterprises",
    headline: "From Growth Ambition to Structured, Investable, Scalable Enterprise",
    blurb: "Capital readiness, market expansion and systems for scaling enterprises.",
    icon: TrendingUp,
  },
  {
    slug: "industry-associations",
    name: "Industry Associations and Ecosystem Actors",
    headline: "Stronger Associations. Stronger Sectors. Stronger Ecosystems.",
    blurb: "Advocacy, member value and convening power for representative bodies.",
    icon: Network,
  },
  {
    slug: "investors-and-capital-platforms",
    name: "Investors and Capital Platforms",
    headline: "Deal Flow, Diligence Support and Market Intelligence for Capital Deployed in Africa",
    blurb: "Deal flow, diligence support and market intelligence for capital in Africa.",
    icon: Coins,
  },
  {
    slug: "non-profits",
    name: "Non-Profits and Development Organizations",
    headline: "Strengthening the Institutions That Deliver Public Value",
    blurb: "Funding, governance, advocacy and impact for mission-driven institutions.",
    icon: HeartHandshake,
  },
  {
    slug: "startups-and-innovators",
    name: "Startups and Innovators",
    headline: "Turning Innovation into Structured, Investable, Scalable Enterprise",
    blurb: "Investor readiness, regulatory clarity and market access for founders.",
    icon: Rocket,
  },
];

export const audiencesBySlug: Record<string, Audience> = Object.fromEntries(
  audiences.map((a) => [a.slug, a])
);
