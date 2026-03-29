import Link from "next/link";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const featured = [
  {
    title: "Prompt systems",
    description: "Structured prompts for orchestration, review, planning, and guarded execution.",
    href: "/prompts",
  },
  {
    title: "Agentic architectures",
    description: "Practical multi-agent patterns for routing, nested orchestration, and PR-only workflows.",
    href: "/architectures",
  },
  {
    title: "Documentation",
    description: "Notes, playbooks, and implementation details behind the systems I build.",
    href: "/docs",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Demetri Sebastian Lopez"
          title="Automations for modern agentic systems"
          description="A clean public hub for prompts, multi-agent architecture patterns, and implementation docs. Built in Next.js and designed to grow into a polished portfolio on Vercel."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/40">
            <p className="text-sm font-medium text-slate-300">Current focus</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Building production-minded AI workflows with clear safety rails and crisp UX.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">PR-only</p>
                <p className="mt-2 text-sm text-slate-300">Protected branch discipline and human approval at the final gate.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">Nested agents</p>
                <p className="mt-2 text-sm text-slate-300">Orchestrators that can coordinate specialist workers without chaos.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">Docs-first</p>
                <p className="mt-2 text-sm text-slate-300">Prompts, patterns, and design decisions documented clearly.</p>
              </div>
            </div>
          </div>

          <Card
            title="What this site will hold"
            description="A simple, high-signal showcase of systems design thinking and implementation quality."
          >
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Prompt libraries and prompt engineering notes</li>
              <li>• Agent orchestration architecture writeups</li>
              <li>• Working docs and implementation playbooks</li>
              <li>• Eventually: case studies, screenshots, and demos</li>
            </ul>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
