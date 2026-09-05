import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import LegalFooter from "@/components/LegalFooter";

export const metadata: Metadata = {
  title: "Next CV Builder",
  description:
    "Simple CV builder without database, built with Next.js and Material UI.",
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
        <I18nProvider>
          {children}
          <LegalFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
