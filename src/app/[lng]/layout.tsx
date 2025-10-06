import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { languages } from "@/i18n/settings";
import "@/styles/globals.css";
import { PageProps } from "@/types/i18n";
import { generateCanonicalMetadata } from "@/utils/canonical";
import { GoogleTagManager } from "@next/third-parties/google";
import { dir } from "i18next";
import type { Metadata } from "next";
import localFont from "next/font/local";

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
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
      <GoogleTagManager gtmId={process.env.NEXT_GOOGLE_TAG_MANAGER_ID || ""} />
      <body className={RethinkFont.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
