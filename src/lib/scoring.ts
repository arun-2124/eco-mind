import { MISSIONS } from "./game-data";
import { ParticipantScore } from "@/types/game";

export const INITIAL_SCORE: ParticipantScore = {
  environmental: 0,
  energy: 0,
  social: 0,
  economic: 0,
  total: 0,
  rating: "CADET INDUCTEE",
  sustainableCount: 0,
  unsustainableCount: 0,
};

export function getRating(totalScore: number, totalMissionsAnswered: number = 4): {
  rating: string;
  badge: string;
  description: string;
  color: string;
} {
  // If ratio-based scoring:
  const maxPossible = Math.max(1000, totalMissionsAnswered * 250);
  const percentage = Math.min(100, Math.round((totalScore / maxPossible) * 100));

  if (percentage >= 85 || totalScore >= 900) {
    return {
      rating: "SUSTAINABILITY VISIONARY",
      badge: "Emerald Luminary",
      description:
        "Masterfully harmonized intelligent computing with planetary boundaries. Exemplifies circular design, edge thrift, and climate stewardship.",
      color: "#38E58B",
    };
  }
  if (percentage >= 65 || totalScore >= 700) {
    return {
      rating: "GREEN INNOVATOR",
      badge: "Eco-Architect",
      description:
        "Demonstrated strong systems thinking, selecting balanced AI paradigms and curbing energy spikes across Nova City.",
      color: "#35D5FF",
    };
  }
  if (percentage >= 45 || totalScore >= 500) {
    return {
      rating: "RESPONSIBLE DEVELOPER",
      badge: "Pragmatic Engineer",
      description:
        "Maintained city operational stability with conscientious trade-offs, though some hardware and energy inefficiencies persist.",
      color: "#FCC30B",
    };
  }
  if (percentage >= 25 || totalScore >= 300) {
    return {
      rating: "EMERGING SUSTAINABILITY LEADER",
      badge: "Transition Pioneer",
      description:
        "Addressed immediate crises with localized fixes, but accumulated technical debt and embodied carbon backlogs.",
      color: "#F6B94A",
    };
  }
  return {
    rating: "FUTURE NEEDS REWORK",
    badge: "Crisis Remediator",
    description:
      "Prioritized short-term computational throughput over planetary constraints, triggering severe environmental and grid strain.",
    color: "#FF5B65",
  };
}

export function calculateParticipantScore(
  decisions: Record<number, string>
): ParticipantScore {
  let totalPoints = 0;
  let envScore = 0;
  let energyScore = 0;
  let socialScore = 0;
  let econScore = 0;
  let sustainableCount = 0;
  let unsustainableCount = 0;

  for (const [missionNumStr, optionKey] of Object.entries(decisions)) {
    const missionNum = parseInt(missionNumStr, 10);
    const mission = MISSIONS.find((m) => m.number === missionNum);
    if (!mission) continue;

    const option = mission.options.find((opt) => opt.key === optionKey);
    if (!option) continue;

    totalPoints += option.pointsAwarded;

    if (option.isSustainable) {
      sustainableCount += 1;
      envScore += 250;
      energyScore += 250;
      socialScore += 250;
      econScore += 250;
    } else {
      unsustainableCount += 1;
      envScore += 50;
      energyScore += 50;
      socialScore += 50;
      econScore += 50;
    }
  }

  const answeredCount = sustainableCount + unsustainableCount;

  return {
    environmental: Math.round(envScore),
    energy: Math.round(energyScore),
    social: Math.round(socialScore),
    economic: Math.round(econScore),
    total: totalPoints,
    rating: getRating(totalPoints, Math.max(1, answeredCount)).rating,
    sustainableCount,
    unsustainableCount,
  };
}
