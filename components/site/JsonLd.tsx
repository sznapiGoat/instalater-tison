import { areaServed, site } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Obsah je statický, generovaný z lib/site.ts.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const businessId = `${site.url}/#plumber`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": businessId,
  name: site.name,
  legalName: site.legalName,
  description:
    "Instalatér a topenář v Hrušovanech nad Jevišovkou. Voda, topení, plyn, kanalizace, inspekce potrubí kamerou a strojní čištění odpadů. Firma s dvacetiletou tradicí.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/img/van.jpg`,
  logo: `${site.url}/img/logo.jpg`,
  foundingDate: String(site.since),
  identifier: site.ico,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressRegion: site.region,
    addressCountry: "CZ",
  },
  areaServed: areaServed.map((name) => ({ "@type": "City", name })),
  knowsLanguage: "cs",
  currenciesAccepted: "CZK",
  priceRange: "$$",
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.url}`,
  })),
});

export const serviceSchema = ({
  name,
  description,
  slug,
  items,
}: {
  name: string;
  description: string;
  slug: string;
  items: { name: string; desc: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: `${site.url}/${slug}`,
  provider: {
    "@type": "Plumber",
    "@id": businessId,
    name: site.name,
    telephone: site.phone,
  },
  areaServed: areaServed.map((n) => ({ "@type": "City", name: n })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name,
    itemListElement: items.map((it) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: it.name, description: it.desc },
    })),
  },
});
