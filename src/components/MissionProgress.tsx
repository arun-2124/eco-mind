"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";

interface MissionProgressProps {
  currentMission: number; // 1 - 4
  onSelectMission?: (missionNumber: number) => void;
  allowNavigation?: boolean;
}

const MISSIONS_META = [
  { num: 1, title: "AI Infrastructure", short: "Infrastructure" },
  { num: 2, title: "Autonomous Rescue", short: "Rescue" },
  { num: 3, title: "Energy Emergency", short: "Energy" },
  { num: 4, title: "E-Waste Crisis", short: "E-Waste" },
];

export const MissionProgress: React.FC<MissionProgressProps> = ({
  currentMission,
  onSelectMission,
  allowNavigation = false,
}) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2.5">
      <span className="text-[11px] font-mono uppercase text-[#98A8BD] hidden sm:inline mr-1">
        Mission:
      </span>
      {MISSIONS_META.map((m) => {
        const isPast = m.num < currentMission;
        const isCurrent = m.num === currentMission;

        return (
          <button
            key={m.num}
            type="button"
            disabled={!allowNavigation}
            onClick={() => {
              if (allowNavigation && onSelectMission) {
                sound.playClick();
                onSelectMission(m.num);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              isCurrent
                ? "bg-[#35D5FF]/20 border border-[#35D5FF] text-[#35D5FF] shadow-md shadow-[#35D5FF]/20"
                : isPast
                ? "bg-[#38E58B]/15 border border-[#38E58B]/40 text-[#38E58B]"
                : "bg-[#111C30] border border-white/5 text-[#98A8BD]"
            } ${allowNavigation ? "hover:border-[#35D5FF]/60 cursor-pointer" : "cursor-default"}`}
          >
            {isPast ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38E58B]" />
            ) : (
              <span>0{m.num}</span>
            )}
            <span className="hidden md:inline">{m.title}</span>
            <span className="md:hidden inline">{m.short}</span>
          </button>
        );
      })}
    </div>
  );
};
