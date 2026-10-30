"use client";

import React, { useState, useMemo } from "react";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { Participant } from "@/types/game";
import {
  Users,
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  XCircle,
  Eye,
  Award,
  ChevronRight,
} from "lucide-react";

export default function PresenterParticipantsPage() {
  const { participants } = useGameState();
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"score" | "name" | "missions">("score");
  const [inspectParticipant, setInspectParticipant] = useState<Participant | null>(null);

  // Extract distinct teams
  const teams = useMemo(() => {
    const set = new Set<string>();
    participants.forEach((p) => {
      if (p.teamName) set.add(p.teamName);
    });
    return Array.from(set);
  }, [participants]);

  // Filtered & sorted list
  const filteredParticipants = useMemo(() => {
    let list = participants.filter((p) => {
      const matchSearch =
        p.fullName.toLowerCase().includes(search.toLowerCase()) ||
        (p.teamName && p.teamName.toLowerCase().includes(search.toLowerCase()));

      const matchTeam =
        selectedTeam === "ALL" || p.teamName === selectedTeam;

      return matchSearch && matchTeam;
    });

    if (sortBy === "score") {
      list.sort((a, b) => b.score.total - a.score.total);
    } else if (sortBy === "name") {
      list.sort((a, b) => a.fullName.localeCompare(b.fullName));
    } else if (sortBy === "missions") {
      list.sort(
        (a, b) =>
          Object.keys(b.decisions).length - Object.keys(a.decisions).length
      );
    }

    return list;
  }, [participants, search, selectedTeam, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />
      <PresenterNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-extrabold text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-[#35D5FF]" />
              Participant Management & Roster
            </h1>
            <p className="text-xs font-mono text-[#98A8BD] mt-1">
              Live tracking of all {participants.length} registered task force cadets
            </p>
          </div>

          {/* Search & Team Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#98A8BD] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cadet or team..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-3 py-1.5 rounded-xl bg-[#0D1424] border border-[#35D5FF]/20 text-xs font-mono text-white placeholder-[#98A8BD]/50 focus:outline-none focus:border-[#35D5FF]"
              />
            </div>

            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-[#0D1424] border border-[#35D5FF]/20 text-xs font-mono text-white focus:outline-none"
            >
              <option value="ALL">All Teams</option>
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "score" | "name" | "missions")}
              className="px-3 py-1.5 rounded-xl bg-[#0D1424] border border-[#35D5FF]/20 text-xs font-mono text-white focus:outline-none"
            >
              <option value="score">Sort by Score</option>
              <option value="name">Sort by Name</option>
              <option value="missions">Sort by Missions</option>
            </select>
          </div>
        </div>

        {/* Table Card */}
        <div className="glass-panel rounded-2xl border border-[#35D5FF]/20 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-[#0A1220] text-[#98A8BD] border-b border-white/5 uppercase">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Cadet Name</th>
                  <th className="py-3 px-4">Team</th>
                  <th className="py-3 px-4">Total Score</th>
                  <th className="py-3 px-4">Env / Energy / Soc / Econ</th>
                  <th className="py-3 px-4 text-center">Campaign Progress</th>
                  <th className="py-3 px-4 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredParticipants.map((p, idx) => (
                  <tr
                    key={p.id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-3 px-4 font-bold text-white">
                      #{idx + 1}
                    </td>
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          p.connectionStatus === "online"
                            ? "bg-[#38E58B]"
                            : "bg-[#98A8BD]"
                        }`}
                      />
                      <span>{p.fullName}</span>
                    </td>
                    <td className="py-3 px-4 text-[#98A8BD]">
                      {p.teamName || "Independent"}
                    </td>
                    <td className="py-3 px-4 font-bold text-[#38E58B]">
                      {p.score.total} pts
                    </td>
                    <td className="py-3 px-4 text-[#98A8BD]">
                      <span className="text-[#38E58B]">{p.score.environmental}</span> /{" "}
                      <span className="text-[#FCC30B]">{p.score.energy}</span> /{" "}
                      <span className="text-[#35D5FF]">{p.score.social}</span> /{" "}
                      <span className="text-[#F6B94A]">{p.score.economic}</span>
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-white">
                      <span className="text-[#35D5FF]">
                        {Object.keys(p.decisions).length}
                      </span>
                      <span className="text-[#98A8BD] font-normal text-[10px]"> / 20</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setInspectParticipant(p)}
                        className="px-2.5 py-1 rounded-lg bg-[#35D5FF]/10 text-[#35D5FF] hover:bg-[#35D5FF]/20 font-bold transition-colors inline-flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" /> Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Inspect Modal */}
      {inspectParticipant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/30 max-w-lg w-full space-y-4">
            <div className="flex items-center justify-between border-b border-[#35D5FF]/20 pb-3">
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {inspectParticipant.fullName}
                </h3>
                <p className="text-xs font-mono text-[#35D5FF]">
                  {inspectParticipant.teamName || "Independent"}
                </p>
              </div>
              <button
                onClick={() => setInspectParticipant(null)}
                className="text-xs text-[#98A8BD] hover:text-white"
              >
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#080E1C] border border-white/5">
                <span className="text-[#98A8BD] block text-[10px]">TOTAL SCORE</span>
                <span className="text-2xl font-black text-[#38E58B]">
                  {inspectParticipant.score.total} pts
                </span>
                <span className="block text-[11px] text-[#35D5FF] mt-0.5">
                  {inspectParticipant.score.rating}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#080E1C] border border-white/5">
                <span className="text-[#98A8BD] block text-[10px]">CITY RESILIENCE</span>
                <span className="text-2xl font-black text-white">
                  {inspectParticipant.cityMetrics.resilienceIndex}%
                </span>
                <span className="block text-[11px] text-[#FCC30B] mt-0.5">
                  Carbon: {inspectParticipant.cityMetrics.carbonIndex} idx
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <span className="text-[#98A8BD] font-bold uppercase text-[10px] block">
                Recorded Mission Choices:
              </span>
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="flex items-center justify-between p-2 rounded-lg bg-[#080E1A] border border-white/5"
                >
                  <span className="text-white">Mission 0{num}</span>
                  <span className="font-bold text-[#35D5FF]">
                    {inspectParticipant.decisions[num]
                      ? `Option ${inspectParticipant.decisions[num]}`
                      : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
