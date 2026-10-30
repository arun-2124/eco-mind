"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import {
  Globe,
  Sliders,
  PlayCircle,
  BookOpen,
  LogOut,
  User,
  Menu,
  X,
  Zap,
  HelpCircle,
} from "lucide-react";
import { AIExplainerModal } from "./AIExplainerModal";

export function Navbar() {
  const pathname = usePathname();
  const { currentParticipant, logoutParticipant } = useGameState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const isPresenter = pathname.startsWith("/presenter");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#35D5FF]/15 bg-[#070B16]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#35D5FF] to-[#38E58B] p-[1.5px] shadow-lg shadow-[#35D5FF]/20 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070B16] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold font-mono text-sm tracking-tighter text-[#35D5FF] group-hover:text-[#38E58B] transition-colors">
                  E//M
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                  ECO<span className="text-[#35D5FF]">//</span>MIND
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-widest text-[#38E58B] bg-[#38E58B]/10 rounded border border-[#38E58B]/30 uppercase">
                  v2045
                </span>
              </div>
              <p className="text-[10px] text-[#98A8BD] tracking-wider uppercase font-mono hidden md:block">
                The Sustainable Intelligence Challenge
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                pathname === "/"
                  ? "bg-[#35D5FF]/15 text-[#35D5FF] font-semibold border border-[#35D5FF]/30"
                  : "text-[#98A8BD] hover:text-white hover:bg-white/5"
              }`}
            >
              HOME
            </Link>

            <Link
              href={currentParticipant ? "/game" : "/join"}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 ${
                pathname.startsWith("/game") || pathname === "/join"
                  ? "bg-[#35D5FF]/15 text-[#35D5FF] font-semibold border border-[#35D5FF]/30"
                  : "text-[#98A8BD] hover:text-white hover:bg-white/5"
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5 text-[#38E58B]" />
              {currentParticipant ? "MY MISSION" : "JOIN MISSION"}
            </Link>

            <button
              type="button"
              onClick={() => setAiModalOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 text-[#35D5FF] hover:bg-[#35D5FF]/10 border border-[#35D5FF]/20"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              AI CONCEPTS
            </button>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 ${
                pathname === "/about"
                  ? "bg-[#35D5FF]/15 text-[#35D5FF] font-semibold border border-[#35D5FF]/30"
                  : "text-[#98A8BD] hover:text-white hover:bg-white/5"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FCC30B]" />
              CONCEPT & SDGS
            </Link>

            <Link
              href="/presenter/dashboard"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 ${
                isPresenter
                  ? "bg-[#35D5FF]/15 text-[#35D5FF] font-semibold border border-[#35D5FF]/30"
                  : "text-[#98A8BD] hover:text-white hover:bg-white/5"
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#35D5FF]" />
              PRESENTER DESK
            </Link>
          </nav>

          {/* Right Action / Participant Identity */}
          <div className="hidden md:flex items-center gap-3">
            {currentParticipant ? (
              <div className="flex items-center gap-2 pl-3 border-l border-[#35D5FF]/20">
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#38E58B] animate-pulse" />
                    <p className="text-xs font-bold font-mono text-white">
                      {currentParticipant.fullName}
                    </p>
                  </div>
                  <p className="text-[10px] text-[#35D5FF] font-mono">
                    Score: {currentParticipant.score.total} pts
                  </p>
                </div>
                <button
                  onClick={logoutParticipant}
                  className="p-1.5 text-[#98A8BD] hover:text-[#FF5B65] hover:bg-[#FF5B65]/10 rounded-lg transition-colors"
                  title="Switch / Leave Participant Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/join"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" />
                ENTER MISSION
              </Link>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#98A8BD] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#35D5FF]/20 bg-[#0B1424] px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-mono text-[#F4F7FC] hover:bg-white/5"
          >
            HOME
          </Link>
          <Link
            href={currentParticipant ? "/game" : "/join"}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-mono text-[#35D5FF] hover:bg-white/5"
          >
            {currentParticipant ? "MY MISSION" : "JOIN MISSION"}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-mono text-[#F4F7FC] hover:bg-white/5"
          >
            CONCEPT & SDGS
          </Link>
          <Link
            href="/presenter/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-mono text-[#38E58B] hover:bg-white/5"
          >
            PRESENTER CONTROL CENTER
          </Link>

          {currentParticipant && (
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">{currentParticipant.fullName}</p>
                <p className="text-[10px] text-[#35D5FF]">Score: {currentParticipant.score.total}</p>
              </div>
              <button
                onClick={() => {
                  logoutParticipant();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-[#FF5B65] flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Leave
              </button>
            </div>
          )}
        </div>
      )}
      {/* AI Explainer Modal */}
      <AIExplainerModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />
    </header>
  );
}
