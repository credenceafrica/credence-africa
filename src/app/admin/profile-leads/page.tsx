"use client";

import { deleteDoc, doc, type Timestamp } from "firebase/firestore";
import { FileDown, Trash2 } from "lucide-react";
import { useState } from "react";
import { ConfirmDialog, dangerIcon, EmailLink, Empty, iconButton, newestFirst, PageHeader, PhoneLink, RecordTable, Records, Time, useRecords } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type ProfileLead = { id: string; name: string; email: string; company?: string; phone?: string; createdAt?: Timestamp };

export default function ProfileLeadsPage() {
  const { rows, error, reload, retry } = useRecords(() => newestFirst<ProfileLead>("profileLeads"));
  const [toDelete, setToDelete] = useState<ProfileLead | null>(null);
  const { toast } = useToast();

  return (
    <>
      <PageHeader title="Profile Leads" count={rows?.length} description="People who downloaded the company profile, newest first." />

      <Records
        rows={rows}
        error={error}
        onRetry={retry}
        what="profile leads"
        empty={
          <Empty icon={FileDown} title="No profile leads">
            People who download the company profile appear here.
          </Empty>
        }
      >
        {(list) => (
          <RecordTable
            caption="Company profile leads"
            rows={list}
            columns={[
              { label: "Name", cell: (r) => <span className="font-medium">{r.name}</span>, className: "whitespace-nowrap" },
              { label: "Email", cell: (r) => <EmailLink email={r.email} />, className: "whitespace-nowrap" },
              { label: "Company", cell: (r) => r.company || "–" },
              { label: "Phone", cell: (r) => (r.phone ? <PhoneLink phone={r.phone} /> : "–") },
              { label: "Date", cell: (r) => <Time value={r.createdAt} /> },
            ]}
            actions={(r) => (
              <button type="button" onClick={() => setToDelete(r)} aria-label={`Delete ${r.name}`} title="Delete" className={cn(iconButton, dangerIcon)}>
                <Trash2 aria-hidden />
              </button>
            )}
          />
        )}
      </Records>

      <ConfirmDialog
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        title="Delete this lead?"
        description={`${toDelete?.name} will be removed from the admin for good.`}
        confirmLabel="Delete lead"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, "profileLeads", toDelete!.id));
          toast({ title: "Lead deleted" });
          await reload();
        }}
      />
    </>
  );
}
