"use client";

import React from "react";
import { Sparkles, AlertTriangle, Users, CheckCircle2 } from "lucide-react";
import { Mission } from "@/types/game";

interface PresenterDecisionMonitorProps {
  mission: Mission;
  countA: number;
  countB: number;
  totalSubmissions: number;
  totalParticipants: number;
  revealed: boolean;
  projectorMode?: boolean;
}

export const PresenterDecisionMonitor: React.FC<PresenterDecisionMonitorProps> = ({
  mission,
  countA,
  countB,
  totalSubmissions,
  totalParticipants,
  revealed,
  projectorMode = false,
}) => {
  const percentA = totalSubmissions > 0 ? Math.round((countA / totalSubmissions) * 100) : 0;
  const percentB = totalSubmissions > 0 ? Math.round((countB / totalSubmissions) * 100) : 0;

  const optA = mission.options.find((o) => o.key === "A");
  const optB = mission.options.find((o) => o.key === "B");

  return (
    <div
      className={`glass-panel rounded-2xl border transition-all ${
        projectorMode
          ? "p-8 border-[#35D5FF]/40 bg-[#091122]/95 text-white"
          : "p-6 border-[#35D5FF]/20 bg-[#0D1424] text-white"
      } space-y-6`}
    >
      {/* Question Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="px-2.5 py-1 rounded bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-mono font-bold text-xs uppercase tracking-wider">
            MISSION 0{mission.number} DIRECTIVE
          </span>
          <div className="flex items-center gap-2 text-xs font-mono text-[#98A8BD]">
            <Users className="w-3.5 h-3.5 text-[#35D5FF]" />
            <span>
              Submitted: <strong className="text-white">{totalSubmissions}</strong> / {totalParticipants}
            </span>
          </div>
        </div>
        <h3
          className={`font-display font-bold text-white ${
            projectorMode ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {mission.question}
        </h3>
      </div>

      {/* Side-by-Side Comparison of Option A vs Option B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* OPTION A CARD */}
        <div
          className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
            revealed && optA?.isSustainable
              ? "bg-[#0A241C] border-[#38E58B] ring-2 ring-[#38E58B]"
              : revealed && !optA?.isSustainable
              ? "bg-[#240C12] border-[#FF5B65]"
              : "bg-[#0A101D] border-white/10"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono font-bold">
                OPTION A
              </span>
              {revealed && (
                <span
                  className={`text-[11px] font-mono font-bold uppercase flex items-center gap-1 ${
                    optA?.isSustainable ? "text-[#38E58B]" : "text-[#FF5B65]"
                  }`}
                >
                  {optA?.isSustainable ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5" /> Sustainable Choice
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5" /> Unsustainable
                    </>
                  )}
                </span>
              )}
            </div>
            <h4 className="font-display font-bold text-white text-base">
              {optA?.title}
            </h4>
            <p className="text-xs text-[#98A8BD] mt-1 line-clamp-3">
              {optA?.detailedExplanation}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#98A8BD]">Cohort Distribution:</span>
              <span className="font-bold text-white">
                {countA} Votes ({percentA}%)
              </span>
            </div>
            <div className="h-3 w-full bg-[#111C30] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  revealed && optA?.isSustainable
                    ? "bg-[#38E58B]"
                    : "bg-[#35D5FF]"
                }`}
                style={{ width: `${percentA}%` }}
              />
            </div>
          </div>
        </div>

        {/* OPTION B CARD */}
        <div
          className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
            revealed && optB?.isSustainable
              ? "bg-[#0A241C] border-[#38E58B] ring-2 ring-[#38E58B]"
              : revealed && !optB?.isSustainable
              ? "bg-[#240C12] border-[#FF5B65]"
              : "bg-[#0A101D] border-white/10"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono font-bold">
                OPTION B
              </span>
              {revealed && (
                <span
                  className={`text-[11px] font-mono font-bold uppercase flex items-center gap-1 ${
                    optB?.isSustainable ? "text-[#38E58B]" : "text-[#FF5B65]"
                  }`}
                >
                  {optB?.isSustainable ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5" /> Sustainable Choice
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5" /> Unsustainable
                    </>
                  )}
                </span>
              )}
            </div>
            <h4 className="font-display font-bold text-white text-base">
              {optB?.title}
            </h4>
            <p className="text-xs text-[#98A8BD] mt-1 line-clamp-3">
              {optB?.detailedExplanation}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#98A8BD]">Cohort Distribution:</span>
              <span className="font-bold text-white">
                {countB} Votes ({percentB}%)
              </span>
            </div>
            <div className="h-3 w-full bg-[#111C30] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  revealed && optB?.isSustainable
                    ? "bg-[#38E58B]"
                    : "bg-[#FF5B65]"
                }`}
                style={{ width: `${percentB}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
