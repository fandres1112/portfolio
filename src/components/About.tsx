"use client";

import { useRef, useEffect, useState } from "react";

export default function About() {
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
      id="sobre-mi"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-xs sm:text-sm font-medium text-accent-cyan mb-2">
          <span className="text-code-comment">{"// "}</span>sobre_mí
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10">
          Más que código
        </p>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-xl border border-white/10 bg-bg-card/50 p-5 sm:p-6 md:p-8 hover:border-accent-cyan/30 transition-colors duration-300">
            <p className="text-slate-400 leading-relaxed mb-4">
              Soy desarrollador de software con experiencia en el diseño e
              implementación de aplicaciones web. Me apasiona escribir{" "}
              <span className="text-accent-green font-mono">código limpio</span>
              , escalable y mantenible.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Disfruto aprender nuevas tecnologías y enfrentar desafíos que me
              permitan crecer profesionalmente.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-bg-card/50 p-5 sm:p-6 md:p-8 hover:border-accent-cyan/30 transition-colors duration-300">
            <p className="font-mono text-sm text-code-comment mb-4">
              {"// Lo que me mueve"}
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-accent-green">→</span> Resolver problemas
                reales con software
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-cyan">→</span> Buenas prácticas y
                arquitectura clara
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-purple">→</span> Aprendizaje
                continuo y compartir conocimiento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
