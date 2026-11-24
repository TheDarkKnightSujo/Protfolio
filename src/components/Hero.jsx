import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenPhotoModal }) {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Persona & Statement */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Neutral Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-mono text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
            <span>Currently building • learning • experimenting</span>
          </div>

          {/* Refined Discipline Tag */}
          <div className="font-mono text-[11px] tracking-widest text-brand-700 font-semibold uppercase">
            COMPUTER ENGINEERING • FULL-STACK • AI/ML
          </div>

          {/* Commanding Crisp Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.08]">
            Building intelligent systems for the real world.
          </h1>

          {/* Clean Supporting Bio */}
          <p className="font-sans text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            I'm <span className="text-slate-900 font-medium">Suhaas Nandulamattam</span>, a Computer Engineering student at K.J. Somaiya School of Engineering building full-stack applications, AI-powered systems, and practical software solutions.
          </p>

          {/* Minimal Profile Badge */}
          <div 
            onClick={onOpenPhotoModal}
            className="flex items-center gap-3 p-2 pr-4 rounded-lg bg-white border border-slate-200/90 shadow-sm cursor-pointer hover:border-brand-300 transition-colors"
            title="Click to view full photo"
          >
            <img
              alt="Suhaas Nandulamattam"
              className="w-9 h-9 rounded-md object-cover bg-slate-100 border border-slate-200"
              src={portfolioData.personal.avatarUrl}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-xs text-slate-800 font-medium">Suhaas Nandulamattam</span>
                <span className="material-symbols-outlined text-brand-700 text-[14px]">check_circle</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">Mumbai, IN • KJSSE '28</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="px-5 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 transition-all shadow-sm flex items-center gap-2"
              href="#projects"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all shadow-sm flex items-center gap-2"
              href={portfolioData.personal.resumeUrl}
              download="Suhaas_Nandulamattam_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume (PDF)"
            >
              <span className="material-symbols-outlined text-[16px] text-brand-700">download</span>
              <span>Resume</span>
            </a>
            <a
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all shadow-sm flex items-center gap-2"
              href="https://github.com/TheDarkKnightSujo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>GitHub</span>
              <span className="material-symbols-outlined text-[15px]">north_east</span>
            </a>
          </div>
        </div>

        {/* Right: Profile Portrait Hero Image */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] relative overflow-hidden group">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="ml-2 font-mono text-[10px] text-slate-500 font-medium tracking-wider">
                  PROFILE // SUHAAS_N.
                </span>
              </div>
              <span className="font-mono text-[10px] text-brand-700 font-semibold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            {/* Portrait Frame */}
            <div 
              onClick={onOpenPhotoModal}
              className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 cursor-pointer shadow-inner"
              title="Click to view full photo"
            >
              <img
                src={portfolioData.personal.avatarUrl}
                alt="Suhaas Nandulamattam"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"></div>

              {/* Floating glass metadata badge */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-lg backdrop-blur-md bg-white/90 border border-white/70 shadow-lg flex items-center justify-between transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans text-xs font-semibold text-slate-900">
                      Suhaas Nandulamattam
                    </span>
                    <span className="material-symbols-outlined text-brand-700 text-[14px]">check_circle</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    Computer Engineering • KJSSE '28
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-50 border border-brand-200 font-mono text-[10px] text-brand-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  <span>Mumbai, IN</span>
                </div>
              </div>
            </div>

            {/* Telemetry Footer Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-slate-200 font-mono text-[10px]">
              <div>
                <span className="text-slate-400 block">BASE</span>
                <span className="text-slate-800 font-semibold">Mumbai, IN</span>
              </div>
              <div>
                <span className="text-slate-400 block">PROGRAM</span>
                <span className="text-slate-800 font-semibold">B.Tech CE</span>
              </div>
              <div>
                <span className="text-slate-400 block">COORDINATES</span>
                <span className="text-slate-800 font-semibold">19.0760° N</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
