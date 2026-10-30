"use client";

import React from "react";
import { SharedCityMetrics } from "@/types/game";
import {
  Zap,
  Radio,
  Leaf,
  Droplets,
  HeartPulse,
  Users,
  Trash2,
  Shield,
  Activity,
} from "lucide-react";

interface SharedCityHUDProps {
  metrics: SharedCityMetrics;
  compact?: boolean;
  className?: string;
}

export const SharedCityHUD: React.FC<SharedCityHUDProps> = ({
  metrics,
  compact = false,
  className = "",
}) => {
  const items = [
    {
      key: "energyStability",
      label: "Energy Grid",
      val: metrics.energyStability,
      icon: Zap,
      color: metrics.energyStability > 60 ? "#38E58B" : metrics.energyStability > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "networkStability",
      label: "Network Uplink",
      val: metrics.networkStability,
      icon: Radio,
      color: metrics.networkStability > 60 ? "#35D5FF" : metrics.networkStability > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "environmentalHealth",
      label: "Eco Biosphere",
      val: metrics.environmentalHealth,
      icon: Leaf,
      color: metrics.environmentalHealth > 60 ? "#38E58B" : metrics.environmentalHealth > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "waterAvailability",
      label: "Clean Water",
      val: metrics.waterAvailability,
      icon: Droplets,
      color: metrics.waterAvailability > 60 ? "#35D5FF" : metrics.waterAvailability > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "rescueProgress",
      label: "Rescue Ops",
      val: metrics.rescueProgress,
      icon: HeartPulse,
      color: metrics.rescueProgress > 60 ? "#38E58B" : metrics.rescueProgress > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "publicTrust",
      label: "Civic Trust",
      val: metrics.publicTrust,
      icon: Users,
      color: metrics.publicTrust > 60 ? "#38E58B" : metrics.publicTrust > 35 ? "#FCC30B" : "#FF5B65",
      unit: "%",
    },
    {
      key: "ewasteLevel",
      label: "E-Waste Pile",
      val: metrics.ewasteLevel,
      icon: Trash2,
      // Invert color: low ewaste is green, high ewaste is red
      color: metrics.ewasteLevel < 40 ? "#38E58B" : metrics.ewasteLevel < 70 ? "#FCC30B" : "#FF5B65",
      unit: "%",
      isWaste: true,
    },
  ];

  const averageVitality = Math.round(
    (metrics.energyStability +
      metrics.networkStability +
      metrics.environmentalHealth +
      metrics.waterAvailability +
      metrics.rescueProgress +
      metrics.publicTrust +
      (100 - metrics.ewasteLevel)) /
      7
  );

  return (
    <div
      className={`glass-panel rounded-2xl border border-[#35D5FF]/20 bg-[#070D1A]/90 p-4 sm:p-5 shadow-2xl relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#35D5FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#35D5FF] animate-pulse" />
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#35D5FF]" />
              SHARED NOVA CITY TELEMETRY
            </h4>
            <span className="text-[10px] font-mono text-[#98A8BD]">
              Live Room Collective Simulation
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-mono uppercase text-[#98A8BD] block">
            Planetary Equilibrium
          </span>
          <span className="text-sm font-mono font-black text-[#38E58B]">
            {averageVitality}%
          </span>
        </div>
      </div>

      {/* 7 Collective Simulation Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.key}
              className="p-2.5 rounded-xl bg-[#0B1528] border border-white/5 space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#98A8BD] flex items-center gap-1 truncate">
                  <Icon className="w-3 h-3 text-[#35D5FF] shrink-0" />
                  <span className="truncate">{it.label}</span>
                </span>
                <span className="font-bold text-white shrink-0 ml-1">
                  {Math.round(it.val)}
                  <span className="text-[9px] text-[#98A8BD]">{it.unit}</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-[#111C30] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(100, Math.max(0, it.val))}%`,
                    backgroundColor: it.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
