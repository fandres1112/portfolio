"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const MAX_TECH_VISIBLE = 5;

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// type: "empresa" = trabajo en empresa (puedes ocultar demo/repo si son internos)
// type: "personal" = proyecto propio o side project
const projects = [
  {
    title: "Nexo Incentives",
    description:
      "Plataforma web para gestión de programas de incentivos, liquidaciones, catálogo de redención de premios y backoffice.",
    tech: ["PHP", "Slim 4", "Twig"],
    type: "empresa" as const,
    href: "",
    repo: "",
  },
  {
    title: "Gold Legacy",
    description:
      "E-commerce de joyería en oro (B2C) con panel de administración. Catálogo, carrito, pagos con Mercado Pago, auth y gestión de órdenes.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma",
      "JWT",
      "Tailwind CSS",
      "Nodemailer",
      "Mercado Pago",
    ],
    type: "personal" as const,
    href: "https://goldlegacy.vercel.app/",
    repo: "",
  },
  {
    title: "Portafolio personal",
    description:
      "Este mismo sitio. Portafolio con Next.js 15, TypeScript y Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    type: "personal" as const,
    href: "#",
    repo: "https://github.com/fandres1112/portfolio",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="proyectos"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs sm:text-sm font-medium text-accent-cyan mb-2">
          <span className="text-code-comment">{"// "}</span>proyectos
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
          Proyectos
        </p>
        <p className="text-slate-400 text-sm sm:text-base mb-10 sm:mb-14">
          Trabajo en empresa y proyectos personales
        </p>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative rounded-xl border border-white/10 bg-bg-card/50 p-5 sm:p-6 hover:border-accent-cyan/40 transition-all duration-500 glow-border ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-code-comment">
                  {"0" + (i + 1)}
                </span>
                <span
                  className={`font-mono text-xs px-2 py-0.5 rounded border shrink-0 ${
                    project.type === "empresa"
                      ? "text-accent-cyan/90 border-accent-cyan/30 bg-accent-cyan/10"
                      : "text-accent-green/90 border-accent-green/30 bg-accent-green/10"
                  }`}
                >
                  {project.type === "empresa" ? "Empresa" : "Personal"}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.slice(0, MAX_TECH_VISIBLE).map((t) => (
                  <span
                    key={t}
                    className="font-mono px-2.5 py-1 text-xs font-medium rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > MAX_TECH_VISIBLE && (
                  <span className="font-mono px-2.5 py-1 text-xs font-medium rounded bg-white/5 text-slate-500 border border-white/10">
                    +{project.tech.length - MAX_TECH_VISIBLE}
                  </span>
                )}
              </div>
              <div className="flex gap-6 font-mono text-sm">
                <span className="min-w-[7rem] min-h-[44px] flex items-center">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="text-accent-cyan hover:text-accent-green transition-colors flex items-center gap-1.5 touch-manipulation"
                      {...(project.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": `Ver demo de ${project.title} (abre en nueva pestaña)`,
                          }
                        : { "aria-label": `Ver demo de ${project.title}` })}
                    >
                      demo →
                      {project.href.startsWith("http") && (
                        <ExternalLinkIcon className="shrink-0 opacity-70" />
                      )}
                    </Link>
                  ) : (
                    <span className="text-slate-500">demo no pública</span>
                  )}
                </span>
                <span className="min-w-[7rem] min-h-[44px] flex items-center">
                  {project.repo ? (
                    <Link
                      href={project.repo}
                      className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 touch-manipulation"
                      {...(project.repo.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": `Ver código de ${project.title} (abre en nueva pestaña)`,
                          }
                        : { "aria-label": `Ver código de ${project.title}` })}
                    >
                      código
                      {project.repo.startsWith("http") && (
                        <ExternalLinkIcon className="shrink-0 opacity-70" />
                      )}
                    </Link>
                  ) : (
                    <span className="text-slate-500">código privado</span>
                  )}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
