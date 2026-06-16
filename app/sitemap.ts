import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yia.com.pa",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
