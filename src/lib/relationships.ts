import { CharacterId, CharacterTrust } from "@/types/game";

export const INITIAL_RELATIONSHIPS: Record<CharacterId, CharacterTrust> = {
  maya: {
    characterId: "maya",
    name: "Maya Lin",
    score: 55,
    status: "neutral",
    lastReaction: "Ready to work with you on the frontline.",
  },
  elias: {
    characterId: "elias",
    name: "Elias Ward",
    score: 55,
    status: "neutral",
    lastReaction: "Observing your system architecture decisions.",
  },
  adrian: {
    characterId: "adrian",
    name: "Commander Adrian",
    score: 45,
    status: "cautious",
    lastReaction: "Wants to see if you have the backbone to maintain city order.",
  },
  lena: {
    characterId: "lena",
    name: "Dr. Lena Weiss",
    score: 55,
    status: "neutral",
    lastReaction: "Hoping your decisions respect planetary boundaries.",
  },
  noah: {
    characterId: "noah",
    name: "Noah Chen",
    score: 50,
    status: "neutral",
    lastReaction: "Eager to deploy edge recon drones under your command.",
  },
  ori: {
    characterId: "ori",
    name: "ORI",
    score: 60,
    status: "supportive",
    lastReaction: "Neural core linked. Monitoring ethical edge compute metrics.",
  },
};

export function computeTrustStatus(score: number): CharacterTrust["status"] {
  if (score < 35) return "distrustful";
  if (score < 50) return "cautious";
  if (score < 65) return "neutral";
  if (score < 85) return "supportive";
  return "devoted";
}

export function applyTrustDeltas(
  current: Record<CharacterId, CharacterTrust> | undefined,
  deltas: Partial<Record<CharacterId, number>> | undefined,
  reactionText?: string
): Record<CharacterId, CharacterTrust> {
  const base = current ? { ...current } : { ...INITIAL_RELATIONSHIPS };
  if (!deltas) return base;

  (Object.keys(deltas) as CharacterId[]).forEach((cid) => {
    const delta = deltas[cid] || 0;
    const existing = base[cid] || INITIAL_RELATIONSHIPS[cid];
    const newScore = Math.max(5, Math.min(100, existing.score + delta));
    base[cid] = {
      ...existing,
      score: newScore,
      status: computeTrustStatus(newScore),
      lastReaction: reactionText || (delta > 0 ? `${existing.name} approved of your action.` : `${existing.name} questioned your priorities.`),
    };
  });

  return base;
}

export function getCharacterPortrait(
  characterId: string,
  expression: "neutral" | "happy" | "sad" | "angry" | "shocked" | "worried" = "neutral"
): string {
  const cid = characterId.toLowerCase();
  let baseName = "maya";
  if (cid.includes("elias")) baseName = "elias";
  else if (cid.includes("adrian")) baseName = "adrian";
  else if (cid.includes("lena")) baseName = "lena";
  else if (cid.includes("noah")) baseName = "noah";
  else if (cid.includes("ori")) baseName = "ori";

  return `/assets/game/characters/${baseName}-${expression}.svg`;
}
