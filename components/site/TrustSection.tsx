"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { site } from "@/lib/site";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const facts = [
  {
    value: "6",
    unit: "oborů",
    label: "Voda, topení, plyn, kanalizace, inspekce kamerou a čištění odpadů pod jednou firmou.",
  },
  {
    value: "22",
    unit: "metrů",
    label: "Dosah strojního čištění kanalizace od místa, kde stroj nasadíme.",
  },
  {
    value: "1",
    unit: "výjezd",
    label: "Podíváme se, nastíníme postup a cenovou nabídku uděláme rovnou na místě.",
  },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const mv = useMotionValue(to);
  const [shown, setShown] = useState(to);

  // Před prvním vykreslením srazíme na nulu, aby v HTML (a bez JS) zůstalo 20.
  useIsoLayoutEffect(() => {
    if (reduced) return;
    mv.set(0);
    setShown(0);
  }, [mv, reduced]);

  useMotionValueEvent(mv, "change", (v) => setShown(Math.round(v)));

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(mv, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, to, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}

export function TrustSection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 sm:py-28" aria-labelledby="tradice">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <motion.p
            className="font-display font-extrabold leading-[0.85] text-navy"
            style={{ fontSize: "clamp(6rem, 17vw, 11rem)", fontVariationSettings: '"wdth" 105' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0.01 : 0.5 }}
          >
            <Counter to={site.years} />
          </motion.p>
          <p className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            let v oboru
          </p>

          <div className="mt-8 border-t border-line pt-6">
            <div className="flex items-center justify-between font-display text-sm font-semibold text-steel">
              <span>{site.since}</span>
              <span>dnes</span>
            </div>
            <motion.div
              className="stripe mt-2 h-[6px] w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: reduced ? 0.01 : 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 id="tradice" className="display-lg">
            Firma s dvacetiletou tradicí
          </h2>
          <p className="lede mt-5 max-w-xl">
            Za dvacet let práce v {site.cityLocative} a širokém okolí prošly rukama
            Miroslava Tisoně novostavby i staré domy, kde se rozvody hledaly
            podle sluchu. Vzdálenější zakázky bereme po domluvě.
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {facts.map((f, i) => (
              <motion.div
                key={f.unit}
                className="bg-paper p-6"
                initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduced ? 0.01 : 0.5, delay: reduced ? 0 : i * 0.1 }}
              >
                <dt className="font-display text-3xl font-extrabold text-ink">
                  {f.value}
                  <span className="ml-1.5 align-middle text-sm font-semibold uppercase tracking-wide text-steel">
                    {f.unit}
                  </span>
                </dt>
                <dd className="mt-2 text-[0.9rem] leading-relaxed text-steel">{f.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
