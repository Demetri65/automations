import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const pillars = [
  {
    title: "Orchestrated execution",
    description:
      "A central router delegates planning, coding, testing, review, and repo operations without collapsing every responsibility into one agent.",
  },
  {
    title: "Safe by default",
    description:
      "Read-first behavior, explicit approval gates, PR-only workflows, and clear restrictions around writes, merges, and secrets.",
  },
  {
    title: "Structured handoffs",
    description:
      "Each worker gets a precise contract: goal, constraints, files, tests, and expected output format.",
  },
];

const patterns = [
  {
    title: "PR-only coding orchestrator",
    description:
      "A main router coordinates planner, coder, tester, reviewer, and repo manager agents while keeping merge authority with a human.",
  },
  {
    title: "Nested orchestration",
    description:
      "Depth-1 orchestrators can spawn depth-2 leaf workers in parallel, then condense the results into one coherent final response.",
  },
  {
    title: "Safe mode execution",
    description:
      "Read-only analysis by default, with write capability only when intentionally enabled for a specific run.",
  },
  {
    title: "Auditable systems",
    description:
      "Plans, outputs, tests, and approvals are visible and structured so the automation remains understandable under pressure.",
  },
];

export default function ArchitecturesPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Systems Design"
          title="Agentic architectures built to feel deliberate"
          description="These patterns are centered on reliable delegation, tight execution boundaries, and systems that stay legible even as they become more capable."
        />

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/30">
            <p className="text-sm font-medium text-slate-300">Architecture philosophy</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Strong systems are not just powerful — they are understandable, reviewable, and constrained on purpose.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-lg font-semibold">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Card
            title="Design goal"
            description="Make multi-agent workflows feel disciplined instead of messy."
          >
            <p className="text-sm leading-7 text-slate-600">
              The emphasis is on systems that can scale in capability without losing clarity, safety, or operator trust.
            </p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {patterns.map((pattern) => (
            <Card key={pattern.title} title={pattern.title} description={pattern.description} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
