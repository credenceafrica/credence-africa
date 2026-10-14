import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

/** Not part of the design canvas; it reuses the canvas hero so the overlay header stays legible. */
export default function NotFound() {
  return (
    <Hero
      title="We couldn't find that page."
      intro="The link may be broken or the page may have moved. Here's the way back."
      crumbs={[{ label: "404" }]}
      btn1={{ label: "Back to home", href: "/" }}
      btn2={{ label: "View Our Services", href: "/services" }}
    />
  );
}
