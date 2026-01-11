
"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation';

export function Footer() {

  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="bg-white text-foreground py-12 mt-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-[70px] w-auto"/>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary hover:underline">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary hover:underline">Services</Link></li>
              <li><Link href="/sectors" className="text-muted-foreground hover:text-primary hover:underline">Sectors</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary hover:underline">Case Studies</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary hover:underline">Insights</Link></li>
              <li><Link href="/consult" className="text-muted-foreground hover:text-primary hover:underline">Book a Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:connect@credence.africa" className="text-muted-foreground hover:text-primary hover:underline">connect@credence.africa</a></li>
              <li><a href="tel:+254719468240" className="text-muted-foreground hover:text-primary hover:underline">+254 719 468 240</a></li>
              <li className="text-muted-foreground">Applewood Adams, Ngong Road, Nairobi</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-foreground/80">Follow Us</h3>
            <div className="flex mt-4 space-x-4 text-muted-foreground">
                <Link href="#" className="hover:text-primary">LinkedIn</Link>
                <Link href="#" className="hover:text-primary">(X)</Link>
                <Link href="#" className="hover:text-primary">Instagram</Link>
            </div>
             <div className="mt-4">
                <Link href="/consult">
                    <Button>
                        Book a Consultation
                    </Button>
                </Link>
             </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
