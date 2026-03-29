import Link from "next/link";
import type { Metadata } from "next";

import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";

const featured = [
  {
    title: "Operations",
    description: "Task boards, agent activity, and scheduling views for automation workflows.",
    href: "/operations",
  },
  {
    title: "Prompts",
    description: "Structured prompt assets with real metadata, detail pages, and reusable system contracts.",
    href: "/prompts",
  },
  {
    title: "Architectures",
    description: "Visual architecture foundations for agent systems, approvals, memory, and outputs.",
    href: "/architectures",
  },
  {
    title: "Docs",
    description: "MDX-driven documentation for the thinking, tradeoffs, and structure behind the work.",
    href: "/docs",
  },
];

export const metadata: Metadata = {
  title: "Automations",
  description:
    "A flagship automation portfolio covering prompt systems, architecture explorers, and productized engineering documentation.",
};

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:px-8 lg:py-14">
        <SectionHeader
          eyebrow="Flagship portfolio"
          badge="Next.js + App Router"
          title="A productized automation portfolio built to feel credible, deliberate, and senior"
          description="Automations is a public-facing system for showcasing prompt libraries, architecture thinking, operations surfaces, and engineering documentation in one coherent experience."
        />

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <Card
            title="What this project is"
            description="A resume-quality site that treats prompts, docs, and architectures like maintainable product surfaces instead of disconnected pages."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">System-first</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Structured content models and thin routes make the codebase extendable.
                </p>
              </div>
              <div className="rounded-xl border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">Reviewable</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  PR-only ideas, typed registries, and documented tradeoffs keep the work legible.
                </p>
              </div>
              <div className="rounded-xl border bg-muted p-4">
                <p className="text-sm font-medium text-foreground">Cohesive</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Shared tokens, shadcn-aligned patterns, and restrained styling keep it credible.
                </p>
              </div>
            </div>
          </Card>

          <Card title="Current focus" description="The strongest parts of the site today are the systems underneath it.">
            <div className="space-y-4">
              <div>
                <Badge variant="secondary">In progress</Badge>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Building a stronger public surface for prompt systems, architecture explorers, and documentation.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• prompt library with versioned detail pages</li>
                <li>• MDX docs foundation with navigation</li>
                <li>• React Flow + ELK architecture viewer shell</li>
                <li>• dashboard-style operations surfaces</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
