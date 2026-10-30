"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Cpu, ArrowRight, Wifi, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";

export function InteractivePipeline() {
  const [activePipeline, setActivePipeline] = useState<"edge" | "cloud">("edge");

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#38E58B] uppercase tracking-widest font-bold">
            Interactive AI Architecture Lab
          </span>
          <h3 className="text-base font-display font-bold text-white">
            Cloud Transmission vs Local Edge Inference
          </h3>
        </div>

        {/* Toggle Mode */}
        <div className="inline-flex p-1 rounded-xl bg-[#070B16] border border-[#35D5FF]/25">
          <button
            type="button"
            onClick={() => setActivePipeline("edge")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activePipeline === "edge"
                ? "bg-[#38E58B] text-[#070B16] shadow-md shadow-[#38E58B]/20"
                : "text-[#98A8BD] hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Edge Pipeline</span>
          </button>
          <button
            type="button"
            onClick={() => setActivePipeline("cloud")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activePipeline === "cloud"
                ? "bg-[#FF5B65] text-white shadow-md shadow-[#FF5B65]/20"
                : "text-[#98A8BD] hover:text-white"
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Cloud Pipeline</span>
          </button>
        </div>
      </div>

      {/* Animated Pipeline Stage Visualization */}
      <AnimatePresence mode="wait">
        {activePipeline === "edge" ? (
          <motion.div
            key="edge-mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-[#08201C] border border-[#38E58B]/30 flex flex-wrap items-center justify-around gap-2 text-center font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-[#98A8BD]">Stage 1</span>
                <div className="px-3 py-2 rounded-lg bg-[#071311] border border-[#38E58B]/40 text-xs text-white font-bold">
                  Robot Camera & LiDAR
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-[#38E58B] animate-pulse" />

              <div className="space-y-1">
                <span className="text-[10px] text-[#38E58B] font-bold">Stage 2 (Local)</span>
                <div className="px-3 py-2 rounded-lg bg-[#0E362F] border-2 border-[#38E58B] text-xs text-[#38E58B] font-black shadow-lg shadow-[#38E58B]/20">
                  Onboard NPU AI Chip
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-[#38E58B] animate-pulse" />

              <div className="space-y-1">
                <span className="text-[10px] text-[#35D5FF]">Stage 3</span>
                <div className="px-3 py-2 rounded-lg bg-[#071311] border border-[#35D5FF]/40 text-xs text-white font-bold">
                  Immediate 4ms Reflex Action
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#061412] border border-[#38E58B]/20">
                <span className="text-[#98A8BD] text-[10px] block">TRANSMISSION DELAY</span>
                <span className="text-base font-bold text-[#38E58B]">4 ms (Instant)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#061412] border border-[#38E58B]/20">
                <span className="text-[#98A8BD] text-[10px] block">INTERNET TRAFFIC</span>
                <span className="text-base font-bold text-[#35D5FF]">0 Bytes / Frame</span>
              </div>
              <div className="p-3 rounded-xl bg-[#061412] border border-[#38E58B]/20">
                <span className="text-[#98A8BD] text-[10px] block">OUTAGE RESILIENCE</span>
                <span className="text-base font-bold text-[#38E58B]">100% Operational</span>
              </div>
            </div>

            <p className="text-xs text-[#98A8BD] leading-relaxed font-mono">
              💡 <strong>Why this is sustainable:</strong> Raw camera pixels never leave the robot. The machine processes its surroundings locally without burdening cell towers or drawing data center cooling water.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="cloud-mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-[#220B10] border border-[#FF5B65]/30 flex flex-wrap items-center justify-around gap-2 text-center font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-[#98A8BD]">Stage 1</span>
                <div className="px-2.5 py-2 rounded-lg bg-[#0D0406] border border-white/10 text-xs text-white">
                  Robot Sensors
                </div>
              </div>

              <Wifi className="w-4 h-4 text-[#FF5B65] animate-bounce" />

              <div className="space-y-1">
                <span className="text-[10px] text-[#F6B94A]">Stage 2 (Internet)</span>
                <div className="px-2.5 py-2 rounded-lg bg-[#300C12] border border-[#F6B94A] text-xs text-[#F6B94A]">
                  Cell Tower Antenna
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#FF5B65]" />

              <div className="space-y-1">
                <span className="text-[10px] text-[#FF5B65] font-bold">Stage 3 (Distant)</span>
                <div className="px-2.5 py-2 rounded-lg bg-[#401018] border-2 border-[#FF5B65] text-xs text-[#FF5B65] font-black">
                  Massive Cloud Farm
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#FF5B65]" />

              <div className="space-y-1">
                <span className="text-[10px] text-[#98A8BD]">Stage 4</span>
                <div className="px-2.5 py-2 rounded-lg bg-[#0D0406] border border-white/10 text-xs text-white">
                  Delayed Command
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#180609] border border-[#FF5B65]/20">
                <span className="text-[#98A8BD] text-[10px] block">TRANSMISSION DELAY</span>
                <span className="text-base font-bold text-[#FF5B65]">450 - 800 ms</span>
              </div>
              <div className="p-3 rounded-xl bg-[#180609] border border-[#FF5B65]/20">
                <span className="text-[#98A8BD] text-[10px] block">INTERNET TRAFFIC</span>
                <span className="text-base font-bold text-[#F6B94A]">3.5 GB / minute</span>
              </div>
              <div className="p-3 rounded-xl bg-[#180609] border border-[#FF5B65]/20">
                <span className="text-[#98A8BD] text-[10px] block">OUTAGE RESILIENCE</span>
                <span className="text-base font-bold text-[#FF5B65]">0% (Freezes)</span>
              </div>
            </div>

            <p className="text-xs text-[#FF5B65] leading-relaxed font-mono">
              ⚠️ <strong>The Environmental Bottleneck:</strong> Continuous streaming burns radio broadcast power, requires millions of liters of server cooling water, and freezes if radio waves hit concrete.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
