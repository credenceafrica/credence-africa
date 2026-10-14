/**
 * Consultation page link that preselects an area of interest in its form. `consult` is an existing
 * key from `consultationInterests`: never invent or rename keys, child sites rely on them.
 */
export const consultHref = (consult?: string) => (consult ? `/consult?consult=${consult}` : "/consult");
