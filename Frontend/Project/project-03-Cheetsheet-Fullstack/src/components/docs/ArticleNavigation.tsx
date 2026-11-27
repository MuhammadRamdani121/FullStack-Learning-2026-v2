import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArticleNavigationProps {
  previous?: string;
  next?: string;
}

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 border-t border-docs-border pt-6 sm:grid-cols-2">
      {previous ? (
        <Link
          to={`/docs/${previous}`}
          className="group rounded-xl border border-docs-border p-4 transition hover:border-indigo-300 hover:bg-indigo-50/50"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ArrowLeft size={14} />
            Previous
          </div>

          <p className="mt-2 font-medium text-slate-700 transition group-hover:text-indigo-600">
            {formatTitle(previous)}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={`/docs/${next}`}
          className="group rounded-xl border border-docs-border p-4 text-right transition hover:border-indigo-300 hover:bg-indigo-50/50"
        >
          <div className="flex items-center justify-end gap-2 text-xs text-slate-400">
            Next
            <ArrowRight size={14} />
          </div>

          <p className="mt-2 font-medium text-slate-700 transition group-hover:text-indigo-600">
            {formatTitle(next)}
          </p>
        </Link>
      )}
    </div>
  );
}
