
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { engageFirebaseConfig, perspectiveFirebaseConfig, instituteFirebaseConfig } from "@/firebase/config";

export interface ExternalEvent {
    id: string;
    title: string;
    date: string;
    description: string;
    url: string;
}

export interface ExternalCourse {
    id: string;
    title: string;
    tag: string;
    description: string;
    url: string;
}

export interface ExternalPublication {
    id: string;
    title: string;
    type: string;
    description: string;
    url: string;
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
        
        const q = query(
            eventsRef, 
            where('status', '==', 'published'),
            orderBy('startDate', 'asc'), 
            limit(3)
        );
        
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            return getFallbackEvents();
        }

        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.name || 'Untitled Event',
                date: data.startDate || 'Date TBA',
                description: data.description || '',
                url: `https://engage.credence.africa/events/${doc.id}`
            };
        });
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
                url: `https://institute.credence.africa/programs/${doc.id}`
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
            orderBy('createdAt', 'desc'),
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
                url: `https://perspectives.credence.africa/insights/${doc.id}`
            }
        });
    } catch (e) {
        console.error("Error fetching Perspectives publications:", e);
        return getFallbackPublications();
    }
}

// Fallback data for robust UI
function getFallbackEvents(): ExternalEvent[] {
    return [
        { id: "1", title: "Africa Strategy Summit 2024", date: "May 15, 2024", description: "Convening leaders to shape the future of African enterprise and policy.", url: "https://engage.credence.africa" },
        { id: "2", title: "Venture Capital Intensive", date: "June 10, 2024", description: "Deep dive into investment readiness and capital structuring for growth.", url: "https://engage.credence.africa" },
        { id: "3", title: "Public Affairs Roundtable", date: "July 22, 2024", description: "Navigating regulatory intelligence and government relations.", url: "https://engage.credence.africa" }
    ];
}

function getFallbackCourses(): ExternalCourse[] {
    return [
        { id: "1", title: "Strategic Governance for Boards", tag: "Executive Education", description: "Strengthening decision quality and institutional capacity.", url: "https://institute.credence.africa" },
        { id: "2", title: "Blended Finance Masterclass", tag: "Finance", description: "Advanced strategies for catalytic capital and impact investment.", url: "https://institute.credence.africa" },
        { id: "3", title: "Regulatory Compliance in Africa", tag: "Legal", description: "Mastering multi-agency compliance in complex jurisdictions.", url: "https://institute.credence.africa" }
    ];
}

function getFallbackPublications(): ExternalPublication[] {
    return [
        { id: "7041CC9RVzLexpj6tNQB", title: "Why Timing Is the Most Underrated Variable in Blended Finance", type: "Strategic Briefing", description: "An analysis of entry and exit timing in catalytic finance models.", url: "https://perspectives.credence.africa/insights/7041CC9RVzLexpj6tNQB" },
        { id: "african-capital-concentration-vs-gap-reality", title: "The African Capital Concentration vs. Gap Reality", type: "Regulatory Intelligence", description: "Unpacking the mismatch between available capital and enterprise needs.", url: "https://perspectives.credence.africa/insights/african-capital-concentration-vs-gap-reality" },
        { id: "understanding-why-african-ventures-face-funding-challenges", title: "Understanding Why African Ventures Face Funding Challenges", type: "Policy Brief", description: "A research-led look at the structural barriers to scaling ventures.", url: "https://perspectives.credence.africa/insights/understanding-why-african-ventures-face-funding-challenges" }
    ];
}
