import "server-only";

import { docsEntries } from "@/lib/docs";

const docsModules = {
  "foundation/site-structure": () => import("@/content/docs/foundation/site-structure.mdx"),
  "prompts/prompt-library-strategy": () => import("@/content/docs/prompts/prompt-library-strategy.mdx"),
  "architecture/pr-only-systems": () => import("@/content/docs/architecture/pr-only-systems.mdx"),
} as const;

export async function getDocComponent(slug: string[]) {
  const key = slug.join("/") as keyof typeof docsModules;
  const loader = docsModules[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function getDocNeighbors(slug: string[]) {
  const index = docsEntries.findIndex((entry) => entry.slug.join("/") === slug.join("/"));
  return {
    previous: index > 0 ? docsEntries[index - 1] : null,
    next: index >= 0 && index < docsEntries.length - 1 ? docsEntries[index + 1] : null,
  };
}
