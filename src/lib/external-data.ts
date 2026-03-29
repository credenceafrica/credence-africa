import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";
import { engageFirebaseConfig, perspectiveFirebaseConfig, instituteFirebaseConfig } from "@/firebase/config";

export interface ExternalEvent {
    id: string;
    title: string;
    date: string;
    description: string;
    url: string;
    image?: string;
}

export interface ExternalCourse {
    id: string;
    title: string;
    tag: string;
    description: string;
    url: string;
    image?: string;
}

export interface ExternalPublication {
    id: string;
    title: string;
    type: string;
    description: string;
    url: string;
    image?: string;
}

// Initialize individual Firebase instances for each platform to fetch live data
const getEngageDb = () => {
    const apps = getApps();
    const existing = apps.find(a => a.name === 'engage');
    const app = existing || initializeApp(engageFirebaseConfig, 'engage');
    return getFirestore(app);
};

const getInstituteDb = () => {
    const apps = getApps();
    const existing = apps.find(a => a.name === 'institute');
    const app = existing || initializeApp(instituteFirebaseConfig, 'institute');
    return getFirestore(app);
};

const getPerspectiveDb = () => {
    const apps = getApps();
    const existing = apps.find(a => a.name === 'perspective');
    const app = existing || initializeApp(perspectiveFirebaseConfig, 'perspective');
    return getFirestore(app);
};

export async function getUpcomingEvents(): Promise<ExternalEvent[]> {
    try {
        const db = getEngageDb();
        const eventsRef = collection(db, 'users', 'Mg3sDYJiOvb4FN1Woqk8yehdB703', 'events');
        
        // Original simple query to ensure visibility of all published events
        const q = query(
            eventsRef, 
            where('status', '==', 'published'),
            // limit(3)
        );
        
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            return getFallbackEvents();
        }

        const initialData = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.name || 'Untitled Event',
                date: data.startDate || 'Date TBA',
                description: data.description || '',
                url: `https://engage.credence.africa/events/Mg3sDYJiOvb4FN1Woqk8yehdB703/${doc.id}`,
                image: data.thumbnail
            };
        }).sort((a, b) => new Date(b.date || new Date()).getTime() - new Date(a.date || new Date()).getTime())
        .filter((event, index) => index < 3 )

        return initialData;
    } catch (e) {
        console.error("Error fetching Engage events:", e);
        return getFallbackEvents();
    }
}

export async function getFeaturedCourses(): Promise<ExternalCourse[]> {
    try {
        const db = getInstituteDb();
        const programsQuery = query(
            collection(db, 'programs'), 
            limit(3)
        );
        const snapshot = await getDocs(programsQuery);
        if (snapshot.empty) {
            return getFallbackCourses();
        }
        return snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
                id: doc.id,
                title: docData.name,
                description: docData.description,
                tag: docData.category || 'Program',
                url: `https://institute.credence.africa/programs/${doc.id}`,
                image: docData.image || docData.thumbnail || docData.imageUrl
            }
        });
    } catch (e) {
        console.error("Error fetching Institute courses:", e);
        return getFallbackCourses();
    }
}

export async function getRecentPublications(): Promise<ExternalPublication[]> {
    try {
        const db = getPerspectiveDb();
        const insightsQuery = query(
            collection(db, 'insights'),
            limit(3)
        );
        const snapshot = await getDocs(insightsQuery);
        if (snapshot.empty) {
            return getFallbackPublications();
        }
        return snapshot.docs.map(doc => {
            const docData = doc.data();
            return {
                id: doc.id,
                title: docData.title,
                type: docData.type || 'Insight',
                description: docData.content || '',
                url: `https://perspectives.credence.africa/insights/${doc.id}`,
                image: docData.featuredImage
            }
        });
    } catch (e) {
        console.error("Error fetching Perspectives publications:", e);
        return getFallbackPublications();
    }
}

function getFallbackEvents(): ExternalEvent[] {
    return [
        { 
            id: "1", 
            title: "Africa Strategy Summit 2026", 
            date: "May 15, 2026", 
            description: "Convening leaders to shape the future of African enterprise and policy.", 
            url: "https://engage.credence.africa",
            image: "https://picsum.photos/seed/event1/800/450"
        },
        { 
            id: "2", 
            title: "Venture Capital Intensive 2025", 
            date: "June 10, 2025", 
            description: "Deep dive into investment readiness and capital structuring for growth.", 
            url: "https://engage.credence.africa",
            image: "https://picsum.photos/seed/event2/800/450"
        },
        { 
            id: "3", 
            title: "Public Affairs Roundtable 2025", 
            date: "July 22, 2025", 
            description: "Navigating regulatory intelligence and government relations.", 
            url: "https://engage.credence.africa",
            image: "https://picsum.photos/seed/event3/800/450"
        }
    ];
}

function getFallbackCourses(): ExternalCourse[] {
    return [
        { 
            id: "1", 
            title: "Strategic Governance for Boards", 
            tag: "Executive Education", 
            description: "Strengthening decision quality and institutional capacity.", 
            url: "https://institute.credence.africa",
            image: "https://picsum.photos/seed/course1/800/450"
        },
        { 
            id: "2", 
            title: "Blended Finance Masterclass", 
            tag: "Finance", 
            description: "Advanced strategies for catalytic capital and impact investment.", 
            url: "https://institute.credence.africa",
            image: "https://picsum.photos/seed/course2/800/450"
        },
        { 
            id: "3", 
            title: "Regulatory Compliance in Africa", 
            tag: "Legal", 
            description: "Mastering multi-agency compliance in complex jurisdictions.", 
            url: "https://institute.credence.africa",
            image: "https://picsum.photos/seed/course3/800/450"
        }
    ];
}

function getFallbackPublications(): ExternalPublication[] {
    return [
        { 
            id: "african-capital-concentration-vs-gap-reality", 
            title: "The African Capital Concentration vs. Gap Reality", 
            type: "Strategic Briefing", 
            description: "Unpacking the mismatch between available capital and enterprise needs.", 
            url: "https://perspectives.credence.africa/insights/african-capital-concentration-vs-gap-reality",
            image: "https://picsum.photos/seed/pub1/800/450"
        },
        { 
            id: "2", 
            title: "Policy Reform in East Africa", 
            type: "Regulatory Intelligence", 
            description: "Navigating the changing landscape of regional trade policies.", 
            url: "https://perspectives.credence.africa",
            image: "https://picsum.photos/seed/pub2/800/450"
        },
        { 
            id: "3", 
            title: "Investment Trends 2025", 
            type: "Market Analysis", 
            description: "Key sectors attracting capital in the coming year.", 
            url: "https://perspectives.credence.africa",
            image: "https://picsum.photos/seed/pub3/800/450"
        }
    ];
}
