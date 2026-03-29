
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, Phone, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import type { Insight } from "@/lib/insights";
import type { Service } from "@/lib/services";

const sectors = [
    { name: "Agriculture & Food", href: "/sectors/agriculture-food" },
    { name: "Creative & Digital Economy", href: "/sectors/creative-digital-economy" },
    { name: "Education & Skills", href: "/sectors/education-skills-development" },
    { name: "Faith-Based Organizations", href: "/sectors/faith-based-organizations" },
    { name: "Healthcare & Wellness", href: "/sectors/healthcare-wellness" },
    { name: "Hospitality & Tourism", href: "/sectors/hospitality-tourism" },
    { name: "Non-Profit Sector", href: "/sectors/non-profit-sector" },
    { name: "Public Sector", href: "/sectors/public-sector-governance" },
    { name: "SMEs & Startups", href: "/sectors/smes-startups" },
    { name: "Tech & Digital", href: "/sectors/technology-digital-economy" },
    { name: "Cooperatives", href: "/sectors/cooperatives-social-economy" },
    { name: "Mobility & Logistics", href: "/sectors/mobility-logistics" },
];

export function Header({ insights, services }: { insights: Insight[], services: Service[] }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  if (!mounted) {
    return (
      <header className="w-full border-b bg-white h-24">
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Logo className="h-16 w-auto" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white border-b shadow-sm h-24 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Logo className="h-16 w-auto" />
        </Link>
        
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/about"
                    className={cn(
                      "text-sm font-medium transition-all relative py-2 px-4 group text-foreground hover:text-primary",
                      pathname === '/about' && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    )}
                  >
                    Who We Are
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent h-auto py-2 px-4 text-foreground hover:text-primary data-[state=open]:text-primary"
                >
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            target={service.href.startsWith('http') ? "_blank" : undefined}
                            rel={service.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-bold leading-none flex items-center gap-2">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-full border-t pt-2">
                        <NavigationMenuLink asChild>
                            <Link href="/services" className="flex items-center justify-center text-sm font-bold text-primary hover:underline p-2">
                                View All Services <ChevronRight className="size-4" />
                            </Link>
                        </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent h-auto py-2 px-4 text-foreground hover:text-primary data-[state=open]:text-primary"
                >
                  Sectors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                   <ul className="grid w-[400px] gap-2 p-4 md:w-[600px] md:grid-cols-3">
                    {sectors.map((sector) => (
                      <li key={sector.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sector.href}
                            className="block select-none rounded-md p-2 text-xs font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {sector.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-full border-t pt-2">
                        <NavigationMenuLink asChild>
                            <Link href="/sectors" className="flex items-center justify-center text-sm font-bold text-primary hover:underline p-2">
                                All Sectors <ChevronRight className="size-4" />
                            </Link>
                        </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="https://engage.credence.africa"
                    target="_blank"
                    className="text-sm font-medium transition-all relative py-2 px-4 group text-foreground hover:text-primary"
                  >
                    Events
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="https://perspectives.credence.africa"
                    target="_blank"
                    className="text-sm font-medium transition-all relative py-2 px-4 group text-foreground hover:text-primary"
                  >
                    Insights
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-6 shadow-md">
            <Link href="/consult" className="flex items-center gap-2">
              Book a Consultation <Phone className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 text-base font-medium mt-8">
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link>
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
                <Link href="/sectors" onClick={() => setIsMobileMenuOpen(false)}>Sectors</Link>
                <Link href="https://engage.credence.africa" target="_blank">Events</Link>
                <Link href="https://perspectives.credence.africa" target="_blank">Insights</Link>
                <hr />
                <Link
                  href="/consult"
                  className="flex items-center gap-2 text-primary font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Consultation <Phone className="size-4" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
