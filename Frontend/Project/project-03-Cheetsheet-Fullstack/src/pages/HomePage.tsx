import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Search,
} from "lucide-react";

import ProgressDashboard from "../components/dashboard/ProgressDashboard";
import { getAllArticles } from "../data/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const featuredArticle = articles[0];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <Code2 size={14} />
            FULL STACK LEARNING DOCUMENTATION
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Learn.
            <span className="text-emerald-500"> Build.</span>
            <br />
            Become a Developer.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
            Dokumentasi pribadi untuk belajar Full Stack Web Development dari
            fundamental sampai membangun aplikasi nyata. Belajar konsep, pahami
            contoh kode, dan praktikkan setiap materi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {featuredArticle && (
              <Link
                to={`/docs/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-600"
              >
                Start Learning
                <ArrowRight size={16} />
              </Link>
            )}

            <Link
              to="/docs/css"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Explore Documentation
              <BookOpen size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Learning Path
          </h2>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Roadmap teknologi yang akan dipelajari.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <LearningCard
            number="01"
            title="Frontend Development"
            description="HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, dan routing."
            icon={<Code2 size={20} />}
          />

          <LearningCard
            number="02"
            title="Backend Development"
            description="Node.js, Express, REST API, authentication, validation, dan security."
            icon={<GraduationCap size={20} />}
          />

          <LearningCard
            number="03"
            title="Database"
            description="SQL, database design, relationships, query, ORM, dan Prisma."
            icon={<BookOpen size={20} />}
          />

          <LearningCard
            number="04"
            title="Development Workflow"
            description="Git, GitHub, debugging, testing, code quality, dan collaboration."
            icon={<Code2 size={20} />}
          />

          <LearningCard
            number="05"
            title="Deployment & DevOps"
            description="Environment variables, hosting, CI/CD, Docker, dan deployment."
            icon={<GraduationCap size={20} />}
          />

          <LearningCard
            number="06"
            title="Real Projects"
            description="Menggabungkan seluruh materi ke project nyata untuk portfolio."
            icon={<BookOpen size={20} />}
          />
        </div>
      </section>

      {/* Progress Dashboard */}
      <ProgressDashboard />

      {/* Explore */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Looking for something?
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Cari materi, konsep, syntax, atau contoh kode dari dokumentasi.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new Event("devdocs-open-search"));
            }}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <Search size={16} />
            Search Documentation
            <kbd className="ml-2 rounded border border-zinc-200 px-1.5 py-0.5 text-xs dark:border-zinc-700">
              Ctrl K
            </kbd>
          </button>
        </div>
      </section>
    </div>
  );
}

interface LearningCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function LearningCard({ number, title, description, icon }: LearningCardProps) {
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-emerald-500/40 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-wider text-zinc-400">
          MODULE {number}
        </span>

        <span className="text-emerald-500">{icon}</span>
      </div>

      <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
