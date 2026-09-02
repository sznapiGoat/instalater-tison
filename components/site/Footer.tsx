import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";
import { areaServed, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="shell grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/img/logo.jpg"
            alt=""
            width={430}
            height={255}
            className="h-12 w-auto bg-white p-1"
          />
          <p className="mt-5 text-sm leading-relaxed">
            {site.legalName}, instalatér a topenář. Firma s dvacetiletou tradicí
            v {site.cityLocative} a širokém okolí. Vzdálené zakázky po domluvě.
          </p>
        </div>

        <nav aria-labelledby="footer-sluzby">
          <h2 id="footer-sluzby" className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Služby
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="pt-2 not-italic">
              {site.street}
              <br />
              {site.postalCode} {site.city}
            </li>
            <li className="pt-2 text-white/50">IČO {site.ico}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
            Kde pracujeme
          </h2>
          <p className="mt-4 text-sm leading-relaxed">{areaServed.join(", ")} a další obce v okolí.</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/o-nas" className="transition-colors hover:text-white">
                O nás
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="transition-colors hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="stripe h-[3px] w-full" aria-hidden />
      <div className="shell flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}, {site.name}
        </p>
        <p>Ukázkový web. Ceny a rozsah prací potvrdíme vždy na místě.</p>
      </div>
      <div className="h-16 lg:hidden" aria-hidden />
    </footer>
  );
}
