import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { languages } from "@/i18n/settings";
import "@/styles/globals.css";
import { PageProps } from "@/types/i18n";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuki Studio",
  description: "Le damos vida a tus ideas.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
} & PageProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={roboto.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
