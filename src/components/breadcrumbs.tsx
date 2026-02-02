"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Exclude home from breadcrumbs
const pathsToExclude = ["/"];

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathsToExclude.includes(pathname)) {
    return null;
  }

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    return (
      <React.Fragment key={href}>
        <li className="flex items-center">
          {!isLast ? (
            <Link
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {label}
            </Link>
          ) : (
            <span className="text-sm font-medium text-foreground">
              {label}
            </span>
          )}
          {!isLast && (
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          )}
        </li>
      </React.Fragment>
    );
  });

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
        </li>
        {pathSegments.length > 0 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
        {breadcrumbItems}
      </ol>
    </nav>
  );
}
