"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";

interface DecisionCardProps {
  option: DecisionOption;
  isStaged: boolean;     // Participant has clicked this card to inspect/stage it
  isCommitted: boolean;  // Final decision has been confirmed and submitted
  isLocked: boolean;     // Submissions locked for this mission
  onStage: (option: DecisionOption) => void;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({
  option,
  isStaged,
  isCommitted,
  isLocked,
  onStage,
}) => {
  const handleClick = () => {
    if (isLocked || isCommitted) return;
    sound.playClick();
    onStage(option);
  };

  return (
    <motion.div
      whileHover={{ y: isLocked || isCommitted ? 0 : -4 }}
      onClick={handleClick}
      className={`glass-panel rounded-2xl border-2 overflow-hidden flex flex-col justify-between transition-all cursor-pointer ${
        isCommitted
          ? "border-[#38E58B] ring-2 ring-[#38E58B]/50 shadow-2xl bg-[#081822]"
          : isStaged
          ? "border-[#35D5FF] ring-2 ring-[#35D5FF]/60 shadow-2xl bg-[#0C1D38]"
          : "border-white/10 bg-[#0B1424] hover:border-[#35D5FF]/40 hover:bg-[#0D182E]"
      }`}
    >
      {/* 16:9 Visual Scene Illustration */}
      <div className="relative aspect-[16/9] w-full border-b border-white/10 bg-[#070B16] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#070B16]/90 border border-white/20 text-xs font-mono font-bold text-white shadow-md">
          OPTION {option.key}
        </div>

        {isCommitted && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#38E58B] text-[#070B16] font-mono font-black text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>COMMITTED</span>
          </div>
        )}

        {isStaged && !isCommitted && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#35D5FF] text-[#070B16] font-mono font-black text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-lg">
            <span>SELECTED (PENDING CONFIRM)</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-display font-bold text-base sm:text-lg text-white">
            {option.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#98A8BD] mt-2 leading-relaxed font-sans">
            {option.detailedExplanation}
          </p>
        </div>

        {/* Trade-offs & Engineering Analysis */}
        <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#081F19] border border-[#38E58B]/20 text-[#38E58B]">
            <strong className="block mb-0.5 uppercase text-[10px] tracking-wider text-[#38E58B]/80">
              Anticipated Advantage:
            </strong>
            <span className="leading-snug">• {option.advantages[0]}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#240E14] border border-[#FF5B65]/20 text-[#FF5B65]">
            <strong className="block mb-0.5 uppercase text-[10px] tracking-wider text-[#FF5B65]/80">
              Engineering Risk / Trade-off:
            </strong>
            <span className="leading-snug">• {option.disadvantages[0]}</span>
          </div>
        </div>

        {/* Selection Status Button */}
        <div className="pt-2">
          {isCommitted ? (
            <div className="w-full py-3 rounded-xl bg-[#38E58B]/20 border border-[#38E58B] text-[#38E58B] font-mono font-bold text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38E58B]" />
              <span>DECISION RECORDED (OPTION {option.key})</span>
            </div>
          ) : isStaged ? (
            <div className="w-full py-3 rounded-xl bg-[#35D5FF]/20 border-2 border-[#35D5FF] text-[#35D5FF] font-mono font-bold text-xs flex items-center justify-center gap-2 animate-pulse">
              <ShieldCheck className="w-4 h-4 text-[#35D5FF]" />
              <span>OPTION {option.key} STAGED — READY TO CONFIRM</span>
            </div>
          ) : (
            <button
              type="button"
              disabled={isLocked}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              className="w-full py-3 rounded-xl bg-[#111C30] hover:bg-[#182640] border border-[#35D5FF]/30 text-white font-mono font-bold text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <span>INSPECT &amp; STAGE OPTION {option.key}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#35D5FF]" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
