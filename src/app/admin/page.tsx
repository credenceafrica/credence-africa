"use client";

import { format } from "date-fns";
import {
  collection,
  collectionGroup,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  type DocumentData,
  type Timestamp,
} from "firebase/firestore";
import { ArrowUpRight, FileDown, FileText, Mail, MessageSquareText, MessagesSquare, Newspaper, Plus, Send, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ago, button, errorText, PageHeader } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { cn } from "@/lib/utils";

type Stat = { count: number; latest?: string; at?: Timestamp; note?: string; waiting?: number; stopped?: DocumentData };
type Row = { key: string; group: "Enquiries" | "Publishing"; href: string; label: string; text: string; icon: LucideIcon; load: () => Promise<Stat> };

/** How many documents a collection holds, and its newest one. */
async function summary(name: string, title: (d: DocumentData) => string): Promise<Stat> {
  const ref = collection(firestore!, name);
  const [count, newest] = await Promise.all([getCountFromServer(ref), getDocs(query(ref, orderBy("createdAt", "desc"), limit(1)))]);
  const d = newest.docs[0]?.data();
  return { count: count.data().count, latest: d && title(d), at: d?.createdAt };
}

const rows: Row[] = [
  {
    key: "consultations",
    group: "Enquiries",
    href: "/admin/consultations",
    label: "Consultations",
    text: "Requests from the consultation form",
    icon: MessagesSquare,
    load: () => summary("consultations", (d) => d.name),
  },
  {
    key: "cases",
    group: "Enquiries",
    href: "/admin/case-study-requests",
    label: "Case Study Requests",
    text: "Requests for the full case study reports",
    icon: FileText,
    load: () => summary("caseStudyAccessRequests", (d) => d.fullName),
  },
  {
    key: "leads",
    group: "Enquiries",
    href: "/admin/briefings#leads",
    label: "Briefing Leads",
    text: "Registrations from the Research page",
    icon: Mail,
    load: async () => {
      const [leads, active] = await Promise.all([
        summary("briefingLeads", (d) => d.name),
        getCountFromServer(query(collection(firestore!, "briefingSubscribers"), where("status", "==", "subscribed"))),
      ]);
      const n = active.data().count;
      return { ...leads, note: `${n} ${n === 1 ? "subscriber" : "subscribers"}` };
    },
  },
  {
    key: "profiles",
    group: "Enquiries",
    href: "/admin/profile-leads",
    label: "Profile Leads",
    text: "Company profile downloads",
    icon: FileDown,
    load: () => summary("profileLeads", (d) => d.name),
  },
  {
    key: "insights",
    group: "Publishing",
    href: "/admin/insights",
    label: "Insights",
    text: "Articles on the Insights pages",
    icon: Newspaper,
    load: () => summary("insights", (d) => d.title),
  },
  {
    key: "comments",
    group: "Publishing",
    href: "/admin/comments",
    label: "Comments",
    text: "Readers' comments on insights",
    icon: MessageSquareText,
    load: async () => {
      // The same query the Comments page runs, so it needs no index of its own.
      const all = await getDocs(query(collectionGroup(firestore!, "comments"), orderBy("createdAt", "desc")));
      const newest = all.docs[0]?.data();
      return { count: all.size, latest: newest?.author, at: newest?.createdAt, waiting: all.docs.filter((d) => !d.data().approved).length };
    },
  },
  {
    key: "sends",
    group: "Publishing",
    href: "/admin/briefings#send",
    label: "Briefings Sent",
    text: "Emails to briefing subscribers",
    icon: Send,
    load: async () => {
      const all = await getDocs(query(collection(firestore!, "briefingSends"), orderBy("createdAt", "desc")));
      const newest = all.docs[0]?.data();
      return { count: all.size, latest: newest?.subject, at: newest?.createdAt, stopped: all.docs.map((d) => d.data()).find((s) => s.status !== "sent") };
    },
  },
];

function greeting() {
  const hour = new Date().getHours();
  return hour >= 5 && hour < 12 ? "Good morning" : hour >= 12 && hour < 18 ? "Good afternoon" : "Good evening";
}

/** A loading placeholder that can sit inside a link's text. */
const Bar = ({ className }: { className: string }) => <span aria-hidden className={cn("block animate-pulse bg-[#EFEDEA]", className)} />;

