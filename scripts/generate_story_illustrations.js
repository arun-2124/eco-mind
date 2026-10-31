const fs = require('fs');
const path = require('path');

const storyDir = path.join(__dirname, '..', 'public', 'assets', 'game', 'story');
if (!fs.existsSync(storyDir)) fs.mkdirSync(storyDir, { recursive: true });

const STORY_ILLUSTRATIONS = [
  {
    filename: 'story-disaster.svg',
    title: 'The Cataclysmic Collapse',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="blast" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#F59E0B"/>
      <stop offset="60%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#020617"/>
  <!-- City Skyline in Blackout -->
  <path d="M200,900 L200,450 L350,450 L350,900 M450,900 L450,380 L600,380 L600,900 M800,900 L800,240 L1050,240 L1050,900 M1200,900 L1200,420 L1350,420 L1350,900 M1500,900 L1500,500 L1700,500 L1700,900 Z" fill="#090D16"/>
  <!-- Central Electromagnetic Pulse Blast -->
  <circle cx="925" cy="550" r="420" fill="url(#blast)"/>
  <!-- Flying Debris and Glass shards -->
  <polygon points="400,300 440,280 430,340" fill="#38BDF8" opacity="0.8"/>
  <polygon points="650,220 710,250 680,280" fill="#F8FAFC" opacity="0.85"/>
  <polygon points="1250,280 1310,260 1280,320" fill="#38BDF8" opacity="0.8"/>
  <polygon points="1450,380 1490,350 1480,410" fill="#F8FAFC" opacity="0.8"/>
  <!-- Shockwave rings -->
  <ellipse cx="925" cy="550" rx="550" ry="240" stroke="#FDE047" stroke-width="6" fill="none" opacity="0.6"/>
  <ellipse cx="925" cy="550" rx="750" ry="320" stroke="#EF4444" stroke-width="4" fill="none" opacity="0.4"/>
</svg>`
  },
  {
    filename: 'story-first-ori.svg',
    title: 'First Encounter with ORI',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="oriAura" cx="65%" cy="45%" r="40%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#0284C7" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Dark Ruined Basement -->
  <rect width="1920" height="1080" fill="#0A0F1D"/>
  <!-- Concrete Beams overhead -->
  <polygon points="0,0 600,0 800,450 0,600" fill="#1E293B"/>
  <polygon points="1920,0 1350,0 1200,350 1920,500" fill="#1E293B"/>
  <!-- Maya's Silhouette Reaching Forward on Left -->
  <path d="M200,1080 L320,680 Q380,520 450,560 Q520,600 480,720 L580,780 L520,840 L450,810 L480,1080 Z" fill="#020617"/>
  <path d="M480,720 L680,680 L700,720 L520,770 Z" fill="#020617"/>
  <!-- Glowing ORI Floating in center right -->
  <circle cx="1250" cy="480" r="320" fill="url(#oriAura)"/>
  <circle cx="1250" cy="480" r="130" fill="#1E293B" stroke="#64748B" stroke-width="8"/>
  <rect x="1160" y="420" width="180" height="120" rx="30" fill="#020617" stroke="#38BDF8" stroke-width="6"/>
  <!-- Curious Bright Cyan Optical Eyes -->
  <ellipse cx="1210" cy="480" rx="28" ry="28" fill="#38BDF8"/>
  <ellipse cx="1290" cy="480" rx="28" ry="28" fill="#38BDF8"/>
  <circle cx="1218" cy="472" r="8" fill="#FFFFFF"/>
  <circle cx="1298" cy="472" r="8" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'story-shelter.svg',
    title: 'Discovering the Abandoned Shelter',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="doorLight" cx="60%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#B45309" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0C0A09" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#0C0A09"/>
  <!-- Giant Heavy Circular Vault Door Swing Open -->
  <ellipse cx="1150" cy="540" rx="360" ry="460" fill="url(#doorLight)"/>
  <!-- Vault Steel Teeth -->
  <polygon points="1350,150 1480,250 1420,850 1280,950" fill="#44403C" stroke="#78716C" stroke-width="8"/>
  <!-- Silhouette of Elias and Maya peering in -->
  <path d="M420,1080 L480,720 Q510,610 560,630 Q610,660 590,750 L640,840 L580,1080 Z" fill="#000000"/>
  <path d="M620,1080 L670,680 Q710,560 770,580 Q820,620 790,720 L840,820 L780,1080 Z" fill="#000000"/>
  <!-- Warm glow revealing supplies and clean bunks inside -->
  <rect x="1000" y="600" width="140" height="80" fill="#78350F" opacity="0.8"/>
  <rect x="1080" y="520" width="140" height="80" fill="#78350F" opacity="0.8"/>
</svg>`
  },
  {
    filename: 'story-survivors.svg',
    title: 'Finding Missing Survivors',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="fireGlow" cx="50%" cy="65%" r="40%">
      <stop offset="0%" stop-color="#F97316" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#B45309" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#1C1917" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#1C1917"/>
  <circle cx="960" cy="700" r="450" fill="url(#fireGlow)"/>
  <!-- Barrel Campfire in center -->
  <rect x="910" y="680" width="100" height="150" rx="10" fill="#292524" stroke="#44403C" stroke-width="6"/>
  <!-- Warm Flames licking upward -->
  <polygon points="930,680 960,540 980,620 1000,560 970,680" fill="#FDE047"/>
  <polygon points="940,680 965,580 985,680" fill="#FFFFFF"/>
  <!-- Family Silhouettes gathered around barrel -->
  <!-- Mother holding child on left -->
  <path d="M580,950 Q600,680 660,680 Q720,680 720,950 Z" fill="#0C0A09"/>
  <circle cx="660" cy="640" r="35" fill="#0C0A09"/>
  <circle cx="700" cy="700" r="22" fill="#0C0A09"/>
  <!-- Elder sitting on crate on right -->
  <path d="M1200,950 Q1220,720 1280,720 Q1340,720 1340,950 Z" fill="#0C0A09"/>
  <circle cx="1270" cy="670" r="35" fill="#0C0A09"/>
  <!-- Noah extending a thermos bottle forward -->
  <path d="M420,980 L480,780 L560,780 L520,980 Z" fill="#0C0A09"/>
  <line x1="530" y1="810" x2="620" y2="780" stroke="#FBBF24" stroke-width="8"/>
</svg>`
  },
  {
    filename: 'story-storm.svg',
    title: 'A Dangerous Storm',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="stormNight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#stormNight)"/>
  <!-- Giant Lightning Bolt Fork across Sky -->
  <path d="M960,0 L920,240 L1040,320 L980,520 L1120,640 L1020,920 L1080,1080" stroke="#F0F9FF" stroke-width="8" fill="none"/>
  <path d="M920,240 L820,380 L880,450" stroke="#BAE6FD" stroke-width="4" fill="none"/>
  <path d="M980,520 L870,620" stroke="#BAE6FD" stroke-width="3" fill="none"/>
  <!-- Ambient lightning flash illumination on clouds -->
  <circle cx="960" cy="300" r="380" fill="#38BDF8" opacity="0.18"/>
  <!-- Driving Torrential Rain -->
  <g stroke="#93C5FD" stroke-width="2" opacity="0.45">
    <line x1="200" y1="100" x2="100" y2="350"/><line x1="500" y1="80" x2="400" y2="330"/>
    <line x1="800" y1="120" x2="700" y2="370"/><line x1="1200" y1="90" x2="1100" y2="340"/>
    <line x1="1500" y1="140" x2="1400" y2="390"/><line x1="1800" y1="70" x2="1700" y2="320"/>
  </g>
  <!-- Bent trees fighting ferocious gale -->
  <path d="M250,1080 Q320,800 480,720" stroke="#0F172A" stroke-width="24" fill="none"/>
  <path d="M1700,1080 Q1620,820 1440,750" stroke="#0F172A" stroke-width="24" fill="none"/>
</svg>`
  },
  {
    filename: 'story-power-crisis.svg',
    title: 'A Power Station Emergency',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <rect width="1920" height="1080" fill="#18181B"/>
  <!-- Overheating Reactor Chamber with Red Sirens -->
  <rect x="400" y="240" width="1120" height="600" rx="30" fill="#27272A" stroke="#EF4444" stroke-width="8"/>
  <circle cx="960" cy="540" r="180" fill="#EF4444" opacity="0.85"/>
  <circle cx="960" cy="540" r="140" fill="#FDE047"/>
  <!-- Sparks bursting from control junction -->
  <g stroke="#FEF08A" stroke-width="4">
    <line x1="450" y1="350" x2="400" y2="300"/>
    <line x1="450" y1="350" x2="420" y2="420"/>
    <line x1="450" y1="350" x2="520" y2="320"/>
    <line x1="1450" y1="650" x2="1520" y2="600"/>
    <line x1="1450" y1="650" x2="1480" y2="720"/>
  </g>
  <!-- Pressure gauges pinned in the red zone -->
  <circle cx="680" cy="400" r="50" fill="#F8FAFC" stroke="#09090B" stroke-width="6"/>
  <line x1="680" y1="400" x2="715" y2="380" stroke="#DC2626" stroke-width="6"/>
  <circle cx="1240" cy="400" r="50" fill="#F8FAFC" stroke="#09090B" stroke-width="6"/>
  <line x1="1240" y1="400" x2="1275" y2="380" stroke="#DC2626" stroke-width="6"/>
</svg>`
  },
  {
    filename: 'story-betrayal.svg',
    title: 'A Confrontation in the Shadows',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="corridorLight" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#corridorLight)"/>
  <!-- Two figures confronting each other across narrow gangway -->
  <!-- Figure 1 on Left with Flashlight Beam -->
  <path d="M350,1080 L420,700 Q460,580 520,600 Q580,640 560,740 L620,860 L540,1080 Z" fill="#020617"/>
  <!-- Flashlight cone piercing dark corridor -->
  <polygon points="560,740 1600,620 1600,820" fill="#FEF08A" opacity="0.35"/>
  <!-- Figure 2 on Right Caught in the Light holding wire cutters -->
  <path d="M1450,1080 L1400,680 Q1370,570 1310,590 Q1260,630 1280,720 L1220,840 L1300,1080 Z" fill="#020617"/>
  <!-- Dropped severed high-voltage line sparking -->
  <path d="M1250,780 Q1320,880 1200,940" stroke="#38BDF8" stroke-width="8" fill="none"/>
  <circle cx="1200" cy="940" r="16" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'story-rescue.svg',
    title: 'A Difficult Rescue',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <rect width="1920" height="1080" fill="#0B1320"/>
  <!-- Broken chasm / collapsed flooring -->
  <polygon points="0,0 750,0 650,550 0,650" fill="#1E293B"/>
  <polygon points="1250,500 1920,400 1920,1080 1150,1080" fill="#1E293B"/>
  <!-- Maya reaching down from upper ledge -->
  <path d="M550,550 L680,640 L700,600 L580,520 Z" fill="#F0B78C"/>
  <circle cx="560" cy="480" r="40" fill="#F0B78C"/>
  <!-- Noah's hand reaching up from lower ruins -->
  <path d="M780,740 L710,650 L690,670 L760,770 Z" fill="#FDE68A"/>
  <!-- Clasping Fingers in mid-air -->
  <circle cx="700" cy="635" r="14" fill="#F59E0B" opacity="0.9"/>
  <!-- Glowing safety tether line -->
  <path d="M400,450 Q550,580 700,635" stroke="#F59E0B" stroke-width="6" fill="none"/>
</svg>`
  },
  {
    filename: 'story-sacrifice.svg',
    title: 'A Major Sacrifice',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <rect width="1920" height="1080" fill="#030712"/>
  <!-- Flooding Vault with water up to waist -->
  <rect y="650" width="1920" height="430" fill="#0C4A6E" opacity="0.85"/>
  <!-- Sealed Watertight Hatch Window in center -->
  <circle cx="960" cy="450" r="220" fill="#1E293B" stroke="#64748B" stroke-width="18"/>
  <circle cx="960" cy="450" r="170" fill="#0284C7" opacity="0.3"/>
  <!-- Elias inside holding manual emergency valve shut -->
  <circle cx="960" cy="420" r="55" fill="#475569"/>
  <line x1="960" y1="460" x2="900" y2="520" stroke="#64748B" stroke-width="12"/>
  <!-- Hand pressed against thick glass window from outside -->
  <path d="M960,450 L990,420 L1010,430 L980,470 Z" fill="#FCA5A5" opacity="0.8"/>
  <text x="960" y="780" fill="#94A3B8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">"SAVE THE OTHERS. SEAL THE DOOR."</text>
</svg>`
  },
  {
    filename: 'story-final-decision.svg',
    title: 'The Final Decision',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="apexGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#1E3A8A" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#020617"/>
  <!-- Pinnacle Spire Observatory Glass Dome -->
  <circle cx="960" cy="450" r="450" fill="url(#apexGlow)"/>
  <path d="M510,450 Q960,0 1410,450" stroke="#38BDF8" stroke-width="4" fill="none" opacity="0.5"/>
  <line x1="960" y1="0" x2="960" y2="450" stroke="#38BDF8" stroke-width="4" opacity="0.5"/>
  <!-- Master Terminal Pedestal in center -->
  <polygon points="860,900 1060,900 1020,620 900,620" fill="#0F172A" stroke="#38BDF8" stroke-width="6"/>
  <!-- Glowing Activation Key Interface -->
  <rect x="915" y="600" width="90" height="40" rx="8" fill="#10B981" stroke="#FFFFFF" stroke-width="3"/>
  <!-- Maya standing before terminal with ORI hovering beside her -->
  <path d="M720,1080 L760,780 Q780,680 810,700 Q840,730 830,800 L860,920 L800,1080 Z" fill="#0F172A"/>
  <!-- ORI floating next to her -->
  <circle cx="680" cy="720" r="45" fill="#1E293B" stroke="#38BDF8" stroke-width="4"/>
  <circle cx="680" cy="720" r="14" fill="#38BDF8"/>
  <!-- Panoramic view of city below through glass -->
  <path d="M0,880 L1920,880" stroke="#1E293B" stroke-width="6"/>
</svg>`
  },
  // 4 ENDINGS
  {
    filename: 'ending-reborn.svg',
    title: 'Ending 1: NOVA REBORN',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="rebornDawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="80%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#rebornDawn)"/>
  <!-- Verdant Restored Metropolis -->
  <circle cx="960" cy="550" r="280" fill="#FEF08A" opacity="0.8"/>
  <!-- Towers covered in lush sky-gardens -->
  <rect x="400" y="380" width="200" height="520" fill="#064E3B"/>
  <ellipse cx="500" cy="380" rx="100" ry="25" fill="#10B981"/>
  <rect x="680" y="280" width="220" height="620" fill="#047857"/>
  <ellipse cx="790" cy="280" rx="110" ry="30" fill="#34D399"/>
  <rect x="1020" y="240" width="220" height="660" fill="#047857"/>
  <ellipse cx="1130" cy="240" rx="110" ry="30" fill="#34D399"/>
  <rect x="1320" y="360" width="200" height="540" fill="#064E3B"/>
  <ellipse cx="1420" cy="360" rx="100" ry="25" fill="#10B981"/>
  <!-- Foreground Hill with Maya, Noah, and ORI looking out together -->
  <polygon points="0,850 1920,850 1920,1080 0,1080" fill="#064E3B"/>
  <!-- Silhouettes of survivors embracing -->
  <circle cx="920" cy="800" r="26" fill="#022C22"/>
  <path d="M890,920 L910,820 L940,820 L950,920 Z" fill="#022C22"/>
  <circle cx="970" cy="810" r="22" fill="#022C22"/>
  <path d="M950,920 L965,830 L985,830 L990,920 Z" fill="#022C22"/>
  <circle cx="1040" cy="800" r="24" fill="#022C22"/>
  <line x1="930" y1="840" x2="970" y2="840" stroke="#022C22" stroke-width="8"/>
</svg>`
  },
  {
    filename: 'ending-survivors.svg',
    title: 'Ending 2: THE SURVIVORS',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="frontierSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="60%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="680" fill="url(#frontierSky)"/>
  <!-- Distant mountains and setting sun -->
  <polygon points="0,680 400,420 850,680" fill="#312E81" opacity="0.6"/>
  <polygon points="600,680 1100,380 1600,680" fill="#312E81" opacity="0.7"/>
  <!-- Open Grasslands Highway -->
  <polygon points="0,680 1920,680 1920,1080 0,1080" fill="#78350F"/>
  <polygon points="850,680 1070,680 1350,1080 570,1080" fill="#334155"/>
  <!-- Survivor Vehicle Convoy Driving Away into New Frontier -->
  <!-- Lead Truck -->
  <rect x="880" y="800" width="160" height="120" rx="10" fill="#1E293B"/>
  <rect x="900" y="820" width="120" height="50" fill="#64748B"/>
  <circle cx="910" cy="920" r="22" fill="#020617"/>
  <circle cx="1010" cy="920" r="22" fill="#020617"/>
  <!-- Second Vehicle in Distance -->
  <rect x="930" y="720" width="80" height="60" rx="5" fill="#334155"/>
  <!-- Warm tail lights disappearing on horizon -->
  <circle cx="895" cy="890" r="6" fill="#EF4444"/>
  <circle cx="1025" cy="890" r="6" fill="#EF4444"/>
</svg>`
  },
  {
    filename: 'ending-last-light.svg',
    title: 'Ending 3: LAST LIGHT',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="vaultBeacon" cx="50%" cy="85%" r="45%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="1"/>
      <stop offset="40%" stop-color="#D97706" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Pitch Black Surface Night -->
  <rect width="1920" height="1080" fill="#020617"/>
  <!-- Cold Silhouetted Towers without power -->
  <path d="M150,850 L150,320 L280,320 L280,850 M400,850 L400,240 L560,240 L560,850 M1360,850 L1360,260 L1520,260 L1520,850 M1650,850 L1650,380 L1800,380 L1800,850 Z" fill="#090D16"/>
  <!-- Deep Subterranean Bunker Entrance Glowing in the Center -->
  <rect y="820" width="1920" height="260" fill="#0F172A"/>
  <circle cx="960" cy="950" r="320" fill="url(#vaultBeacon)"/>
  <!-- Massive Vault Blast Door -->
  <rect x="840" y="850" width="240" height="230" rx="20" fill="#1C1917" stroke="#FBBF24" stroke-width="8"/>
  <text x="960" y="800" fill="#FBBF24" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle">VAULT 01 // SANCTUARY SEALED</text>
  <!-- Tiny warm silhouettes descending down into the light -->
  <circle cx="950" cy="930" r="10" fill="#000000"/>
  <line x1="950" y1="940" x2="950" y2="970" stroke="#000000" stroke-width="4"/>
</svg>`
  },
  {
    filename: 'ending-the-fall.svg',
    title: 'Ending 4: THE FALL',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="fallSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="70%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#fallSky)"/>
  <!-- Dead Shattered Towers in complete silence and snow/static -->
  <polygon points="250,900 250,420 320,380 390,460 390,900" fill="#080C14"/>
  <polygon points="600,900 600,280 720,340 780,900" fill="#080C14"/>
  <polygon points="900,900 900,200 960,260 1050,900" fill="#080C14"/>
  <polygon points="1200,900 1200,320 1340,360 1360,900" fill="#080C14"/>
  <!-- Cold Snow Covered Ground -->
  <polygon points="0,850 1920,850 1920,1080 0,1080" fill="#E2E8F0" opacity="0.25"/>
  <!-- Faded Static Noise & Broken Antenna Sparks -->
  <line x1="960" y1="260" x2="960" y2="160" stroke="#475569" stroke-width="4" stroke-dasharray="8,6"/>
  <circle cx="960" cy="160" r="4" fill="#94A3B8" opacity="0.4"/>
  <!-- Solitary Abandoned ORI Chassis half-buried in snow in foreground -->
  <circle cx="960" cy="960" r="45" fill="#1E293B" stroke="#475569" stroke-width="4"/>
  <rect x="930" y="940" width="60" height="35" rx="8" fill="#020617"/>
  <line x1="945" y1="958" x2="975" y2="958" stroke="#334155" stroke-width="3"/>
  <text x="960" y="1050" fill="#64748B" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">STATIC HISSES ACROSS ALL BANDS...</text>
</svg>`
  }
];

STORY_ILLUSTRATIONS.forEach(ill => {
  const targetPath = path.join(storyDir, ill.filename);
  fs.writeFileSync(targetPath, ill.svg.trim(), 'utf8');
  console.log(`Generated story illustration: ${ill.filename}`);
});
console.log(`All ${STORY_ILLUSTRATIONS.length} story illustrations generated in ${storyDir}`);
