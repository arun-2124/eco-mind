export type SDGNumber = 3 | 6 | 7 | 9 | 11 | 12 | 13;

export interface SDGInfo {
  number: SDGNumber;
  title: string;
  shortName: string;
  color: string;
  iconName: string;
}

export interface LearningHotspot {
  id: string;
  label: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  description: string;
  tag: string;
}

export interface DecisionOption {
  id: string; // e.g. "m1-opt-a"
  key: "A" | "B";
  title: string;
  isSustainable: boolean; // Option A = true, Option B = false
  image: string;
  shortDescription: string;
  detailedExplanation: string;
  advantages: string[];
  disadvantages: string[];
  pointsAwarded: number; // 250 for sustainable, 50 for unsustainable
  impacts: {
    environmental: number; // delta
    energy: number;
    social: number;
    economic: number;
  };
  cityMetricDeltas: {
    energyIndex: number;
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

export interface AIExplainerTopic {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  definition: string;
  realWorldExample: string;
  takeaway: string;
  tag: string;
}

export interface Mission {
  id: number;
  number: number;
  title: string;
  category: string;
  heroImage: string;
  environmentalContext: string;
  storyProblem: string;
  prompt: string;
  question: string;
  options: DecisionOption[];
  sdgs: SDGNumber[];
  summaryNote: string;
  hotspots: LearningHotspot[];
  aiConcept: {
    title: string;
    subtitle: string;
    definition: string;
    realWorldExample: string;
    takeaway: string;
    componentType: "pipeline" | "robot" | "efficiency" | "circular";
  };
}

export interface ParticipantScore {
  environmental: number; // 0 - 1000 base
  energy: number;        // 0 - 1000 base
  social: number;        // 0 - 1000 base
  economic: number;      // 0 - 1000 base
  total: number;         // 0 - 1000 weighted
  rating: string;
  sustainableCount: number;
  unsustainableCount: number;
}

export interface CityMetrics {
  energyIndex: number;          // 0 - 100
  carbonIndex: number;          // 0 - 100
  waterIndex: number;           // 0 - 100
  ewasteIndex: number;          // 0 - 100
  operationalEfficiency: number;// 0 - 100
  citizenWellbeing: number;     // 0 - 100
  resilienceIndex: number;      // 0 - 100
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
  decisions: Record<number, string>; // missionNumber -> "A" | "B"
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
  optionKey: "A" | "B";
  optionTitle: string;
  isSustainable: boolean;
  submittedAt: string;
}
