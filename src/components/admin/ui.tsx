"use client";

import { cva } from "class-variance-authority";
import { format, formatDistanceToNowStrict } from "date-fns";
import { collection, getDocs, orderBy, query, type Timestamp } from "firebase/firestore";
import { ArrowLeft, Mail, Phone, TriangleAlert, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/* The admin's own vocabulary: pills for actions, square hairline frames for content (see DESIGN.md, Admin). */

export const button = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-ink hover:bg-[#FF6A47] disabled:bg-[#E7E5E2] disabled:text-[#6B6B70]",
        secondary: "border border-ink bg-white text-ink hover:bg-ink hover:text-white disabled:opacity-45",
        quiet: "text-body hover:bg-[#F2F1EF] hover:text-ink disabled:opacity-45",
        danger: "bg-[#B42318] text-white hover:bg-[#912018] disabled:opacity-45",
      },
      size: { md: "h-11 px-5 text-[14px]", sm: "h-9 px-4 text-[13px]" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export const iconButton =
  "hit inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-body-3 transition-colors duration-150 hover:bg-[#F2F1EF] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&_svg]:size-[18px]";
export const dangerIcon = "hover:bg-[#FEF3F2] hover:text-[#B42318]";

export const fieldLabel = "mb-2 block text-[13px] font-medium text-ink";
export const field =
  "h-11 w-full rounded-none border border-[#8C8C8C] bg-white px-3.5 text-[16px] text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-[#6B6B70] hover:border-ink focus:border-ink focus:outline-none focus:ring-[3px] focus:ring-[#FF4820]/25";
export const fieldError = "mt-2 text-[13px] font-normal text-[#B42318]";

/* Dates are British: 10 Nov 2026, 14:32. */
export const when = (time?: Timestamp | null) => (time ? format(time.toDate(), "d MMM yyyy, HH:mm") : "No date");
export const day = (time?: Timestamp | null) => (time ? format(time.toDate(), "d MMM yyyy") : "No date");
export const ago = (time?: Timestamp | null) => (time ? formatDistanceToNowStrict(time.toDate(), { addSuffix: true }) : "");

export function Time({ value }: { value?: Timestamp | null }) {
  if (!value) return <span className="text-[13px] text-body-3">No date</span>;
  return (
    <time dateTime={value.toDate().toISOString()} className="whitespace-nowrap text-[13px] tabular-nums text-body-3">
      {when(value)}
    </time>
  );
}

export function PageHeader({
  title,
  count,
  description,
  actions,
  back,
}: {
  title: string;
  count?: number;
  description?: ReactNode;
  actions?: ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <header className="mb-8 lg:mb-10">
      {back && (
        <Link href={back.href} className="group mb-5 inline-flex items-center gap-1.5 text-[13.5px] text-body-3 transition-colors hover:text-ink">
          <ArrowLeft aria-hidden className="size-4 transition-transform duration-150 group-hover:-translate-x-0.5" />
          {back.label}
        </Link>
      )}
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <div className="min-w-0 max-w-3xl">
          <h1 className="text-balance text-[30px] leading-[1.06] tracking-[-0.035em] text-ink sm:text-[40px]">
            {title}
            {count !== undefined && <span className="ml-3 tabular-nums text-mute">{count}</span>}
          </h1>
          {description && <p className="mt-3 text-pretty text-[15px] leading-relaxed text-body-3">{description}</p>}
        </div>
        {actions && <div className="flex w-full flex-wrap gap-3 sm:w-auto max-sm:[&>*]:flex-1">{actions}</div>}
      </div>
    </header>
  );
}

const tones = {
  neutral: "bg-[#F2F1EF] text-body-2",
  waiting: "bg-[#FFF0EB] text-primary-deep",
  ok: "bg-[#EAF4EE] text-[#1F7A4D]",
};

export function Chip({ tone = "neutral", dot, children }: { tone?: keyof typeof tones; dot?: boolean; children: ReactNode }) {
  return (
    <span className={cn("inline-flex h-6 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 text-[12.5px] font-medium", tones[tone])}>
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

/* --- Loading a list ------------------------------------------------------------------------ */

export async function newestFirst<T>(name: string) {
  const snapshot = await getDocs(query(collection(firestore!, name), orderBy("createdAt", "desc")));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as T);
}

/** Loads a list once and keeps it while reloading, so a refresh after a change never flashes the skeleton. */
export function useRecords<T>(load: () => Promise<T[]>) {
  const [rows, setRows] = useState<T[] | null>(null);
  const [error, setError] = useState<unknown>(null);
  const loader = useRef(load);
  loader.current = load;
  const reload = useCallback(async () => {
    try {
      setRows(await loader.current());
      setError(null);
    } catch (err) {
      setError(err);
    }
  }, []);
  const retry = useCallback(() => {
    setError(null);
    setRows(null);
    return reload();
  }, [reload]);
  useEffect(() => {
    reload();
  }, [reload]);
  return { rows, error, reload, retry };
}

/** Calls back with the address's #fragment now and whenever it changes, so links can open a tab or filter. */
export function useHash(pick: (hash: string) => void) {
  const picker = useRef(pick);
  picker.current = pick;
  useEffect(() => {
    const read = () => picker.current(location.hash.slice(1));
    read();
    addEventListener("hashchange", read);
    return () => removeEventListener("hashchange", read);
  }, []);
}

export function errorText(error: unknown) {
  const code = (error as { code?: string } | null)?.code;
  if (code === "permission-denied") return "Firestore refused access. The published Firestore rules may not let signed-in admins read this.";
  if (code === "unavailable") return "Could not reach Firestore. Check your connection, then try again.";
  return (error as Error | null)?.message || "Something went wrong.";
}

export function Loading({ rows = 6 }: { rows?: number }) {
  return (
    <div role="status" aria-label="Loading" className="border-t border-line">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="flex items-center gap-6 border-b border-line-soft py-5">
          <Skeleton className="h-4 w-[24%] rounded-none bg-[#EFEDEA]" />
          <Skeleton className="h-4 w-[32%] rounded-none bg-[#EFEDEA]" />
          <Skeleton className="ml-auto h-4 w-[14%] rounded-none bg-[#EFEDEA]" />
        </div>
      ))}
    </div>
  );
}

