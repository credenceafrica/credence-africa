/**
 * @fileOverview Library for fetching live data from external Credence platforms.
 */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { engageFirebaseConfig } from "@/firebase/config";

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

// Initialize Engage Firebase instance for live event fetching
const engageApp = !getApps().find(app => app.name === 'engage')
    ? initializeApp(engageFirebaseConfig, 'engage')
    : getApp('engage');
const engageDb = getFirestore(engageApp);

const REVALIDATE_TIME = 3600; // 1 hour

/**
 * Fetches live events from the Engage Firestore database.
 * Path: users/Mg3sDYJiOvb4FN1Woqk8yehdB703/events
 */
export async function getUpcomingEvents(): Promise<ExternalEvent[]> {
    try {
        const eventsRef = collection(engageDb, 'users', 'Mg3sDYJiOvb4FN1Woqk8yehdB703', 'events');
        // Query for published events
        const q = query(
            eventsRef, 
            where('status', '==', 'published'),
            orderBy('startDate', 'asc'), 
            limit(6)
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
        console.error("Error fetching Engage events from Firestore:", e);
        return getFallbackEvents();
    }
}

function getFallbackEvents(): ExternalEvent[] {
    return [
        { 
            id: '1', 
            title: "Strategic Leadership Forum", 
            date: "Coming Soon", 
            description: "Design and delivery of institutional strategies in complex African markets.", 
            url: "https://engage.credence.africa/events/strategic-leadership-forum" 
        },
        { 
            id: '2', 
            title: "Capital Markets Briefing", 
            date: "Quarterly", 
            description: "Analysis of capital flows, investor mandates, and blended finance models.", 
            url: "https://engage.credence.africa/events/capital-markets-briefing" 
        },
        { 
            id: '3', 
            title: "The Credence Convening", 
            date: "Networking", 
            description: "Bringing together decision-makers to enable relationship formation and insight exchange.", 
            url: "https://engage.credence.africa/events/credence-convening" 
        }
    ];
}

export async function getFeaturedCourses(): Promise<ExternalCourse[]> {
    try {
        const res = await fetch('https://institute.credence.africa/api/courses', { 
            next: { revalidate: REVALIDATE_TIME },
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('External API unreachable');
        const data = await res.json();
        return data.map((item: any) => ({
            ...item,
            url: item.url.startsWith('http') ? item.url : `https://institute.credence.africa${item.url}`
        }));
    } catch (e) {
        return [
            { 
                id: '1', 
                title: "Governance & Decision Quality", 
                tag: "Executive Program", 
                description: "Strengthening institutional capacity and governance maturity for senior leaders.", 
                url: "https://institute.credence.africa/programs/governance-decision-quality" 
            },
            { 
                id: '2', 
                title: "African Market Strategy", 
                tag: "Professional Track", 
                description: "Practical frameworks for executing growth across African jurisdictions.", 
                url: "https://institute.credence.africa/programs/african-market-strategy" 
            },
            { 
                id: '3', 
                title: "Compliance & Risk Mgmt", 
                tag: "Certificate", 
                description: "Navigating multi-agency compliance and cross-border regulatory risk.", 
                url: "https://institute.credence.africa/programs/compliance-risk-management" 
            }
        ];
    }
}

export async function getRecentPublications(): Promise<ExternalPublication[]> {
    try {
        const res = await fetch('https://perspectives.credence.africa/api/insights', { 
            next: { revalidate: REVALIDATE_TIME },
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('External API unreachable');
        const data = await res.json();
        
        return data.slice(0, 3).map((item: any) => ({
            ...item,
            url: `https://perspectives.credence.africa/insights/${item.id}`
        }));
    } catch (e) {
        return [
            { 
                id: '7041CC9RVzLexpj6tNQB', 
                title: "Why Timing Is the Most Underrated Variable in Blended Finance", 
                type: "Strategic Briefing", 
                description: "There is a version of blended finance that sounds very appealing in every pitch deck: grants absorb early losses, concessional loans reduce the cost of capital and commercial investors follow once risk is acceptably low...", 
                url: "https://perspectives.credence.africa/insights/7041CC9RVzLexpj6tNQB" 
            },
            { 
                id: 'african-capital-concentration-vs-gap-reality', 
                title: "The African Capital Concentration vs. Gap Reality", 
                type: "Regulatory Intelligence", 
                description: "African startups raised $3.1 billion in 2025 up from $2.2 billion recorded in 2024. Kenya overtook Nigeria as Africa's top investment destination. Debt financing now represents 45% of total funding...", 
                url: "https://perspectives.credence.africa/insights/african-capital-concentration-vs-gap-reality" 
            },
            { 
                id: 'understanding-why-african-ventures-face-funding-challenges', 
                title: "Understanding Why African Ventures Face Funding Challenges", 
                type: "Policy Brief", 
                description: "The African startup ecosystem has shown resilience. Although funding declined to $2.2 billion in 2024, the ecosystem is showing growth. In 2025, funding went up to approximately $3.1 billion...", 
                url: "https://perspectives.credence.africa/insights/understanding-why-african-ventures-face-funding-challenges" 
            }
        ];
    }
}
