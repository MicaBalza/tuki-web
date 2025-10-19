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
  "/health-services": {
    en: "/health-services", 
    es: "/servicios-salud",
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
  "/health-services/institutional-corporate-videos": {
    en: "/health-services/institutional-corporate-videos",
    es: "/servicios-salud/videos-institucionales-corporativos",
  },
  "/health-services/product-launch": {
    en: "/health-services/product-launch",
    es: "/servicios-salud/lanzamiento-productos",
  },
  "/health-services/tutorial-training": {
    en: "/health-services/tutorial-training", 
    es: "/servicios-salud/tutorial-capacitacion",
  },
  "/health-services/promotional-videos": {
    en: "/health-services/promotional-videos",
    es: "/servicios-salud/videos-promocion",
  },
  "/health-services/events-conferences": {
    en: "/health-services/events-conferences",
    es: "/servicios-salud/eventos-conferencias", 
  },
  "/health-services/podcast-videos": {
    en: "/health-services/podcast-videos",
    es: "/servicios-salud/videos-podcast",
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
  
  if (mapping) {
    return mapping[language];
  }
  
  // Handle dynamic service paths
  const pathSegments = path.split("/").filter(Boolean);
  
  // Handle /services/[service-type]/[project] pattern
  if (pathSegments.length === 3 && pathSegments[0] === "services") {
    const serviceType = pathSegments[1];
    const project = pathSegments[2];
    
    if (language === "es") {
      // Map English service types to Spanish
      const serviceTypeMap: Record<string, string> = {
        "illustration": "ilustracion",
        "animation": "animacion", 
        "social-media": "redes-sociales",
        "editorial": "editorial",
        "branding": "branding",
        "motion-graphics": "motion-graphics"
      };
      
      const spanishServiceType = serviceTypeMap[serviceType];
      if (spanishServiceType) {
        return `/servicios/${spanishServiceType}/${project}`;
      }
    }
  }
  
  // Handle /health-services/[service-name] pattern
  else if (pathSegments.length === 2 && pathSegments[0] === "health-services") {
    const serviceName = pathSegments[1];
    
    if (language === "es") {
      // Map English pharmaceutical service names to Spanish
      const pharmaServiceMap: Record<string, string> = {
        "institutional-corporate-videos": "videos-institucionales-corporativos",
        "product-launch": "lanzamiento-productos",
        "tutorial-training": "tutorial-capacitacion",
        "promotional-videos": "videos-promocion",
        "events-conferences": "eventos-conferencias",
        "podcast-videos": "videos-podcast"
      };
      
      const spanishServiceName = pharmaServiceMap[serviceName];
      if (spanishServiceName) {
        return `/servicios-salud/${spanishServiceName}`;
      }
    }
  }
  
  // Return original path if no mapping found
  return path;
}

// Helper function to get canonical path from localized path
export function getCanonicalPath(localizedPath: string, language: "en" | "es"): string {
  if (language === "en") {
    // For English, find the key that matches the localized path
    const entry = Object.entries(URL_MAPPINGS).find(([_, localized]) => localized.en === localizedPath);
    return entry ? entry[0] : localizedPath;
  } else {
    // For Spanish, first try the reverse mapping
    let canonicalPath = SPANISH_TO_ENGLISH_MAPPING[localizedPath];
    
    if (canonicalPath) {
      return canonicalPath;
    }
    
    // Handle dynamic service paths
    const pathSegments = localizedPath.split("/").filter(Boolean);
    
    // Handle /servicios/[service-type]/[project] pattern
    if (pathSegments.length === 3 && pathSegments[0] === "servicios") {
      const serviceType = pathSegments[1];
      const project = pathSegments[2];
      
      // Map Spanish service types to English
      const serviceTypeMap: Record<string, string> = {
        "ilustracion": "illustration",
        "animacion": "animation", 
        "redes-sociales": "social-media",
        "editorial": "editorial",
        "branding": "branding",
        "motion-graphics": "motion-graphics"
      };
      
      const englishServiceType = serviceTypeMap[serviceType];
      if (englishServiceType) {
        return `/services/${englishServiceType}/${project}`;
      }
    }
    
    // Handle /servicios-salud/[service-name] pattern
    else if (pathSegments.length === 2 && pathSegments[0] === "servicios-salud") {
      const serviceName = pathSegments[1];
      
      // Map Spanish pharmaceutical service names to English
      const pharmaServiceMap: Record<string, string> = {
        "videos-institucionales-corporativos": "institutional-corporate-videos",
        "lanzamiento-productos": "product-launch",
        "tutorial-capacitacion": "tutorial-training",
        "videos-promocion": "promotional-videos",
        "eventos-conferencias": "events-conferences",
        "videos-podcast": "podcast-videos"
      };
      
      const englishServiceName = pharmaServiceMap[serviceName];
      if (englishServiceName) {
        return `/health-services/${englishServiceName}`;
      }
    }
    
    // Return original path if no mapping found
    return localizedPath;
  }
}