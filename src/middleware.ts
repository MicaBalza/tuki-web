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
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with language code
  const pathnameHasLang = languages.some((loc) => pathname.startsWith(`/${loc}`));
  
  if (pathnameHasLang) {
    // Extract language and path
    const segments = pathname.split("/");
    const pathLang = segments[1] as "en" | "es";
    const localizedPath = "/" + segments.slice(2).join("/");
    
    // Convert Spanish URLs to canonical English paths for routing
    if (pathLang === "es" && localizedPath !== "/") {
      const canonicalPath = getCanonicalPath(localizedPath, "es");
      
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
    return NextResponse.redirect(
      new URL(`/${lng}${pathname}`, req.url)
    );
  }
}
