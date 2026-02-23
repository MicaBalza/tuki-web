import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.tukistudio.tv/en/sitemap.xml",
      "https://www.tukistudio.tv/es/sitemap.xml",
    ],
  };
}
