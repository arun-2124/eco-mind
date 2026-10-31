/**
 * ECO//MIND — 10-Step Multiplayer Verification Test Script
 * 
 * Verifies real multi-client, cross-session room synchronization:
 * 1. Presenter creates a room with unique PIN.
 * 2. Player 1 joins room.
 * 3. Player 2 joins room.
 * 4. Presenter starts campaign.
 * 5. Both players receive the exact same story scene.
 * 6. Each player submits a different private choice (Player 1 -> A, Player 2 -> B).
 * 7. Presenter reveals collective consequences.
 * 8. Both players see consequences & room metrics updated.
 * 9. Presenter advances to next scene.
 * 10. Both players receive the next scene simultaneously.
 */

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

async function runTest() {
  console.log("=================================================");
  console.log("  ECO//MIND: 10-STEP REAL MULTIPLAYER TEST SUITE ");
  console.log("  Target Server:", BASE_URL);
  console.log("=================================================\n");

  const results = [];
  function assert(stepNum, title, condition, details = "") {
    if (condition) {
      console.log(`[PASS] Step ${stepNum}: ${title}`);
      if (details) console.log(`       -> ${details}`);
      results.push({ step: stepNum, title, status: "PASS", details });
    } else {
      console.error(`[FAIL] Step ${stepNum}: ${title}`);
      if (details) console.error(`       -> ${details}`);
      results.push({ step: stepNum, title, status: "FAIL", details });
      throw new Error(`Step ${stepNum} failed: ${title}`);
    }
  }

  // Generate a random PIN for this isolated test session
  const testPin = `TEST-${Math.floor(1000 + Math.random() * 9000)}`;

  // -------------------------------------------------------------------------
  // STEP 1: Presenter creates a room
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 1: Presenter creates room '${testPin}' ---`);
  const createRes = await fetch(`${BASE_URL}/api/session/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customPin: testPin,
      title: "Automated Verification Workshop 2045",
      passcode: "ecomind2045",
    }),
  });
  const createData = await createRes.json();
  assert(
    1,
    "Presenter creates room",
    createRes.ok && createData.success && createData.pin === testPin,
    `Room created with PIN: ${createData.pin}, status: ${createData.session?.status}`
  );

  // -------------------------------------------------------------------------
  // STEP 2: Player 1 joins the room
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 2: Player 1 joins room '${testPin}' ---`);
  const p1JoinRes = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      fullName: "Maya Chen",
      teamName: "CleanEdge Vanguard",
    }),
  });
  const p1Data = await p1JoinRes.json();
  const player1 = p1Data.participant;
  assert(
    2,
    "Player 1 joins the room",
    p1JoinRes.ok && p1Data.success && player1 && player1.id,
    `Player 1 joined as '${player1?.fullName}' (ID: ${player1?.id})`
  );

  // -------------------------------------------------------------------------
  // STEP 3: Player 2 joins the room
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 3: Player 2 joins room '${testPin}' ---`);
  const p2JoinRes = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      fullName: "Elias Vance",
      teamName: "GreenGrid Dynamics",
    }),
  });
  const p2Data = await p2JoinRes.json();
  const player2 = p2Data.participant;
  assert(
    3,
    "Player 2 joins the room",
    p2JoinRes.ok && p2Data.success && player2 && player2.id,
    `Player 2 joined as '${player2?.fullName}' (ID: ${player2?.id})`
  );

  // Verify presenter sees both connected players
  const presenterCheck1 = await fetch(`${BASE_URL}/api/session?pin=${testPin}`);
  const roomState1 = await presenterCheck1.json();
  assert(
    "3.1",
    "Presenter sees both connected players",
    roomState1.participants.length >= 2 &&
      roomState1.participants.some((p) => p.id === player1.id) &&
      roomState1.participants.some((p) => p.id === player2.id),
    `Total connected players visible in room: ${roomState1.participants.length}`
  );

  // -------------------------------------------------------------------------
  // STEP 4: Presenter starts the game
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 4: Presenter starts the game ---`);
  const startRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      action: "start_campaign",
      passcode: "ecomind2045",
    }),
  });
  const startData = await startRes.json();
  assert(
    4,
    "Presenter starts the game",
    startRes.ok &&
      startData.success &&
      startData.session?.status === "in_progress" &&
      startData.session?.currentMission === 1,
    `Campaign status: ${startData.session?.status}, Current Mission: ${startData.session?.currentMission}`
  );

  // -------------------------------------------------------------------------
  // STEP 5: Both players receive the same story scene
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 5: Both players synchronize to the same scene ---`);
  const p1Poll1 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player1.id}`);
  const p1State1 = await p1Poll1.json();

  const p2Poll1 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player2.id}`);
  const p2State1 = await p2Poll1.json();

  assert(
    5,
    "Both players receive the same story scene",
    p1State1.session.currentMission === 1 &&
      p2State1.session.currentMission === 1 &&
      p1State1.session.currentMission === p2State1.session.currentMission,
    `Player 1 scene: ${p1State1.session.currentMission}, Player 2 scene: ${p2State1.session.currentMission}`
  );

  // -------------------------------------------------------------------------
  // STEP 6: Each player submits a different private choice
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 6: Each player submits a different choice ---`);
  // Player 1 submits Option A
  const p1Sub = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      participantId: player1.id,
      missionNumber: 1,
      optionKey: "A",
    }),
  });
  const p1SubData = await p1Sub.json();

  // Player 2 submits Option B
  const p2Sub = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      participantId: player2.id,
      missionNumber: 1,
      optionKey: "B",
    }),
  });
  const p2SubData = await p2Sub.json();

  assert(
    6,
    "Each player submits a different choice",
    p1SubData.success &&
      p2SubData.success &&
      p1SubData.participant?.decisions[1] === "A" &&
      p2SubData.participant?.decisions[1] === "B",
    `Player 1 submitted Option: ${p1SubData.participant?.decisions[1]}, Player 2 submitted Option: ${p2SubData.participant?.decisions[1]}`
  );

  // Verify duplicate submission prevention
  const dupSub = await fetch(`${BASE_URL}/api/session/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      participantId: player1.id,
      missionNumber: 1,
      optionKey: "B",
    }),
  });
  const dupData = await dupSub.json();
  assert(
    "6.1",
    "Duplicate submission prevention works",
    dupData.success === false,
    `Attempting to resubmit blocked with message: "${dupData.error}"`
  );

  // -------------------------------------------------------------------------
  // STEP 7: Presenter reveals the results
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 7: Presenter reveals collective choices ---`);
  const revealRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      action: "reveal_consequences",
      passcode: "ecomind2045",
    }),
  });
  const revealData = await revealRes.json();
  assert(
    7,
    "Presenter reveals consequences",
    revealRes.ok &&
      revealData.success &&
      revealData.session?.consequencesRevealed === true,
    `Consequences revealed flag: ${revealData.session?.consequencesRevealed}`
  );

  // -------------------------------------------------------------------------
  // STEP 8: Both players see the consequence
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 8: Both players see consequences and updated metrics ---`);
  const p1Poll2 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player1.id}`);
  const p1State2 = await p1Poll2.json();

  const p2Poll2 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player2.id}`);
  const p2State2 = await p2Poll2.json();

  assert(
    8,
    "Both players see the consequence and updated collective metrics",
    p1State2.session.consequencesRevealed === true &&
      p2State2.session.consequencesRevealed === true &&
      p1State2.session.sharedCityMetrics &&
      p2State2.session.sharedCityMetrics,
    `Player 1 consequencesRevealed: ${p1State2.session.consequencesRevealed}, Player 2: ${p2State2.session.consequencesRevealed}, Environmental Health: ${p1State2.session.sharedCityMetrics.environmentalHealth}%`
  );

  // -------------------------------------------------------------------------
  // STEP 9: Presenter advances the story to the next scene
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 9: Presenter advances story to Scene 2 ---`);
  const advanceRes = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pin: testPin,
      action: "advance_mission",
      passcode: "ecomind2045",
    }),
  });
  const advanceData = await advanceRes.json();
  assert(
    9,
    "Presenter advances story to next scene",
    advanceRes.ok &&
      advanceData.success &&
      advanceData.session?.currentMission === 2 &&
      advanceData.session?.consequencesRevealed === false,
    `Server room updated to Mission: ${advanceData.session?.currentMission}, consequences reset: ${!advanceData.session?.consequencesRevealed}`
  );

  // -------------------------------------------------------------------------
  // STEP 10: Both players receive the next scene
  // -------------------------------------------------------------------------
  console.log(`\n--- Step 10: Both players receive the next scene automatically ---`);
  const p1Poll3 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player1.id}`);
  const p1State3 = await p1Poll3.json();

  const p2Poll3 = await fetch(`${BASE_URL}/api/session?pin=${testPin}&participantId=${player2.id}`);
  const p2State3 = await p2Poll3.json();

  assert(
    10,
    "Both players receive the next scene automatically",
    p1State3.session.currentMission === 2 &&
      p2State3.session.currentMission === 2 &&
      p1State3.session.currentMission === p2State3.session.currentMission,
    `Player 1 synchronized to Scene ${p1State3.session.currentMission}, Player 2 synchronized to Scene ${p2State3.session.currentMission}`
  );

  console.log("\n=================================================");
  console.log("  ALL 10 MULTIPLAYER INTEGRATION TESTS PASSED!   ");
  console.log("=================================================");
  return { success: true, results };
}

runTest().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
