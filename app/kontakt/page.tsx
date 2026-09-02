import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/components/site/JsonLd";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { Reveal } from "@/components/site/Reveal";
import { VanDetail } from "@/components/site/VanDetail";
import { services } from "@/lib/services";
import { areaServed, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Kontakt a telefon ${site.phoneDisplay} | ${site.name}` },
  description:
    "Kontakt na instalatéra a topenáře Miroslava Tisoně z Hrušovan nad Jevišovkou. Telefon 723 304 631, e-mail Miroslavtison@seznam.cz. Cenová nabídka na místě zdarma.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: `Kontakt | ${site.name}`,
    description: `Telefon ${site.phone}, ${site.city} a široké okolí.`,
    url: "/kontakt",
    type: "website",
    images: ["/img/van.jpg"],
  },
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.street}, ${site.postalCode} ${site.city}`
)}`;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ])}
      />

      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_10%,rgba(210,23,46,.22),transparent_60%)]"
          aria-hidden
        />
        <div className="shell relative pb-16 pt-[104px] sm:pb-20 sm:pt-[136px]">
          <Breadcrumbs
            items={[
              { name: "Úvod", url: "/" },
              { name: "Kontakt", url: "/kontakt" },
            ]}
          />
          <h1 className="display-xl mt-8 max-w-3xl text-white">
            Zavolejte, domluvíme se
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg">
            Nejrychlejší cesta je telefon. Popište, co se děje, a domluvíme
            termín. Na místě si vyslechneme požadavky, nastíníme postup práce a
            uděláme nezávaznou cenovou nabídku.
          </p>

          <div className="mt-10 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 bg-navy-deep p-7 transition-colors hover:bg-[#0d2c50]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-signal">
                <Phone className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span>
                <span className="block text-[0.8rem] uppercase tracking-[0.16em] text-white/50">
                  Telefon
                </span>
                <span className="mt-1 block font-display text-xl font-bold text-white sm:text-2xl">
                  {site.phone}
                </span>
              </span>
            </a>
            <a
              href={site.emailHref}
              className="group flex items-center gap-4 bg-navy-deep p-7 transition-colors hover:bg-[#0d2c50]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-azure">
                <Mail className="h-5 w-5 text-navy-deep" strokeWidth={2.4} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.8rem] uppercase tracking-[0.16em] text-white/50">
                  E-mail
                </span>
                <span className="mt-1 block break-all font-display text-lg font-bold text-white">
                  {site.email}
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="stripe h-[5px] w-full" aria-hidden />
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="udaje">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="udaje" className="display-lg">
              Fakturační a kontaktní údaje
            </h2>
            <address className="mt-8 space-y-6 not-italic">
              <div>
                <p className="rule-label">Firma</p>
                <p className="mt-1.5 font-display text-lg font-bold text-ink">
                  {site.legalName}
                </p>
                <p className="text-[0.95rem] text-steel">{site.name}</p>
              </div>
              <div>
                <p className="rule-label">Sídlo</p>
                <p className="mt-1.5 text-[0.98rem] leading-relaxed text-graphite">
                  {site.street}
                  <br />
                  {site.postalCode} {site.city}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-navy underline-offset-4 hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Zobrazit na mapě
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div>
                <p className="rule-label">IČO</p>
                <p className="mt-1.5 text-[0.98rem] text-graphite">{site.ico}</p>
              </div>
            </address>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display-md">Kam jezdíme</h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-steel">
                Základna je v {site.cityLocative}. Běžně pracujeme v širokém okolí,
                vzdálenější zakázky bereme po domluvě.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areaServed.map((a) => (
                  <li
                    key={a}
                    className="border border-line bg-mist px-3 py-1.5 text-[0.85rem] text-graphite"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display-md mt-12">S čím se na nás obracíte</h2>
              <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug} className="bg-paper">
                    <Link href={`/${s.slug}`} className="group flex items-center gap-3 p-4">
                      <span
                        aria-hidden
                        className="h-6 w-1 shrink-0 transition-all duration-300 group-hover:h-8"
                        style={{ background: s.accent }}
                      />
                      <span className="font-display font-semibold text-ink">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="shell mt-16">
          <VanDetail
            focus="57.5% 52%"
            alt="Detail polepu na boku dodávky s červeným nápisem mobil: 723 304 631 a oválným logem instalatér Tisoň topenář"
            caption="Stejné číslo, jaké vozíme na dodávce. Když ji potkáte v okolí Hrušovan, voláte na správné místo."
            accent="#D2172E"
          />
        </div>
      </section>

      <ProcessSteps />
    </>
  );
}
