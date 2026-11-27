import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  ArrowRight,
  Trophy,
  Circle,
} from "lucide-react";

import { getAllArticles } from "../../data/articles";

const STORAGE_PREFIX = "ramdani-devdocs-completed-";

const PROGRESS_EVENT = "devdocs-progress-updated";

interface CategoryProgress {
  name: string;
  total: number;
  completed: number;
  percentage: number;
}

function getCompletedArticles(): string[] {
  return getAllArticles()
    .filter((article) => {
      return (
        localStorage.getItem(`${STORAGE_PREFIX}${article.slug}`) === "true"
      );
    })
    .map((article) => article.slug);
}

export default function ProgressDashboard() {
  const articles = getAllArticles();

  const [completedArticles, setCompletedArticles] =
    useState<string[]>(getCompletedArticles);

  useEffect(() => {
    const updateProgress = () => {
      setCompletedArticles(getCompletedArticles());
    };

    window.addEventListener(PROGRESS_EVENT, updateProgress);
    window.addEventListener("storage", updateProgress);

    return () => {
      window.removeEventListener(PROGRESS_EVENT, updateProgress);
      window.removeEventListener("storage", updateProgress);
    };
  }, []);

  const totalArticles = articles.length;
  const completedCount = completedArticles.length;
  const remainingCount = totalArticles - completedCount;

  const overallProgress =
    totalArticles > 0 ? Math.round((completedCount / totalArticles) * 100) : 0;

  const categoryProgress = useMemo(() => {
    const categories = [
      ...new Set(articles.map((article) => article.category)),
    ];

    return categories.map((category): CategoryProgress => {
      const categoryArticles = articles.filter(
        (article) => article.category === category,
      );

      const completed = categoryArticles.filter((article) =>
        completedArticles.includes(article.slug),
      ).length;

      const total = categoryArticles.length;

      return {
        name: category,
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      };
    });
  }, [articles, completedArticles]);

  const nextArticles = articles.filter(
    (article) => !completedArticles.includes(article.slug),
  );

  const recentlyCompleted = articles.filter((article) =>
    completedArticles.includes(article.slug),
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <p className="mb-2 text-sm font-medium text-emerald-500">
          YOUR LEARNING JOURNEY
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Learning Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
          Pantau perjalanan belajar Full Stack Development kamu. Lihat progress,
          materi yang sudah selesai, dan materi yang perlu dipelajari
          berikutnya.
        </p>
      </section>

      {/* Overall Progress */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Overall Progress
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                {overallProgress}%
              </span>

              <span className="text-sm text-zinc-500">completed</span>
            </div>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {completedCount} dari {totalArticles} materi telah selesai
            </p>
          </div>

          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-8 border-emerald-100 dark:border-emerald-950">
            <div className="text-center">
              <span className="text-2xl font-bold text-emerald-500">
                {overallProgress}%
              </span>

              <p className="text-xs text-zinc-500">Progress</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs text-zinc-500">
            <span>Learning progress</span>
            <span>
              {completedCount}/{totalArticles}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Materials"
          value={totalArticles}
          description="Available learning materials"
          icon={<BookOpen size={20} />}
        />

        <StatCard
          title="Completed"
          value={completedCount}
          description="Materials you've completed"
          icon={<CheckCircle2 size={20} />}
        />

        <StatCard
          title="Remaining"
          value={remainingCount}
          description="Materials left to learn"
          icon={<Clock3 size={20} />}
        />

        <StatCard
          title="Achievement"
          value={`${overallProgress}%`}
          description="Your overall learning progress"
          icon={<Trophy size={20} />}
        />
      </section>

      {/* Category Progress */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Progress by Category
          </h2>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Progress belajar kamu di setiap teknologi.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {categoryProgress.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-zinc-900 dark:text-white">
                  {category.name}
                </h3>

                <span className="text-sm font-medium text-emerald-500">
                  {category.percentage}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${category.percentage}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                {category.completed} of {category.total} materials completed
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Continue Learning */}
      <section>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Continue Learning
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Materi yang belum kamu selesaikan.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {nextArticles.slice(0, 5).map((article) => (
            <Link
              key={article.slug}
              to={`/docs/${article.slug}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-emerald-500/50 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Circle size={18} className="shrink-0 text-zinc-400" />

                <div className="min-w-0">
                  <h3 className="truncate font-medium text-zinc-900 dark:text-white">
                    {article.title}
                  </h3>

                  <p className="mt-1 truncate text-xs text-zinc-500">
                    {article.category} · {article.duration}
                  </p>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-emerald-500"
              />
            </Link>
          ))}

          {nextArticles.length === 0 && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
              <Trophy size={32} className="mx-auto text-emerald-500" />

              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">
                All materials completed!
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Mantap! Kamu sudah menyelesaikan semua materi yang tersedia.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Completed Materials */}
      {recentlyCompleted.length > 0 && (
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Completed Materials
            </h2>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Materi yang sudah kamu tandai selesai.
            </p>
          </div>

          <div className="space-y-3">
            {recentlyCompleted.map((article) => (
              <Link
                key={article.slug}
                to={`/docs/${article.slug}`}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-emerald-500/50 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />

                <div className="min-w-0">
                  <h3 className="truncate font-medium text-zinc-900 dark:text-white">
                    {article.title}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">
                    {article.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Motivation */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
        <div className="flex items-start gap-4">
          <Flame size={24} className="shrink-0 text-emerald-500" />

          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Keep Learning, Keep Building!
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Konsistensi lebih penting daripada kecepatan. Selesaikan satu
              materi, praktikkan, lalu lanjut ke materi berikutnya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {title}
        </span>

        <span className="text-emerald-500">{icon}</span>
      </div>

      <p className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
