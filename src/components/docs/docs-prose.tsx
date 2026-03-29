import { cn } from "@/lib/utils";

export function DocsProse({ children, className }: { children: React.ReactNode; className?: string }) {
  return <article className={cn("min-w-0", className)}>{children}</article>;
}
