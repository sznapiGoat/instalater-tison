"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

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
              <div className="group relative">
                <Link
                  href="/#sluzby"
                  className={cn(
                    "flex h-10 items-center rounded-sm px-3 text-[0.95rem] font-medium text-graphite transition-colors hover:text-navy",
                    isService && "text-navy"
                  )}
                >
                  Služby
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-1 border border-line bg-paper p-2 shadow-lift">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="flex items-start gap-3 rounded-sm px-3 py-2.5 transition-colors hover:bg-mist"
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
                </div>
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
              <p className="rule-label mb-3">Služby</p>
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
