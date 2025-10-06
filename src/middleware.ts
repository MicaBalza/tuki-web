import acceptLanguage from "accept-language";
import { NextResponse } from "next/server";
import { getCanonicalPath } from "./constants/localizedRoutes";
import { cookieName, fallbackLng, languages } from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req: any) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  const pathname = req.nextUrl.pathname;

  // Skip middleware for static files, API routes, and SEO files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with language code
  const pathnameHasLang = languages.some((loc) =>
    pathname.startsWith(`/${loc}`)
  );

  if (pathnameHasLang) {
    // Extract language and path
    const segments = pathname.split("/");
    const pathLang = segments[1] as "en" | "es";
    const localizedPath = "/" + segments.slice(2).join("/");

    // Convert Spanish URLs to canonical English paths for routing
    if (pathLang === "es" && localizedPath !== "/") {
      let canonicalPath = getCanonicalPath(localizedPath, "es");

      // Handle dynamic service paths like /servicios/ilustracion/project or /servicios-farmaceutica/service-name
      if (canonicalPath === localizedPath) {
        const pathSegments = localizedPath.split("/").filter(Boolean);

        // Handle /servicios/[service-type]/[project] pattern
        if (pathSegments.length === 3 && pathSegments[0] === "servicios") {
          const serviceType = pathSegments[1];
          const project = pathSegments[2];

          // Map common Spanish service types to English
          const serviceTypeMap: Record<string, string> = {
            ilustracion: "illustration",
            animacion: "animation",
            "redes-sociales": "social-media",
            editorial: "editorial",
            branding: "branding",
            "motion-graphics": "motion-graphics",
          };

          const englishServiceType = serviceTypeMap[serviceType];
          if (englishServiceType) {
            canonicalPath = `/services/${englishServiceType}/${project}`;
          }
        }

        // Handle /servicios-farmaceutica/[service-name] pattern
        else if (
          pathSegments.length === 2 &&
          pathSegments[0] === "servicios-farmaceutica"
        ) {
          const serviceName = pathSegments[1];

          // Map Spanish pharmaceutical service names to English
          const pharmaServiceMap: Record<string, string> = {
            "videos-institucionales-corporativos":
              "institutional-corporate-videos",
            "lanzamiento-productos": "product-launch",
            "tutorial-capacitacion": "tutorial-training",
            "videos-promocion": "promotional-videos",
            "eventos-conferencias": "events-conferences",
            "videos-podcast": "podcast-videos",
          };

          const englishServiceName = pharmaServiceMap[serviceName];
          if (englishServiceName) {
            canonicalPath = `/pharmaceutical-services/${englishServiceName}`;
          }
        }
      }

      // If we found a canonical path different from the localized path,
      // rewrite the URL to the canonical structure for Next.js routing
      if (canonicalPath !== localizedPath) {
        const rewriteUrl = new URL(`/${pathLang}${canonicalPath}`, req.url);
        return NextResponse.rewrite(rewriteUrl);
      }
    }

    // Set language cookie from URL
    const response = NextResponse.next();
    response.cookies.set(cookieName, pathLang);
    return response;
  } else {
    // Redirect to add language prefix
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url));
  }
}
