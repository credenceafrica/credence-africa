"use client";

import { collectionGroup, deleteDoc, doc, getDocs, orderBy, query, updateDoc, type Timestamp } from "firebase/firestore";
import { ArrowUpRight, Check, EyeOff, MessageSquareText, Trash2 } from "lucide-react";
import { useState } from "react";
import { button, Chip, Clamp, ConfirmDialog, dangerIcon, Empty, Entry, EntryList, iconButton, PageHeader, Records, textLink, useHash, useRecords } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Comment = {
  id: string;
  insightId: string;
  author: string;
  text: string;
  approved?: boolean;
  insightTitle?: string;
  insightSlug?: string;
  createdAt?: Timestamp;
};

const filters = [
  { key: "all", label: "All" },
  { key: "waiting", label: "Waiting" },
  { key: "approved", label: "Approved" },
] as const;
type Filter = (typeof filters)[number]["key"];

async function loadComments() {
  const snapshot = await getDocs(query(collectionGroup(firestore!, "comments"), orderBy("createdAt", "desc")));
  return snapshot.docs.map((d) => ({ id: d.id, insightId: d.ref.parent.parent!.id, ...d.data() }) as Comment);
}

export default function CommentsPage() {
  const { rows, error, reload, retry } = useRecords(loadComments);
  const [filter, setFilter] = useState<Filter>("all");
  const [busy, setBusy] = useState<string | null>(null);
  const [toDelete, setToDelete] = useState<Comment | null>(null);
  const { toast } = useToast();

  // The dashboard links here with #waiting.
  useHash((hash) => hash === "waiting" && setFilter("waiting"));

  const counts = { all: rows?.length ?? 0, waiting: rows?.filter((c) => !c.approved).length ?? 0, approved: rows?.filter((c) => c.approved).length ?? 0 };
  const shown = rows && rows.filter((c) => filter === "all" || (filter === "waiting" ? !c.approved : c.approved));

  const toggle = async (c: Comment) => {
    setBusy(c.id);
    try {
      await updateDoc(doc(firestore!, "insights", c.insightId, "comments", c.id), { approved: !c.approved });
      toast(c.approved ? { title: "Comment hidden", description: "It no longer shows under the insight." } : { title: "Comment approved", description: "It now shows under the insight." });
      await reload();
    } catch (err) {
      toast({ variant: "destructive", title: "That did not go through", description: (err as Error).message });
    } finally {
      setBusy(null);
    }
  };

  return (
    <>
      <PageHeader title="Comments" count={rows?.length} description="Readers' comments on insights. A comment shows under its insight only once you approve it." />

      {rows && rows.length > 0 && (
        <div role="group" aria-label="Show" className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                "inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border px-4 text-[13.5px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                filter === f.key ? "border-ink bg-ink text-white" : "border-chip bg-white text-body hover:border-ink hover:text-ink",
              )}
            >
              {f.label}
              <span className={cn("tabular-nums", filter === f.key ? "text-body-dark" : "text-body-3")}>{counts[f.key]}</span>
            </button>
          ))}
        </div>
      )}

      <Records
        rows={shown}
        error={error}
        onRetry={retry}
        what="comments"
        empty={
          <Empty icon={MessageSquareText} title={filter === "waiting" ? "Nothing is waiting for approval" : filter === "approved" ? "No approved comments yet" : "No comments yet"}>
            {filter === "all" ? "When a reader comments on an insight, the comment waits here until you approve it." : "Comments move between these lists as you approve or hide them."}
          </Empty>
        }
      >
        {(list) => (
          <EntryList label="Comments">
            {list.map((c) => (
              <Entry
                key={c.id}
                title={c.author || "Anonymous"}
                meta={
                  c.insightSlug && (
                    <>
                      on{" "}
                      <a href={`/insights/${c.insightSlug}`} target="_blank" rel="noreferrer" className={textLink}>
                        {c.insightTitle || "the insight"}
                        <ArrowUpRight aria-hidden className="size-3.5 text-body-3" />
                      </a>
                    </>
                  )
                }
                tags={c.approved ? <Chip tone="ok" dot>Approved</Chip> : <Chip tone="waiting" dot>Waiting</Chip>}
                time={c.createdAt}
                actions={
                  <>
                    <button type="button" disabled={busy === c.id} onClick={() => toggle(c)} className={button({ variant: c.approved ? "quiet" : "secondary", size: "sm" })}>
                      {c.approved ? <EyeOff aria-hidden /> : <Check aria-hidden />}
                      {c.approved ? "Hide" : "Approve"}
                    </button>
                    <button type="button" onClick={() => setToDelete(c)} aria-label={`Delete the comment from ${c.author || "Anonymous"}`} title="Delete" className={cn(iconButton, dangerIcon)}>
                      <Trash2 aria-hidden />
                    </button>
                  </>
                }
              >
                <Clamp text={c.text} />
              </Entry>
            ))}
          </EntryList>
        )}
      </Records>

      <ConfirmDialog
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        title="Delete this comment?"
        description={`The comment from ${toDelete?.author || "Anonymous"} will be removed for good, including from under the insight.`}
        confirmLabel="Delete comment"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, "insights", toDelete!.insightId, "comments", toDelete!.id));
          toast({ title: "Comment deleted" });
          await reload();
        }}
      />
    </>
  );
}
