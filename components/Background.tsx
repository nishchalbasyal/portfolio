"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Dot Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="0.5" fill="#1f1f1f" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.02)_2px,rgba(0,255,136,0.02)_4px)] pointer-events-none" />

      {/* Mouse-tracking Glow */}
      <motion.div
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 1,
        }}
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.15) 0%, rgba(0,255,136,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Additional ambient glow for visual polish */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-10 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
