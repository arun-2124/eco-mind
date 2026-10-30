export type SDGNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17;

export interface SDGInfo {
  number: SDGNumber;
  title: string;
  shortName: string;
  color: string;
  iconName: string;
}

export type TeamName = "TEAM TITAN" | "TEAM NOVA" | "TEAM ORBIT" | "TEAM PHOENIX" | string;

export interface TeamScore {
  name: string;
  teamName?: string;
  totalScore: number;
  memberCount: number;
  averageScore: number;
  sustainablePct: number;
}

export type BadgeId =
  | "edge_ai_explorer"
  | "physical_ai_engineer"
  | "rescue_strategist"
  | "energy_guardian"
  | "water_protector"
  | "circular_economy_champion"
  | "responsible_ai_defender"
  | "nova_city_saviour";

export interface BadgeInfo {
  id: BadgeId;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
}

export interface LearningHotspot {
  id: string;
  label?: string;
  title?: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  description: string;
  tag?: string;
}

export interface CharacterDialogue {
  speaker: string;
  role: string;
  avatar: string;
  text: string;
  mood?: "urgent" | "concerned" | "determined" | "grave" | "hopeful" | "conflicted";
  accentColor?: string;
}

export interface DecisionOption {
  id: string; // e.g. "m1-opt-a"
  key: "A" | "B";
  title: string;
  isSustainable: boolean; // Option A = Sustainable/Responsible, Option B = Unsustainable/High-Risk
  image: string;
  shortDescription: string;
  detailedExplanation: string;
  characterReaction?: {
    speaker: string;
    quote: string;
  };
  consequenceNarration: string;
  nextSceneTeaser?: string;
  advantages: string[];
  disadvantages: string[];
  pointsAwarded: number; // 100 for sustainable, 30 for unsustainable
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
  learningObjective?: string;
  sdgs?: SDGNumber[];
  educationalTakeaway?: string;
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

export interface BranchingModifier {
  conditionMission: number;
  requiredChoice: "A" | "B";
  headline: string;
  narrativeEffect: string;
  isPositive: boolean;
}

export interface SurpriseEvent {
  id: string;
  title: string;
  description: string;
  severity: "warning" | "critical" | "info";
  affectedMetric: keyof SharedCityMetrics;
  delta: number;
  recommendedAction: string;
}

export interface Mission {
  id: number;
  number: number; // 1 to 20
  chapterNumber: 1 | 2 | 3 | 4 | 5;
  chapterTitle: string;
  title: string;
  category: string;
  heroImage: string;
  environmentName?: string;
  storyScene?: string;
  dialogue?: CharacterDialogue[];
  situation?: string;
  environmentalContext: string;
  storyProblem: string;
  prompt: string;
  question: string;
  options: [DecisionOption, DecisionOption]; // strictly two choices
  sdgs: SDGNumber[];
  summaryNote: string;
  hotspots: LearningHotspot[];
  branchingModifiers?: BranchingModifier[];
  aiConcept?: {
    title: string;
    subtitle: string;
    definition: string;
    realWorldExample: string;
    takeaway: string;
    componentType: "pipeline" | "robot" | "efficiency" | "circular" | "general";
  };
}

export interface ParticipantScore {
  environmental: number; // 0 - 2000 base
  energy: number;        // 0 - 2000 base
  social: number;        // 0 - 2000 base
  economic: number;      // 0 - 2000 base
  total: number;         // accumulated points (max 2000 base)
  rating: string;
  sustainableCount: number;
  unsustainableCount: number;
  badges?: BadgeId[];
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
  teamName: TeamName;
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
  timerSecondsRemaining?: number | null; // Mission countdown timer
  activeSurpriseEvent?: SurpriseEvent | null;
}

export interface SubmissionRecord {
  id: string;
  workshopId: string;
  participantId: string;
  participantName: string;
  teamName: TeamName;
  missionNumber: number;
  optionKey: "A" | "B";
  optionTitle: string;
  isSustainable: boolean;
  submittedAt: string;
}
