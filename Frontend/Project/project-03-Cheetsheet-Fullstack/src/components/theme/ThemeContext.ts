import { createContext } from "react";
import type { Theme } from "../../utils/theme";

export interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
