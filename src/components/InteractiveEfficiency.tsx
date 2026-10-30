"use client";

import React, { useState } from "react";
import { Zap, Sun, Wind, Battery, Layers, CheckCircle2 } from "lucide-react";

export function InteractiveEfficiency() {
  const [quantized, setQuantized] = useState(true);
  const [scheduledAtNight, setScheduledAtNight] = useState(true);

  // Power and carbon calculation
  const baseFlops = quantized ? 25 : 100; // percent
  const powerWatts = quantized ? 85 : 340; // Watts per chip
  const carbonGrams = scheduledAtNight
    ? (quantized ? 8 : 32)
    : (quantized ? 85 : 340); // g CO2/hr

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FCC30B] uppercase tracking-widest font-bold">
            Interactive Green Computing Lab
          </span>
          <h3 className="text-base font-display font-bold text-white">
            Algorithmic Compression & Carbon-Aware Scheduling
          </h3>
        </div>
        <div className="text-xs font-mono text-[#38E58B] flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Simulation Active</span>
        </div>
      </div>

      {/* Control Switches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Switch 1: Quantization */}
        <div className="p-4 rounded-xl bg-[#091120] border border-white/10 space-y-2 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#35D5FF]" />
              Model Precision
            </span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                quantized ? "bg-[#38E58B]/20 text-[#38E58B]" : "bg-[#FF5B65]/20 text-[#FF5B65]"
              }`}
            >
              {quantized ? "INT8 Quantized" : "FP32 Uncompressed"}
            </span>
          </div>

          <p className="text-[11px] text-[#98A8BD]">
            Convert bloated 32-bit floats into compact 8-bit integers to slash math operations.
          </p>

          <button
            type="button"
            onClick={() => setQuantized(!quantized)}
            className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
              quantized
                ? "bg-[#38E58B] text-[#070B16]"
                : "bg-[#1E293B] text-white hover:bg-[#334155]"
            }`}
          >
            {quantized ? "✔ INT8 Enabled (-75% FLOPs)" : "Enable INT8 Quantization"}
          </button>
        </div>

        {/* Switch 2: Temporal Scheduling */}
        <div className="p-4 rounded-xl bg-[#091120] border border-white/10 space-y-2 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              {scheduledAtNight ? (
                <Wind className="w-4 h-4 text-[#38E58B]" />
              ) : (
                <Sun className="w-4 h-4 text-[#F6B94A]" />
              )}
              Execution Window
            </span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                scheduledAtNight ? "bg-[#38E58B]/20 text-[#38E58B]" : "bg-[#F6B94A]/20 text-[#F6B94A]"
              }`}
            >
              {scheduledAtNight ? "Night Wind (Clean)" : "Daytime Peak (Fossil)"}
            </span>
          </div>

          <p className="text-[11px] text-[#98A8BD]">
            Shift non-urgent model retraining to nighttime hours when curtailed wind energy is cheap.
          </p>

          <button
            type="button"
            onClick={() => setScheduledAtNight(!scheduledAtNight)}
            className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
              scheduledAtNight
                ? "bg-[#35D5FF] text-[#070B16]"
                : "bg-[#1E293B] text-white hover:bg-[#334155]"
            }`}
          >
            {scheduledAtNight ? "✔ Nocturnal Clean Schedule" : "Shift to Nocturnal Window"}
          </button>
        </div>
      </div>

      {/* Real-Time Meter Results */}
      <div className="p-4 rounded-xl bg-[#0A1816] border border-[#38E58B]/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono">
        <div>
          <span className="text-[10px] text-[#98A8BD] uppercase block">Compute FLOPs</span>
          <span className="text-2xl font-black text-white">{baseFlops}%</span>
          <span className="text-[10px] text-[#38E58B] block">
            {quantized ? "75% Math Eliminated" : "Full Floating Point"}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-[#98A8BD] uppercase block">Chip Power Draw</span>
          <span className="text-2xl font-black text-[#FCC30B]">{powerWatts} W</span>
          <span className="text-[10px] text-[#98A8BD] block">Per Inference Blade</span>
        </div>

        <div>
          <span className="text-[10px] text-[#98A8BD] uppercase block">Carbon Footprint</span>
          <span
            className={`text-2xl font-black ${
              carbonGrams < 50 ? "text-[#38E58B]" : "text-[#FF5B65]"
            }`}
          >
            {carbonGrams} g
          </span>
          <span className="text-[10px] text-[#98A8BD] block">CO2 / Hour</span>
        </div>
      </div>
    </div>
  );
}
