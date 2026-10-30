"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { SDGBadge } from "./SDGBadge";
import { LearningHotspots } from "./LearningHotspots";
import { Mission } from "@/types/game";

interface MissionSceneProps {
  mission: Mission;
}

export const MissionScene: React.FC<MissionSceneProps> = ({ mission }) => {
  return (
    <div className="space-y-4">
      {/* Category and SDG Badges Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-mono font-bold text-xs uppercase tracking-wider">
            MISSION 0{mission.number} SCENE
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

      {/* 16:9 Interactive Cinematic Scene Artwork with Discoverable Hotspots */}
      <LearningHotspots
        hotspots={mission.hotspots}
        heroImage={mission.heroImage}
      />

      {/* Story & Environmental Context Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-3">
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
          {mission.title}
        </h2>
        <div className="p-3.5 rounded-xl bg-[#091120] border border-[#35D5FF]/15 text-xs sm:text-sm text-[#98A8BD] leading-relaxed">
          <strong className="text-white block mb-1 font-mono uppercase text-[11px] text-[#F6B94A] flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F6B94A]" /> Environmental Context:
          </strong>
          {mission.environmentalContext}
        </div>
        <p className="text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
          {mission.storyProblem}
        </p>
      </div>
    </div>
  );
};
