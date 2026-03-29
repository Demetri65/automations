import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { architectures } from "@/lib/architectures";

export const metadata: Metadata = {
  title: "Architectures",
  description: "Architecture explorer for agentic systems, prompt-driven workflows, and reviewable automation patterns.",
};

export default function ArchitecturesPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-14">
        <SectionHeader
          eyebrow="Architecture explorer"
          badge="React Flow + ELK foundation"
          title="Architecture views built to explain systems, tradeoffs, and flow — not just decorate them"
          description="The goal here is to make agentic architectures browsable and extensible. Each entry pairs visual structure with written context so the diagrams stay useful to humans, not just impressive at a glance."
        />

        <Card
          title="What this section is for"
          description="This explorer is not trying to dump every possible diagram into the site. It exists to make a few strong systems legible: supervision, deployment shape, prompt-driven flows, and engineering tradeoffs."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {architectures.map((architecture) => (
            <Link key={architecture.slug} href={`/architectures/${architecture.slug}`}>
              <Card title={architecture.title} description={architecture.summary}>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{architecture.nodes.length} nodes</Badge>
                    <Badge variant="outline">{architecture.edges.length} edges</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{architecture.useCase}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
