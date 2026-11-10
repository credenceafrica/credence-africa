import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { firestore } from "@/firebase";

/**
 * Unsubscribes the holder of a briefing email's private link. Mail apps call this directly for
 * their one-click unsubscribe (List-Unsubscribe-Post), so everything it needs is in the URL.
 * Firestore's rules compare the token with the one stored on the subscriber.
 */
export async function POST(request: Request) {
  if (!firestore) return NextResponse.json({ error: "not-configured" }, { status: 503 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "";
  const token = searchParams.get("token");
  if (!/^[a-f0-9]{64}$/.test(id) || !token) return NextResponse.json({ error: "invalid-link" }, { status: 400 });

  try {
    await updateDoc(doc(firestore, "briefingSubscribers", id), { status: "unsubscribed", unsubscribedAt: serverTimestamp(), proof: token });
  } catch (error) {
    console.error("Could not unsubscribe a briefing subscriber:", (error as { code?: string }).code);
    return NextResponse.json({ error: "invalid-link" }, { status: 404 });
  }
  return NextResponse.json({ unsubscribed: true });
}
