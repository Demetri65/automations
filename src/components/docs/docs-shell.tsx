import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { DocsEntry } from "@/lib/docs";
import { getDocsSections } from "@/lib/docs";
import { cn } from "@/lib/utils";

export function DocsShell({
  children,
  current,
  toc,
}: {
  children: React.ReactNode;
  current?: DocsEntry;
  toc?: { id: string; label: string }[];
}) {
  const sections = getDocsSections();

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)_220px]">
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-8">
          {Object.entries(sections).map(([section, entries]) => (
            <div key={section} className="space-y-3">
              <p className="text-sm font-medium text-slate-900">{section}</p>
              <div className="space-y-1">
                {entries.map((entry) => {
                  const active = current?.slug.join("/") === entry.slug.join("/");
                  return (
                    <Link
                      key={entry.slug.join("/")}
                      href={`/docs/${entry.slug.join("/")}`}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm transition",
                        active ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                      )}
                    >
                      {entry.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="min-w-0 space-y-8">
        {current ? (
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/docs">Docs</Link>
            {current.slug.map((segment, index) => (
              <span key={segment} className="inline-flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                <span>{index === current.slug.length - 1 ? current.title : segment}</span>
              </span>
            ))}
          </div>
        ) : null}
        {children}
      </div>

      <aside className="hidden xl:block">
        {toc?.length ? (
          <div className="sticky top-24 rounded-xl border bg-white p-4">
            <p className="text-sm font-medium text-slate-900">On this page</p>
            <div className="mt-3 space-y-2">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block text-sm text-slate-600 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
