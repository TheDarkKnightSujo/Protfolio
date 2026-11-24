import React from 'react';

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-8" id="skills">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">04 // CAPABILITIES</span>
        <h2 className="font-display text-xl font-bold text-slate-900">What I work with</h2>
      </div>
      {/* Systems Layer Pipeline Diagram */}
      <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm overflow-x-auto">
        <div className="min-w-[640px] flex items-center justify-between gap-3">
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex-1">
            <span className="font-mono text-[10px] text-slate-500 block">LAYER 01</span>
            <span className="font-display text-sm font-semibold text-slate-800 mt-0.5 block">Frontend</span>
            <span className="font-mono text-[11px] text-brand-700 mt-1 block">React • TS • Tailwind</span>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex-1">
            <span className="font-mono text-[10px] text-slate-500 block">LAYER 02</span>
            <span className="font-display text-sm font-semibold text-slate-800 mt-0.5 block">Backend</span>
            <span className="font-mono text-[11px] text-brand-700 mt-1 block">FastAPI • Node • Express</span>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex-1">
            <span className="font-mono text-[10px] text-slate-500 block">LAYER 03</span>
            <span className="font-display text-sm font-semibold text-slate-800 mt-0.5 block">Data</span>
            <span className="font-mono text-[11px] text-brand-700 mt-1 block">PostgreSQL • PostGIS • Redis</span>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward</span>
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex-1">
            <span className="font-mono text-[10px] text-slate-500 block">LAYER 04</span>
            <span className="font-display text-sm font-semibold text-slate-800 mt-0.5 block">AI + APIs</span>
            <span className="font-mono text-[11px] text-brand-700 mt-1 block">Groq • Gemini • ORS</span>
          </div>
        </div>
      </div>
      {/* Categorized Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Programming */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">code</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">Programming</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Python</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">JavaScript</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">C++</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Java</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">C</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">HTML5 / CSS3</span>
          </div>
        </div>
        {/* Frontend */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">devices</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">React.js</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">TypeScript</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Tailwind CSS</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Axios</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Responsive UI</span>
          </div>
        </div>
        {/* Backend */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">dns</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">FastAPI</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Node.js</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Express.js</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">RESTful APIs</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Cron Jobs</span>
          </div>
        </div>
        {/* Databases */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">database</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">PostGIS</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">MySQL</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Redis</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Supabase</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Sequelize</span>
          </div>
        </div>
        {/* AI & APIs */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">smart_toy</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">AI / Machine Learning</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Groq API</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">LLaMA 3</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Gemini 1.5 Flash</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">OpenRouteService</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Open-Meteo</span>
          </div>
        </div>
        {/* Tools & Cloud */}
        <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-700 text-[18px]">build</span>
            <h3 className="font-display text-sm font-semibold text-slate-800">Tools &amp; Cloud</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Git / GitHub</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Firebase Auth</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Cloudinary</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">Postman</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">GitHub Actions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
