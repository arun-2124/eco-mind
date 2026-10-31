"use client";

import React from "react";
import { sound } from "@/lib/audio";
import { ArrowRight, Sparkles, Compass, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChapterDebriefData {
  chapterNumber: number;
  title: string;
  theme: string;
  summary: string;
  image: string;
  reflection: {
    speaker: string;
    avatar: string;
    quote: string;
  };
  nextChapterTitle: string;
}

export const CHAPTER_DEBRIEFS: Record<number, ChapterDebriefData> = {
  1: {
    chapterNumber: 1,
    title: "CHAPTER 1 RESOLUTION // THE CATACLYSM",
    theme: "AI Fundamentals & Edge AI",
    summary:
      "Through decentralized telemetry triage, emergency subway valve bypasses, and ethical hospital rationing, Nova City's initial blackout collapse was held at bay. But as rising storm surges flood Sector 5, physical automation and autonomous rovers become humanity's only frontline.",
    image: "/assets/game/story/story-disaster.svg",
    reflection: {
      speaker: "Maya Lin",
      avatar: "/assets/game/characters/maya-determined.svg",
      quote:
        "We survived the initial blackout, but the storm waters are rising fast across the lower transit arteries. Get the edge rovers prepped—we're heading into the flooded sectors.",
    },
    nextChapterTitle: "CHAPTER 2: MACHINES COME ALIVE",
  },
  2: {
    chapterNumber: 2,
    title: "CHAPTER 2 RESOLUTION // MACHINES COME ALIVE",
    theme: "Physical AI & Embodied Robotics",
    summary:
      "Physical AI units, drone meshes, and automated sluice gates successfully rescued trapped commuters and secured subterranean shelters. However, excessive computational draw has pushed surviving power substations to the brink of thermal explosion.",
    image: "/assets/game/story/story-survivors.svg",
    reflection: {
      speaker: "Elias Ward",
      avatar: "/assets/game/characters/elias-worried.svg",
      quote:
        "The mechanical units held together, but the telemetry monitors are flashing critical orange. If we don't rein in our power consumption, the main transformers will burn out permanently.",
    },
    nextChapterTitle: "CHAPTER 3: THE ENERGY WAR",
  },
  3: {
    chapterNumber: 3,
    title: "CHAPTER 3 RESOLUTION // THE ENERGY WAR",
    theme: "Sustainable Computing & Efficient AI",
    summary:
      "By deploying model quantization, edge heuristics, and regenerative battery storage, catastrophic thermal runaway was averted. Yet industrial runoff and damaged treatment plants are now poisoning Nova City's remaining freshwater aquifers.",
    image: "/assets/game/story/story-power-crisis.svg",
    reflection: {
      speaker: "Dr. Lena Weiss",
      avatar: "/assets/game/characters/lena-neutral.svg",
      quote:
        "The electrical grid held, but look at the spectrometer readouts from the river basin. Toxic chemical runoff is entering Aquifer B. We cannot save our machines while letting our water die.",
    },
    nextChapterTitle: "CHAPTER 4: THE PLANET STRIKES BACK",
  },
  4: {
    chapterNumber: 4,
    title: "CHAPTER 4 RESOLUTION // THE PLANET STRIKES BACK",
    theme: "Environmental Monitoring & Circular Stewardship",
    summary:
      "Autonomous bio-buoys, microgrid solar arrays, and circular repair protocols stabilized the wetlands and filtered the water supply. Now, the final countdown begins: deciding the permanent constitutional protocol that will govern Nova City's future.",
    image: "/assets/game/story/story-final-decision.svg",
    reflection: {
      speaker: "ORI",
      avatar: "/assets/game/characters/ori-happy.svg",
      quote:
        "Planetary and computational metrics stabilized at 98.6%. Entering the final decision nexus. The survivor council has assembled. The future of Nova City rests in your hands.",
    },
    nextChapterTitle: "CHAPTER 5: THE LAST SIGNAL",
  },
};

interface ChapterDebriefModalProps {
  chapterNumber: number | null;
  onProceed: () => void;
}

export const ChapterDebriefModal: React.FC<ChapterDebriefModalProps> = ({
  chapterNumber,
  onProceed,
}) => {
  if (!chapterNumber || !CHAPTER_DEBRIEFS[chapterNumber]) return null;

  const data = CHAPTER_DEBRIEFS[chapterNumber];

  const handleProceed = () => {
    sound.playClick();
    onProceed();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#070E1B] border-2 border-cyan-400/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(34,211,238,0.25)] space-y-6 text-white font-sans max-h-[92vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="space-y-1 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CHAPTER {data.chapterNumber} CONCLUDED</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
              {data.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 font-semibold">
              Core Theme: {data.theme}
            </p>
          </div>

          {/* Cinematic Art Illustration */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Narrative Chapter Resolution */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {data.summary}
            </p>
          </div>

          {/* Character Transmission Reflection */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-400/30 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/30 shrink-0 bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.reflection.avatar}
                alt={data.reflection.speaker}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 min-w-0 flex-1 font-mono">
              <span className="text-xs font-bold text-cyan-300 uppercase block">
                {data.reflection.speaker} // Transmission
              </span>
              <p className="text-xs sm:text-sm text-slate-100 font-serif italic line-clamp-3">
                &ldquo;{data.reflection.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Action Button: Proceed to Next Chapter */}
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={handleProceed}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer font-mono"
            >
              <span>{data.nextChapterTitle}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
