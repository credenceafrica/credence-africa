import * as z from "zod";

/**
 * Consultation request data shared by the browser form and the server.
 *
 * This lives outside the "use client" form component on purpose: a server route
 * cannot read values exported from a client module, and the forwarding route
 * must validate against exactly the same rules the form uses.
 */

/**
 * Area-of-interest options. `value` doubles as the deep-link key so a child site can open
 * the dialog with an area preselected via `?consult=<value>` (e.g. ?consult=institute).
 * Never rename a value: child sites link to these keys.
 */
export const consultationInterests = [
  { value: "capital", label: "Capital Raising and Investment Structuring" },
  { value: "engage", label: "Credence Engage" },
  { value: "institute", label: "Credence Institute: Executive Education" },
  { value: "perspectives", label: "Credible Perspectives" },
  { value: "public-affairs", label: "Public Affairs and Policy Advisory" },
  { value: "research", label: "Research and Market Intelligence" },
  { value: "trade", label: "Trade and Growth Advisory" },
  { value: "other", label: "Other / Not sure yet" },
];

export const consultationInterestValues = consultationInterests.map((i) => i.value);

/** Human-readable label for an interest key, falling back to the key itself. */
export function consultationInterestLabel(value: string): string {
  return consultationInterests.find((i) => i.value === value)?.label ?? value;
}

// Length caps are generous for real people and keep oversized payloads out of
// Firestore and the Power Automate flow.
export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(254, "Email is too long"),
  phone: z.string().trim().min(1, "Phone number is required").max(50, "Phone number is too long"),
  company: z.string().trim().max(200, "Company name is too long").optional(),
  country: z.string().trim().min(1, "Country is required").max(100, "Country is too long"),
  interest: z.string().trim().min(1, "Area of interest is required").max(50),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message is too long"),
});

export type ConsultationValues = z.infer<typeof consultationSchema>;

/** What the form sends to the forwarding route: the submission plus where it came from. */
export const consultationForwardSchema = consultationSchema.extend({
  /** Firestore document ID, so a Power Automate record can be traced back to the admin dashboard. */
  submissionId: z.string().max(100).optional(),
  pageUrl: z.string().url().max(2000).optional(),
});
