export type SDGNumber = 3 | 6 | 7 | 9 | 11 | 12 | 13;

export interface SDGInfo {
  number: SDGNumber;
  title: string;
  shortName: string;
  color: string;
  iconName: string;
}

export interface DecisionOption {
  id: string; // e.g. "m1-opt-a"
  key: "A" | "B" | "C" | "D";
  title: string;
  shortDescription: string;
  detailedExplanation: string;
  advantages: string[];
  disadvantages: string[];
  impacts: {
    environmental: number; // delta e.g. -15 to +20
    energy: number;
    social: number;
    economic: number;
  };
  cityMetricDeltas: {
    energyIndex: number; // positive = worse consumption unless treated as efficiency
    carbonIndex: number;
    waterIndex: number;
    ewasteIndex: number;
    operationalEfficiency: number;
    citizenWellbeing: number;
    resilienceIndex: number;
  };
  learningObjective: string;
  sdgs: SDGNumber[];
  consequenceNarration: string;
  educationalTakeaway: string;
}

export interface Mission {
  id: number;
  number: number;
  title: string;
  category: string;
  environmentalContext: string;
  storyProblem: string;
  prompt: string;
  options: DecisionOption[];
  sdgs: SDGNumber[];
  summaryNote: string;
}

export interface ParticipantScore {
  environmental: number; // 0 - 1000 base
  energy: number;        // 0 - 1000 base
  social: number;        // 0 - 1000 base
  economic: number;      // 0 - 1000 base
  total: number;         // 0 - 1000 weighted
  rating: string;
}

export interface CityMetrics {
  energyIndex: number;          // 0 - 100 (percentage stress)
  carbonIndex: number;          // 0 - 100
  waterIndex: number;           // 0 - 100
  ewasteIndex: number;          // 0 - 100
  operationalEfficiency: number;// 0 - 100 (higher is better)
  citizenWellbeing: number;     // 0 - 100 (higher is better)
  resilienceIndex: number;      // 0 - 100 (higher is better)
}

export type CityCondition =
  | "Critical"
  | "Unstable"
  | "Recovering"
  | "Sustainable"
  | "Thriving";

export interface Participant {
  id: string;
  workshopId: string;
  fullName: string;
  teamName?: string;
  joinedAt: string;
  connectionStatus: "online" | "offline";
  currentMission: number;
  hasSubmittedCurrentMission: boolean;
  score: ParticipantScore;
  cityMetrics: CityMetrics;
  decisions: Record<number, string>; // missionNumber -> optionKey ("A", "B", etc.)
}

export interface WorkshopSession {
  id: string;
  pin: string;
  title: string;
  status: "registration" | "in_progress" | "paused" | "completed";
  currentMission: number; // 1 to 4
  consequencesRevealed: boolean;
  allowResubmission: boolean;
  registrationOpen: boolean;
  createdAt: string;
}

export interface SubmissionRecord {
  id: string;
  workshopId: string;
  participantId: string;
  participantName: string;
  teamName?: string;
  missionNumber: number;
  optionKey: "A" | "B" | "C" | "D";
  optionTitle: string;
  submittedAt: string;
}
