"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import {
  GameState,
  loadGameState,
  subscribeToSync,
  fetchRemoteRoom,
  registerParticipantOnline,
  submitDecisionOnline,
  presenterStartWorkshop,
  presenterStartMission,
  presenterRevealConsequences,
  presenterAdvanceMission,
  presenterTogglePause,
  presenterToggleRegistration,
  presenterToggleResubmission,
  presenterEndSession,
  presenterResetWorkshop,
  awardParticipantBonus,
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

    // Initial server fetch
    fetchRemoteRoom(DEFAULT_PIN).then((remote) => {
      if (remote) setGameState(remote);
    });

    // Realtime subscription (BroadcastChannel + window events)
    const unsubscribe = subscribeToSync((newState) => {
      setGameState(newState);
    });

    // Background server heartbeat polling (every 1.8 seconds) for cross-device multiplayer
    const interval = setInterval(() => {
      fetchRemoteRoom(gameState.session.pin || DEFAULT_PIN).then((remote) => {
        if (remote) setGameState(remote);
      });
    }, 1800);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [gameState.session.pin]);

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
    async (pin: string, name: string, team?: string) => {
      const res = await registerParticipantOnline(pin, name, team);
      if (res.success && res.participant) {
        localStorage.setItem(PARTICIPANT_KEY, res.participant.id);
        setCurrentParticipantId(res.participant.id);
      }
      return res;
    },
    []
  );

  const handleSubmitDecision = useCallback(
    async (missionNum: number, optionKey: "A" | "B") => {
      if (!currentParticipantId) {
        return { success: false, error: "Participant not logged in" };
      }
      return await submitDecisionOnline(
        gameState.session.pin || DEFAULT_PIN,
        currentParticipantId,
        missionNum,
        optionKey
      );
    },
    [currentParticipantId, gameState.session.pin]
  );

  const handlePresenterStartWorkshop = useCallback(() => {
    return presenterStartWorkshop(gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterStartMission = useCallback((missionNum: number) => {
    return presenterStartMission(missionNum, gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterReveal = useCallback(() => {
    return presenterRevealConsequences(gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterAdvance = useCallback(() => {
    return presenterAdvanceMission(gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterTogglePause = useCallback((pause: boolean) => {
    return presenterTogglePause(pause, gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterToggleReg = useCallback((open: boolean) => {
    return presenterToggleRegistration(open, gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterToggleResubmission = useCallback((allow: boolean) => {
    return presenterToggleResubmission(allow, gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterEndSession = useCallback(() => {
    return presenterEndSession(gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const handlePresenterReset = useCallback(() => {
    return presenterResetWorkshop(gameState.session.pin || DEFAULT_PIN);
  }, [gameState.session.pin]);

  const logoutParticipant = useCallback(() => {
    localStorage.removeItem(PARTICIPANT_KEY);
    setCurrentParticipantId(null);
  }, []);

  return {
    isLoaded,
    session: gameState.session,
    participants: gameState.participants,
    submissions: gameState.submissions,
    sharedCityMetrics: gameState.session.sharedCityMetrics,
    currentParticipant,
    activeMission,
    // Methods
    register: handleRegister,
    submitDecision: handleSubmitDecision,
    awardBonus: (points: number = 50) => {
      if (!currentParticipantId) return { success: false };
      return awardParticipantBonus(currentParticipantId, points);
    },
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
