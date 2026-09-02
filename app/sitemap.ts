import type { MetadataRoute } from "next";

import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${site.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/o-nas`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
