import { NextResponse } from "next/server";
import { consultationForwardSchema, consultationInterestLabel } from "@/lib/consultation";

/**
 * Forwards a consultation request to the Power Automate flow.
 *
 * Firestore stays the system of record: the form writes there first and only
 * calls this route once that write succeeds. Forwarding is best-effort, so a
 * failure here is logged and never reaches the person who filled in the form.
 *
 * The trigger URL is read from POWER_AUTOMATE_CONSULTATION_URL on the server.
 * It must never be exposed to the browser: an "Anyone" trigger URL carries a
 * signature, and whoever holds it can start the flow.
 */

const MAX_BODY_BYTES = 32 * 1024;
const TIMEOUT_MS = 10_000;

export async function POST(request: Request) {
  const url = process.env.POWER_AUTOMATE_CONSULTATION_URL;
  if (!url) {
    console.warn("POWER_AUTOMATE_CONSULTATION_URL is not set; consultation not forwarded to Power Automate.");
    return NextResponse.json({ forwarded: false, reason: "not-configured" });
  }

  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ forwarded: false, reason: "too-large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ forwarded: false, reason: "invalid-json" }, { status: 400 });
  }

  const parsed = consultationForwardSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ forwarded: false, reason: "invalid-submission" }, { status: 400 });
  }
  const data = parsed.data;

  // Every key is always present as a string so a JSON schema on the flow's
  // trigger never fails on a missing or null field.
  const payload = {
    submissionId: data.submissionId ?? "",
    submittedAt: new Date().toISOString(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company ?? "",
    country: data.country,
    interest: data.interest,
    interestLabel: consultationInterestLabel(data.interest),
    message: data.message,
    pageUrl: data.pageUrl ?? "",
    source: "credence.africa consultation form",
  };

  // Logs carry the submission ID only, never the person's details: the full
  // record is in Firestore under the same ID.
  const ref = payload.submissionId || "(no id)";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 300);
      console.error(`Power Automate rejected consultation ${ref}: HTTP ${response.status} ${detail}`);
      return NextResponse.json({ forwarded: false, reason: "rejected" }, { status: 502 });
    }
    return NextResponse.json({ forwarded: true });
  } catch (error) {
    console.error(`Power Automate forward failed for consultation ${ref}:`, error);
    return NextResponse.json({ forwarded: false, reason: "unreachable" }, { status: 502 });
  }
}
