export type SDGNumber = 3 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 15 | 16;

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
  sharedCityDeltas?: {
    energyStability: number;
    networkStability: number;
    environmentalHealth: number;
    waterAvailability: number;
    rescueProgress: number;
    publicTrust: number;
    ewasteLevel: number;
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

export interface Chapter {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  theme: string;
  description: string;
  missionRange: [number, number];
}

export interface Mission {
  id: number;
  number: number; // 1 to 20
  chapterNumber: 1 | 2 | 3 | 4 | 5;
  chapterTitle: string;
  title: string;
  category: string;
  heroImage: string;
  environmentalContext: string;
  storyProblem: string;
  prompt: string;
  question: string;
  options: [DecisionOption, DecisionOption]; // strictly two choices
  sdgs: SDGNumber[];
  summaryNote: string;
  hotspots: LearningHotspot[];
  aiConcept: {
    title: string;
    subtitle: string;
    definition: string;
    realWorldExample: string;
    takeaway: string;
    componentType: "pipeline" | "robot" | "efficiency" | "circular" | "general";
  };
}

export interface ParticipantScore {
  environmental: number; // 0 - 1000 base
  energy: number;        // 0 - 1000 base
  social: number;        // 0 - 1000 base
  economic: number;      // 0 - 1000 base
  total: number;         // accumulated points
  rating: string;
  sustainableCount: number;
  unsustainableCount: number;
}

// 7 Collective Room Simulation Indicators (Section 8)
export interface SharedCityMetrics {
  energyStability: number;      // 0 - 100 (high is good)
  networkStability: number;     // 0 - 100 (high is good)
  environmentalHealth: number;  // 0 - 100 (high is good)
  waterAvailability: number;    // 0 - 100 (high is good)
  rescueProgress: number;       // 0 - 100 (high is good)
  publicTrust: number;          // 0 - 100 (high is good)
  ewasteLevel: number;          // 0 - 100 (low is good)
}

// Individual Telemetry Metrics
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
  decisions: Record<number, "A" | "B">; // missionNumber -> "A" | "B"
}

export interface WorkshopSession {
  id: string;
  pin: string;
  title: string;
  status: "registration" | "in_progress" | "paused" | "completed";
  currentMission: number; // 1 to 20
  consequencesRevealed: boolean;
  allowResubmission: boolean;
  registrationOpen: boolean;
  createdAt: string;
  sharedCityMetrics: SharedCityMetrics;
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
