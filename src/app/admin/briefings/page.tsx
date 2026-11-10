"use client";

import { useCallback, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc, type Timestamp } from "firebase/firestore";
import { Mail, RotateCw, Send as SendIcon, Trash2, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LexicalEditor } from "@/components/lexical-editor";
import {
  button,
  Chip,
  ConfirmDialog,
  dangerIcon,
  day,
  EmailLink,
  Empty,
  Failed,
  field,
  fieldLabel,
  iconButton,
  Loading,
  newestFirst,
  PageHeader,
  PhoneLink,
  RecordTable,
  Time,
  useHash,
} from "@/components/admin/ui";
import { auth, firestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Person = { id: string; name: string; email: string; phone: string; sectors: string[]; otherSector: string; createdAt?: Timestamp };
type Lead = Person & { subscribed: boolean };
type Subscriber = Person & { status: "subscribed" | "unsubscribed"; subscribedAt?: Timestamp };
type Send = { id: string; subject: string; total: number; sent: number; failed: number; cursor: string; status: "sending" | "sent"; createdAt?: Timestamp };

// 30 emails a minute, Microsoft 365's SMTP limit.
const PACE_MS = 2000;

const tabs = ["leads", "subscribers", "send"] as const;
type Tab = (typeof tabs)[number];

const sectorText = (p: Person) => p.sectors.map((s) => (s === "Other" && p.otherSector ? `Other: ${p.otherSector}` : s)).join(", ");
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

function duration(emails: number) {
  const seconds = Math.ceil((emails * PACE_MS) / 1000);
  return seconds < 90 ? plural(seconds, "second") : plural(Math.ceil(seconds / 60), "minute");
}

async function deliver(sendId: string, subscriberId: string): Promise<"sent" | "refused" | "skipped" | "retry"> {
  const token = await auth!.currentUser!.getIdToken();
  const response = await fetch("/api/admin/briefings/send", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ sendId, subscriberId }),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error ?? "The email could not be sent.");
  return body.outcome;
}

function Progress({ sent, total, failed, sending }: { sent: number; total: number; failed: number; sending: boolean }) {
  const done = sent + failed;
  return (
    <div role="status" className="w-full border border-line p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[14px]">
        <p className="text-ink">
          <span className="font-medium tabular-nums">
            {sent} of {total}
          </span>{" "}
          sent{failed > 0 && <span className="text-[#B42318]">, {failed} refused</span>}
        </p>
        {sending && <p className="text-body-3">Keep this tab open until it finishes.</p>}
      </div>
      <div className="mt-3 h-1.5 bg-line-soft">
        <div className="h-full bg-primary transition-[width] duration-300 ease-out" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
      </div>
    </div>
  );
}

