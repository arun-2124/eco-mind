"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Key, Sparkles } from "lucide-react";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";

interface DecisionCardProps {
  option: DecisionOption;
  isStaged: boolean;     // Participant has clicked this card to inspect/stage it
  isCommitted: boolean;  // Final decision has been confirmed and submitted
  isLocked: boolean;     // Submissions locked for this mission
  heldItemIds?: string[]; // Item IDs held in player inventory
  onStage: (option: DecisionOption) => void;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({
  option,
  isStaged,
  isCommitted,
  isLocked,
  heldItemIds = [],
  onStage,
}) => {
  const handleClick = () => {
    if (isLocked || isCommitted) return;
    sound.playClick();
    onStage(option);
  };

  const hasRequiredItem = option.requiredItemId ? heldItemIds.includes(option.requiredItemId) : true;

  return (
    <motion.div
      whileHover={{ y: isLocked || isCommitted ? 0 : -4, scale: isLocked || isCommitted ? 1 : 1.01 }}
      onClick={handleClick}
      className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
        isCommitted
          ? "border-emerald-400 bg-[#061510]/95 shadow-[0_0_30px_rgba(16,185,129,0.3)] ring-2 ring-emerald-400/50 cursor-default"
          : isLocked
          ? "opacity-40 border-white/10 bg-black/40 grayscale cursor-not-allowed"
          : isStaged
          ? "border-cyan-400 bg-[#091528]/95 shadow-[0_0_30px_rgba(34,211,238,0.3)] ring-2 ring-cyan-400/50 cursor-pointer"
          : "border-white/15 bg-black/60 hover:border-white/40 hover:bg-black/80 backdrop-blur-md cursor-pointer"
      }`}
    >
      {/* Visual Scene Artwork */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Option Key Tag */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/80 border border-white/20 text-xs font-mono font-bold text-white shadow-md">
          CHOICE {option.key}
        </div>

        {isCommitted && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-emerald-400 text-slate-950 font-mono font-black text-xs uppercase flex items-center gap-1.5 shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>COMMITTED</span>
          </div>
        )}

        {isStaged && !isCommitted && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-cyan-400 text-slate-950 font-mono font-black text-xs uppercase flex items-center gap-1.5 shadow-lg animate-pulse">
            <span>SELECTED</span>
          </div>
        )}
      </div>

      {/* Choice Body */}
      <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-cyan-300 transition-colors">
            {option.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {option.detailedExplanation}
          </p>
          {option.requiredItemId && (
            <div className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono flex items-center gap-1.5 ${
              hasRequiredItem
                ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300"
                : "bg-amber-950/40 border border-amber-500/30 text-amber-300/80"
            }`}>
              <Key className="w-3.5 h-3.5 shrink-0" />
              <span>
                {hasRequiredItem
                  ? "Item in Backpack: Special narrative perk unlocked"
                  : "Optional story item not yet discovered in scene"}
              </span>
            </div>
          )}

          {option.trustNotice && (
            <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300/80 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>{option.trustNotice.text}</span>
            </div>
          )}
        </div>

        {/* Narrative Consequences Preview */}
        <div className="pt-2 text-xs font-sans text-slate-400 border-t border-white/10 flex items-center justify-between">
          <span className="italic text-slate-300/80 line-clamp-1">
            &ldquo;{option.shortDescription}&rdquo;
          </span>
          <span className="shrink-0 font-mono font-bold flex items-center gap-1 ml-2">
            {isCommitted ? (
              <span className="text-emerald-400 flex items-center gap-1">
                <span>COMMITTED</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            ) : isLocked ? (
              <span className="text-slate-500">LOCKED</span>
            ) : (
              <span className="text-cyan-400 flex items-center gap-1">
                <span>SELECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
