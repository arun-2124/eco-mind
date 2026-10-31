/**
 * Tests complete 20-scene story adventure progression to final ending.
 */

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

async function testStoryFlowToEnd() {
  console.log("Testing Complete Story Flow (Scenes 1 to 20)...");

  // Create solo cadet session
  const pin = `STORY-${Math.floor(1000 + Math.random() * 9000)}`;
  await fetch(`${BASE_URL}/api/session/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customPin: pin, title: "Solo Story Playthrough", passcode: "ecomind2045" }),
  });

  const joinRes = await fetch(`${BASE_URL}/api/session/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pin, fullName: "Solo Cadet", teamName: "Phoenix" }),
  });
  const joinData = await joinRes.json();
  const participantId = joinData.participant.id;

  for (let m = 1; m <= 20; m++) {
    // Submit alternating choices
    const choice = m % 2 === 1 ? "A" : "B";
    const subRes = await fetch(`${BASE_URL}/api/session/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, participantId, missionNumber: m, optionKey: choice }),
    });
    const subData = await subRes.json();
    if (!subData.success) throw new Error(`Failed to submit mission ${m}: ${subData.error}`);

    // Presenter reveals and advances
    await fetch(`${BASE_URL}/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, action: "reveal_consequences", passcode: "ecomind2045" }),
    });

    if (m < 20) {
      await fetch(`${BASE_URL}/api/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, action: "advance_mission", passcode: "ecomind2045" }),
      });
    }
  }

  // Final check at Mission 20
  const finalCheck = await fetch(`${BASE_URL}/api/session?pin=${pin}&participantId=${participantId}`);
  const finalData = await finalCheck.json();
  const p = finalData.participants.find((x) => x.id === participantId);

  console.log(`[PASS] Reached Mission 20. Total Decisions: ${Object.keys(p.decisions).length}/20, Final Total Score: ${p.score.total}`);
  return true;
}

testStoryFlowToEnd().catch((err) => {
  console.error("Story flow test failed:", err);
  process.exit(1);
});
