import { MISSIONS } from "./game-data";
import { ParticipantScore, BadgeId, BadgeInfo } from "@/types/game";

export const INITIAL_SCORE: ParticipantScore = {
  environmental: 0,
  energy: 0,
  social: 0,
  economic: 0,
  total: 0,
  rating: "CADET INDUCTEE",
  sustainableCount: 0,
  unsustainableCount: 0,
  badges: [],
};

export const BADGE_REGISTRY: Record<BadgeId, { title: string; description: string; iconName: string; rarity: "common" | "rare" | "epic" | "legendary" }> = {
  edge_ai_explorer: {
    title: "Edge AI Explorer",
    description: "Successfully deployed local inference on both Mission 1 and 2, curbing massive transmission emissions.",
    iconName: "Cpu",
    rarity: "common",
  },
  physical_ai_engineer: {
    title: "Physical AI Engineer",
    description: "Mastered active LiDAR perception, flood sonar, and structural resonance across Missions 3, 5, and 7.",
    iconName: "Bot",
    rarity: "rare",
  },
  rescue_strategist: {
    title: "Rescue Strategist",
    description: "Executed real-time kinematic obstacle avoidance, ethical child search, and hospital logistics in Missions 4, 6, and 8.",
    iconName: "ShieldAlert",
    rarity: "rare",
  },
  energy_guardian: {
    title: "Energy Guardian",
    description: "Dominated Chapter 3 by deploying immersion cooling, model quantization, solar scheduling, and V2G battery preservation.",
    iconName: "Zap",
    rarity: "epic",
  },
  water_protector: {
    title: "Water Protector",
    description: "Safeguarded municipal drinking aquifers and coastal marine biospheres in Missions 13 and 15.",
    iconName: "Droplets",
    rarity: "rare",
  },
  circular_economy_champion: {
    title: "Circular Economy Champion",
    description: "Pioneered modular refurbishment and rare-earth recovery in Mission 17, stopping toxic e-waste.",
    iconName: "Recycle",
    rarity: "epic",
  },
  responsible_ai_defender: {
    title: "Responsible AI Defender",
    description: "Enforced zero-retention privacy and democratic human-in-the-loop oversight in Missions 18 and 19.",
    iconName: "Scale",
    rarity: "epic",
  },
  nova_city_saviour: {
    title: "NOVA CITY SAVIOUR",
    description: "Achieved the Sustainable Intelligence Compact in Mission 20 with a stellar campaign score of 1800+ points.",
    iconName: "Award",
    rarity: "legendary",
  },
};

export function getEarnedBadges(
  decisions: Record<number, string>,
  totalScore: number
): BadgeInfo[] {
  const isSus = (mNum: number) => {
    const choice = decisions[mNum];
    if (!choice) return false;
    const mission = MISSIONS.find((m) => m.number === mNum);
    const opt = mission?.options.find((o) => o.key === choice);
    return opt?.isSustainable ?? false;
  };

  const unlockedMap: Record<BadgeId, boolean> = {
    edge_ai_explorer: isSus(1) && isSus(2),
    physical_ai_engineer: isSus(3) && isSus(5) && isSus(7),
    rescue_strategist: isSus(4) && isSus(6) && isSus(8),
    energy_guardian: isSus(9) && isSus(10) && isSus(11) && isSus(12),
    water_protector: isSus(13) && isSus(15),
    circular_economy_champion: isSus(17),
    responsible_ai_defender: isSus(18) && isSus(19),
    nova_city_saviour: isSus(20) && totalScore >= 1800,
  };

  return (Object.keys(BADGE_REGISTRY) as BadgeId[]).map((id) => ({
    id,
    title: BADGE_REGISTRY[id].title,
    description: BADGE_REGISTRY[id].description,
    iconName: BADGE_REGISTRY[id].iconName,
    unlocked: unlockedMap[id] ?? false,
  }));
}

export function getRating(totalScore: number, totalMissionsAnswered: number = 20): {
  rating: string;
  badge: string;
  description: string;
  color: string;
} {
  const maxPossible = Math.max(100, totalMissionsAnswered * 100);
  const percentage = Math.min(100, Math.round((totalScore / maxPossible) * 100));

  if (percentage >= 85 || totalScore >= 1700) {
    return {
      rating: "SUSTAINABILITY VISIONARY",
      badge: "Emerald Luminary",
      description:
        "Masterfully harmonized physical AI and edge computing with planetary boundaries. Exemplifies circular design, edge thrift, and climate stewardship.",
      color: "#10B981", // green
    };
  }
  if (percentage >= 70 || totalScore >= 1400) {
    return {
      rating: "GREEN ARCHITECT",
      badge: "Eco-Systems Specialist",
      description:
        "Demonstrated strong systems thinking, selecting balanced edge AI paradigms and curbing energy spikes across Nova City.",
      color: "#00F0FF", // cyan
    };
  }
  if (percentage >= 50 || totalScore >= 1000) {
    return {
      rating: "RESPONSIBLE ENGINEER",
      badge: "Pragmatic Innovator",
      description:
        "Maintained city operational stability with conscientious trade-offs, though some hardware and energy inefficiencies persist.",
      color: "#FBBF24", // amber
    };
  }
  if (percentage >= 35 || totalScore >= 700) {
    return {
      rating: "TRANSITION PIONEER",
      badge: "Adaptive Operator",
      description:
        "Addressed immediate crises with localized fixes, but accumulated technical debt and embodied carbon backlogs.",
      color: "#F97316", // orange
    };
  }
  return {
    rating: "CRISIS REMEDIATOR",
    badge: "Recovery Apprentice",
    description:
      "Prioritized short-term computational throughput over planetary constraints, triggering severe environmental and grid strain.",
    color: "#EF4444", // red
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
      envScore += 100;
      energyScore += 100;
      socialScore += 100;
      econScore += 100;
    } else {
      unsustainableCount += 1;
      envScore += 30;
      energyScore += 30;
      socialScore += 30;
      econScore += 30;
    }
  }

  const answeredCount = sustainableCount + unsustainableCount;
  const earnedBadges = getEarnedBadges(decisions, totalPoints);
  const unlockedBadgeIds = earnedBadges.filter((b) => b.unlocked).map((b) => b.id);

  return {
    environmental: Math.round(envScore),
    energy: Math.round(energyScore),
    social: Math.round(socialScore),
    economic: Math.round(econScore),
    total: totalPoints,
    rating: getRating(totalPoints, Math.max(1, answeredCount)).rating,
    sustainableCount,
    unsustainableCount,
    badges: unlockedBadgeIds,
  };
}
