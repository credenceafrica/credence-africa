import { z } from "zod";

export const briefingSectors = ["Banking", "Payments", "Operations", "Research", "Policy", "Other"] as const;

/** The Credence Intelligence briefings form, checked in the browser and again on the server. */
export const briefingSchema = z.object({
  name: z.string().trim().min(1, "Enter your full name.").max(200),
  // Lower-cased so that one address can only ever be one subscriber.
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(320),
  phone: z
    .string()
    .trim()
    .max(32)
    .regex(/^$|^\+[1-9][\d\s()-]{5,}$/, "Start with your country code, for example +254 712 345 678."),
  sectors: z.array(z.enum(briefingSectors)).min(1, "Select at least one."),
  otherSector: z.string().trim().max(200),
  subscribe: z.boolean(),
  /** Hidden from people, so only bots fill it in. */
  website: z.string().optional(),
});

export type BriefingValues = z.infer<typeof briefingSchema>;

/** A subscriber's document ID, the hash Firestore's rules require, so one address can only be one entry. */
export async function subscriberId(email: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(email));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
