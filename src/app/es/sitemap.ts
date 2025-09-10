import { getLocalizedPath } from "@/constants/localizedRoutes";
import { PHARMACEUTICAL_SERVICE_COLORS } from "@/constants/pharmaceuticalServices";
import { SERVICES_DATA } from "@/constants/services";
import { MetadataRoute } from "next";

const baseUrl = "https://www.tukistudio.tv";
const lastModified = "2025-09-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const lang = "es";
  const langBaseUrl = `${baseUrl}/${lang}`;
  const allUrls: MetadataRoute.Sitemap = [];

  // Static pages with localized URLs
  const staticPaths = [
    "/",
    "/us",
    "/services",
    "/contact-us",
    "/pharmaceutical-services",
  ];
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${langBaseUrl}${getLocalizedPath(path, lang)}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.5,
  }));

  // Service type pages
  const serviceTypePages: MetadataRoute.Sitemap = Object.keys(
    SERVICES_DATA
  ).map((serviceType) => ({
    url: `${langBaseUrl}${getLocalizedPath(`/services/${serviceType}`, lang)}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Individual project pages
  const projectPages: MetadataRoute.Sitemap = [];
  Object.entries(SERVICES_DATA).forEach(([serviceType, projects]) => {
    Object.keys(projects).forEach((projectKey) => {
      projectPages.push({
        url: `${langBaseUrl}${getLocalizedPath(
          `/services/${serviceType}`,
          lang
        )}/${projectKey}`,
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
    url: `${langBaseUrl}${getLocalizedPath(
      `/pharmaceutical-services/${serviceId}`,
      lang
    )}`,
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

  return allUrls;
}