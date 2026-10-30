"use client";

import React from "react";
import { AIExplainer } from "./AIExplainer";
import { X, HelpCircle } from "lucide-react";
import { sound } from "@/lib/audio";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6">
      <div className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-2xl border border-[#35D5FF]/30 flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#35D5FF]/15 flex items-center justify-between bg-[#0B1528]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#35D5FF]/15 border border-[#35D5FF]/30 flex items-center justify-center text-[#35D5FF]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-display font-bold text-white">
                Beginner AI &amp; Sustainability Learning Hub
              </h2>
              <p className="text-xs font-mono text-[#98A8BD]">
                10 Core Concepts Explained Simply for Robotics Students
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 text-[#98A8BD] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <AIExplainer defaultTopicId={defaultTopicId} />
        </div>
      </div>
    </div>
  );
}
