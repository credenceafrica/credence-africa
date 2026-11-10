"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  FileDown,
  FileText,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  MessageSquareText,
  MessagesSquare,
  Newspaper,
  X,
} from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const groups = [
  { items: [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard }] },
  {
    label: "Publishing",
    items: [
      { href: "/admin/insights", label: "Insights", icon: Newspaper },
      { href: "/admin/comments", label: "Comments", icon: MessageSquareText },
      { href: "/admin/briefings", label: "Briefings", icon: Mail },
    ],
  },
  {
    label: "Enquiries",
    items: [
      { href: "/admin/consultations", label: "Consultations", icon: MessagesSquare },
      { href: "/admin/case-study-requests", label: "Case Study Requests", icon: FileText },
      { href: "/admin/profile-leads", label: "Profile Leads", icon: FileDown },
    ],
  },
];

const isCurrent = (pathname: string, href: string) => (href === "/admin" ? pathname === href : pathname.startsWith(href));
const row = "group flex h-10 w-full items-center gap-3 px-3 text-[14.5px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary";
const idle = "text-body-dark hover:bg-[#161616] hover:text-white";
const icon = "size-[18px] shrink-0 transition-colors duration-150";

function Logo({ className }: { className: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo-light.png" alt="Credence Africa admin" width={902} height={98} className={cn("w-auto", className)} />;
}

function Nav({ email, onSignOut, onNavigate }: { email: string; onSignOut: () => void; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <>
      <nav aria-label="Admin" className="flex-1 overflow-y-auto px-3 py-6">
        {groups.map((group, i) => (
          <div key={group.label ?? i} className={cn(i > 0 && "mt-7")}>
            {group.label && <p className="mb-2 px-3 text-[12.5px] text-mute">{group.label}</p>}
            <ul className="space-y-0.5">
              {group.items.map(({ href, label, icon: Icon }) => {
                const current = isCurrent(pathname, href);
                return (
                  <li key={href}>
                    <Link href={href} onClick={onNavigate} aria-current={current ? "page" : undefined} className={cn(row, current ? "bg-tile text-white" : idle)}>
                      <Icon aria-hidden strokeWidth={1.75} className={cn(icon, current ? "text-primary" : "text-mute group-hover:text-body-dark")} />
                      <span className="truncate">{label}</span>
                      {current && <span aria-hidden className="ml-auto size-1.5 shrink-0 bg-primary" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-line-dark px-3 pb-4 pt-3">
        <a href="/" target="_blank" rel="noreferrer" className={cn(row, idle)}>
          <ArrowUpRight aria-hidden strokeWidth={1.75} className={cn(icon, "text-mute group-hover:text-body-dark")} />
          View website
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <button type="button" onClick={onSignOut} className={cn(row, idle, "cursor-pointer")}>
          <LogOut aria-hidden strokeWidth={1.75} className={cn(icon, "text-mute group-hover:text-body-dark")} />
          Sign out
        </button>
        <div className="mt-3 flex items-center gap-3 border-t border-line-dark px-3 pt-4">
          <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-tile text-[13px] font-medium uppercase text-white">
            {email.charAt(0) || "?"}
          </span>
          <p className="min-w-0">
            <span className="block text-[12px] text-mute">Signed in as</span>
            <span className="block truncate text-[13px] text-white" title={email}>
              {email}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

/** Ink sidebar from 1024px; below that a top bar whose menu button opens the same navigation as a drawer. */
export function AdminShell({ email, onSignOut, children }: { email: string; onSignOut: () => void; children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = groups.flatMap((g) => g.items).find((item) => isCurrent(pathname, item.href));

  // Back and forward buttons change the page without a tap in the drawer.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-dvh bg-white text-base text-ink">
      <a href="#admin-main" className="sr-only z-50 bg-primary px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Skip to content
      </a>

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[264px] flex-col bg-ink lg:flex">
        <div className="flex h-[76px] shrink-0 items-center border-b border-line-dark px-6">
          <Link href="/admin" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
            <Logo className="h-[21px]" />
          </Link>
        </div>
        <Nav email={email} onSignOut={onSignOut} />
      </aside>

      <header className="sticky top-0 z-30 flex h-14 items-center gap-1.5 border-b border-line-dark bg-ink pl-1.5 pr-5 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="grid size-11 cursor-pointer place-items-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          <Menu aria-hidden className="size-[22px]" strokeWidth={1.75} />
        </button>
        <Link href="/admin" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Logo className="h-[17px]" />
        </Link>
        {current && <span className="ml-auto hidden truncate pl-4 text-[13.5px] text-body-dark sm:block">{current.label}</span>}
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          overlayClassName="bg-ink/55"
          className="flex w-[min(304px,86vw)] flex-col gap-0 border-r-0 bg-ink p-0 text-white duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:duration-200 data-[state=open]:duration-300 [&>button:last-child]:hidden"
        >
          <SheetTitle className="sr-only">Admin menu</SheetTitle>
          <SheetDescription className="sr-only">Every page of the Credence Africa admin.</SheetDescription>
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-line-dark pl-5 pr-1.5">
            <Logo className="h-[17px]" />
            <SheetClose
              aria-label="Close menu"
              className="grid size-11 cursor-pointer place-items-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            >
              <X aria-hidden className="size-[22px]" strokeWidth={1.75} />
            </SheetClose>
          </div>
          <Nav email={email} onSignOut={onSignOut} onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <main id="admin-main" tabIndex={-1} className="focus:outline-none lg:pl-[264px]">
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pt-12">{children}</div>
      </main>
    </div>
  );
}
