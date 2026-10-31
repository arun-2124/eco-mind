"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { MissionScene } from "@/components/MissionScene";
import { DecisionCard } from "@/components/DecisionCard";
import { ConsequenceReveal } from "@/components/ConsequenceReveal";
import { AtmosphericOverlay } from "@/components/AtmosphericOverlay";
import { InventoryDrawer } from "@/components/InventoryDrawer";
import { ClueInspectModal } from "@/components/ClueInspectModal";
import { ChapterDebriefModal } from "@/components/ChapterDebriefModal";
import { TrustNotification, TrustNoticeData } from "@/components/TrustNotification";
import { DecisionOption, StoryClue, InventoryItem } from "@/types/game";
import { MISSION_CLUES } from "@/lib/exploration-data";
import { getCharacterPortrait } from "@/lib/relationships";
import { sound } from "@/lib/audio";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Radio,
  Clock,
  Compass,
  Home,
  CheckCircle2,
  Layers,
  Briefcase,
  Search,
} from "lucide-react";

export default function GamePage() {
  const router = useRouter();
  const {
    isLoaded,
    session,
    participants,
    submissions,
    currentParticipant,
    activeMission,
    submitDecision,
    advanceMission,
    collectItem,
    discoverClue,
  } = useGameState();

  const [stagedOption, setStagedOption] = useState<DecisionOption | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [dialogueDone, setDialogueDone] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [inspectingClue, setInspectingClue] = useState<StoryClue | null>(null);
  const [trustNotice, setTrustNotice] = useState<TrustNoticeData | null>(null);
  const [activeDebriefChapter, setActiveDebriefChapter] = useState<number | null>(null);

  // Toggle atmospheric audio
  const toggleAudio = () => {
    if (isAudioActive) {
      sound.stopAtmosphere();
      setIsAudioActive(false);
    } else {
      sound.playAtmosphere();
      setIsAudioActive(true);
    }
  };

  // Check if participant is registered
  useEffect(() => {
    if (isLoaded && !currentParticipant) {
      router.push("/join");
    }
  }, [isLoaded, currentParticipant, router]);

  // Reset staged option and dialogue state when mission changes
  useEffect(() => {
    setStagedOption(null);
    setDialogueDone(false);
    setInspectingClue(null);
    setActiveDebriefChapter(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [session.currentMission]);

  if (!isLoaded || !currentParticipant) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-mono">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span>ENTERING NOVA CITY STORYLINE...</span>
        </div>
      </div>
    );
  }

  // Active mission clues from exploration data
  const activeClues: StoryClue[] = MISSION_CLUES[session.currentMission] || [];
  const discoveredClueIds = currentParticipant.discoveredClueIds || [];
  const heldItems = currentParticipant.inventory || [];
  const heldItemIds = heldItems.map((i) => i.id);

  // Submitted choice for active mission
  const currentChoiceKey = currentParticipant.decisions[session.currentMission] as "A" | "B" | undefined;
  const hasCommitted = !!currentChoiceKey;
  const committedOption = activeMission.options.find((o) => o.key === currentChoiceKey);

  // Submissions stats
  const missionSubmissions = submissions.filter((s) => s.missionNumber === session.currentMission);
  const submittedCount = missionSubmissions.length;
  const totalRoomSurvivors = Math.max(participants.length, 1);

  // Instant Choice Selection & Decision Submission Handler
  const handleSelectOption = async (option: DecisionOption) => {
    if (submitting) return;
    if (hasCommitted && !session.allowResubmission) return;

    setSubmitting(true);
    setErrorMessage(null);
    setStagedOption(option);
    sound.playConfirm();

    // Trigger Telltale-style trust notification if option has one
    if (option.trustNotice) {
      setTrustNotice({
        character: option.trustNotice.character,
        text: option.trustNotice.text,
        positive: option.trustNotice.positive,
        portrait: getCharacterPortrait(
          option.trustNotice.character,
          option.trustNotice.positive ? "happy" : "worried"
        ),
      });
    }

    const res = await submitDecision(session.currentMission, option.key);
    if (!res.success) {
      setErrorMessage(res.error || "Story transmission failed. Please retry.");
    }
    setSubmitting(false);
  };

  // Story Progression Handler
  const handleAdvanceStory = () => {
    const currentM = session.currentMission;
    if (currentM >= 20) {
      router.push("/game/results");
      return;
    }

    // Check if current mission ends a chapter (Scene 4, 8, 12, 16)
    if (currentM % 4 === 0) {
      const chapterNum = Math.floor(currentM / 4);
      setActiveDebriefChapter(chapterNum);
      return;
    }

    executeMissionAdvance();
  };

  const executeMissionAdvance = () => {
    sound.playDialogueAdvance();
    advanceMission();
    setStagedOption(null);
    setDialogueDone(false);
    setActiveDebriefChapter(null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleInspectClue = (clue: StoryClue) => {
    discoverClue(clue.id);
    setInspectingClue(clue);
  };

  const handleCollectItem = (item: InventoryItem) => {
    collectItem(item);
  };

  const handleDialogueComplete = () => {
    setDialogueDone(true);
    sound.playDramaticBeat();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-[#F8FAFC] relative selection:bg-cyan-400 selection:text-slate-950">
      {/* 1. Atmospheric Weather Overlay (Rain, Storm, Fog, Embers) */}
      <AtmosphericOverlay weather={activeMission.weather || "rain"} />

      {/* 2. Top Cinematic Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between text-xs font-mono">
        {/* Left: Brand & Story Chapter */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            title="Return to Title"
          >
            <Home className="w-4 h-4" />
            <span className="font-bold tracking-wider hidden sm:inline">TITLE</span>
          </Link>

          <span className="text-white/20 hidden sm:inline">|</span>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-bold text-[11px] uppercase">
              CH. {activeMission.chapterNumber}
            </span>
            <span className="text-white/80 font-medium truncate max-w-xs sm:max-w-md hidden md:inline">
              {activeMission.chapterTitle}
            </span>
          </div>
        </div>

        {/* Center: Mission Scene Tracker */}
        <div className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-white/90 font-bold">
          <span className="text-cyan-400">SCENE {String(session.currentMission).padStart(2, "0")}</span>
          <span className="text-white/40 font-normal"> / 20</span>
        </div>

        {/* Right: Audio Toggle & Survivor Info */}
        <div className="flex items-center gap-2.5">
          {/* Backpack Inventory Trigger */}
          <button
            onClick={() => setIsInventoryOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-black/60 border border-cyan-400/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            title="Open Field Backpack"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold hidden sm:inline">Backpack</span>
            <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
              {heldItems.length}
            </span>
          </button>

          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-black/50 border border-white/15 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Toggle Atmosphere Audio"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <div className="px-3 py-1 rounded-lg bg-black/50 border border-white/15 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-bold">{currentParticipant.fullName}</span>
            <span className="text-white/40 text-[10px]">({session.pin})</span>
          </div>
        </div>
      </header>

      {/* Telltale-Style Character Trust Relationship Banner */}
      <TrustNotification
        notice={trustNotice}
        onDismiss={() => setTrustNotice(null)}
      />

      {/* 3. Main Adventure Canvas */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 relative z-20">
        {/* Story Scene Artwork & Subtitle Dialogue */}
        <section>
          <MissionScene
            mission={activeMission}
            clues={activeClues}
            discoveredClueIds={discoveredClueIds}
            onInspectClue={handleInspectClue}
            onDialogueComplete={handleDialogueComplete}
          />
        </section>

        {/* Decision Area: Choices & Confirmation */}
        <section className="space-y-6">
          {/* Situation Prompt */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              THE DILEMMA // DECIDE THE OUTCOME
            </span>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-white leading-snug">
              {activeMission.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {activeMission.situation}
            </p>
          </div>

          {/* Large Illustrated Choices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeMission.options.map((opt) => (
              <DecisionCard
                key={opt.id}
                option={opt}
                isStaged={stagedOption?.key === opt.key || currentChoiceKey === opt.key}
                isCommitted={currentChoiceKey === opt.key}
                isLocked={hasCommitted && !session.allowResubmission}
                heldItemIds={heldItemIds}
                onStage={(selected) => handleSelectOption(selected)}
              />
            ))}
          </div>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs font-mono text-rose-300">
              {errorMessage}
            </div>
          )}

          {/* Immediate Consequence Reveal & Reaction Scene */}
          {hasCommitted && committedOption && (
            <ConsequenceReveal
              option={committedOption}
              missionNumber={session.currentMission}
              isLastMission={session.currentMission >= 20}
              onViewResults={() => router.push("/game/results")}
              onAdvanceMission={handleAdvanceStory}
            />
          )}
        </section>

        {/* 4. Minimal Story Progress Track (Dots across 20 scenes) */}
        <footer className="pt-8 pb-12 text-center space-y-3 border-t border-white/10">
          <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-xl mx-auto">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
              const isPast = num < session.currentMission;
              const isCurrent = num === session.currentMission;
              return (
                <div
                  key={num}
                  title={`Scene ${num}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : isPast
                      ? "w-3 bg-emerald-400/80"
                      : "w-3 bg-white/15"
                  }`}
                />
              );
            })}
          </div>
          <p className="text-[11px] font-mono text-white/40">
            STORY PROGRESSION: SCENE {session.currentMission} OF 20
          </p>
        </footer>
      </main>

      {/* Visual Backpack Inventory Drawer */}
      <InventoryDrawer
        items={heldItems}
        isOpen={isInventoryOpen}
        onClose={() => setIsInventoryOpen(false)}
      />

      {/* Environmental Clue & Item Inspection Modal */}
      <ClueInspectModal
        clue={inspectingClue}
        hasCollectedItem={
          inspectingClue?.itemReward
            ? heldItemIds.includes(inspectingClue.itemReward.id)
            : false
        }
        onCollectItem={handleCollectItem}
        onClose={() => setInspectingClue(null)}
      />

      {/* Chapter Resolution Debrief Modal (Scenes 4, 8, 12, 16) */}
      <ChapterDebriefModal
        chapterNumber={activeDebriefChapter}
        onProceed={executeMissionAdvance}
      />
    </div>
  );
}
