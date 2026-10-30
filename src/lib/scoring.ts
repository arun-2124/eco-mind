import { MISSIONS } from "./game-data";
import { ParticipantScore } from "@/types/game";

export const INITIAL_SCORE: ParticipantScore = {
  environmental: 250,
  energy: 250,
  social: 250,
  economic: 250,
  total: 1000,
  rating: "RESPONSIBLE DEVELOPER",
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
        "Masterfully harmonized advanced computing with planetary limits. Exemplifies circular design, human dignity, and climate action.",
      color: "#38E58B",
    };
  }
  if (totalScore >= 750) {
    return {
      rating: "GREEN INNOVATOR",
      badge: "Eco-Architect",
      description:
        "Demonstrated strong systems thinking, selecting balanced AI paradigms and curbing energy spikes across Nova City.",
      color: "#35D5FF",
    };
  }
  if (totalScore >= 600) {
    return {
      rating: "RESPONSIBLE DEVELOPER",
      badge: "Pragmatic Engineer",
      description:
        "Maintained city operational stability with conscientious trade-offs, though some hardware and energy inefficiencies persist.",
      color: "#FCC30B",
    };
  }
  if (totalScore >= 400) {
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
 * Base starting score is 1000 (250 across each dimension).
 * Each mission decision modifies dimensions.
 * Formula:
 * Final Score = (Environmental × 0.40) + (Energy × 0.25) + (Social × 0.20) + (Economic × 0.15)
 * Clamped strictly between 0 and 1000.
 */
export function calculateParticipantScore(
  decisions: Record<number, string>
): ParticipantScore {
  let env = 250;
  let energy = 250;
  let social = 250;
  let econ = 250;

  for (const [missionNumStr, optionKey] of Object.entries(decisions)) {
    const missionNum = parseInt(missionNumStr, 10);
    const mission = MISSIONS.find((m) => m.number === missionNum);
    if (!mission) continue;

    const option = mission.options.find((opt) => opt.key === optionKey);
    if (!option) continue;

    // Scale impact multipliers to 0-1000 base
    env += option.impacts.environmental * 3.5;
    energy += option.impacts.energy * 3.5;
    social += option.impacts.social * 3.5;
    econ += option.impacts.economic * 3.5;
  }

  // Clamp individual dimensions between 0 and 1000
  env = Math.max(0, Math.min(1000, Math.round(env)));
  energy = Math.max(0, Math.min(1000, Math.round(energy)));
  social = Math.max(0, Math.min(1000, Math.round(social)));
  econ = Math.max(0, Math.min(1000, Math.round(econ)));

  // Weighted calculation
  const weightedTotal = Math.round(
    env * 0.4 + energy * 0.25 + social * 0.2 + econ * 0.15
  );
  const total = Math.max(0, Math.min(1000, weightedTotal));

  return {
    environmental: env,
    energy: energy,
    social: social,
    economic: econ,
    total,
    rating: getRating(total).rating,
  };
}
