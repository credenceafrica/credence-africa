"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LexicalEditor } from "@/components/lexical-editor";
import { button, field, fieldError, fieldLabel } from "@/components/admin/ui";
import { cn } from "@/lib/utils";

export const insightSchema = z.object({
  title: z.string().trim().min(1, "Give the insight a title."),
  // The editor leaves an empty paragraph behind, so look at the text rather than the markup.
  content: z.string().refine((html) => html.replace(/<[^>]+>/g, "").trim().length > 0, "Write the insight before publishing it."),
  category: z.string().trim().min(1, "Give the insight a category."),
  tags: z.string().optional(),
  featuredImage: z.string().nullable().optional(),
});

export type InsightFormValues = z.infer<typeof insightSchema>;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const wordCount = (html: string) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

export const tagList = (tags?: string) => tags?.split(",").map((tag) => tag.trim()).filter(Boolean) ?? [];

/** Title and body on the left; category, tags, image and the save button in a panel that stays in view on wide screens. */
export function InsightForm({
  initial,
  submitLabel,
  busyLabel,
  onSubmit,
}: {
  initial?: InsightFormValues;
  submitLabel: string;
  busyLabel: string;
  onSubmit: (values: InsightFormValues) => Promise<void>;
}) {
  const form = useForm<InsightFormValues>({
    resolver: zodResolver(insightSchema),
    defaultValues: initial ?? { title: "", content: "", category: "", tags: "", featuredImage: null },
  });
  const image = form.watch("featuredImage");
  const busy = form.formState.isSubmitting;

  const pickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => form.setValue("featuredImage", reader.result as string, { shouldDirty: true });
    reader.readAsDataURL(file);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid items-start gap-x-12 gap-y-10 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-9">
          <FormField
            control={form.control}
            name="title"
            render={({ field: f }) => (
              <FormItem className="space-y-0">
                <FormLabel className={fieldLabel}>Title</FormLabel>
                <FormControl>
                  {/* Grows with the title where the browser can size a field to its content; a title is one line of text. */}
                  <textarea
                    {...f}
                    rows={2}
                    onChange={(e) => f.onChange(e.target.value.replace(/\s*\n\s*/g, " "))}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    placeholder="What is this insight about?"
                    className="block w-full resize-none rounded-none border-0 border-b border-[#8C8C8C] bg-transparent pb-3 pt-1 text-[28px] leading-[1.15] tracking-[-0.03em] text-ink transition-colors [field-sizing:content] placeholder:text-[#8C8C8C] hover:border-ink focus:border-ink focus:outline-none sm:text-[34px]"
                  />
                </FormControl>
                <FormMessage className={fieldError} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field: f }) => (
              <FormItem className="space-y-0">
                <FormLabel className={fieldLabel}>Content</FormLabel>
                <FormControl>
                  <LexicalEditor onChange={f.onChange} initialValue={initial?.content} />
                </FormControl>
                <FormMessage className={fieldError} />
              </FormItem>
            )}
          />
        </div>

        <aside className="space-y-6 border border-line bg-[#FAFAF9] p-6 xl:sticky xl:top-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field: f }) => (
              <FormItem className="space-y-0">
                <FormLabel className={fieldLabel}>Category</FormLabel>
                <FormControl>
                  <input {...f} placeholder="For example, Capital and Investment" className={field} />
                </FormControl>
                <FormMessage className={fieldError} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field: f }) => (
              <FormItem className="space-y-0">
                <FormLabel className={fieldLabel}>Tags</FormLabel>
                <FormControl>
                  <input {...f} placeholder="Agriculture and Food, SMEs and Startups" className={field} />
                </FormControl>
                <FormDescription className="mt-2 text-[12.5px] text-body-3">Sector names, separated by commas.</FormDescription>
              </FormItem>
            )}
          />
          <div>
            <label htmlFor="insight-image" className={fieldLabel}>
              Featured image
            </label>
            <div className="mb-3 grid aspect-[16/9] place-items-center overflow-hidden border border-line bg-white">
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image} alt="The featured image" className="size-full object-cover" />
              ) : (
                <ImagePlus aria-hidden className="size-6 text-mute" strokeWidth={1.5} />
              )}
            </div>
            <input
              id="insight-image"
              type="file"
              accept="image/*"
              onChange={pickImage}
              className="w-full cursor-pointer text-[13px] text-body-3 file:mr-3 file:h-9 file:cursor-pointer file:rounded-full file:border file:border-solid file:border-ink file:bg-white file:px-4 file:text-[13px] file:font-medium file:text-ink file:transition-colors hover:file:bg-ink hover:file:text-white"
            />
          </div>
          <div className="space-y-3 border-t border-line pt-6">
            <button type="submit" disabled={busy} className={cn(button(), "w-full")}>
              {busy ? busyLabel : submitLabel}
            </button>
            <Link href="/admin/insights" className={cn(button({ variant: "quiet" }), "w-full")}>
              Cancel
            </Link>
          </div>
        </aside>
      </form>
    </Form>
  );
}
