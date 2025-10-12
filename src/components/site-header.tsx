
import { getInsights } from '@/lib/insights';
import { getServices } from '@/lib/services.tsx';
import { Header } from './header';

// Revalidate every hour
export const revalidate = 3600;

export async function SiteHeader() {
  const insights = await getInsights();
  const services = await getServices();
  return <Header insights={insights} services={services} />;
}

    