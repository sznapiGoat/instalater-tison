"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { site } from "@/lib/site";

const stats = [
  { value: "20 let", label: "v oboru od roku 2005" },
  { value: "6 oborů", label: "voda, topení, plyn, kanalizace" },
  { value: "22 m", label: "dosah strojního čištění" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const range = reduced ? 0 : compact ? 0.4 : 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.1 * range]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 56 * range]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-deep text-white">
      <div className="grid-texture absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_10%,rgba(46,155,214,.22),transparent_60%)]"
        aria-hidden
      />

      <div className="shell relative grid gap-10 pb-0 pt-[112px] md:grid-cols-12 md:items-end md:gap-8 md:pb-0 md:pt-[152px]">
        <div className="md:col-span-6 md:pb-16">
          <motion.h1
            className="display-xl text-white"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Instalatér a topenář v Hrušovanech nad Jevišovkou
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Voda, topení, plyn, kanalizace, inspekce potrubí kamerou a strojní
            čištění odpadů. Firma s dvacetiletou tradicí. Přijedeme, vyslechneme
            si, co potřebujete, a nezávaznou cenovou nabídku uděláme na místě.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, delay: 0.16 }}
          >
            <a
              href={site.phoneHref}
              className="inline-flex h-[3.25rem] items-center gap-2.5 bg-signal px-7 font-display font-semibold text-white transition-colors hover:bg-[#B81126]"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={2.4} />
              {site.phoneDisplay}
            </a>
            <Link
              href="/#sluzby"
              className="group inline-flex h-[3.25rem] items-center gap-2 border border-white/25 bg-white/5 px-6 font-display font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Co všechno děláme
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 md:mt-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0.01 : 0.5, delay: 0.28 + i * 0.07 }}
              >
                <dt className="font-display text-xl font-bold text-white sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[0.78rem] leading-snug text-white/55">{s.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="relative -mx-5 h-[62vw] max-h-[560px] min-h-[260px] overflow-hidden sm:-mx-8 md:mx-0 md:h-[600px] lg:h-[640px] md:w-[calc(100%_+_max(0px,(100vw_-_76rem)/2)_+_2rem)]">
            <motion.div className="absolute inset-0" style={{ scale, y }}>
              <Image
                src="/img/van.jpg"
                alt="Bílá dodávka Miroslava Tisoně s polepem VODA, TOPENÍ, PLYN, nápisem čištění kanalizací - inspekce kamerou a telefonem 723 304 631, zaparkovaná u sportovního hřiště v Hrušovanech nad Jevišovkou"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 52vw"
                className="object-cover object-[60%_center]"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent md:bg-gradient-to-r md:from-navy-deep/95 md:via-navy-deep/10 md:to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="stripe h-[5px] w-full" aria-hidden />
    </section>
  );
}
