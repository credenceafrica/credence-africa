import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo-f.jpg"
      alt="Credence Africa logo"
      className={cn("h-10 w-10", className)}
    />
  );
}
