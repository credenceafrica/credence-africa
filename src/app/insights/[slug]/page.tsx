"use client";

import { useParams } from "next/navigation";
import { getInsight, getInsights, type Insight } from "@/lib/insights";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { firestore } from "@/firebase";
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc, increment, serverTimestamp, orderBy } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Arrow, Chip, Pill, SmartLink } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: any;
}

/** The design's article typography, applied to the editor's HTML. The opening paragraph is the lead. */
const bodyCls = [
  "prose max-w-none text-[18px] leading-[1.75] text-[#2E2E33] [&>:first-child]:mt-0",
  "[&_p]:mb-[22px] [&_p]:mt-0",
  "[&>p:first-child]:mb-8 [&>p:first-child]:text-[22px] [&>p:first-child]:leading-[1.55] [&>p:first-child]:tracking-[-0.01em] [&>p:first-child]:text-ink max-[720px]:[&>p:first-child]:text-[19px]",
  "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:scroll-mt-6 [&_h2]:text-[28px] [&_h2]:font-medium [&_h2]:leading-[1.25] [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h2_*]:font-medium",
  "[&_blockquote]:my-10 [&_blockquote]:border-l-[3px] [&_blockquote]:border-primary [&_blockquote]:py-1 [&_blockquote]:pl-7 [&_blockquote]:text-[26px] [&_blockquote]:font-normal [&_blockquote]:not-italic [&_blockquote]:leading-[1.35] [&_blockquote]:tracking-[-0.015em] [&_blockquote]:text-ink [&_blockquote_p]:m-0 [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none",
  "[&_ul]:mb-6 [&_ul]:mt-0 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:p-0",
  "[&_ul>li]:relative [&_ul>li]:my-0 [&_ul>li]:pl-7 [&_ul>li]:leading-[1.6]",
  "[&_ul>li::before]:absolute [&_ul>li::before]:left-0 [&_ul>li::before]:top-3 [&_ul>li::before]:size-1.5 [&_ul>li::before]:bg-primary [&_ul>li::before]:content-['']",
  "[&_a]:text-ink [&_a:hover]:text-primary-deep",
].join(" ");

const metaLabel = "block text-[12px] uppercase tracking-[0.08em] text-[#7A7A7A]";
const shareCls =
  "inline-flex size-[38px] items-center justify-center rounded-full border border-white/[0.22] text-white hover:border-primary hover:text-primary";
const fieldCls =
  "w-full rounded-none border-0 border-b border-chip bg-transparent py-3 text-[16px] text-ink placeholder:text-mute focus:border-primary focus:outline-none";

