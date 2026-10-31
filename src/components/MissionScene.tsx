"use client";

import React from "react";
import { DialogueBox } from "./DialogueBox";
import { EnvironmentalHotspots } from "./EnvironmentalHotspots";
import { Mission, StoryClue } from "@/types/game";
import { MapPin, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MissionSceneProps {
  mission: Mission;
  clues?: StoryClue[];
  discoveredClueIds?: string[];
  onInspectClue?: (clue: StoryClue) => void;
  onDialogueComplete?: () => void;
}

export const MissionScene: React.FC<MissionSceneProps> = ({
  mission,
  clues = [],
  discoveredClueIds = [],
  onInspectClue,
  onDialogueComplete,
}) => {
  const envName = mission.environmentName || `SECTOR ${String(mission.number).padStart(2, "0")} // NOVA CITY`;
  const storyNarrative = mission.storyScene || mission.environmentalContext;
  const uninspectedCount = clues.filter((c) => !discoveredClueIds.includes(c.id)).length;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl">
      {/* 1. Large 16:9 Cinematic Hand-Painted Environment Background */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={mission.heroImage}
          src={mission.heroImage}
          alt={mission.title}
          className="w-full h-full object-cover object-center scale-100 animate-[kenburns_30s_ease-in-out_infinite_alternate]"
        />

        {/* Cinematic Vignette & Ambient Darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none z-10" />

        {/* Top Cinematic Scene Metadata */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 flex items-center gap-2.5 flex-wrap">
          <div className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-md flex items-center gap-2 text-xs font-mono text-cyan-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold tracking-wider uppercase">{envName}</span>
          </div>

          <span className="text-xs font-mono text-white/60 hidden sm:inline-block px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
            {mission.category}
          </span>

          {clues.length > 0 && (
            <div className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
              <Search className="w-3 h-3 text-cyan-400" />
              <span>
                {uninspectedCount > 0
                  ? `${uninspectedCount} Clue${uninspectedCount > 1 ? "s" : ""} to Investigate`
                  : "All Area Clues Examined"}
              </span>
            </div>
          )}
        </div>

        {/* Scene Title & Narrative Overlay (Top Center) */}
        <div className="absolute top-16 sm:top-20 inset-x-6 z-20 max-w-2xl mx-auto text-center space-y-2 pointer-events-none">
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {mission.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200/95 font-sans italic leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {storyNarrative}
          </p>
        </div>

        {/* Environmental Interactive Hotspots */}
        {onInspectClue && (
          <EnvironmentalHotspots
            clues={clues}
            discoveredClueIds={discoveredClueIds}
            onInspectClue={onInspectClue}
          />
        )}

        {/* Dialogue Box Positioned Over the Cinematic Scene Near Bottom */}
        <div className="absolute inset-x-4 bottom-4 sm:bottom-6 z-30">
          {mission.dialogue && mission.dialogue.length > 0 && (
            <DialogueBox
              dialogues={mission.dialogue}
              onComplete={onDialogueComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};
