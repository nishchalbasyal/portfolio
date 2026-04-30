"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

const primaryNavLinks = [
  { key: "navAbout", href: "#about" },
  { key: "navExperience", href: "#experience" },
  { key: "navSkills", href: "#skills" },
  { key: "navProjects", href: "#projects" },
  { key: "navContact", href: "#contact" },
];

const secondaryNavLinks = [
  { key: "navPublications", href: "#publications" },
  { key: "testimonialsHeading", href: "#testimonials" },
  { key: "navRoadmap", href: "#roadmap" },
];

const allNavLinks = [...primaryNavLinks, ...secondaryNavLinks];

export function Navbar() {
  const { lang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    allNavLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-sans font-bold text-lg text-text hover:text-teal transition-colors cursor-pointer">
          {t[lang].navName}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {primaryNavLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm font-mono transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-teal"
                  : "text-muted hover:text-text"
              }`}
            >
              {t[lang][link.key as keyof typeof t.en]}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`text-sm font-mono transition-colors flex items-center gap-1 ${
                moreOpen ? "text-teal" : "text-muted hover:text-text"
              }`}
            >
              More
              <ChevronDown
                size={14}
                className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 bg-surface border border-border rounded-md py-2 min-w-40 shadow-lg"
                >
                  {secondaryNavLinks.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-2 text-sm font-mono transition-colors ${
                        activeSection === link.href.slice(1)
                          ? "text-teal bg-bg/50"
                          : "text-muted hover:text-teal hover:bg-bg/30"
                      }`}
                    >
                      {t[lang][link.key as keyof typeof t.en]}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/cv.pdf"
            className="text-sm font-mono border border-border px-3 py-1 rounded-md
                       hover:border-teal hover:text-teal text-muted transition-all"
          >
            ↓ {t[lang].navCv}
          </a>
          <div className="flex items-center gap-2 border-l border-border pl-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text hover:text-teal transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {allNavLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-sm font-mono text-muted hover:text-teal transition-colors"
                >
                  {t[lang][link.key as keyof typeof t.en]}
                </a>
              ))}
              <a
                href="/cv.pdf"
                onClick={handleNavClick}
                className="block text-sm font-mono border border-border px-3 py-1 rounded-md
                           hover:border-teal hover:text-teal text-muted transition-all text-center"
              >
                ↓ {t[lang].navCv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
