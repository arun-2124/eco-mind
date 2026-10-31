"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { Navbar } from "@/components/Navbar";
import { Sliders, KeyRound, ArrowRight, AlertCircle, ShieldAlert } from "lucide-react";

export default function PresenterLoginPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/presenter/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Invalid Presenter Access Passcode.");
        setSubmitting(false);
        return;
      }

      sessionStorage.setItem("ecomind_presenter_auth", "true");
      sessionStorage.setItem("ecomind_presenter_token", data.token);
      router.push("/presenter/dashboard");
    } catch {
      setError("Authentication failed. Please check network connection.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B16] text-[#F4F7FC]">
      <DemoModeBanner />
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#35D5FF]/15 border border-[#35D5FF]/30 flex items-center justify-center text-[#35D5FF] mx-auto mb-3">
              <Sliders className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-display font-bold text-white">
              Presenter Command Access
            </h1>
            <p className="text-xs text-[#98A8BD] font-mono mt-1">
              Restricted to authorized workshop directors and club leads.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#35D5FF]/20 shadow-2xl">
            {error && (
              <div className="mb-4 p-3 rounded-lg border border-[#FF5B65]/40 bg-[#FF5B65]/10 text-xs font-mono text-[#FF5B65] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-semibold tracking-wider uppercase text-white flex items-center gap-1.5 mb-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-[#35D5FF]" />
                  Presenter Passcode
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (default: ecomind2045)"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#080E1A] border border-[#35D5FF]/25 text-white font-mono placeholder-[#98A8BD]/40 focus:outline-none focus:border-[#35D5FF] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#35D5FF] to-[#38E58B] text-[#070B16] font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#35D5FF]/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{submitting ? "VERIFYING PASSCODE..." : "ENTER COMMAND CENTER"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#35D5FF]/10 text-center text-[11px] font-mono text-[#98A8BD]">
              <span>Demo Passcode: </span>
              <button
                onClick={() => setPasscode("ecomind2045")}
                className="text-[#35D5FF] underline font-bold"
              >
                ecomind2045
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
