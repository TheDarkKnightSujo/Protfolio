import React, { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [showOptions, setShowOptions] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState('');
  const dropdownRef = useRef(null);

  const personalEmail = "suhaasn2006@gmail.com";
  const institutionalEmail = "suhaas.n@somaiya.edu";

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(''), 3000);
  };

  const handleEmailMeClick = (e) => {
    e.preventDefault();
    // Copy email to clipboard immediately
    handleCopy(personalEmail);
    // Toggle options dropdown
    setShowOptions(!showOptions);
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalEmail)}&su=${encodeURIComponent("Connecting with Suhaas")}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setShowOptions(false);
  };

  const handleOpenDefaultMail = () => {
    window.location.href = `mailto:${personalEmail}?subject=${encodeURIComponent("Connecting with Suhaas")}`;
    setShowOptions(false);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-12 flex flex-col gap-8" id="contact">
      {/* Toast Notification */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs font-mono animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Copied <strong>{copiedEmail}</strong> to clipboard!</span>
        </div>
      )}

      <div className="p-8 lg:p-12 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] relative overflow-visible flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-brand-800 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded font-medium">07 // GET IN TOUCH</span>
        </div>
        <div className="flex flex-col gap-2 max-w-xl">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-900">
            Let's build something interesting.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Have an interesting problem, project, or idea? I'd love to hear about it. Whether it involves backend architecture, spatial engineering, or AI pipelines, my inbox is always open.
          </p>
        </div>

        {/* Action Contact Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 relative">
          
          {/* Smart Email Me Button & Popover */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleEmailMeClick}
              className="px-5 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
              title="Click for email options (auto-copies address)"
            >
              <span className="material-symbols-outlined text-[17px]">mail</span>
              <span>Email Me</span>
              <span className="material-symbols-outlined text-[15px] opacity-75 group-hover:translate-y-0.5 transition-transform">
                {showOptions ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {/* Dropdown Options */}
            {showOptions && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5 z-50 flex flex-col gap-1 text-xs font-mono animate-fadeIn">
                <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    EMAIL OPTIONS
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Copied to clipboard
                  </span>
                </div>

                {/* 1. Open in Gmail */}
                <button
                  onClick={handleOpenGmail}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-brand-50 hover:text-brand-900 transition-colors flex items-center justify-between text-slate-700 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-rose-500 text-[18px]">outgoing_mail</span>
                    <div>
                      <div className="font-semibold text-slate-900">Open in Gmail</div>
                      <div className="text-[10px] text-slate-500">Compose directly in browser</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm">open_in_new</span>
                </button>

                {/* 2. Open Default Mail App */}
                <button
                  onClick={handleOpenDefaultMail}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between text-slate-700 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-brand-700 text-[18px]">desktop_windows</span>
                    <div>
                      <div className="font-semibold text-slate-900">Default Mail App</div>
                      <div className="text-[10px] text-slate-500">Outlook, Apple Mail, etc.</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm">arrow_outward</span>
                </button>

                {/* 3. Copy Address */}
                <button
                  onClick={() => handleCopy(personalEmail)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between text-slate-700 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-slate-600 text-[18px]">content_copy</span>
                    <div>
                      <div className="font-semibold text-slate-900">Copy Address</div>
                      <div className="text-[10px] text-slate-500">{personalEmail}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 text-sm">
                    {copiedEmail === personalEmail ? 'check' : 'copy_all'}
                  </span>
                </button>
              </div>
            )}
          </div>

          <a className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all shadow-sm flex items-center gap-2" href="https://github.com/TheDarkKnightSujo" rel="noopener noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>GitHub</span>
          </a>
          <a className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-all shadow-sm flex items-center gap-2" href="https://linkedin.com/in/suhaas-nandulamattam-b51838332/" rel="noopener noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[16px]">share</span>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Footnote metadata with clickable email copies */}
        <div className="pt-5 mt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span 
              onClick={() => handleCopy(institutionalEmail)} 
              className="cursor-pointer hover:text-brand-700 transition-colors flex items-center gap-1"
              title="Click to copy institutional email"
            >
              <span>Institutional:</span>
              <span className="text-slate-800 font-medium underline decoration-dotted">{institutionalEmail}</span>
            </span>
            <span className="text-slate-300">•</span>
            <span 
              onClick={() => handleCopy(personalEmail)} 
              className="cursor-pointer hover:text-brand-700 transition-colors flex items-center gap-1"
              title="Click to copy personal email"
            >
              <span>Personal:</span>
              <span className="text-slate-800 font-medium underline decoration-dotted">{personalEmail}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-slate-600 font-medium">RESPONSE_TIME &lt; 24H</span>
          </div>
        </div>
      </div>
    </section>
  );
}
