import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { ScrollToTop } from "@/components/scroll-to-top";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Credence Africa | Capital Raising, Trade & Growth, Public Affairs, Executive Education, Events, Intelligence & Networks",
    template: `%s | Credence Africa`,
  },
  description: "Credence Africa is a pan African institution building enterprise helping institutions raise capital, enter markets, navigate public affairs, build capability, convene stakeholders, access intelligence, and strengthen strategic networks across Africa’s growth markets.",
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
        suppressHydrationWarning
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TTZHMWM5F6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TTZHMWM5F6');
          `}
        </Script>
        
        <LayoutWrapper
          header={<SiteHeader />}
          footer={<SiteFooter />}
        >
          {children}
        </LayoutWrapper>
        <Toaster />
        <Suspense>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
