"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Radar, Cpu, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export function InteractiveRobot() {
  const [selectedSubsystem, setSelectedSubsystem] = useState<"camera" | "lidar" | "processor" | "tracks">("camera");

  const subsystems = {
    camera: {
      title: "1. Computer Vision Camera (Perception)",
      stage: "PERCEPTION",
      color: "#35D5FF",
      icon: Eye,
      description:
        "The optical and infrared thermal cameras capture visual photons and heat radiation. Artificial intelligence parses the pixels to identify human survivor silhouettes and structural crack boundaries.",
      actionPrompt: "Capturing 60 visual frames/second and classifying heat signatures in collapsed voids.",
    },
    lidar: {
      title: "2. Laser LiDAR Scanner (Perception)",
      stage: "PERCEPTION",
      color: "#38E58B",
      icon: Radar,
      description:
        "The spinning LiDAR shoots 300,000 laser pulses per second to measure precise distance geometry. It generates a 3D structural map of debris, allowing the robot to navigate in total darkness and heavy smoke.",
      actionPrompt: "Constructing spatial 3D point-cloud map within 25 meters radius.",
    },
    processor: {
      title: "3. Onboard AI Neural Chip (Decision)",
      stage: "DECISION",
      color: "#FCC30B",
      icon: Cpu,
      description:
        "The low-power neuromorphic processor runs quantized neural networks directly on the robot. It calculates safe step trajectories and checks structural stability in under 5 milliseconds.",
      actionPrompt: "Evaluating 12 potential stepping routes to avoid unstable concrete slabs.",
    },
    tracks: {
      title: "4. All-Terrain Mechanical Tracks (Action)",
      stage: "ACTION",
      color: "#F6B94A",
      icon: Activity,
      description:
        "High-torque electric servo motors drive reinforced rubber treads. They translate digital AI decisions into real physical movement, climbing over 45° rubble slopes with calculated grip force.",
      actionPrompt: "Actuating tread motors at 14 Nm torque to safely cross collapsed steel beam.",
    },
  };

  const active = subsystems[selectedSubsystem];
  const IconComponent = active.icon;

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#35D5FF] uppercase tracking-widest font-bold">
            Interactive Physical AI Simulator
          </span>
          <h3 className="text-base font-display font-bold text-white">
            Perception → Decision → Action Loop
          </h3>
        </div>
        <div className="text-xs font-mono text-[#98A8BD]">
          Click robot subsystems to inspect
        </div>
      </div>

      {/* Robot Diagram with Clickable Interactive Hotspot Buttons */}
      <div className="relative w-full rounded-xl overflow-hidden border border-[#35D5FF]/20 bg-[#070B16] p-4 flex flex-col items-center">
        {/* SVG Robot Visual */}
        <svg viewBox="0 0 500 240" className="w-full max-w-md h-auto" fill="none">
          {/* Floor */}
          <line x1="20" y1="210" x2="480" y2="210" stroke="#35D5FF" strokeWidth="1" strokeDasharray="6,4" opacity="0.4" />

          {/* Tracks Base */}
          <rect x="100" y="160" width="300" height="45" rx="14" fill="#0E1624" stroke={selectedSubsystem === "tracks" ? "#F6B94A" : "#334155"} strokeWidth={selectedSubsystem === "tracks" ? "3" : "1.5"} />
          <circle cx="140" cy="182" r="14" fill="#1E293B" stroke="#98A8BD" />
          <circle cx="200" cy="182" r="14" fill="#1E293B" stroke="#98A8BD" />
          <circle cx="260" cy="182" r="14" fill="#1E293B" stroke="#98A8BD" />
          <circle cx="320" cy="182" r="14" fill="#1E293B" stroke="#98A8BD" />
          <circle cx="370" cy="182" r="14" fill="#1E293B" stroke="#98A8BD" />

          {/* Main Chassis Body */}
          <rect x="130" y="85" width="240" height="80" rx="14" fill="#111C30" stroke={selectedSubsystem === "processor" ? "#FCC30B" : "#35D5FF"} strokeWidth={selectedSubsystem === "processor" ? "3" : "1.5"} />

          {/* Sensor Turret Neck */}
          <polygon points="210,85 290,85 280,45 220,45" fill="#1B2945" stroke="#35D5FF" strokeWidth="1.5" />

          {/* Camera Housing */}
          <rect x="220" y="30" width="60" height="25" rx="5" fill="#0A1220" stroke={selectedSubsystem === "camera" ? "#35D5FF" : "#98A8BD"} strokeWidth={selectedSubsystem === "camera" ? "3" : "1.5"} />
          <circle cx="250" cy="42" r="7" fill={selectedSubsystem === "camera" ? "#35D5FF" : "#38E58B"} />

          {/* LiDAR Puck (Top) */}
          <rect x="235" y="10" width="30" height="18" rx="4" fill="#0B1C1A" stroke={selectedSubsystem === "lidar" ? "#38E58B" : "#98A8BD"} strokeWidth={selectedSubsystem === "lidar" ? "3" : "1.5"} />
          <line x1="250" y1="10" x2="250" y2="2" stroke="#38E58B" strokeWidth="2" />
          <circle cx="250" cy="2" r="3" fill="#38E58B" />

          {/* Hotspot Target Callouts */}
          {/* Camera Hotspot */}
          <circle cx="250" cy="42" r="14" fill="none" stroke="#35D5FF" strokeWidth="2" strokeDasharray="3,3" className="animate-spin" />
          {/* LiDAR Hotspot */}
          <circle cx="250" cy="19" r="14" fill="none" stroke="#38E58B" strokeWidth="2" strokeDasharray="3,3" />
          {/* Processor Hotspot */}
          <circle cx="250" cy="125" r="18" fill="none" stroke="#FCC30B" strokeWidth="2" strokeDasharray="3,3" />
          {/* Tracks Hotspot */}
          <circle cx="370" cy="182" r="18" fill="none" stroke="#F6B94A" strokeWidth="2" strokeDasharray="3,3" />
        </svg>

        {/* Hotspot Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-3">
          <button
            type="button"
            onClick={() => setSelectedSubsystem("camera")}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 border ${
              selectedSubsystem === "camera"
                ? "bg-[#35D5FF]/20 text-[#35D5FF] border-[#35D5FF] shadow-sm"
                : "bg-[#091120] text-[#98A8BD] border-white/5 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>1. Camera</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSubsystem("lidar")}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 border ${
              selectedSubsystem === "lidar"
                ? "bg-[#38E58B]/20 text-[#38E58B] border-[#38E58B] shadow-sm"
                : "bg-[#091120] text-[#98A8BD] border-white/5 hover:text-white"
            }`}
          >
            <Radar className="w-3.5 h-3.5" />
            <span>2. LiDAR</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSubsystem("processor")}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 border ${
              selectedSubsystem === "processor"
                ? "bg-[#FCC30B]/20 text-[#FCC30B] border-[#FCC30B] shadow-sm"
                : "bg-[#091120] text-[#98A8BD] border-white/5 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>3. Local AI</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSubsystem("tracks")}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 border ${
              selectedSubsystem === "tracks"
                ? "bg-[#F6B94A]/20 text-[#F6B94A] border-[#F6B94A] shadow-sm"
                : "bg-[#091120] text-[#98A8BD] border-white/5 hover:text-white"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>4. Motors</span>
          </button>
        </div>
      </div>

      {/* Detailed Subsystem Explainer Card */}
      <div
        className="p-4 rounded-xl border space-y-2 font-mono text-xs transition-colors"
        style={{
          borderColor: `${active.color}40`,
          backgroundColor: `${active.color}0D`,
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconComponent className="w-4 h-4" style={{ color: active.color }} />
            <span className="font-bold text-white text-sm">{active.title}</span>
          </div>
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${active.color}20`,
              color: active.color,
            }}
          >
            {active.stage}
          </span>
        </div>

        <p className="text-[#98A8BD] leading-relaxed">{active.description}</p>
        <p className="text-white text-[11px] pt-1 border-t border-white/5 font-semibold">
          ⚡ Active Status: <span style={{ color: active.color }}>{active.actionPrompt}</span>
        </p>
      </div>
    </div>
  );
}
