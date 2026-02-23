import { getLocalizedPath } from "@/constants/localizedRoutes";

const BASE_URL = "https://www.tukistudio.tv";

export function generateCanonicalMetadata(canonicalPath: string, currentLang: "en" | "es") {
  // Self-referencing canonical (2024 best practice for multilingual sites)
  const localizedPath = getLocalizedPath(canonicalPath, currentLang);
  const selfCanonical = currentLang === "es"
    ? `${BASE_URL}${localizedPath}`
    : `${BASE_URL}/en${localizedPath}`;

  // Generate hreflang alternates
  const esPath = getLocalizedPath(canonicalPath, "es");
  const enPath = getLocalizedPath(canonicalPath, "en");

  return {
    alternates: {
      canonical: selfCanonical, // Self-referencing canonical
      languages: {
        'es': `${BASE_URL}${esPath}`,
        'en': `${BASE_URL}/en${enPath}`,
        'x-default': `${BASE_URL}${esPath}`, // Spanish as default
      }
    }
  };
}