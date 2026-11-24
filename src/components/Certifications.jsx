import React from 'react';

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-8" id="certifications">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">05 // CERTIFICATIONS</span>
          <h2 className="font-display text-xl font-bold text-slate-900">Learning &amp; Credentials</h2>
        </div>
        <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-mono transition-all shadow-sm" href="https://drive.google.com/drive/folders/1oaRrNRR34jRPUfuTSmjNL8jIvwym4KWL?usp=sharing" rel="noopener noreferrer" target="_blank">
          <span>View all certificates</span>
          <span className="material-symbols-outlined text-[14px]">north_east</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cert 1 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">DEEPLEARNING.AI / COURSERA</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Supervised Machine Learning: Regression and Classification
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Machine Learning Foundations</span>
        </div>
        {/* Cert 2 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">IBM</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Developing Front-End Apps with React
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">React Architecture &amp; State</span>
        </div>
        {/* Cert 3 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">IBM</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Introduction to HTML, CSS, &amp; JavaScript
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Web Platform Standards</span>
        </div>
        {/* Cert 4 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">META</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Version Control
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Git Branches &amp; CI Workflows</span>
        </div>
        {/* Cert 5 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">META</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Programming in Python
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Pythonic Paradigms &amp; Data Structures</span>
        </div>
        {/* Cert 6 */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 font-medium">META</span>
              <span className="material-symbols-outlined text-brand-700 text-[15px]">verified</span>
            </div>
            <h4 className="font-display text-sm font-semibold text-slate-800">
              Introduction to Back-End Development
            </h4>
          </div>
          <span className="font-mono text-[11px] text-slate-500">HTTP, Routing &amp; DB Schemas</span>
        </div>
      </div>
    </section>
  );
}
