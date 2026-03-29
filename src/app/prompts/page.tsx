import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const promptGroups = [
  {
    title: "Orchestrators",
    description: "Top-level prompts for routing work, enforcing policy, and synthesizing outputs from specialists.",
  },
  {
    title: "Workers",
    description: "Planner, coder, tester, reviewer, and repo manager prompts with explicit contracts.",
  },
  {
    title: "Safety constraints",
    description: "PR-only, test gates, least privilege, and SAFE MODE defaults for risky workflows.",
  },
];

export default function PromptsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-12 px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Prompt Library"
          title="Prompts"
          description="A growing library of orchestrator and worker prompts focused on reliable, auditable execution."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {promptGroups.map((group) => (
            <Card key={group.title} title={group.title} description={group.description} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
