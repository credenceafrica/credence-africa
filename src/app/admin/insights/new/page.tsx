"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/navigation";
import { InsightForm, slugify, tagList, wordCount, type InsightFormValues } from "@/components/admin/insight-form";
import { PageHeader } from "@/components/admin/ui";
import { auth, firestore, storage } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

export default function NewInsightPage() {
  const router = useRouter();
  const { toast } = useToast();

  const publish = async (data: InsightFormValues) => {
    try {
      let imageUrl: string | null = null;
      if (data.featuredImage) {
        const imageRef = ref(storage!, `insights/${Date.now()}_${data.title.replace(/\s+/g, "_")}`);
        const snapshot = await uploadString(imageRef, data.featuredImage, "data_url");
        imageUrl = await getDownloadURL(snapshot.ref);
      }
      await addDoc(collection(firestore!, "insights"), {
        title: data.title,
        slug: slugify(data.title),
        content: data.content,
        category: data.category,
        tags: tagList(data.tags),
        author: "Credence Africa",
        authorId: auth!.currentUser!.uid,
        createdAt: serverTimestamp(),
        published: true,
        featuredImage: imageUrl,
        views: 0,
        likes: 0,
        wordCount: wordCount(data.content),
      });
      toast({ title: "Insight published", description: "It is now live on the Insights pages." });
      router.push("/admin/insights");
    } catch (err) {
      toast({ variant: "destructive", title: "The insight was not published", description: (err as Error).message });
    }
  };

  return (
    <>
      <PageHeader back={{ href: "/admin/insights", label: "Insights" }} title="New Insight" description="It goes live on the Insights pages as soon as you publish it." />
      <InsightForm submitLabel="Publish Insight" busyLabel="Publishing…" onSubmit={publish} />
    </>
  );
}
