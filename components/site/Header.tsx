"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const primary = [
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Rozbalené služby zavře Escape i klik mimo, ať se nepletou do stránky.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [servicesOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isService = services.some((s) => pathname === `/${s.slug}`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-shadow duration-300",
          scrolled ? "shadow-[0_1px_0_rgba(14,20,27,.08),0_10px_30px_-24px_rgba(14,20,27,.5)]" : ""
        )}
      >
        <div className={cn("bg-paper/90 backdrop-blur-md transition-colors", !scrolled && "bg-paper")}>
          <div className="shell flex h-[72px] items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-10 w-10 flex-col justify-center gap-[3px] bg-navy-deep px-2"
              >
                <span className="h-[3px] w-full bg-azure" />
                <span className="h-[3px] w-full bg-signal" />
                <span className="h-[3px] w-full bg-[#1E7FC2]" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[1.2rem] font-extrabold tracking-[-0.02em] text-ink">
                  TISOŇ
                </span>
                <span className="mt-1 hidden text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-steel min-[420px]:block">
                  instalatér · topenář
                </span>
              </span>
              <span className="sr-only">Tisoň Instalatér-Topenář, domů</span>
            </Link>

            <nav aria-label="Hlavní" className="hidden items-center gap-1 lg:flex">
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  // Hover panel otevře už při najetí, klik ho proto jen otvírá,
                  // jinak by ho druhá půlka gesta myší hned zavřela.
                  onClick={() => setServicesOpen(true)}
                  onFocus={() => setServicesOpen(true)}
                  className={cn(
                    "flex h-10 items-center gap-1.5 rounded-sm px-3 text-[0.95rem] font-medium text-graphite transition-colors hover:text-navy",
                    (isService || servicesOpen) && "text-navy"
                  )}
                >
                  Služby
                  <span
                    aria-hidden
                    className="flex h-5 min-w-5 items-center justify-center rounded-full bg-mist px-1 font-display text-[0.7rem] font-bold text-navy"
                  >
                    {services.length}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    // Vystředění drží obal, motion.div si transform přepisuje sám.
                    <div className="absolute left-1/2 top-full w-[32rem] -translate-x-1/2 pt-2">
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
                        className="border border-line bg-paper shadow-lift"
                      >
                        <p className="rule-label border-b border-line px-4 py-2.5">
                          Šest oborů, každý má svou stránku
                        </p>
                        <div className="grid grid-cols-2 gap-1 p-2">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/${s.slug}`}
                              className={cn(
                                "flex items-start gap-3 rounded-sm px-3 py-2.5 transition-colors hover:bg-mist",
                                pathname === `/${s.slug}` && "bg-mist"
                              )}
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                                style={{ background: s.accent }}
                              />
                              <span>
                                <span className="block font-display text-[0.95rem] font-semibold text-ink">
                                  {s.name}
                                </span>
                                <span className="block text-[0.8rem] leading-snug text-steel">
                                  {s.teaser}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {primary.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex h-10 items-center rounded-sm px-3 text-[0.95rem] font-medium text-graphite transition-colors hover:text-navy",
                    pathname === l.href && "text-navy"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={site.phoneHref}
                className="group flex h-11 items-center gap-2.5 bg-signal px-4 font-display font-semibold text-white transition-colors hover:bg-[#B81126] sm:px-5"
              >
                <Phone className="h-4 w-4" strokeWidth={2.4} />
                <span className="hidden sm:inline">{site.phoneDisplay}</span>
                <span className="sm:hidden">Zavolat</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
              >
                <span className="sr-only">{open ? "Zavřít menu" : "Otevřít menu"}</span>
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <div className="stripe h-[3px] w-full" aria-hidden />
      </header>

      {/* Mobilní panel je mimo hlavičku, aby ho neomezoval její backdrop-blur. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[75px] z-40 overflow-y-auto bg-paper lg:hidden"
          >
            <nav aria-label="Mobilní" className="shell py-6">
              <p className="rule-label mb-3">Služby, šest samostatných stránek</p>
              <ul className="mb-8 divide-y divide-line border-y border-line">
                {services.map((s, i) => (
                  <motion.li
                    key={s.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i + 0.05, duration: 0.28 }}
                  >
                    <Link href={`/${s.slug}`} className="flex items-center gap-3 py-3.5">
                      <span
                        aria-hidden
                        className="h-6 w-1 shrink-0"
                        style={{ background: s.accent }}
                      />
                      <span className="font-display text-lg font-semibold">{s.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-1">
                {primary.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-2 font-display text-lg font-semibold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-steel">
                {site.city} a široké okolí
                <br />
                <a href={site.emailHref} className="underline underline-offset-4">
                  {site.email}
                </a>
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
