"use client";

import React from "react";
import { Chapter } from "@/types/game";
import { CHAPTERS, MISSIONS } from "@/lib/game-data";
import { CheckCircle2, ArrowRight, Award, Brain, Shield, Sparkles, X } from "lucide-react";

interface ChapterModalProps {
  chapterNumber: number; // 1 to 5
  isOpen: boolean;
  onClose: () => void;
  playerDecisions: Record<number, string>;
  playerScore: number;
}

export function ChapterModal({
  chapterNumber,
  isOpen,
  onClose,
  playerDecisions,
  playerScore,
}: ChapterModalProps) {
  if (!isOpen) return null;

  const chapter = CHAPTERS.find((c) => c.number === chapterNumber) || CHAPTERS[0];
  const nextChapter = CHAPTERS.find((c) => c.number === chapterNumber + 1);

  // Missions in this chapter
  const [startM, endM] = chapter.missionRange;
  const chapterMissions = MISSIONS.filter((m) => m.number >= startM && m.number <= endM);

  // Calculate chapter stats
  let sustainableChoices = 0;
  let totalAnswered = 0;

  chapterMissions.forEach((m) => {
    const choice = playerDecisions[m.number];
    if (choice) {
      totalAnswered++;
      const opt = m.options.find((o) => o.key === choice);
      if (opt?.isSustainable) sustainableChoices++;
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl glass-panel rounded-3xl border border-cyan-400/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden bg-[#070D1E]/95">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/60 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Chapter {chapter.number} Debrief Complete
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-wide">
            {chapter.title}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/70 font-mono mt-1">
            {chapter.theme}
          </p>
        </div>

        {/* Chapter Performance Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl border border-white/10 bg-[#0B1528] text-center">
            <div className="text-[10px] font-mono text-white/50 uppercase">Missions</div>
            <div className="text-lg font-mono font-bold text-white mt-0.5">
              {totalAnswered} / {chapterMissions.length}
            </div>
            <div className="text-[10px] font-mono text-cyan-400">Completed</div>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-center">
            <div className="text-[10px] font-mono text-emerald-400/70 uppercase">Eco Choices</div>
            <div className="text-lg font-mono font-bold text-emerald-400 mt-0.5">
              {sustainableChoices} / {chapterMissions.length}
            </div>
            <div className="text-[10px] font-mono text-emerald-300">
              {Math.round((sustainableChoices / Math.max(1, chapterMissions.length)) * 100)}% Eco
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 text-center">
            <div className="text-[10px] font-mono text-amber-400/70 uppercase">Score</div>
            <div className="text-lg font-mono font-bold text-amber-300 mt-0.5">
              {playerScore}
            </div>
            <div className="text-[10px] font-mono text-amber-400/80">PTS Accumulated</div>
          </div>
        </div>

        {/* Core AI Concepts Learned */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2.5">
            <Brain className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Curriculum Insights Mastered
            </h3>
          </div>
          <div className="space-y-2">
            {chapterMissions.map((m) => (
              <div
                key={m.number}
                className="p-2.5 rounded-lg border border-white/5 bg-[#091122] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-cyan-400 font-bold">M{String(m.number).padStart(2, "0")}</span>
                  <span className="font-medium text-white/90">{m.title}</span>
                </div>
                <span className="text-[11px] font-mono text-white/50">{m.aiConcept.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Next Step */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/60 font-mono text-center sm:text-left">
            {nextChapter ? (
              <span>Next: <strong className="text-white">Chapter {nextChapter.number} — {nextChapter.title}</strong></span>
            ) : (
              <span>Final Campaign Completion</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-mono font-bold text-xs tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>PROCEED MISSION FLOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
