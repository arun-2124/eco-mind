"use client";

import React, { useState } from "react";
import { CharacterDialogue } from "@/types/game";
import { sound } from "@/lib/audio";
import { Radio, ChevronRight, ChevronLeft, Volume2, MessageSquare } from "lucide-react";

interface DialogueBoxProps {
  dialogues: CharacterDialogue[];
  environmentName?: string;
  className?: string;
}

const MOOD_STYLES: Record<string, { border: string; bg: string; text: string; label: string }> = {
  urgent: { border: "border-red-500/60", bg: "bg-red-950/30", text: "text-red-400", label: "URGENT" },
  concerned: { border: "border-amber-500/60", bg: "bg-amber-950/30", text: "text-amber-400", label: "CONCERNED" },
  determined: { border: "border-cyan-400/60", bg: "bg-cyan-950/30", text: "text-cyan-400", label: "RESOLUTE" },
  grave: { border: "border-purple-500/60", bg: "bg-purple-950/30", text: "text-purple-400", label: "GRAVE" },
  hopeful: { border: "border-emerald-400/60", bg: "bg-emerald-950/30", text: "text-emerald-400", label: "HOPEFUL" },
  conflicted: { border: "border-orange-400/60", bg: "bg-orange-950/30", text: "text-orange-400", label: "CONFLICTED" },
};

export function DialogueBox({ dialogues, environmentName, className = "" }: DialogueBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!dialogues || dialogues.length === 0) return null;

  const current = dialogues[currentIndex] || dialogues[0];
  const mood = MOOD_STYLES[current.mood || "determined"] || MOOD_STYLES.determined;

  const handleNext = () => {
    if (currentIndex < dialogues.length - 1) {
      sound.playClick();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      sound.playClick();
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className={`glass-panel rounded-2xl border-2 ${mood.border} ${mood.bg} p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Background Transmission Grid */}
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <Radio className="w-4 h-4 text-cyan-400" />
          <span className="text-white/80 font-bold uppercase tracking-wider">
            COMM-LINK // {environmentName || "NOVA SECTOR 7"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${mood.border} ${mood.text}`}>
            [{mood.label}]
          </span>
          <span className="text-white/50 text-[11px]">
            Transmission {currentIndex + 1}/{dialogues.length}
          </span>
        </div>
      </div>

      {/* Dialogue Content */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Character Avatar */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.avatar}
              alt={current.speaker}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 inset-x-0 text-center">
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/90 border border-white/20 text-cyan-300 font-bold uppercase">
              ACTOR
            </span>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 space-y-2">
          <div className="flex items-baseline gap-2">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-white tracking-wide">
              {current.speaker}
            </h4>
            <span className="text-xs font-mono text-cyan-400/80">
              — {current.role}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-sm sm:text-base font-sans text-white/95 leading-relaxed italic shadow-inner">
            &ldquo;{current.text}&rdquo;
          </div>
        </div>
      </div>

      {/* Navigation Controls if multiple dialogue turns */}
      {dialogues.length > 1 && (
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white/80 transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PREV</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {dialogues.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-5 bg-cyan-400" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === dialogues.length - 1}
            className="px-3 py-1.5 rounded-lg border border-cyan-400/40 bg-cyan-950/40 hover:bg-cyan-900/40 disabled:opacity-30 disabled:pointer-events-none text-cyan-300 font-bold transition-colors flex items-center gap-1"
          >
            <span>NEXT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
