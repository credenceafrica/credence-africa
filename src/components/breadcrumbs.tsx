"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const pathsToExclude = ["/"];

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathsToExclude.includes(pathname) || pathname.startsWith('/admin')) {
    return null;
  }

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <li>
          <Link
            href="/"
            className="font-medium text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const label = decodeURIComponent(segment).charAt(0).toUpperCase() + decodeURIComponent(segment).slice(1).replace(/-/g, " ");

          return (
            <li key={href} className="flex items-center gap-x-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {isLast ? (
                <span className="font-medium text-foreground">{label}</span>
              ) : (
                <Link
                  href={href}
                  className="font-medium text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
