"use client";

import React, { useState } from "react";
import { LearningHotspot } from "@/types/game";
import { Info, X, Sparkles } from "lucide-react";

interface LearningHotspotsProps {
  hotspots: LearningHotspot[];
  heroImage: string;
}

export function LearningHotspots({ hotspots, heroImage }: LearningHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<LearningHotspot | null>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#35D5FF]/20 bg-[#070B16] shadow-2xl group">
      {/* 16:9 Hero Illustration */}
      <div className="relative aspect-[16/9] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="Mission Scenario Illustration"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        />
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Hotspot Markers */}
        {hotspots.map((hs) => (
          <div
            key={hs.id}
            style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <button
              type="button"
              onClick={() => setActiveHotspot(hs)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#35D5FF]/20 border border-[#35D5FF] text-[#35D5FF] hover:scale-125 transition-all shadow-lg shadow-[#35D5FF]/30 group/btn"
              title={hs.label}
            >
              {/* Pulsating ring */}
              <span className="absolute -inset-1 rounded-full bg-[#35D5FF]/30 animate-ping pointer-events-none" />
              <Info className="w-4 h-4 fill-current group-hover/btn:text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Helper Bar */}
      <div className="px-4 py-2 border-t border-[#35D5FF]/10 bg-[#0B1424]/90 flex items-center justify-between text-xs font-mono text-[#98A8BD]">
        <span className="flex items-center gap-1.5 text-[#35D5FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Scene: Click glowing hotspots to inspect sensors &amp; infrastructure</span>
        </span>
        <span className="hidden sm:inline">16:9 Cinematic Telemetry</span>
      </div>

      {/* Hotspot Popover Modal */}
      {activeHotspot && (
        <div className="absolute inset-x-4 bottom-12 z-30 sm:max-w-md sm:left-6">
          <div className="p-4 rounded-xl bg-[#091322]/95 border-2 border-[#35D5FF] shadow-2xl backdrop-blur-md space-y-2 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#35D5FF]/20 text-[#35D5FF] font-bold uppercase tracking-wider">
                {activeHotspot.tag}
              </span>
              <button
                type="button"
                onClick={() => setActiveHotspot(null)}
                className="text-xs text-[#98A8BD] hover:text-white"
              >
                ✕ Close
              </button>
            </div>
            <h4 className="font-bold text-white text-sm">
              {activeHotspot.label}
            </h4>
            <p className="text-xs text-[#98A8BD] leading-relaxed">
              {activeHotspot.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
