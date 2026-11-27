import { useState, useEffect, type ReactNode } from "react";

import {
  getInitialTheme,
  applyTheme,
  toggleTheme,
  type Theme,
} from "../../utils/theme";

import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleToggle() {
    setTheme((currentTheme) => toggleTheme(currentTheme));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle: handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
