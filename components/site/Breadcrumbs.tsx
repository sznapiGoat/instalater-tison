import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; url: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const muted = tone === "dark" ? "text-white/55" : "text-steel";
  const current = tone === "dark" ? "text-white" : "text-ink";

  return (
    <nav aria-label="Drobečková navigace" className={`text-[0.82rem] ${muted}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.url} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              {last ? (
                <span className={current} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link href={c.url} className="underline-offset-4 hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
