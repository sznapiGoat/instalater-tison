"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Vyslechneme si požadavky",
    body: "Zavoláte a popíšete, co se děje. Přijedeme se podívat na místo a nastíníme postup práce, aby bylo jasné, co se bude dít a v jakém pořadí.",
  },
  {
    title: "Nabídneme několik variant",
    body: "Většinou vede k cíli víc cest. Ukážeme vám je i s tím, čím se od sebe liší, abyste se mohli rozhodnout podle rozsahu i podle peněz.",
  },
  {
    title: "Cenová nabídka na místě",
    body: "Nezávaznou cenovou nabídku dostanete přímo na místě. Cenu tak znáte dřív, než se pustíme do práce.",
  },
];

export function ProcessSteps() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-line bg-mist py-20 sm:py-28" aria-labelledby="postup">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 id="postup" className="display-lg">
            Zastihla vás nepříjemná havárie?
          </h2>
          <p className="lede mt-5">
            Nemusíte hned vědět, co s tím. Stačí zavolat. Zbytek je náš postup,
            který se za dvacet let osvědčil.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Spojnice mezi kroky, kreslí se při najetí sekce do výřezu. */}
          <motion.span
            aria-hidden
            className="stripe absolute left-[13px] top-3 hidden w-[2px] origin-top md:left-0 md:top-[13px] md:block md:h-[2px] md:w-full md:origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduced ? 0.01 : 1, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.span
            aria-hidden
            className="stripe absolute left-[13px] top-3 h-[calc(100%-1.5rem)] w-[2px] origin-top md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduced ? 0.01 : 1.1, ease: [0.4, 0, 0.2, 1] }}
          />

          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative pl-11 md:pl-0 md:pt-11"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : 0.15 + i * 0.18,
              }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-navy font-display text-[0.8rem] font-bold text-white md:top-0"
              >
                {i + 1}
              </span>
              <h3 className="display-md">{s.title}</h3>
              <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-steel">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
