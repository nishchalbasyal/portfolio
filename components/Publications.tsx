"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title:
      "Evaluating the impact of gamma (γ) and lambda (λ) on regression using XGBoost",
    authors: "Basyal, N. et al. (2025)",
    publisher: "CRC Press (Taylor & Francis)",
    link: "https://www.taylorfrancis.com/",
    type: { en: "Research Paper", de: "Forschungsarbeit" },
  },
];

const certifications = [
  {
    title: "Hugging Face Agents Course",
    issuer: "Hugging Face",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford, Coursera",
  },
  {
    title: "HackerRank SQL",
    issuer: "HackerRank",
  },
  {
    title: "Introduction to LLMs in Python",
    issuer: "DataCamp",
  },
];

export function Publications() {
  const { lang } = useLang();

  return (
    <AnimatedSection id="publications">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm font-bold">05.</span>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mt-2">
          {lang === "en"
            ? "Publications & Certifications"
            : "Veröffentlichungen & Zertifikate"}
        </h2>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <h3 className="text-2xl font-sans font-bold text-text mb-6">
          {lang === "en"
            ? "Research & Publications"
            : "Forschung & Veröffentlichungen"}
        </h3>
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-surface border-border p-6 hover:border-teal/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-sans font-bold text-text flex-1">
                        {pub.title}
                      </h4>
                      <Badge
                        className="text-xs font-mono text-teal border-teal/50 bg-teal/5"
                        variant="outline"
                      >
                        {pub.type[lang]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted font-mono">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-muted mt-1">{pub.publisher}</p>
                  </div>
                  {pub.link && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs font-mono border-border hover:border-teal hover:text-teal transition-all"
                      asChild
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lang === "en"
                          ? "Read Publication"
                          : "Veröffentlichung lesen"}
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="pt-12 border-t border-border">
        <h3 className="text-2xl font-sans font-bold text-text mb-6">
          {lang === "en" ? "Certifications" : "Zertifikate"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="bg-surface border-border p-4 hover:border-teal/50 transition-all h-full">
                <h4 className="text-sm font-sans font-bold text-text">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted font-mono mt-2">
                  {cert.issuer}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-12 pt-12 border-t border-border">
        <h3 className="text-2xl font-sans font-bold text-text mb-6">
          {lang === "en" ? "Languages" : "Sprachen"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "English", level: "C1" },
            { name: "German", level: "A2" },
            { name: "Nepali", level: "Native" },
          ].map((lang_item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="bg-surface border-border p-4 hover:border-teal/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-text">
                    {lang_item.name}
                  </span>
                  <Badge className="font-mono text-xs text-teal border-teal/50 bg-teal/5">
                    {lang_item.level}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
