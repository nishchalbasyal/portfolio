"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";

// Learning Journey Data
const learningJourney = {
  completed: [
    {
      id: "python",
      label: "Python Mastery",
      icon: "🐍",
      skills: ["Core Python", "Async Programming", "Data Structures"],
      level: 94,
      color: "green",
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      icon: "🤖",
      skills: ["LangChain Basics", "Agent Logic", "Tool Integration"],
      level: 95,
      color: "green",
    },
    {
      id: "n8n",
      label: "N8N Automation",
      icon: "⚙️",
      skills: ["Workflow Design", "HTTP Nodes", "Data Mapping"],
      level: 90,
      color: "green",
    },
    {
      id: "rest-api",
      label: "REST APIs",
      icon: "📡",
      skills: ["Flask/FastAPI", "HTTP Methods", "Authentication"],
      level: 95,
      color: "green",
    },
  ],
  inProgress: [
    {
      id: "langgraph",
      label: "LangGraph Advanced",
      icon: "🧠",
      skills: ["Multi-Agent Systems", "State Management", "Graph Workflows"],
      level: 70,
      color: "amber",
    },
    {
      id: "llm-models",
      label: "LLM Fine-tuning",
      icon: "🎯",
      skills: ["Model Optimization", "Prompt Engineering", "RAG Systems"],
      level: 85,
      color: "amber",
    },
    {
      id: "docker",
      label: "Containerization",
      icon: "🐳",
      skills: ["Docker Basics", "Image Building", "Container Orchestration"],
      level: 50,
      color: "amber",
    },
  ],
  upcoming: [
    {
      id: "aws",
      label: "AWS Cloud",
      icon: "☁️",
      skills: ["EC2 Deployment", "Lambda Functions", "API Gateway"],
      color: "orange",
    },
    {
      id: "kubernetes",
      label: "Kubernetes",
      icon: "⚙️",
      skills: ["Pod Management", "Services", "Ingress Configuration"],
      color: "orange",
    },
    {
      id: "mlops",
      label: "MLOps Pipeline",
      icon: "📊",
      skills: ["Model Serving", "Monitoring", "CI/CD Integration"],
      color: "orange",
    },
  ],
};

type LearningJourneyItem =
  | (typeof learningJourney.completed)[number]
  | (typeof learningJourney.inProgress)[number]
  | (typeof learningJourney.upcoming)[number];

