import React from 'react';

export default function Stats() {
  return (
    <section className="w-full border-y border-slate-200/90 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div className="flex flex-col pt-3 md:pt-0 md:pl-0">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">CURRENT CGPA</span>
          <span className="font-display text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1">9.69</span>
          <span className="text-xs text-slate-500 mt-0.5">Top-tier academic track</span>
        </div>
        <div className="flex flex-col pt-3 md:pt-0 md:pl-6">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">DEGREE TIMELINE</span>
          <span className="font-display text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1">2024–2028</span>
          <span className="text-xs text-slate-500 mt-0.5">B.Tech Computer Engg (KJSSE)</span>
        </div>
        <div className="flex flex-col pt-3 md:pt-0 md:pl-6">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">PREVIOUS INTERN</span>
          <span className="font-display text-2xl lg:text-3xl font-bold text-brand-700 tracking-tight mt-1">YOTTA</span>
          <span className="text-xs text-slate-500 mt-0.5">Platform Eng (June–July '25)</span>
        </div>
        <div className="flex flex-col pt-3 md:pt-0 md:pl-6">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">ENGINEERING BASE</span>
          <span className="font-display text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1">Mumbai, IN</span>
          <span className="text-xs text-slate-500 mt-0.5">IST (UTC +5:30)</span>
        </div>
      </div>
    </section>
  );
}
