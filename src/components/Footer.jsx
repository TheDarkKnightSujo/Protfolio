import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/90 bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span className="text-slate-800 font-semibold font-sans">Suhaas Nandulamattam</span>
          <span>•</span>
          <span>Computer Engineering</span>
          <span>·</span>
          <span>Mumbai, India</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-700 transition-colors" href="https://github.com/TheDarkKnightSujo" rel="noopener noreferrer" target="_blank">GitHub</a>
          <span className="text-slate-300">/</span>
          <a className="hover:text-brand-700 transition-colors" href="https://linkedin.com/in/suhaas-nandulamattam-b51838332/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <span className="text-slate-300">/</span>
          <a className="hover:text-brand-700 transition-colors" href="mailto:suhaasn2006@gmail.com">Email</a>
        </div>
        <div className="text-slate-400 text-[11px]">
          © 2026 SUHAAS NANDULAMATTAM
        </div>
      </div>
    </footer>
  );
}
