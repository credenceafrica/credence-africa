
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
              <Button variant="outline" size="icon" className="bg-transparent border-none">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                <Link 
                  href="/about" 
                  className="text-lg font-medium py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Who We Are
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b">
                    <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">Our Services</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4 pt-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="text-sm py-1.5 text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link 
                          href="/services" 
                          className="text-sm font-bold text-primary py-1.5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sectors" className="border-b">
                    <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">Sectors</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-2 pl-4 pt-2">
                        {sectors.map((sector) => (
                          <Link
                            key={sector.href}
                            href={sector.href}
                            className="text-sm py-1.5 text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sector.name}
                          </Link>
                        ))}
                        <Link 
                          href="/sectors" 
                          className="text-sm font-bold text-primary py-1.5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          All Sectors
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link 
                  href="https://engage.credence.africa" 
                  target="_blank"
                  className="text-lg font-medium py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  href="https://perspectives.credence.africa" 
                  target="_blank"
                  className="text-lg font-medium py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                
                <div className="mt-6">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 text-lg font-bold">
                    <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)}>
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
