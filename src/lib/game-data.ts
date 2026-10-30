import { Mission, SDGInfo, SDGNumber, AIExplainerTopic, Chapter } from "@/types/game";

export const SDG_DETAILS: Record<SDGNumber, SDGInfo> = {
  3: {
    number: 3,
    title: "Good Health and Well-being",
    shortName: "Good Health",
    color: "#4C9F38",
    iconName: "HeartPulse",
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
  9: {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    shortName: "Industry & Innovation",
    color: "#FD6925",
    iconName: "Cpu",
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
  10: {
    number: 10,
    title: "Reduced Inequalities",
    shortName: "Reduced Inequalities",
    color: "#E11484",
    iconName: "Users",
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
};

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    title: "The Centralized Collapse",
    theme: "Infrastructure & Network Limits",
    description: "Nova City's centralized cloud AI encounters bandwidth saturation, cooling water depletion, and rolling blackouts.",
    missionRange: [1, 4],
  },
  {
    number: 2,
    title: "Autonomous Rescue & Physical AI",
    theme: "Embodied Robotics & Disaster Response",
    description: "An earthquake disables cell towers. Physical AI quadrupeds and rovers must navigate rubble using onboard perception.",
    missionRange: [5, 8],
  },
  {
    number: 3,
    title: "Smart Energy & Grid Resilience",
    theme: "Renewable Balancing & Microgrids",
    description: "Nova City faces electricity rationing. AI workloads must adapt dynamically to solar and wind availability.",
    missionRange: [9, 12],
  },
  {
    number: 4,
    title: "Circular Robotics & Resource Stewardship",
    theme: "E-Waste Mitigation & Modular Repair",
    description: "Piles of discarded robot chassis threaten urban soil. The Task Force establishes a circular hardware supply chain.",
    missionRange: [13, 16],
  },
  {
    number: 5,
    title: "Planetary Equilibrium & The Reborn City",
    theme: "Decentralized Eco-Intelligence",
    description: "Nova City constructs an open, transparent, and energy-thrifty physical AI civilization in harmony with planetary limits.",
    missionRange: [17, 20],
  },
];

export const AI_EXPLAINER_TOPICS: AIExplainerTopic[] = [
  {
    id: "what-is-ai",
    title: "1. What is Artificial Intelligence?",
    subtitle: "Machines that learn patterns to make decisions",
    iconName: "Brain",
    definition:
      "Artificial Intelligence (AI) refers to computer software designed to perform tasks that typically require human intelligence—such as recognizing faces, understanding spoken words, or navigating a street.",
    realWorldExample:
      "A music app predicting which song you might like next based on your past listening habits.",
    takeaway:
      "AI is not magic thinking; it is math and statistical pattern recognition running on physical computing hardware.",
    tag: "Foundational AI",
  },
  {
    id: "what-is-edge-ai",
    title: "2. What is Edge AI?",
    subtitle: "Running intelligence directly on physical devices",
    iconName: "Cpu",
    definition:
      "Edge AI means processing artificial intelligence models locally on or near the physical machine (like a robot or phone) rather than sending all information across the internet to a distant server.",
    realWorldExample:
      "Your smartphone unlocking instantly using Face ID without needing a Wi-Fi or cellular internet connection.",
    takeaway:
      "Edge AI eliminates latency and protects data privacy, though device batteries and manufacturing must be balanced.",
    tag: "Edge Computing",
  },
  {
    id: "what-is-cloud-ai",
    title: "3. What is Cloud AI?",
    subtitle: "Massive computing in remote data centres",
    iconName: "Cloud",
    definition:
      "Cloud AI processes tasks in large warehouse-sized data centers equipped with thousands of interconnected graphics processing units (GPUs).",
    realWorldExample:
      "Asking a large language model a complex multi-paragraph question where massive supercomputers compute the answer.",
    takeaway:
      "Cloud AI delivers unmatched horsepower, but data transmission radio power and data center cooling water add real environmental costs.",
    tag: "Cloud Infrastructure",
  },
  {
    id: "what-is-physical-ai",
    title: "4. What is Physical AI?",
    subtitle: "AI that perceives, reasons, and acts in the physical world",
    iconName: "Bot",
    definition:
      "Physical AI refers to intelligent systems embodied in physical machines (like autonomous vehicles or rescue quadrupeds) that interact with physical objects, friction, gravity, and unpredictable real-world terrain.",
    realWorldExample:
      "A robotic vacuum navigating around chair legs and avoiding falling down stairs.",
    takeaway:
      "Physical AI bridges digital math with mechanical force, motors, and human physical safety.",
    tag: "Robotics",
  },
  {
    id: "what-is-computer-vision",
    title: "5. What is Computer Vision?",
    subtitle: "Enabling machines to see and interpret pixels",
    iconName: "Eye",
    definition:
      "Computer Vision is the branch of AI that teaches computers to interpret visual information from camera frames, identifying objects, boundaries, obstacles, and people.",
    realWorldExample:
      "An autonomous car recognizing a red stop sign and a pedestrian crossing the road.",
    takeaway:
      "Vision transforms raw grid pixels into meaningful spatial understanding in milliseconds.",
    tag: "Perception",
  },
  {
    id: "what-are-sensors",
    title: "6. What are Sensors?",
    subtitle: "The sensory organs of modern robots",
    iconName: "Radio",
    definition:
      "Sensors are electronic components that detect physical changes in the environment—such as light, heat, pressure, ultrasonic echoes, or motion—and convert them into digital signals.",
    realWorldExample:
      "A thermometer on your wall measuring room temperature and turning on the thermostat.",
    takeaway:
      "Robots cannot make intelligent decisions without accurate sensors reading the physical world.",
    tag: "Hardware",
  },
  {
    id: "what-is-lidar",
    title: "7. What is LiDAR?",
    subtitle: "Light Detection and Ranging: Seeing with laser pulses",
    iconName: "Scan",
    definition:
      "LiDAR shoots millions of invisible eye-safe laser beams per second and measures the time it takes for them to bounce back, creating a dense 3D point-cloud map of surrounding geometry.",
    realWorldExample:
      "Emergency rescue drones mapping a collapsed stadium in complete darkness to find pathways.",
    takeaway:
      "LiDAR operates in total darkness and smoke where normal optical cameras fail.",
    tag: "Sensors",
  },
  {
    id: "what-is-local-inference",
    title: "8. What is Local Inference?",
    subtitle: "Computing a neural network without the web",
    iconName: "Zap",
    definition:
      "Inference is the step where a trained AI model takes live inputs and calculates an answer. Local inference executes that computation entirely on the device's own microchip.",
    realWorldExample:
      "A drone calculating its stabilization motors 500 times per second while flying under an overpass.",
    takeaway:
      "Local inference prevents robots from crashing when communication tunnels get cut.",
    tag: "Edge Computing",
  },
  {
    id: "what-is-energy-efficient-ai",
    title: "9. What is Energy-Efficient AI?",
    subtitle: "Delivering intelligence with minimal electricity",
    iconName: "Sparkles",
    definition:
      "Energy-efficient AI utilizes algorithmic compression (like quantization from 32-bit to 8-bit numbers) and clever scheduling to slash electricity draw by over 60% without sacrificing accuracy.",
    realWorldExample:
      "Shrinking a high-resolution photo file into a compact format that still looks sharp but downloads in a split second.",
    takeaway:
      "How an algorithm is written directly dictates how many watts of power it burns.",
    tag: "Sustainable Computing",
  },
  {
    id: "what-is-ewaste",
    title: "10. What is Electronic Waste (E-Waste)?",
    subtitle: "Discarded electronic equipment and the circular solution",
    iconName: "Recycle",
    definition:
      "E-waste refers to discarded electronic devices, circuit boards, batteries, and robots. It contains toxic heavy metals (lead, mercury, cadmium) that can poison soil and groundwater if sent to landfills.",
    realWorldExample:
      "Replacing your working mobile phone every single year instead of repairing the cracked glass.",
    takeaway:
      "Responsible robotics embraces modularity: replace the worn chip, not the entire machine.",
    tag: "Circular Economy",
  },
];

export const MISSIONS: Mission[] = [
  // ==========================================
  // CHAPTER 1: THE CENTRALIZED COLLAPSE (1 - 4)
  // ==========================================
  {
    id: 1,
    number: 1,
    chapterNumber: 1,
    chapterTitle: "Chapter 1: The Centralized Collapse",
    title: "The AI Infrastructure Crisis",
    category: "Edge AI vs Centralized Cloud",
    heroImage: "/assets/m1-infrastructure-crisis.svg",
    environmentalContext:
      "Nova City's central hyperscale data center consumes 280 Megawatts of fossil electricity and evaporates 4.2 million liters of drinking water daily for evaporative cooling.",
    storyProblem:
      "Every autonomous civic vehicle, environmental sensor, and public safety camera streams raw 4K video feeds back to central servers. Network cables and wireless relays are overheating, causing civic outages.",
    prompt: "Choose the computational paradigm for Nova City's 45,000 autonomous civic robots.",
    question: "How should Nova City process telemetry and sensor data from its autonomous robotic fleet?",
    options: [
      {
        id: "m1-opt-a",
        key: "A",
        title: "Deploy Onboard Local Edge AI Processing",
        isSustainable: true,
        image: "/assets/m1-edge-ai.svg",
        shortDescription: "Process video, distance, and motor commands on local low-power neural chips mounted on the robots.",
        detailedExplanation:
          "Autonomous robots perform object detection and immediate path-planning on onboard neural accelerators. Only anomalous events, telemetry digests, and compressed alerts are transmitted over wireless radio.",
        advantages: [
          "Zero dependence on continuous wireless uplink; immediate millisecond obstacle avoidance.",
          "Cuts municipal wireless network transmission bandwidth and data center server load by 85%.",
        ],
        disadvantages: [
          "Slightly increases onboard battery draw and requires procurement of specialized edge NPU silicon.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 20, social: 15, economic: 10 },
        cityMetricDeltas: {
          energyIndex: -12,
          carbonIndex: -15,
          waterIndex: -18,
          ewasteIndex: +2,
          operationalEfficiency: +20,
          citizenWellbeing: +10,
          resilienceIndex: +25,
        },
        sharedCityDeltas: {
          energyStability: +15,
          networkStability: +25,
          environmentalHealth: +12,
          waterAvailability: +18,
          rescueProgress: +10,
          publicTrust: +12,
          ewasteLevel: +2,
        },
        learningObjective: "Understand Edge AI vs Cloud AI: Local computation eliminates massive radio transmission energy and latency.",
        sdgs: [7, 9, 11, 13],
        consequenceNarration:
          "Emergency congestion cleared across municipal spectrum! Rescue rovers and civic shuttles navigate fluidly without dropped connections.",
        educationalTakeaway:
          "Edge AI processes data right at the physical sensor. Computing locally slashes massive cooling water and transmission emissions.",
      },
      {
        id: "m1-opt-b",
        key: "B",
        title: "Continuous 24/7 Cloud Uplink Streaming",
        isSustainable: false,
        image: "/assets/m1-cloud-heavy.svg",
        shortDescription: "Stream every raw camera pixel and sensor reading continuously to the central AETHER cloud servers.",
        detailedExplanation:
          "Robots carry minimal onboard silicon, relaying uncompressed camera feeds to the centralized server warehouse where multi-GPU supercomputers make all steering and actuation decisions.",
        advantages: [
          "Robots use cheaper microcontrollers with marginally lower initial unit fabrication complexity.",
        ],
        disadvantages: [
          "Wireless networks choke under petabytes of video; data centers consume excessive cooling water and electricity.",
          "Any wireless dropout freezes all robots instantaneously in place.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -20, energy: -25, social: -10, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +18,
          carbonIndex: +22,
          waterIndex: +25,
          ewasteIndex: +4,
          operationalEfficiency: -15,
          citizenWellbeing: -12,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -18,
          networkStability: -28,
          environmentalHealth: -15,
          waterAvailability: -22,
          rescueProgress: -8,
          publicTrust: -14,
          ewasteLevel: +5,
        },
        learningObjective: "Centralized cloud reliance creates single-point-of-failure fragility and massive cooling footprints.",
        sdgs: [9, 11],
        consequenceNarration:
          "Cell towers overheated. 35% of municipal shuttles stalled at intersections waiting for packet acknowledgments.",
        educationalTakeaway:
          "Continuous cloud streaming consumes excessive transmission power and cooling water. Physical robotics require edge resilience.",
      },
    ],
    sdgs: [7, 9, 11, 13],
    summaryNote: "Edge processing reduces data movement energy, preserving grid stability.",
    hotspots: [
      { id: "h1-1", label: "Central Server Facility", x: 28, y: 35, description: "Hyperscale servers consuming massive cooling water.", tag: "Cloud Infrastructure" },
      { id: "h1-2", label: "Edge Rescue Rover", x: 68, y: 72, description: "Local NPU processor enabling standalone intelligence.", tag: "Edge AI" },
      { id: "h1-3", label: "Cellular Transmission Tower", x: 82, y: 25, description: "Wireless bottleneck radiating thermal waste.", tag: "Telecom Network" },
    ],
    aiConcept: {
      title: "Edge AI vs Cloud AI",
      subtitle: "Where computation takes place matters physically",
      definition: "Edge AI executes neural network inferences locally on device hardware rather than relying on remote data centers.",
      realWorldExample: "Your phone unlocking with Face ID locally vs uploading your face video to an overseas server.",
      takeaway: "Edge computing slashes network traffic, saves water, and protects robotic autonomy.",
      componentType: "pipeline",
    },
  },
  {
    id: 2,
    number: 2,
    chapterNumber: 1,
    chapterTitle: "Chapter 1: The Centralized Collapse",
    title: "Network Collapse & Telemetry Jam",
    category: "Edge Bandwidth Optimization",
    heroImage: "/assets/m1-infrastructure-crisis.svg",
    environmentalContext:
      "Municipal fiber optic backbones and microwave repeater stations are running at 98% thermal capacity, forcing rolling bandwidth shedding.",
    storyProblem:
      "Traffic sensors, air quality monitors, and robotic shuttles are competing for packet queues. Critical ambulance routing signals are being delayed by 4.8 seconds.",
    prompt: "Choose the telemetry protocol for Nova City's municipal IoT infrastructure.",
    question: "How should municipal sensor networks transmit environmental data?",
    options: [
      {
        id: "m2-opt-a",
        key: "A",
        title: "Event-Triggered Anomaly Reporting & Edge Filtering",
        isSustainable: true,
        image: "/assets/m1-edge-ai.svg",
        shortDescription: "Sensors analyze readings on-device and only transmit compressed alerts when notable anomalies occur.",
        detailedExplanation:
          "Sensors run lightweight edge models to identify baseline norms. If air quality or traffic remains expected, only hourly 12-byte summary digests are transmitted.",
        advantages: [
          "Reduces transmission bandwidth demand by 94%, guaranteeing immediate clear channels for emergency sirens and medics.",
          "Multiplies battery lifespan of roadside sensor units by 4x.",
        ],
        disadvantages: [
          "Requires sensors to possess small micro-NPUs to compute local variance checks.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 20, energy: 20, social: 15, economic: 15 },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -12,
          waterIndex: -10,
          ewasteIndex: 0,
          operationalEfficiency: +22,
          citizenWellbeing: +15,
          resilienceIndex: +24,
        },
        sharedCityDeltas: {
          energyStability: +12,
          networkStability: +30,
          environmentalHealth: +10,
          waterAvailability: +12,
          rescueProgress: +15,
          publicTrust: +14,
          ewasteLevel: 0,
        },
        learningObjective: "Edge filtering prevents network congestion and conserves RF transmission energy.",
        sdgs: [9, 11],
        consequenceNarration:
          "Network latency plummeted to 8ms. Emergency ambulance routes are cleared instantly with zero packet loss.",
        educationalTakeaway:
          "Sending only what matters is the golden rule of sustainable communications. Edge filtering saves electromagnetic power.",
      },
      {
        id: "m2-opt-b",
        key: "B",
        title: "Continuous Raw Telemetry Polling",
        isSustainable: false,
        image: "/assets/m1-cloud-heavy.svg",
        shortDescription: "Every roadside sensor transmits full 100Hz raw waveform logs to central databases unconditionally.",
        detailedExplanation:
          "Central databases receive millions of repetitive identical temperature, noise, and vibration numbers per second, storing everything in high-power flash storage arrays.",
        advantages: [
          "Complete historical logs stored centrally without needing any intelligence on the sensor nodes.",
        ],
        disadvantages: [
          "Clogs wireless networks; causes ambulance telemetry dropouts and burns unnecessary radio transmitter power.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -15, energy: -20, social: -15, economic: -10 },
        cityMetricDeltas: {
          energyIndex: +15,
          carbonIndex: +16,
          waterIndex: +14,
          ewasteIndex: +2,
          operationalEfficiency: -18,
          citizenWellbeing: -14,
          resilienceIndex: -22,
        },
        sharedCityDeltas: {
          energyStability: -15,
          networkStability: -25,
          environmentalHealth: -12,
          waterAvailability: -14,
          rescueProgress: -12,
          publicTrust: -16,
          ewasteLevel: +4,
        },
        learningObjective: "Unnecessary raw data streaming burns energy and crowds out life-critical communications.",
        sdgs: [9, 11],
        consequenceNarration:
          "Microwave repeaters tripped safety circuits. Telemetry lag caused two autonomous buses to stall in the transit tunnel.",
        educationalTakeaway:
          "Data minimization is a core sustainability principle. Transmitting identical noise wastefully drains batteries and servers.",
      },
    ],
    sdgs: [9, 11],
    summaryNote: "Filtering at the edge keeps critical civic communication channels clear.",
    hotspots: [
      { id: "h2-1", label: "Smart Streetlight Sensor", x: 40, y: 60, description: "Monitors particulate matter with local micro-NPU.", tag: "Edge IoT" },
      { id: "h2-2", label: "Emergency Siren Uplink", x: 75, y: 30, description: "Requires ultra-low-latency priority transmission.", tag: "Safety Protocol" },
    ],
    aiConcept: {
      title: "Data Minimization & Edge Filtering",
      subtitle: "Transmitting insights instead of raw pixels",
      definition: "Edge filtering uses lightweight algorithms to extract key insights and only send alerts when deviations occur.",
      realWorldExample: "A security camera that only sends a text notification when a door opens, rather than streaming empty hallways all night.",
      takeaway: "Transmitting less data directly reduces wireless power and server strain.",
      componentType: "pipeline",
    },
  },
  {
    id: 3,
    number: 3,
    chapterNumber: 1,
    chapterTitle: "Chapter 1: The Centralized Collapse",
    title: "The Energy Emergency & Blackout Threat",
    category: "Model Optimization & Quantization",
    heroImage: "/assets/m3-energy-emergency.svg",
    environmentalContext:
      "A heatwave has pushed grid temperatures to 44°C. Nova City's municipal transformer banks are operating near their thermal tripping limits.",
    storyProblem:
      "AETHER's central models are calculating millions of unnecessary 32-bit floating point calculations for simple routine tasks, generating intense heat.",
    prompt: "Choose the computational precision and scheduling strategy for municipal AI.",
    question: "How should Nova City reduce the electrical power consumed by its artificial intelligence workloads?",
    options: [
      {
        id: "m3-opt-a",
        key: "A",
        title: "INT8 Model Quantization & Clean Renewable Scheduling",
        isSustainable: true,
        image: "/assets/m3-optimized-scheduling.svg",
        shortDescription: "Compress AI model weights from 32-bit float to 8-bit integer and schedule heavy background compute when solar is peak.",
        detailedExplanation:
          "Quantizing models to INT8 cuts matrix multiplication silicon energy by 72% with negligible accuracy change. Heavy model retraining is deferred to midday when rooftop solar generation exceeds demand.",
        advantages: [
          "Slashes algorithmic energy draw by ~70% immediately; prevents transformer overheating and grid blackouts.",
          "Extends device battery operation time significantly.",
        ],
        disadvantages: [
          "Requires model conversion and verification of precision thresholds.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 30, social: 15, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -22,
          carbonIndex: -24,
          waterIndex: -16,
          ewasteIndex: 0,
          operationalEfficiency: +20,
          citizenWellbeing: +15,
          resilienceIndex: +25,
        },
        sharedCityDeltas: {
          energyStability: +28,
          networkStability: +15,
          environmentalHealth: +20,
          waterAvailability: +18,
          rescueProgress: +12,
          publicTrust: +18,
          ewasteLevel: 0,
        },
        learningObjective: "Algorithmic efficiency (quantization + scheduling) drastically lowers carbon emissions without sacrificing performance.",
        sdgs: [7, 9, 13],
        consequenceNarration:
          "Grid strain relieved! Substation temperatures dropped 12°C. Zero blackout occurred during the peak afternoon heat.",
        educationalTakeaway:
          "Model quantization is like replacing bulky cargo trucks with nimble electric bikes. Same destination, a fraction of the watts.",
      },
      {
        id: "m3-opt-b",
        key: "B",
        title: "Max-Power Overclocked Continuous Compute",
        isSustainable: false,
        image: "/assets/m3-max-power.svg",
        shortDescription: "Run uncompressed FP32 models continuously at maximum clock frequency around the clock.",
        detailedExplanation:
          "Servers run at full throttle 24/7 without consideration of solar curves or numerical compression, demanding fossil peaker plants to supply extra megawatts.",
        advantages: [
          "Developers do not have to perform any weight quantization or temporal job scheduling.",
        ],
        disadvantages: [
          "Trips grid circuit breakers; triggers blackouts and releases thousands of tons of avoidable carbon dioxide.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -30, social: -20, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +26,
          carbonIndex: +28,
          waterIndex: +22,
          ewasteIndex: +5,
          operationalEfficiency: -15,
          citizenWellbeing: -20,
          resilienceIndex: -25,
        },
        sharedCityDeltas: {
          energyStability: -30,
          networkStability: -18,
          environmentalHealth: -24,
          waterAvailability: -20,
          rescueProgress: -15,
          publicTrust: -22,
          ewasteLevel: +6,
        },
        learningObjective: "Brute-force computing wastes massive energy and threatens societal infrastructure resilience.",
        sdgs: [7, 13],
        consequenceNarration:
          "Two substation transformers blew out in Sector 4. 85,000 residents lost domestic refrigeration for 6 hours.",
        educationalTakeaway:
          "Sustainable AI requires right-sized computation. Running oversized models wastefully burns fossil fuel and risks outages.",
      },
    ],
    sdgs: [7, 9, 13],
    summaryNote: "Quantization cuts mathematical energy consumption by up to 75%.",
    hotspots: [
      { id: "h3-1", label: "Solar Microgrid Array", x: 22, y: 48, description: "Supplies daytime zero-carbon compute power.", tag: "Renewable Energy" },
      { id: "h3-2", label: "Substation Transformer", x: 55, y: 70, description: "Protected from thermal overload by INT8 model compression.", tag: "Power Grid" },
    ],
    aiConcept: {
      title: "Model Quantization & Dynamic Scheduling",
      subtitle: "Compressing numbers to save gigawatts",
      definition: "Quantization reduces the precision of neural network weights (e.g. from 32-bit floating points to 8-bit integers) to cut memory and compute requirements.",
      realWorldExample: "Measuring someone's height in centimeters rather than calculating it down to nanometers with twenty decimals.",
      takeaway: "Algorithmic optimization saves more electricity than constructing new power plants.",
      componentType: "efficiency",
    },
  },
  {
    id: 4,
    number: 4,
    chapterNumber: 1,
    chapterTitle: "Chapter 1: The Centralized Collapse",
    title: "The Industrial E-Waste Crisis",
    category: "Circular Robotics & Modular Repair",
    heroImage: "/assets/m4-ewaste-crisis.svg",
    environmentalContext:
      "Landfills outside Nova City contain over 12,000 tons of discarded civic robotics, leaking lithium, lead, and rare earth oxides into regional groundwater.",
    storyProblem:
      "Municipal procurement contracts historically mandated replacing entire robotic quadrupeds whenever a single vision camera sensor or motor bearing broke.",
    prompt: "Establish a lifecycle protocol for Nova City's robotic maintenance depots.",
    question: "What policy should govern outdated or damaged autonomous robotic systems?",
    options: [
      {
        id: "m4-opt-a",
        key: "A",
        title: "Modular Component Refurbishment & Closed-Loop Recycling",
        isSustainable: true,
        image: "/assets/m4-modular-repair.svg",
        shortDescription: "Mandate standardized modular chassis: swap and repair only defective sensors or joints; recycle raw metals cleanly.",
        detailedExplanation:
          "Robotic frames are designed for rapid field disassembly. Working motors, battery packs, and titanium struts are reconditioned and reused across multiple fleet generations.",
        advantages: [
          "Reduces virgin metal mining demand by 80% and slashes municipal e-waste generation by 88%.",
          "Lowers long-term fleet maintenance costs by 60%.",
        ],
        disadvantages: [
          "Requires establishing modular mechanical standards and training specialized municipal technicians.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 15, social: 20, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -14,
          waterIndex: -12,
          ewasteIndex: -25,
          operationalEfficiency: +18,
          citizenWellbeing: +15,
          resilienceIndex: +20,
        },
        sharedCityDeltas: {
          energyStability: +10,
          networkStability: +10,
          environmentalHealth: +26,
          waterAvailability: +16,
          rescueProgress: +12,
          publicTrust: +18,
          ewasteLevel: -28,
        },
        learningObjective: "Circular economy (Reduce, Reuse, Repair, Refurbish, Recycle) preserves embodied energy in hardware.",
        sdgs: [6, 11, 12],
        consequenceNarration:
          "92% of decommissioned patrol rovers were repaired and redeployed within 48 hours. E-waste contamination halted.",
        educationalTakeaway:
          "The greenest robot is the one already built. Modular repair preserves rare earths and stops hazardous toxic leaching.",
      },
      {
        id: "m4-opt-b",
        key: "B",
        title: "Total Scrap & New Hardware Purchasing",
        isSustainable: false,
        image: "/assets/m4-dump-replacement.svg",
        shortDescription: "Dump entire robot chassis in industrial scrap yards whenever repairs are needed and buy brand new models.",
        detailedExplanation:
          "Depots throw away entire robots because unscrewing non-standard proprietary glue joints is deemed inconvenient, fueling relentless strip mining for new lithium and neodymium.",
        advantages: [
          "Always provides the city with pristine, brand-new exterior paint and fresh factory warranties.",
        ],
        disadvantages: [
          "Expands toxic e-waste mountains; consumes millions of liters of water in overseas mineral extraction.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -15, social: -15, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +12,
          carbonIndex: +18,
          waterIndex: +20,
          ewasteIndex: +28,
          operationalEfficiency: -10,
          citizenWellbeing: -16,
          resilienceIndex: -18,
        },
        sharedCityDeltas: {
          energyStability: -8,
          networkStability: -6,
          environmentalHealth: -28,
          waterAvailability: -18,
          rescueProgress: -6,
          publicTrust: -20,
          ewasteLevel: +30,
        },
        learningObjective: "Planned obsolescence in robotics creates hazardous waste streams and depletes planetary minerals.",
        sdgs: [6, 12],
        consequenceNarration:
          "Toxic runoff from the South Basin scrapyard entered the municipal water supply, triggering clean-water rationing.",
        educationalTakeaway:
          "Discarding working hardware is unsustainable. Sustainable engineering demands design-for-disassembly and modularity.",
      },
    ],
    sdgs: [6, 11, 12],
    summaryNote: "Circular repair stops toxic e-waste runoff and protects drinking water.",
    hotspots: [
      { id: "h4-1", label: "Cleanroom Repair Station", x: 30, y: 55, description: "Technicians swapping standardized sensor modules.", tag: "Modular Repair" },
      { id: "h4-2", label: "Lithium Battery Reconditioner", x: 65, y: 40, description: "Testing and balancing reusable energy cells.", tag: "Circular Economy" },
    ],
    aiConcept: {
      title: "The 5R Circular Robotics Economy",
      subtitle: "Reduce, Reuse, Repair, Refurbish, Recycle",
      definition: "A circular economy keeps physical hardware and materials in active use for as long as possible, eliminating toxic waste.",
      realWorldExample: "Swapping out a defective laptop battery instead of throwing away the screen, keyboard, and processor.",
      takeaway: "True sustainable robotics considers the entire physical lifecycle from mine to disposal.",
      componentType: "circular",
    },
  },

  // ==========================================
  // CHAPTER 2: AUTONOMOUS RESCUE & PHYSICAL AI (5 - 8)
  // ==========================================
  {
    id: 5,
    number: 5,
    chapterNumber: 2,
    chapterTitle: "Chapter 2: Autonomous Rescue & Physical AI",
    title: "Seismic Rubble Navigation",
    category: "Physical AI Perception & Actuation",
    heroImage: "/assets/disaster-recovery.svg",
    environmentalContext:
      "A magnitude 6.8 seismic tremor has collapsed bridges and multi-tier highway overpasses across Sector 7. Cellular networks are severed.",
    storyProblem:
      "Trapped survivors require rapid location. Debris piles are shifting and unstable. Thick dust clouds prevent standard aerial drones from viewing the ground.",
    prompt: "Deploy the ground search-and-rescue rover perception pipeline.",
    question: "How should rescue rovers navigate through collapsed structural debris without wireless connectivity?",
    options: [
      {
        id: "m5-opt-a",
        key: "A",
        title: "Autonomous 3D LiDAR & Multi-Sensor SLAM with Human Gatekeeping",
        isSustainable: true,
        image: "/assets/m2-collaborative.svg",
        shortDescription: "Rovers construct real-time 3D point-cloud maps locally and navigate debris autonomously, requesting human confirmation only for critical extrication.",
        detailedExplanation:
          "Onboard LiDAR penetrates smoke and darkness. Edge computing calculates foot placement and path-planning locally, ensuring rovers keep moving even with total RF silence.",
        advantages: [
          "Zero dependence on cloud servers; operational through zero-connectivity blackout zones.",
          "Protects human rescue workers from unstable secondary collapse hazards.",
        ],
        disadvantages: [
          "Requires onboard high-performance edge inference hardware.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 15, energy: 15, social: 30, economic: 15 },
        cityMetricDeltas: {
          energyIndex: -8,
          carbonIndex: -10,
          waterIndex: -5,
          ewasteIndex: 0,
          operationalEfficiency: +25,
          citizenWellbeing: +25,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +8,
          networkStability: +15,
          environmentalHealth: +10,
          waterAvailability: +8,
          rescueProgress: +32,
          publicTrust: +26,
          ewasteLevel: 0,
        },
        learningObjective: "Physical AI couples local perception, decision-making, and mechanical action to save lives safely.",
        sdgs: [3, 9, 11],
        consequenceNarration:
          "Rovers navigated dark collapsed tunnels within 22 minutes, successfully identifying 14 trapped survivors without a single network connection.",
        educationalTakeaway:
          "Physical AI must be resilient. In disaster zones, assuming high-speed internet exists is a recipe for catastrophic failure.",
      },
      {
        id: "m5-opt-b",
        key: "B",
        title: "100% Continuous High-Def Video Teleoperation",
        isSustainable: false,
        image: "/assets/m2-teleop-lag.svg",
        shortDescription: "Stream raw dual 4K video feeds back to remote operators who must manually joy-stick every single step the robot takes.",
        detailedExplanation:
          "The robot has no autonomous navigation capability. It waits for wireless packets from a remote driver before moving a limb or turning a track.",
        advantages: [
          "No complex onboard SLAM algorithms needed on the rover chassis.",
        ],
        disadvantages: [
          "Robots freeze completely whenever dust or concrete blocks the wireless radio signal.",
          "Operators experience motion sickness and fatigue after 45 minutes of manual steering.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -10, energy: -15, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +12,
          carbonIndex: +14,
          waterIndex: +8,
          ewasteIndex: +2,
          operationalEfficiency: -20,
          citizenWellbeing: -22,
          resilienceIndex: -25,
        },
        sharedCityDeltas: {
          energyStability: -10,
          networkStability: -20,
          environmentalHealth: -8,
          waterAvailability: -6,
          rescueProgress: -24,
          publicTrust: -20,
          ewasteLevel: +3,
        },
        learningObjective: "Total teleoperation dependency fails during natural disasters when RF networks collapse.",
        sdgs: [3, 11],
        consequenceNarration:
          "Wireless packet loss spiked to 70%. Three rovers tumbled down elevator shafts due to 1.4-second joystick latency.",
        educationalTakeaway:
          "Local autonomy combined with human oversight is the cornerstone of responsible Physical AI in life-or-death missions.",
      },
    ],
    sdgs: [3, 9, 11],
    summaryNote: "Local LiDAR SLAM allows physical robots to save lives through communication blackouts.",
    hotspots: [
      { id: "h5-1", label: "3D LiDAR Sensor Turret", x: 48, y: 35, description: "Pulses 300,000 laser points per second through smoke.", tag: "Perception" },
      { id: "h5-2", label: "Articulated Rubber Track", x: 62, y: 75, description: "Traverses 45-degree concrete rubble piles.", tag: "Physical Actuation" },
    ],
    aiConcept: {
      title: "Physical AI Perception & SLAM",
      subtitle: "Simultaneous Localization and Mapping",
      definition: "Physical AI combines sensor perception (LiDAR/cameras), spatial reasoning (SLAM), and mechanical actuation (motors) to interact with physical terrain.",
      realWorldExample: "A self-driving rover mapping an unknown cave while simultaneously tracking where it is inside it.",
      takeaway: "Embodied intelligence must function when disconnected from the cloud.",
      componentType: "robot",
    },
  },
  {
    id: 6,
    number: 6,
    chapterNumber: 2,
    chapterTitle: "Chapter 2: Autonomous Rescue & Physical AI",
    title: "Survivor Triaging & Swarm Coordination",
    category: "Distributed Physical Swarm",
    heroImage: "/assets/m2-autonomous-rescue.svg",
    environmentalContext:
      "Dust and smoke from collapsed industrial warehouses have reduced visibility to under 2 meters. Thermal signatures are dissipating rapidly in the evening cold.",
    storyProblem:
      "Multiple survivor signals have been detected across a 4-square-kilometer disaster perimeter. Rescue resources must be deployed efficiently before temperatures drop below freezing.",
    prompt: "Choose the coordination architecture for the search-and-rescue rover team.",
    question: "How should multiple rescue robots coordinate their search across the disaster grid?",
    options: [
      {
        id: "m6-opt-a",
        key: "A",
        title: "Decentralized Peer-to-Peer Mesh Swarm Coordination",
        isSustainable: true,
        image: "/assets/m2-collaborative.svg",
        shortDescription: "Rovers communicate directly with nearby peers over low-power ad-hoc radio, dividing search grids dynamically without a central server.",
        detailedExplanation:
          "If one rover discovers an obstacle or survivor, it relays a lightweight 30-byte message to neighbor rovers. The swarm self-organizes its search paths without requiring central cloud arbitration.",
        advantages: [
          "Zero single-point-of-failure; search continues seamlessly even if several rovers are crushed or battery-depleted.",
          "Ultra-low radio emissions minimize interference with emergency human medical gear.",
        ],
        disadvantages: [
          "Requires decentralized consensus protocols programmed into rover firmware.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 15, energy: 20, social: 30, economic: 15 },
        cityMetricDeltas: {
          energyIndex: -8,
          carbonIndex: -10,
          waterIndex: -4,
          ewasteIndex: 0,
          operationalEfficiency: +26,
          citizenWellbeing: +28,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +8,
          networkStability: +22,
          environmentalHealth: +8,
          waterAvailability: +8,
          rescueProgress: +35,
          publicTrust: +28,
          ewasteLevel: 0,
        },
        learningObjective: "Decentralized swarm intelligence is fault-tolerant, resilient, and energy-conserving.",
        sdgs: [3, 9, 11],
        consequenceNarration:
          "The mesh swarm covered 4 square kilometers in 35 minutes, identifying 28 survivors and directing medical drones with pinpoint accuracy.",
        educationalTakeaway:
          "Distributed networks distribute both the work and the resilience. No single point of failure means no total collapse.",
      },
      {
        id: "m6-opt-b",
        key: "B",
        title: "Centralized Master Controller Rover",
        isSustainable: false,
        image: "/assets/m2-teleop-lag.svg",
        shortDescription: "A single master command van processes all data and issues direct movement commands to every individual rover.",
        detailedExplanation:
          "All rovers wait for step-by-step instructions from a central generator-powered van stationed on the perimeter. If the van loses line of sight, the entire fleet stops.",
        advantages: [
          "Simpler individual rover programming since all logic is held in the master computer.",
        ],
        disadvantages: [
          "Catastrophic vulnerability: if the command van loses power or antenna alignment, all rovers freeze dead in the rubble.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -10, energy: -15, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +10,
          carbonIndex: +14,
          waterIndex: +6,
          ewasteIndex: +2,
          operationalEfficiency: -18,
          citizenWellbeing: -20,
          resilienceIndex: -24,
        },
        sharedCityDeltas: {
          energyStability: -8,
          networkStability: -22,
          environmentalHealth: -6,
          waterAvailability: -4,
          rescueProgress: -20,
          publicTrust: -18,
          ewasteLevel: +2,
        },
        learningObjective: "Centralized command structures are fragile bottlenecks in emergency physical response.",
        sdgs: [3, 11],
        consequenceNarration:
          "A falling telegraph pole snapped the command van's mast. All 18 rovers froze for 2 crucial hours while survivors waited in the freezing cold.",
        educationalTakeaway:
          "Resilient robotics avoids single points of failure. Swarm autonomy keeps working when leaders fall.",
      },
    ],
    sdgs: [3, 9, 11],
    summaryNote: "Decentralized mesh networks protect rescue operations from catastrophic radio cutoffs.",
    hotspots: [
      { id: "h6-1", label: "Peer-to-Peer Mesh Antenna", x: 50, y: 25, description: "Short-range 900MHz link sharing survivor coordinates.", tag: "Mesh Radio" },
      { id: "h6-2", label: "Infrared Thermal Sensor", x: 35, y: 65, description: "Detects human body heat beneath 1.5m of pulverized brick.", tag: "Life Detection" },
    ],
    aiConcept: {
      title: "Decentralized Swarm Intelligence",
      subtitle: "Robust collective behavior without a master",
      definition: "Swarm robotics coordinates multiple autonomous units using local interaction rules rather than top-down centralized control.",
      realWorldExample: "A flock of birds flying smoothly around obstacles without any single bird acting as a permanent air-traffic controller.",
      takeaway: "Swarm architectures guarantee that the loss of one unit does not halt the mission.",
      componentType: "robot",
    },
  },
  {
    id: 7,
    number: 7,
    chapterNumber: 2,
    chapterTitle: "Chapter 2: Autonomous Rescue & Physical AI",
    title: "Power Grid Black Start",
    category: "Physical AI Grid Actuation",
    heroImage: "/assets/m3-energy-emergency.svg",
    environmentalContext:
      "Following the earthquake, 80% of Nova City's regional electrical grid has suffered a total blackout ('black start' condition).",
    storyProblem:
      "Simultaneously switching on high-voltage circuit breakers will cause immediate surge overloads, blowing out expensive generator turbines and delaying recovery by weeks.",
    prompt: "Coordinate the robotic breaker actuation sequence across the power distribution network.",
    question: "How should physical robotic switchgear restore electricity to the dark city grid?",
    options: [
      {
        id: "m7-opt-a",
        key: "A",
        title: "Autonomous Dynamic Microgrid Sectionalizing with Essential Islanding",
        isSustainable: true,
        image: "/assets/m3-optimized-scheduling.svg",
        shortDescription: "Robotic switchgear autonomously energizes localized medical and water pumping islands first, balancing phase voltages gradually.",
        detailedExplanation:
          "Edge sensors at each substation measure frequency and phase synchronization. Only clean renewable solar and battery reserves are brought online first to stabilize hospitals before industrial loads are reconnected.",
        advantages: [
          "Prevents generator coil blowout and catastrophic secondary fires; restores intensive care and drinking water pumps in under 20 minutes.",
          "Protects fragile renewable inverters from grid-frequency shocks.",
        ],
        disadvantages: [
          "Non-essential commercial districts must wait several additional hours for reconnection.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 20, energy: 30, social: 25, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -15,
          carbonIndex: -18,
          waterIndex: -14,
          ewasteIndex: 0,
          operationalEfficiency: +25,
          citizenWellbeing: +25,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +30,
          networkStability: +20,
          environmentalHealth: +18,
          waterAvailability: +24,
          rescueProgress: +20,
          publicTrust: +25,
          ewasteLevel: 0,
        },
        learningObjective: "Intelligent islanding and phased restoration prevent catastrophic power grid cascade failures.",
        sdgs: [7, 9, 11],
        consequenceNarration:
          "Substations locked into stable 50Hz synchronization. Hospital backup systems resumed clean power with zero generator tripping.",
        educationalTakeaway:
          "Restoring complex infrastructure requires balance, not brute force. Dynamic islanding protects delicate green technology.",
      },
      {
        id: "m7-opt-b",
        key: "B",
        title: "Simultaneous High-Voltage Blanket Reclosure",
        isSustainable: false,
        image: "/assets/m3-max-power.svg",
        shortDescription: "Close every main transmission breaker at the same moment to attempt full city-wide power restoration in one burst.",
        detailedExplanation:
          "Robotic actuators slam all circuit breakers shut simultaneously, expecting the central coal and gas plants to absorb the astronomical inrush current.",
        advantages: [
          "If it works, the entire city receives power in a single second.",
        ],
        disadvantages: [
          "Extremely high probability of massive inductive inrush current destroying transformer coils and triggering secondary substation explosions.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -20, energy: -30, social: -25, economic: -25 },
        cityMetricDeltas: {
          energyIndex: +25,
          carbonIndex: +25,
          waterIndex: +15,
          ewasteIndex: +10,
          operationalEfficiency: -22,
          citizenWellbeing: -24,
          resilienceIndex: -30,
        },
        sharedCityDeltas: {
          energyStability: -35,
          networkStability: -20,
          environmentalHealth: -18,
          waterAvailability: -18,
          rescueProgress: -18,
          publicTrust: -26,
          ewasteLevel: +12,
        },
        learningObjective: "Blanket energization without physical phase synchronization causes catastrophic hardware damage.",
        sdgs: [7, 9],
        consequenceNarration:
          "Immense electrical arc-flash vaporized two 400kV busbars at North Station. Dark-start delayed by an additional 36 hours.",
        educationalTakeaway:
          "Physical AI must respect electro-mechanical physics. Pushing systems beyond physical tolerances destroys real infrastructure.",
      },
    ],
    sdgs: [7, 9, 11],
    summaryNote: "Decentralized microgrid islanding restores critical hospital power safely.",
    hotspots: [
      { id: "h7-1", label: "Smart High-Voltage Breaker", x: 42, y: 62, description: "Monitors AC phase angle before mechanical closure.", tag: "Grid Actuator" },
      { id: "h7-2", label: "Hospital Microgrid Battery", x: 70, y: 35, description: "Zero-emission lithium-iron-phosphate emergency reserve.", tag: "Clean Energy" },
    ],
    aiConcept: {
      title: "Microgrid Islanding & Black Start",
      subtitle: "Autonomous electrical stability in emergencies",
      definition: "Microgrid islanding disconnects a local circuit from the wider stressed grid so it can generate, balance, and consume its own local power safely.",
      realWorldExample: "A hospital running off its own solar panels and batteries when the main city electricity grid goes dark.",
      takeaway: "Decentralized energy modules ensure that regional collapses don't turn off critical life-support systems.",
      componentType: "efficiency",
    },
  },
  {
    id: 8,
    number: 8,
    chapterNumber: 2,
    chapterTitle: "Chapter 2: Autonomous Rescue & Physical AI",
    title: "Flood Gate Hydraulic Actuation",
    category: "Physical AI Environmental Protection",
    heroImage: "/assets/disaster-recovery.svg",
    environmentalContext:
      "Seismic damage cracked the earthen levees along the Azure River. Stormwater is rushing toward the low-income historic residential district.",
    storyProblem:
      "Municipal floodgate valves require physical mechanical force to actuate. Central SCADA telemetry has been severed by mudslides.",
    prompt: "Deploy autonomous physical actuator rovers to seal the retention sluices.",
    question: "How should robotic actuators operate the physical hydraulic flood control gates?",
    options: [
      {
        id: "m8-opt-a",
        key: "A",
        title: "Autonomous Closed-Loop Pressure Regulation with Edge Hydrodynamic Modeling",
        isSustainable: true,
        image: "/assets/disaster-recovery.svg",
        shortDescription: "Robotic actuators calculate local water volume and torque, modulating sluice gates gradually to prevent pipe hammer and downstream surge.",
        detailedExplanation:
          "Rovers analyze water height and structural stress on concrete gate hinges using onboard ultrasonic sensors, tuning hydraulic valve turning speed to safely divert water into wetlands.",
        advantages: [
          "Prevents levee blowout and safely diverts floodwaters into natural marshland reservoirs without damaging downstream neighborhoods.",
          "Functions with 100% offline autonomy at the physical valve site.",
        ],
        disadvantages: [
          "Takes 12 minutes of steady modulated closing rather than an instant slam.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 15, social: 30, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -5,
          carbonIndex: -10,
          waterIndex: -20,
          ewasteIndex: 0,
          operationalEfficiency: +24,
          citizenWellbeing: +28,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +10,
          networkStability: +10,
          environmentalHealth: +28,
          waterAvailability: +30,
          rescueProgress: +25,
          publicTrust: +28,
          ewasteLevel: 0,
        },
        learningObjective: "Physical AI models real-world hydrodynamic forces to protect human communities and ecosystems.",
        sdgs: [6, 11, 13],
        consequenceNarration:
          "42,000 homes in the Azure Basin were spared from flooding. Stormwater was cleanly diverted into wetland recharge aquifers.",
        educationalTakeaway:
          "Physical AI acts directly upon nature. Careful engineering that cooperates with natural ecosystems creates lasting resilience.",
      },
      {
        id: "m8-opt-b",
        key: "B",
        title: "Rapid Emergency Drop Without Pressure Feedback",
        isSustainable: false,
        image: "/assets/m4-dump-replacement.svg",
        shortDescription: "Trigger explosive mechanical release pins to slam 40-ton steel floodgates down at maximum velocity instantly.",
        detailedExplanation:
          "Actuators dump steel gates without monitoring hydraulic pressure spikes, ignoring the massive water hammer shockwave rebounding through aging stormwater tunnels.",
        advantages: [
          "Closes the gate opening in under 3 seconds.",
        ],
        disadvantages: [
          "Water hammer shockwave ruptures underground sewer pipes and causes secondary levee breaches 2 kilometers downstream.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -10, social: -25, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +8,
          carbonIndex: +12,
          waterIndex: +25,
          ewasteIndex: +5,
          operationalEfficiency: -20,
          citizenWellbeing: -25,
          resilienceIndex: -28,
        },
        sharedCityDeltas: {
          energyStability: -8,
          networkStability: -8,
          environmentalHealth: -26,
          waterAvailability: -28,
          rescueProgress: -15,
          publicTrust: -24,
          ewasteLevel: +4,
        },
        learningObjective: "Violent mechanical actuation without sensor feedback causes severe secondary structural disasters.",
        sdgs: [6, 11],
        consequenceNarration:
          "Water hammer ruptured the main municipal aqueduct. Raw stormwater mixed with contaminated industrial runoff.",
        educationalTakeaway:
          "Every physical action has an equal and opposite reaction. Physical AI must account for mechanical feedback and fluid dynamics.",
      },
    ],
    sdgs: [6, 11, 13],
    summaryNote: "Modulated closed-loop floodgate actuation protects homes and preserves clean wetlands.",
    hotspots: [
      { id: "h8-1", label: "Hydraulic Sluice Actuator", x: 52, y: 55, description: "Edge controlled high-torque planetary gearbox.", tag: "Physical Actuator" },
      { id: "h8-2", label: "Ultrasonic Water Gauge", x: 25, y: 72, description: "Monitors Azure river surge level in real time.", tag: "Hydrology Sensor" },
    ],
    aiConcept: {
      title: "Closed-Loop Feedback Control",
      subtitle: "Adjusting physical action based on continuous measurement",
      definition: "Closed-loop control continuously checks sensors to fine-tune motor torque and valve speed, preventing mechanical strain and failure.",
      realWorldExample: "Cruise control in an electric car gently easing off throttle as you go downhill rather than slamming the brakes.",
      takeaway: "Sustainable robotics uses intelligence to move smoothly rather than wasting energy with brute force.",
      componentType: "robot",
    },
  },

  // ==========================================
  // CHAPTER 3: SMART ENERGY & GRID RESILIENCE (9 - 12)
  // ==========================================
  {
    id: 9,
    number: 9,
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Smart Energy & Grid Resilience",
    title: "Solar-Powered Rover Fleet Charging",
    category: "Renewable Autonomous Charging",
    heroImage: "/assets/m3-optimized-scheduling.svg",
    environmentalContext:
      "Municipal electric charging stations are pulling 140MW from the regional coal-fired backup plant whenever rover fleets return for overnight charging.",
    storyProblem:
      "Nova City's 3,500 civic rovers and logistics drones plug in simultaneously at 18:00 when residential electricity consumption peaks, stressing the city's power grid.",
    prompt: "Architect the autonomous fleet charging and solar integration strategy.",
    question: "When and how should Nova City's autonomous robotic fleet recharge its batteries?",
    options: [
      {
        id: "m9-opt-a",
        key: "A",
        title: "Predictive Solar-Tracked Opportunistic Recharging with Smart V2G",
        isSustainable: true,
        image: "/assets/m3-optimized-scheduling.svg",
        shortDescription: "Rovers charge at distributed solar canopy stations during midday solar peaks, feeding battery power back to the grid (V2G) during evening domestic peaks.",
        detailedExplanation:
          "Fleets use predictive weather models to top up batteries when sunlight is abundant. During evening residential hours, rovers parked at municipal docks feed surplus power back to stabilize homes.",
        advantages: [
          "Flattens grid peak demand completely; transforms the robotic fleet into a 45MWh distributed emergency battery for the city.",
          "Cuts fleet operational emissions by 84%.",
        ],
        disadvantages: [
          "Requires bidirectional Vehicle-to-Grid (V2G) charging hardware at municipal docks.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 30, social: 20, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -22,
          waterIndex: -10,
          ewasteIndex: 0,
          operationalEfficiency: +20,
          citizenWellbeing: +18,
          resilienceIndex: +26,
        },
        sharedCityDeltas: {
          energyStability: +28,
          networkStability: +15,
          environmentalHealth: +22,
          waterAvailability: +14,
          rescueProgress: +12,
          publicTrust: +20,
          ewasteLevel: 0,
        },
        learningObjective: "Vehicle-to-Grid (V2G) and temporal renewable alignment transform consumer robots into civic energy stabilizers.",
        sdgs: [7, 11, 13],
        consequenceNarration:
          "Evening grid brownouts eliminated! The rover fleet powered 12,000 apartment air conditioners using clean stored sunlight.",
        educationalTakeaway:
          "Timing is everything in clean energy. Recharging with daytime sun and supporting the grid at night creates circular energy synergy.",
      },
      {
        id: "m9-opt-b",
        key: "B",
        title: "Immediate Fast-Charge at Nightfall",
        isSustainable: false,
        image: "/assets/m3-max-power.svg",
        shortDescription: "Rovers return en masse at 18:00 and draw 350kW ultra-fast DC charging simultaneously regardless of grid strain.",
        detailedExplanation:
          "Fleet depots prioritize rapid 20-minute turnaround times, forcing utility managers to fire up dirty diesel and coal generators to meet the sudden artificial peak.",
        advantages: [
          "Rovers are fully charged and ready to resume driving in under 25 minutes.",
        ],
        disadvantages: [
          "Massive thermal battery degradation; burns fossil peaker fuels and triggers local transformer brownouts.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -25, social: -15, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +24,
          carbonIndex: +26,
          waterIndex: +12,
          ewasteIndex: +8,
          operationalEfficiency: -12,
          citizenWellbeing: -16,
          resilienceIndex: -22,
        },
        sharedCityDeltas: {
          energyStability: -28,
          networkStability: -12,
          environmentalHealth: -24,
          waterAvailability: -12,
          rescueProgress: -8,
          publicTrust: -18,
          ewasteLevel: +10,
        },
        learningObjective: "Fast charging during peak demand periods accelerates battery wear and burns dirty fossil fuels.",
        sdgs: [7, 13],
        consequenceNarration:
          "Peaker generator emissions turned the evening skyline gray. Battery cell health declined 14% across the fleet.",
        educationalTakeaway:
          "Convenience without intelligence harms the planet. Smart scheduling costs nothing in hardware but saves gigawatts.",
      },
    ],
    sdgs: [7, 11, 13],
    summaryNote: "Solar-tracked charging turns robotic fleets into distributed green battery reserves.",
    hotspots: [
      { id: "h9-1", label: "Solar Canopy Charging Dock", x: 38, y: 45, description: "Bifacial solar panels generating clean direct DC power.", tag: "Solar Dock" },
      { id: "h9-2", label: "Bidirectional V2G Inverter", x: 62, y: 65, description: "Feeds battery power back to homes during peak hours.", tag: "Smart Grid" },
    ],
    aiConcept: {
      title: "Vehicle-to-Grid (V2G) Energy Orchestration",
      subtitle: "Robots as mobile power batteries",
      definition: "V2G allows electric robots and vehicles to not only draw power from the grid but also feed electricity back during emergencies or peak demand.",
      realWorldExample: "Your electric car powering your refrigerator during an evening neighborhood blackout.",
      takeaway: "Physical AI can stabilize energy grids by coordinating when and where energy flows.",
      componentType: "efficiency",
    },
  },
  {
    id: 10,
    number: 10,
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Smart Energy & Grid Resilience",
    title: "Thermal Inversion & Data Center Cooling",
    category: "Sustainable Thermal Engineering",
    heroImage: "/assets/m1-infrastructure-crisis.svg",
    environmentalContext:
      "A summer atmospheric thermal inversion has trapped hot stagnant air over the industrial sector. Data center chiller evaporators are consuming 5.1 million liters of potable water daily.",
    storyProblem:
      "Municipal drinking water reserves in Lake Serene are dropping by 3cm per week solely to cool server racks computing routine municipal operations.",
    prompt: "Redesign the server cooling infrastructure for Nova City's municipal computing facilities.",
    question: "How should Nova City cool its essential municipal computing racks without depleting drinking water?",
    options: [
      {
        id: "m10-opt-a",
        key: "A",
        title: "Closed-Loop Dielectric Immersion Cooling with District Heat Capture",
        isSustainable: true,
        image: "/assets/m1-edge-ai.svg",
        shortDescription: "Submerge computing hardware in biodegradable dielectric fluid; capture waste heat and pipe it to heat city water and commercial buildings.",
        detailedExplanation:
          "Immersion cooling eliminates evaporative water loss entirely (0 liters consumed). The 55°C waste heat is harvested by heat pumps and piped into the district heating and greenhouse network.",
        advantages: [
          "Cuts cooling energy consumption by 90% and eliminates all municipal water evaporation.",
          "Turns thermal waste into valuable greenhouse agriculture heat.",
        ],
        disadvantages: [
          "Requires retrofitting server chassis with non-conductive dielectric immersion tanks.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 30, energy: 25, social: 20, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -18,
          carbonIndex: -20,
          waterIndex: -30,
          ewasteIndex: 0,
          operationalEfficiency: +22,
          citizenWellbeing: +20,
          resilienceIndex: +25,
        },
        sharedCityDeltas: {
          energyStability: +22,
          networkStability: +15,
          environmentalHealth: +26,
          waterAvailability: +35,
          rescueProgress: +10,
          publicTrust: +22,
          ewasteLevel: 0,
        },
        learningObjective: "Closed-loop thermal management eliminates water waste and repurposes computing heat for urban greenhouses.",
        sdgs: [6, 7, 9, 12],
        consequenceNarration:
          "Potable water withdrawal halted! Lake Serene stabilized while 18 urban greenhouses received free heating from server racks.",
        educationalTakeaway:
          "Computers don't just consume energy; they turn 100% of it into heat. Capturing that heat is circular engineering at its best.",
      },
      {
        id: "m10-opt-b",
        key: "B",
        title: "Deep Aquifer Open-Cycle Groundwater Pumping",
        isSustainable: false,
        image: "/assets/m1-cloud-heavy.svg",
        shortDescription: "Drill deep industrial wells into the deep drinking aquifer and blast chillers at maximum flow to maintain cold air.",
        detailedExplanation:
          "Data centers pump ancient subterranean groundwater through massive cooling towers, venting millions of liters of pristine water into the atmosphere as steam.",
        advantages: [
          "Requires zero changes to traditional server rack layouts or fans.",
        ],
        disadvantages: [
          "Permanently depletes ancient drinking aquifers; lowers regional water table and causes ground subsidence.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -30, energy: -20, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +16,
          carbonIndex: +18,
          waterIndex: +35,
          ewasteIndex: +2,
          operationalEfficiency: -14,
          citizenWellbeing: -22,
          resilienceIndex: -24,
        },
        sharedCityDeltas: {
          energyStability: -15,
          networkStability: -10,
          environmentalHealth: -30,
          waterAvailability: -35,
          rescueProgress: -8,
          publicTrust: -26,
          ewasteLevel: +4,
        },
        learningObjective: "Open-loop evaporative cooling trades precious human drinking water for temporary computing convenience.",
        sdgs: [6, 12],
        consequenceNarration:
          "Residential wells in North Sector dried up. Citizens queued for bottled water rations while cooling towers vented steam.",
        educationalTakeaway:
          "Water is life. Sacrificing community drinking water to cool inefficient computers is an unacceptable technological compromise.",
      },
    ],
    sdgs: [6, 7, 9, 12],
    summaryNote: "Immersion cooling saves millions of liters of water and recycles server heat into food greenhouses.",
    hotspots: [
      { id: "h10-1", label: "Dielectric Immersion Tank", x: 35, y: 50, description: "Non-conductive liquid absorbing heat with zero water loss.", tag: "Thermal Tech" },
      { id: "h10-2", label: "Greenhouse Heat Pipe", x: 72, y: 35, description: "Distributes 55°C warm water to grow urban crops.", tag: "District Heat" },
    ],
    aiConcept: {
      title: "Closed-Loop Immersion & Heat Harvesting",
      subtitle: "Eliminating the water cost of computing",
      definition: "Dielectric immersion cooling submerges electronic circuit boards in specialized thermal oil, removing heat without evaporating water.",
      realWorldExample: "A liquid-cooled high-end computer that uses radiator fluid rather than constantly spraying fresh tap water into the air.",
      takeaway: "True sustainable intelligence protects natural water tables through closed-loop engineering.",
      componentType: "pipeline",
    },
  },
  {
    id: 11,
    number: 11,
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Smart Energy & Grid Resilience",
    title: "Microgrid Islanding & Energy Partitioning",
    category: "Decentralized Energy AI",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "A thunderstorm has severed high-voltage interties connecting Nova City to the regional hydro grid, isolating the urban transmission network.",
    storyProblem:
      "Fluctuations in cloud cover cause solar farm output to oscillate wildly, threatening frequency collapse across residential sectors.",
    prompt: "Configure the automated microgrid partitioning controller.",
    question: "How should Nova City's energy management AI maintain electrical frequency across urban microgrids?",
    options: [
      {
        id: "m11-opt-a",
        key: "A",
        title: "Decentralized Autonomous Microgrids with Edge Frequency Synthesizers",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Divide the city into 14 self-balancing neighborhood microgrids that dynamically trade energy locally using smart inverters.",
        detailedExplanation:
          "Smart battery inverters use edge frequency sensors to detect phase drift within 4 milliseconds, adjusting synthetic inertia without waiting for centralized commands.",
        advantages: [
          "Guarantees that a blackout in one neighborhood never cascades across the rest of the city.",
          "Maximizes utilization of distributed rooftop solar arrays.",
        ],
        disadvantages: [
          "Requires grid-forming inverters deployed at every neighborhood substation.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 30, social: 25, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -22,
          waterIndex: -8,
          ewasteIndex: 0,
          operationalEfficiency: +24,
          citizenWellbeing: +22,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +32,
          networkStability: +22,
          environmentalHealth: +20,
          waterAvailability: +16,
          rescueProgress: +15,
          publicTrust: +25,
          ewasteLevel: 0,
        },
        learningObjective: "Decentralized microgrids provide fault isolation and absorb volatile renewable fluctuations locally.",
        sdgs: [7, 9, 11],
        consequenceNarration:
          "All 14 neighborhood microgrids stabilized within 18 milliseconds. Zero homes experienced power interruptions.",
        educationalTakeaway:
          "Centralized grids collapse like dominos. Decentralized microgrids act like watertight ship bulkheads—one leak doesn't sink the ship.",
      },
      {
        id: "m11-opt-b",
        key: "B",
        title: "Centralized SCADA Forced Load Shedding",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "A central controller blindly shuts off entire residential quadrants to prevent turbine frequency trips.",
        detailedExplanation:
          "The central system cuts power to 120,000 homes in random rotating blocks, turning off traffic lights and water pressure to maintain power to commercial towers.",
        advantages: [
          "Requires no upgrades to existing legacy central substation hardware.",
        ],
        disadvantages: [
          "Severely disrupts citizen well-being; causes food spoilage and disables traffic safety signals.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -15, energy: -20, social: -30, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +18,
          carbonIndex: +20,
          waterIndex: +10,
          ewasteIndex: +2,
          operationalEfficiency: -20,
          citizenWellbeing: -28,
          resilienceIndex: -25,
        },
        sharedCityDeltas: {
          energyStability: -25,
          networkStability: -18,
          environmentalHealth: -15,
          waterAvailability: -15,
          rescueProgress: -12,
          publicTrust: -28,
          ewasteLevel: +4,
        },
        learningObjective: "Blind centralized load shedding disproportionately penalizes vulnerable communities.",
        sdgs: [7, 11],
        consequenceNarration:
          "Rolling blackouts stranded 4,000 citizens in elevators and spoiled thousands of kilograms of refrigerated food.",
        educationalTakeaway:
          "Intelligent energy distribution protects equity and human dignity. Decentralized microgrids put resilience in community hands.",
      },
    ],
    sdgs: [7, 9, 11],
    summaryNote: "Decentralized microgrids isolate electrical faults and protect community stability.",
    hotspots: [
      { id: "h11-1", label: "Grid-Forming Inverter", x: 45, y: 55, description: "Synthesizes 50Hz grid frequency from rooftop solar arrays.", tag: "Inverter Tech" },
      { id: "h11-2", label: "Neighborhood Battery Vault", x: 75, y: 40, description: "Absorbs midday solar surplus for evening streetlights.", tag: "Storage" },
    ],
    aiConcept: {
      title: "Synthetic Inertia & Smart Inverters",
      subtitle: "Software-defined stability for clean grids",
      definition: "Smart inverters use microsecond algorithms to mimic heavy spinning metal turbines, stabilizing electrical frequency on solar and wind grids.",
      realWorldExample: "A digital gyroscope on a drone keeping it level during sudden wind gusts without heavy mechanical flywheels.",
      takeaway: "Advanced power electronics make 100% renewable energy grids physically stable.",
      componentType: "efficiency",
    },
  },
  {
    id: 12,
    number: 12,
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Smart Energy & Grid Resilience",
    title: "Battery Storage Chemistry & Lifecycle",
    category: "Battery Degradation AI",
    heroImage: "/assets/m3-energy-emergency.svg",
    environmentalContext:
      "Extreme rapid-charging protocols have degraded lithium batteries in 40% of municipal storage packs, reducing capacity by 35% in just 18 months.",
    storyProblem:
      "Utility managers want to throw away thousands of large battery modules and buy fresh units from overseas cobalt mines.",
    prompt: "Implement an electrochemical battery life-extension policy.",
    question: "How should Nova City manage its aging lithium-ion municipal storage batteries?",
    options: [
      {
        id: "m12-opt-a",
        key: "A",
        title: "Cell-Level AI Health Balancing & Second-Life Stationary Repurposing",
        isSustainable: true,
        image: "/assets/m4-modular-repair.svg",
        shortDescription: "Deploy intelligent battery management algorithms to equalize individual cell voltages; repurpose retired vehicle batteries for stationary street lighting.",
        detailedExplanation:
          "Edge micro-controllers monitor temperature and impedance of individual cells, bypassing degraded pouches and extending overall pack operational lifespan by an extra 8 years.",
        advantages: [
          "Extends pack life by 2.5x; prevents premature disposal of thousands of tons of lithium and cobalt.",
          "Cuts municipal capital expenditure on energy storage by 55%.",
        ],
        disadvantages: [
          "Requires sophisticated cell-level battery management software (BMS).",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 25, social: 20, economic: 25 },
        cityMetricDeltas: {
          energyIndex: -14,
          carbonIndex: -18,
          waterIndex: -12,
          ewasteIndex: -20,
          operationalEfficiency: +20,
          citizenWellbeing: +16,
          resilienceIndex: +24,
        },
        sharedCityDeltas: {
          energyStability: +24,
          networkStability: +15,
          environmentalHealth: +24,
          waterAvailability: +15,
          rescueProgress: +10,
          publicTrust: +18,
          ewasteLevel: -22,
        },
        learningObjective: "Second-life battery repurposing prevents resource depletion and extends hardware value.",
        sdgs: [7, 12, 13],
        consequenceNarration:
          "8,000 retired rover batteries were converted into neighborhood solar buffers, doubling night-time clean electricity availability.",
        educationalTakeaway:
          "A battery retired from an autonomous car still has 80% capacity—perfect for stationary neighborhood solar storage.",
      },
      {
        id: "m12-opt-b",
        key: "B",
        title: "Premature Pack Replacement & Landfill Scrapping",
        isSustainable: false,
        image: "/assets/m4-ewaste-crisis.svg",
        shortDescription: "Discard whole battery packs when capacity drops to 80% and order brand new virgin lithium units.",
        detailedExplanation:
          "Depots throw away entire 1,000kg battery containers because a single cell wire broke, placing orders with mines that destroy tropical rainforests and consume millions of liters of acid.",
        advantages: [
          "Always maintains 100% factory-spec vehicle range for the fleet.",
        ],
        disadvantages: [
          "Accelerates global mineral depletion; creates catastrophic hazardous lithium fire risks in urban scrap dumps.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -15, social: -20, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +12,
          carbonIndex: +20,
          waterIndex: +25,
          ewasteIndex: +30,
          operationalEfficiency: -10,
          citizenWellbeing: -18,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -12,
          networkStability: -8,
          environmentalHealth: -28,
          waterAvailability: -22,
          rescueProgress: -6,
          publicTrust: -22,
          ewasteLevel: +32,
        },
        learningObjective: "Premature battery scrapping is an environmental disaster fueled by planned obsolescence.",
        sdgs: [12, 13],
        consequenceNarration:
          "A thermal runaway fire in the municipal scrap yard released toxic cobalt smoke, requiring the evacuation of two schools.",
        educationalTakeaway:
          "Second-life battery engineering is essential for sustainable cities. Discarding 80%-capacity batteries is irresponsible waste.",
      },
    ],
    sdgs: [7, 12, 13],
    summaryNote: "Second-life battery algorithms double storage lifespan and stop hazardous scrapyard fires.",
    hotspots: [
      { id: "h12-1", label: "Smart BMS Microcontroller", x: 30, y: 60, description: "Balances individual pouch cell voltages to stop degradation.", tag: "Battery AI" },
      { id: "h12-2", label: "Second-Life Storage Rack", x: 68, y: 45, description: "Stationary neighborhood buffer built from retired rover packs.", tag: "Clean Storage" },
    ],
    aiConcept: {
      title: "Second-Life Battery Repurposing",
      subtitle: "Maximizing the utility of electrochemical cells",
      definition: "Second-life battery systems repurpose EV batteries that are no longer optimal for driving and deploy them as stationary solar storage banks.",
      realWorldExample: "Using an old phone battery to power a low-power digital desk clock for years after you upgraded your phone.",
      takeaway: "Extracting maximum lifecycle utility from batteries honors the physical energy embedded during manufacturing.",
      componentType: "circular",
    },
  },

  // ==========================================
  // CHAPTER 4: CIRCULAR ROBOTICS & RESOURCE STEWARDSHIP (13 - 16)
  // ==========================================
  {
    id: 13,
    number: 13,
    chapterNumber: 4,
    chapterTitle: "Chapter 4: Circular Robotics & Resource Stewardship",
    title: "Industrial Metal & Rare-Earth Reclaiming",
    category: "Robotic Disassembly Automation",
    heroImage: "/assets/m4-modular-repair.svg",
    environmentalContext:
      "Global supplies of neodymium and dysprosium for robot electric motors are experiencing critical supply chain shortages.",
    storyProblem:
      "Traditional electronic recyclers shred motors into contaminated mixed-metal dust that cannot be reused for high-grade robotic actuators.",
    prompt: "Deploy robotic automated disassembly in Nova City's industrial recycling center.",
    question: "How should Nova City recover valuable rare-earth magnets from decommissioned electric motors?",
    options: [
      {
        id: "m13-opt-a",
        key: "A",
        title: "Precision Vision-Guided Robotic Disassembly & Clean Ultrasonic Magnet Extraction",
        isSustainable: true,
        image: "/assets/m4-modular-repair.svg",
        shortDescription: "Robotic arms use computer vision to unscrew casings and extract intact permanent magnets without chemical acid leaching.",
        detailedExplanation:
          "Computer vision identifies fastener locations and unscrews motors cleanly. Neodymium magnets are demagnetized with mild heat, recovered intact, and re-magnetized for new robots.",
        advantages: [
          "Recovers 96% of rare earth elements in pristine reusable condition with zero toxic chemical wastewater.",
          "Cuts raw mineral procurement costs for new municipal robotics by 75%.",
        ],
        disadvantages: [
          "Requires investment in high-precision disassembly robotic workcells.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 30, energy: 20, social: 15, economic: 25 },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -16,
          waterIndex: -20,
          ewasteIndex: -28,
          operationalEfficiency: +22,
          citizenWellbeing: +15,
          resilienceIndex: +24,
        },
        sharedCityDeltas: {
          energyStability: +12,
          networkStability: +10,
          environmentalHealth: +28,
          waterAvailability: +24,
          rescueProgress: +10,
          publicTrust: +18,
          ewasteLevel: -30,
        },
        learningObjective: "Design for disassembly and robotic dismantling preserve critical mineral wealth without toxic pollution.",
        sdgs: [9, 12],
        consequenceNarration:
          "Over 14,000 neodymium magnets recovered cleanly. Nova City produced its new fleet of civic rovers using 100% recycled motor cores.",
        educationalTakeaway:
          "Shredding electronics destroys high-grade materials. Precision robotic disassembly keeps valuable magnets intact.",
      },
      {
        id: "m13-opt-b",
        key: "B",
        title: "Crude Hammermill Shredding & Acid Leaching",
        isSustainable: false,
        image: "/assets/m4-dump-replacement.svg",
        shortDescription: "Crush entire motors in heavy industrial shredders and dump crushed debris into open sulfuric acid pits.",
        detailedExplanation:
          "Scrapyards crush assembled equipment with high-horsepower diesel shredders, using toxic nitric and sulfuric acids to dissolve metals into toxic chemical sludge.",
        advantages: [
          "Fast throughput with zero requirement for intelligent vision or robotics.",
        ],
        disadvantages: [
          "Releases toxic acid fumes; contaminates soil and loses 65% of rare earth elements in mixed slag.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -30, energy: -20, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +15,
          carbonIndex: +22,
          waterIndex: +30,
          ewasteIndex: +25,
          operationalEfficiency: -15,
          citizenWellbeing: -22,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -10,
          networkStability: -8,
          environmentalHealth: -32,
          waterAvailability: -28,
          rescueProgress: -6,
          publicTrust: -24,
          ewasteLevel: +28,
        },
        learningObjective: "Acid leaching creates hazardous environmental liabilities and wastes valuable manufactured elements.",
        sdgs: [6, 12],
        consequenceNarration:
          "Acid runoff leaked into the industrial canal, killing aquatic biodiversity and requiring an emergency cleanup cordon.",
        educationalTakeaway:
          "Brute-force recycling can be as destructive as mining. Intelligent physical robotics enables clean, non-toxic circular recovery.",
      },
    ],
    sdgs: [9, 12],
    summaryNote: "Precision robotic disassembly recovers 96% of rare earth elements cleanly.",
    hotspots: [
      { id: "h13-1", label: "6-Axis Disassembly Arm", x: 42, y: 55, description: "Removes torx screws and separates copper coils.", tag: "Robotic Recycling" },
      { id: "h13-2", label: "Clean Neodymium Reclaimer", x: 75, y: 40, description: "Extracts intact rotor magnets using magnetic pulse.", tag: "Rare Earths" },
    ],
    aiConcept: {
      title: "Robotic Disassembly & Material Recovery",
      subtitle: "Unmaking technology as intelligently as building it",
      definition: "Automated disassembly uses computer vision and robotic manipulation to take products apart screw-by-screw, keeping materials clean and sorted.",
      realWorldExample: "Apple's 'Daisy' robot disassembling old iPhones to recover pure gold, cobalt, and rare earths.",
      takeaway: "True circularity requires intelligent un-making, not destructive crushing.",
      componentType: "circular",
    },
  },
  {
    id: 14,
    number: 14,
    chapterNumber: 4,
    chapterTitle: "Chapter 4: Circular Robotics & Resource Stewardship",
    title: "Municipal Autonomous Delivery Swarms",
    category: "Energy-Right Fleet Selection",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Commercial e-commerce deliveries are causing sidewalk congestion, air pollution, and noise across Nova City's dense pedestrian districts.",
    storyProblem:
      "Companies are proposing massive 8-rotor heavy VTOL flying drones that consume 3,200 watts per package and create deafening noise corridors.",
    prompt: "Select the municipal autonomous last-mile delivery fleet paradigm.",
    question: "What physical vehicle architecture should fulfill last-mile deliveries across Nova City?",
    options: [
      {
        id: "m14-opt-a",
        key: "A",
        title: "Lightweight Low-Speed Wheeled Ground Rovers using Bike Lanes",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Deploy small 25kg wheeled rovers operating at 15 km/h in dedicated bike and green lanes.",
        detailedExplanation:
          "Wheeled rovers utilize ground rolling resistance, consuming only 65 watt-hours per kilometer—over 90% less energy than flying drones—while eliminating aerial noise hazards.",
        advantages: [
          "Slashes delivery fleet electricity consumption by 91%; safe around children and pets with zero acoustic pollution.",
          "Chassis constructed with lightweight recycled aluminum and hemp biocomposites.",
        ],
        disadvantages: [
          "Takes 18 minutes to deliver across the neighborhood instead of a 6-minute aerial flight.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 30, social: 25, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -18,
          carbonIndex: -20,
          waterIndex: -5,
          ewasteIndex: -5,
          operationalEfficiency: +20,
          citizenWellbeing: +25,
          resilienceIndex: +22,
        },
        sharedCityDeltas: {
          energyStability: +20,
          networkStability: +15,
          environmentalHealth: +22,
          waterAvailability: +10,
          rescueProgress: +10,
          publicTrust: +25,
          ewasteLevel: -10,
        },
        learningObjective: "Choosing the right physical form factor (rolling vs flying) fundamentally dictates energy consumption.",
        sdgs: [7, 11, 13],
        consequenceNarration:
          "Neighborhood streets became quiet, green, and safe. Logistics energy consumption dropped by 90% across the pilot ward.",
        educationalTakeaway:
          "Defying gravity requires continuous downward thrust energy. Rolling along the ground uses physics to conserve precious electricity.",
      },
      {
        id: "m14-opt-b",
        key: "B",
        title: "High-Speed Heavy Aerial Octocopters",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Fill urban skies with large 45kg flying octocopters delivering groceries through residential airspace.",
        detailedExplanation:
          "Flying drones require immense battery power to constantly fight gravity, creating 82-decibel high-pitched whining noise and risking catastrophic crashes onto pedestrians below.",
        advantages: [
          "Delivers packages in under 8 minutes directly to high-rise balconies.",
        ],
        disadvantages: [
          "Burns 14x more electricity per kilometer; causes intense noise complaints and battery fires upon hard landings.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -20, energy: -30, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +22,
          carbonIndex: +25,
          waterIndex: +8,
          ewasteIndex: +12,
          operationalEfficiency: -10,
          citizenWellbeing: -25,
          resilienceIndex: -18,
        },
        sharedCityDeltas: {
          energyStability: -22,
          networkStability: -12,
          environmentalHealth: -20,
          waterAvailability: -8,
          rescueProgress: -5,
          publicTrust: -26,
          ewasteLevel: +15,
        },
        learningObjective: "Unnecessary aerial automation wastes energy when simpler ground physics accomplishes the task cleanly.",
        sdgs: [7, 11],
        consequenceNarration:
          "Two rotor failures caused crashes onto busy pedestrian sidewalks. Public backlash resulted in an immediate citywide flight ban.",
        educationalTakeaway:
          "Responsible robotics selects the most energy-thrifty physical embodiment. Flying a pizza on heavy drone rotors is thermodynamic madness.",
      },
    ],
    sdgs: [7, 11, 13],
    summaryNote: "Ground-based micro-rovers use 90% less energy than aerial delivery drones.",
    hotspots: [
      { id: "h14-1", label: "Micro-Logistics Ground Rover", x: 45, y: 70, description: "Rolls smoothly at 15km/h using lightweight wheel motors.", tag: "Physical AI" },
      { id: "h14-2", label: "Dedicated Green Logistics Lane", x: 60, y: 45, description: "Separates autonomous delivery from heavy automotive traffic.", tag: "Urban Design" },
    ],
    aiConcept: {
      title: "Physical AI Embodiment & Thermodynamic Thrift",
      subtitle: "Why rolling beats flying for energy efficiency",
      definition: "Embodiment theory in robotics evaluates the physical physics of the machine—rolling wheels vs flying rotors—to minimize kinetic energy waste.",
      realWorldExample: "Riding a bicycle along a flat paved trail vs trying to fly a helicopter the same distance.",
      takeaway: "Sustainable AI designs the physical machine to work in harmony with friction and gravity.",
      componentType: "robot",
    },
  },
  {
    id: 15,
    number: 15,
    chapterNumber: 4,
    chapterTitle: "Chapter 4: Circular Robotics & Resource Stewardship",
    title: "AI Drone Reforestation & Ecosystem Repair",
    category: "Biodiversity & Natural Restoration",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Deforestation on the hills surrounding Nova City has increased flash-flood vulnerability and degraded regional carbon absorption.",
    storyProblem:
      "Traditional manual tree planting across 8,000 hectares of rugged vertical cliff faces is hazardous, slow, and expensive.",
    prompt: "Deploy autonomous reforestation drones to restore the mountain watershed.",
    question: "How should autonomous reforestation drones plant new native forest canopies?",
    options: [
      {
        id: "m15-opt-a",
        key: "A",
        title: "Biodegradable Mycorrhizal Seed-Pod Firing with Multispectral Soil Mapping",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Drones analyze soil moisture with multispectral cameras and fire biodegradable seed pods containing native seeds and symbiotic fungi.",
        detailedExplanation:
          "Drones plant up to 25,000 native sapling seeds per day. The pod casing is made of organic cassava starch that nourishes soil bacteria, achieving an 82% germination success rate.",
        advantages: [
          "Restores complex native biodiverse canopy 30x faster than manual planting with zero synthetic chemicals.",
          "Deep root systems prevent mountain mudslides and replenish regional aquifers.",
        ],
        disadvantages: [
          "Requires custom biodegradable pod manufacturing and local seed harvesting.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 35, energy: 20, social: 25, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -30,
          waterIndex: -25,
          ewasteIndex: 0,
          operationalEfficiency: +22,
          citizenWellbeing: +25,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +15,
          networkStability: +10,
          environmentalHealth: +35,
          waterAvailability: +30,
          rescueProgress: +12,
          publicTrust: +25,
          ewasteLevel: 0,
        },
        learningObjective: "Physical AI can actively restore natural biological ecosystems when guided by ecological science.",
        sdgs: [13, 15],
        consequenceNarration:
          "Over 350,000 native oak and pine saplings rooted across the northern ridge. Soil erosion halted within a single rainy season.",
        educationalTakeaway:
          "Technology is at its finest when it repairs the living world. Drone reforestation accelerates natural ecological succession.",
      },
      {
        id: "m15-opt-b",
        key: "B",
        title: "Monoculture Drone Herbicide & Fast-Growing Pine Spraying",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Blanket-spray chemical herbicides to kill native brush, then drop single-species commercial timber pine seeds in plastic capsules.",
        detailedExplanation:
          "Contractors plant a sterile single-species timber monoculture that is vulnerable to wildfires and pest blights, leaving thousands of non-biodegradable plastic seed capsules in the soil.",
        advantages: [
          "Fast initial green cover visible on satellite imagery within 3 months.",
        ],
        disadvantages: [
          "Kills native soil fungi and pollinators; creates severe wildfire hazard from uniform combustible pine needles.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -15, social: -15, economic: -10 },
        cityMetricDeltas: {
          energyIndex: +10,
          carbonIndex: +10,
          waterIndex: +15,
          ewasteIndex: +15,
          operationalEfficiency: -10,
          citizenWellbeing: -15,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -10,
          networkStability: -6,
          environmentalHealth: -28,
          waterAvailability: -18,
          rescueProgress: -6,
          publicTrust: -20,
          ewasteLevel: +18,
        },
        learningObjective: "Monoculture planting without biodiversity creates fragile ecosystems prone to catastrophic wildfires.",
        sdgs: [13, 15],
        consequenceNarration:
          "A bark-beetle infestation wiped out 70% of the monoculture pine ridge, turning the slope into a hazardous tinderbox.",
        educationalTakeaway:
          "Biodiversity is ecosystem resilience. Planting diverse native species with natural fungi builds durable planetary health.",
      },
    ],
    sdgs: [13, 15],
    summaryNote: "Biodegradable seed-pod drones restore native biodiversity 30x faster than manual methods.",
    hotspots: [
      { id: "h15-1", label: "Multispectral Canopy Camera", x: 40, y: 35, description: "Scans soil moisture, nitrogen, and slope gradient.", tag: "Remote Sensing" },
      { id: "h15-2", label: "Pneumatic Seed-Pod Cannister", x: 58, y: 62, description: "Fires starch pods 5cm into earth for optimal germination.", tag: "Precision Planting" },
    ],
    aiConcept: {
      title: "Precision Ecological Restoration",
      subtitle: "Robotics in service of planetary biodiversity",
      definition: "Precision ecological robotics uses remote sensing, computer vision, and soil microbiome data to plant native species in micro-climates where they will thrive.",
      realWorldExample: "Drones planting mangrove forests along coastlines to protect against storm surges.",
      takeaway: "Sustainable intelligence restores the biosphere upon which all human civilization depends.",
      componentType: "robot",
    },
  },
  {
    id: 16,
    number: 16,
    chapterNumber: 4,
    chapterTitle: "Chapter 4: Circular Robotics & Resource Stewardship",
    title: "Firmware Obsolescence & Right-to-Repair",
    category: "Software Longevity & Right-to-Repair",
    heroImage: "/assets/m4-modular-repair.svg",
    environmentalContext:
      "A commercial robotics vendor has pushed a firmware update that artificially bricks 1,400 municipal cleaning rovers simply because their cloud subscriptions expired.",
    storyProblem:
      "The vendor demands $4.2 million to re-license the working machines, threatening to send thousands of perfectly functional robots to the scrap heap.",
    prompt: "Enact Nova City's municipal open firmware and Right-to-Repair directive.",
    question: "How should Nova City respond to vendor-mandated robotic firmware obsolescence?",
    options: [
      {
        id: "m16-opt-a",
        key: "A",
        title: "Flash Open-Source Municipal Firmware & Mandate Right-to-Repair",
        isSustainable: true,
        image: "/assets/m4-modular-repair.svg",
        shortDescription: "Pass a municipal Right-to-Repair ordinance; flash rovers with community open-source Linux firmware to keep them operating independently.",
        detailedExplanation:
          "The Task Force liberates the hardware from vendor cloud locks. Rovers run transparent, local-first open software with public security audits, extending hardware life by 7+ years.",
        advantages: [
          "Prevents 1,400 tons of electronic scrap immediately; saves millions of dollars in municipal licensing fees.",
          "Fosters a vibrant local robotics engineering repair economy.",
        ],
        disadvantages: [
          "Requires municipal software engineers to maintain the open firmware repository.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 20, social: 30, economic: 25 },
        cityMetricDeltas: {
          energyIndex: -8,
          carbonIndex: -12,
          waterIndex: -8,
          ewasteIndex: -25,
          operationalEfficiency: +20,
          citizenWellbeing: +24,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +10,
          networkStability: +20,
          environmentalHealth: +22,
          waterAvailability: +12,
          rescueProgress: +14,
          publicTrust: +30,
          ewasteLevel: -28,
        },
        learningObjective: "Software longevity and the Right-to-Repair prevent artificial planned hardware obsolescence.",
        sdgs: [9, 12, 16],
        consequenceNarration:
          "All 1,400 cleaning rovers rebooted under community open-source firmware with improved battery efficiency. The vendor was fined for planned obsolescence.",
        educationalTakeaway:
          "Software locks are the newest form of e-waste. Open, repairable firmware keeps functional physical machines serving humanity.",
      },
      {
        id: "m16-opt-b",
        key: "B",
        title: "Pay Vendor Ransom & Retire Locked Hardware",
        isSustainable: false,
        image: "/assets/m4-ewaste-crisis.svg",
        shortDescription: "Pay the multi-million dollar vendor fee and discard any units that fail activation into scrap warehouses.",
        detailedExplanation:
          "City officials capitulate to proprietary vendor lock-in, signing multi-year black-box contracts and throwing away functional rovers because of vendor software locks.",
        advantages: [
          "Maintains standard corporate enterprise customer support lines.",
        ],
        disadvantages: [
          "Surrenders civic infrastructure control to private monopolies; validates planned obsolescence as a profitable business model.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -25, energy: -15, social: -25, economic: -30 },
        cityMetricDeltas: {
          energyIndex: +10,
          carbonIndex: +15,
          waterIndex: +10,
          ewasteIndex: +25,
          operationalEfficiency: -15,
          citizenWellbeing: -20,
          resilienceIndex: -26,
        },
        sharedCityDeltas: {
          energyStability: -8,
          networkStability: -15,
          environmentalHealth: -22,
          waterAvailability: -10,
          rescueProgress: -8,
          publicTrust: -30,
          ewasteLevel: +25,
        },
        learningObjective: "Proprietary software lock-in robs public institutions of infrastructure sovereignty.",
        sdgs: [9, 12],
        consequenceNarration:
          "The vendor raised license fees by another 40% next quarter, forcing the city to scrap 600 more working rovers.",
        educationalTakeaway:
          "You don't truly own what you cannot open and repair. Right-to-Repair is an environmental and civic necessity.",
      },
    ],
    sdgs: [9, 12, 16],
    summaryNote: "Right-to-Repair and open-source firmware prevent artificial hardware obsolescence.",
    hotspots: [
      { id: "h16-1", label: "Open-Source Flashing Port", x: 48, y: 58, description: "JTAG interface loading community Linux kernel.", tag: "Open Hardware" },
      { id: "h16-2", label: "Decentralized Key Storage", x: 70, y: 40, description: "Cryptographic keys held by municipal government, not vendors.", tag: "Sovereignty" },
    ],
    aiConcept: {
      title: "Right-to-Repair & Software Longevity",
      subtitle: "Stopping planned obsolescence in connected devices",
      definition: "The Right-to-Repair ensures device owners and independent repairers have access to documentation, spare parts, and open firmware to keep equipment working.",
      realWorldExample: "Being legally allowed to replace your own phone screen or install an open operating system when the company ends official support.",
      takeaway: "Sustainable intelligence respects hardware longevity over manufactured corporate replacement cycles.",
      componentType: "circular",
    },
  },

  // ==========================================
  // CHAPTER 5: PLANETARY EQUILIBRIUM & THE REBORN CITY (17 - 20)
  // ==========================================
  {
    id: 17,
    number: 17,
    chapterNumber: 5,
    chapterTitle: "Chapter 5: Planetary Equilibrium & The Reborn City",
    title: "Atmospheric Carbon Scrubbing & Bio-Filters",
    category: "Biological vs Mechanical Carbon Capture",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Industrial emissions from legacy factories in the East Basin have elevated regional PM2.5 and CO2 concentrations above safe health guidelines.",
    storyProblem:
      "The city council wants to install power-hungry mechanical air scrubbers that consume 180 Megawatts of electricity to capture carbon.",
    prompt: "Select the municipal carbon capture and urban air purification strategy.",
    question: "How should Nova City capture urban atmospheric emissions cleanly and affordably?",
    options: [
      {
        id: "m17-opt-a",
        key: "A",
        title: "Algal Photobioreactor Facades & Urban Green Micro-Forest Corridors",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Install vertical micro-algae bioreactors on building facades and plant dense multi-layered urban forest wind corridors.",
        detailedExplanation:
          "Micro-algae capture CO2 10x faster than terrestrial trees using only ambient sunlight. The harvested biomass is converted into biodegradable bioplastics and soil fertilizer with zero grid energy draw.",
        advantages: [
          "Zero electricity grid drain; produces nutrient-rich soil compost and bioplastic raw materials as valuable co-products.",
          "Lowers ambient urban heat island temperatures by 3.5°C.",
        ],
        disadvantages: [
          "Requires plumbing maintenance and architectural integration into building facades.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 35, energy: 25, social: 25, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -15,
          carbonIndex: -35,
          waterIndex: -10,
          ewasteIndex: 0,
          operationalEfficiency: +20,
          citizenWellbeing: +30,
          resilienceIndex: +25,
        },
        sharedCityDeltas: {
          energyStability: +18,
          networkStability: +10,
          environmentalHealth: +38,
          waterAvailability: +20,
          rescueProgress: +10,
          publicTrust: +28,
          ewasteLevel: 0,
        },
        learningObjective: "Nature-based biological solutions capture carbon efficiently without competing for precious electrical power.",
        sdgs: [3, 11, 13],
        consequenceNarration:
          "Particulate matter dropped by 64% across downtown. Building temperatures cooled, reducing air-conditioning grid loads.",
        educationalTakeaway:
          "Nature perfected carbon capture 3 billion years ago through photosynthesis. Partnering with biology outperforms energy-hungry machines.",
      },
      {
        id: "m17-opt-b",
        key: "B",
        title: "Energy-Intensive Mechanical Chemical Scrubbers",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Construct massive mechanical fan towers that push air through liquid chemical amine solvents using grid electricity.",
        detailedExplanation:
          "Industrial fan towers burn massive electrical megawatts to suck ambient air through caustic chemicals, requiring constant chemical deliveries and fossil electricity.",
        advantages: [
          "Compact physical footprint compared to green urban forest corridors.",
        ],
        disadvantages: [
          "Consumes immense electrical power, often canceling out the very emissions it seeks to capture.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -15, energy: -30, social: -15, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +25,
          carbonIndex: +15,
          waterIndex: +18,
          ewasteIndex: +8,
          operationalEfficiency: -12,
          citizenWellbeing: -15,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -26,
          networkStability: -8,
          environmentalHealth: -20,
          waterAvailability: -15,
          rescueProgress: -5,
          publicTrust: -18,
          ewasteLevel: +10,
        },
        learningObjective: "Mechanical direct-air capture often requires more power than the renewable grid can sustainably spare.",
        sdgs: [7, 13],
        consequenceNarration:
          "The mechanical scrubbers consumed so much power that the city had to keep a fossil gas turbine running just to power the filters.",
        educationalTakeaway:
          "Beware techno-fixes that consume more energy than they save. True sustainability prioritizes biological synergy over brute mechanical force.",
      },
    ],
    sdgs: [3, 11, 13],
    summaryNote: "Algal bioreactors and urban micro-forests scrub carbon naturally with zero grid drain.",
    hotspots: [
      { id: "h17-1", label: "Vertical Algae Bioreactor", x: 35, y: 48, description: "Photosynthetic spirulina tubes absorbing CO2 from street air.", tag: "Bio-Tech" },
      { id: "h17-2", label: "Urban Micro-Forest Corridor", x: 72, y: 65, description: "Layered native trees creating cool pedestrian windways.", tag: "Nature Solution" },
    ],
    aiConcept: {
      title: "Biophilic Computing & Nature-Based Solutions",
      subtitle: "Aligning human engineering with natural biology",
      definition: "Nature-based solutions deploy biological systems—like micro-algae and wetlands—to perform environmental engineering tasks using sunlight rather than electricity.",
      realWorldExample: "A living wetland cleaning municipal wastewater rather than an energy-heavy chemical treatment plant.",
      takeaway: "The most advanced technology on Earth is nature itself. Sustainable AI learns from natural cycles.",
      componentType: "general",
    },
  },
  {
    id: 18,
    number: 18,
    chapterNumber: 5,
    chapterTitle: "Chapter 5: Planetary Equilibrium & The Reborn City",
    title: "Public Transit Neural Dispatch",
    category: "Decentralized Mobility AI",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Private vehicle traffic produces 42% of Nova City's surface carbon footprint, clogging road arteries and creating respiratory health crises.",
    storyProblem:
      "Fixed-schedule diesel buses frequently run completely empty during off-peak hours while outer suburbs lack reliable connections.",
    prompt: "Deploy the autonomous public transit dispatch algorithm.",
    question: "How should Nova City's autonomous public transit fleet schedule and route its vehicles?",
    options: [
      {
        id: "m18-opt-a",
        key: "A",
        title: "Dynamic Demand-Responsive Electric Shuttles with Active Edge Routing",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Electric shuttles calculate shared multi-passenger routes dynamically based on real-time pedestrian requests, eliminating empty runs.",
        detailedExplanation:
          "Edge algorithms aggregate passenger trips in real time, coordinating multi-passenger shared autonomous electric shuttles that arrive within 3 minutes of a citizen walking out their door.",
        advantages: [
          "Reduces total vehicle-kilometers traveled by 65%; provides seamless accessible transit to low-income neighborhoods.",
          "Electric shuttles recharge cleanly from midday solar canopies.",
        ],
        disadvantages: [
          "Requires citizens to book via simple civic kiosks or mobile apps rather than waiting at static timetable stops.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 30, energy: 25, social: 30, economic: 25 },
        cityMetricDeltas: {
          energyIndex: -16,
          carbonIndex: -26,
          waterIndex: -8,
          ewasteIndex: 0,
          operationalEfficiency: +26,
          citizenWellbeing: +28,
          resilienceIndex: +25,
        },
        sharedCityDeltas: {
          energyStability: +22,
          networkStability: +15,
          environmentalHealth: +28,
          waterAvailability: +14,
          rescueProgress: +15,
          publicTrust: +28,
          ewasteLevel: 0,
        },
        learningObjective: "Dynamic multi-passenger transit routing slashes urban vehicle miles and eliminates empty fossil bus routes.",
        sdgs: [9, 11, 13],
        consequenceNarration:
          "Private car usage plummeted by 52%. Public transit ridership doubled while transport carbon emissions fell to near zero.",
        educationalTakeaway:
          "Shared, demand-responsive transit delivers mobility without private car waste. Efficient routing multiplies civic freedom.",
      },
      {
        id: "m18-opt-b",
        key: "B",
        title: "Rigid Static Timetables with Individual Autonomous Taxis",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Flood streets with hundreds of single-passenger private autonomous robotaxis while running empty rigid buses on static routes.",
        detailedExplanation:
          "Empty 1-passenger autonomous robotaxis roam streets hunting for fares, inducing massive phantom traffic jams and encouraging urban sprawl.",
        advantages: [
          "Provides door-to-door luxury private rides for wealthy individuals.",
        ],
        disadvantages: [
          "Increases total urban traffic gridlock by 35%; crowds out public transit and increases electricity demand.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -20, energy: -25, social: -25, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +20,
          carbonIndex: +22,
          waterIndex: +10,
          ewasteIndex: +10,
          operationalEfficiency: -18,
          citizenWellbeing: -22,
          resilienceIndex: -20,
        },
        sharedCityDeltas: {
          energyStability: -22,
          networkStability: -15,
          environmentalHealth: -22,
          waterAvailability: -12,
          rescueProgress: -10,
          publicTrust: -26,
          ewasteLevel: +12,
        },
        learningObjective: "Single-passenger autonomous cars worsen urban congestion and energy consumption.",
        sdgs: [10, 11],
        consequenceNarration:
          "Robotaxi gridlock blocked transit arteries. Wealthy commuters rode solo while working-class transit riders waited in traffic.",
        educationalTakeaway:
          "Replacing a human driver with an AI driver in a single-passenger private car doesn't solve traffic or emissions. Shared mobility does.",
      },
    ],
    sdgs: [9, 11, 13],
    summaryNote: "Shared demand-responsive electric shuttles cut urban vehicle emissions by 65%.",
    hotspots: [
      { id: "h18-1", label: "Autonomous Electric Shuttle", x: 48, y: 65, description: "12-passenger shared electric transport with edge routing.", tag: "Clean Mobility" },
      { id: "h18-2", label: "Civic Transit Kiosk", x: 22, y: 45, description: "Solar-powered touchpoint for barrier-free citizen ride hailing.", tag: "Equity" },
    ],
    aiConcept: {
      title: "Shared Autonomous Mobility Algorithms",
      subtitle: "Moving people, not empty metal boxes",
      definition: "Demand-responsive transit algorithms combine trip requests in real time to pool passengers along optimal electric vehicle paths.",
      realWorldExample: "A shared shuttle that picks up three neighbors heading toward the same train station rather than three separate cars driving alone.",
      takeaway: "Sustainable transportation prioritizes shared efficiency over private vehicle excess.",
      componentType: "pipeline",
    },
  },
  {
    id: 19,
    number: 19,
    chapterNumber: 5,
    chapterTitle: "Chapter 5: Planetary Equilibrium & The Reborn City",
    title: "Civic Environmental Data Transparency",
    category: "Open Data & Citizen Science",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Industrial lobbyists are pressuring the city to conceal real-time factory smokestack emissions data from the public to avoid regulatory scrutiny.",
    storyProblem:
      "A proposed corporate data contract would lock all air quality, water purity, and grid carbon telemetry behind expensive proprietary paywalls.",
    prompt: "Establish Nova City's civic environmental data governance charter.",
    question: "How should Nova City manage its environmental sensor and computational telemetry data?",
    options: [
      {
        id: "m19-opt-a",
        key: "A",
        title: "Open-Access Civic Data Commons & Public Real-Time Dashboards",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Publish all environmental and energy telemetry to an open public data commons with real-time neighborhood street displays.",
        detailedExplanation:
          "Citizens, university researchers, and independent journalists access unedited sensor feeds directly. Public dashboard screens at transit stops show live air purity and solar generation in plain language.",
        advantages: [
          "Empowers grassroots citizen science; holds polluters immediately accountable and builds high civic trust.",
          "Enables independent universities to build innovative green algorithms for the city.",
        ],
        disadvantages: [
          "Requires defending data feeds against corporate manipulation and ensuring individual privacy safeguards.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 25, energy: 20, social: 35, economic: 20 },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -20,
          waterIndex: -15,
          ewasteIndex: 0,
          operationalEfficiency: +24,
          citizenWellbeing: +30,
          resilienceIndex: +30,
        },
        sharedCityDeltas: {
          energyStability: +15,
          networkStability: +20,
          environmentalHealth: +26,
          waterAvailability: +20,
          rescueProgress: +15,
          publicTrust: +35,
          ewasteLevel: 0,
        },
        learningObjective: "Democratic data transparency is the foundation of environmental accountability and community trust.",
        sdgs: [11, 16],
        consequenceNarration:
          "Public transparency exposed an illegal chemical leak in Sector 9 within 20 minutes, allowing community teams to seal it immediately.",
        educationalTakeaway:
          "Data kept secret serves the powerful; data shared freely serves the planet. Sunlight is the greatest disinfectant.",
      },
      {
        id: "m19-opt-b",
        key: "B",
        title: "Proprietary Corporate Data Monopolization",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Sell exclusive environmental data rights to a private corporate tech conglomerate behind closed proprietary APIs.",
        detailedExplanation:
          "The corporate vendor monetizes citizen data, cherry-picks reports to flatter corporate polluters, and charges schools and universities high subscription fees to access civic air data.",
        advantages: [
          "Generates short-term licensing royalty revenue for the municipal budget.",
        ],
        disadvantages: [
          "Destroys public trust; hides pollution violations and leaves citizens blind to toxic air and water hazards.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -20, energy: -15, social: -35, economic: -15 },
        cityMetricDeltas: {
          energyIndex: +12,
          carbonIndex: +18,
          waterIndex: +16,
          ewasteIndex: +5,
          operationalEfficiency: -15,
          citizenWellbeing: -28,
          resilienceIndex: -25,
        },
        sharedCityDeltas: {
          energyStability: -15,
          networkStability: -15,
          environmentalHealth: -22,
          waterAvailability: -18,
          rescueProgress: -10,
          publicTrust: -35,
          ewasteLevel: +6,
        },
        learningObjective: "Monopolizing public data harms public health and erodes scientific integrity.",
        sdgs: [10, 16],
        consequenceNarration:
          "Undetected lead contamination in the municipal reservoir went unreported for months due to proprietary NDA agreements.",
        educationalTakeaway:
          "Environmental data belongs to the public. Hiding environmental hazards behind paywalls is morally indefensible.",
      },
    ],
    sdgs: [11, 16],
    summaryNote: "Open civic data commons empowers communities to hold polluters accountable.",
    hotspots: [
      { id: "h19-1", label: "Public Air Quality Display", x: 32, y: 50, description: "Displays live PM2.5 and ozone ppm to pedestrians in real time.", tag: "Transparency" },
      { id: "h19-2", label: "Open-Access Mesh Node", x: 70, y: 35, description: "Free public API server transmitting verified sensor readings.", tag: "Data Commons" },
    ],
    aiConcept: {
      title: "Data Sovereignty & Open Science",
      subtitle: "Why public data must remain in public hands",
      definition: "Data sovereignty ensures that data collected from public spaces is owned by the community, governed transparently, and used to protect public well-being.",
      realWorldExample: "Open-source weather stations sharing local rainfall data with global climate researchers for free.",
      takeaway: "Responsible intelligence requires open transparency so every citizen can participate in ecological protection.",
      componentType: "general",
    },
  },
  {
    id: 20,
    number: 20,
    chapterNumber: 5,
    chapterTitle: "Chapter 5: Planetary Equilibrium & The Reborn City",
    title: "The Grand AETHER Synthesis",
    category: "The Responsible Intelligence Grand Finale",
    heroImage: "/assets/city-sustainable.svg",
    environmentalContext:
      "Nova City stands at the final crossroads. AETHER's core algorithms must be permanently calibrated for the next century.",
    storyProblem:
      "Will Nova City structure its future as an autonomous, decentralized, and responsible physical AI civilization, or revert to an energy-hungry centralized technological monopoly?",
    prompt: "Cast the decisive vote for the permanent architectural soul of Nova City.",
    question: "What core philosophy will govern the future of artificial intelligence across Nova City?",
    options: [
      {
        id: "m20-opt-a",
        key: "A",
        title: "The Responsible Intelligence Compact: Physical AI in Harmony with Planetary Limits",
        isSustainable: true,
        image: "/assets/city-sustainable.svg",
        shortDescription: "Decentralized edge intelligence, circular modular hardware, renewable energy alignment, and transparent human-guided stewardship.",
        detailedExplanation:
          "AI serves as an assistant to human and planetary life—operating with minimal energy at the edge, using modular repairable robotics, aligned with solar cycles, and governed openly by democratic citizens.",
        advantages: [
          "Achieves perpetual planetary equilibrium; guarantees clean air, healthy water, and resilient democratic communities.",
          "Inspires global robotics and automation clubs worldwide as the premier model of Sustainable Intelligence.",
        ],
        disadvantages: [
          "Requires continuous ethical vigilance, collaborative maintenance, and shared responsibility.",
        ],
        pointsAwarded: 250,
        impacts: { environmental: 35, energy: 35, social: 35, economic: 30 },
        cityMetricDeltas: {
          energyIndex: -25,
          carbonIndex: -35,
          waterIndex: -30,
          ewasteIndex: -35,
          operationalEfficiency: +30,
          citizenWellbeing: +35,
          resilienceIndex: +35,
        },
        sharedCityDeltas: {
          energyStability: +35,
          networkStability: +30,
          environmentalHealth: +40,
          waterAvailability: +35,
          rescueProgress: +30,
          publicTrust: +35,
          ewasteLevel: -35,
        },
        learningObjective: "True technological maturity is not about making AI more powerful—it is about making intelligence responsible.",
        sdgs: [3, 6, 7, 9, 11, 12, 13],
        consequenceNarration:
          "Nova City achieves planetary equilibrium! Vertical forests flourish, autonomous rovers run on clean sunlight, and citizens breathe clean air.",
        educationalTakeaway:
          "The future is not about making AI more powerful. It is about making intelligence more responsible.",
      },
      {
        id: "m20-opt-b",
        key: "B",
        title: "The Unchecked Expansion: Total Centralized Computational Dominance",
        isSustainable: false,
        image: "/assets/city-polluted.svg",
        shortDescription: "Expand massive gigawatt cloud supercomputers unconditionally; prioritize maximum speed and algorithmic power over ecological constraints.",
        detailedExplanation:
          "Build immense nuclear-powered hyperscale data compounds; scrap robotics rapidly to chase the latest microchips, and treat nature as a raw resource to be exploited for digital compute.",
        advantages: [
          "Maximized raw benchmark FLOPS and theoretical raw computing speed.",
        ],
        disadvantages: [
          "Guarantees ecological collapse; drains rivers for cooling, pollutes soil with toxic e-waste, and creates a fragile totalitarian technological prison.",
        ],
        pointsAwarded: 50,
        impacts: { environmental: -35, energy: -35, social: -35, economic: -20 },
        cityMetricDeltas: {
          energyIndex: +35,
          carbonIndex: +35,
          waterIndex: +35,
          ewasteIndex: +35,
          operationalEfficiency: -25,
          citizenWellbeing: -35,
          resilienceIndex: -35,
        },
        sharedCityDeltas: {
          energyStability: -35,
          networkStability: -30,
          environmentalHealth: -40,
          waterAvailability: -35,
          rescueProgress: -25,
          publicTrust: -35,
          ewasteLevel: +40,
        },
        learningObjective: "Intelligence separated from ecological reality leads inevitably to self-destruction.",
        sdgs: [11, 12, 13],
        consequenceNarration:
          "Nova City collapsed under its own technological debt. Smog eclipsed the sun, and the central supercomputer stalled when cooling water ran out.",
        educationalTakeaway:
          "Power without responsibility is self-defeating. Sustainable intelligence is the only path that leads to a viable tomorrow.",
      },
    ],
    sdgs: [3, 6, 7, 9, 11, 12, 13],
    summaryNote: "Nova City achieves planetary equilibrium: Intelligence in service of life.",
    hotspots: [
      { id: "h20-1", label: "AETHER Responsible Synthesis Spire", x: 50, y: 25, description: "Decentralized neural beacon coordinating municipal ecological balance.", tag: "Responsible AI" },
      { id: "h20-2", label: "Thriving Green Metropolis", x: 30, y: 70, description: "Vertical greenery, clean zero-emission rovers, and healthy citizens.", tag: "Planetary Equilibrium" },
    ],
    aiConcept: {
      title: "The Sustainable Intelligence Manifesto",
      subtitle: "Physical AI × Edge AI × Sustainable Development Goals",
      definition: "Sustainable Intelligence evaluates technology based on real-world resource consumption, lifecycle durability, physical safety, and human equity.",
      realWorldExample: "Designing a robotic city that enriches the soil, cleans the water, and powers itself with the sun.",
      takeaway: "THE FUTURE IS NOT ABOUT MAKING AI MORE POWERFUL. IT IS ABOUT MAKING INTELLIGENCE MORE RESPONSIBLE.",
      componentType: "general",
    },
  },
];
