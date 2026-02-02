import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Credence Africa | Strategic Advisory for Africa's Next Growth Frontier",
    template: `%s | Credence Africa`,
  },
  description: "Smart insights. Practical execution. Structures that scale in complexity and across borders. We are a pan-African strategic advisory firm.",
  keywords: [
    "Strategic Advisory Africa",
    "Capital Raising Africa",
    "Public Affairs Africa",
    "Trade and Investment Africa",
    "Enterprise Architecture Africa",
    "IP Commercialization Africa",
    "Blended Finance",
    "Social Enterprise Africa",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8`}>
            <Suspense>
              <Breadcrumbs />
            </Suspense>
            {children}
          </main>
          <Suspense>
            <SiteFooter />
          </Suspense>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
