import { MISSIONS } from "./game-data";
import { CityCondition, CityMetrics, SharedCityMetrics, SubmissionRecord } from "@/types/game";

export const INITIAL_CITY_METRICS: CityMetrics = {
  energyIndex: 78,          // high initial strain
  carbonIndex: 72,          // high initial carbon
  waterIndex: 65,           // high cooling draw
  ewasteIndex: 60,          // existing piles
  operationalEfficiency: 52,// degraded by latency and grid
  citizenWellbeing: 48,     // stressed by pollution & brownouts
  resilienceIndex: 35,      // fragile centralized bottlenecks
};

export const INITIAL_SHARED_CITY_METRICS: SharedCityMetrics = {
  energyStability: 42,      // 0 - 100
  networkStability: 38,     // 0 - 100
  environmentalHealth: 35,  // 0 - 100
  waterAvailability: 45,    // 0 - 100
  rescueProgress: 15,       // 0 - 100
  publicTrust: 50,          // 0 - 100
  ewasteLevel: 65,          // 0 - 100 (high is bad)
};

export function calculateCityMetrics(
  decisions: Record<number, string>
): CityMetrics {
  const current = { ...INITIAL_CITY_METRICS };

  for (const [missionNumStr, optionKey] of Object.entries(decisions)) {
    const missionNum = parseInt(missionNumStr, 10);
    const mission = MISSIONS.find((m) => m.number === missionNum);
    if (!mission) continue;

    const option = mission.options.find((opt) => opt.key === optionKey);
    if (!option) continue;

    current.energyIndex += option.cityMetricDeltas.energyIndex;
    current.carbonIndex += option.cityMetricDeltas.carbonIndex;
    current.waterIndex += option.cityMetricDeltas.waterIndex;
    current.ewasteIndex += option.cityMetricDeltas.ewasteIndex;
    current.operationalEfficiency += option.cityMetricDeltas.operationalEfficiency;
    current.citizenWellbeing += option.cityMetricDeltas.citizenWellbeing;
    current.resilienceIndex += option.cityMetricDeltas.resilienceIndex;
  }

  // Clamping to 0-100
  return {
    energyIndex: Math.max(5, Math.min(100, current.energyIndex)),
    carbonIndex: Math.max(5, Math.min(100, current.carbonIndex)),
    waterIndex: Math.max(5, Math.min(100, current.waterIndex)),
    ewasteIndex: Math.max(5, Math.min(100, current.ewasteIndex)),
    operationalEfficiency: Math.max(5, Math.min(100, current.operationalEfficiency)),
    citizenWellbeing: Math.max(5, Math.min(100, current.citizenWellbeing)),
    resilienceIndex: Math.max(5, Math.min(100, current.resilienceIndex)),
  };
}

/**
 * Calculates the collective Nova City shared metrics based on all participant submissions across missions.
 * (Section 5 & 8: Collective Decision System & Shared City Simulation)
 */
