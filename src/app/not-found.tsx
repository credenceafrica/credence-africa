import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[60vh] flex-col justify-center py-20 md:min-h-[70vh] md:py-28">
          <div className="cred-rise max-w-2xl">

            <p
              className="mt-6 font-normal leading-none tracking-[-0.02em] text-foreground [font-size:clamp(3.5rem,12vw,6rem)]"
              aria-hidden="true"
            >
              404
            </p>

            <h1 className="mt-5 text-balance font-normal leading-[1.1] tracking-[-0.01em] text-foreground [font-size:clamp(1.75rem,3.5vw,2.5rem)]">
              We couldn't find that page.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              The link may be broken or the page may have moved. Here's the way back.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-none border-none bg-primary px-8 text-base font-light text-foreground hover:bg-primary/90"
              >
                <Link href="/">
                  Back to home
                  <ArrowRight className="ml-2 size-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-none border-primary bg-white px-8 text-base font-light text-[#aa3018] hover:bg-primary/5"
              >
                <Link href="/services">View our platforms</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
