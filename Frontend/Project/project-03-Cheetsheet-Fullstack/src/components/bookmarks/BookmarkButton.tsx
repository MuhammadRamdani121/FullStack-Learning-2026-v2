import { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

import {
  isBookmarked,
  toggleBookmark,
  subscribeBookmarks,
} from "../../utils/bookmarks";

import { useEffect } from "react";

interface BookmarkButtonProps {
  slug: string;
}

export default function BookmarkButton({ slug }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(() => isBookmarked(slug));

  useEffect(() => {
    const updateBookmark = () => {
      setSaved(isBookmarked(slug));
    };

    return subscribeBookmarks(updateBookmark);
  }, [slug]);

  const handleToggle = () => {
    const newStatus = toggleBookmark(slug);

    setSaved(newStatus);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={saved}
      title={saved ? "Remove bookmark" : "Save article"}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
        saved
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-zinc-200 text-zinc-600 hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-700 dark:text-zinc-400"
      }`}
    >
      {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}

      <span>{saved ? "Saved" : "Bookmark"}</span>
    </button>
  );
}
