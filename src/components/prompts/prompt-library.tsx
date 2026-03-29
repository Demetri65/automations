"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { PromptRecord } from "@/lib/prompts";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/site-shell";

export function PromptLibrary({ prompts }: { prompts: PromptRecord[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = useMemo(() => ["all", ...new Set(prompts.flatMap((prompt) => prompt.tags))], [prompts]);

  const filtered = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesQuery = [prompt.title, prompt.summary, prompt.audience, ...prompt.tags]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTag = selectedTag === "all" || prompt.tags.includes(selectedTag);
      return matchesQuery && matchesTag;
    });
  }, [prompts, query, selectedTag]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700">Search prompts</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title, audience, or tag" className="pl-9" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-md border px-3 py-2 text-sm transition ${selectedTag === tag ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((prompt) => (
          <Link key={prompt.slug} href={`/prompts/${prompt.slug}`}>
            <Card title={prompt.title} description={prompt.summary}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{prompt.status}</Badge>
                  <Badge variant="outline">v{prompt.version}</Badge>
                  <Badge variant="outline">{prompt.model}</Badge>
                </div>
                <p className="text-sm text-slate-600">{prompt.audience}</p>
                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
