"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** On phones the children start hidden behind a Read more button; wider screens always show them. */
export function ReadMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={cn("flex flex-col gap-[18px]", !open && "max-[720px]:hidden")}>{children}</div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="hit hidden items-center gap-1.5 self-start text-[14.5px] font-semibold max-[720px]:inline-flex"
      >
        {open ? "Read less" : "Read more"}
        <svg
          width={12}
          height={12}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={cn("transition-transform", open && "rotate-180")}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </>
  );
}
