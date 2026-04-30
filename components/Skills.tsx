"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { skillCategories, type SkillStatus, graphNodes } from "@/lib/skills";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function getStatusColor(status: SkillStatus): string {
  switch (status) {
    case "strong":
      return "bg-green";
    case "inProgress":
      return "bg-amber";
    case "planned":
      return "bg-orange";
    default:
      return "bg-teal";
  }
}

function GraphNodeCard({
  node,
  highlighted,
  onHover,
  lang,
}: {
  node: (typeof graphNodes)[0];
  highlighted: boolean;
  onHover: (id: string | null) => void;
  lang: "en" | "de";
}) {
  const statusColors = {
    strong: "border-green/40 hover:border-green hover:shadow-green/20",
    inProgress: "border-amber/40 hover:border-amber hover:shadow-amber/20",
    planned:
      "border-orange/30 hover:border-orange hover:shadow-orange/20 border-dashed",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        opacity: highlighted ? 1 : 0.2,
        scale: highlighted ? 1 : 0.97,
      }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        "rounded-xl bg-surface border p-4 cursor-pointer transition-all duration-200 hover:shadow-lg w-36",
        statusColors[node.status],
      )}
    >
      <div className="text-2xl mb-2">{node.icon}</div>
      <div className="font-mono text-xs text-text font-semibold">
        {node.label}
      </div>
      <div className="font-mono text-[10px] text-muted mt-1">
        {node.desc[lang]}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { lang } = useLang();
  const [view, setView] = useState<"graph" | "simple">("graph");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const isHighlighted = (nodeId: string) => {
    if (!hoveredNode) return true;
    const hovered = graphNodes.find((n) => n.id === hoveredNode);
    if (!hovered) return true;
    return (
      nodeId === hoveredNode ||
      hovered.connects.includes(nodeId) ||
      graphNodes.some(
        (n) => n.id === hoveredNode && n.connects.includes(nodeId),
      ) ||
      graphNodes.some(
        (n) => n.connects.includes(hoveredNode) && n.id === nodeId,
      )
    );
  };

  const layers = {
    input: graphNodes.filter((n) => n.layer === "input"),
    core: graphNodes.filter((n) => n.layer === "core"),
    output: graphNodes.filter((n) => n.layer === "output"),
  };

  return (
    <AnimatedSection id="skills">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="text-teal font-mono text-sm font-bold">
            {t[lang].skillsSectionNum}.
          </span>
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-text mt-2">
            {t[lang].skillsHeading}
          </h2>
          <p className="mt-4 text-teal font-mono text-sm">
            {lang === "en"
              ? "How I build AI systems"
              : "Wie ich KI-Systeme baue"}
          </p>
        </div>

        <div
          className="inline-flex w-fit rounded-lg border border-border/70 bg-surface/80 p-1 font-mono text-xs"
          aria-label="Skill view selector"
        >
          {[
            {
              id: "simple" as const,
              label: lang === "en" ? "Skill List" : "Skill-Liste",
            },
            {
              id: "graph" as const,
              label: lang === "en" ? "System Map" : "Systemkarte",
            },
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setView(option.id)}
              className={cn(
                "rounded-md px-4 py-2 transition-all",
                view === option.id
                  ? "bg-teal text-bg shadow-[0_0_14px_rgba(20,184,166,0.25)]"
                  : "text-muted hover:text-text hover:bg-bg/50",
              )}
              aria-pressed={view === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* SIMPLE VIEW */}
      {view === "simple" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-surface border-border p-6 hover:border-teal/50 transition-all h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-sans font-bold text-text">
                    {category.title[lang]}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted font-mono">
                          {skill.pct}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.pct}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + skillIdx * 0.05,
                          }}
                          className={`h-full rounded-full ${getStatusColor(
                            skill.status,
                          )}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* GRAPH VIEW */}
      {view === "graph" && (
        <div className="space-y-8">
          {/* 3-Layer Graph */}
          <div className="relative overflow-x-auto rounded-xl border border-border/60 bg-surface/30 p-5">
            <div className="relative grid min-w-[760px] grid-cols-3 gap-8 items-center min-h-[400px]">
            {/* SVG overlay for connections */}
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Col 1: Input Systems */}
            <div className="flex flex-col gap-4 items-center">
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">
                {lang === "en" ? "Input Systems" : "Eingabesysteme"}
              </span>
              {layers.input.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GraphNodeCard
                    node={node}
                    highlighted={isHighlighted(node.id)}
                    onHover={setHoveredNode}
                    lang={lang}
                  />
                </motion.div>
              ))}
            </div>

            {/* Col 2: AI Core */}
            <div className="flex flex-col gap-4 items-center">
              <span className="font-mono text-[10px] text-teal uppercase tracking-widest mb-2">
                {lang === "en" ? "AI Core" : "KI-Kern"}
              </span>
              {layers.core.map((node) => (
                <GraphNodeCard
                  key={node.id}
                  node={node}
                  highlighted={isHighlighted(node.id)}
                  onHover={setHoveredNode}
                  lang={lang}
                />
              ))}
            </div>

            {/* Col 3: Output Systems */}
            <div className="flex flex-col gap-4 items-center">
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">
                {lang === "en" ? "Output Systems" : "Ausgabesysteme"}
              </span>
              {layers.output.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GraphNodeCard
                    node={node}
                    highlighted={isHighlighted(node.id)}
                    onHover={setHoveredNode}
                    lang={lang}
                  />
                </motion.div>
              ))}
            </div>
            </div>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap gap-6 justify-center font-mono text-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green inline-block" />
              {lang === "en" ? "Production Ready" : "Produktionsbereit"}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              {lang === "en" ? "In Progress" : "In Entwicklung"}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange inline-block" />
              {lang === "en" ? "Planned" : "Geplant"}
            </span>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
