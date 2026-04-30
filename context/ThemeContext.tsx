"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light" | "high-contrast";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && ["dark", "light", "high-contrast"].includes(saved)) {
      setThemeState(saved);
      applyTheme(saved);
    } else {
      applyTheme("dark");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (themeToApply: Theme) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("theme-dark", "theme-light", "theme-high-contrast");
    root.classList.add(`theme-${themeToApply}`);

    const themeColors = {
      dark: {
        "--background": "13 17 23",
        "--foreground": "230 237 243",
        "--card": "22 27 34",
        "--card-foreground": "230 237 243",
        "--muted": "139 148 158",
        "--accent": "20 184 166",
        "--destructive": "248 81 73",
        "--border": "33 38 45",
        "--primary": "20 184 166",
        "--secondary": "6 182 212",
      },
      light: {
        "--background": "255 255 255",
        "--foreground": "15 23 42",
        "--card": "248 250 252",
        "--card-foreground": "15 23 42",
        "--muted": "100 116 139",
        "--accent": "20 184 166",
        "--destructive": "220 38 38",
        "--border": "226 232 240",
        "--primary": "20 184 166",
        "--secondary": "6 182 212",
      },
      "high-contrast": {
        "--background": "0 0 0",
        "--foreground": "255 255 255",
        "--card": "30 30 30",
        "--card-foreground": "255 255 255",
        "--muted": "150 150 150",
        "--accent": "34 197 94",
        "--destructive": "255 67 54",
        "--border": "100 100 100",
        "--primary": "34 197 94",
        "--secondary": "56 189 248",
      },
    };

    const colors = themeColors[themeToApply];
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
};
