"use client";

import React, { useState } from "react";
import { isSupabaseConfigured } from "@/lib/supabase";
import { Sparkles, Terminal, RotateCcw, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { DEFAULT_PIN } from "@/lib/sync-engine";

interface DemoModeBannerProps {
  onReset?: () => void;
}

export function DemoModeBanner({ onReset }: DemoModeBannerProps) {
  const [expanded, setExpanded] = useState(false);
  const isCloud = isSupabaseConfigured();

  if (isCloud) {
    return (
      <div className="bg-[#111C30]/80 border-b border-[#38E58B]/20 px-4 py-1.5 flex items-center justify-between text-xs text-[#38E58B] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38E58B] animate-pulse" />
          <span>CONNECTED: SUPABASE CLOUD POSTGRESQL & REALTIME</span>
        </div>
        <span className="text-[#98A8BD]">Workshop Session Active</span>
      </div>
    );
  }

  return (
    <div className="bg-[#0B1528] border-b border-[#35D5FF]/20 px-4 py-2 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-[#35D5FF]/15 border border-[#35D5FF]/40 text-[#35D5FF] font-bold text-[10px] tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            LOCAL DEMO MODE
          </span>
          <span className="text-[#F4F7FC] hidden sm:inline">
            Cross-Tab Realtime Active • Session PIN:{" "}
            <strong className="text-[#35D5FF] font-bold underline">{DEFAULT_PIN}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onReset && (
            <button
              onClick={onReset}
              className="text-[#98A8BD] hover:text-[#35D5FF] flex items-center gap-1 transition-colors"
              title="Reset sample workshop state"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden md:inline">Reset State</span>
            </button>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#35D5FF] hover:underline flex items-center gap-0.5"
          >
            <span>{expanded ? "Hide Details" : "Setup Instructions"}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#35D5FF]/15 text-[#98A8BD] text-[11px] space-y-1">
          <p>
            • <strong>How Demo Mode Works:</strong> No external database is needed! State is synchronized locally across browser tabs via <code className="text-[#35D5FF]">BroadcastChannel</code> and <code className="text-[#35D5FF]">localStorage</code>.
          </p>
          <p>
            • <strong>To run a full workshop demo:</strong> Open the <a href="/presenter/dashboard" className="text-[#38E58B] underline font-bold">Presenter Dashboard</a> in one browser tab, and open <a href="/join" className="text-[#35D5FF] underline font-bold">Join Mission</a> in an incognito or secondary tab with PIN <strong>{DEFAULT_PIN}</strong>.
          </p>
          <p>
            • <strong>Production Supabase Setup:</strong> To persist across distinct devices over the web, add <code className="text-white">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="text-white">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your environment variables and execute <code className="text-white">supabase/migrations/01_init_ecomind.sql</code>.
          </p>
        </div>
      )}
    </div>
  );
}
