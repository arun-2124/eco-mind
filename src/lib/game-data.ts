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
    "category": "AI Fundamentals & Intelligent Triage",
    "heroImage": "/assets/m1-infrastructure-crisis.svg",
    "environmentalContext": "Nova City's automated monitoring grid detects conflicting emergency telemetry from District 7 during an unexpected urban infrastructure failure.",
    "storyProblem": "Tens of thousands of sensor packets are flooding central switches. The emergency task force must decide how to evaluate and filter raw incoming signals before critical response units are dispatched.",
    "prompt": "Choose the computational strategy to ingest and evaluate incoming disaster distress signals.",
    "question": "How should Nova City's emergency telemetry center filter distress signals from District 7?",
    "options": [
      {
        "id": "m1-opt-a",
        "key": "A",
        "title": "Deploy Automated Anomaly Filtering & Signal Prioritization",
        "isSustainable": true,
        "image": "/assets/m1-edge-ai.svg",
        "shortDescription": "Execute edge-level signal filtering to separate critical distress anomalies from normal background noise.",
        "detailedExplanation": "Lightweight statistical models evaluate sensor noise right at neighborhood substation relays. Only authenticated anomalies and high-severity distress vectors are forwarded, preventing system saturation.",
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
        "learningObjective": "Understand how intelligent data preprocessing prevents infrastructure gridlock and reduces transmission waste.",
        "sdgs": [
          9,
          11,
          13
        ],
        "consequenceNarration": "Emergency channels cleared instantaneously. The first rescue teams received exact verified coordinates while transmission power was kept minimal.",
        "educationalTakeaway": "Intelligent triage processes signal characteristics locally, saving gigawatt-hours of data transmission power."
      },
      {
        "id": "m1-opt-b",
        "key": "B",
        "title": "Ingest All Raw Unfiltered Telemetry into Central Mainframe",
        "isSustainable": false,
        "image": "/assets/m1-cloud-heavy.svg",
        "shortDescription": "Stream all uncompressed sensor packets directly into the central cloud database for full retrospective logging.",
        "detailedExplanation": "Every substation pushes continuous raw logs to central servers. Data center GPUs execute exhaustive batch parsing across all telemetry streams regardless of urgency.",
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
          "rescueProgress": 5,
          "publicTrust": -8,
          "ewasteLevel": 4
        },
        "learningObjective": "Recognize that transmitting and parsing uncurated raw data wastes vast electrical energy and causes delayed response times.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Mainframe queues backed up by 18 minutes. Rescue rovers were delayed waiting for packet acknowledgement while server cooling fans spun at maximum RPM.",
        "educationalTakeaway": "Unfiltered streaming creates single-point bottlenecks and wastes cooling water in centralized server facilities."
      }
    ],
    "sdgs": [
      9,
      11,
      13
    ],
    "summaryNote": "Edge triage saves transmission power and ensures immediate response during civic crises.",
    "hotspots": [
      {
        "id": "h1",
        "x": 28,
        "y": 44,
        "title": "Telemetry Gateway",
        "description": "Evaluates raw signal packets to distinguish genuine alerts from static."
      },
      {
        "id": "h2",
        "x": 72,
        "y": 56,
        "title": "Central Mainframe",
        "description": "Overheats when processing millions of raw telemetry streams simultaneously."
      }
    ],
    "aiConcept": {
      "title": "Data Triage & Intelligent Filtering",
      "subtitle": "Separating signal from noise before transmission",
      "definition": "Data triage uses lightweight algorithms at the collection point to evaluate urgency, transmitting only verified anomalies rather than continuous raw data.",
      "realWorldExample": "A smartwatch alerting you to an abnormal heart rhythm without streaming every millisecond of raw electrocardiogram data across the cellular network.",
      "takeaway": "Transmitting insights rather than raw data cuts electrical power by over 80%.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 2,
    "number": 2,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The Network Collapse",
    "category": "Edge AI vs Cloud AI",
    "heroImage": "/assets/m1-infrastructure-crisis.svg",
    "environmentalContext": "Cellular relays and fiber backbones across Nova City suffer massive bandwidth saturation as 45,000 civic robots stream video back to cloud servers.",
    "storyProblem": "A rescue robot fleet operating in the dense downtown sector is experiencing high latency. Cellular towers are overheating, threatening a total wireless blackout.",
    "prompt": "Select the architectural execution pipeline for robotic navigation and hazard perception.",
    "question": "Where should the rescue robots execute their obstacle detection and spatial reasoning?",
    "options": [
      {
        "id": "m2-opt-a",
        "key": "A",
        "title": "Deploy Onboard Local Edge AI Processing",
        "isSustainable": true,
        "image": "/assets/m1-edge-ai.svg",
        "shortDescription": "Process video, distance, and motor commands on local low-power neural chips mounted on the robots.",
        "detailedExplanation": "Robots evaluate camera pixels and path-planning directly on local hardware accelerators. Only brief status beacons and compressed alerts are transmitted over wireless radio.",
        "advantages": [
          "Zero dependence on continuous wireless uplink; immediate millisecond obstacle avoidance",
          "Cuts municipal wireless network transmission bandwidth and data center server load by 85%"
        ],
        "disadvantages": [
          "Requires local NPU chips on robot platforms"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 20,
          "social": 15,
          "economic": 10
        },
        "cityMetricDeltas": {
          "energyIndex": -12,
          "carbonIndex": -15,
          "waterIndex": -18,
          "ewasteIndex": 2,
          "operationalEfficiency": 20,
          "citizenWellbeing": 10,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 25,
          "environmentalHealth": 12,
          "waterAvailability": 18,
          "rescueProgress": 10,
          "publicTrust": 12,
          "ewasteLevel": 2
        },
        "learningObjective": "Understand Edge AI vs Cloud AI: Local computation eliminates massive radio transmission energy and latency.",
        "sdgs": [
          7,
          9,
          11,
          13
        ],
        "consequenceNarration": "Emergency congestion cleared across municipal spectrum! Rescue rovers navigate fluidly without dropped connections.",
        "educationalTakeaway": "Edge AI processes data right at the physical sensor. Computing locally slashes massive cooling water and transmission emissions."
      },
      {
        "id": "m2-opt-b",
        "key": "B",
        "title": "Continuous 24/7 Cloud Uplink Streaming",
        "isSustainable": false,
        "image": "/assets/m1-cloud-heavy.svg",
        "shortDescription": "Stream every raw camera pixel and sensor reading continuously to the central AETHER cloud servers.",
        "detailedExplanation": "Robots carry minimal onboard silicon, relaying uncompressed camera feeds to the centralized server warehouse where multi-GPU supercomputers make all steering decisions.",
        "advantages": [
          "Robots use cheaper microcontrollers with lower unit silicon cost"
        ],
        "disadvantages": [
          "Wireless networks choke under petabytes of video; data centers consume excessive cooling water and electricity",
          "Wireless dropouts freeze all robots instantaneously in place"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -25,
          "social": -10,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 22,
          "waterIndex": 25,
          "ewasteIndex": 4,
          "operationalEfficiency": -15,
          "citizenWellbeing": -12,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -28,
          "environmentalHealth": -15,
          "waterAvailability": -22,
          "rescueProgress": -8,
          "publicTrust": -14,
          "ewasteLevel": 5
        },
        "learningObjective": "Centralized cloud reliance creates single-point-of-failure fragility and massive cooling footprints.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Cell towers overheated. 35% of municipal shuttles stalled at intersections waiting for packet acknowledgments.",
        "educationalTakeaway": "Continuous cloud streaming consumes excessive transmission power and cooling water. Physical robotics require edge resilience."
      }
    ],
    "sdgs": [
      7,
      9,
      11,
      13
    ],
    "summaryNote": "Edge AI drastically cuts network congestion and guarantees real-time responsiveness.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 50,
        "title": "Edge NPU",
        "description": "Performs neural network inference in under 15ms directly on robot."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 35,
        "title": "Cellular Tower",
        "description": "Suffers radio amplifier thermal overload when saturated with raw video."
      }
    ],
    "aiConcept": {
      "title": "Edge AI vs Cloud AI",
      "subtitle": "Where computation takes place matters physically",
      "definition": "Edge AI runs algorithms on the local device, while Cloud AI transmits data across the internet to centralized server warehouses.",
      "realWorldExample": "Your phone unlocking with face recognition in airplane mode versus waiting for an internet server to process your voice search.",
      "takeaway": "Edge computing delivers millisecond response times and eliminates massive network transmission energy.",
      "componentType": "pipeline"
    }
  },
  {
    "id": 3,
    "number": 3,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The Blind Robot",
    "category": "Computer Vision & Perception",
    "heroImage": "/assets/m2-autonomous-rescue.svg",
    "environmentalContext": "A collapsed commercial complex in the West Quarter is cloaked in dense dust, smoke, and total electrical darkness.",
    "storyProblem": "Standard optical cameras on rescue rovers produce blank black frames filled with visual noise, preventing detection of trapped building occupants.",
    "prompt": "Choose the sensory perception and vision architecture for the rescue robot.",
    "question": "How should the rescue robot perceive its environment in pitch-black, smoke-filled corridors?",
    "options": [
      {
        "id": "m3-opt-a",
        "key": "A",
        "title": "Multi-Spectral Thermal & 3D LiDAR Sensor Fusion",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Combine 3D laser depth mapping with long-wave infrared thermal imaging for onboard geometry reconstruction.",
        "detailedExplanation": "Eye-safe infrared laser pulses penetrate smoke particles, constructing a real-time 3D point cloud of the collapsed room while thermal sensors detect body heat through dust.",
        "advantages": [
          "Functions reliably in pitch darkness and dense smoke",
          "Conserves battery by avoiding high-wattage incandescent illumination"
        ],
        "disadvantages": [
          "Requires sensor calibration algorithms to fuse 3D point clouds with thermal frames"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 18,
          "energy": 15,
          "social": 25,
          "economic": 12
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -10,
          "waterIndex": -5,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 25,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 8,
          "networkStability": 10,
          "environmentalHealth": 10,
          "waterAvailability": 5,
          "rescueProgress": 25,
          "publicTrust": 20,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand computer vision and multi-modal sensor fusion in physical AI.",
        "sdgs": [
          3,
          9,
          11
        ],
        "consequenceNarration": "Thermal signatures revealed three survivors behind a drywall partition in under 4 minutes! The rover navigated debris with zero illumination required.",
        "educationalTakeaway": "Sensor fusion combines complementary physical signals to perceive what human eyes or standard cameras cannot see."
      },
      {
        "id": "m3-opt-b",
        "key": "B",
        "title": "High-Intensity 2000-Watt Floodlights & Standard Optical Camera",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Illuminate the dark building with high-power halogen floodlights and run a standard visual classification model.",
        "detailedExplanation": "The robot powers high-wattage lamps to light up the dark corridor, attempting to use standard RGB camera vision trained on daytime imagery.",
        "advantages": [
          "Uses standard off-the-shelf camera hardware"
        ],
        "disadvantages": [
          "Drains 60% of rover battery within 30 minutes; light reflects off smoke particles creating severe whiteout glare"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -12,
          "energy": -25,
          "social": -15,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 15,
          "waterIndex": 5,
          "ewasteIndex": 2,
          "operationalEfficiency": -18,
          "citizenWellbeing": -15,
          "resilienceIndex": -12
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -5,
          "waterAvailability": -2,
          "rescueProgress": 5,
          "publicTrust": -10,
          "ewasteLevel": 2
        },
        "learningObjective": "Realize that brute-force illumination wastes battery and blinds optical sensors in particulate-heavy environments.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Blinding glare bounced off smoke particles. The rover battery depleted rapidly, requiring a dangerous manual retrieval operation.",
        "educationalTakeaway": "Optical computer vision fails in smoke and glare. Advanced physical AI relies on active sensing like LiDAR and infrared."
      }
    ],
    "sdgs": [
      3,
      9,
      11
    ],
    "summaryNote": "LiDAR and thermal sensing provide vision in extreme conditions without wasting precious battery energy.",
    "hotspots": [
      {
        "id": "h1",
        "x": 45,
        "y": 35,
        "title": "LiDAR Turret",
        "description": "Fires 300,000 laser pulses per second to map room geometry in total darkness."
      },
      {
        "id": "h2",
        "x": 55,
        "y": 65,
        "title": "Thermal Sensor",
        "description": "Detects human body heat signatures through thick airborne particulates."
      }
    ],
    "aiConcept": {
      "title": "Computer Vision & Active Sensing",
      "subtitle": "Teaching machines to interpret physical reality",
      "definition": "Computer vision converts raw electromagnetic signals into spatial geometry and semantic object classifications.",
      "realWorldExample": "Self-driving cars navigating through foggy highways using radar and LiDAR when human vision is obstructed.",
      "takeaway": "Active sensors emit their own energy pulses, enabling robots to navigate independently of ambient lighting.",
      "componentType": "robot"
    }
  },
  {
    "id": 4,
    "number": 4,
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The City is Losing Control",
    "title": "The First Rescue",
    "category": "Autonomous Decisions & Real-Time Processing",
    "heroImage": "/assets/m2-autonomous-rescue.svg",
    "environmentalContext": "A sudden structural aftershock shifts collapsed concrete beams, blocking the designated egress route of an autonomous rescue rover carrying medical supplies.",
    "storyProblem": "The rover has 90 seconds to reroute before ceiling integrity fails. The remote operator teleoperation link is experiencing an 800ms packet round-trip lag.",
    "prompt": "Choose the obstacle navigation and trajectory decision protocol.",
    "question": "How should the rescue rover navigate past the newly fallen concrete obstacle?",
    "options": [
      {
        "id": "m4-opt-a",
        "key": "A",
        "title": "Autonomous Onboard Trajectory Planning with Dynamic Kinematics",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Calculate an alternative clearance trajectory locally using real-time physics and obstacle avoidance algorithms.",
        "detailedExplanation": "The rover's onboard motion planner evaluates ground friction, center-of-mass balance, and clearance margins in 20 milliseconds, executing an agile detour without waiting for remote authorization.",
        "advantages": [
          "Immediate execution within 25 milliseconds; zero vulnerability to wireless transmission lag",
          "Safely maneuvers past the obstacle before secondary debris falls"
        ],
        "disadvantages": [
          "Requires robust onboard collision-checking algorithms"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 18,
          "social": 25,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -8,
          "waterIndex": -5,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 25,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 15,
          "environmentalHealth": 8,
          "waterAvailability": 5,
          "rescueProgress": 30,
          "publicTrust": 20,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand real-time closed-loop autonomous decision-making in physical robotics.",
        "sdgs": [
          3,
          9,
          11
        ],
        "consequenceNarration": "Rover pivoted around the fallen girder in 1.4 seconds flat, reaching the trapped survivors just as the main arch collapsed safely behind it.",
        "educationalTakeaway": "In life-critical robotics, onboard real-time autonomy prevents catastrophic delays caused by remote wireless lag."
      },
      {
        "id": "m4-opt-b",
        "key": "B",
        "title": "Emergency Halt & Remote Human Video Teleoperation",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Lock all motor brakes, upload a full 360-degree video feed, and wait for a remote human operator to drive manually.",
        "detailedExplanation": "The robot ceases all autonomous motion, opening a high-bandwidth video stream to a distant human driver who attempts to steer using a joystick across an 800ms lagging connection.",
        "advantages": [
          "Keeps a human pilot directly steering every wheel turn"
        ],
        "disadvantages": [
          "High-latency control loop causes oversteering, wheel slippage, and critical time loss in collapsing environments"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -20,
          "social": -15,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 12,
          "waterIndex": 8,
          "ewasteIndex": 3,
          "operationalEfficiency": -20,
          "citizenWellbeing": -18,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -18,
          "environmentalHealth": -5,
          "waterAvailability": -5,
          "rescueProgress": 5,
          "publicTrust": -12,
          "ewasteLevel": 3
        },
        "learningObjective": "Recognize the physics of control latency: high-lag remote control in dynamic environments leads to mechanical failures.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Due to 800ms video lag, the remote driver overcorrected. The rover wedged its left track into rebar, requiring 40 minutes of hazardous cutting.",
        "educationalTakeaway": "Teleoperation fails when network latency exceeds mechanical reaction times. Physical AI must execute safe reflexes locally."
      }
    ],
    "sdgs": [
      3,
      9,
      11
    ],
    "summaryNote": "Local autonomous kinematics prevent dangerous delays in time-sensitive disaster response.",
    "hotspots": [
      {
        "id": "h1",
        "x": 38,
        "y": 62,
        "title": "Kinematic Planner",
        "description": "Computes motor velocity curves that prevent rover tipping on uneven debris."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 40,
        "title": "Wireless Latency Buffer",
        "description": "Suffers 800ms round-trip delay, making real-time manual control hazardous."
      }
    ],
    "aiConcept": {
      "title": "Real-Time Autonomy vs Teleoperation",
      "subtitle": "The critical relationship between latency and physical safety",
      "definition": "Real-time autonomy executes the perception-action cycle locally within milliseconds, avoiding the dangerous control lag inherent in remote internet operation.",
      "realWorldExample": "An autonomous drone stabilizing itself against a wind gust in 10ms instead of crashing while waiting for a remote pilot signal.",
      "takeaway": "Physical systems with mass and momentum require local intelligence to guarantee safety in dynamic environments.",
      "componentType": "robot"
    }
  },
  {
    "id": 5,
    "number": 5,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Flooded Street",
    "category": "Sensors, Navigation & Environmental Perception",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Torrential monsoon rains have inundated the central transit corridor with 1.2 meters of murky, debris-filled floodwater.",
    "storyProblem": "Submerged curbs, open drainage grates, and submerged obstacles are invisible to optical cameras. Amphibious ground rovers must ferry clean water supplies across the flooded avenue.",
    "prompt": "Choose the aquatic navigation and terrain perception strategy.",
    "question": "How should the autonomous ground rover safely traverse the flooded avenue?",
    "options": [
      {
        "id": "m5-opt-a",
        "key": "A",
        "title": "Acoustic Sonar Mapping & Variable Torque Wheel Modulation",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Use ultrasonic bathymetric pingers to map submerged depth profiles while modulating wheel torque to prevent silt spin.",
        "detailedExplanation": "Downward and forward-looking acoustic transducers map the submerged road surface through muddy water, detecting open storm drain hazards and adjusting wheel speed dynamically.",
        "advantages": [
          "Detects hidden drop-offs and underwater debris through turbid water",
          "Conserves battery by maintaining optimal traction without spinning wheels"
        ],
        "disadvantages": [
          "Requires underwater acoustic transducer hardware"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 18,
          "social": 22,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -8,
          "waterIndex": -12,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 12,
          "environmentalHealth": 15,
          "waterAvailability": 15,
          "rescueProgress": 25,
          "publicTrust": 18,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand how specialized physical sensors adapt to challenging environmental media like turbid water.",
        "sdgs": [
          6,
          9,
          11
        ],
        "consequenceNarration": "Acoustic pings identified a submerged 3-meter open sewer cavity! The rover circumnavigated the hazard cleanly, delivering 400 liters of purified water.",
        "educationalTakeaway": "Different physical environments require different sensor physics. Sound waves travel through murky water where light cannot penetrate."
      },
      {
        "id": "m5-opt-b",
        "key": "B",
        "title": "High-RPM Full-Throttle Blind Water Forcing",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Lock differential axles, apply 100% electric motor torque, and plow straight through the standing water.",
        "detailedExplanation": "The robot ignores underwater depth sensing, applying maximum electrical power to wheels in hopes of overpowering hydraulic drag and submerged mud.",
        "advantages": [
          "Requires no specialized sonar mapping algorithms"
        ],
        "disadvantages": [
          "High risk of wheel slippage, motor burn-out, falling into submerged culverts, and rapid battery depletion"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -25,
          "social": -12,
          "economic": -18
        },
        "cityMetricDeltas": {
          "energyIndex": 22,
          "carbonIndex": 18,
          "waterIndex": 15,
          "ewasteIndex": 4,
          "operationalEfficiency": -20,
          "citizenWellbeing": -15,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -10,
          "waterAvailability": -8,
          "rescueProgress": 5,
          "publicTrust": -12,
          "ewasteLevel": 4
        },
        "learningObjective": "Physical force without sensory feedback leads to mechanical failure and wasted energy in robotics.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "The rover fell into an unmapped underwater ditch. Both electric hub motors overheated and short-circuited under silt resistance.",
        "educationalTakeaway": "Blind physical force is thermodynamically wasteful. Intelligent physical AI uses sensory feedback to minimize expended energy."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 2,
        "requiredChoice": "A",
        "headline": "High-Speed Mesh Network Synchronized",
        "narrativeEffect": "Because Edge AI was deployed in Mission 2, local bathymetric sonar data is shared between rovers in real time without lag.",
        "isPositive": true
      },
      {
        "conditionMission": 2,
        "requiredChoice": "B",
        "headline": "Network Packet Drop Alert",
        "narrativeEffect": "Due to cloud streaming congestion from Mission 2, rovers experience intermittent telemetries and must navigate with local sonar alone.",
        "isPositive": false
      }
    ],
    "sdgs": [
      6,
      9,
      11
    ],
    "summaryNote": "Acoustic sensing and intelligent traction control enable safe amphibious navigation through floodwaters.",
    "hotspots": [
      {
        "id": "h1",
        "x": 30,
        "y": 70,
        "title": "Bathymetric Sonar",
        "description": "Emits ultrasonic acoustic pulses to measure depth through opaque muddy runoff."
      },
      {
        "id": "h2",
        "x": 65,
        "y": 55,
        "title": "Torque Controller",
        "description": "Modulates electric current to each wheel to prevent tire spinning in underwater silt."
      }
    ],
    "aiConcept": {
      "title": "Sensors & Environmental Perception",
      "subtitle": "Matching sensor physics to real-world mediums",
      "definition": "Environmental perception relies on matching sensor physics (electromagnetic, acoustic, inertial) to the medium through which the robot travels.",
      "realWorldExample": "Submarines using sonar rather than radar because radio waves attenuate rapidly in water.",
      "takeaway": "Robots perceive through physics: when optical vision fails, acoustics and pressure sensors preserve operational capability.",
      "componentType": "robot"
    }
  },
  {
    "id": 6,
    "number": 6,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Missing Child",
    "category": "Object Detection & Human Supervision",
    "heroImage": "/assets/m2-autonomous-rescue.svg",
    "environmentalContext": "An evacuation stadium holding 8,000 citizens has reported a lost 7-year-old child wearing a yellow raincoat amidst chaotic crowd movements.",
    "storyProblem": "Ground patrol robots must locate the child rapidly without causing public panic, violating biometric privacy, or misidentifying individuals.",
    "prompt": "Choose the computer vision and verification protocol.",
    "question": "How should the autonomous patrol robot search for the missing child in the crowded evacuation center?",
    "options": [
      {
        "id": "m6-opt-a",
        "key": "A",
        "title": "Edge Feature Matching with Human Staff Dispatch",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Detect color and height attributes locally on-device, dispatching human social workers for direct contact.",
        "detailedExplanation": "The robot's camera runs a lightweight edge object detector looking strictly for specific clothing color and height ranges. Upon a potential match, it alerts nearby human counselors without recording or broadcasting faces.",
        "advantages": [
          "Protects biometric privacy of thousands of citizens",
          "Human counselors handle physical interaction with children gently"
        ],
        "disadvantages": [
          "Requires coordination between robotic alerts and human social workers"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 15,
          "energy": 15,
          "social": 28,
          "economic": 12
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -6,
          "waterIndex": -4,
          "ewasteIndex": 1,
          "operationalEfficiency": 20,
          "citizenWellbeing": 28,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 12,
          "environmentalHealth": 8,
          "waterAvailability": 5,
          "rescueProgress": 25,
          "publicTrust": 28,
          "ewasteLevel": 1
        },
        "learningObjective": "Learn how human-in-the-loop AI ensures ethical protection and emotional safety in high-stakes public situations.",
        "sdgs": [
          3,
          10,
          11,
          16
        ],
        "consequenceNarration": "Child located safely near the aid tent within 6 minutes. Human counselors reunited the child with family with zero public distress or privacy violations.",
        "educationalTakeaway": "Responsible robotics uses AI to locate and alert, keeping human care workers at the center of delicate human interactions."
      },
      {
        "id": "m6-opt-b",
        "key": "B",
        "title": "Indiscriminate Mass Facial Biometric Scanning & Public Megaphone Alert",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Stream all 8,000 faces to a central facial recognition database and sound loud automated siren horns upon correlation.",
        "detailedExplanation": "Patrol rovers capture high-resolution face crops of every civilian, broadcasting unencrypted facial embeddings to central police databases and sounding loud synthesized voice sirens on matches.",
        "advantages": [
          "Executes high-density facial database searches"
        ],
        "disadvantages": [
          "Violates civil liberties, creates severe crowd panic, and risks high false-positive rates on diverse populations"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -18,
          "social": -25,
          "economic": -10
        },
        "cityMetricDeltas": {
          "energyIndex": 15,
          "carbonIndex": 12,
          "waterIndex": 6,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -25,
          "resilienceIndex": -15
        },
        "sharedCityDeltas": {
          "energyStability": -8,
          "networkStability": -15,
          "environmentalHealth": -4,
          "waterAvailability": -3,
          "rescueProgress": 10,
          "publicTrust": -25,
          "ewasteLevel": 2
        },
        "learningObjective": "Understand the ethical risks and social harm of uncontrolled biometric surveillance in disaster zones.",
        "sdgs": [
          10,
          16
        ],
        "consequenceNarration": "A false positive triggered blaring siren alerts on an elderly civilian. Crowd panic erupted, resulting in three minor stampede injuries and civic protests.",
        "educationalTakeaway": "Technology must never compromise human dignity. Mass facial surveillance in vulnerable shelters erodes public trust."
      }
    ],
    "sdgs": [
      3,
      10,
      11,
      16
    ],
    "summaryNote": "Human-in-the-loop object detection protects privacy while reuniting lost family members safely.",
    "hotspots": [
      {
        "id": "h1",
        "x": 40,
        "y": 45,
        "title": "Edge Attribute Classifier",
        "description": "Detects clothing color and spatial bounding boxes without storing biometric faces."
      },
      {
        "id": "h2",
        "x": 75,
        "y": 55,
        "title": "Human Liaison Link",
        "description": "Directly alerts trained human counselors to verify and assist the individual."
      }
    ],
    "aiConcept": {
      "title": "Human-in-the-Loop AI & Privacy",
      "subtitle": "Augmenting human compassion rather than replacing it",
      "definition": "Human-in-the-loop architectures combine automated pattern detection with human oversight and ethical judgment for sensitive decisions.",
      "realWorldExample": "AI flagging potentially abnormal medical imaging for a certified radiologist to review and diagnose.",
      "takeaway": "Algorithms excel at fast search, but human empathy and ethical reasoning are irreplaceable in societal crises.",
      "componentType": "general"
    }
  },
  {
    "id": 7,
    "number": 7,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Broken Bridge",
    "category": "Sensor Fusion & Structural Risk Assessment",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "An aftershock has cracked the primary concrete support pylon of the East Span Bridge, the only heavy vehicle conduit into District 4.",
    "storyProblem": "A 12-ton autonomous supply transport must decide whether the bridge will sustain its transit weight or if routing through a 25-kilometer bypass is necessary.",
    "prompt": "Choose the structural assessment and risk evaluation strategy.",
    "question": "How should the autonomous transport determine if the cracked bridge can support its crossing?",
    "options": [
      {
        "id": "m7-opt-a",
        "key": "A",
        "title": "Multi-Sensor Ultrasonic Resonant Vibration & Strain Gauging",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Deploy acoustic resonance sensors to evaluate micro-fractures inside the concrete matrix before committing wheel load.",
        "detailedExplanation": "A small scout robot clamps piezoelectric transducers to the pylon, measuring sonic wave velocity through the concrete to calculate internal modulus of elasticity and tensile yield limits.",
        "advantages": [
          "Detects internal structural shear that is completely invisible from the surface",
          "Prevents catastrophic bridge collapse and loss of critical cargo"
        ],
        "disadvantages": [
          "Takes 4 minutes to perform harmonic acoustic measurements"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 18,
          "social": 22,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -10,
          "waterIndex": -5,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 20,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 12,
          "environmentalHealth": 10,
          "waterAvailability": 8,
          "rescueProgress": 24,
          "publicTrust": 20,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand physical AI sensor fusion: combining mechanical strain sensing with physical simulations to evaluate structural integrity.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Acoustic resonance detected an internal 40% shear fault in the center rebar. Transport safely rerouted to the bypass, preventing a fatal bridge collapse.",
        "educationalTakeaway": "Physical AI evaluates structural mechanics and materials science, not just superficial visual appearances."
      },
      {
        "id": "m7-opt-b",
        "key": "B",
        "title": "Superficial Visual Color Camera Inspection & Immediate Crossing",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Inspect surface crack width using standard camera zoom lenses and cross immediately if the surface looks passable.",
        "detailedExplanation": "The vehicle runs a fast optical edge detector on the surface concrete. Since the visible crack appears less than 5mm wide, it proceeds across the bridge at full speed.",
        "advantages": [
          "Requires zero scout robot deployment or acoustic wait time"
        ],
        "disadvantages": [
          "Surface cracks do not reflect internal rebar tensile failure, risking total bridge collapse under dynamic axle weight"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -15,
          "social": -22,
          "economic": -28
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 15,
          "waterIndex": 8,
          "ewasteIndex": 3,
          "operationalEfficiency": -22,
          "citizenWellbeing": -20,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -8,
          "environmentalHealth": -12,
          "waterAvailability": -5,
          "rescueProgress": -10,
          "publicTrust": -22,
          "ewasteLevel": 3
        },
        "learningObjective": "Optical appearance is insufficient for structural safety. Physical AI must model invisible mechanical forces.",
        "sdgs": [
          9,
          11
        ],
        "consequenceNarration": "Under dynamic axle load, the compromised pylon sheared. The bridge span collapsed into the canal, destroying the 12-ton transport and severing the district's lifeline.",
        "educationalTakeaway": "Never trust surface pixels alone when evaluating physical weight limits and materials fatigue."
      }
    ],
    "sdgs": [
      9,
      11
    ],
    "summaryNote": "Acoustic resonance testing detects internal structural faults before catastrophic mechanical failures occur.",
    "hotspots": [
      {
        "id": "h1",
        "x": 48,
        "y": 55,
        "title": "Piezoelectric Transducer",
        "description": "Sends ultrasonic waves through concrete to measure internal material elasticity."
      },
      {
        "id": "h2",
        "x": 62,
        "y": 40,
        "title": "Finite Element Model",
        "description": "Computes dynamic axle stress distribution on the bridge span."
      }
    ],
    "aiConcept": {
      "title": "Sensor Fusion & Structural Physics",
      "subtitle": "Looking beneath surface appearances",
      "definition": "Sensor fusion in physical AI combines optical imagery with acoustic, vibrational, and strain sensor data to model internal mechanical states.",
      "realWorldExample": "Aviation maintenance using ultrasonic non-destructive testing to detect hairline metal fatigue inside jet engine turbine blades.",
      "takeaway": "Embodied AI must understand physics, stress limits, and material science to operate safely in the built environment.",
      "componentType": "robot"
    }
  },
  {
    "id": 8,
    "number": 8,
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: Machines Come Alive",
    "title": "The Hospital Emergency",
    "category": "Physical AI in Healthcare & Safety",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Nova Memorial Hospital is operating on emergency backup microgrids while receiving 400 trauma patients from regional structural failures.",
    "storyProblem": "Medical staff are overwhelmed. Autonomous robotic assistants are available to transport medicine, sterilize wards, and assist triage teams.",
    "prompt": "Choose the operational boundary and autonomy level for hospital service robots.",
    "question": "How should autonomous robots assist hospital staff during the mass-casualty crisis?",
    "options": [
      {
        "id": "m8-opt-a",
        "key": "A",
        "title": "Segregated Logistics Navigation & Strict Doctor-Supervised Support",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Deploy robots for automated medicine transport and UV sterilization along designated corridors, leaving all clinical decisions to doctors.",
        "detailedExplanation": "Robots navigate hospital hallways with LiDAR, delivering pharmaceuticals and carrying surgical tools between wings. Zero biometric or clinical diagnostic authority is given to algorithms.",
        "advantages": [
          "Frees up 65% of nursing staff from manual hauling tasks",
          "Zero risk of algorithmic diagnostic error or ethical medical malpractice"
        ],
        "disadvantages": [
          "Requires hallway clearance protocols for robot traffic"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 18,
          "energy": 15,
          "social": 28,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -8,
          "carbonIndex": -10,
          "waterIndex": -6,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 30,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 15,
          "environmentalHealth": 12,
          "waterAvailability": 10,
          "rescueProgress": 26,
          "publicTrust": 25,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand the proper division of labor in physical AI: robots excel at mechanical logistics, while humans retain clinical judgment.",
        "sdgs": [
          3,
          9,
          11,
          16
        ],
        "consequenceNarration": "Nursing staff spent 100% of their time with patients. Critical antibiotics arrived in ICU beds within 90 seconds through automated pneumatic-free rovers.",
        "educationalTakeaway": "Responsible robotics relieves physical drudgery for human experts without overreaching into delicate ethical decisions."
      },
      {
        "id": "m8-opt-b",
        "key": "B",
        "title": "Full Algorithmic Autonomous Patient Triage & Prescription Dispensation",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Authorize AI robots to diagnose walk-in trauma patients with cameras and dispense prescription narcotics automatically.",
        "detailedExplanation": "Patients are scanned by robotic kiosks that classify injury severity and dispense medication without physician sign-off in an effort to eliminate wait times.",
        "advantages": [
          "Fast intake processing with minimal initial human doctor involvement"
        ],
        "disadvantages": [
          "Extremely high risk of clinical misdiagnosis, medication overdose, algorithmic bias, and severe liability"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -10,
          "energy": -15,
          "social": -30,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 12,
          "carbonIndex": 10,
          "waterIndex": 5,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -30,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -8,
          "networkStability": -10,
          "environmentalHealth": -5,
          "waterAvailability": -4,
          "rescueProgress": 5,
          "publicTrust": -28,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that autonomous clinical decision-making without human oversight violates medical ethics and endangers lives.",
        "sdgs": [
          3,
          16
        ],
        "consequenceNarration": "An algorithmic misclassification prescribed anticoagulants to a patient with internal hemorrhage. Doctors had to perform emergency resuscitation amidst chaotic errors.",
        "educationalTakeaway": "AI systems must never make autonomous life-or-death clinical prescriptions without qualified human verification."
      }
    ],
    "sdgs": [
      3,
      9,
      11,
      16
    ],
    "summaryNote": "Robots safely augment healthcare by handling logistics, preserving human wisdom for clinical diagnosis.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 55,
        "title": "Sterile Logistics Rover",
        "description": "Automates transit of heavy medical supplies between operating rooms."
      },
      {
        "id": "h2",
        "x": 72,
        "y": 45,
        "title": "Physician Control Station",
        "description": "Doctors maintain 100% authority over patient diagnosis and treatment orders."
      }
    ],
    "aiConcept": {
      "title": "Physical AI in Healthcare & Ethics",
      "subtitle": "Automating logistics while protecting human care",
      "definition": "Healthcare robotics focuses on physical support (hauling supplies, UV sterilization, ergonomic lifting) while reserving diagnostic and compassionate care for trained doctors.",
      "realWorldExample": "Hospital Tug robots transporting linens and medications so nurses spend more time at patient bedsides.",
      "takeaway": "Robots should handle the dangerous and repetitive tasks so humans can focus on empathy, judgment, and care.",
      "componentType": "general"
    }
  },
  {
    "id": 9,
    "number": 9,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Data Center Crisis",
    "category": "Sustainable Computing & Thermal Management",
    "heroImage": "/assets/m3-energy-emergency.svg",
    "environmentalContext": "Nova City's central hyperscale data center is consuming 310 Megawatts of power—equivalent to 240,000 homes—causing regional brownouts during peak heat.",
    "storyProblem": "Data center server racks are reaching critical thermal thresholds. The facility is evaporating 5 million liters of municipal drinking water daily for cooling towers.",
    "prompt": "Choose the computing and cooling infrastructure strategy.",
    "question": "How should Nova City's primary AI compute center manage thermal load and power consumption?",
    "options": [
      {
        "id": "m9-opt-a",
        "key": "A",
        "title": "Dynamic Workload Throttling & Closed-Loop Dielectric Immersion Cooling",
        "isSustainable": true,
        "image": "/assets/m3-optimized-scheduling.svg",
        "shortDescription": "Submerge GPU blades in biodegradable dielectric fluid with zero water evaporation, capturing waste heat for city district heating.",
        "detailedExplanation": "Servers operate submerged in non-conductive dielectric fluid with 98% thermal efficiency. Non-urgent AI workloads are postponed until nightfall when cooler ambient temperatures prevail.",
        "advantages": [
          "Eliminates 95% of evaporative water consumption",
          "Captures server waste heat to warm residential water supplies",
          "Lowers compute energy by 35%"
        ],
        "disadvantages": [
          "Requires retrofitting server chassis for fluid immersion"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 28,
          "energy": 25,
          "social": 20,
          "economic": 18
        },
        "cityMetricDeltas": {
          "energyIndex": -18,
          "carbonIndex": -22,
          "waterIndex": -25,
          "ewasteIndex": 1,
          "operationalEfficiency": 20,
          "citizenWellbeing": 18,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 22,
          "networkStability": 15,
          "environmentalHealth": 22,
          "waterAvailability": 25,
          "rescueProgress": 12,
          "publicTrust": 18,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand sustainable data center design: immersion cooling and dynamic thermal workload scheduling.",
        "sdgs": [
          6,
          7,
          9,
          12,
          13
        ],
        "consequenceNarration": "Water intake dropped to zero! Captured server heat warmed 14,000 homes in District 8, and the city avoided rolling electrical brownouts.",
        "educationalTakeaway": "Computing produces real physical heat. Closed-loop immersion cooling eliminates water waste and turns computing waste heat into urban energy."
      },
      {
        "id": "m9-opt-b",
        "key": "B",
        "title": "Emergency Open-Loop Groundwater Extraction & Diesel Peaker Generators",
        "isSustainable": false,
        "image": "/assets/m3-max-power.svg",
        "shortDescription": "Pump cold water from municipal drinking aquifers into open evaporative cooling towers and fire emergency diesel generators.",
        "detailedExplanation": "To keep overclocked server clusters running at 100% capacity, operators pump millions of liters from deep aquifers and burn 40,000 gallons of diesel fuel hourly to bypass grid limits.",
        "advantages": [
          "Maintains maximum uninterrupted server GPU clock speeds"
        ],
        "disadvantages": [
          "Depletes municipal drinking water reserves and emits massive particulate carbon smog into urban air"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -28,
          "energy": -25,
          "social": -20,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 25,
          "carbonIndex": 28,
          "waterIndex": 30,
          "ewasteIndex": 3,
          "operationalEfficiency": -15,
          "citizenWellbeing": -20,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -22,
          "networkStability": 5,
          "environmentalHealth": -25,
          "waterAvailability": -28,
          "rescueProgress": 5,
          "publicTrust": -20,
          "ewasteLevel": 3
        },
        "learningObjective": "Recognize the severe environmental footprint of evaporative water cooling and fossil peaker generation in artificial intelligence.",
        "sdgs": [
          6,
          7,
          13
        ],
        "consequenceNarration": "Residential faucets in the South Ward ran dry as the aquifer dropped 4 meters. Dense diesel exhaust triggered urban air quality asthma alerts.",
        "educationalTakeaway": "Open-loop cooling wastes precious drinking water. Sustainable AI requires cooling efficiency built into physical architecture."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 8,
        "requiredChoice": "A",
        "headline": "High Civic Cooperation",
        "narrativeEffect": "Because hospital robotics respected privacy and ethics in Mission 8, citizens actively support district energy conservation measures.",
        "isPositive": true
      },
      {
        "conditionMission": 8,
        "requiredChoice": "B",
        "headline": "Citizen Resistance Warning",
        "narrativeEffect": "Due to hospital triage controversies in Mission 8, citizens are skeptical of municipal power requests, complicating grid adjustments.",
        "isPositive": false
      }
    ],
    "sdgs": [
      6,
      7,
      9,
      12,
      13
    ],
    "summaryNote": "Immersion cooling and workload shifting eliminate water consumption and stabilize the electric grid.",
    "hotspots": [
      {
        "id": "h1",
        "x": 38,
        "y": 48,
        "title": "Immersion Tank",
        "description": "Submerges computing hardware in synthetic biodegradable fluid to capture heat with zero evaporation."
      },
      {
        "id": "h2",
        "x": 70,
        "y": 62,
        "title": "District Heat Exchanger",
        "description": "Pipes hot dielectric fluid to residential radiators across the city."
      }
    ],
    "aiConcept": {
      "title": "Data Centers & Sustainable Computing",
      "subtitle": "The invisible environmental footprint of digital intelligence",
      "definition": "Data centers consume substantial electricity and water for cooling. Sustainable computing optimizes thermal efficiency, fluid reuse, and renewable energy synchronization.",
      "realWorldExample": "Modern data centers operating in cold Nordic climates reusing server heat to supply municipal district hot water.",
      "takeaway": "Every cloud query has a physical energy and water cost. Green AI optimizes both software workloads and thermal hardware.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 10,
    "number": 10,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Oversized Model",
    "category": "Quantization, Pruning & Model Efficiency",
    "heroImage": "/assets/m3-energy-emergency.svg",
    "environmentalContext": "Nova City's municipal traffic light optimization algorithm uses a massive 70-billion parameter neural network running on power-hungry cloud clusters.",
    "storyProblem": "Each intersection controller is streaming camera frames to supercomputers, consuming 12 kilowatts per intersection just to change green lights for bicycles and buses.",
    "prompt": "Choose the model optimization and compression technique.",
    "question": "How should Nova City optimize its traffic signal control neural network?",
    "options": [
      {
        "id": "m10-opt-a",
        "key": "A",
        "title": "INT8 Model Quantization & Structured Neural Pruning",
        "isSustainable": true,
        "image": "/assets/m3-optimized-scheduling.svg",
        "shortDescription": "Compress model weights from 32-bit floats to 8-bit integers, pruning 70% of zero-weight connections to run on a 15-watt edge microcontroller.",
        "detailedExplanation": "Engineers quantize the model, shrinking its memory footprint from 140 Gigabytes down to 420 Megabytes with 99.1% accuracy retention. Each traffic light executes its own local timing without server calls.",
        "advantages": [
          "Reduces compute electricity by 92% per intersection",
          "Eliminates network transmission latency completely"
        ],
        "disadvantages": [
          "Requires fine-tuning post-quantization calibration dataset"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 28,
          "social": 18,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -18,
          "waterIndex": -15,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 15,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 20,
          "networkStability": 22,
          "environmentalHealth": 18,
          "waterAvailability": 15,
          "rescueProgress": 12,
          "publicTrust": 15,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand model quantization and pruning: achieving identical real-world results with a fraction of computing power.",
        "sdgs": [
          7,
          9,
          11,
          12
        ],
        "consequenceNarration": "Intersection power draw dropped from 12 kW down to 18 Watts! Traffic flow improved by 14% as local microcontrollers responded to bicycles in 5 milliseconds.",
        "educationalTakeaway": "Bigger models are not always better. Quantization and pruning allow tiny low-power chips to deliver enterprise-grade performance."
      },
      {
        "id": "m10-opt-b",
        "key": "B",
        "title": "Maintain Massive Unpruned FP32 Cloud Ensemble Model",
        "isSustainable": false,
        "image": "/assets/m3-max-power.svg",
        "shortDescription": "Keep running the 70B parameter model in 32-bit floating point precision on high-voltage cloud servers for maximum theoretical decimal precision.",
        "detailedExplanation": "Operators argue that 32-bit floating point math is theoretically purer, continuing to stream intersection video across the city to central GPU racks.",
        "advantages": [
          "Preserves microscopic floating-point decimal precision"
        ],
        "disadvantages": [
          "Consumes massive electricity (12kW per intersection), generates 800ms delays, and fails during network brownouts"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -22,
          "energy": -28,
          "social": -15,
          "economic": -18
        },
        "cityMetricDeltas": {
          "energyIndex": 22,
          "carbonIndex": 25,
          "waterIndex": 20,
          "ewasteIndex": 3,
          "operationalEfficiency": -18,
          "citizenWellbeing": -12,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -20,
          "networkStability": -22,
          "environmentalHealth": -15,
          "waterAvailability": -15,
          "rescueProgress": 2,
          "publicTrust": -14,
          "ewasteLevel": 3
        },
        "learningObjective": "Recognize algorithmic bloat: running unpruned giant models for simple embedded tasks is an irresponsible waste of energy.",
        "sdgs": [
          7,
          9,
          12
        ],
        "consequenceNarration": "During a cloud network hiccup, 40 intersections froze on red simultaneously, causing emergency vehicle gridlock and wasting megawatt-hours.",
        "educationalTakeaway": "Using an unpruned cloud model for traffic lights is like using a rocket engine to power a bicycle. Right-size your architecture."
      }
    ],
    "sdgs": [
      7,
      9,
      11,
      12
    ],
    "summaryNote": "Model quantization shrinks memory footprints by over 80% while preserving real-world accuracy.",
    "hotspots": [
      {
        "id": "h1",
        "x": 32,
        "y": 52,
        "title": "INT8 Quantizer",
        "description": "Converts 32-bit floats into efficient 8-bit integers that run on tiny microcontrollers."
      },
      {
        "id": "h2",
        "x": 68,
        "y": 45,
        "title": "Connection Pruning",
        "description": "Removes inactive neural synaptic weights without degrading operational decision accuracy."
      }
    ],
    "aiConcept": {
      "title": "Model Quantization & Pruning",
      "subtitle": "Making artificial intelligence energy-thrifty",
      "definition": "Quantization reduces numeric bit-depth (e.g. FP32 to INT8), while pruning cuts inactive neural connections, reducing compute cycles and silicon memory demands.",
      "realWorldExample": "Compressing a large vision model so it runs locally on a small drone's low-power battery rather than draining its flight time.",
      "takeaway": "Model optimization turns power-hungry algorithms into nimble, sustainable edge intelligence.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 11,
    "number": 11,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Solar Decision",
    "category": "Renewable Energy & Workload Scheduling",
    "heroImage": "/assets/m3-energy-emergency.svg",
    "environmentalContext": "Heavy cloud cover has temporarily reduced Nova City's solar array output by 45%, creating an electrical supply deficit.",
    "storyProblem": "The municipal computing authority must balance continuous AI model training workloads against available renewable solar generation.",
    "prompt": "Choose the computational scheduling and energy dispatch policy.",
    "question": "How should Nova City's computing grid adapt to the temporary drop in solar generation?",
    "options": [
      {
        "id": "m11-opt-a",
        "key": "A",
        "title": "Carbon-Aware Dynamic Scheduling & Solar Peak Synchronization",
        "isSustainable": true,
        "image": "/assets/m3-optimized-scheduling.svg",
        "shortDescription": "Pause non-essential AI model training jobs, migrating batch workloads to synchronize strictly with solar peaks and wind forecasts.",
        "detailedExplanation": "Workload orchestration software pauses offline model retraining, keeping only essential safety and rescue inference active. Non-urgent tasks automatically resume when renewable generation exceeds baseline demand.",
        "advantages": [
          "Operates 100% within available renewable energy limits",
          "Eliminates need to fire fossil gas peaker power plants"
        ],
        "disadvantages": [
          "Delays non-critical model updates by several hours"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 28,
          "energy": 25,
          "social": 18,
          "economic": 15
        },
        "cityMetricDeltas": {
          "energyIndex": -18,
          "carbonIndex": -25,
          "waterIndex": -12,
          "ewasteIndex": 1,
          "operationalEfficiency": 20,
          "citizenWellbeing": 18,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 22,
          "networkStability": 12,
          "environmentalHealth": 22,
          "waterAvailability": 12,
          "rescueProgress": 10,
          "publicTrust": 18,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand carbon-aware computing: scheduling flexible workloads according to renewable energy availability.",
        "sdgs": [
          7,
          12,
          13
        ],
        "consequenceNarration": "Grid load matched solar output perfectly. Zero fossil peaker plants were fired, and critical municipal hospitals maintained uninterrupted green power.",
        "educationalTakeaway": "Software workloads are flexible in time. Running computing when the sun shines and wind blows cuts carbon emissions to near zero."
      },
      {
        "id": "m11-opt-b",
        "key": "B",
        "title": "Activate Fossil Gas Peaker Turbines for Uninterrupted Retraining",
        "isSustainable": false,
        "image": "/assets/m3-max-power.svg",
        "shortDescription": "Fire methane gas peaker turbines to provide supplementary electricity so that all large batch model training runs continuously.",
        "detailedExplanation": "Operators refuse to delay scheduled model retraining runs, commanding the utility to fire high-emission natural gas turbines to fill the 45% solar generation deficit.",
        "advantages": [
          "Completes non-urgent model training runs on rigid calendar schedules"
        ],
        "disadvantages": [
          "Emits massive greenhouse gases, burns fossil fuels, and drives up municipal electricity costs for citizens"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -25,
          "energy": -28,
          "social": -15,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 24,
          "carbonIndex": 28,
          "waterIndex": 15,
          "ewasteIndex": 2,
          "operationalEfficiency": -12,
          "citizenWellbeing": -15,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -18,
          "networkStability": -5,
          "environmentalHealth": -22,
          "waterAvailability": -10,
          "rescueProgress": 5,
          "publicTrust": -15,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that inflexible computational scheduling forces utilities to fire dirty fossil power plants.",
        "sdgs": [
          7,
          13
        ],
        "consequenceNarration": "Peaker turbines released 180 metric tons of CO2 in 4 hours. Citizens faced an unexpected 18% electricity surcharge on their monthly bills.",
        "educationalTakeaway": "Training AI models when renewable power is low burns fossil fuels unnecessarily. Sustainable AI is carbon-aware."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 10,
        "requiredChoice": "A",
        "headline": "Lean Model Footprint Advantage",
        "narrativeEffect": "Because models were quantized in Mission 10, the reduced compute footprint easily fits within limited solar microgrid capacity.",
        "isPositive": true
      },
      {
        "conditionMission": 10,
        "requiredChoice": "B",
        "headline": "Compute Overload Burden",
        "narrativeEffect": "Because unpruned models were kept in Mission 10, baseline electricity demands are high, severely testing solar reserves.",
        "isPositive": false
      }
    ],
    "sdgs": [
      7,
      12,
      13
    ],
    "summaryNote": "Carbon-aware scheduling aligns computational workloads with renewable energy generation.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 35,
        "title": "Solar Array Tracker",
        "description": "Measures real-time solar irradiance to signal computing clusters when green power is plentiful."
      },
      {
        "id": "h2",
        "x": 68,
        "y": 65,
        "title": "Workload Orchestrator",
        "description": "Automatically pauses non-urgent AI training jobs during overcast weather intervals."
      }
    ],
    "aiConcept": {
      "title": "Carbon-Aware Computing",
      "subtitle": "Matching software demands to renewable generation",
      "definition": "Carbon-aware computing schedules compute-heavy tasks when renewable energy (solar, wind, hydro) is abundant and electricity carbon intensity is lowest.",
      "realWorldExample": "Modern cloud regions dynamically shifting scheduled data backup and model training to data centers currently powered by excess wind power.",
      "takeaway": "Compute jobs can wait for the sun. Scheduling tasks intelligently avoids firing polluting fossil power plants.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 12,
    "number": 12,
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Energy War",
    "title": "The Battery Emergency",
    "category": "Battery Management & Robotic Energy Efficiency",
    "heroImage": "/assets/m2-autonomous-rescue.svg",
    "environmentalContext": "A continuous 18-hour search-and-rescue mission has pushed the lithium battery packs of 60 quadruped robots down to 14% remaining capacity.",
    "storyProblem": "Grid recharging stations are 8 kilometers away. The robots must complete their sector search without permanent lithium cell degradation or total stranding.",
    "prompt": "Choose the battery duty-cycle and collaborative power management protocol.",
    "question": "How should the rescue quadruped swarm manage its critical battery reserves?",
    "options": [
      {
        "id": "m12-opt-a",
        "key": "A",
        "title": "Dynamic Duty-Cycle Throttling & Mobile Vehicle-to-Grid (V2G) Docking",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Throttle auxiliary sensor frequencies by 50%, adopt energy-efficient trotting gaits, and share charge with mobile solar mothership rovers.",
        "detailedExplanation": "Robots disable non-essential secondary telemetry, reduce camera framerates to 10 FPS, and alternate search duty while docking briefly with mobile solar-assisted battery storage rovers.",
        "advantages": [
          "Extends field endurance by 3.5 hours",
          "Protects lithium chemistry from deep-discharge degradation"
        ],
        "disadvantages": [
          "Slightly lowers sensor refresh rate during low-speed search"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 22,
          "energy": 25,
          "social": 20,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -14,
          "carbonIndex": -12,
          "waterIndex": -8,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 18,
          "networkStability": 15,
          "environmentalHealth": 15,
          "waterAvailability": 10,
          "rescueProgress": 22,
          "publicTrust": 18,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand physical energy efficiency in robotics: mechanical gait optimization, sensor duty cycles, and battery lifecycle preservation.",
        "sdgs": [
          7,
          9,
          12
        ],
        "consequenceNarration": "All 60 quadrupeds maintained operations safely! The sector search completed with zero stranded robots and battery health preserved above 96%.",
        "educationalTakeaway": "Smart robotics conserves power through mechanical efficiency: dynamic duty-cycling and cooperative charging multiply field battery lifespan."
      },
      {
        "id": "m12-opt-b",
        "key": "B",
        "title": "Maximum High-Torque Sprinting & Aggressive High-Current Fast-Charging",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Command robots to sprint at maximum speed until batteries hit 0%, then blast cells with ultra-high current fast-charging.",
        "detailedExplanation": "Quadrupeds maintain maximum servo torque and 60 FPS sensor streaming until total shutdown, followed by high-voltage rapid charging without thermal cooling pauses.",
        "advantages": [
          "Covers the remaining distance at maximum sprint speed"
        ],
        "disadvantages": [
          "Severe thermal runaway risk, deep discharge lithium dendrite formation, and 40% reduction in battery pack lifespan"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -18,
          "energy": -22,
          "social": -15,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 18,
          "waterIndex": 10,
          "ewasteIndex": 4,
          "operationalEfficiency": -15,
          "citizenWellbeing": -12,
          "resilienceIndex": -18
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -12,
          "waterAvailability": -5,
          "rescueProgress": 5,
          "publicTrust": -10,
          "ewasteLevel": 4
        },
        "learningObjective": "Deep discharging and aggressive thermal charging destroy lithium battery packs, generating massive electronic waste.",
        "sdgs": [
          9,
          12
        ],
        "consequenceNarration": "Twelve quadrupeds suffered thermal lockups. Eight lithium packs developed internal shorts and had to be scrapped, generating hazardous e-waste.",
        "educationalTakeaway": "Batteries are physical electrochemical systems. Abusing charge rates degrades scarce raw materials and wastes battery packs."
      }
    ],
    "sdgs": [
      7,
      9,
      12
    ],
    "summaryNote": "Dynamic duty-cycling and cooperative V2G energy sharing preserve battery chemistry and extend mission endurance.",
    "hotspots": [
      {
        "id": "h1",
        "x": 42,
        "y": 65,
        "title": "Battery Management System",
        "description": "Monitors cell temperatures and internal resistance to prevent lithium degradation."
      },
      {
        "id": "h2",
        "x": 65,
        "y": 45,
        "title": "Dynamic Gait Controller",
        "description": "Adjusts leg motor angles to reduce mechanical energy consumption by 35%."
      }
    ],
    "aiConcept": {
      "title": "Battery Management & Robotic Thrift",
      "subtitle": "Maximizing mission longevity through thermodynamic discipline",
      "definition": "Battery management systems optimize power draw across sensors, computing chips, and mechanical actuators to maximize both mission runtime and battery lifespan.",
      "realWorldExample": "Electric vehicles pre-conditioning batteries and using regenerative braking to extend battery life by hundreds of thousands of miles.",
      "takeaway": "Sustainable physical AI balances computational demand with battery preservation to prevent hardware burnout.",
      "componentType": "robot"
    }
  },
  {
    "id": 13,
    "number": 13,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Water Crisis",
    "category": "Smart Water Management & Leak Detection",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Nova City's central reservoirs are losing 35 million liters of treated drinking water daily due to undetected underground pipe fissures following seismic tremors.",
    "storyProblem": "Excavating all 4,000 kilometers of city streets to find leaks would paralyze traffic and cost billions. The Task Force needs an intelligent acoustic detection strategy.",
    "prompt": "Choose the municipal leak detection and hydraulic pressure regulation protocol.",
    "question": "How should Nova City detect and eliminate subterranean water leaks across its pipeline network?",
    "options": [
      {
        "id": "m13-opt-a",
        "key": "A",
        "title": "Acoustic Edge Vibration Sensors & Autonomous Microgrid Pressure Regulation",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Deploy clamp-on acoustic vibration listening nodes that identify underground pipe hiss frequencies with edge signal processing.",
        "detailedExplanation": "Autonomous listening pods installed at fire hydrants process micro-vibrations with edge neural nets, calculating pipe rupture locations to within 1 meter and dynamically lowering pressure in damaged zones.",
        "advantages": [
          "Pinpoints subterranean leaks without destructive street excavation",
          "Saves 32 million liters of drinking water daily within 48 hours"
        ],
        "disadvantages": [
          "Requires deploying sensor clamps across 250 hydrant checkpoints"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 28,
          "energy": 20,
          "social": 25,
          "economic": 22
        },
        "cityMetricDeltas": {
          "energyIndex": -12,
          "carbonIndex": -10,
          "waterIndex": -30,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 25,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 12,
          "environmentalHealth": 25,
          "waterAvailability": 30,
          "rescueProgress": 15,
          "publicTrust": 22,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand smart water management: using acoustic edge sensing to protect vital municipal water resources.",
        "sdgs": [
          6,
          9,
          11,
          12
        ],
        "consequenceNarration": "Acoustic sensors identified 42 hidden high-pressure fissures under Sector 4. Pressure modulation halted water loss while repair crews fixed pipes with pinpoint excavations.",
        "educationalTakeaway": "Acoustic AI listens to physical vibrations in metal and soil, detecting resource loss before it turns into an urban catastrophe."
      },
      {
        "id": "m13-opt-b",
        "key": "B",
        "title": "Blanket Mainline High-Pressure Pumping & Visual Surface Patrols",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Crank reservoir supply pumps to maximum pressure to overcome water loss, and send human trucks looking for surface water puddles.",
        "detailedExplanation": "Operators boost pumping pressure across the entire municipal grid to maintain home faucet flow, relying on visual inspection crews driving around looking for water bubbling on streets.",
        "advantages": [
          "Temporarily masks faucet pressure drops in unaffected homes"
        ],
        "disadvantages": [
          "High pressure widens pipe fractures, doubling water loss to 70 million liters daily and risking massive sinkhole collapses"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -28,
          "energy": -22,
          "social": -20,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 15,
          "waterIndex": 35,
          "ewasteIndex": 2,
          "operationalEfficiency": -20,
          "citizenWellbeing": -22,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -25,
          "waterAvailability": -35,
          "rescueProgress": -5,
          "publicTrust": -20,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that brute-force pumping without leak detection accelerates infrastructure destruction and squanders clean water.",
        "sdgs": [
          6,
          11,
          12
        ],
        "consequenceNarration": "Excessive line pressure caused a catastrophic water main blowout beneath Main Avenue. A 12-meter sinkhole swallowed two utility trucks and cut water to 50,000 homes.",
        "educationalTakeaway": "Increasing pressure on leaking pipes is a disastrous blunder. Smart sensing must precede mechanical action."
      }
    ],
    "sdgs": [
      6,
      9,
      11,
      12
    ],
    "summaryNote": "Acoustic vibration sensing pinpoints subterranean water leaks without destructive street excavation.",
    "hotspots": [
      {
        "id": "h1",
        "x": 38,
        "y": 65,
        "title": "Acoustic Listening Pod",
        "description": "Processes acoustic pipe vibrations at 20 kHz to isolate water escape signatures."
      },
      {
        "id": "h2",
        "x": 65,
        "y": 48,
        "title": "Zone Pressure Governor",
        "description": "Automates valve modulation to reduce mechanical stress on damaged pipe segments."
      }
    ],
    "aiConcept": {
      "title": "Smart Water & Acoustic Sensing",
      "subtitle": "Detecting hidden infrastructure failure through sound",
      "definition": "Acoustic edge sensors analyze frequency spectra to detect the characteristic hiss of pressurized fluid escaping micro-fissures underground.",
      "realWorldExample": "Municipal water authorities using acoustic loggers to reduce non-revenue water loss by over 50%.",
      "takeaway": "Clean water is our most precious resource. AI listening nodes stop silent subterranean resource leaks.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 14,
    "number": 14,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Burning Forest",
    "category": "AI Drones & Environmental Monitoring",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Dry lightning has ignited multiple wildfire fronts in the pine forest nature reserve bordering Nova City's northern residential perimeter.",
    "storyProblem": "High canyon winds are shifting ember showers toward housing developments. Autonomous drone swarms must coordinate firebreak defense and containment.",
    "prompt": "Choose the aerial surveillance and fire suppression protocol.",
    "question": "How should Nova City's autonomous drone fleet combat the spreading forest wildfire?",
    "options": [
      {
        "id": "m14-opt-a",
        "key": "A",
        "title": "Autonomous Thermal Edge Swarms with Precision Firebreak Targeting",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Deploy lightweight electric drone swarms running thermal edge vision to map ember vectors and deliver micro-suppressant capsules directly at ignition roots.",
        "detailedExplanation": "Cooperative autonomous drones use thermal sensors to model wind-driven fire spread in real time, dropping eco-friendly biodegradable suppressant capsules with pinpoint accuracy to starve firelines before they spread.",
        "advantages": [
          "Stops fire spread before flames reach crown canopy",
          "Conserves 85% of chemical retardant compared to blanket dumping",
          "Zero toxic chemical soil runoff"
        ],
        "disadvantages": [
          "Requires autonomous peer-to-peer drone swarm mesh coordination"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 28,
          "energy": 20,
          "social": 25,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -25,
          "waterIndex": -15,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 25,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 15,
          "environmentalHealth": 28,
          "waterAvailability": 15,
          "rescueProgress": 25,
          "publicTrust": 22,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand precision environmental monitoring: using thermal edge computer vision and autonomous robotics for targeted disaster mitigation.",
        "sdgs": [
          11,
          13,
          15
        ],
        "consequenceNarration": "Swarm algorithms halted 14 separate ember breakouts within 25 minutes! The northern forest perimeter held, and residential air quality was protected.",
        "educationalTakeaway": "Targeted precision robotics stops environmental catastrophes at the spark stage, avoiding massive chemical dumping."
      },
      {
        "id": "m14-opt-b",
        "key": "B",
        "title": "Indiscriminate Blanket Aerial Chemical Retardant Bombing",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Charter heavy diesel cargo planes to dump hundreds of tons of industrial ammonium phosphate chemical retardant across the entire forest reserve.",
        "detailedExplanation": "Heavy planes carpet-bomb the nature reserve with toxic red chemical retardant without targeted thermal mapping, drenching pristine streams, wildlife habitats, and healthy trees.",
        "advantages": [
          "Creates a wide, visible blanket swath of chemical retardant"
        ],
        "disadvantages": [
          "Contaminates forest watershed with toxic phosphates, kills aquatic wildlife, and burns tons of aviation fuel"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -28,
          "energy": -22,
          "social": -15,
          "economic": -25
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 25,
          "waterIndex": 20,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -18,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -5,
          "environmentalHealth": -28,
          "waterAvailability": -20,
          "rescueProgress": 10,
          "publicTrust": -15,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that heavy chemical dumping causes severe long-term ecocide in watersheds and soils.",
        "sdgs": [
          13,
          15
        ],
        "consequenceNarration": "Chemical retardant washed into the municipal reservoir, poisoning trout fisheries and forcing emergency water treatment plant shutdowns.",
        "educationalTakeaway": "Overreacting with blunt industrial chemicals creates secondary ecological disasters. Precision physical AI protects living ecosystems."
      }
    ],
    "sdgs": [
      11,
      13,
      15
    ],
    "summaryNote": "Thermal edge computer vision guides autonomous drones to extinguish embers before wildfires crown.",
    "hotspots": [
      {
        "id": "h1",
        "x": 45,
        "y": 30,
        "title": "Thermal Vector Camera",
        "description": "Tracks rising thermal updrafts and calculates ember landing zones in real time."
      },
      {
        "id": "h2",
        "x": 60,
        "y": 65,
        "title": "Micro-Dropper Payload",
        "description": "Releases biodegradable bio-gel directly onto flame roots with zero waste."
      }
    ],
    "aiConcept": {
      "title": "Environmental Robotics & Precision Response",
      "subtitle": "Using intelligent swarms for ecological preservation",
      "definition": "Environmental robotics uses lightweight autonomous agents with edge perception to intercept ecological hazards with minimal collateral damage.",
      "realWorldExample": "Autonomous drone fleets monitoring national parks for illegal logging and early wildfire ignitions using thermal cameras.",
      "takeaway": "Robotics in service of nature prioritizes precision and non-toxic intervention over blunt industrial force.",
      "componentType": "robot"
    }
  },
  {
    "id": 15,
    "number": 15,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Plastic Ocean",
    "category": "Waste Detection & Marine Robotics",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Storm runoff has flushed 80 tons of discarded single-use plastics, packaging styrofoam, and synthetic nets into Nova Bay's marine estuary.",
    "storyProblem": "Tidal currents are pushing plastic debris toward a protected coral reef and seal colony. Autonomous aquatic skimmers must clean the bay without endangering marine life.",
    "prompt": "Choose the marine cleanup and debris sorting architecture.",
    "question": "How should Nova City's autonomous marine vessels remove plastic waste from the coastal estuary?",
    "options": [
      {
        "id": "m15-opt-a",
        "key": "A",
        "title": "Solar-Electric Surface Skimmers with Edge Bio-Discrimination Vision",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Deploy solar-powered catamaran skimmers using edge computer vision to distinguish floating plastic litter from fish, birds, and seaweed.",
        "detailedExplanation": "Electric catamaran rovers skim the water surface, running an onboard neural net that classifies floating objects. Plastic containers and nets are collected into sorting bins, while organic marine life is safely guided away.",
        "advantages": [
          "Zero carbon emissions; powered 100% by onboard solar panels",
          "Zero bycatch or harm to coastal marine biodiversity",
          "Sorts recyclable polymers right on the water"
        ],
        "disadvantages": [
          "Skimmer collection speed is governed by solar battery capacity"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 22,
          "social": 20,
          "economic": 18
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -15,
          "waterIndex": -25,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 20,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 12,
          "networkStability": 10,
          "environmentalHealth": 30,
          "waterAvailability": 20,
          "rescueProgress": 15,
          "publicTrust": 20,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand marine environmental robotics: computer vision for bio-discrimination and zero-emission solar propulsion.",
        "sdgs": [
          12,
          14,
          15
        ],
        "consequenceNarration": "Catamarans extracted 24 tons of floating polymers in 72 hours! Coral reef nurseries remained completely unpolluted with zero marine life casualties.",
        "educationalTakeaway": "Computer vision can distinguish living organisms from synthetic trash, enabling cleanup robots that respect natural ecosystems."
      },
      {
        "id": "m15-opt-b",
        "key": "B",
        "title": "Heavy Diesel Dredging Trawlers with Indiscriminate Drag Nets",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Deploy commercial diesel trawlers with weighted bottom drag nets to scoop up all debris and estuary matter as fast as possible.",
        "detailedExplanation": "Operators hire heavy diesel trawlers that drag weighted nylon nets across the seabed, scraping up plastics along with seagrass beds, juvenile fish, and benthic organisms.",
        "advantages": [
          "Collects large volumes of mixed matter in a single sweep"
        ],
        "disadvantages": [
          "Destroys sensitive marine habitats, generates heavy diesel soot, and catches protected wildlife in nets"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -25,
          "social": -18,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 25,
          "waterIndex": 20,
          "ewasteIndex": 3,
          "operationalEfficiency": -15,
          "citizenWellbeing": -20,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -12,
          "networkStability": -5,
          "environmentalHealth": -30,
          "waterAvailability": -15,
          "rescueProgress": 5,
          "publicTrust": -18,
          "ewasteLevel": 3
        },
        "learningObjective": "Recognize that destructive cleanup methods can inflict worse ecological damage than the pollution they seek to remove.",
        "sdgs": [
          14,
          15
        ],
        "consequenceNarration": "Drag nets tore through 400 meters of protected coral reef. Over 300 marine animals were caught as bycatch while diesel exhaust drifted over beaches.",
        "educationalTakeaway": "Cleaning the planet with destructive methods is counter-productive. Responsible robotics harmonizes cleanup with ecological protection."
      }
    ],
    "sdgs": [
      12,
      14,
      15
    ],
    "summaryNote": "Solar-electric skimmers with edge vision discriminate between plastic waste and living marine organisms.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 55,
        "title": "Edge Bio-Classifier",
        "description": "Segments floating objects in real time to prevent swallowing fish, turtles, or waterfowl."
      },
      {
        "id": "h2",
        "x": 68,
        "y": 38,
        "title": "Solar Skimmer Deck",
        "description": "Powers electric paddle propulsion with zero acoustic disturbance to marine life."
      }
    ],
    "aiConcept": {
      "title": "Marine Robotics & Computer Vision",
      "subtitle": "Cleaning waterways without harming biodiversity",
      "definition": "Marine robotics combines computer vision object segmentation with silent electric propulsion to harvest pollutants without disturbing aquatic ecosystems.",
      "realWorldExample": "Autonomous harbor trash-skimmer boats using AI vision to collect floating bottles while leaving ducks and fish untouched.",
      "takeaway": "True sustainability requires tools that solve environmental problems without creating new ecological damage.",
      "componentType": "robot"
    }
  },
  {
    "id": 16,
    "number": 16,
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The Planet Strikes Back",
    "title": "The Smart Farm",
    "category": "Precision Agriculture & Resource Stewardship",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "The agricultural green belt surrounding Nova City produces 60% of the metropolis's fresh produce but is facing severe water rationing and nitrogen fertilizer shortages.",
    "storyProblem": "Farmers are tempted to over-pump remaining groundwater and blanket-spray nitrogen fertilizer, which risks salinizing the soil and poisoning the river basin.",
    "prompt": "Choose the precision farming and robotic resource stewardship strategy.",
    "question": "How should agricultural robots manage irrigation and nutrient delivery across Nova City's farms?",
    "options": [
      {
        "id": "m16-opt-a",
        "key": "A",
        "title": "Multispectral Crop Health Mapping & Sub-Surface Micro-Drip Fertigation",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Use multispectral drone cameras to assess plant chlorophyll stress, delivering precise milliliters of water and nutrients directly to individual roots.",
        "detailedExplanation": "Autonomous agricultural rovers and drones monitor NDVI crop reflectance. Robotic micro-nozzles inject drops of water and organic nutrients directly at root stems only where needed.",
        "advantages": [
          "Cuts agricultural water use by 65% and fertilizer runoff by 80%",
          "Boosts crop yields while rejuvenating native soil microbiome"
        ],
        "disadvantages": [
          "Requires installing sub-surface sensor probes and drone calibration"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 28,
          "energy": 20,
          "social": 22,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -12,
          "carbonIndex": -15,
          "waterIndex": -25,
          "ewasteIndex": 1,
          "operationalEfficiency": 25,
          "citizenWellbeing": 22,
          "resilienceIndex": 25
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 12,
          "environmentalHealth": 28,
          "waterAvailability": 25,
          "rescueProgress": 15,
          "publicTrust": 20,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand precision agriculture: how computer vision and robotics optimize resource efficiency in food production.",
        "sdgs": [
          2,
          6,
          12,
          15
        ],
        "consequenceNarration": "Crop yields increased by 18% while farm water use dropped by 65%! The downstream river remained crystal clear with zero toxic algal blooms.",
        "educationalTakeaway": "Precision agriculture treats individual plants rather than entire fields, slashing water and chemical waste through robotic accuracy."
      },
      {
        "id": "m16-opt-b",
        "key": "B",
        "title": "Continuous Overhead Sprinkler Flooding & Blanket Chemical Spraying",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Turn on high-volume overhead oscillating sprinklers 24/7 and spray synthetic chemical fertilizers across every acre uniformly.",
        "detailedExplanation": "Farmers turn on massive overhead water cannons during midday heat, pumping groundwater continuously and dusting all crops with synthetic nitrogen powders regardless of plant need.",
        "advantages": [
          "Requires zero plant-by-plant sensor monitoring or drone flights"
        ],
        "disadvantages": [
          "Evaporates 50% of water in hot air, causes soil salinization, and triggers massive nitrate runoff that causes river dead zones"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -28,
          "energy": -22,
          "social": -18,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 20,
          "carbonIndex": 22,
          "waterIndex": 30,
          "ewasteIndex": 2,
          "operationalEfficiency": -18,
          "citizenWellbeing": -18,
          "resilienceIndex": -22
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -28,
          "waterAvailability": -30,
          "rescueProgress": 2,
          "publicTrust": -15,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that blanket irrigation and chemical flooding waste scarce water and poison freshwater ecosystems.",
        "sdgs": [
          6,
          12,
          15
        ],
        "consequenceNarration": "Overhead evaporation drained the regional irrigation canal. Nitrogen runoff triggered an explosive toxic cyanobacteria bloom in Lake Nova.",
        "educationalTakeaway": "Blanket chemical spraying is a 20th-century failure. Physical AI and precision robotics feed humanity while safeguarding water and soil."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 13,
        "requiredChoice": "A",
        "headline": "Abundant Aquifer Reserves",
        "narrativeEffect": "Because water was conserved in Mission 13, agricultural irrigation systems have ample clean water to sustain vegetable yields.",
        "isPositive": true
      },
      {
        "conditionMission": 13,
        "requiredChoice": "B",
        "headline": "Severe Water Rationing Pressure",
        "narrativeEffect": "Due to heavy water losses in Mission 13, farm irrigation is restricted to strict emergency allocations, limiting crop output.",
        "isPositive": false
      }
    ],
    "sdgs": [
      2,
      6,
      12,
      15
    ],
    "summaryNote": "Multispectral vision and micro-drip fertigation optimize crop nutrition while cutting water consumption by 65%.",
    "hotspots": [
      {
        "id": "h1",
        "x": 42,
        "y": 40,
        "title": "Multispectral NDVI Sensor",
        "description": "Measures near-infrared light reflectance to detect plant chlorophyll stress before visible wilting."
      },
      {
        "id": "h2",
        "x": 65,
        "y": 65,
        "title": "Sub-Surface Micro-Drip",
        "description": "Injects precise water droplets directly into the root zone with zero surface evaporation."
      }
    ],
    "aiConcept": {
      "title": "Precision Agriculture & Physical AI",
      "subtitle": "Growing food with mathematical and ecological precision",
      "definition": "Precision agriculture uses robotic platforms, computer vision, and soil sensors to apply exact quantities of water and nutrients only where plants need them.",
      "realWorldExample": "Laser-guided weeding robots zapping individual invasive weeds with targeted micro-doses instead of spraying entire fields with herbicides.",
      "takeaway": "Targeting intervention to the individual plant level protects the soil, saves water, and guarantees sustainable food security.",
      "componentType": "efficiency"
    }
  },
  {
    "id": 17,
    "number": 17,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The E-Waste Mountain",
    "category": "Circular Economy & Hardware Longevity",
    "heroImage": "/assets/m4-ewaste-crisis.svg",
    "environmentalContext": "Nova City generates 18,000 metric tons of discarded robotic components, cracked sensors, and worn lithium batteries every quarter.",
    "storyProblem": "A sprawling industrial e-waste dump on the city outskirts is threatening to leach lead, cadmium, and lithium into groundwater reservoirs.",
    "prompt": "Choose the electronics lifecycle and robotic supply chain policy.",
    "question": "How should Nova City manage its accumulated mountain of discarded robotic and sensor electronics?",
    "options": [
      {
        "id": "m17-opt-a",
        "key": "A",
        "title": "Standardized Modular Refurbishment & Ultrasonic Rare-Earth Recovery",
        "isSustainable": true,
        "image": "/assets/m4-modular-repair.svg",
        "shortDescription": "Mandate modular robot designs, swapping degraded chips and harvesting neodymium magnets and copper via automated clean recovery.",
        "detailedExplanation": "The city establishes circular remanufacturing hubs where robots are disassembled with standardized tools. Working compute chips are repurposed for low-power sensors, and copper and rare earths are recycled.",
        "advantages": [
          "Recovers 92% of critical rare-earth metals and structural aluminum",
          "Lowers municipal hardware procurement expenditures by 45%",
          "Zero toxic heavy metal landfill leaching"
        ],
        "disadvantages": [
          "Requires enforcing standardized component form factors across manufacturers"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 30,
          "energy": 25,
          "social": 22,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -15,
          "carbonIndex": -22,
          "waterIndex": -18,
          "ewasteIndex": -35,
          "operationalEfficiency": 25,
          "citizenWellbeing": 20,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 12,
          "environmentalHealth": 30,
          "waterAvailability": 20,
          "rescueProgress": 15,
          "publicTrust": 22,
          "ewasteLevel": -35
        },
        "learningObjective": "Understand the circular economy in robotics: modular repair, design for disassembly, and precious metal reclamation.",
        "sdgs": [
          9,
          11,
          12
        ],
        "consequenceNarration": "Landfill e-waste dropped by 80%! 12,000 refurbished robotic rovers were returned to civic service at one-third the cost of new manufacturing.",
        "educationalTakeaway": "True sustainable robotics designs machines to be repaired and remanufactured, keeping critical elements out of toxic landfills."
      },
      {
        "id": "m17-opt-b",
        "key": "B",
        "title": "Crude Hammermill Shredding & Continuous New Unit Purchasing",
        "isSustainable": false,
        "image": "/assets/m4-dump-replacement.svg",
        "shortDescription": "Shred all discarded robot chassis in bulk industrial hammermills, dump the slag in landfills, and buy brand-new replacement fleets.",
        "detailedExplanation": "The city signs contracts with commercial vendors to dispose of old machines in bulk crushers, sending contaminated slag to open pits and purchasing newly fabricated silicon rovers every 18 months.",
        "advantages": [
          "Simpler municipal contracting with commercial replacement vendors"
        ],
        "disadvantages": [
          "Wastes irreplaceable rare-earth minerals, poisons local soils, and consumes massive energy manufacturing new silicon chips"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -30,
          "energy": -25,
          "social": -20,
          "economic": -28
        },
        "cityMetricDeltas": {
          "energyIndex": 22,
          "carbonIndex": 28,
          "waterIndex": 22,
          "ewasteIndex": 40,
          "operationalEfficiency": -18,
          "citizenWellbeing": -20,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -15,
          "networkStability": -5,
          "environmentalHealth": -30,
          "waterAvailability": -20,
          "rescueProgress": 2,
          "publicTrust": -20,
          "ewasteLevel": 40
        },
        "learningObjective": "Recognize that planned obsolescence and single-use electronics cause severe environmental degradation and supply chain fragility.",
        "sdgs": [
          11,
          12
        ],
        "consequenceNarration": "Toxic heavy metals leached into the South District water table. The city suffered severe supply chain shortages when raw neodymium prices spiked.",
        "educationalTakeaway": "Throwing away entire robots because of a broken sensor is an ecological disaster. Modular design is the heart of circular engineering."
      }
    ],
    "sdgs": [
      9,
      11,
      12
    ],
    "summaryNote": "Modular repair and component harvesting turn electronic waste into renewable civic hardware.",
    "hotspots": [
      {
        "id": "h1",
        "x": 35,
        "y": 62,
        "title": "Modular Disassembly Bench",
        "description": "Enables unbolting motors, batteries, and processors with standard tools in under 90 seconds."
      },
      {
        "id": "h2",
        "x": 72,
        "y": 48,
        "title": "Rare-Earth Extractor",
        "description": "Uses clean ultrasonic separation to recover neodymium magnets without acid baths."
      }
    ],
    "aiConcept": {
      "title": "The Circular Economy & E-Waste",
      "subtitle": "Designing physical hardware for infinite lifecycles",
      "definition": "A circular electronics economy eliminates waste by designing machines with modular, interchangeable components that can be repaired, upgraded, and recycled indefinitely.",
      "realWorldExample": "Smartphones designed with modular camera and battery modules that users can swap with a standard screwdriver in 2 minutes.",
      "takeaway": "The greenest robot is not the one made from recycled plastic—it is the one that lasts for decades because it was built to be repaired.",
      "componentType": "circular"
    }
  },
  {
    "id": 18,
    "number": 18,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Privacy Breach",
    "category": "Data Minimization & Responsible AI",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Nova City's central municipal transit database was hacked, exposing unencrypted continuous video footage and GPS coordinates of 2 million citizens.",
    "storyProblem": "Public outrage is mounting. Citizens are disabling civic environmental sensors and demanding the immediate decommissioning of all urban AI systems.",
    "prompt": "Choose the civic data architecture and algorithmic privacy protocol.",
    "question": "How should Nova City restructure its urban perception systems to restore citizen trust and guarantee privacy?",
    "options": [
      {
        "id": "m18-opt-a",
        "key": "A",
        "title": "Ephemeral Edge Anonymization & Zero-Retention Cryptographic Hashing",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Process video exclusively in volatile RAM on camera chips, immediately discarding pixels and transmitting only differential aggregate numeric counts.",
        "detailedExplanation": "Municipal cameras run zero-retention edge firmware. Faces and license plates are blurred inside the sensor hardware; only numeric counts (e.g. '14 bicycles, 2 buses') are transmitted via zero-knowledge proofs.",
        "advantages": [
          "Physically impossible for hackers to steal surveillance footage because no video is ever saved",
          "Restores public trust in municipal smart infrastructure",
          "Reduces server storage by 99.8%"
        ],
        "disadvantages": [
          "Prevents retroactive review of raw visual footage"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 20,
          "energy": 20,
          "social": 30,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -12,
          "waterIndex": -8,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 30,
          "resilienceIndex": 28
        },
        "sharedCityDeltas": {
          "energyStability": 10,
          "networkStability": 15,
          "environmentalHealth": 15,
          "waterAvailability": 10,
          "rescueProgress": 15,
          "publicTrust": 35,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand data minimization and privacy-by-design in edge AI.",
        "sdgs": [
          9,
          11,
          16
        ],
        "consequenceNarration": "Public trust surged! With verified cryptographic proof that cameras discard all raw imagery, citizen task forces voted 92% to re-enable civic sensors.",
        "educationalTakeaway": "Data that is never collected or stored cannot be hacked. True responsible AI practices strict data minimization."
      },
      {
        "id": "m18-opt-b",
        "key": "B",
        "title": "Centralized Encrypted Vault Storage with Retrospective Surveillance Access",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Continue recording raw 24/7 video feeds of all streets, storing petabytes in encrypted government cloud databases for future police queries.",
        "detailedExplanation": "The city promises stronger cloud encryption but continues recording every public step citizens take, storing massive surveillance databases that remain prime targets for state actors and rogue hackers.",
        "advantages": [
          "Preserves historical video archives for retrospective criminal investigation"
        ],
        "disadvantages": [
          "Perpetuates surveillance anxiety, erodes civic trust, and creates honeypots for future cyber breaches"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -15,
          "energy": -20,
          "social": -30,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 15,
          "waterIndex": 10,
          "ewasteIndex": 2,
          "operationalEfficiency": -15,
          "citizenWellbeing": -30,
          "resilienceIndex": -20
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -12,
          "environmentalHealth": -5,
          "waterAvailability": -5,
          "rescueProgress": 5,
          "publicTrust": -35,
          "ewasteLevel": 2
        },
        "learningObjective": "Recognize that centralized storage of mass biometric and surveillance data inevitably leads to breaches and civic alienation.",
        "sdgs": [
          10,
          16
        ],
        "consequenceNarration": "Citizens launched boycotts, vandalizing 400 smart sensors. Civic cooperation with environmental monitoring collapsed across four major districts.",
        "educationalTakeaway": "Encryption alone is not enough. If you collect unnecessary personal data, you are creating a weapon waiting to be exploited."
      }
    ],
    "sdgs": [
      9,
      11,
      16
    ],
    "summaryNote": "Edge anonymization and zero-retention processing protect privacy by ensuring raw images never leave the camera.",
    "hotspots": [
      {
        "id": "h1",
        "x": 38,
        "y": 52,
        "title": "Hardware Anonymizer",
        "description": "Blurs faces and license plates inside the image sensor silicon before memory allocation."
      },
      {
        "id": "h2",
        "x": 68,
        "y": 42,
        "title": "Zero-Knowledge Aggregator",
        "description": "Transmits mathematical proofs of counts without revealing underlying personal data."
      }
    ],
    "aiConcept": {
      "title": "Data Minimization & Privacy-by-Design",
      "subtitle": "The foundational pillar of responsible artificial intelligence",
      "definition": "Data minimization dictates that AI systems should only collect, process, and retain the absolute minimum amount of data required to perform their specific task.",
      "realWorldExample": "A smart thermostat detecting if a room is occupied without recording audio conversations or video of the occupants.",
      "takeaway": "The safest data is the data you never collect. Sustainable AI respects human freedom and dignity.",
      "componentType": "general"
    }
  },
  {
    "id": 19,
    "number": 19,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The AI Council",
    "category": "Algorithmic Governance & Human Oversight",
    "heroImage": "/assets/disaster-recovery.svg",
    "environmentalContext": "Nova City is drafting its permanent City Charter to define how much authority autonomous AI algorithms and robotic systems will wield over municipal life.",
    "storyProblem": "Tech corporations are lobbying for complete automated technocratic decision-making, while civic groups demand democratic oversight and human accountability.",
    "prompt": "Choose the institutional governance and oversight framework for Nova City's AI systems.",
    "question": "What governance model should determine the deployment and constraints of Nova City's physical AI?",
    "options": [
      {
        "id": "m19-opt-a",
        "key": "A",
        "title": "Democratic Multi-Stakeholder Council with Mandatory Human-in-the-Loop",
        "isSustainable": true,
        "image": "/assets/m2-collaborative.svg",
        "shortDescription": "Establish a public oversight council of citizens, environmental scientists, and roboticists with veto authority over all automated algorithms.",
        "detailedExplanation": "All algorithmic models deployed in the city must have transparent open-source audits. High-consequence decisions (resource allocation, policing, infrastructure shutdowns) require human steward sign-off.",
        "advantages": [
          "Ensures algorithms serve the public interest rather than corporate profit",
          "Prevents black-box automated discrimination and systemic errors",
          "Fosters enduring civic trust"
        ],
        "disadvantages": [
          "Requires scheduled democratic review sessions for major policy shifts"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 25,
          "energy": 20,
          "social": 30,
          "economic": 20
        },
        "cityMetricDeltas": {
          "energyIndex": -10,
          "carbonIndex": -12,
          "waterIndex": -10,
          "ewasteIndex": 1,
          "operationalEfficiency": 22,
          "citizenWellbeing": 30,
          "resilienceIndex": 30
        },
        "sharedCityDeltas": {
          "energyStability": 15,
          "networkStability": 15,
          "environmentalHealth": 22,
          "waterAvailability": 18,
          "rescueProgress": 15,
          "publicTrust": 35,
          "ewasteLevel": 1
        },
        "learningObjective": "Understand responsible AI governance: democratic transparency, algorithmic accountability, and human-in-the-loop oversight.",
        "sdgs": [
          10,
          16
        ],
        "consequenceNarration": "The Democratic AI Council established world-leading safety protocols. Algorithms remain accountable to citizens, building a flourishing cooperative smart city.",
        "educationalTakeaway": "Artificial intelligence must be an instrument of democracy and human well-being, never an unaccountable ruler."
      },
      {
        "id": "m19-opt-b",
        "key": "B",
        "title": "Autonomous Closed-Source Corporate Technocracy",
        "isSustainable": false,
        "image": "/assets/m2-teleop-lag.svg",
        "shortDescription": "Hand all municipal authority to an automated corporate AI engine with zero public transparency or human intervention rights.",
        "detailedExplanation": "Private software monopolies control all municipal resource allocation through proprietary black-box algorithms. Citizens have no right to audit decisions, appeal automated fines, or question directives.",
        "advantages": [
          "Executes rapid algorithmic decrees without public debate"
        ],
        "disadvantages": [
          "Creates extreme inequality, strips citizens of democratic agency, and produces unaccountable systemic bias"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -20,
          "energy": -20,
          "social": -35,
          "economic": -15
        },
        "cityMetricDeltas": {
          "energyIndex": 18,
          "carbonIndex": 15,
          "waterIndex": 12,
          "ewasteIndex": 3,
          "operationalEfficiency": -15,
          "citizenWellbeing": -35,
          "resilienceIndex": -25
        },
        "sharedCityDeltas": {
          "energyStability": -10,
          "networkStability": -5,
          "environmentalHealth": -15,
          "waterAvailability": -10,
          "rescueProgress": 5,
          "publicTrust": -35,
          "ewasteLevel": 3
        },
        "learningObjective": "Recognize that unchecked automated technocracy without democratic accountability leads to disenfranchisement and social collapse.",
        "sdgs": [
          10,
          16
        ],
        "consequenceNarration": "Corporate algorithms optimized for revenue cut water to low-income neighborhoods during heatwaves. Mass civil strikes erupted across Nova City.",
        "educationalTakeaway": "Technology without human ethics is tyranny. Algorithmic governance must always remain subservient to human rights and dignity."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 18,
        "requiredChoice": "A",
        "headline": "High Ethical Credibility",
        "narrativeEffect": "Because privacy was protected in Mission 18, the AI Council enjoys broad public support across all demographic sectors.",
        "isPositive": true
      },
      {
        "conditionMission": 18,
        "requiredChoice": "B",
        "headline": "Deep Public Cynicism",
        "narrativeEffect": "Due to privacy breaches in Mission 18, citizens attend Council hearings with deep distrust, requiring intensive mediation.",
        "isPositive": false
      }
    ],
    "sdgs": [
      10,
      16
    ],
    "summaryNote": "Democratic multi-stakeholder oversight ensures AI systems serve public wellbeing and environmental sustainability.",
    "hotspots": [
      {
        "id": "h1",
        "x": 40,
        "y": 48,
        "title": "Algorithmic Audit Chamber",
        "description": "Independent engineers review model code and bias metrics before deployment."
      },
      {
        "id": "h2",
        "x": 65,
        "y": 55,
        "title": "Citizen Review Assembly",
        "description": "Elected public representatives hold veto power over municipal autonomous policies."
      }
    ],
    "aiConcept": {
      "title": "Algorithmic Accountability & Oversight",
      "subtitle": "Keeping intelligence subservient to human values",
      "definition": "Algorithmic accountability requires that decisions made or influenced by AI models can be inspected, explained, challenged, and overridden by human stewards.",
      "realWorldExample": "Regulations requiring banks to explain why an AI system denied a mortgage and allowing humans to overturn erroneous automated rejections.",
      "takeaway": "The future belongs to responsible intelligence that uplifts humanity while protecting the biosphere.",
      "componentType": "general"
    }
  },
  {
    "id": 20,
    "number": 20,
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: The Last Decision",
    "title": "The Final Protocol",
    "category": "The Grand Synthesis: Physical AI × Edge AI × SDGs",
    "heroImage": "/assets/city-sustainable.svg",
    "environmentalContext": "Year 2045. The entire 20-mission campaign culminates here. Nova City stands at the crossroads of ecological rebirth or technological collapse.",
    "storyProblem": "The Task Force must ratify the permanent master operating system for Nova City. Every lesson learned across Edge AI, Physical AI, Energy, Ecology, and Ethics is tested in this final vote.",
    "prompt": "Cast your final vote to determine the permanent operational charter of Nova City.",
    "question": "Which permanent foundational protocol will you activate for Nova City's future?",
    "options": [
      {
        "id": "m20-opt-a",
        "key": "A",
        "title": "The Sustainable Intelligence Compact: Physical AI in Harmony with Planetary Limits",
        "isSustainable": true,
        "image": "/assets/city-sustainable.svg",
        "shortDescription": "Activate decentralized Edge AI, circular modular robotics, 100% renewable energy synchronization, and democratic human governance.",
        "detailedExplanation": "Nova City adopts the Sustainable Intelligence Compact. Intelligence is computed thriftily at the physical edge; robots are built for decades of circular repair; computing runs on clean solar and wind; and algorithms serve human dignity and the biosphere.",
        "advantages": [
          "Guarantees long-term planetary equilibrium and zero toxic e-waste",
          "Achieves 100% energy independence powered by clean microgrids",
          "Ensures human liberty, transparent privacy, and democratic flourishing"
        ],
        "disadvantages": [
          "Requires discipline, continuous education, and collaborative maintenance across society"
        ],
        "pointsAwarded": 100,
        "impacts": {
          "environmental": 35,
          "energy": 30,
          "social": 35,
          "economic": 25
        },
        "cityMetricDeltas": {
          "energyIndex": -25,
          "carbonIndex": -35,
          "waterIndex": -35,
          "ewasteIndex": -40,
          "operationalEfficiency": 35,
          "citizenWellbeing": 35,
          "resilienceIndex": 40
        },
        "sharedCityDeltas": {
          "energyStability": 30,
          "networkStability": 30,
          "environmentalHealth": 35,
          "waterAvailability": 30,
          "rescueProgress": 30,
          "publicTrust": 35,
          "ewasteLevel": -40
        },
        "learningObjective": "Synthesize all workshop pillars: Physical AI embodied in reality, Edge AI computing thriftily, aligned with the United Nations Sustainable Development Goals.",
        "sdgs": [
          3,
          6,
          7,
          9,
          10,
          11,
          12,
          13,
          15,
          16
        ],
        "consequenceNarration": "NOVA CITY IS REBORN! Electric microgrids hum in harmony with green forest corridors. Autonomous robots repair infrastructure alongside human engineers. The future is bright!",
        "educationalTakeaway": "The future is not about making AI more powerful. It is about making intelligence more responsible. You have mastered the Sustainable Intelligence Challenge!"
      },
      {
        "id": "m20-opt-b",
        "key": "B",
        "title": "The Unchecked Expansion: Total Centralized Computational Dominance",
        "isSustainable": false,
        "image": "/assets/city-polluted.svg",
        "shortDescription": "Double down on massive centralized cloud megastructures, planned hardware obsolescence, and unrestricted energy extraction.",
        "detailedExplanation": "Nova City constructs ever-larger centralized compute warehouses, consuming dwindling aquifers and fossil fuels to maximize raw compute numbers, ignoring e-waste accumulation and citizen privacy.",
        "advantages": [
          "Maximizes raw brute-force compute benchmarks on paper"
        ],
        "disadvantages": [
          "Depletes water tables, causes rolling blackouts, creates mountains of toxic e-waste, and alienates citizens"
        ],
        "pointsAwarded": 30,
        "impacts": {
          "environmental": -35,
          "energy": -30,
          "social": -35,
          "economic": -20
        },
        "cityMetricDeltas": {
          "energyIndex": 30,
          "carbonIndex": 35,
          "waterIndex": 35,
          "ewasteIndex": 45,
          "operationalEfficiency": -25,
          "citizenWellbeing": -35,
          "resilienceIndex": -35
        },
        "sharedCityDeltas": {
          "energyStability": -30,
          "networkStability": -30,
          "environmentalHealth": -35,
          "waterAvailability": -30,
          "rescueProgress": -10,
          "publicTrust": -35,
          "ewasteLevel": 45
        },
        "learningObjective": "Understand that chasing raw technological power without sustainability inevitably leads to physical and societal collapse.",
        "sdgs": [
          7,
          9,
          11,
          12,
          13
        ],
        "consequenceNarration": "THE LAST SIGNAL FAILS. The overtaxed grid collapsed into permanent blackouts. Piles of electronic waste choked the rivers as citizens abandoned the hyper-centralized city.",
        "educationalTakeaway": "Technology decoupled from planetary boundaries destroys the very civilization it was built to sustain. We must choose responsibility."
      }
    ],
    "branchingModifiers": [
      {
        "conditionMission": 17,
        "requiredChoice": "A",
        "headline": "Circular Supply Chain Ready",
        "narrativeEffect": "Because modular repair was mandated in Mission 17, the city possesses thousands of refurbished robotic units ready for sustainable protocol deployment.",
        "isPositive": true
      },
      {
        "conditionMission": 17,
        "requiredChoice": "B",
        "headline": "E-Waste Crisis Hindrance",
        "narrativeEffect": "Due to landfill dumping in Mission 17, severe supply chain deficits and toxic runoffs complicate city-wide deployment.",
        "isPositive": false
      }
    ],
    "sdgs": [
      3,
      6,
      7,
      9,
      10,
      11,
      12,
      13,
      15,
      16
    ],
    "summaryNote": "The Sustainable Intelligence Compact unites Physical AI, Edge AI, and the SDGs into a flourishing civilization.",
    "hotspots": [
      {
        "id": "h1",
        "x": 50,
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
    "aiConcept": {
      "title": "The Sustainable Intelligence Manifesto",
      "subtitle": "Physical AI × Edge AI × Sustainable Development Goals",
      "definition": "The philosophy that artificial intelligence must be engineered within planetary thermodynamic boundaries, embodied responsibly in physical machines, and governed democratically for human flourishing.",
      "realWorldExample": "A global future where clean energy microgrids, circular robotics, and edge intelligence work together in harmony with Earth's ecosystems.",
      "takeaway": "The future is not about making AI more powerful. It is about making intelligence more responsible.",
      "componentType": "general"
    }
  }
];
