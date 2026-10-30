"use client";

import React, { useState } from "react";
import { Recycle, Wrench, RefreshCw, Cpu, ShieldCheck } from "lucide-react";

export function InteractiveCircularEconomy() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      name: "1. REDUCE",
      title: "Eliminate Unnecessary Manufacturing",
      desc: "Avoid building entirely new robot chassis when existing aluminum frames are 100% structurally sound.",
      saving: "Prevents raw bauxite mining and smelting emissions.",
      color: "#38E58B",
    },
    {
      name: "2. REUSE",
      title: "Preserve Durable Heavy Components",
      desc: "Servos, wheels, hydraulic pistons, and metal frames have 15-year lifespans. Keep them in service across hardware generations.",
      saving: "Saves 85% of total physical robot mass.",
      color: "#35D5FF",
    },
    {
      name: "3. REPAIR",
      title: "Civic Repair & Community Refurbishment",
      desc: "Re-solder damaged capacitor leads, replace worn tread rubber, and patch software kernels instead of throwing the machine into a landfill.",
      saving: "Creates high-skill local robotics technician jobs.",
      color: "#FCC30B",
    },
    {
      name: "4. REFURBISH",
      title: "Modular Daughterboard Swapping",
      desc: "Only replace the 15% compute accelerator board when newer AI models require more TOPS. Plug-and-play in 20 minutes.",
      saving: "Delivers 100% modern computing with minimal silicon waste.",
      color: "#F6B94A",
    },
    {
      name: "5. RECYCLE",
      title: "Closed-Loop Material Recovery",
      desc: "When lithium batteries and copper windings finally reach end-of-life, hydrometallurgical recycling recovers 95% of rare metals.",
      saving: "Halts toxic leachate from entering drinking aquifers.",
      color: "#38E58B",
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#38E58B] uppercase tracking-widest font-bold">
            Interactive Lifecycle Simulator
          </span>
          <h3 className="text-base font-display font-bold text-white">
            The 5R Circular Robotics Loop
          </h3>
        </div>
        <div className="text-xs font-mono text-[#98A8BD]">
          Click nodes in the circular chain
        </div>
      </div>

      {/* 5 Step Pills Row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        {steps.map((st, idx) => (
          <button
            key={st.name}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={`flex-1 min-w-[100px] py-2 px-2.5 rounded-xl text-xs font-mono font-bold text-center border transition-all ${
              activeStep === idx
                ? "bg-[#38E58B]/20 text-[#38E58B] border-[#38E58B] shadow-md shadow-[#38E58B]/20 scale-105"
                : "bg-[#0A1220] text-[#98A8BD] border-white/5 hover:text-white"
            }`}
          >
            {st.name}
          </button>
        ))}
      </div>

      {/* Active Stage Detail */}
      <div
        className="p-5 rounded-2xl border space-y-3 font-mono text-xs transition-colors"
        style={{
          borderColor: `${current.color}40`,
          backgroundColor: `${current.color}0D`,
        }}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-display font-bold text-base text-white">
            {current.title}
          </h4>
          <span
            className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase"
            style={{
              backgroundColor: `${current.color}20`,
              color: current.color,
            }}
          >
            Stage {activeStep + 1} of 5
          </span>
        </div>

        <p className="text-[#98A8BD] text-xs leading-relaxed">{current.desc}</p>

        <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-white font-semibold text-[11px]">
          <ShieldCheck className="w-4 h-4 text-[#38E58B] shrink-0" />
          <span>Environmental Dividend: {current.saving}</span>
        </div>
      </div>
    </div>
  );
}
