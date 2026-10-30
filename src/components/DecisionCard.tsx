"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";

interface DecisionCardProps {
  option: DecisionOption;
  isSelected: boolean;
  isLocked: boolean;
  isSubmitting?: boolean;
  onSelect: (option: DecisionOption) => void;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({
  option,
  isSelected,
  isLocked,
  isSubmitting = false,
  onSelect,
}) => {
  const handleSelect = () => {
    if (isLocked || isSubmitting) return;
    sound.playConfirm();
    onSelect(option);
  };

  return (
    <motion.div
      whileHover={{ y: isLocked ? 0 : -3 }}
      className={`glass-panel rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
        isSelected
          ? "border-[#35D5FF] ring-2 ring-[#35D5FF] shadow-2xl bg-[#11243D]"
          : "border-[#35D5FF]/20 bg-[#0D1424] hover:border-[#35D5FF]/50"
      }`}
    >
      {/* 16:9 Visual Scene Illustration */}
      <div className="relative aspect-[16/9] w-full border-b border-white/10 bg-[#070B16] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#070B16]/90 border border-white/20 text-xs font-mono font-bold text-white shadow-md">
          OPTION {option.key}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-display font-bold text-base text-white">
            {option.title}
          </h4>
          <p className="text-xs text-[#98A8BD] mt-1.5 leading-relaxed">
            {option.detailedExplanation}
          </p>
        </div>

        {/* Benefits & Trade-offs */}
        <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] font-mono">
          <div className="text-[#38E58B]">
            <strong className="block mb-0.5">Key Advantage:</strong>
            <span>• {option.advantages[0]}</span>
          </div>
          <div className="text-[#FF5B65]">
            <strong className="block mb-0.5">Trade-off / Risk:</strong>
            <span>• {option.disadvantages[0]}</span>
          </div>
        </div>

        {/* Commit / Select CTA */}
        <div className="pt-3">
          {isSelected ? (
            <div className="w-full py-2.5 rounded-xl bg-[#38E58B]/20 border border-[#38E58B] text-[#38E58B] font-mono font-bold text-xs flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#38E58B]" />
              <span>CHOICE COMMITTED (OPTION {option.key})</span>
            </div>
          ) : (
            <button
              type="button"
              disabled={isLocked || isSubmitting}
              onClick={handleSelect}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              SELECT OPTION {option.key}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
