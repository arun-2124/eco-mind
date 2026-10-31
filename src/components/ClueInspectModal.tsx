"use client";

import React from "react";
import { StoryClue, InventoryItem } from "@/types/game";
import { sound } from "@/lib/audio";
import {
  X,
  Search,
  PackagePlus,
  CheckCircle2,
  FileText,
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  Cpu,
  ShieldAlert,
  SunMedium,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ITEM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  FileText,
  Cpu,
  ShieldAlert,
  SunMedium,
};

interface ClueInspectModalProps {
  clue: StoryClue | null;
  hasCollectedItem: boolean;
  onCollectItem: (item: InventoryItem) => void;
  onClose: () => void;
}

export const ClueInspectModal: React.FC<ClueInspectModalProps> = ({
  clue,
  hasCollectedItem,
  onCollectItem,
  onClose,
}) => {
  if (!clue) return null;

  const reward = clue.itemReward;
  const RewardIcon = reward ? ITEM_ICONS[reward.iconName] || Sparkles : Sparkles;

  const handleTakeItem = () => {
    if (!reward || hasCollectedItem) return;
    sound.playItemDiscovery();
    onCollectItem(reward);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#070E1B] border border-cyan-400/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6 text-white font-sans overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-4 relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                ENVIRONMENTAL INVESTIGATION // {clue.type.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {clue.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description & Narrative */}
          <div className="space-y-3 relative z-10">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {clue.description}
            </p>
          </div>

          {/* Item Reward Section if present */}
          {reward && (
            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-3 relative z-10 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                    <RewardIcon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">
                      COLLECTIBLE ITEM // {reward.category.toUpperCase()}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white font-serif">
                      {reward.name}
                    </h4>
                  </div>
                </div>

                {hasCollectedItem ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    In Backpack
                  </span>
                ) : null}
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {reward.description}
              </p>

              {reward.loreSnippet && (
                <p className="text-[11px] text-cyan-300/80 font-mono italic border-l-2 border-cyan-400/40 pl-2">
                  &ldquo;{reward.loreSnippet}&rdquo;
                </p>
              )}

              {reward.effectDescription && (
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-1.5 rounded-lg">
                  ★ Story Use: {reward.effectDescription}
                </div>
              )}

              {!hasCollectedItem && (
                <button
                  type="button"
                  onClick={handleTakeItem}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <PackagePlus className="w-4 h-4" />
                  <span>TAKE OBJECT &amp; ADD TO INVENTORY</span>
                </button>
              )}
            </div>
          )}

          {/* Close Action */}
          <div className="pt-2 flex justify-end relative z-10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              Resume Story
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
