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

// Initialize Engage Firebase instance for live event fetching
const engageApp = initializeApp(engageFirebaseConfig, 'engage');
const engageDb = getFirestore(engageApp);

const instituteApp = initializeApp(instituteFirebaseConfig, 'institute');
const instituteDb = getFirestore(instituteApp);

const perspectiveApp = initializeApp(perspectiveFirebaseConfig, 'perspective');
const perspectiveDb = getFirestore(perspectiveApp);

const REVALIDATE_TIME = 3600; // 1 hour

export async function getUpcomingEvents(): Promise<ExternalEvent[]> {
    try {
        const eventsRef = collection(engageDb, 'users', 'Mg3sDYJiOvb4FN1Woqk8yehdB703', 'events');
        
        const q = query(
            eventsRef, 
            where('status', '==', 'published'),
            orderBy('startDate', 'asc'), 
            limit(3)
        );
        
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            console.log("No published events found in Engage Firestore.");
            return [];
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
        return [];
    }
}

export async function getFeaturedCourses(): Promise<ExternalCourse[]> {
    try {
        const programsQuery = query(
            collection(instituteDb, 'programs'), 
            limit(3)
        );
        const snapshot = await getDocs(programsQuery);
        if (snapshot.empty) {
            return []
        }
        return snapshot.docs.map((doc) => {
            const docData = doc.data();
            return {
                id: doc.id,
                title: docData.name,
                description: docData.description,
                tag: docData.name,
                url: `https://institute.credence.africa/programs/${doc.id}`
            }
        })
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getRecentPublications(): Promise<ExternalPublication[]> {
    try {
        const insightsQuery = query(
            collection(perspectiveDb, 'insights'),
            limit(3)
        )
        const snapshot = await getDocs(insightsQuery);
        if (snapshot.empty) {
            return []
        }
        return snapshot.docs.map(doc => {
            const docData = doc.data();
            return {
                description: docData.content,
                id: doc.id,
                title: docData.title,
                type: docData.type,
                url: `https://perspectives.credence.africa/insights/${doc.id}`
            }
        })
    } catch (e) {
        return [];
    }
}
