import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { ServiceHeaderIcon } from "@/components/site/ServiceHeaderIcon";
import { PhotoMasonry } from "@/components/site/PhotoMasonry";
import { VanDetail } from "@/components/site/VanDetail";
import { getPhotos } from "@/lib/photos";
import { getService, type Service } from "@/lib/services";
import { site } from "@/lib/site";

export function ServicePageTemplate({ service }: { service: Service }) {
  const gallery = getPhotos(service.gallery);
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(85% 75% at 78% 12%, ${service.accentOnDark}33, transparent 62%)`,
          }}
          aria-hidden
        />
        <div className="shell relative pb-16 pt-[104px] sm:pb-20 sm:pt-[136px]">
          <Breadcrumbs
            items={[
              { name: "Úvod", url: "/" },
              { name: service.name, url: `/${service.slug}` },
            ]}
          />

          <div className="mt-8">
            <ServiceHeaderIcon icon={service.icon} accent={service.accentOnDark} />
          </div>

          <h1 className="display-xl mt-7 max-w-3xl text-white">{service.h1}</h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg">
            {service.intro}
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
              href="/kontakt"
              className="inline-flex h-[3.25rem] items-center gap-2 border border-white/25 bg-white/5 px-6 font-display font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className="stripe h-[5px] w-full" aria-hidden />
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="rozsah">
        <div className="shell">
          <Reveal>
            <h2 id="rozsah" className="display-lg max-w-2xl">
              Co pro vás uděláme
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {service.items.map((item, i) => (
              <li key={item.name} className="bg-paper">
                <Reveal delay={i * 0.08} className="h-full p-7 sm:p-8">
                  <span
                    aria-hidden
                    className="block h-[3px] w-10"
                    style={{ background: service.accent }}
                  />
                  <h3 className="display-md mt-5">{item.name}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-steel">{item.desc}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-labelledby="realizace">
        <div className="shell">
          <Reveal>
            <h2 id="realizace" className="display-lg max-w-2xl">
              {gallery.length > 0 ? "Z realizací" : "Poznáte nás podle dodávky"}
            </h2>
          </Reveal>

          {gallery.length > 0 ? (
            <PhotoMasonry items={gallery} accent={service.accent} className="mt-10" />
          ) : (
            <div className="mt-10">
              <VanDetail
                focus={service.photo.focus}
                alt={service.photo.alt}
                caption={service.photo.caption}
                accent={service.accent}
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-line bg-mist py-20 sm:py-24" aria-labelledby="kdy-volat">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="kdy-volat" className="display-lg">
              Kdy nám zavolat
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p
              className="border-l-[3px] pl-6 text-[1.0625rem] leading-[1.7] text-graphite sm:text-lg"
              style={{ borderColor: service.accent }}
            >
              {service.whenToCall}
            </p>
            <a
              href={site.phoneHref}
              className="mt-7 inline-flex items-center gap-2 font-display text-lg font-bold text-navy underline-offset-4 hover:underline"
            >
              {site.phone}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="souvisi">
        <div className="shell">
          <Reveal>
            <h2 id="souvisi" className="display-lg">
              Souvisí s tím
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08} className="bg-paper">
                <Link href={`/${r.slug}`} className="group block h-full p-7 sm:p-8">
                  <span
                    aria-hidden
                    className="block h-[3px] w-10 transition-all duration-300 group-hover:w-16"
                    style={{ background: r.accent }}
                  />
                  <h3 className="display-md mt-5 flex items-center gap-2">
                    {r.name}
                    <ArrowUpRight className="h-5 w-5 text-steel transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-steel">{r.teaser}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${service.name} v ${site.cityLocative} a okolí`}
        body="Popište nám telefonicky, co potřebujete. Přijedeme se podívat, nastíníme postup a nezávaznou cenovou nabídku uděláme na místě."
      />
    </>
  );
}
