import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/site/JsonLd";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { getService } from "@/lib/services";

const slug = "inspekce-kamerou";
const service = getService(slug);

export const metadata: Metadata = {
  title: { absolute: service?.metaTitle ?? "" },
  description: service?.metaDescription,
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: `/${slug}`,
    type: "article",
    images: ["/img/van.jpg"],
  },
};

export default function Page() {
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          slug: service.slug,
          items: service.items,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Úvod", url: "/" },
          { name: service.name, url: `/${service.slug}` },
        ])}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
