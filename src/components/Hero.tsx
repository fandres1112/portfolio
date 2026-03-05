"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const TERMINAL_LINES = [
  { prompt: "$ whoami", content: "Fabian Jaramillo — Developer", typeContent: true },
  { prompt: "$ cat skills.txt", content: "React · Next.js · TypeScript · Node.js ...", typeContent: true },
];

const TYPING_SPEED = 60;
const PAUSE_AFTER_LINE = 1200;
const INITIAL_DELAY = 1500;

const RIPPLE_THROTTLE_MS = 420;
const RIPPLE_MAX = 6;
const RIPPLE_DURATION_MS = 1600;

type Ripple = { id: number; x: number; y: number };

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "typing" | "pause">("prompt");
  const [started, setStarted] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [prefersHover, setPrefersHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastRippleRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    setPrefersHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !prefersHover) return;
    const now = Date.now();
    if (now - lastRippleRef.current < RIPPLE_THROTTLE_MS) return;
    lastRippleRef.current = now;
    const rect = sectionRef.current.getBoundingClientRect();
    const id = ++idRef.current;
    const ripple: Ripple = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples((prev) => {
      const next = [...prev, ripple];
      return next.length > RIPPLE_MAX ? next.slice(-RIPPLE_MAX) : next;
    });
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, RIPPLE_DURATION_MS);
  };

  const currentLine = TERMINAL_LINES[lineIndex];
  const displayedContent = currentLine
    ? currentLine.content.slice(0, charIndex)
    : "";

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), INITIAL_DELAY);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started || !currentLine) return;

    if (phase === "prompt") {
      const t = setTimeout(() => setPhase("typing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (charIndex < currentLine.content.length) {
        const t = setTimeout(
          () => setCharIndex((c) => c + 1),
          TYPING_SPEED + Math.random() * 30
        );
        return () => clearTimeout(t);
      }
      setPhase("pause");
      return;
    }

    if (phase === "pause") {
      const isLastLine = lineIndex >= TERMINAL_LINES.length - 1;
      const next = setTimeout(
        () => {
          if (isLastLine) {
            setLineIndex(0);
            setCharIndex(0);
            setPhase("prompt");
          } else {
            setLineIndex((i) => i + 1);
            setCharIndex(0);
            setPhase("prompt");
          }
        },
        isLastLine ? PAUSE_AFTER_LINE * 2 : PAUSE_AFTER_LINE
      );
      return () => clearTimeout(next);
    }
  }, [started, phase, lineIndex, charIndex, currentLine]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12 overflow-x-hidden bg-code-grid bg-hero-gradient"
      onMouseMove={handleMouseMove}
    >
      {/* Ondas que se expanden desde el cursor — solo en dispositivos con hover */}
      {prefersHover &&
        ripples.map((r) => (
          <div
            key={r.id}
            className="absolute rounded-full border animate-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: 100,
              height: 100,
              borderColor: "rgba(34, 211, 238, 0.45)",
            }}
            aria-hidden
          />
        ))}

      {/* Orbes: más pequeños y suaves en móvil para rendimiento */}
      <div
        className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] rounded-full opacity-20 sm:opacity-25 md:opacity-30 pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "float-orb 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-15 sm:opacity-20 pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74, 222, 128, 0.35) 0%, transparent 60%)",
          top: "60%",
          right: "10%",
          animation: "float-orb-right 22s ease-in-out infinite",
          animationDelay: "-5s",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <p className="font-mono text-accent-cyan mb-3 sm:mb-4 text-xs sm:text-sm md:text-base animate-fade-in-up">
          <span className="text-code-comment">{"// "}</span>
          <span className="text-slate-400">desarrollador_software</span>
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="bg-gradient-to-r from-accent-cyan via-accent-green to-accent-cyan bg-clip-text text-transparent animate-gradient-text">
            Fabian
          </span>
          <br />
          <span className="text-white">Jaramillo</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-10 px-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Construyo aplicaciones web que{" "}
          <span className="text-accent-green">funcionan</span> y experiencias que{" "}
          <span className="text-accent-cyan">impactan</span>.
        </p>

        {/* Terminal: padding y texto responsive */}
        <div
          className="font-mono text-left rounded-xl border border-white/10 bg-bg-card/80 backdrop-blur p-4 sm:p-5 md:p-6 max-w-xl mx-auto mb-8 sm:mb-12 animate-fade-in-up overflow-x-auto"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex gap-2 mb-3 sm:mb-4 min-w-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shrink-0" />
          </div>

          {TERMINAL_LINES.map((line, i) => (
            <div key={i} className={i > 0 ? "mt-3 sm:mt-4" : ""}>
              <p className="text-slate-500 text-xs sm:text-sm truncate">
                <span className="text-accent-green">{line.prompt.split(" ")[0]}</span>{" "}
                {line.prompt.split(" ").slice(1).join(" ")}
              </p>
              {lineIndex > i ? (
                <p className="text-white mt-0.5 sm:mt-1 text-xs sm:text-sm break-words">
                  {line.content}
                </p>
              ) : lineIndex === i ? (
                <p className="text-slate-400 mt-0.5 sm:mt-1 text-xs sm:text-sm break-words min-h-[1.25em]">
                  {displayedContent}
                  <span className="inline-block w-2 h-3.5 sm:h-4 ml-0.5 bg-accent-cyan animate-cursor-blink align-middle shrink-0" />
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="#proyectos"
            className="inline-flex items-center justify-center font-mono text-sm font-medium rounded-lg bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan hover:text-bg transition-all duration-200 min-h-[48px] px-6 py-3.5 touch-manipulation active:scale-[0.98]"
          >
            Ver proyectos
          </Link>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center font-mono text-sm font-medium rounded-lg border border-white/20 text-slate-300 hover:border-accent-green/50 hover:text-accent-green transition-all duration-200 min-h-[48px] px-6 py-3.5 touch-manipulation active:scale-[0.98]"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
