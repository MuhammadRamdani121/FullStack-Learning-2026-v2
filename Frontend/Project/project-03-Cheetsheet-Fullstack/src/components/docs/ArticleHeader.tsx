import { Clock3, BookOpen } from "lucide-react";
import type { Article } from "../../data/articles/types";

interface ArticleHeaderProps {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const difficultyColor = {
    Beginner: "bg-emerald-50 text-emerald-700",
    Intermediate: "bg-amber-50 text-amber-700",
    Advanced: "bg-rose-50 text-rose-700",
  };

  return (
    <header className="border-b border-docs-border pb-8">
      <p className="mb-4 text-sm font-medium text-indigo-600">
        {article.category}
      </p>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {article.title}
      </h1>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
        {article.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            difficultyColor[article.difficulty]
          }`}
        >
          {article.difficulty}
        </span>

        <span className="flex items-center gap-1.5 text-sm text-slate-500">
          <Clock3 size={15} />
          {article.duration}
        </span>

        <span className="flex items-center gap-1.5 text-sm text-slate-500">
          <BookOpen size={15} />
          {article.sections.length} sections
        </span>
      </div>
    </header>
  );
}
