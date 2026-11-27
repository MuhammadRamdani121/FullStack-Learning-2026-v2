import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  BookOpen,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Bookmark,
} from "lucide-react";

import { navigation } from "../../data/navigation";

interface SidebarProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

const sectionIcons = [
  BookOpen,
  Bookmark,
  Code2,
  Wrench,
  Server,
  Database,
  ShieldCheck,
];

export default function Sidebar({
  isMobile = false,
  onNavigate,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() =>
    Object.fromEntries(navigation.map((section) => [section.title, true])),
  );

  function toggleSection(title: string) {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  return (
    <aside
      className={`w-64 shrink-0 border-r border-docs-border bg-docs-sidebar ${
        isMobile ? "h-full" : "hidden lg:block"
      }`}
    >
      <div
        className={`flex flex-col ${
          isMobile ? "h-full" : "sticky top-16 h-[calc(100vh-64px)]"
        } overflow-hidden`}
      >
        {/* Navigation */}
        <nav className="min-h-0 flex-1 space-y-6 overflow-y-auto px-3 py-5">
          {navigation.map((section, index) => {
            const Icon = sectionIcons[index] ?? BookOpen;
            const isExpanded = expandedSections[section.title];

            return (
              <div key={section.title}>
                {/* Section Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-wider text-docs-muted transition hover:text-docs-text"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={15} />
                    {section.title}
                  </span>

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>

                {/* Section Items */}
                <div
                  className={`grid transition-all duration-200 ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-1 space-y-1">
                      {section.children?.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path!}
                          end={item.path === "/"}
                          onClick={onNavigate}
                          className={({ isActive }) =>
                            `relative block rounded-lg px-3 py-2 text-sm transition ${
                              isActive
                                ? "bg-indigo-500/10 font-medium text-indigo-500"
                                : "text-docs-muted hover:bg-docs-hover hover:text-docs-text"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <span className="flex items-center gap-2">
                              {isActive && (
                                <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-indigo-500" />
                              )}

                              {item.title}
                            </span>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-docs-border p-4">
          <div className="flex items-center gap-3 rounded-xl bg-docs-hover p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
              <GraduationCap size={19} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-docs-text">
                Learning Mode
              </p>

              <p className="text-xs text-docs-muted">Full Stack Journey</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
