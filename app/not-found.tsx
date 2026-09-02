import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Stránka nenalezena | ${site.name}` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_70%_10%,rgba(46,155,214,.2),transparent_60%)]"
        aria-hidden
      />
      <div className="shell relative flex min-h-[78vh] flex-col justify-center pb-20 pt-[136px]">
        <p
          className="font-display font-extrabold leading-[0.85] text-white/10"
          style={{ fontSize: "clamp(6rem, 20vw, 15rem)" }}
        >
          404
        </p>
        <h1 className="display-lg mt-4 max-w-2xl text-white">
          Tahle trasa nikam nevede
        </h1>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">
          Stránku, kterou hledáte, jsme nenašli. Zkuste některou ze služeb níž,
          nebo rovnou zavolejte.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex h-[3.25rem] items-center gap-2.5 bg-signal px-7 font-display font-semibold text-white transition-colors hover:bg-[#B81126]"
          >
            <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={2.4} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/"
            className="group inline-flex h-[3.25rem] items-center gap-2 border border-white/25 bg-white/5 px-6 font-display font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Na úvodní stranu
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2 border-t border-white/15 pt-8">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="flex items-center gap-2 border border-white/20 px-3.5 py-2 text-[0.9rem] text-white/80 transition-colors hover:border-white/60 hover:text-white"
              >
                <span aria-hidden className="h-4 w-1" style={{ background: s.accent }} />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="stripe h-[5px] w-full" aria-hidden />
    </section>
  );
}
