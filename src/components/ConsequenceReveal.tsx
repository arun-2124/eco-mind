"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Radio,
  Activity,
  Zap,
  Droplets,
  ShieldAlert,
  Users,
  Compass,
} from "lucide-react";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";

interface ConsequenceRevealProps {
  option: DecisionOption;
  missionNumber: number;
  isLastMission: boolean;
  onAdvanceMission?: () => void;
  onViewResults?: () => void;
  onAwardBonusPoints?: (points: number) => void;
}

export const ConsequenceReveal: React.FC<ConsequenceRevealProps> = ({
  option,
  missionNumber,
  isLastMission,
  onAdvanceMission,
  onViewResults,
}) => {
  useEffect(() => {
    if (option.isSustainable) {
      sound.playSustainableSuccess();
    } else {
      sound.playUnsustainableAlert();
    }
  }, [option]);

  const reaction = option.characterReaction;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`p-6 sm:p-7 rounded-2xl border-2 backdrop-blur-xl shadow-2xl space-y-6 ${
        option.isSustainable
          ? "border-[#38E58B] bg-gradient-to-b from-[#0A241C]/95 to-[#061510]/95 text-white"
          : "border-[#FF5B65] bg-gradient-to-b from-[#240C12]/95 to-[#16060A]/95 text-white"
      }`}
    >
      {/* Consequence Badge Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          {option.isSustainable ? (
            <div className="flex items-center gap-2 text-[#38E58B] font-mono font-black text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="w-5 h-5 text-[#38E58B]" />
              <span>DECISION RECORDED // SUSTAINABLE PATH (+{option.pointsAwarded} PTS)</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#FF5B65] font-mono font-black text-xs sm:text-sm uppercase tracking-wider">
              <AlertTriangle className="w-5 h-5 text-[#FF5B65]" />
              <span>DECISION RECORDED // CRITICAL STRAIN (+{option.pointsAwarded} PTS)</span>
            </div>
          )}
        </div>

        <span className="text-xs font-mono font-bold text-white/90 px-3 py-1 rounded bg-black/40 border border-white/15">
          Directive {option.key} Executed
        </span>
      </div>

      {/* Narrative Consequence */}
      <div className="space-y-2">
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wide">
          {option.title}
        </h3>
        <p className="text-sm sm:text-base text-[#F4F7FC] leading-relaxed font-mono">
          {option.consequenceNarration}
        </p>
      </div>

      {/* Character Transmission Reaction (In-Universe Voice) */}
      {reaction && (
        <div className="p-4 rounded-xl bg-black/50 border border-white/15 space-y-2 relative overflow-hidden font-mono">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span className="uppercase tracking-wider">
              INCOMING COMM TRANSMISSION // {reaction.speaker}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 italic pl-3 border-l-2 border-cyan-400">
            &ldquo;{reaction.quote}&rdquo;
          </p>
        </div>
      )}

      {/* Environmental & Resource Telemetry Impact */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 font-mono">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" /> Sector Telemetry Impact
          </span>
          <span className="text-[11px] text-white/40">Mission {missionNumber} Result</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div>
              <span className="text-[9px] text-white/50 block">ENERGY</span>
              <span
                className={`font-bold ${
                  option.cityMetricDeltas.energyIndex <= 0 ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {option.cityMetricDeltas.energyIndex <= 0 ? "Stabilized" : "Strained (+Δ)"}
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div>
              <span className="text-[9px] text-white/50 block">WATER</span>
              <span
                className={`font-bold ${
                  option.cityMetricDeltas.waterIndex <= 0 ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {option.cityMetricDeltas.waterIndex <= 0 ? "Conserved" : "Heavy Draw"}
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <div>
              <span className="text-[9px] text-white/50 block">WELLBEING</span>
              <span
                className={`font-bold ${
                  option.cityMetricDeltas.citizenWellbeing >= 0 ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {option.cityMetricDeltas.citizenWellbeing >= 0 ? "+Protected" : "-Stressed"}
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[9px] text-white/50 block">RESILIENCE</span>
              <span
                className={`font-bold ${
                  option.cityMetricDeltas.resilienceIndex >= 0 ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {option.cityMetricDeltas.resilienceIndex >= 0 ? "+Reinforced" : "-Compromised"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Scene Teaser */}
      {option.nextSceneTeaser && (
        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-start gap-2.5">
          <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-white uppercase text-[10px] tracking-wider mb-0.5">
              Developing Sector Situation:
            </strong>
            <span>{option.nextSceneTeaser}</span>
          </div>
        </div>
      )}

      {/* Story Progression Action Button */}
      <div className="pt-2 flex justify-end">
        {isLastMission ? (
          <button
            onClick={() => {
              sound.playClick();
              if (onViewResults) onViewResults();
            }}
            className="px-6 py-3.5 rounded-xl bg-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-xl shadow-[#38E58B]/30 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>DISCOVER THE FATE OF NOVA CITY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          onAdvanceMission && (
            <button
              onClick={() => {
                sound.playClick();
                onAdvanceMission();
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>CONTINUE STORY → NEXT SCENE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )
        )}
      </div>
    </motion.div>
  );
};
