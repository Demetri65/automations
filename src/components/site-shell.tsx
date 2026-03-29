import Link from "next/link";
import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

const nav = [
  { href: "/", label: "Home" },
  { href: "/operations", label: "Operations" },
  { href: "/prompts", label: "Prompts" },
  { href: "/architectures", label: "Architectures" },
  { href: "/docs", label: "Docs" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
        <aside className="hidden w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">
          <div className="border-b px-6 py-8">
            <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border bg-muted text-sm">A</span>
              <span>
                <span className="block">Automations</span>
                <span className="mt-1 block text-xs font-normal text-muted-foreground">
                  flagship automation portfolio
                </span>
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t p-4">
            <div className="rounded-2xl border bg-card p-4">
              <Badge variant="secondary" className="w-fit">Portfolio system</Badge>
              <p className="mt-3 text-sm font-medium text-foreground">Next.js + shadcn aligned</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Structured prompts, architecture views, and MDX docs designed for public review.
              </p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between px-6 py-4 lg:px-8">
              <div>
                <p className="text-sm font-medium text-foreground">Demetri Sebastian Lopez</p>
                <p className="mt-1 text-sm text-muted-foreground">Automation systems, prompts, and architecture thinking</p>
              </div>
              <div className="hidden md:flex">
                <Badge variant="outline">Resume-quality build in progress</Badge>
              </div>
            </div>
            <nav className="flex gap-2 overflow-x-auto px-6 pb-4 lg:hidden">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  badge,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="max-w-4xl space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        {badge ? <Badge variant="secondary">{badge}</Badge> : null}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h1>
      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}

export function Card({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="space-y-2">
        <h2 className="text-base font-semibold text-card-foreground">{title}</h2>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
