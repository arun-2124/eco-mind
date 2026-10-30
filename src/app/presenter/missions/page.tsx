"use client";

import React, { useState } from "react";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { MISSIONS } from "@/lib/game-data";
import { SDGBadge } from "@/components/SDGBadge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Target,
  Sparkles,
  FastForward,
  Play,
  RotateCcw,
  CheckCircle2,
  Users,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function PresenterMissionsPage() {
  const {
    session,
    participants,
    submissions,
    startMission,
    revealConsequences,
    advanceMission,
    toggleResubmission,
  } = useGameState();

  const [activeTabMission, setActiveTabMission] = useState<number>(session.currentMission);

  const mission = MISSIONS.find((m) => m.number === activeTabMission) || MISSIONS[0];

  // Calculate choice counts (A vs B)
  const choiceCounts: Record<string, number> = { A: 0, B: 0 };
  let totalSubmissionsForTab = 0;

  participants.forEach((p) => {
    const choice = p.decisions[activeTabMission];
    if (choice && (choice === "A" || choice === "B")) {
      choiceCounts[choice] += 1;
      totalSubmissionsForTab += 1;
    }
  });

  const chartData = mission.options.map((opt) => {
    const count = choiceCounts[opt.key] || 0;
    const pct = totalSubmissionsForTab
      ? Math.round((count / totalSubmissionsForTab) * 100)
      : 0;

    return {
      key: `Option ${opt.key}`,
      optionTitle: opt.title,
      isSustainable: opt.isSustainable,
      votes: count,
      percentage: pct,
    };
  });

  const barColors = ["#38E58B", "#FF5B65"];

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />
      <PresenterNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Mission Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#35D5FF]/15 pb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-thin">
            {MISSIONS.map((m) => {
              const isActive = m.number === activeTabMission;
              const isCurrentSessionMission = m.number === session.currentMission;

              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTabMission(m.number)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? "bg-[#35D5FF]/20 text-[#35D5FF] border border-[#35D5FF] shadow-sm"
                      : "bg-[#0D1424] text-[#98A8BD] border border-white/5 hover:text-white"
                  }`}
                >
                  <span>M{String(m.number).padStart(2, "0")}</span>
                  {isCurrentSessionMission && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38E58B] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {activeTabMission !== session.currentMission && (
            <button
              onClick={() => startMission(activeTabMission)}
              className="px-4 py-2 rounded-xl bg-[#111C30] hover:bg-[#16243D] text-[#35D5FF] border border-[#35D5FF]/30 text-xs font-mono font-bold transition-colors shrink-0"
            >
              Activate M{String(activeTabMission).padStart(2, "0")} as Live Workshop Mission
            </button>
          )}
        </div>

        {/* Question & Real-Time Answer Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Mission Description & Question (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#35D5FF] font-bold uppercase tracking-wider">
                  MISSION 0{mission.number} • {mission.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {mission.sdgs.map((s) => (
                    <SDGBadge key={s} sdg={s} size="sm" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-display font-extrabold text-white">
                {mission.title}
              </h2>

              <div className="p-4 rounded-xl bg-[#091120] border border-[#35D5FF]/20 text-xs font-mono">
                <span className="text-[10px] text-[#35D5FF] font-bold uppercase block mb-1">
                  DIRECTOR TEACHING QUESTION:
                </span>
                <p className="text-sm font-bold text-white leading-relaxed">
                  {mission.question}
                </p>
              </div>

              <p className="text-xs text-[#98A8BD] leading-relaxed font-mono">
                {mission.environmentalContext}
              </p>
            </div>

            {/* Two Options Catalog */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#98A8BD]">
                Options Catalog &amp; Educational Classification
              </h3>
              {mission.options.map((opt) => (
                <div
                  key={opt.id}
                  className={`p-4 rounded-xl border space-y-2 text-xs font-mono ${
                    opt.isSustainable
                      ? "bg-[#081814] border-[#38E58B]/30"
                      : "bg-[#180A0C] border-[#FF5B65]/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      Option {opt.key}: {opt.title}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        opt.isSustainable
                          ? "bg-[#38E58B]/20 text-[#38E58B]"
                          : "bg-[#FF5B65]/20 text-[#FF5B65]"
                      }`}
                    >
                      {opt.isSustainable ? "Sustainable (+250)" : "Unsustainable (+50)"}
                    </span>
                  </div>
                  <p className="text-[#98A8BD] text-xs leading-relaxed">
                    {opt.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Distribution Bar Chart & Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-6">
              <div className="flex items-center justify-between border-b border-[#35D5FF]/15 pb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#35D5FF]" />
                  <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                    Cadet Choice Distribution (A vs B)
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#38E58B] font-bold">
                  {totalSubmissionsForTab} / {participants.length} Cadets Answered
                </span>
              </div>

              {/* Bar Chart */}
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="key" stroke="#98A8BD" fontSize={12} fontFamily="monospace" />
                    <YAxis stroke="#98A8BD" fontSize={11} domain={[0, 100]} unit="%" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0B1424",
                        borderColor: "#35D5FF",
                        color: "#fff",
                        fontFamily: "monospace",
                        fontSize: "12px",
                      }}
                      formatter={(value: any) => [`${value}%`, "Selected"]}
                    />
                    <Bar dataKey="percentage" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.isSustainable ? "#38E58B" : "#FF5B65"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Mission Controls */}
              {activeTabMission === session.currentMission && (
                <div className="pt-4 border-t border-[#35D5FF]/15 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#98A8BD] block">
                    Active Mission 0{session.currentMission} Controls:
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={revealConsequences}
                      disabled={session.consequencesRevealed}
                      className={`px-4 py-2.5 rounded-xl font-mono font-bold text-xs flex items-center gap-1.5 transition-all ${
                        session.consequencesRevealed
                          ? "bg-[#38E58B]/20 text-[#38E58B] border border-[#38E58B]/40"
                          : "bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] shadow-lg shadow-[#35D5FF]/25 hover:opacity-90"
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>
                        {session.consequencesRevealed
                          ? "Consequences Visible to Cadets"
                          : "Reveal Mission Consequences"}
                      </span>
                    </button>

                    <button
                      onClick={advanceMission}
                      disabled={session.currentMission >= 4 && session.consequencesRevealed}
                      className="px-4 py-2.5 rounded-xl bg-[#111C30] hover:bg-[#16243D] text-[#35D5FF] border border-[#35D5FF]/30 font-mono font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-40"
                    >
                      <span>Advance to Next Mission</span>
                      <FastForward className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
