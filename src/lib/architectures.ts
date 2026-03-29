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
    relatedDocs: [{ title: "Architecture principles", href: "/docs/architecture/pr-only-systems" }],
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
  {
    slug: "self-hosted-agent-stack",
    title: "Self-hosted Agent Stack",
    summary:
      "A VPS-hosted automation stack that treats reliability, privacy, and control as product features instead of afterthoughts.",
    useCase:
      "Use when you want always-on agent infrastructure with clear control over hosting, routing, and operational boundaries.",
    tradeoffs: [
      "Self-hosting adds operational overhead compared to a purely managed SaaS stack.",
      "More control also means more responsibility for hardening, observability, and uptime.",
    ],
    failureModes: [
      "Weak reverse-proxy or auth setup can expose sensitive tooling.",
      "Lack of circuit breakers can let retries or loops burn resources overnight.",
    ],
    promptsInvolved: ["frontend-engineering-flagship"],
    relatedDocs: [
      { title: "VPS OpenClaw Stack", href: "/docs/deployment/vps-openclaw-stack" },
      { title: "Threat Model", href: "/docs/security/threat-model" },
    ],
    nodes: [
      { id: "vps", type: "trigger", label: "VPS host", description: "Always-on infrastructure base." },
      { id: "gateway", type: "agent", label: "OpenClaw gateway", description: "Routes messages, sessions, and tool execution." },
      { id: "agents", type: "agent", label: "Agent layer", description: "Main agents and subagents with isolated workspaces." },
      { id: "memory", type: "memory", label: "State + memory", description: "Sessions, files, and structured content registries." },
      { id: "ui", type: "output", label: "Public / operator surfaces", description: "Docs, dashboards, and communication surfaces." },
    ],
    edges: [
      { id: "s1", source: "vps", target: "gateway" },
      { id: "s2", source: "gateway", target: "agents" },
      { id: "s3", source: "agents", target: "memory" },
      { id: "s4", source: "gateway", target: "ui" },
    ],
  },
  {
    slug: "supervised-autonomy-gates",
    title: "Supervised Autonomy Gates",
    summary:
      "A system pattern for letting automation move quickly while preserving explicit human control at the highest-risk edges.",
    useCase:
      "Use when you want the benefits of proactive agents without pretending that unsupervised action is automatically safe or desirable.",
    tradeoffs: [
      "Approval gates slow down certain actions but preserve trust and auditability.",
      "A well-designed gate system requires thoughtful separation of low-risk and high-risk actions.",
    ],
    failureModes: [
      "If approval boundaries are vague, agents will drift into unsafe or confusing behavior.",
      "If every action requires approval, the system stops feeling usefully autonomous.",
    ],
    promptsInvolved: ["frontend-engineering-flagship"],
    relatedDocs: [
      { title: "Autonomy and Approval Gates", href: "/docs/architecture/autonomy-and-approval-gates" },
      { title: "Threat Model", href: "/docs/security/threat-model" },
    ],
    nodes: [
      { id: "task", type: "trigger", label: "Incoming task", description: "A user request or scheduled job starts the flow." },
      { id: "analysis", type: "agent", label: "Automation layer", description: "Analyzes, drafts, and prepares work." },
      { id: "gate", type: "approval", label: "Approval gate", description: "High-risk actions require explicit human confirmation." },
      { id: "memory2", type: "memory", label: "Audit trail", description: "Decisions, outputs, and context remain reviewable." },
      { id: "outcome", type: "output", label: "Approved outcome", description: "A supervised result reaches the outside world." },
    ],
    edges: [
      { id: "g1", source: "task", target: "analysis" },
      { id: "g2", source: "analysis", target: "gate" },
      { id: "g3", source: "gate", target: "memory2" },
      { id: "g4", source: "memory2", target: "outcome" },
    ],
  },
];

export function getArchitectureBySlug(slug: string) {
  return architectures.find((item) => item.slug === slug);
}
