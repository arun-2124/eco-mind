"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGameState } from "@/hooks/useGameState";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { QRCodeSVG } from "qrcode.react";
import { DEFAULT_PIN } from "@/lib/sync-engine";
import {
  Zap,
  Users,
  ShieldCheck,
  QrCode,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Bot,
  CheckCircle2,
} from "lucide-react";

function JoinForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { session, currentParticipant, register, isLoaded } = useGameState();

  const [pin, setPin] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  // Prefill PIN from query params or default demo
  useEffect(() => {
    const queryPin = searchParams?.get("pin");
    if (queryPin) {
      setPin(queryPin.toUpperCase());
    } else if (session?.pin) {
      setPin(session.pin);
    }
  }, [searchParams, session]);

  // If already logged in, show reconnect / continue button
  const handleContinueAsExisting = () => {
    router.push("/game");
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!pin.trim()) {
      setError("Please enter the Workshop Session PIN.");
      return;
    }

    if (!fullName.trim()) {
      setError("Please enter your name or callsign.");
      return;
    }

    setLoading(true);

    try {
      const res = register(pin, fullName, teamName);
      if (!res.success) {
        setError(res.error || "Failed to join session.");
        setLoading(false);
        return;
      }

      // Successful registration, navigate to game
      router.push("/game");
    } catch (err: unknown) {
      console.error(err);
      setError("An unexpected error occurred while joining.");
      setLoading(false);
    }
  };

  const appUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/join?pin=${pin || DEFAULT_PIN}`
      : `http://localhost:3000/join?pin=${DEFAULT_PIN}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Futuristic Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#35D5FF]/10 via-[#38E58B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Card Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#35D5FF]/30 bg-[#0B1528] mb-3">
              <Bot className="w-4 h-4 text-[#35D5FF]" />
              <span className="text-[11px] font-mono text-[#35D5FF] font-semibold tracking-wider uppercase">
                Task Force Induction Terminal
              </span>
            </div>
            <h1 className="text-3xl font-display font-extrabold text-white">
              Join The Mission
            </h1>
            <p className="text-xs text-[#98A8BD] mt-1 font-mono">
              Enter your session PIN to link with Nova City&apos;s AI Task Force
            </p>
          </div>

          {/* Reconnect Banner if already registered */}
          {currentParticipant && (
            <div className="mb-6 p-4 rounded-xl border border-[#38E58B]/30 bg-[#0A201A] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#38E58B] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  RECONNECT DETECTED
                </div>
                <p className="text-xs text-white mt-0.5">
                  Logged in as <strong className="text-[#35D5FF]">{currentParticipant.fullName}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={handleContinueAsExisting}
                className="px-3 py-1.5 rounded-lg bg-[#38E58B] text-[#070B16] font-mono font-bold text-xs hover:bg-[#38E58B]/90 transition-colors"
              >
                Resume
              </button>
            </div>
          )}

          {/* Join Form Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#35D5FF]/20 shadow-2xl">
            {error && (
              <div className="mb-6 p-3 rounded-lg border border-[#FF5B65]/40 bg-[#FF5B65]/10 text-xs font-mono text-[#FF5B65] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleJoin} className="space-y-5">
              {/* Session PIN Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono font-semibold tracking-wider uppercase text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#35D5FF]" />
                    Workshop Session PIN
                  </label>
                  <button
                    type="button"
                    onClick={() => setPin(DEFAULT_PIN)}
                    className="text-[11px] font-mono text-[#35D5FF] hover:underline"
                  >
                    Auto-fill Demo ({DEFAULT_PIN})
                  </button>
                </div>
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.toUpperCase())}
                  placeholder="e.g. ECO2045"
                  maxLength={12}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1A] border border-[#35D5FF]/25 text-white font-mono font-bold tracking-wider placeholder-[#98A8BD]/40 focus:outline-none focus:border-[#35D5FF] focus:ring-1 focus:ring-[#35D5FF] transition-all uppercase"
                />
              </div>

              {/* Participant Full Name */}
              <div>
                <label className="text-xs font-mono font-semibold tracking-wider uppercase text-white flex items-center gap-1.5 mb-1.5">
                  <Users className="w-3.5 h-3.5 text-[#38E58B]" />
                  Participant Full Name / Callsign
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Maya Lin"
                  maxLength={60}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1A] border border-[#35D5FF]/25 text-white font-mono placeholder-[#98A8BD]/40 focus:outline-none focus:border-[#35D5FF] focus:ring-1 focus:ring-[#35D5FF] transition-all"
                />
              </div>

              {/* Team Name (Optional) */}
              <div>
                <label className="text-xs font-mono font-semibold tracking-wider uppercase text-[#98A8BD] flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FCC30B]" />
                  Team / Subsystem Group (Optional)
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Robotics Section B"
                  maxLength={60}
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1A] border border-[#35D5FF]/20 text-white font-mono placeholder-[#98A8BD]/40 focus:outline-none focus:border-[#35D5FF] focus:ring-1 focus:ring-[#35D5FF] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-sm tracking-wider shadow-xl shadow-[#35D5FF]/25 hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>AUTHENTICATING INDUCTION...</span>
                ) : (
                  <>
                    <span>JOIN MISSION</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* QR Code Trigger */}
            <div className="mt-6 pt-6 border-t border-[#35D5FF]/15 flex items-center justify-between text-xs font-mono text-[#98A8BD]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#38E58B] animate-pulse" />
                Connection: Secure
              </span>
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="text-[#35D5FF] hover:underline flex items-center gap-1 font-semibold"
              >
                <QrCode className="w-3.5 h-3.5" />
                Mobile QR Code
              </button>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-6 text-center text-[11px] font-mono text-[#98A8BD] space-y-1">
            <p>✓ Transparent scoring calculated server-side.</p>
            <p>✓ Participants only see their own decisions and aggregated leaderboards.</p>
          </div>
        </div>
      </main>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="glass-panel p-6 rounded-2xl border border-[#35D5FF]/30 max-w-sm w-full text-center space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono font-bold text-sm text-white">
                Scan to Join on Mobile
              </h3>
              <button
                onClick={() => setShowQrModal(false)}
                className="text-xs text-[#98A8BD] hover:text-white"
              >
                Close ✕
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl inline-block shadow-inner">
              <QRCodeSVG value={appUrl} size={180} />
            </div>

            <div className="text-xs font-mono text-[#98A8BD]">
              <p>Session PIN: <strong className="text-[#35D5FF]">{pin || DEFAULT_PIN}</strong></p>
              <p className="text-[10px] truncate mt-1 text-[#98A8BD]/70">{appUrl}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070B16] flex items-center justify-center text-white font-mono">Loading terminal...</div>}>
      <JoinForm />
    </Suspense>
  );
}
