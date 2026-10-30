"use client";

import React, { useEffect } from "react";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { SharedCityHUD } from "@/components/SharedCityHUD";
import confetti from "canvas-confetti";
import {
  Award,
  Download,
  Sparkles,
  Trophy,
  Users,
  Layers,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function PresenterResultsPage() {
  const { participants, session, sharedCityMetrics, resetWorkshop } = useGameState();

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#35D5FF", "#38E58B", "#FCC30B"],
      });
    } catch {
      // ignore
    }
  }, []);

  const sorted = [...participants].sort(
    (a, b) => b.score.total - a.score.total
  );

  const winner = sorted[0];
  const runnerUp = sorted[1];
  const thirdPlace = sorted[2];

  const handleExportCSV = () => {
    if (!participants.length) return;

    const missionHeaders = Array.from({ length: 20 }, (_, i) => `M${i + 1} Choice`);
    const headers = [
      "Participant ID",
      "Full Name",
      "Team Name",
      "Total Score",
      "Rating",
      "Environmental Score",
      "Energy Score",
      "Social Score",
      "Economic Score",
      ...missionHeaders,
      "Joined At",
    ];

    const rows = sorted.map((p) => {
      const missionChoices = Array.from({ length: 20 }, (_, i) => p.decisions[i + 1] || "");
      return [
        p.id,
        `"${p.fullName.replace(/"/g, '""')}"`,
        `"${(p.teamName || "Independent").replace(/"/g, '""')}"`,
        p.score.total,
        `"${p.score.rating}"`,
        p.score.environmental,
        p.score.energy,
        p.score.social,
        p.score.economic,
        ...missionChoices,
        p.joinedAt,
      ];
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `ECO_MIND_Workshop_Results_${session.pin}_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />
      <PresenterNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#35D5FF]/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#FCC30B]/40 bg-[#29200A] text-[#FCC30B] font-mono text-xs font-bold uppercase mb-2">
              <Trophy className="w-3.5 h-3.5" />
              Final Workshop Ceremony
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Nova City Task Force Honors
            </h1>
            <p className="text-xs font-mono text-[#98A8BD] mt-1">
              Top sustainability visionary leaders across {participants.length} cadets
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>EXPORT ROSTER CSV</span>
            </button>
          </div>
        </div>

        {/* Podium Section (Top 3) */}
        {sorted.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto pt-6">
            {/* 2nd Place */}
            {runnerUp && (
              <div className="glass-panel p-6 rounded-2xl border border-slate-300/30 text-center space-y-3 order-2 md:order-1">
                <div className="w-12 h-12 rounded-full bg-slate-400/20 text-slate-300 font-extrabold font-mono text-lg flex items-center justify-center mx-auto border border-slate-400/40">
                  2
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {runnerUp.fullName}
                  </h3>
                  <p className="text-xs font-mono text-[#35D5FF]">
                    {runnerUp.teamName || "Independent"}
                  </p>
                </div>
                <div className="font-mono font-black text-2xl text-white">
                  {runnerUp.score.total} <span className="text-xs text-[#98A8BD]">pts</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#35D5FF]/15 text-[#35D5FF] border border-[#35D5FF]/30">
                  {runnerUp.score.rating}
                </span>
              </div>
            )}

            {/* 1st Place (Champion) */}
            {winner && (
              <div className="glass-panel p-8 rounded-3xl border-2 border-[#FCC30B]/50 bg-[#162118]/90 text-center space-y-4 order-1 md:order-2 shadow-2xl relative -translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#FCC30B] text-[#070B16] font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Trophy className="w-3.5 h-3.5" /> TASK FORCE CHAMPION
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FCC30B]/20 text-[#FCC30B] font-extrabold font-mono text-2xl flex items-center justify-center mx-auto border-2 border-[#FCC30B]">
                  1
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {winner.fullName}
                  </h3>
                  <p className="text-xs font-mono text-[#38E58B]">
                    {winner.teamName || "Independent"}
                  </p>
                </div>
                <div className="font-mono font-black text-3xl text-[#38E58B]">
                  {winner.score.total} <span className="text-sm text-[#98A8BD]">pts</span>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#38E58B]/20 text-[#38E58B] border border-[#38E58B]/40">
                  {winner.score.rating}
                </span>
              </div>
            )}

            {/* 3rd Place */}
            {thirdPlace && (
              <div className="glass-panel p-6 rounded-2xl border border-amber-600/30 text-center space-y-3 order-3">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 text-amber-500 font-extrabold font-mono text-lg flex items-center justify-center mx-auto border border-amber-600/40">
                  3
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {thirdPlace.fullName}
                  </h3>
                  <p className="text-xs font-mono text-[#35D5FF]">
                    {thirdPlace.teamName || "Independent"}
                  </p>
                </div>
                <div className="font-mono font-black text-2xl text-white">
                  {thirdPlace.score.total} <span className="text-xs text-[#98A8BD]">pts</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F6B94A]/15 text-[#F6B94A] border border-[#F6B94A]/30">
                  {thirdPlace.score.rating}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Full Leaderboard Table */}
        <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
          <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FCC30B]" />
            Full Final Standings ({participants.length} Cadets)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-[#0A1220] text-[#98A8BD] border-b border-white/5 uppercase">
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Name</th>
                  <th className="py-2.5 px-3">Team</th>
                  <th className="py-2.5 px-3">Total Score</th>
                  <th className="py-2.5 px-3">Rating</th>
                  <th className="py-2.5 px-3 text-center">M1</th>
                  <th className="py-2.5 px-3 text-center">M2</th>
                  <th className="py-2.5 px-3 text-center">M3</th>
                  <th className="py-2.5 px-3 text-center">M4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sorted.map((p, idx) => (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-white">#{idx + 1}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{p.fullName}</td>
                    <td className="py-2.5 px-3 text-[#98A8BD]">{p.teamName || "Independent"}</td>
                    <td className="py-2.5 px-3 font-bold text-[#38E58B]">{p.score.total} pts</td>
                    <td className="py-2.5 px-3 text-[#35D5FF]">{p.score.rating}</td>
                    <td className="py-2.5 px-3 text-center font-bold">{p.decisions[1] || "—"}</td>
                    <td className="py-2.5 px-3 text-center font-bold">{p.decisions[2] || "—"}</td>
                    <td className="py-2.5 px-3 text-center font-bold">{p.decisions[3] || "—"}</td>
                    <td className="py-2.5 px-3 text-center font-bold">{p.decisions[4] || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
