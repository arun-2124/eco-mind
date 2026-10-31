"use client";

import React, { useState } from "react";
import { CharacterDialogue } from "@/types/game";
import { sound } from "@/lib/audio";
import { ChevronRight, ChevronLeft, Volume2, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogueBoxProps {
  dialogues: CharacterDialogue[];
  onComplete?: () => void;
  className?: string;
}

export function DialogueBox({ dialogues, onComplete, className = "" }: DialogueBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!dialogues || dialogues.length === 0) return null;

  const current = dialogues[currentIndex] || dialogues[0];
  const isLast = currentIndex === dialogues.length - 1;

  const handleNext = () => {
    sound.playDialogueAdvance();
    if (currentIndex < dialogues.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextSpeaker = dialogues[nextIndex]?.speaker || current.speaker;
      sound.playCharacterVoice(nextSpeaker);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevSpeaker = dialogues[prevIndex]?.speaker || current.speaker;
      sound.playCharacterVoice(prevSpeaker);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl bg-black/85 border border-white/20 p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6"
      >
        {/* Character Portrait with Active Expression */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl bg-black/90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.avatar}
              alt={current.speaker}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2.5 inset-x-0 text-center">
            <span className="px-2 py-0.5 rounded bg-black/90 border border-white/20 text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-300">
              {current.speaker}
            </span>
          </div>
        </div>

        {/* Subtitle Dialogue Text */}
        <div className="flex-1 space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-between gap-3 border-b border-white/10 pb-2">
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
                {current.speaker}
              </span>
              <span className="text-xs font-mono text-slate-400 ml-2">
                — {current.role}
              </span>
            </div>

            <span className="text-[11px] font-mono text-white/40 hidden sm:inline">
              Line {currentIndex + 1} of {dialogues.length}
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-100 font-serif leading-relaxed italic">
            &ldquo;{current.text}&rdquo;
          </p>

          {/* Stepper Controls */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white disabled:opacity-20 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isLast ? "DECIDE SITUATION" : "CONTINUE"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
