"use client";

import React from "react";
import { CityMetrics } from "@/types/game";
import { getCityCondition } from "@/lib/city-health";
import { motion } from "framer-motion";
import {
  Zap,
  CloudRain,
  Droplets,
  Trash2,
  Activity,
  Heart,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

interface CityMetricsBarProps {
  metrics: CityMetrics;
  showDetails?: boolean;
}

export function CityMetricsBar({ metrics, showDetails = true }: CityMetricsBarProps) {
  const condition = getCityCondition(metrics);

  const metricItems = [
    {
      key: "energy",
      name: "Grid Energy Stress",
      val: metrics.energyIndex,
      icon: <Zap className="w-3.5 h-3.5 text-[#FCC30B]" />,
      invert: true, // lower is better
      unit: "%",
    },
    {
      key: "carbon",
      name: "Carbon Emissions",
      val: metrics.carbonIndex,
      icon: <CloudRain className="w-3.5 h-3.5 text-[#FF5B65]" />,
      invert: true,
      unit: "idx",
    },
    {
      key: "water",
      name: "Cooling Water Draw",
      val: metrics.waterIndex,
      icon: <Droplets className="w-3.5 h-3.5 text-[#35D5FF]" />,
      invert: true,
      unit: "idx",
    },
    {
      key: "ewaste",
      name: "E-Waste Scrap Pile",
      val: metrics.ewasteIndex,
      icon: <Trash2 className="w-3.5 h-3.5 text-[#F6B94A]" />,
      invert: true,
      unit: "kT",
    },
    {
      key: "efficiency",
      name: "Operational Efficiency",
      val: metrics.operationalEfficiency,
      icon: <Activity className="w-3.5 h-3.5 text-[#35D5FF]" />,
      invert: false, // higher is better
      unit: "%",
    },
    {
      key: "wellbeing",
      name: "Citizen Well-being",
      val: metrics.citizenWellbeing,
      icon: <Heart className="w-3.5 h-3.5 text-[#38E58B]" />,
      invert: false,
      unit: "pts",
    },
    {
      key: "resilience",
      name: "Network Resilience",
      val: metrics.resilienceIndex,
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#38E58B]" />,
      invert: false,
      unit: "idx",
    },
  ];

  return (
    <div className="glass-panel rounded-xl p-4 border border-[#35D5FF]/15">
      {/* Header with Condition */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#35D5FF]/10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#35D5FF]" />
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-mono">
            Nova City Telemetry
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#98A8BD]">Condition:</span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider border"
            style={{
              color: condition.color,
              borderColor: `${condition.color}40`,
              backgroundColor: `${condition.color}15`,
            }}
          >
            {condition.status}
          </span>
        </div>
      </div>

      {/* Metric Bars */}
      <div className="space-y-3">
        {metricItems.map((item) => {
          // Determine status color
          let barColor = "#35D5FF";
          if (item.invert) {
            barColor = item.val > 70 ? "#FF5B65" : item.val > 45 ? "#F6B94A" : "#38E58B";
          } else {
            barColor = item.val >= 70 ? "#38E58B" : item.val >= 45 ? "#35D5FF" : "#FF5B65";
          }

          return (
            <div key={item.key} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#98A8BD]">
                  {item.icon}
                  {item.name}
                </span>
                <span className="font-semibold text-white">
                  {item.val}
                  <span className="text-[#98A8BD] text-[10px] ml-0.5">{item.unit}</span>
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#0A1220] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, Math.max(5, item.val))}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: barColor }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {showDetails && (
        <div className="mt-4 pt-3 border-t border-[#35D5FF]/10 text-[11px] text-[#98A8BD] flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-[#35D5FF] shrink-0" />
          <span>Simulation values are normalized illustrative environmental indicators.</span>
        </div>
      )}
    </div>
  );
}
