
"use client";

import { notFound } from "next/navigation";
import { getInsight, type Insight } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Eye, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { firestore } from "@/firebase";
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc, increment, serverTimestamp, orderBy } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface InsightPageProps {
  params: {
    slug: string;
  };
}

interface Comment {
    id: string;
    author: string;
    text: string;
    createdAt: any;
}


export default function InsightPage({ params }: InsightPageProps) {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchInsight() {
      const insightData = await getInsight(params.slug);
      if (insightData) {
        setInsight(insightData);
        setLikes(insightData.likes);
        
        // Increment view count
        const insightRef = doc(firestore, "insights", insightData.id);
        await updateDoc(insightRef, { views: increment(1) });
      }
      setLoading(false);
    }
    fetchInsight();

    // Check if user has already liked this post
    const likedPosts = JSON.parse(localStorage.getItem('likedInsights') || '[]');
    if (likedPosts.includes(params.slug)) {
        setHasLiked(true);
    }

  }, [params.slug]);

  useEffect(() => {
    if (!insight) return;

    const commentsQuery = query(collection(firestore, `insights/${insight.id}/comments`), where("approved", "==", true), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const newComments: Comment[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
      setComments(newComments);
    });

    return () => unsubscribe();
  }, [insight]);


  const handleLike = async () => {
    if (!insight) return;
    const insightRef = doc(firestore, "insights", insight.id);
    const newLikes = hasLiked ? likes - 1 : likes + 1;
    const incrementValue = hasLiked ? -1 : 1;

    await updateDoc(insightRef, { likes: increment(incrementValue) });
    setLikes(newLikes);
    setHasLiked(!hasLiked);

    // Store liked status in local storage
    const likedPosts = JSON.parse(localStorage.getItem('likedInsights') || '[]');
    if (hasLiked) {
        const index = likedPosts.indexOf(insight.slug);
        if (index > -1) {
            likedPosts.splice(index, 1);
        }
    } else {
        likedPosts.push(insight.slug);
    }
    localStorage.setItem('likedInsights', JSON.stringify(likedPosts));
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!insight || !newComment.trim()) return;

    try {
        await addDoc(collection(firestore, `insights/${insight.id}/comments`), {
            author: commentAuthor.trim() || 'Anonymous',
            text: newComment.trim(),
            createdAt: serverTimestamp(),
            approved: false, // Comments need approval
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


  if (loading) {
    return <div className="text-center py-24">Loading insight...</div>;
  }

  if (!insight) {
    notFound();
  }

  return (
    <article className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">{insight.date} | {insight.category} | By {insight.author}</p>
          <h1 className="text-4xl font-bold mt-2">{insight.title}</h1>
           <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
                <span className="flex items-center gap-1"><Eye className="size-4" /> {insight.views + 1} views</span>
                <span className="flex items-center gap-1"><Heart className="size-4" /> {likes} likes</span>
                <span className="flex items-center gap-1"><MessageSquare className="size-4" /> {comments.length} comments</span>
                <span>{insight.wordCount} words</span>
            </div>
        </header>
        
        {insight.image && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image 
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  data-ai-hint="article header"
              />
          </div>
        )}

        <div
          className="prose lg:prose-xl max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />

        <div className="mt-12 flex justify-center">
            <Button onClick={handleLike} variant={hasLiked ? "secondary" : "outline"}>
                <Heart className={`mr-2 h-5 w-5 ${hasLiked ? 'text-red-500 fill-current' : ''}`} />
                {hasLiked ? 'Unlike' : 'Like'} ({likes})
            </Button>
        </div>
      </div>
      
      <section className="mt-16 pt-12 border-t max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Comments ({comments.length})</h2>
        <div className="space-y-6">
            {comments.length > 0 ? (
                comments.map(comment => (
                    <div key={comment.id} className="border-b pb-4">
                        <p className="font-semibold">{comment.author}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                           {comment.createdAt ? new Date(comment.createdAt.seconds * 1000).toLocaleString() : ''}
                        </p>
                        <p>{comment.text}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>

         <form onSubmit={handleCommentSubmit} className="mt-10 space-y-4">
            <h3 className="text-2xl font-bold">Leave a Comment</h3>
             <Input 
                placeholder="Your Name (optional)"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
            />
            <Textarea
                placeholder="Write your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
                rows={4}
            />
            <Button type="submit">Submit Comment</Button>
         </form>

      </section>

    </article>
  );
}
