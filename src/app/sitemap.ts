import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://anniescottdoula.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "http://anniescottdoula.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: .8,
    }
  ]
}