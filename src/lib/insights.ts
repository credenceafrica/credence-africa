
import { cache } from "react";
import { collection, getDocs, orderBy, query, where, limit, updateDoc, doc, increment } from "firebase/firestore";
import { firestore } from "@/firebase";

export interface Insight {
    id: string;
    slug: string;
    title: string;
    date: string;
    author: string;
    image: string | null;
    content: string;
    category: string;
    views: number;
    likes: number;
    wordCount: number;
}

function slugify(text: string) {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
}

export const getInsights = cache(async (): Promise<Insight[]> => {
    if (!firestore) {
        console.warn("Firestore is not initialized. Skipping fetching insights. This may be expected during the build process if environment variables are not set.");
        return [];
    }
    try {
        const insightsCollection = collection(firestore, 'insights');
        const insightsQuery = query(insightsCollection, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(insightsQuery);
    
        const firestoreInsights: Insight[] = snapshot.docs.map(doc => {
            const data = doc.data();
            const slug = data.slug || slugify(data.title);
            
            let image = `https://picsum.photos/seed/${slug}/1200/630`;
            if (data.featuredImage) {
                image = data.featuredImage;
            }
            const wordCount = data.content ? data.content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length : 0;

            return {
                id: doc.id,
                slug: slug,
                title: data.title,
                content: data.content,
                author: data.author,
                date: data.createdAt?.toDate().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) || new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
                image: image,
                category: data.category,
                views: data.views || 0,
                likes: data.likes || 0,
                wordCount: wordCount,
            };
        });
        
        return firestoreInsights;

    } catch (error) {
        console.error("Error fetching insights from Firestore:", error);
        return [];
    }
});

export const getInsight = cache(async (slug: string): Promise<Insight | undefined> => {
    if (!firestore) {
        console.warn("Firestore is not initialized. Skipping fetching insight. This may be expected during the build process if environment variables are not set.");
        return undefined;
    }
    try {
        if (!slug) {
            return undefined;
        }
        const insightsCollection = collection(firestore, 'insights');
        const q = query(insightsCollection, where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return undefined;
        }

        const docSnap = snapshot.docs[0];
        const data = docSnap.data();
        
        const insightSlug = data.slug || slugify(data.title);
        let image = `https://picsum.photos/seed/${insightSlug}/1200/630`;
        if (data.featuredImage) {
            image = data.featuredImage;
        }
        const wordCount = data.content ? data.content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length : 0;

        return {
            id: docSnap.id,
            slug: insightSlug,
            title: data.title,
            content: data.content,
            author: data.author,
            date: data.createdAt?.toDate().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }) || new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            image: image,
            category: data.category,
            views: data.views || 0,
            likes: data.likes || 0,
            wordCount: wordCount,
        };
    } catch (error) {
        console.error(`Error fetching single insight with slug "${slug}" from Firestore:`, error);
        return undefined;
    }
});
