import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Fabian Jaramillo | Desarrollador de Software",
  description:
    "Portafolio de Fabian Jaramillo - Desarrollador de Software. Proyectos, habilidades y contacto.",
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
        {children}
      </body>
    </html>
  );
}
