import Link from "next/link";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const featured = [
  {
    title: "Operations",
    description: "Task boards, agent activity, calendar views, and dashboard-inspired workflow tooling.",
    href: "/operations",
  },
  {
    title: "Prompts",
    description: "Structured prompts for orchestrators, planners, reviewers, and guarded coding flows.",
    href: "/prompts",
  },
  {
    title: "Agentic architectures",
    description: "Patterns for nested subagents, PR-only execution, and auditable handoffs.",
    href: "/architectures",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Automations"
          title="A clean home for prompts, agent systems, and build documentation"
          description="This site is the public-facing home for the systems I’m building: prompt libraries, multi-agent orchestration patterns, and practical implementation docs designed for real workflows."
        />

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-medium text-slate-500">Overview</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Production-minded AI workflows with clear guardrails.
                </h2>
              </div>
              <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                Public build
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-2xl font-semibold">PR-only</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Protected branch discipline and human approval at final merge.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-2xl font-semibold">Nested agents</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Orchestrators coordinating specialist workers with clear task boundaries.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-2xl font-semibold">Docs-first</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  High-signal documentation around prompts, architecture, and deployment.
                </p>
              </div>
            </div>
          </div>

          <Card
            title="What’s inside"
            description="A focused portfolio structure meant to grow cleanly over time."
          >
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Prompt templates and orchestration patterns</li>
              <li>• Agent architecture writeups and safety rules</li>
              <li>• Build notes and deployment documentation</li>
              <li>• Room for future case studies and live demos</li>
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
