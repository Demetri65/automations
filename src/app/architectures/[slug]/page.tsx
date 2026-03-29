import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ArchitectureFlow } from "@/components/architectures/architecture-flow";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { architectures, getArchitectureBySlug } from "@/lib/architectures";

export function generateStaticParams() {
  return architectures.map((architecture) => ({ slug: architecture.slug }));
}

export async function generateMetadata(props: PageProps<"/architectures/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const architecture = getArchitectureBySlug(slug);
  if (!architecture) return {};
  return { title: architecture.title, description: architecture.summary };
}

export default async function ArchitectureDetailPage(props: PageProps<"/architectures/[slug]">) {
  const { slug } = await props.params;
  const architecture = getArchitectureBySlug(slug);
  if (!architecture) notFound();

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <SectionHeader eyebrow="Architecture detail" title={architecture.title} description={architecture.summary} />

        <ArchitectureFlow architecture={architecture} />

        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="grid gap-6">
            <Card title="Use case" description="Where this system is meant to help.">
              <p className="text-sm text-slate-600">{architecture.useCase}</p>
            </Card>
            <Card title="Tradeoffs" description="What this architecture optimizes for and what it gives up.">
              <ul className="space-y-2 text-sm text-slate-600">{architecture.tradeoffs.map((item) => <li key={item}>• {item}</li>)}</ul>
            </Card>
            <Card title="Failure modes" description="Where this design can break down.">
              <ul className="space-y-2 text-sm text-slate-600">{architecture.failureModes.map((item) => <li key={item}>• {item}</li>)}</ul>
            </Card>
          </div>
          <div className="grid gap-6">
            <Card title="Prompts involved" description="Prompt assets connected to this architecture.">
              <ul className="space-y-2 text-sm text-slate-600">{architecture.promptsInvolved.map((item) => <li key={item}>• {item}</li>)}</ul>
            </Card>
            <Card title="Related docs" description="Further reading for implementation and rationale.">
              <ul className="space-y-2 text-sm text-slate-600">{architecture.relatedDocs.map((item) => <li key={item.href}>• <a className="underline underline-offset-4" href={item.href}>{item.title}</a></li>)}</ul>
            </Card>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
