import type { ArticleSection } from "../../data/articles/types";

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <aside className="hidden w-56 shrink-0 xl:block">
      <div className="sticky top-24">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          On this page
        </h3>

        <nav className="space-y-1 border-l border-slate-200">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-500 transition hover:border-indigo-400 hover:text-indigo-600"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
