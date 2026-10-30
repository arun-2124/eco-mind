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
import { LearningHotspots } from "@/components/LearningHotspots";
import { InteractivePipeline } from "@/components/InteractivePipeline";
import { InteractiveRobot } from "@/components/InteractiveRobot";
import { InteractiveEfficiency } from "@/components/InteractiveEfficiency";
import { InteractiveCircularEconomy } from "@/components/InteractiveCircularEconomy";
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
  HelpCircle,
  Shield,
  Activity,
  XCircle,
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
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Check if participant is registered
  useEffect(() => {
    if (isLoaded && !currentParticipant) {
      router.push("/join");
    }
  }, [isLoaded, currentParticipant, router]);

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
  const currentChoiceKey = currentParticipant.decisions[session.currentMission] as "A" | "B" | undefined;
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

              {/* City Scene */}
              <div className="rounded-xl overflow-hidden border border-[#35D5FF]/20">
                <CityVisualizer level={2} interactive={false} />
              </div>

              {/* Narration Script */}
              <div className="space-y-3 font-mono text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
                <p className="text-[#35D5FF] font-bold">
                  &ldquo;Welcome to NOVA CITY, the most intelligent city ever created.&rdquo;
                </p>
                <p className="text-[#98A8BD]">
                  Our systems were engineered to improve human life. But intelligence without responsibility has engineered a silent crisis.
                </p>
                <p className="text-[#98A8BD]">
                  Electricity demand is surging. Computing centers evaporate drinking water. Unregulated automation creates mountains of electronic waste.
                </p>
                <p className="text-[#38E58B] font-semibold">
                  You are a member of the Robotics &amp; AI Sustainability Task Force. Your decisions will decide whether Nova City builds a sustainable future or collapses under its own technological overhead.
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
                  <span>ACCEPT DIRECTIVE &amp; COMMENCE MISSION 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main HUD Bar */}
      <div className="border-b border-[#35D5FF]/15 bg-[#0D1424]/80 px-4 py-3 sticky top-16 z-30 backdrop-blur-md">
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
                      ? "AI Infrastructure"
                      : num === 2
                      ? "Autonomous Rescue"
                      : num === 3
                      ? "Energy Emergency"
                      : "E-Waste Crisis"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Current Score & Status */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#98A8BD]">
                Cadet Standing
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
        {/* Left Column: Mission, Scenarios, Decisions, and Learning (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* 1. SEE THE PROBLEM: 16:9 Cinematic Hero Scene with Clickable Hotspots */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-mono font-bold text-xs uppercase tracking-wider">
                  MISSION 0{activeMission.number} SCENE
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

            {/* Clickable Interactive Hero Illustration */}
            <LearningHotspots
              hotspots={activeMission.hotspots}
              heroImage={activeMission.heroImage}
            />

            {/* Scenario Narration */}
            <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {activeMission.title}
              </h2>
              <div className="p-3.5 rounded-xl bg-[#091120] border border-[#35D5FF]/15 text-xs sm:text-sm text-[#98A8BD] leading-relaxed">
                <strong className="text-white block mb-1 font-mono uppercase text-[11px] text-[#F6B94A] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Environmental Context:
                </strong>
                {activeMission.environmentalContext}
              </div>
              <p className="text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
                {activeMission.storyProblem}
              </p>
            </div>
          </div>

          {/* 2. UNDERSTAND THE SITUATION: Clear Question Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0C1D38] via-[#0D1424] to-[#0A221E] border border-[#35D5FF]/30 shadow-lg">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#35D5FF] block mb-1">
              TASK FORCE DIRECTIVE — MAKE YOUR DECISION
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">
              {activeMission.question}
            </h3>
          </div>

          {/* 3. MAKE A CHOICE: Two Contrasting Cards (Option A vs Option B) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#98A8BD]">
                Select Technological Approach
              </span>
              <span className="text-[11px] font-mono text-[#35D5FF]">
                Compare both paradigms carefully
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeMission.options.map((option) => {
                const isSelected = currentChoiceKey === option.key;
                const isLocked = hasSubmitted && !session.allowResubmission;

                return (
                  <motion.div
                    key={option.id}
                    whileHover={{ y: isLocked ? 0 : -3 }}
                    className={`glass-panel rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
                      isSelected
                        ? "border-[#35D5FF] ring-2 ring-[#35D5FF] shadow-2xl bg-[#11243D]"
                        : "border-[#35D5FF]/20 bg-[#0D1424] hover:border-[#35D5FF]/50"
                    }`}
                  >
                    {/* Visual Card Artwork */}
                    <div className="relative aspect-[16/9] w-full border-b border-white/10 bg-[#070B16] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#070B16]/90 border border-white/20 text-xs font-mono font-bold text-white">
                        OPTION {option.key}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-bold text-base text-white">
                          {option.title}
                        </h4>
                        <p className="text-xs text-[#98A8BD] mt-1.5 leading-relaxed">
                          {option.detailedExplanation}
                        </p>
                      </div>

                      {/* Benefits & Trade-offs */}
                      <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] font-mono">
                        <div className="text-[#38E58B]">
                          <strong className="block mb-0.5">Key Advantage:</strong>
                          <span>• {option.advantages[0]}</span>
                        </div>
                        <div className="text-[#FF5B65]">
                          <strong className="block mb-0.5">Trade-off / Risk:</strong>
                          <span>• {option.disadvantages[0]}</span>
                        </div>
                      </div>

                      {/* Select / Lock Button */}
                      <div className="pt-3">
                        {isSelected ? (
                          <div className="w-full py-2.5 rounded-xl bg-[#38E58B]/20 border border-[#38E58B] text-[#38E58B] font-mono font-bold text-xs flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>CHOICE COMMITTED (OPTION {option.key})</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            disabled={isLocked || submitting}
                            onClick={() => handleSubmit(option)}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                          >
                            SELECT OPTION {option.key}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Waiting Status Banner (After submission, before presenter reveals) */}
          {hasSubmitted && !session.consequencesRevealed && (
            <div className="p-5 rounded-2xl border border-[#FCC30B]/40 bg-[#251C0A]/90 backdrop-blur-md flex items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#FCC30B] animate-ping" />
                <div>
                  <p className="font-mono font-bold text-xs text-[#FCC30B] uppercase tracking-wider">
                    YOUR DECISION HAS BEEN RECORDED (OPTION {currentChoiceKey})
                  </p>
                  <p className="text-xs text-[#98A8BD] mt-0.5 font-mono">
                    Stand by: Waiting for the Task Force Director to reveal workshop consequences...
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

          {/* 4. EXPERIENCE THE CONSEQUENCE: Detailed Result Banner */}
          {session.consequencesRevealed && currentSubmittedOption && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`p-6 rounded-2xl border-2 backdrop-blur-md shadow-2xl space-y-4 ${
                currentSubmittedOption.isSustainable
                  ? "border-[#38E58B] bg-[#0A241C]/95 text-white"
                  : "border-[#FF5B65] bg-[#240C12]/95 text-white"
              }`}
            >
              {/* Consequence Badge Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  {currentSubmittedOption.isSustainable ? (
                    <div className="flex items-center gap-2 text-[#38E58B] font-mono font-black text-sm uppercase">
                      <Sparkles className="w-5 h-5 text-[#38E58B]" />
                      <span>SUSTAINABLE DECISION (+250 PTS)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[#FF5B65] font-mono font-black text-sm uppercase">
                      <AlertTriangle className="w-5 h-5 text-[#FF5B65]" />
                      <span>UNSUSTAINABLE DECISION (+50 PTS)</span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded bg-black/40 border border-white/10">
                  Option {currentSubmittedOption.key} Chosen
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  {currentSubmittedOption.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#F4F7FC] leading-relaxed font-mono">
                  {currentSubmittedOption.consequenceNarration}
                </p>
              </div>

              {/* Educational Explanation */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-[#98A8BD] leading-relaxed font-mono">
                <strong className="text-[#35D5FF] block mb-1 font-bold uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Why this matters:
                </strong>
                {currentSubmittedOption.educationalTakeaway}
              </div>

              {session.currentMission >= 4 && (
                <div className="pt-2 text-right">
                  <button
                    onClick={() => router.push("/game/results")}
                    className="px-6 py-3 rounded-xl bg-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-xl shadow-[#38E58B]/30 hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <span>VIEW FINAL SUMMIT EVALUATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* 5. LEARN THE AI CONCEPT: Dedicated Interactive Simulator for This Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#35D5FF]" />
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-[#35D5FF]">
                Core Learning Module: {activeMission.aiConcept.title}
              </h3>
            </div>

            {/* Embedded Specific Component */}
            {activeMission.number === 1 && <InteractivePipeline />}
            {activeMission.number === 2 && <InteractiveRobot />}
            {activeMission.number === 3 && <InteractiveEfficiency />}
            {activeMission.number === 4 && <InteractiveCircularEconomy />}
          </div>
        </div>

        {/* Right Column: Telemetry HUD, City Health, Scoring (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* City Health Telemetry */}
          <CityMetricsBar metrics={currentParticipant.cityMetrics} />

          {/* Sustainability Score & Dimension Radar */}
          <div className="glass-panel rounded-2xl p-4 border border-[#35D5FF]/15">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#35D5FF]/10">
              <Shield className="w-4 h-4 text-[#38E58B]" />
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                Cadet Sustainability Dimensions
              </h4>
            </div>
            <ScoreRadarChart score={currentParticipant.score} showRatingCard={true} />
          </div>

          {/* Summary Learning Callout */}
          <div className="glass-panel rounded-2xl p-4 border border-[#35D5FF]/15 text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-[#FCC30B] font-bold">
              <BookOpen className="w-4 h-4" />
              <span>WORKSHOP PRINCIPLE</span>
            </div>
            <p className="text-[#98A8BD] leading-relaxed">
              &ldquo;The future is not about making AI more powerful. It is about making intelligence more responsible.&rdquo;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
