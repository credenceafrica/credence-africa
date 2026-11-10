"use client";

import { deleteDoc, doc, type Timestamp } from "firebase/firestore";
import { MessagesSquare, Reply, Trash2 } from "lucide-react";
import { useState } from "react";
import { Chip, Clamp, ConfirmDialog, Contact, dangerIcon, Empty, Entry, EntryList, iconButton, newestFirst, PageHeader, Records, useRecords } from "@/components/admin/ui";
import { firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { consultationInterestLabel } from "@/lib/consultation";
import { cn } from "@/lib/utils";

type Consultation = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  interest?: string;
  message?: string;
  newsletter?: boolean;
  createdAt?: Timestamp;
};

export default function ConsultationsPage() {
  const { rows, error, reload, retry } = useRecords(() => newestFirst<Consultation>("consultations"));
  const [toDelete, setToDelete] = useState<Consultation | null>(null);
  const { toast } = useToast();

  return (
    <>
      <PageHeader title="Consultations" count={rows?.length} description="Requests from the consultation form on the website, newest first." />

      <Records
        rows={rows}
        error={error}
        onRetry={retry}
        what="consultation requests"
        empty={
          <Empty icon={MessagesSquare} title="No consultation requests yet">
            When someone sends the consultation form on the website, their request appears here with their message.
          </Empty>
        }
      >
        {(list) => (
          <EntryList label="Consultation requests">
            {list.map((r) => (
              <Entry
                key={r.id}
                title={r.name}
                meta={[r.company, r.country].filter(Boolean).join(" · ")}
                time={r.createdAt}
                tags={
                  (r.interest || r.newsletter) && (
                    <>
                      {r.interest && <Chip>{consultationInterestLabel(r.interest)}</Chip>}
                      {r.newsletter && <Chip tone="ok">Wants updates</Chip>}
                    </>
                  )
                }
                footer={<Contact email={r.email} phone={r.phone} />}
                actions={
                  <>
                    <a href={`mailto:${r.email}?subject=${encodeURIComponent("Your consultation request")}`} aria-label={`Reply to ${r.name} by email`} title="Reply by email" className={iconButton}>
                      <Reply aria-hidden />
                    </a>
                    <button type="button" onClick={() => setToDelete(r)} aria-label={`Delete ${r.name}'s request`} title="Delete" className={cn(iconButton, dangerIcon)}>
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
        description={`${toDelete?.name}'s consultation request will be removed from the admin for good.`}
        confirmLabel="Delete request"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, "consultations", toDelete!.id));
          toast({ title: "Request deleted" });
          await reload();
        }}
      />
    </>
  );
}
