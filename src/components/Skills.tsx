"use client";

import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "JavaScript", color: "accent-orange" },
  { name: "TypeScript", color: "accent-cyan" },
  { name: "React", color: "accent-cyan" },
  { name: "Next.js", color: "text-white" },
  { name: "Node.js", color: "accent-green" },
  { name: "HTML/CSS", color: "accent-pink" },
  { name: "Tailwind", color: "accent-cyan" },
  { name: "PHP 8", color: "accent-purple" },
  { name: "Slim 4", color: "accent-purple" },
  { name: "PHP-DI", color: "accent-purple" },
  { name: "Twig", color: "accent-purple" },
  { name: "Excel", color: "accent-orange" },
  { name: "PDF", color: "accent-orange" },
  { name: "JWT", color: "accent-green" },
  { name: "CSRF", color: "accent-green" },
  { name: "Env", color: "accent-green" },
  { name: "Mailer", color: "accent-cyan" },
  { name: "Git", color: "accent-orange" },
  { name: "SQL", color: "accent-purple" },
  { name: "REST", color: "accent-green" },
];

const colorClasses: Record<string, string> = {
  "accent-cyan": "border-accent-cyan/40 text-accent-cyan bg-accent-cyan/5 hover:bg-accent-cyan/10",
  "accent-green": "border-accent-green/40 text-accent-green bg-accent-green/5 hover:bg-accent-green/10",
  "accent-orange": "border-accent-orange/40 text-accent-orange bg-accent-orange/5 hover:bg-accent-orange/10",
  "accent-purple": "border-accent-purple/40 text-accent-purple bg-accent-purple/5 hover:bg-accent-purple/10",
  "accent-pink": "border-accent-pink/40 text-accent-pink bg-accent-pink/5 hover:bg-accent-pink/10",
  "text-white": "border-white/30 text-white bg-white/5 hover:bg-white/10",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="habilidades"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/5 bg-bg-card/30"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs sm:text-sm font-medium text-accent-cyan mb-2">
          <span className="text-code-comment">{"// "}</span>stack
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-14">
          Tecnologías
        </p>
        <ul
          className={`flex flex-wrap gap-2 sm:gap-3 justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {skills.map((skill, i) => (
            <li
              key={skill.name}
              className={`font-mono px-4 sm:px-5 py-2.5 rounded-lg border transition-all duration-300 text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation ${colorClasses[skill.color]}`}
              style={{
                transitionDelay: visible ? `${i * 40}ms` : "0ms",
              }}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
