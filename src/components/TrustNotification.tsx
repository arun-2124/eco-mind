"use client";

import React, { useEffect } from "react";
import { sound } from "@/lib/audio";
import { motion, AnimatePresence } from "framer-motion";

export interface TrustNoticeData {
  character: string;
  portrait: string;
  text: string;
  positive: boolean;
}

interface TrustNotificationProps {
  notice: TrustNoticeData | null;
  onDismiss: () => void;
}

export const TrustNotification: React.FC<TrustNotificationProps> = ({ notice, onDismiss }) => {
  useEffect(() => {
    if (notice) {
      sound.playTrustChange(notice.positive);
      const timer = setTimeout(() => {
        onDismiss();
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [notice, onDismiss]);

  if (!notice) return null;

  return (
    <AnimatePresence>
      <div className="fixed top-18 sm:top-20 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`pointer-events-auto px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-xl flex items-center gap-3 font-sans ${
            notice.positive
              ? "bg-[#051C18]/90 border-emerald-400/60 shadow-emerald-950/60"
              : "bg-[#1E0F14]/90 border-rose-400/60 shadow-rose-950/60"
          }`}
        >
          {/* Character Mini Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={notice.portrait}
              alt={notice.character}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Notice Text */}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-serif font-bold tracking-wide ${
                notice.positive ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {notice.text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
