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

export function getRating(totalScore: number): {
  rating: string;
  badge: string;
  description: string;
  color: string;
} {
  if (totalScore >= 900) {
    return {
      rating: "SUSTAINABILITY VISIONARY",
      badge: "Emerald Luminary",
      description:
        "Masterfully harmonized intelligent computing with planetary boundaries. Exemplifies circular design, edge thrift, and climate stewardship.",
      color: "#38E58B",
    };
  }
  if (totalScore >= 700) {
    return {
      rating: "GREEN INNOVATOR",
      badge: "Eco-Architect",
      description:
        "Demonstrated strong systems thinking, selecting balanced AI paradigms and curbing energy spikes across Nova City.",
      color: "#35D5FF",
    };
  }
  if (totalScore >= 500) {
    return {
      rating: "RESPONSIBLE DEVELOPER",
      badge: "Pragmatic Engineer",
      description:
        "Maintained city operational stability with conscientious trade-offs, though some hardware and energy inefficiencies persist.",
      color: "#FCC30B",
    };
  }
  if (totalScore >= 300) {
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

/**
 * Calculates current score based on chosen decisions.
 * Each mission is worth up to 250 points:
 * Sustainable choice: +250 points
 * Unsustainable choice: +50 points (never 0 points)
 * Max score across 4 missions = 1000 points.
 */
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

  // If no decisions yet, set cadet baseline
  const total = Math.max(0, Math.min(1000, totalPoints));

  return {
    environmental: Math.round(envScore),
    energy: Math.round(energyScore),
    social: Math.round(socialScore),
    economic: Math.round(econScore),
    total,
    rating: getRating(total).rating,
    sustainableCount,
    unsustainableCount,
  };
}
