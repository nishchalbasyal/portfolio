"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const themes = [
    { id: "dark" as const, label: "🌙 Dark", icon: "dark" },
    { id: "light" as const, label: "☀️ Light", icon: "light" },
    { id: "high-contrast" as const, label: "⚡ Contrast", icon: "contrast" },
  ];

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-xs font-mono border border-border px-2 py-1 rounded-md
                   hover:border-teal text-muted hover:text-teal transition-all flex items-center gap-1"
        aria-label="Toggle theme"
      >
        {currentTheme.label.split(" ")[0]} <ChevronDown size={12} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 bg-surface border border-border rounded-md shadow-lg z-50"
          >
            <div className="py-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                    theme === t.id
                      ? "bg-border text-teal"
                      : "text-muted hover:text-text hover:bg-border/50"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
