"use client";

import React, { useState } from "react";
import { AI_EXPLAINER_TOPICS } from "@/lib/game-data";
import { sound } from "@/lib/audio";
import {
  Brain,
  Cpu,
  Cloud,
  Bot,
  Eye,
  Radio,
  Scan,
  Zap,
  Sparkles,
  Recycle,
  Search,
  BookOpen,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Cpu,
  Cloud,
  Bot,
  Eye,
  Radio,
  Scan,
  Zap,
  Sparkles,
  Recycle,
};

interface AIExplainerProps {
  className?: string;
  defaultTopicId?: string;
}

export const AIExplainer: React.FC<AIExplainerProps> = ({
  className = "",
  defaultTopicId = "edge-ai",
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(defaultTopicId);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTopics = AI_EXPLAINER_TOPICS.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.tag.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q)
    );
  });

  const selectedTopic =
    AI_EXPLAINER_TOPICS.find((t) => t.id === selectedTopicId) ||
    filteredTopics[0] ||
    AI_EXPLAINER_TOPICS[0];

  const SelectedIcon = ICON_MAP[selectedTopic.iconName] || Brain;

  return (
    <div
      className={`glass-panel rounded-2xl border border-[#35D5FF]/20 bg-[#0A101D] overflow-hidden flex flex-col md:flex-row ${className}`}
    >
      {/* Left Sidebar: Topic Selector & Search */}
      <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 p-4 space-y-3 bg-[#070B16]">
        <div className="flex items-center gap-2 pb-2 border-b border-white/10">
          <BookOpen className="w-4 h-4 text-[#35D5FF]" />
          <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">
            AI Learning Center
          </h3>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#98A8BD]" />
          <input
            type="text"
            placeholder="Search concepts (e.g. LiDAR, Edge)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#0F172A] border border-white/10 text-xs font-mono text-white placeholder-[#98A8BD] focus:outline-none focus:border-[#35D5FF]"
          />
        </div>

        {/* Topic List */}
        <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
          {filteredTopics.map((topic) => {
            const Icon = ICON_MAP[topic.iconName] || Brain;
            const isSelected = topic.id === selectedTopic.id;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSelectedTopicId(topic.id);
                }}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between border ${
                  isSelected
                    ? "bg-[#35D5FF]/15 border-[#35D5FF] text-white"
                    : "bg-[#0B1220] border-transparent text-[#98A8BD] hover:text-white hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? "text-[#35D5FF]" : "text-[#98A8BD]"
                    }`}
                  />
                  <span className="truncate font-semibold">{topic.title}</span>
                </div>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/10 shrink-0">
                  {topic.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content View: Detailed Pedagogical Card */}
      <div className="flex-1 p-6 space-y-4 bg-[#0A101D]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#35D5FF]/10 border border-[#35D5FF]/30 flex items-center justify-center text-[#35D5FF]">
              <SelectedIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                {selectedTopic.title}
              </h4>
              <p className="text-xs font-mono text-[#35D5FF]">
                {selectedTopic.subtitle}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#38E58B]/15 text-[#38E58B] border border-[#38E58B]/30 uppercase">
            {selectedTopic.tag}
          </span>
        </div>

        {/* Plain Language Definition */}
        <div className="p-4 rounded-xl bg-[#070B16] border border-white/5 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#98A8BD] block font-bold">
            Plain Language Definition:
          </span>
          <p className="text-xs sm:text-sm text-[#F4F7FC] leading-relaxed">
            &ldquo;{selectedTopic.definition}&rdquo;
          </p>
        </div>

        {/* Real-World Analogy / Example */}
        <div className="p-4 rounded-xl bg-[#091528] border border-[#35D5FF]/20 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#35D5FF] block font-bold">
            Real-World Example for Beginners:
          </span>
          <p className="text-xs text-[#98A8BD] leading-relaxed">
            {selectedTopic.realWorldExample}
          </p>
        </div>

        {/* Key Takeaway */}
        <div className="p-4 rounded-xl bg-[#0A241C] border border-[#38E58B]/30 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#38E58B] block font-bold">
            Key Sustainability Takeaway:
          </span>
          <p className="text-xs text-[#38E58B] font-mono leading-relaxed">
            ✦ {selectedTopic.takeaway}
          </p>
        </div>
      </div>
    </div>
  );
};
