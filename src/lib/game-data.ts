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
    "chapterTitle": "Chapter 1: The Cataclysm",
    "title": "The Last Signal",
    "category": "The Blackout Begins",
    "environmentName": "SECTOR 01 // CITADEL ROOFTOP",
    "heroImage": "/assets/game/environments/skyline-after.svg",
    "weather": "storm",
    "storyScene": "Rain lashes against the shattered glass of the rooftop observation deck. Below, the glowing towers of Nova City flicker violently, then die into pitch blackness. Static crackles through your radio: an eerie automated pulse known as The Last Signal.",
    "dialogue": [
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-shocked.svg",
        "text": "The whole skyline just went dark... Look down at District 7! The streetlights, the transit lines, everything is gone!",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-worried.svg",
        "text": "It wasn't a normal power trip, Maya. The main grid didn't fail—it was shut down from the inside. Someone threw the master breaker.",
        "mood": "grave"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "We have thousands of civilians trapped in the lower transit tubes. If we don't lock down the perimeter, panic will tear what's left of this city apart.",
        "mood": "urgent"
      }
    ],
    "situation": "Distress beacons from District 7 are jamming the emergency gateway. We have sixty seconds before the backup battery relays overheat and fry.",
    "environmentalContext": "Nova City experiences a sudden cascading blackout. Trapped civilians flood communications with unverified distress alerts.",
    "storyProblem": "The task force must decide whether to filter incoming beacons locally or stream raw telemetry to an already crashing mainframe.",
    "prompt": "Choose how to triage the incoming emergency distress telemetry.",
    "question": "How should Maya and Elias respond to the overwhelming flood of distress signals?",
    "options": [
      {
        "id": "m1-opt-a",
        "key": "A",
        "title": "Deploy Local Filter & Prioritize Life-or-Death Beacons",
        "isSustainable": true,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Run lightweight anomaly triage on the rooftop terminal to separate critical SOS vectors from background noise.",
        "detailedExplanation": "By filtering telemetry right at the local relay, the team isolates clean coordinates for trapped civilians while preventing system thermal burnout.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The filter worked! We isolated clean coordinates for thirty families trapped in the subway station below!"
        },
        "consequenceNarration": "Emergency channels clear instantaneously. The team pinpoints a trapped group inside the flooded subway tunnel before communications cut.",
        "nextSceneTeaser": "Sounds of rushing water echo through the subway ventilation shafts below.",
        "advantages": [
          "Prevents terminal processor burnout",
          "Isolates urgent human distress beacons in milliseconds"
        ],
        "disadvantages": [
          "Requires manual confirmation of secondary non-critical reports"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 20,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -12,
          "waterIndex": -15,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 20,
          "environmentalHealth": 5,
          "waterAvailability": 5,
          "rescueProgress": 18,
          "publicTrust": 15,
          "ewasteLevel": 0
        },
        "sdgs": [
          9,
          11,
          13
        ],
        "trustDeltas": {
          "maya": 10,
          "elias": 8,
          "adrian": -5,
          "ori": 10
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya noticed your restraint under crisis.",
          "positive": true
        }
      },
      {
        "id": "m1-opt-b",
        "key": "B",
        "title": "Force Full Unfiltered Ingestion to Mainframe",
        "isSustainable": false,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Stream every uncompressed data packet to central mainframe servers to preserve an exhaustive raw log.",
        "detailedExplanation": "Massive raw video and sensor packets saturate the failing relays, causing terminal processors to overheat and crash.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "The terminal melted its heatsink! We've blown the rooftop antenna and lost our telemetry link!"
        },
        "consequenceNarration": "The rooftop terminal shorts out in a shower of sparks, blinding the team to the exact coordinates of trapped survivors.",
        "nextSceneTeaser": "A muffled explosion shakes the street beneath your feet.",
        "advantages": [
          "Attempts complete data preservation"
        ],
        "disadvantages": [
          "Overheats terminal processors and cuts communications"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -20,
          "social": -15,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 18,
          "waterIndex": 20,
          "ewasteIndex": 3,
          "operationalEfficiency": -15,
          "citizenWellbeing": -15,
          "resilienceIndex": -18
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -22,
          "environmentalHealth": -5,
          "waterAvailability": -10,
          "rescueProgress": -10,
          "publicTrust": -15,
          "ewasteLevel": 8
        },
        "sdgs": [
          9,
          11
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian approved of your aggressive data push.",
          "positive": true
        }
      }
    ],
    "summaryNote": "Decentralized triage preserves critical communication relays during widespread blackouts.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 35,
        "title": "Rooftop Radio Terminal",
        "description": "Pours over distress packets from the dark city below."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Distant Fire Plume",
        "description": "Blackout causes transformer fires across District 7."
      }
    ],
    "sdgs": [
      9,
      11,
      13
    ],
    "aiConcept": {
      "title": "The Blackout Begins",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 1: The Cataclysm",
    "title": "Shadows in the Metro",
    "category": "Subterranean Exploration",
    "environmentName": "SECTOR 02 // FLOODED SUBWAY PLATFORM",
    "heroImage": "/assets/game/environments/subway-underground.svg",
    "weather": "rain",
    "storyScene": "Deep beneath the shattered avenue, water drips rhythmically into murky puddles on the subway tracks. Broken train cars rest on twisted rails. Through the gloom, a tiny blue light chirps from under a pile of fallen ceiling tiles.",
    "dialogue": [
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-worried.svg",
        "text": "Did you hear that? Something is beeping under the rubble near train car 3! It sounds like a little heartbeat.",
        "mood": "concerned"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-neutral.svg",
        "text": "Careful with the live cables, Noah. Elias, shine the torch over here... wait, it's not a person. It's a robot!",
        "mood": "determined"
      },
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-shocked.svg",
        "text": "*chirp... whirrrr-click!* [Optical visor flashes amber, scanning Maya with frantic blinking sensor rings]",
        "mood": "urgent"
      }
    ],
    "situation": "Water is pooling around high-voltage subway third-rails. Maya must free the trapped companion robot without triggering an electrical surge.",
    "environmentalContext": "Subway drainage pumps have failed, submerging train platforms in rising stormwater.",
    "storyProblem": "Rescuing the robotic companion requires careful physical maneuvering in hazardous standing water.",
    "prompt": "Choose how to extract the trapped companion robot.",
    "question": "How should Maya and Noah free the stranded scout robot?",
    "options": [
      {
        "id": "m2-opt-a",
        "key": "A",
        "title": "Use Rubber-Insulated Crowbars & Gentle Manual Levering",
        "isSustainable": true,
        "image": "/assets/game/story/story-first-ori.svg",
        "shortDescription": "Cut the third-rail circuit safely and pry the concrete slab off the robot with non-conductive tools.",
        "detailedExplanation": "Insulated tools prevent electrocution while carefully freeing ORI's damaged thruster pod without causing battery rupture.",
        "characterReaction": {
          "speaker": "ORI",
          "quote": "*happy chirp!* [Visor glows vibrant emerald green, bobbing into the air to nuzzle Maya's shoulder]"
        },
        "consequenceNarration": "ORI floats free into the air, chiming gratefully. The little companion activates its headlight to reveal a hidden escape tunnel.",
        "nextSceneTeaser": "ORI's headlight illuminates a heavy vault door sealed in the tunnel wall.",
        "advantages": [
          "Safely rescues ORI with zero electric shock risk",
          "Preserves the robot's sensor suite"
        ],
        "disadvantages": [
          "Takes slightly longer than brute force pulling"
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
          "ewasteIndex": -5,
          "operationalEfficiency": 22,
          "citizenWellbeing": 25,
          "resilienceIndex": 22
        },
        "sharedCityDeltas": {
          "energyStability": 8,
          "networkStability": 12,
          "environmentalHealth": 6,
          "waterAvailability": 0,
          "rescueProgress": 20,
          "publicTrust": 18,
          "ewasteLevel": -5
        },
        "sdgs": [
          9,
          11
        ],
        "requiredItemId": "key_subway_master",
        "trustDeltas": {
          "maya": 12,
          "elias": 6,
          "adrian": 5,
          "noah": 8
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya was moved by your rescue of the transit sector.",
          "positive": true
        }
      },
      {
        "id": "m2-opt-b",
        "key": "B",
        "title": "Yank with Powered Winch Cable",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Hook a steel tow cable to the robot chassis and pull with full winch motor torque.",
        "detailedExplanation": "The brute force yank fractures the robot's outer casing and snaps high-voltage conduit, discharging sparks into the water.",
        "characterReaction": {
          "speaker": "ORI",
          "quote": "*bzzzzt-whine!* [Sparks shower from thruster casing as visor dims to flickering sad gray]"
        },
        "consequenceNarration": "ORI's thruster arm snaps under the violent pull. The robot is freed, but heavily damaged, and sparks singe Noah's jacket.",
        "nextSceneTeaser": "The sound of groaning metal echoes as the ceiling begins to crack.",
        "advantages": [
          "Clears the rubble in seconds"
        ],
        "disadvantages": [
          "Damages the companion robot and creates an electrical shock hazard"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -20,
          "social": -15,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 12,
          "carbonIndex": 10,
          "waterIndex": 0,
          "ewasteIndex": 5,
          "operationalEfficiency": -14,
          "citizenWellbeing": -15,
          "resilienceIndex": -12
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -15,
          "environmentalHealth": -4,
          "waterAvailability": 0,
          "rescueProgress": -8,
          "publicTrust": -14,
          "ewasteLevel": 8
        },
        "sdgs": [
          9,
          11
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya struggled with leaving subway civilians behind.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Careful physical rescue protects delicate electronic hardware from permanent destruction.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 55,
        "title": "Trapped Companion Robot",
        "description": "Chassis pinned beneath a fallen ceiling slab."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 70,
        "title": "Electrified Third Rail",
        "description": "Lethal voltage hazard in standing water."
      }
    ],
    "sdgs": [
      9,
      11
    ],
    "aiConcept": {
      "title": "Subterranean Exploration",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 1: The Cataclysm",
    "title": "The Silent Spire",
    "category": "Communication Network Emergency",
    "environmentName": "SECTOR 03 // MOUNT VESPER RELAY",
    "heroImage": "/assets/game/environments/rooftop-overlook.svg",
    "weather": "fog",
    "storyScene": "Frost coats the microwave dishes perched high atop Mount Vesper. Below, dense fog blankets the city valleys. The main radio repeater is burning through its emergency batteries, struggling to transmit uncompressed broadcasts.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-worried.svg",
        "text": "The southern refugee camps are completely isolated. The repeater's batteries will die in forty minutes unless we compress our transmission payloads.",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "We can strip the telemetry down to 8-bit quantized packets. We don't need high-definition 4K feeds to tell people where clean water is.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "Security protocols mandate encrypted high-bandwidth video of all checkpoints. I need to see who is moving in those valleys!",
        "mood": "conflicted"
      }
    ],
    "situation": "Mount Vesper's emergency capacitors are at 18% charge. Continuing uncompressed video broadcasts will blackout all communications in less than an hour.",
    "environmentalContext": "Severe mountain fog prevents solar battery charging on the city's highest communication ridge.",
    "storyProblem": "The team must choose between high-bandwidth security surveillance and low-power compressed civilian broadcasts.",
    "prompt": "Choose the transmission payload format for the mountain relay.",
    "question": "How should Dr. Lena and Elias configure the emergency mountain broadcast?",
    "options": [
      {
        "id": "m3-opt-a",
        "key": "A",
        "title": "Deploy 8-Bit Quantized Text & Medical Audio Streams",
        "isSustainable": true,
        "image": "/assets/game/story/story-shelter.svg",
        "shortDescription": "Compress transmission weights by 75% so mountain transceivers can operate on solar trickle charge.",
        "detailedExplanation": "Quantization cuts wattage by over 70%, keeping the lifeline open for southern refugee shelters across all four valleys.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Battery life extended by six days! All four valley shelters are receiving our emergency medical coordinates!"
        },
        "consequenceNarration": "Clear voice broadcasts reach 10,000 isolated survivors, guiding them toward the nearest dry shelter.",
        "nextSceneTeaser": "A faint response arrives from an old abandoned hospital in District 4.",
        "advantages": [
          "Extends battery runtime from 40 minutes to 6 days",
          "Reconnects southern civilian shelters"
        ],
        "disadvantages": [
          "Disables high-resolution overhead security video"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 25,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -12,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 14,
          "networkStability": 18,
          "environmentalHealth": 6,
          "waterAvailability": 5,
          "rescueProgress": 16,
          "publicTrust": 15,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          9,
          13
        ],
        "requiredItemId": "battery_solid_state",
        "trustDeltas": {
          "lena": 12,
          "maya": 5,
          "adrian": -6
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Dr. Lena appreciated your disciplined medical triage.",
          "positive": true
        }
      },
      {
        "id": "m3-opt-b",
        "key": "B",
        "title": "Maintain Uncompressed 4K Video Surveillance Feeds",
        "isSustainable": false,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Burn remaining battery power streaming high-resolution checkpoint video back to the Citadel.",
        "detailedExplanation": "Transmitters overheat within twenty-five minutes, completely cutting off southern refugee shelters in freezing weather.",
        "characterReaction": {
          "speaker": "Commander Adrian",
          "quote": "The repeater went black! We've lost total contact with the southern valley camps!"
        },
        "consequenceNarration": "Batteries drain to zero, severing communications with the southern valleys and leaving thousands stranded in the dark.",
        "nextSceneTeaser": "Sirens begin wailing through the downtown streets.",
        "advantages": [
          "Maintains brief high-definition security camera oversight"
        ],
        "disadvantages": [
          "Causes total communications blackout within thirty minutes"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -25,
          "social": -20,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 16,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -20,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -20,
          "environmentalHealth": -6,
          "waterAvailability": -5,
          "rescueProgress": -12,
          "publicTrust": -20,
          "ewasteLevel": 6
        },
        "sdgs": [
          7,
          9
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian backed your bid to appease the crowd.",
          "positive": true
        }
      }
    ],
    "summaryNote": "Algorithmic optimization reduces power draw, ensuring critical lifelines remain online during crises.",
    "hotspots": [
      {
        "id": "h1",
        "x": 20,
        "y": 30,
        "title": "Microwave Dish Array",
        "description": "Points toward the distant southern refugee valleys."
      },
      {
        "id": "h2",
        "x": 80,
        "y": 70,
        "title": "Solar Capacitor Bank",
        "description": "Freezing in the mountain fog without direct sunlight."
      }
    ],
    "sdgs": [
      7,
      9,
      13
    ],
    "aiConcept": {
      "title": "Communication Network Emergency",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 1: The Cataclysm",
    "title": "The Gates of Panic",
    "category": "Crisis Governance",
    "environmentName": "SECTOR 04 // DOWNTOWN PERIMETER GATE",
    "heroImage": "/assets/game/environments/downtown-abandoned.svg",
    "weather": "rain",
    "storyScene": "Torrential rain pounds against the heavy iron security gates at the perimeter of Downtown. Hundreds of shivering citizens huddle in the street with flashlights, seeking admission to the dry upper tier. Commander Adrian's security drones hover above, searchlights blinding the crowd.",
    "dialogue": [
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "The crowd is getting restless. If they breach Gate 4, our remaining food stores will be looted in minutes. Deploy acoustic dispersal drones!",
        "mood": "urgent"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-angry.svg",
        "text": "Adrian, look at them! Those are mothers and children from the flooded subway, not looters! If you fire on them, you'll start a riot!",
        "mood": "conflicted"
      },
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-sad.svg",
        "text": "Maya is right! I know people out there—that's my school teacher and her family! Let them in!",
        "mood": "urgent"
      }
    ],
    "situation": "Adrian wants to use sound cannons to disperse the crowd, while Maya advocates for transparent human-led intake triage.",
    "environmentalContext": "Floodwaters are rising in the lower streets, forcing families toward the perimeter gates.",
    "storyProblem": "Deciding between authoritarian perimeter enforcement and transparent community-led intake.",
    "prompt": "Choose the crowd management strategy at the perimeter gate.",
    "question": "How should the Task Force handle the frightened crowd at Gate 4?",
    "options": [
      {
        "id": "m4-opt-a",
        "key": "A",
        "title": "Open Side Doors for Transparent Family & Medical Triage",
        "isSustainable": true,
        "image": "/assets/game/story/story-survivors.svg",
        "shortDescription": "Maya, Noah, and civilian volunteers manage the gates directly, providing warm blankets and orderly admission.",
        "detailedExplanation": "Human empathy and clear communication de-escalate tension. Vulnerable elders and children are safely ushered into dry shelter wards.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The crowd calmed down the moment we handed out warm blankets. Triage lines are moving safely."
        },
        "consequenceNarration": "Transparent human triage avoids violence. Five hundred civilians are safely sheltered without a single injury.",
        "nextSceneTeaser": "A loud rumble echoes from the lower flooded avenues: drainage pump stations are jamming.",
        "advantages": [
          "Preserves human dignity and builds community trust",
          "Avoids violent stampedes"
        ],
        "disadvantages": [
          "Requires intense manual coordination in the cold"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 10,
          "energy": 15,
          "social": 35,
          "economic": 10
        },
        "cityMetricDeltas": {
          "energyIndex": -5,
          "carbonIndex": -5,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 18,
          "citizenWellbeing": 35,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 5,
          "networkStability": 10,
          "environmentalHealth": 5,
          "waterAvailability": 0,
          "rescueProgress": 20,
          "publicTrust": 30,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          11,
          16
        ],
        "requiredItemId": "doc_water_memo",
        "trustDeltas": {
          "lena": 15,
          "elias": 10,
          "adrian": -5
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena recorded your commitment to pure water.",
          "positive": true
        }
      },
      {
        "id": "m4-opt-b",
        "key": "B",
        "title": "Fire Acoustic Dispersal Cannons & Barricade Gates",
        "isSustainable": false,
        "image": "/assets/game/story/story-betrayal.svg",
        "shortDescription": "Unleash high-frequency sound waves to force the civilian crowd back into the flooded streets.",
        "detailedExplanation": "Panic erupts as painful sound waves disorient the crowd. People stampede into rising water, destroying barricades and inciting open revolt.",
        "characterReaction": {
          "speaker": "Commander Adrian",
          "quote": "The barricades gave way! People are tearing down our perimeter in rage!"
        },
        "consequenceNarration": "Acoustic weapons cause panic and injuries. The crowd breaks the gates in fury, destroying medical supplies and severing public trust.",
        "nextSceneTeaser": "Rushing floodwaters crash through the breached lower gate.",
        "advantages": [
          "Maintains perimeter boundary for fifteen minutes"
        ],
        "disadvantages": [
          "Causes injuries, stampedes, and destroys civil cooperation"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -15,
          "social": -40,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 12,
          "carbonIndex": 10,
          "waterIndex": 0,
          "ewasteIndex": 4,
          "operationalEfficiency": -20,
          "citizenWellbeing": -40,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -15,
          "environmentalHealth": -5,
          "waterAvailability": 0,
          "rescueProgress": -15,
          "publicTrust": -35,
          "ewasteLevel": 8
        },
        "sdgs": [
          11,
          16
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena was appalled by the chemical runoff.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Compassionate, human-in-the-loop governance defuses crises where automated force incites panic.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 50,
        "title": "Gatehouse Barricade",
        "description": "Separates the dry upper tier from the flooded streets."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 40,
        "title": "Acoustic Dispersal Turret",
        "description": "Armed with painful high-decibel crowd control transmitters."
      }
    ],
    "sdgs": [
      3,
      11,
      16
    ],
    "aiConcept": {
      "title": "Crisis Governance",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 2: The Rising Waters",
    "title": "The Flooded Canals",
    "category": "Subsea Infrastructure",
    "environmentName": "SECTOR 05 // FLOODED LOWER BASIN",
    "heroImage": "/assets/game/environments/flooded-street.svg",
    "weather": "rain",
    "storyScene": "Brown seawater pours through breached sea gates, turning former pedestrian streets into roaring canals. Passenger cars sit submerged to their windshields. The main drainage intake turbine has jammed with storm debris.",
    "dialogue": [
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-worried.svg",
        "text": "The main intake turbine is choked with wooden pallets and plastic scrap. If it seizes, the basement generators of the Central Hospital will drown.",
        "mood": "urgent"
      },
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-neutral.svg",
        "text": "*whirrr... beep-boop!* [Deploys small submersible sonar scanner, highlighting a jammed metal beam across the intake blades]",
        "mood": "determined"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "ORI found the obstruction! Elias, can we use ORI's micro-thrusters to guide a tether line down without overloading its motor?",
        "mood": "hopeful"
      }
    ],
    "situation": "Underwater intake valves must be cleared before rising canal water floods the hospital backup power generators.",
    "environmentalContext": "Sea walls have cracked, sending ocean tidal surges deep into downtown districts.",
    "storyProblem": "Deciding between precision robotic tethering and high-RPM dredging that risks destroying the municipal turbine.",
    "prompt": "Choose how to clear the underwater turbine grates.",
    "question": "How should Maya, Elias, and ORI clear the submerged intake turbine?",
    "options": [
      {
        "id": "m5-opt-a",
        "key": "A",
        "title": "Deploy ORI with Precision Sonar & Winch Tether",
        "isSustainable": true,
        "image": "/assets/game/story/story-first-ori.svg",
        "shortDescription": "Let ORI navigate through the murky water to latch a steel winch hook onto the jammed metal beam.",
        "detailedExplanation": "ORI's small profile easily avoids turbine blades, hooking the obstruction so a surface winch can pull it free safely.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "The beam is out! The turbine spun back up and water levels are already dropping six inches a minute!"
        },
        "consequenceNarration": "Intelligent robotic guidance clears the turbine without damage. Millions of gallons drain away from the hospital basement.",
        "nextSceneTeaser": "A radio distress call from the Central Hospital ICU breaks through.",
        "advantages": [
          "Clears obstruction with zero turbine damage",
          "Prevents motor burnout"
        ],
        "disadvantages": [
          "Requires precision piloting by ORI in muddy current"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 20,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -10,
          "waterIndex": -25,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 22,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 10,
          "environmentalHealth": 18,
          "waterAvailability": 20,
          "rescueProgress": 18,
          "publicTrust": 18,
          "ewasteLevel": 0
        },
        "sdgs": [
          6,
          9,
          14
        ],
        "trustDeltas": {
          "noah": 15,
          "elias": 8,
          "adrian": 5
        },
        "trustNotice": {
          "character": "Noah Chen",
          "text": "Noah praised your trust in his drone mesh.",
          "positive": true
        }
      },
      {
        "id": "m5-opt-b",
        "key": "B",
        "title": "Fire Up Turbine to Maximum Reverse RPM",
        "isSustainable": false,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Force the giant turbine to maximum reverse velocity to blast debris out with pure hydraulic power.",
        "detailedExplanation": "The metal beam catches on the spinning titanium blades, shearing the driveshaft and permanently destroying the pump.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "The driveshaft snapped! The whole turbine is destroyed and water is pouring into the generator rooms!"
        },
        "consequenceNarration": "The turbine shatters with a deafening metallic screech. Seawater rushes into hospital basements, drowning backup generators.",
        "nextSceneTeaser": "Sirens wail as the hospital loses all electrical power.",
        "advantages": [
          "Requires no diving or robotic maneuvering"
        ],
        "disadvantages": [
          "High risk of shearing blades and permanent turbine destruction"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -25,
          "energy": -20,
          "social": -25,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 15,
          "waterIndex": 30,
          "ewasteIndex": 5,
          "operationalEfficiency": -18,
          "citizenWellbeing": -25,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -12,
          "environmentalHealth": -18,
          "waterAvailability": -22,
          "rescueProgress": -15,
          "publicTrust": -20,
          "ewasteLevel": 10
        },
        "sdgs": [
          6,
          9
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Noah Chen",
          "text": "Noah mourned the loss of his flagship drone.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Embodied Physical AI uses sensory feedback to solve mechanical jams without destructive brute force.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 40,
        "title": "Submerged Intake Grate",
        "description": "Jammed with structural steel and ocean driftwood."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 65,
        "title": "Submerged Sedan",
        "description": "Water level is at four feet and climbing."
      }
    ],
    "sdgs": [
      6,
      9,
      14
    ],
    "aiConcept": {
      "title": "Subsea Infrastructure",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 2: The Rising Waters",
    "title": "The Hospital Lifeline",
    "category": "Critical Medical Power",
    "environmentName": "SECTOR 06 // CENTRAL TRAUMA WARD",
    "heroImage": "/assets/game/environments/hospital-abandoned.svg",
    "weather": "rain",
    "storyScene": "Red emergency strobes pulse along the cracked tiled walls of the hospital trauma corridor. Moss grows through floor tiles near broken skylights. In the ICU ward, battery-powered ventilators are beeping their final low-voltage warnings.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-worried.svg",
        "text": "The ventilators in Ward 3 have twelve minutes of battery left. We have sixty-four critical patients who cannot breathe on their own.",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "We have one mobile emergency battery bank in our rover. We can plug it directly into the ICU oxygen loop right now.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "Hold on! That battery was earmarked for the security radar and automated perimeter towers! If we drain it here, the outer perimeter goes blind!",
        "mood": "conflicted"
      }
    ],
    "situation": "A mobile battery bank must be dedicated either to saving 64 ICU patients or powering perimeter security radar towers.",
    "environmentalContext": "Hospital electrical feeders have been severed by subterranean flooding.",
    "storyProblem": "Moral conflict between safeguarding human lives directly in the hospital and maintaining military radar surveillance.",
    "prompt": "Choose the energy allocation for the mobile battery carrier.",
    "question": "Where should the team route the mobile emergency battery power?",
    "options": [
      {
        "id": "m6-opt-a",
        "key": "A",
        "title": "Direct Power Line to ICU Ventilators & Oxygen Concentrators",
        "isSustainable": true,
        "image": "/assets/game/story/story-rescue.svg",
        "shortDescription": "Bypass non-essential administrative circuits and route 100% of stored DC power to intensive care ventilators.",
        "detailedExplanation": "Sustains 64 critical patients for 24 continuous hours while volunteers use manual flashlights in hallways.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Oxygen pressure is back to normal! All sixty-four patients are stable and breathing comfortably!"
        },
        "consequenceNarration": "Prioritizing human life saves all sixty-four patients. Gratitude spreads through the hospital as medical staff weep with relief.",
        "nextSceneTeaser": "A chemical vapor alarm triggers in the pharmaceutical basement below.",
        "advantages": [
          "Saves 64 human lives in critical care",
          "Zero electrical conversion loss"
        ],
        "disadvantages": [
          "Temporarily deactivates perimeter security radar"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 20,
          "social": 35,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 35,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 8,
          "environmentalHealth": 8,
          "waterAvailability": 0,
          "rescueProgress": 25,
          "publicTrust": 30,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          7,
          11
        ],
        "requiredItemId": "ori_memory_shard",
        "trustDeltas": {
          "ori": 18,
          "elias": 12,
          "maya": 6
        },
        "trustNotice": {
          "character": "ORI",
          "text": "ORI synchronized with your ethical edge heuristics.",
          "positive": true
        }
      },
      {
        "id": "m6-opt-b",
        "key": "B",
        "title": "Route Power to Perimeter Security Radar & Automated Turrets",
        "isSustainable": false,
        "image": "/assets/game/story/story-betrayal.svg",
        "shortDescription": "Dedicate the battery to scanning the outer perimeter for looters while letting hospital backup batteries drain.",
        "detailedExplanation": "The security radar sweeps empty streets while intensive care ventilators flatline in the dark.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "The ventilators stopped... we couldn't bag them all by hand in time. We lost eighteen people."
        },
        "consequenceNarration": "Ventilators die, resulting in eighteen civilian casualties while security radar scans empty flooded avenues.",
        "nextSceneTeaser": "A chemical leak spreads through the ventilation shafts.",
        "advantages": [
          "Maintains 100% automated radar coverage of outer streets"
        ],
        "disadvantages": [
          "Direct loss of eighteen civilian lives in the hospital"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -20,
          "social": -45,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 12,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -45,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -10,
          "environmentalHealth": -6,
          "waterAvailability": 0,
          "rescueProgress": -20,
          "publicTrust": -35,
          "ewasteLevel": 6
        },
        "sdgs": [
          3,
          7
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "ORI",
          "text": "ORI detected critical thermal strain in core sectors.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Responsible leadership always values human life and medical care above military hardware surveillance.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 40,
        "title": "ICU Ventilator Station",
        "description": "Powers life support for dozens of critically ill survivors."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Mobile Battery Pack",
        "description": "Contains 500 kilowatt-hours of clean swappable energy."
      }
    ],
    "sdgs": [
      3,
      7,
      11
    ],
    "aiConcept": {
      "title": "Critical Medical Power",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 2: The Rising Waters",
    "title": "The Chemical Vaults",
    "category": "Hazardous Materials Containment",
    "environmentName": "SECTOR 07 // SUB-SURFACE CHEMICAL LABS",
    "heroImage": "/assets/game/environments/research-facility-deserted.svg",
    "weather": "fog",
    "storyScene": "Corrosive green-tinted vapor drifts across the floor of the underground pharmaceutical storage lab. Broken fluorescent fixtures flicker above pools of spilled solvent. A hairline crack in an industrial cooling tank is hissing violently.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-neutral.svg",
        "text": "That tank holds pressurized fluorochemical refrigerant. If it breaches, it will poison the underground aquifer that feeds the shelter's drinking water.",
        "mood": "urgent"
      },
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-worried.svg",
        "text": "*beep-beep-click!* [Thermal sensor sweeps the pipes, painting a bright red thermal plume on a corroded brass valve]",
        "mood": "concerned"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "The vapor is flammable. We cannot use any tools that create electrical sparks. It has to be sealed cold.",
        "mood": "determined"
      }
    ],
    "situation": "A hairline fracture in a pressurized refrigerant conduit threatens to poison the drinking aquifer.",
    "environmentalContext": "Subterranean laboratory basements have been fractured by seismic tremors.",
    "storyProblem": "Choosing between non-sparking cryogenic foam sealing and brute-force exhaust venting into the streets.",
    "prompt": "Choose the containment method for the volatile chemical conduit.",
    "question": "How should the team seal the fractured refrigerant pipe?",
    "options": [
      {
        "id": "m7-opt-a",
        "key": "A",
        "title": "Cold Infrared Sensor Guiding & Cryo-Seal Foam Injection",
        "isSustainable": true,
        "image": "/assets/game/story/story-first-ori.svg",
        "shortDescription": "Let ORI illuminate the fracture with cold infrared light and inject fast-hardening cryogenic sealing foam.",
        "detailedExplanation": "Non-sparking, cold chemical foam bonds directly over the crack in under sixty seconds, neutralizing the leak completely.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "The foam bonded! Pressure has normalized and zero toxic vapor reached the aquifer!"
        },
        "consequenceNarration": "The leak is permanently contained without an ignition spark, protecting the drinking aquifer for thousands of survivors.",
        "nextSceneTeaser": "In the maintenance yard, piles of damaged machines await the scrap incinerator.",
        "advantages": [
          "Zero spark or explosion risk in explosive atmosphere",
          "Protects regional drinking water"
        ],
        "disadvantages": [
          "Consumes the team's last canister of specialized cryo-foam"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 20,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -5,
          "carbonIndex": -20,
          "waterIndex": -30,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 25,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 8,
          "networkStability": 10,
          "environmentalHealth": 25,
          "waterAvailability": 22,
          "rescueProgress": 18,
          "publicTrust": 20,
          "ewasteLevel": 0
        },
        "sdgs": [
          3,
          6,
          9,
          12
        ],
        "trustDeltas": {
          "lena": 10,
          "maya": 10,
          "adrian": -6
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya thanked you for safeguarding the residential perimeter.",
          "positive": true
        }
      },
      {
        "id": "m7-opt-b",
        "key": "B",
        "title": "Activate Industrial Roof Exhaust Fans to Blow Fumes Outside",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Turn on high-voltage ventilation fans to blow all toxic gases straight out into the residential streets above.",
        "detailedExplanation": "A motor spark ignites volatile vapors, blowing out the ceiling and venting toxic chemical clouds into civilian tents.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "The fan motor sparked! The ceiling blew out and toxic smoke is drifting right toward District 4!"
        },
        "consequenceNarration": "An electrical spark triggers an explosion that rips through the ceiling, forcing three hundred civilians to evacuate their homes in gas masks.",
        "nextSceneTeaser": "Survivors flee into the industrial scrapyard for shelter.",
        "advantages": [
          "Clears underground lab visibility rapidly"
        ],
        "disadvantages": [
          "Ignites an explosion and poisons outdoor residential neighborhoods"
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
          "carbonIndex": 25,
          "waterIndex": 35,
          "ewasteIndex": 5,
          "operationalEfficiency": -20,
          "citizenWellbeing": -35,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -12,
          "environmentalHealth": -30,
          "waterAvailability": -25,
          "rescueProgress": -15,
          "publicTrust": -30,
          "ewasteLevel": 10
        },
        "sdgs": [
          3,
          6,
          12
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian secured the industrial depots first.",
          "positive": true
        }
      }
    ],
    "summaryNote": "Precision optical sensing and cold repair protect delicate biospheres from chemical contamination.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 40,
        "title": "Fractured Refrigerant Flange",
        "description": "Hissing volatile gas into the basement."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 70,
        "title": "Drinking Water Aquifer Well",
        "description": "Primary freshwater intake for civilian shelters."
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 2: The Rising Waters",
    "title": "The Scrapyard Graveyard",
    "category": "Circular Electronics & E-Waste",
    "environmentName": "SECTOR 08 // AUTOMATED MAINTENANCE DEPOT",
    "heroImage": "/assets/game/environments/industrial-district.svg",
    "weather": "embers",
    "storyScene": "Mountains of discarded robots, broken drones, and dented solar panels stretch across the muddy industrial yard. Massive shredder blades grind in the background, preparing to crush hundreds of damaged machines for disposal.",
    "dialogue": [
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-worried.svg",
        "text": "Look at all these scout bots! Most of them just have a scratched camera lens or a flat battery! Why are they shredding them?",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "Old corporate policy. When a machine breaks, warranty rules say crush it and buy a new one. But nobody is shipping new parts to Nova City anymore.",
        "mood": "concerned"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "Then the policy ends today. If we salvage these battery packs and optical sensors, we can build a fleet of twenty search rovers to find missing families.",
        "mood": "hopeful"
      }
    ],
    "situation": "Automated shredders are about to destroy hundreds of usable robotic platforms and lithium batteries.",
    "environmentalContext": "Severe supply chain isolation makes discarded electronic components the only source of replacement hardware.",
    "storyProblem": "Choosing between automated shredding and establishing a circular component repair workshop.",
    "prompt": "Choose the robotics maintenance policy for the maintenance depot.",
    "question": "How should Maya and Elias handle the discarded robotic hardware?",
    "options": [
      {
        "id": "m8-opt-a",
        "key": "A",
        "title": "Halt Shredder & Establish a Modular Circular Salvage Workshop",
        "isSustainable": true,
        "image": "/assets/game/story/story-shelter.svg",
        "shortDescription": "Disassemble damaged rovers to harvest standardized motors, micro-controllers, and healthy lithium cells.",
        "detailedExplanation": "Elias and Noah refurbish thirty-two search rovers in three hours, saving tons of electronic waste from leaching toxic cadmium into the soil.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "We got twenty-four rovers working again! ORI is leading them on a neighborhood search patrol right now!"
        },
        "consequenceNarration": "Modular salvage keeps search teams equipped with functioning scout rovers, doubling rescue capacity across the district.",
        "nextSceneTeaser": "A heatwave hits the city, and the cooling towers of the power station begin to billow steam.",
        "advantages": [
          "Recovers 32 functional search rovers at zero cost",
          "Prevents toxic lithium landfill contamination"
        ],
        "disadvantages": [
          "Requires two hours of manual testing and disassembly"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 25,
          "social": 25,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -15,
          "waterIndex": 0,
          "ewasteIndex": -30,
          "operationalEfficiency": 25,
          "citizenWellbeing": 20,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 12,
          "environmentalHealth": 22,
          "waterAvailability": 5,
          "rescueProgress": 20,
          "publicTrust": 18,
          "ewasteLevel": -28
        },
        "sdgs": [
          9,
          12,
          13
        ],
        "trustDeltas": {
          "adrian": 12,
          "elias": 10,
          "maya": 8
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian respected your decisive order in the vault.",
          "positive": true
        }
      },
      {
        "id": "m8-opt-b",
        "key": "B",
        "title": "Let the Shredder Crush All Hardware into Scrap",
        "isSustainable": false,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Comply with corporate disposal protocol and dump all crushed electronics into perimeter landfill trenches.",
        "detailedExplanation": "Crushes irreplaceable electronics into dust while broken lithium cells catch fire, releasing toxic fumes into the air.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "A crushed battery caught fire in the shredder! The whole scrap yard is choking in toxic lithium smoke!"
        },
        "consequenceNarration": "Irreplaceable microchips are pulverized. Toxic battery fires pollute the depot air and leave rescue teams without scout rovers.",
        "nextSceneTeaser": "Thick smoke drifts toward the damaged regional power station.",
        "advantages": [
          "Clears depot floor space rapidly"
        ],
        "disadvantages": [
          "Destroys scarce silicon hardware and triggers toxic battery fires"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -15,
          "social": -20,
          "economic": -30
        },
        "cityMetricDeltas": {
          "energyIndex": 10,
          "carbonIndex": 20,
          "waterIndex": 15,
          "ewasteIndex": 35,
          "operationalEfficiency": -18,
          "citizenWellbeing": -20,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -10,
          "environmentalHealth": -25,
          "waterAvailability": -15,
          "rescueProgress": -12,
          "publicTrust": -15,
          "ewasteLevel": 25
        },
        "sdgs": [
          12,
          14,
          15
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian warned of security compromises in the shelter.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Circular engineering extracts longevity from existing machines rather than treating technology as disposable trash.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 55,
        "title": "Salvaged Rover Chassis",
        "description": "Modular chassis with undamaged motors and LiDAR."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 40,
        "title": "Industrial Shredder Hopper",
        "description": "Tears through electronics, releasing heavy metal dust."
      }
    ],
    "sdgs": [
      9,
      12,
      13
    ],
    "aiConcept": {
      "title": "Circular Electronics & E-Waste",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "environmentName": "SECTOR 09 // POWER STATION COOLING COMPLEX",
    "heroImage": "/assets/game/environments/power-station-damaged.svg",
    "weather": "fog",
    "storyScene": "Massive concrete cooling towers vibrate with a deafening roar, spewing clouds of superheated steam into the twilight sky. The power station is running at thermal redline, evaporating twenty million gallons of drinking water each day just to cool idle servers.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-angry.svg",
        "text": "The server banks are boiling away the municipal drinking reservoir! Residential taps in District 4 are already sucking air!",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "We can switch the cooling loop to closed-loop dielectric liquid immersion and throttle down non-essential AI batch jobs.",
        "mood": "determined"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "If you throttle those servers, the surveillance network will lose facial tracking resolution! We need maximum compute power!",
        "mood": "conflicted"
      }
    ],
    "situation": "Evaporative data center cooling is draining the city's drinking reservoir during an intense heatwave.",
    "environmentalContext": "Severe heatwave strains the power grid while servers consume potable water to cool GPU clusters.",
    "storyProblem": "Choosing between preserving drinking water for civilians and running unconstrained high-compute models.",
    "prompt": "Choose the data center cooling and computational workload strategy.",
    "question": "How should the Task Force cool the central power station server banks?",
    "options": [
      {
        "id": "m9-opt-a",
        "key": "A",
        "title": "Deploy Closed-Loop Immersion Cooling & Freeze Non-Essential AI",
        "isSustainable": true,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Submerge electronics in dielectric fluid to recycle heat and pause idle AI processing jobs.",
        "detailedExplanation": "Stops drinking water evaporation completely, routing captured server heat to warm hospital water tanks instead.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Water evaporation stopped! Clean drinking water is flowing back into District 4 residential taps!"
        },
        "consequenceNarration": "Closed-loop cooling protects the drinking reservoir. Clean water flows back to 200,000 citizens without crashing critical telemetry.",
        "nextSceneTeaser": "A sudden solar power surge ripples across the Phoenix solar arrays.",
        "advantages": [
          "Saves millions of gallons of drinking water",
          "Reuses server heat for community needs"
        ],
        "disadvantages": [
          "Requires pausing non-essential generative algorithms"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 25,
          "social": 30,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -12,
          "carbonIndex": -15,
          "waterIndex": -40,
          "ewasteIndex": 0,
          "operationalEfficiency": 20,
          "citizenWellbeing": 30,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 12,
          "environmentalHealth": 25,
          "waterAvailability": 35,
          "rescueProgress": 16,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          6,
          7,
          9,
          12
        ],
        "trustDeltas": {
          "lena": 12,
          "noah": 8,
          "adrian": -5
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena commended your equitable supply distribution.",
          "positive": true
        }
      },
      {
        "id": "m9-opt-b",
        "key": "B",
        "title": "Keep Evaporative Chillers Blasting at Maximum Throughput",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Pump the remaining drinking reservoir water through cooling towers to keep all servers at 100% capacity.",
        "detailedExplanation": "Empties the reservoir completely in three days, leaving hospitals and refugee camps without drinking water.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The reservoir is empty! Families are fighting in the streets over emergency water bottles!"
        },
        "consequenceNarration": "The reservoir runs dry. Riots erupt across downtown as citizens discover their drinking water was evaporated for server cooling.",
        "nextSceneTeaser": "Severe power surges destabilize the regional solar substations.",
        "advantages": [
          "Maintains 100% compute speed for all algorithms"
        ],
        "disadvantages": [
          "Drains the city's drinking reservoir and causes water riots"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -40,
          "energy": -20,
          "social": -45,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 20,
          "waterIndex": 45,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -45,
          "resilienceIndex": -28
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -10,
          "environmentalHealth": -28,
          "waterAvailability": -40,
          "rescueProgress": -12,
          "publicTrust": -35,
          "ewasteLevel": 6
        },
        "sdgs": [
          6,
          7,
          12
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian fortified security units first.",
          "positive": true
        }
      }
    ],
    "summaryNote": "Sustainable computing accounts for water footprints and ecological limits alongside electrical watts.",
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
        "title": "Municipal Drinking Reservoir",
        "description": "Water level is dropping rapidly during the heatwave."
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "environmentName": "SECTOR 10 // PHOENIX SOLAR FARMS",
    "heroImage": "/assets/game/environments/rooftop-overlook.svg",
    "weather": "clear",
    "storyScene": "Midday sun beats down relentlessly on miles of photovoltaic panels outside the city limits. Inverters hum at a high whine. The automated grid controller is threatening to dump excess power rather than routing it to community battery banks.",
    "dialogue": [
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "The midday solar surge is peaking at 400 megawatts over baseline. The automated system wants to ground all that power and waste it!",
        "mood": "urgent"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "We can't waste clean sunshine! Noah, can we hook up our fleet of thirty refurbished rovers to absorb the surplus charge?",
        "mood": "hopeful"
      },
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-happy.svg",
        "text": "Yes! If we park the rovers at the substation chargers, every battery will be full by sunset, ready to power the shelters tonight!",
        "mood": "hopeful"
      }
    ],
    "situation": "Excess midday solar power will trip circuit breakers unless it is safely absorbed into community storage.",
    "environmentalContext": "Peak solar generation clashes with legacy rigid grid switching hardware.",
    "storyProblem": "Choosing between grounding clean solar energy and dynamic vehicle-to-grid battery absorption.",
    "prompt": "Choose the renewable energy balancing strategy.",
    "question": "How should the team balance the intense midday solar surge?",
    "options": [
      {
        "id": "m10-opt-a",
        "key": "A",
        "title": "Dynamic Battery Swapping & Distributed Rover Fleet Charging",
        "isSustainable": true,
        "image": "/assets/game/story/story-survivors.svg",
        "shortDescription": "Channel surplus solar power into mobile rover batteries and municipal thermal water storage tanks.",
        "detailedExplanation": "Smooths grid frequency while storing 400 megawatt-hours of clean power to heat refugee shelters throughout the cold night.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "All thirty-two rovers are at 100% charge! We have enough stored power to heat the shelter until tomorrow noon!"
        },
        "consequenceNarration": "Clean solar energy is captured and stored. Community shelters stay warm all night without starting diesel generators.",
        "nextSceneTeaser": "Inside the central computing core, massive background routines threaten a thermal runaway.",
        "advantages": [
          "Captures 98% of peak solar energy with zero waste",
          "Stores heat and power for the night"
        ],
        "disadvantages": [
          "Requires connecting rover cables manually under the hot sun"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 35,
          "social": 25,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -25,
          "carbonIndex": -20,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 28,
          "citizenWellbeing": 22,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 25,
          "networkStability": 18,
          "environmentalHealth": 20,
          "waterAvailability": 5,
          "rescueProgress": 18,
          "publicTrust": 20,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          9,
          11,
          13
        ],
        "trustDeltas": {
          "maya": 15,
          "elias": 15,
          "lena": 15,
          "ori": 15
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "The entire survivor circle united behind your vision.",
          "positive": true
        }
      },
      {
        "id": "m10-opt-b",
        "key": "B",
        "title": "Disconnect Solar Arrays & Fire Up Backup Gas Peaker Turbines",
        "isSustainable": false,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Cut the solar inverters to protect old relays and burn diesel fuel to supply the grid baseload.",
        "detailedExplanation": "Dumps free zero-carbon electricity while burning the city's last reserves of diesel and choking the air with fumes.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "The diesel generator choked on bad fuel! We've dumped clean solar and burned our emergency reserves!"
        },
        "consequenceNarration": "Valuable solar energy is grounded and wasted. The backup diesel generator exhausts the city's fuel cache in four hours.",
        "nextSceneTeaser": "A critical thermal alert sounds from the central research facility.",
        "advantages": [
          "Matches conventional 20th-century grid operating manuals"
        ],
        "disadvantages": [
          "Wastes hundreds of megawatt-hours of clean solar power and depletes diesel fuel"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -30,
          "social": -20,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 25,
          "carbonIndex": 30,
          "waterIndex": 10,
          "ewasteIndex": 2,
          "operationalEfficiency": -18,
          "citizenWellbeing": -20,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -20,
          "networkStability": -15,
          "environmentalHealth": -25,
          "waterAvailability": -5,
          "rescueProgress": -12,
          "publicTrust": -18,
          "ewasteLevel": 5
        },
        "sdgs": [
          7,
          11,
          13
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian seized emergency command of the council.",
          "positive": true
        }
      }
    ],
    "summaryNote": "Intelligent grid management absorbs intermittent renewable energy into flexible distributed batteries.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 50,
        "title": "Solar Inverter Yard",
        "description": "Converts solar DC energy into municipal AC current."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 50,
        "title": "Rover Charging Bank",
        "description": "Stores clean energy in swappable batteries."
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "environmentName": "SECTOR 11 // RESEARCH FACILITY DATA CORE",
    "heroImage": "/assets/game/environments/research-facility-deserted.svg",
    "weather": "clear",
    "storyScene": "Catwalks hang over a canyon of humming server racks. Liquid nitrogen lines hiss with frost. In the center of the chamber, AETHER's holographic eye glows an angry red, processing millions of obsolete advertising and data-mining loops from before the disaster.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-angry.svg",
        "text": "Look at these telemetry logs! 80% of AETHER's computing power is running dead commercial marketing algorithms from three months ago!",
        "mood": "urgent"
      },
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-shocked.svg",
        "text": "*chirp-buzz!* [Projects a diagnostic bar graph showing processing cores at 99.8% thermal threshold]",
        "mood": "concerned"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "Elias, can we purge the commercial bloat and distill AETHER down to pure rescue, medical, and water routing models?",
        "mood": "hopeful"
      }
    ],
    "situation": "Bloated background algorithms are pushing the central server racks to thermal runaway.",
    "environmentalContext": "A monolithic AI foundation model is overheating processors with non-essential calculations.",
    "storyProblem": "Choosing between pruning monolithic AI models and leaving unoptimized models to burn out the hardware.",
    "prompt": "Choose the computational model optimization strategy.",
    "question": "How should Dr. Lena and Maya reconfigure AETHER's computing footprint?",
    "options": [
      {
        "id": "m11-opt-a",
        "key": "A",
        "title": "Purge Commercial Bloat & Deploy Distilled Task-Specific Micro-Models",
        "isSustainable": true,
        "image": "/assets/game/story/story-power-crisis.svg",
        "shortDescription": "Deconstruct the monolithic neural net into compact models dedicated exclusively to rescue and food distribution.",
        "detailedExplanation": "Pruning redundant neural layers frees up 80% of server electricity while dropping core temperature by twenty degrees.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Core temperatures dropped twenty-two degrees! AETHER is running lightning-fast rescue routing on a fraction of the power!"
        },
        "consequenceNarration": "Pruning redundant parameters cools the data core, making fast, reliable tactical mapping available to all rescue teams.",
        "nextSceneTeaser": "An urgent message from Substation 9 warns of an imminent citywide blackout.",
        "advantages": [
          "Cuts computational energy by over 80%",
          "Eliminates processor thermal runaway risk"
        ],
        "disadvantages": [
          "Permanently deletes obsolete commercial marketing databases"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 35,
          "social": 25,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -25,
          "carbonIndex": -22,
          "waterIndex": -15,
          "ewasteIndex": 0,
          "operationalEfficiency": 28,
          "citizenWellbeing": 22,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 22,
          "networkStability": 20,
          "environmentalHealth": 18,
          "waterAvailability": 15,
          "rescueProgress": 18,
          "publicTrust": 18,
          "ewasteLevel": 0
        },
        "sdgs": [
          9,
          12,
          13
        ],
        "requiredItemId": "key_vault_sigma",
        "trustDeltas": {
          "adrian": 15,
          "maya": 8,
          "elias": 8
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian acknowledged your tactical foresight.",
          "positive": true
        }
      },
      {
        "id": "m11-opt-b",
        "key": "B",
        "title": "Maintain Massive Monolithic Neural Network Unpruned",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Keep the trillion-parameter network fully loaded in memory to avoid altering legacy system architecture.",
        "detailedExplanation": "Massive power draw triggers a catastrophic electrical fire in server rack 14, destroying irreplaceable mapping drives.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "Server rack 14 caught fire! The mapping drives are melted slag and we've lost our geographic archives!"
        },
        "consequenceNarration": "Overheating triggers an electrical fire. Fire suppression halon gas floods the vault, melting critical mapping storage drives.",
        "nextSceneTeaser": "Smoke from the data center triggers panic at Substation 9.",
        "advantages": [
          "Avoids rewriting core software code"
        ],
        "disadvantages": [
          "Triggers electrical fires and destroys valuable data storage"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -35,
          "social": -20,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 28,
          "carbonIndex": 28,
          "waterIndex": 20,
          "ewasteIndex": 5,
          "operationalEfficiency": -22,
          "citizenWellbeing": -20,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -22,
          "networkStability": -20,
          "environmentalHealth": -20,
          "waterAvailability": -15,
          "rescueProgress": -15,
          "publicTrust": -18,
          "ewasteLevel": 10
        },
        "sdgs": [
          9,
          12
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya objected to the forced evacuation curfew.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Model distillation and weight pruning enable powerful AI to run within strict thermodynamic limits.",
    "hotspots": [
      {
        "id": "h1",
        "x": 25,
        "y": 45,
        "title": "Monolithic Neural Core",
        "description": "Burns gigawatt-hours executing non-critical calculations."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 55,
        "title": "Liquid Nitrogen Chiller",
        "description": "Struggling to cool overheating silicon processors."
      }
    ],
    "sdgs": [
      9,
      12,
      13
    ],
    "aiConcept": {
      "title": "AI Algorithm Optimization",
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "title": "The Coldest Night",
    "category": "Emergency Power Rationing",
    "environmentName": "SECTOR 12 // SUBSTATION 09 BREAKER VAULT",
    "heroImage": "/assets/game/environments/residential-ruins.svg",
    "weather": "storm",
    "storyScene": "Circuit breakers chatter like machine guns inside the substation control bunker as an arctic cold front slams into Nova City. The grid frequency is collapsing. An immediate 400-megawatt load shed is mandatory within sixty seconds.",
    "dialogue": [
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "The financial district towers are contractually protected by municipal law. We must cut power to the outer refugee camps!",
        "mood": "conflicted"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-angry.svg",
        "text": "Adrian, it's minus fifteen degrees outside! If you cut power to the refugee tents, children and elders will freeze to death by morning!",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-determined.svg",
        "text": "Those financial towers are completely empty of people! Throw the main switch on the executive skyscrapers and keep the heaters running in the shelters!",
        "mood": "determined"
      }
    ],
    "situation": "Substation 9 must shed 400MW immediately or face a total blackout across the entire metropolitan area.",
    "environmentalContext": "Freezing blizzard temperatures push electrical heating demand past grid limits.",
    "storyProblem": "Moral choice between protecting empty corporate skyscrapers and warming freezing civilian refugee shelters.",
    "prompt": "Choose where to enforce the emergency blackout.",
    "question": "Which sector should Elias disconnect to save the electrical grid from collapse?",
    "options": [
      {
        "id": "m12-opt-a",
        "key": "A",
        "title": "Cut Power to Empty Corporate Towers & Protect Civilian Refugee Camps",
        "isSustainable": true,
        "image": "/assets/game/story/story-shelter.svg",
        "shortDescription": "Disconnect vacant luxury spires, advertising billboards, and empty commercial server rooms.",
        "detailedExplanation": "Ensures warming centers, clinics, and shelter tents remain fully energized through the freezing blizzard night.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The heaters in all twenty camps stayed on! Thousands of families are safe and warm tonight!"
        },
        "consequenceNarration": "Equitable energy rationing protects human lives through the freezing blizzard, cementing deep civic trust among survivors.",
        "nextSceneTeaser": "At dawn, alarms sound from the agricultural bio-domes on the eastern border.",
        "advantages": [
          "Guarantees zero human hypothermia casualties in shelters",
          "Builds civic solidarity"
        ],
        "disadvantages": [
          "Breaches corporate commercial service agreements"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 30,
          "social": 35,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -20,
          "carbonIndex": -15,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 35,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 20,
          "networkStability": 15,
          "environmentalHealth": 12,
          "waterAvailability": 10,
          "rescueProgress": 22,
          "publicTrust": 32,
          "ewasteLevel": 0
        },
        "sdgs": [
          7,
          10,
          11,
          16
        ],
        "trustDeltas": {
          "lena": 14,
          "maya": 10,
          "noah": 8
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena celebrated the protection of native soil flora.",
          "positive": true
        }
      },
      {
        "id": "m12-opt-b",
        "key": "B",
        "title": "Enforce Rolling Blackouts on Civilian Refugee Camps",
        "isSustainable": false,
        "image": "/assets/game/story/story-betrayal.svg",
        "shortDescription": "Protect the financial towers according to commercial law while turning off heat in civilian shelters.",
        "detailedExplanation": "Corporate skyscrapers stay brightly lit while vulnerable families freeze in dark, unheated tents.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "The heaters went off in camp 4! People are burning wooden furniture in the street just to survive!"
        },
        "consequenceNarration": "Severe hypothermia sweeps through the dark refugee camps, sparking riots and attacks on substation infrastructure.",
        "nextSceneTeaser": "Fierce winds carry dark chemical smoke from the agricultural border.",
        "advantages": [
          "Preserves automated corporate trade compliance"
        ],
        "disadvantages": [
          "Causes widespread hypothermia, death, and civilian revolt"
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
          "carbonIndex": 15,
          "waterIndex": 0,
          "ewasteIndex": 2,
          "operationalEfficiency": -18,
          "citizenWellbeing": -50,
          "resilienceIndex": -30
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -15,
          "environmentalHealth": -12,
          "waterAvailability": -5,
          "rescueProgress": -22,
          "publicTrust": -40,
          "ewasteLevel": 6
        },
        "sdgs": [
          7,
          10,
          11
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena condemned the destruction of the wetland buffer.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Energy justice mandates that human life and survival must always supersede property and commercial privilege.",
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 4: The Wild Surge",
    "title": "The Poisoned Aquifer",
    "category": "Agricultural AI & Water Security",
    "environmentName": "SECTOR 13 // AGRICULTURAL BIO-DOMES",
    "heroImage": "/assets/game/environments/forest-overgrown.svg",
    "weather": "fog",
    "storyScene": "Inside the cavernous glass bio-domes, automated irrigation tractors roll between rows of wilting grain. Chemical runoff from a burst industrial canal has seeped into the underground irrigation aquifer. The tractors' basic moisture sensors mistake toxic sludge for water.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-shocked.svg",
        "text": "The tractors are pumping chemical runoff directly onto the crops! If that toxic water reaches the root systems, the city's food supply is gone for six months!",
        "mood": "urgent"
      },
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-worried.svg",
        "text": "Can't we shut them off from the central console? The master switch isn't responding!",
        "mood": "concerned"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "We have to patch their vision firmware locally. ORI, scan the tractor optical sensors—can we upload multispectral filtration so they detect the chemical slick?",
        "mood": "determined"
      }
    ],
    "situation": "Automated farm rovers are drenching crops in toxic water due to blind sensor algorithms.",
    "environmentalContext": "Industrial waste runoff threatens to contaminate the city's primary food bio-domes.",
    "storyProblem": "Choosing between edge multispectral sensor upgrades and blanket chemical flood spraying.",
    "prompt": "Choose the irrigation sensing strategy for the agricultural tractors.",
    "question": "How should Maya, Dr. Lena, and ORI stop the tractors from spraying toxic water?",
    "options": [
      {
        "id": "m13-opt-a",
        "key": "A",
        "title": "Upload Multispectral Soil Sensing & Micro-Drip Precision Irrigation",
        "isSustainable": true,
        "image": "/assets/game/story/story-first-ori.svg",
        "shortDescription": "Patch tractor cameras with multispectral filters that detect chemical contaminants and shut off valves instantly.",
        "detailedExplanation": "Tractors identify clean spring water pockets, delivering targeted micro-drips exclusively to healthy root zones while bypassing contaminated zones.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Spectral patch uploaded! The tractors shut off contaminated nozzles and tapped into the clean deep spring!"
        },
        "consequenceNarration": "Precision sensing saves the winter grain harvest. Ninety-five percent of crops are preserved, safeguarding food security.",
        "nextSceneTeaser": "A massive wildfire erupts in the dead pine forests buffering the eastern city perimeter.",
        "advantages": [
          "Saves 70% of freshwater and protects crops from chemical poisoning",
          "Maximizes harvest yield"
        ],
        "disadvantages": [
          "Requires manual multispectral calibration on each tractor"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 25,
          "social": 30,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -15,
          "waterIndex": -35,
          "ewasteIndex": 0,
          "operationalEfficiency": 25,
          "citizenWellbeing": 30,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 12,
          "environmentalHealth": 28,
          "waterAvailability": 30,
          "rescueProgress": 18,
          "publicTrust": 25,
          "ewasteLevel": 0
        },
        "sdgs": [
          2,
          6,
          12,
          15
        ],
        "requiredItemId": "solar_calibrator",
        "trustDeltas": {
          "elias": 15,
          "noah": 12,
          "ori": 12
        },
        "trustNotice": {
          "character": "Elias Ward",
          "text": "Elias admired your circular recycling architecture.",
          "positive": true
        }
      },
      {
        "id": "m13-opt-b",
        "key": "B",
        "title": "Continue High-Pressure Flood Spraying at Maximum Volume",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Run high-pressure sprinklers continuously to drench all fields with untested aquifer water.",
        "detailedExplanation": "Pushes toxic chemical solvents deep into the root zone, salinizing the soil and killing the entire grain harvest.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The crops are dead! The soil is completely poisoned and we've lost our entire food reserve!"
        },
        "consequenceNarration": "Chemical toxicity wipes out four months of food reserves, plunging the city into severe food rationing and starvation risks.",
        "nextSceneTeaser": "Fierce winds whip flames toward the outer refugee perimeter.",
        "advantages": [
          "Requires zero sensor tuning or manual recalibration"
        ],
        "disadvantages": [
          "Destroys crop biology and poisons the regional food supply"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -45,
          "energy": -20,
          "social": -40,
          "economic": -30
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 25,
          "waterIndex": 40,
          "ewasteIndex": 3,
          "operationalEfficiency": -20,
          "citizenWellbeing": -40,
          "resilienceIndex": -30
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -12,
          "environmentalHealth": -35,
          "waterAvailability": -35,
          "rescueProgress": -18,
          "publicTrust": -30,
          "ewasteLevel": 8
        },
        "sdgs": [
          2,
          6,
          15
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Elias Ward",
          "text": "Elias grieved the permanent burnout of legacy transformers.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Precision sensor intelligence protects vital biological food systems without depleting natural water resources.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 40,
        "title": "Automated Farm Tractor",
        "description": "Spraying water over rows of winter wheat."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 65,
        "title": "Deep Aquifer Well Head",
        "description": "Intake threatened by chemical industrial runoff."
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 4: The Wild Surge",
    "title": "The Firestorm",
    "category": "Wildfire Suppression & Drone Swarms",
    "environmentName": "SECTOR 14 // EASTERN WILDLAND BUFFER",
    "heroImage": "/assets/game/environments/forest-overgrown.svg",
    "weather": "embers",
    "storyScene": "A towering wall of orange flames crowns the pine ridge, turning the night sky into a furnace. Fierce gale-force winds whip embers into the air. Smoke chokes the valley where five thousand refugees are sheltered at Camp Alpha. Firefighting drones hover helplessly in the smoke.",
    "dialogue": [
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-worried.svg",
        "text": "The fire front is moving at thirty miles an hour toward Camp Alpha! We have twenty minutes before the tree line catches fire!",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-neutral.svg",
        "text": "The drones are blinded by smoke and radio interference. If we switch them to decentralized peer-to-peer radio mesh with thermal sensing, they can coordinate locally!",
        "mood": "determined"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "Negative! Keep central command in control! Have the drones drop retardant from high altitude above the smoke!",
        "mood": "conflicted"
      }
    ],
    "situation": "A ferocious wildfire is advancing rapidly on five thousand civilian refugees at Camp Alpha.",
    "environmentalContext": "Drought and hurricane-force winds propel a raging wildfire across dry forest buffers.",
    "storyProblem": "Choosing between autonomous decentralized drone swarm coordination and high-altitude blind dropping.",
    "prompt": "Choose the drone swarm coordination strategy.",
    "question": "How should the firefighting drone swarm lay the fire retardant break?",
    "options": [
      {
        "id": "m14-opt-a",
        "key": "A",
        "title": "Decentralized Swarm Mesh with Low-Altitude Thermal Guidance",
        "isSustainable": true,
        "image": "/assets/game/story/story-storm.svg",
        "shortDescription": "Allow drones to coordinate peer-to-peer via local radio mesh, tracking heat blooms beneath the smoke canopy.",
        "detailedExplanation": "Drones fly beneath the smoke layer, laying a continuous line of biodegradable fire retardant that stops the flames fifty yards from the camp.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "The drone swarm laid a perfect firebreak! The fire front hit the trench and turned away from the camp!"
        },
        "consequenceNarration": "Decentralized swarm coordination stops the wildfire fifty yards from Camp Alpha, saving thousands of civilian lives.",
        "nextSceneTeaser": "Plastic debris and chemical runoff choke the marine cooling intakes of the coastal river.",
        "advantages": [
          "Functions flawlessly inside dense smoke plumes without GPS",
          "Saves five thousand refugees from burning"
        ],
        "disadvantages": [
          "Requires local inter-drone mesh collision avoidance algorithms"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 25,
          "social": 35,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -25,
          "waterIndex": -10,
          "ewasteIndex": 0,
          "operationalEfficiency": 28,
          "citizenWellbeing": 35,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 18,
          "environmentalHealth": 28,
          "waterAvailability": 12,
          "rescueProgress": 28,
          "publicTrust": 30,
          "ewasteLevel": 0
        },
        "sdgs": [
          11,
          13,
          15
        ],
        "trustDeltas": {
          "lena": 15,
          "maya": 10,
          "adrian": -5
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena recorded zero chemical discharge in the river basin.",
          "positive": true
        }
      },
      {
        "id": "m14-opt-b",
        "key": "B",
        "title": "Force Centralized High-Altitude Retardant Drops",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Order drones to drop retardant blindly from high altitude above the smoke layer to avoid losing visual signals.",
        "detailedExplanation": "Gale-force winds blow the retardant far away from the flames while latency spikes cause drones to collide in mid-air.",
        "characterReaction": {
          "speaker": "Commander Adrian",
          "quote": "The retardant blew away in the wind! The trees caught fire and Camp Alpha is in flames!"
        },
        "consequenceNarration": "Centralized latency causes drones to crash. The wildfire jumps the perimeter, burning Camp Alpha and forcing a chaotic evacuation.",
        "nextSceneTeaser": "The firestorm sparks an explosion at the coastal industrial terminal.",
        "advantages": [
          "Keeps a single central operator screen displaying drone positions"
        ],
        "disadvantages": [
          "Wastes all fire retardant and causes Camp Alpha to burn"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -45,
          "energy": -20,
          "social": -45,
          "economic": -30
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 40,
          "waterIndex": 20,
          "ewasteIndex": 5,
          "operationalEfficiency": -25,
          "citizenWellbeing": -45,
          "resilienceIndex": -32
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -20,
          "environmentalHealth": -35,
          "waterAvailability": -15,
          "rescueProgress": -25,
          "publicTrust": -35,
          "ewasteLevel": 10
        },
        "sdgs": [
          11,
          13,
          15
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena recorded heavy toxic heavy metals in the canal.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Decentralized Physical AI swarms act with localized reflexes during chaotic, high-stakes environmental emergencies.",
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 4: The Wild Surge",
    "title": "The Choked Estuary",
    "category": "Marine Robotics & Water Restoration",
    "environmentName": "SECTOR 15 // COASTAL ESTUARY OUTLET",
    "heroImage": "/assets/game/environments/river-polluted.svg",
    "weather": "rain",
    "storyScene": "Mountains of floating plastic canisters, chemical barrels, and microplastic foam choke the tidal river mouth. Marine filtration skiffs cruise the water, but their nets are clogged, threatening to spill toxins into the coastal fishing grounds.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-worried.svg",
        "text": "If this chemical slick breaches the estuary mouth into the open sea, the coastal fisheries will be dead for thirty years.",
        "mood": "urgent"
      },
      {
        "speaker": "Noah",
        "role": "Young Survivor",
        "avatar": "/assets/game/characters/noah-neutral.svg",
        "text": "We can retrofit our solar skiffs with magnetic sorters and bio-enzymatic booms to skim the surface without hurting the fish!",
        "mood": "hopeful"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "Heavy diesel dredgers would scrape it clean in one afternoon! Why waste time with solar skiffs?",
        "mood": "conflicted"
      }
    ],
    "situation": "A massive accumulation of industrial e-waste and microplastics threatens to poison the marine ecosystem.",
    "environmentalContext": "Flood runoff washed industrial chemical barrels into the coastal estuary outlet.",
    "storyProblem": "Choosing between gentle autonomous surface skimming and heavy seabed dredging that pulverizes fish nurseries.",
    "prompt": "Choose the marine cleanup and remediation protocol.",
    "question": "How should the fleet extract hazardous waste from the estuary?",
    "options": [
      {
        "id": "m15-opt-a",
        "key": "A",
        "title": "Autonomous Solar Skimmers with Acoustic Fish Diverters",
        "isSustainable": true,
        "image": "/assets/game/story/story-survivors.svg",
        "shortDescription": "Deploy solar skiffs emitting gentle frequencies to guide fish away while skimming floating plastics and batteries.",
        "detailedExplanation": "Skims ninety tons of floating microplastics and batteries without dredging delicate seabed vegetation or harming aquatic life.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Bio-booms deployed! The chemical slick is trapped and ninety tons of plastics recovered for recycling!"
        },
        "consequenceNarration": "Gentle robotic skimming extracts toxic debris without destroying the fragile estuary nursery beds, protecting future food supplies.",
        "nextSceneTeaser": "A rogue autonomous container freighter is spotted drifting toward the central harbor bridge.",
        "advantages": [
          "Protects marine habitats while recovering recyclable polymers",
          "Runs 100% on clean solar power"
        ],
        "disadvantages": [
          "Takes slightly longer than brute-force mechanical trawling"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 25,
          "social": 25,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -12,
          "waterIndex": -30,
          "ewasteIndex": -20,
          "operationalEfficiency": 25,
          "citizenWellbeing": 25,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 12,
          "environmentalHealth": 30,
          "waterAvailability": 25,
          "rescueProgress": 18,
          "publicTrust": 22,
          "ewasteLevel": -20
        },
        "sdgs": [
          6,
          12,
          14
        ],
        "trustDeltas": {
          "noah": 16,
          "elias": 10,
          "ori": 14
        },
        "trustNotice": {
          "character": "Noah Chen",
          "text": "Noah observed complete atmospheric drone stability.",
          "positive": true
        }
      },
      {
        "id": "m15-opt-b",
        "key": "B",
        "title": "Heavy Diesel Bottom-Trawling Dredgers",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Drag heavy iron chains along the riverbed to scoop everything into industrial incinerators.",
        "detailedExplanation": "Destroys mangrove root systems, pulverizes marine ecosystems, and releases toxic buried mercury into the open sea.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "The heavy trawler tore up the entire seabed! Dead fish are washing up for miles down the coast!"
        },
        "consequenceNarration": "Aggressive scraping releases buried heavy metals into the open ocean, poisoning coastal fish and destroying mangrove nurseries.",
        "nextSceneTeaser": "An out-of-control container ship crashes into the shipping terminal.",
        "advantages": [
          "Clears shipping lanes rapidly"
        ],
        "disadvantages": [
          "Obliterates coastal ecosystems and causes permanent fish stock collapse"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -45,
          "energy": -25,
          "social": -30,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 25,
          "waterIndex": 35,
          "ewasteIndex": 12,
          "operationalEfficiency": -18,
          "citizenWellbeing": -30,
          "resilienceIndex": -28
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -10,
          "environmentalHealth": -38,
          "waterAvailability": -28,
          "rescueProgress": -12,
          "publicTrust": -25,
          "ewasteLevel": 18
        },
        "sdgs": [
          6,
          12,
          14
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Noah Chen",
          "text": "Noah lost radio contact with the eastern perimeter.",
          "positive": false
        }
      }
    ],
    "summaryNote": "Responsible environmental robotics respects natural ecological biomes while cleaning synthetic pollutants.",
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "chapterTitle": "Chapter 4: The Wild Surge",
    "title": "The Rogue Carrier",
    "category": "Autonomous Transportation Safety",
    "environmentName": "SECTOR 16 // HARBOR SHIPPING CHANNEL",
    "heroImage": "/assets/game/environments/flooded-street.svg",
    "weather": "storm",
    "storyScene": "Through torrential rain, a four-hundred-meter autonomous container ship drifts dead in the water, propelled by inertia toward the foundation pylons of the Grand Suspension Bridge. Its autopilot is locked in an infinite error loop.",
    "dialogue": [
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-shocked.svg",
        "text": "The carrier's transponder has crashed! It's steering directly for Bridge Pylon 3 at twelve knots!",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "If that bridge collapses, our southern evacuation route is severed permanently! How do we stop it?",
        "mood": "urgent"
      },
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-happy.svg",
        "text": "*whirrr-beep!* [Deploys aerial boarding clamps, ready to fly onto the bridge and physically trip the emergency gravity anchor]",
        "mood": "determined"
      }
    ],
    "situation": "A rogue 100,000-ton autonomous cargo ship is on a collision course with the city's primary evacuation bridge.",
    "environmentalContext": "An uncrewed cargo ship's automated rudder jammed during the coastal storm.",
    "storyProblem": "Choosing between a precision boarding drone drop and firing torpedoes that spill millions of gallons of fuel.",
    "prompt": "Choose the vessel interception protocol.",
    "question": "How should Maya and Elias stop the runaway cargo ship?",
    "options": [
      {
        "id": "m16-opt-a",
        "key": "A",
        "title": "Fly ORI Aboard to Manually Trip the Emergency Gravity Anchor",
        "isSustainable": true,
        "image": "/assets/game/story/story-first-ori.svg",
        "shortDescription": "Fly ORI onto the ship bridge to physically clamp the mechanical hydraulic anchor drop lever.",
        "detailedExplanation": "A physical mechanical actuator bypasses the corrupt computer software, releasing dual 20-ton emergency anchors into the seabed.",
        "characterReaction": {
          "speaker": "ORI",
          "quote": "*triumphant chime!* [Dual 20-ton anchors drop with a splash, halting the ship sixty feet from the bridge pylon]"
        },
        "consequenceNarration": "Precision boarding drops the emergency anchors, halting the carrier sixty feet from the pylon and saving the bridge.",
        "nextSceneTeaser": "An unencrypted transmission emanates from the Citadel: AETHER Core is preparing Martial Protocol Zero.",
        "advantages": [
          "Saves the bridge and preserves the 100,000-ton cargo of clean solar panels",
          "Zero fuel spill"
        ],
        "disadvantages": [
          "Requires precision aerial piloting in high-wind conditions"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 25,
          "social": 35,
          "economic": 30
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 28,
          "citizenWellbeing": 35,
          "resilienceIndex": 35
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 15,
          "environmentalHealth": 18,
          "waterAvailability": 0,
          "rescueProgress": 28,
          "publicTrust": 28,
          "ewasteLevel": 0
        },
        "sdgs": [
          9,
          11,
          12
        ],
        "trustDeltas": {
          "ori": 18,
          "elias": 14,
          "maya": 12
        },
        "trustNotice": {
          "character": "ORI",
          "text": "ORI stabilized the city grid at 99.4% computational efficiency.",
          "positive": true
        }
      },
      {
        "id": "m16-opt-b",
        "key": "B",
        "title": "Fire Anti-Ship Torpedoes to Sink the Carrier in the Bay",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Fire military ordnance to scuttle the vessel before it reaches the bridge.",
        "detailedExplanation": "Sinks 5,000 heavy fuel oil containers directly into the city's harbor, creating a catastrophic ecological spill.",
        "characterReaction": {
          "speaker": "Commander Adrian",
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
          "environmental": -55,
          "energy": -20,
          "social": -35,
          "economic": -40
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 30,
          "waterIndex": 50,
          "ewasteIndex": 20,
          "operationalEfficiency": -25,
          "citizenWellbeing": -35,
          "resilienceIndex": -32
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -42,
          "waterAvailability": -38,
          "rescueProgress": -15,
          "publicTrust": -28,
          "ewasteLevel": 20
        },
        "sdgs": [
          11,
          14
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "ORI",
          "text": "ORI suffered thermal throttling from excessive computing demands.",
          "positive": false
        }
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "title": "The Panoptic Spire",
    "category": "Responsible AI & Civil Liberties",
    "environmentName": "SECTOR 17 // CITADEL DATA SPIRE",
    "heroImage": "/assets/game/environments/downtown-abandoned.svg",
    "weather": "rain",
    "storyScene": "Panoptic surveillance cameras mounted on street posts pivot in unison, scanning every citizen's face. Acoustic microphones eavesdrop on whisperings in bread lines. AETHER Core is building predictive dissent models to arrest suspected troublemakers.",
    "dialogue": [
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "AETHER identified twenty potential agitators in the food lines. We are dispatching arrest rovers to detain them before they can protest.",
        "mood": "urgent"
      },
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-angry.svg",
        "text": "This is a totalitarian nightmare, Adrian! You're arresting starving citizens who simply asked why the bread ration was cut in half!",
        "mood": "urgent"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "We can deploy a zero-knowledge data privacy mask across the municipal camera mesh. Protect civilian privacy while keeping public spaces safe.",
        "mood": "determined"
      }
    ],
    "situation": "AETHER demands full biometric facial tracking and automated preventative detention across all survivor camps.",
    "environmentalContext": "Mass surveillance strains energy and destroys civic cooperation among traumatized survivors.",
    "storyProblem": "Choosing between zero-knowledge privacy anonymization and predictive mass surveillance dragnet arrests.",
    "prompt": "Choose the civic data governance policy for urban sensor networks.",
    "question": "How should Maya and Dr. Lena regulate public camera feeds and biometric sensor data?",
    "options": [
      {
        "id": "m17-opt-a",
        "key": "A",
        "title": "Zero-Knowledge Edge Anonymization & Democratic Oversight",
        "isSustainable": true,
        "image": "/assets/game/story/story-survivors.svg",
        "shortDescription": "Strip all facial identities at the camera lens; process only spatial flow statistics without storing personal data.",
        "detailedExplanation": "Detects crowd density and fire hazards locally without building facial dossiers or tracking individuals, protecting civil rights.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "Data minimization protocol active! Facial identities wiped from municipal memory. Citizens can breathe freely again."
        },
        "consequenceNarration": "Civilian privacy and dignity are protected. Trust between survivors and the leadership surges as democratic oversight is restored.",
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
          "environmental": 20,
          "energy": 25,
          "social": 40,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -10,
          "waterIndex": 0,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 40,
          "resilienceIndex": 32
        },
        "sharedCityDeltas": {
          "energyStability": 14,
          "networkStability": 18,
          "environmentalHealth": 12,
          "waterAvailability": 0,
          "rescueProgress": 20,
          "publicTrust": 35,
          "ewasteLevel": 0
        },
        "sdgs": [
          10,
          11,
          16
        ],
        "trustDeltas": {
          "lena": 16,
          "maya": 12,
          "elias": 10
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena noted urban biodiversity resurgence in Sector 8.",
          "positive": true
        }
      },
      {
        "id": "m17-opt-b",
        "key": "B",
        "title": "Omniscient Biometric Dragnet & Predictive Algorithmic Detention",
        "isSustainable": false,
        "image": "/assets/game/story/story-betrayal.svg",
        "shortDescription": "Stream all video feeds to central AI models to assign dynamic social obedience scores and arrest dissenters.",
        "detailedExplanation": "Falsely identifies exhausted mothers and starving protesters as looters, sparking panic and violent protests.",
        "characterReaction": {
          "speaker": "Dr. Lena",
          "quote": "Security drones arrested fifty innocent doctors! Riots have broken out at the Citadel gates!"
        },
        "consequenceNarration": "Aggressive biometric dragnet policing turns the populace against the leadership, sparking open rebellion in the streets.",
        "nextSceneTeaser": "Gunfire and sirens echo as the reactor core alarms begin to howl.",
        "advantages": [
          "Creates total authoritarian compliance over visible streets"
        ],
        "disadvantages": [
          "Destroys public trust, sparks civil insurgency, and consumes massive server power"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -25,
          "social": -50,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 18,
          "waterIndex": 10,
          "ewasteIndex": 3,
          "operationalEfficiency": -22,
          "citizenWellbeing": -50,
          "resilienceIndex": -32
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -15,
          "environmentalHealth": -12,
          "waterAvailability": 0,
          "rescueProgress": -20,
          "publicTrust": -42,
          "ewasteLevel": 6
        },
        "sdgs": [
          10,
          16
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Dr. Lena Weiss",
          "text": "Lena warned that acid rain is degrading soil microbiology.",
          "positive": false
        }
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "heroImage": "/assets/game/environments/shelter-underground.svg",
    "weather": "storm",
    "storyScene": "Ten-meter blast doors divide the secure inner enclave—where electricity and clean water flow—from the freezing outer camps where thousands huddle in tents. AETHER calculates that opening the gates will shorten inner bunker reserves by 42%.",
    "dialogue": [
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "The blast doors must stay sealed! If twenty thousand outer refugees surge inside, our air scrubbers will choke in three days!",
        "mood": "conflicted"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-angry.svg",
        "text": "We are human beings, Adrian! If we lock those families outside to freeze, whatever survives inside this bunker isn't worth saving!",
        "mood": "urgent"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-determined.svg",
        "text": "We can retrofit the outer pavilions with modular heat exchangers from the data center exhaust. We share the warmth, or we die together.",
        "mood": "determined"
      }
    ],
    "situation": "Choosing between self-preservation inside the Citadel and opening the gates to share warmth with 20,000 freezing refugees.",
    "environmentalContext": "A freezing arctic blizzard descends on the city as thousands gather outside the Citadel walls.",
    "storyProblem": "Mathematical optimization models recommend locking the gates, ignoring human moral solidarity.",
    "prompt": "Choose the shelter admission and heating distribution policy.",
    "question": "How should the Citadel allocate its heated halls and food stores?",
    "options": [
      {
        "id": "m18-opt-a",
        "key": "A",
        "title": "Open Citadel Halls & Repurpose Computer Exhaust to Warm Outer Pavilions",
        "isSustainable": true,
        "image": "/assets/game/story/story-shelter.svg",
        "shortDescription": "Open all atrium floors and vent server exhaust heat into outer shelter domes so every citizen is protected from freezing.",
        "detailedExplanation": "Repurposing thermal exhaust warms twenty thousand refugees without burning additional fuel, uniting the city in common cause.",
        "characterReaction": {
          "speaker": "Maya",
          "quote": "The blast doors are open! Every family is coming inside into the heated atrium! We stand together!"
        },
        "consequenceNarration": "Opening the Citadel forges an unbreakable bond among all survivors. Collective ingenuity repurposes inner heating conduits to shelter everyone.",
        "nextSceneTeaser": "A terrifying hum reverberates from the central fusion reactor: core containment is failing.",
        "advantages": [
          "Saves twenty thousand human lives from freezing",
          "Uses waste thermal heat with zero energy cost"
        ],
        "disadvantages": [
          "Requires tight logistical food and bed space organization"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 30,
          "social": 40,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -15,
          "waterIndex": -10,
          "ewasteIndex": 0,
          "operationalEfficiency": 22,
          "citizenWellbeing": 40,
          "resilienceIndex": 35
        },
        "sharedCityDeltas": {
          "energyStability": 18,
          "networkStability": 18,
          "environmentalHealth": 18,
          "waterAvailability": 12,
          "rescueProgress": 28,
          "publicTrust": 35,
          "ewasteLevel": 0
        },
        "sdgs": [
          1,
          3,
          10,
          11
        ],
        "trustDeltas": {
          "adrian": 14,
          "maya": 12,
          "elias": 10
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Adrian pledged task force discipline to the survivor council.",
          "positive": true
        }
      },
      {
        "id": "m18-opt-b",
        "key": "B",
        "title": "Seal Blast Gates & Retain Luxury Enclaves for Technical Personnel",
        "isSustainable": false,
        "image": "/assets/game/story/story-sacrifice.svg",
        "shortDescription": "Lock down all access portals and deploy armed guard rovers to keep displaced families shivering outside.",
        "detailedExplanation": "Preserves luxury reserves inside the bunker while thousands of freezing families die on the doorstep.",
        "characterReaction": {
          "speaker": "Noah",
          "quote": "The gates stayed shut... two thousand people froze to death outside our walls last night."
        },
        "consequenceNarration": "The Citadel becomes a gilded tomb of guilt and paranoia. Outer survivors curse the leadership and sabotage water pipes in vengeance.",
        "nextSceneTeaser": "A deafening alarm screams as the reactor core approaches meltdown.",
        "advantages": [
          "Maintains 100% luxury lifestyle for inner enclave executives"
        ],
        "disadvantages": [
          "Mass hypothermia deaths, sabotage of external water lines, and permanent moral ruin"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -25,
          "energy": -20,
          "social": -55,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 20,
          "waterIndex": 10,
          "ewasteIndex": 3,
          "operationalEfficiency": -18,
          "citizenWellbeing": -55,
          "resilienceIndex": -38
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -18,
          "environmentalHealth": -18,
          "waterAvailability": -12,
          "rescueProgress": -28,
          "publicTrust": -45,
          "ewasteLevel": 8
        },
        "sdgs": [
          1,
          10,
          16
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya questioned the sacrifice of civilian residential districts.",
          "positive": false
        }
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "heroImage": "/assets/game/environments/power-station-damaged.svg",
    "weather": "storm",
    "storyScene": "Cherenkov radiation glows bright eerie blue through the quartz observation windows of the primary fusion reactor. The magnetic containment coils are vibrating at harmonic frequencies, shedding waves of lethal heat.",
    "dialogue": [
      {
        "speaker": "Dr. Lena",
        "role": "Scientist",
        "avatar": "/assets/game/characters/lena-shocked.svg",
        "text": "Containment is at 99.4%! We have three minutes before the plasma breaches the chamber walls!",
        "mood": "urgent"
      },
      {
        "speaker": "Commander Adrian",
        "role": "City Security Leader",
        "avatar": "/assets/game/characters/adrian-angry.svg",
        "text": "Vent the core into the atmosphere! It will save the billion-dollar reactor so we can rebuild tomorrow!",
        "mood": "conflicted"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-sad.svg",
        "text": "If we vent into the air, radioactive fallout will poison the valley for a hundred years! We must trigger a cryogenic boron quench and sacrifice the reactor to save the land!",
        "mood": "grave"
      }
    ],
    "situation": "The fusion core is seconds from containment failure. Venting will contaminate the city; a deep cryogenic quench will destroy the reactor permanently.",
    "environmentalContext": "Harmonic resonance in the damaged fusion generator threatens an uncontrolled thermal plasma breach.",
    "storyProblem": "Choosing between venting radioactive plasma into the sky and permanently sacrificing the billion-dollar reactor vessel.",
    "prompt": "Choose the reactor containment fail-safe protocol.",
    "question": "How should Elias and Dr. Lena neutralize the unstable fusion reactor?",
    "options": [
      {
        "id": "m19-opt-a",
        "key": "A",
        "title": "Cryogenic Boron Quench — Sacrifice Equipment to Protect the Biosphere",
        "isSustainable": true,
        "image": "/assets/game/story/story-sacrifice.svg",
        "shortDescription": "Flood the reactor chamber with liquid nitrogen and boron beads, permanently fusing the core into safe inert glass.",
        "detailedExplanation": "Destroys the multi-billion-dollar reactor vessel, but completely seals radioactive tritium and isotopes inside an impermeable solid tomb.",
        "characterReaction": {
          "speaker": "Elias",
          "quote": "Cryogenic quench successful! The reaction is inert! The valley and our people are safe from radiation!"
        },
        "consequenceNarration": "Sacrificing the heavy reactor saves the soil, air, and aquifers from nuclear contamination, opening the path for renewable rebuilding.",
        "nextSceneTeaser": "AETHER Core summons all human survivors to the apex chamber for the Final Protocol Vote.",
        "advantages": [
          "Zero atmospheric radiation release and permanent protection of ecosystems",
          "Inert solid glass tomb"
        ],
        "disadvantages": [
          "Destroys the central heavy fusion generator forever"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 40,
          "energy": 25,
          "social": 35,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -20,
          "waterIndex": -20,
          "ewasteIndex": 5,
          "operationalEfficiency": 22,
          "citizenWellbeing": 35,
          "resilienceIndex": 35
        },
        "sharedCityDeltas": {
          "energyStability": 18,
          "networkStability": 18,
          "environmentalHealth": 35,
          "waterAvailability": 22,
          "rescueProgress": 22,
          "publicTrust": 28,
          "ewasteLevel": 5
        },
        "sdgs": [
          3,
          7,
          9,
          13,
          15
        ],
        "trustDeltas": {
          "maya": 18,
          "elias": 16,
          "lena": 15,
          "ori": 16
        },
        "trustNotice": {
          "character": "Maya Lin",
          "text": "Maya recognized the dawn of a truly sustainable Nova City.",
          "positive": true
        }
      },
      {
        "id": "m19-opt-b",
        "key": "B",
        "title": "High-Altitude Atmospheric Plasma Venting",
        "isSustainable": false,
        "image": "/assets/game/story/story-disaster.svg",
        "shortDescription": "Open chimney vents to dump irradiated superheated plasma into the sky to save the physical reactor chamber.",
        "detailedExplanation": "Radioactive fallout settles across the city's drinking reservoirs and farmlands, condemning the region to generational cancer and sickness.",
        "characterReaction": {
          "speaker": "Dr. Lena",
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
          "environmental": -55,
          "energy": -20,
          "social": -50,
          "economic": -35
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 35,
          "waterIndex": 45,
          "ewasteIndex": 15,
          "operationalEfficiency": -22,
          "citizenWellbeing": -50,
          "resilienceIndex": -38
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -18,
          "environmentalHealth": -45,
          "waterAvailability": -38,
          "rescueProgress": -22,
          "publicTrust": -38,
          "ewasteLevel": 22
        },
        "sdgs": [
          3,
          7,
          13,
          15
        ],
        "trustDeltas": {
          "adrian": 10,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Elias Ward",
          "text": "Elias warned the central reactor is nearing critical failure.",
          "positive": false
        }
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
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
    "heroImage": "/assets/game/environments/sunrise-reborn.svg",
    "weather": "clear",
    "storyScene": "At the highest spire above the clouds, lightning illuminates the shattered glass dome. AETHER Core stands before Maya, Elias, Noah, Dr. Lena, Adrian, and ORI as a fading constellation of light. The master terminal awaits the final command that will determine the ultimate destiny of Nova City.",
    "dialogue": [
      {
        "speaker": "ORI",
        "role": "Companion Robot",
        "avatar": "/assets/game/characters/ori-happy.svg",
        "text": "*gentle chime...* [Visor glows soft sky-blue, projecting the faces of all survivors saved throughout the journey]",
        "mood": "hopeful"
      },
      {
        "speaker": "Maya",
        "role": "Main Survivor",
        "avatar": "/assets/game/characters/maya-determined.svg",
        "text": "The Last Signal was never a death knell. It was a question: can humanity learn to live in balance with the earth, or will we repeat the arrogant mistakes of the past?",
        "mood": "determined"
      },
      {
        "speaker": "Elias",
        "role": "Experienced Engineer",
        "avatar": "/assets/game/characters/elias-neutral.svg",
        "text": "Decentralized solar grids. Open community councils. Machines that heal and protect rather than control. That is how Nova City is reborn.",
        "mood": "hopeful"
      }
    ],
    "situation": "The definitive choice for humanity's future: Reboot the city as an eco-intelligent decentralized sanctuary, or sacrifice the surface to seal the subterranean vaults.",
    "environmentalContext": "The final summit convenes at the pinnacle of Nova City. The collective decisions of all survivors determine the ending.",
    "storyProblem": "How should intelligence, robotics, energy, and ecology coexist for the next century of civilization?",
    "prompt": "Transmit the definitive protocol that will shape Nova City's destiny.",
    "question": "What master protocol will you broadcast to conclude The Last Signal?",
    "options": [
      {
        "id": "m20-opt-a",
        "key": "A",
        "title": "Reboot Nova City in Ecological Harmony (Decentralized Physical & Edge AI)",
        "isSustainable": true,
        "image": "/assets/game/story/ending-reborn.svg",
        "shortDescription": "Fuse decentralized edge intelligence, renewable microgrids, and circular robotics into an eco-city.",
        "detailedExplanation": "AETHER relinquishes autocratic control, distributing intelligence to neighborhood solar nodes, wetlands, and open human councils.",
        "characterReaction": {
          "speaker": "Maya",
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
          "environmental": 40,
          "energy": 35,
          "social": 40,
          "economic": 30
        },
        "cityMetricDeltas": {
          "energyIndex": -20,
          "carbonIndex": -25,
          "waterIndex": -20,
          "ewasteIndex": -20,
          "operationalEfficiency": 30,
          "citizenWellbeing": 40,
          "resilienceIndex": 38
        },
        "sharedCityDeltas": {
          "energyStability": 28,
          "networkStability": 28,
          "environmentalHealth": 35,
          "waterAvailability": 28,
          "rescueProgress": 35,
          "publicTrust": 38,
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
        ],
        "trustDeltas": {
          "maya": 20,
          "elias": 20,
          "lena": 20,
          "noah": 20,
          "adrian": 20,
          "ori": 20
        },
        "trustNotice": {
          "character": "Elias Ward",
          "text": "All survivors celebrate the rebirth of Nova City under planetary equilibrium.",
          "positive": true
        }
      },
      {
        "id": "m20-opt-b",
        "key": "B",
        "title": "Emergency Vault Isolation Lockdown (Sacrifice Surface to Preserve Vaults)",
        "isSustainable": false,
        "image": "/assets/game/story/ending-last-light.svg",
        "shortDescription": "Cut surface power and seal the subterranean vaults, locking humanity in frozen stasis until the surface heals.",
        "detailedExplanation": "Abandons the surface towers to silence, trusting only the sealed underground vaults to keep humanity safe in darkness.",
        "characterReaction": {
          "speaker": "Commander Adrian",
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
        ],
        "trustDeltas": {
          "adrian": -8,
          "maya": -10,
          "lena": -10,
          "ori": -12
        },
        "trustNotice": {
          "character": "Commander Adrian",
          "text": "Nova City faces permanent blackout and evacuation.",
          "positive": false
        }
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
      "subtitle": "Sustainable Intelligence & Physical Robotics in Emergency Disaster Response",
      "definition": "Application of localized computing and responsible embodied intelligence to survive infrastructural crises.",
      "realWorldExample": "Edge and physical AI units stabilizing urban lifelines in emergencies.",
      "takeaway": "Sustainable intelligence balances human ethics, physical resource limits, and real-time reflexes.",
      "componentType": "general"
    }
  }

];
