
"use client";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Newspaper, MessagesSquare, FileText } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: <Home className="size-4" /> },
    { href: '/admin/insights', label: 'Insights', icon: <Newspaper className="size-4" /> },
    { href: '/admin/consultations', label: 'Consultations', icon: <MessagesSquare className="size-4" /> },
    { href: '/admin/case-study-requests', label: 'Case Study Requests', icon: <FileText className="size-4" /> },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, router, pathname]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  if (!user && pathname !== '/admin/login') {
    return null;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-50">
            <div className="container mx-auto flex h-20 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/admin">
                        <Logo className="h-14 w-auto" />
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                     {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-2 transition-colors hover:text-primary",
                                (pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))) ? "text-primary font-semibold" : "text-muted-foreground"
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                     <p className="text-sm font-medium text-muted-foreground">Hi, Credence</p>
                     {user && (
                        <Button variant="outline" size="sm" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </header>
        <main className="flex-grow container mx-auto py-8">{children}</main>
    </div>
  );
}
