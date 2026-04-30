"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roles = [
  "Agent Architect",
  "LangGraph System Designer",
  "N8N Automation Engineer",
  "LLM Workflow Builder",
];

const pipelineSteps = [
  { icon: "🔍", label: "Intent Detection" },
  { icon: "🧠", label: "LangGraph Planner" },
  { icon: "🔧", label: "Tool Selection" },
  { icon: "⚡", label: "Execution Engine" },
  { icon: "📤", label: "Output Formatter" },
];

export function Hero() {
  const { lang } = useLang();
  const [currentRole, setCurrentRole] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Role rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Pipeline animation loop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < pipelineSteps.length) {
        setActiveStep((prev) => prev + 1);
      } else {
        // Pause at end then restart
        setTimeout(() => setActiveStep(0), 1200);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT: TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge with glow */}
          <span className="inline-block font-mono text-xs border border-teal/40 text-teal px-3 py-1 rounded-full bg-teal/5 shadow-[0_0_12px_rgba(20,184,166,0.2)]">
            ▶ {t[lang].heroBadge}
          </span>

          {/* H1 with colored span */}
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-text leading-tight">
            {lang === "en" ? (
              <>
                I build AI systems that
                <br />
                <span className="text-teal">automate real-world workflows</span>
              </>
            ) : (
              <>
                Ich baue KI-Systeme, die
                <br />
                <span className="text-teal">
                  reale Workflows automatisieren
                </span>
              </>
            )}
          </h1>

          {/* Role rotator */}
          <div className="min-h-16 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-teal font-mono"
              >
                {roles[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <p className="text-muted font-mono text-sm">
            {lang === "en"
              ? "Designing autonomous systems, not just models."
              : "Systeme entwerfen, nicht nur Modelle."}
          </p>

          {/* Open to Work */}
          <div className="flex items-center gap-2 pt-4">
            <div className="w-2 h-2 bg-green rounded-full animate-pulse-slow" />
            <span className="text-sm text-text font-mono">
              {t[lang].heroStatus}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-6">
            <Button
              asChild
              className="bg-gradient-to-r from-teal to-cyan hover:from-cyan hover:to-teal shadow-[0_0_22px_rgba(20,184,166,0.45)] hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] transition-all duration-300 text-bg font-mono text-sm sm:text-base px-5 py-6"
            >
              <a href="#contact">🚀 Discuss an AI Automation Project</a>
            </Button>
            <Button
              asChild
              className="bg-teal hover:bg-gradient-to-r hover:from-teal hover:to-cyan shadow-[0_0_16px_rgba(20,184,166,0.3)] hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] transition-all duration-300 text-bg font-mono"
            >
              <a href="#projects">{t[lang].heroProjectsBtn}</a>
            </Button>
            <Button
              variant="outline"
              className="border-teal/40 hover:border-teal hover:shadow-[0_0_12px_rgba(20,184,166,0.2)] transition-all duration-300 font-mono"
              asChild
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                {t[lang].heroDownloadBtn}
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: AI EXECUTION PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {/* Main panel container */}
            <div className="relative rounded-2xl border border-teal/30 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(20,184,166,0.1)] overflow-hidden p-5 space-y-4">
              {/* Scanline overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(20,184,166,0.015)_2px,rgba(20,184,166,0.015)_4px)]" />

              {/* Panel header */}
              <div className="relative flex items-center justify-between z-10">
                <span className="font-mono text-xs text-muted uppercase tracking-widest">
                  {lang === "en"
                    ? "AI Execution Runtime"
                    : "KI-Ausführungs-Laufzeit"}
                </span>
                <div className="flex items-center gap-2">
                  {/* Live pulse indicator */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                  </span>
                  <span className="font-mono text-xs text-green">
                    {t[lang].sysOnline}
                  </span>
                </div>
              </div>

              {/* Input block */}
              <div className="relative rounded-lg bg-surface/60 border border-border px-4 py-3 font-mono text-xs z-10">
                <div className="text-muted mb-1 uppercase tracking-widest text-[10px]">
                  {t[lang].inputLbl}
                </div>
                <div className="text-text">{t[lang].inputVal}</div>
              </div>

              {/* Pipeline steps */}
              <div className="relative space-y-2 z-10">
                {pipelineSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 font-mono text-xs transition-all duration-300",
                      activeStep === i
                        ? "bg-teal/10 border border-teal/40 text-teal shadow-[0_0_8px_rgba(20,184,166,0.2)]"
                        : activeStep > i
                          ? "text-green/60 bg-green/5"
                          : "text-muted",
                    )}
                  >
                    <span>{step.icon}</span>
                    <span>{step.label}</span>
                    {activeStep > i && (
                      <span className="ml-auto text-green text-[10px]">✔</span>
                    )}
                    {activeStep === i && (
                      <motion.span
                        className="ml-auto h-1 w-1 rounded-full bg-teal"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Output block */}
              <AnimatePresence>
                {activeStep === pipelineSteps.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="relative rounded-lg bg-green/5 border border-green/20 px-4 py-3 font-mono text-xs space-y-1 z-10"
                  >
                    <div className="text-green/80">{t[lang].outLine1}</div>
                    <div className="text-green/60">{t[lang].outLine2}</div>
                    <div className="text-green/60">{t[lang].outLine3}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
