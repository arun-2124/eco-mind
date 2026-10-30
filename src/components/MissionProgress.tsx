"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { sound } from "@/lib/audio";
import { CHAPTERS } from "@/lib/game-data";

interface MissionProgressProps {
  currentMission: number; // 1 - 20
  onSelectMission?: (missionNumber: number) => void;
  allowNavigation?: boolean;
}

export const MissionProgress: React.FC<MissionProgressProps> = ({
  currentMission,
  onSelectMission,
  allowNavigation = false,
}) => {
  const currentChapter = CHAPTERS.find(
    (c) => currentMission >= c.missionRange[0] && currentMission <= c.missionRange[1]
  ) || CHAPTERS[0];

  return (
    <div className="space-y-2 w-full">
      {/* Chapter Indicator */}
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#35D5FF] font-bold flex items-center gap-1.5 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#35D5FF] animate-pulse" />
          {currentChapter.title}
        </span>
        <span className="text-[#98A8BD]">
          Mission <strong className="text-white">{String(currentMission).padStart(2, "0")}</strong> of 20
        </span>
      </div>

      {/* 20 Mission Horizontal Scroller */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-white/10">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          const isPast = num < currentMission;
          const isCurrent = num === currentMission;

          return (
            <button
              key={num}
              type="button"
              disabled={!allowNavigation}
              onClick={() => {
                if (allowNavigation && onSelectMission) {
                  sound.playClick();
                  onSelectMission(num);
                }
              }}
              title={`Mission ${num}`}
              className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-[11px] font-mono font-bold transition-all ${
                isCurrent
                  ? "bg-[#35D5FF]/25 border-2 border-[#35D5FF] text-[#35D5FF] shadow-lg shadow-[#35D5FF]/30 scale-105"
                  : isPast
                  ? "bg-[#38E58B]/15 border border-[#38E58B]/40 text-[#38E58B]"
                  : "bg-[#0B1528] border border-white/5 text-[#98A8BD]/60"
              } ${allowNavigation ? "hover:border-[#35D5FF] cursor-pointer" : "cursor-default"}`}
            >
              {isPast ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38E58B]" />
              ) : (
                <span>{String(num).padStart(2, "0")}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
