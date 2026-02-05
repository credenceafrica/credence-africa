import type { Metadata } from 'next';
import { getInsight } from '@/lib/insights';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  // Create a short description from the content, avoiding HTML tags.
  const description = insight.content.replace(/<[^>]+>/g, '').substring(0, 155) + '...';

  return {
    title: insight.title,
    description: description,
    openGraph: {
      title: insight.title,
      description: description,
      images: insight.image ? [insight.image] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: description,
      images: insight.image ? [insight.image] : [],
    }
  };
}

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