// Neural Network Visualization Component
function NeuralNetworkBackground() {
  const nodes = useMemo(() => {
    // Input layer (7 nodes)
    const inputNodes = Array.from({ length: 7 }, (_, i) => ({
      x: 10,
      y: (i + 1) * (100 / 8),
      layer: 0,
      id: `input-${i}`,
    }));

    // Hidden layers (5 nodes each, 3 layers)
    const hiddenNodes = [];
    for (let layer = 1; layer <= 3; layer++) {
      for (let i = 0; i < 5; i++) {
        hiddenNodes.push({
          x: 10 + layer * 20,
          y: (i + 1.5) * (100 / 6.5),
          layer,
          id: `hidden-${layer}-${i}`,
        });
      }
    }

    // Output layer (3 nodes)
    const outputNodes = Array.from({ length: 3 }, (_, i) => ({
      x: 80,
      y: (i + 2) * (100 / 5),
      layer: 4,
      id: `output-${i}`,
    }));

    return [...inputNodes, ...hiddenNodes, ...outputNodes];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="neuralGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
            <stop
              offset="100%"
              stopColor="rgb(6, 182, 212)"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>

        {/* Connections */}
        {nodes.map((node) => {
          const nextLayer = nodes.filter((n) => n.layer === node.layer + 1);
          return nextLayer.map((nextNode) => (
            <motion.line
              key={`${node.id}-${nextNode.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                duration: 2,
                delay: (node.layer * 0.1 + Math.random() * 0.2) * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ));
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="1.2"
            fill="rgb(20, 184, 166)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: node.layer * 0.15,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Learning Card Component
function LearningCard({
  item,
  status,
}: {
  item: LearningJourneyItem;
  status: "completed" | "inProgress" | "upcoming";
}) {
  const colorMap = {
    green: {
      border: "border-green/30 dark:border-green/40",
      bg: "bg-green/8 dark:bg-green/5",
      text: "text-green",
      bar: "bg-green",
    },
    amber: {
      border: "border-amber/30 dark:border-amber/40",
      bg: "bg-amber/8 dark:bg-amber/5",
      text: "text-amber",
      bar: "bg-amber",
    },
    orange: {
      border: "border-orange/25 dark:border-orange/40 border-dashed",
      bg: "bg-orange/8 dark:bg-orange/5",
      text: "text-orange",
      bar: "bg-orange",
    },
  };

  const colors = colorMap[item.color as keyof typeof colorMap];
  const progressLevel =
    "level" in item ? Math.min(Math.max(item.level, 0), 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className={`${colors.bg} ${colors.border} border p-5 hover:shadow-lg transition-all duration-300`}
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">{item.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className={`font-mono font-bold ${colors.text} mb-2`}>
              {item.label}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-1 mb-3">
              {"skills" in item &&
                item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="learning-skill-chip text-[10px] font-mono px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
            </div>

            {/* Progress Bar */}
            {status !== "upcoming" && (
              <div
                className="learning-progress-track w-full rounded-full h-2 overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progressLevel}
              >
                <motion.div
                  className={`learning-progress-fill h-full rounded-full ${colors.bar}`}
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${progressLevel}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            )}
          </div>

          {/* Status Badge */}
          <div className={`text-xs font-mono ${colors.text} flex-shrink-0`}>
            {status === "completed" && "✓ Done"}
            {status === "inProgress" && "⟳ Learning"}
            {status === "upcoming" && "→ Next"}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Roadmap() {
  const { lang } = useLang();

  return (
    <AnimatedSection id="roadmap">
      <div className="relative">
        {/* Neural Network Background */}
        <NeuralNetworkBackground />

        {/* Content */}
        <div className="relative z-10">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-teal font-mono text-sm font-bold">
              {t[lang].roadmapSectionNum}.
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mt-2">
              {lang === "en" ? "Learning Journey" : "Lernweg"}
            </h2>
            <p className="text-muted text-base mt-4 max-w-2xl">
              {lang === "en"
                ? "My progression through AI, automation, and cloud technologies"
                : "Mein Fortschritt in KI-, Automatisierungs- und Cloud-Technologien"}
            </p>
          </div>

          {/* Timeline Sections */}
          <div className="grid grid-cols-1 gap-12">
            {/* Completed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green" />
                  <h3 className="text-lg font-mono font-bold text-green uppercase tracking-widest">
                    {lang === "en" ? "Mastered" : "Beherrscht"}
                  </h3>
                </div>
                <p className="text-sm text-muted">
                  {lang === "en"
                    ? "Solid foundation and expertise"
                    : "Solide Grundlagen und Expertise"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningJourney.completed.map((item) => (
                  <LearningCard key={item.id} item={item} status="completed" />
                ))}
              </div>
            </motion.div>

            {/* In Progress */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-amber"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <h3 className="text-lg font-mono font-bold text-amber uppercase tracking-widest">
                    {lang === "en" ? "Currently Learning" : "Aktiv lernen"}
                  </h3>
                </div>
                <p className="text-sm text-muted">
                  {lang === "en"
                    ? "Building skills and experience"
                    : "Fähigkeiten und Erfahrung aufbauen"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {learningJourney.inProgress.map((item) => (
                  <LearningCard key={item.id} item={item} status="inProgress" />
                ))}
              </div>
            </motion.div>

            {/* Upcoming */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-orange border border-orange" />
                  <h3 className="text-lg font-mono font-bold text-orange uppercase tracking-widest">
                    {lang === "en" ? "Next Goals" : "Nächste Ziele"}
                  </h3>
                </div>
                <p className="text-sm text-muted">
                  {lang === "en"
                    ? "Future learning objectives"
                    : "Zukünftige Lernziele"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {learningJourney.upcoming.map((item) => (
                  <LearningCard key={item.id} item={item} status="upcoming" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal">
                  {learningJourney.completed.length}
                </div>
                <p className="text-xs text-muted font-mono mt-2 uppercase">
                  {lang === "en"
                    ? "Skills Mastered"
                    : "Beherrschte Fähigkeiten"}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber">
                  {learningJourney.inProgress.length}
                </div>
                <p className="text-xs text-muted font-mono mt-2 uppercase">
                  {lang === "en" ? "Currently Learning" : "Aktiv lernen"}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange">
                  {learningJourney.upcoming.length}
                </div>
                <p className="text-xs text-muted font-mono mt-2 uppercase">
                  {lang === "en" ? "Next Goals" : "Nächste Ziele"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
