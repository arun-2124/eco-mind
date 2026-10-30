"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { CityVisualizer } from "@/components/CityVisualizer";
import { SDGBadge } from "@/components/SDGBadge";
import { SDG_DETAILS } from "@/lib/game-data";
import { SDGNumber } from "@/types/game";
import {
  Cpu,
  Zap,
  Bot,
  Recycle,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Sliders,
  Globe2,
  Leaf,
  Layers,
} from "lucide-react";

export default function LandingPage() {
  const featuredSdgs: SDGNumber[] = [7, 9, 11, 12, 13, 3, 6];

  const pillarCards = [
    {
      title: "Physical Artificial Intelligence",
      icon: <Bot className="w-6 h-6 text-[#35D5FF]" />,
      desc: "AI systems that perceive, reason, and actuate inside the physical world. Analyzing sensor energy, mechanical wear, and kinetic safety.",
      color: "#35D5FF",
    },
    {
      title: "Edge Artificial Intelligence",
      icon: <Cpu className="w-6 h-6 text-[#38E58B]" />,
      desc: "Local inference without continuous cloud telemetry. Weighing instant latency against on-device battery drain and silicon manufacturing.",
      color: "#38E58B",
    },
    {
      title: "Sustainable Computing",
      icon: <Zap className="w-6 h-6 text-[#FCC30B]" />,
      desc: "Model quantization, pruned architectures, carbon-aware temporal job scheduling, and clean renewable microgrid integration.",
      color: "#FCC30B",
    },
    {
      title: "Responsible Robotics & Lifecycle",
      icon: <Recycle className="w-6 h-6 text-[#F6B94A]" />,
      desc: "Curbing electronic waste through circular repair, modular compute retrofits, and confronting the hidden embodied carbon in silicon.",
      color: "#F6B94A",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#35D5FF]/10 via-[#38E58B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#35D5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#38E58B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#35D5FF]/30 bg-[#0D1424]/80 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38E58B]" />
              <span className="font-mono text-xs tracking-widest uppercase text-[#35D5FF] font-semibold">
                Robotics & Automation Club • Flagship Workshop 2045
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]"
            >
              ECO<span className="text-[#35D5FF]">//</span>MIND
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#35D5FF] via-[#38E58B] to-[#F6B94A] mt-2">
                THE SUSTAINABLE INTELLIGENCE CHALLENGE
              </span>
            </motion.h1>

            {/* Core Message & Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <blockquote className="font-mono text-base sm:text-lg text-[#35D5FF] font-semibold italic border-y border-[#35D5FF]/20 py-2 inline-block max-w-2xl">
                &ldquo;Every decision shapes the future. Every innovation has a consequence.&rdquo;
              </blockquote>

              <p className="text-base sm:text-xl text-[#98A8BD] leading-relaxed max-w-3xl mx-auto">
                Enter <strong className="text-white">NOVA CITY</strong>, a futuristic world facing an environmental crisis. 
                Your technological decisions will determine whether humanity builds a sustainable intelligent future or creates another crisis.
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/join"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-sm tracking-wider shadow-xl shadow-[#35D5FF]/25 hover:scale-105 hover:shadow-[#38E58B]/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>ENTER THE MISSION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/presenter/dashboard"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#35D5FF]/30 bg-[#0D1424]/90 text-white font-mono font-bold text-sm tracking-wider hover:bg-[#111C30] hover:border-[#35D5FF] transition-all flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-[#35D5FF]" />
                <span>PRESENTER CONTROL CENTER</span>
              </Link>
            </motion.div>

            {/* Core Quote */}
            <p className="text-xs font-mono uppercase tracking-widest text-[#98A8BD]/70 pt-2">
              &ldquo;The future is not about making AI more powerful. It is about making intelligence more responsible.&rdquo;
            </p>
          </div>

          {/* Interactive City Scene */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="mb-3 flex items-center justify-between px-2">
              <span className="text-xs font-mono text-[#98A8BD] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#35D5FF]" />
                SIMULATION PREVIEW: NOVA CITY METABOLISM
              </span>
              <span className="text-[11px] font-mono text-[#38E58B]">
                Interactive Environmental State Machine
              </span>
            </div>
            <CityVisualizer level={3} interactive={true} />
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-16 bg-[#0D1424]/60 border-y border-[#35D5FF]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#35D5FF]">
              Core Curriculum & Technology Matrix
            </span>
            <h2 className="text-3xl font-display font-bold text-white mt-1">
              Four Pillars of Responsible Engineering
            </h2>
            <p className="text-sm text-[#98A8BD] mt-2">
              Sustainable technology demands navigating trade-offs. Edge AI isn&apos;t automatically the answer in every scenario, and cloud computing isn&apos;t inherently wasteful when properly optimized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-[#35D5FF]/15 hover:border-[#35D5FF]/40 transition-all hover:-translate-y-1 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${card.color}15`,
                    border: `1px solid ${card.color}40`,
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-[#98A8BD] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals Integration */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#38E58B]">
                United Nations Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                Direct SDG Alignment
              </h2>
              <p className="text-xs sm:text-sm text-[#98A8BD] mt-1 max-w-2xl">
                Every mission in ECO//MIND maps directly to UN Sustainable Development Goals. Learn how physical robotics, edge silicon, and municipal policy impact real global targets.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-mono text-[#35D5FF] hover:underline flex items-center gap-1"
            >
              <span>Explore full pedagogical matrix</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5 items-center justify-center sm:justify-start">
            {featuredSdgs.map((sdgNum) => (
              <SDGBadge key={sdgNum} sdg={sdgNum} showTitle={true} size="lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Workflow Overview */}
      <section className="py-16 bg-[#0B1220] border-t border-[#35D5FF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              The Mission Progression
            </h2>
            <p className="text-xs sm:text-sm text-[#98A8BD] mt-2">
              Four interconnected missions with server-side weighted scoring and presenter-orchestrated consequence reveals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-xl border border-[#35D5FF]/15">
              <span className="text-xs font-mono text-[#35D5FF] font-bold">MISSION 01</span>
              <h4 className="font-bold text-white text-sm mt-1">The Intelligence Crisis</h4>
              <p className="text-xs text-[#98A8BD] mt-1">
                Centralized Cloud vs Edge AI vs Dynamic Hybrid inference architectures.
              </p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-[#35D5FF]/15">
              <span className="text-xs font-mono text-[#38E58B] font-bold">MISSION 02</span>
              <h4 className="font-bold text-white text-sm mt-1">The Autonomous Rescue</h4>
              <p className="text-xs text-[#98A8BD] mt-1">
                Tele-operated vs Fully autonomous swarms vs Collaborative Centaur robotics.
              </p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-[#35D5FF]/15">
              <span className="text-xs font-mono text-[#FCC30B] font-bold">MISSION 03</span>
              <h4 className="font-bold text-white text-sm mt-1">The Energy Emergency</h4>
              <p className="text-xs text-[#98A8BD] mt-1">
                Model quantization, solar microgrid hubs, and carbon-aware temporal job scheduling.
              </p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-[#35D5FF]/15">
              <span className="text-xs font-mono text-[#F6B94A] font-bold">MISSION 04</span>
              <h4 className="font-bold text-white text-sm mt-1">The E-Waste Trap</h4>
              <p className="text-xs text-[#98A8BD] mt-1">
                Fleet obsolescence, circular civic repair workshops, and modular hardware retrofits.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90"
            >
              <span>JOIN WITH SESSION PIN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#35D5FF]/15 bg-[#070B16] py-8 text-xs font-mono text-[#98A8BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold">ECO//MIND</span> — Robotics & Automation Club Sustainable AI Workshop.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About & SDGs
            </Link>
            <Link href="/join" className="hover:text-white transition-colors">
              Participant Join
            </Link>
            <Link href="/presenter/dashboard" className="hover:text-white transition-colors">
              Presenter Console
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
