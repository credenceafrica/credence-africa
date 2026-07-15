
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
import { ConsultationDialog } from "./consultation-dialog";
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
import React from "react";
import type { Insight } from "@/lib/insights";
import type { Service } from "@/lib/services";
import { audiences } from "@/lib/audiences";

const sectors = [
    { name: "Agribusiness", href: "/sectors/agribusiness" },
    { name: "Blue Economy", href: "/sectors/blue-economy" },
    { name: "Creative Economy", href: "/sectors/creative-economy" },
    { name: "Financial Services", href: "/sectors/financial-services" },
    { name: "Green Economy", href: "/sectors/green-economy" },
    { name: "Healthcare & Wellness", href: "/sectors/healthcare-wellness" },
    { name: "Mobility, Transport & Logistics", href: "/sectors/mobility-transport-logistics" },
    { name: "Skills & Workforce Development", href: "/sectors/skills-workforce-development" },
    { name: "Technology, AI & Digital Economy", href: "/sectors/technology-ai-digital-economy" },
    { name: "Trade, Infrastructure & Industrial Development", href: "/sectors/trade-infrastructure-industrial-development" },
];

// Header services dropdown, explicit columns.
// Left column: Capital Raising, Public Affairs, Trade & Growth, Research.
// Right column: Credible Perspectives, Credence Engage, Credence Institute.
const serviceLeftColumnIds = ["capital", "public-affairs", "trade", "research"];
const serviceRightColumnIds = ["perspectives", "events", "institute"];

export function Header({ insights, services }: { insights: Insight[], services: Service[] }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isAdminPage = pathname.startsWith('/admin');

  const pickServices = (ids: string[]) =>
    ids.map((id) => services.find((s) => s.id === id)).filter(Boolean) as Service[];
  const leftServices = pickServices(serviceLeftColumnIds);
  const rightServices = pickServices(serviceRightColumnIds);
  const mobileServices = [...leftServices, ...rightServices];

  const isNavActive = (href: string) =>
    !href.startsWith("http") && (pathname === href || pathname.startsWith(href + "/"));

  // One shared class set for every top-level nav item (plain links AND dropdown triggers) so
  // they share an exact height, baseline and hover/active treatment. The underline is a
  // scale-x transform (no layout shift, no stray slivers) shown on hover, on an open dropdown,
  // or when the section is active.
  const navItemClass = (active = false) =>
    cn(
      "group relative inline-flex h-10 items-center px-3 text-sm font-medium text-foreground/85 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-primary data-[state=open]:text-primary",
      "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 motion-reduce:after:transition-none hover:after:scale-x-100 data-[state=open]:after:scale-x-100",
      active && "text-primary after:scale-x-100"
    );

  if (isAdminPage) {
    return null;
  }

  return (
    <header className="w-full bg-white border-b shadow-sm h-16 sm:h-20 xl:h-24 z-50 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Logo className="h-5 w-auto sm:h-6 xl:h-7" />
        </Link>

        <div className="hidden xl:flex flex-grow items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={navItemClass(isNavActive('/about'))}
                  >
                    Who We Are
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass(isNavActive('/services'))}>
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 md:w-[520px] lg:w-[600px]">
                    <div className="grid gap-x-6 md:grid-cols-2">
                      {[leftServices, rightServices].map((column, ci) => (
                        <ul key={ci} className="space-y-1">
                          {column.map((service) => (
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
                        </ul>
                      ))}
                    </div>
                    <div className="mt-2 border-t pt-2">
                      <NavigationMenuLink asChild>
                        <Link href="/services" className="flex items-center justify-center text-sm font-bold text-primary hover:underline p-2">
                          View All Services <ChevronRight className="size-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass(isNavActive('/sectors'))}>
                  Sectors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                   <div className="w-[400px] p-4 md:w-[600px]">
                    <ul className="columns-2 gap-x-6 md:columns-3">
                      {sectors.map((sector) => (
                        <li key={sector.href} className="break-inside-avoid">
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
                    </ul>
                    <div className="mt-2 border-t pt-2">
                      <NavigationMenuLink asChild>
                        <Link href="/sectors" className="flex items-center justify-center text-sm font-bold text-primary hover:underline p-2">
                          All Sectors <ChevronRight className="size-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass(isNavActive('/who-we-work-with'))}>
                  Who We Work With
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-5 md:w-[660px]">
                    <ul className="columns-2 gap-x-8">
                      {audiences.map((audience) => (
                        <li key={audience.slug} className="mb-1 break-inside-avoid">
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/who-we-work-with/${audience.slug}`}
                              className="block select-none rounded-md px-3 py-3 text-sm font-medium leading-snug no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {audience.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t pt-3">
                      <NavigationMenuLink asChild>
                        <Link href="/who-we-work-with" className="flex items-center justify-center text-sm font-bold text-primary hover:underline p-2">
                          See Everyone We Work With <ChevronRight className="size-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://engage.credence.africa"
                    target="_blank"
                    className={navItemClass()}
                  >
                    Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://perspectives.credence.africa"
                    target="_blank"
                    className={navItemClass()}
                  >
                    Insights
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <ConsultationDialog triggerClassName="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-6 shadow-md">
            Book a Consultation <Phone className="size-4" />
          </ConsultationDialog>
        </div>

        <div className="xl:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="size-11 bg-transparent border-none">
                <Menu className="size-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto pr-[max(1.5rem,env(safe-area-inset-right))]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                <Link 
                  href="/about" 
                  className="text-lg font-medium py-3 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Who We Are
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b">
                    <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">Our Services</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4 pt-2">
                        {mobileServices.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="text-sm py-3 text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link 
                          href="/services" 
                          className="text-sm font-bold text-primary py-3"
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
                            className="text-sm py-3 text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sector.name}
                          </Link>
                        ))}
                        <Link
                          href="/sectors"
                          className="text-sm font-bold text-primary py-3"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          All Sectors
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="audiences" className="border-b">
                    <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">Who We Work With</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-2 pl-4 pt-2">
                        {audiences.map((audience) => (
                          <Link
                            key={audience.slug}
                            href={`/who-we-work-with/${audience.slug}`}
                            className="text-sm py-3 text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {audience.name}
                          </Link>
                        ))}
                        <Link
                          href="/who-we-work-with"
                          className="text-sm font-bold text-primary py-3"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          See Everyone We Work With
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link 
                  href="https://engage.credence.africa" 
                  target="_blank"
                  className="text-lg font-medium py-3 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  href="https://perspectives.credence.africa" 
                  target="_blank"
                  className="text-lg font-medium py-3 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                
                <div className="mt-6">
                  <ConsultationDialog triggerClassName="w-full h-14 rounded-none text-base font-light bg-primary hover:bg-primary/90 text-white">
                    Book a Consultation
                  </ConsultationDialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
