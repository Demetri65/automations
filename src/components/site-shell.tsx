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
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-200 px-6 py-6">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">
              Automations
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Agent systems, prompts, architectures, and implementation notes.
            </p>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-slate-200 p-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Status</p>
              <p className="mt-2 text-sm text-slate-700">Public site scaffolded and ready for Vercel import.</p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-4 lg:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Demetri Sebastian Lopez</p>
                <p className="mt-1 text-sm text-slate-600">Portfolio build in progress</p>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                Next.js + Vercel ready
              </div>
            </div>
            <nav className="flex gap-2 overflow-x-auto px-6 pb-4 lg:hidden">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
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
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_rgba(15,23,42,0.06)]">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
