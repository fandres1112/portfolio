"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { contactLinks } from "@/data/site";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contacto"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-xs sm:text-sm font-medium text-accent-cyan mb-2">
          <span className="text-code-comment">{"// "}</span>contacto
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          ¿Hablamos?
        </p>
        <p className="text-slate-400 mb-8 sm:mb-12 text-base sm:text-lg px-1">
          Si tienes un proyecto en mente o quieres conectar, estaré encantado de
          leerte.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="group font-mono px-6 sm:px-8 py-4 rounded-xl border border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan hover:text-bg transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation active:scale-[0.98]"
            >
              {link.label}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
