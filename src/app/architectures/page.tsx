import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

export default function ArchitecturesPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-12 px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Systems Design"
          title="Agentic Architectures"
          description="Patterns for building orchestrators, specialist workers, safe repo automation, and nested subagent workflows."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title="PR-only coding orchestrator"
            description="A main router coordinates planner, coder, tester, reviewer, and repo manager agents while enforcing approval gates."
          />
          <Card
            title="Nested orchestration"
            description="Depth-1 orchestrators spawn depth-2 leaf workers in parallel, then synthesize one final outcome back to the main agent."
          />
          <Card
            title="Safe mode execution"
            description="Read-only analysis by default, with guarded write paths only when explicitly enabled for a run."
          />
          <Card
            title="Auditability"
            description="Structured handoffs, test requirements, and human approval checkpoints keep automation legible and safe."
          />
        </div>
      </section>
    </SiteShell>
  );
}
