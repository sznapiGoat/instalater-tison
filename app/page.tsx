import type { Metadata } from "next";

import { CTASection } from "@/components/site/CTASection";
import { Hero } from "@/components/site/Hero";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/components/site/JsonLd";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TrustSection } from "@/components/site/TrustSection";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Instalatér a topenář ${site.city} | ${site.name}`,
  description:
    "Instalatér a topenář v Hrušovanech nad Jevišovkou a širokém okolí. Voda, topení, plyn, kanalizace, inspekce potrubí kamerou a strojní čištění odpadů do 22 metrů. Firma s dvacetiletou tradicí.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Úvod", url: "/" }])} />

      <Hero />

      <section id="sluzby" className="scroll-mt-24 bg-mist py-20 sm:py-28" aria-labelledby="sluzby-nadpis">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-2xl">
              <h2 id="sluzby-nadpis" className="display-lg">
                Šest oborů, jedna dodávka a jeden člověk, kterému voláte
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="max-w-md">
              <p className="lede">
                Voda, topení a plyn se v domě potkávají. Když je dělá jeden
                řemeslník, nemusíte řešit, kdo za co může.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
