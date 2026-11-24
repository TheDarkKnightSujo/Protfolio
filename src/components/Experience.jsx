import React from 'react';

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-8" id="experience">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">02 // EXPERIENCE</span>
        <h2 className="font-display text-xl font-bold text-slate-900">Where I've built</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Entry 1: Yotta */}
        <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-display text-lg font-bold text-slate-900">YOTTA</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-50 text-brand-800 border border-brand-200 font-medium">PLATFORM ENGINEERING INTERN</span>
              <span className="text-slate-500 font-mono text-xs">Mumbai, India</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Developed a comprehensive, enterprise full-stack Meeting Room Booking System engineered to manage high-volume corporate room reservations, recurring series meetings, real-time participant availability, automated minutes capture, and multi-location asset governance.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">React.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Axios</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Express.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Sequelize</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">MySQL</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">JWT</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-between gap-4">
            <span className="font-mono text-xs text-slate-500 whitespace-nowrap">June 2025 – July 2025</span>
            <a className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-mono transition-all" href="https://github.com/TheDarkKnightSujo/MeetingRoomBookingSystem" rel="noopener noreferrer" target="_blank">
              <span>View Project</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </div>
        </div>
        {/* Entry 2: SWDC KJSSE */}
        <div className="p-7 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-display text-lg font-bold text-slate-900">SWDC KJSSE</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-50 text-brand-800 border border-brand-200 font-medium">AI/ML, MERN &amp; QA ENGINEER</span>
              <span className="text-slate-500 font-mono text-xs">Online / Mumbai</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Engineering full-stack MERN workflows, evaluating AI/ML models, and conducting comprehensive software testing protocols for internal institutional software suites across student and administrative infrastructure.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">React</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Express</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">MongoDB</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Python</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Model QA</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-between gap-4">
            <span className="font-mono text-xs text-slate-500 whitespace-nowrap">October 2025 – June 2026</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>ONGOING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
