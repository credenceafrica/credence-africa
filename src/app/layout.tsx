import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LayoutWrapper } from "@/components/layout-wrapper";

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
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <LayoutWrapper
          header={<SiteHeader />}
          footer={<SiteFooter />}
        >
          {children}
        </LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
