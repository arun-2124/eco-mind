"use client";

import React, { useState } from "react";
import { InventoryItem, ItemCategory } from "@/types/game";
import {
  X,
  Briefcase,
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  FileText,
  Cpu,
  ShieldAlert,
  SunMedium,
  Sparkles,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Key,
  BatteryCharging,
  HeartPulse,
  Camera,
  FileText,
  Cpu,
  ShieldAlert,
  SunMedium,
};

interface InventoryDrawerProps {
  items: InventoryItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const InventoryDrawer: React.FC<InventoryDrawerProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

  if (!isOpen) return null;

  const categories: { key: string; label: string }[] = [
    { key: "all", label: `ALL (${items.length})` },
    { key: "key", label: "KEYS" },
    { key: "battery", label: "BATTERIES" },
    { key: "medical", label: "MEDICAL" },
    { key: "photo", label: "PHOTOS" },
    { key: "document", label: "DOCUMENTS" },
    { key: "story", label: "STORY" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#070D1A] border border-cyan-400/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6 text-white font-sans max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold tracking-wider">
                  SURVIVOR BACKPACK // INVENTORY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Field Supplies &amp; Artifacts
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === c.key
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Items Content Area */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-4">
            {filteredItems.length === 0 ? (
              <div className="p-12 text-center border border-dashed border-white/10 rounded-2xl space-y-2">
                <Briefcase className="w-8 h-8 text-white/30 mx-auto" />
                <p className="text-sm font-mono text-white/60">
                  No items collected in this category.
                </p>
                <p className="text-xs text-white/40 font-mono">
                  Look for pulsating discovery lenses on environment scenes to find keys, batteries, notes, and supplies.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredItems.map((item) => {
                  const IconComp = CATEGORY_ICONS[item.iconName] || Sparkles;
                  const isSelected = activeItem?.id === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-cyan-950/60 border-cyan-400 ring-2 ring-cyan-400/30"
                          : "bg-black/50 border-white/10 hover:border-cyan-400/40 hover:bg-black/70"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                              {item.category}
                            </span>
                            <span className="text-[9px] font-mono text-white/40">
                              Found Sc. {item.foundInMission}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-300 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {item.effectDescription && (
                        <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded-md">
                          ★ {item.effectDescription}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Active Item Detail Inspector Footer */}
          {activeItem && (
            <div className="p-4 rounded-2xl bg-black/80 border border-cyan-400/30 space-y-2 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  ARTIFACT LORE // {activeItem.name}
                </span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="text-[10px] font-mono text-white/50 hover:text-white"
                >
                  Dismiss
                </button>
              </div>
              {activeItem.loreSnippet ? (
                <p className="text-xs text-slate-300 font-mono italic">
                  &ldquo;{activeItem.loreSnippet}&rdquo;
                </p>
              ) : (
                <p className="text-xs text-slate-300 font-sans">
                  {activeItem.description}
                </p>
              )}
            </div>
          )}

          {/* Footer Close */}
          <div className="pt-2 flex items-center justify-between border-t border-white/10 shrink-0">
            <span className="text-xs font-mono text-white/40">
              {items.length} total objects gathered
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs font-mono hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Close Backpack
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
