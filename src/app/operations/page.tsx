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
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Operations"
          title="A working view into tasks, agents, and scheduled automation"
          description="A minimal operations surface for automation workflows, inspired by dashboard tooling but aligned with the rest of the site."
        />

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <Card title="Overview" description="A simple snapshot of current workflow status.">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-2xl font-semibold text-foreground">15</p>
                <p className="mt-1 text-sm text-muted-foreground">Tracked tasks</p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-2xl font-semibold text-foreground">4</p>
                <p className="mt-1 text-sm text-muted-foreground">Visible agents</p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-2xl font-semibold text-foreground">99.9%</p>
                <p className="mt-1 text-sm text-muted-foreground">Deployment target</p>
              </div>
            </div>
          </Card>

          <Card title="Views" description="Different labels for the same core surface.">
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {[
                ["Operations", "/operations"],
                ["Agent Hub", "/agent-hub"],
                ["Workspace", "/workspace"],
                ["Control Center", "/control-center"],
                ["Command Center", "/command-center"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md border bg-card px-3 py-2 hover:bg-muted hover:text-foreground">
                  {label}
                </Link>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <Card title="Task board" description="A lightweight kanban view for active work.">
            <div className="grid gap-4 lg:grid-cols-4">
              {taskColumns.map((column) => (
                <div key={column.name} className="rounded-lg border bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{column.name}</p>
                    <span className="rounded-md border bg-background px-2 py-1 text-xs text-muted-foreground">{column.count}</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {column.items.map((item) => (
                      <div key={item} className="rounded-md border bg-background p-3 text-sm text-muted-foreground">
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
                  <div key={agent.name} className="rounded-lg border bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{agent.name}</p>
                      <span className="text-xs text-muted-foreground">{agent.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{agent.role}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Calendar / cron" description="Scheduled work and recurring automation cadence.">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {events.map((event) => (
                  <li key={event} className="rounded-md border bg-muted p-3">{event}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
