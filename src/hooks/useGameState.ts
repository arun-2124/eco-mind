"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import {
  GameState,
  loadGameState,
  subscribeToSync,
  fetchRemoteRoom,
  registerParticipantOnline,
  submitDecisionOnline,
  createRoomOnline,
  presenterStartWorkshop,
  presenterStartMission,
  presenterRevealConsequences,
  presenterAdvanceMission,
  presenterTogglePause,
  presenterToggleRegistration,
  presenterToggleResubmission,
  presenterEndSession,
  presenterResetWorkshop,
  presenterSetTimer,
  presenterTriggerSurpriseEvent,
  presenterClearSurpriseEvent,
  awardParticipantBonus,
  addParticipantItem,
  addParticipantDiscoveredClue,
  DEFAULT_PIN,
} from "@/lib/sync-engine";
import { MISSIONS } from "@/lib/game-data";
import { Participant, InventoryItem } from "@/types/game";

const PARTICIPANT_KEY = "ecomind_current_participant_id";
const ROOM_PIN_KEY = "ecomind_current_room_pin";

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(loadGameState());
  const [currentParticipantId, setCurrentParticipantId] = useState<string | null>(null);
  const [activePin, setActivePin] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const urlPin = new URLSearchParams(window.location.search).get("pin");
      if (urlPin) return urlPin.trim().toUpperCase();
      const stored = localStorage.getItem(ROOM_PIN_KEY);
      if (stored) return stored.trim().toUpperCase();
    }
    return DEFAULT_PIN;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load local participant ID from storage if present
    const savedId = localStorage.getItem(PARTICIPANT_KEY);
    if (savedId) {
      setCurrentParticipantId(savedId);
    }

    const savedPin =
      (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("pin")) ||
      localStorage.getItem(ROOM_PIN_KEY) ||
      DEFAULT_PIN;
    const cleanPin = savedPin.trim().toUpperCase();
    setActivePin(cleanPin);

    setGameState(loadGameState());
    setIsLoaded(true);

    // Initial server fetch for this specific room
    fetchRemoteRoom(cleanPin, savedId || undefined).then((remote) => {
      if (remote) setGameState(remote);
    });

    // Realtime subscription (BroadcastChannel + window events)
    const unsubscribe = subscribeToSync((newState) => {
      setGameState(newState);
    });

    // Background server heartbeat polling (every 1.5 seconds) for cross-device multiplayer
    const interval = setInterval(() => {
      fetchRemoteRoom(cleanPin, savedId || undefined).then((remote) => {
        if (remote) setGameState(remote);
      });
    }, 1500);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [activePin]);

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
      const cleanPin = pin.trim().toUpperCase() || DEFAULT_PIN;
      const res = await registerParticipantOnline(cleanPin, name, team);
      if (res.success && res.participant) {
        localStorage.setItem(PARTICIPANT_KEY, res.participant.id);
        localStorage.setItem(ROOM_PIN_KEY, cleanPin);
        setCurrentParticipantId(res.participant.id);
        setActivePin(cleanPin);
      }
      return res;
    },
    []
  );

  const handleCreateRoom = useCallback(
    async (customPin?: string, title?: string, passcode?: string) => {
      const res = await createRoomOnline(customPin, title, passcode);
      if (res.success && res.pin) {
        localStorage.setItem(ROOM_PIN_KEY, res.pin);
        setActivePin(res.pin);
      }
      return res;
    },
    []
  );

  const handleSwitchRoom = useCallback(
    async (newPin: string) => {
      const clean = newPin.trim().toUpperCase();
      if (!clean) return;
      localStorage.setItem(ROOM_PIN_KEY, clean);
      setActivePin(clean);
      const remote = await fetchRemoteRoom(clean, currentParticipantId || undefined);
      if (remote) setGameState(remote);
    },
    [currentParticipantId]
  );

  const handleSubmitDecision = useCallback(
    async (missionNum: number, optionKey: "A" | "B") => {
      if (!currentParticipantId) {
        return { success: false, error: "Participant not logged in" };
      }
      return await submitDecisionOnline(
        activePin || gameState.session.pin || DEFAULT_PIN,
        currentParticipantId,
        missionNum,
        optionKey
      );
    },
    [currentParticipantId, activePin, gameState.session.pin]
  );

  const handlePresenterStartWorkshop = useCallback(() => {
    return presenterStartWorkshop(activePin || gameState.session.pin || DEFAULT_PIN);
  }, [activePin, gameState.session.pin]);

  const handlePresenterStartMission = useCallback(
    (missionNum: number) => {
      return presenterStartMission(missionNum, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterReveal = useCallback(() => {
    const updated = presenterRevealConsequences(activePin || gameState.session.pin || DEFAULT_PIN);
    setGameState(updated);
    return updated;
  }, [activePin, gameState.session.pin]);

  const handlePresenterAdvance = useCallback(() => {
    const updated = presenterAdvanceMission(activePin || gameState.session.pin || DEFAULT_PIN);
    setGameState(updated);
    return updated;
  }, [activePin, gameState.session.pin]);

  const handlePresenterTogglePause = useCallback(
    (pause: boolean) => {
      return presenterTogglePause(pause, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterToggleReg = useCallback(
    (open: boolean) => {
      return presenterToggleRegistration(open, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterToggleResubmission = useCallback(
    (allow: boolean) => {
      return presenterToggleResubmission(allow, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterEndSession = useCallback(() => {
    return presenterEndSession(activePin || gameState.session.pin || DEFAULT_PIN);
  }, [activePin, gameState.session.pin]);

  const handlePresenterReset = useCallback(() => {
    return presenterResetWorkshop(activePin || gameState.session.pin || DEFAULT_PIN);
  }, [activePin, gameState.session.pin]);

  const handlePresenterSetTimer = useCallback(
    (seconds: number | null) => {
      return presenterSetTimer(seconds, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterTriggerSurprise = useCallback(
    (event: any) => {
      return presenterTriggerSurpriseEvent(event, activePin || gameState.session.pin || DEFAULT_PIN);
    },
    [activePin, gameState.session.pin]
  );

  const handlePresenterClearSurprise = useCallback(() => {
    return presenterClearSurpriseEvent(activePin || gameState.session.pin || DEFAULT_PIN);
  }, [activePin, gameState.session.pin]);

  const handleCollectItem = useCallback(
    (item: InventoryItem) => {
      if (!currentParticipantId) return;
      addParticipantItem(currentParticipantId, item);
      setGameState(loadGameState());
    },
    [currentParticipantId]
  );

  const handleDiscoverClue = useCallback(
    (clueId: string) => {
      if (!currentParticipantId) return;
      addParticipantDiscoveredClue(currentParticipantId, clueId);
      setGameState(loadGameState());
    },
    [currentParticipantId]
  );

  const logoutParticipant = useCallback(() => {
    localStorage.removeItem(PARTICIPANT_KEY);
    setCurrentParticipantId(null);
  }, []);

  return {
    isLoaded,
    session: gameState.session,
    pin: activePin || gameState.session.pin || DEFAULT_PIN,
    participants: gameState.participants,
    submissions: gameState.submissions,
    sharedCityMetrics: gameState.session.sharedCityMetrics,
    currentParticipant,
    activeMission,
    // Methods
    register: handleRegister,
    createRoom: handleCreateRoom,
    switchRoom: handleSwitchRoom,
    submitDecision: handleSubmitDecision,
    collectItem: handleCollectItem,
    discoverClue: handleDiscoverClue,
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
    setTimer: handlePresenterSetTimer,
    triggerSurpriseEvent: handlePresenterTriggerSurprise,
    clearSurpriseEvent: handlePresenterClearSurprise,
  };
}
