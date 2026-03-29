import type { Metadata } from "next";

import { PromptLibrary } from "@/components/prompts/prompt-library";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { prompts } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Prompts",
  description: "A premium prompt library for orchestrators, workers, and engineering-grade automation systems.",
};

export default function PromptsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-14">
        <SectionHeader
          eyebrow="Prompt library"
          badge="Structured content"
          title="Prompt systems designed like reusable interfaces, not scattered notes"
          description="This library is built for prompts that need to be read, filtered, versioned, and reused across serious workflows. Every asset is meant to support clarity, reviewability, and future extension."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card
            title="Library standard"
            description="Each prompt should feel substantial enough to stand on its own, and structured enough to support a larger automation system."
          >
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• explicit inputs, outputs, constraints, and guardrails</li>
              <li>• visible versioning and status metadata</li>
              <li>• anti-patterns and evaluation criteria for quality review</li>
              <li>• cross-links to architectures and supporting docs</li>
            </ul>
          </Card>

          <Card title="Current scope" description="The library starts narrow on purpose.">
            <div className="space-y-3">
              <Badge variant="secondary">Seed set</Badge>
              <p className="text-sm leading-6 text-slate-600">
                The first flagship prompt focuses on frontend engineering quality. More orchestrator and worker prompts can now be added cleanly through the same system.
              </p>
            </div>
          </Card>
        </div>

        <PromptLibrary prompts={prompts} />
      </section>
    </SiteShell>
  );
}
