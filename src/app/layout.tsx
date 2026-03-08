import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `${site.name} | ${site.role}`;
const description =
  "Portafolio de Fabian Jaramillo - Desarrollador de Software. Proyectos, habilidades y contacto.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "es",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrains.variable} font-sans antialiased min-h-screen bg-bg text-slate-200 overflow-x-hidden`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-bg focus:rounded-lg focus:font-mono focus:text-sm"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
