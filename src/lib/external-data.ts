import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, query, where, limit, serverTimestamp } from "firebase/firestore";
import { engageFirebaseConfig, perspectiveFirebaseConfig, instituteFirebaseConfig } from "@/firebase/config";

export interface ExternalEvent {
    id: string;
    title: string;
    date: string;
    description: string;
    url: string;
    image?: string;
}

export interface PortfolioEvent {
    id: string;
    title: string;
    month: string;
    day: string;
    time?: string;
    description: string;
    url: string;
    image?: string;
    startDate?: string;
    location?: string;
    category?: string;
}

export const TICKET_CATEGORIES = [
    'attendee',
    'exhibitor',
    'sponsor',
    'corporate',
    'podcast',
    'webinar',
] as const;

export type TicketCategory = typeof TICKET_CATEGORIES[number];

export interface Ticket {
    id: string;
    category: TicketCategory | string;
    name: string;
    price: number;
    quantity: number;
    minBuyLimit: number;
    maxBuyLimit: number;
    startSaleDate?: string;
    endSaleDate?: string;
    features: string[];
}

export interface RegistrationInput {
    name: string;
    email: string;
    phone?: string | null;
    ticketId: string;
    ticketName: string;
    ticketCategory: string;
    interest?: string | null;
    exhibitorCompanyName?: string | null;
    exhibitorDescription?: string | null;
    quantity?: number;
    unitPrice?: number;
    totalAmount?: number;
    currency?: string;
    paystackReference?: string;
}

export interface RegistrationResult {
    id: string;
    ticketNumber: string;
    ticketUrl: string;
}

export interface EventDetail {
    id: string;
    name: string;
    description: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    location?: string;
    thumbnail?: string;
    eventType?: string;
    eventKind?: string;
    virtualLink?: string;
    status?: string;
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

export async function getEventPortfolio(): Promise<PortfolioEvent[]> {
    try {
        const db = getEngageDb();
        const eventsRef = collection(db, 'users', PORTFOLIO_USER_ID, 'events');
        const q = query(eventsRef, where('status', '==', 'published'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) return [];

        const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' });
        const dayFormatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', timeZone: 'UTC' });

        return snapshot.docs
            .map(doc => {
                const data = doc.data();
                const startDate: string | undefined = data.startDate;
                const parsed = startDate ? new Date(startDate) : null;
                const validDate = parsed && !isNaN(parsed.getTime()) ? parsed : null;
                const month = validDate ? monthFormatter.format(validDate).toUpperCase() : 'TBA';
                const day = validDate ? dayFormatter.format(validDate) : '--';

                const time: string | undefined = data.startTime;
                const location: string | undefined = data.location;
                const category: string | undefined = data.eventType;

                return {
                    id: doc.id,
                    title: data.name || 'Untitled Event',
                    month,
                    day,
                    time,
                    description: data.description || '',
                    url: `/services/events/${doc.id}`,
                    image: data.thumbnail,
                    startDate,
                    location,
                    category,
                };
            })
            .sort((a, b) => {
                const aTime = a.startDate ? new Date(a.startDate).getTime() : Number.MAX_SAFE_INTEGER;
                const bTime = b.startDate ? new Date(b.startDate).getTime() : Number.MAX_SAFE_INTEGER;
                return aTime - bTime;
            });
    } catch (e) {
        console.error("Error fetching Engage event portfolio:", e);
        return [];
    }
}

export const PORTFOLIO_USER_ID = 'JqvQkB8nZ4cSIPQHiKdXtwV06uG3';

export async function getEventById(id: string): Promise<EventDetail | null> {
    try {
        const db = getEngageDb();
        const eventRef = doc(db, 'users', PORTFOLIO_USER_ID, 'events', id);
        const snapshot = await getDoc(eventRef);
        if (!snapshot.exists()) return null;
        const data = snapshot.data();
        return {
            id: snapshot.id,
            name: data.name || 'Untitled Event',
            description: data.description || '',
            startDate: data.startDate,
            endDate: data.endDate,
            startTime: data.startTime,
            endTime: data.endTime,
            location: data.location,
            thumbnail: data.thumbnail,
            eventType: data.eventType,
            eventKind: data.eventKind,
            virtualLink: data.virtualLink,
            status: data.status,
        };
    } catch (e) {
        console.error("Error fetching Engage event by id:", e);
        return null;
    }
}

export async function getEventTickets(eventId: string): Promise<Ticket[]> {
    try {
        const db = getEngageDb();
        const ticketsRef = collection(db, 'users', PORTFOLIO_USER_ID, 'events', eventId, 'tickets');
        const snapshot = await getDocs(ticketsRef);
        if (snapshot.empty) return [];
        return snapshot.docs.map(snap => {
            const data = snap.data();
            return {
                id: snap.id,
                category: String(data.category || 'attendee').toLowerCase(),
                name: data.name || 'Ticket',
                price: Number(data.price) || 0,
                quantity: Number(data.quantity) || 0,
                minBuyLimit: Number(data.minBuyLimit) || 1,
                maxBuyLimit: Number(data.maxBuyLimit) || 10,
                startSaleDate: data.startSaleDate,
                endSaleDate: data.endSaleDate,
                features: Array.isArray(data.features) ? data.features : [],
            };
        });
    } catch (e) {
        console.error('Error fetching event tickets:', e);
        return [];
    }
}

export const CREDENCE_ENGAGE_URL = 'https://engage.credence.africa';

function generateTicketNumber(): string {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

export function buildTicketUrl(eventId: string, registrationId: string): string {
    return `${CREDENCE_ENGAGE_URL}/ticket/${PORTFOLIO_USER_ID}/${eventId}/${registrationId}`;
}

export async function createEventRegistration(
    eventId: string,
    input: RegistrationInput
): Promise<RegistrationResult> {
    const db = getEngageDb();
    const registrationsRef = collection(db, 'users', PORTFOLIO_USER_ID, 'events', eventId, 'registrations');
    const newRegRef = doc(registrationsRef);
    const ticketNumber = generateTicketNumber();

    await setDoc(newRegRef, {
        name: input.name,
        email: input.email.toLowerCase().trim(),
        phone: input.phone || null,
        ticketId: input.ticketId,
        ticketName: input.ticketName,
        ticketCategory: input.ticketCategory,
        registrationDate: serverTimestamp(),
        ticketNumber,
        interest: input.interest || null,
        exhibitorCompanyName: input.exhibitorCompanyName || null,
        exhibitorDescription: input.exhibitorDescription || null,
        quantity: input.quantity ?? 1,
        unitPrice: input.unitPrice ?? null,
        totalAmount: input.totalAmount ?? null,
        currency: input.currency ?? null,
        paystackReference: input.paystackReference ?? null,
        attended: false,
    });

    return {
        id: newRegRef.id,
        ticketNumber,
        ticketUrl: buildTicketUrl(eventId, newRegRef.id),
    };
}

export interface RegistrationEmailArgs {
    email: string;
    name: string;
    eventName: string;
    ticketNumber: string;
    eventBannerUrl?: string;
    ticketUrl: string;
    startDate?: string;
    startTime?: string;
}

export async function sendRegistrationEmail(args: RegistrationEmailArgs): Promise<void> {
    try {
        await fetch('/api/send-registration-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: args.email,
                name: args.name,
                eventName: args.eventName,
                ticketNumber: args.ticketNumber,
                eventBannerUrl: args.eventBannerUrl ?? '',
                ticketUrl: args.ticketUrl,
                startDate: args.startDate,
                startTime: args.startTime,
            }),
        });
    } catch (e) {
        console.error('Failed to send registration email:', e);
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
