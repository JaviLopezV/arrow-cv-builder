import SiteLoader from "./site-loader";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import LegalFooter from "@/components/LegalFooter";

// Metadata for the application
export const metadata: Metadata = {
  title: "Next CV Builder",
  description:
    "Simple CV builder without database, built with Next.js and Material UI.",
  openGraph: {
    type: "website",
    title: "Next CV Builder",
    description: "Tu experiencia, bien presentada.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Next CV Builder: editor de currículums con exportación a PDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next CV Builder",
    description: "Tu experiencia, bien presentada.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <SiteLoader />
        <I18nProvider>
          {children}
          <LegalFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
