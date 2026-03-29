import "server-only";

export type ArchitectureNodeType =
  | "agent"
  | "tool"
  | "approval"
  | "memory"
  | "trigger"
  | "output";

export type ArchitectureDefinition = {
  slug: string;
  title: string;
  summary: string;
  useCase: string;
  tradeoffs: string[];
  failureModes: string[];
  promptsInvolved: string[];
  relatedDocs: { title: string; href: string }[];
  nodes: {
    id: string;
    type: ArchitectureNodeType;
    label: string;
    description: string;
  }[];
  edges: { id: string; source: string; target: string; label?: string }[];
};

export const architectures: ArchitectureDefinition[] = [
  {
    slug: "frontend-portfolio-system",
    title: "Frontend Portfolio System",
    summary:
      "A portfolio-focused content system that separates prompts, docs, and architecture views while preserving a thin App Router layer.",
    useCase:
      "Use when you need a public-facing engineering site that balances design polish with maintainable content infrastructure.",
    tradeoffs: [
      "Content lives locally, which keeps the system simple but requires repo changes for updates.",
      "React Flow adds a client boundary for the viewer, so the rest of the route should stay server-rendered.",
    ],
    failureModes: [
      "Overusing client components can bloat bundles and dilute the server-first approach.",
      "Hard-coding content in page files makes the system harder to scale and review.",
    ],
    promptsInvolved: ["frontend-engineering-flagship"],
    relatedDocs: [
      { title: "Site structure", href: "/docs/foundation/site-structure" },
      { title: "Prompt library strategy", href: "/docs/prompts/prompt-library-strategy" },
    ],
    nodes: [
      { id: "trigger", type: "trigger", label: "Visitor route", description: "An incoming visit to a content route." },
      { id: "app-router", type: "agent", label: "App Router", description: "Thin route files compose the right feature modules." },
      { id: "content", type: "memory", label: "Content registry", description: "Typed local content for prompts, docs, and architectures." },
      { id: "viewer", type: "tool", label: "Architecture viewer", description: "React Flow-powered visualization for architecture definitions." },
      { id: "output", type: "output", label: "Portfolio page", description: "A polished public-facing result." },
    ],
    edges: [
      { id: "e1", source: "trigger", target: "app-router" },
      { id: "e2", source: "content", target: "app-router", label: "resolve content" },
      { id: "e3", source: "app-router", target: "viewer", label: "for architecture routes" },
      { id: "e4", source: "app-router", target: "output" },
    ],
  },
  {
    slug: "pr-only-agent-orchestrator",
    title: "PR-only Agent Orchestrator",
    summary:
      "A coding system where an orchestrator coordinates planner, coder, tester, reviewer, and repo manager roles with explicit approval gates.",
    useCase:
      "Use when coding work should be auditable, test-gated, and structured around human review rather than direct autonomous merges.",
    tradeoffs: [
      "More process overhead in exchange for stronger safety and reviewability.",
      "Nested orchestration requires careful prompts and depth control.",
    ],
    failureModes: [
      "Skipping test gates creates false confidence.",
      "Overlapping agent responsibilities create noisy handoffs and weaker accountability.",
    ],
    promptsInvolved: ["frontend-engineering-flagship"],
    relatedDocs: [
      { title: "Architecture principles", href: "/docs/architecture/pr-only-systems" },
    ],
    nodes: [
      { id: "request", type: "trigger", label: "User request", description: "A coding task arrives." },
      { id: "orchestrator", type: "agent", label: "Orchestrator", description: "Routes work and enforces policy." },
      { id: "workers", type: "agent", label: "Workers", description: "Planner, coder, tester, reviewer, repo manager." },
      { id: "approval", type: "approval", label: "Human approval", description: "Required before protected-branch outcomes." },
      { id: "result", type: "output", label: "PR-ready result", description: "Tested, reviewed, and documented output." },
    ],
    edges: [
      { id: "a1", source: "request", target: "orchestrator" },
      { id: "a2", source: "orchestrator", target: "workers" },
      { id: "a3", source: "workers", target: "approval" },
      { id: "a4", source: "approval", target: "result" },
    ],
  },
];

export function getArchitectureBySlug(slug: string) {
  return architectures.find((item) => item.slug === slug);
}
