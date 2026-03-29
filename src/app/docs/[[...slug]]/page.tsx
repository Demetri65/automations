import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { DocsProse } from "@/components/docs/docs-prose";
import { DocsShell } from "@/components/docs/docs-shell";
import { Card, SectionHeader, SiteShell } from "@/components/site-shell";
import { docsEntries, getDocBySlug } from "@/lib/docs";
import { getDocComponent, getDocNeighbors } from "@/lib/mdx";

export function generateStaticParams() {
  return docsEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const { slug } = await props.params;
  if (!slug) {
    return {
      title: "Docs",
      description: "A streamlined docs system for architecture notes, prompt strategy, and implementation decisions.",
    };
  }
  const doc = getDocBySlug(slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function DocsPage(props: PageProps<"/docs/[[...slug]]">) {
  const { slug } = await props.params;

  if (!slug) {
    return (
      <SiteShell>
        <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
          <SectionHeader
            eyebrow="Documentation"
            badge="MDX-driven knowledge base"
            title="A streamlined docs system for the thinking behind the work"
            description="These docs are meant to read like product-grade engineering notes: concise, navigable, and polished enough to stand on their own in public."
          />

          <DocsShell>
            <div className="grid gap-6 lg:grid-cols-2">
              {docsEntries.map((entry) => (
                <Link key={entry.slug.join("/")} href={`/docs/${entry.slug.join("/")}`}>
                  <Card title={entry.title} description={entry.description}>
                    <p className="text-sm text-slate-500">{entry.section}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </DocsShell>
        </section>
      </SiteShell>
    );
  }

  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const Component = await getDocComponent(slug);
  if (!Component) notFound();

  const neighbors = getDocNeighbors(slug);

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-12">
        <DocsShell current={doc} toc={doc.toc}>
          <DocsProse>
            <Component />
          </DocsProse>

          <div className="grid gap-4 sm:grid-cols-2">
            {neighbors.previous ? (
              <Link href={`/docs/${neighbors.previous.slug.join("/")}`}>
                <Card title="Previous" description={neighbors.previous.title} />
              </Link>
            ) : <div />}
            {neighbors.next ? (
              <Link href={`/docs/${neighbors.next.slug.join("/")}`}>
                <Card title="Next" description={neighbors.next.title} />
              </Link>
            ) : null}
          </div>
        </DocsShell>
      </section>
    </SiteShell>
  );
}
