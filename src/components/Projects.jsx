import React from 'react';

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-8" id="projects">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">03 // FEATURED WORK</span>
          <h2 className="font-display text-xl font-bold text-slate-900">Things I've built</h2>
        </div>
        <p className="text-sm text-slate-600 max-w-xl">
          A selection of projects where I explored real-world engineering problems, full-stack systems, AI verification, and spatial data infrastructure.
        </p>
      </div>

      {/* FLAGSHIP PROJECT: EVrify */}
      <div className="rounded-xl bg-white border border-slate-200/90 p-7 lg:p-10 shadow-[0_10px_35px_rgba(15,23,42,0.06)] flex flex-col gap-8">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand-700 text-white font-mono text-[11px] font-semibold tracking-wider uppercase">FLAGSHIP</span>
            <span className="font-mono text-[11px] text-slate-500 font-medium">BUILD_STABLE // 2025</span>
          </div>
          <a className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 text-xs font-mono transition-all flex items-center gap-1.5" href="https://github.com/TheDarkKnightSujo" rel="noopener noreferrer" target="_blank">
            <span>GitHub Repository</span>
            <span className="material-symbols-outlined text-[15px]">north_east</span>
          </a>
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900">EVrify</h3>
          <p className="text-sm font-mono text-brand-700 font-medium">
            Intelligent EV route planning &amp; station reliability
          </p>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mt-2">
            An end-to-end intelligent electric vehicle route planning and station reliability web application designed to solve charger unreliability, queue latency, and degraded charging performance for long-distance EV travel across India.
          </p>
        </div>
        {/* Restrained Light Telemetry Visual */}
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-5">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 font-mono text-[11px]">
            <span className="text-slate-600 font-medium">CORRIDOR: NH48 (MUMBAI → PUNE → GOA)</span>
            <span className="text-brand-800 font-semibold">STATE: VERIFIED_RELIABLE</span>
          </div>
          <div className="w-full">
            <svg className="w-full h-auto text-slate-700" fill="none" viewBox="0 0 900 160" xmlns="http://www.w3.org/2000/svg">
              {/* Route path in subtle slate */}
              <path d="M 60 80 Q 230 40 450 80 T 840 80" stroke="#94a3b8" strokeLinecap="round" strokeWidth="2"></path>
              <path d="M 60 80 Q 230 40 450 80 T 840 80" stroke="#355f84" strokeDasharray="4 4" strokeWidth="1.2"></path>
              {/* Node 1: Origin */}
              <circle cx="60" cy="80" fill="#ffffff" r="7" stroke="#355f84" strokeWidth="2"></circle>
              <text fill="#0f172a" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="600" textAnchor="middle" x="60" y="112">Origin [BOM]</text>
              <text fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="8" textAnchor="middle" x="60" y="125">SOC: 95%</text>
              {/* Node 2: Sensor & Degrade Check */}
              <circle cx="260" cy="62" fill="#ffffff" r="5" stroke="#64748b" strokeWidth="2"></circle>
              <text fill="#334155" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="500" textAnchor="middle" x="260" y="32">Thermal / Weather Sensor</text>
              <text fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="8" textAnchor="middle" x="260" y="44">Amb: 36°C (Degrade: +4.2%)</text>
              {/* Node 3: Station Hub */}
              <rect fill="#ffffff" height="40" rx="3" stroke="#355f84" strokeWidth="1.8" width="60" x="420" y="60"></rect>
              <text fill="#0f172a" fontFamily="'Hanken Grotesk', sans-serif" fontSize="10" fontWeight="700" textAnchor="middle" x="450" y="78">Stn #42A</text>
              <text fill="#355f84" fontFamily="'JetBrains Mono', monospace" fontSize="7" fontWeight="600" textAnchor="middle" x="450" y="90">60kW CCS2</text>
              {/* Node 4: AI Reliability Score */}
              <circle cx="650" cy="88" fill="#ffffff" r="5" stroke="#64748b" strokeWidth="2"></circle>
              <text fill="#334155" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="500" textAnchor="middle" x="650" y="120">LLaMA 3 Sentiment</text>
              <text fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="8" textAnchor="middle" x="650" y="132">Score: 98.4% Uptime</text>
              {/* Node 5: Destination */}
              <circle cx="840" cy="80" fill="#ffffff" r="7" stroke="#355f84" strokeWidth="2"></circle>
              <text fill="#0f172a" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="600" textAnchor="middle" x="840" y="112">Dest [PUN/GOA]</text>
              <text fill="#64748b" fontFamily="'JetBrains Mono', monospace" fontSize="8" textAnchor="middle" x="840" y="125">RC-Owner Verified</text>
            </svg>
          </div>
        </div>
        {/* 5 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-700 text-[18px]">explore</span>
              <span className="font-display text-sm font-semibold text-slate-800">1. Spatial Routing</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrated OpenRouteService API with PostGIS spatial geometry queries in Neon PostgreSQL, cached through an Upstash Redis low-latency layer.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-700 text-[18px]">battery_charging_full</span>
              <span className="font-display text-sm font-semibold text-slate-800">2. Battery Intelligence</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dynamic battery degradation curves modeling battery thermal loss based on live weather data fetched from Open-Meteo.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-700 text-[18px]">psychology</span>
              <span className="font-display text-sm font-semibold text-slate-800">3. AI Reliability</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated multi-source scraper feeding community reviews into Groq API / LLaMA 3 scheduled via GitHub Actions Cron for sentiment scoring.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-700 text-[18px]">document_scanner</span>
              <span className="font-display text-sm font-semibold text-slate-800">4. AI RC Verification</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gemini 1.5 Flash Vision OCR parsing uploaded Indian Vehicle Registration Certificates to reliably assign verified EV owner badges.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-700 text-[18px]">forum</span>
              <span className="font-display text-sm font-semibold text-slate-800">5. Community &amp; Media Pipeline</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time corridor trip updates, station reviews, image uploads, and authenticated profiles powered by Firebase Auth, Cloudinary CDN, and FastAPI asynchronous handlers.
            </p>
          </div>
        </div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">React</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">TypeScript</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">FastAPI</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Python</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">PostgreSQL</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">PostGIS</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Redis</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Groq LLaMA 3</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-700">Gemini Vision</span>
        </div>
      </div>

      {/* Secondary Projects 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Secondary Project 1: CivilSetu */}
        <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 px-2 py-0.5 rounded bg-brand-50 border border-brand-200 font-medium">SIH PROJECT</span>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">location_city</span>
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">CivilSetu</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Crowdsourced Civic Issue Reporting and Resolution System enabling citizen engagement, geotagged complaints, and real-time municipal workflow response tracking.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Flask</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Supabase</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">REST API</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">React Native</span>
          </div>
        </div>
        {/* Secondary Project 2: Dynamic Tic-Tac-Toe */}
        <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 px-2 py-0.5 rounded bg-brand-50 border border-brand-200 font-medium">PERSONAL PROJECT</span>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">grid_4x4</span>
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">Dynamic Tic-Tac-Toe</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              A dynamic Tic-Tac-Toe web game built using React.js with customizable grid sizes and intelligent mathematical winner detection evaluating board invariants for arbitrary N-dimensions.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">React.js</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Algorithms</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Vite</span>
          </div>
        </div>
        {/* Secondary Project 3: Meeting Room Booking System */}
        <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-brand-800 px-2 py-0.5 rounded bg-brand-50 border border-brand-200 font-medium">YOTTA PROJECT</span>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">meeting_room</span>
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">Meeting Room System</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-stack meeting room management and reservation suite supporting JWT authentication, recurring schedules, multi-location resource allocation, and timeline calendars.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Express</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">MySQL</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600">Sequelize</span>
            </div>
            <a className="font-mono text-[11px] text-brand-700 hover:text-brand-900 font-medium flex items-center gap-1 mt-1" href="https://github.com/TheDarkKnightSujo/MeetingRoomBookingSystem" rel="noopener noreferrer" target="_blank">
              <span>View Repository</span>
              <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
