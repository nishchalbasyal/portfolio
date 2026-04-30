"use client";

import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";

export function CurrentlyBuilding() {
  const { lang } = useLang();
  const items = t[lang].buildingItems;

  return (
    <section className="w-full bg-surface border-y border-border py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6">
          {/* Label */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-teal to-cyan rounded-sm" />
            <span className="text-xs font-mono font-bold text-teal whitespace-nowrap">
              {t[lang].buildingLabel}
            </span>
          </div>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm text-text font-mono flex-shrink-0"
                >
                  {item}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {items.map((item, idx) => (
                <span
                  key={`dup-${idx}`}
                  className="text-sm text-text font-mono flex-shrink-0"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
