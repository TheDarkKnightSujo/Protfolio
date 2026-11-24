import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div className="backdrop-blur-xl bg-white/85 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-full px-5 py-2.5 flex items-center justify-between transition-all">
        {/* Left Logo */}
        <a className="flex items-center gap-2 group text-decoration-none" href="#">
          <span className="w-2 h-2 rounded-full bg-brand-700 group-hover:scale-125 transition-all"></span>
          <span className="font-mono text-xs tracking-wider text-slate-900 font-semibold uppercase group-hover:text-brand-700 transition-colors">
            Suhaas N.
          </span>
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline tracking-tight ml-1 px-1.5 py-0.5 rounded border border-slate-200 bg-slate-100/80">
            CE // '28
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-[12px] tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 rounded-full transition-colors ${
                  isActive
                    ? 'text-brand-900 bg-brand-50 border border-brand-100 font-medium'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Social & Action Icons */}
        <div className="flex items-center gap-2">
          <a
            className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
            href={portfolioData.personal.resumeUrl}
            download="Suhaas_Nandulamattam_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume (PDF)"
          >
            <span className="material-symbols-outlined text-[15px]">description</span>
          </a>
          <a
            className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
            href="https://github.com/TheDarkKnightSujo"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <span className="material-symbols-outlined text-[15px]">code</span>
          </a>
          <a
            className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
            href="https://linkedin.com/in/suhaas-nandulamattam-b51838332/"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined text-[15px]">share</span>
          </a>
          <a
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 px-3 py-1 rounded-full transition-colors"
            href="#contact"
          >
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}
