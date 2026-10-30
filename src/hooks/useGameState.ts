"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import {
  GameState,
  loadGameState,
  subscribeToSync,
  presenterStartWorkshop,
  presenterStartMission,
  presenterRevealConsequences,
  presenterAdvanceMission,
  presenterTogglePause,
  presenterToggleRegistration,
  presenterToggleResubmission,
  presenterEndSession,
  presenterResetWorkshop,
  submitParticipantDecision,
  registerParticipant,
  DEFAULT_PIN,
} from "@/lib/sync-engine";
import { MISSIONS } from "@/lib/game-data";
import { Participant } from "@/types/game";

const PARTICIPANT_KEY = "ecomind_current_participant_id";

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(loadGameState());
  const [currentParticipantId, setCurrentParticipantId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load local participant ID from storage if present
    const savedId = localStorage.getItem(PARTICIPANT_KEY);
    if (savedId) {
      setCurrentParticipantId(savedId);
    }
    setGameState(loadGameState());
    setIsLoaded(true);

    const unsubscribe = subscribeToSync((newState) => {
      setGameState(newState);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const currentParticipant = useMemo<Participant | null>(() => {
    if (!currentParticipantId) return null;
    return gameState.participants.find((p) => p.id === currentParticipantId) || null;
  }, [gameState.participants, currentParticipantId]);

  const activeMission = useMemo(() => {
    const num = gameState.session.currentMission;
    return MISSIONS.find((m) => m.number === num) || MISSIONS[0];
  }, [gameState.session.currentMission]);

  // Actions
  const handleRegister = useCallback(
    (pin: string, name: string, team?: string) => {
      const res = registerParticipant(pin, name, team);
      if (res.success && res.participant) {
        localStorage.setItem(PARTICIPANT_KEY, res.participant.id);
        setCurrentParticipantId(res.participant.id);
      }
      return res;
    },
    []
  );

  const handleSubmitDecision = useCallback(
    (missionNum: number, optionKey: "A" | "B") => {
      if (!currentParticipantId) {
        return { success: false, error: "Participant not logged in" };
      }
      return submitParticipantDecision(currentParticipantId, missionNum, optionKey);
    },
    [currentParticipantId]
  );

  const handlePresenterStartWorkshop = useCallback(() => {
    return presenterStartWorkshop(DEFAULT_PIN);
  }, []);

  const handlePresenterStartMission = useCallback((missionNum: number) => {
    return presenterStartMission(missionNum, DEFAULT_PIN);
  }, []);

  const handlePresenterReveal = useCallback(() => {
    return presenterRevealConsequences(DEFAULT_PIN);
  }, []);

  const handlePresenterAdvance = useCallback(() => {
    return presenterAdvanceMission(DEFAULT_PIN);
  }, []);

  const handlePresenterTogglePause = useCallback((pause: boolean) => {
    return presenterTogglePause(pause, DEFAULT_PIN);
  }, []);

  const handlePresenterToggleReg = useCallback((open: boolean) => {
    return presenterToggleRegistration(open, DEFAULT_PIN);
  }, []);

  const handlePresenterToggleResubmission = useCallback((allow: boolean) => {
    return presenterToggleResubmission(allow, DEFAULT_PIN);
  }, []);

  const handlePresenterEndSession = useCallback(() => {
    return presenterEndSession(DEFAULT_PIN);
  }, []);

  const handlePresenterReset = useCallback(() => {
    return presenterResetWorkshop(DEFAULT_PIN);
  }, []);

  const logoutParticipant = useCallback(() => {
    localStorage.removeItem(PARTICIPANT_KEY);
    setCurrentParticipantId(null);
  }, []);

  return {
    isLoaded,
    session: gameState.session,
    participants: gameState.participants,
    submissions: gameState.submissions,
    currentParticipant,
    activeMission,
    // Methods
    register: handleRegister,
    submitDecision: handleSubmitDecision,
    logoutParticipant,
    // Presenter methods
    startWorkshop: handlePresenterStartWorkshop,
    startMission: handlePresenterStartMission,
    revealConsequences: handlePresenterReveal,
    advanceMission: handlePresenterAdvance,
    togglePause: handlePresenterTogglePause,
    toggleRegistration: handlePresenterToggleReg,
    toggleResubmission: handlePresenterToggleResubmission,
    endSession: handlePresenterEndSession,
    resetWorkshop: handlePresenterReset,
  };
}
