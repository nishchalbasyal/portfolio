"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { lang } = useLang();

  const contacts = [
    {
      icon: Mail,
      label: t[lang].contactEmail,
      value: t[lang].contactEmailPlaceholder,
      href: `mailto:${t[lang].contactEmailPlaceholder}`,
    },
    {
      icon: Linkedin,
      label: t[lang].contactLinkedin,
      value: t[lang].contactLinkedinPlaceholder,
      href: `https://linkedin.com/in/nishchal-basyal`,
    },
    {
      icon: Github,
      label: t[lang].contactGithub,
      value: t[lang].contactGithubPlaceholder,
      href: `https://github.com/nishchalbasyal`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection id="contact">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="text-teal font-mono text-sm font-bold">
          {t[lang].contactSectionNum}.
        </span>
        <h2 className="text-5xl md:text-6xl font-sans font-bold text-text mt-2">
          {t[lang].contactHeading}
        </h2>
        <p className="text-muted text-base mt-6 max-w-2xl mx-auto">
          {t[lang].contactBio}
        </p>
      </div>

      <div className="mb-12 text-center max-w-3xl mx-auto rounded-2xl border border-teal/25 bg-teal/5 px-6 py-8 shadow-[0_0_32px_rgba(20,184,166,0.08)]">
        <h3 className="text-3xl md:text-4xl font-sans font-bold text-text">
          {lang === "en"
            ? "Let's automate your workflow"
            : "Lass uns deinen Workflow automatisieren"}
        </h3>
        <p className="mt-4 text-muted">
          {lang === "en"
            ? "I help businesses build AI agents, automation systems, and scalable pipelines."
            : "Ich helfe Unternehmen, KI-Agenten, Automatisierungssysteme und skalierbare Pipelines zu bauen."}
        </p>
        <Button
          asChild
          className="mt-6 bg-gradient-to-r from-teal to-cyan hover:from-cyan hover:to-teal text-bg font-mono shadow-[0_0_22px_rgba(20,184,166,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
        >
          <a href={`mailto:${t[lang].contactEmailPlaceholder}`}>
            {lang === "en" ? "Start a Conversation" : "Gespräch starten"}
          </a>
        </Button>
      </div>

      {/* Open to Work */}
      <div className="flex justify-center items-center gap-2 mb-12">
        <div className="w-2 h-2 bg-green rounded-full animate-pulse-slow" />
        <span className="text-sm text-text font-mono">
          {t[lang].contactOpenToWork}
        </span>
      </div>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <motion.div key={idx} variants={itemVariants}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <Card className="bg-surface border-border/70 p-6 hover:border-teal hover:shadow-teal/10 transition-all cursor-pointer h-full flex flex-col items-center text-center gap-4">
                  <Icon size={32} className="text-teal" />
                  <div>
                    <h3 className="text-sm font-sans font-bold text-text mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-xs text-muted font-mono break-all">
                      {contact.value}
                    </p>
                  </div>
                </Card>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatedSection>
  );
}
