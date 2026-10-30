"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { MISSIONS } from "@/lib/game-data";
import {
  Play,
  Pause,
  FastForward,
  Sparkles,
  Lock,
  Unlock,
  RotateCcw,
  Users,
  Award,
  Activity,
  CheckCircle2,
  Clock,
  Layers,
  BarChart3,
  ArrowRight,
  ShieldAlert,
  Maximize2,
  Minimize2,
  Tv,
} from "lucide-react";

export default function PresenterDashboardPage() {
  const {
    session,
    participants,
    submissions,
    activeMission,
    startWorkshop,
    startMission,
    revealConsequences,
    advanceMission,
    togglePause,
    toggleRegistration,
    toggleResubmission,
    resetWorkshop,
  } = useGameState();

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [projectorMode, setProjectorMode] = useState(false);

  // Computed statistics
  const totalParticipants = participants.length;
  const activeParticipants = participants.filter((p) => p.connectionStatus === "online").length;

  const currentMissionSubmittedCount = participants.filter(
    (p) => !!p.decisions[session.currentMission]
  ).length;

  const currentMissionPendingCount = totalParticipants - currentMissionSubmittedCount;

  // Count Option A vs Option B for current mission
  const optionACount = participants.filter(
    (p) => p.decisions[session.currentMission] === "A"
  ).length;

  const optionBCount = participants.filter(
    (p) => p.decisions[session.currentMission] === "B"
  ).length;

  const optAPct = currentMissionSubmittedCount
    ? Math.round((optionACount / currentMissionSubmittedCount) * 100)
    : 0;

  const optBPct = currentMissionSubmittedCount
    ? Math.round((optionBCount / currentMissionSubmittedCount) * 100)
    : 0;

  const avgScore = totalParticipants
    ? Math.round(
        participants.reduce((acc, p) => acc + p.score.total, 0) / totalParticipants
      )
    : 0;

  const highestScore = totalParticipants
    ? Math.max(...participants.map((p) => p.score.total))
    : 0;

  // Sorted leaderboard
  const sortedLeaderboard = [...participants].sort(
    (a, b) => b.score.total - a.score.total
  );

  return (
    <div className={`min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC] ${projectorMode ? "text-base" : ""}`}>
      {!projectorMode && <DemoModeBanner />}
      {!projectorMode && <Navbar />}
      {!projectorMode && <PresenterNav />}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Session Status Ribbon */}
        <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  session.status === "in_progress"
                    ? "bg-[#38E58B] animate-pulse"
                    : session.status === "paused"
                    ? "bg-[#FCC30B]"
                    : "bg-[#35D5FF]"
                }`}
              />
              <span className="font-mono text-xs uppercase tracking-widest text-[#35D5FF] font-bold">
                PRESENTER COMMAND CENTER • SESSION PIN: <strong className="text-white underline">{session.pin}</strong>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {session.title}
            </h1>
            <p className="text-xs font-mono text-[#98A8BD] mt-0.5">
              Mission 0{session.currentMission}: {activeMission.title} ({activeMission.category})
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Projector Toggle */}
            <button
              onClick={() => setProjectorMode(!projectorMode)}
              className="px-3 py-2 rounded-xl bg-[#111C30] text-[#35D5FF] border border-[#35D5FF]/30 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#35D5FF]/10 transition-colors"
              title="Toggle Projector / Large Screen Mode"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>{projectorMode ? "Exit Projector" : "Projector Mode"}</span>
            </button>

            {session.status === "registration" && (
              <button
                onClick={startWorkshop}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>START WORKSHOP</span>
              </button>
            )}

            {session.status !== "registration" && (
              <>
                <button
                  onClick={() => togglePause(session.status !== "paused")}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-colors ${
                    session.status === "paused"
                      ? "bg-[#FCC30B] text-[#070B16] border-[#FCC30B]"
                      : "bg-[#111C30] text-[#FCC30B] border-[#FCC30B]/40 hover:bg-[#FCC30B]/10"
                  }`}
                >
                  {session.status === "paused" ? (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>RESUME</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3 fill-current" />
                      <span>PAUSE</span>
                    </>
                  )}
                </button>

                <button
                  onClick={revealConsequences}
                  disabled={session.consequencesRevealed}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                    session.consequencesRevealed
                      ? "bg-[#38E58B]/20 text-[#38E58B] border-[#38E58B]/40 cursor-default"
                      : "bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] border-transparent shadow-lg shadow-[#35D5FF]/20 hover:scale-105"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {session.consequencesRevealed
                      ? "CONSEQUENCES REVEALED"
                      : "REVEAL CONSEQUENCES"}
                  </span>
                </button>

                <button
                  onClick={advanceMission}
                  disabled={session.currentMission >= 4 && session.consequencesRevealed}
                  className="px-3.5 py-2 rounded-xl bg-[#111C30] hover:bg-[#16243D] text-[#35D5FF] border border-[#35D5FF]/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors disabled:opacity-40"
                >
                  <span>
                    {session.currentMission >= 4 ? "FINISH WORKSHOP" : "ADVANCE MISSION"}
                  </span>
                  <FastForward className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            <button
              onClick={() => toggleRegistration(!session.registrationOpen)}
              className="p-2 rounded-xl bg-[#111C30] text-[#98A8BD] hover:text-white border border-white/10 text-xs font-mono"
              title={session.registrationOpen ? "Close Registration" : "Open Registration"}
            >
              {session.registrationOpen ? (
                <Unlock className="w-4 h-4 text-[#38E58B]" />
              ) : (
                <Lock className="w-4 h-4 text-[#FF5B65]" />
              )}
            </button>

            <button
              onClick={() => setConfirmResetOpen(true)}
              className="p-2 rounded-xl bg-[#111C30] text-[#98A8BD] hover:text-[#FF5B65] border border-white/10 text-xs font-mono"
              title="Reset workshop session"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Question & Decision Breakdown Panel (Part 10) */}
        <div className="glass-panel p-6 rounded-2xl border-2 border-[#35D5FF]/30 bg-[#0B1528] space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#35D5FF] font-bold">
                ACTIVE WORKSHOP QUESTION (MISSION 0{activeMission.number})
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                {activeMission.question}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-[#38E58B] font-bold block">
                {currentMissionSubmittedCount} of {totalParticipants} Cadets Voted
              </span>
              <span className="text-[10px] font-mono text-[#FCC30B]">
                {currentMissionPendingCount} pending answers
              </span>
            </div>
          </div>

          {/* Option A vs Option B Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option A Card */}
            <div className="p-4 rounded-xl bg-[#081814] border-2 border-[#38E58B]/40 space-y-2 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  OPTION A: {activeMission.options[0].title}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#38E58B]/20 text-[#38E58B] text-[10px] font-black uppercase">
                  SUSTAINABLE CHOICE
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl font-black text-[#38E58B]">
                  {optionACount} <span className="text-xs font-normal text-[#98A8BD]">cadets</span>
                </span>
                <span className="text-xl font-bold text-white">{optAPct}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-2 w-full bg-[#05110E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#38E58B] rounded-full transition-all duration-500"
                  style={{ width: `${optAPct}%` }}
                />
              </div>
            </div>

            {/* Option B Card */}
            <div className="p-4 rounded-xl bg-[#1C090D] border-2 border-[#FF5B65]/40 space-y-2 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  OPTION B: {activeMission.options[1].title}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#FF5B65]/20 text-[#FF5B65] text-[10px] font-black uppercase">
                  UNSUSTAINABLE CHOICE
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl font-black text-[#FF5B65]">
                  {optionBCount} <span className="text-xs font-normal text-[#98A8BD]">cadets</span>
                </span>
                <span className="text-xl font-bold text-white">{optBPct}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-2 w-full bg-[#0D0406] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5B65] rounded-full transition-all duration-500"
                  style={{ width: `${optBPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              Enrolled Cadets
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-white">
                {totalParticipants}
              </span>
              <span className="text-xs font-mono text-[#38E58B] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#38E58B] animate-pulse" />
                {activeParticipants} online
              </span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              M0{session.currentMission} Submissions
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#35D5FF]">
                {currentMissionSubmittedCount}
                <span className="text-sm text-[#98A8BD] font-normal">/{totalParticipants}</span>
              </span>
              <span className="text-xs font-mono text-[#FCC30B]">
                {currentMissionPendingCount} pending
              </span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              Average Sustainability
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#38E58B]">
                {avgScore}
                <span className="text-sm text-[#98A8BD] font-normal">/1000</span>
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Workshop Mean</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              Peak Cadet Score
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-white">
                {highestScore}
              </span>
              <span className="text-xs font-mono text-[#FCC30B] flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> High Mark
              </span>
            </div>
          </div>
        </div>

        {/* Live Leaderboard & Live Decision Stream Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Live Leaderboard (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
            <div className="flex items-center justify-between border-b border-[#35D5FF]/15 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FCC30B]" />
                <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                  Live Sustainability Leaderboard
                </h3>
              </div>
              <Link
                href="/presenter/participants"
                className="text-xs font-mono text-[#35D5FF] hover:underline"
              >
                View all cadets →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-[#98A8BD] border-b border-white/5 uppercase">
                    <th className="py-2.5 px-3">Rank</th>
                    <th className="py-2.5 px-3">Cadet Name</th>
                    <th className="py-2.5 px-3">Score</th>
                    <th className="py-2.5 px-3">Standing</th>
                    <th className="py-2.5 px-3">Missions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {sortedLeaderboard.slice(0, 7).map((p, idx) => (
                    <tr
                      key={p.id}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="py-2.5 px-3 font-bold text-white">
                        <span
                          className={`inline-block w-6 text-center rounded ${
                            idx === 0
                              ? "bg-[#FCC30B]/20 text-[#FCC30B] font-black"
                              : idx === 1
                              ? "bg-slate-300/20 text-slate-300 font-bold"
                              : idx === 2
                              ? "bg-amber-600/20 text-amber-500 font-bold"
                              : "text-[#98A8BD]"
                          }`}
                        >
                          #{idx + 1}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-bold text-white block">
                          {p.fullName}
                        </span>
                        <span className="text-[10px] text-[#98A8BD]">
                          {p.teamName || "Independent"}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#38E58B]">
                        {p.score.total} pts
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#35D5FF]/10 text-[#35D5FF] border border-[#35D5FF]/30">
                          {p.score.rating.split(" ")[0]}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-[#98A8BD]">
                        {Object.keys(p.decisions).length}/4
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Live Decision Monitor Stream (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
            <div className="flex items-center justify-between border-b border-[#35D5FF]/15 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#35D5FF]" />
                <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                  Live Decision Monitor
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#38E58B] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38E58B] animate-pulse" />
                Realtime Stream
              </span>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {submissions.length === 0 ? (
                <div className="text-center py-12 text-xs font-mono text-[#98A8BD]">
                  No decisions submitted yet. Waiting for cadets...
                </div>
              ) : (
                [...submissions].reverse().map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 rounded-xl bg-[#080E1A] border border-[#35D5FF]/15 text-xs font-mono flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">
                          {sub.participantName}
                        </span>
                        <span className="text-[10px] text-[#98A8BD]">
                          (M0{sub.missionNumber})
                        </span>
                      </div>
                      <p className="text-[11px] text-[#35D5FF] truncate max-w-[200px]">
                        {sub.optionTitle}
                      </p>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-lg border font-extrabold text-xs shrink-0 ${
                        sub.isSustainable
                          ? "bg-[#38E58B]/15 border-[#38E58B]/30 text-[#38E58B]"
                          : "bg-[#FF5B65]/15 border-[#FF5B65]/30 text-[#FF5B65]"
                      }`}
                    >
                      Opt {sub.optionKey}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Dialog for Reset */}
      {confirmResetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="glass-panel p-6 rounded-2xl border border-[#FF5B65]/40 max-w-sm w-full space-y-4">
            <div className="flex items-center gap-2 text-[#FF5B65] font-mono font-bold">
              <ShieldAlert className="w-5 h-5" />
              <span>Reset Workshop Session?</span>
            </div>
            <p className="text-xs font-mono text-[#98A8BD] leading-relaxed">
              This will reset mission progression to Mission 1, restore sample participant states, and clear recorded submissions.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="px-3 py-1.5 text-xs font-mono text-[#98A8BD] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  resetWorkshop();
                  setConfirmResetOpen(false);
                }}
                className="px-4 py-2 rounded-xl bg-[#FF5B65] text-white font-mono font-bold text-xs"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
