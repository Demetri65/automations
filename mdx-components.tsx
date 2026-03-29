import type { MDXComponents } from "mdx/types";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("scroll-m-20 text-4xl font-semibold tracking-tight text-slate-950", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("mt-12 scroll-m-20 text-2xl font-semibold tracking-tight text-slate-950", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-slate-950", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("leading-7 text-slate-700 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }) => <ul className={cn("my-6 ml-6 list-disc text-slate-700", className)} {...props} />,
  ol: ({ className, ...props }) => <ol className={cn("my-6 ml-6 list-decimal text-slate-700", className)} {...props} />,
  li: ({ className, ...props }) => <li className={cn("mt-2", className)} {...props} />,
  a: ({ className, ...props }) => <a className={cn("font-medium text-slate-950 underline underline-offset-4", className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("mt-6 border-l-2 border-slate-200 pl-6 italic text-slate-700", className)} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={cn("rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn("mt-6 overflow-x-auto rounded-xl border bg-slate-950 p-4 text-sm text-slate-50", className)} {...props} />
  ),
  hr: () => <Separator className="my-10" />,
  Callout: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 rounded-xl border bg-slate-50 p-4 text-sm text-slate-700">{children}</div>
  ),
  Badge,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
