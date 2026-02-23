
import { NextResponse } from 'next/server';
import { getUpcomingEvents, getFeaturedCourses, getRecentPublications } from '@/lib/external-data';

/**
 * Next.js Route Handler to aggregate live data from external Credence platforms.
 */
export async function GET() {
    try {
        const [events, courses, publications] = await Promise.all([
            getUpcomingEvents(),
            getFeaturedCourses(),
            getRecentPublications()
        ]);

        return NextResponse.json({
            events,
            courses,
            publications,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch live data' }, { status: 500 });
    }
}
