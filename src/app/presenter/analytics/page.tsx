"use client";

import React, { useMemo } from "react";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { PresenterNav } from "@/components/PresenterNav";
import { SharedCityHUD } from "@/components/SharedCityHUD";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Globe2,
  Recycle,
  Award,
} from "lucide-react";

export default function PresenterAnalyticsPage() {
  const { participants, sharedCityMetrics } = useGameState();

  const total = participants.length;

  // Aggregate averages
  const avgDimensions = useMemo(() => {
    if (!total) return { env: 250, energy: 250, social: 250, econ: 250, total: 1000 };
    const sums = participants.reduce(
      (acc, p) => ({
        env: acc.env + p.score.environmental,
        energy: acc.energy + p.score.energy,
        social: acc.social + p.score.social,
        econ: acc.econ + p.score.economic,
        total: acc.total + p.score.total,
      }),
      { env: 0, energy: 0, social: 0, econ: 0, total: 0 }
    );

    return {
      env: Math.round(sums.env / total),
      energy: Math.round(sums.energy / total),
      social: Math.round(sums.social / total),
      econ: Math.round(sums.econ / total),
      total: Math.round(sums.total / total),
    };
  }, [participants, total]);

  const radarData = [
    { subject: "Environmental (40%)", A: avgDimensions.env, fullMark: 1000 },
    { subject: "Energy Thrift (25%)", A: avgDimensions.energy, fullMark: 1000 },
    { subject: "Social Equity (20%)", A: avgDimensions.social, fullMark: 1000 },
    { subject: "Economic Viability (15%)", A: avgDimensions.econ, fullMark: 1000 },
  ];

  // AI Architecture Breakdown (Mission 1)
  const m1Choices = useMemo(() => {
    let edge = 0;
    let cloud = 0;

    participants.forEach((p) => {
      const c = p.decisions[1];
      if (c === "A") edge++;
      if (c === "B") cloud++;
    });

    return [
      { name: "Local Edge AI (Sustainable)", value: edge, color: "#38E58B" },
      { name: "Continuous Cloud (Unsustainable)", value: cloud, color: "#FF5B65" },
    ];
  }, [participants]);

  // Overall Sustainable vs Unsustainable decisions across all missions
  const overallDecisions = useMemo(() => {
    let sustainable = 0;
    let unsustainable = 0;

    participants.forEach((p) => {
      Object.values(p.decisions).forEach((dec) => {
        if (dec === "A") sustainable++;
        if (dec === "B") unsustainable++;
      });
    });

    return [
      { name: "Sustainable Decisions", value: sustainable, color: "#38E58B" },
      { name: "Unsustainable Decisions", value: unsustainable, color: "#FF5B65" },
    ];
  }, [participants]);

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />
      <PresenterNav />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#38E58B]" />
            Cohort Sustainability Analytics
          </h1>
          <p className="text-xs font-mono text-[#98A8BD] mt-1">
            Aggregated cross-cadet intelligence and macro environmental telemetry
          </p>
        </div>

        {/* Collective Shared Simulation Telemetry */}
        <SharedCityHUD metrics={sharedCityMetrics} />

        {/* 4 Dimension Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-[#38E58B]/20">
            <span className="text-xs font-mono text-[#98A8BD] uppercase block">
              Environmental Mean
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#38E58B]">
                {avgDimensions.env}
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Weight 40%</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#FCC30B]/20">
            <span className="text-xs font-mono text-[#98A8BD] uppercase block">
              Energy Efficiency Mean
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#FCC30B]">
                {avgDimensions.energy}
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Weight 25%</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#35D5FF]/20">
            <span className="text-xs font-mono text-[#98A8BD] uppercase block">
              Social Equity Mean
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#35D5FF]">
                {avgDimensions.social}
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Weight 20%</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-[#F6B94A]/20">
            <span className="text-xs font-mono text-[#98A8BD] uppercase block">
              Economic Feasibility Mean
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-extrabold font-mono text-[#F6B94A]">
                {avgDimensions.econ}
              </span>
              <span className="text-xs font-mono text-[#98A8BD]">Weight 15%</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Radar (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
            <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
              Cohort Sustainability Balance
            </h3>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="rgba(53, 213, 255, 0.15)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#98A8BD", fontSize: 11, fontFamily: "monospace" }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 1000]}
                    stroke="rgba(53, 213, 255, 0.3)"
                    tick={{ fill: "#98A8BD", fontSize: 9 }}
                  />
                  <Radar
                    name="Workshop Cohort"
                    dataKey="A"
                    stroke="#38E58B"
                    fill="#38E58B"
                    fillOpacity={0.35}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Architecture Preferences (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 rounded-2xl border border-[#35D5FF]/20 space-y-4">
            <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider">
              Overall Workshop Decision Trends
            </h3>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overallDecisions} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#98A8BD" fontSize={11} fontFamily="monospace" />
                  <YAxis stroke="#98A8BD" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0B1424",
                      borderColor: "#35D5FF",
                      fontFamily: "monospace",
                    }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {overallDecisions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
