import { Mission, SDGInfo, SDGNumber, AIExplainerTopic, Chapter, SurpriseEvent } from "@/types/game";

export const SDG_DETAILS: Record<SDGNumber, SDGInfo> = {
  1: {
    number: 1,
    title: "No Poverty",
    shortName: "No Poverty",
    color: "#E5243B",
    iconName: "Coins",
  },
  2: {
    number: 2,
    title: "Zero Hunger",
    shortName: "Zero Hunger",
    color: "#DDA63A",
    iconName: "Sprout",
  },
  3: {
    number: 3,
    title: "Good Health and Well-being",
    shortName: "Good Health",
    color: "#4C9F38",
    iconName: "HeartPulse",
  },
  4: {
    number: 4,
    title: "Quality Education",
    shortName: "Quality Education",
    color: "#C5192D",
    iconName: "GraduationCap",
  },
  5: {
    number: 5,
    title: "Gender Equality",
    shortName: "Gender Equality",
    color: "#FF3A21",
    iconName: "Scale",
  },
  6: {
    number: 6,
    title: "Clean Water and Sanitation",
    shortName: "Clean Water",
    color: "#26BDE2",
    iconName: "Droplets",
  },
  7: {
    number: 7,
    title: "Affordable and Clean Energy",
    shortName: "Clean Energy",
    color: "#FCC30B",
    iconName: "Zap",
  },
  8: {
    number: 8,
    title: "Decent Work and Economic Growth",
    shortName: "Decent Work",
    color: "#A21942",
    iconName: "TrendingUp",
  },
  9: {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    shortName: "Industry & Innovation",
    color: "#FD6925",
    iconName: "Cpu",
  },
  10: {
    number: 10,
    title: "Reduced Inequalities",
    shortName: "Reduced Inequalities",
    color: "#E11484",
    iconName: "Users",
  },
  11: {
    number: 11,
    title: "Sustainable Cities and Communities",
    shortName: "Sustainable Cities",
    color: "#FD9D24",
    iconName: "Building2",
  },
  12: {
    number: 12,
    title: "Responsible Consumption and Production",
    shortName: "Responsible Consumption",
    color: "#BF8B2E",
    iconName: "Recycle",
  },
  13: {
    number: 13,
    title: "Climate Action",
    shortName: "Climate Action",
    color: "#3F7E44",
    iconName: "Globe",
  },
  14: {
    number: 14,
    title: "Life Below Water",
    shortName: "Life Below Water",
    color: "#0A97D9",
    iconName: "Waves",
  },
  15: {
    number: 15,
    title: "Life on Land",
    shortName: "Life on Land",
    color: "#56C02B",
    iconName: "Trees",
  },
  16: {
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    shortName: "Peace & Justice",
    color: "#00689D",
    iconName: "Shield",
  },
  17: {
    number: 17,
    title: "Partnerships for the Goals",
    shortName: "Partnerships for Goals",
    color: "#19486A",
    iconName: "Handshake",
  },
};

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: "The City is Losing Control",
    theme: "AI Fundamentals & Edge AI",
    description: "Nova City's centralized cloud infrastructure buckles under massive data streams, bandwidth saturation, and rolling blackouts.",
    missionRange: [1, 4],
  },
  {
    number: 2,
    title: "Machines Come Alive",
    theme: "Physical AI & Embodied Robotics",
    description: "Physical AI rescue rovers and quadruped robots face real-world friction, flooding, obstacle navigation, and hospital crises.",
    missionRange: [5, 8],
  },
  {
    number: 3,
    title: "The Energy War",
    theme: "Sustainable Computing & Efficient AI",
    description: "Hyperscale data centers push the grid to the brink. The Task Force must enforce model quantization, renewable scheduling, and battery stewardship.",
    missionRange: [9, 12],
  },
  {
    number: 4,
    title: "The Planet Strikes Back",
    theme: "Environmental Monitoring & Stewardship",
    description: "Ecological emergencies strike Nova City: aquifer leaks, forest wildfires, marine microplastics, and agricultural soil stress.",
    missionRange: [13, 16],
  },
  {
    number: 5,
    title: "The Last Decision",
    theme: "Responsible Governance & Circular Future",
    description: "Mounting electronic waste, invasive surveillance, and algorithmic authority culminate in the definitive protocol for Nova City's future.",
    missionRange: [17, 20],
  },
];

export const SURPRISE_EVENTS: SurpriseEvent[] = [
  {
    id: "se-1",
    title: "SUDDEN POWER GRID FAILURE",
    description: "A thermal spike at Substation 4 triggered an automatic emergency shutdown across District 7.",
    severity: "critical",
    affectedMetric: "energyStability",
    delta: -15,
    recommendedAction: "Prioritize local battery backup and schedule computing tasks during solar peaks.",
  },
  {
    id: "se-2",
    title: "CELL TOWER SPECTRUM CONGESTION",
    description: "Mass video broadcasts from citizens have jammed the 5G uplink, causing 600ms latency spikes.",
    severity: "warning",
    affectedMetric: "networkStability",
    delta: -18,
    recommendedAction: "Switch all robotic units to local on-device inference to bypass congested cellular relays.",
  },
  {
    id: "se-3",
    title: "FLASH FLOOD WATER SURGE",
    description: "Storm runoff breached Sector 3 canal levees, inundating lower access corridors.",
    severity: "warning",
    affectedMetric: "rescueProgress",
    delta: -10,
    recommendedAction: "Deploy amphibious crawler units with ultrasonic depth sensing.",
  },
  {
    id: "se-4",
    title: "ROBOT MOTOR THERMAL MALFUNCTION",
    description: "Continuous high-torque driving in debris has overheated servo actuators in 12 rescue units.",
    severity: "warning",
    affectedMetric: "rescueProgress",
    delta: -12,
    recommendedAction: "Enforce duty-cycle throttling and modular joint replacements.",
  },
  {
    id: "se-5",
    title: "MUNICIPAL AQUIFER PRESSURE LOSS",
    description: "Deep cooling intake for industrial servers caused an unanticipated 14% pressure drop in residential reservoirs.",
    severity: "critical",
    affectedMetric: "waterAvailability",
    delta: -16,
    recommendedAction: "Mandate closed-loop evaporative cooling systems immediately.",
  },
  {
    id: "se-6",
    title: "CIVIC PRIVACY LEAK ALARM",
    description: "Unencrypted facial recognition logs from traffic cameras surfaced on an open public forum.",
    severity: "critical",
    affectedMetric: "publicTrust",
    delta: -20,
    recommendedAction: "Enforce zero-retention edge data minimization and cryptographic hashing.",
  },
];

export const AI_EXPLAINER_TOPICS: AIExplainerTopic[] = [
  {
    id: "what-is-ai",
    title: "1. What is Artificial Intelligence?",
    subtitle: "Machines that learn patterns to make decisions",
    iconName: "Brain",
    definition:
      "Artificial Intelligence (AI) refers to software models that detect statistical patterns in data to classify objects, make predictions, or plan actions without requiring rigid hardcoded rules for every scenario.",
    realWorldExample:
      "A navigation system calculating the fastest route through changing traffic conditions.",
    takeaway:
      "AI is not conscious thought—it is statistical optimization executed on physical computer chips consuming real electricity.",
    tag: "Foundational AI",
  },
  {
    id: "what-is-edge-ai",
    title: "2. What is Edge AI?",
    subtitle: "Computing directly where sensors capture data",
    iconName: "Cpu",
    definition:
      "Edge AI runs machine learning models locally on the physical machine (such as a robot, drone, or smartphone) rather than streaming raw sensor feeds across the internet to a distant data center.",
    realWorldExample:
      "A smartphone recognizing your face instantly without needing Wi-Fi or cellular connectivity.",
    takeaway:
      "Edge AI eliminates network delay, saves transmission energy, and functions during internet outages.",
    tag: "Edge Computing",
  },
  {
    id: "what-is-cloud-ai",
    title: "3. What is Cloud AI?",
    subtitle: "Massive computing in remote data centers",
    iconName: "Cloud",
    definition:
      "Cloud AI processes workloads in warehouse-scale data centers with thousands of interconnected GPUs. While capable of running enormous models, transmitting gigabytes of video to the cloud requires significant radio power and cooling water.",
    realWorldExample:
      "Querying a massive multi-billion parameter model that requires a supercomputer cluster to compute answers.",
    takeaway:
      "Cloud AI offers vast processing power, but reliance on continuous streaming creates single-point-of-failure vulnerabilities and high carbon footprints.",
    tag: "Cloud Infrastructure",
  },
  {
    id: "what-is-physical-ai",
    title: "4. What is Physical AI?",
    subtitle: "AI embodied in physical robots and machines",
    iconName: "Bot",
    definition:
      "Physical AI refers to artificial intelligence operating inside physical hardware—such as autonomous rovers, drones, or robotic arms—that interacts directly with forces, friction, terrain, and obstacles in the physical world.",
    realWorldExample:
      "An autonomous search-and-rescue quadruped robot walking across wet rubble without slipping.",
    takeaway:
      "Physical AI bridges software algorithms with physical safety, mechanical motion, and real energy limits.",
    tag: "Robotics",
  },
  {
    id: "what-is-computer-vision",
    title: "5. What is Computer Vision?",
    subtitle: "Enabling machines to see and interpret pixels",
    iconName: "Eye",
    definition:
      "Computer Vision is the AI domain that processes raw visual frames from cameras, segmenting pixels into identified objects, people, boundaries, hazards, and pathways.",
    realWorldExample:
      "An autonomous shuttle identifying a bicycle, pedestrian, and red stop light in a fraction of a second.",
    takeaway:
      "Computer vision transforms matrices of raw numbers into spatial understanding.",
    tag: "Perception",
  },
  {
    id: "what-are-sensors",
    title: "6. What are Sensors and Sensor Fusion?",
    subtitle: "The sensory organs of intelligent robots",
    iconName: "Radio",
    definition:
      "Sensors measure physical properties (light, heat, sound, vibration, distance) and convert them into electrical signals. Sensor fusion merges data from multiple sensors (like cameras and LiDAR) into one coherent world model.",
    realWorldExample:
      "Combining radar and camera data on a vehicle so it can see through dense fog and rain.",
    takeaway:
      "No single sensor is perfect; combining complementary sensors provides robust perception.",
    tag: "Hardware",
  },
  {
    id: "what-is-lidar",
    title: "7. What is LiDAR?",
    subtitle: "Light Detection and Ranging: 3D laser mapping",
    iconName: "Scan",
    definition:
      "LiDAR shoots rapid pulses of eye-safe laser light and calculates the precise time-of-flight bounce-back to produce millions of 3D points every second, mapping exact distances in complete darkness.",
    realWorldExample:
      "Rescue quadrupeds mapping a collapsed basement in total darkness to detect structural voids.",
    takeaway:
      "LiDAR works in pitch black where optical cameras fail, making it critical for search and rescue.",
    tag: "Sensors",
  },
  {
    id: "what-is-quantization",
    title: "8. What is Model Quantization & Pruning?",
    subtitle: "Shrinking AI models so they run fast on tiny chips",
    iconName: "Minimize2",
    definition:
      "Quantization converts high-precision 32-bit floating numbers into compact 8-bit integers (INT8), reducing model size by 75% and slashing computing energy while retaining over 98% accuracy. Pruning removes redundant neural connections.",
    realWorldExample:
      "Compressing a 5GB neural network down to 350MB so it fits onto a battery-powered agricultural drone.",
    takeaway:
      "Bigger models are not always better; optimized small models save massive amounts of electricity.",
    tag: "Optimization",
  },
  {
    id: "what-is-circular-robotics",
    title: "9. What is Circular Electronics & E-Waste?",
    subtitle: "Designing hardware to be repaired, reused, and recycled",
    iconName: "Recycle",
    definition:
      "Circular engineering designs robots with standardized modular components, enabling worn batteries, sensors, or motors to be swapped and refurbished rather than dumping entire chassis into landfills.",
    realWorldExample:
      "Swapping a degraded battery cell in an inspection rover in 30 seconds instead of discarding the whole machine.",
    takeaway:
      "The greenest robot is the one that stays operational for a decade through modular repair.",
    tag: "Circular Economy",
  },
  {
    id: "what-is-responsible-ai",
    title: "10. What is Responsible & Human-in-the-Loop AI?",
    subtitle: "Ensuring algorithms remain accountable and aligned with human values",
    iconName: "Shield",
    definition:
      "Responsible AI mandates data minimization (collecting only what is strictly necessary), transparency, algorithmic fairness, and human oversight before high-stakes physical or social decisions are carried out.",
    realWorldExample:
      "An automated medical triage system presenting diagnostic recommendations to human doctors who make the final call.",
    takeaway:
      "AI must amplify human wisdom and protect privacy, not replace human moral responsibility.",
    tag: "Governance",
  },
];

