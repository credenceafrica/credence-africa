"use client";

import { deleteDoc, doc, type Timestamp } from "firebase/firestore";
import { ArrowUpRight, FileText, Reply, Trash2 } from "lucide-react";
import { useState } from "react";
import { Clamp, ConfirmDialog, Contact, dangerIcon, Empty, Entry, EntryList, iconButton, newestFirst, PageHeader, Records, textLink, useRecords } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type CaseStudyRequest = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  position?: string;
  organization?: string;
  linkedin?: string;
  message?: string;
  createdAt?: Timestamp;
};

export default function CaseStudyRequestsPage() {
  const { rows, error, reload, retry } = useRecords(() => newestFirst<CaseStudyRequest>("caseStudyAccessRequests"));
  const [toDelete, setToDelete] = useState<CaseStudyRequest | null>(null);
  const { toast } = useToast();

  return (
    <>
      <PageHeader title="Case Study Requests" count={rows?.length} description="People asking for the full case study reports from the Case Studies page, newest first." />

      <Records
        rows={rows}
        error={error}
        onRetry={retry}
        what="case study requests"
        empty={
          <Empty icon={FileText} title="No case study requests yet">
            When someone asks for the full reports on the Case Studies page, their details appear here.
          </Empty>
        }
      >
        {(list) => (
          <EntryList label="Case study requests">
            {list.map((r) => (
              <Entry
                key={r.id}
                title={r.fullName}
                meta={[r.position, r.organization].filter(Boolean).join(", ")}
                time={r.createdAt}
                footer={
                  <Contact email={r.email} phone={r.phone}>
                    {/* Anyone can write to this collection, so only a web address becomes a link. */}
                    {r.linkedin && /^https?:\/\//i.test(r.linkedin) && (
                      <a href={r.linkedin} target="_blank" rel="noreferrer" className={textLink}>
                        LinkedIn
                        <ArrowUpRight aria-hidden className="size-3.5 text-body-3" />
                      </a>
                    )}
                  </Contact>
                }
                actions={
                  <>
                    <a href={`mailto:${r.email}?subject=${encodeURIComponent("Credence Africa case study reports")}`} aria-label={`Reply to ${r.fullName} by email`} title="Reply by email" className={iconButton}>
                      <Reply aria-hidden />
                    </a>
                    <button type="button" onClick={() => setToDelete(r)} aria-label={`Delete ${r.fullName}'s request`} title="Delete" className={cn(iconButton, dangerIcon)}>
                      <Trash2 aria-hidden />
                    </button>
                  </>
                }
              >
                {r.message && <Clamp text={r.message} />}
              </Entry>
            ))}
          </EntryList>
        )}
      </Records>

      <ConfirmDialog
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        title="Delete this request?"
        description={`${toDelete?.fullName}'s request will be removed from the admin for good.`}
        confirmLabel="Delete request"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, "caseStudyAccessRequests", toDelete!.id));
          toast({ title: "Request deleted" });
          await reload();
        }}
      />
    </>
  );
}
