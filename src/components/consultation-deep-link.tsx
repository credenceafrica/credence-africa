"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConsultationForm } from "./consultation-form";
import { consultationInterestValues } from "@/lib/consultation";

/**
 * Opens the consultation dialog on load when the URL carries `?consult=<area>`, with that
 * area preselected. Lets the child sites (Credence Engage, Credible Perspectives, Credence
 * Institute) deep-link a pre-filled contact request to the main site:
 *   https://credence.africa/?consult=institute
 * A bare `?consult` opens the dialog with nothing preselected. Never opens on /consult, whose
 * own form reads the param. Mounted once in the layout.
 */
export function ConsultationDeepLink() {
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState<string | undefined>(undefined);

  useEffect(() => {
    const url = new URL(window.location.href);
    const param = url.searchParams.get("consult");
    // Param absent: do nothing. On /consult the page itself preselects the area in its form.
    if (param === null || url.pathname === "/consult") return;

    setInterest(consultationInterestValues.includes(param) ? param : undefined);
    setOpen(true);

    // Clean the URL so a refresh or share link does not reopen the dialog.
    url.searchParams.delete("consult");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none border-line-dark bg-ink text-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal text-white">Book a Consultation</DialogTitle>
          <DialogDescription className="text-body-dark">
            Tell us the mandate. A senior advisor will map the fastest credible path to execution.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <ConsultationForm defaultInterest={interest} onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
