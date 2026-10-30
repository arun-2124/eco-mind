"use client";

import React from "react";
import { AlertTriangle, MapPin, Radio, Compass } from "lucide-react";
import { SDGBadge } from "./SDGBadge";
import { LearningHotspots } from "./LearningHotspots";
import { DialogueBox } from "./DialogueBox";
import { Mission } from "@/types/game";

interface MissionSceneProps {
  mission: Mission;
}

export const MissionScene: React.FC<MissionSceneProps> = ({ mission }) => {
  const envName = mission.environmentName || `SECTOR ${String(mission.number).padStart(2, "0")} // NOVA CITY`;
  const storyNarrative = mission.storyScene || mission.environmentalContext;
  const currentSituation = mission.situation || mission.storyProblem;

  return (
    <div className="space-y-6">
      {/* Sector Location & Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {envName}
          </span>
          <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider">
            {mission.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {mission.sdgs.map((s) => (
            <SDGBadge key={s} sdg={s} size="sm" />
          ))}
        </div>
      </div>

      {/* 16:9 Cinematic Scene Artwork with Discoverable Environmental Intel */}
      <LearningHotspots
        hotspots={mission.hotspots}
        heroImage={mission.heroImage}
      />

      {/* Atmospheric Story Scene Briefing */}
      <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#35D5FF]/20 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span>SCENE TRANSMISSION // MISSION {String(mission.number).padStart(2, "0")}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-wide">
          {mission.title}
        </h2>

        {/* Story Scene Setting */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-mono">
          {storyNarrative}
        </p>

        {/* Character Dialogue Box */}
        {mission.dialogue && mission.dialogue.length > 0 && (
          <div className="pt-2">
            <DialogueBox dialogues={mission.dialogue} environmentName={envName} />
          </div>
        )}

        {/* The Immediate Crisis Situation */}
        <div className="p-4 rounded-xl bg-[#091120] border-l-4 border-amber-400 border-t border-r border-b border-white/5 space-y-1.5">
          <span className="font-mono uppercase text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            IMMEDIATE SURVIVOR SITUATION:
          </span>
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-mono">
            {currentSituation}
          </p>
        </div>
      </div>
    </div>
  );
};
