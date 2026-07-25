"use client";

import { useState } from "react";

export function SurveillanceWidget() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="border-t border-zinc-200 pt-6">
      <h4 className="text-[11px] font-black uppercase text-zinc-500 tracking-wider mb-3">
        Bloomberg Surveillance
      </h4>
      <div className="border border-zinc-200 p-4 bg-zinc-50 rounded-md">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-[8px] font-black text-center p-1 uppercase tracking-tighter leading-none flex-shrink-0">
            Surveillance
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-zinc-900 leading-snug">
              Bloomberg Surveillance TV
            </p>
            <span className="text-[10px] text-zinc-500">July 10th, 2026</span>
          </div>
        </div>
        {/* Player bar */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-full bg-black text-white hover:bg-zinc-800 flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <div className="flex-1 bg-zinc-250 h-1 rounded-full relative">
            <div className="bg-red-650 h-full w-[25%]" />
          </div>
          <span className="text-[10px] font-bold text-zinc-500">20:01</span>
        </div>
      </div>
    </div>
  );
}
