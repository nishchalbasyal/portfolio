"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";

export function About() {
  const { lang } = useLang();

  return (
    <AnimatedSection id="about">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm font-bold">
          {t[lang].aboutSectionNum}.
        </span>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mt-2">
          {t[lang].aboutHeading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          {/* Profile Photo */}
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-cyan/20 rounded-2xl blur-2xl" />
            <div className="relative w-full h-full bg-surface rounded-2xl border-2 border-teal/50 overflow-hidden flex items-center justify-center">
              {/* Profile Image from Public Folder */}
              <img
                src="/Images/profile/Profile.png"
                alt="Nishchal Basyal"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Bio + Location Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col justify-between items-center"
        >
          <div className="space-y-6 w-full max-w-md">
            <p className="text-base text-text leading-relaxed">
              {t[lang].aboutBio}
            </p>

            {/* Location Badges - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Card className="bg-surface border-border p-3">
                <p className="text-sm font-mono text-muted">
                  {t[lang].aboutLocationBadge}
                </p>
              </Card>

              <Card className="bg-surface border-border p-3">
                <p className="text-sm font-mono text-muted">
                  {t[lang].aboutRemoteBadge}
                </p>
              </Card>
            </div>

            {/* Open to Work */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 bg-green rounded-full animate-pulse-slow" />
              <span className="text-sm text-text font-mono">
                {t[lang].aboutOpenToWork}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
