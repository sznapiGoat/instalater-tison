import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { JsonLd, breadcrumbSchema } from "@/components/site/JsonLd";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { Reveal } from "@/components/site/Reveal";
import { TrustSection } from "@/components/site/TrustSection";
import { photos } from "@/lib/photos";
import { services } from "@/lib/services";
import { areaServed, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `O nás a dvacet let v oboru | ${site.name}` },
  description:
    "Miroslav Tisoň, instalatér a topenář z Hrušovan nad Jevišovkou. Dvacet let praxe, šest oborů od vody po čištění kanalizace, nezávazná cenová nabídka na místě.",
  alternates: { canonical: "/o-nas" },
  openGraph: {
    title: `O nás a dvacet let v oboru | ${site.name}`,
    description:
      "Instalatér a topenář s dvacetiletou tradicí v Hrušovanech nad Jevišovkou a širokém okolí.",
    url: "/o-nas",
    type: "profile",
    images: ["/img/van.jpg"],
  },
};

/** Průřez obory, schválně jiné kusy než na domovské stránce. */
const odRuky = [
  { ...photos.podlahovkaChodba, accent: "#E2621B" },
  { ...photos.drazkaRozvody, accent: "#1E7FC2" },
  { ...photos.geberitDvojice, accent: "#103A66" },
];

const whyUs = [
  {
    title: "Jedna firma na celý dům",
    body: "Voda, topení, plyn i kanalizace v jedněch rukou. Nemusíte koordinovat tři party a řešit, kdo komu co rozbil.",
  },
  {
    title: "Nejdřív se podíváme, pak se kope",
    body: "Máme kameru i lokátor. Než začne výkop, víme, kudy potrubí vede a kde přesně je problém.",
  },
  {
    title: "Cenu znáte předem",
    body: "Nezávaznou cenovou nabídku uděláme na místě, ještě než se do práce pustíme.",
  },
  {
    title: "Jezdíme i dál",
    body: `Základna je v ${site.cityLocative}, běžně pracujeme v širokém okolí a vzdálenější zakázky bereme po domluvě.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", url: "/" },
          { name: "O nás", url: "/o-nas" },
        ])}
      />

      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_10%,rgba(46,155,214,.22),transparent_60%)]"
          aria-hidden
        />
        <div className="shell relative pb-16 pt-[104px] sm:pb-20 sm:pt-[136px]">
          <Breadcrumbs
            items={[
              { name: "Úvod", url: "/" },
              { name: "O nás", url: "/o-nas" },
            ]}
          />
          <h1 className="display-xl mt-8 max-w-3xl text-white">
            Dvacet let pod jedním jménem
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg">
            Firma s dvacetiletou tradicí. Za volantem, s klíčem i s kamerou je
            Miroslav Tisoň. Děláme vodu, topení, plyn a kanalizaci v{" "}
            {site.cityLocative} a širokém okolí, vzdálenější zakázky po domluvě.
          </p>
        </div>
        <div className="stripe h-[5px] w-full" aria-hidden />
      </section>

      <section className="py-16 sm:py-20">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="display-lg">Co po nás zůstane</h2>
          </Reveal>
          <PhotoGrid items={odRuky} accent="#103A66" className="mt-10" />
        </div>
      </section>

      <TrustSection />

      <section className="border-t border-line bg-mist py-20 sm:py-24" aria-labelledby="proc-my">
        <div className="shell">
          <Reveal>
            <h2 id="proc-my" className="display-lg max-w-2xl">
              Proč zavolat právě nám
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className="bg-paper">
                <div className="h-full p-7 sm:p-8">
                  <span aria-hidden className="stripe block h-[3px] w-12" />
                  <h3 className="display-md mt-5">{w.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-steel">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="py-20 sm:py-24" aria-labelledby="kde-a-co">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="kde-a-co" className="display-lg">
              Co děláme a kde
            </h2>
            <p className="lede mt-5">
              Šest oborů, které se v domě stejně vždycky potkají. Klikněte na
              kterýkoli z nich a najdete konkrétní rozsah prací.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug} className="bg-paper">
                  <Link href={`/${s.slug}`} className="group flex items-center gap-3 p-5">
                    <span
                      aria-hidden
                      className="h-8 w-1 shrink-0 transition-all duration-300 group-hover:h-10"
                      style={{ background: s.accent }}
                    />
                    <span>
                      <span className="block font-display font-bold text-ink">{s.name}</span>
                      <span className="block text-[0.85rem] leading-snug text-steel">
                        {s.teaser}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.95rem] leading-relaxed text-steel">
              <span className="font-semibold text-ink">Kde pracujeme: </span>
              {areaServed.join(", ")} a další obce v okolí. Vzdálenější zakázky
              po domluvě.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
