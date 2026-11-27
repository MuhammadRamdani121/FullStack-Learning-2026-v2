import { Link } from "react-router-dom";
import { Search, Sun, Moon, Code2, Menu } from "lucide-react";

import { useTheme } from "../theme/useTheme";

interface NavbarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Navbar({ onMenuClick, onSearchClick }: NavbarProps) {
  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-docs-border bg-docs-surface/90 backdrop-blur">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="mr-2 rounded-lg p-2 text-docs-muted transition hover:bg-docs-hover lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            R
          </div>

          <span className="font-semibold tracking-tight text-docs-text">
            Ramdani
            <span className="text-indigo-500">DevDocs</span>
          </span>
        </Link>

        {/* Search */}
        <button
          type="button"
          onClick={onSearchClick}
          className="ml-4 flex w-full max-w-md items-center gap-3 rounded-lg border border-docs-border bg-docs-bg px-3 py-2 text-sm text-docs-muted transition hover:border-indigo-400"
        >
          <Search size={16} />

          <span className="hidden flex-1 text-left sm:block">
            Search documentation...
          </span>

          <span className="flex-1 text-left sm:hidden">Search...</span>

          <span className="hidden rounded border border-docs-border bg-docs-surface px-1.5 py-0.5 text-xs sm:inline">
            Ctrl K
          </span>
        </button>

        {/* Actions */}
        <div className="ml-2 flex shrink-0 items-center gap-1 sm:ml-4 sm:gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggle}
            className="rounded-lg p-2 text-docs-muted transition hover:bg-docs-hover hover:text-docs-text"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-docs-muted transition hover:bg-docs-hover hover:text-docs-text"
            aria-label="GitHub"
            title="GitHub"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
