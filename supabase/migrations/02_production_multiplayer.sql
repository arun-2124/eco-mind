-- =========================================================================
-- ECO//MIND: THE LAST SIGNAL — PRODUCTION MULTIPLAYER POSTGRESQL SCHEMA
-- Migration 02: Full Production Multiplayer, Constraints & Security
-- =========================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Workshops (Game Rooms) Table
CREATE TABLE IF NOT EXISTS workshops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_pin VARCHAR(32) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL DEFAULT 'Nova City Sustainability Summit 2045',
    status VARCHAR(32) NOT NULL DEFAULT 'in_progress', -- 'registration', 'in_progress', 'paused', 'completed'
    current_mission INT NOT NULL DEFAULT 1,
    consequences_revealed BOOLEAN NOT NULL DEFAULT FALSE,
    allow_resubmission BOOLEAN NOT NULL DEFAULT FALSE,
    registration_open BOOLEAN NOT NULL DEFAULT TRUE,
    timer_seconds_remaining INT DEFAULT NULL,
    active_surprise_event JSONB DEFAULT NULL,
    shared_city_metrics JSONB NOT NULL DEFAULT '{
        "energyStability": 68,
        "networkStability": 74,
        "environmentalHealth": 35,
        "waterAvailability": 42,
        "rescueProgress": 15
    }'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_active_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Participants Table
CREATE TABLE IF NOT EXISTS participants (
    id VARCHAR(64) PRIMARY KEY, -- 'cadet-<timestamp>-<hash>'
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    full_name VARCHAR(120) NOT NULL,
    team_name VARCHAR(120) NOT NULL DEFAULT 'Alpha Vanguard',
    joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    connection_status VARCHAR(32) NOT NULL DEFAULT 'online', -- 'online', 'offline'
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    current_mission INT NOT NULL DEFAULT 1,
    has_submitted_current_mission BOOLEAN NOT NULL DEFAULT FALSE,
    score JSONB NOT NULL DEFAULT '{
        "environmental": 0,
        "energy": 0,
        "social": 0,
        "economic": 0,
        "total": 0,
        "rating": "NOVICE SURVIVOR",
        "sustainableCount": 0,
        "unsustainableCount": 0
    }'::jsonb,
    city_metrics JSONB NOT NULL DEFAULT '{
        "energyIndex": 78,
        "carbonIndex": 72,
        "waterIndex": 65,
        "ewasteIndex": 60,
        "operationalEfficiency": 52,
        "citizenWellbeing": 48,
        "resilienceIndex": 35
    }'::jsonb,
    inventory JSONB NOT NULL DEFAULT '[]'::jsonb,
    discovered_clues JSONB NOT NULL DEFAULT '[]'::jsonb,
    decisions JSONB NOT NULL DEFAULT '{}'::jsonb,
    CONSTRAINT unique_participant_per_workshop UNIQUE (workshop_id, full_name)
);

-- 3. Submissions Table (Enforces single-choice constraint per participant per mission)
CREATE TABLE IF NOT EXISTS submissions (
    id VARCHAR(128) PRIMARY KEY, -- 'sub-<participant_id>-<mission_number>'
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    participant_id VARCHAR(64) NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
    participant_name VARCHAR(120) NOT NULL,
    team_name VARCHAR(120) NOT NULL,
    mission_number INT NOT NULL,
    option_key VARCHAR(8) NOT NULL, -- 'A', 'B'
    option_title VARCHAR(255) NOT NULL,
    is_sustainable BOOLEAN NOT NULL DEFAULT TRUE,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_submission_per_mission UNIQUE (workshop_id, participant_id, mission_number)
);

-- 4. High-Performance Indexes
CREATE INDEX IF NOT EXISTS idx_workshops_session_pin ON workshops(session_pin);
CREATE INDEX IF NOT EXISTS idx_workshops_last_active ON workshops(last_active_at DESC);
CREATE INDEX IF NOT EXISTS idx_participants_workshop_id ON participants(workshop_id);
CREATE INDEX IF NOT EXISTS idx_participants_last_seen ON participants(last_seen_at);
CREATE INDEX IF NOT EXISTS idx_submissions_workshop_mission ON submissions(workshop_id, mission_number);
CREATE INDEX IF NOT EXISTS idx_submissions_participant ON submissions(participant_id);

-- 5. Row-Level Security (RLS)
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to workshops by PIN
DROP POLICY IF EXISTS "Public read workshops" ON workshops;
CREATE POLICY "Public read workshops" ON workshops
    FOR SELECT USING (true);

-- Allow public participant registration and lookups
DROP POLICY IF EXISTS "Public read participants" ON participants;
CREATE POLICY "Public read participants" ON participants
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert participants" ON participants;
CREATE POLICY "Public insert participants" ON participants
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public update participants" ON participants;
CREATE POLICY "Public update participants" ON participants
    FOR UPDATE USING (true);

-- Allow public submissions
DROP POLICY IF EXISTS "Public read submissions" ON submissions;
CREATE POLICY "Public read submissions" ON submissions
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert submissions" ON submissions;
CREATE POLICY "Public insert submissions" ON submissions
    FOR INSERT WITH CHECK (true);

-- 6. Insert Default Demo Room
INSERT INTO workshops (session_pin, title, status, current_mission, registration_open)
VALUES ('ECO2045', 'Nova City Sustainability Summit — Workshop Room Alpha', 'in_progress', 1, true)
ON CONFLICT (session_pin) DO UPDATE SET last_active_at = NOW();
