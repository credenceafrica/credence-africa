
import { notFound } from "next/navigation";
import { getInsight, getInsights, type Insight } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface InsightPageProps {
  params: {
    slug: string;
  };
}

// This function generates the static pages at build time
export async function generateStaticParams() {
    const insights = await getInsights();
    return insights.map((insight) => ({
      slug: insight.slug,
    }));
}

export async function generateMetadata({ params }: InsightPageProps) {
    const insight = await getInsight(params.slug);
    if (!insight) {
      return {
        title: "Insight Not Found",
      };
    }
    return {
      title: insight.title,
      description: insight.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    };
  }

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = await getInsight(params.slug);
  const allInsights = await getInsights();

  if (!insight) {
    notFound();
  }

  const otherInsights = allInsights.filter(i => i.id !== insight.id).slice(0, 3);

  return (
    <article className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">{insight.date} | {insight.category} | By {insight.author}</p>
          <h1 className="text-4xl font-bold mt-2">{insight.title}</h1>
        </header>
        
        {insight.image && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image 
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  data-ai-hint="article header"
              />
          </div>
        )}

        <div
          className="prose lg:prose-xl max-w-none mx-auto whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
      </div>

      {otherInsights.length > 0 && (
        <aside className="mt-16 pt-12 border-t">
          <h2 className="text-3xl font-bold text-center mb-10">Interesting</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {otherInsights.map((otherInsight) => (
              <div key={otherInsight.id} className="flex flex-col">
                <h3 className="font-semibold text-lg">{otherInsight.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{otherInsight.date}</p>
                <Button asChild variant="link" className="p-0 mt-auto self-start">
                    <Link href={`/insights/${otherInsight.slug}`}>Read More</Link>
                </Button>
              </div>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
