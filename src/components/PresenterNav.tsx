"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Target,
  BarChart3,
  Award,
  LogOut,
  Sliders,
} from "lucide-react";

export function PresenterNav() {
  const pathname = usePathname();

  const links = [
    { href: "/presenter/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/presenter/participants", label: "Participants", icon: Users },
    { href: "/presenter/missions", label: "Mission Control", icon: Target },
    { href: "/presenter/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/presenter/results", label: "Final Results", icon: Award },
  ];

  return (
    <div className="border-b border-[#35D5FF]/15 bg-[#0A1220] px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-[#35D5FF]/20 text-[#35D5FF] font-bold border border-[#35D5FF]/40 shadow-sm"
                    : "text-[#98A8BD] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/"
          className="text-xs font-mono text-[#98A8BD] hover:text-[#FF5B65] flex items-center gap-1 shrink-0"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Exit Console</span>
        </Link>
      </div>
    </div>
  );
}