export function calculateCollectiveCityMetrics(
  submissions: SubmissionRecord[],
  currentMissionNumber: number,
  consequencesRevealed: boolean
): SharedCityMetrics {
  const metrics: SharedCityMetrics = { ...INITIAL_SHARED_CITY_METRICS };

  // Only aggregate missions that have been revealed or past missions
  const maxMission = consequencesRevealed ? currentMissionNumber : currentMissionNumber - 1;

  for (let m = 1; m <= maxMission; m++) {
    const missionSubmissions = submissions.filter((s) => s.missionNumber === m);
    if (missionSubmissions.length === 0) continue;

    const countA = missionSubmissions.filter((s) => s.optionKey === "A").length;
    const countB = missionSubmissions.filter((s) => s.optionKey === "B").length;
    const total = countA + countB;
    if (total === 0) continue;

    const mission = MISSIONS.find((item) => item.number === m);
    if (!mission) continue;

    const optA = mission.options[0]; // Sustainable
    const optB = mission.options[1]; // Unsustainable

    const ratioA = countA / total;
    const ratioB = countB / total;

    // Weighted delta from room votes
    const deltasA = optA.sharedCityDeltas || {
      energyStability: 15,
      networkStability: 15,
      environmentalHealth: 15,
      waterAvailability: 15,
      rescueProgress: 15,
      publicTrust: 15,
      ewasteLevel: -10,
    };

    const deltasB = optB.sharedCityDeltas || {
      energyStability: -15,
      networkStability: -15,
      environmentalHealth: -15,
      waterAvailability: -15,
      rescueProgress: -5,
      publicTrust: -15,
      ewasteLevel: +15,
    };

    metrics.energyStability += Math.round(deltasA.energyStability * ratioA + deltasB.energyStability * ratioB);
    metrics.networkStability += Math.round(deltasA.networkStability * ratioA + deltasB.networkStability * ratioB);
    metrics.environmentalHealth += Math.round(deltasA.environmentalHealth * ratioA + deltasB.environmentalHealth * ratioB);
    metrics.waterAvailability += Math.round(deltasA.waterAvailability * ratioA + deltasB.waterAvailability * ratioB);
    metrics.rescueProgress += Math.round(deltasA.rescueProgress * ratioA + deltasB.rescueProgress * ratioB);
    metrics.publicTrust += Math.round(deltasA.publicTrust * ratioA + deltasB.publicTrust * ratioB);
    metrics.ewasteLevel += Math.round(deltasA.ewasteLevel * ratioA + deltasB.ewasteLevel * ratioB);
  }

  return {
    energyStability: Math.max(5, Math.min(100, metrics.energyStability)),
    networkStability: Math.max(5, Math.min(100, metrics.networkStability)),
    environmentalHealth: Math.max(5, Math.min(100, metrics.environmentalHealth)),
    waterAvailability: Math.max(5, Math.min(100, metrics.waterAvailability)),
    rescueProgress: Math.max(5, Math.min(100, metrics.rescueProgress)),
    publicTrust: Math.max(5, Math.min(100, metrics.publicTrust)),
    ewasteLevel: Math.max(5, Math.min(100, metrics.ewasteLevel)),
  };
}

export function getCityCondition(metrics: CityMetrics): {
  status: CityCondition;
  color: string;
  summary: string;
  visualLevel: number; // 1 to 5
} {
  const stress = (metrics.energyIndex + metrics.carbonIndex + metrics.waterIndex + metrics.ewasteIndex) / 4;
  const vitality = (metrics.operationalEfficiency + metrics.citizenWellbeing + metrics.resilienceIndex) / 3;

  const netBalance = vitality - stress;

  if (netBalance >= 25) {
    return {
      status: "Thriving",
      color: "#10B981",
      summary: "Nova City is a beacon of ecological balance, clean energy autonomy, and responsible robotics.",
      visualLevel: 5,
    };
  }
  if (netBalance >= 5) {
    return {
      status: "Sustainable",
      color: "#00F0FF",
      summary: "Stable computational overhead, clean power transitions, and healthy community ecosystems.",
      visualLevel: 4,
    };
  }
  if (netBalance >= -15) {
    return {
      status: "Recovering",
      color: "#FBBF24",
      summary: "Systemic collapse averted. Vital services functioning with active green retrofits underway.",
      visualLevel: 3,
    };
  }
  if (netBalance >= -35) {
    return {
      status: "Unstable",
      color: "#F97316",
      summary: "Frequent brownouts, lingering e-waste hazards, and volatile edge-cloud infrastructure.",
      visualLevel: 2,
    };
  }
  return {
    status: "Critical",
    color: "#EF4444",
    summary: "Catastrophic environmental degradation, resource depletion, and grid failure across Nova City.",
    visualLevel: 1,
  };
}

export interface CityEnding {
  key: "GREEN_HORIZON" | "FRAGILE_TOMORROW" | "THE_LAST_WARNING";
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  image: string;
  actionPlan: string[];
}

/**
 * Three Final Endings (Section 15 of Master Build Prompt)
 */
