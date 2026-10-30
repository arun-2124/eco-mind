import { MISSIONS } from "./game-data";
import { BranchingModifier, SharedCityMetrics } from "@/types/game";

export interface BranchingStoryAlert {
  conditionMission: number;
  conditionMissionTitle: string;
  playerChoice: "A" | "B";
  headline: string;
  narrativeEffect: string;
  isPositive: boolean;
}

export interface SituationalIntelligence {
  systemStatus: "OPTIMAL" | "NOMINAL" | "STRESSED" | "CRITICAL";
  statusColor: string;
  tacticalNote: string;
  activeModifiers: BranchingStoryAlert[];
}

/**
 * Returns narrative branch modifiers for the current mission based on player's prior choices.
 */
export function getBranchingAlertsForMission(
  missionNumber: number,
  playerDecisions: Record<number, "A" | "B">
): BranchingStoryAlert[] {
  const currentMission = MISSIONS.find((m) => m.number === missionNumber);
  if (!currentMission || !currentMission.branchingModifiers) return [];

  const activeAlerts: BranchingStoryAlert[] = [];

  for (const modifier of currentMission.branchingModifiers) {
    const priorChoice = playerDecisions[modifier.conditionMission];
    if (priorChoice && priorChoice === modifier.requiredChoice) {
      const priorMission = MISSIONS.find((m) => m.number === modifier.conditionMission);
      activeAlerts.push({
        conditionMission: modifier.conditionMission,
        conditionMissionTitle: priorMission ? priorMission.title : `Mission ${modifier.conditionMission}`,
        playerChoice: priorChoice,
        headline: modifier.headline,
        narrativeEffect: modifier.narrativeEffect,
        isPositive: modifier.isPositive,
      });
    }
  }

  return activeAlerts;
}

/**
 * Generates dynamic situational intelligence for the briefing screen
 * reflecting prior player choices and shared city indicators.
 */
export function getMissionSituationalIntelligence(
  missionNumber: number,
  playerDecisions: Record<number, "A" | "B">,
  sharedMetrics?: SharedCityMetrics
): SituationalIntelligence {
  const activeModifiers = getBranchingAlertsForMission(missionNumber, playerDecisions);

  // Compute overall status from metrics if provided
  let systemStatus: SituationalIntelligence["systemStatus"] = "NOMINAL";
  let statusColor = "#00F0FF"; // electric cyan default
  let tacticalNote = "All baseline telemetry channels nominal. Awaiting mission directive authorization.";

  if (sharedMetrics) {
    const avgHealth =
      (sharedMetrics.energyStability +
        sharedMetrics.networkStability +
        sharedMetrics.environmentalHealth +
        sharedMetrics.waterAvailability +
        sharedMetrics.rescueProgress +
        sharedMetrics.publicTrust) /
      6;

    if (avgHealth >= 75) {
      systemStatus = "OPTIMAL";
      statusColor = "#10B981"; // green
      tacticalNote = "Nova City environmental reserves are robust. Community trust and sensor grids operating at peak efficiency.";
    } else if (avgHealth >= 50) {
      systemStatus = "NOMINAL";
      statusColor = "#00F0FF"; // cyan
      tacticalNote = "City infrastructure is stable under moderate load. Conserve resources to prevent cascading grid friction.";
    } else if (avgHealth >= 35) {
      systemStatus = "STRESSED";
      statusColor = "#F59E0B"; // amber
      tacticalNote = "Warning: Multiple city sectors report infrastructure strain. High-efficiency decisions required to stabilize services.";
    } else {
      systemStatus = "CRITICAL";
      statusColor = "#EF4444"; // red
      tacticalNote = "CRITICAL ADVISORY: Cascading infrastructure alerts in multiple districts. Immediate sustainable action mandated.";
    }
  }

  // If there are specific active modifiers, inject tactical nuance
  if (activeModifiers.length > 0) {
    const primaryMod = activeModifiers[0];
    if (primaryMod.isPositive) {
      tacticalNote = `[HISTORICAL ADVANTAGE: ${primaryMod.conditionMissionTitle}] ${primaryMod.narrativeEffect}`;
    } else {
      tacticalNote = `[HISTORICAL CONSTRAINTS: ${primaryMod.conditionMissionTitle}] ${primaryMod.narrativeEffect}`;
      if (systemStatus === "NOMINAL") {
        systemStatus = "STRESSED";
        statusColor = "#F59E0B";
      }
    }
  }

  return {
    systemStatus,
    statusColor,
    tacticalNote,
    activeModifiers,
  };
}
