"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { CityVisualizer } from "@/components/CityVisualizer";
import { SharedCityHUD } from "@/components/SharedCityHUD";
import { SDGBadge } from "@/components/SDGBadge";
import { CHAPTERS, MISSIONS } from "@/lib/game-data";
import { useGameState } from "@/hooks/useGameState";
import { sound } from "@/lib/audio";
import {
  Cpu,
  Zap,
  Bot,
  Recycle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Radio,
  Layers,
  Users,
  Compass,
  QrCode,
  Flame,
} from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const { session, sharedCityMetrics } = useGameState();
  const [quickPin, setQuickPin] = useState(session.pin || "ECO2045");

  const handleQuickJoin = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playConfirm();
    router.push(`/join?pin=${encodeURIComponent(quickPin.trim().toUpperCase())}`);
  };

  const pillarCards = [
    {
      title: "Physical Artificial Intelligence",
      tag: "Robotics Embodiment",
      icon: <Bot className="w-6 h-6 text-[#35D5FF]" />,
      desc: "Intelligent systems that perceive, reason, and actuate inside physical reality. Evaluating mechanical friction, inertia, sensor wear, and kinetic safety.",
      color: "#35D5FF",
    },
    {
      title: "Edge Artificial Intelligence",
      tag: "Local Inference",
      icon: <Cpu className="w-6 h-6 text-[#38E58B]" />,
      desc: "Zero-latency local neural processing on rovers and drones. Eliminating continuous radio transmission while accounting for device battery budgets.",
      color: "#38E58B",
    },
    {
      title: "Sustainable Computing",
      tag: "Algorithmic Efficiency",
      icon: <Zap className="w-6 h-6 text-[#FCC30B]" />,
      desc: "INT8 model quantization, pruned neural architectures, carbon-aware temporal scheduling, and clean renewable solar microgrid synchronization.",
      color: "#FCC30B",
    },
    {
      title: "Circular Robotics & E-Waste",
      tag: "5R Closed-Loop Lifecycle",
      icon: <Recycle className="w-6 h-6 text-[#F6B94A]" />,
      desc: "Curbing toxic landfill runoff through standardized modular repair, open-source firmware longevity, and non-destructive rare-earth reclaiming.",
      color: "#F6B94A",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-[#F4F7FC] relative selection:bg-[#35D5FF] selection:text-[#050811]">
      <DemoModeBanner />
      <Navbar />

      {/* Cyberpunk Scanlines & Holographic Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none z-10 scanlines opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#35D5FF]/10 via-[#38E58B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* HERO: FUTURISTIC MISSION CONTROL COMMAND PORTAL */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#35D5FF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Mission Directive Banner */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#35D5FF]/40 bg-[#0A172B]/90 backdrop-blur-md shadow-lg font-mono text-xs text-[#35D5FF]"
            >
              <Radio className="w-3.5 h-3.5 text-[#38E58B] animate-pulse" />
              <span className="font-bold tracking-widest uppercase">
                ROBOTICS &amp; AUTOMATION CLUB • GLOBAL SIMULATION WORKSHOP
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-none">
              ECO<span className="text-[#35D5FF]">//</span>MIND
            </h1>

            <p className="text-sm sm:text-base font-mono font-bold tracking-widest uppercase text-[#38E58B]">
              THE SUSTAINABLE INTELLIGENCE CHALLENGE • 2045
            </p>

            <p className="text-sm sm:text-lg text-[#98A8BD] max-w-3xl mx-auto leading-relaxed">
              Nova City is facing a catastrophic infrastructure and environmental crisis. Step into the shoes of the Robotics &amp; AI Sustainability Task Force to command rovers, balance energy grids, and rebuild the future.
            </p>
          </div>

          {/* Holographic Tactical Command Entry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Participant Mission Access Terminal (7 cols) */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-2 border-[#35D5FF]/30 bg-[#070D1B]/95 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#38E58B] animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    MISSION UPLINK TERMINAL
                  </span>
                </div>
                <span className="text-xs font-mono text-[#35D5FF] px-2.5 py-0.5 rounded bg-[#35D5FF]/10 border border-[#35D5FF]/30">
                  MULTIPLAYER LIVE ROOM
                </span>
              </div>

              {/* Quick Join Terminal Form */}
              <form onSubmit={handleQuickJoin} className="space-y-4 font-mono">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#98A8BD] block font-bold">
                    ENTER WORKSHOP SESSION PIN
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={quickPin}
                      onChange={(e) => setQuickPin(e.target.value.toUpperCase())}
                      placeholder="ECO2045"
                      maxLength={10}
                      className="flex-1 px-4 py-3.5 rounded-xl bg-[#0B1528] border-2 border-[#35D5FF]/40 text-lg font-black text-white tracking-widest focus:outline-none focus:border-[#38E58B] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#050811] font-black text-xs tracking-wider shadow-lg shadow-[#35D5FF]/25 hover:scale-105 transition-all flex items-center gap-2 shrink-0"
                    >
                      <span>DEPLOY CADET</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-[#98A8BD]">
                  Default demo code: <strong className="text-white">ECO2045</strong>. Enter the PIN displayed on the presenter screen to join your cohort.
                </p>
              </form>

              {/* Quick Action Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 font-mono text-xs">
                <Link
                  href={`/join?pin=${encodeURIComponent(quickPin)}`}
                  className="p-3.5 rounded-xl bg-[#0B1528] border border-white/10 hover:border-[#35D5FF] text-white hover:text-[#35D5FF] transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#35D5FF]" />
                    <span>Join Mission</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/presenter/dashboard"
                  className="p-3.5 rounded-xl bg-[#081F19] border border-[#38E58B]/30 hover:border-[#38E58B] text-white hover:text-[#38E58B] transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#38E58B]" />
                    <span>Presenter Deck</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#38E58B]" />
                </Link>
              </div>
            </div>

            {/* Right: Live Holographic City Preview (5 cols) */}
            <div className="lg:col-span-5 glass-panel p-5 rounded-3xl border border-[#35D5FF]/20 bg-[#08101F] space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-xs">
                <span className="text-[#35D5FF] font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#F6B94A]" /> NOVA CITY SIMULATOR
                </span>
                <span className="text-[10px] text-[#98A8BD]">Live Visual Feed</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <CityVisualizer level={3} interactive={false} />
              </div>
              <p className="text-[11px] font-mono text-[#98A8BD] text-center">
                Collective cadet decisions physically alter the skyline, power grid, and environmental purity in real time.
              </p>
            </div>
          </div>

          {/* Room Collective Shared Telemetry */}
          <SharedCityHUD metrics={sharedCityMetrics} />
        </div>
      </section>

      {/* 20-MISSION CAMPAIGN & 5 CHAPTERS ROADMAP */}
      <section className="py-16 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#35D5FF] uppercase tracking-wider block mb-1">
              FULL MULTIPLAYER CAMPAIGN MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
              5 Chapters • 20 Tactical Missions
            </h2>
          </div>
          <span className="text-xs font-mono text-[#98A8BD]">
            Every mission features 2 contrasting technological choices with real environmental consequences.
          </span>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((ch) => {
            const chMissions = MISSIONS.filter(
              (m) => m.number >= ch.missionRange[0] && m.number <= ch.missionRange[1]
            );

            return (
              <div
                key={ch.number}
                className="glass-panel p-6 rounded-2xl border border-white/10 bg-[#070D1B] space-y-4 hover:border-[#35D5FF]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-[#35D5FF]/15 text-[#35D5FF] font-bold">
                      CHAPTER {ch.number}
                    </span>
                    <span className="text-[#98A8BD]">
                      M{ch.missionRange[0]} – M{ch.missionRange[1]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-[#98A8BD] leading-relaxed font-sans">
                    {ch.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/5 font-mono text-xs">
                  {chMissions.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#0B1528] text-[11px] text-[#F4F7FC]"
                    >
                      <span className="truncate">
                        {String(m.number).padStart(2, "0")}. {m.title}
                      </span>
                      <span className="text-[10px] text-[#38E58B] shrink-0 ml-2">
                        +250 pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORE PEDAGOGICAL PILLARS */}
      <section className="py-16 bg-[#04060E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#38E58B] uppercase tracking-wider">
              CURRICULUM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
              The 4 Pillars of Sustainable Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarCards.map((p, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 bg-[#070D1B] space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#98A8BD] uppercase tracking-wider block">
                    {p.tag}
                  </span>
                  <h4 className="font-display font-bold text-base text-white mt-0.5">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs text-[#98A8BD] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Grand Workshop Closing Banner */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-[#38E58B]/30 bg-[#071F18] text-center space-y-3 max-w-4xl mx-auto shadow-2xl">
            <span className="text-xs font-mono font-bold text-[#38E58B] uppercase tracking-widest block">
              THE SUSTAINABLE INTELLIGENCE CREED
            </span>
            <blockquote className="text-lg sm:text-2xl font-display font-extrabold text-white leading-snug">
              &ldquo;The future is not about making AI more powerful. It is about making intelligence more responsible.&rdquo;
            </blockquote>
            <p className="text-xs font-mono text-[#98A8BD]">
              Robotics and Automation Club • United Nations SDGs 3, 6, 7, 9, 11, 12, 13
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
