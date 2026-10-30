"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { SDGBadge } from "@/components/SDGBadge";
import { SDG_DETAILS } from "@/lib/game-data";
import { SDGNumber } from "@/types/game";
import {
  Cpu,
  Bot,
  Zap,
  Recycle,
  Globe,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const sdgList: SDGNumber[] = [3, 6, 7, 9, 11, 12, 13];

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#35D5FF]/30 bg-[#0B1528]">
            <BookOpen className="w-3.5 h-3.5 text-[#35D5FF]" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#35D5FF]">
              Workshop Pedagogical Syllabus
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            The Sustainable Intelligence Curriculum
          </h1>
          <p className="text-xs sm:text-sm text-[#98A8BD] max-w-2xl mx-auto font-mono leading-relaxed">
            Prepared for the Robotics and Automation Club Workshop: Physical AI × Edge AI × UN Sustainable Development Goals.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#35D5FF]/15 border border-[#35D5FF]/30 flex items-center justify-center text-[#35D5FF]">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Physical Artificial Intelligence
            </h3>
            <p className="text-xs text-[#98A8BD] leading-relaxed">
              Unlike purely digital AI models that process text and images in remote data centers, <strong>Physical AI</strong> operates directly in the physical world. It perceives through sensors (LiDAR, thermal, vision), plans trajectories, and actuates physical forces via motors and hydraulic limbs. We explore energy constraints, kinetic safety risks, and physical wear.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#38E58B]/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#38E58B]/15 border border-[#38E58B]/30 flex items-center justify-center text-[#38E58B]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Edge AI vs Cloud AI Trade-offs
            </h3>
            <p className="text-xs text-[#98A8BD] leading-relaxed">
              A foundational learning principle: <em>Edge AI is not automatically the superior choice in every scenario</em>. While Edge inference eliminates wireless transmission latency and data center cooling water, it drains onboard batteries and increases semiconductor manufacturing demand. Cloud AI enables pooled GPU utilization and easier model updates. Hybrid architectures balance both.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#FCC30B]/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCC30B]/15 border border-[#FCC30B]/30 flex items-center justify-center text-[#FCC30B]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Algorithmic Thrift & Green Computing
            </h3>
            <p className="text-xs text-[#98A8BD] leading-relaxed">
              Software engineering directly impacts carbon output. Through <strong>INT8/INT4 quantization</strong>, knowledge distillation, and layer pruning, engineers can slash computational FLOPs by 75% with negligible accuracy drop. <strong>Carbon-aware temporal scheduling</strong> shifts deferrable batch training to nocturnal renewable peaks.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#F6B94A]/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F6B94A]/15 border border-[#F6B94A]/30 flex items-center justify-center text-[#F6B94A]">
              <Recycle className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Circular Robotics & E-Waste Governance
            </h3>
            <p className="text-xs text-[#98A8BD] leading-relaxed">
              The embodied carbon in semiconductor lithography often exceeds total operating energy over a device&apos;s lifetime. We advocate for <strong>modular compute retrofits</strong>—preserving durable mechanical frames, hydraulics, and motors while simply replacing plug-and-play NPU daughterboards—and supporting civic right-to-repair ecosystems.
            </p>
          </div>
        </div>

        {/* UN SDGs Mapping Detailed Section */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#35D5FF]/20 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#35D5FF]/15 pb-4">
            <Globe className="w-5 h-5 text-[#38E58B]" />
            <h2 className="font-display font-bold text-xl text-white">
              United Nations Sustainable Development Goals Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sdgList.map((sdgNum) => {
              const info = SDG_DETAILS[sdgNum];
              return (
                <div
                  key={sdgNum}
                  className="p-4 rounded-xl bg-[#091120] border border-white/5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <SDGBadge sdg={sdgNum} showTitle={true} size="md" />
                    <span className="text-[10px] font-mono text-[#98A8BD]">Target Pillar</span>
                  </div>
                  <p className="text-xs text-[#98A8BD] leading-relaxed">
                    {sdgNum === 3 &&
                      "Ensuring human physical safety in robot-assisted disaster extrication, avoiding toxic industrial dust and robotic kinetic hazards."}
                    {sdgNum === 6 &&
                      "Eliminating evaporative water cooling tower consumption in hyperscale data centers to protect municipal drinking water aquifers."}
                    {sdgNum === 7 &&
                      "Decoupling physical AI fleets from strained urban grids through localized solar microgrids and smart battery swapping depots."}
                    {sdgNum === 9 &&
                      "Fostering resilient, fault-tolerant edge-cloud infrastructure that maintains public transit during power brownouts."}
                    {sdgNum === 11 &&
                      "Building resilient, inclusive smart cities that do not leave peripheral wards vulnerable to communications disconnects."}
                    {sdgNum === 12 &&
                      "Ending planned obsolescence through circular civic repair workshops, open hardware schemas, and modular upgrades."}
                    {sdgNum === 13 &&
                      "Enforcing carbon-aware job scheduling to minimize fossil peaker turbine usage and slash computing greenhouse gas emissions."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-4">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-xl shadow-[#35D5FF]/20 hover:opacity-90 transition-opacity"
          >
            <span>JOIN ACTIVE WORKSHOP SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
