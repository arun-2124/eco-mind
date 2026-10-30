import { MISSIONS } from "./game-data";
import { CityCondition, CityMetrics } from "@/types/game";

export const INITIAL_CITY_METRICS: CityMetrics = {
  energyIndex: 78,          // high initial strain
  carbonIndex: 72,          // high initial carbon
  waterIndex: 65,           // high cooling draw
  ewasteIndex: 60,          // existing piles
  operationalEfficiency: 52,// degraded by latency and grid
  citizenWellbeing: 48,     // stressed by pollution & brownouts
  resilienceIndex: 35,      // fragile centralized bottlenecks
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
      color: "#38E58B",
      summary: "Nova City is a beacon of ecological balance, clean energy autonomy, and responsible robotics.",
      visualLevel: 5,
    };
  }
  if (netBalance >= 5) {
    return {
      status: "Sustainable",
      color: "#35D5FF",
      summary: "Stable computational overhead, clean power transitions, and healthy community ecosystems.",
      visualLevel: 4,
    };
  }
  if (netBalance >= -15) {
    return {
      status: "Recovering",
      color: "#FCC30B",
      summary: "Systemic collapse averted. Vital services functioning with active green retrofits underway.",
      visualLevel: 3,
    };
  }
  if (netBalance >= -35) {
    return {
      status: "Unstable",
      color: "#F6B94A",
      summary: "Frequent brownouts, lingering e-waste hazards, and volatile edge-cloud infrastructure.",
      visualLevel: 2,
    };
  }
  return {
    status: "Critical",
    color: "#FF5B65",
    summary: "Catastrophic environmental degradation, resource depletion, and grid failure across Nova City.",
    visualLevel: 1,
  };
}

export function determineCityEnding(
  totalScore: number,
  sustainableCount: number,
  metrics: CityMetrics
): {
  key: "GREEN_FUTURE" | "TECH_WITHOUT_BALANCE" | "FRAGILE_CITY" | "RECOVERY_IN_PROGRESS";
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  image: string;
} {
  if (sustainableCount >= 3 || totalScore >= 750) {
    return {
      key: "GREEN_FUTURE",
      title: "1. GREEN FUTURE",
      subtitle: "The Eco-Intelligent Metropolis",
      description:
        "Nova City thrives as an inspiring global model of responsible technology. Through local edge AI, collaborative physical robotics, workload optimization, and modular circular repairs, human well-being and natural ecosystems flourish in planetary equilibrium.",
      badge: "Planetary Equilibrium Achieved",
      color: "#38E58B",
      image: "/assets/city-sustainable.svg",
    };
  }

  if (metrics.operationalEfficiency >= 60 && (metrics.carbonIndex > 50 || metrics.ewasteIndex > 50)) {
    return {
      key: "TECH_WITHOUT_BALANCE",
      title: "2. TECHNOLOGY WITHOUT BALANCE",
      subtitle: "Peak Silicon, Strained Planet",
      description:
        "The city achieved high technological convenience and fast automation, but at the cost of depleted water reservoirs and mounting electronic scrap. Innovation marches on, yet ecological debt looms heavy over future generations.",
      badge: "High Velocity, High Ecological Cost",
      color: "#35D5FF",
      image: "/assets/city-polluted.svg",
    };
  }

  if (sustainableCount <= 1 || totalScore <= 350) {
    return {
      key: "FRAGILE_CITY",
      title: "3. FRAGILE CITY",
      subtitle: "Complex Systems, Fragile Margins",
      description:
        "Nova City remained entrapped by centralized dependencies and planned obsolescence. Power fluctuations regularly stall civic transport, and community trust in automated systems has eroded.",
      badge: "Vulnerable Network Architecture",
      color: "#FF5B65",
      image: "/assets/city-polluted.svg",
    };
  }

  return {
    key: "RECOVERY_IN_PROGRESS",
    title: "4. RECOVERY IN PROGRESS",
    subtitle: "Rebuilding Foundations with Purpose",
    description:
      "Averted total blackout and halted hazardous landfill expansion. While several legacy challenges remain, the Task Force laid durable ground for circular repair, energy thrift, and collaborative robotics.",
    badge: "Steadfast Resiliency Transition",
    color: "#FCC30B",
    image: "/assets/city-sustainable.svg",
  };
}
