"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "de";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (saved === "en" || saved === "de")) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.startsWith("de") ? "de" : "en";
      setLang(browserLang);
    }
  }, []);

  const toggle = () => {
    setLang((prevLang) => {
      const nextLang = prevLang === "en" ? "de" : "en";
      localStorage.setItem("lang", nextLang);
      return nextLang;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
};
