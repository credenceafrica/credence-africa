'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { FloatingActions } from './floating-actions';

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

  // `site` scopes the design's hover and reveal rules; the header sits absolutely over each hero.
  return (
    <div className="site relative flex min-h-screen flex-col">
      {header}
      <main className="flex-grow">
        {children}
      </main>
      {footer}
      <FloatingActions />
    </div>
  );
}
