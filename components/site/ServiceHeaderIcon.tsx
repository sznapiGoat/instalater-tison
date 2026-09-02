"use client";

import { AnimatedIcon } from "@/components/site/AnimatedIcon";
import type { IconKey } from "@/lib/services";

/** Velký oborový znak v hlavičce podstránky. Animace běží trvale, ale potichu. */
export function ServiceHeaderIcon({ icon, accent }: { icon: IconKey; accent: string }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-6 hidden opacity-[0.07] md:block"
        style={{ color: accent }}
      >
        <AnimatedIcon icon={icon} active className="h-[22rem] w-[22rem]" />
      </span>
      <span
        className="relative inline-flex h-16 w-16 items-center justify-center border"
        style={{ color: accent, borderColor: `${accent}44`, background: `${accent}12` }}
      >
        <AnimatedIcon icon={icon} active className="h-9 w-9" />
      </span>
    </>
  );
}
