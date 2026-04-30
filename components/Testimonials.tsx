"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";
import { AnimatedSection } from "./AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Testimonials() {
  const { lang } = useLang();

  return (
    <AnimatedSection id="testimonials">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm font-bold">
          {t[lang].testimonialsSectionNum}.
        </span>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-text mt-2">
          {t[lang].testimonialsHeading}
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="bg-surface border-border p-6 hover:border-teal/50 hover:shadow-teal/10 transition-all flex flex-col h-full">
              {/* Testimonial Content */}
              <p className="text-sm text-muted mb-4 italic line-clamp-none">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="my-4 border-t border-border"></div>

              {/* Author Info - Compact */}
              <div className="flex items-center gap-3">
                {/* Author Image */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border border-teal/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-bold text-text text-sm leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted leading-tight">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-teal/70 leading-tight">
                    {testimonial.relationship}
                  </p>
                </div>

                {/* LinkedIn Button */}
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-shrink-0 text-xs font-mono border-teal/50 text-teal hover:border-teal hover:bg-teal/5 transition-all p-2 h-auto"
                  asChild
                >
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${testimonial.name} on LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
