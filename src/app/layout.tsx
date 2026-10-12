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
import { ConsultationDeepLink } from "@/components/consultation-deep-link";
import { siteUrl } from "@/lib/site-map";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // "./" resolves to each page's own path, without the query string; pages that set a canonical keep theirs.
  alternates: { canonical: "./" },
  title: {
    default: "Credence Africa | Capital, Trade, Policy, Markets",
    template: `%s | Credence Africa`,
  },
  description: "Credence Africa is a pan-African, institution-building enterprise that helps institutions raise capital, enter markets, navigate public affairs, build capability, convene stakeholders, access intelligence and strengthen strategic networks across Africa’s growth markets.",
  keywords: [
    "Strategic Advisory Africa",
    "Capital Raising Africa",
    "Public Affairs Africa",
    "Trade and Investment Africa",
    "Enterprise Architecture Africa",
    "IP Commercialisation Africa",
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
        {/* Google tag (gtag.js). Production only, so local and test traffic stays out of the reports. */}
        {process.env.NODE_ENV === "production" && (
          <>
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

                // Lead tracking: phone, email and WhatsApp link clicks anywhere on the site.
                document.addEventListener('click', function (e) {
                  var a = e.target.closest && e.target.closest('a[href]');
                  if (!a) return;
                  var h = a.getAttribute('href');
                  var method = /^tel:/.test(h) ? 'phone' : /^mailto:[^?]/.test(h) ? 'email' : /wa\\.me\\/\\d/.test(h) ? 'whatsapp' : null;
                  if (method) gtag('event', 'contact_click', { method: method, link_url: h });
                });
              `}
            </Script>
          </>
        )}

        <LayoutWrapper
          header={<SiteHeader />}
          footer={<SiteFooter />}
        >
          {children}
        </LayoutWrapper>
        <Toaster />
        <ConsultationDeepLink />
        <Suspense>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
