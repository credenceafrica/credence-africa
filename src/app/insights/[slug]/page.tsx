
"use client";

import { useParams } from "next/navigation";
import { getInsight, type Insight } from "@/lib/insights";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Eye, MessageSquare, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { firestore } from "@/firebase";
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc, increment, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Comment {
    id: string;
    author: string;
    text: string;
    createdAt: any;
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
  const [views, setViews] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
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
            const insightRef = doc(firestore, "insights", insightData.id);
            await updateDoc(insightRef, { views: increment(1) });
            setViews((insightData.views || 0) + 1);
        } catch (e) {
            console.error("Failed to increment view count", e);
            setViews(insightData.views || 0);
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

  useEffect(() => {
    if (!insight) return;

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


  const handleLike = async () => {
    if (!insight || !slug) return;
    
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
    if (!insight || !newComment.trim()) return;

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

  if (loading) {
    return <div className="text-center py-24">Loading insight...</div>;
  }

  if (!insight) {
    return <div className="text-center py-24">Insight not found.</div>;
  }
  
  return (
    <article className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">{insight.date} | {insight.category} | By {insight.author}</p>
          <h1 className="text-4xl font-bold mt-2">{insight.title}</h1>
           <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
                <span className="flex items-center gap-1"><Eye className="size-4" /> {views} views</span>
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

        <div className="mt-12 flex justify-center gap-4">
            <Button onClick={handleLike} variant={hasLiked ? "secondary" : "outline"}>
                <Heart className={`mr-2 h-5 w-5 ${hasLiked ? 'text-red-500 fill-current' : ''}`} />
                {hasLiked ? 'Unlike' : 'Like'} ({likes})
            </Button>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <Share className="mr-2 h-5 w-5" />
                        Share
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                    <div className="grid gap-2">
                        <div className="space-y-2 text-center">
                            <h4 className="font-medium leading-none">Share Insight</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button variant="outline" asChild>
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(insight.title)}`} target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                 <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(insight.title)}`} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </Button>
                            <Button variant="outline" onClick={handleCopyLink}>
                                Copy Link
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
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
