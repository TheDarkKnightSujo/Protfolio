import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function PhotoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close photo"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="w-full bg-slate-100 flex items-center justify-center">
          <img
            src={portfolioData.personal.avatarUrl}
            alt="Suhaas Nandulamattam"
            className="w-full h-auto max-h-[75vh] object-cover"
          />
        </div>

        <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
          <div>
            <h3 className="font-display text-base font-bold text-slate-900">
              Suhaas Nandulamattam
            </h3>
            <p className="font-mono text-xs text-slate-500">
              Computer Engineering • KJSSE '28 • Mumbai, India
            </p>
          </div>
          <a
            href={portfolioData.personal.avatarUrl}
            download="Suhaas_Nandulamattam.jpg"
            className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-mono transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">download</span>
            <span>Save</span>
          </a>
        </div>
      </div>
    </div>
  );
}
