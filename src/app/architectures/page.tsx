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
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Architecture explorer"
          title="Foundations for viewing agentic systems like engineered products"
          description="This section turns architecture thinking into a browsable system: clear summaries, explicit tradeoffs, and visual flows that can grow over time without turning into a diagram graveyard."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {architectures.map((architecture) => (
            <Link key={architecture.slug} href={`/architectures/${architecture.slug}`}>
              <Card title={architecture.title} description={architecture.summary}>
                <div className="space-y-3">
                  <Badge variant="secondary">{architecture.nodes.length} nodes</Badge>
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