function Latest({ stat }: { stat?: Stat | Error }) {
  if (!stat) return <Bar className="h-4 w-48 max-w-full" />;
  if (stat instanceof Error) {
    return (
      <span className="text-[#B42318]" title={errorText(stat)}>
        Could not load{(stat as { code?: string }).code === "permission-denied" ? ": permission denied" : ""}
      </span>
    );
  }
  if (stat.waiting) {
    return (
      <span className="font-medium text-primary-deep">
        {stat.waiting} waiting for approval
      </span>
    );
  }
  if (!stat.count) return <span className="text-body-3">Nothing yet</span>;
  return (
    <>
      <span className="text-body-3">Latest </span>
      <span className="text-ink">{stat.latest || "Untitled"}</span>
      {stat.at && <span className="text-body-3">, {ago(stat.at)}</span>}
      {stat.note && <span className="text-body-3"> · {stat.note}</span>}
    </>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Record<string, Stat | Error>>({});

  useEffect(() => {
    for (const row of rows) {
      row.load().then(
        (stat) => setStats((s) => ({ ...s, [row.key]: stat })),
        (err) => setStats((s) => ({ ...s, [row.key]: err instanceof Error ? err : new Error(String(err)) })),
      );
    }
  }, []);

  const comments = stats.comments instanceof Error ? undefined : stats.comments;
  const sends = stats.sends instanceof Error ? undefined : stats.sends;
  const waiting = [
    comments?.waiting && {
      text: `${comments.waiting} ${comments.waiting === 1 ? "comment is" : "comments are"} waiting for approval.`,
      href: "/admin/comments#waiting",
      action: "Review comments",
    },
    sends?.stopped && {
      text: `“${sends.stopped.subject}” stopped after ${sends.stopped.sent} of ${sends.stopped.total} emails.`,
      href: "/admin/briefings#send",
      action: "Resume sending",
    },
  ].filter(Boolean) as { text: string; href: string; action: string }[];

  return (
    <>
      <PageHeader
        title={greeting()}
        description={`${format(new Date(), "EEEE d MMMM yyyy")}. Everything that has come in through the website and what you have published.`}
        actions={
          <>
            <Link href="/admin/insights/new" className={button()}>
              <Plus aria-hidden />
              New Insight
            </Link>
            <Link href="/admin/briefings#send" className={button({ variant: "secondary" })}>
              <Send aria-hidden />
              Send a Briefing
            </Link>
          </>
        }
      />

      {waiting.length > 0 && (
        <section aria-labelledby="waiting" className="mb-12 bg-ink px-6 py-6 text-white sm:px-8 sm:py-7">
          <h2 id="waiting" className="eb text-[12.5px] text-body-dark">
            Waiting for you
          </h2>
          <ul className="mt-2 divide-y divide-line-dark">
            {waiting.map((w) => (
              <li key={w.href} className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-4 last:pb-0">
                <p className="text-pretty text-[19px] leading-snug tracking-[-0.015em] sm:text-[21px]">{w.text}</p>
                <Link href={w.href} className={cn(button({ size: "sm" }), "max-sm:w-full focus-visible:ring-offset-ink")}>
                  {w.action}
                  <ArrowUpRight aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(["Enquiries", "Publishing"] as const).map((group) => (
        <section key={group} aria-labelledby={`group-${group}`} className="mt-12 first:mt-0">
          <h2 id={`group-${group}`} className="text-[19px] font-medium tracking-[-0.01em] text-ink">
            {group}
          </h2>
          <ul className="mt-4 border-t border-ink">
            {rows
              .filter((row) => row.group === group)
              .map((row) => {
                const stat = stats[row.key];
                const Icon = row.icon;
                return (
                  <li key={row.key} className="border-b border-line">
                    <Link
                      href={row.href}
                      className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-x-4 py-5 transition-colors duration-150 hover:bg-[#FAFAF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:gap-x-6 sm:px-4 md:grid-cols-[40px_minmax(0,0.9fr)_minmax(0,1.3fr)_auto_20px]"
                    >
                      <span aria-hidden className="grid size-10 place-items-center bg-ink">
                        <Icon className="size-[18px] text-primary" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[16.5px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-primary-deep">{row.label}</span>
                        <span className="mt-0.5 block truncate text-[13.5px] text-body-3 max-md:hidden">{row.text}</span>
                        <span className="mt-1 block truncate text-[13.5px] md:hidden">
                          <Latest stat={stat} />
                        </span>
                      </span>
                      <span className="hidden min-w-0 truncate text-[14px] md:block">
                        <Latest stat={stat} />
                      </span>
                      <span className="min-w-12 text-right text-[30px] font-light leading-none tracking-[-0.03em] tabular-nums text-ink sm:text-[34px]">
                        {stat === undefined ? <Bar className="ml-auto h-7 w-10" /> : stat instanceof Error ? "–" : stat.count}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="hidden size-5 text-body-3 transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-deep md:block"
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
      ))}
    </>
  );
}
