"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertTriangle, Wind, Sun, BatteryCharging } from "lucide-react";

interface CityVisualizerProps {
  level?: number; // 1 (Critical) to 5 (Thriving)
  interactive?: boolean;
}

export function CityVisualizer({ level = 3, interactive = true }: CityVisualizerProps) {
  const [currentLevel, setCurrentLevel] = useState<number>(level);

  const activeLevel = interactive ? currentLevel : level;
  const isSustainable = activeLevel >= 4;
  const isCritical = activeLevel <= 2;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#35D5FF]/20 bg-[#070B16] shadow-2xl">
      {/* Dynamic Sky Gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isSustainable
            ? "bg-gradient-to-b from-[#0A2A38] via-[#0B1E2D] to-[#070B16]"
            : isCritical
            ? "bg-gradient-to-b from-[#3D1414] via-[#241118] to-[#070B16]"
            : "bg-gradient-to-b from-[#111C30] via-[#0D1424] to-[#070B16]"
        }`}
      />

      {/* Cyber Grid Stars & Smog Particles */}
      <div className="absolute inset-0 cyber-dots opacity-40" />

      {/* Atmospheric Haze */}
      <motion.div
        animate={{
          opacity: isCritical ? 0.65 : isSustainable ? 0.15 : 0.4,
        }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 pointer-events-none ${
          isCritical
            ? "bg-gradient-to-t from-transparent via-[#FF5B65]/10 to-[#F6B94A]/15"
            : "bg-gradient-to-t from-transparent via-[#35D5FF]/5 to-[#38E58B]/10"
        }`}
      />

      {/* SVG City Skyline */}
      <div className="relative z-10 w-full pt-10 px-4 flex flex-col items-center">
        <svg
          viewBox="0 0 1000 380"
          className="w-full h-auto max-h-[340px] drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="buildingGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B2945" />
              <stop offset="100%" stopColor="#0B1220" />
            </linearGradient>
            <linearGradient id="buildingGradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#183B38" />
              <stop offset="100%" stopColor="#0B1E20" />
            </linearGradient>
            <linearGradient id="solarGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#35D5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38E58B" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Distant Background Towers */}
          <rect x="60" y="140" width="70" height="240" fill="#0D1627" rx="3" />
          <rect x="180" y="110" width="80" height="270" fill="#0E1A2E" rx="4" />
          <rect x="300" y="80" width="100" height="300" fill="#101D33" rx="4" />
          <rect x="440" y="50" width="120" height="330" fill="#13233D" rx="6" />
          <rect x="600" y="90" width="90" height="290" fill="#0F1B30" rx="4" />
          <rect x="730" y="130" width="85" height="250" fill="#0E1A2E" rx="4" />
          <rect x="850" y="150" width="75" height="230" fill="#0D1627" rx="3" />

          {/* Foreground Buildings */}
          {/* Tower 1 - Data Center / Central AI */}
          <rect
            x="120"
            y="170"
            width="110"
            height="210"
            fill={isSustainable ? "url(#buildingGradGreen)" : "url(#buildingGradDark)"}
            stroke={isSustainable ? "#38E58B" : isCritical ? "#FF5B65" : "#35D5FF"}
            strokeWidth="1.5"
            rx="4"
          />
          {/* Windows / Server racks */}
          <g fill={isCritical ? "#FF5B65" : isSustainable ? "#38E58B" : "#35D5FF"} opacity="0.6">
            <rect x="135" y="190" width="15" height="6" rx="1" />
            <rect x="160" y="190" width="15" height="6" rx="1" />
            <rect x="185" y="190" width="15" height="6" rx="1" />
            <rect x="135" y="210" width="15" height="6" rx="1" />
            <rect x="160" y="210" width="15" height="6" rx="1" />
            <rect x="185" y="210" width="15" height="6" rx="1" />
            <rect x="135" y="230" width="15" height="6" rx="1" />
            <rect x="160" y="230" width="15" height="6" rx="1" />
            <rect x="185" y="230" width="15" height="6" rx="1" />
          </g>

          {/* Central Monolith: AETHER AI Spire */}
          <polygon
            points="500,40 540,110 540,380 460,380 460,110"
            fill={isSustainable ? "url(#buildingGradGreen)" : "url(#buildingGradDark)"}
            stroke={isSustainable ? "#38E58B" : isCritical ? "#FF5B65" : "#35D5FF"}
            strokeWidth="2"
          />
          {/* Central Beacon Spire */}
          <line x1="500" y1="40" x2="500" y2="10" stroke={isSustainable ? "#38E58B" : "#35D5FF"} strokeWidth="3" />
          <circle cx="500" cy="8" r="6" fill={isSustainable ? "#38E58B" : isCritical ? "#FF5B65" : "#35D5FF"} />

          {/* Vertical Forest Garden Panels (Active in sustainable mode) */}
          {isSustainable && (
            <g fill="#38E58B" opacity="0.8">
              <rect x="475" y="130" width="12" height="18" rx="2" />
              <rect x="515" y="130" width="12" height="18" rx="2" />
              <rect x="475" y="165" width="12" height="18" rx="2" />
              <rect x="515" y="165" width="12" height="18" rx="2" />
              <rect x="475" y="200" width="12" height="18" rx="2" />
              <rect x="515" y="200" width="12" height="18" rx="2" />
            </g>
          )}

          {/* Right Tower: Smart Grid Station */}
          <rect
            x="680"
            y="180"
            width="120"
            height="200"
            fill="url(#buildingGradDark)"
            stroke={isSustainable ? "#38E58B" : "#35D5FF"}
            strokeWidth="1.5"
            rx="4"
          />

          {/* Rooftop Solar Panels */}
          {activeLevel >= 3 && (
            <g>
              <line x1="125" y1="168" x2="225" y2="168" stroke="url(#solarGlow)" strokeWidth="4" />
              <line x1="685" y1="178" x2="795" y2="178" stroke="url(#solarGlow)" strokeWidth="4" />
            </g>
          )}

          {/* Rooftop Wind Turbines (Visible if sustainable) */}
          {isSustainable && (
            <g stroke="#38E58B" strokeWidth="2" fill="none">
              {/* Wind turbine 1 */}
              <line x1="280" y1="200" x2="280" y2="150" />
              <circle cx="280" cy="150" r="3" fill="#38E58B" />
              <line x1="280" y1="150" x2="295" y2="140" />
              <line x1="280" y1="150" x2="265" y2="140" />

              {/* Wind turbine 2 */}
              <line x1="630" y1="180" x2="630" y2="135" />
              <circle cx="630" cy="135" r="3" fill="#38E58B" />
              <line x1="630" y1="135" x2="645" y2="125" />
              <line x1="630" y1="135" x2="615" y2="125" />
            </g>
          )}

          {/* Floating Autonomous Delivery Drones */}
          <g>
            <motion.g
              animate={{
                x: [100, 450, 850, 450, 100],
                y: [90, 120, 80, 110, 90],
              }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            >
              <rect x="0" y="0" width="14" height="5" rx="2" fill="#35D5FF" />
              <circle cx="7" cy="6" r="2" fill={isSustainable ? "#38E58B" : "#FF5B65"} />
            </motion.g>
            <motion.g
              animate={{
                x: [800, 350, 150, 500, 800],
                y: [160, 130, 170, 140, 160],
              }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              <rect x="0" y="0" width="12" height="4" rx="2" fill="#38E58B" />
              <circle cx="6" cy="5" r="1.5" fill="#35D5FF" />
            </motion.g>
          </g>

          {/* Ground Highway with Autonomous Light Pulses */}
          <rect x="0" y="360" width="1000" height="20" fill="#0A111F" />
          <line x1="0" y1="365" x2="1000" y2="365" stroke="#35D5FF" strokeWidth="2" strokeDasharray="15,10" opacity="0.6" />
        </svg>

        {/* Status Overlay Footer */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 py-3 px-4 border-t border-[#35D5FF]/10 bg-[#0B1424]/80 backdrop-blur-md rounded-b-xl">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block w-3 h-3 rounded-full animate-ping ${
                isSustainable
                  ? "bg-[#38E58B]"
                  : isCritical
                  ? "bg-[#FF5B65]"
                  : "bg-[#35D5FF]"
              }`}
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-[#98A8BD]">
                Simulated Metropolis Condition
              </span>
              <p
                className={`font-semibold font-mono text-sm ${
                  isSustainable
                    ? "text-[#38E58B]"
                    : isCritical
                    ? "text-[#FF5B65]"
                    : "text-[#35D5FF]"
                }`}
              >
                NOVA CITY:{" "}
                {activeLevel === 5
                  ? "THRIVING ECO-GRID (PHASE V)"
                  : activeLevel === 4
                  ? "SUSTAINABLE EQUILIBRIUM"
                  : activeLevel === 3
                  ? "STABILIZING TRANSITION"
                  : activeLevel === 2
                  ? "SYSTEMIC STRAIN DETECTED"
                  : "CRITICAL GRID COLLAPSE IMMINENT"}
              </p>
            </div>
          </div>

          {/* Interactive State Toggle for Presenter or Landing preview */}
          {interactive && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#98A8BD] hidden sm:inline">Simulation Preview:</span>
              <div className="inline-flex rounded-lg border border-[#35D5FF]/20 bg-[#070B16] p-1">
                <button
                  type="button"
                  onClick={() => setCurrentLevel(1)}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeLevel === 1
                      ? "bg-[#FF5B65]/20 text-[#FF5B65] font-bold"
                      : "text-[#98A8BD] hover:text-white"
                  }`}
                >
                  Polluted
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentLevel(3)}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeLevel === 3
                      ? "bg-[#FCC30B]/20 text-[#FCC30B] font-bold"
                      : "text-[#98A8BD] hover:text-white"
                  }`}
                >
                  Balanced
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentLevel(5)}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeLevel === 5
                      ? "bg-[#38E58B]/20 text-[#38E58B] font-bold"
                      : "text-[#98A8BD] hover:text-white"
                  }`}
                >
                  Sustainable
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
