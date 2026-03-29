import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/prompts", label: "Prompts" },
  { href: "/architectures", label: "Architectures" },
  { href: "/docs", label: "Docs" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc,white_45%)] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Automations
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
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
