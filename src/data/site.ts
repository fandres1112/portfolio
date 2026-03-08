/**
 * Datos centralizados del sitio. Actualiza aquí enlaces y textos para mantener el portafolio al día.
 */

export const site = {
  name: "Fabian Jaramillo",
  role: "Desarrollador de Software",
  /** URL base del sitio en producción (para Open Graph, canonical, etc.) */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-fandres1112.vercel.app",
} as const;

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre_mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/fandres1112" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fabian-jaramillo-551638186/" },
  { label: "Email", href: "mailto:fandres1112@gmail.com" },
] as const;