export function determineCityEnding(
  totalScore: number,
  sustainableCount: number,
  metrics?: CityMetrics
): CityEnding {
  // Ending 1: GREEN HORIZON (Sustainable >= 14 or Score >= 1500)
  if (sustainableCount >= 14 || totalScore >= 1500) {
    return {
      key: "GREEN_HORIZON",
      title: "ENDING 1 — GREEN HORIZON",
      subtitle: "The Eco-Intelligent Metropolis in Planetary Equilibrium",
      description:
        "NOVA CITY becomes a sustainable and resilient smart city! Responsible AI, embodied robotics, renewable energy microgrids, and citizen governance work together in harmony. Clean water flows freely, electronic waste is eliminated through circular repair hubs, and edge intelligence guards civic wellbeing.",
      badge: "Planetary Equilibrium Champion",
      color: "#10B981",
      image: "/assets/city-sustainable.svg",
      actionPlan: [
        "Maintain decentralized edge computing across all municipal sensors",
        "Expand closed-loop dielectric immersion cooling to regional compute hubs",
        "Foster citizen-led democratic AI oversight councils for ongoing algorithmic audits",
        "Scale circular remanufacturing to ensure 100% hardware component reuse",
      ],
    };
  }

  // Ending 2: FRAGILE TOMORROW (Moderate performance: Score 900 - 1490 or Sustainable 8 - 13)
  if (sustainableCount >= 8 || totalScore >= 900) {
    return {
      key: "FRAGILE_TOMORROW",
      title: "ENDING 2 — FRAGILE TOMORROW",
      subtitle: "Survival with Ongoing Environmental Scars",
      description:
        "Nova City survives the catastrophic breakdown, but continues to face serious environmental challenges. The electrical grid experiences intermittent strain, pockets of electronic scrap require hazardous containment, and water supplies remain tightly rationed. The Task Force is issued an urgent urban recovery roadmap.",
      badge: "Resilience Recovery Unit",
      color: "#FBBF24",
      image: "/assets/disaster-recovery.svg",
      actionPlan: [
        "Execute immediate INT8 quantization across all municipal traffic and surveillance nodes",
        "Halt open groundwater extraction for data centers and convert to dry cooling",
        "Deploy modular repair workshops to rehabilitate discarded robot chassis",
        "Enforce strict data minimization to rebuild frayed civic public trust",
      ],
    };
  }

  // Ending 3: THE LAST WARNING (Score < 900 or Sustainable < 8)
  return {
    key: "THE_LAST_WARNING",
    title: "ENDING 3 — THE LAST WARNING",
    subtitle: "Ecological Breakdown & The Urgent Recovery Challenge",
    description:
      "Nova City experiences severe resource exhaustion, rolling power blackouts, and critical environmental degradation. Centralized servers evaporated municipal drinking water, mountains of toxic electronic waste poisoned local soils, and citizens dismantled surveillance grids in anger. The Task Force faces a mandatory rebuilding protocol.",
    badge: "Crisis Remediator Corps",
    color: "#EF4444",
    image: "/assets/city-polluted.svg",
    actionPlan: [
      "Mandate an immediate moratorium on unpruned hyperscale model deployments",
      "Decommission open-cycle evaporative cooling towers in favor of ambient liquid loops",
      "Pass the Right-to-Repair ordinance and ban planned hardware obsolescence",
      "Re-architect civic intelligence from centralized monopolies into open, community-governed edge nodes",
    ],
  };
}

/**
 * Determines ending based on collective room metrics
 */
export function determineCollectiveEnding(sharedMetrics: SharedCityMetrics): CityEnding {
  const avgPositive =
    (sharedMetrics.energyStability +
      sharedMetrics.networkStability +
      sharedMetrics.environmentalHealth +
      sharedMetrics.waterAvailability +
      sharedMetrics.rescueProgress +
      sharedMetrics.publicTrust) /
    6;

  const netBalance = avgPositive - sharedMetrics.ewasteLevel;

  if (netBalance >= 15 || avgPositive >= 70) {
    return determineCityEnding(1800, 18);
  } else if (netBalance >= -15 || avgPositive >= 45) {
    return determineCityEnding(1200, 11);
  } else {
    return determineCityEnding(600, 5);
  }
}
