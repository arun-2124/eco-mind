"use client";

import React from "react";
import { StoryClue } from "@/types/game";
import { sound } from "@/lib/audio";
import {
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  FileText,
  FileSpreadsheet,
  Cpu,
  ShieldAlert,
  SunMedium,
  Droplets,
  Radio,
  Search,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const CLUE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  FileText,
  FileSpreadsheet,
  Cpu,
  ShieldAlert,
  SunMedium,
  Droplets,
  Radio,
  Search,
};

interface EnvironmentalHotspotsProps {
  clues: StoryClue[];
  discoveredClueIds: string[];
  onInspectClue: (clue: StoryClue) => void;
}

export const EnvironmentalHotspots: React.FC<EnvironmentalHotspotsProps> = ({
  clues,
  discoveredClueIds,
  onInspectClue,
}) => {
  if (!clues || clues.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {clues.map((clue) => {
        const isDiscovered = discoveredClueIds.includes(clue.id);
        const IconComponent = CLUE_ICONS[clue.iconName] || Search;

        return (
          <div
            key={clue.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
            style={{ left: `${clue.x}%`, top: `${clue.y}%` }}
            onClick={() => {
              sound.playClick();
              onInspectClue(clue);
            }}
          >
            {/* Pulsing ring animation if undiscovered */}
            {!isDiscovered && (
              <span className="absolute -inset-2 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
            )}

            {/* Core Hotspot Lens Badge */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shadow-2xl backdrop-blur-md transition-all ${
                isDiscovered
                  ? "bg-slate-900/80 border-white/20 text-emerald-400 shadow-emerald-950/50"
                  : "bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-cyan-950/80 ring-2 ring-cyan-400/40"
              }`}
            >
              {isDiscovered ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <IconComponent className="w-4 h-4 text-cyan-300 animate-pulse" />
              )}
            </motion.div>

            {/* Hover Tooltip / Preview Label */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-30">
              <div className="px-2.5 py-1 rounded-lg bg-black/90 border border-white/20 text-[11px] font-mono text-white whitespace-nowrap shadow-xl flex items-center gap-1.5">
                <Search className="w-3 h-3 text-cyan-400" />
                <span>{clue.preview || clue.title}</span>
                {isDiscovered && <span className="text-[9px] text-emerald-400">(Inspected)</span>}
              </div>
              <div className="w-1.5 h-1.5 bg-black/90 rotate-45 border-r border-b border-white/20 -mt-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
