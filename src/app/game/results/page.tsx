"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { CityVisualizer } from "@/components/CityVisualizer";
import { CityMetricsBar } from "@/components/CityMetricsBar";
import { ScoreRadarChart } from "@/components/ScoreRadarChart";
import { determineCityEnding, getCityCondition } from "@/lib/city-health";
import { getRating } from "@/lib/scoring";
import { MISSIONS } from "@/lib/game-data";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Award,
  RotateCcw,
  Home,
  CheckCircle2,
  XCircle,
  TrendingUp,
  AlertTriangle,
  Layers,
  ArrowRight,
  ShieldCheck,
  Bot,
} from "lucide-react";

export default function GameResultsPage() {
  const router = useRouter();
  const { currentParticipant, isLoaded, session } = useGameState();

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#35D5FF", "#38E58B", "#FCC30B"],
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
            className="px-4 py-2 rounded-lg bg-[#35D5FF] text-[#070B16] font-bold text-xs font-mono"
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
  const ratingInfo = getRating(currentParticipant.score.total);
  const condition = getCityCondition(currentParticipant.cityMetrics);

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Summit Evaluation Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#38E58B]/40 bg-[#0A201A]">
            <Sparkles className="w-3.5 h-3.5 text-[#38E58B]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#38E58B]">
              Nova City Task Force Final Evaluation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            {ending.title}
          </h1>
          <p className="text-sm sm:text-base font-mono text-[#35D5FF] font-semibold">
            {ending.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#98A8BD] leading-relaxed max-w-2xl mx-auto font-mono">
            {ending.description}
          </p>
        </div>

        {/* City Visual Scene Artwork */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#35D5FF]/30 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ending.image}
            alt={ending.title}
            className="w-full h-auto aspect-[16/9] object-cover"
          />
        </div>

        {/* 4 Overview Quick Stats (Score, Sustainable count, Unsustainable count, Condition) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-5 rounded-2xl border border-[#38E58B]/30 font-mono text-center">
            <span className="text-[10px] text-[#98A8BD] uppercase block">Final Score</span>
            <span className="text-3xl font-extrabold text-[#38E58B]">
              {currentParticipant.score.total}
            </span>
            <span className="text-[10px] text-[#98A8BD] block">/1000 Points</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#38E58B]/30 font-mono text-center">
            <span className="text-[10px] text-[#98A8BD] uppercase block">Sustainable Choices</span>
            <span className="text-3xl font-extrabold text-[#38E58B] flex items-center justify-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-[#38E58B]" />
              {currentParticipant.score.sustainableCount}
            </span>
            <span className="text-[10px] text-[#98A8BD] block">Across 4 Missions</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#FF5B65]/30 font-mono text-center">
            <span className="text-[10px] text-[#98A8BD] uppercase block">Unsustainable Choices</span>
            <span className="text-3xl font-extrabold text-[#FF5B65] flex items-center justify-center gap-1">
              <XCircle className="w-5 h-5 text-[#FF5B65]" />
              {currentParticipant.score.unsustainableCount}
            </span>
            <span className="text-[10px] text-[#98A8BD] block">Trade-offs Made</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/30 font-mono text-center">
            <span className="text-[10px] text-[#98A8BD] uppercase block">City Condition</span>
            <span
              className="text-2xl font-extrabold block mt-0.5"
              style={{ color: condition.color }}
            >
              {condition.status}
            </span>
            <span className="text-[10px] text-[#98A8BD] block">Environmental State</span>
          </div>
        </div>

        {/* Score & Dimensions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Radar & Rating (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-6">
            <div className="flex items-center justify-between border-b border-[#35D5FF]/15 pb-3">
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FCC30B]" />
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

            <div className="p-4 rounded-xl bg-[#091120] border border-[#35D5FF]/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#98A8BD] uppercase">
                  Participant Callsign
                </span>
                <p className="text-lg font-bold text-white font-mono">
                  {currentParticipant.fullName}
                </p>
                {currentParticipant.teamName && (
                  <p className="text-xs text-[#35D5FF] font-mono">
                    Team: {currentParticipant.teamName}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[#98A8BD] uppercase">
                  Evaluated Score
                </span>
                <p className="text-3xl font-extrabold font-mono text-[#38E58B]">
                  {currentParticipant.score.total}
                  <span className="text-sm font-normal text-[#98A8BD]">/1000</span>
                </p>
              </div>
            </div>

            <ScoreRadarChart score={currentParticipant.score} showRatingCard={false} />

            <div className="p-3.5 rounded-xl bg-[#081520] border border-[#35D5FF]/20 text-xs font-mono text-[#98A8BD] leading-relaxed">
              <strong className="text-[#35D5FF] block mb-1">Evaluator Summary:</strong>
              {ratingInfo.description}
            </div>
          </div>

          {/* City Health & Decisions Log (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <CityMetricsBar metrics={currentParticipant.cityMetrics} />

            {/* Decisions Recap */}
            <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#35D5FF]" />
                Campaign Decisions Log ({Object.keys(currentParticipant.decisions).length} Completed)
              </h3>

              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {MISSIONS.map((m) => {
                  const choiceKey = currentParticipant.decisions[m.number];
                  if (!choiceKey && m.number > session.currentMission) return null;
                  const opt = m.options.find((o) => o.key === choiceKey);
                  const isSust = opt?.isSustainable;

                  return (
                    <div
                      key={m.id}
                      className="p-3.5 rounded-xl bg-[#080E1C] border border-[#35D5FF]/15 text-xs font-mono flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="text-[#35D5FF] font-bold">
                          M{String(m.number).padStart(2, "0")}: {m.title}
                        </span>
                        <p className="text-white font-semibold mt-0.5">
                          {opt ? `Option ${opt.key} — ${opt.title}` : "Not submitted"}
                        </p>
                        {opt && (
                          <span
                            className={`text-[10px] font-bold mt-1 inline-block ${
                              isSust ? "text-[#38E58B]" : "text-[#FF5B65]"
                            }`}
                          >
                            {isSust ? "✔ Sustainable Choice (+250 pts)" : "✘ Unsustainable Choice (+50 pts)"}
                          </span>
                        )}
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-lg font-black text-xs shrink-0 ${
                          isSust
                            ? "bg-[#38E58B]/20 text-[#38E58B] border border-[#38E58B]/40"
                            : "bg-[#FF5B65]/20 text-[#FF5B65] border border-[#FF5B65]/40"
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

        {/* Closing Inspiring Motto (Part 12) */}
        <div className="p-8 rounded-2xl border border-[#35D5FF]/30 bg-gradient-to-r from-[#0B1E2E] via-[#0D1424] to-[#0A201A] text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
          <p className="font-mono text-sm sm:text-base font-bold text-[#35D5FF] tracking-wider uppercase">
            &ldquo;INTELLIGENCE IS NOT JUST ABOUT WHAT MACHINES CAN DO. IT IS ABOUT WHAT THEY SHOULD DO RESPONSIBLY.&rdquo;
          </p>
          <p className="text-xs text-[#98A8BD] max-w-xl mx-auto font-mono">
            Thank you for participating in the Robotics and Automation Club Sustainable Intelligence Challenge. Continue championing physical AI, edge thrift, and responsible engineering in all your projects.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-xl border border-[#35D5FF]/30 text-white font-mono font-bold text-xs hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>RETURN TO HOME</span>
            </Link>
            <Link
              href="/join"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5"
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
