/**
 * Single source of truth for the organisation's contact details.
 *
 * The footer, the contact blocks on About, Consult and Capital Raising and the
 * legal pages all read from here, so the address cannot drift between pages
 * the way it did before.
 */
export const contact = {
  email: "connect@credence.africa",
  phone: "+254 719 468 240",
  /** Digits only, for `tel:` links. */
  phoneHref: "+254719468240",
  address: "11th Floor, Suite 1102, Applewood Adams, Ngong Road, Nairobi, Kenya",
  /** The address without the country, for tight contact blocks. */
  addressShort: "11th Floor, Suite 1102, Applewood Adams, Ngong Road, Nairobi",
  mapsUrl: "https://maps.app.goo.gl/EeS5D837UZnSDsEZ7",
} as const;

/** Labels used beside the details. Kept here so every page reads the same. */
export const contactLabels = {
  email: "Email",
  phone: "Phone",
  address: "Location",
} as const;
