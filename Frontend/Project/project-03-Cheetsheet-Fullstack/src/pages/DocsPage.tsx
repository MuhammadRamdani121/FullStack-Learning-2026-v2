import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Circle, ChevronRight } from "lucide-react";

import { getArticle } from "../data/articles";
import ArticleHeader from "../components/docs/ArticleHeader";
import ArticleContent from "../components/docs/ArticleContent";
import TableOfContents from "../components/docs/TableOfContents";
import ArticleNavigation from "../components/docs/ArticleNavigation";
import BookmarkButton from "../components/bookmarks/BookmarkButton";

export default function DocsPage() {
  const { slug = "" } = useParams();

  const article = getArticle(slug);

  const storageKey = `ramdani-devdocs-completed-${slug}`;

  const [isCompleted, setIsCompleted] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
  });

  function toggleCompleted() {
    const nextState = !isCompleted;

    setIsCompleted(nextState);

    localStorage.setItem(storageKey, String(nextState));

    window.dispatchEvent(new Event("devdocs-progress-updated"));
  }

  return (
    <div className="mx-auto max-w-[1500px]">
      <div className="flex items-start">
        {/* Article */}
        <article className="min-w-0 flex-1 px-6 py-10 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="transition hover:text-indigo-600">
              Documentation
            </Link>

            <ChevronRight size={14} />

            <span>{article.category}</span>

            <ChevronRight size={14} />

            <span className="text-slate-600">{article.title}</span>
          </div>

          {/* Header */}
          <ArticleHeader article={article} />

          {/* Content */}
          <ArticleContent sections={article.sections} />

          {/* Bookmark */}
          <div className="mt-8 flex justify-end">
            <BookmarkButton slug={article.slug} />
          </div>

          {/* Completion */}
          <button
            type="button"
            onClick={toggleCompleted}
            className={`mt-4 flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
              isCompleted
                ? "border-emerald-200 bg-emerald-50"
                : "border-docs-border bg-white hover:border-indigo-300"
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 size={22} className="text-emerald-600" />
            ) : (
              <Circle size={22} className="text-slate-400" />
            )}

            <div>
              <p
                className={`text-sm font-semibold ${
                  isCompleted ? "text-emerald-700" : "text-slate-700"
                }`}
              >
                {isCompleted ? "Materi sudah selesai!" : "Mark as completed"}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {isCompleted
                  ? "Progress belajar tersimpan."
                  : "Tandai jika kamu sudah memahami materi ini."}
              </p>
            </div>
          </button>

          {/* Previous & Next */}
          <ArticleNavigation previous={article.previous} next={article.next} />
        </article>

        {/* Table of Contents */}
        <div className="sticky top-16 hidden h-[calc(100vh-64px)] overflow-y-auto border-l border-docs-border px-5 py-10 xl:block">
          <TableOfContents sections={article.sections} />
        </div>
      </div>
    </div>
  );
}
