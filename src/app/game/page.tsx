"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { MissionProgress } from "@/components/MissionProgress";
import { MissionScene } from "@/components/MissionScene";
import { DecisionCard } from "@/components/DecisionCard";
import { ConsequenceReveal } from "@/components/ConsequenceReveal";
import { SharedCityHUD } from "@/components/SharedCityHUD";
import { SustainabilityScore } from "@/components/SustainabilityScore";
import { InteractivePipeline } from "@/components/InteractivePipeline";
import { InteractiveRobot } from "@/components/InteractiveRobot";
import { InteractiveEfficiency } from "@/components/InteractiveEfficiency";
import { InteractiveCircularEconomy } from "@/components/InteractiveCircularEconomy";
import { DecisionOption } from "@/types/game";
import { sound } from "@/lib/audio";
import { getMissionSituationalIntelligence } from "@/lib/branching";
import { ChapterModal } from "@/components/ChapterModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Radio,
  Users,
  CheckCircle2,
  Clock,
  HelpCircle,
  Activity,
  Layers,
  AlertTriangle,
  Info,
  Compass,
} from "lucide-react";

export default function GamePage() {
  const router = useRouter();
  const {
    isLoaded,
    session,
    participants,
    submissions,
    sharedCityMetrics,
    currentParticipant,
    activeMission,
    submitDecision,
    awardBonus,
  } = useGameState();

  const [stagedOption, setStagedOption] = useState<DecisionOption | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showChapterModal, setShowChapterModal] = useState(false);

  // Situational intelligence & branching narrative alerts
  const situationalIntel = getMissionSituationalIntelligence(
    session.currentMission,
    currentParticipant?.decisions || {},
    sharedCityMetrics
  );

  // Check if participant is registered
  useEffect(() => {
    if (isLoaded && !currentParticipant) {
      router.push("/join");
    }
  }, [isLoaded, currentParticipant, router]);

  // Reset staged option when mission changes
  useEffect(() => {
    setStagedOption(null);
  }, [session.currentMission]);

  if (!isLoaded || !currentParticipant) {
    return (
      <div className="min-h-screen bg-[#050811] flex items-center justify-center text-white font-mono">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#35D5FF] animate-ping" />
          <span>ESTABLISHING SECURE MULTIPLAYER LINK TO NOVA CITY...</span>
        </div>
      </div>
    );
  }

  // Already submitted choice for active mission
  const currentChoiceKey = currentParticipant.decisions[session.currentMission] as "A" | "B" | undefined;
  const hasCommitted = !!currentChoiceKey;
  const committedOption = activeMission.options.find((o) => o.key === currentChoiceKey);

  // Cohort submission statistics for active mission
  const missionSubmissions = submissions.filter(
    (s) => s.missionNumber === session.currentMission
  );
  const submittedCount = missionSubmissions.length;
  const totalRoomCadets = Math.max(participants.length, 1);

  // Two-step decision handler (Participant must personally confirm)
  const handleConfirmDecision = async () => {
    if (!stagedOption) return;
    if (hasCommitted && !session.allowResubmission) return;

    setSubmitting(true);
    setErrorMessage(null);
    sound.playConfirm();

    const res = await submitDecision(session.currentMission, stagedOption.key);
    if (!res.success) {
      setErrorMessage(res.error || "Decision transmission failed. Please retry.");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-[#F4F7FC] relative selection:bg-[#35D5FF] selection:text-[#050811]">
      <DemoModeBanner />
      <Navbar />

      {/* =========================================================================
          SECTION 7: TOP COMMAND HUD
          - ECO//MIND logo
          - Chapter name
          - Mission number / 20
          - Session PIN
          - Participant / Team indicator
         ========================================================================= */}
      <header className="border-b border-[#35D5FF]/20 bg-[#091122]/95 px-4 py-3 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
          {/* Left: Branding & Chapter Metadata */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#35D5FF]/10 border border-[#35D5FF]/40 flex items-center justify-center text-[#35D5FF]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-wider text-white">
                  ECO//MIND
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#35D5FF]/15 text-[#35D5FF] font-bold">
                  CH. {activeMission.chapterNumber}
                </span>
              </div>
              <p className="text-[11px] text-[#98A8BD] truncate max-w-xs sm:max-w-md">
                {activeMission.chapterTitle}
              </p>
            </div>
          </div>

          {/* Center: Mission Progress (01 / 20) & Optional Countdown */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0C172E] border border-white/10">
              <span className="text-[10px] text-[#98A8BD] uppercase">Mission:</span>
              <span className="text-sm font-black text-[#35D5FF]">
                {String(session.currentMission).padStart(2, "0")}{" "}
                <span className="text-[#98A8BD] font-normal text-xs">/ 20</span>
              </span>
            </div>

            {session.timerSecondsRemaining !== undefined && session.timerSecondsRemaining !== null && (
              <div className="px-3 py-1.5 rounded-xl border border-amber-500/50 bg-amber-950/60 font-mono text-amber-300 font-bold text-xs flex items-center gap-1.5 animate-pulse">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{session.timerSecondsRemaining}s</span>
              </div>
            )}
          </div>

          {/* Right: Session PIN & Cadet Standing */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <span className="text-[9px] uppercase text-[#98A8BD] block">
                Session Code
              </span>
              <span className="text-xs font-bold text-[#FCC30B] tracking-wider">
                PIN: {session.pin}
              </span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#081F19] border border-[#38E58B]/30 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#38E58B] animate-pulse" />
              <div>
                <span className="text-[9px] uppercase text-[#98A8BD] block">
                  {currentParticipant.teamName || "Cadet"}
                </span>
                <strong className="text-xs text-white">
                  {currentParticipant.fullName}
                </strong>
              </div>
              <span className="text-xs font-black text-[#38E58B] ml-2 pl-2 border-l border-white/10">
                {currentParticipant.score.total} <span className="text-[9px] text-[#98A8BD]">pts</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Campaign Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Surprise Event Broadcast (Section 10) */}
        {session.activeSurpriseEvent && (
          <div className="p-4 rounded-2xl border-2 border-red-500 bg-red-950/70 text-red-200 font-mono text-xs flex items-start gap-3 shadow-2xl animate-pulse">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm uppercase tracking-wider text-red-400">
                  SURPRISE SECTOR EVENT: {session.activeSurpriseEvent.title}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40 font-bold">
                  {session.activeSurpriseEvent.severity.toUpperCase()}
                </span>
              </div>
              <p className="text-white/90 text-xs">{session.activeSurpriseEvent.description}</p>
              <p className="text-[11px] text-amber-300 font-bold">
                Impact: {String(session.activeSurpriseEvent.affectedMetric)} ({session.activeSurpriseEvent.delta > 0 ? "+" : ""}{session.activeSurpriseEvent.delta}) — {session.activeSurpriseEvent.recommendedAction}
              </p>
            </div>
          </div>
        )}

        {/* Situational Intelligence & Branching Story Alerts (Section 9) */}
        <div className="p-4 rounded-2xl border border-white/10 bg-[#070E1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs shadow-lg">
          <div className="flex flex-wrap items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-white/60">Tactical Status:</span>
            <span
              className="px-2 py-0.5 rounded font-bold text-[10px] border"
              style={{
                color: situationalIntel.statusColor,
                borderColor: `${situationalIntel.statusColor}40`,
                backgroundColor: `${situationalIntel.statusColor}15`,
              }}
            >
              {situationalIntel.systemStatus}
            </span>
            <span className="text-white/80 text-[11px] hidden sm:inline truncate max-w-lg">
              {situationalIntel.tacticalNote}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowChapterModal(true)}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1.5 px-3 py-1 rounded-lg border border-cyan-500/20 bg-cyan-950/40 shrink-0 hover:bg-cyan-900/40 transition-colors"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chapter {activeMission.chapterNumber} Debrief</span>
          </button>
        </div>

        {/* =========================================================================
            SECTION 7: CENTER — CINEMATIC BRIEFING & EMERGENCY CONTEXT
            - Large cinematic mission illustration
            - Mission title
            - Emergency briefing
            - Situation description
           ========================================================================= */}
        <section className="space-y-4">
          <MissionScene mission={activeMission} />

          {/* Emergency Directive Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0C1D38] via-[#0D152A] to-[#0A221E] border-2 border-[#35D5FF]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#35D5FF] flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#35D5FF] animate-pulse" />
                COMMAND CENTER DIRECTIVE — MISSION {String(activeMission.number).padStart(2, "0")}
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {activeMission.question}
              </h3>
            </div>

            {/* Room Cohort Voting Pulse */}
            <div className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#070B16]/80 border border-white/10 font-mono text-xs">
              <Users className="w-4 h-4 text-[#35D5FF]" />
              <span>
                Room Votes:{" "}
                <strong className="text-[#38E58B]">{submittedCount}</strong> / {totalRoomCadets}
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2 & 7: DECISION AREA
            - Two large visual decision cards
            - Clear description of each possible action
            - Two-step decision: Select -> Confirm Decision button
            - Never automatically selected
           ========================================================================= */}
        <section className="space-y-5">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="font-bold uppercase tracking-wider text-[#98A8BD]">
              Evaluate Technological Approaches
            </span>
            <span className="text-[#35D5FF]">
              Step 1: Inspect card &nbsp;→&nbsp; Step 2: Confirm &amp; Transmit
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeMission.options.map((opt) => (
              <DecisionCard
                key={opt.id}
                option={opt}
                isStaged={stagedOption?.key === opt.key && !hasCommitted}
                isCommitted={currentChoiceKey === opt.key}
                isLocked={hasCommitted && !session.allowResubmission}
                onStage={(selected) => setStagedOption(selected)}
              />
            ))}
          </div>

          {/* Confirmation Callout (Step 2: Participant Must Personally Confirm) */}
          {stagedOption && !hasCommitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-gradient-to-r from-[#0C243B] via-[#09152B] to-[#0A2E22] border-2 border-[#35D5FF] shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono"
            >
              <div>
                <span className="text-xs font-bold text-[#35D5FF] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#38E58B]" />
                  CONFIRMATION REQUIRED (STEP 2 OF 2)
                </span>
                <p className="text-sm font-bold text-white mt-1">
                  You are staging: Option {stagedOption.key} — {stagedOption.title}
                </p>
                <p className="text-xs text-[#98A8BD]">
                  Your choice is final for this mission and will shape Nova City&apos;s collective future.
                </p>
              </div>

              <button
                type="button"
                disabled={submitting}
                onClick={handleConfirmDecision}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#050811] font-bold text-xs tracking-wider shadow-xl shadow-[#35D5FF]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                <span>{submitting ? "TRANSMITTING..." : `CONFIRM & TRANSMIT OPTION ${stagedOption.key}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-[#240C12] border border-[#FF5B65] text-xs font-mono text-[#FF5B65]">
              {errorMessage}
            </div>
          )}

          {/* Waiting Banner After Submission */}
          {hasCommitted && !session.consequencesRevealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl border-2 border-[#FCC30B]/40 bg-[#171308]/95 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl font-mono"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-4 h-4 rounded-full bg-[#FCC30B] animate-ping shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#FCC30B] uppercase tracking-wider">
                    DECISION TRANSMITTED — WAITING FOR COMMAND CENTER REVEAL.
                  </h4>
                  <p className="text-xs text-[#98A8BD] mt-0.5">
                    Your choice (Option {currentChoiceKey}) has been logged in the collective simulation database.
                  </p>
                </div>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-white shrink-0 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FCC30B]" /> Stand By
              </span>
            </motion.div>
          )}

          {/* Consequence Reveal & Educational Explanation */}
          {session.consequencesRevealed && committedOption && (
            <ConsequenceReveal
              option={committedOption}
              missionNumber={session.currentMission}
              isLastMission={session.currentMission >= 20}
              onViewResults={() => router.push("/game/results")}
              onAwardBonusPoints={(pts) => awardBonus(pts)}
            />
          )}

          {/* Interactive Learning Lab Simulator */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#35D5FF]" />
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-[#35D5FF]">
                Interactive Simulation Lab: {activeMission.aiConcept.title}
              </h3>
            </div>

            {activeMission.aiConcept.componentType === "pipeline" && <InteractivePipeline />}
            {activeMission.aiConcept.componentType === "robot" && <InteractiveRobot />}
            {activeMission.aiConcept.componentType === "efficiency" && <InteractiveEfficiency />}
            {activeMission.aiConcept.componentType === "circular" && <InteractiveCircularEconomy />}
            {activeMission.aiConcept.componentType === "general" && <InteractiveEfficiency />}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7 & 8: BOTTOM DASHBOARD
            - Mission Progress (1 to 20)
            - Personal Score
            - Submission Status
            - Shared City Status Indicators (SharedCityHUD)
           ========================================================================= */}
        <section className="space-y-6 pt-6 border-t border-white/10">
          {/* Shared 7-Indicator Collective Simulation */}
          <SharedCityHUD metrics={sharedCityMetrics} />

          {/* Bottom HUD: Progress & Personal Dimensions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 glass-panel p-5 rounded-2xl border border-[#35D5FF]/15 bg-[#091122]">
              <MissionProgress currentMission={session.currentMission} />
            </div>

            <div className="lg:col-span-4">
              <SustainabilityScore score={currentParticipant.score} showRadar={false} compact={true} />
            </div>
          </div>
        </section>
      </main>

      {/* Chapter Completion Debrief Modal (Section 14) */}
      <ChapterModal
        chapterNumber={activeMission.chapterNumber}
        isOpen={showChapterModal}
        onClose={() => setShowChapterModal(false)}
        playerDecisions={currentParticipant.decisions}
        playerScore={currentParticipant.score.total}
      />
    </div>
  );
}
