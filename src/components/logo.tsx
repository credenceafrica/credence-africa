import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Credence Africa"
      className={cn("h-8 w-auto", className)}
    />
  );
}
