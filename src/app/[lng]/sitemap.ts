import { PHARMACEUTICAL_SERVICE_COLORS } from "@/constants/pharmaceuticalServices";
import { SERVICES_DATA } from "@/constants/services";
import { MetadataRoute } from "next";

const baseUrl = "https://www.tukistudio.tv";
const languages = ["en", "es"];

const lastModified = "2025-09-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const allUrls: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    const langBaseUrl = `${baseUrl}/${lang}`;

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
      {
        url: langBaseUrl,
        lastModified: new Date(lastModified),
        changeFrequency: "yearly",
        priority: lang === "es" ? 1 : 0.9, // Spanish is primary language
      },
      {
        url: `${langBaseUrl}/us`,
        lastModified: new Date(lastModified),
        changeFrequency: "monthly",
        priority: 0.3,
      },
      {
        url: `${langBaseUrl}/services`,
        lastModified: new Date(lastModified),
        changeFrequency: "monthly",
        priority: 0.5,
      },
      {
        url: `${langBaseUrl}/contact-us`,
        lastModified: new Date(lastModified),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${langBaseUrl}/pharmaceutical-services`,
        lastModified: new Date(lastModified),
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    // Service type pages (e.g., /en/services/animation)
    const serviceTypePages: MetadataRoute.Sitemap = Object.keys(
      SERVICES_DATA
    ).map((serviceType) => ({
      url: `${langBaseUrl}/services/${serviceType}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    // Individual project pages (e.g., /en/services/animation/shutterfly)
    const projectPages: MetadataRoute.Sitemap = [];
    Object.entries(SERVICES_DATA).forEach(([serviceType, projects]) => {
      Object.keys(projects).forEach((projectKey) => {
        projectPages.push({
          url: `${langBaseUrl}/services/${serviceType}/${projectKey}`,
          lastModified: new Date(lastModified),
          changeFrequency: "yearly" as const,
          priority: 0.4,
        });
      });
    });

    // Pharmaceutical service pages
    const pharmaceuticalPages: MetadataRoute.Sitemap = Object.keys(
      PHARMACEUTICAL_SERVICE_COLORS
    ).map((serviceId) => ({
      url: `${langBaseUrl}/pharmaceutical-services/${serviceId}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    allUrls.push(
      ...staticPages,
      ...serviceTypePages,
      ...projectPages,
      ...pharmaceuticalPages
    );
  });

  return allUrls;
}
