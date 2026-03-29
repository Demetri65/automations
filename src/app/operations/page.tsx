import Link from "next/link";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const taskColumns = [
  { name: "Inbox", count: 4, items: ["Homepage polish", "Prompt library import"] },
  { name: "In Progress", count: 3, items: ["Architectures page", "Operations shell"] },
  { name: "Review", count: 2, items: ["Copy QA", "Vercel domain prep"] },
  { name: "Done", count: 6, items: ["Next.js scaffold", "Initial layout"] },
];

const agents = [
  { name: "Diva", role: "Primary orchestrator", status: "Active" },
  { name: "Planner", role: "Task decomposition", status: "Ready" },
  { name: "Reviewer", role: "Quality + safety", status: "Ready" },
  { name: "Repo Manager", role: "PR workflow", status: "Idle" },
];

const events = [
  "Morning build review",
  "Prompt set refresh",
  "Weekly docs cleanup",
  "Deploy window",
];

export default function OperationsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Operations"
          title="A working view into tasks, agents, and scheduled automation"
          description="This section adapts the best parts of a mission dashboard into Automations without making it feel like a separate product."
        />

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/30">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-medium text-slate-300">Overview</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Automations workspace</h2>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white">Live-inspired UI</div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">15</p>
                <p className="mt-2 text-sm text-slate-300">Tracked tasks</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">4</p>
                <p className="mt-2 text-sm text-slate-300">Visible agents</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">99.9%</p>
                <p className="mt-2 text-sm text-slate-300">Deployment target</p>
              </div>
            </div>
          </div>

          <Card title="Views" description="Use whichever name feels right for the same core surface.">
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              {[
                ["Operations", "/operations"],
                ["Agent Hub", "/agent-hub"],
                ["Workspace", "/workspace"],
                ["Control Center", "/control-center"],
                ["Command Center", "/command-center"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-full border border-slate-200 px-3 py-2 hover:bg-slate-50">
                  {label}
                </Link>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <Card title="Task board" description="A crisp kanban-style overview for active work.">
            <div className="grid gap-4 lg:grid-cols-4">
              {taskColumns.map((column) => (
                <div key={column.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{column.name}</p>
                    <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-500">{column.count}</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {column.items.map((item) => (
                      <div key={item} className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            <Card title="Agent activity" description="A compact view of active roles and readiness.">
              <div className="space-y-3">
                {agents.map((agent) => (
                  <div key={agent.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{agent.name}</p>
                      <span className="text-xs text-emerald-600">{agent.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{agent.role}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Calendar / cron" description="Scheduled work, recurring automation, and operational cadence.">
              <ul className="space-y-3 text-sm text-slate-600">
                {events.map((event) => (
                  <li key={event} className="rounded-xl border border-slate-200 bg-slate-50 p-3">{event}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
