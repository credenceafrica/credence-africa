
/**
 * @fileOverview Library for fetching live data from external Credence platforms.
 */

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

const REVALIDATE_TIME = 3600; // 1 hour

export async function getUpcomingEvents(): Promise<ExternalEvent[]> {
    try {
        // Attempt to fetch from the live API endpoint on the engage platform
        const res = await fetch('https://engage.credence.africa/api/events', { 
            next: { revalidate: REVALIDATE_TIME },
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('External API unreachable');
        return await res.json();
    } catch (e) {
        // Return the latest known structure with specific fallback URLs if live fetch fails
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
}

export async function getFeaturedCourses(): Promise<ExternalCourse[]> {
    try {
        const res = await fetch('https://institute.credence.africa/api/courses', { 
            next: { revalidate: REVALIDATE_TIME },
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('External API unreachable');
        return await res.json();
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
        return await res.json();
    } catch (e) {
        return [
            { 
                id: '1', 
                title: "The Blended Finance Playbook for Social Ventures", 
                type: "Strategic Briefing", 
                description: "Exploring how social enterprises can leverage catalytic capital for sustainable scale.", 
                url: "https://perspectives.credence.africa/insights/blended-finance-playbook" 
            },
            { 
                id: '2', 
                title: "AfCFTA & The Digital Economy: Navigating New Trade Rules", 
                type: "Regulatory Intelligence", 
                description: "A comprehensive look at emerging trade protocols and their impact on digital entrepreneurs.", 
                url: "https://perspectives.credence.africa/insights/afcfta-digital-economy" 
            }
        ];
    }
}
