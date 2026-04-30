"use client";

import { useLang } from "@/context/LangContext";

export function LanguageSwitcher() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="text-xs font-mono border border-border px-2 py-1 rounded-md
                 hover:border-teal text-muted hover:text-teal transition-all"
      aria-label="Toggle language"
    >
      {lang === "en" ? "🇩🇪 DE" : "🇬🇧 EN"}
    </button>
  );
}
