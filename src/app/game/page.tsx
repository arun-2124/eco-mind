"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { CityVisualizer } from "@/components/CityVisualizer";
import { CityMetricsBar } from "@/components/CityMetricsBar";
import { SDGBadge } from "@/components/SDGBadge";
import { ScoreRadarChart } from "@/components/ScoreRadarChart";
import { MISSIONS } from "@/lib/game-data";
import { DecisionOption } from "@/types/game";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Layers,
  ChevronRight,
  Award,
  BookOpen,
  Volume2,
  VolumeX,
  Clock,
  Shield,
  Activity,
} from "lucide-react";

export default function GamePage() {
  const router = useRouter();
  const {
    isLoaded,
    session,
    currentParticipant,
    activeMission,
    submitDecision,
  } = useGameState();

  const [prologueSeen, setPrologueSeen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<DecisionOption | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Check if participant is registered
  useEffect(() => {
    if (isLoaded && !currentParticipant) {
      router.push("/join");
    }
  }, [isLoaded, currentParticipant, router]);

  // If workshop is completed, allow navigation to results
  useEffect(() => {
    if (session.status === "completed" || (session.currentMission >= 4 && session.consequencesRevealed)) {
      // Participant can visit results
    }
  }, [session]);

  if (!isLoaded || !currentParticipant) {
    return (
      <div className="min-h-screen bg-[#070B16] flex items-center justify-center text-white font-mono">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#35D5FF] animate-ping" />
          <span>Synchronizing Neural Uplink to Nova City...</span>
        </div>
      </div>
    );
  }

  // Submitted choice for active mission
  const currentChoiceKey = currentParticipant.decisions[session.currentMission];
  const hasSubmitted = !!currentChoiceKey;
  const currentSubmittedOption = activeMission.options.find(
    (o) => o.key === currentChoiceKey
  );

  const handleSubmit = (option: DecisionOption) => {
    if (hasSubmitted && !session.allowResubmission) return;
    setSubmitting(true);
    setErrorMsg(null);

    const res = submitDecision(session.currentMission, option.key);
    if (!res.success) {
      setErrorMsg(res.error || "Submission failed");
    } else {
      setSelectedOption(option);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      {/* Cinematic Story Prologue Modal (Shown before mission 1 unless skipped) */}
      <AnimatePresence>
        {!prologueSeen && session.currentMission === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          >
            <div className="glass-panel max-w-2xl w-full rounded-2xl border border-[#35D5FF]/30 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
              {/* Scanline backdrop */}
              <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#35D5FF]/20 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#35D5FF] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#35D5FF] font-bold">
                    AETHER CENTRAL AI — SYSTEM TRANSMISSION
                  </span>
                </div>
                <button
                  onClick={() => setPrologueSeen(true)}
                  className="text-xs font-mono text-[#98A8BD] hover:text-white transition-colors"
                >
                  Skip Briefing [ESC] ✕
                </button>
              </div>

              {/* City Hologram Scene */}
              <div className="rounded-xl overflow-hidden border border-[#35D5FF]/20">
                <CityVisualizer level={2} interactive={false} />
              </div>

              {/* Narration Script */}
              <div className="space-y-3 font-mono text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
                <p className="text-[#35D5FF] font-bold">
                  &ldquo;Welcome to NOVA CITY, the most intelligent city ever created.&rdquo;
                </p>
                <p className="text-[#98A8BD]">
                  Our systems were engineered to eliminate disease, optimize energy, and guide automated transit. But intelligence without responsibility has engineered a silent crisis.
                </p>
                <p className="text-[#98A8BD]">
                  Electricity demand has doubled. Data centers evaporate millions of liters of potable water for cooling. Tens of thousands of obsolete robotic chassis choke peripheral landfills.
                </p>
                <p className="text-[#38E58B] font-semibold">
                  You have been inducted into the Robotics & AI Sustainability Task Force. Your technological decisions will dictate whether Nova City achieves ecological equilibrium or collapses under its own silicon weight.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#35D5FF]/20">
                <span className="text-xs font-mono text-[#98A8BD]">
                  Cadet: <strong className="text-white">{currentParticipant.fullName}</strong>
                </span>
                <button
                  onClick={() => setPrologueSeen(true)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/25 hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>ACCEPT DIRECTIVE & COMMENCE MISSION 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main HUD Bar */}
      <div className="border-b border-[#35D5FF]/15 bg-[#0D1424]/80 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Mission Progress Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono uppercase text-[#98A8BD] hidden sm:inline">
              Mission:
            </span>
            {[1, 2, 3, 4].map((num) => {
              const isPast = num < session.currentMission;
              const isCurrent = num === session.currentMission;
              return (
                <div
                  key={num}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    isCurrent
                      ? "bg-[#35D5FF]/20 border border-[#35D5FF] text-[#35D5FF] shadow-sm shadow-[#35D5FF]/30"
                      : isPast
                      ? "bg-[#38E58B]/15 border border-[#38E58B]/40 text-[#38E58B]"
                      : "bg-[#111C30] border border-white/5 text-[#98A8BD]"
                  }`}
                >
                  {isPast ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38E58B]" />
                  ) : (
                    <span>0{num}</span>
                  )}
                  <span className="hidden md:inline">
                    {num === 1
                      ? "Crisis"
                      : num === 2
                      ? "Rescue"
                      : num === 3
                      ? "Energy"
                      : "E-Waste"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Current Score & Status */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#98A8BD]">
                Sustainability Rating
              </span>
              <p className="text-xs sm:text-sm font-mono font-bold text-[#38E58B]">
                {currentParticipant.score.rating}
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl border border-[#38E58B]/30 bg-[#0A201A] text-right">
              <span className="text-[10px] font-mono text-[#98A8BD] block">
                TOTAL SCORE
              </span>
              <span className="text-base sm:text-lg font-mono font-black text-white">
                {currentParticipant.score.total}
                <span className="text-[10px] text-[#98A8BD] font-normal">/1000</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Mission & Decisions (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Mission Header Card */}
          <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-mono font-bold text-xs uppercase tracking-wider">
                  MISSION 0{activeMission.number}
                </span>
                <span className="text-xs font-mono text-[#98A8BD] uppercase tracking-wider">
                  {activeMission.category}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {activeMission.sdgs.map((s) => (
                  <SDGBadge key={s} sdg={s} size="sm" />
                ))}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {activeMission.title}
            </h2>

            <div className="mt-4 p-3.5 rounded-xl bg-[#091120] border border-[#35D5FF]/15 text-xs sm:text-sm text-[#98A8BD] leading-relaxed">
              <strong className="text-white block mb-1 font-mono uppercase text-[11px] text-[#F6B94A] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Environmental Context:
              </strong>
              {activeMission.environmentalContext}
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
              {activeMission.storyProblem}
            </p>

            <div className="mt-4 pt-3 border-t border-[#35D5FF]/15 font-mono text-xs font-semibold text-[#35D5FF]">
              ⚡ DIRECTIVE: {activeMission.prompt}
            </div>
          </div>

          {/* Submission Status & Waiting Indicator */}
          {hasSubmitted && !session.consequencesRevealed && (
            <div className="p-4 rounded-xl border border-[#FCC30B]/30 bg-[#241C0A]/80 backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#FCC30B] animate-ping" />
                <div>
                  <p className="font-mono font-bold text-xs text-[#FCC30B] uppercase tracking-wider">
                    DECISION COMMITTED: OPTION {currentChoiceKey}
                  </p>
                  <p className="text-xs text-[#98A8BD]">
                    Waiting for Task Force Director to reveal consequences...
                  </p>
                </div>
              </div>
              {session.allowResubmission && (
                <span className="text-[11px] font-mono text-[#35D5FF]">
                  (Resubmission enabled)
                </span>
              )}
            </div>
          )}

          {/* Consequence Reveal Card (Visible when presenter reveals) */}
          {session.consequencesRevealed && currentSubmittedOption && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="p-6 rounded-2xl border-2 border-[#38E58B]/50 bg-[#0A241C]/90 backdrop-blur-md shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#38E58B]/20 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#38E58B]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38E58B]">
                    MISSION CONSEQUENCE REVEALED
                  </span>
                </div>
                <span className="text-xs font-mono text-[#35D5FF] font-bold">
                  Chosen: Option {currentSubmittedOption.key}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {currentSubmittedOption.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
                  {currentSubmittedOption.consequenceNarration}
                </p>
              </div>

              {/* Score deltas summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-[#070B16] border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#98A8BD] block">Environmental</span>
                  <span
                    className={`font-mono font-bold text-xs ${
                      currentSubmittedOption.impacts.environmental >= 0
                        ? "text-[#38E58B]"
                        : "text-[#FF5B65]"
                    }`}
                  >
                    {currentSubmittedOption.impacts.environmental >= 0 ? "+" : ""}
                    {Math.round(currentSubmittedOption.impacts.environmental * 3.5)} pts
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070B16] border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#98A8BD] block">Energy</span>
                  <span
                    className={`font-mono font-bold text-xs ${
                      currentSubmittedOption.impacts.energy >= 0
                        ? "text-[#38E58B]"
                        : "text-[#FF5B65]"
                    }`}
                  >
                    {currentSubmittedOption.impacts.energy >= 0 ? "+" : ""}
                    {Math.round(currentSubmittedOption.impacts.energy * 3.5)} pts
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070B16] border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#98A8BD] block">Social</span>
                  <span
                    className={`font-mono font-bold text-xs ${
                      currentSubmittedOption.impacts.social >= 0
                        ? "text-[#38E58B]"
                        : "text-[#FF5B65]"
                    }`}
                  >
                    {currentSubmittedOption.impacts.social >= 0 ? "+" : ""}
                    {Math.round(currentSubmittedOption.impacts.social * 3.5)} pts
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070B16] border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#98A8BD] block">Economic</span>
                  <span
                    className={`font-mono font-bold text-xs ${
                      currentSubmittedOption.impacts.economic >= 0
                        ? "text-[#38E58B]"
                        : "text-[#FF5B65]"
                    }`}
                  >
                    {currentSubmittedOption.impacts.economic >= 0 ? "+" : ""}
                    {Math.round(currentSubmittedOption.impacts.economic * 3.5)} pts
                  </span>
                </div>
              </div>

              {/* Educational Takeaway */}
              <div className="p-3.5 rounded-xl bg-[#071510] border border-[#38E58B]/30 text-xs text-[#98A8BD] leading-relaxed">
                <strong className="text-[#38E58B] block mb-1 font-mono uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Educational Insight:
                </strong>
                {currentSubmittedOption.educationalTakeaway}
              </div>

              {session.currentMission >= 4 && (
                <div className="pt-2 text-right">
                  <button
                    onClick={() => router.push("/game/results")}
                    className="px-5 py-2.5 rounded-xl bg-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#38E58B]/25 hover:bg-[#38E58B]/90 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>VIEW FINAL SUMMIT EVALUATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Decision Options Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#98A8BD]">
              Available Technological Options ({activeMission.options.length})
            </h3>

            {activeMission.options.map((option) => {
              const isSelected = currentChoiceKey === option.key;
              const isLocked = hasSubmitted && !session.allowResubmission;

              return (
                <div
                  key={option.id}
                  className={`glass-panel p-5 sm:p-6 rounded-2xl border transition-all ${
                    isSelected
                      ? "border-[#35D5FF] bg-[#11243D] shadow-lg shadow-[#35D5FF]/10 ring-1 ring-[#35D5FF]"
                      : "border-[#35D5FF]/15 hover:border-[#35D5FF]/40 bg-[#0D1424]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-xl font-mono font-bold flex items-center justify-center text-sm border ${
                          isSelected
                            ? "bg-[#35D5FF] text-[#070B16] border-[#35D5FF]"
                            : "bg-[#111C30] text-[#35D5FF] border-[#35D5FF]/30"
                        }`}
                      >
                        {option.key}
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white">
                        {option.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <span className="px-3 py-1 rounded-full bg-[#38E58B]/20 text-[#38E58B] text-xs font-mono font-bold border border-[#38E58B]/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Selected
                        </span>
                      ) : (
                        <button
                          type="button"
                          disabled={isLocked || submitting}
                          onClick={() => handleSubmit(option)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                          Select Option {option.key}
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#98A8BD] leading-relaxed mb-4">
                    {option.detailedExplanation}
                  </p>

                  {/* Advantages & Disadvantages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/5 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#081814] border border-[#38E58B]/20">
                      <span className="text-[#38E58B] font-bold block mb-1.5 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> Advantages:
                      </span>
                      <ul className="space-y-1 text-[#98A8BD]">
                        {option.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#38E58B]">•</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-[#1F1014] border border-[#FF5B65]/20">
                      <span className="text-[#FF5B65] font-bold block mb-1.5 flex items-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5" /> Trade-offs / Risks:
                      </span>
                      <ul className="space-y-1 text-[#98A8BD]">
                        {option.disadvantages.map((dis, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#FF5B65]">•</span>
                            <span>{dis}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: HUD, City Health, Scoring (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* City Health Telemetry */}
          <CityMetricsBar metrics={currentParticipant.cityMetrics} />

          {/* Sustainability Dimension Radar */}
          <div className="glass-panel rounded-2xl p-4 border border-[#35D5FF]/15">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#35D5FF]/10">
              <Shield className="w-4 h-4 text-[#38E58B]" />
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                Sustainability Dimensions
              </h4>
            </div>
            <ScoreRadarChart score={currentParticipant.score} showRatingCard={true} />
          </div>

          {/* Educational Concept Card */}
          <div className="glass-panel rounded-2xl p-4 border border-[#35D5FF]/15 text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-[#FCC30B] font-bold">
              <BookOpen className="w-4 h-4" />
              <span>CORE WORKSHOP PRINCIPLE</span>
            </div>
            <p className="text-[#98A8BD] leading-relaxed">
              &ldquo;Sustainable intelligence requires evaluating the full lifecycle: inference power, network transmission, semiconductor fabrication, and repairability.&rdquo;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
