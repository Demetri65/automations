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

        <Card
          title="Operations surfaces"
          description="Dashboard-style views inspired by agent workflow tooling now live under multiple names so the best fit can emerge naturally."
        >
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• /operations</li>
            <li>• /agent-hub</li>
            <li>• /workspace</li>
            <li>• /control-center</li>
            <li>• /command-center</li>
          </ul>
        </Card>
      </section>
    </SiteShell>
  );
}
