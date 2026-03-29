import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const promptGroups = [
  {
    title: "Orchestrator prompts",
    description:
      "Top-level system prompts for intake, routing, approval gates, and final synthesis across multiple workers.",
    bullets: ["Task classification", "Risk scoring", "Delegation contracts"],
  },
  {
    title: "Worker prompts",
    description:
      "Role-specific prompts for planner, coder, tester, reviewer, and repo manager agents with clear output contracts.",
    bullets: ["Minimal ambiguity", "Structured outputs", "Clear ownership"],
  },
  {
    title: "Safety prompts",
    description:
      "Guardrails for SAFE MODE, PR-only repo operations, least privilege, and hostile-input awareness.",
    bullets: ["No unsafe merges", "No secret leakage", "Human approval gates"],
  },
];

const standards = [
  "Every prompt should define inputs, constraints, outputs, and stop conditions.",
  "Policies should be explicit instead of implied.",
  "Outputs should be easy for another agent or human to parse quickly.",
  "Write-capable prompts should always state when writes are forbidden.",
];

export default function PromptsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Prompt Library"
          title="Prompt systems built for clarity, safety, and reuse"
          description="This library is where orchestration logic becomes durable. The focus is on prompts that are structured enough to scale across agents, while still being practical for real execution."
        />

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-medium text-slate-500">Prompt design principles</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Prompts should behave like interfaces, not vibes.
                </h2>
              </div>
              <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white">
                Reusable system
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {standards.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card
            title="Current direction"
            description="The prompt library is being shaped around orchestrated coding workflows, review quality, and safe repo automation."
          >
            <p className="text-sm leading-7 text-slate-600">
              The goal is to make each prompt useful on its own, but even stronger when chained together in a larger system.
            </p>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {promptGroups.map((group) => (
            <Card key={group.title} title={group.title} description={group.description}>
              <ul className="space-y-2 text-sm text-slate-600">
                {group.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
