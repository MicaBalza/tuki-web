import { MetadataRoute } from "next";

const baseUrl = "https://www.tukistudio.tv/en";

const lastModified = "2025-03-16";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(lastModified),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/us`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
