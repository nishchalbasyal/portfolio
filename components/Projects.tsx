"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { lang } = useLang();
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(),
  );

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(
      projects.filter((p) => !p.placeholder).flatMap((p) => p.tags || []),
    ),
  ).sort();

  // Filter projects based on selected tags
  const filteredProjects =
    selectedFilters.size === 0
      ? projects
      : (projects
          .map((p) => {
            if (p.placeholder) return p;
            const hasTag = p.tags?.some((tag) => selectedFilters.has(tag));
            return hasTag ? p : null;
          })
          .filter((p) => p !== null) as typeof projects);

  const toggleFilter = (tag: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(tag)) {
      newFilters.delete(tag);
    } else {
      newFilters.add(tag);
    }
    setSelectedFilters(newFilters);
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "live":
        return "bg-green/10 text-green border-green/30 dark:bg-green/20 dark:border-green/50";
      case "in-progress":
        return "bg-amber/10 text-amber border-amber/30 dark:bg-amber/20 dark:border-amber/50";
      case "notebook":
        return "bg-cyan/10 text-cyan border-cyan/30 dark:bg-cyan/20 dark:border-cyan/50";
      default:
        return "bg-teal/10 text-teal border-teal/30 dark:bg-teal/20 dark:border-teal/50";
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case "live":
        return t[lang].projectsLive;
      case "in-progress":
        return t[lang].projectsInProgress;
      case "notebook":
        return t[lang].projectsNotebook;
      default:
        return "";
    }
  };

  const isUnavailableLink = (href?: string) => !href || href === "#";

  return (
    <AnimatedSection id="projects">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm font-bold">
          {t[lang].projectsSectionNum}.
        </span>
        <h2 className="text-5xl md:text-6xl font-sans font-bold text-text mt-2">
          {t[lang].projectsHeading}
        </h2>
      </div>

      {/* Filter Tags */}
      {allTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {allTags.map((tag, idx) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => toggleFilter(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                selectedFilters.has(tag)
                  ? "bg-teal/15 text-teal border-teal/40 dark:bg-teal/20 dark:border-teal/50 hover:bg-teal/25 dark:hover:bg-teal/30"
                  : "bg-surface border-border text-muted hover:text-foreground hover:border-teal/40 dark:hover:border-teal/50"
              }`}
            >
              #{tag}
            </motion.button>
          ))}
          {selectedFilters.size > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFilters(new Set())}
              className="px-3 py-1.5 rounded-full text-xs font-mono transition-all border bg-orange/10 text-orange border-orange/30 dark:border-orange/50 hover:bg-orange/15 dark:hover:bg-orange/20 ml-2"
            >
              {lang === "en" ? "Clear Filters" : "Filter löschen"}
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {project.placeholder ? (
              <Card className="bg-surface border-border/50 border-dashed p-6 h-full flex items-center justify-center">
                <p className="text-center text-muted font-mono text-sm">
                  {typeof project.title === "string"
                    ? project.title
                    : project.title[lang]}
                </p>
              </Card>
            ) : (
              <Card className="bg-surface border-border/70 p-6 hover:border-teal/50 hover:shadow-teal/10 transition-all h-full flex flex-col">
                {/* Header with Status & Featured */}
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-sans font-bold text-text">
                        {typeof project.title === "string"
                          ? project.title
                          : project.title[lang]}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-mono text-yellow/70 px-1.5 py-0.5 bg-yellow/10 rounded inline-block">
                          ★ Featured
                        </span>
                      )}
                    </div>
                  </div>
                  {project.status && (
                    <Badge
                      className={`text-xs font-mono flex-shrink-0 ${getStatusColor(
                        project.status,
                      )}`}
                      variant="outline"
                    >
                      {getStatusText(project.status)}
                    </Badge>
                  )}
                </div>

                {/* Project Image - Dynamic Height */}
                {project.image && (
                  <div className="mb-4 -mx-6 -mt-1 relative h-32 bg-bg/50">
                    <Image
                      src={project.image}
                      alt={
                        typeof project.title === "string"
                          ? project.title
                          : project.title[lang]
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                {project.desc && (
                  <p className="text-sm text-muted mb-4">
                    {project.desc[lang]}
                  </p>
                )}

                {/* Case Study Proof */}
                {project.caseStudy && (
                  <div className="mb-4 rounded-lg bg-bg/40 border border-border/60 p-4 space-y-2">
                    {[
                      {
                        label: lang === "en" ? "Problem" : "Problem",
                        value: project.caseStudy.problem[lang],
                      },
                      {
                        label: lang === "en" ? "Solution" : "Lösung",
                        value: project.caseStudy.solution[lang],
                      },
                      {
                        label: lang === "en" ? "Tech Used" : "Tech",
                        value: project.caseStudy.tech[lang],
                      },
                      {
                        label: lang === "en" ? "Result" : "Ergebnis",
                        value: project.caseStudy.result[lang],
                      },
                    ].map((item) => (
                      <p key={item.label} className="text-xs text-muted">
                        <span className="font-mono text-teal">
                          {item.label}:
                        </span>{" "}
                        {item.value}
                      </p>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        variant="outline"
                        className="text-xs font-mono text-teal border-teal/30 bg-teal/8 dark:border-teal/50 dark:bg-teal/5 font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Links */}
                {(project.github || project.notebook || project.demo) && (
                  <div className="flex flex-col gap-2 mt-auto pt-4">
                    <div className="flex gap-2">
                      {project.demo && (
                        isUnavailableLink(project.demo) ? (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            title="Private / Coming Soon"
                            className="flex-1 text-xs font-mono border-border text-muted opacity-60 cursor-not-allowed"
                          >
                            {lang === "en" ? "Coming Soon" : "Bald verfügbar"}
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs font-mono border-green/30 text-green dark:border-green/50 hover:border-green/60 dark:hover:border-green hover:bg-green/8 dark:hover:bg-green/5 transition-all"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {lang === "en" ? "View Demo" : "Demo anzeigen"}
                              <ExternalLink size={12} className="ml-1" />
                            </a>
                          </Button>
                        )
                      )}
                      {project.github && (
                        isUnavailableLink(project.github) ? (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            title="Private / Coming Soon"
                            className="flex-1 text-xs font-mono border-border text-muted opacity-60 cursor-not-allowed"
                          >
                            {lang === "en" ? "Private / Soon" : "Privat / Bald"}
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs font-mono border-border hover:border-teal/60 dark:hover:border-teal hover:text-teal hover:bg-teal/8 dark:hover:bg-teal/5 transition-all"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t[lang].projectsViewGithub}
                              <ExternalLink size={12} className="ml-1" />
                            </a>
                          </Button>
                        )
                      )}
                    </div>
                    {project.notebook && (
                      isUnavailableLink(project.notebook) ? (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled
                          title="Private / Coming Soon"
                          className="w-full text-xs font-mono border-border text-muted opacity-60 cursor-not-allowed"
                        >
                          {lang === "en" ? "Notebook Soon" : "Notebook bald"}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-xs font-mono border-border hover:border-teal/60 dark:hover:border-teal hover:text-teal hover:bg-teal/8 dark:hover:bg-teal/5 transition-all"
                          asChild
                        >
                          <a
                            href={project.notebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t[lang].projectsViewNotebook}
                            <ExternalLink size={12} className="ml-1" />
                          </a>
                        </Button>
                      )
                    )}
                  </div>
                )}
              </Card>
            )}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
