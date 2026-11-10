"use client";

import { collection, deleteDoc, doc, getDocs, type Timestamp } from "firebase/firestore";
import { ExternalLink, Newspaper, Pencil, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { button, ConfirmDialog, dangerIcon, day, Empty, iconButton, PageHeader, RecordTable, Records, useRecords } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Insight = { id: string; title: string; slug?: string; category?: string; featuredImage?: string | null; views?: number; createdAt?: Timestamp };

async function loadInsights() {
  const snapshot = await getDocs(collection(firestore!, "insights"));
  const insights = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as Insight);
  // Sorted here rather than in the query, so an insight saved without a date still appears (last).
  return insights.sort((a, b) => (b.createdAt?.toMillis() ?? 0) - (a.createdAt?.toMillis() ?? 0));
}

export default function InsightsPage() {
  const { rows, error, reload, retry } = useRecords(loadInsights);
  const [toDelete, setToDelete] = useState<Insight | null>(null);
  const { toast } = useToast();
  const add = (
    <Link href="/admin/insights/new" className={button()}>
      <Plus aria-hidden />
      New Insight
    </Link>
  );

  return (
    <>
      <PageHeader title="Insights" count={rows?.length} description="Articles published on the website's Insights pages, newest first." actions={add} />

      <Records
        rows={rows}
        error={error}
        onRetry={retry}
        what="insights"
        empty={
          <Empty icon={Newspaper} title="No insights yet" action={add}>
            Write the first one. It appears on the Insights pages as soon as you publish it.
          </Empty>
        }
      >
        {(list) => (
          <RecordTable
            caption="Insights"
            rows={list}
            columns={[
              {
                label: "Title",
                cell: (r) => (
                  <span className="flex items-center gap-3.5">
                    <span aria-hidden className="hidden h-11 w-16 shrink-0 overflow-hidden bg-line-soft md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {r.featuredImage && <img src={r.featuredImage} alt="" loading="lazy" className="size-full object-cover" />}
                    </span>
                    <Link href={`/admin/insights/edit/${r.id}`} className="line-clamp-2 font-medium text-ink transition-colors hover:text-primary-deep">
                      {r.title || "Untitled"}
                    </Link>
                  </span>
                ),
                className: "min-w-[280px]",
              },
              { label: "Category", cell: (r) => r.category || "–" },
              { label: "Published", cell: (r) => <span className="whitespace-nowrap tabular-nums text-body-3">{day(r.createdAt)}</span> },
              { label: "Views", cell: (r) => <span className="tabular-nums">{(r.views ?? 0).toLocaleString("en-GB")}</span> },
            ]}
            actions={(r) => (
              <>
                {r.slug && (
                  <a href={`/insights/${r.slug}`} target="_blank" rel="noreferrer" aria-label={`View “${r.title}” on the website`} title="View on the website" className={iconButton}>
                    <ExternalLink aria-hidden />
                  </a>
                )}
                <Link href={`/admin/insights/edit/${r.id}`} aria-label={`Edit “${r.title}”`} title="Edit" className={iconButton}>
                  <Pencil aria-hidden />
                </Link>
                <button type="button" onClick={() => setToDelete(r)} aria-label={`Delete “${r.title}”`} title="Delete" className={cn(iconButton, dangerIcon)}>
                  <Trash2 aria-hidden />
                </button>
              </>
            )}
          />
        )}
      </Records>

      <ConfirmDialog
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        title="Delete this insight?"
        description={`“${toDelete?.title}” will come off the website straight away. This cannot be undone.`}
        confirmLabel="Delete insight"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, "insights", toDelete!.id));
          toast({ title: "Insight deleted" });
          await reload();
        }}
      />
    </>
  );
}
