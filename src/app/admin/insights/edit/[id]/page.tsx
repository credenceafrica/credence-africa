"use client";

import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { ArrowUpRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InsightForm, slugify, tagList, wordCount, type InsightFormValues } from "@/components/admin/insight-form";
import { button, Failed, Loading, PageHeader } from "@/components/admin/ui";
import { firestore, storage } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export default function EditInsightPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { toast } = useToast();
  const [initial, setInitial] = useState<InsightFormValues | null>(null);
  const [slug, setSlug] = useState("");
  const [error, setError] = useState<unknown>(null);
  const [attempt, setAttempt] = useState(0);

  // The form mounts only once the insight has loaded, so the editor starts with its content.
  useEffect(() => {
    getDoc(doc(firestore!, "insights", id)).then(
      (snap) => {
        if (!snap.exists()) {
          toast({ variant: "destructive", title: "Insight not found", description: "It may have been deleted." });
          router.replace("/admin/insights");
          return;
        }
        const data = snap.data();
        setSlug(data.slug ?? "");
        setInitial({
          title: data.title ?? "",
          content: data.content ?? "",
          category: data.category ?? "",
          tags: (data.tags ?? []).join(", "),
          featuredImage: data.featuredImage ?? null,
        });
      },
      setError,
    );
  }, [id, attempt, router, toast]);

  const save = async (data: InsightFormValues) => {
    try {
      let imageUrl = data.featuredImage ?? null;
      // A newly chosen image is still a data URL; one already uploaded is a storage URL.
      if (imageUrl?.startsWith("data:image")) {
        const snapshot = await uploadString(ref(storage!, `insights/${Date.now()}_${id}`), imageUrl, "data_url");
        imageUrl = await getDownloadURL(snapshot.ref);
      }
      await updateDoc(doc(firestore!, "insights", id), {
        title: data.title,
        slug: slugify(data.title),
        content: data.content,
        category: data.category,
        tags: tagList(data.tags),
        featuredImage: imageUrl,
        wordCount: wordCount(data.content),
        updatedAt: serverTimestamp(),
      });
      toast({ title: "Changes saved", description: "The insight is updated on the website." });
      router.push("/admin/insights");
    } catch (err) {
      toast({ variant: "destructive", title: "The changes were not saved", description: (err as Error).message });
    }
  };

  return (
    <>
      <PageHeader
        back={{ href: "/admin/insights", label: "Insights" }}
        title="Edit Insight"
        description="Changes show on the website as soon as you save them."
        actions={
          slug && (
            <a href={`/insights/${slug}`} target="_blank" rel="noreferrer" className={button({ variant: "secondary" })}>
              View on the website
              <ArrowUpRight aria-hidden />
            </a>
          )
        }
      />
      {error ? (
        <Failed
          what="this insight"
          error={error}
          onRetry={() => {
            setError(null);
            setAttempt((n) => n + 1);
          }}
        />
      ) : initial ? (
        <InsightForm initial={initial} submitLabel="Save Changes" busyLabel="Saving…" onSubmit={save} />
      ) : (
        <Loading rows={4} />
      )}
    </>
  );
}
