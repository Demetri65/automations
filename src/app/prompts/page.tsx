import type { Metadata } from "next";

import { PromptLibrary } from "@/components/prompts/prompt-library";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { prompts } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Prompts",
  description: "A premium prompt library for orchestrators, workers, and engineering-grade automation systems.",
};

export default function PromptsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader
          eyebrow="Prompt library"
          title="A premium library of prompts designed like real system interfaces"
          description="These prompts are structured for reuse, review, and extension. The goal is not to collect fragments, but to build a serious prompt system that can support durable workflows."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card
            title="Library standard"
            description="Each prompt carries enough context to be useful on its own and strong enough to fit into a larger automation system."
          >
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• versioned and status-aware</li>
              <li>• input/output expectations are explicit</li>
              <li>• constraints and anti-patterns are reviewable</li>
              <li>• related docs and architecture views stay connected</li>
            </ul>
          </Card>
          <Card title="Current scope" description="Starting with one flagship frontend engineering prompt, then expanding into orchestrator and specialist prompt families." />
        </div>

        <PromptLibrary prompts={prompts} />
      </section>
    </SiteShell>
  );
}
