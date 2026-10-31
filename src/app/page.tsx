"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useGameState } from "@/hooks/useGameState";
import { sound } from "@/lib/audio";
import { AtmosphericOverlay } from "@/components/AtmosphericOverlay";
import { Volume2, VolumeX, Play, Users, RotateCcw, ArrowRight, X, Shield } from "lucide-react";

export default function TitleScreen() {
  const router = useRouter();
  const { currentParticipant, session, register } = useGameState();
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [roomPin, setRoomPin] = useState(session.pin || "ECO2045");
  const [playerName, setPlayerName] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);

  // Start atmospheric ambient pad on user interaction
  const toggleAudio = () => {
    if (isAudioActive) {
      sound.stopAtmosphere();
      setIsAudioActive(false);
    } else {
      sound.playAtmosphere();
      setIsAudioActive(true);
    }
  };

  const handleNewGame = () => {
    sound.playConfirm();
    if (typeof window !== "undefined") {
      localStorage.removeItem("ecomind_current_participant_id");
    }
    router.push("/join");
  };

  const handleContinue = () => {
    sound.playConfirm();
    if (currentParticipant) {
      router.push("/game");
    } else {
      router.push("/join");
    }
  };

  const handleJoinStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      setJoinError("Please enter your survivor name.");
      return;
    }
    setIsJoining(true);
    setJoinError(null);
    sound.playConfirm();

    const res = await register(roomPin.trim().toUpperCase(), playerName.trim(), "SURVIVOR");
    if (res.success) {
      router.push("/game");
    } else {
      setJoinError(res.error || "Could not connect to story room.");
      setIsJoining(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-[#F8FAFC] overflow-hidden select-none font-sans">
      {/* 1. Full-screen Cinematic Background Illustration */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/game/environments/skyline-after.svg"
          alt="Nova City at Night"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_30s_ease-in-out_infinite_alternate]"
        />
        {/* Atmospheric vignette & color grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%]" />
      </div>

      {/* 2. Atmospheric Rain & Distant Lightning Weather Overlay */}
      <AtmosphericOverlay weather="storm" />

      {/* 3. Audio & Atmospheric Controller (Top Right) */}
      <header className="absolute top-6 right-6 z-30 flex items-center gap-4">
        <button
          onClick={toggleAudio}
          className="px-3.5 py-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 backdrop-blur-md text-xs font-mono text-white/80 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
          title="Toggle Atmospheric Audio"
        >
          {isAudioActive ? (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-300">AUDIO: ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-white/50" />
              <span className="text-[11px] text-white/50">AUDIO: OFF</span>
            </>
          )}
        </button>
      </header>

      {/* 4. Center Title & Cinematic Menu */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          {/* Main Title Reveal */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-widest text-white uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              ECO<span className="text-cyan-400">//</span>MIND
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-mono font-bold tracking-[0.35em] uppercase text-cyan-300/90 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              THE LAST SIGNAL
            </p>
          </div>

          {/* Core Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm sm:text-base md:text-lg text-slate-300/90 italic font-serif max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            &ldquo;Some cities don&apos;t fall in a day. They disappear one decision at a time.&rdquo;
          </motion.p>

          {/* 3 Adventure Game Menu Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            {/* NEW GAME */}
            <button
              onClick={handleNewGame}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-105 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>NEW GAME</span>
            </button>

            {/* JOIN A STORY */}
            <button
              onClick={() => {
                sound.playClick();
                setShowJoinModal(true);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 hover:bg-black/80 border border-white/25 hover:border-cyan-400 text-white font-bold text-sm tracking-wider uppercase backdrop-blur-md shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>JOIN A STORY</span>
            </button>

            {/* CONTINUE */}
            <button
              onClick={handleContinue}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl border text-sm font-bold tracking-wider uppercase backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                currentParticipant
                  ? "bg-amber-950/40 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-105"
                  : "bg-black/40 hover:bg-black/70 border-white/15 text-slate-300 hover:text-white"
              }`}
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>
                {currentParticipant
                  ? `CONTINUE (SCENE ${session.currentMission})`
                  : "CONTINUE"}
              </span>
            </button>
          </motion.div>

          {currentParticipant && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono text-cyan-300/80 pt-2"
            >
              Logged in survivor: <span className="text-white font-bold">{currentParticipant.fullName}</span> &bull; Room {session.pin}
            </motion.p>
          )}
        </motion.div>
      </main>

      {/* 5. Minimal Presenter Link (Bottom Left) */}
      <footer className="absolute bottom-5 inset-x-6 z-30 flex items-center justify-between text-xs font-mono text-white/40">
        <span>NOVA CITY // 2045</span>

        <Link
          href="/presenter/dashboard"
          className="text-white/40 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Director Console</span>
        </Link>
      </footer>

      {/* 6. In-Screen "Join a Story" Adventure Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#091122] border border-cyan-400/30 text-white shadow-2xl space-y-6 relative"
            >
              <button
                onClick={() => setShowJoinModal(false)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  Story Uplink
                </span>
                <h3 className="text-2xl font-bold font-sans text-white">Join a Live Story</h3>
                <p className="text-xs text-slate-300">
                  Enter the Room PIN shown on the director&apos;s screen to experience the story with your group.
                </p>
              </div>

              <form onSubmit={handleJoinStorySubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/70 uppercase">Room PIN Code</label>
                  <input
                    type="text"
                    value={roomPin}
                    onChange={(e) => setRoomPin(e.target.value.toUpperCase())}
                    placeholder="ECO2045"
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white font-mono font-bold text-base tracking-widest focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/70 uppercase">Your Survivor Name</label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="e.g. Maya, Alex, Jordan"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white font-sans text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {joinError && (
                  <p className="text-xs text-rose-400 font-mono">{joinError}</p>
                )}

                <button
                  type="submit"
                  disabled={isJoining}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isJoining ? "CONNECTING..." : "ENTER STORY"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
