import React from 'react';

export default function Profiles() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">06 // NETWORK</span>
        <h2 className="font-display text-xl font-bold text-slate-900">Find me online</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* GitHub Card */}
        <a className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-400 hover:shadow-md transition-all flex flex-col justify-between gap-6 group" href="https://github.com/TheDarkKnightSujo" rel="noopener noreferrer" target="_blank">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-700 transition-colors text-lg">north_east</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-400 uppercase font-medium">CODE REPOSITORY</span>
            <h3 className="font-display text-lg font-bold text-slate-900">GitHub</h3>
            <p className="font-mono text-xs text-slate-500 mt-0.5">@TheDarkKnightSujo</p>
          </div>
        </a>
        {/* LinkedIn Card */}
        <a className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-400 hover:shadow-md transition-all flex flex-col justify-between gap-6 group" href="https://linkedin.com/in/suhaas-nandulamattam-b51838332/" rel="noopener noreferrer" target="_blank">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-700 transition-colors text-lg">north_east</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-400 uppercase font-medium">PROFESSIONAL PROFILE</span>
            <h3 className="font-display text-lg font-bold text-slate-900">LinkedIn</h3>
            <p className="font-mono text-xs text-slate-500 mt-0.5">in/suhaas-nandulamattam</p>
          </div>
        </a>
        {/* CodeChef Card */}
        <a className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-400 hover:shadow-md transition-all flex flex-col justify-between gap-6 group" href="https://codechef.com/users/suhaasn61000" rel="noopener noreferrer" target="_blank">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors">
              <span className="material-symbols-outlined text-xl">data_object</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-700 transition-colors text-lg">north_east</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-400 uppercase font-medium">ALGORITHMIC PRACTICE</span>
            <h3 className="font-display text-lg font-bold text-slate-900">CodeChef</h3>
            <p className="font-mono text-xs text-slate-500 mt-0.5">@suhaasn61000</p>
          </div>
        </a>
      </div>
    </section>
  );
}
