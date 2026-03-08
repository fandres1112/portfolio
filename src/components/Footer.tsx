import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="font-mono text-sm text-slate-500">
          <span className="text-code-comment">{"// "}</span>© {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-sm text-slate-500">
          built with <span className="text-accent-cyan">Next.js</span> · deploy{" "}
          <span className="text-accent-green">Vercel</span>
        </p>
      </div>
    </footer>
  );
}
