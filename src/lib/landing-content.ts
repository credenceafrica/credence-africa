/**
 * Shared shape for the sector and theme landing pages, which render through one
 * template (`LandingDetail`):
 *
 *   hero -> overview -> where clients need support -> how Credence Africa helps
 *   (three blocks) -> priority mandates and who we work with -> regional
 *   priorities and why Credence Africa -> related services -> FAQ -> closing band
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
  /** Name used in navigation and index listings. */
  name: string;
  /** One-line summary for the index listing. */
  scope: string;
  /** Current-page label in the hero breadcrumb. */
  crumb: string;
  /** Kept deliberately distinct from `h1`, per the SEO brief. */
  seoTitle: string;
  metaDescription: string;
  /** Primary search term first, supporting terms after. */
  keywords: string[];
  h1: string;
  intro: string;
  /** Two hero actions. */
  actions: [LandingAction, LandingAction];
  /** The overview statement and its two paragraphs. */
  positioning: { heading: string; paragraphs: string[] };
  needs: { lead: string; items: string[] };
  /** Training, research and advisory, in that order. */
  helps: HelpBlock[];
  mandates: string[];
  audiences: string[];
  /** Body of the "Africa, Kenya, Nigeria and South Africa" row. */
  geography: string;
  why: string;
  faqs: Faq[];
  closing: { heading: string; body: string } & LandingAction;
  /** Related service pages shown as chips. */
  links: { label: string; href: string }[];
};

/** Consultation page link that preselects an area of interest in its form. */
export const consultHref = (consult?: string) => (consult ? `/consult?consult=${consult}` : "/consult");
