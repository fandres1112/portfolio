"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen((open) => (open ? false : open));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="font-mono text-base sm:text-lg font-semibold text-accent-cyan hover:text-accent-green transition-colors tracking-tight shrink-0"
        >
          <span className="hidden sm:inline">&gt; fabian.jaramillo</span>
          <span className="sm:hidden">&gt; FJ</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-sm text-slate-400 hover:text-accent-cyan transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-accent-cyan after:transition-all after:duration-200 hover:after:w-full py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button - mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center rounded-lg border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[52px] sm:top-[56px] bg-bg/98 backdrop-blur-lg border-t border-white/5 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block font-mono text-lg text-slate-300 hover:text-accent-cyan py-4 px-4 rounded-lg hover:bg-white/5 transition-colors min-h-[48px] flex items-center touch-manipulation"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
