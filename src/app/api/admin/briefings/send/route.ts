import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { firebaseConfig } from "@/firebase/config";
import { SITE, briefingHtml, briefingText } from "@/lib/briefing-email";
import { contact } from "@/lib/contact";

const bodySchema = z.object({
  sendId: z.string().regex(/^[\w-]+$/),
  subscriberId: z.string().regex(/^[a-f0-9]{64}$/),
});

/** Reads a document as the signed-in caller, so Firestore's rules decide whether they may. */
async function read(path: string, authorization: string) {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/${path}`, {
    headers: { Authorization: authorization },
    cache: "no-store",
  });
  const fields: Record<string, { stringValue?: string }> = response.ok ? (await response.json()).fields : {};
  return { status: response.status, get: (name: string) => fields[name]?.stringValue ?? "" };
}

/**
 * Emails one saved briefing to one subscriber. Both are read from Firestore rather than taken from
 * the request, so this can only ever send a stored briefing to someone on the list.
 */
export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!process.env.SMTP_HOST || !process.env.FROM_EMAIL) return NextResponse.json({ error: "Email is not set up yet: the SMTP settings are missing." }, { status: 503 });

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Nothing to send." }, { status: 400 });
  const { sendId, subscriberId } = parsed.data;

  const [send, subscriber] = await Promise.all([read(`briefingSends/${sendId}`, authorization), read(`briefingSubscribers/${subscriberId}`, authorization)]);
  if (send.status !== 200 || ![200, 404].includes(subscriber.status)) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  // Removed or unsubscribed since the list was loaded.
  if (subscriber.get("status") !== "subscribed") return NextResponse.json({ outcome: "skipped" });

  const query = `id=${subscriberId}&token=${subscriber.get("token")}`;
  const unsubscribeUrl = `${SITE}/briefings/unsubscribe?${query}`;
  const [subject, body] = [send.get("subject"), send.get("html")];
  try {
    await nodemailer
      .createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465",
        auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD },
      })
      .sendMail({
        from: `Credence Intelligence <${process.env.FROM_EMAIL}>`,
        replyTo: contact.email,
        to: subscriber.get("email"),
        subject,
        html: briefingHtml({ subject, body, unsubscribeUrl }),
        text: briefingText(body, unsubscribeUrl),
        headers: {
          "List-Unsubscribe": `<${SITE}/api/briefings/unsubscribe?${query}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      });
    return NextResponse.json({ outcome: "sent" });
  } catch (error) {
    const code = (error as { responseCode?: number }).responseCode;
    console.error(`Briefing ${sendId} could not reach subscriber ${subscriberId}:`, code ?? (error as Error).message);
    // A 5xx is this address being refused. Anything else is throttling or an outage: stop and retry them on resume.
    return NextResponse.json({ outcome: code && code >= 500 ? "refused" : "retry" });
  }
}
