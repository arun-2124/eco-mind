"use client";

import React from "react";
import { TeamScore } from "@/types/game";
import { Shield, Sparkles, Globe, Flame, Trophy, Award, Users } from "lucide-react";

interface TeamLeaderboardProps {
  teams: TeamScore[];
  highlightTeam?: string;
  className?: string;
}

const TEAM_THEMES: Record<string, { icon: React.ComponentType<{ className?: string }>; border: string; text: string; bg: string }> = {
  "TEAM TITAN": { icon: Shield, border: "border-amber-500/40", text: "text-amber-400", bg: "bg-amber-500/10" },
  "TEAM NOVA": { icon: Sparkles, border: "border-cyan-400/40", text: "text-cyan-400", bg: "bg-cyan-500/10" },
  "TEAM ORBIT": { icon: Globe, border: "border-blue-400/40", text: "text-blue-400", bg: "bg-blue-500/10" },
  "TEAM PHOENIX": { icon: Flame, border: "border-orange-500/40", text: "text-orange-400", bg: "bg-orange-500/10" },
};

export function TeamLeaderboard({ teams, highlightTeam, className = "" }: TeamLeaderboardProps) {
  // Sort teams by average score descending
  const sortedTeams = [...teams].sort((a, b) => b.averageScore - a.averageScore);

  if (sortedTeams.length === 0) {
    return (
      <div className={`glass-panel p-6 rounded-2xl border border-white/10 text-center ${className}`}>
        <Trophy className="w-8 h-8 text-white/30 mx-auto mb-2" />
        <h3 className="text-sm font-mono text-white/60 uppercase tracking-wider">Team Battle Mode Active</h3>
        <p className="text-xs text-white/40 mt-1">
          No teams registered yet. Participants joining with TEAM TITAN, TEAM NOVA, TEAM ORBIT, or TEAM PHOENIX will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className={`glass-panel p-6 rounded-2xl border border-[#00F0FF]/20 shadow-xl ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-display font-extrabold text-white tracking-wide uppercase">
            Team Battle Standings
          </h2>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
          {sortedTeams.length} Active {sortedTeams.length === 1 ? "Division" : "Divisions"}
        </span>
      </div>

      {/* Team Cards */}
      <div className="space-y-3">
        {sortedTeams.map((team, idx) => {
          const rank = idx + 1;
          const tName = team.teamName || team.name;
          const theme = TEAM_THEMES[tName.toUpperCase()] || {
            icon: Award,
            border: "border-emerald-500/40",
            text: "text-emerald-400",
            bg: "bg-emerald-500/10",
          };
          const IconComponent = theme.icon;
          const isHighlighted = highlightTeam && highlightTeam.toUpperCase() === tName.toUpperCase();

          return (
            <div
              key={tName}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isHighlighted
                  ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-900/30 scale-[1.01]"
                  : `${theme.border} bg-[#0A1224]/80 hover:bg-[#0E1B33]`
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                {/* Left: Rank & Team Identity */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      rank === 1
                        ? "bg-amber-400 text-black shadow-md shadow-amber-500/40"
                        : rank === 2
                        ? "bg-slate-300 text-black"
                        : rank === 3
                        ? "bg-amber-700 text-white"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    #{rank}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${theme.bg}`}>
                      <IconComponent className={`w-4 h-4 ${theme.text}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-white tracking-wide">
                          {tName}
                        </span>
                        {isHighlighted && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                            YOUR TEAM
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                        <Users className="w-3 h-3 text-white/40" />
                        <span>{team.memberCount} {team.memberCount === 1 ? "agent" : "agents"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Scores & Sustainability Percentage */}
                <div className="text-right">
                  <div className="font-mono font-extrabold text-base text-white">
                    {Math.round(team.averageScore)} <span className="text-[10px] text-white/50">AVG</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400">
                    {Math.round(team.sustainablePct)}% <span className="text-[10px] text-emerald-500/70">ECO</span>
                  </div>
                </div>
              </div>

              {/* Sustainability Bar */}
              <div className="mt-3 pt-2.5 border-t border-white/5">
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                  <span>Collective Eco Alignment</span>
                  <span className="text-white/60">{team.totalScore} Total PTS</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${Math.max(5, Math.min(100, team.sustainablePct))}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
