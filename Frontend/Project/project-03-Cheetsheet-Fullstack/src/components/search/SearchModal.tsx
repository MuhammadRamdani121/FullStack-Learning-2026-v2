import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  FileText,
  X,
} from "lucide-react";
import { searchArticles } from "../../data/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const results = useMemo(() => {
    return searchArticles(query);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((current) =>
          Math.min(current + 1, results.length - 1),
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelectedIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === "Enter" && results[selectedIndex]) {
        navigate(`/docs/${results[selectedIndex].slug}`);
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, results, selectedIndex, navigate, handleClose, onClose]);

  function openResult(slug: string) {
    navigate(`/docs/${slug}`);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] sm:pt-[15vh]">
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-label="Close search"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4">
          <Search size={20} className="shrink-0 text-indigo-600" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search documentation..."
            className="h-14 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />

          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {!query.trim() ? (
            <div className="px-4 py-10 text-center">
              <Search size={28} className="mx-auto mb-3 text-slate-300" />

              <p className="text-sm font-medium text-slate-600">
                Search the documentation
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Cari topik, syntax, atau konsep.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-medium text-slate-600">
                No results found
              </p>

              <p className="mt-1 text-xs text-slate-400">Coba keyword lain.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((result, index) => (
                <button
                  type="button"
                  key={result.slug}
                  onClick={() => openResult(result.slug)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition ${
                    selectedIndex === index
                      ? "bg-indigo-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`mt-0.5 rounded-lg p-2 ${
                      selectedIndex === index
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <FileText size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {result.title}
                    </p>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                      {result.description}
                    </p>

                    <span className="mt-2 inline-block text-xs text-indigo-600">
                      {result.category}
                    </span>
                  </div>

                  {selectedIndex === index && (
                    <CornerDownLeft
                      size={15}
                      className="mt-2 text-indigo-500"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ArrowUp size={13} />
              <ArrowDown size={13} />
              Navigate
            </span>

            <span className="flex items-center gap-1">
              <CornerDownLeft size={13} />
              Open
            </span>
          </div>

          <span className="text-xs text-slate-400">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
