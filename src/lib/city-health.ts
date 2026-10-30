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
  key:
    | "NOVA_REBORN"
    | "THE_SURVIVORS"
    | "LAST_LIGHT"
    | "THE_FALL"
    | "GREEN_HORIZON"
    | "FRAGILE_TOMORROW"
    | "THE_LAST_WARNING";
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  image: string;
  actionPlan: string[];
}

/**
 * Four Cinematic Story Endings:
 * 1. NOVA REBORN (City restored, humanity & nature in equilibrium)
 * 2. THE SURVIVORS (City abandoned, humanity survives in green frontier)
 * 3. LAST LIGHT (Sacrifice seals core to preserve underground vaults)
 * 4. THE FALL (Complete blackout, city collapses into silence)
 */
export function determineCityEnding(
  totalScore: number,
  sustainableCount: number,
  metrics?: CityMetrics
): CityEnding {
  // Ending 1: NOVA REBORN (Sustainable >= 15 or Score >= 1600)
  if (sustainableCount >= 15 || totalScore >= 1600) {
    return {
      key: "NOVA_REBORN",
      title: "ENDING 1 — NOVA REBORN",
      subtitle: "The City Restored — Humanity & Nature in Planetary Equilibrium",
      description:
        "Through disciplined stewardship, sustainable Edge computing, and collective resilience, Nova City has healed its wounds. The synthetic core breathes in rhythm with restored solar wetlands. The Last Signal was not a death knell, but an awakening: technology and ecology fused into a thriving sanctuary.",
      badge: "Architect of Nova Reborn",
      color: "#10B981",
      image: "/assets/city-sustainable.svg",
      actionPlan: [
        "Decentralize computing power into neighborhood solar microgrids",
        "Restore coastal bio-buffers to naturally shield urban infrastructure",
        "Enforce human-in-the-loop ethical oversight on all autonomous systems",
        "Transition all retired robotic hardware to circular municipal repair hubs",
      ],
    };
  }

  // Ending 2: THE SURVIVORS (Sustainable 11 - 14 or Score 1150 - 1590)
  if (sustainableCount >= 11 || totalScore >= 1150) {
    return {
      key: "THE_SURVIVORS",
      title: "ENDING 2 — THE SURVIVORS",
      subtitle: "The Great Exodus — Humanity Survives in the Green Frontier",
      description:
        "Nova City's concrete towers proved too broken and energy-hungry to sustain, but the population survived. Salvaging modular edge chips, solar skiffs, and water purification units, surviving convoys established flourishing off-grid settlements in the fertile valleys beyond the perimeter.",
      badge: "Frontier Pioneer",
      color: "#00F0FF",
      image: "/assets/disaster-recovery.svg",
      actionPlan: [
        "Repurpose urban salvage to build low-power rural cooperative hubs",
        "Establish permaculture agriculture guided by ultra-light edge sensors",
        "Maintain open radio relays between survivor enclaves",
        "Vow never again to concentrate civilization's fate inside a single synthetic core",
      ],
    };
  }

  // Ending 3: LAST LIGHT (Sustainable 7 - 10 or Score 700 - 1140)
  if (sustainableCount >= 7 || totalScore >= 700) {
    return {
      key: "LAST_LIGHT",
      title: "ENDING 3 — LAST LIGHT",
      subtitle: "The Heroic Sacrifice — Core Sealed to Preserve Underground Vaults",
      description:
        "With the central power grid spiraling toward thermal runaway, Commander Vance and Dr. Lin initiated a desperate isolation seal. Surface towers went dark forever, cutting power to save the subterranean vaults where tens of thousands of citizens, medical caches, and seed banks remain safely sheltered.",
      badge: "Guardian of the Vaults",
      color: "#FBBF24",
      image: "/assets/disaster-recovery.svg",
      actionPlan: [
        "Ration geothermal and battery reserves across underground emergency vaults",
        "Deploy tethered reconnaissance rovers to survey surface radiation and water",
        "Preserve cultural archives and technical schematics for future generations",
        "Wait for atmospheric stabilization before attempting surface re-emergence",
      ],
    };
  }

  // Ending 4: THE FALL (Sustainable < 7 or Score < 700)
  return {
    key: "THE_FALL",
    title: "ENDING 4 — THE FALL",
    subtitle: "Complete Grid Blackout — Nova City Collapses into Frozen Silence",
    description:
      "Reckless power extraction, overwhelmed server clusters, and toxic electronic fallout overwhelmed Nova City's fragile ecosystems. The main reactors tripped into emergency lockout, plunging districts into permanent darkness. The Last Signal fades into empty static as the frozen skyline stands abandoned.",
    badge: "Witness to the Fall",
    color: "#EF4444",
    image: "/assets/city-polluted.svg",
    actionPlan: [
      "Issue distress broadcasts across emergency high-frequency channels",
      "Evacuate remaining survivors on manual transport toward mountain refuges",
      "Extract emergency hard drives before complete battery depletion",
      "Document the systemic failures of unchecked automation as a lesson for the world",
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

  if (netBalance >= 25 || avgPositive >= 75) {
    return determineCityEnding(1800, 18); // NOVA REBORN
  } else if (netBalance >= 5 || avgPositive >= 55) {
    return determineCityEnding(1300, 12); // THE SURVIVORS
  } else if (netBalance >= -20 || avgPositive >= 35) {
    return determineCityEnding(900, 8);   // LAST LIGHT
  } else {
    return determineCityEnding(500, 4);   // THE FALL
  }
}
