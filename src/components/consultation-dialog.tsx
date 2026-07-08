"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { ConsultationForm } from "./consultation-form";

export function ConsultationDialog({
  children,
  triggerClassName,
  variant,
  size,
  asChild = false,
}: {
  children: React.ReactNode;
  triggerClassName?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  /** When true the trigger is a bare styled element (for inline text links) instead of a Button. */
  asChild?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {asChild ? (
          <button type="button" className={triggerClassName}>
            {children}
          </button>
        ) : (
          <Button className={triggerClassName} variant={variant} size={size}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none border-foreground/15 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal text-foreground">Book a Consultation</DialogTitle>
          <DialogDescription className="text-foreground/70">
            Tell us the mandate. A senior advisor will map the fastest credible path to execution.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <ConsultationForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
