"use client";

import React from "react";
import { ParticipantScore } from "@/types/game";
import { ScoreRadarChart } from "./ScoreRadarChart";
import { Shield, Sparkles, AlertTriangle, Award } from "lucide-react";

interface SustainabilityScoreProps {
  score: ParticipantScore;
  showRadar?: boolean;
  compact?: boolean;
}

export const SustainabilityScore: React.FC<SustainabilityScoreProps> = ({
  score,
  showRadar = true,
  compact = false,
}) => {
  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#35D5FF]/15 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#35D5FF]/10">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#38E58B]" />
          <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
            Sustainability Assessment
          </h4>
        </div>
        <span className="text-xs font-mono font-bold text-[#38E58B] flex items-center gap-1">
          <Award className="w-3.5 h-3.5" />
          {score.rating}
        </span>
      </div>

      {/* Main Score Tally */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-[#091120] border border-white/5">
          <span className="text-[10px] font-mono uppercase text-[#98A8BD] block">
            Total Score
          </span>
          <span className="text-lg sm:text-xl font-mono font-black text-white">
            {score.total}
            <span className="text-[10px] text-[#98A8BD] font-normal">/1000</span>
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#0A201A] border border-[#38E58B]/30">
          <span className="text-[10px] font-mono uppercase text-[#38E58B] block flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-[#38E58B]" /> Sustainable
          </span>
          <span className="text-lg sm:text-xl font-mono font-black text-[#38E58B]">
            {score.sustainableCount}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#240F14] border border-[#FF5B65]/30">
          <span className="text-[10px] font-mono uppercase text-[#FF5B65] block flex items-center justify-center gap-1">
            <AlertTriangle className="w-3 h-3 text-[#FF5B65]" /> Trade-offs
          </span>
          <span className="text-lg sm:text-xl font-mono font-black text-[#FF5B65]">
            {score.unsustainableCount}
          </span>
        </div>
      </div>

      {/* Radar Chart Visualizer */}
      {showRadar && !compact && (
        <div className="pt-2">
          <ScoreRadarChart score={score} showRatingCard={false} />
        </div>
      )}
    </div>
  );
};
