import { Mission, SDGInfo, SDGNumber } from "@/types/game";

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

export const MISSIONS: Mission[] = [
  {
    id: 1,
    number: 1,
    title: "The Intelligence Crisis",
    category: "AI Infrastructure & Energy Architecture",
    environmentalContext:
      "NOVA CITY's centralized data centers are burning through 4.2 gigawatts of grid energy and evaporating millions of liters of potable water for evaporative cooling towers. Network latency has surged to 420ms, stalling autonomous transit and smart grid synchronization.",
    storyProblem:
      "Every robotic courier, surveillance drone, environmental sensor, and hospital system sends raw high-resolution telemetry to a monolithic central compute cluster. The central AI, AETHER, reports catastrophic grid congestion. You must redesign the compute distribution architecture.",
    prompt:
      "Select the technological architecture to resolve the intelligence bottleneck while safeguarding urban energy stability.",
    sdgs: [7, 9, 12, 13],
    summaryNote:
      "Sustainable intelligence is not just about raw model accuracy; it encompasses transmission energy, cooling water, and hardware lifecycles.",
    options: [
      {
        id: "m1-opt-a",
        key: "A",
        title: "Consolidate Centralized Hyper-Scale Cloud AI",
        shortDescription:
          "Keep computing centralized in massive high-efficiency hyperscale data centers with unified liquid cooling.",
        detailedExplanation:
          "Route all processing through optimized regional computing clusters. Centralization maximizes GPU cluster utilization, allows rapid deployment of state-of-the-art foundation models, and simplifies maintenance, but requires unbroken gigabit wireless bandwidth.",
        advantages: [
          "Maximum GPU efficiency and unified infrastructure pooling",
          "Seamless centralized model security updates and debugging",
          "Access to frontier-scale trillion-parameter reasoning models",
          "Lower per-device silicon cost and manufacturing overhead",
        ],
        disadvantages: [
          "Extreme data center electricity demand and localized water draw",
          "Heavy telemetry radio-frequency energy consumption",
          "High network latency during weather and grid fluctuations",
          "Complete single-point-of-failure vulnerability for city services",
        ],
        impacts: {
          environmental: -40,
          energy: -50,
          social: 20,
          economic: 30,
        },
        cityMetricDeltas: {
          energyIndex: 25,
          carbonIndex: 20,
          waterIndex: 30,
          ewasteIndex: -10,
          operationalEfficiency: 15,
          citizenWellbeing: -5,
          resilienceIndex: -25,
        },
        learningObjective:
          "Understand the massive hidden environmental cost of centralized data centers, network transmission power, and water cooling.",
        sdgs: [7, 9, 13],
        consequenceNarration:
          "Centralized processing maintained high model intelligence, but regional power substations experienced rolling brownouts and cooling towers drew scarce reservoir water. When a fiber conduit severed, 34% of municipal transit stalled.",
        educationalTakeaway:
          "Cloud AI delivers unrivaled computational power, but data center electricity and network transmission have substantial carbon and freshwater footprints. Centralization also introduces severe systemic fragility.",
      },
      {
        id: "m1-opt-b",
        key: "B",
        title: "Decentralize Entirely to Pure Edge AI",
        shortDescription:
          "Fit every robot, traffic sensor, and municipal device with dedicated local neural processing silicon.",
        detailedExplanation:
          "Eliminate centralized transmission by running compressed quantized neural networks directly on edge microcontrollers and onboard NPUs. Devices operate autonomously with zero latency, but each unit requires specialized onboard hardware.",
        advantages: [
          "Zero telemetry transmission latency (sub-5ms immediate response)",
          "Total operational resilience even during city-wide communications blackout",
          "Eliminates server farm water cooling requirements",
          "Superior citizen data privacy as raw video stays strictly on-device",
        ],
        disadvantages: [
          "Massive surge in onboard battery drain and hardware manufacturing",
          "Embedded NPUs have strictly constrained memory and reasoning power",
          "Difficult decentralized firmware deployment and diagnostics",
          "Accelerated device hardware obsolescence across 500,000 nodes",
        ],
        impacts: {
          environmental: -15,
          energy: 15,
          social: 25,
          economic: -35,
        },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: -15,
          waterIndex: -35,
          ewasteIndex: 35,
          operationalEfficiency: 5,
          citizenWellbeing: 15,
          resilienceIndex: 35,
        },
        learningObjective:
          "Recognize that Edge AI solves communication latency and data center cooling, but transfers energy burden to local batteries and accelerates hardware manufacturing cycles.",
        sdgs: [9, 11, 12],
        consequenceNarration:
          "Streetlights and robots operated flawlessly without network latency. However, municipal maintenance teams were overwhelmed servicing depleted batteries across thousands of distributed devices, and procurement costs ballooned.",
        educationalTakeaway:
          "Edge AI dramatically reduces data transmission and eliminates centralized water cooling, but distributed compute shifts the environmental footprint to silicon fabrication, battery wear, and physical servicing.",
      },
      {
        id: "m1-opt-c",
        key: "C",
        title: "Deploy Dynamic Tiered Hybrid AI Architecture",
        shortDescription:
          "Execute split-inference: lightweight edge models handle real-time safety, cloud handles complex planning.",
        detailedExplanation:
          "Physical devices run ultra-compact 8-bit quantized models for instantaneous obstacle detection and emergency response. Only contextual anomalies and aggregated optimization summaries are dispatched asynchronously to renewable-powered cloud clusters.",
        advantages: [
          "Optimal balance between instant physical safety and deep analytical reasoning",
          "82% reduction in continuous telemetry bandwidth consumption",
          "Graceful degradation: units remain safe and functional if network drops",
          "Prolongs hardware lifespan by avoiding bloated edge computing specifications",
        ],
        disadvantages: [
          "Significant architectural complexity in model partitioning and synchronization",
          "Requires sophisticated edge-cloud orchestration middleware",
          "Initial software engineering and integration expenses are high",
        ],
        impacts: {
          environmental: 45,
          energy: 40,
          social: 35,
          economic: 15,
        },
        cityMetricDeltas: {
          energyIndex: -25,
          carbonIndex: -20,
          waterIndex: -25,
          ewasteIndex: -15,
          operationalEfficiency: 30,
          citizenWellbeing: 25,
          resilienceIndex: 40,
        },
        learningObjective:
          "Grasp how hybrid AI architectures deliver the sustainable sweet spot: minimal edge power for reflexes, centralized intelligence for macro-coordination.",
        sdgs: [7, 9, 11, 13],
        consequenceNarration:
          "NOVA CITY achieved a stable equilibrium. Edge devices navigated physical traffic with zero lag, while central cooling loads dropped by 68%. Data queues cleared and overall urban energy consumption dropped sharply.",
        educationalTakeaway:
          "Sustainable computing requires pragmatic balance. Dynamic hybrid architectures avoid both the extreme power overhead of monolithic clouds and the silicon obsolescence of oversized edge units.",
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: "The Autonomous Rescue",
    category: "Physical AI & Responsible Robotics",
    environmentalContext:
      "A 6.8 magnitude seismic tremor has ruptured utility conduits in the Old Industrial District. Chemical dust, severed fiber lines, and unstable structural rubble prevent human emergency crews from entering safely.",
    storyProblem:
      "Survivor signals have been detected beneath collapsed solar canopy structures. The Task Force must deploy search-and-rescue robotics into an unpredictable physical environment with degraded radio signals and toxic debris.",
    prompt:
      "Determine the robotic autonomy paradigm for the emergency fleet operating under severe physical constraints.",
    sdgs: [3, 9, 11],
    summaryNote:
      "Physical AI bridges digital intelligence and physical mechanical action. Sensing, perception, and autonomy have profound human safety and energy implications.",
    options: [
      {
        id: "m2-opt-a",
        key: "A",
        title: "Tele-Operated Remote Control with Full Human Drivers",
        shortDescription:
          "Keep robots strictly dependent on real-time human operator piloting over wireless links.",
        detailedExplanation:
          "Every actuator, track movement, and robotic arm gesture is driven by human rescue specialists via high-definition camera streams and haptic feedback rigs. Zero autonomous risk, but demands pristine communications.",
        advantages: [
          "Maximum human ethical oversight and accountable judgment",
          "Minimal onboard robotic compute hardware needed",
          "High adaptability for unexpected nuanced mechanical manipulation",
        ],
        disadvantages: [
          "Complete paralysis whenever radio signals glitch through concrete rubble",
          "High operator cognitive fatigue limiting concurrent fleet deployment",
          "Substantial bandwidth overhead transmitting 4K multi-angle video feeds",
          "Slow response times when rapid structural shifts threaten survivors",
        ],
        impacts: {
          environmental: 5,
          energy: -20,
          social: 10,
          economic: 10,
        },
        cityMetricDeltas: {
          energyIndex: 5,
          carbonIndex: 0,
          waterIndex: 0,
          ewasteIndex: -5,
          operationalEfficiency: -15,
          citizenWellbeing: -10,
          resilienceIndex: -20,
        },
        learningObjective:
          "Understand the critical limitations of tele-operation in degraded physical environments and its high bandwidth requirements.",
        sdgs: [3, 9],
        consequenceNarration:
          "Human operators piloted with great care, but underground radio interference froze three robots mid-collapse. Two survivors were rescued, but response delays compromised deeper sector access.",
        educationalTakeaway:
          "Tele-operation keeps humans firmly in the loop, but in physical disasters where connectivity fails, pure tele-operation creates fatal operational bottlenecks.",
      },
      {
        id: "m2-opt-b",
        key: "B",
        title: "Fully Autonomous Swarm with Unconstrained Onboard AI",
        shortDescription:
          "Unleash autonomous robotic quadruped swarms powered by onboard spatial perception and predictive pathfinding.",
        detailedExplanation:
          "Robots map collapsed voids using LiDAR and thermal vision, calculating structural stability and extricating obstacles without waiting for human approval. The swarm shares mesh topology locally without central coordination.",
        advantages: [
          "Ultra-fast rapid traversal across unstable rubble without latency",
          "Completely immune to cellular and radio network jamming",
          "Autonomous swarm self-reorganizes if individual units are damaged",
          "Rescues trapped victims in fraction of conventional deployment time",
        ],
        disadvantages: [
          "Extremely high onboard computational energy drain depleting batteries rapidly",
          "Risks unpredictable robotic interactions or accidental force escalation near victims",
          "Sensor suite manufacturing involves rare earth elements and fragile optics",
          "Zero human verification before initiating destructive obstacle clearance",
        ],
        impacts: {
          environmental: -25,
          energy: -35,
          social: 25,
          economic: -20,
        },
        cityMetricDeltas: {
          energyIndex: 20,
          carbonIndex: 10,
          waterIndex: 5,
          ewasteIndex: 20,
          operationalEfficiency: 35,
          citizenWellbeing: 10,
          resilienceIndex: 15,
        },
        learningObjective:
          "Analyze the trade-offs of unconstrained physical autonomy: high speed and resilience versus intense battery drain and unpredictable safety risks.",
        sdgs: [3, 9, 11],
        consequenceNarration:
          "The autonomous swarm swept the disaster zone in record time, locating 42 survivors within hours. However, battery depletion forced units into emergency shutoff before clearing exits, and one robotic excavator caused structural vibration.",
        educationalTakeaway:
          "Physical AI acting with full autonomy offers unmatched speed, but demanding perception algorithms drain energy rapidly and autonomous mechanical forces can present physical safety hazards.",
      },
      {
        id: "m2-opt-c",
        key: "C",
        title: "Human-Supervised Collaborative Autonomy (Centaur Fleet)",
        shortDescription:
          "Local edge vision executes reflex navigation while human supervisors authorize critical rescue actions.",
        detailedExplanation:
          "Robots independently handle local terrain traversal, footing stability, and obstacle avoidance using low-power neuromorphic vision sensors. When a survivor or critical structural hazard is identified, a low-bandwidth beacon alerts human directors for intervention.",
        advantages: [
          "Local autonomy prevents freezing during radio dropouts while saving radio bandwidth",
          "Ethical human accountability for every life-critical intervention",
          "Optimized sensor power profiles allow 300% longer battery endurance",
          "One operator can supervise up to 12 collaborative robotic units simultaneously",
        ],
        disadvantages: [
          "Requires rigorous human-machine interface communication protocols",
          "Slight operational hesitation while queuing human authorizations",
          "Higher initial training requirements for rescue dispatch personnel",
        ],
        impacts: {
          environmental: 35,
          energy: 30,
          social: 50,
          economic: 20,
        },
        cityMetricDeltas: {
          energyIndex: -15,
          carbonIndex: -10,
          waterIndex: 0,
          ewasteIndex: -10,
          operationalEfficiency: 30,
          citizenWellbeing: 40,
          resilienceIndex: 40,
        },
        learningObjective:
          "Appreciate the superior efficacy of human-in-the-loop Physical AI: reflex autonomy for physical physics, human judgment for ethical decisions.",
        sdgs: [3, 9, 11],
        consequenceNarration:
          "The collaborative fleet performed flawlessly. Low-power physical edge reflexes kept robots traversing rubble effortlessly, while human directors safely validated extraction procedures. All 48 trapped citizens were recovered with zero robotic casualties.",
        educationalTakeaway:
          "Responsible robotics balances autonomous physical reflexes with deliberate human oversight. This hybrid 'Centaur' model minimizes both computational energy and physical risk.",
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "The Energy Emergency",
    category: "Energy & Sustainable Computing",
    environmentalContext:
      "A severe summer heatwave has degraded regional solar array output by 18% due to thermal derating. At the same time, urban automated air scrubbers and AI compute clusters have pushed the city electrical grid into Stage 4 Emergency Alert.",
    storyProblem:
      "NOVA CITY's electrical grid is 350 megawatts away from complete collapse. Continued uncurbed AI operations threaten to plunge hospitals and residential districts into darkness. The Task Force must enforce immediate energy containment strategies.",
    prompt:
      "Implement the technological and workload management policy to avert blackout while preserving urban operations.",
    sdgs: [7, 9, 12, 13],
    summaryNote:
      "Computational efficiency is an environmental imperative. Model quantization, renewable integration, and temporal workload shifting are foundational sustainable AI practices.",
    options: [
      {
        id: "m3-opt-a",
        key: "A",
        title: "Maintain Maximum Performance via Reserve Fossil Turbines",
        shortDescription:
          "Fire up decommissioned gas turbine peaker plants to guarantee unthrottled computing capacity.",
        detailedExplanation:
          "Preserve 100% compute throughput for all commercial and municipal AI models without code modifications or service degradation by burning natural gas reserves.",
        advantages: [
          "Zero disruption to commercial AI services, digital finance, or model quality",
          "No engineering resources needed for model compression or system refactoring",
          "Guaranteed grid headroom for high-demand burst computing",
        ],
        disadvantages: [
          "Spikes city greenhouse gas emissions by 340 metric tons per hour",
          "Directly contradicts UN SDG 13 Climate Commitments and triggers legal penalties",
          "Exhaust particulate clouds aggravate respiratory illnesses in nearby communities",
          "Fuel expenditures rapidly deplete city emergency treasury",
        ],
        impacts: {
          environmental: -60,
          energy: -55,
          social: -20,
          economic: -25,
        },
        cityMetricDeltas: {
          energyIndex: 45,
          carbonIndex: 50,
          waterIndex: 20,
          ewasteIndex: 0,
          operationalEfficiency: 10,
          citizenWellbeing: -35,
          resilienceIndex: -30,
        },
        learningObjective:
          "Recognize the catastrophic environmental impact of brute-forcing computational demand with fossil generation peakers.",
        sdgs: [7, 13],
        consequenceNarration:
          "Computing services ran without interruption, but thick smog settled over eastern residential wards. Public outcry erupted as asthma hospital admissions doubled, and the city carbon budget was exhausted for the entire quarter.",
        educationalTakeaway:
          "Powering inefficient algorithms with dirty energy defeats the purpose of intelligent systems. Technology must operate within planetary and biological boundaries.",
      },
      {
        id: "m3-opt-b",
        key: "B",
        title: "Mandate Dynamic Model Compression & Quantization",
        shortDescription:
          "Enforce automatic INT4/INT8 quantization and architectural pruning across all active AI models.",
        detailedExplanation:
          "Compress models on the fly, replacing 32-bit floating point calculations with integer arithmetic. Drop non-critical precision layers, slashing inference FLOPs by 75% with less than 2.1% loss in task accuracy.",
        advantages: [
          "Cuts inference electricity draw by over 65% across all municipal chips",
          "Requires zero new physical infrastructure or capital equipment",
          "Permits older legacy edge devices to run modern model weights efficiently",
          "Immediately brings grid load back under emergency safety thresholds",
        ],
        disadvantages: [
          "Minor loss of precision in subtle image classification and natural language nuance",
          "Temporary developer friction re-validating quantized models against safety benchmarks",
        ],
        impacts: {
          environmental: 45,
          energy: 50,
          social: 25,
          economic: 35,
        },
        cityMetricDeltas: {
          energyIndex: -35,
          carbonIndex: -30,
          waterIndex: -20,
          ewasteIndex: -10,
          operationalEfficiency: 25,
          citizenWellbeing: 20,
          resilienceIndex: 30,
        },
        learningObjective:
          "Master algorithmic efficiency: algorithmic compression (quantization, distillation, pruning) achieves massive energy savings with minimal accuracy trade-off.",
        sdgs: [7, 9, 12, 13],
        consequenceNarration:
          "Quantized workloads instantly trimmed 280 megawatts from the municipal grid. Robots and sensors operated smoothly with imperceptible behavioral differences, completely stabilizing the regional transformer substations.",
        educationalTakeaway:
          "Software efficiency is as powerful as hardware upgrades. Model quantization and architectural pruning deliver massive carbon reductions without purchasing a single solar panel.",
      },
      {
        id: "m3-opt-c",
        key: "C",
        title: "Construct Off-Grid Solar & Battery Microgrid Robot Hubs",
        shortDescription:
          "Equip all municipal robot charging depots with dedicated rooftop bifacial solar and sodium-ion batteries.",
        detailedExplanation:
          "Isolate the robotics transportation fleet from the public grid. Drones and autonomous rovers recharge exclusively from local clean energy generation with automated battery-swapping pods.",
        advantages: [
          "Completely decouples municipal robotics fleet energy consumption from the municipal grid",
          "100% clean solar-powered operations during daylight hours",
          "Depot batteries can backfeed power to emergency hospitals during blackouts",
        ],
        disadvantages: [
          "Substantial capital investment and construction timeline (months)",
          "Requires significant physical land area in crowded urban districts",
          "Subject to seasonal solar intermittency and battery degradation",
        ],
        impacts: {
          environmental: 35,
          energy: 30,
          social: 20,
          economic: -30,
        },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -25,
          waterIndex: -5,
          ewasteIndex: 15,
          operationalEfficiency: 15,
          citizenWellbeing: 15,
          resilienceIndex: 35,
        },
        learningObjective:
          "Evaluate renewable energy integration for Physical AI: localized microgrids guarantee operational independence but demand capital and battery lifecycle management.",
        sdgs: [7, 9, 11],
        consequenceNarration:
          "The solar charging pods shielded the autonomous delivery fleet from grid instability. While initial construction costs sparked debate in city council, the depots successfully provided emergency backup power during peak heat hours.",
        educationalTakeaway:
          "Decoupling physical robotic operations from stressed municipal grids creates immense resilience, provided lifecycle impacts of battery chemistry are responsibly planned.",
      },
      {
        id: "m3-opt-d",
        key: "D",
        title: "Enforce Carbon-Aware Temporal Workload Scheduling",
        shortDescription:
          "Shift non-urgent AI model training and data indexing to nighttime wind generation windows.",
        detailedExplanation:
          "Classify computational workloads into real-time critical vs delay-tolerant batch jobs. Defer large-scale model re-training, municipal video analytics archiving, and predictive simulation passes to hours when regional wind power is curtailed.",
        advantages: [
          "Zero capital cost; orchestrated purely through intelligent job queuing",
          "Maximizes consumption of otherwise wasted curtailed renewable energy",
          "Smooths grid peak-to-average ratio, preventing transformer thermal stress",
        ],
        disadvantages: [
          "Delays municipal predictive reports and non-urgent civic analytics by 8 to 14 hours",
          "Demands complex synchronization across multi-departmental workflows",
        ],
        impacts: {
          environmental: 40,
          energy: 45,
          social: 15,
          economic: 40,
        },
        cityMetricDeltas: {
          energyIndex: -30,
          carbonIndex: -35,
          waterIndex: -15,
          ewasteIndex: -5,
          operationalEfficiency: 20,
          citizenWellbeing: 15,
          resilienceIndex: 25,
        },
        learningObjective:
          "Discover carbon-aware computing: scheduling flexible computational workloads to match spatial and temporal availability of renewable green energy.",
        sdgs: [7, 12, 13],
        consequenceNarration:
          "Intelligent schedulers paused overnight batch calculations, freeing up 190 megawatts during critical evening dinner hours. When wind turbines spun up at 2 AM, backlogged models trained on cheap, 100% clean surplus power.",
        educationalTakeaway:
          "When you compute is as vital as how you compute. Carbon-aware scheduling transforms computation from an erratic grid burden into an elastic clean energy buffer.",
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "The E-Waste Trap",
    category: "Responsible Robotics & Hardware Lifecycle",
    environmentalContext:
      "NOVA CITY's rapid adoption of AI has created 18,000 tons of discarded sensors, dead robotic chassis, obsolete server blades, and battery packs piled in edge-of-city salvage yards. Toxic lithium-cobalt leachate threatens the municipal water aquifer.",
    storyProblem:
      "A generation of early-model municipal service robots has reached end-of-life. Silicon vendors are aggressively lobbying the city to scrap all 120,000 units and purchase next-generation synthetic neural robots.",
    prompt:
      "Formulate the city's hardware lifecycle and electronic waste governance strategy.",
    sdgs: [9, 11, 12, 13],
    summaryNote:
      "Responsible robotics requires cradle-to-cradle lifecycle design. The embodied carbon in silicon fabrication often surpasses total operational energy over its entire lifespan.",
    options: [
      {
        id: "m4-opt-a",
        key: "A",
        title: "Complete Fleet Replacement with State-of-the-Art Silicon",
        shortDescription:
          "Scrap all 120,000 legacy robots and commission brand new 2nm ultra-efficient machines.",
        detailedExplanation:
          "Sell existing hardware to scrap bulk traders and procure sleek unified robotic platforms with 35% higher runtime efficiency, integrated LiDAR, and cutting-edge tensor cores.",
        advantages: [
          "Immediate 35% improvement in per-operation energy consumption",
          "Uniform modern fleet architecture simplifies software maintenance",
          "New manufacturer warranties and full remote telemetry support",
        ],
        disadvantages: [
          "Massive embodied carbon footprint from mining, semiconductor lithography, and global shipping",
          "Dumps 18,000 metric tons of hazardous electronic components into landfills",
          "Exorbitant financial debt burden of $420 million charged to municipal taxpayers",
          "Accelerates the global electronics scrap crisis",
        ],
        impacts: {
          environmental: -65,
          energy: 10,
          social: -15,
          economic: -50,
        },
        cityMetricDeltas: {
          energyIndex: -10,
          carbonIndex: 40,
          waterIndex: 25,
          ewasteIndex: 60,
          operationalEfficiency: 35,
          citizenWellbeing: -20,
          resilienceIndex: -15,
        },
        learningObjective:
          "Comprehend Embodied Carbon: discarding working hardware to acquire 'greener' hardware frequently creates vastly more net pollution than keeping existing hardware in service.",
        sdgs: [11, 12],
        consequenceNarration:
          "The new robots were fast and sleek, but the municipal landfill began leaching heavy metals into the southern reservoir. Citizens protested the steep tax surcharges, and lifecycle audits revealed a net 28% increase in total carbon emissions.",
        educationalTakeaway:
          "Beware the 'efficiency paradox.' Upgrading hardware for minor operational efficiency gains ignores the colossal emissions released during semiconductor fabrication and raw mineral extraction.",
      },
      {
        id: "m4-opt-b",
        key: "B",
        title: "Comprehensive Civic Repair & Community Refurbishment",
        shortDescription:
          "Establish municipal Right-to-Repair workshops to re-solder, patch, and keep legacy units running.",
        detailedExplanation:
          "Reject planned obsolescence. Partner with vocational engineering colleges and civic maker-spaces to harvest salvaged microcontrollers, rebuild servo motors, and patch legacy Linux kernels.",
        advantages: [
          "Zero new hardware manufacturing emissions and near-zero e-waste landfill additions",
          "Creates high-skill civic repair jobs and youth apprenticeships in robotics",
          "Saves over $380 million in municipal procurement capital",
          "Fosters deep urban technological self-reliance and community pride",
        ],
        disadvantages: [
          "Fleet contains fragmented hardware revisions requiring custom maintenance tracking",
          "Older motors and microprocessors consume 20-30% more operational power than modern chips",
          "Occasional mechanical breakdowns require frequent localized technician dispatches",
        ],
        impacts: {
          environmental: 50,
          energy: -10,
          social: 55,
          economic: 40,
        },
        cityMetricDeltas: {
          energyIndex: 10,
          carbonIndex: -35,
          waterIndex: -30,
          ewasteIndex: -50,
          operationalEfficiency: 5,
          citizenWellbeing: 45,
          resilienceIndex: 35,
        },
        learningObjective:
          "Learn Circular Economy principles in robotics: extending hardware lifespan via repairability, open documentation, and civic refurbishment.",
        sdgs: [9, 11, 12],
        consequenceNarration:
          "Neighborhood workshops buzzed with activity. Students and veteran engineers rebuilt 92,000 service robots using salvage parts. While the robots looked eclectic, the community gained invaluable technical mastery and landfill piles vanished.",
        educationalTakeaway:
          "The greenest robot is the one that already exists. A vibrant repair culture creates local economic resilience while cutting e-waste and embodied emissions at the source.",
      },
      {
        id: "m4-opt-c",
        key: "C",
        title: "Standardized Modular Compute Retrofit",
        shortDescription:
          "Keep existing mechanical chassis and motors, replacing only the central compute daughter-board.",
        detailedExplanation:
          "Adopt an open-hardware modular standard. Retain durable aluminum frames, wheels, and hydraulics (which represent 85% of physical mass), replacing solely the plug-and-play NPU daughterboard with low-cost modern edge accelerators.",
        advantages: [
          "Achieves 90% of the operational efficiency of new robots with only 12% of the material footprint",
          "Dramatically slashes e-waste by preserving mechanical chassis and structural metals",
          "Fast turnaround: modular plug-in swaps require under 20 minutes per robot",
          "Establishes a future-proof standard for all upcoming municipal hardware procurements",
        ],
        disadvantages: [
          "Requires negotiating unified connector standards with competing hardware vendors",
          "Chassis wear and mechanical fatigue will still require ongoing structural maintenance",
        ],
        impacts: {
          environmental: 55,
          energy: 35,
          social: 40,
          economic: 45,
        },
        cityMetricDeltas: {
          energyIndex: -20,
          carbonIndex: -40,
          waterIndex: -25,
          ewasteIndex: -40,
          operationalEfficiency: 35,
          citizenWellbeing: 35,
          resilienceIndex: 45,
        },
        learningObjective:
          "Master Modular Hardware Architecture: separating long-life mechanical structures from rapid-cycle computing silicon to maximize longevity and minimize waste.",
        sdgs: [9, 11, 12, 13],
        consequenceNarration:
          "The modular retrofit program became an international gold standard. Technicians clicked modern edge AI accelerators into seasoned chassis. NOVA CITY achieved state-of-the-art computational performance with negligible landfill output.",
        educationalTakeaway:
          "Modular design breaks the cycle of electronic waste. By decoupling fast-evolving compute silicon from slow-wearing mechanical bodies, engineers achieve both high performance and environmental stewardship.",
      },
    ],
  },
];
