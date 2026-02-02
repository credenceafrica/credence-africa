
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export interface Insight {
    id: string;
    slug: string;
    title: string;
    date: string;
    author: string;
    image: string | null;
    content: string;
    category: string;
}

export const staticInsights: Insight[] = [
    { 
        id: "navigating-east-africas-evolving-tax-landscape",
        slug: "navigating-east-africas-evolving-tax-landscape",
        title: "Navigating East Africa’s Evolving Tax Landscape", 
        date: "28 May 2025", 
        author: "Credence Africa",
        category: "Tax",
        image: "https://picsum.photos/seed/tax-landscape/1200/630",
        content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<h2>Understanding the Changes</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<h3>Key consideration 1: Digital Services Tax</h3>
<p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p>

<h3>Key consideration 2: Transfer Pricing</h3>
<p>Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.</p>

<h2>Strategies for Compliance</h2>
<p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>
` 
    },
    { 
        id: "ip-monetization-strategies-for-african-creators",
        slug: "ip-monetization-strategies-for-african-creators",
        title: "IP Monetization Strategies for African Creators", 
        date: "28 May 2025",
        author: "Credence Africa",
        category: "Intellectual Property",
        image: "https://picsum.photos/seed/ip-monetization/1200/630",
        content: `
<p>The digital era has opened up unprecedented opportunities for African creators to monetize their intellectual property (IP). From musicians to filmmakers, designers to writers, the potential to generate revenue from creative works is immense. This article explores various strategies for IP monetization tailored for the African context.</p>

<h2>Leveraging Copyrights</h2>
<p>Copyright is the bedrock of IP for creators. It grants exclusive rights to reproduce, distribute, perform, and display creative works. To monetize copyrights, creators can:</p>
<ul>
    <li><strong>Licensing:</strong> Grant permission to others to use their work in exchange for royalties. This can apply to music in films, images in advertising, or text in publications.</li>
    - <strong>Direct Sales:</strong> Sell digital or physical copies of their work directly to consumers through platforms like Bandcamp, Etsy, or their own websites.</li>
    - <strong>Streaming Revenue:</strong> Earn money from platforms like YouTube, Spotify, and Apple Music based on the number of streams or views.</li>
</ul>

<h2>The Power of Trademarks</h2>
<p>A trademark protects brand names and logos. For creators who have built a strong brand, trademarks are crucial for monetization:</p>
<ul>
    <li><strong>Merchandising:</strong> Sell branded products such as t-shirts, mugs, and posters.</li>
    - <strong>Brand Collaborations:</strong> Partner with other brands for sponsored content or co-branded products.</li>
</ul>

<h2>Exploring Patents for Innovators</h2>
<p>For creators in the tech and innovation space, patents can be a powerful tool. A patent protects an invention from being made, sold, or used by others for a certain period.</p>

<h2>Conclusion</h2>
<p>Successfully monetizing IP in Africa requires a strategic approach that combines legal protection with savvy business practices. By understanding and leveraging the different forms of IP, creators can build sustainable careers and contribute to the growth of the continent's creative economy.</p>
`
    },
    { 
        id: "blended-finance-unlocking-capital-for-climate-resilience",
        slug: "blended-finance-unlocking-capital-for-climate-resilience",
        title: "Blended Finance: Unlocking Capital for Climate Resilience", 
        date: "25 May 2025",
        author: "Credence Africa",
        category: "Finance",
        image: "https://picsum.photos/seed/blended-finance/1200/630",
        content: `
<p>Blended finance is emerging as a powerful tool to mobilize capital for climate resilience projects in Africa. By combining concessional public funds with commercial private investment, blended finance can de-risk projects and attract capital that would otherwise not be available.</p>

<h2>How it Works</h2>
<p>Blended finance structures typically involve a public or philanthropic investor providing a "first-loss" guarantee or a lower-return tranche of capital, which makes the investment more attractive for commercial investors who are seeking market-rate returns.</p>

<h2>Case Studies in Africa</h2>
<p>Several successful blended finance initiatives are already making an impact on the continent. For example, the African Development Bank's 'Green Bond' program has mobilized millions for renewable energy projects.</p>

<h2>The Path Forward</h2>
<p>To scale up blended finance for climate resilience, there is a need for greater collaboration between governments, development finance institutions, and the private sector. Standardized frameworks and greater transparency will be key to building investor confidence.</p>
`
    },
    { 
        id: "diaspora-investment-and-the-rise-of-legacy-structuring",
        slug: "diaspora-investment-and-the-rise-of-legacy-structuring",
        title: "Diaspora Investment and the Rise of Legacy Structuring", 
        date: "25 May 2025",
        author: "Credence Africa",
        category: "Investment",
        image: "https://picsum.photos/seed/diaspora-investment/1200/630",
        content: `
<p>The African diaspora is an increasingly powerful force for economic development on the continent. Beyond remittances, diaspora members are seeking to make long-term investments that create a lasting legacy. This has led to the rise of 'legacy structuring' – a set of financial and legal strategies designed to ensure that investments are sustainable and impactful for generations to come.</p>

<h2>Key Components of Legacy Structuring</h2>
<ul>
    <li><strong>Trusts and Foundations:</strong> Establishing legal structures to manage assets and distribute proceeds in line with the investor's long-term vision.</li>
    <li><strong>Endowments:</strong> Creating permanent funds where the principal is invested and only the income is used for projects, ensuring perpetual support.</li>
    <li><strong>Intergenerational Wealth Transfer:</strong> Planning for the smooth transition of assets and businesses to the next generation.</li>
</ul>
`
    },
    { 
        id: "the-real-cost-of-compliance-in-2025",
        slug: "the-real-cost-of-compliance-in-2025",
        title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", 
        date: "25 May 2025",
        author: "Credence Africa",
        category: "Compliance",
        image: "https://picsum.photos/seed/compliance-cost/1200/630",
        content: `
<p>As African economies mature, regulatory frameworks are becoming more complex. For businesses, the cost of compliance is no longer just a line item – it's a strategic issue that can impact profitability and reputation. In 2025, regulators are focusing on several key areas.</p>

<h2>Key Areas of Focus</h2>
<ul>
    <li><strong>Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF):</strong> Financial institutions are under increasing pressure to implement robust AML/CTF systems.</li>
    <li><strong>Data Privacy and Protection:</strong> With the rise of the digital economy, regulators are enforcing stricter rules on how personal data is collected, stored, and used.</li>
    <li><strong>Environmental, Social, and Governance (ESG):</strong> Investors and regulators alike are demanding greater transparency and accountability on ESG performance.</li>
</ul>
<p>Navigating this landscape requires a proactive and strategic approach to compliance. Businesses that invest in robust compliance frameworks will be better positioned to mitigate risks and seize opportunities in Africa's evolving regulatory environment.</p>
`
    },
];

function slugify(text: string) {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
}

export async function getInsights(): Promise<Insight[]> {
    try {
        const insightsCollection = collection(db, 'insights');
        const insightsQuery = query(insightsCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(insightsQuery);
    
        if (snapshot.empty) {
            return staticInsights;
        }

        const insights: Insight[] = snapshot.docs.map(doc => {
            const data = doc.data();
            const slug = slugify(data.title);
            
            let image = `https://picsum.photos/seed/${slug}/1200/630`;
            if (data.featuredImage) {
                image = data.featuredImage;
            } else if (staticInsights.find(i => i.slug === slug)) {
                image = staticInsights.find(i => i.slug === slug)!.image;
            }

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
            };
        });

        // If there are no dynamic insights, return the static ones.
        // Otherwise, return the dynamic ones.
        if (insights.length === 0) {
            return staticInsights;
        }
      
        return insights;
    } catch (error) {
        console.error("Error fetching insights from Firestore:", error);
        // Fallback to static insights if Firestore fails
        return staticInsights;
    }
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
    const allInsights = await getInsights();
    return allInsights.find(insight => insight.slug === slug);
}
