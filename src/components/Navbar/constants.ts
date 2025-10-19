import { getLocalizedPath } from "@/constants/localizedRoutes";

// Base routes structure (using English paths as canonical)
const BASE_ROUTES = [
  {
    path: "/services",
    text: "services",
    color: "nude",
    dropdown: [
      { path: "/services/illustration", text: "illustration" },
      { path: "/services/animation", text: "animation" },
      { path: "/services/social-media", text: "social-media" },
      { path: "/services/editorial", text: "editorial" },
      { path: "/services/branding", text: "branding" },
      { path: "/services/motion-graphics", text: "motion-graphics" },
      { path: "/health-services", text: "pharmaceutical" },
    ],
  },
  {
    path: "/health-services",
    text: "health-services",
    color: "green",
    dropdown: [
      {
        path: "/health-services/institutional-corporate-videos",
        text: "institutional-corporate-videos",
      },
      {
        path: "/health-services/product-launch",
        text: "product-launch",
      },
      {
        path: "/health-services/tutorial-training",
        text: "tutorial-training",
      },
      {
        path: "/health-services/promotional-videos",
        text: "promotional-videos",
      },
      {
        path: "/health-services/events-conferences",
        text: "events-conferences",
      },
      {
        path: "/health-services/podcast-videos",
        text: "podcast-videos",
      },
      {
        path: "/health-services",
        text: "projects",
      },
    ],
  },
  {
    path: "/us",
    text: "who-we-are",
    color: "light-purple",
  },
  // {
  //   path: "/blog",
  //   text: "blog",
  //   color: "yellow",
  // },
  {
    path: "/contact-us",
    text: "contact",
    color: "pink",
  },
];

// Function to get localized routes
export function getLocalizedRoutes(language: "en" | "es") {
  return BASE_ROUTES.map((route) => ({
    ...route,
    path: getLocalizedPath(route.path, language),
    dropdown: route.dropdown?.map((item) => ({
      ...item,
      path: getLocalizedPath(item.path, language),
    })),
  }));
}

// Export default routes (for backward compatibility)
export const ROUTES = BASE_ROUTES;

// Generate navbar colors for all localized paths
function generateNavbarColors(): Record<string, string> {
  const colors: Record<string, string> = {};

  // Base color mappings (using canonical paths)
  const baseColors = {
    "/": "nude",
    "/services": "nude",
    "/health-services": "green",
    "/us": "light-purple",
    "/blog": "yellow",
    "/contact-us": "pink",
    "/services/illustration": "green",
    "/services/animation": "yellow",
    "/services/social-media": "light-purple",
    "/services/editorial": "red",
    "/services/branding": "pink",
    "/services/motion-graphics": "light-purple",
  };

  // Add colors for both English and Spanish paths
  Object.entries(baseColors).forEach(([canonicalPath, color]) => {
    // Add English path
    const englishPath = getLocalizedPath(canonicalPath, "en");
    const englishKey = canonicalPath === "/" ? "/" : `/${englishPath}`;
    colors[englishKey] = color;

    // Add Spanish path
    const spanishPath = getLocalizedPath(canonicalPath, "es");
    const spanishKey = canonicalPath === "/" ? "/" : `/${spanishPath}`;
    colors[spanishKey] = color;
  });

  return colors;
}

export const NAVBAR_COLORS: Record<string, string> = generateNavbarColors();
