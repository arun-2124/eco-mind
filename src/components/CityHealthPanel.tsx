"use client";

import React from "react";
import { CityMetrics } from "@/types/game";
import { getCityCondition } from "@/lib/city-health";
import {
  Zap,
  CloudRain,
  Flame,
  Trash2,
  Users,
  ShieldAlert,
  Activity,
} from "lucide-react";

interface CityHealthPanelProps {
  metrics: CityMetrics;
  showConditionHeader?: boolean;
}

export const CityHealthPanel: React.FC<CityHealthPanelProps> = ({
  metrics,
  showConditionHeader = true,
}) => {
  const condition = getCityCondition(metrics);

  const metricItems = [
    {
      key: "carbonIndex",
      label: "Carbon Intensity",
      val: metrics.carbonIndex,
      unit: "ppm",
      icon: Flame,
      invertColor: true, // high is bad
      desc: "Emissions from AI compute",
    },
    {
      key: "energyIndex",
      label: "Grid Energy Demand",
      val: metrics.energyIndex,
      unit: "GW",
      icon: Zap,
      invertColor: true,
      desc: "Centralized server draw",
    },
    {
      key: "waterIndex",
      label: "Cooling Evaporation",
      val: metrics.waterIndex,
      unit: "ML",
      icon: CloudRain,
      invertColor: true,
      desc: "Data center water consumption",
    },
    {
      key: "ewasteIndex",
      label: "Hardware E-Waste",
      val: metrics.ewasteIndex,
      unit: "Tons",
      icon: Trash2,
      invertColor: true,
      desc: "Discarded robotics & batteries",
    },
    {
      key: "citizenWellbeing",
      label: "Citizen Well-being",
      val: metrics.citizenWellbeing,
      unit: "%",
      icon: Users,
      invertColor: false, // high is good
      desc: "Public safety & service access",
    },
    {
      key: "resilienceIndex",
      label: "Infrastructure Resilience",
      val: metrics.resilienceIndex,
      unit: "%",
      icon: ShieldAlert,
      invertColor: false,
      desc: "Fault tolerance & offline uptime",
    },
  ];

  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#35D5FF]/15 space-y-4">
      {/* Header with City Condition status */}
      {showConditionHeader && (
        <div className="flex items-center justify-between pb-3 border-b border-[#35D5FF]/10">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#35D5FF]" />
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
              Nova City Telemetry
            </h4>
          </div>
          <span
            className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold border"
            style={{
              backgroundColor: `${condition.color}18`,
              borderColor: `${condition.color}50`,
              color: condition.color,
            }}
          >
            STATUS: {condition.status.toUpperCase()}
          </span>
        </div>
      )}

      {/* Grid of 6 Live Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {metricItems.map((item) => {
          const Icon = item.icon;
          const isBad = item.invertColor ? item.val > 65 : item.val < 45;
          const isMedium = item.invertColor
            ? item.val > 45 && item.val <= 65
            : item.val >= 45 && item.val < 65;

          const barColor = isBad ? "#FF5B65" : isMedium ? "#FCC30B" : "#38E58B";

          return (
            <div
              key={item.key}
              className="p-3 rounded-xl bg-[#091120] border border-white/5 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#98A8BD] flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-[#35D5FF]" />
                  <span>{item.label}</span>
                </span>
                <span className="font-bold text-white">
                  {Math.round(item.val)}
                  <span className="text-[10px] text-[#98A8BD] ml-0.5">
                    {item.unit}
                  </span>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-[#111C30] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(100, Math.max(0, item.val))}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>

              <span className="text-[10px] font-mono text-[#98A8BD]/70 block truncate">
                {item.desc}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
