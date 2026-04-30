"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: {
      en: "Software Engineer I (Data Analyst)",
      de: "Software Engineer I (Datenanalyst)",
    },
    company: "Infinite Nepal (Cotiviti)",
    period: { en: "Oct 2024 - Dec 2024", de: "Okt 2024 - Dez 2024" },
    location: { en: "Remote", de: "Remote" },
    highlights: {
      en: [
        "Worked with real-world healthcare data, focusing on data quality, anomaly detection, and reliability",
        "Built SQL queries (Oracle) for analysis; supported validation workflows and collaborated via Jira/ODI",
      ],
      de: [
        "Arbeitete mit realen Gesundheitsdaten und konzentrierte sich auf Datenqualität, Anomalieerkennung und Zuverlässigkeit",
        "Entwickelte SQL-Abfragen (Oracle) für Analysen; unterstützte Validierungs-Workflows und kollaborierte via Jira/ODI",
      ],
    },
    skills: ["SQL", "Oracle", "Data Analysis", "Healthcare Data"],
  },
  {
    role: { en: "Data Science Fellowship", de: "Data Science Fellowship" },
    company: "Code for Nepal",
    period: { en: "May 2024", de: "Mai 2024" },
    location: { en: "Remote", de: "Remote" },
    highlights: {
      en: [
        "Explored transformer architectures using Hugging Face for NLP tasks (e.g., text classification)",
        "Worked with Pandas and SQL for data manipulation; contributed to open-source/data projects",
      ],
      de: [
        "Erforschte Transformer-Architekturen mit Hugging Face für NLP-Aufgaben (z.B. Textklassifikation)",
        "Arbeitete mit Pandas und SQL für Datenmanipulation; trug zu Open-Source/Datenprojekten bei",
      ],
    },
    skills: ["NLP", "Hugging Face", "Transformers", "Pandas", "SQL"],
  },
  {
    role: {
      en: "Data Science and Machine Learning Trainee",
      de: "Trainee in Data Science und Machine Learning",
    },
    company: "Vrit Technology",
    period: { en: "Dec 2023 - Apr 2024", de: "Dez 2023 - Apr 2024" },
    location: { en: "India", de: "Indien" },
    highlights: {
      en: [
        "Built ML/DL projects including YOLO object detection, GANs, and sentiment analysis using TensorFlow/PyTorch",
        "Applied experimentation to improve model performance and deployment readiness",
      ],
      de: [
        "Entwickelte ML/DL-Projekte einschließlich YOLO-Objekterkennung, GANs und Sentimentanalyse mit TensorFlow/PyTorch",
        "Wandte Experimente an, um Modellleistung und Deployment-Bereitschaft zu verbessern",
      ],
    },
    skills: ["PyTorch", "TensorFlow", "YOLO", "GAN", "Deep Learning"],
  },
  {
    role: { en: "Web Development Intern", de: "Web Development Praktikant" },
    company: "CodSoft",
    period: { en: "Sep 2023 - Oct 2023", de: "Sep 2023 - Okt 2023" },
    location: { en: "Remote", de: "Remote" },
    highlights: {
      en: [
        "Developed an online blogging platform using Django and jQuery with authentication and database operations",
      ],
      de: [
        "Entwickelte eine Online-Blog-Plattform mit Django und jQuery mit Authentifizierung und Datenbankoperationen",
      ],
    },
    skills: ["Django", "jQuery", "Python", "Web Development"],
  },
];

export function Experience() {
  const { lang } = useLang();

  return (
    <AnimatedSection id="experience">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm font-bold">02.</span>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mt-2">
          {lang === "en" ? "Experience" : "Erfahrung"}
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="bg-surface border-border p-6 hover:border-teal/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-sans font-bold text-text">
                    {typeof exp.role === "string" ? exp.role : exp.role[lang]}
                  </h3>
                  <p className="text-teal font-mono text-sm mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-sm text-muted font-mono whitespace-nowrap">
                  <p>
                    {typeof exp.period === "string"
                      ? exp.period
                      : exp.period[lang]}
                  </p>
                  <p>
                    {typeof exp.location === "string"
                      ? exp.location
                      : exp.location[lang]}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {(typeof exp.highlights === "string"
                  ? [exp.highlights]
                  : exp.highlights[lang]
                ).map((highlight, i) => (
                  <li key={i} className="text-muted flex gap-3">
                    <span className="text-teal flex-shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs font-mono text-teal border-teal/50 bg-teal/5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-12 pt-12 border-t border-border">
        <h3 className="text-2xl font-sans font-bold text-text mb-6">
          {lang === "en" ? "Education" : "Ausbildung"}
        </h3>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-surface border-border p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-sans font-bold text-text">
                    {lang === "en"
                      ? "MSc Natural Language Processing"
                      : "MSc Verarbeitung natürlicher Sprache"}
                  </h4>
                  <p className="text-teal font-mono text-sm mt-1">
                    Trier University, Germany
                  </p>
                  <p className="text-muted text-sm mt-2">
                    {lang === "en"
                      ? "Focus: Generative AI, Machine Learning, Deep Learning, LLMs, Agentic AI"
                      : "Fokus: Generative KI, Machine Learning, Deep Learning, LLMs, Agentic AI"}
                  </p>
                </div>
                <span className="text-sm text-muted font-mono whitespace-nowrap">
                  2025–2027
                </span>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-surface border-border p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-sans font-bold text-text">
                    {lang === "en"
                      ? "B.Tech Computer Engineering"
                      : "B.Tech Computertechnik"}
                  </h4>
                  <p className="text-teal font-mono text-sm mt-1">
                    RK University, Gujarat, India
                  </p>
                  <p className="text-muted text-sm mt-2">CGPA: 8.27/10</p>
                </div>
                <span className="text-sm text-muted font-mono whitespace-nowrap">
                  2020–2024
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
