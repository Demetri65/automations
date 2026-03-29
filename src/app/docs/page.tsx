import { Card, SectionHeader, SiteShell } from "@/components/site-shell";

export default function DocsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl space-y-12 px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Documentation"
          title="Docs"
          description="Implementation notes, deployment plans, architecture decisions, and operating rules for the systems behind this site."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card title="Setup" description="Project setup, repo structure, and framework choices for a clean public-facing build." />
          <Card title="Deployment" description="Planned Vercel deployment path, domain wiring, and environment notes." />
          <Card title="Standards" description="Conventions for components, content organization, and safe automation workflows." />
        </div>
      </section>
    </SiteShell>
  );
}
