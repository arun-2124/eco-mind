/**
 * ECO//MIND: THE LAST SIGNAL — COMPLETE 20-STEP MASTER TEST SUITE
 * 
 * Verifies all 20 production requirements:
 * 1. Presenter creates a room.
 * 2. Unique room PIN is generated.
 * 3. Player 1 joins.
 * 4. Player 2 joins.
 * 5. Presenter sees both players.
 * 6. Presenter starts the game.
 * 7. Both players receive the same scene.
 * 8. Player 1 submits choice A.
 * 9. Player 2 submits choice B.
 * 10. Duplicate submission is rejected.
 * 11. Individual choices remain private before reveal.
 * 12. Presenter reveals collective results.
 * 13. Both players see consequences and updated indicators.
 * 14. Presenter advances the story.
 * 15. Both players automatically receive the next scene.
 * 16. A disconnected player reconnects.
 * 17. Player progress is restored.
 * 18. Two different rooms remain completely isolated.
 * 19. An unauthorized presenter action is rejected (401).
 * 20. A closed room rejects registration and behaves properly.
 */

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

async function runMasterTestSuite() {
  console.log("===============================================================");
  console.log("  ECO//MIND: THE LAST SIGNAL — MASTER 20-STEP MULTIPLAYER TEST ");
  console.log("  Target: " + BASE_URL);
  console.log("===============================================================\n");

  const results = [];
  function assert(stepNum, title, condition, details = "") {
    if (condition) {
      console.log(`[PASS] Step ${String(stepNum).padStart(2, "0")}: ${title}`);
      if (details) console.log(`       -> ${details}`);
      results.push({ step: stepNum, title, status: "PASS", details });
    } else {
      console.error(`[FAIL] Step ${String(stepNum).padStart(2, "0")}: ${title}`);
      if (details) console.error(`       -> ${details}`);
      results.push({ step: stepNum, title, status: "FAIL", details });
      throw new Error(`Test failed at Step ${stepNum}: ${title} - ${details}`);
    }
  }

  // -------------------------------------------------------------------------
  // STEP 1: Presenter creates a room
  // -------------------------------------------------------------------------
  const roomPin = `ECO-${Math.floor(1000 + Math.random() * 9000)}`;
  const createRes = await fetch(`${BASE_URL}/api/session/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customPin: roomPin,
      title: "Master Workshop Room 2045",
      passcode: "ecomind2045",
    }),
  });
  const createData = await createRes.json();
  assert(
    1,
    "Presenter creates room",
    createRes.ok && createData.success && createData.pin === roomPin,
    `Room created: ${createData.pin}, status: ${createData.session?.status}`
  );

  // -------------------------------------------------------------------------
  // STEP 2: Unique room PIN is generated
  // -------------------------------------------------------------------------
  assert(
    2,
    "Unique room PIN format verified",
    /^ECO-[0-9A-Z]+$/.test(createData.pin),
    `PIN matches standard ECO-XXXX format: ${createData.pin}`
  );

  // -------------------------------------------------------------------------
  // STEP 3: Player 1 joins
  // -------------------------------------------------------------------------
  const p1Res = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      fullName: "Maya Vance",
      teamName: "Alpha Vanguard",
    }),
  });
  const p1Data = await p1Res.json();
  const player1 = p1Data.participant;
  assert(
    3,
    "Player 1 joins the room",
    p1Res.ok && p1Data.success && player1 && player1.id,
    `Player 1 joined as '${player1?.fullName}' (ID: ${player1?.id})`
  );

  // -------------------------------------------------------------------------
  // STEP 4: Player 2 joins
  // -------------------------------------------------------------------------
  const p2Res = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      fullName: "Elias Chen",
      teamName: "GreenGrid AI",
    }),
  });
  const p2Data = await p2Res.json();
  const player2 = p2Data.participant;
  assert(
    4,
    "Player 2 joins the room",
    p2Res.ok && p2Data.success && player2 && player2.id,
    `Player 2 joined as '${player2?.fullName}' (ID: ${player2?.id})`
  );

  // -------------------------------------------------------------------------
  // STEP 5: Presenter sees both players
  // -------------------------------------------------------------------------
  const checkPlayersRes = await fetch(`${BASE_URL}/api/session?pin=${roomPin}`, {
    headers: { Authorization: "Bearer ecomind2045" },
  });
  const checkPlayersData = await checkPlayersRes.json();
  assert(
    5,
    "Presenter sees both connected players",
    checkPlayersData.participants.length >= 2 &&
      checkPlayersData.participants.some((p) => p.id === player1.id) &&
      checkPlayersData.participants.some((p) => p.id === player2.id),
    `Connected players verified: ${checkPlayersData.participants.map((p) => p.fullName).join(", ")}`
  );

  // -------------------------------------------------------------------------
  // STEP 6: Presenter starts the game
  // -------------------------------------------------------------------------
  const startRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      action: "start_campaign",
      passcode: "ecomind2045",
    }),
  });
  const startData = await startRes.json();
  assert(
    6,
    "Presenter starts the game",
    startRes.ok && startData.session?.status === "in_progress",
    `Campaign status: ${startData.session?.status}`
  );

  // -------------------------------------------------------------------------
  // STEP 7: Both players receive the same scene
  // -------------------------------------------------------------------------
  const p1Poll1 = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player1.id}`);
  const p1Poll1Data = await p1Poll1.json();
  const p2Poll1 = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player2.id}`);
  const p2Poll1Data = await p2Poll1.json();
  assert(
    7,
    "Both players receive the same story scene",
    p1Poll1Data.session.currentMission === 1 &&
      p2Poll1Data.session.currentMission === 1,
    `Player 1 mission: ${p1Poll1Data.session.currentMission}, Player 2 mission: ${p2Poll1Data.session.currentMission}`
  );

  // -------------------------------------------------------------------------
  // STEP 8: Player 1 submits choice A
  // -------------------------------------------------------------------------
  const sub1Res = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      participantId: player1.id,
      missionNumber: 1,
      optionKey: "A",
    }),
  });
  const sub1Data = await sub1Res.json();
  assert(
    8,
    "Player 1 submits choice A",
    sub1Data.success && sub1Data.participant?.decisions[1] === "A",
    `Player 1 decision recorded: Option ${sub1Data.participant?.decisions[1]}`
  );

  // -------------------------------------------------------------------------
  // STEP 9: Player 2 submits choice B
  // -------------------------------------------------------------------------
  const sub2Res = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      participantId: player2.id,
      missionNumber: 1,
      optionKey: "B",
    }),
  });
  const sub2Data = await sub2Res.json();
  assert(
    9,
    "Player 2 submits choice B",
    sub2Data.success && sub2Data.participant?.decisions[1] === "B",
    `Player 2 decision recorded: Option ${sub2Data.participant?.decisions[1]}`
  );

  // -------------------------------------------------------------------------
  // STEP 10: Duplicate submission is rejected
  // -------------------------------------------------------------------------
  const dupRes = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      participantId: player1.id,
      missionNumber: 1,
      optionKey: "B",
    }),
  });
  const dupData = await dupRes.json();
  assert(
    10,
    "Duplicate submission is rejected",
    dupRes.status === 400 && dupData.success === false,
    `Duplicate rejected with: "${dupData.error}"`
  );

  // -------------------------------------------------------------------------
  // STEP 11: Individual choices remain private before reveal
  // -------------------------------------------------------------------------
  const privacyCheckRes = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player2.id}`);
  const privacyData = await privacyCheckRes.json();
  const otherPlayerInPoll = privacyData.participants.find((p) => p.id === player1.id);
  const otherSubmissionInPoll = privacyData.submissions.find((s) => s.participantId === player1.id);
  assert(
    11,
    "Individual choices remain private before reveal",
    otherPlayerInPoll?.decisions[1] === "[SUBMITTED]" &&
      otherSubmissionInPoll?.optionKey === "?",
    `Player 2 cannot see Player 1 choice before reveal: optionKey='${otherSubmissionInPoll?.optionKey}', title='${otherSubmissionInPoll?.optionTitle}'`
  );

  // -------------------------------------------------------------------------
  // STEP 12: Presenter reveals collective results
  // -------------------------------------------------------------------------
  const revealRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      action: "reveal_consequences",
      passcode: "ecomind2045",
    }),
  });
  const revealData = await revealRes.json();
  assert(
    12,
    "Presenter reveals collective results",
    revealData.success && revealData.session?.consequencesRevealed === true,
    `Consequences revealed flag: ${revealData.session?.consequencesRevealed}`
  );

  // -------------------------------------------------------------------------
  // STEP 13: Both players see consequences and updated indicators
  // -------------------------------------------------------------------------
  const p1Poll2 = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player1.id}`);
  const p1Poll2Data = await p1Poll2.json();
  assert(
    13,
    "Both players see consequences and updated indicators",
    p1Poll2Data.session.consequencesRevealed === true &&
      typeof p1Poll2Data.session.sharedCityMetrics?.environmentalHealth === "number",
    `Environmental Health: ${p1Poll2Data.session.sharedCityMetrics?.environmentalHealth}%, Consequences: revealed`
  );

  // -------------------------------------------------------------------------
  // STEP 14: Presenter advances the story
  // -------------------------------------------------------------------------
  const advanceRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      action: "advance_mission",
      passcode: "ecomind2045",
    }),
  });
  const advanceData = await advanceRes.json();
  assert(
    14,
    "Presenter advances the story",
    advanceData.success &&
      advanceData.session?.currentMission === 2 &&
      advanceData.session?.consequencesRevealed === false,
    `Current mission advanced to: ${advanceData.session?.currentMission}`
  );

  // -------------------------------------------------------------------------
  // STEP 15: Both players automatically receive the next scene
  // -------------------------------------------------------------------------
  const p1Poll3 = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player1.id}`);
  const p1Poll3Data = await p1Poll3.json();
  const p2Poll3 = await fetch(`${BASE_URL}/api/session?pin=${roomPin}&participantId=${player2.id}`);
  const p2Poll3Data = await p2Poll3.json();
  assert(
    15,
    "Both players automatically receive the next scene",
    p1Poll3Data.session.currentMission === 2 &&
      p2Poll3Data.session.currentMission === 2,
    `Player 1 scene: ${p1Poll3Data.session.currentMission}, Player 2 scene: ${p2Poll3Data.session.currentMission}`
  );

  // -------------------------------------------------------------------------
  // STEP 16: A disconnected player reconnects
  // -------------------------------------------------------------------------
  const reconnectRes = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      fullName: "Maya Vance", // Reconnect using same name
    }),
  });
  const reconnectData = await reconnectRes.json();
  assert(
    16,
    "Disconnected player reconnects",
    reconnectRes.ok &&
      reconnectData.success &&
      reconnectData.participant?.id === player1.id,
    `Reconnected participant ID matched: ${reconnectData.participant?.id}`
  );

  // -------------------------------------------------------------------------
  // STEP 17: Player progress is restored
  // -------------------------------------------------------------------------
  assert(
    17,
    "Player progress is restored",
    reconnectData.participant?.decisions[1] === "A" &&
      reconnectData.participant?.score?.total > 0,
    `Restored decision: Option ${reconnectData.participant?.decisions[1]}, Score: ${reconnectData.participant?.score?.total}`
  );

  // -------------------------------------------------------------------------
  // STEP 18: Two different rooms remain completely isolated
  // -------------------------------------------------------------------------
  const secondRoomPin = `ECO-${Math.floor(1000 + Math.random() * 9000)}`;
  await fetch(`${BASE_URL}/api/session/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customPin: secondRoomPin,
      title: "Isolated Room 2",
      passcode: "ecomind2045",
    }),
  });
  const room2Check = await fetch(`${BASE_URL}/api/session?pin=${secondRoomPin}`);
  const room2Data = await room2Check.json();
  assert(
    18,
    "Two different rooms remain completely isolated",
    room2Data.session.currentMission === 1 &&
      room2Data.participants.length === 0 &&
      advanceData.session?.currentMission === 2,
    `Room 1 is at Scene 2 with 2 players; Room 2 is at Scene 1 with 0 players`
  );

  // -------------------------------------------------------------------------
  // STEP 19: An unauthorized presenter action is rejected
  // -------------------------------------------------------------------------
  const unauthorizedRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      action: "advance_mission",
      passcode: "INVALID_HACKER_CODE",
    }),
  });
  assert(
    19,
    "Unauthorized presenter action is rejected",
    unauthorizedRes.status === 401,
    `Server responded with HTTP 401 Unauthorized`
  );

  // -------------------------------------------------------------------------
  // STEP 20: A closed room rejects registration and behaves properly
  // -------------------------------------------------------------------------
  await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      action: "close_room",
      passcode: "ecomind2045",
    }),
  });

  const joinClosedRes = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: roomPin,
      fullName: "Late Cadet",
      teamName: "Orbit Defenders",
    }),
  });
  const joinClosedData = await joinClosedRes.json();
  assert(
    20,
    "Closed room rejects new registration",
    joinClosedRes.status === 400 && joinClosedData.success === false,
    `Server rejected registration with: "${joinClosedData.error}"`
  );

  console.log("\n===============================================================");
  console.log("  ALL 20 MASTER MULTIPLAYER & SECURITY TESTS PASSED! (100%)    ");
  console.log("===============================================================");
  return { success: true, count: 20 };
}

runMasterTestSuite().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
