"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, AlertTriangle, Compass } from "lucide-react";
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

const SPEAKER_AVATARS: Record<string, { positive: string; negative: string }> = {
  Maya: {
    positive: "/assets/game/characters/maya-happy.svg",
    negative: "/assets/game/characters/maya-worried.svg",
  },
  Elias: {
    positive: "/assets/game/characters/elias-neutral.svg",
    negative: "/assets/game/characters/elias-sad.svg",
  },
  "Dr. Lena": {
    positive: "/assets/game/characters/lena-neutral.svg",
    negative: "/assets/game/characters/lena-worried.svg",
  },
  Noah: {
    positive: "/assets/game/characters/noah-happy.svg",
    negative: "/assets/game/characters/noah-sad.svg",
  },
  "Commander Adrian": {
    positive: "/assets/game/characters/adrian-neutral.svg",
    negative: "/assets/game/characters/adrian-angry.svg",
  },
  ORI: {
    positive: "/assets/game/characters/ori-happy.svg",
    negative: "/assets/game/characters/ori-sad.svg",
  },
};

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
  const avatarObj = reaction ? SPEAKER_AVATARS[reaction.speaker] : null;
  const avatarPath = avatarObj
    ? option.isSustainable
      ? avatarObj.positive
      : avatarObj.negative
    : "/assets/game/characters/maya-neutral.svg";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`p-6 sm:p-8 rounded-3xl border-2 backdrop-blur-xl shadow-2xl space-y-6 ${
        option.isSustainable
          ? "border-emerald-500/80 bg-gradient-to-b from-[#061A14]/95 to-[#020A07]/95 text-white shadow-[0_0_40px_rgba(16,185,129,0.2)]"
          : "border-rose-500/80 bg-gradient-to-b from-[#1C060B]/95 to-[#0C0204]/95 text-white shadow-[0_0_40px_rgba(244,63,94,0.2)]"
      }`}
    >
      {/* Consequence Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          {option.isSustainable ? (
            <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-sm sm:text-base tracking-wide">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>THE CHOICE IS MADE // HOPE ENDURES</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-rose-400 font-serif font-bold text-sm sm:text-base tracking-wide">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>THE CHOICE IS MADE // A HEAVY COST</span>
            </div>
          )}
        </div>

        <span className="text-xs font-mono font-bold text-white/80 px-3 py-1 rounded-md bg-black/50 border border-white/15">
          Choice {option.key}
        </span>
      </div>

      {/* Narrative Consequence */}
      <div className="space-y-2">
        <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
          {option.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
          {option.consequenceNarration}
        </p>
      </div>

      {/* Character Transmission Reaction */}
      {reaction && (
        <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/15 flex items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarPath}
              alt={reaction.speaker}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
              {reaction.speaker}
            </span>
            <p className="text-sm sm:text-base text-slate-100 font-serif italic">
              &ldquo;{reaction.quote}&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Next Scene Teaser */}
      {option.nextSceneTeaser && (
        <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 flex items-start gap-2.5 font-sans">
          <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-white font-mono text-[11px] uppercase tracking-wider mb-0.5">
              Developing Situation:
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer font-mono"
          >
            <span>DISCOVER THE FATE OF NOVA CITY</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          onAdvanceMission && (
            <button
              onClick={() => {
                sound.playClick();
                onAdvanceMission();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer font-mono"
            >
              <span>
                {missionNumber % 4 === 0
                  ? `CHAPTER ${Math.floor(missionNumber / 4)} RESOLUTION & PROCEED →`
                  : `CONTINUE TO SCENE ${missionNumber + 1} →`}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )
        )}
      </div>
    </motion.div>
  );
};
