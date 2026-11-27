const STORAGE_KEY = "ramdani-devdocs-bookmarks";
const BOOKMARK_EVENT = "devdocs-bookmarks-updated";

export function getBookmarks(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function isBookmarked(slug: string): boolean {
  return getBookmarks().includes(slug);
}

export function toggleBookmark(slug: string): boolean {
  const bookmarks = getBookmarks();

  const exists = bookmarks.includes(slug);

  const updatedBookmarks = exists
    ? bookmarks.filter((item) => item !== slug)
    : [...bookmarks, slug];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookmarks));

  window.dispatchEvent(new Event(BOOKMARK_EVENT));

  return !exists;
}

export function removeBookmark(slug: string): void {
  const bookmarks = getBookmarks();

  const updatedBookmarks = bookmarks.filter((item) => item !== slug);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookmarks));

  window.dispatchEvent(new Event(BOOKMARK_EVENT));
}

export function subscribeBookmarks(callback: () => void): () => void {
  window.addEventListener(BOOKMARK_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(BOOKMARK_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
