"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Award,
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

const REFLECTION_QUESTIONS: Record<
  number,
  {
    question: string;
    options: { text: string; isCorrect: boolean }[];
    explanation: string;
  }
> = {
  1: {
    question: "Why does running Edge AI on a device still involve environmental trade-offs?",
    options: [
      {
        text: "Device manufacturing, silicon fabrication, and local battery drain consume physical energy and resources.",
        isCorrect: true,
      },
      {
        text: "Edge devices require launching continuous space satellites for simple camera operations.",
        isCorrect: false,
      },
    ],
    explanation:
      "Sustainable AI recognizes that hardware lifecycles and manufacturing footprints are real physical constraints.",
  },
  2: {
    question: "In Physical AI, why is local perception combined with human supervision better than 100% remote teleoperation?",
    options: [
      {
        text: "It functions reliably during communication outages while reserving human judgment for critical safety actions.",
        isCorrect: true,
      },
      {
        text: "Remote human operators never suffer from network latency or physical fatigue.",
        isCorrect: false,
      },
    ],
    explanation:
      "Physical AI blends local autonomous obstacle avoidance with human moral oversight for responsible deployment.",
  },
  3: {
    question: "What is the primary sustainability benefit of AI model quantization (e.g., FP32 to INT8)?",
    options: [
      {
        text: "It reduces numerical precision to cut computational operations (FLOPs) and electricity by up to 75%.",
        isCorrect: true,
      },
      {
        text: "It eliminates the need for any computer hardware entirely.",
        isCorrect: false,
      },
    ],
    explanation:
      "Model optimization allows lightweight devices to perform accurate inferences using a fraction of the power.",
  },
  4: {
    question: "In a circular robotics economy, which step should precede end-of-life recycling?",
    options: [
      {
        text: "Repairing modular assemblies and refurbishing functional parts to maximize hardware lifespan.",
        isCorrect: true,
      },
      {
        text: "Discarding entire robotic systems whenever an individual sensor wears out.",
        isCorrect: false,
      },
    ],
    explanation:
      "Repair and reuse conserve the embodied energy and rare earth metals already invested in manufactured hardware.",
  },
};

export const ConsequenceReveal: React.FC<ConsequenceRevealProps> = ({
  option,
  missionNumber,
  isLastMission,
  onAdvanceMission,
  onViewResults,
  onAwardBonusPoints,
}) => {
  const [reflectionAnswered, setReflectionAnswered] = useState<number | null>(null);
  const [bonusEarned, setBonusEarned] = useState<boolean>(false);

  useEffect(() => {
    if (option.isSustainable) {
      sound.playSustainableSuccess();
    } else {
      sound.playUnsustainableAlert();
    }
  }, [option]);

  const reflection = REFLECTION_QUESTIONS[missionNumber];

  const handleSelectReflection = (idx: number, isCorrect: boolean) => {
    if (reflectionAnswered !== null) return;
    setReflectionAnswered(idx);

    if (isCorrect) {
      sound.playBonusReward();
      setBonusEarned(true);
      if (onAwardBonusPoints) {
        onAwardBonusPoints(50);
      }
    } else {
      sound.playClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`p-6 rounded-2xl border-2 backdrop-blur-md shadow-2xl space-y-5 ${
        option.isSustainable
          ? "border-[#38E58B] bg-[#0A241C]/95 text-white"
          : "border-[#FF5B65] bg-[#240C12]/95 text-white"
      }`}
    >
      {/* Consequence Badge Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          {option.isSustainable ? (
            <div className="flex items-center gap-2 text-[#38E58B] font-mono font-black text-sm uppercase">
              <Sparkles className="w-5 h-5 text-[#38E58B]" />
              <span>SUSTAINABLE DECISION (+250 PTS)</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#FF5B65] font-mono font-black text-sm uppercase">
              <AlertTriangle className="w-5 h-5 text-[#FF5B65]" />
              <span>UNSUSTAINABLE DECISION (+50 PTS)</span>
            </div>
          )}
        </div>
        <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded bg-black/40 border border-white/10">
          Option {option.key} Chosen
        </span>
      </div>

      {/* Narration */}
      <div>
        <h3 className="font-display font-extrabold text-lg text-white">
          {option.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#F4F7FC] leading-relaxed font-mono">
          {option.consequenceNarration}
        </p>
      </div>

      {/* Educational Explanation */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-[#98A8BD] leading-relaxed font-mono">
        <strong className="text-[#35D5FF] block mb-1 font-bold uppercase flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#35D5FF]" /> Why this matters:
        </strong>
        {option.educationalTakeaway}
      </div>

      {/* Optional Reflection Bonus Question (+50 pts) */}
      {reflection && (
        <div className="p-4 rounded-xl bg-[#070B16]/80 border border-[#FCC30B]/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#FCC30B] uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Optional Reflection Bonus (+50 Pts)
            </span>
            {bonusEarned && (
              <span className="px-2 py-0.5 rounded bg-[#38E58B]/20 text-[#38E58B] text-[10px] font-mono font-bold flex items-center gap-1">
                <Award className="w-3 h-3" /> +50 BONUS AWARDED
              </span>
            )}
          </div>
          <p className="text-xs font-mono text-white">{reflection.question}</p>

          <div className="space-y-2 pt-1">
            {reflection.options.map((ropt, idx) => {
              const isSelected = reflectionAnswered === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={reflectionAnswered !== null}
                  onClick={() => handleSelectReflection(idx, ropt.isCorrect)}
                  className={`w-full text-left p-3 rounded-lg text-xs font-mono transition-all border ${
                    isSelected
                      ? ropt.isCorrect
                        ? "bg-[#38E58B]/20 border-[#38E58B] text-white"
                        : "bg-[#FF5B65]/20 border-[#FF5B65] text-white"
                      : "bg-[#0F172A] border-white/5 text-[#98A8BD] hover:border-[#35D5FF]/40 hover:text-white"
                  } ${reflectionAnswered !== null ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">
                      {isSelected ? (
                        ropt.isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-[#38E58B]" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-[#FF5B65]" />
                        )
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-white/30 inline-block text-[10px] text-center">
                          {idx + 1}
                        </span>
                      )}
                    </span>
                    <span className="leading-snug">{ropt.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {reflectionAnswered !== null && (
            <p className="text-[11px] font-mono text-[#35D5FF] pt-1">
              Insight: {reflection.explanation}
            </p>
          )}
        </div>
      )}

      {/* Action CTA */}
      <div className="pt-2 flex justify-end">
        {isLastMission ? (
          <button
            onClick={() => {
              sound.playClick();
              if (onViewResults) onViewResults();
            }}
            className="px-6 py-3 rounded-xl bg-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-xl shadow-[#38E58B]/30 hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>VIEW FINAL SUMMIT EVALUATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          onAdvanceMission && (
            <button
              onClick={() => {
                sound.playClick();
                onAdvanceMission();
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>ADVANCE TO NEXT MISSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )
        )}
      </div>
    </motion.div>
  );
};
