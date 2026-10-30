"use client";

import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { ParticipantScore } from "@/types/game";
import { getRating } from "@/lib/scoring";
import { ShieldCheck, Award } from "lucide-react";

interface ScoreRadarChartProps {
  score: ParticipantScore;
  showRatingCard?: boolean;
}

export function ScoreRadarChart({
  score,
  showRatingCard = true,
}: ScoreRadarChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ratingInfo = getRating(score.total);

  const data = [
    { subject: "Environmental (40%)", A: score.environmental, fullMark: 1000 },
    { subject: "Energy Thrift (25%)", A: score.energy, fullMark: 1000 },
    { subject: "Social Impact (20%)", A: score.social, fullMark: 1000 },
    { subject: "Economic Viability (15%)", A: score.economic, fullMark: 1000 },
  ];

  if (!mounted) {
    return <div className="h-64 w-full bg-[#0D1424]/40 rounded-xl animate-pulse" />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="rgba(53, 213, 255, 0.15)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#98A8BD", fontSize: 11, fontFamily: "monospace" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 1000]}
              stroke="rgba(53, 213, 255, 0.3)"
              tick={{ fill: "#98A8BD", fontSize: 9 }}
            />
            <Radar
              name="Sustainability Dimensions"
              dataKey="A"
              stroke="#38E58B"
              fill="#38E58B"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {showRatingCard && (
        <div className="w-full mt-2 p-3 rounded-xl border border-[#35D5FF]/20 bg-[#0B1424] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{
                backgroundColor: `${ratingInfo.color}20`,
                color: ratingInfo.color,
                border: `1px solid ${ratingInfo.color}50`,
              }}
            >
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#98A8BD] font-mono">
                Evaluated Ranking
              </span>
              <p
                className="font-bold text-xs sm:text-sm font-mono tracking-wide"
                style={{ color: ratingInfo.color }}
              >
                {ratingInfo.rating}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#98A8BD] font-mono">
              Total Score
            </span>
            <p className="font-extrabold text-lg sm:text-xl font-mono text-white">
              {score.total}
              <span className="text-xs text-[#98A8BD] font-normal">/1000</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
