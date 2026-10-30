-- ========================================================
-- ECO//MIND: Supabase PostgreSQL Schema & Migrations
-- The Sustainable Intelligence Challenge
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Workshops Table
CREATE TABLE IF NOT EXISTS workshops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL DEFAULT 'Nova City Sustainability Summit',
    session_pin VARCHAR(16) NOT NULL UNIQUE,
    status VARCHAR(32) NOT NULL DEFAULT 'registration', -- 'registration', 'in_progress', 'paused', 'completed'
    current_mission INT NOT NULL DEFAULT 1,
    consequences_revealed BOOLEAN NOT NULL DEFAULT FALSE,
    allow_resubmission BOOLEAN NOT NULL DEFAULT FALSE,
    registration_open BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Participants Table
CREATE TABLE IF NOT EXISTS participants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    full_name VARCHAR(120) NOT NULL,
    team_name VARCHAR(120),
    joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    connection_status VARCHAR(32) NOT NULL DEFAULT 'online', -- 'online', 'offline'
    CONSTRAINT unique_participant_per_workshop UNIQUE (workshop_id, full_name)
);

-- 3. Missions Table
CREATE TABLE IF NOT EXISTS missions (
    id SERIAL PRIMARY KEY,
    mission_number INT NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'active'
);

-- 4. Decisions Table (Options Catalog)
CREATE TABLE IF NOT EXISTS decisions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    mission_number INT NOT NULL,
    option_key VARCHAR(4) NOT NULL, -- 'A', 'B', 'C', 'D'
    option_title VARCHAR(255) NOT NULL,
    short_description TEXT NOT NULL,
    impact_configuration JSONB NOT NULL,
    CONSTRAINT unique_option_per_mission UNIQUE (mission_number, option_key)
);

-- 5. Submissions Table (Records participant choices)
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    participant_id UUID NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
    mission_number INT NOT NULL,
    option_key VARCHAR(4) NOT NULL,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    revealed_at TIMESTAMPTZ,
    CONSTRAINT unique_submission_per_mission UNIQUE (workshop_id, participant_id, mission_number)
);

-- 6. Participant Scores Table
CREATE TABLE IF NOT EXISTS participant_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    participant_id UUID NOT NULL REFERENCES participants(id) ON DELETE CASCADE UNIQUE,
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    environmental_score INT NOT NULL DEFAULT 250,
    energy_score INT NOT NULL DEFAULT 250,
    social_score INT NOT NULL DEFAULT 250,
    economic_score INT NOT NULL DEFAULT 250,
    total_score INT NOT NULL DEFAULT 1000,
    rating VARCHAR(64) NOT NULL DEFAULT 'RESPONSIBLE DEVELOPER',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. City Metrics Table
CREATE TABLE IF NOT EXISTS city_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    participant_id UUID NOT NULL REFERENCES participants(id) ON DELETE CASCADE UNIQUE,
    workshop_id UUID NOT NULL REFERENCES workshops(id) ON DELETE CASCADE,
    energy_index INT NOT NULL DEFAULT 78,
    carbon_index INT NOT NULL DEFAULT 72,
    water_index INT NOT NULL DEFAULT 65,
    ewaste_index INT NOT NULL DEFAULT 60,
    operational_efficiency INT NOT NULL DEFAULT 52,
    citizen_wellbeing INT NOT NULL DEFAULT 48,
    resilience_index INT NOT NULL DEFAULT 35,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(32) NOT NULL DEFAULT 'presenter',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance & quick lookups
CREATE INDEX IF NOT EXISTS idx_workshops_pin ON workshops(session_pin);
CREATE INDEX IF NOT EXISTS idx_participants_workshop ON participants(workshop_id);
CREATE INDEX IF NOT EXISTS idx_submissions_workshop_mission ON submissions(workshop_id, mission_number);
CREATE INDEX IF NOT EXISTS idx_scores_workshop_total ON participant_scores(workshop_id, total_score DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE participant_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE city_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Anonymous users (participants) can read workshops by PIN
CREATE POLICY "Public read workshops" ON workshops
    FOR SELECT USING (true);

-- Anonymous users can register themselves
CREATE POLICY "Public register participants" ON participants
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public read participants" ON participants
    FOR SELECT USING (true);

-- Anonymous users can insert their own mission submission
CREATE POLICY "Public insert submissions" ON submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public read submissions" ON submissions
    FOR SELECT USING (true);

-- Anonymous users can read scores
CREATE POLICY "Public read scores" ON participant_scores
    FOR SELECT USING (true);

-- Anonymous users can read city metrics
CREATE POLICY "Public read city metrics" ON city_metrics
    FOR SELECT USING (true);

-- Seed Default Demo Workshop Session
INSERT INTO workshops (session_pin, title, status, current_mission, registration_open)
VALUES ('ECO2045', 'Robotics & Automation Task Force Alpha', 'registration', 1, true)
ON CONFLICT (session_pin) DO NOTHING;
