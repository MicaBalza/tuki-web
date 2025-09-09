// URL mappings for localized routes
export const URL_MAPPINGS = {
  // Main pages
  "/": {
    en: "/",
    es: "/",
  },
  "/services": {
    en: "/services",
    es: "/servicios",
  },
  "/pharmaceutical-services": {
    en: "/pharmaceutical-services", 
    es: "/servicios-farmaceutica",
  },
  "/us": {
    en: "/us",
    es: "/nosotros",
  },
  "/contact-us": {
    en: "/contact-us",
    es: "/contacto",
  },
  
  // Service pages
  "/services/illustration": {
    en: "/services/illustration",
    es: "/servicios/ilustracion",
  },
  "/services/animation": {
    en: "/services/animation", 
    es: "/servicios/animacion",
  },
  "/services/social-media": {
    en: "/services/social-media",
    es: "/servicios/redes-sociales",
  },
  "/services/editorial": {
    en: "/services/editorial",
    es: "/servicios/editorial",
  },
  "/services/branding": {
    en: "/services/branding",
    es: "/servicios/branding",
  },
  "/services/motion-graphics": {
    en: "/services/motion-graphics",
    es: "/servicios/motion-graphics",
  },
  
  // Pharmaceutical service pages
  "/pharmaceutical-services/institutional-corporate-videos": {
    en: "/pharmaceutical-services/institutional-corporate-videos",
    es: "/servicios-farmaceutica/videos-institucionales-corporativos",
  },
  "/pharmaceutical-services/product-launch": {
    en: "/pharmaceutical-services/product-launch",
    es: "/servicios-farmaceutica/lanzamiento-productos",
  },
  "/pharmaceutical-services/tutorial-training": {
    en: "/pharmaceutical-services/tutorial-training", 
    es: "/servicios-farmaceutica/tutorial-capacitacion",
  },
  "/pharmaceutical-services/promotional-videos": {
    en: "/pharmaceutical-services/promotional-videos",
    es: "/servicios-farmaceutica/videos-promocion",
  },
  "/pharmaceutical-services/events-conferences": {
    en: "/pharmaceutical-services/events-conferences",
    es: "/servicios-farmaceutica/eventos-conferencias", 
  },
  "/pharmaceutical-services/podcast-videos": {
    en: "/pharmaceutical-services/podcast-videos",
    es: "/servicios-farmaceutica/videos-podcast",
  },
} as const;

// Reverse mapping for Spanish to English (for routing)
export const SPANISH_TO_ENGLISH_MAPPING: Record<string, string> = {};
Object.entries(URL_MAPPINGS).forEach(([englishPath, localized]) => {
  SPANISH_TO_ENGLISH_MAPPING[localized.es] = englishPath;
});

// Helper function to get localized path
export function getLocalizedPath(path: string, language: "en" | "es"): string {
  const mapping = URL_MAPPINGS[path as keyof typeof URL_MAPPINGS];
  return mapping ? mapping[language] : path;
}

// Helper function to get canonical path from localized path
export function getCanonicalPath(localizedPath: string, language: "en" | "es"): string {
  if (language === "en") {
    // For English, find the key that matches the localized path
    const entry = Object.entries(URL_MAPPINGS).find(([_, localized]) => localized.en === localizedPath);
    return entry ? entry[0] : localizedPath;
  } else {
    // For Spanish, use the reverse mapping
    return SPANISH_TO_ENGLISH_MAPPING[localizedPath] || localizedPath;
  }
}