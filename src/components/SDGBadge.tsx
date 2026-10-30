import React from "react";
import { SDGNumber } from "@/types/game";
import { SDG_DETAILS } from "@/lib/game-data";
import {
  HeartPulse,
  Droplets,
  Zap,
  Cpu,
  Building2,
  Recycle,
  Globe,
  Users,
  Trees,
  Shield,
} from "lucide-react";

interface SDGBadgeProps {
  sdg: SDGNumber;
  showTitle?: boolean;
  size?: "sm" | "md" | "lg";
}

const SDG_ICONS: Record<SDGNumber, React.ReactNode> = {
  3: <HeartPulse className="w-3.5 h-3.5" />,
  6: <Droplets className="w-3.5 h-3.5" />,
  7: <Zap className="w-3.5 h-3.5" />,
  9: <Cpu className="w-3.5 h-3.5" />,
  10: <Users className="w-3.5 h-3.5" />,
  11: <Building2 className="w-3.5 h-3.5" />,
  12: <Recycle className="w-3.5 h-3.5" />,
  13: <Globe className="w-3.5 h-3.5" />,
  15: <Trees className="w-3.5 h-3.5" />,
  16: <Shield className="w-3.5 h-3.5" />,
};

export function SDGBadge({ sdg, showTitle = false, size = "md" }: SDGBadgeProps) {
  const info = SDG_DETAILS[sdg];
  if (!info) return null;

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full font-medium tracking-wide border shadow-sm transition-transform hover:scale-105 ${sizeClasses[size]}`}
      style={{
        backgroundColor: `${info.color}15`,
        borderColor: `${info.color}45`,
        color: info.color,
      }}
      title={`UN SDG ${info.number}: ${info.title}`}
    >
      <span className="flex items-center justify-center">
        {SDG_ICONS[sdg]}
      </span>
      <span className="font-semibold font-mono">SDG {info.number}</span>
      {showTitle && <span className="opacity-90">{info.shortName}</span>}
    </div>
  );
}