export function Failed({ what, error, onRetry }: { what: string; error: unknown; onRetry?: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-start gap-4 border border-[#F4C7C3] bg-[#FEF3F2] p-6 sm:flex-row sm:items-center">
      <TriangleAlert aria-hidden className="size-5 shrink-0 text-[#B42318]" />
      <div className="min-w-0 flex-1 text-[#912018]">
        <p className="font-medium">Could not load {what}.</p>
        <p className="mt-1 text-[14px]">{errorText(error)}</p>
      </div>
      {onRetry && (
        <button type="button" onClick={onRetry} className={button({ variant: "secondary", size: "sm" })}>
          Try again
        </button>
      )}
    </div>
  );
}

export function Empty({ icon: Icon, title, children, action }: { icon: LucideIcon; title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center border border-dashed border-[#C9C6C2] px-6 py-16 text-center">
      <span aria-hidden className="grid size-12 place-items-center bg-ink">
        <Icon className="size-5 text-primary" strokeWidth={1.75} />
      </span>
      <h2 className="mt-5 text-[17px] font-medium tracking-[-0.01em] text-ink">{title}</h2>
      <p className="mt-2 max-w-[48ch] text-pretty text-[14.5px] text-body-3">{children}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

/** Wraps a list in its loading, failed and empty states. */
export function Records<T>({
  rows,
  error,
  onRetry,
  what,
  empty,
  children,
}: {
  rows: T[] | null;
  error: unknown;
  onRetry: () => void;
  what: string;
  empty: ReactNode;
  children: (rows: T[]) => ReactNode;
}) {
  if (error) return <Failed what={what} error={error} onRetry={onRetry} />;
  if (!rows) return <Loading />;
  return <>{rows.length ? children(rows) : empty}</>;
}

/* --- Tables: a table from 768px, labelled records below it ----------------------------------- */

export type Column<T> = { label: string; cell: (row: T) => ReactNode; className?: string };

export function RecordTable<T extends { id: string }>({
  caption,
  rows,
  columns,
  actions,
}: {
  caption: string;
  rows: T[];
  columns: Column<T>[];
  actions?: (row: T) => ReactNode;
}) {
  const [first, ...rest] = columns;
  return (
    <>
      <div className="hidden overflow-x-auto border border-line md:block">
        <table className="w-full border-collapse text-left text-[14px]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line bg-[#FAFAF9]">
              {columns.map((c) => (
                <th key={c.label} scope="col" className="h-11 whitespace-nowrap px-4 text-[12.5px] font-medium text-body-3">
                  {c.label}
                </th>
              ))}
              {actions && (
                <th scope="col" className="w-px px-4">
                  <span className="sr-only">Actions</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-line-soft transition-colors duration-150 last:border-0 hover:bg-[#FAFAF9]">
                {columns.map((c, i) => (
                  <td key={c.label} className={cn("px-4 py-3.5 align-middle", i === 0 ? "text-ink" : "text-body", c.className)}>
                    {c.cell(row)}
                  </td>
                ))}
                {actions && (
                  <td className="px-3 py-2">
                    <div className="flex justify-end gap-0.5">{actions(row)}</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul aria-label={caption} className="border-t border-ink md:hidden">
        {rows.map((row) => (
          <li key={row.id} className="border-b border-line py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 pt-1 text-[15.5px] font-medium text-ink">{first.cell(row)}</div>
              {actions && <div className="-mr-2 flex shrink-0">{actions(row)}</div>}
            </div>
            <dl className="mt-2 grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] gap-x-4 gap-y-1.5 text-[14px]">
              {rest.map((c) => (
                <Fragment key={c.label}>
                  <dt className="text-body-3">{c.label}</dt>
                  <dd className="min-w-0 break-words text-body">{c.cell(row)}</dd>
                </Fragment>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

/* --- Inbox entries: enquiries and comments, where the message is the point -------------------- */

export function EntryList({ label, children }: { label: string; children: ReactNode }) {
  return (
    <ul aria-label={label} className="border-t border-ink">
      {children}
    </ul>
  );
}

export function Entry({
  title,
  meta,
  tags,
  time,
  actions,
  footer,
  children,
}: {
  title: ReactNode;
  meta?: ReactNode;
  tags?: ReactNode;
  time?: Timestamp | null;
  actions?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="grid gap-x-10 gap-y-3 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_auto]">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-[17.5px] font-medium tracking-[-0.01em] text-ink">{title}</h2>
          {meta && <p className="text-[14px] text-body-3">{meta}</p>}
        </div>
        {tags && <div className="mt-2.5 flex flex-wrap gap-2">{tags}</div>}
        {children && <div className="mt-3">{children}</div>}
        {footer && <div className="mt-3.5">{footer}</div>}
      </div>
      <div className="flex items-center justify-between gap-3 md:flex-col md:items-end md:justify-start">
        <Time value={time} />
        {actions && <div className="-mr-2 flex items-center gap-1 md:-mt-0.5">{actions}</div>}
      </div>
    </li>
  );
}

const link = "inline-flex min-w-0 items-center gap-1.5 text-ink underline decoration-[#C9C6C2] underline-offset-4 transition-colors hover:decoration-primary-deep";

export function EmailLink({ email, icon }: { email: string; icon?: boolean }) {
  return (
    <a href={`mailto:${email}`} className={link}>
      {icon && <Mail aria-hidden className="size-3.5 shrink-0 text-body-3" />}
      <span className="[overflow-wrap:anywhere]">{email}</span>
    </a>
  );
}

export function PhoneLink({ phone, icon }: { phone: string; icon?: boolean }) {
  return (
    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className={cn(link, "whitespace-nowrap")}>
      {icon && <Phone aria-hidden className="size-3.5 shrink-0 text-body-3" />}
      {phone}
    </a>
  );
}

/** An enquirer's address and number, with icons because nothing else labels them. */
export function Contact({ email, phone, children }: { email?: string; phone?: string; children?: ReactNode }) {
  return (
    <p className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
      {email && <EmailLink email={email} icon />}
      {phone && <PhoneLink phone={phone} icon />}
      {children}
    </p>
  );
}

export const textLink = link;

/** Long text clamped to four lines, with a toggle only when something is actually hidden. */
export function Clamp({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || open) return;
    const check = () => setHidden(el.scrollHeight > el.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, open]);
  return (
    <div>
      <p ref={ref} className={cn("max-w-[75ch] whitespace-pre-line text-pretty text-[15px] leading-[1.65] text-body", !open && "line-clamp-4")}>
        {open ? text : text.replace(/\s*\n\s*/g, " ")}
      </p>
      {(hidden || open) && (
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-1.5 cursor-pointer text-[13.5px] font-medium text-primary-deep underline-offset-4 hover:underline">
          {open ? "Show less" : "Read the full message"}
        </button>
      )}
    </div>
  );
}

/* --- Confirming a change that cannot be undone ------------------------------------------------ */

export function ConfirmDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel,
  busyLabel = "Deleting…",
  tone = "danger",
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: ReactNode;
  confirmLabel: string;
  busyLabel?: string;
  tone?: "danger" | "primary";
  onConfirm: () => Promise<void> | void;
}) {
  const [busy, setBusy] = useState(false);
  const { toast } = useToast();
  const confirm = async () => {
    setBusy(true);
    try {
      await onConfirm();
      onClose();
    } catch (err) {
      toast({ variant: "destructive", title: "That did not go through", description: errorText(err) });
    } finally {
      setBusy(false);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={(next) => !next && !busy && onClose()}>
      <AlertDialogContent className="w-[calc(100%-2.5rem)] max-w-[440px] gap-6 rounded-none border-line p-7 sm:rounded-none">
        <AlertDialogHeader className="space-y-2 text-left sm:text-left">
          <AlertDialogTitle className="text-[21px] font-normal leading-tight tracking-[-0.02em] text-ink">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-[14.5px] leading-relaxed text-body-3">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3 sm:space-x-0">
          <AlertDialogCancel disabled={busy} className={cn(button({ variant: "secondary" }), "mt-0")}>
            Cancel
          </AlertDialogCancel>
          <button type="button" onClick={confirm} disabled={busy} className={button({ variant: tone })}>
            {busy ? busyLabel : confirmLabel}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
