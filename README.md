# ECO//MIND: The Sustainable Intelligence Challenge
### Physical AI × Edge AI × Sustainable Development Goals (SDGs)

**"The future is not about making AI more powerful. It is about making intelligence more responsible."**

ECO//MIND is a multiplayer educational story simulation and technology decision-making game built for the **Robotics and Automation Club**. The application is set in the year 2045 in **NOVA CITY**, a futuristic metropolis grappling with the environmental consequences of uncontrolled computing expansion, energy bottlenecks, electronic waste, and centralized automation vulnerabilities.

Participants join as members of the **Robotics and AI Sustainability Task Force** to navigate four interconnected missions, balancing computational throughput with environmental, energy, social, and economic sustainability.

---

## 🌟 Core Pillars & Pedagogical Concepts

1. **Physical Artificial Intelligence**: AI systems that perceive, reason, and actuate in the physical world (sensors, actuators, perception, local inference, kinetic safety, mechanical fatigue).
2. **Edge Artificial Intelligence**: Local inference without constant cloud transmission. Weighing zero latency against on-device battery drain and semiconductor manufacturing impacts. *Crucial principle: Edge AI is not automatically the right answer for every scenario.*
3. **Sustainable Computing**: Algorithmic thrift (INT8/INT4 quantization, pruning, distillation), clean renewable robotic microgrids, and carbon-aware temporal job scheduling.
4. **Responsible Robotics & Hardware Lifecycle**: Circular economy, civic right-to-repair workshops, modular compute retrofits, and confronting embodied carbon.
5. **United Nations Sustainable Development Goals**:
   - **SDG 3**: Good Health and Well-being
   - **SDG 6**: Clean Water and Sanitation
   - **SDG 7**: Affordable and Clean Energy
   - **SDG 9**: Industry, Innovation and Infrastructure
   - **SDG 11**: Sustainable Cities and Communities
   - **SDG 12**: Responsible Consumption and Production
   - **SDG 13**: Climate Action

---

## 🎮 The Four Missions

- **Mission 1: The Intelligence Crisis (AI Infrastructure & Energy Architecture)**
  - *Scenario*: NOVA CITY's centralized data centers are burning 4.2 GW and millions of liters of cooling water, while network latency paralyzes municipal systems.
  - *Decisions*: Consolidate Centralized Hyperscale Cloud AI vs Decentralize Entirely to Pure Edge AI vs Deploy Dynamic Tiered Hybrid AI Architecture.
- **Mission 2: The Autonomous Rescue (Physical AI & Responsible Robotics)**
  - *Scenario*: A 6.8 seismic tremor has collapsed solar canopy structures with survivors trapped in unstable rubble where wireless communications are heavily degraded.
  - *Decisions*: Tele-Operated Remote Control with Full Human Drivers vs Fully Autonomous Swarm with Local AI vs Human-Supervised Collaborative Autonomy (Centaur Fleet).
- **Mission 3: The Energy Emergency (Energy & Sustainable Computing)**
  - *Scenario*: Extreme summer heatwave degrades solar efficiency while compute spikes threaten a city-wide blackout within 350 megawatts of margin.
  - *Decisions*: Maximum Performance with Reserve Fossil Turbines vs Mandatory Dynamic Model Compression & Quantization vs Off-Grid Solar & Battery Microgrid Robot Hubs vs Carbon-Aware Temporal Workload Scheduling.
- **Mission 4: The E-Waste Trap (Responsible Robotics & Hardware Lifecycle)**
  - *Scenario*: 120,000 legacy municipal robots face end-of-life as scrap piles threaten water aquifers with toxic heavy metals.
  - *Decisions*: Complete Fleet Replacement with State-of-the-Art Silicon vs Comprehensive Civic Repair & Community Refurbishment vs Standardized Modular Compute Retrofit.

---

## 📊 Transparent Sustainability Scoring System

- Every participant starts with **1000 base points** (250 points across four dimensions).
- Decisions apply server-validated multipliers to each dimension:
  $$\text{Final Score} = (\text{Environmental} \times 0.40) + (\text{Energy} \times 0.25) + (\text{Social} \times 0.20) + (\text{Economic} \times 0.15)$$
