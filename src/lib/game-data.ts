import { Mission, SDGInfo, SDGNumber, AIExplainerTopic } from "@/types/game";

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
};

export const AI_EXPLAINER_TOPICS: AIExplainerTopic[] = [
  {
    id: "what-is-ai",
    title: "1. What is Artificial Intelligence?",
    subtitle: "Machines that learn patterns to make decisions",
    iconName: "Bot",
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
    iconName: "Activity",
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
    iconName: "Radar",
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
    iconName: "Leaf",
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
    iconName: "Trash2",
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
  {
    id: 1,
    number: 1,
    title: "The AI Infrastructure Crisis",
    category: "AI Infrastructure & Edge vs Cloud",
    heroImage: "/assets/m1-infrastructure-crisis.svg",
    environmentalContext:
      "NOVA CITY has built thousands of service robots that continuously stream high-definition sensor video to a monolithic cloud data center. The regional power grid is experiencing brownouts, and evaporative cooling towers are draining millions of liters of scarce city reservoir water.",
    storyProblem:
      "Network bandwidth is choked with 420ms latency delays. Autonomous transit vehicles are stalling because simple obstacle navigation decisions get stuck in remote server queues. The Task Force must choose how data is processed.",
    prompt:
      "Select the processing architecture for Nova City's robotic fleet.",
    question:
      "How should the city process the information collected by its autonomous robots?",
    sdgs: [7, 9, 12, 13],
    summaryNote:
      "Sustainable intelligence is not just about model size; transmission radio energy and data center cooling water have immense environmental impacts.",
    hotspots: [
      {
        id: "m1-hs-datacenter",
        label: "Monolithic Data Center",
        x: 48,
        y: 28,
        description:
          "Thousands of high-power server racks consuming 4.2 Gigawatts and evaporating drinking water for cooling.",
        tag: "Cloud Overhead",
      },
      {
        id: "m1-hs-robot",
        label: "Autonomous Courier Rover",
        x: 50,
        y: 78,
        description:
          "Equipped with cameras and distance sensors. Awaiting instruction whether to compute on-device or transmit.",
        tag: "Physical Edge",
      },
      {
        id: "m1-hs-gridload",
        label: "Grid Stress Telemetry",
        x: 48,
        y: 45,
        description:
          "Grid headroom is down to 5.2%. Transmission lines are sparking from heavy continuous RF broadcasts.",
        tag: "Energy Crisis",
      },
    ],
    aiConcept: {
      title: "WHAT IS EDGE AI?",
      subtitle: "Running intelligence directly on physical devices",
      definition:
        "Edge AI means running artificial intelligence calculations directly on or near the physical machine that gathers the data—rather than uploading everything across the internet to a remote cloud server.",
      realWorldExample:
        "Your smartphone unlocking with facial recognition in 0.1 seconds, completely offline without needing cellular data or Wi-Fi.",
      takeaway:
        "Edge AI eliminates network latency and avoids huge server-farm cooling water draw, but engineers must account for device battery consumption and chip manufacturing.",
      componentType: "pipeline",
    },
    options: [
      {
        id: "m1-opt-a",
        key: "A",
        title: "Local Edge AI Processing",
        isSustainable: true,
        image: "/assets/m1-edge-ai.svg",
        pointsAwarded: 250,
        shortDescription:
          "Run compressed quantized AI models directly on the robot's onboard microcomputer.",
        detailedExplanation:
          "Instead of continuously uploading every video frame to a distant server, the robot processes sensor readings locally on its onboard neural chip. It detects obstacles and makes immediate navigation decisions in under 5ms.",
        advantages: [
          "Less unnecessary data transmission and radio power draw",
          "Zero reliance on continuous cellular internet connectivity",
          "Ultra-fast local reflexes preventing collisions during outages",
          "Protects citizen visual privacy by keeping raw camera frames on-device",
        ],
        disadvantages: [
          "Local hardware consumes on-device battery electricity",
          "Requires model compression (quantization) to fit compact silicon",
        ],
        impacts: {
          environmental: 50,
          energy: 45,
          social: 35,
          economic: 30,
        },
        cityMetricDeltas: {
          energyIndex: -30,
          carbonIndex: -25,
          waterIndex: -35,
          ewasteIndex: -10,
          operationalEfficiency: 35,
          citizenWellbeing: 30,
          resilienceIndex: 45,
        },
        learningObjective:
          "Discover how Edge AI slashes network transmission overhead and data center cooling water draw.",
        sdgs: [7, 9, 12, 13],
        consequenceNarration:
          "EXCELLENT SUSTAINABLE CHOICE! By shifting obstacle detection to onboard edge chips, radio transmission queues cleared instantly. Data center water cooling draw dropped by 65%, and municipal robots responded safely without lag.",
        educationalTakeaway:
          "Edge AI avoids the massive hidden energy and water costs of continuous cloud uploads. Computing locally gives machines immediate physical reflexes while conserving shared urban grid infrastructure.",
      },
      {
        id: "m1-opt-b",
        key: "B",
        title: "Unnecessary Continuous Cloud Transmission",
        isSustainable: false,
        image: "/assets/m1-cloud-heavy.svg",
        pointsAwarded: 50,
        shortDescription:
          "Continuously upload every raw camera frame and sensor bit to a distant cloud server.",
        detailedExplanation:
          "The robot depends entirely on remote centralized cloud infrastructure for basic navigation. Every minor movement sends gigabytes of video telemetry across congested radio waves.",
        advantages: [
          "Can query frontier large models with billions of parameters",
          "Lower compute silicon needed on the robot chassis itself",
        ],
        disadvantages: [
          "Massive continuous radio transmission electricity consumption",
          "Severe data center cooling water evaporation and carbon footprint",
          "Catastrophic failure if network signal drops under concrete or bad weather",
          "Single point of failure: entire city fleet freezes if data center stumbles",
        ],
        impacts: {
          environmental: -45,
          energy: -50,
          social: -15,
          economic: -25,
        },
        cityMetricDeltas: {
          energyIndex: 35,
          carbonIndex: 30,
          waterIndex: 40,
          ewasteIndex: 5,
          operationalEfficiency: -20,
          citizenWellbeing: -20,
          resilienceIndex: -35,
        },
        learningObjective:
          "Identify the severe environmental and reliability penalties of unnecessary continuous cloud streaming.",
        sdgs: [7, 13],
        consequenceNarration:
          "UNSUSTAINABLE APPROACH. Continuous raw video uploads overwhelmed cell towers. Latency spiked to 650ms, causing four autonomous delivery rovers to stall. Data centers consumed 3.8 million liters of cooling water in peak heat.",
        educationalTakeaway:
          "Transmitting raw data across the internet is energy-intensive. When robots depend on distant servers for basic reflexes, systems become fragile and waste vast amounts of electricity and cooling water.",
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: "The Autonomous Rescue",
    category: "Physical AI & Responsible Robotics",
    heroImage: "/assets/m2-autonomous-rescue.svg",
    environmentalContext:
      "A 6.8 magnitude seismic tremor has ruptured utility conduits in Nova City's Old Industrial District. Toxic chemical dust, downed power cables, and unstable rubble prevent human emergency teams from safely entering.",
    storyProblem:
      "Human survivor signals have been detected beneath collapsed solar canopy structures. Wireless radio signals in the rubble are glitchy and drop frequently. The Task Force must deploy search-and-rescue robotics into this harsh physical environment.",
    prompt:
      "Select the robotic navigation paradigm for the disaster recovery fleet.",
    question:
      "How should the rescue robot navigate through the damaged building?",
    sdgs: [3, 9, 11],
    summaryNote:
      "Physical AI acts directly in the physical world. Sensing, perception, and autonomy have direct human safety and energy consequences.",
    hotspots: [
      {
        id: "m2-hs-lidar",
        label: "Spinning LiDAR Puck",
        x: 33,
        y: 60,
        description:
          "Emits laser pulses to create a 3D structural point-cloud in zero-visibility smoke.",
        tag: "Perception Sensor",
      },
      {
        id: "m2-hs-survivor",
        label: "Trapped Survivor Signature",
        x: 82,
        y: 60,
        description:
          "Infrared thermal sensor registers human body heat beneath collapsed concrete.",
        tag: "Detection Target",
      },
      {
        id: "m2-hs-rubble",
        label: "Unstable Concrete Girder",
        x: 35,
        y: 45,
        description:
          "Physical hazard. Miscalculated kinetic force could cause structural collapse.",
        tag: "Physical Risk",
      },
    ],
    aiConcept: {
      title: "WHAT IS PHYSICAL AI?",
      subtitle: "Intelligent systems that perceive, reason, and actuate in reality",
      definition:
        "Physical AI refers to artificial intelligence embodied inside physical machines (like robots and drones) that must perceive physical terrain, make decisions about physics and balance, and actuate motors and limbs safely.",
      realWorldExample:
        "A robotic rover scanning rubble, detecting an unstable boulder, and calculating a safe path around it to reach a trapped survivor.",
      takeaway:
        "Physical AI involves three interconnected stages: PERCEPTION (sensors) → DECISION (algorithms) → ACTION (actuators/motors).",
      componentType: "robot",
    },
    options: [
      {
        id: "m2-opt-a",
        key: "A",
        title: "Local Perception & Autonomous Navigation with Human Supervision",
        isSustainable: true,
        image: "/assets/m2-collaborative.svg",
        pointsAwarded: 250,
        shortDescription:
          "Robot uses onboard sensors for instant local reflexes, alerting human directors for critical rescue actions.",
        detailedExplanation:
          "The robot independently maneuvers over uneven terrain, maintains mechanical balance, and identifies survivors using low-power onboard computer vision and LiDAR. When a life-critical decision is reached, it sends a low-bandwidth beacon for human verification.",
        advantages: [
          "Fast autonomous navigation without freezing when radio signals drop",
          "Ethical human accountability for every life-critical extraction decision",
          "Low-bandwidth data consumption: only sends essential alerts, not raw video",
          "One rescue operator can safely supervise up to 12 robotic units at once",
        ],
        disadvantages: [
          "Brief pause while waiting for human authorization on critical moves",
        ],
        impacts: {
          environmental: 45,
          energy: 40,
          social: 55,
          economic: 35,
        },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -15,
          waterIndex: 0,
          ewasteIndex: -10,
          operationalEfficiency: 40,
          citizenWellbeing: 50,
          resilienceIndex: 45,
        },
        learningObjective:
          "Appreciate the superior efficacy of human-in-the-loop Physical AI: reflex autonomy for physics, human wisdom for ethics.",
        sdgs: [3, 9, 11],
        consequenceNarration:
          "OUTSTANDING SUSTAINABLE DECISION! The collaborative fleet navigated unstable concrete effortlessly with onboard reflexes. Human supervisors validated safe extraction pathways, and all 48 trapped citizens were recovered with zero robotic accidents.",
        educationalTakeaway:
          "Responsible robotics balances autonomous reflexes with deliberate human oversight. This hybrid 'Centaur' model minimizes computational transmission power while maximizing physical human safety.",
      },
      {
        id: "m2-opt-b",
        key: "B",
        title: "Continuously Stream All Raw Sensor Data for Every Single Step",
        isSustainable: false,
        image: "/assets/m2-teleop-lag.svg",
        pointsAwarded: 50,
        shortDescription:
          "Transmit high-resolution 4K video feeds and raw LiDAR point clouds to a remote operator for every step.",
        detailedExplanation:
          "The robot has zero autonomous reflexes. A distant human pilot must steer every single tread rotation and arm angle over wireless radio links.",
        advantages: [
          "Direct continuous human steering",
          "Less autonomous software complexity on the robot",
        ],
        disadvantages: [
          "Complete paralysis whenever radio signals fade through thick rubble",
          "High transmission power quickly drains limited battery reserves",
          "Severe operator cognitive fatigue: one person can only pilot one robot",
          "Sluggish 800ms reaction latency creates catastrophic collision risks",
        ],
        impacts: {
          environmental: -25,
          energy: -35,
          social: -15,
          economic: -20,
        },
        cityMetricDeltas: {
          energyIndex: 25,
          carbonIndex: 15,
          waterIndex: 0,
          ewasteIndex: 15,
          operationalEfficiency: -30,
          citizenWellbeing: -25,
          resilienceIndex: -35,
        },
        learningObjective:
          "Understand how total dependency on continuous tele-operation causes fatal operational bottlenecks during physical disasters.",
        sdgs: [3, 9],
        consequenceNarration:
          "UNSUSTAINABLE APPROACH. Inside collapsed concrete basements, radio signals degraded. Three robots froze mid-pathway due to video buffering. Two units were crushed by shifting debris before remote pilots received the video feed.",
        educationalTakeaway:
          "Human supervision is essential, but forcing continuous remote control for minor motor steps creates catastrophic latency. Physical AI needs local sensory reflexes to survive unpredictable real-world environments.",
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "The Energy Emergency",
    category: "Energy & Sustainable Computing",
    heroImage: "/assets/m3-energy-emergency.svg",
    environmentalContext:
      "A severe summer heatwave has degraded regional solar array output by 18% due to thermal derating. At the same time, municipal computing clusters and autonomous robotic air scrubbers have pushed the city electrical grid into Stage 4 Emergency Alert.",
    storyProblem:
      "The electrical grid is 350 megawatts away from total blackout. Continued uncurbed AI operations threaten to shut off hospital life-support systems and residential cooling. The Task Force must enforce computational efficiency policies.",
    prompt:
      "Select the energy management strategy for the city's AI and computing systems.",
    question:
      "How should the city reduce the energy required to operate its intelligent infrastructure?",
    sdgs: [7, 9, 12, 13],
    summaryNote:
      "Software efficiency is as impactful as clean hardware. Model quantization, architectural pruning, and temporal workload scheduling conserve immense electricity.",
    hotspots: [
      {
        id: "m3-hs-sun",
        label: "Thermal Heatwave Sun",
        x: 50,
        y: 20,
        description:
          "Record 44°C temperatures cause solar panel derating and drive up data center cooling demands.",
        tag: "Climate Stress",
      },
      {
        id: "m3-hs-towers",
        label: "Data Center Cooling Plumes",
        x: 35,
        y: 50,
        description:
          "Evaporative cooling is burning 2.4 million liters of fresh potable water daily.",
        tag: "Resource Drain",
      },
      {
        id: "m3-hs-grid",
        label: "Grid Headroom Dial",
        x: 50,
        y: 72,
        description:
          "350 MW margin. Any sudden computing spike will trigger cascading metropolitan blackouts.",
        tag: "Stage 4 Alert",
      },
    ],
    aiConcept: {
      title: "WHAT IS ENERGY-EFFICIENT AI?",
      subtitle: "Designing software algorithms to sip watts instead of guzzling megawatts",
      definition:
        "Energy-efficient AI optimizes how computations run. By converting bloated 32-bit floating numbers into compact 8-bit integers (quantization) and pruning inactive connections, algorithms can slash electricity use by 70%.",
      realWorldExample:
        "Compressing a massive 4K movie into a streamlined video format that looks identical on screen but uses a fraction of internet data and battery life.",
      takeaway:
        "Carbon-aware scheduling also plays a huge role: shift heavy, non-urgent batch jobs to run at night when wind turbines generate surplus clean electricity.",
      componentType: "efficiency",
    },
    options: [
      {
        id: "m3-opt-a",
        key: "A",
        title: "Optimize AI Models & Use Intelligent Workload Scheduling",
        isSustainable: true,
        image: "/assets/m3-optimized-scheduling.svg",
        pointsAwarded: 250,
        shortDescription:
          "Mandate INT8 model quantization and shift non-urgent AI model batch processing to clean nocturnal wind windows.",
        detailedExplanation:
          "Compress neural networks using integer quantization, slashing computational FLOPs by 75% with under 2% accuracy loss. Simultaneously, intelligent schedulers pause non-urgent background training until nighttime renewable wind power peaks.",
        advantages: [
          "Immediately cuts inference electricity draw by over 65% across all chips",
          "Consumes otherwise wasted curtailed nocturnal wind power",
          "Prevents transformer thermal stress with zero new physical infrastructure",
          "Saves municipal emergency reserve funds",
        ],
        disadvantages: [
          "Requires software re-validation of quantized models",
          "Non-urgent analytics reports are deferred by 6 to 10 hours",
        ],
        impacts: {
          environmental: 55,
          energy: 60,
          social: 35,
          economic: 45,
        },
        cityMetricDeltas: {
          energyIndex: -40,
          carbonIndex: -35,
          waterIndex: -30,
          ewasteIndex: -10,
          operationalEfficiency: 35,
          citizenWellbeing: 30,
          resilienceIndex: 40,
        },
        learningObjective:
          "Master algorithmic efficiency: quantization and carbon-aware temporal scheduling deliver instant carbon reductions without buying a single solar panel.",
        sdgs: [7, 9, 12, 13],
        consequenceNarration:
          "BRILLIANT SUSTAINABLE DECISION! INT8 model compression immediately shed 280 MW from the strained electrical grid. Pausing background batch jobs until 2 AM allowed models to train on 100% surplus clean wind energy.",
        educationalTakeaway:
          "When and how you compute matters as much as what you compute. Software efficiency is an environmental superpower that keeps cities resilient without firing up fossil fuel backup plants.",
      },
      {
        id: "m3-opt-b",
        key: "B",
        title: "Run Oversized AI Models Continuously at Maximum Capacity",
        isSustainable: false,
        image: "/assets/m3-max-power.svg",
        pointsAwarded: 50,
        shortDescription:
          "Fire up decommissioned gas turbine peaker plants to keep every model running at 100% throughput 24/7.",
        detailedExplanation:
          "Preserve maximum floating-point computing throughput for all commercial and municipal models by burning fossil natural gas reserves. Run every GPU at peak power even when idle.",
        advantages: [
          "Zero engineering effort needed for model compression or testing",
          "No delays in non-urgent municipal batch reports",
        ],
        disadvantages: [
          "Spikes greenhouse gas emissions by 340 metric tons of CO2 per hour",
          "Exhaust particulate clouds aggravate respiratory and asthma illnesses",
          "Exhausts the entire city quarterly carbon budget in under four days",
          "High fuel procurement costs drain civic emergency treasuries",
        ],
        impacts: {
          environmental: -60,
          energy: -55,
          social: -30,
          economic: -35,
        },
        cityMetricDeltas: {
          energyIndex: 45,
          carbonIndex: 50,
          waterIndex: 25,
          ewasteIndex: 0,
          operationalEfficiency: 5,
          citizenWellbeing: -40,
          resilienceIndex: -35,
        },
        learningObjective:
          "Witness the severe climate and human health consequences of brute-forcing computational demand with fossil generation peakers.",
        sdgs: [7, 13],
        consequenceNarration:
          "UNSUSTAINABLE APPROACH. Firing up gas peakers averted an immediate blackout, but blanketed residential wards in thick yellow smog. Pediatric asthma hospital admissions doubled, and public fury erupted over soaring utility bills.",
        educationalTakeaway:
          "Powering inefficient algorithms with fossil fuel defeats the purpose of intelligent systems. Technology must operate within biological and planetary boundaries.",
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "The E-Waste Crisis",
    category: "Responsible Robotics & Hardware Lifecycle",
    heroImage: "/assets/m4-ewaste-crisis.svg",
    environmentalContext:
      "NOVA CITY has accumulated 18,000 tons of discarded sensors, dead robotic chassis, obsolete server blades, and battery packs piled in edge-of-city salvage yards. Toxic lithium-cobalt leachate threatens the municipal drinking aquifer.",
    storyProblem:
      "A generation of 120,000 early municipal service robots has reached end-of-life. Silicon hardware vendors are aggressively lobbying the city council to scrap every robot and buy new unrepairable models. The Task Force must decide.",
    prompt:
      "Formulate the city's hardware lifecycle and electronic waste governance strategy.",
    question:
      "What should the city do with outdated robotic systems?",
    sdgs: [9, 11, 12, 13],
    summaryNote:
      "The embodied carbon in semiconductor manufacturing often exceeds total operating energy over its lifespan. Circular repair and modularity are essential.",
    hotspots: [
      {
        id: "m4-hs-chassis",
        label: "Durable Aluminum Chassis",
        x: 25,
        y: 65,
        description:
          "Structural frames, motors, and wheels that represent 85% of physical mass and remain in near-perfect mechanical condition.",
        tag: "Salvage Asset",
      },
      {
        id: "m4-hs-daughterboard",
        label: "Modular Compute Bay",
        x: 55,
        y: 60,
        description:
          "Plug-and-play NPU slot. Upgrading just this 15% component delivers 100% modern AI capability.",
        tag: "Modular Silicon",
      },
      {
        id: "m4-hs-leachate",
        label: "Toxic Landfill Leachate",
        x: 50,
        y: 88,
        description:
          "Heavy metals (lead, cadmium, cobalt) seeping from crushed batteries into groundwater.",
        tag: "Ecological Hazard",
      },
    ],
    aiConcept: {
      title: "WHAT IS THE CIRCULAR ECONOMY?",
      subtitle: "Moving from Take-Make-Waste to Reduce-Reuse-Repair-Recycle",
      definition:
        "The Circular Economy is an industrial system designed to keep materials, hardware, and components in use for as long as possible. In robotics, this means designing modular parts that can be repaired, swapped, and upgraded without discarding the robot.",
      realWorldExample:
        "Upgrading your computer's memory chip or graphic card with a single screwdriver instead of throwing away the entire laptop and monitor.",
      takeaway:
        "The greenest robot is the one that already exists! Modular hardware breaks the cycle of electronic waste and slashes embodied carbon.",
      componentType: "circular",
    },
    options: [
      {
        id: "m4-opt-a",
        key: "A",
        title: "Repair, Reuse & Upgrade Modular Components",
        isSustainable: true,
        image: "/assets/m4-modular-repair.svg",
        pointsAwarded: 250,
        shortDescription:
          "Preserve durable mechanical chassis and motors, swapping only the central NPU daughterboards and repairing components in civic workshops.",
        detailedExplanation:
          "Adopt an open modular standard. Retain durable aluminum frames, servos, and hydraulics (85% of mass), replacing solely the plug-and-play neural computing board. Partner with vocational apprenticeships to repair batteries and sensors.",
        advantages: [
          "Achieves modern AI performance while eliminating 88% of landfill scrap",
          "Saves over $380 million in municipal procurement capital",
          "Fosters civic engineering repair mastery and youth tech jobs",
          "Cuts colossal embodied carbon emissions from raw mineral extraction",
        ],
        disadvantages: [
          "Requires standardized connector protocols with hardware vendors",
          "Mechanical frames still require periodic physical lubrication and care",
        ],
        impacts: {
          environmental: 60,
          energy: 40,
          social: 55,
          economic: 50,
        },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -40,
          waterIndex: -25,
          ewasteIndex: -50,
          operationalEfficiency: 35,
          citizenWellbeing: 45,
          resilienceIndex: 45,
        },
        learningObjective:
          "Master circular engineering: extending hardware lifespans via modularity, open documentation, and right-to-repair.",
        sdgs: [9, 11, 12, 13],
        consequenceNarration:
          "VICTORY FOR CIRCULAR DESIGN! Technicians slotted modern edge neural boards into seasoned robotic frames in under 20 minutes per unit. Landfill scrap vanished, drinking water remained pure, and citizens celebrated local technical mastery.",
        educationalTakeaway:
          "Modular design breaks the destructive cycle of electronic waste. Decoupling fast-evolving compute silicon from slow-wearing mechanical bodies ensures peak technological performance with zero ecological wreckage.",
      },
      {
        id: "m4-opt-b",
        key: "B",
        title: "Replace the Entire Robot Whenever One Component Outdates",
        isSustainable: false,
        image: "/assets/m4-dump-replacement.svg",
        pointsAwarded: 50,
        shortDescription:
          "Scrap all 120,000 legacy robots and purchase brand new proprietary unified units from vendors.",
        detailedExplanation:
          "Sell existing hardware to scrap bulk traders and procure sleek unified robotic platforms. When a battery or motor wears out in two years, repeat the replacement cycle.",
        advantages: [
          "Immediate shiny modern fleet appearance",
          "Unified manufacturer warranty and single customer support line",
        ],
        disadvantages: [
          "Dumps 18,000 metric tons of hazardous electronic components into landfills",
          "Heavy metals leach into the southern water reservoir",
          "Massive embodied carbon from mining rare-earths and semiconductor fabrication",
          "Exorbitant financial debt burden of $420 million charged to taxpayers",
        ],
        impacts: {
          environmental: -65,
          energy: -20,
          social: -25,
          economic: -55,
        },
        cityMetricDeltas: {
          energyIndex: 10,
          carbonIndex: 45,
          waterIndex: 30,
          ewasteIndex: 65,
          operationalEfficiency: 20,
          citizenWellbeing: -35,
          resilienceIndex: -25,
        },
        learningObjective:
          "Understand the 'efficiency paradox': discarding working hardware for new 'greener' hardware creates vastly more pollution than repairing existing hardware.",
        sdgs: [11, 12],
        consequenceNarration:
          "UNSUSTAINABLE APPROACH. The new robots arrived, but the municipal landfill began leaching lead into drinking wells. Civic taxes spiked by $420M, and lifecycle audits revealed a 32% net surge in total city carbon emissions.",
        educationalTakeaway:
          "Beware planned obsolescence. Upgrading entire machines for minor component improvements ignores the colossal carbon footprint released during raw mineral mining and semiconductor manufacturing.",
      },
    ],
  },
];
