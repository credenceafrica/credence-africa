
"use client";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from '@/components/ui/sidebar';
import { Home, Newspaper, MessagesSquare, FileText } from 'lucide-react';

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: <Home /> },
    { href: '/admin/insights', label: 'Insights', icon: <Newspaper /> },
    { href: '/admin/consultations', label: 'Consultations', icon: <MessagesSquare /> },
    { href: '/admin/case-study-requests', label: 'Case Study Requests', icon: <FileText /> },
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
    <SidebarProvider>
        <div className="min-h-screen flex">
            <Sidebar side="left" collapsible="icon">
                <SidebarHeader>
                    <div className="flex items-center justify-between">
                         <h1 className="text-xl font-bold text-primary-foreground group-data-[collapsible=icon]:hidden">Admin</h1>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {navItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <SidebarMenuButton tooltip={item.label} isActive={pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <div className="flex-grow flex flex-col">
                <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                    {user && (
                    <Button variant="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                    )}
                </header>
                <main className="flex-grow p-8">{children}</main>
            </div>
        </div>
    </SidebarProvider>
  );
}