- Normalized strictly to a **0–1000** scale.
- **Ratings**:
  - `900–1000`: SUSTAINABILITY VISIONARY (Emerald Luminary)
  - `750–899`: GREEN INNOVATOR (Eco-Architect)
  - `600–749`: RESPONSIBLE DEVELOPER (Pragmatic Engineer)
  - `400–599`: EMERGING SUSTAINABILITY LEADER (Transition Pioneer)
  - `0–399`: FUTURE NEEDS REWORK (Crisis Remediator)

---

## 🏙️ City Health Simulation & Four Final Endings

Tracks seven macro city telemetry metrics (Energy Stress, Carbon Emissions, Cooling Water Draw, E-Waste Scrap, Operational Efficiency, Citizen Well-being, Network Resilience).

At the summit conclusion, cadets unlock one of four cinematic city endings:
- **ENDING A: THE SUSTAINABLE FUTURE** — Eco-Intelligent Metropolis in planetary equilibrium.
- **ENDING B: THE TECHNOLOGICAL GIANT** — Peak silicon convenience burdened by mounting ecological debt.
- **ENDING C: THE FRAGILE FUTURE** — Complex monolithic dependencies causing vulnerable network margins.
- **ENDING D: THE RECOVERY PATH** — Halting crises and rebuilding durable foundations with purpose.

---

## 🚀 Application Routes

### Public & Participant Routes:
- `/` — Cinematic Landing Page with animated transitioning city skyline and SDG matrix.
- `/join` — Instant participant registration with PIN validation, reconnect support, and mobile QR code generator.
- `/game` — Participant game interface: AETHER cinematic story prologue, mission telemetry, interactive decision cards, real-time waiting state, animated consequence reveal, and city health meters.
- `/game/results` — Participant final results ceremony with ending scenario, dimension radar chart, awards, and decision history.
- `/about` — Workshop curriculum, Physical AI vs Edge AI, and UN SDG mappings.

### Presenter / Director Routes:
- `/presenter/login` — Presenter authentication gate (passcode: `ecomind2045`).
- `/presenter/dashboard` — Live director command center: session stats, live leaderboard, mission control buttons (Start, Pause, Reveal Consequences, Advance Mission, Reset).
- `/presenter/participants` — Real-time participant roster with search, team filtering, score details, and decision inspector.
- `/presenter/missions` — Mission-by-mission control with live Recharts choice distribution graphs.
- `/presenter/analytics` — Cohort-wide sustainability radar charts and AI paradigm breakdowns.
- `/presenter/results` — Final workshop podium celebration and one-click **CSV Roster Export**.

---

## ⚡ Local Demo Mode (Zero Setup Required)

ECO//MIND contains a built-in **Local Demo Engine**:
- No external database is needed for local workshops or demonstrations!
- Uses `BroadcastChannel` and `localStorage` to synchronize state **in real-time across browser tabs**.
- Comes preloaded with default session PIN `ECO2045` and simulated AI participants (Aria Vance, Kaelen Chen, Dr. Mira Soren, Tarek Al-Mansoor, Elena Rostova) who realistically respond to presenter actions.
- **To test the multiplayer experience on one computer**:
  1. Open `/presenter/dashboard` in your main browser tab.
  2. Open `/join` in an Incognito window or secondary tab with PIN `ECO2045`.
  3. Submit a choice in the cadet tab, and watch the Presenter Decision Monitor update instantly!
  4. Click "Reveal Consequences" in the Presenter tab, and the cadet tab immediately triggers the consequence reveal!

---

## 🛠️ Production Supabase Setup

When deploying for wide multi-device workshops:
1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Run the SQL migration located in `supabase/migrations/01_init_ecomind.sql` in the Supabase SQL Editor.
3. Configure your environment variables in `.env.local` or Vercel:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_PRESENTER_PASSCODE=ecomind2045
   NEXT_PUBLIC_APP_URL=https://your-deployment-url.vercel.app
   ```

---

## 📦 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Custom Neon Glow Utilities
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React
- **Data Visualizations**: Recharts (Radar, Bar, Responsive Charts)
- **Database / Realtime**: Supabase (PostgreSQL, RLS) + Local Cross-Tab Synchronizer
- **QR Codes**: `qrcode.react`
- **Deployment**: Vercel

---

## 🏃 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

To build for production:
```bash
npm run build
npm start
```
