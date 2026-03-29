'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

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
      <main className="flex-grow">
        {children}
      </main>
      {footer}
    </div>
  );
}
