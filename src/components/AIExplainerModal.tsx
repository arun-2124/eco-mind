"use client";

import React, { useState } from "react";
import { AI_EXPLAINER_TOPICS } from "@/lib/game-data";
import { AIExplainerTopic } from "@/types/game";
import { BookOpen, Search, X, Sparkles, CheckCircle2, Bot, HelpCircle } from "lucide-react";

interface AIExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopicId?: string;
}

export function AIExplainerModal({
  isOpen,
  onClose,
  defaultTopicId,
}: AIExplainerModalProps) {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<AIExplainerTopic>(
    AI_EXPLAINER_TOPICS.find((t) => t.id === defaultTopicId) ||
      AI_EXPLAINER_TOPICS[0]
  );

  if (!isOpen) return null;

  const filteredTopics = AI_EXPLAINER_TOPICS.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase()) ||
      t.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6">
      <div className="glass-panel w-full max-w-4xl max-h-[85vh] rounded-2xl border border-[#35D5FF]/30 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#35D5FF]/15 flex items-center justify-between bg-[#0B1528]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#35D5FF]/15 border border-[#35D5FF]/30 flex items-center justify-center text-[#35D5FF]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-white">
                Beginner AI &amp; Sustainability Learning Hub
              </h2>
              <p className="text-xs font-mono text-[#98A8BD]">
                10 Core Concepts Explained Simply for Robotics Students
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#98A8BD] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Topic Selector Grid */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Left List (5 cols) */}
          <div className="md:col-span-5 p-4 space-y-3 bg-[#080E1C]">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#98A8BD] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search concepts (e.g. Edge, LiDAR)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0D1424] border border-[#35D5FF]/20 text-xs font-mono text-white placeholder-[#98A8BD]/50 focus:outline-none focus:border-[#35D5FF]"
              />
            </div>

            <div className="space-y-1.5 max-h-[50vh] overflow-y-auto pr-1">
              {filteredTopics.map((topic) => {
                const isSelected = selectedTopic.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-mono transition-all flex items-start justify-between gap-2 border ${
                      isSelected
                        ? "bg-[#35D5FF]/15 border-[#35D5FF] text-white font-bold"
                        : "bg-[#091120] border-transparent text-[#98A8BD] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div>
                      <p className="line-clamp-1">{topic.title}</p>
                      <span className="text-[10px] text-[#35D5FF] opacity-80">
                        {topic.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Reader (7 cols) */}
          <div className="md:col-span-7 p-6 space-y-5 bg-[#0A1324] overflow-y-auto">
            <div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#38E58B]/20 text-[#38E58B] font-mono font-bold uppercase tracking-wider">
                {selectedTopic.tag}
              </span>
              <h3 className="text-xl font-display font-extrabold text-white mt-1">
                {selectedTopic.title}
              </h3>
              <p className="text-xs font-mono text-[#35D5FF] font-medium mt-0.5">
                {selectedTopic.subtitle}
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#070B16] border border-white/5 space-y-1.5">
                <span className="text-white font-bold block text-[11px] uppercase tracking-wider text-[#35D5FF]">
                  Simple Explanation:
                </span>
                <p className="text-[#F4F7FC] leading-relaxed text-xs">
                  {selectedTopic.definition}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#091624] border border-[#35D5FF]/20 space-y-1.5">
                <span className="text-white font-bold block text-[11px] uppercase tracking-wider text-[#FCC30B]">
                  Real-World Example:
                </span>
                <p className="text-[#98A8BD] leading-relaxed text-xs">
                  {selectedTopic.realWorldExample}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#071814] border border-[#38E58B]/30 space-y-1.5">
                <span className="text-white font-bold block text-[11px] uppercase tracking-wider text-[#38E58B]">
                  Key Takeaway:
                </span>
                <p className="text-[#38E58B] leading-relaxed text-xs font-semibold">
                  {selectedTopic.takeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
