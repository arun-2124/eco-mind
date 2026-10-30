"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { PresenterDecisionMonitor } from "@/components/PresenterDecisionMonitor";
import { SharedCityHUD } from "@/components/SharedCityHUD";
import { QRCodeSVG } from "qrcode.react";
import { sound } from "@/lib/audio";
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
  Tv,
  QrCode,
  X,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";

export default function PresenterDashboardPage() {
  const {
    session,
    participants,
    submissions,
    sharedCityMetrics,
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
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Computed statistics
  const totalParticipants = participants.length;
  const activeParticipants = participants.filter((p) => p.connectionStatus === "online").length;

  const currentMissionSubmittedCount = participants.filter(
    (p) => !!p.decisions[session.currentMission]
  ).length;

  const currentMissionPendingCount = Math.max(0, totalParticipants - currentMissionSubmittedCount);

  // Count Option A vs Option B for current mission
  const optionACount = participants.filter(
    (p) => p.decisions[session.currentMission] === "A"
  ).length;

  const optionBCount = participants.filter(
    (p) => p.decisions[session.currentMission] === "B"
  ).length;

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

  // Team aggregated scores
  const teamScores = participants.reduce((acc, p) => {
    const t = p.teamName || "Independent";
    if (!acc[t]) acc[t] = { name: t, total: 0, count: 0 };
    acc[t].total += p.score.total;
    acc[t].count += 1;
    return acc;
  }, {} as Record<string, { name: string; total: number; count: number }>);

  const sortedTeamScores = Object.values(teamScores).sort((a, b) => b.total - a.total);

  const joinUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/join?pin=${session.pin}`
      : `http://localhost:3000/join?pin=${session.pin}`;

  return (
    <div className={`min-h-screen flex flex-col bg-[#050811] text-[#F4F7FC] ${projectorMode ? "text-base" : ""}`}>
      {!projectorMode && <DemoModeBanner />}
      {!projectorMode && <Navbar />}
      {!projectorMode && <PresenterNav />}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Session Status Ribbon */}
        <div className="glass-panel p-6 rounded-2xl border-2 border-[#35D5FF]/30 bg-[#091122]/95 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
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
                PRESENTER COMMAND CENTER • SESSION PIN:{" "}
                <strong className="text-white underline">{session.pin}</strong>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {session.title}
            </h1>
            <p className="text-xs font-mono text-[#98A8BD] mt-0.5">
              Mission {String(session.currentMission).padStart(2, "0")} of 20: {activeMission.title} ({activeMission.category})
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Projector QR Code Modal Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                setQrModalOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#0F223D] text-[#35D5FF] border border-[#35D5FF]/40 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#35D5FF]/20 transition-all shadow-md"
              title="Project Join QR Code"
            >
              <QrCode className="w-4 h-4" />
              <span>Project QR Code</span>
            </button>

            {/* Projector Mode Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setProjectorMode(!projectorMode);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-colors ${
                projectorMode
                  ? "bg-[#38E58B] text-[#050811] border-[#38E58B]"
                  : "bg-[#111C30] text-[#35D5FF] border-[#35D5FF]/30 hover:bg-[#35D5FF]/10"
              }`}
              title="Toggle Projector Mode"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>{projectorMode ? "Exit Projector" : "Projector View"}</span>
            </button>

            {session.status === "registration" && (
              <button
                onClick={() => {
                  sound.playConfirm();
                  startWorkshop();
                }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#050811] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:scale-105 flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>START CAMPAIGN</span>
              </button>
            )}

            {session.status !== "registration" && (
              <>
                <button
                  onClick={() => {
                    sound.playClick();
                    togglePause(session.status !== "paused");
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-colors ${
                    session.status === "paused"
                      ? "bg-[#FCC30B] text-[#050811] border-[#FCC30B]"
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
                  onClick={() => {
                    sound.playSustainableSuccess();
                    revealConsequences();
                  }}
                  disabled={session.consequencesRevealed}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                    session.consequencesRevealed
                      ? "bg-[#38E58B]/20 text-[#38E58B] border-[#38E58B]/40 cursor-default"
                      : "bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#050811] border-transparent shadow-lg shadow-[#35D5FF]/25 hover:scale-105"
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
                  onClick={() => {
                    sound.playConfirm();
                    advanceMission();
                  }}
                  disabled={session.currentMission >= 20 && session.consequencesRevealed}
                  className="px-3.5 py-2 rounded-xl bg-[#111C30] hover:bg-[#182640] text-[#35D5FF] border border-[#35D5FF]/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors disabled:opacity-40"
                >
                  <span>
                    {session.currentMission >= 20 ? "FINISH CAMPAIGN" : "ADVANCE MISSION"}
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

        {/* Live Question & Decision Breakdown Panel */}
        <PresenterDecisionMonitor
          mission={activeMission}
          countA={optionACount}
          countB={optionBCount}
          totalSubmissions={currentMissionSubmittedCount}
          totalParticipants={totalParticipants}
          revealed={session.consequencesRevealed}
          projectorMode={projectorMode}
        />

        {/* Room Collective Shared Simulation Telemetry */}
        <SharedCityHUD metrics={sharedCityMetrics} />

        {/* 20-Mission Quick-Jump Rail for Presenter Pacing */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 bg-[#070D1B] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#35D5FF] font-bold uppercase">
              Mission Fast-Jumper (1 to 20):
            </span>
            <span className="text-[#98A8BD]">
              Jump to any scenario during workshop
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {MISSIONS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  startMission(m.number);
                }}
                className={`shrink-0 w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                  m.number === session.currentMission
                    ? "bg-[#35D5FF] text-[#050811] ring-2 ring-[#35D5FF]"
                    : m.number < session.currentMission
                    ? "bg-[#38E58B]/20 text-[#38E58B] border border-[#38E58B]/40"
                    : "bg-[#0F172A] text-[#98A8BD] hover:text-white border border-white/5"
                }`}
              >
                {String(m.number).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Stat Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15 bg-[#091122]">
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

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15 bg-[#091122]">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              M{String(session.currentMission).padStart(2, "0")} Submissions
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

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15 bg-[#091122]">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              Average Score
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#38E58B]">
                {avgScore}
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Cohort Mean</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/15 bg-[#091122]">
            <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider block">
              Peak Cadet Score
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-white">
                {highestScore}
              </span>
              <span className="text-xs font-mono text-[#FCC30B] flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> High Score
              </span>
            </div>
          </div>
        </div>

        {/* Lower Grid: Live Leaderboard, Team Standings, Realtime Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Individual & Team Leaderboard (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 bg-[#091122] space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FCC30B]" />
                <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                  Top Cadet Standings
                </h3>
              </div>
              <span className="text-xs font-mono text-[#98A8BD]">
                Live Workshop Ranking
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-[#98A8BD]">
                    <th className="py-2 px-3">Rank</th>
                    <th className="py-2 px-3">Cadet</th>
                    <th className="py-2 px-3">Team</th>
                    <th className="py-2 px-3">Score</th>
                    <th className="py-2 px-3">Answered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {sortedLeaderboard.slice(0, 8).map((p, idx) => (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors">
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
                      <td className="py-2.5 px-3 font-bold text-white">
                        {p.fullName}
                      </td>
                      <td className="py-2.5 px-3 text-[#98A8BD]">
                        {p.teamName || "Independent"}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#38E58B]">
                        {p.score.total} pts
                      </td>
                      <td className="py-2.5 px-3 text-[#98A8BD]">
                        {Object.keys(p.decisions).length}/20
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Team Standings Summary */}
            <div className="pt-3 border-t border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase text-[#35D5FF] mb-2">
                Team Standings
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sortedTeamScores.map((t, idx) => (
                  <div
                    key={t.name}
                    className="p-2.5 rounded-xl bg-[#070D1B] border border-white/5 font-mono text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between text-[#98A8BD]">
                      <span className="font-bold text-white truncate">{t.name}</span>
                      <span>#{idx + 1}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#98A8BD]">{t.count} cadets</span>
                      <span className="font-black text-[#38E58B]">{t.total} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Decision Monitor Feed (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 bg-[#091122] space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#35D5FF]" />
                <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                  Live Decision Stream
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
                [...submissions].reverse().slice(0, 15).map((sub) => (
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
                          (M{String(sub.missionNumber).padStart(2, "0")})
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

      {/* Projector QR Code Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="glass-panel p-8 rounded-3xl border-2 border-[#35D5FF] max-w-md w-full text-center space-y-6 bg-[#070D1B] shadow-2xl relative">
            <button
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 text-[#98A8BD] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono font-bold text-[#35D5FF] uppercase tracking-wider block">
                PARTICIPANT MULTIPLAYER JOIN
              </span>
              <h2 className="text-2xl font-display font-extrabold text-white mt-1">
                Scan with Phone to Join
              </h2>
            </div>

            {/* High-Contrast QR Code */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl border-4 border-[#35D5FF]">
              <QRCodeSVG value={joinUrl} size={220} level="M" />
            </div>

            <div className="space-y-1 font-mono">
              <span className="text-xs text-[#98A8BD]">SESSION PIN:</span>
              <p className="text-3xl font-black text-[#FCC30B] tracking-widest">
                {session.pin}
              </p>
              <p className="text-xs text-[#35D5FF] pt-2 break-all">{joinUrl}</p>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog for Reset */}
      {confirmResetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="glass-panel p-6 rounded-2xl border border-[#FF5B65]/40 max-w-sm w-full space-y-4 bg-[#091122]">
            <div className="flex items-center gap-2 text-[#FF5B65] font-mono font-bold">
              <ShieldAlert className="w-5 h-5" />
              <span>Reset Workshop Campaign?</span>
            </div>
            <p className="text-xs font-mono text-[#98A8BD] leading-relaxed">
              This will reset mission progression to Mission 1, restore initial participant states, and clear recorded submissions.
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
                  sound.playConfirm();
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
