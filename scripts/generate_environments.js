const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, '..', 'public', 'assets', 'game', 'environments');
if (!fs.existsSync(envDir)) fs.mkdirSync(envDir, { recursive: true });

const ENVIRONMENTS = [
  {
    filename: 'skyline-before.svg',
    title: 'Nova City Before the Disaster',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="45%" stop-color="#3B82F6"/>
      <stop offset="75%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="50%" cy="75%" r="40%">
      <stop offset="0%" stop-color="#FEF08A" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#F97316" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="25%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <!-- Sunset Sky -->
  <rect width="1920" height="750" fill="url(#skyGrad)"/>
  <circle cx="960" cy="650" r="350" fill="url(#sunGlow)"/>
  <!-- Distant mountain silhouette -->
  <path d="M0,620 L300,540 L650,600 L1100,510 L1500,580 L1920,530 L1920,750 L0,750 Z" fill="#312E81" opacity="0.4"/>
  <!-- Distant City Layer -->
  <path d="M100,750 L100,480 L160,480 L160,750 M250,750 L250,420 L320,420 L320,750 M400,750 L400,510 L470,510 L470,750 M600,750 L600,380 L680,380 L680,750 M850,750 L850,320 L960,250 L1070,320 L1070,750 M1200,750 L1200,430 L1300,430 L1300,750 M1450,750 L1450,490 L1530,490 L1530,750 M1680,750 L1680,410 L1760,410 L1760,750 Z" fill="#1E293B" opacity="0.6"/>
  <!-- Mid-ground Spire towers -->
  <rect x="720" y="300" width="110" height="450" fill="#0F172A"/>
  <polygon points="775,180 720,300 830,300" fill="#0F172A"/>
  <line x1="775" y1="140" x2="775" y2="180" stroke="#F8FAFC" stroke-width="4"/>
  <rect x="1100" y="340" width="130" height="410" fill="#111827"/>
  <polygon points="1165,220 1100,340 1230,340" fill="#111827"/>
  <!-- Glowing windows & solar architectural balconies -->
  <g fill="#FEF08A" opacity="0.85">
    <rect x="740" y="320" width="12" height="18"/><rect x="770" y="320" width="12" height="18"/><rect x="800" y="320" width="12" height="18"/>
    <rect x="740" y="360" width="12" height="18"/><rect x="770" y="360" width="12" height="18"/><rect x="800" y="360" width="12" height="18"/>
    <rect x="740" y="400" width="12" height="18"/><rect x="770" y="400" width="12" height="18"/><rect x="800" y="400" width="12" height="18"/>
    <rect x="1120" y="360" width="15" height="20"/><rect x="1160" y="360" width="15" height="20"/><rect x="1200" y="360" width="15" height="20"/>
    <rect x="1120" y="410" width="15" height="20"/><rect x="1160" y="410" width="15" height="20"/><rect x="1200" y="410" width="15" height="20"/>
  </g>
  <!-- Foreground Bridge with graceful cables -->
  <path d="M0,740 Q960,690 1920,740 L1920,760 Q960,710 0,760 Z" fill="#475569"/>
  <line x1="480" y1="740" x2="480" y2="450" stroke="#334155" stroke-width="8"/>
  <line x1="1440" y1="740" x2="1440" y2="450" stroke="#334155" stroke-width="8"/>
  <!-- Water with golden twilight reflections -->
  <rect y="750" width="1920" height="330" fill="url(#waterGrad)"/>
  <path d="M720,750 L830,750 L870,1080 L680,1080 Z" fill="#F59E0B" opacity="0.25"/>
  <path d="M1100,750 L1230,750 L1260,1080 L1070,1080 Z" fill="#F59E0B" opacity="0.2"/>
  <!-- Silhouetted trees in foreground promenade -->
  <path d="M0,1080 L0,960 Q200,950 400,990 L400,1080 Z" fill="#020617"/>
  <path d="M1520,1080 L1520,980 Q1720,950 1920,970 L1920,1080 Z" fill="#020617"/>
</svg>`
  },
  {
    filename: 'skyline-after.svg',
    title: 'Nova City After the Disaster',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="stormSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="85%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#331A1A"/>
    </linearGradient>
    <radialGradient id="smokeGlow" cx="60%" cy="65%" r="35%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#7C2D12" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Ominous Storm Sky -->
  <rect width="1920" height="780" fill="url(#stormSky)"/>
  <!-- Distant smoke plumes -->
  <circle cx="1150" cy="620" r="320" fill="url(#smokeGlow)"/>
  <path d="M1100,700 Q1050,450 1140,250 Q1220,400 1250,700 Z" fill="#1C1917" opacity="0.6"/>
  <path d="M500,720 Q440,520 520,380 Q590,500 620,720 Z" fill="#1C1917" opacity="0.5"/>
  <!-- Shattered Distant Skyline -->
  <path d="M150,750 L150,560 L210,560 L210,750 M320,750 L320,480 L350,500 L380,470 L390,750 M700,750 L700,420 L780,490 L790,750 M880,750 L880,290 L950,330 L970,750 M1300,750 L1300,460 L1380,460 L1400,750 M1550,750 L1550,530 L1630,550 L1640,750 Z" fill="#090D16"/>
  <!-- Broken Iconic Apex Spire -->
  <polygon points="900,750 900,380 940,320 955,360 970,750" fill="#050811"/>
  <line x1="940" y1="320" x2="980" y2="260" stroke="#475569" stroke-width="3" stroke-dasharray="10,5"/>
  <!-- Intermittent Red Warning Strobe -->
  <circle cx="940" cy="320" r="6" fill="#EF4444"/>
  <circle cx="940" cy="320" r="18" fill="#EF4444" opacity="0.3"/>
  <!-- Broken Bridge Pylons -->
  <path d="M0,760 Q960,730 1920,760" stroke="#1E293B" stroke-width="14" fill="none"/>
  <path d="M850,745 L920,840 L970,840 L1020,745" stroke="#1E293B" stroke-width="12" fill="none"/>
  <!-- Dark Turbulent Water with Rain Streaks -->
  <rect y="760" width="1920" height="320" fill="#050811"/>
  <line x1="200" y1="800" x2="280" y2="800" stroke="#38BDF8" stroke-width="1" opacity="0.3"/>
  <line x1="600" y1="860" x2="720" y2="860" stroke="#38BDF8" stroke-width="1" opacity="0.2"/>
  <line x1="1200" y1="820" x2="1350" y2="820" stroke="#F59E0B" stroke-width="1" opacity="0.25"/>
  <!-- Foreground Rubble & Debris -->
  <path d="M0,1080 L0,940 L280,970 L420,930 L600,1080 Z" fill="#0A0F1D"/>
  <path d="M1400,1080 L1550,960 L1750,980 L1920,920 L1920,1080 Z" fill="#0A0F1D"/>
</svg>`
  },
  {
    filename: 'downtown-abandoned.svg',
    title: 'Abandoned Downtown Street',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="downtownSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="wetStreet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <!-- Overcast Sky -->
  <rect width="1920" height="600" fill="url(#downtownSky)"/>
  <!-- High-rise Buildings Flanking Street (Perspective Convergence) -->
  <!-- Left Buildings -->
  <polygon points="0,0 650,420 650,850 0,1000" fill="#0B1120"/>
  <polygon points="120,80 500,420 500,820 120,920" fill="#0F172A"/>
  <!-- Right Buildings -->
  <polygon points="1920,0 1270,420 1270,850 1920,1000" fill="#0B1120"/>
  <polygon points="1800,80 1420,420 1420,820 1800,920" fill="#0F172A"/>
  <!-- Vanishing Point at Center -->
  <rect x="850" y="440" width="220" height="240" fill="#1E293B"/>
  <polygon points="960,340 850,440 1070,440" fill="#1E293B"/>
  <!-- Street & Broken Asphalt -->
  <polygon points="650,850 1270,850 1920,1080 0,1080" fill="url(#wetStreet)"/>
  <!-- Derailed Metro Tram in Mid-ground -->
  <polygon points="760,680 1100,660 1120,780 770,800" fill="#334155"/>
  <polygon points="770,700 860,695 860,740 770,745" fill="#64748B" opacity="0.6"/>
  <polygon points="880,695 970,690 970,735 880,740" fill="#64748B" opacity="0.6"/>
  <polygon points="990,690 1080,685 1080,730 990,735" fill="#64748B" opacity="0.6"/>
  <!-- Overgrown Vegetation (Ivy creeping on buildings) -->
  <path d="M0,600 Q150,650 250,550 Q350,700 500,680 L500,800 L0,900 Z" fill="#14532D" opacity="0.8"/>
  <path d="M1920,580 Q1750,660 1650,560 Q1520,720 1420,700 L1420,800 L1920,900 Z" fill="#14532D" opacity="0.75"/>
  <!-- Wet puddle reflections -->
  <ellipse cx="960" cy="940" rx="380" ry="60" fill="#38BDF8" opacity="0.12"/>
  <ellipse cx="600" cy="990" rx="220" ry="40" fill="#F59E0B" opacity="0.1"/>
  <!-- Streetlamp with flickering warm bulb -->
  <line x1="580" y1="880" x2="580" y2="600" stroke="#475569" stroke-width="8"/>
  <path d="M580,600 Q620,580 660,610" stroke="#475569" stroke-width="6" fill="none"/>
  <circle cx="660" cy="620" r="14" fill="#FDE047" opacity="0.85"/>
  <circle cx="660" cy="620" r="45" fill="#FDE047" opacity="0.2"/>
</svg>`
  },
  {
    filename: 'residential-ruins.svg',
    title: 'Destroyed Residential Neighbourhood',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="rainSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A0F1D"/>
      <stop offset="60%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#2D3748"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="700" fill="url(#rainSky)"/>
  <!-- Collapsed Apartment Blocks -->
  <polygon points="100,750 100,450 320,410 320,750" fill="#1A202C"/>
  <polygon points="360,750 360,500 480,560 550,750" fill="#2D3748"/>
  <!-- Broken Walls exposing domestic interiors -->
  <rect x="140" y="480" width="60" height="50" fill="#4A5568"/>
  <rect x="230" y="480" width="60" height="50" fill="#718096" opacity="0.5"/>
  <rect x="140" y="560" width="60" height="50" fill="#2D3748"/>
  <!-- Right Side Collapsed Residences -->
  <polygon points="1400,750 1400,400 1700,460 1700,750" fill="#1A202C"/>
  <polygon points="1200,750 1200,520 1350,560 1380,750" fill="#2D3748"/>
  <!-- Hanging Power Lines across street -->
  <path d="M320,440 Q850,620 1400,430" stroke="#111827" stroke-width="3" fill="none"/>
  <path d="M320,470 Q920,680 1400,460" stroke="#111827" stroke-width="2" fill="none"/>
  <!-- Ground with mud and puddles -->
  <rect y="750" width="1920" height="330" fill="#0D131F"/>
  <!-- Abandoned Child's Bicycle & Stroller in foreground -->
  <circle cx="780" cy="920" r="35" stroke="#94A3B8" stroke-width="4" fill="none"/>
  <circle cx="870" cy="920" r="35" stroke="#94A3B8" stroke-width="4" fill="none"/>
  <line x1="780" y1="920" x2="825" y2="860" stroke="#94A3B8" stroke-width="5"/>
  <line x1="870" y1="920" x2="825" y2="860" stroke="#94A3B8" stroke-width="5"/>
  <line x1="825" y1="860" x2="850" y2="820" stroke="#94A3B8" stroke-width="5"/>
  <!-- Warm survivor campfire light in one shattered window -->
  <circle cx="1520" cy="580" r="28" fill="#F97316" opacity="0.85"/>
  <circle cx="1520" cy="580" r="60" fill="#F97316" opacity="0.25"/>
</svg>`
  },
  {
    filename: 'subway-underground.svg',
    title: 'Underground Subway Station',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="tunnelGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="70%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <radialGradient id="lantern" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#0284C7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Dark Tunnel Vault -->
  <rect width="1920" height="1080" fill="url(#tunnelGrad)"/>
  <!-- Concrete Arches receding in perspective -->
  <path d="M0,0 Q960,180 1920,0 L1920,240 Q960,380 0,240 Z" fill="#1E293B"/>
  <path d="M200,240 Q960,450 1720,240 L1600,420 Q960,560 320,420 Z" fill="#0F172A"/>
  <!-- Tiled Subway Platform on Left -->
  <polygon points="0,680 700,680 800,1080 0,1080" fill="#334155"/>
  <line x1="680" y1="680" x2="780" y2="1080" stroke="#FBBF24" stroke-width="8" stroke-dasharray="20,15"/>
  <!-- Subway Tracks & Standing Water in Center-Right -->
  <polygon points="700,680 1920,680 1920,1080 800,1080" fill="#020617"/>
  <!-- Steel Rails -->
  <line x1="880" y1="680" x2="1080" y2="1080" stroke="#94A3B8" stroke-width="6"/>
  <line x1="980" y1="680" x2="1280" y2="1080" stroke="#94A3B8" stroke-width="6"/>
  <line x1="1350" y1="680" x2="1650" y2="1080" stroke="#94A3B8" stroke-width="6"/>
  <line x1="1450" y1="680" x2="1850" y2="1080" stroke="#94A3B8" stroke-width="6"/>
  <!-- Water Reflections on Tracks -->
  <ellipse cx="1200" cy="850" rx="250" ry="40" fill="#0284C7" opacity="0.3"/>
  <!-- Emergency Chemical Flare on Platform -->
  <circle cx="450" cy="820" r="12" fill="#38BDF8"/>
  <circle cx="450" cy="820" r="180" fill="url(#lantern)"/>
  <!-- Subway Sign: "LINE 4 // CITADEL CENTRAL" -->
  <rect x="250" y="440" width="300" height="60" fill="#000000" stroke="#475569" stroke-width="3"/>
  <text x="400" y="478" fill="#F8FAFC" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle">METRO CENTRAL</text>
</svg>`
  },
  {
    filename: 'flooded-street.svg',
    title: 'Flooded City Street',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="floodSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#09111E"/>
      <stop offset="100%" stop-color="#1E3A5F"/>
    </linearGradient>
    <linearGradient id="floodWater" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#164E63"/>
      <stop offset="50%" stop-color="#0E3846"/>
      <stop offset="100%" stop-color="#041B23"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="550" fill="url(#floodSky)"/>
  <!-- Submerged Buildings -->
  <rect x="80" y="200" width="320" height="420" fill="#0C1929"/>
  <rect x="450" y="280" width="280" height="340" fill="#132337"/>
  <rect x="1200" y="240" width="300" height="380" fill="#0C1929"/>
  <rect x="1550" y="180" width="300" height="440" fill="#132337"/>
  <!-- Water Line -->
  <rect y="580" width="1920" height="500" fill="url(#floodWater)"/>
  <!-- Semi-submerged Passenger Car -->
  <path d="M680,660 Q780,600 920,600 Q1040,600 1080,660 L1100,720 L660,720 Z" fill="#1E293B"/>
  <rect x="740" y="620" width="120" height="40" fill="#64748B" opacity="0.7"/>
  <rect x="890" y="620" width="130" height="40" fill="#64748B" opacity="0.7"/>
  <!-- Makeshift Wooden Plank Footbridge -->
  <polygon points="180,680 500,640 500,665 180,705" fill="#78350F"/>
  <line x1="280" y1="690" x2="280" y2="780" stroke="#451A03" stroke-width="8"/>
  <line x1="420" y1="655" x2="420" y2="780" stroke="#451A03" stroke-width="8"/>
  <!-- Floating barrels & supply crates -->
  <rect x="1280" y="690" width="60" height="50" fill="#B45309" transform="rotate(8 1310 715)"/>
  <ellipse cx="1450" cy="730" rx="30" ry="18" fill="#1F2937"/>
  <!-- Atmospheric Rain Drops -->
  <g stroke="#38BDF8" stroke-width="1.5" opacity="0.4">
    <line x1="300" y1="200" x2="280" y2="280"/>
    <line x1="600" y1="150" x2="580" y2="230"/>
    <line x1="950" y1="180" x2="930" y2="260"/>
    <line x1="1300" y1="220" x2="1280" y2="300"/>
    <line x1="1650" y1="160" x2="1630" y2="240"/>
  </g>
</svg>`
  },
  {
    filename: 'hospital-abandoned.svg',
    title: 'Abandoned Hospital',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="hospCeil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <radialGradient id="skylight" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#F8FAFC" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#94A3B8" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Corridor Perspective -->
  <rect width="1920" height="1080" fill="url(#hospCeil)"/>
  <!-- Broken Skylight Beam of Light -->
  <polygon points="800,0 1120,0 1350,1080 570,1080" fill="url(#skylight)"/>
  <!-- Corridor Walls with Medical Green Stripe -->
  <polygon points="0,150 600,380 600,900 0,1080" fill="#0B1320"/>
  <polygon points="1920,150 1320,380 1320,900 1920,1080" fill="#0B1320"/>
  <line x1="0" y1="620" x2="600" y2="620" stroke="#10B981" stroke-width="12" opacity="0.6"/>
  <line x1="1320" y1="620" x2="1920" y2="620" stroke="#10B981" stroke-width="12" opacity="0.6"/>
  <!-- Overturned Medical Gurney / Hospital Bed -->
  <polygon points="780,820 1040,780 1080,860 820,900" fill="#475569"/>
  <line x1="820" y1="900" x2="810" y2="940" stroke="#64748B" stroke-width="6"/>
  <line x1="1080" y1="860" x2="1090" y2="910" stroke="#64748B" stroke-width="6"/>
  <!-- IV Drip Stand toppled on tiles -->
  <line x1="680" y1="890" x2="770" y2="980" stroke="#94A3B8" stroke-width="4"/>
  <circle cx="770" cy="980" r="10" fill="#38BDF8" opacity="0.7"/>
  <!-- Moss and Ferns growing between floor tiles in the light beam -->
  <ellipse cx="960" cy="980" rx="140" ry="30" fill="#15803D" opacity="0.7"/>
  <circle cx="920" cy="970" r="22" fill="#16A34A"/>
  <circle cx="990" cy="980" r="26" fill="#15803D"/>
  <circle cx="950" cy="990" r="18" fill="#22C55E"/>
</svg>`
  },
  {
    filename: 'forest-overgrown.svg',
    title: 'Forest Overgrown with Vegetation',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="forestSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064E3B"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#D1FAE5"/>
    </linearGradient>
    <radialGradient id="sunbeams" cx="70%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#FEF08A" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#A7F3D0" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#064E3B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Forest Canopy Sky -->
  <rect width="1920" height="1080" fill="url(#forestSky)"/>
  <rect width="1920" height="1080" fill="url(#sunbeams)"/>
  <!-- Distant Pine Trunks -->
  <g fill="#064E3B" opacity="0.6">
    <rect x="250" y="100" width="40" height="980"/>
    <rect x="450" y="80" width="55" height="1000"/>
    <rect x="750" y="120" width="45" height="960"/>
    <rect x="1150" y="60" width="50" height="1020"/>
    <rect x="1450" y="90" width="60" height="990"/>
    <rect x="1750" y="110" width="40" height="970"/>
  </g>
  <!-- Abandoned Highway Asphalt swallowed by roots -->
  <polygon points="600,1080 820,700 1100,700 1320,1080" fill="#1E293B"/>
  <line x1="960" y1="700" x2="960" y2="1080" stroke="#FDE047" stroke-width="6" stroke-dasharray="35,25" opacity="0.4"/>
  <!-- Foreground Massive Ancient Oaks & Vines -->
  <path d="M0,0 Q180,450 60,1080 L0,1080 Z" fill="#022C22"/>
  <path d="M1920,0 Q1740,480 1860,1080 L1920,1080 Z" fill="#022C22"/>
  <!-- Dense Ferns and Moss Carpeting the Forest Floor -->
  <ellipse cx="960" cy="1050" rx="960" ry="140" fill="#064E3B"/>
  <circle cx="300" cy="980" r="80" fill="#047857"/>
  <circle cx="500" cy="1020" r="100" fill="#059669"/>
  <circle cx="1400" cy="990" r="90" fill="#047857"/>
  <circle cx="1650" cy="1010" r="110" fill="#059669"/>
</svg>`
  },
  {
    filename: 'power-station-damaged.svg',
    title: 'Damaged Power Station',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="powerSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="60%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="750" fill="url(#powerSky)"/>
  <!-- Massive Concrete Cooling Towers (One Fractured) -->
  <path d="M300,750 Q360,500 340,300 L560,300 Q540,500 600,750 Z" fill="#1E293B"/>
  <ellipse cx="450" cy="300" rx="110" ry="25" fill="#334155"/>
  <!-- Fractured Right Tower -->
  <path d="M1200,750 Q1260,500 1240,300 L1360,300 L1400,380 L1460,750 Z" fill="#1E293B"/>
  <!-- Jagged crack in tower -->
  <path d="M1360,300 L1380,420 L1340,490 L1370,580 L1350,680" stroke="#0F172A" stroke-width="8" fill="none"/>
  <!-- Transformer Substation Yard -->
  <rect y="750" width="1920" height="330" fill="#0A0F1D"/>
  <!-- Electrical Pylon Grid Towers -->
  <line x1="850" y1="750" x2="900" y2="400" stroke="#64748B" stroke-width="6"/>
  <line x1="950" y1="750" x2="900" y2="400" stroke="#64748B" stroke-width="6"/>
  <line x1="800" y1="520" x2="1000" y2="520" stroke="#64748B" stroke-width="6"/>
  <line x1="830" y1="620" x2="970" y2="620" stroke="#64748B" stroke-width="6"/>
  <!-- Electric Arc Sparking Hazard -->
  <circle cx="890" cy="520" r="18" fill="#38BDF8"/>
  <circle cx="890" cy="520" r="60" fill="#38BDF8" opacity="0.3"/>
  <path d="M890,520 L910,505 L900,535 L925,515" stroke="#FFFFFF" stroke-width="3" fill="none"/>
</svg>`
  },
  {
    filename: 'research-facility-deserted.svg',
    title: 'Deserted Research Facility',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="holoGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="40%" stop-color="#0284C7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0B132B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#060913"/>
  <!-- Server racks on left and right walls -->
  <rect x="100" y="120" width="220" height="840" fill="#0D1527" stroke="#1E293B" stroke-width="4"/>
  <rect x="1600" y="120" width="220" height="840" fill="#0D1527" stroke="#1E293B" stroke-width="4"/>
  <!-- Server blinking status LEDs -->
  <g fill="#10B981">
    <circle cx="140" cy="200" r="4"/><circle cx="160" cy="200" r="4"/><circle cx="180" cy="200" r="4"/>
    <circle cx="140" cy="300" r="4"/><circle cx="160" cy="300" r="4"/>
  </g>
  <g fill="#EF4444">
    <circle cx="1640" cy="200" r="4"/><circle cx="1660" cy="200" r="4"/>
    <circle cx="1640" cy="350" r="4"/>
  </g>
  <!-- Central Holographic Core Terminal Table -->
  <ellipse cx="960" cy="780" rx="360" ry="120" fill="#0F172A" stroke="#0284C7" stroke-width="4"/>
  <cylinder cx="960" cy="840" rx="360" ry="60" fill="#0B132B"/>
  <!-- Holographic Globe Projection -->
  <circle cx="960" cy="540" r="160" fill="url(#holoGlow)"/>
  <circle cx="960" cy="540" r="140" stroke="#38BDF8" stroke-width="2" fill="none" stroke-dasharray="15,10"/>
  <ellipse cx="960" cy="540" rx="140" ry="50" stroke="#38BDF8" stroke-width="2" fill="none"/>
  <ellipse cx="960" cy="540" rx="50" ry="140" stroke="#38BDF8" stroke-width="2" fill="none"/>
  <!-- Scattered paper reports & cables on floor -->
  <path d="M400,920 L520,900 L540,950 L420,970 Z" fill="#E2E8F0" opacity="0.3"/>
  <path d="M1200,950 Q1050,910 880,940" stroke="#000000" stroke-width="8" fill="none"/>
</svg>`
  },
  {
    filename: 'shelter-underground.svg',
    title: 'Underground Survivor Shelter',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#D97706" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#1E1B18" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="#1C1917"/>
  <!-- Curved bunker concrete ribs -->
  <path d="M0,0 Q960,300 1920,0 L1920,1080 L0,1080 Z" fill="#292524"/>
  <!-- Warm kerosene lanterns hanging on wires -->
  <line x1="550" y1="180" x2="550" y2="420" stroke="#78716C" stroke-width="4"/>
  <circle cx="550" cy="440" r="24" fill="#FBBF24"/>
  <circle cx="550" cy="440" r="240" fill="url(#lampGlow)"/>
  <line x1="1350" y1="180" x2="1350" y2="420" stroke="#78716C" stroke-width="4"/>
  <circle cx="1350" cy="440" r="24" fill="#FBBF24"/>
  <circle cx="1350" cy="440" r="240" fill="url(#lampGlow)"/>
  <!-- Sleeping cots with blankets along left wall -->
  <polygon points="120,850 480,820 520,880 160,910" fill="#44403C"/>
  <polygon points="140,845 260,835 280,875 160,885" fill="#DC2626" opacity="0.8"/>
  <!-- Radio communication desk in center -->
  <rect x="750" y="750" width="420" height="180" fill="#57534E"/>
  <rect x="800" y="680" width="110" height="70" fill="#0C0A09"/>
  <circle cx="830" cy="715" r="8" fill="#22C55E"/>
  <line x1="855" y1="680" x2="880" y2="580" stroke="#A8A29E" stroke-width="4"/>
  <!-- Food rations crates stacked on right -->
  <rect x="1450" y="800" width="120" height="90" fill="#78350F" stroke="#451A03" stroke-width="4"/>
  <rect x="1580" y="800" width="120" height="90" fill="#78350F" stroke="#451A03" stroke-width="4"/>
  <rect x="1510" y="710" width="120" height="90" fill="#78350F" stroke="#451A03" stroke-width="4"/>
</svg>`
  },
  {
    filename: 'rooftop-overlook.svg',
    title: 'Rooftop Overlooking Nova City',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="40%" stop-color="#1E1B4B"/>
      <stop offset="75%" stop-color="#4C1D95"/>
      <stop offset="100%" stop-color="#F43F5E"/>
    </linearGradient>
  </defs>
  <!-- Twilight Sky -->
  <rect width="1920" height="750" fill="url(#twilightSky)"/>
  <!-- Distant City Skyline Silhouetted against Pink Horizon -->
  <path d="M100,750 L100,480 L180,480 L180,750 M280,750 L280,420 L350,420 L350,750 M600,750 L600,320 L720,320 L720,750 M950,750 L950,220 L1040,220 L1040,750 M1280,750 L1280,380 L1380,380 L1380,750 M1600,750 L1600,450 L1720,450 L1720,750 Z" fill="#0A0612"/>
  <!-- Stars in upper sky -->
  <circle cx="300" cy="120" r="2" fill="#FFFFFF"/><circle cx="700" cy="80" r="1.5" fill="#FFFFFF"/><circle cx="1200" cy="150" r="2" fill="#FFFFFF"/><circle cx="1600" cy="90" r="2.5" fill="#FFFFFF"/>
  <!-- Rooftop Foreground Ledge & Safety Railing -->
  <polygon points="0,850 1920,850 1920,1080 0,1080" fill="#18181B"/>
  <line x1="0" y1="780" x2="1920" y2="780" stroke="#71717A" stroke-width="8"/>
  <line x1="0" y1="820" x2="1920" y2="820" stroke="#71717A" stroke-width="6"/>
  <!-- Vertical Rail Posts -->
  <line x1="300" y1="780" x2="300" y2="850" stroke="#71717A" stroke-width="10"/>
  <line x1="650" y1="780" x2="650" y2="850" stroke="#71717A" stroke-width="10"/>
  <line x1="1000" y1="780" x2="1000" y2="850" stroke="#71717A" stroke-width="10"/>
  <line x1="1350" y1="780" x2="1350" y2="850" stroke="#71717A" stroke-width="10"/>
  <line x1="1700" y1="780" x2="1700" y2="850" stroke="#71717A" stroke-width="10"/>
  <!-- Rooftop Water Tank & Small Wind Turbine -->
  <rect x="180" y="650" width="140" height="200" fill="#27272A"/>
  <polygon points="250,560 180,650 320,650" fill="#3F3F46"/>
  <!-- Micro Wind Turbine Spin Blades -->
  <line x1="1500" y1="850" x2="1500" y2="520" stroke="#52525B" stroke-width="8"/>
  <circle cx="1500" cy="520" r="12" fill="#E4E4E7"/>
  <line x1="1500" y1="520" x2="1420" y2="440" stroke="#E4E4E7" stroke-width="6"/>
  <line x1="1500" y1="520" x2="1580" y2="440" stroke="#E4E4E7" stroke-width="6"/>
  <line x1="1500" y1="520" x2="1500" y2="620" stroke="#E4E4E7" stroke-width="6"/>
</svg>`
  },
  {
    filename: 'industrial-district.svg',
    title: 'Abandoned Industrial District',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="indusSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18181B"/>
      <stop offset="60%" stop-color="#27272A"/>
      <stop offset="100%" stop-color="#3F3F46"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="700" fill="url(#indusSky)"/>
  <!-- Heavy Gantry Cranes in Mist -->
  <line x1="450" y1="700" x2="450" y2="280" stroke="#18181B" stroke-width="16"/>
  <line x1="850" y1="700" x2="850" y2="280" stroke="#18181B" stroke-width="16"/>
  <line x1="380" y1="280" x2="980" y2="280" stroke="#18181B" stroke-width="20"/>
  <!-- Rust Red Chemical Storage Tanks -->
  <rect x="1100" y="440" width="220" height="300" rx="30" fill="#7C2D12"/>
  <rect x="1350" y="480" width="180" height="260" rx="25" fill="#9A3412"/>
  <rect x="1560" y="440" width="220" height="300" rx="30" fill="#7C2D12"/>
  <!-- Fog Layer -->
  <rect y="680" width="1920" height="60" fill="#A1A1AA" opacity="0.3"/>
  <!-- Wet Railway Tracks in Industrial Yard -->
  <polygon points="0,740 1920,740 1920,1080 0,1080" fill="#09090B"/>
  <line x1="200" y1="740" x2="50" y2="1080" stroke="#71717A" stroke-width="8"/>
  <line x1="320" y1="740" x2="220" y2="1080" stroke="#71717A" stroke-width="8"/>
  <line x1="1600" y1="740" x2="1700" y2="1080" stroke="#71717A" stroke-width="8"/>
  <line x1="1720" y1="740" x2="1870" y2="1080" stroke="#71717A" stroke-width="8"/>
</svg>`
  },
  {
    filename: 'river-polluted.svg',
    title: 'River and Polluted Lake',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="lakeSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="60%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#14532D"/>
    </linearGradient>
    <linearGradient id="scumWater" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#155E75"/>
      <stop offset="40%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="580" fill="url(#lakeSky)"/>
  <!-- Dead trees sticking out of marsh water -->
  <line x1="380" y1="580" x2="360" y2="340" stroke="#0F172A" stroke-width="12"/>
  <line x1="360" y1="390" x2="310" y2="320" stroke="#0F172A" stroke-width="7"/>
  <line x1="360" y1="440" x2="420" y2="380" stroke="#0F172A" stroke-width="7"/>
  <!-- Toxic Sheen River Water -->
  <rect y="580" width="1920" height="500" fill="url(#scumWater)"/>
  <!-- Iridescent Chemical Slick Patterns -->
  <ellipse cx="800" cy="720" rx="240" ry="40" fill="#A855F7" opacity="0.35"/>
  <ellipse cx="1150" cy="800" rx="320" ry="50" fill="#EAB308" opacity="0.3"/>
  <ellipse cx="650" cy="880" rx="380" ry="60" fill="#06B6D4" opacity="0.35"/>
  <!-- Reeds & Cat-tails on shoreline foreground -->
  <g stroke="#713F12" stroke-width="4">
    <line x1="80" y1="1080" x2="70" y2="920"/>
    <line x1="120" y1="1080" x2="140" y2="880"/>
    <line x1="160" y1="1080" x2="150" y2="900"/>
    <line x1="1820" y1="1080" x2="1810" y2="910"/>
    <line x1="1860" y1="1080" x2="1870" y2="880"/>
  </g>
</svg>`
  },
  {
    filename: 'sunrise-reborn.svg',
    title: 'Final Restored City at Sunrise',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="rebornSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="40%" stop-color="#38BDF8"/>
      <stop offset="70%" stop-color="#FED7AA"/>
      <stop offset="100%" stop-color="#FEF08A"/>
    </linearGradient>
    <radialGradient id="morningSun" cx="50%" cy="65%" r="35%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="25%" stop-color="#FEF08A" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#FB923C" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Brilliant Morning Sunrise -->
  <rect width="1920" height="720" fill="url(#rebornSky)"/>
  <circle cx="960" cy="620" r="300" fill="url(#morningSun)"/>
  <!-- Restored City Towers with Vertical Gardens -->
  <rect x="350" y="320" width="160" height="400" fill="#0C4A6E"/>
  <rect x="560" y="240" width="180" height="480" fill="#075985"/>
  <rect x="880" y="160" width="160" height="560" fill="#0369A1"/>
  <polygon points="960,60 880,160 1040,160" fill="#0369A1"/>
  <rect x="1180" y="260" width="180" height="460" fill="#075985"/>
  <rect x="1420" y="340" width="160" height="380" fill="#0C4A6E"/>
  <!-- Lush Green Rooftop Gardens -->
  <ellipse cx="430" cy="320" rx="80" ry="20" fill="#10B981"/>
  <ellipse cx="650" cy="240" rx="90" ry="22" fill="#10B981"/>
  <ellipse cx="1270" cy="260" rx="90" ry="22" fill="#10B981"/>
  <ellipse cx="1500" cy="340" rx="80" ry="20" fill="#10B981"/>
  <!-- Clean Sparkling Harbor Waters -->
  <rect y="720" width="1920" height="360" fill="#0284C7"/>
  <path d="M860,720 L1060,720 L1120,1080 L800,1080 Z" fill="#FEF08A" opacity="0.35"/>
  <!-- Flocks of Flying Birds Returning to Nova City -->
  <path d="M700,280 Q715,265 730,280 Q745,265 760,280" stroke="#0C4A6E" stroke-width="4" fill="none"/>
  <path d="M780,240 Q795,225 810,240 Q825,225 840,240" stroke="#0C4A6E" stroke-width="3" fill="none"/>
  <path d="M1150,220 Q1165,205 1180,220 Q1195,205 1210,220" stroke="#0C4A6E" stroke-width="3" fill="none"/>
</svg>`
  }
];

ENVIRONMENTS.forEach(env => {
  const targetPath = path.join(envDir, env.filename);
  fs.writeFileSync(targetPath, env.svg.trim(), 'utf8');
  console.log(`Generated environment: ${env.filename}`);
});
console.log(`All 15 environments successfully generated in ${envDir}`);
