import Link from "next/link";
import { ReactNode } from "react";

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
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        <aside className="hidden w-64 shrink-0 border-r bg-background lg:flex lg:flex-col">
          <div className="border-b px-6 py-6">
            <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
              Automations
            </Link>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Agent systems, prompts, architectures, and docs.
            </p>
          </div>

          <nav className="flex-1 space-y-1 p-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t p-4">
            <div className="rounded-xl border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</p>
              <p className="mt-2 text-sm text-foreground">Ready for Vercel import.</p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between px-6 py-4 lg:px-8">
              <div>
                <p className="text-sm font-medium text-foreground">Demetri Sebastian Lopez</p>
                <p className="mt-1 text-sm text-muted-foreground">Portfolio build in progress</p>
              </div>
              <div className="rounded-md border bg-card px-3 py-1.5 text-sm text-muted-foreground">
                Next.js + Vercel ready
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
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="text-base leading-7 text-muted-foreground">{description}</p>
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
    <div className="rounded-xl border bg-card p-6">
      <div className="space-y-2">
        <h2 className="text-base font-semibold text-card-foreground">{title}</h2>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
