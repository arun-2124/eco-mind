"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { CityMetricsBar } from "@/components/CityMetricsBar";
import { ScoreRadarChart } from "@/components/ScoreRadarChart";
import { determineCityEnding, getCityCondition } from "@/lib/city-health";
import { getRating, getEarnedBadges } from "@/lib/scoring";
import { MISSIONS } from "@/lib/game-data";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Award,
  RotateCcw,
  Home,
  CheckCircle2,
  XCircle,
  Layers,
  Printer,
  Bot,
  Zap,
  Droplets,
  Recycle,
  Scale,
  ShieldAlert,
  ClipboardList,
} from "lucide-react";

const BADGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Zap,
  Bot: Bot,
  ShieldAlert: ShieldAlert,
  Zap: Zap,
  Droplets: Droplets,
  Recycle: Recycle,
  Scale: Scale,
  Award: Award,
};

export default function GameResultsPage() {
  const router = useRouter();
  const { currentParticipant, isLoaded, session } = useGameState();

  useEffect(() => {
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#10B981", "#FBBF24"],
      });
    } catch {
      // ignore
    }
  }, []);

  if (!isLoaded || !currentParticipant) {
    return (
      <div className="min-h-screen bg-[#070B16] flex items-center justify-center text-white font-mono">
        <div className="text-center space-y-4">
          <p>No participant record found.</p>
          <Link
            href="/join"
            className="px-4 py-2 rounded-lg bg-[#00F0FF] text-[#070B16] font-bold text-xs font-mono"
          >
            Join Mission
          </Link>
        </div>
      </div>
    );
  }

  const ending = determineCityEnding(
    currentParticipant.score.total,
    currentParticipant.score.sustainableCount,
    currentParticipant.cityMetrics
  );
  const ratingInfo = getRating(currentParticipant.score.total, 20);
  const condition = getCityCondition(currentParticipant.cityMetrics);
  const earnedBadges = getEarnedBadges(currentParticipant.decisions, currentParticipant.score.total);
  const unlockedBadgesCount = earnedBadges.filter((b) => b.unlocked).length;

  const handlePrintReport = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-[#F4F7FC] print:bg-white print:text-black">
      <div className="print:hidden">
        <DemoModeBanner />
        <Navbar />
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Summit Evaluation Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/40">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-300">
              Nova City Task Force Final Evaluation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white print:text-black">
            {ending.title}
          </h1>
          <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold print:text-blue-600">
            {ending.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto font-mono print:text-slate-700">
            {ending.description}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 print:hidden">
            <button
              onClick={handlePrintReport}
              className="px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Mission Dossier</span>
            </button>
          </div>
        </div>

        {/* City Visual Scene Artwork */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl bg-[#091122]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ending.image}
            alt={ending.title}
            className="w-full h-auto aspect-[16/9] object-cover"
          />
        </div>

        {/* Action Plan for Nova City's Future */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl border border-white/10 bg-[#091122] font-mono">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold uppercase text-white tracking-wider">
              Strategic Action Plan for Nova City Rebirth
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ending.actionPlan.map((action, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-white/5 bg-[#060B18] text-xs text-white/80 flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  {idx + 1}
                </span>
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Overview Quick Stats (Score, Sustainable count, Unsustainable count, Condition) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 font-mono text-center">
            <span className="text-[10px] text-white/50 uppercase block">Final Score</span>
            <span className="text-3xl font-extrabold text-emerald-400">
              {currentParticipant.score.total}
            </span>
            <span className="text-[10px] text-white/50 block">/ 2000 Base Max</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 font-mono text-center">
            <span className="text-[10px] text-white/50 uppercase block">Sustainable Choices</span>
            <span className="text-3xl font-extrabold text-emerald-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              {currentParticipant.score.sustainableCount}
            </span>
            <span className="text-[10px] text-white/50 block">Across 20 Missions</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-red-500/30 font-mono text-center">
            <span className="text-[10px] text-white/50 uppercase block">Unsustainable Choices</span>
            <span className="text-3xl font-extrabold text-red-400 flex items-center justify-center gap-1">
              <XCircle className="w-5 h-5 text-red-400" />
              {currentParticipant.score.unsustainableCount}
            </span>
            <span className="text-[10px] text-white/50 block">High-Carbon Trade-offs</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 font-mono text-center">
            <span className="text-[10px] text-white/50 uppercase block">City Condition</span>
            <span
              className="text-2xl font-extrabold block mt-0.5"
              style={{ color: condition.color }}
            >
              {condition.status}
            </span>
            <span className="text-[10px] text-white/50 block">Planetary State</span>
          </div>
        </div>

        {/* Badges Showcase (Section 13) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/20 max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
                Specialist Achievement Badges ({unlockedBadgesCount} / 8 Unlocked)
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-400">
              Physical AI &amp; Sustainability Honors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {earnedBadges.map((b) => {
              const IconComp = BADGE_ICONS[b.iconName] || Award;
              return (
                <div
                  key={b.id}
                  className={`p-4 rounded-2xl border font-mono transition-all ${
                    b.unlocked
                      ? "border-emerald-500/50 bg-[#0B1E22] shadow-lg shadow-emerald-950/40"
                      : "border-white/5 bg-[#080E1C]/40 opacity-40 grayscale"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div
                      className={`p-2 rounded-xl ${
                        b.unlocked ? "bg-emerald-500/20 text-emerald-300" : "bg-white/5 text-white/30"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-bold truncate ${
                        b.unlocked ? "text-white" : "text-white/40"
                      }`}
                    >
                      {b.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-snug line-clamp-2">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Score & Dimensions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Radar & Rating (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-cyan-400/20 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Final Sustainability Rating
              </h3>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold uppercase border"
                style={{
                  color: ratingInfo.color,
                  borderColor: `${ratingInfo.color}50`,
                  backgroundColor: `${ratingInfo.color}15`,
                }}
              >
                {ratingInfo.badge}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#091120] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase">
                  Participant Callsign
                </span>
                <p className="text-lg font-bold text-white font-mono">
                  {currentParticipant.fullName}
                </p>
                {currentParticipant.teamName && (
                  <p className="text-xs text-cyan-400 font-mono">
                    Division: {currentParticipant.teamName}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-white/50 uppercase">
                  Evaluated Score
                </span>
                <p className="text-3xl font-extrabold font-mono text-emerald-400">
                  {currentParticipant.score.total}
                  <span className="text-sm font-normal text-white/50"> / 2000</span>
                </p>
              </div>
            </div>

            <ScoreRadarChart score={currentParticipant.score} showRatingCard={false} />

            <div className="p-3.5 rounded-xl bg-[#081520] border border-cyan-400/20 text-xs font-mono text-white/70 leading-relaxed">
              <strong className="text-cyan-400 block mb-1">Evaluator Summary:</strong>
              {ratingInfo.description}
            </div>
          </div>

          {/* City Health & Decisions Log (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <CityMetricsBar metrics={currentParticipant.cityMetrics} />

            {/* Decisions Recap */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-400/20 space-y-4">
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Campaign Decisions Log ({Object.keys(currentParticipant.decisions).length} Completed)
              </h3>

              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {MISSIONS.map((m) => {
                  const choiceKey = currentParticipant.decisions[m.number];
                  if (!choiceKey && m.number > session.currentMission) return null;
                  const opt = m.options.find((o) => o.key === choiceKey);
                  const isSust = opt?.isSustainable;

                  return (
                    <div
                      key={m.id}
                      className="p-3 rounded-xl bg-[#080E1C] border border-white/5 text-xs font-mono flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="text-cyan-400 font-bold">
                          M{String(m.number).padStart(2, "0")}: {m.title}
                        </span>
                        <p className="text-white font-semibold mt-0.5">
                          {opt ? `Option ${opt.key} — ${opt.title}` : "Not submitted"}
                        </p>
                        {opt && (
                          <span
                            className={`text-[10px] font-bold mt-1 inline-block ${
                              isSust ? "text-emerald-400" : "text-red-400"
                            }`}
                          >
                            {isSust ? "✔ Sustainable Choice (+100 pts)" : "✘ Unsustainable Choice (+30 pts)"}
                          </span>
                        )}
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-lg font-black text-xs shrink-0 ${
                          isSust
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-red-500/20 text-red-300 border border-red-500/40"
                        }`}
                      >
                        Opt {opt?.key || "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Inspiring Motto */}
        <div className="p-8 rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-[#0B1E2E] via-[#0D1424] to-[#0A201A] text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
          <p className="font-mono text-sm sm:text-base font-bold text-cyan-300 tracking-wider uppercase">
            &ldquo;THE FUTURE IS NOT ABOUT MAKING AI MORE POWERFUL. IT IS ABOUT MAKING INTELLIGENCE MORE RESPONSIBLE.&rdquo;
          </p>
          <p className="text-xs text-slate-300 max-w-xl mx-auto font-mono">
            Thank you for participating in the Robotics and Automation Club Sustainable Intelligence Challenge. Continue championing Physical AI, Edge AI, and the United Nations Sustainable Development Goals in all your future engineering work!
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 print:hidden">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-xl border border-cyan-400/30 text-white font-mono font-bold text-xs hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>RETURN TO HOME</span>
            </Link>
            <Link
              href="/join"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-mono font-bold text-xs tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>COMMENCE NEW SESSION</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
