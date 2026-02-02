
'use client';

import { usePathname } from 'next/navigation';
import React, { Suspense } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export function LayoutWrapper({ 
    children, 
    header, 
    footer 
}: { 
    children: React.ReactNode,
    header: React.ReactNode,
    footer: React.ReactNode,
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {header}
      <main className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8`}>
        <Suspense>
          <Breadcrumbs />
        </Suspense>
        {children}
      </main>
      {footer}
    </div>
  );
}
