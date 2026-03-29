import "server-only";

export type DocsEntry = {
  slug: string[];
  title: string;
  description: string;
  section: string;
  file: string;
  toc?: { id: string; label: string }[];
};

export const docsEntries: DocsEntry[] = [
  {
    slug: ["foundation", "site-structure"],
    title: "Site Structure",
    description: "How the portfolio is organized across routes, content registries, and feature folders.",
    section: "Foundation",
    file: "site-structure.mdx",
    toc: [
      { id: "principles", label: "Principles" },
      { id: "route-strategy", label: "Route strategy" },
      { id: "content-strategy", label: "Content strategy" },
    ],
  },
  {
    slug: ["prompts", "prompt-library-strategy"],
    title: "Prompt Library Strategy",
    description: "How prompts are modeled, versioned, reviewed, and presented.",
    section: "Prompts",
    file: "prompt-library-strategy.mdx",
    toc: [
      { id: "what-each-prompt-should-communicate", label: "What each prompt should communicate" },
      { id: "why-structured-prompt-content-matters", label: "Why structured prompt content matters" },
      { id: "quality-bar", label: "Quality bar" },
    ],
  },
  {
    slug: ["architecture", "pr-only-systems"],
    title: "PR-only Systems",
    description: "Why PR-only orchestration increases trust, legibility, and safety.",
    section: "Architecture",
    file: "pr-only-systems.mdx",
    toc: [
      { id: "core-benefits", label: "Core benefits" },
      { id: "tradeoff", label: "Tradeoff" },
      { id: "when-it-works-best", label: "When it works best" },
    ],
  },
];

export function getDocBySlug(slug: string[]) {
  return docsEntries.find((entry) => entry.slug.join("/") === slug.join("/"));
}

export function getDocsSections() {
  return docsEntries.reduce<Record<string, DocsEntry[]>>((acc, entry) => {
    acc[entry.section] ??= [];
    acc[entry.section].push(entry);
    return acc;
  }, {});
}
