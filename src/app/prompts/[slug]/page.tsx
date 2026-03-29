import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CopyButton } from "@/components/copy-button";
import { Badge } from "@/components/ui/badge";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { getPromptBySlug, prompts } from "@/lib/prompts";

export function generateStaticParams() {
  return prompts.map((prompt) => ({ slug: prompt.slug }));
}

export async function generateMetadata(props: PageProps<"/prompts/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return {};
  return {
    title: prompt.title,
    description: prompt.summary,
  };
}

export default async function PromptDetailPage(props: PageProps<"/prompts/[slug]">) {
  const { slug } = await props.params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) notFound();

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader eyebrow="Prompt detail" badge={`v${prompt.version}`} title={prompt.title} description={prompt.summary} />

        <div className="flex flex-wrap gap-2">
          <Badge>{prompt.status}</Badge>
          <Badge variant="outline">v{prompt.version}</Badge>
          <Badge variant="outline">{prompt.model}</Badge>
          <Badge variant="secondary">{prompt.audience}</Badge>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card title="Intended use" description="Where this prompt should be used.">
            <ul className="space-y-2 text-sm text-slate-600">{prompt.intendedUse.map((item) => <li key={item}>• {item}</li>)}</ul>
          </Card>
          <Card title="Variables" description="Inputs that should be filled before use.">
            <div className="space-y-3 text-sm text-slate-600">
              {prompt.variables.map((variable) => (
                <div key={variable.name} className="rounded-lg border bg-slate-50 p-3">
                  <p className="font-medium text-slate-900">{variable.name}</p>
                  <p className="mt-1">{variable.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card title="System prompt" description="Primary system-level instruction set.">
            <div className="space-y-4">
              <CopyButton value={prompt.systemPrompt} />
              <pre className="overflow-x-auto rounded-xl border bg-slate-950 p-4 text-sm text-slate-50 whitespace-pre-wrap">{prompt.systemPrompt}</pre>
            </div>
          </Card>
          <Card title="User prompt" description="Invocation template with variables.">
            <div className="space-y-4">
              <CopyButton value={prompt.userPrompt} />
              <pre className="overflow-x-auto rounded-xl border bg-slate-950 p-4 text-sm text-slate-50 whitespace-pre-wrap">{prompt.userPrompt}</pre>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <Card title="Inputs" description="Expected inputs."><ul className="space-y-2 text-sm text-slate-600">{prompt.inputs.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
          <Card title="Outputs" description="Expected outputs."><ul className="space-y-2 text-sm text-slate-600">{prompt.outputs.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
          <Card title="Constraints" description="Rules to preserve structure and quality."><ul className="space-y-2 text-sm text-slate-600">{prompt.constraints.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
          <Card title="Guardrails" description="Safety and quality boundaries."><ul className="space-y-2 text-sm text-slate-600">{prompt.guardrails.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Card title="Examples" description="Illustrative examples of good and bad usage.">
            <div className="space-y-3">{prompt.examples.map((example) => <div key={example.title} className="rounded-lg border bg-slate-50 p-4"><p className="font-medium text-slate-900">{example.title}</p><p className="mt-2 text-sm text-slate-600">{example.body}</p></div>)}</div>
          </Card>
          <div className="grid gap-6">
            <Card title="Anti-patterns" description="What weakens the output."><ul className="space-y-2 text-sm text-slate-600">{prompt.antiPatterns.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
            <Card title="Evaluation checklist" description="What to verify before calling the work complete."><ul className="space-y-2 text-sm text-slate-600">{prompt.evaluationChecklist.map((item) => <li key={item}>• {item}</li>)}</ul></Card>
            <Card title="Related docs" description="Supporting material for deeper context."><ul className="space-y-2 text-sm text-slate-600">{prompt.relatedDocs.map((item) => <li key={item.href}>• <a href={item.href} className="underline underline-offset-4">{item.title}</a></li>)}</ul></Card>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
