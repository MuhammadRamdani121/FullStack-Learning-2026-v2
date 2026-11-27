export type Theme = "light" | "dark";

const THEME_KEY = "ramdani-devdocs-theme";

export function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme(currentTheme: Theme): Theme {
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);

  return newTheme;
}
