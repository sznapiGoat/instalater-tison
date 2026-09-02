export const site = {
  name: "Tisoň Instalatér-Topenář",
  legalName: "Miroslav Tisoň",
  shortName: "Tisoň",
  tagline: "Voda, topení, plyn a kanalizace",
  phone: "+420 723 304 631",
  phoneHref: "tel:+420723304631",
  phoneDisplay: "723 304 631",
  email: "Miroslavtison@seznam.cz",
  emailHref: "mailto:Miroslavtison@seznam.cz",
  city: "Hrušovany nad Jevišovkou",
  /** 6. pád pro věty typu "v Hrušovanech nad Jevišovkou". */
  cityLocative: "Hrušovanech nad Jevišovkou",
  street: "Na Hrádku 964",
  postalCode: "671 67",
  region: "Jihomoravský kraj",
  ico: "72452854",
  since: 2005,
  years: 20,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tison-instalater.vercel.app",
} as const;

export const areaServed = [
  "Hrušovany nad Jevišovkou",
  "Znojmo",
  "Hrabětice",
  "Jevišovka",
  "Božice",
  "Hevlín",
  "Šanov",
  "Pravice",
];
