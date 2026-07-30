
"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { ConsultationDialog } from "./consultation-dialog";
import { usePathname } from 'next/navigation';

export function Footer() {

  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="bg-white text-foreground py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-auto w-full max-w-[180px]"/>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary hover:underline">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary hover:underline">Services</Link></li>
              <li><Link href="/sectors" className="text-muted-foreground hover:text-primary hover:underline">Sectors</Link></li>
              <li><Link href="/who-we-work-with" className="text-muted-foreground hover:text-primary hover:underline">Who We Work With</Link></li>
              <li><Link href="https://engage.credence.africa" className="text-muted-foreground hover:text-primary hover:underline">Events</Link></li>
              <li><Link href="https://perspectives.credence.africa" className="text-muted-foreground hover:text-primary hover:underline">Insights</Link></li>
              <li><Link href="/consult" className="text-muted-foreground hover:text-primary hover:underline">Book a Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:connect@credence.africa" className="text-muted-foreground hover:text-primary hover:underline">connect@credence.africa</a></li>
              <li><a href="tel:+254719468240" className="text-muted-foreground hover:text-primary hover:underline">+254 719 468 240</a></li>
              <li><a href="https://maps.app.goo.gl/EeS5D837UZnSDsEZ7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">Applewood Adams, Ngong Road, Nairobi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Follow Us</h3>
            <div className="flex mt-4 space-x-4 text-muted-foreground">
                <Link href="https://www.facebook.com/share/1Aw6gyX8ZH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</Link>
                <Link href="https://x.com/CredenceAfrica" target="_blank" rel="noopener noreferrer" className="hover:text-primary">X</Link>
                <Link href="https://ke.linkedin.com/company/credence-africalimited" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</Link>
            </div>
             <div className="mt-4">
                <ConsultationDialog>
                    Book a Consultation
                </ConsultationDialog>
             </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-primary hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary hover:underline">Terms and Conditions</Link>
            <Link href="/refund-policy" className="hover:text-primary hover:underline">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
