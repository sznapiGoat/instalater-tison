"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

/** Volací lišta na mobilu. Objeví se, jakmile uživatel odscrolluje hero. */
export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 72 }}
          animate={{ y: 0 }}
          exit={{ y: 72 }}
          transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="stripe h-[3px] w-full" aria-hidden />
          <div className="flex bg-ink">
            <a
              href={site.phoneHref}
              className="flex h-14 flex-1 items-center justify-center gap-2.5 bg-signal font-display font-semibold text-white"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={2.4} />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="flex h-14 w-[4.5rem] items-center justify-center text-white"
              aria-label={`Napsat e-mail na ${site.email}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
