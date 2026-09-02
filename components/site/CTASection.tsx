import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

export function CTASection({
  title = "Potřebujete instalatéra nebo topenáře?",
  body = "Zavolejte a popište, co se děje. Přijedeme se podívat a nezávaznou cenovou nabídku dostanete rovnou na místě.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_85%_20%,rgba(210,23,46,.22),transparent_60%)]"
        aria-hidden
      />
      <div className="shell relative py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="display-lg text-white">{title}</h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg">{body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex h-[3.25rem] items-center gap-2.5 bg-signal px-7 font-display font-semibold text-white transition-colors hover:bg-[#B81126]"
          >
            <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={2.4} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-[3.25rem] items-center gap-2 border border-white/25 bg-white/5 px-6 font-display font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Kontaktní údaje
          </Link>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              <a href={site.phoneHref} className="text-white/80 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              <a href={site.emailHref} className="break-all text-white/80 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              <span className="text-white/80">
                {site.city} a široké okolí
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className="stripe h-[5px] w-full" aria-hidden />
    </section>
  );
}
