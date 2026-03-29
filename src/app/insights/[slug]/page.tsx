
"use client";

import { useParams } from "next/navigation";
import { getInsight, type Insight } from "@/lib/insights";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Eye, MessageSquare, Share, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { firestore } from "@/firebase";
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc, increment, serverTimestamp, orderBy } from "firebase/firestore";
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{insight.title}</h1>
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
                <PopoverContent className="w-auto p-2">
                    <div className="flex gap-1">
                        <Button variant="outline" size="icon" asChild>
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(insight.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(insight.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href={`https://wa.me/?text=${encodeURIComponent(insight.title + " " + currentUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>WhatsApp</title><path d="M12.061 0C5.425 0 0 5.373 0 12.001c0 2.101.548 4.103 1.547 5.861L0 24l6.335-1.524a11.93 11.93 0 0 0 5.726 1.525C18.698 24.001 24.12 18.628 24.12 12.001S18.697 0 12.061 0zm.001 2.16c5.434 0 9.855 4.382 9.855 9.841 0 5.458-4.42 9.84-9.855 9.84a9.78 9.78 0 0 1-4.987-1.38l-.357-.21-3.704.895.91-3.585-.232-.37C2.694 15.617 2.16 13.845 2.16 12.002c0-5.458 4.42-9.84 9.9-9.84zm4.566 12.285c-.249-.124-1.474-.727-1.703-.808-.229-.081-.396-.124-.562.124-.167.248-.644.808-.79.973-.145.166-.29.186-.539.062-.249-.124-.925-.34-1.92-1.18-.775-.653-1.29-1.46-1.444-1.708-.155-.248-.016-.38.11-.504.111-.11.249-.289.373-.434.125-.145.167-.248.249-.414.083-.167.042-.31-.021-.434-.063-.124-.562-1.353-.77-1.852-.2-.49-.405-.424-.562-.432-.146-.008-.313-.008-.479-.008a.956.956 0 0 0-.687.31c-.229.289-.875.851-.875 2.071 0 1.22.896 2.399 1.01 2.565.115.166 1.745 2.64 4.23 3.72.58.257 1.043.411 1.4.527.538.172.955.147 1.306.09.395-.064 1.22-.5 1.391-.973.172-.473.172-.875.125-1.04-.047-.165-.171-.248-.42-.372z"/></svg>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" onClick={handleCopyLink}>
                            <Copy className="h-4 w-4" />
                        </Button>
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