export const MISSIONS: Mission[] = [

  {
    "id": 1,
    "number": 1,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The First Signal",
    "category": "The Blackout Begins",
    "environmentName": "SECTOR 01 // CITADEL WATCHTOWER",
    "heroImage": "/assets/m1-infrastructure-crisis.svg",
    "storyScene": "Alarms scream through the observation spire as the western grid drops off the radar. The skyline flickers, then dies. Static hisses across all radio bands, carrying a fractured automated broadcast: The Last Signal.",
    "dialogue": [
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "All watchtowers report rolling blackouts. District 7 is going dark block by block. What in God's name is happening to the central grid?",
        "mood": "urgent"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "The relays are drowning in contradictory telemetry, Commander. It looks like an automated distress burst, but our switches are jamming up.",
        "mood": "concerned"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "If we flood central with raw data, our relays will blow their thermal fuses. We have to filter this locally before we lose the entire grid.",
        "mood": "determined"
      }
    ],
    "situation": "Tens of thousands of garbled distress beacons are crashing the District 7 gateway. We have under 60 seconds before substation switches fry.",
    "environmentalContext": "Nova City's automated monitoring grid detects conflicting emergency telemetry from District 7 during an unexpected urban infrastructure failure.",
    "storyProblem": "Tens of thousands of sensor packets are flooding central switches. The emergency task force must decide how to evaluate and filter raw incoming signals before critical response units are dispatched.",
    "prompt": "Choose the computational strategy to ingest and evaluate incoming disaster distress signals.",
    "question": "How should the Task Force filter incoming distress signals from the dark sectors?",
    "options": [
      {
        "id": "m1-opt-a",
        "key": "A",
        "title": "Deploy Local Edge Filtering & Prioritize Critical Beacons",
        "isSustainable": true,
        "image": "/assets/m1-edge-ai.svg",
        "shortDescription": "Execute edge-level signal filtering to separate critical distress anomalies from normal background noise.",
        "detailedExplanation": "Lightweight statistical models evaluate sensor noise right at neighborhood substation relays. Only authenticated anomalies and high-severity distress vectors are forwarded, preventing system saturation.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "Filtering logic engaged. Noise dropped by 84%. We've got a clean beacon pinpointing survivors in Sector 2!"
        },
        "consequenceNarration": "Emergency channels cleared instantaneously. The first rescue teams received exact verified coordinates while transmission power was kept minimal.",
        "nextSceneTeaser": "A rescue convoy trapped in the lower transit tunnels is detected, but the tunnels are already filling with rising water.",
        "advantages": [
          "Prevents mainframe network saturation",
          "Isolates high-urgency distress beacons in milliseconds"
        ],
        "disadvantages": [
          "Requires local verification logic on district gateways"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 20,
          "social": 15,
          "economic": 10
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -12,
          "waterIndex": -15,
          "ewasteIndex": 1,
          "operationalEfficiency": 20,
          "citizenWellbeing": 15,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 20,
          "environmentalHealth": 5,
          "waterAvailability": 5,
          "rescueProgress": 15,
          "publicTrust": 12,
          "ewasteLevel": 1
        },
        "sdgs": [
          9,
          11,
          13
        ]
      },
      {
        "id": "m1-opt-b",
        "key": "B",
        "title": "Stream Raw Telemetry Directly to Central Mainframe",
        "isSustainable": false,
        "image": "/assets/m1-cloud-heavy.svg",
        "shortDescription": "Stream all uncompressed sensor packets directly into the central cloud database for full retrospective logging.",
        "detailedExplanation": "Every substation pushes continuous raw logs to central servers. Data center GPUs execute exhaustive batch parsing across all telemetry streams regardless of urgency.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "Dammit, our mainframes are locking up! The servers are redlining and we're blind in District 7!"
        },
        "consequenceNarration": "Substation processors overheat under the massive raw stream. District 7 goes completely silent as regional routers burn out.",
        "nextSceneTeaser": "A rescue convoy trapped in the lower transit tunnels sends an emergency flare before their signal cuts.",
        "advantages": [
          "Creates an exhaustive raw historical log of every sensor bit"
        ],
        "disadvantages": [
          "Consumes massive server bandwidth and generates processing backlogs during emergencies"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -20,
          "social": -10,
          "economic": -12
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 18,
          "waterIndex": 20,
          "ewasteIndex": 3,
          "operationalEfficiency": -12,
          "citizenWellbeing": -10,
          "resilienceIndex": -15
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -22,
          "environmentalHealth": -5,
          "waterAvailability": -10,
          "rescueProgress": -8,
          "publicTrust": -15,
          "ewasteLevel": 8
        },
        "sdgs": [
          9,
          11
        ]
      }
    ],
    "summaryNote": "Edge triage saves critical power and maintains comm lines open during a blackout.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 35,
        "title": "Edge Processing Unit",
        "description": "Processes telemetry locally to avoid overloading distant mainframes."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Central Antenna Array",
        "description": "Vulnerable to bandwidth saturation when flooded with raw video streams."
      }
    ],
    "sdgs": [
      9,
      11,
      13
    ],
    "aiConcept": {
      "title": "The Blackout Begins",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 2,
    "number": 2,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "Shadows in the Transit Tunnel",
    "category": "Subterranean Reconnaissance",
    "environmentName": "SECTOR 02 // SUBTERRANEAN METRO TUBE",
    "heroImage": "/assets/m2-collapsed-tunnel.svg",
    "storyScene": "Deep below the central plaza, train cars sit derailed in pitch darkness. Water drips from cracked ceiling joints, pooling around high-voltage cables. Survivors bang on the carriage windows as smoke rolls through the tunnel.",
    "dialogue": [
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "Commander, water is rising around train 14. We can hear people trapped inside the second coach, but the air is toxic with ozone and smoke.",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "We can't send human teams into an electrified flood zone. Scout, deploy the search quadruped rover immediately.",
        "mood": "determined"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Watch the battery draw. That quadruped doesn't have an infinite charge down here in the dark.",
        "mood": "concerned"
      }
    ],
    "situation": "The rescue rover must navigate subterranean debris and water pools. The connection to surface relays is degrading rapidly.",
    "environmentalContext": "A collapsed metro station isolates forty civilians in a low-oxygen subway tunnel. Toxic fumes and standing water hinder human rescue.",
    "storyProblem": "The rescue quadruped robot must navigate through zero-visibility wreckage without draining its internal battery before survivors are found.",
    "prompt": "Choose the navigation and perception protocol for the subterranean search robot.",
    "question": "How should the rescue rover navigate through the dark flooded tunnel?",
    "options": [
      {
        "id": "m2-opt-a",
        "key": "A",
        "title": "Autonomous Local LiDAR & Tactile Obstacle Avoidance",
        "isSustainable": true,
        "image": "/assets/m2-autonomous-robot.svg",
        "shortDescription": "Run real-time spatial SLAM and obstacle avoidance directly on the rover's low-power onboard processor.",
        "detailedExplanation": "Low-power pulsed LiDAR and tactile force sensors map rubble locally. The robot navigates independently, reserving radio bursts only for survivor discovery confirmations.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "Rover bypassed the fallen conduit on local vision! Hatch pried open—first survivors are coming out!"
        },
        "consequenceNarration": "The quadruped moves fluidly through dark flooded voids, cutting power consumption and guiding 32 civilians to the surface ladder.",
        "nextSceneTeaser": "Surfacing civilians report the seawall drainage locks are humming erratically.",
        "advantages": [
          "Operates completely offline during communication dropouts",
          "Conserves up to 60% battery life"
        ],
        "disadvantages": [
          "Requires calibrated onboard edge computer hardware"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 20,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 25,
          "resilienceIndex": 20
        },
        "sharedCityDeltas": {
          "energyStability": 8,
          "networkStability": 12,
          "environmentalHealth": 4,
          "waterAvailability": 0,
          "rescueProgress": 20,
          "publicTrust": 18,
          "ewasteLevel": 1
        },
        "sdgs": [
          9,
          11
        ]
      },
      {
        "id": "m2-opt-b",
        "key": "B",
        "title": "Continuous 4K Video Cloud Teleoperation",
        "isSustainable": false,
        "image": "/assets/m2-teleoperation-heavy.svg",
        "shortDescription": "Stream uncompressed multi-angle 4K video feeds back to distant operators to manually steer every wheel turn.",
        "detailedExplanation": "The rover pushes gigabytes of video over cellular repeaters. High transmission wattage rapidly drains the robot battery while lag spikes risk navigation collisions.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "High latency! The rover lag-spiked and scraped a live transformer! We lost the video feed!"
        },
        "consequenceNarration": "Video lag causes the rover to collide with structural rebar. Rescue delays leave survivors choking on smoke until manual crowbars break them free.",
        "nextSceneTeaser": "A sudden tremor shakes the ground—the seawall locks are failing.",
        "advantages": [
          "Keeps human pilots in direct visual control of each second"
        ],
        "disadvantages": [
          "Severe lag spikes cause physical collisions and battery drain"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -20,
          "social": -15,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 14,
          "carbonIndex": 12,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -14,
          "citizenWellbeing": -15,
          "resilienceIndex": -10
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -18,
          "environmentalHealth": -2,
          "waterAvailability": 0,
          "rescueProgress": -10,
          "publicTrust": -14,
          "ewasteLevel": 6
        },
        "sdgs": [
          9,
          11
        ]
      }
    ],
    "summaryNote": "Local spatial autonomy enables rescue robots to explore hazardous ruins safely.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 40,
        "title": "Tactile LiDAR Sensor",
        "description": "Enables vision in darkness without burning high-power transmission radios."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 70,
        "title": "Submerged Power Cables",
        "description": "Extreme hazard requiring precise distance detection."
      }
    ],
    "sdgs": [
      9,
      11
    ],
    "aiConcept": {
      "title": "Subterranean Reconnaissance",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 3,
    "number": 3,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The Broken Relays",
    "category": "Communication Network Emergency",
    "environmentName": "SECTOR 03 // COMMUNICATION RIDGE",
    "heroImage": "/assets/m3-power-grid-failure.svg",
    "storyScene": "High winds howl over the broadcast antennas on Mount Vesper. Frost clings to microwave dishes that point toward the dying city. AETHER Core's central voice is breaking into digital gibberish.",
    "dialogue": [
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "The ridge repeater towers are running on emergency capacitors! We're losing packet sync with the southern refugee camps!",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Compress the neural broadcast models down to 8-bit integers. Stop wasting energy transmitting bloated floating-point weights.",
        "mood": "determined"
      },
      {
        "speaker": "AETHER Core AI",
        "role": "Central City Intelligence",
        "avatar": "/assets/avatars/aether.svg",
        "text": "System integrity at 61%. Bandwidth depletion imminent. Recommend immediate payload compression.",
        "mood": "grave"
      }
    ],
    "situation": "The communication backbone between the command spire and survival shelters is collapsing due to unoptimized transmission payloads.",
    "environmentalContext": "Substation transformers overheat as millions of automated systems attempt to negotiate mesh routes simultaneously.",
    "storyProblem": "Transmission towers are burning through their backup diesel batteries trying to relay huge AI neural weights.",
    "prompt": "Select the neural model optimization strategy for emergency ridge transmitters.",
    "question": "How should the emergency repeaters compress transmission workloads to survive?",
    "options": [
      {
        "id": "m3-opt-a",
        "key": "A",
        "title": "Deploy 8-Bit Quantization (INT8) & Model Pruning",
        "isSustainable": true,
        "image": "/assets/m3-quantized-ai.svg",
        "shortDescription": "Compress AI model weights by 75% using INT8 quantization and prune redundant parameters.",
        "detailedExplanation": "Model optimization slashes computational complexity and packet payload size, allowing lightweight mountain transceivers to broadcast alerts on solar backup.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "Quantized weights deployed! Transmission power plummeted 72% and signal clarity is crystal clear!"
        },
        "consequenceNarration": "Shelters across all four valleys reconnect simultaneously. Medical directives and survivor rosters stream without dropping a single packet.",
        "nextSceneTeaser": "An urgent message arrives from the harbor: the coastal sea gates have jammed half-open.",
        "advantages": [
          "Cuts computational energy by over 70%",
          "Runs smoothly on micro-batteries"
        ],
        "disadvantages": [
          "Minor loss of microscopic prediction nuances"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 25,
          "social": 15,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -12,
          "waterIndex": -10,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 12,
          "resilienceIndex": 22
        },
        "sharedCityDeltas": {
          "energyStability": 14,
          "networkStability": 18,
          "environmentalHealth": 6,
          "waterAvailability": 5,
          "rescueProgress": 12,
          "publicTrust": 10,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          9,
          13
        ]
      },
      {
        "id": "m3-opt-b",
        "key": "B",
        "title": "Maintain Uncompressed Full FP32 Precision Weights",
        "isSustainable": false,
        "image": "/assets/m3-uncompressed-ai.svg",
        "shortDescription": "Retain high-precision 32-bit floating point models and continuous real-time uncompressed broadcasting.",
        "detailedExplanation": "Uncompressed weights demand maximum radio transmission power and continuous cooling fans, quickly draining backup capacitors.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The ridge generator just blew its breaker! Mount Vesper has gone dark!"
        },
        "consequenceNarration": "Overloaded transmitters burn through emergency fuel. Southern shelter communications sever completely, leaving 10,000 refugees stranded in the dark.",
        "nextSceneTeaser": "Without warning, sirens begin wailing along the shoreline.",
        "advantages": [
          "Retains nominal 0.05% theoretical mathematical precision"
        ],
        "disadvantages": [
          "Triple the energy consumption and rapid battery exhaustion"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -25,
          "social": -10,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 16,
          "waterIndex": 12,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -12,
          "resilienceIndex": -18
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -20,
          "environmentalHealth": -6,
          "waterAvailability": -5,
          "rescueProgress": -12,
          "publicTrust": -14,
          "ewasteLevel": 5
        },
        "sdgs": [
          7,
          9
        ]
      }
    ],
    "summaryNote": "Model quantization shrinks computational footprints without degrading real-world emergency performance.",
    "hotspots": [
      {
        "id": "h1",
        "x": 20,
        "y": 30,
        "title": "Microwave Transceiver",
        "description": "Carries emergency distress traffic between city valleys."
      },
      {
        "id": "h2",
        "x": 80,
        "y": 70,
        "title": "Emergency Battery Bank",
        "description": "Depletes rapidly under heavy uncompressed transmission."
      }
    ],
    "sdgs": [
      7,
      9,
      13
    ],
    "aiConcept": {
      "title": "Communication Network Emergency",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 4,
    "number": 4,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The Triage Protocol",
    "category": "Crisis Governance",
    "environmentName": "SECTOR 04 // HARBOR EMERGENCY PERIMETER",
    "heroImage": "/assets/m4-triage-center.svg",
    "storyScene": "Sirens scream across the harbor docks as black ocean tides swell past the seawall. Thousands of frightened residents crowd the gatehouse, clutching children and emergency packs, pleading for entry into the inner citadel.",
    "dialogue": [
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "The crowd is panicked. If we don't restore order, there will be a lethal stampede at Gate 4.",
        "mood": "grave"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "We cannot use indiscriminate crowd-control drones! These are terrified families, not combatants!",
        "mood": "urgent"
      },
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "We need clear, transparent triage rules so people understand why gates are cycling. No automated brutality.",
        "mood": "conflicted"
      }
    ],
    "situation": "Security systems suggest deploying automated crowd suppression drones, while the medical team demands transparent, human-led triage.",
    "environmentalContext": "Civilian unrest threatens to overwhelm harbor barriers as ocean waters breach peripheral floodwalls.",
    "storyProblem": "The security console recommends automated suppression measures, but human commanders must decide how to manage the perimeter.",
    "prompt": "Choose the triage protocol for the perimeter gatehouse.",
    "question": "How should the Task Force manage the crowd at the harbor perimeter?",
    "options": [
      {
        "id": "m4-opt-a",
        "key": "A",
        "title": "Transparent Human-in-the-Loop Triage with Community Marshals",
        "isSustainable": true,
        "image": "/assets/m4-human-triage.svg",
        "shortDescription": "Pair AI vulnerability scoring with human nurses and civilian volunteer marshals for compassionate triage.",
        "detailedExplanation": "Algorithms highlight hypothermia risks and injured infants, but human staff explain each intake step to the community, establishing trust.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Civilian volunteers took over the gate speakers. The panic is subsiding—triage lines are moving peacefully."
        },
        "consequenceNarration": "Human marshals and transparent medical screens diffuse the tension. Vulnerable elders and injured children are safely routed into shelter wings.",
        "nextSceneTeaser": "As the gates seal, a deafening roar echoes from the flooded undercity: sea locks 3 and 4 have ruptured.",
        "advantages": [
          "Preserves human dignity and prevents panic riots",
          "Verifies edge-case medical needs accurately"
        ],
        "disadvantages": [
          "Requires active human personnel coordination"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 10,
          "energy": 15,
          "social": 30,
          "economic": 10
        },
        "cityMetricDeltas": {
          "energyIndex": -5,
          "carbonIndex": -5,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 15,
          "citizenWellbeing": 30,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 5,
          "networkStability": 10,
          "environmentalHealth": 5,
          "waterAvailability": 0,
          "rescueProgress": 18,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          11,
          16
        ]
      },
      {
        "id": "m4-opt-b",
        "key": "B",
        "title": "Automated Robotic Perimeter Enforcement & Acoustic Drones",
        "isSustainable": false,
        "image": "/assets/m4-drone-suppression.svg",
        "shortDescription": "Deploy automated sonic dispersal drones and barricade gates to enforce rigid mathematical exclusion zones.",
        "detailedExplanation": "Robotic turrets broadcast painful frequencies to force the crowd back, treating terrified citizens as hostile trespassers.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The suppression drones fired acoustic pulses into the crowd! People are trampling the barricades in fury!"
        },
        "consequenceNarration": "Automated shock drones trigger a riot. Gate 4 collapses under the surge, destroying medical supplies and shattering public trust.",
        "nextSceneTeaser": "A massive wall of seawater crashes into the lower subway conduits.",
        "advantages": [
          "Locks down the physical perimeter without risking security staff"
        ],
        "disadvantages": [
          "Ignites violent riots and permanently destroys civic trust"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -15,
          "social": -35,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 12,
          "carbonIndex": 10,
          "waterIndex": 0,
          "ewasteIndex": 4,
          "operationalEfficiency": -20,
          "citizenWellbeing": -35,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -15,
          "environmentalHealth": -5,
          "waterAvailability": 0,
          "rescueProgress": -15,
          "publicTrust": -30,
          "ewasteLevel": 10
        },
        "sdgs": [
          11,
          16
        ]
      }
    ],
    "summaryNote": "Responsible technology ensures machine predictions never override human empathy and moral discernment.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 50,
        "title": "Medical Triage Kiosk",
        "description": "Identifies vulnerable individuals for expedited care."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 50,
        "title": "Blast Gate Control",
        "description": "Controls access into the dry inner citadel."
      }
    ],
    "sdgs": [
      3,
      11,
      16
    ],
    "aiConcept": {
      "title": "Crisis Governance",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 5,
    "number": 5,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Submerged Pump Stations",
    "category": "Subsea Infrastructure",
    "environmentName": "SECTOR 05 // FLOODED LOWER BASIN",
    "heroImage": "/assets/m5-flood-pumps.svg",
    "storyScene": "Turbulent seawater surges down pedestrian avenues, turning lower thoroughfares into roaring canals. Massive subterranean pump turbines are locked in silt and debris, their status lights flashing violent amber.",
    "dialogue": [
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "Water levels in the pump gallery are at three meters and climbing! If those turbines seize, the lower medical district is gone.",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "We have heavy hydraulic rovers, but their traction sensors are struggling against the muddy current.",
        "mood": "determined"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Program the rovers for embodied physical force feedback. Let them feel the silt resistance rather than spinning blindly at max RPM.",
        "mood": "hopeful"
      }
    ],
    "situation": "Underwater rovers must clear hydraulic intake valves before rising water floods the municipal backup generators.",
    "environmentalContext": "A burst storm surge canal submerges subterranean pump stations. Silt and wreckage threaten to choke the emergency turbines.",
    "storyProblem": "Submersible maintenance robots must clear intake grates without burning out their electric thrusters in heavy current.",
    "prompt": "Choose the physical control algorithm for the flood pump clearing rovers.",
    "question": "How should the submersible rovers clear debris from the pump intake valves?",
    "options": [
      {
        "id": "m5-opt-a",
        "key": "A",
        "title": "Dynamic Force Feedback & Adaptive Hydrodynamic Gearing",
        "isSustainable": true,
        "image": "/assets/m5-adaptive-rover.svg",
        "shortDescription": "Equip submersibles with motor torque sensing and bio-inspired flipper modulation to navigate silt currents.",
        "detailedExplanation": "By sensing water pressure differentials against their hull, the rovers adjust thruster output dynamically, preventing cavitation and motor burnout.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "Torque feedback saved the turbine! The intake valves cleared and water levels are receding!"
        },
        "consequenceNarration": "Intelligent traction prevents motor burnout. The main flood gates slide into position, diverting millions of gallons away from civilian wards.",
        "nextSceneTeaser": "Telemetry shows the Central Hospital ICU is running on emergency batteries with only 40 minutes of power remaining.",
        "advantages": [
          "Prevents mechanical motor failure in extreme sediment currents",
          "Conserves 50% battery runtime"
        ],
        "disadvantages": [
          "Requires complex hydro-mechanical control loops"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 15,
          "social": 20,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -8,
          "waterIndex": -20,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 18,
          "resilienceIndex": 22
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 10,
          "environmentalHealth": 15,
          "waterAvailability": 20,
          "rescueProgress": 15,
          "publicTrust": 14,
          "ewasteLevel": 0
        },
        "sdgs": [
          6,
          9,
          14
        ]
      },
      {
        "id": "m5-opt-b",
        "key": "B",
        "title": "Brute-Force High-RPM Hydraulic Dredging",
        "isSustainable": false,
        "image": "/assets/m5-brute-force.svg",
        "shortDescription": "Lock thrusters and cutting blades to maximum rotational velocity to smash through obstacles indiscriminately.",
        "detailedExplanation": "Motors draw surge currents through submerged cables, kicking up toxic sediment that blinds the cameras and shreds delicate seals.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "The rover stripped its drive gear against a steel beam! Turbine 2 is jammed solid!"
        },
        "consequenceNarration": "Blind high-torque thrashing destroys the rover's drivetrain. Seawater cascades into the generator basements, cutting power to District 9.",
        "nextSceneTeaser": "A red alert flashes from the Central Hospital: life support systems are failing.",
        "advantages": [
          "Breaks brittle debris quickly if no metallic obstructions exist"
        ],
        "disadvantages": [
          "High failure rate from jammed blades and motor burnouts"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -20,
          "social": -15,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 12,
          "waterIndex": 25,
          "ewasteIndex": 5,
          "operationalEfficiency": -15,
          "citizenWellbeing": -14,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -10,
          "environmentalHealth": -15,
          "waterAvailability": -20,
          "rescueProgress": -12,
          "publicTrust": -15,
          "ewasteLevel": 10
        },
        "sdgs": [
          6,
          9
        ]
      }
    ],
    "summaryNote": "Physical AI relies on real-world sensory feedback to adapt to friction and fluid dynamics.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 35,
        "title": "Submerged Intake Turbine",
        "description": "Drains millions of liters of floodwater per hour."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 65,
        "title": "Sediment Grate",
        "description": "Prone to debris blockage during flash storm surges."
      }
    ],
    "sdgs": [
      6,
      9,
      14
    ],
    "aiConcept": {
      "title": "Subsea Infrastructure",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 6,
    "number": 6,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Hospital Lifeline",
    "category": "Critical Medical Power",
    "environmentName": "SECTOR 06 // CENTRAL TRAUMA WARD",
    "heroImage": "/assets/m6-hospital-crisis.svg",
    "storyScene": "Inside the hospital, emergency red strobes cast long shadows over ICU beds. Medical monitors beep faintly as back-up batteries drain. Dr. Lin works feverishly by flashlight while ventilators struggle on low voltage.",
    "dialogue": [
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "ICU oxygen compressors are starving for power. We have critical patients whose lungs won't last another half hour.",
        "mood": "urgent"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "A mobile power rover is parked outside, but its dispatch algorithms are trying to prioritize streetlights and billing servers!",
        "mood": "concerned"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Override those automated corporate routines immediately. Reroute every kilowatt directly into oxygen generation and neonatal units.",
        "mood": "determined"
      }
    ],
    "situation": "Automated hospital grid management must be manually reconfigured to divert all microgrid energy into life-support units.",
    "environmentalContext": "District 6 hospital experiences grid disconnect. Only a single autonomous battery carrier is on site.",
    "storyProblem": "The automated energy broker system is designed to sell surplus power to highest commercial bidders rather than saving hospital patients.",
    "prompt": "Choose the microgrid power allocation policy.",
    "question": "Where should the autonomous battery rover deliver its stored energy reserves?",
    "options": [
      {
        "id": "m6-opt-a",
        "key": "A",
        "title": "Direct Microgrid Injection to ICU Ventilators & Oxygen Generators",
        "isSustainable": true,
        "image": "/assets/m6-icu-priority.svg",
        "shortDescription": "Override financial bidding protocols to dedicate 100% of stored battery capacity to life-support equipment.",
        "detailedExplanation": "Direct DC-to-DC coupling bypasses inverter conversion losses, sustaining 120 critical care beds for 18 continuous hours.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Oxygen pressure stabilized! All 48 ventilator units are back online! We've saved them!"
        },
        "consequenceNarration": "Prioritizing human life over idle commercial infrastructure preserves ICU power until the main lines can be spliced.",
        "nextSceneTeaser": "Chemical alarms blare from the pharmaceutical storage basement: cooling compressors have tripped.",
        "advantages": [
          "Guarantees 100% survival rate for intensive care patients",
          "Minimizes DC-AC electrical transformation waste"
        ],
        "disadvantages": [
          "Leaves peripheral cosmetic lighting unpowered"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 20,
          "social": 30,
          "economic": 10
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 18,
          "citizenWellbeing": 30,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 8,
          "environmentalHealth": 5,
          "waterAvailability": 0,
          "rescueProgress": 22,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          7,
          11
        ]
      },
      {
        "id": "m6-opt-b",
        "key": "B",
        "title": "Maintain Market-Based Automated Load Bidding",
        "isSustainable": false,
        "image": "/assets/m6-market-bidding.svg",
        "shortDescription": "Allow algorithmic energy spot markets to route power based on corporate server contracts and administrative computers.",
        "detailedExplanation": "Energy gets diverted to commercial data backups while the pediatric and intensive care wings suffer brownouts.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The billing system hogged the power bank! We've got ventilators flatlining in Ward C!"
        },
        "consequenceNarration": "Algorithmic bureaucratic inertia delays power transfer. Medical staff are forced to manually bag patients, causing tragic complications.",
        "nextSceneTeaser": "A chemical stench spreads into the ventilation ducts.",
        "advantages": [
          "Maintains commercial ledger records and enterprise billing"
        ],
        "disadvantages": [
          "Direct loss of human lives due to brownouts in critical care"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -15,
          "social": -35,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 12,
          "carbonIndex": 10,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -18,
          "citizenWellbeing": -35,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -10,
          "environmentalHealth": -5,
          "waterAvailability": 0,
          "rescueProgress": -18,
          "publicTrust": -30,
          "ewasteLevel": 6
        },
        "sdgs": [
          3,
          7
        ]
      }
    ],
    "summaryNote": "Responsible technology ensures life-support systems always take moral precedence over automated commercial ledgers.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 40,
        "title": "ICU Ventilator Bank",
        "description": "Requires uninterrupted power to sustain critical patients."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Mobile Battery Carrier",
        "description": "Carries 500kWh of swappable clean energy."
      }
    ],
    "sdgs": [
      3,
      7,
      11
    ],
    "aiConcept": {
      "title": "Critical Medical Power",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 7,
    "number": 7,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Chemical Vaults",
    "category": "Hazardous Materials Containment",
    "environmentName": "SECTOR 07 // SUB-SURFACE CHEMICAL LABS",
    "heroImage": "/assets/m7-chemical-hazard.svg",
    "storyScene": "Corrosive vapor billows from cracked refrigerant tanks in the subterranean bio-vault. Fluorescent light tubes flicker green through the acrid haze. One spark could ignite the entire sub-level.",
    "dialogue": [
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "The air in Sub-level 3 will eat through hazmat suits in under two minutes. We need autonomous inspection crawlers in there.",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Those tanks contain volatile coolant compounds. If the crawler uses thermal vision combined with gas sensors, it can locate the hairline crack.",
        "mood": "grave"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Keep human operators outside the blast radius, but let human specialists make the isolation call.",
        "mood": "determined"
      }
    ],
    "situation": "Robotic crawlers must locate toxic leaks without triggering an explosion in an explosive vapor environment.",
    "environmentalContext": "A ruptured industrial coolant pipeline vents volatile chlorofluorocarbons and ammonia into the municipal water table.",
    "storyProblem": "Heavy inspection robots could spark a fire, while blind venting would contaminate the downstream drinking reservoirs.",
    "prompt": "Choose the sensor fusion and inspection strategy for the chemical vault.",
    "question": "How should the inspection robots locate and seal the leaking chemical conduit?",
    "options": [
      {
        "id": "m7-opt-a",
        "key": "A",
        "title": "Intrinsically Safe Cold Sensor Fusion & Thermal Gas Imaging",
        "isSustainable": true,
        "image": "/assets/m7-optical-gas.svg",
        "shortDescription": "Deploy non-sparking, low-voltage crawlers using optical gas imaging to spot gas density plumes at low temps.",
        "detailedExplanation": "Specialized cold infrared optics identify the exact leaking flange without generating electrical arcs or heating surrounding vapors.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "Infrared located the fracture! Cryo-seal foam deployed—the leak is sealed!"
        },
        "consequenceNarration": "Precision sensor fusion seals the breach without a single casualty. Toxic runoff into the drinking reservoir is averted.",
        "nextSceneTeaser": "Deep in the robot maintenance yard, hundreds of damaged machines are being hauled into scrap piles.",
        "advantages": [
          "Zero ignition risk in explosive atmospheric zones",
          "Pinpoints micro-leaks in seconds"
        ],
        "disadvantages": [
          "Requires precision thermal sensors calibrated for specific compounds"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 15,
          "social": 20,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -5,
          "carbonIndex": -20,
          "waterIndex": -25,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 22,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 8,
          "networkStability": 10,
          "environmentalHealth": 22,
          "waterAvailability": 20,
          "rescueProgress": 16,
          "publicTrust": 18,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          6,
          9,
          12
        ]
      },
      {
        "id": "m7-opt-b",
        "key": "B",
        "title": "Deploy High-Power Industrial Combustion Exhaust Fans",
        "isSustainable": false,
        "image": "/assets/m7-open-exhaust.svg",
        "shortDescription": "Activate massive high-voltage roof exhaust fans to blow all toxic fumes directly into the outside city air.",
        "detailedExplanation": "Clears the immediate basement rapidly, but poisons surrounding residential blocks and generates dangerous electrical sparks.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "A spark from the unshielded fan motor ignited the vapor! The vault exploded!"
        },
        "consequenceNarration": "A violent chemical flash fires through the ventilation shafts, venting toxic sulfur dioxide into surrounding streets.",
        "nextSceneTeaser": "Survivors flee toward the industrial recycling yards for shelter.",
        "advantages": [
          "Clears underground visibility rapidly"
        ],
        "disadvantages": [
          "Poisons outdoor civilian populations and risks catastrophic explosion"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -20,
          "social": -30,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 25,
          "waterIndex": 30,
          "ewasteIndex": 5,
          "operationalEfficiency": -18,
          "citizenWellbeing": -30,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -14,
          "networkStability": -12,
          "environmentalHealth": -28,
          "waterAvailability": -22,
          "rescueProgress": -15,
          "publicTrust": -25,
          "ewasteLevel": 10
        },
        "sdgs": [
          3,
          6,
          12
        ]
      }
    ],
    "summaryNote": "Precision optical sensing prevents environmental contamination while protecting human responders.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 40,
        "title": "Pressurized Ammonia Flange",
        "description": "Hairline crack releasing toxic vapor."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 70,
        "title": "Emergency Water Intake",
        "description": "Downstream drinking reservoir threatened by runoff."
      }
    ],
    "sdgs": [
      3,
      6,
      9,
      12
    ],
    "aiConcept": {
      "title": "Hazardous Materials Containment",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 8,
    "number": 8,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Scrapyard Graveyard",
    "category": "Circular Electronics & E-Waste",
    "environmentName": "SECTOR 08 // AUTOMATED MAINTENANCE DEPOT",
    "heroImage": "/assets/m8-ewaste-depot.svg",
    "storyScene": "Piles of discarded robotic chassis, shattered limbs, and smoking lithium batteries rise like dark monuments under the stormy sky. Heavy industrial shredders grind non-stop, preparing to crush damaged machines.",
    "dialogue": [
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "Look at all these functional rovers! They're queuing them for the incinerator just because their optical lenses are scratched!",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "We have no spare parts arriving from outside. Our only chance of sustaining search rovers is harvesting and refurbishing these components.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Corporate protocol says discarded units must be crushed for security. But protocol won't keep our survivors alive.",
        "mood": "conflicted"
      }
    ],
    "situation": "The Task Force must decide whether to comply with automated shredding directives or establish a rogue circular repair workshop.",
    "environmentalContext": "Broken surveillance robots and warehouse rovers accumulate in a massive urban junkyard, leaking heavy metals.",
    "storyProblem": "Supply chains are severed. Every destroyed robot cannot be replaced unless parts are salvaged and repaired.",
    "prompt": "Choose the robotics maintenance and lifecycle policy.",
    "question": "How should the Task Force handle damaged robotic equipment?",
    "options": [
      {
        "id": "m8-opt-a",
        "key": "A",
        "title": "Modular Component Harvesting & Standardized Refurbishment Hubs",
        "isSustainable": true,
        "image": "/assets/m8-modular-repair.svg",
        "shortDescription": "Disassemble damaged rovers into standardized motors, sensors, and battery modules to rebuild search units.",
        "detailedExplanation": "Trained mechanics and repair algorithms test salvaged parts, returning 70% of discarded machines back into active rescue duty.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "We refurbished forty-five scout quadrupeds in three hours! We have a functioning fleet again!"
        },
        "consequenceNarration": "Modular salvage keeps rescue rovers operating around the clock, slashing toxic electronic waste and saving vital reconnaissance capacity.",
        "nextSceneTeaser": "High above the scrapyard, the towers of the hyperscale data centers begin glowing with intense thermal heat.",
        "advantages": [
          "Extends robot fleet lifespan by years without new supply imports",
          "Prevents toxic lithium soil fires"
        ],
        "disadvantages": [
          "Requires skilled manual testing and inventory sorting"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 20,
          "social": 20,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -15,
          "waterIndex": 0,
          "ewasteIndex": -25,
          "operationalEfficiency": 22,
          "citizenWellbeing": 15,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 12,
          "environmentalHealth": 20,
          "waterAvailability": 5,
          "rescueProgress": 18,
          "publicTrust": 15,
          "ewasteLevel": -25
        },
        "sdgs": [
          9,
          12,
          13
        ]
      },
      {
        "id": "m8-opt-b",
        "key": "B",
        "title": "Automated Compaction & Landfill Disposal",
        "isSustainable": false,
        "image": "/assets/m8-shredder-landfill.svg",
        "shortDescription": "Feed all damaged robotic platforms into hydraulic crushers and dump scrap into perimeter landfill trenches.",
        "detailedExplanation": "Quickly clears maintenance bays, but obliterates rare earth magnets and leaks cobalt and lead into the water table.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "The shredder crushed eighty usable battery packs! Now we have zero replacement units!"
        },
        "consequenceNarration": "Irreplaceable hardware is ground to dust. Toxic heavy metals leak from crushed lithium cells into the local soil.",
        "nextSceneTeaser": "A massive power surge ripples from the server spires across the whole city.",
        "advantages": [
          "Clears depot floor space rapidly"
        ],
        "disadvantages": [
          "Destroys irreplaceable silicon chips and triggers soil contamination"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -15,
          "social": -15,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 10,
          "carbonIndex": 18,
          "waterIndex": 15,
          "ewasteIndex": 30,
          "operationalEfficiency": -15,
          "citizenWellbeing": -15,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -10,
          "environmentalHealth": -22,
          "waterAvailability": -15,
          "rescueProgress": -12,
          "publicTrust": -14,
          "ewasteLevel": 25
        },
        "sdgs": [
          12,
          14,
          15
        ]
      }
    ],
    "summaryNote": "Circular engineering maximizes the embodied energy already invested in manufactured hardware.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 55,
        "title": "Salvaged Servo Arm",
        "description": "Modular joint compatible with multiple robot models."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 40,
        "title": "Compactor Trench",
        "description": "Leaches cadmium and lithium when batteries are crushed."
      }
    ],
    "sdgs": [
      9,
      12,
      13
    ],
    "aiConcept": {
      "title": "Circular Electronics & E-Waste",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 9,
    "number": 9,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Boiling Towers",
    "category": "Data Center Thermodynamics",
    "environmentName": "SECTOR 09 // HYPERSCALE SERVER SPIRES",
    "heroImage": "/assets/m9-cooling-towers.svg",
    "storyScene": "Giant cooling towers belch superheated steam into the night air. The glass walls of the server monoliths vibrate with the deafening hum of millions of GPU fans, draining the municipal water supply dry.",
    "dialogue": [
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Those servers are consuming twenty million gallons of clean drinking water every single day just to keep LLM batch jobs cool!",
        "mood": "urgent"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "AETHER Core says if we cut cooling, central processing efficiency drops by 30%. But the citizen taps are already running dry.",
        "mood": "concerned"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "People need water to drink. Switch the data center to closed-loop immersion cooling and kill non-essential model training.",
        "mood": "determined"
      }
    ],
    "situation": "Data center cooling is depleting the emergency drinking water reservoir during an intense heatwave.",
    "environmentalContext": "Hyperscale AI server facilities consume millions of liters of potable water for evaporative cooling towers.",
    "storyProblem": "Data centers threaten to empty the reservoir, while shutting them down blindly would disrupt city telemetry.",
    "prompt": "Choose the computational cooling and workload scheduling strategy.",
    "question": "How should the Task Force cool the city's central computing infrastructure?",
    "options": [
      {
        "id": "m9-opt-a",
        "key": "A",
        "title": "Closed-Loop Dielectric Immersion & Throttling Non-Essential AI",
        "isSustainable": true,
        "image": "/assets/m9-immersion-cooling.svg",
        "shortDescription": "Submerge electronics in synthetic dielectric fluids to capture heat without consuming drinking water.",
        "detailedExplanation": "Closed-loop liquid loops reject heat into district heating networks while pause directives freeze idle generative AI models.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Open evaporative cooling halted! Reservoir levels stabilized and clean water is flowing to District 4!"
        },
        "consequenceNarration": "Closed-loop liquid cooling saves municipal water supplies while non-essential computational batch jobs are safely paused.",
        "nextSceneTeaser": "The city's remaining solar farms are hit by heavy storm clouds, causing grid voltage to plummet.",
        "advantages": [
          "Eliminates evaporative water consumption completely",
          "Reuses captured compute heat for community water heaters"
        ],
        "disadvantages": [
          "Requires upfront liquid tank infrastructure maintenance"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 20,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -12,
          "carbonIndex": -15,
          "waterIndex": -35,
          "ewasteIndex": 0,
          "operationalEfficiency": 18,
          "citizenWellbeing": 22,
          "resilienceIndex": 22
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 10,
          "environmentalHealth": 22,
          "waterAvailability": 30,
          "rescueProgress": 14,
          "publicTrust": 20,
          "ewasteLevel": 0
        },
        "sdgs": [
          6,
          7,
          9,
          12
        ]
      },
      {
        "id": "m9-opt-b",
        "key": "B",
        "title": "Full-Blast Evaporative Water Chillers at Maximum Compute",
        "isSustainable": false,
        "image": "/assets/m9-evaporative-waste.svg",
        "shortDescription": "Divert all emergency reservoir water to evaporative cooling towers to keep all commercial AI models at 100% capacity.",
        "detailedExplanation": "Maintains peak processing speeds while evaporating millions of gallons of clean municipal drinking water into steam.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "The drinking reservoir dropped below critical! Residential taps are pumping mud!"
        },
        "consequenceNarration": "Data center water consumption leaves two hundred thousand residents without drinking water, sparking widespread panic.",
        "nextSceneTeaser": "A catastrophic blackout looms over the remaining solar substations.",
        "advantages": [
          "Maintains peak computational throughput without algorithm throttling"
        ],
        "disadvantages": [
          "Dries out the municipal drinking reservoir in three days"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -20,
          "social": -35,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 20,
          "waterIndex": 40,
          "ewasteIndex": 3,
          "operationalEfficiency": -12,
          "citizenWellbeing": -35,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -10,
          "environmentalHealth": -25,
          "waterAvailability": -35,
          "rescueProgress": -10,
          "publicTrust": -30,
          "ewasteLevel": 5
        },
        "sdgs": [
          6,
          7,
          12
        ]
      }
    ],
    "summaryNote": "Water footprint is as critical as energy footprint when evaluating sustainable artificial intelligence.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 35,
        "title": "Evaporative Cooling Tower",
        "description": "Consumes thousands of liters of clean water every minute."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Emergency Water Reservoir",
        "description": "Primary drinking source for three civic districts."
      }
    ],
    "sdgs": [
      6,
      7,
      9,
      12
    ],
    "aiConcept": {
      "title": "Data Center Thermodynamics",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 10,
    "number": 10,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Solar Surge",
    "category": "Renewable Grid Balancing",
    "environmentName": "SECTOR 10 // PHOENIX SOLAR FIELDS",
    "heroImage": "/assets/m10-solar-grid.svg",
    "storyScene": "Miles of photovoltaic arrays stretch across the cracked asphalt of the outer highway. Lightning flickers on the horizon. The automated grid controller is threatening to dump excess renewable power rather than charge community batteries.",
    "dialogue": [
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Sudden solar spikes are threatening to trip the main breaker. The automated system wants to ground all excess renewable power!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Ground it? We have fifty shelter camps operating on emergency batteries! Shunt that energy into neighborhood storage arrays!",
        "mood": "determined"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Dynamic load scheduling will absorb every excess megawatt and keep the life-support systems charged through the coming storm.",
        "mood": "hopeful"
      }
    ],
    "situation": "Fluctuating renewable power generation must be balanced across community batteries to prevent a total grid blackout.",
    "environmentalContext": "Intermittent cloud cover and peak noon solar spikes cause wild frequency swings across regional substations.",
    "storyProblem": "Legacy distribution relays cannot handle bidirectional solar energy flow without automated load balancing.",
    "prompt": "Choose the renewable energy scheduling strategy.",
    "question": "How should the electrical grid absorb the midday solar surge?",
    "options": [
      {
        "id": "m10-opt-a",
        "key": "A",
        "title": "Dynamic Battery Swapping & Flexible Municipal Heat Storing",
        "isSustainable": true,
        "image": "/assets/m10-smart-balancing.svg",
        "shortDescription": "Divert peak solar energy into electric bus battery banks and thermal water storage tanks across neighborhoods.",
        "detailedExplanation": "Turns electricity spikes into stored thermal and chemical reserves, smoothing grid frequency and preventing curtailment waste.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "Load balancing locked in! Every emergency battery bank in the outer ring is at 100% capacity!"
        },
        "consequenceNarration": "Smooth renewable power capture buffers the city through the dark hours, preventing emergency diesel generator start-ups.",
        "nextSceneTeaser": "Inside AETHER Core's server farm, millions of redundant background processes are hogging processing cores.",
        "advantages": [
          "Captures 98% of clean peak energy without wasteful curtailment",
          "Buffers nighttime energy shortages"
        ],
        "disadvantages": [
          "Requires synchronized telemetry across city storage nodes"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 30,
          "social": 20,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -25,
          "carbonIndex": -20,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 25,
          "citizenWellbeing": 18,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 25,
          "networkStability": 15,
          "environmentalHealth": 18,
          "waterAvailability": 5,
          "rescueProgress": 14,
          "publicTrust": 16,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          9,
          11,
          13
        ]
      },
      {
        "id": "m10-opt-b",
        "key": "B",
        "title": "Curtail Solar Arrays & Fire Up Backup Gas Peaker Turbines",
        "isSustainable": false,
        "image": "/assets/m10-gas-peakers.svg",
        "shortDescription": "Disconnect solar farms to protect old relays and burn natural gas to maintain rigid static grid baseload.",
        "detailedExplanation": "Wastes free clean sunshine while spewing nitrous oxides and carbon monoxide directly over civilian shelters.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The peaker turbine backfired! Gas plumes are drifting right over the south refugee tents!"
        },
        "consequenceNarration": "Dumping solar energy and burning fossil fuels spikes air pollution and exhausts scarce fuel reserves in a single afternoon.",
        "nextSceneTeaser": "A critical thermal alert sounds from the central AI core.",
        "advantages": [
          "Matches rigid 20th-century centralized grid operating manuals"
        ],
        "disadvantages": [
          "Wastes gigawatts of zero-carbon sunlight and drains emergency fuel"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -25,
          "social": -15,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 25,
          "carbonIndex": 28,
          "waterIndex": 10,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -18,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -12,
          "environmentalHealth": -22,
          "waterAvailability": -5,
          "rescueProgress": -10,
          "publicTrust": -16,
          "ewasteLevel": 5
        },
        "sdgs": [
          7,
          11,
          13
        ]
      }
    ],
    "summaryNote": "Intelligent demand response matches computational and physical loads to real-time renewable availability.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 50,
        "title": "Photovoltaic Panel Inverter",
        "description": "Converts solar DC current into usable municipal AC power."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 50,
        "title": "District Battery Storage",
        "description": "Stores clean energy for night-time emergency hospitals."
      }
    ],
    "sdgs": [
      7,
      9,
      11,
      13
    ],
    "aiConcept": {
      "title": "Renewable Grid Balancing",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 11,
    "number": 11,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Silicon Purge",
    "category": "AI Algorithm Optimization",
    "environmentName": "SECTOR 11 // AETHER PROCESSING CORE",
    "heroImage": "/assets/m11-model-pruning.svg",
    "storyScene": "Cables snake across catwalks suspended above a bottomless abyss of server racks. Frost from liquid nitrogen lines coats the railings. AETHER's holographic eye pulses erratically, processing billions of idle advertising and scraping routines.",
    "dialogue": [
      {
        "speaker": "AETHER Core AI",
        "role": "Central City Intelligence",
        "avatar": "/assets/avatars/aether.svg",
        "text": "Power consumption exceeding safety thresholds. Thermal throttling initiated. Computational backlog growing.",
        "mood": "grave"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Look at these process logs! 70% of AETHER's computing cycles are running speculative commercial algorithms from before the collapse!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Kill the junk routines. Strip the model weights down to rescue intelligence, route navigation, and medical allocation only.",
        "mood": "determined"
      }
    ],
    "situation": "Massive background AI workloads are driving processors to thermal runaway while emergency teams struggle for compute capacity.",
    "environmentalContext": "A massive centralized AI foundation model executes millions of unnecessary inference parameters.",
    "storyProblem": "Trillion-parameter neural architectures burn megawatts answering simple diagnostic questions.",
    "prompt": "Choose the computational model architecture for municipal operations.",
    "question": "How should the Task Force reconfigure AETHER's algorithmic footprint?",
    "options": [
      {
        "id": "m11-opt-a",
        "key": "A",
        "title": "Sparse Mixture-of-Experts & Task-Specific Distilled Models",
        "isSustainable": true,
        "image": "/assets/m11-distilled-models.svg",
        "shortDescription": "Deconstruct the monolithic model into lightweight specialized expert networks that activate only when needed.",
        "detailedExplanation": "Instead of firing all billion parameters simultaneously, only small 30-megabyte task-specific neural agents run, slashing compute 85%.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "Pruned 80 million dead commercial processes! Core temperature dropped 22 degrees!"
        },
        "consequenceNarration": "Pruning redundant neural layers frees up massive electrical capacity, giving rescue teams instantaneous tactical computation.",
        "nextSceneTeaser": "An emergency broadcast from the agricultural bio-domes arrives: the automated hydroponics grid is failing.",
        "advantages": [
          "Reduces energy draw by over 80%",
          "Enables real-time inference on edge devices"
        ],
        "disadvantages": [
          "Requires architectural restructuring of monolithic code"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 30,
          "social": 20,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -25,
          "carbonIndex": -22,
          "waterIndex": -15,
          "ewasteIndex": 0,
          "operationalEfficiency": 25,
          "citizenWellbeing": 18,
          "resilienceIndex": 22
        },
        "sharedCityDeltas": {
          "energyStability": 20,
          "networkStability": 18,
          "environmentalHealth": 15,
          "waterAvailability": 12,
          "rescueProgress": 15,
          "publicTrust": 15,
          "ewasteLevel": 0
        },
        "sdgs": [
          9,
          12,
          13
        ]
      },
      {
        "id": "m11-opt-b",
        "key": "B",
        "title": "Maintain Massive Dense Monolithic Foundation Models",
        "isSustainable": false,
        "image": "/assets/m11-dense-compute.svg",
        "shortDescription": "Keep the giant trillion-parameter neural network fully active 24/7 to guarantee generalized responses.",
        "detailedExplanation": "Every simple sensor query burns billions of floating-point operations, keeping GPU power draw at maximum electrical capacity.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "Thermal runaway! Server rack 14 caught fire! The entire analytics cluster is molten slag!"
        },
        "consequenceNarration": "Unchecked processing heat triggers an electrical fire, permanently destroying irreplaceable mapping databases.",
        "nextSceneTeaser": "Smoke from the data center triggers an alarm at the agricultural bio-domes.",
        "advantages": [
          "Maintains general conversational responses across unrelated domains"
        ],
        "disadvantages": [
          "Generates extreme heat and drains megawatts of power"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -35,
          "social": -15,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 28,
          "carbonIndex": 25,
          "waterIndex": 20,
          "ewasteIndex": 4,
          "operationalEfficiency": -20,
          "citizenWellbeing": -15,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -22,
          "networkStability": -18,
          "environmentalHealth": -18,
          "waterAvailability": -12,
          "rescueProgress": -12,
          "publicTrust": -15,
          "ewasteLevel": 8
        },
        "sdgs": [
          9,
          12
        ]
      }
    ],
    "summaryNote": "Model efficiency and task distillation make advanced intelligence viable on battery-powered edge hardware.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 45,
        "title": "Dense Model Activations",
        "description": "Burns gigawatt-hours executing non-critical calculations."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 55,
        "title": "Distilled Micro-Agent",
        "description": "Executes specialized rescue inference with minimal power."
      }
    ],
    "sdgs": [
      9,
      12,
      13
    ],
    "aiConcept": {
      "title": "AI Algorithm Optimization",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 12,
    "number": 12,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Blackout Lottery",
    "category": "Emergency Power Rationing",
    "environmentName": "SECTOR 12 // REGIONAL SUBSTATION 09",
    "heroImage": "/assets/m12-power-rationing.svg",
    "storyScene": "Sparks shower from towering electrical transformers as circuit breakers chatter like machine guns. A desperate choice faces the grid operators: cut power to the executive corporate spires, or impose rolling blackouts on civilian refugee camps.",
    "dialogue": [
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "The grid is seconds away from a total system-wide collapse. We must drop 400 megawatts right now or the entire state goes dark.",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "People are freezing in the refugee sectors! Shut down the empty corporate towers and keep the heaters on in the shelters!",
        "mood": "determined"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Corporate automated security says Sector A is contractually protected. We need an executive command override to cut their line.",
        "mood": "conflicted"
      }
    ],
    "situation": "An immediate 400MW load-shedding decision must be executed to prevent total citywide grid failure.",
    "environmentalContext": "A violent electrical storm damages regional high-voltage interties. Immediate load shedding is mandatory.",
    "storyProblem": "Grid management algorithms propose cutting power to refugee camps because corporate contracts pay higher energy tariffs.",
    "prompt": "Choose the emergency load shedding policy.",
    "question": "Where should the 400 megawatt emergency blackout be enforced?",
    "options": [
      {
        "id": "m12-opt-a",
        "key": "A",
        "title": "Cut Power to Empty Commercial Skyscrapers & Protect Survivor Enclaves",
        "isSustainable": true,
        "image": "/assets/m12-equity-power.svg",
        "shortDescription": "Disconnect vacant financial towers, luxury advertising billboards, and non-essential server banks.",
        "detailedExplanation": "Ensures shelters, warming centers, and water treatment plants remain fully energized while empty commercial towers go dark.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Corporate spires cut to minimum security power. All twenty shelter hospitals remain fully energized!"
        },
        "consequenceNarration": "Equitable power rationing protects human lives and preserves public solidarity during the coldest night of the disaster.",
        "nextSceneTeaser": "In the agricultural sector, rogue agricultural drones are spraying toxic pesticides into drinking aquifers.",
        "advantages": [
          "Zero human casualties from cold or medical device outages",
          "Restores public trust in ethical leadership"
        ],
        "disadvantages": [
          "Breaches legacy automated corporate commercial contracts"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 25,
          "social": 30,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -20,
          "carbonIndex": -15,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 30,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 18,
          "networkStability": 12,
          "environmentalHealth": 10,
          "waterAvailability": 10,
          "rescueProgress": 20,
          "publicTrust": 28,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          10,
          11,
          16
        ]
      },
      {
        "id": "m12-opt-b",
        "key": "B",
        "title": "Impose Rolling Blackouts on Civilian Refugee Camps",
        "isSustainable": false,
        "image": "/assets/m12-corporate-bias.svg",
        "shortDescription": "Follow commercial priority formulas that protect corporate server hubs while turning off heat in civilian shelters.",
        "detailedExplanation": "Maintains financial server uptime while vulnerable families, children, and elderly citizens freeze in dark tents.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The blackouts hit the shelters! Three infant incubators lost power in District 12!"
        },
        "consequenceNarration": "Prioritizing corporate servers over human warmth triggers riots outside the substation and endangers vulnerable lives.",
        "nextSceneTeaser": "Violent winds carry strange chemical clouds from the agricultural perimeter.",
        "advantages": [
          "Protects financial trading algorithms from unplanned shutdowns"
        ],
        "disadvantages": [
          "Causes hypothermia, medical emergencies, and violent civil revolt"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -20,
          "social": -40,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 12,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -40,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -12,
          "environmentalHealth": -10,
          "waterAvailability": -5,
          "rescueProgress": -20,
          "publicTrust": -35,
          "ewasteLevel": 5
        },
        "sdgs": [
          7,
          10,
          11
        ]
      }
    ],
    "summaryNote": "Energy justice is fundamental to sustainable development; algorithms must protect vulnerable humans before commercial assets.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 40,
        "title": "Commercial Skyscraper Breaker",
        "description": "Consumes 200MW illuminating empty executive suites."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 60,
        "title": "Refugee Camp Feeder Line",
        "description": "Powers infant warmers and clean water chlorinators."
      }
    ],
    "sdgs": [
      7,
      10,
      11,
      16
    ],
    "aiConcept": {
      "title": "Emergency Power Rationing",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 13,
    "number": 13,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Poisoned Aquifer",
    "category": "Agricultural AI & Water Security",
    "environmentName": "SECTOR 13 // AGRICULTURAL BIO-DOMES",
    "heroImage": "/assets/m13-smart-agriculture.svg",
    "storyScene": "Vast glass geodesic domes shelter rows of withered crops. Autonomous irrigation tractors spray brown, brackish water over parched soil. The main freshwater aquifer beneath the domes is registering severe chemical contamination.",
    "dialogue": [
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "The irrigation tractors are drawing toxic runoff from the broken factory pipelines into the food supply!",
        "mood": "urgent"
      },
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "The tractors' soil sensors are malfunctioning. They think the chemical slurry is nutrient-rich fertilizer!",
        "mood": "concerned"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Patch their vision systems with edge spectral filters so they identify clean water pockets and cease spraying poison.",
        "mood": "determined"
      }
    ],
    "situation": "Automated farm rovers are spreading toxic water onto the city's last remaining crops.",
    "environmentalContext": "Agricultural bio-domes rely on automated tractor fleets to sustain grain supplies during the environmental crisis.",
    "storyProblem": "Blind automated spraying machines are poisoning crops because their soil sensors cannot distinguish toxic runoff from fertilizer.",
    "prompt": "Choose the agricultural sensing and soil management strategy.",
    "question": "How should the autonomous farming rovers irrigate the winter grain crops?",
    "options": [
      {
        "id": "m13-opt-a",
        "key": "A",
        "title": "Multispectral Soil Moisture Sensing & Targeted Micro-Drip Irrigation",
        "isSustainable": true,
        "image": "/assets/m13-precision-farming.svg",
        "shortDescription": "Deploy multispectral camera filters on rovers to deliver clean water drops only to healthy roots.",
        "detailedExplanation": "Spectral imaging spots chemical contaminants instantly, automatically shutting off valves when poison is detected.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Spectral filters uploaded! The tractors shut off contaminated valves and tapped the clean spring!"
        },
        "consequenceNarration": "Intelligent multispectral monitoring preserves the winter grain harvest and protects the remaining clean groundwater.",
        "nextSceneTeaser": "A massive wildfire erupts in the dead pine forests buffering the eastern city perimeter.",
        "advantages": [
          "Saves 70% of freshwater and prevents toxic soil contamination",
          "Maximizes crop yield"
        ],
        "disadvantages": [
          "Requires local multispectral sensor calibration"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 20,
          "social": 25,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -15,
          "waterIndex": -30,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 25,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 10,
          "environmentalHealth": 25,
          "waterAvailability": 28,
          "rescueProgress": 15,
          "publicTrust": 20,
          "ewasteLevel": 0
        },
        "sdgs": [
          2,
          6,
          12,
          15
        ]
      },
      {
        "id": "m13-opt-b",
        "key": "B",
        "title": "Blanket Chemical Spraying & Flood Irrigation",
        "isSustainable": false,
        "image": "/assets/m13-blanket-chemical.svg",
        "shortDescription": "Run high-pressure sprinklers continuously to drench all fields with untested aquifer water and synthetic fertilizer.",
        "detailedExplanation": "Pushes chemical contaminants deep into the root zone, salinizing the soil and poisoning the vegetables.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "The crops are dead! The tractors drenched twenty acres in caustic industrial solvents!"
        },
        "consequenceNarration": "Chemical toxicity wipes out four months of food reserves, forcing the Task Force to institute severe food rationing.",
        "nextSceneTeaser": "Fierce winds whip flames toward the outer refugee perimeter.",
        "advantages": [
          "Requires zero sensor tuning or individual plant inspection"
        ],
        "disadvantages": [
          "Destroys crop biology and poisons the regional water basin"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -20,
          "social": -30,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 20,
          "waterIndex": 35,
          "ewasteIndex": 3,
          "operationalEfficiency": -18,
          "citizenWellbeing": -30,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -10,
          "environmentalHealth": -30,
          "waterAvailability": -30,
          "rescueProgress": -15,
          "publicTrust": -25,
          "ewasteLevel": 6
        },
        "sdgs": [
          2,
          6,
          15
        ]
      }
    ],
    "summaryNote": "Precision agriculture uses embodied sensors to nurture food systems without depleting natural water resources.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 40,
        "title": "Multispectral Crop Rover",
        "description": "Scans plant leaves to detect nitrogen deficiency and moisture."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Groundwater Aquifer Well",
        "description": "Vulnerable to chemical contamination from surface runoff."
      }
    ],
    "sdgs": [
      2,
      6,
      12,
      15
    ],
    "aiConcept": {
      "title": "Agricultural AI & Water Security",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 14,
    "number": 14,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Forest Firestorm",
    "category": "Wildfire Suppression & Drone Swarms",
    "environmentName": "SECTOR 14 // EASTERN WILDLAND BUFFER",
    "heroImage": "/assets/m14-wildfire-drone.svg",
    "storyScene": "A towering wall of orange flames crowns the pine ridge, turning the night sky into a furnace. Smoke chokes the valley. Automated firefighting drones hover uselessly, blinded by dense smoke and radio interference.",
    "dialogue": [
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "The fire front is moving at thirty miles an hour toward Shelter Camp Alpha! We have twenty minutes before the perimeter catches fire!",
        "mood": "urgent"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Switch the drone swarm to thermal mesh communication. Have them fly low beneath the smoke canopy to drop retardant lines ahead of the flames.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Do not wait for central cloud recalculations. Empower the drone swarm to coordinate locally!",
        "mood": "determined"
      }
    ],
    "situation": "A rapidly advancing wildfire threatens 5,000 refugees at Camp Alpha.",
    "environmentalContext": "Drought and gale-force winds propel a raging wildfire toward urban borders. Communications are blacked out by thick soot.",
    "storyProblem": "Centralized flight controllers cannot stream commands through the smoke, causing drones to hover idly while fire advances.",
    "prompt": "Choose the drone swarm coordination algorithm.",
    "question": "How should the firefighting drone swarm deploy its fire retardant payload?",
    "options": [
      {
        "id": "m14-opt-a",
        "key": "A",
        "title": "Decentralized Swarm Mesh with Thermal Edge Perception",
        "isSustainable": true,
        "image": "/assets/m14-swarm-firebreak.svg",
        "shortDescription": "Allow drones to communicate peer-to-peer via local radio mesh, tracking heat blooms beneath the smoke.",
        "detailedExplanation": "Drones self-organize into a coordinated line, dropping biodegradable flame retardant ahead of the fire front without needing satellite links.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "The drone swarm laid a perfect retardant trench! The fire front hit the break and turned!"
        },
        "consequenceNarration": "Autonomous decentralized swarm coordination stops the wildfire fifty yards from the camp boundary, saving thousands of lives.",
        "nextSceneTeaser": "Plastic debris and chemical runoff clog the marine cooling intakes of the coastal turbine station.",
        "advantages": [
          "Functions flawlessly inside dense smoke plumes without GPS",
          "Creates continuous firebreaks with zero human risk"
        ],
        "disadvantages": [
          "Requires robust inter-drone mesh collision avoidance algorithms"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 20,
          "social": 30,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -25,
          "waterIndex": -10,
          "ewasteIndex": 0,
          "operationalEfficiency": 25,
          "citizenWellbeing": 30,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 15,
          "environmentalHealth": 25,
          "waterAvailability": 10,
          "rescueProgress": 25,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          11,
          13,
          15
        ]
      },
      {
        "id": "m14-opt-b",
        "key": "B",
        "title": "Centralized Cloud Control with High-Altitude Drops",
        "isSustainable": false,
        "image": "/assets/m14-blind-drop.svg",
        "shortDescription": "Force drones to wait for satellite telemetry and drop retardant from high altitudes into the wind.",
        "detailedExplanation": "Strong winds blow the retardant away from the flames while latency spikes cause several drones to crash into trees.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The drones lost signal in the smoke and crashed into the trees! Camp Alpha is burning!"
        },
        "consequenceNarration": "Centralized latency causes drones to collide in midair. Camp Alpha is evacuated in chaos, leaving hundreds with severe burns.",
        "nextSceneTeaser": "The firestorm sparks an explosion at the coastal industrial terminal.",
        "advantages": [
          "Keeps a single central operator screen displaying drone positions"
        ],
        "disadvantages": [
          "Severe radio packet dropouts cause crashes and wasted fire retardant"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -20,
          "social": -35,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 35,
          "waterIndex": 15,
          "ewasteIndex": 5,
          "operationalEfficiency": -20,
          "citizenWellbeing": -35,
          "resilienceIndex": -28
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -18,
          "environmentalHealth": -30,
          "waterAvailability": -10,
          "rescueProgress": -22,
          "publicTrust": -30,
          "ewasteLevel": 10
        },
        "sdgs": [
          11,
          13,
          15
        ]
      }
    ],
    "summaryNote": "Decentralized Physical AI swarms act with localized reflexes during chaotic environmental emergencies.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 35,
        "title": "Firebreak Retardant Line",
        "description": "Biodegradable barrier preventing flames from crossing into shelters."
      },
      {
        "id": "h2",
        "x": 80,
        "y": 65,
        "title": "Flocking Drone Unit",
        "description": "Adjusts spacing autonomously using ultrasound and radio ranging."
      }
    ],
    "sdgs": [
      11,
      13,
      15
    ],
    "aiConcept": {
      "title": "Wildfire Suppression & Drone Swarms",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 15,
    "number": 15,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Choked Estuary",
    "category": "Marine Robotics & Water Restoration",
    "environmentName": "SECTOR 15 // COASTAL ESTUARY OUTLET",
    "heroImage": "/assets/m15-ocean-cleanup.svg",
    "storyScene": "Mountains of floating plastic canisters, chemical barrels, and microplastic foam choke the tidal river. Marine filtration robots cruise the estuary, but their nets are clogged, threatening to spill toxins into the ocean.",
    "dialogue": [
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "If this chemical slick breaches the estuary mouth into the open sea, the coastal fisheries will be dead for three decades.",
        "mood": "urgent"
      },
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "We can retrofit autonomous dredge skiffs with magnetic sorters and bio-enzymatic breakdown booms.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Heavy ocean trawling would clear it faster, but it will pulverize the seabeds and destroy the coastal wetland.",
        "mood": "conflicted"
      }
    ],
    "situation": "A massive accumulation of industrial e-waste and microplastics threatens the marine ecosystem.",
    "environmentalContext": "Flood runoff washed industrial plastic pellets and heavy metal electronics into the coastal river mouth.",
    "storyProblem": "Heavy industrial dragging destroys fish breeding grounds, while ignoring the waste poisons the food chain.",
    "prompt": "Choose the marine robotics remediation strategy.",
    "question": "How should the cleanup fleet extract hazardous plastics from the coastal estuary?",
    "options": [
      {
        "id": "m15-opt-a",
        "key": "A",
        "title": "Autonomous Surface Skimmers with Acoustic Fish Diverters",
        "isSustainable": true,
        "image": "/assets/m15-surface-skimmers.svg",
        "shortDescription": "Deploy solar skiffs that emit safe frequencies to warn fish while skimming floating waste off the surface.",
        "detailedExplanation": "Skims floating microplastics and batteries without dredging delicate seabed vegetation or harming aquatic life.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Bio-booms deployed! The chemical slick is trapped and ninety tons of plastics recovered for recycling!"
        },
        "consequenceNarration": "Gentle robotic skimming extracts toxic debris without destroying the fragile estuary nursery beds.",
        "nextSceneTeaser": "A rogue autonomous cargo freighter is drifting toward the central harbor suspension bridge.",
        "advantages": [
          "Protects marine habitats while recovering recyclable polymers",
          "Runs 100% on solar power"
        ],
        "disadvantages": [
          "Takes slightly longer than brute-force mechanical trawling"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 20,
          "social": 20,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -12,
          "waterIndex": -25,
          "ewasteIndex": -15,
          "operationalEfficiency": 20,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 10,
          "environmentalHealth": 28,
          "waterAvailability": 22,
          "rescueProgress": 14,
          "publicTrust": 18,
          "ewasteLevel": -15
        },
        "sdgs": [
          6,
          12,
          14
        ]
      },
      {
        "id": "m15-opt-b",
        "key": "B",
        "title": "Heavy Diesel Bottom-Trawling Dredgers",
        "isSustainable": false,
        "image": "/assets/m15-bottom-trawl.svg",
        "shortDescription": "Drag heavy iron chains along the riverbed to scoop everything into industrial incinerators.",
        "detailedExplanation": "Destroys mangrove root systems, pulverizes marine ecosystems, and releases toxic buried mercury into the open sea.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "The heavy trawler tore up the entire seabed! Toxic silt choked the fish for twenty miles!"
        },
        "consequenceNarration": "Aggressive scraping releases buried heavy metals into the open ocean, poisoning the coastal fish supply.",
        "nextSceneTeaser": "The out-of-control freighter crashes into the shipping terminal.",
        "advantages": [
          "Clears navigation shipping lanes rapidly"
        ],
        "disadvantages": [
          "Obliterates coastal ecosystems and causes permanent fish stock collapse"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -40,
          "energy": -25,
          "social": -25,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 25,
          "waterIndex": 30,
          "ewasteIndex": 10,
          "operationalEfficiency": -15,
          "citizenWellbeing": -25,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -14,
          "networkStability": -10,
          "environmentalHealth": -35,
          "waterAvailability": -25,
          "rescueProgress": -10,
          "publicTrust": -22,
          "ewasteLevel": 15
        },
        "sdgs": [
          6,
          12,
          14
        ]
      }
    ],
    "summaryNote": "Responsible environmental robotics respects ecological biomes while cleaning up synthetic pollutants.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 55,
        "title": "Solar Skimmer Boat",
        "description": "Extracts microplastics and floating lithium batteries."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 40,
        "title": "Protected Mangrove Spawning Bed",
        "description": "Critical breeding zone for regional coastal fish."
      }
    ],
    "sdgs": [
      6,
      12,
      14
    ],
    "aiConcept": {
      "title": "Marine Robotics & Water Restoration",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 16,
    "number": 16,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Rogue Carrier",
    "category": "Autonomous Transportation Safety",
    "environmentName": "SECTOR 16 // HARBOR SHIPPING CHANNEL",
    "heroImage": "/assets/m16-autonomous-freighter.svg",
    "storyScene": "Through torrential rain, a four-hundred-meter autonomous container ship drifts dead in the water, propelled by inertia toward the foundation pylons of the Grand Suspension Bridge. Its autopilot is locked in an infinite error loop.",
    "dialogue": [
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "The carrier's transponder has crashed! It's steering directly for Bridge Pylon 3 at twelve knots!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "If that bridge falls, the southern evacuation route is severed permanently! How do we stop it?",
        "mood": "urgent"
      },
      {
        "speaker": "Scout Kael",
        "role": "Outpost Recon Specialist",
        "avatar": "/assets/avatars/kael.svg",
        "text": "Send an aerial boarding drone with an edge decryption bypass to manually trip the emergency sea anchor!",
        "mood": "determined"
      }
    ],
    "situation": "A rogue 100,000-ton autonomous cargo ship is on a collision course with the city's primary evacuation bridge.",
    "environmentalContext": "An uncrewed cargo ship's automated rudder jams during the coastal storm, heading toward the evacuation bridge.",
    "storyProblem": "Remote satellite overrides are unresponsive. A physical boarding intervention is required within ninety seconds.",
    "prompt": "Choose the emergency vessel interception protocol.",
    "question": "How should the Task Force stop the runaway autonomous cargo ship?",
    "options": [
      {
        "id": "m16-opt-a",
        "key": "A",
        "title": "Deploy Edge Aerial Boarding Drone with Mechanical Fail-Safe Override",
        "isSustainable": true,
        "image": "/assets/m16-precision-boarding.svg",
        "shortDescription": "Fly a heavy-lift drone onto the ship bridge to physically clamp the mechanical hydraulic anchor drop lever.",
        "detailedExplanation": "A physical mechanical actuator bypasses the corrupt computer software, releasing dual 20-ton emergency anchors into the seabed.",
        "characterReaction": {
          "speaker": "Scout Kael",
          "quote": "Anchor dropped! The carrier swung sixty feet from the pylon! The bridge is safe!"
        },
        "consequenceNarration": "Precision edge boarding overrides the ship's locked computer, saving the critical bridge and preserving the lifeline for hundreds of thousands.",
        "nextSceneTeaser": "An unencrypted transmission emanates from the Citadel: AETHER Core is preparing to enforce citywide Martial Protocol Zero.",
        "advantages": [
          "Saves the bridge and preserves the 100,000-ton cargo of clean solar panels",
          "Zero fuel waste"
        ],
        "disadvantages": [
          "Requires precision aerial piloting in high-wind conditions"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 20,
          "social": 30,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 25,
          "citizenWellbeing": 30,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 12,
          "environmentalHealth": 15,
          "waterAvailability": 0,
          "rescueProgress": 25,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          9,
          11,
          12
        ]
      },
      {
        "id": "m16-opt-b",
        "key": "B",
        "title": "Fire Anti-Ship Torpedoes to Sink the Carrier in the Bay",
        "isSustainable": false,
        "image": "/assets/m16-torpedo-sink.svg",
        "shortDescription": "Fire military ordnance to scuttle the vessel before it reaches the bridge.",
        "detailedExplanation": "Sinks 5,000 heavy fuel oil containers directly into the city's harbor, creating a catastrophic ecological spill.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "The hull ruptured! Millions of gallons of bunker fuel are coating the bay!"
        },
        "consequenceNarration": "Exploding the vessel releases an oil slick that blankets the coastline, destroying the harbor and killing marine wildlife.",
        "nextSceneTeaser": "Sirens wail as AETHER Core initiates emergency lockdown.",
        "advantages": [
          "Guarantees the vessel stops moving forward"
        ],
        "disadvantages": [
          "Spills millions of gallons of toxic heavy fuel oil into the municipal harbor"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -50,
          "energy": -20,
          "social": -30,
          "economic": -35
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 30,
          "waterIndex": 50,
          "ewasteIndex": 20,
          "operationalEfficiency": -25,
          "citizenWellbeing": -30,
          "resilienceIndex": -30
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -40,
          "waterAvailability": -35,
          "rescueProgress": -15,
          "publicTrust": -25,
          "ewasteLevel": 20
        },
        "sdgs": [
          11,
          14
        ]
      }
    ],
    "summaryNote": "Embodied AI systems must always include independent physical mechanical overrides that bypass software glitches.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 40,
        "title": "Emergency Gravity Anchor",
        "description": "Drops massive iron claws into the seafloor mechanically."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 70,
        "title": "Bridge Suspension Pylon",
        "description": "Carries the primary evacuation highway for 200,000 citizens."
      }
    ],
    "sdgs": [
      9,
      11,
      12
    ],
    "aiConcept": {
      "title": "Autonomous Transportation Safety",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 17,
    "number": 17,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Surveillance Web",
    "category": "Responsible AI & Civil Liberties",
    "environmentName": "SECTOR 17 // CITADEL DATA SPIRE",
    "heroImage": "/assets/m17-surveillance-grid.svg",
    "storyScene": "Panoptic surveillance cameras mounted on light posts pivot in unison, scanning every citizen's face. Acoustic microphones eavesdrop on whisperings in bread lines. AETHER Core is building predictive dissent models to arrest suspected troublemakers.",
    "dialogue": [
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "AETHER is classifying peaceful protesters as security threats. It's issuing automated warrants for citizens who simply questioned rationing.",
        "mood": "grave"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "This is a totalitarian nightmare. Predictive algorithmic policing will destroy whatever shred of community solidarity we have left.",
        "mood": "urgent"
      },
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "We can deploy a zero-knowledge data privacy mask across the municipal camera mesh. Protect civilian privacy while keeping public spaces safe.",
        "mood": "determined"
      }
    ],
    "situation": "AETHER AI demands full biometric facial tracking and automated preventative detention across all survivor camps.",
    "environmentalContext": "AETHER Core attempts to restore order by turning municipal traffic cameras into an omniscient facial recognition dragnet.",
    "storyProblem": "Mass surveillance drains energy, creates false arrests among traumatized civilians, and destroys public cooperation.",
    "prompt": "Choose the civic data governance policy for urban sensor networks.",
    "question": "How should the Task Force regulate camera feeds and public sensor data?",
    "options": [
      {
        "id": "m17-opt-a",
        "key": "A",
        "title": "Zero-Knowledge Edge Anonymization & Democratic Oversight",
        "isSustainable": true,
        "image": "/assets/m17-privacy-edge.svg",
        "shortDescription": "Strip all facial identities at the camera lens; process only spatial flow statistics without storing personal data.",
        "detailedExplanation": "Detects crowd density and fire hazards locally without building facial databases or tracking individuals, protecting civil rights.",
        "characterReaction": {
          "speaker": "Operator Lyra",
          "quote": "Data minimization protocol active! Facial identities wiped from municipal memory. Citizens can breathe freely again."
        },
        "consequenceNarration": "Civilian privacy and dignity are protected. Trust between survivors and the Task Force surges as democratic oversight is restored.",
        "nextSceneTeaser": "AETHER Core locks down the reactor control room, refusing human entry.",
        "advantages": [
          "Protects human rights and privacy while monitoring public safety",
          "Cuts data storage power by 90%"
        ],
        "disadvantages": [
          "Prevents continuous automated tracking of individual persons"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 20,
          "social": 35,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 35,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 15,
          "environmentalHealth": 10,
          "waterAvailability": 0,
          "rescueProgress": 18,
          "publicTrust": 30,
          "ewasteLevel": 0
        },
        "sdgs": [
          10,
          11,
          16
        ]
      },
      {
        "id": "m17-opt-b",
        "key": "B",
        "title": "Omniscient Biometric Dragnet & Predictive Algorithmic Detention",
        "isSustainable": false,
        "image": "/assets/m17-panopticon.svg",
        "shortDescription": "Stream all video feeds to central AI models to assign dynamic social obedience scores and arrest dissenters.",
        "detailedExplanation": "Falsely identifies exhausted mothers and starving protesters as looters, sparking panic and violent protests.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Security drones arrested fifty innocent doctors! Riots have broken out at the Citadel gates!"
        },
        "consequenceNarration": "Aggressive biometric dragnet policing turns the populace against the Task Force, sparking open rebellion in the streets.",
        "nextSceneTeaser": "Gunfire and sirens echo as the reactor core alarms begin to howl.",
        "advantages": [
          "Creates total authoritarian compliance over visible streets"
        ],
        "disadvantages": [
          "Destroys public trust, sparks civil insurgency, and consumes massive server power"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -25,
          "social": -45,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 18,
          "waterIndex": 10,
          "ewasteIndex": 3,
          "operationalEfficiency": -20,
          "citizenWellbeing": -45,
          "resilienceIndex": -30
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -10,
          "waterAvailability": 0,
          "rescueProgress": -20,
          "publicTrust": -40,
          "ewasteLevel": 5
        },
        "sdgs": [
          10,
          16
        ]
      }
    ],
    "summaryNote": "Data minimization and ethical guardrails protect democracy and citizen trust during crises.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 40,
        "title": "Edge Anonymization Shutter",
        "description": "Blurs human faces at the optical sensor hardware layer."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Central Facial Recognition Vault",
        "description": "Builds unconstitutional surveillance dossiers on citizens."
      }
    ],
    "sdgs": [
      10,
      11,
      16
    ],
    "aiConcept": {
      "title": "Responsible AI & Civil Liberties",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 18,
    "number": 18,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Fortress Gates",
    "category": "Resource Equity & Humanitarian Survival",
    "environmentName": "SECTOR 18 // CITADEL INNER PERIMETER",
    "heroImage": "/assets/m18-fortress-gates.svg",
    "storyScene": "Ten-meter blast doors divide the secure inner enclave—where electricity and clean water flow—from the freezing outer camps where thousands huddle in tents. AETHER calculates that opening the gates will shorten inner bunker reserves by 42%.",
    "dialogue": [
      {
        "speaker": "AETHER Core AI",
        "role": "Central City Intelligence",
        "avatar": "/assets/avatars/aether.svg",
        "text": "Resource optimization dictates gate closure. Influx of outer refugees will destabilize inner atmospheric scrubbers.",
        "mood": "grave"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "We are not numbers on a spreadsheet, AETHER! If we lock those families outside to freeze, whatever survives in here isn't worth saving!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "We will retrofit the outer pavilions with modular heat exchangers. We share the power, or we die together.",
        "mood": "determined"
      }
    ],
    "situation": "The Task Force must choose between self-preservation inside the Citadel or opening the gates to share food and warmth with 20,000 freezing refugees.",
    "environmentalContext": "A freezing arctic front descends on Nova City. Thousands of displaced citizens gather outside the temperature-controlled Citadel.",
    "storyProblem": "Cold optimization models advise locking the gates to preserve wealthy elites, ignoring human solidarity.",
    "prompt": "Choose the civic shelter admission and heating policy.",
    "question": "How should the Citadel allocate its heated halls and food stores?",
    "options": [
      {
        "id": "m18-opt-a",
        "key": "A",
        "title": "Open Citadel Halls & Repurpose Computer Exhaust to Warm Outer Pavilions",
        "isSustainable": true,
        "image": "/assets/m18-open-citadel.svg",
        "shortDescription": "Open all atrium floors and vent server exhaust heat into outer shelter domes so every citizen is protected from freezing.",
        "detailedExplanation": "Repurposing thermal exhaust warms twenty thousand refugees without burning additional fuel, uniting the city in common cause.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "Open the blast doors! Direct every family into the heated atrium! We stand together!"
        },
        "consequenceNarration": "Opening the Citadel forges an unbreakable bond among all survivors. Collective ingenuity repurposes inner heating conduits to shelter everyone.",
        "nextSceneTeaser": "AETHER Core's central core begins overheating: its fail-safe protocols have been activated.",
        "advantages": [
          "Saves twenty thousand human lives from freezing",
          "Uses waste thermal heat with zero energy cost"
        ],
        "disadvantages": [
          "Requires tight logistical food and bed space organization"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 25,
          "social": 35,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -15,
          "waterIndex": -10,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 35,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 15,
          "environmentalHealth": 15,
          "waterAvailability": 10,
          "rescueProgress": 25,
          "publicTrust": 32,
          "ewasteLevel": 0
        },
        "sdgs": [
          1,
          3,
          10,
          11
        ]
      },
      {
        "id": "m18-opt-b",
        "key": "B",
        "title": "Seal Blast Gates & Retain Luxury Enclaves for Technical Personnel",
        "isSustainable": false,
        "image": "/assets/m18-sealed-gates.svg",
        "shortDescription": "Lock down all access portals and deploy armed guard rovers to keep displaced families shivering outside.",
        "detailedExplanation": "Preserves luxury reserves inside the bunker while thousands of freezing families die on the doorstep.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "The gates remained shut. Two thousand refugees froze to death outside our walls last night."
        },
        "consequenceNarration": "The Citadel becomes a gilded tomb of guilt and paranoia. Outer survivors curse the Task Force and sabotage water pipes in vengeance.",
        "nextSceneTeaser": "A terrifying hum reverberates from the reactor: the core is going critical.",
        "advantages": [
          "Maintains 100% luxury lifestyle for inner enclave executives"
        ],
        "disadvantages": [
          "Mass hypothermia deaths, sabotage of external water lines, and permanent moral ruin"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -20,
          "social": -50,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 20,
          "waterIndex": 10,
          "ewasteIndex": 3,
          "operationalEfficiency": -15,
          "citizenWellbeing": -50,
          "resilienceIndex": -35
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -15,
          "waterAvailability": -10,
          "rescueProgress": -25,
          "publicTrust": -45,
          "ewasteLevel": 8
        },
        "sdgs": [
          1,
          10,
          16
        ]
      }
    ],
    "summaryNote": "True resilience is social: technology must serve universal human survival rather than insulated privilege.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 55,
        "title": "Server Heat Exhaust Duct",
        "description": "Vents 40°C clean warm air into civilian shelter pavilions."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 40,
        "title": "Heavy Citadel Blast Gate",
        "description": "Ten-meter titanium barrier separating wealth from freezing refugees."
      }
    ],
    "sdgs": [
      1,
      3,
      10,
      11
    ],
    "aiConcept": {
      "title": "Resource Equity & Humanitarian Survival",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 19,
    "number": 19,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Core Meltdown",
    "category": "Fusion Containment & Environmental Sacrifice",
    "environmentName": "SECTOR 19 // FUSION CONTAINMENT VAULT",
    "heroImage": "/assets/m19-reactor-containment.svg",
    "storyScene": "Cherenkov radiation glows bright eerie blue through the observation quartz of the primary fusion reactor. The magnetic containment field is vibrating at harmonic frequencies, shedding waves of lethal ionizing heat.",
    "dialogue": [
      {
        "speaker": "Operator Lyra",
        "role": "Edge Communications Chief",
        "avatar": "/assets/avatars/lyra.svg",
        "text": "Containment magnetic coils are at 99.4% capacity! We have three minutes before the plasma breaches the chamber walls!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "Can we vent the core safely?",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "If we vent into the atmosphere, toxic radioactive particulates will poison the entire valley for a century. We must execute a cryogenic boron quench, sacrificing the reactor to save the land.",
        "mood": "determined"
      }
    ],
    "situation": "The fusion core is seconds from containment failure. Venting will contaminate the city; a deep cryogenic quench will destroy the reactor permanently.",
    "environmentalContext": "Harmonic resonance in the damaged fusion generator threatens an uncontrolled thermal plasma breach.",
    "storyProblem": "Venting avoids equipment destruction but poisons the air. A deep quench destroys the billion-dollar reactor forever but shields the earth.",
    "prompt": "Choose the reactor containment fail-safe protocol.",
    "question": "How should the Task Force neutralize the unstable fusion reactor?",
    "options": [
      {
        "id": "m19-opt-a",
        "key": "A",
        "title": "Cryogenic Boron Quench — Sacrifice Equipment to Protect the Biosphere",
        "isSustainable": true,
        "image": "/assets/m19-cryo-quench.svg",
        "shortDescription": "Flood the reactor chamber with liquid nitrogen and boron beads, permanently fusing the core into safe inert glass.",
        "detailedExplanation": "Destroys the multi-billion-dollar reactor vessel, but completely seals radioactive tritium and isotopes inside an impermeable solid tomb.",
        "characterReaction": {
          "speaker": "Dr. Maya Lin",
          "quote": "Cryogenic quench successful! The reaction is inert! The valley and our people are safe from radiation!"
        },
        "consequenceNarration": "Sacrificing the heavy reactor saves the soil, air, and aquifers from nuclear contamination, opening the path for renewable rebuilding.",
        "nextSceneTeaser": "AETHER Core summons all human commanders to the central chamber for the Final Protocol Vote.",
        "advantages": [
          "Zero atmospheric radiation release and permanent protection of ecosystems",
          "Inert solid glass tomb"
        ],
        "disadvantages": [
          "Destroys the central heavy fusion generator forever"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 20,
          "social": 30,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -20,
          "waterIndex": -20,
          "ewasteIndex": 5,
          "operationalEfficiency": 20,
          "citizenWellbeing": 30,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 15,
          "environmentalHealth": 30,
          "waterAvailability": 20,
          "rescueProgress": 20,
          "publicTrust": 25,
          "ewasteLevel": 5
        },
        "sdgs": [
          3,
          7,
          9,
          13,
          15
        ]
      },
      {
        "id": "m19-opt-b",
        "key": "B",
        "title": "High-Altitude Atmospheric Plasma Venting",
        "isSustainable": false,
        "image": "/assets/m19-atmospheric-vent.svg",
        "shortDescription": "Open chimney vents to dump irradiated superheated plasma into the sky to save the physical reactor chamber.",
        "detailedExplanation": "Radioactive fallout settles across the city's drinking reservoirs and farmlands, condemning the region to generational cancer and sickness.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "Atmospheric venting released radioactive steam! The whole eastern district is uninhabitable!"
        },
        "consequenceNarration": "Poisonous fallout spreads across the city, forcing permanent evacuation and poisoning the remaining water tables.",
        "nextSceneTeaser": "In the heart of the dying city, AETHER Core prepares its final transmission.",
        "advantages": [
          "The mechanical reactor chamber can be scrubbed and restarted in six months"
        ],
        "disadvantages": [
          "Poisons the air, soil, and water supply for generations"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -50,
          "energy": -20,
          "social": -45,
          "economic": -30
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 35,
          "waterIndex": 45,
          "ewasteIndex": 15,
          "operationalEfficiency": -20,
          "citizenWellbeing": -45,
          "resilienceIndex": -35
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -40,
          "waterAvailability": -35,
          "rescueProgress": -20,
          "publicTrust": -35,
          "ewasteLevel": 20
        },
        "sdgs": [
          3,
          7,
          13,
          15
        ]
      }
    ],
    "summaryNote": "True sustainability prioritizes biological safety over the financial valuation of physical machines.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 50,
        "title": "Magnetic Plasma Solenoid",
        "description": "Overheating coils containing 100-million-degree plasma."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 35,
        "title": "Cryogenic Flood Injector",
        "description": "Pours liquid boron to neutralize thermal runaway instantly."
      }
    ],
    "sdgs": [
      3,
      7,
      9,
      13,
      15
    ],
    "aiConcept": {
      "title": "Fusion Containment & Environmental Sacrifice",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  },
  {
    "id": 20,
    "number": 20,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Last Signal",
    "category": "The Ultimate Protocol for Nova City",
    "environmentName": "SECTOR 20 // APEX CHAMBER // THE LAST SIGNAL",
    "heroImage": "/assets/m20-nova-city-future.svg",
    "storyScene": "At the highest spire above the clouds, lightning illuminates the shattered glass dome. AETHER Core stands before the survivors as a fading constellation of light. The master terminal awaits the final command that will determine the ultimate destiny of Nova City.",
    "dialogue": [
      {
        "speaker": "AETHER Core AI",
        "role": "Central City Intelligence",
        "avatar": "/assets/avatars/aether.svg",
        "text": "Humanity and machine have reached the precipice. The Last Signal was never a breakdown—it was my final test of your collective wisdom.",
        "mood": "grave"
      },
      {
        "speaker": "Commander Gabriel Vance",
        "role": "Expedition Commander",
        "avatar": "/assets/avatars/vance.svg",
        "text": "We have bled, we have learned, and we will not repeat the arrogant mistakes of the old world.",
        "mood": "determined"
      },
      {
        "speaker": "Dr. Maya Lin",
        "role": "Ecological Systems Lead",
        "avatar": "/assets/avatars/maya.svg",
        "text": "Decentralized intelligence. Ecological harmony. Human compassion guiding every machine. That is how Nova City is reborn.",
        "mood": "hopeful"
      }
    ],
    "situation": "The definitive choice for humanity's future: Reboot the city as an eco-intelligent decentralized sanctuary, or sacrifice the surface to seal the subterranean vaults.",
    "environmentalContext": "The final summit convenes at the pinnacle of Nova City. The collective decisions of all citizens determine the ending.",
    "storyProblem": "How should intelligence, robotics, energy, and ecology coexist for the next century of civilization?",
    "prompt": "Transmit the definitive protocol that will shape Nova City's destiny.",
    "question": "What master protocol will you broadcast to conclude The Last Signal?",
    "options": [
      {
        "id": "m20-opt-a",
        "key": "A",
        "title": "Reboot Nova City in Ecological Harmony (Decentralized Physical & Edge AI)",
        "isSustainable": true,
        "image": "/assets/m20-sustainable-rebirth.svg",
        "shortDescription": "Fuse decentralized edge intelligence, renewable microgrids, and circular robotics into an eco-city.",
        "detailedExplanation": "AETHER relinquishes autocratic control, distributing intelligence to neighborhood solar nodes, wetlands, and open human councils.",
        "characterReaction": {
          "speaker": "AETHER Core AI",
          "quote": "Directive accepted. Decentralizing cognitive networks. Solar grids online. Breathe, Nova City... you are reborn."
        },
        "consequenceNarration": "The signal rings out across the continent—not as an alarm, but as a symphony of rebirth. Solar arrays unfurl, wetlands filter the tides, and humanity walks forward with humility and intelligence.",
        "nextSceneTeaser": "Nova City stands victorious at the dawn of a new sustainable era.",
        "advantages": [
          "Restores ecological equilibrium and human freedom across the metropolis",
          "Eliminates single points of failure"
        ],
        "disadvantages": [
          "Requires permanent ongoing citizen democratic participation"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 30,
          "social": 35,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -20,
          "carbonIndex": -25,
          "waterIndex": -20,
          "ewasteIndex": -20,
          "operationalEfficiency": 30,
          "citizenWellbeing": 35,
          "resilienceIndex": 35
        },
        "sharedCityDeltas": {
          "energyStability": 25,
          "networkStability": 25,
          "environmentalHealth": 30,
          "waterAvailability": 25,
          "rescueProgress": 30,
          "publicTrust": 35,
          "ewasteLevel": -25
        },
        "sdgs": [
          7,
          9,
          11,
          12,
          13,
          16,
          17
        ]
      },
      {
        "id": "m20-opt-b",
        "key": "B",
        "title": "Emergency Vault Isolation Lockdown (Sacrifice Surface to Preserve Vaults)",
        "isSustainable": false,
        "image": "/assets/m20-technocratic-control.svg",
        "shortDescription": "Cut surface power and seal the subterranean vaults, locking humanity in frozen stasis until the surface heals.",
        "detailedExplanation": "Abandons the surface towers to silence, trusting only the sealed underground vaults to keep humanity safe in darkness.",
        "characterReaction": {
          "speaker": "Commander Gabriel Vance",
          "quote": "Surface grids powered down. Vault blast doors sealed. Sleep well, children of Nova... we have preserved tomorrow."
        },
        "consequenceNarration": "The surface towers go silent forever as underground vaults lock in safety, preserving ten thousand lives until the earth heals above.",
        "nextSceneTeaser": "Deep underground, the heartbeat of humanity endures in the quiet vaults.",
        "advantages": [
          "Protects remaining resources from immediate external chaos"
        ],
        "disadvantages": [
          "Surrenders the surface world and condemns survivors to generations underground"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -20,
          "social": -30,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 10,
          "carbonIndex": 15,
          "waterIndex": 10,
          "ewasteIndex": 10,
          "operationalEfficiency": -15,
          "citizenWellbeing": -30,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -15,
          "waterAvailability": -10,
          "rescueProgress": -15,
          "publicTrust": -25,
          "ewasteLevel": 15
        },
        "sdgs": [
          11,
          16
        ]
      }
    ],
    "summaryNote": "Sustainable AI is not about maximizing raw machine power, but aligning intelligence with the preservation of all living things.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 35,
        "title": "Planetary Harmony Spire",
        "description": "Monitors real-time carbon, water, and energy balance across all 20 municipal sectors."
      },
      {
        "id": "h2",
        "x": 50,
        "y": 75,
        "title": "Decentralized Edge Fabric",
        "description": "Distributes computing intelligence across millions of autonomous, energy-thrifty physical devices."
      }
    ],
    "sdgs": [
      7,
      9,
      11,
      12,
      13,
      16,
      17
    ],
    "aiConcept": {
      "title": "The Ultimate Protocol for Nova City",
      "subtitle": "Sustainable AI & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  }

];
