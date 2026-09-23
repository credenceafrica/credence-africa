import type { LucideIcon } from "lucide-react";

/**
 * Shared shape for the sector and theme landing pages.
 *
 * Both modules publish the same section order, so one content type and one
 * detail component cover all of them:
 *
 *   hero -> positioning -> where clients need support -> how Credence Africa
 *   helps (three blocks) -> priority mandates -> who we work with -> geography
 *   -> why Credence Africa -> FAQ -> closing CTA
 */

/** One of the three "How Credence Africa helps" blocks. */
export type HelpBlock = {
  heading: string;
  blurb: string;
  items: string[];
};

export type Faq = {
  q: string;
  a: string;
};

/**
 * A call to action. `consult` is an existing consultation deep-link key from
 * `consultationInterests` — never invent new keys here, child sites rely on them.
 */
export type LandingAction = {
  label: string;
  consult: string;
};

export type LandingPage = {
  slug: string;
  kind: "sector" | "theme";
  /** Short label used in navigation and index listings. */
  name: string;
  /** One-line summary for index listings and card descriptions. */
  scope: string;
  icon: LucideIcon;
  /** Kept deliberately distinct from `h1`, per the SEO brief. */
  seoTitle: string;
  metaDescription: string;
  /** Primary search term first, supporting terms after. */
  keywords: string[];
  h1: string;
  intro: string;
  /** Two hero actions. */
  actions: [LandingAction, LandingAction];
  positioning: { heading: string; paragraphs: string[] };
  needs: { lead: string; items: string[] };
  /** Always three blocks: training, research, advisory. */
  helps: [HelpBlock, HelpBlock, HelpBlock];
  mandates: string[];
  audiences: string[];
  /** Body of the "Africa, Kenya, Nigeria and South Africa" section. */
  geography: string;
  why: string;
  faqs: Faq[];
  closing: { heading: string; body: string } & LandingAction;
  /** Related service pages, per the brief's internal-link direction. */
  links: { label: string; href: string }[];
};

/** Service pages the landing copy links to, keyed for terse content entries. */
export const SERVICE_LINKS = {
  capital: { label: "Capital Raising & Investment Structuring", href: "/services/capital-raising" },
  trade: { label: "Trade & Growth Advisory", href: "/services/trade-growth" },
  publicAffairs: { label: "Public Affairs & Policy Advisory", href: "/services/public-affairs" },
  research: { label: "Research & Market Intelligence", href: "/services/research" },
  institute: { label: "Credence Institute", href: "/services/institute" },
  engage: { label: "Credence Engage", href: "/services/credence-engage" },
} as const;

export type ServiceLinkKey = keyof typeof SERVICE_LINKS;

/** Expands the shorthand used in content files into the link objects the page renders. */
export function serviceLinks(...keys: ServiceLinkKey[]) {
  return keys.map((k) => SERVICE_LINKS[k]);
}

/** Heading for the geography section — identical across every landing page. */
export const GEOGRAPHY_HEADING = "Africa, Kenya, Nigeria and South Africa";

/** Headings for the three "How Credence Africa helps" blocks. */
export const HELP_HEADINGS = {
  training: "Training, Capability and Convening",
  research: "Research, Media and Intelligence",
  advisory: "Advisory",
} as const;
