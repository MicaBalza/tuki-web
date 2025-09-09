import { getLocalizedPath, URL_MAPPINGS } from "@/constants/localizedRoutes";
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

    // Static pages with localized URLs
    const staticPaths = ["/", "/us", "/services", "/contact-us", "/pharmaceutical-services"];
    const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
      url: `${langBaseUrl}${getLocalizedPath(path, lang as "en" | "es")}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? (lang === "es" ? 1 : 0.9) : 0.5,
    }));

    // Service type pages (e.g., /en/services/animation or /es/servicios/animacion)
    const serviceTypePages: MetadataRoute.Sitemap = Object.keys(
      SERVICES_DATA
    ).map((serviceType) => ({
      url: `${langBaseUrl}${getLocalizedPath(`/services/${serviceType}`, lang as "en" | "es")}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    // Individual project pages (e.g., /en/services/animation/shutterfly or /es/servicios/animacion/shutterfly)
    const projectPages: MetadataRoute.Sitemap = [];
    Object.entries(SERVICES_DATA).forEach(([serviceType, projects]) => {
      Object.keys(projects).forEach((projectKey) => {
        const basePath = `/services/${serviceType}/${projectKey}`;
        projectPages.push({
          url: `${langBaseUrl}${getLocalizedPath(`/services/${serviceType}`, lang as "en" | "es")}/${projectKey}`,
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
      url: `${langBaseUrl}${getLocalizedPath(`/pharmaceutical-services/${serviceId}`, lang as "en" | "es")}`,
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
