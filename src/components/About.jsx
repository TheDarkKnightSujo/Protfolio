import React from 'react';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 flex flex-col gap-10" id="about">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">01 // ABOUT</span>
        <h2 className="font-display text-xl font-bold text-slate-900">A little about me</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Quote card */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-xl bg-white border border-slate-200/90 shadow-sm">
            <span className="material-symbols-outlined text-brand-700 text-2xl mb-4">architecture</span>
            <blockquote className="font-display text-xl lg:text-2xl font-semibold text-slate-900 leading-snug">
              “I like understanding the entire system — not just one layer of it.”
            </blockquote>
            <p className="font-sans text-sm text-slate-600 mt-4 leading-relaxed">
              From spatial indexing queries at the datastore layer to rendering zero-jank interfaces on clients, my sweet spot is bridging raw logic and real utility.
            </p>
          </div>
        </div>
        {/* Narrative & Sequence */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-sm lg:text-[15px] text-slate-600 leading-relaxed">
          <p>
            I am a Computer Engineering student who looks at software through an architectural lens. Rather than treating code as disconnected scripts, I focus on the cohesion between frontend components, high-throughput microservices, distributed persistence layers, and specialized machine learning pipelines.
          </p>
          <p>
            My work spans full-stack web and mobile development, asynchronous REST/cron systems, database schema architecture (PostgreSQL, PostGIS, MySQL), and deploying purpose-tuned LLMs for cognitive verification tasks. Whether optimizing multi-room allocation logic during my internship at Yotta or calculating dynamic battery degradation curves for EV routes, I focus on building reliable software with mathematical grounding.
          </p>
          {/* Engineering Sequence Grid */}
          <div className="mt-2 p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
            <div className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-3">SYSTEM DESIGN PHILOSOPHY</div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="font-mono text-xs font-semibold text-brand-800">01 // IDEA</span>
                <span className="text-[11px] text-slate-600 leading-normal">Problem decomposition &amp; mathematical bounds</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="font-mono text-xs font-semibold text-brand-800">02 // ARCH</span>
                <span className="text-[11px] text-slate-600 leading-normal">Data flow topology &amp; caching constraints</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="font-mono text-xs font-semibold text-brand-800">03 // CODE</span>
                <span className="text-[11px] text-slate-600 leading-normal">Clean typed logic, indexing &amp; test harness</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="font-mono text-xs font-semibold text-brand-800">04 // SYSTEM</span>
                <span className="text-[11px] text-slate-600 leading-normal">Reliable live execution &amp; telemetry monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
