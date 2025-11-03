import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import Navbar from "@/components/Navbar";
import { CookieProvider } from "@/contexts/CookieContext";
import { languages } from "@/i18n/settings";
import { PageProps } from "@/types/i18n";
import { generateCanonicalMetadata } from "@/utils/canonical";
import { dir } from "i18next";
import type { Metadata } from "next";
import localFont from "next/font/local";
// Import critical CSS inline for faster initial render
import "../critical.css";
// Main CSS will be loaded but not block render
import "@/styles/globals.css";

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
  display: "swap", // Use font-display: swap for better performance
  preload: true, // Preload the font
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
          <GoogleTagManager
            gtmId={process.env.NEXT_GOOGLE_TAG_MANAGER_ID || ""}
          />
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
          <CookieBanner />
        </CookieProvider>
      </body>
    </html>
  );
}
