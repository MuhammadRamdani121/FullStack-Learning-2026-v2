import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  BookOpen,
  ArrowRight,
  Trash2,
} from "lucide-react";

import { getAllArticles } from "../data/articles";
import {
  getBookmarks,
  removeBookmark,
  subscribeBookmarks,
} from "../utils/bookmarks";

export default function SavedPage() {
  const [bookmarks, setBookmarks] = useState<string[]>(getBookmarks);

  useEffect(() => {
    return subscribeBookmarks(() => {
      setBookmarks(getBookmarks());
    });
  }, []);

  const savedArticles = getAllArticles().filter((article) =>
    bookmarks.includes(article.slug),
  );

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-5 py-8 sm:px-8">
      {/* Header */}
      <section>
        <div className="mb-3 inline-flex items-center gap-2 text-emerald-500">
          <BookmarkCheck size={18} />

          <span className="text-sm font-medium">PERSONAL LIBRARY</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Saved Articles
        </h1>

        <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          Kumpulan materi yang kamu simpan untuk dipelajari kembali nanti.
        </p>
      </section>

      {/* Statistics */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
            <Bookmark size={22} />
          </div>

          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {savedArticles.length}
            </p>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Saved materials
            </p>
          </div>
        </div>
      </section>

      {/* Saved List */}
      {savedArticles.length > 0 ? (
        <section className="space-y-4">
          {savedArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <BookOpen size={20} />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {article.category}
                    </span>

                    <span className="text-xs text-zinc-500">
                      {article.duration}
                    </span>
                  </div>

                  <h2 className="font-semibold text-zinc-900 dark:text-white">
                    {article.title}
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                    {article.description}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Link
                  to={`/docs/${article.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>

                <button
                  type="button"
                  onClick={() => removeBookmark(article.slug)}
                  title="Remove bookmark"
                  aria-label={`Remove ${article.title} from bookmarks`}
                  className="rounded-lg border border-zinc-200 p-2 text-zinc-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500 dark:border-zinc-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </article>
          ))}
        </section>
      ) : (
        /* Empty State */
        <section className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            <Bookmark size={28} className="text-zinc-400" />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
            No saved articles yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Bookmark materi yang ingin kamu pelajari kembali. Artikel yang
            disimpan akan muncul di halaman ini.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
          >
            Explore Documentation
            <ArrowRight size={16} />
          </Link>
        </section>
      )}
    </div>
  );
}
