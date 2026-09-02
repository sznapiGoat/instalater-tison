"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AnimatedIcon } from "@/components/site/AnimatedIcon";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const reduced = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const active = hover || (touch && inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduced ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduced ? 0.01 : 0.5,
        delay: reduced ? 0 : (index % 3) * 0.08,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={reduced ? undefined : { y: -6 }}
      className="group relative bg-paper shadow-panel transition-shadow duration-300 hover:shadow-lift"
      style={{ ["--accent" as string]: service.accent }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-top transition-transform duration-300 group-hover:scale-y-[2.4]"
        style={{ background: service.accent }}
      />
      <div className="border border-t-0 border-line p-6 sm:p-7">
        <span style={{ color: service.accent }}>
          <AnimatedIcon icon={service.icon} active={active} />
        </span>

        <h3 className="mt-5 font-display text-[1.4rem] font-bold tracking-[-0.02em]">
          <Link href={`/${service.slug}`} className="after:absolute after:inset-0">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-steel">{service.teaser}</p>

        <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
          {service.items.map((it) => (
            <li key={it.name} className="flex items-baseline gap-2.5 text-[0.875rem] text-graphite">
              <span
                aria-hidden
                className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full"
                style={{ background: service.accent }}
              />
              {it.name}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 font-display text-[0.9rem] font-semibold text-navy">
          Detail služby
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.div>
  );
}
