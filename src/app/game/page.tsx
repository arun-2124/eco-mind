"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { CityVisualizer } from "@/components/CityVisualizer";
import { MissionProgress } from "@/components/MissionProgress";
import { MissionScene } from "@/components/MissionScene";
import { DecisionCard } from "@/components/DecisionCard";
import { ConsequenceReveal } from "@/components/ConsequenceReveal";
import { CityHealthPanel } from "@/components/CityHealthPanel";
import { SustainabilityScore } from "@/components/SustainabilityScore";
import { InteractivePipeline } from "@/components/InteractivePipeline";
import { InteractiveRobot } from "@/components/InteractiveRobot";
import { InteractiveEfficiency } from "@/components/InteractiveEfficiency";
import { InteractiveCircularEconomy } from "@/components/InteractiveCircularEconomy";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function GamePage() {
  const router = useRouter();
  const {
    isLoaded,
    session,
    currentParticipant,
    activeMission,
    submitDecision,
    awardBonus,
  } = useGameState();

  const [prologueSeen, setPrologueSeen] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [, setErrorMsg] = useState<string | null>(null);

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
                  onClick={() => {
                    sound.playClick();
                    setPrologueSeen(true);
                  }}
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
                  onClick={() => {
                    sound.playConfirm();
                    setPrologueSeen(true);
                  }}
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
          <MissionProgress currentMission={session.currentMission} />

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
          <MissionScene mission={activeMission} />

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
              {activeMission.options.map((option) => (
                <DecisionCard
                  key={option.id}
                  option={option}
                  isSelected={currentChoiceKey === option.key}
                  isLocked={hasSubmitted && !session.allowResubmission}
                  isSubmitting={submitting}
                  onSelect={handleSubmit}
                />
              ))}
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

          {/* 4. EXPERIENCE THE CONSEQUENCE: Detailed Result Banner with Reflection Bonus */}
          {session.consequencesRevealed && currentSubmittedOption && (
            <ConsequenceReveal
              option={currentSubmittedOption}
              missionNumber={activeMission.number}
              isLastMission={session.currentMission >= 4}
              onViewResults={() => router.push("/game/results")}
              onAwardBonusPoints={(pts) => awardBonus(pts)}
            />
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
          {/* City Health Telemetry Panel */}
          <CityHealthPanel metrics={currentParticipant.cityMetrics} />

          {/* Sustainability Score & Dimension Radar */}
          <SustainabilityScore score={currentParticipant.score} showRadar={true} />

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
