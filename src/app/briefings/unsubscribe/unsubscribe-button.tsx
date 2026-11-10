"use client";

import { useState } from "react";
import { Arrow } from "@/components/site/primitives";
import { contact } from "@/lib/contact";

/** Unsubscribes on a click rather than on load, because mail scanners open every link in an email. */
export function UnsubscribeButton({ id, token }: { id: string; token: string }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const unsubscribe = async () => {
    setState("loading");
    const query = new URLSearchParams({ id, token });
    const response = await fetch(`/api/briefings/unsubscribe?${query}`, { method: "POST" }).catch(() => null);
    setState(response?.ok ? "done" : "error");
  };

  if (state === "done") {
    return (
      <p role="status" className="m-0 max-w-[720px] text-[15.5px] text-body">
        You have been unsubscribed. You will not receive further Credence Intelligence briefings.
      </p>
    );
  }

  return (
    <div className="flex max-w-[720px] flex-col items-start gap-[18px]">
      <p className="m-0 text-[15.5px] text-body">Stop receiving Credence Intelligence briefings at this email address?</p>
      <button
        type="button"
        onClick={unsubscribe}
        disabled={state === "loading"}
        className="pill inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13px] font-semibold text-white disabled:pointer-events-none disabled:opacity-50"
      >
        {state === "loading" ? "Unsubscribing…" : "Unsubscribe"}
        {state !== "loading" && <Arrow />}
      </button>
      {state === "error" && (
        <p role="alert" className="m-0 text-[14px] text-primary-deep">
          We could not process this link. Please email {contact.email} and we will remove you.
        </p>
      )}
    </div>
  );
}