function ShareIcon({ d, size = 15 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function InsightPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';

  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [related, setRelated] = useState<Insight[]>([]);
  const { toast } = useToast();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    async function fetchInsight() {
      const insightData = await getInsight(slug);
      if (insightData) {
        setInsight(insightData);
        setLikes(insightData.likes || 0);

        try {
            if (firestore) await updateDoc(doc(firestore, "insights", insightData.id), { views: increment(1) });
        } catch (e) {
            console.error("Failed to increment view count", e);
        }
      }
      setLoading(false);
    }
    fetchInsight();

    const likedPosts = JSON.parse(localStorage.getItem('likedInsights') || '[]');
    if (likedPosts.includes(slug)) {
        setHasLiked(true);
    }

  }, [slug]);

  // "More insights": the three most recent others.
  useEffect(() => {
    if (!slug) return;
    getInsights().then((all) => setRelated(all.filter((i) => i.slug !== slug).slice(0, 3)));
  }, [slug]);

  useEffect(() => {
    if (!insight || !firestore) return;

    const commentsQuery = query(collection(firestore, `insights/${insight.id}/comments`), where("approved", "==", true));
    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const newComments: Comment[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
      newComments.sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
      setComments(newComments);
    }, (error) => {
        console.error("Error fetching comments: ", error);
        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not fetch comments.",
        });
    });

    return () => unsubscribe();
  }, [insight, toast]);

  // Editor HTML, prepared for the design: blank spacer lines dropped (the design sets the rhythm),
  // each h2 anchored for the "In this article" rail, and the dek taken from the opening paragraph.
  // The insight only ever loads in the browser, so DOMParser is available here.
  const article = useMemo(() => {
    if (!insight) return null;
    const body = new DOMParser().parseFromString(insight.content || "", "text/html").body;
    body.querySelectorAll("p, h2, h3").forEach((el) => {
      if (!el.textContent?.trim() && !el.querySelector("img")) el.remove();
    });
    const toc = Array.from(body.querySelectorAll("h2"), (h, i) => {
      h.id = `s${i + 1}`;
      return { id: h.id, label: h.textContent?.trim() ?? "" };
    });
    const first = body.querySelector("p")?.textContent?.replace(/\s+/g, " ").trim() ?? "";
    const dek = first.length > 160 ? `${first.slice(0, 160).replace(/\s+\S*$/, "")}…` : first;
    return { html: body.innerHTML, toc, dek };
  }, [insight]);


  const handleLike = async () => {
    if (!insight || !slug || !firestore) return;

    const likedPosts = JSON.parse(localStorage.getItem('likedInsights') || '[]');
    const isAlreadyLiked = likedPosts.includes(slug);
    const incrementValue = isAlreadyLiked ? -1 : 1;

    setLikes(likes + incrementValue);
    setHasLiked(!isAlreadyLiked);

    if (isAlreadyLiked) {
        const index = likedPosts.indexOf(slug);
        if (index > -1) {
            likedPosts.splice(index, 1);
        }
    } else {
        likedPosts.push(slug);
    }
    localStorage.setItem('likedInsights', JSON.stringify(likedPosts));


    try {
        const insightRef = doc(firestore, "insights", insight.id);
        await updateDoc(insightRef, { likes: increment(incrementValue) });
    } catch (e) {
        console.error("Failed to update likes", e);
        setLikes(likes - incrementValue);
        setHasLiked(isAlreadyLiked);

        const revertedLikedPosts = JSON.parse(localStorage.getItem('likedInsights') || '[]');
        if(isAlreadyLiked) {
          revertedLikedPosts.push(slug);
        } else {
          const index = revertedLikedPosts.indexOf(slug);
          if (index > -1) {
            revertedLikedPosts.splice(index, 1);
          }
        }
        localStorage.setItem('likedInsights', JSON.stringify(revertedLikedPosts));

        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not update like count.",
        });
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!insight || !firestore || !newComment.trim()) return;

    try {
        await addDoc(collection(firestore, `insights/${insight.id}/comments`), {
            author: commentAuthor.trim() || 'Anonymous',
            text: newComment.trim(),
            createdAt: serverTimestamp(),
            approved: false,
            insightTitle: insight.title,
            insightSlug: insight.slug,
        });
        setNewComment("");
        setCommentAuthor("");
        toast({
            title: "Comment Submitted",
            description: "Your comment is awaiting moderation.",
        });
    } catch (error) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not submit your comment. Please try again.",
        });
    }
  };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        toast({
            title: "Link Copied!",
            description: "The insight URL has been copied to your clipboard.",
        });
    };

  // The global header is white over a dark ground, so these states keep the masthead's ink.
  if (loading || !insight || !article) {
    return (
      <section className="bg-ink pb-24 pt-[168px] text-white">
        <p className="wrap text-[17px] text-body-dark">{loading ? "Loading insight..." : "Insight not found."}</p>
      </section>
    );
  }

  const url = encodeURIComponent(currentUrl);
  const title = encodeURIComponent(insight.title);
  const share = [
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, d: "M6 10v9M6 6v.01M10 19v-9M10 14a4 4 0 0 1 8 0v5" },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${url}&text=${title}`, d: "M4 4l16 16M20 4L4 20", size: 13 },
  ];

  return (
    <div className="bg-white leading-[1.7] text-ink">
      {/* Masthead */}
      <section className="on-dark bg-ink pt-[168px] text-white">
        <div className="wrap">
          <nav className="cr-in cr-d1 mb-10" aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[14px] text-white/[0.65]">
              <li>
                <SmartLink href="/" className="hit text-white/[0.65]">Home</SmartLink>
              </li>
              <li aria-hidden="true" className="text-white/[0.35]">/</li>
              <li>
                <SmartLink href="/insights" className="hit text-white/[0.65]">Insights</SmartLink>
              </li>
              {insight.category && (
                <>
                  <li aria-hidden="true" className="text-white/[0.35]">/</li>
                  <li aria-current="page" className="eb text-white">{insight.category}</li>
                </>
              )}
            </ol>
          </nav>
          <div className="cr-in cr-d2 max-w-[980px]">
            <h1 className="mb-6 mt-0 text-balance break-words text-[clamp(38px,4.6vw,66px)] font-normal leading-[1.04] tracking-[-0.035em]">
              {insight.title}
            </h1>
            {article.dek && <p className="m-0 max-w-[720px] text-[19px] leading-[1.55] text-body-dark">{article.dek}</p>}
          </div>
          <div className="cr-in mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.16] pb-[120px] pt-6 ![animation-delay:0.5s]">
            <div className="flex flex-wrap items-center gap-7 text-[14.5px] text-body-dark">
              {insight.author && (
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-full border border-[#333] bg-tile text-[13px] text-primary">
                    CA
                  </span>
                  <span className="font-medium text-white">{insight.author}</span>
                </span>
              )}
              <span>
                <span className={metaLabel}>Published</span>
                {insight.date}
              </span>
              <span>
                <span className={metaLabel}>Reading time</span>
                {Math.max(1, Math.ceil(insight.wordCount / 200))} min read
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="mr-1 text-[13px] text-[#7A7A7A]">Share</span>
              {share.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={shareCls}>
                  <ShareIcon d={s.d} size={s.size} />
                </a>
              ))}
              <a href={`mailto:?subject=${title}&body=${url}`} aria-label="Share by email" className={shareCls}>
                <ShareIcon d="M3 6h18v12H3zM3 7l9 6 9-6" />
              </a>
              <button type="button" onClick={handleCopyLink} aria-label="Copy link" className={shareCls}>
                <ShareIcon d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image, half over the masthead */}
      <section className="bg-[linear-gradient(#0A0A0A_0_50%,#FFFFFF_50%_100%)]">
        <div className="wrap">
          <div className="ph cr-in relative -mt-[72px] h-[clamp(280px,38vw,560px)] ![animation-delay:0.7s]">
            {insight.image && (
              <Image src={insight.image} alt={insight.title} fill className="object-cover" data-ai-hint="article header" />
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-28 pt-[72px]">
        <div className="wrap grid grid-cols-[240px_minmax(0,1fr)] items-start gap-20 max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <aside className="max-[960px]:hidden">
            <div className="sticky top-8 flex flex-col gap-7">
              {article.toc.length > 0 && (
                <div>
                  <div className="mb-3 text-[12px] uppercase tracking-[0.1em] text-mute">In this article</div>
                  <ol className="m-0 list-none border-l border-line p-0">
                    {article.toc.map((t, i) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className={cn(
                            "-ml-px block border-l-2 py-2 pl-4 text-[14.5px] leading-[1.4] hover:border-l-ink hover:text-ink",
                            i === 0 ? "border-l-primary text-ink" : "border-l-transparent text-body-3",
                          )}
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="flex flex-col gap-3.5 border-t border-line pt-6">
                <span className="text-[14.5px] leading-[1.45]">Need this analysed for your institution?</span>
                <Pill href="/services/research" variant="dark" arrow={false} className="self-start px-[18px] py-[11px] text-[14px]">
                  Commission research
                  <Arrow size={13} />
                </Pill>
              </div>
            </div>
          </aside>

          <article className="min-w-0 max-w-[720px]">
            <div className={bodyCls} dangerouslySetInnerHTML={{ __html: article.html }} />

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Chip href="/insights" className="px-3.5 py-[7px] text-[13.5px]">Insights</Chip>
              {insight.category && (
                <Chip href="/insights" className="px-3.5 py-[7px] text-[13.5px]">{insight.category}</Chip>
              )}
              <button
                type="button"
                onClick={handleLike}
                className="chip ml-auto inline-flex items-center gap-2 rounded-full border border-chip px-3.5 py-[7px] text-[13.5px] font-medium"
              >
                <Heart aria-hidden="true" className={cn("size-4", hasLiked && "fill-current text-primary-deep")} />
                {hasLiked ? 'Unlike' : 'Like'} ({likes})
              </button>
            </div>

            <div className="on-dark mt-12 flex flex-wrap items-center justify-between gap-5 bg-ink p-8 text-white">
              <p className="m-0 max-w-[380px] text-[24px] leading-[1.25] tracking-[-0.02em]">Discuss what this means for your institution.</p>
              <div className="flex flex-wrap gap-2.5">
                <Pill href="/consult" variant="accent">Book a consultation</Pill>
                <Pill href="/services/research" variant="outlineAccent">Commission research</Pill>
              </div>
            </div>

            <section aria-labelledby="comments-title" className="mt-16 border-t border-line pt-10">
              <h2 id="comments-title" className="mb-6 mt-0 text-[28px] font-medium leading-[1.25] tracking-[-0.02em]">
                Comments ({comments.length})
              </h2>
              {comments.length > 0 ? (
                <div className="border-t border-line">
                  {comments.map(comment => (
                    <div key={comment.id} className="break-words border-b border-line py-5">
                      <p className="m-0 font-medium">{comment.author}</p>
                      <p className="mb-2 mt-0 text-[13px] text-mute">
                        {comment.createdAt ? new Date(comment.createdAt.seconds * 1000).toLocaleString() : ''}
                      </p>
                      <p className="m-0 text-[16px] text-[#2E2E33]">{comment.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="m-0 text-[15.5px] text-body-2">No comments yet. Be the first to comment!</p>
              )}

              <form onSubmit={handleCommentSubmit} className="mt-10 flex flex-col gap-4">
                <h3 className="m-0 text-[21px] font-medium leading-[1.25] tracking-[-0.01em]">Leave a Comment</h3>
                <label htmlFor="comment-author" className="sr-only">Your name (optional)</label>
                <input
                  id="comment-author"
                  autoComplete="name"
                  placeholder="Your Name (optional)"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className={fieldCls}
                />
                <label htmlFor="comment-text" className="sr-only">Comment</label>
                <textarea
                  id="comment-text"
                  placeholder="Write your comment here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                  rows={4}
                  className={fieldCls}
                />
                <button
                  type="submit"
                  className="pill inline-flex items-center gap-2 self-start rounded-full bg-ink px-[22px] py-[13px] text-[14.5px] font-semibold text-white"
                >
                  Submit Comment
                  <Arrow />
                </button>
              </form>
            </section>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-32">
          <div className="wrap">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-10">
              <h2 className="h2 m-0 text-[clamp(30px,3vw,42px)] font-normal leading-[1.1] tracking-[-0.035em]">More insights</h2>
              <Pill href="/insights" variant="outlineDark" className="px-5 py-[11px] hover:text-primary-deep">
                All insights
              </Pill>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-7">
              {related.map((r) => (
                <SmartLink key={r.id} href={`/insights/${r.slug}`} className="group flex flex-col gap-4 text-ink">
                  <div className="overflow-hidden">
                    {/* Zooms on card hover; `!` beats the shared `a .ph` filter transition. */}
                    <div className="ph relative h-[240px] ![transition:transform_0.8s_cubic-bezier(0.2,0.7,0.2,1),filter_0.6s_ease] group-hover:scale-[1.04]">
                      {r.image && <Image src={r.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" className="object-cover" />}
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-mute">
                    {r.category && <span className="font-semibold text-primary-deep">{r.category}</span>}
                    <span>{r.date}</span>
                  </div>
                  <h3 className="m-0 text-[20px] font-medium leading-[1.3] tracking-[-0.01em] group-hover:text-primary-deep">{r.title}</h3>
                </SmartLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="on-dark bg-ink py-24 text-white">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-end gap-10">
          <div>
            <h2 className="h2 mb-3 mt-0 text-[clamp(30px,3.2vw,46px)] font-normal leading-[1.1] tracking-[-0.035em]">
              Subscribe to the Credence insights briefing
            </h2>
            <p className="m-0 text-[16.5px] text-body-dark">Receive strategic intelligence straight to your inbox.</p>
          </div>
          {/* No newsletter backend yet: method="dialog" runs the browser's email check, then neither reloads nor sends. */}
          <form method="dialog" className="flex flex-wrap items-end gap-4">
            <label htmlFor="art-email" className="sr-only">Email address</label>
            <input id="art-email" type="email" required autoComplete="email" placeholder="Email" className="fld flex-[1_1_240px]" />
            <button
              type="submit"
              className="pill inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14.5px] font-semibold text-ink"
            >
              Subscribe
              <Arrow />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
