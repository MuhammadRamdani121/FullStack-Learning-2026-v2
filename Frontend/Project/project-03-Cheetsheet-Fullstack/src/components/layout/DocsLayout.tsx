import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { X } from "lucide-react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SearchModal from "../search/SearchModal";

export default function DocsLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    }

    window.addEventListener("keydown", handleShortcut);
    window.addEventListener("devdocs-open-search", openSearch);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
      window.removeEventListener("devdocs-open-search", openSearch);
    };
  }, [openSearch]);

  return (
    <div className="min-h-screen bg-docs-bg text-slate-900">
      <Navbar
        onMenuClick={() => setIsMobileMenuOpen(true)}
        onSearchClick={openSearch}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Close navigation"
          />

          {/* Drawer */}
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col overflow-hidden bg-docs-sidebar shadow-xl">
            {/* Drawer Header */}
            <div className="flex h-16 items-center justify-between border-b border-docs-border px-4">
              <span className="font-semibold text-slate-900">
                Documentation Menu
              </span>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Sidebar */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              <Sidebar isMobile onNavigate={closeMobileMenu} />
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </div>
  );
}
