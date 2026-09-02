"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Posun zdola v pixelech. */
  y?: number;
  delay?: number;
  once?: boolean;
};

/**
 * Základní scroll-reveal. Vždy renderuje motion.div (nikdy neodbočuje na jiný
 * element podle prefers-reduced-motion), takže se server a klient shodnou.
 */
export function Reveal({
  children,
  className,
  y = 20,
  delay = 0,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: reduced ? 0.01 : 0.55,
        delay: reduced ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
