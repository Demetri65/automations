import Link from "next/link";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

const featured = [
  {
    title: "Operations",
    description: "Task boards, agent activity, and scheduling views for automation workflows.",
    href: "/operations",
  },
  {
    title: "Prompts",
    description: "Structured prompts for orchestrators, planners, and guarded execution.",
    href: "/prompts",
  },
  {
    title: "Architectures",
    description: "Patterns for nested subagents, PR-only execution, and auditable handoffs.",
    href: "/architectures",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Automations"
          title="A clean home for prompts, agent systems, and implementation docs"
          description="A public-facing site for the systems I’m building: prompt libraries, agentic architecture patterns, and practical notes around reliable automation."
        />

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <Card
            title="Overview"
            description="Production-minded AI workflows with clear guardrails, simple presentation, and room to grow."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">PR-only</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Protected branch discipline and human approval at final merge.
                </p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">Nested agents</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Orchestrators coordinating specialist workers with clear task boundaries.
                </p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">Docs-first</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  High-signal documentation around prompts, architecture, and deployment.
                </p>
              </div>
            </div>
          </Card>

          <Card title="What’s inside" description="A focused structure meant to stay clean over time.">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Prompt templates and orchestration patterns</li>
              <li>• Agent architecture writeups and safety rules</li>
              <li>• Build notes and deployment documentation</li>
              <li>• Room for future case studies and demos</li>
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
