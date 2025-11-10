import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager"; // Already lazy loads scripts internally
import Navbar from "@/components/Navbar";
import { CookieProvider } from "@/contexts/CookieContext";
import { languages } from "@/i18n/settings";
import { PageProps } from "@/types/i18n";
import { generateCanonicalMetadata } from "@/utils/canonical";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { dir } from "i18next";
import type { Metadata } from "next";
import localFont from "next/font/local";
// Import critical CSS inline for faster initial render
import "../critical.css";
// Main CSS will be loaded but not block render
import "@/styles/globals.css";

// Reduce font preload to avoid render-blocking request (bold weight often not needed for above-the-fold)
const RethinkFont = localFont({
  src: [
    {
      path: "../../assets/fonts/RethinkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/RethinkSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  // Removed preload to prevent font request from competing with LCP image/content
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lng } = resolvedParams;
  const canonicalMeta = generateCanonicalMetadata("/", lng as "en" | "es");

  return {
    title: "Tuki Studio",
    description: "Le damos vida a tus ideas.",
    verification: {
      google: "google",
    },
    ...canonicalMeta,
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
  } & PageProps
) {
  const params = await props.params;

  const { lng } = params;

  const { children } = props;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={RethinkFont.className}>
        <CookieProvider>
          {/* GTM scripts are lazy via strategy="lazyOnload" inside component */}
          <GoogleTagManager
            gtmId={process.env.NEXT_GOOGLE_TAG_MANAGER_ID || ""}
          />
          <header>
            <Navbar />
          </header>
          {children}
          {/* Footer and CookieBanner loaded dynamically to defer their JS */}
          <Footer />
          <CookieBanner />
        </CookieProvider>
        {/* Non-critical performance analytics deferred */}
        <SpeedInsights />
      </body>
    </html>
  );
}