export default function BriefingsPage() {
  const [data, setData] = useState<{ leads: Lead[]; subscribers: Subscriber[]; sends: Send[] } | null>(null);
  const [loadError, setLoadError] = useState<unknown>(null);
  const [tab, setTab] = useState<Tab>("leads");
  const [toDelete, setToDelete] = useState<{ list: "leads" | "subscribers"; person: Person } | null>(null);
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [editorKey, setEditorKey] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [progress, setProgress] = useState<{ total: number; sent: number; failed: number } | null>(null);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const load = useCallback(async () => {
    const [leads, subscribers, sends] = await Promise.all([newestFirst<Lead>("briefingLeads"), newestFirst<Subscriber>("briefingSubscribers"), newestFirst<Send>("briefingSends")]);
    const next = { leads, subscribers, sends };
    setData(next);
    return next;
  }, []);

  const firstLoad = useCallback(() => {
    setLoadError(null);
    load().catch(setLoadError);
  }, [load]);

  useEffect(firstLoad, [firstLoad]);

  // The dashboard links to a tab with #leads or #send; the address keeps the tab on reload.
  useHash((hash) => tabs.includes(hash as Tab) && setTab(hash as Tab));
  const changeTab = (next: string) => {
    setTab(next as Tab);
    history.replaceState(null, "", `#${next}`);
  };

  const fail = (err: unknown) => toast({ variant: "destructive", title: "Error", description: (err as Error).message });

  /** Emails each subscriber in turn and saves progress after every one, so resuming never repeats anyone. */
  const run = async (resume?: Send) => {
    setSending(true);
    try {
      const { subscribers } = await load();
      const active = subscribers.filter((s) => s.status === "subscribed").sort((a, b) => (a.id < b.id ? -1 : 1));
      const ref = resume
        ? doc(firestore!, "briefingSends", resume.id)
        : await addDoc(collection(firestore!, "briefingSends"), { subject, html, total: active.length, sent: 0, failed: 0, cursor: "", status: "sending", createdBy: auth!.currentUser!.email, createdAt: serverTimestamp() });
      const count = { total: resume?.total ?? active.length, sent: resume?.sent ?? 0, failed: resume?.failed ?? 0 };
      setProgress({ ...count });
      for (const subscriber of active.filter((s) => s.id > (resume?.cursor ?? ""))) {
        const outcome = await deliver(ref.id, subscriber.id);
        if (outcome === "retry") {
          toast({
            variant: "destructive",
            title: "Sending paused",
            description: `The mail server stopped accepting messages after ${count.sent} of ${count.total}. Wait a few minutes, then use Resume below.`,
          });
          return;
        }
        if (outcome === "sent") count.sent += 1;
        if (outcome === "refused") count.failed += 1;
        await updateDoc(ref, { cursor: subscriber.id, sent: count.sent, failed: count.failed });
        setProgress({ ...count });
        await new Promise((done) => setTimeout(done, PACE_MS));
      }
      await updateDoc(ref, { status: "sent", finishedAt: serverTimestamp() });
      toast({ title: "Briefing sent", description: `Sent to ${count.sent} of ${count.total} subscribers.` });
      setProgress(null);
      if (!resume) {
        setSubject("");
        setHtml("");
        setEditorKey((k) => k + 1);
      }
    } catch (err) {
      fail(err);
    } finally {
      setSending(false);
      load().catch(() => {});
    }
  };

  const active = data?.subscribers.filter((s) => s.status === "subscribed").length ?? 0;
  const hasBody = html.replace(/<[^>]+>/g, "").trim().length > 0;
  const remove = (list: "leads" | "subscribers", person: Person) => (
    <button type="button" onClick={() => setToDelete({ list, person })} aria-label={`Delete ${person.name}`} title="Delete" className={cn(iconButton, dangerIcon)}>
      <Trash2 aria-hidden />
    </button>
  );
  const trigger =
    "relative h-12 shrink-0 cursor-pointer gap-2 rounded-none bg-transparent px-0 text-[15px] font-normal text-body-3 shadow-none ring-offset-0 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:text-ink focus-visible:ring-inset data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none data-[state=active]:after:scale-x-100";
  const badge = "rounded-full bg-[#F2F1EF] px-2 py-0.5 text-[12px] tabular-nums text-body-2";

  return (
    <>
      <PageHeader title="Briefings" description="Credence Intelligence briefings: who registered on the Research page, who receives the emails and what you have sent." />

      {loadError ? (
        <Failed what="briefings" error={loadError} onRetry={firstLoad} />
      ) : !data ? (
        <Loading />
      ) : (
        <Tabs value={tab} onValueChange={changeTab}>
          <TabsList className="no-scrollbar flex h-auto w-full justify-start gap-6 overflow-x-auto sm:gap-8 rounded-none border-b border-line bg-transparent p-0">
            <TabsTrigger value="leads" className={trigger}>
              Leads <span className={badge}>{data.leads.length}</span>
            </TabsTrigger>
            <TabsTrigger value="subscribers" className={trigger}>
              Subscribers <span className={badge}>{active}</span>
            </TabsTrigger>
            <TabsTrigger value="send" className={trigger}>
              Send a Briefing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads" className="mt-8 focus-visible:ring-offset-4">
            {data.leads.length === 0 ? (
              <Empty icon={Mail} title="No leads yet">
                Everyone who registers through the Credence Intelligence Briefings form on the Research page appears here, whether or not they ticked the email box.
              </Empty>
            ) : (
              <RecordTable
                caption="Briefing leads"
                rows={data.leads}
                columns={[
                  { label: "Name", cell: (l) => <span className="font-medium">{l.name}</span>, className: "whitespace-nowrap" },
                  { label: "Email", cell: (l) => <EmailLink email={l.email} />, className: "whitespace-nowrap" },
                  { label: "Phone", cell: (l) => (l.phone ? <PhoneLink phone={l.phone} /> : "–") },
                  { label: "Sector or Area of Work", cell: sectorText, className: "min-w-[180px]" },
                  { label: "Wants Emails", cell: (l) => (l.subscribed ? <Chip tone="ok">Yes</Chip> : <Chip>No</Chip>) },
                  { label: "Date", cell: (l) => <Time value={l.createdAt} /> },
                ]}
                actions={(l) => remove("leads", l)}
              />
            )}
          </TabsContent>

          <TabsContent value="subscribers" className="mt-8 focus-visible:ring-offset-4">
            {data.subscribers.length === 0 ? (
              <Empty icon={Users} title="No subscribers yet">
                People who tick &ldquo;I would like to receive Credence Intelligence briefings by email&rdquo; appear here. Each address appears once.
              </Empty>
            ) : (
              <RecordTable
                caption="Briefing subscribers"
                rows={data.subscribers}
                columns={[
                  { label: "Name", cell: (s) => <span className="font-medium">{s.name}</span>, className: "whitespace-nowrap" },
                  { label: "Email", cell: (s) => <EmailLink email={s.email} />, className: "whitespace-nowrap" },
                  { label: "Phone", cell: (s) => (s.phone ? <PhoneLink phone={s.phone} /> : "–") },
                  { label: "Sector or Area of Work", cell: sectorText, className: "min-w-[180px]" },
                  { label: "Status", cell: (s) => (s.status === "subscribed" ? <Chip tone="ok" dot>Active</Chip> : <Chip dot>Unsubscribed</Chip>) },
                  { label: "Subscribed", cell: (s) => <Time value={s.subscribedAt} /> },
                ]}
                actions={(s) => remove("subscribers", s)}
              />
            )}
          </TabsContent>

          <TabsContent value="send" className="mt-8 focus-visible:ring-offset-4">
            <div className="grid items-start gap-x-12 gap-y-8 xl:grid-cols-[minmax(0,1fr)_300px]">
              <div className="min-w-0 space-y-7">
                <div>
                  <label htmlFor="briefing-subject" className={fieldLabel}>
                    Subject
                  </label>
                  <input id="briefing-subject" value={subject} maxLength={200} onChange={(e) => setSubject(e.target.value)} className={field} />
                </div>
                <div>
                  <p className={fieldLabel}>Content</p>
                  <LexicalEditor key={editorKey} onChange={setHtml} placeholder="Write your briefing here..." />
                </div>
                {progress && <Progress {...progress} sending={sending} />}
                <button type="button" disabled={sending || !subject.trim() || !hasBody || active === 0} onClick={() => setConfirming(true)} className={cn(button(), "max-sm:w-full")}>
                  <SendIcon aria-hidden />
                  {sending ? "Sending…" : `Send to ${plural(active, "subscriber")}`}
                </button>
              </div>

              <aside className="border border-line bg-[#FAFAF9] p-6 text-[14px] leading-relaxed text-body">
                <p className="text-[19px] leading-snug tracking-[-0.01em] text-ink">
                  {active === 0 ? "Nobody is subscribed yet." : `${plural(active, "subscriber")} will receive it.`}
                </p>
                <ul className="mt-4 space-y-3 text-body-2">
                  {active > 0 && <li>Sending takes about {duration(active)}: emails go out one at a time, 30 a minute.</li>}
                  <li>Keep this tab open until it finishes. If it stops, Resume carries on without emailing anyone twice.</li>
                  <li>Every email carries its own one-click unsubscribe link.</li>
                </ul>
              </aside>
            </div>

            <section aria-labelledby="sent-briefings" className="mt-14">
              <h2 id="sent-briefings" className="mb-4 text-[19px] font-medium tracking-[-0.01em] text-ink">
                Sent Briefings
              </h2>
              {data.sends.length === 0 ? (
                <Empty icon={SendIcon} title="No briefings sent yet">
                  Each briefing you send is listed here with how many subscribers it reached.
                </Empty>
              ) : (
                <RecordTable
                  caption="Sent briefings"
                  rows={data.sends}
                  columns={[
                    { label: "Subject", cell: (s) => <span className="font-medium">{s.subject}</span>, className: "min-w-[220px]" },
                    { label: "Started", cell: (s) => <span className="whitespace-nowrap tabular-nums text-body-3">{day(s.createdAt)}</span> },
                    {
                      label: "Reached",
                      cell: (s) => (
                        <span className="flex items-center gap-3 whitespace-nowrap tabular-nums">
                          {s.sent} of {s.total}
                          <span aria-hidden className="hidden h-1 w-16 bg-line-soft md:block">
                            <span className="block h-full bg-ink" style={{ width: `${s.total ? ((s.sent + s.failed) / s.total) * 100 : 0}%` }} />
                          </span>
                        </span>
                      ),
                    },
                    { label: "Refused", cell: (s) => <span className="tabular-nums">{s.failed}</span> },
                    { label: "Status", cell: (s) => (s.status === "sent" ? <Chip tone="ok" dot>Sent</Chip> : <Chip tone="waiting" dot>Incomplete</Chip>) },
                  ]}
                  actions={(s) =>
                    s.status !== "sent" && (
                      <button type="button" disabled={sending} onClick={() => run(s)} className={button({ variant: "secondary", size: "sm" })}>
                        <RotateCw aria-hidden />
                        Resume
                      </button>
                    )
                  }
                />
              )}
            </section>
          </TabsContent>
        </Tabs>
      )}

      <ConfirmDialog
        open={confirming}
        onClose={() => setConfirming(false)}
        tone="primary"
        title="Send this briefing?"
        description={`“${subject}” will be emailed to ${plural(active, "subscriber")}. This cannot be undone.`}
        confirmLabel="Send"
        busyLabel="Sending…"
        onConfirm={() => {
          run();
        }}
      />

      <ConfirmDialog
        open={!!toDelete}
        onClose={() => setToDelete(null)}
        title={toDelete?.list === "subscribers" ? "Delete this subscriber?" : "Delete this lead?"}
        description={
          toDelete?.list === "subscribers"
            ? `${toDelete.person.name} will stop receiving briefings. They can register again on the Research page.`
            : `${toDelete?.person.name}'s registration will be removed for good. Their subscription, if any, stays.`
        }
        confirmLabel="Delete"
        onConfirm={async () => {
          await deleteDoc(doc(firestore!, toDelete!.list === "leads" ? "briefingLeads" : "briefingSubscribers", toDelete!.person.id));
          toast({ title: toDelete!.list === "leads" ? "Lead deleted" : "Subscriber deleted" });
          await load();
        }}
      />
    </>
  );
}
