"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

import type { IconKey } from "@/lib/services";
import { cn } from "@/lib/utils";

type Props = {
  icon: IconKey;
  /** Zapíná smyčku typickou pro daný obor (hover nebo dotyk na dlaždici). */
  active?: boolean;
  className?: string;
};

const loop = (duration: number): Transition => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
});

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }, opacity: { duration: 0.2 } },
  },
};

export function AnimatedIcon({ icon, active = false, className }: Props) {
  const reduced = useReducedMotion();
  const on = active && !reduced;

  return (
    <motion.svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-12 w-12", className)}
    >
      {icon === "voda" && (
        <>
          <motion.path
            variants={draw}
            d="M24 7c1 2 11 13 11 20a11 11 0 0 1-22 0c0-7 10-18 11-20Z"
            stroke="currentColor"
            strokeWidth={2}
          />
          <motion.circle
            cx={24}
            cy={19}
            r={2.4}
            fill="currentColor"
            animate={on ? { y: [-2, 11], opacity: [0, 1, 1, 0] } : { y: 0, opacity: 0.28 }}
            transition={on ? loop(1) : { duration: 0.3 }}
          />
          <motion.ellipse
            cx={24}
            cy={32.5}
            rx={7}
            ry={2.2}
            stroke="currentColor"
            strokeWidth={1.6}
            animate={on ? { scale: [0.5, 1.15], opacity: [0.75, 0] } : { scale: 0.5, opacity: 0 }}
            transition={on ? { ...loop(1), delay: 0.35 } : { duration: 0.3 }}
            style={{ transformOrigin: "24px 32.5px" }}
          />
        </>
      )}

      {icon === "topeni" && (
        <>
          <motion.path
            variants={draw}
            d="M24 5c8 9 12 13 12 20a12 12 0 0 1-24 0c0-4 1.6-7.4 4.6-10.6.8 3.4 2.6 5 4 5 2.2 0 3.4-6.6 3.4-14.4Z"
            stroke="currentColor"
            strokeWidth={2}
          />
          <motion.path
            d="M24 22c3.4 4 5 6 5 9a5 5 0 0 1-10 0c0-3 1.6-5 5-9Z"
            fill="currentColor"
            animate={
              on
                ? { scaleY: [1, 1.16, 0.94, 1], scaleX: [1, 0.93, 1.06, 1], opacity: [0.85, 1, 0.85] }
                : { scaleY: 1, scaleX: 1, opacity: 0.55 }
            }
            transition={on ? loop(0.85) : { duration: 0.3 }}
            style={{ transformOrigin: "24px 36px" }}
          />
        </>
      )}

      {icon === "plyn" && (
        <>
          <motion.path
            variants={draw}
            d="M24 6c6.5 7.5 10 11 10 16.5a10 10 0 0 1-20 0C14 17 17.5 13.5 24 6Z"
            stroke="currentColor"
            strokeWidth={2}
          />
          <motion.path
            d="M24 18c3 3.6 4.4 5.4 4.4 7.7a4.4 4.4 0 0 1-8.8 0c0-2.3 1.4-4.1 4.4-7.7Z"
            fill="currentColor"
            animate={on ? { scaleY: [1, 1.2, 0.92, 1], opacity: [0.8, 1, 0.8] } : { scaleY: 1, opacity: 0.5 }}
            transition={on ? loop(0.75) : { duration: 0.3 }}
            style={{ transformOrigin: "24px 30px" }}
          />
          <path d="M11 36h26" stroke="currentColor" strokeWidth={2.4} opacity={0.85} />
          {[16, 24, 32].map((x, i) => (
            <motion.path
              key={x}
              d={`M${x} 42v-4`}
              stroke="currentColor"
              strokeWidth={2}
              animate={on ? { opacity: [0.25, 1, 0.25] } : { opacity: 0.35 }}
              transition={on ? { ...loop(0.9), delay: i * 0.12 } : { duration: 0.3 }}
            />
          ))}
        </>
      )}

      {icon === "kanalizace" && (
        <>
          <motion.path
            variants={draw}
            d="M7 15h13a11 11 0 0 1 11 11v15"
            stroke="currentColor"
            strokeWidth={7}
            opacity={0.16}
          />
          <path d="M7 15h13a11 11 0 0 1 11 11v15" stroke="currentColor" strokeWidth={2} opacity={0.75} />
          <motion.path
            d="M7 15h13a11 11 0 0 1 11 11v15"
            stroke="currentColor"
            strokeWidth={2.8}
            strokeDasharray="5 11"
            animate={on ? { strokeDashoffset: [0, -32], opacity: 1 } : { strokeDashoffset: 0, opacity: 0 }}
            transition={on ? { duration: 0.9, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
          />
          <path d="M31 41h10" stroke="currentColor" strokeWidth={2.4} opacity={0.5} />
        </>
      )}

      {icon === "inspekce" && (
        <>
          <motion.circle
            variants={draw}
            cx={24}
            cy={24}
            r={17}
            stroke="currentColor"
            strokeWidth={2}
            opacity={0.5}
          />
          <circle cx={24} cy={24} r={10.5} stroke="currentColor" strokeWidth={1.6} opacity={0.55} />
          <motion.circle
            cx={24}
            cy={24}
            r={10.5}
            stroke="currentColor"
            strokeWidth={2}
            animate={on ? { scale: [0.55, 1.55], opacity: [0.7, 0] } : { scale: 0.55, opacity: 0 }}
            transition={on ? loop(1.1) : { duration: 0.3 }}
            style={{ transformOrigin: "24px 24px" }}
          />
          <rect x={16.5} y={18} width={15} height={12} rx={2.5} stroke="currentColor" strokeWidth={2} />
          <circle cx={24} cy={24} r={2.2} fill="currentColor" />
          <motion.path
            d="M24 24 38 24"
            stroke="currentColor"
            strokeWidth={1.6}
            opacity={0.7}
            animate={on ? { rotate: [0, 360] } : { rotate: 0 }}
            transition={on ? { duration: 1, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
            style={{ transformOrigin: "24px 24px" }}
          />
        </>
      )}

      {icon === "cisteni" && (
        <>
          <path d="M4 11v26M44 11v26" stroke="currentColor" strokeWidth={2.4} opacity={0.35} />
          <motion.path
            variants={draw}
            d="M7 24c0-9 6.5-9 6.5 0s6.5 9 6.5 0 6.5-9 6.5 0 6.5 9 6.5 0 6.5-9 6.5 0"
            stroke="currentColor"
            strokeWidth={2.4}
          />
          <motion.path
            d="M7 24c0-9 6.5-9 6.5 0s6.5 9 6.5 0 6.5-9 6.5 0 6.5 9 6.5 0 6.5-9 6.5 0"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeDasharray="4 8"
            animate={on ? { strokeDashoffset: [0, -24], opacity: [0, 1, 0] } : { strokeDashoffset: 0, opacity: 0 }}
            transition={on ? { duration: 0.9, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
          />
        </>
      )}
    </motion.svg>
  );
}
