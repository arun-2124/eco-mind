const fs = require('fs');
const path = require('path');

const charDir = path.join(__dirname, '..', 'public', 'assets', 'game', 'characters');
if (!fs.existsSync(charDir)) fs.mkdirSync(charDir, { recursive: true });

const EXPRESSIONS = ['neutral', 'happy', 'sad', 'angry', 'shocked', 'worried'];

// Helper to generate expressive mouth and eyebrows for human characters
function getHumanFaceDetails(type, exp) {
  let mouth = '';
  let brows = '';
  let eyes = '';

  switch (exp) {
    case 'happy':
      brows = `<path d="M150,170 Q180,155 210,165" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
               <path d="M270,165 Q300,155 330,170" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      eyes = `<path d="M165,195 Q185,180 205,195" stroke="#111827" stroke-width="5" fill="none"/>
              <path d="M275,195 Q295,180 315,195" stroke="#111827" stroke-width="5" fill="none"/>`;
      mouth = `<path d="M210,270 Q240,310 270,270" stroke="#991B1B" stroke-width="6" fill="#FCA5A5" stroke-linecap="round"/>`;
      break;
    case 'sad':
      brows = `<path d="M150,160 Q180,175 210,175" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
               <path d="M270,175 Q300,175 330,160" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      eyes = `<ellipse cx="185" cy="200" rx="14" ry="10" fill="#1F2937"/><circle cx="188" cy="197" r="4" fill="#FFFFFF"/>
              <ellipse cx="295" cy="200" rx="14" ry="10" fill="#1F2937"/><circle cx="298" cy="197" r="4" fill="#FFFFFF"/>`;
      mouth = `<path d="M215,290 Q240,265 265,290" stroke="#991B1B" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      break;
    case 'angry':
      brows = `<path d="M150,160 L210,185" stroke="#1F2937" stroke-width="7" fill="none" stroke-linecap="round"/>
               <path d="M270,185 L330,160" stroke="#1F2937" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      eyes = `<ellipse cx="185" cy="202" rx="14" ry="12" fill="#1F2937"/><circle cx="187" cy="200" r="3" fill="#FFFFFF"/>
              <ellipse cx="295" cy="202" rx="14" ry="12" fill="#1F2937"/><circle cx="297" cy="200" r="3" fill="#FFFFFF"/>`;
      mouth = `<path d="M215,280 L265,275" stroke="#7F1D1D" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      break;
    case 'shocked':
      brows = `<path d="M150,150 Q180,140 210,150" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
               <path d="M270,150 Q300,140 330,150" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      eyes = `<circle cx="185" cy="195" r="18" fill="#1F2937"/><circle cx="189" cy="191" r="6" fill="#FFFFFF"/>
              <circle cx="295" cy="195" r="18" fill="#1F2937"/><circle cx="299" cy="191" r="6" fill="#FFFFFF"/>`;
      mouth = `<ellipse cx="240" cy="285" rx="15" ry="22" fill="#7F1D1D"/>`;
      break;
    case 'worried':
      brows = `<path d="M155,160 Q185,170 210,162" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
               <path d="M270,162 Q295,170 325,160" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      eyes = `<ellipse cx="185" cy="198" rx="15" ry="14" fill="#1F2937"/><circle cx="189" cy="194" r="5" fill="#FFFFFF"/>
              <ellipse cx="295" cy="198" rx="15" ry="14" fill="#1F2937"/><circle cx="299" cy="194" r="5" fill="#FFFFFF"/>`;
      mouth = `<path d="M220,285 Q240,275 260,288" stroke="#991B1B" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      break;
    case 'neutral':
    default:
      brows = `<path d="M155,165 Q185,160 210,165" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>
               <path d="M270,165 Q295,160 325,165" stroke="#1F2937" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      eyes = `<ellipse cx="185" cy="198" rx="14" ry="12" fill="#1F2937"/><circle cx="188" cy="195" r="4" fill="#FFFFFF"/>
              <ellipse cx="295" cy="198" rx="14" ry="12" fill="#1F2937"/><circle cx="298" cy="195" r="4" fill="#FFFFFF"/>`;
      mouth = `<line x1="220" y1="280" x2="260" y2="280" stroke="#991B1B" stroke-width="5" stroke-linecap="round"/>`;
      break;
  }

  return { brows, eyes, mouth };
}

// Generate Maya (Survivor Lead)
function generateMaya(exp) {
  const { brows, eyes, mouth } = getHumanFaceDetails('maya', exp);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <!-- Background circle portrait -->
  <rect width="480" height="480" rx="32" fill="url(#bgGrad)"/>
  <!-- Jacket Shoulders -->
  <path d="M60,480 L160,360 L320,360 L420,480 Z" fill="#065F46"/>
  <path d="M190,360 L240,430 L290,360 Z" fill="#D97706"/>
  <!-- Neck -->
  <rect x="215" y="300" width="50" height="70" fill="#E2A77A"/>
  <!-- Head Base -->
  <ellipse cx="240" cy="220" rx="80" ry="100" fill="#F0B78C"/>
  <!-- Ponytail Hair Backing -->
  <path d="M150,180 Q100,100 120,30 Q220,50 330,120 Z" fill="#1C1917"/>
  <path d="M340,160 Q400,220 380,320 Q350,280 340,220 Z" fill="#1C1917"/>
  <!-- Hair Front Bangs -->
  <path d="M150,170 Q240,110 330,170 Q300,140 240,130 Q180,140 150,170 Z" fill="#292524"/>
  <!-- Ears -->
  <circle cx="160" cy="220" r="14" fill="#E2A77A"/>
  <circle cx="320" cy="220" r="14" fill="#E2A77A"/>
  <!-- Face Details -->
  ${brows}
  ${eyes}
  <!-- Nose -->
  <path d="M240,215 L235,245 L248,248" stroke="#D97706" stroke-width="4" fill="none" stroke-linecap="round"/>
  ${mouth}
</svg>`;
}

// Generate Elias (Experienced Engineer)
function generateElias(exp) {
  const { brows, eyes, mouth } = getHumanFaceDetails('elias', exp);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <linearGradient id="eliasBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#262626"/>
      <stop offset="100%" stop-color="#171717"/>
    </linearGradient>
  </defs>
  <rect width="480" height="480" rx="32" fill="url(#eliasBg)"/>
  <!-- Heavy Engineer Vest -->
  <path d="M50,480 L150,350 L330,350 L430,480 Z" fill="#78350F"/>
  <rect x="220" y="350" width="40" height="130" fill="#B45309"/>
  <!-- Rugged Neck -->
  <rect x="210" y="290" width="60" height="70" fill="#D49B74"/>
  <!-- Head Base -->
  <polygon points="150,170 330,170 310,310 170,310" fill="#DF9F76"/>
  <!-- Graying Hair & Thick Beard -->
  <path d="M150,170 Q240,100 330,170 Q350,140 330,120 Q240,80 150,120 Z" fill="#64748B"/>
  <path d="M165,240 Q160,330 240,350 Q320,330 315,240 Q280,280 240,280 Q200,280 165,240 Z" fill="#475569"/>
  <!-- Face Details -->
  ${brows}
  ${eyes}
  <!-- Broad Nose -->
  <path d="M240,210 L233,245 L247,248" stroke="#B45309" stroke-width="5" fill="none" stroke-linecap="round"/>
  ${mouth}
</svg>`;
}

// Generate Dr. Lena (Scientist)
function generateLena(exp) {
  const { brows, eyes, mouth } = getHumanFaceDetails('lena', exp);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <linearGradient id="lenaBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F2D3A"/>
      <stop offset="100%" stop-color="#081820"/>
    </linearGradient>
  </defs>
  <rect width="480" height="480" rx="32" fill="url(#lenaBg)"/>
  <!-- White Lab / Field Coat -->
  <path d="M60,480 L160,350 L320,350 L420,480 Z" fill="#E2E8F0"/>
  <path d="M210,350 L240,410 L270,350 Z" fill="#0284C7"/>
  <!-- Neck -->
  <rect x="220" y="290" width="40" height="70" fill="#F2C4A2"/>
  <!-- Head -->
  <ellipse cx="240" cy="210" rx="75" ry="95" fill="#F8CCA8"/>
  <!-- Short Sleek Dark Bob Haircut -->
  <path d="M145,210 Q140,110 240,100 Q340,110 335,210 Q345,260 330,270 Q320,230 315,190 Q240,150 165,190 Q160,230 150,270 Z" fill="#09090B"/>
  <!-- Lena's Signature Scientific Glasses -->
  <rect x="160" y="180" width="55" height="36" rx="6" stroke="#0284C7" stroke-width="4" fill="none"/>
  <rect x="265" y="180" width="55" height="36" rx="6" stroke="#0284C7" stroke-width="4" fill="none"/>
  <line x1="215" y1="195" x2="265" y2="195" stroke="#0284C7" stroke-width="4"/>
  <!-- Face Details -->
  ${brows}
  ${eyes}
  <!-- Nose -->
  <path d="M240,210 L237,240 L245,242" stroke="#D97706" stroke-width="3" fill="none"/>
  ${mouth}
</svg>`;
}

// Generate Noah (Young Survivor)
function generateNoah(exp) {
  const { brows, eyes, mouth } = getHumanFaceDetails('noah', exp);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <linearGradient id="noahBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="480" height="480" rx="32" fill="url(#noahBg)"/>
  <!-- Hooded Survivor Jacket -->
  <path d="M60,480 L150,360 L330,360 L420,480 Z" fill="#9A3412"/>
  <path d="M160,340 Q240,380 320,340 L310,390 Q240,410 170,390 Z" fill="#C2410C"/>
  <!-- Neck -->
  <rect x="220" y="290" width="40" height="60" fill="#FCD34D"/>
  <!-- Head -->
  <ellipse cx="240" cy="215" rx="72" ry="90" fill="#FDE68A"/>
  <!-- Tousled Amber Hair -->
  <path d="M150,180 Q140,110 240,90 Q340,110 330,180 Q310,130 240,120 Q170,130 150,180 Z" fill="#B45309"/>
  <!-- Freckles -->
  <circle cx="200" cy="230" r="2" fill="#92400E"/>
  <circle cx="210" cy="235" r="2" fill="#92400E"/>
  <circle cx="270" cy="235" r="2" fill="#92400E"/>
  <circle cx="280" cy="230" r="2" fill="#92400E"/>
  <!-- Face Details -->
  ${brows}
  ${eyes}
  <!-- Nose -->
  <circle cx="240" cy="235" r="5" fill="#D97706"/>
  ${mouth}
</svg>`;
}

// Generate Commander Adrian (Security Leader)
function generateAdrian(exp) {
  const { brows, eyes, mouth } = getHumanFaceDetails('adrian', exp);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <linearGradient id="adrianBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="480" height="480" rx="32" fill="url(#adrianBg)"/>
  <!-- Tactical Security Uniform with Steel Epaulets -->
  <path d="M50,480 L140,340 L340,340 L430,480 Z" fill="#0F172A"/>
  <rect x="120" y="340" width="50" height="20" fill="#64748B"/>
  <rect x="310" y="340" width="50" height="20" fill="#64748B"/>
  <!-- Broad Neck -->
  <rect x="200" y="280" width="80" height="70" fill="#D4976A"/>
  <!-- Chiseled Square Jaw -->
  <polygon points="160,180 320,180 300,310 180,310" fill="#E2A275"/>
  <!-- Military Buzz Cut -->
  <path d="M160,180 Q240,110 320,180 L320,150 Q240,100 160,150 Z" fill="#27272A"/>
  <!-- Scar over left eyebrow -->
  <line x1="170" y1="150" x2="190" y2="180" stroke="#991B1B" stroke-width="3"/>
  <!-- Face Details -->
  ${brows}
  ${eyes}
  <!-- Nose -->
  <path d="M240,205 L232,245 L248,248" stroke="#9A3412" stroke-width="5" fill="none"/>
  ${mouth}
</svg>`;
}

// Generate ORI (Companion Robot)
function generateORI(exp) {
  let eyeShape = '';
  let color = '#38BDF8'; // default friendly cyan

  switch (exp) {
    case 'happy':
      color = '#10B981'; // Green
      eyeShape = `<path d="M190,230 Q240,190 290,230" stroke="${color}" stroke-width="18" fill="none" stroke-linecap="round"/>`;
      break;
    case 'sad':
      color = '#64748B'; // Muted Slate
      eyeShape = `<path d="M190,240 Q240,270 290,240" stroke="${color}" stroke-width="16" fill="none" stroke-linecap="round"/>`;
      break;
    case 'angry':
      color = '#EF4444'; // Red
      eyeShape = `<polygon points="170,205 310,235 310,250 170,225" fill="${color}"/>`;
      break;
    case 'shocked':
      color = '#F59E0B'; // Amber
      eyeShape = `<circle cx="240" cy="235" r="45" fill="${color}"/><circle cx="240" cy="235" r="25" fill="#0F172A"/>`;
      break;
    case 'worried':
      color = '#F59E0B';
      eyeShape = `<ellipse cx="205" cy="235" rx="20" ry="16" fill="${color}"/><ellipse cx="275" cy="235" rx="20" ry="16" fill="${color}"/>`;
      break;
    case 'neutral':
    default:
      color = '#38BDF8';
      eyeShape = `<ellipse cx="205" cy="235" rx="24" ry="24" fill="${color}"/><ellipse cx="275" cy="235" rx="24" ry="24" fill="${color}"/>`;
      break;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <radialGradient id="oriGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="480" height="480" rx="32" fill="#090D16"/>
  <!-- Ambient Visor Glow -->
  <circle cx="240" cy="235" r="140" fill="url(#oriGlow)"/>
  <!-- Floating Spherical Chassis -->
  <circle cx="240" cy="240" r="110" fill="#1E293B" stroke="#475569" stroke-width="6"/>
  <!-- Upper Antenna Fin -->
  <polygon points="230,130 250,130 240,60" fill="#38BDF8"/>
  <circle cx="240" cy="60" r="8" fill="#F8FAFC"/>
  <!-- Side Thruster Pods -->
  <rect x="100" y="210" width="30" height="60" rx="10" fill="#334155"/>
  <rect x="350" y="210" width="30" height="60" rx="10" fill="#334155"/>
  <!-- Dark Visor Screen -->
  <rect x="160" y="180" width="160" height="110" rx="24" fill="#020617" stroke="#334155" stroke-width="4"/>
  <!-- Optical Eye Expression -->
  ${eyeShape}
  <!-- Speaker Mesh Grille -->
  <line x1="220" y1="315" x2="260" y2="315" stroke="#64748B" stroke-width="4" stroke-linecap="round"/>
</svg>`;
}

const CHARACTERS = {
  maya: generateMaya,
  elias: generateElias,
  lena: generateLena,
  noah: generateNoah,
  adrian: generateAdrian,
  ori: generateORI,
};

let count = 0;
for (const [charName, generator] of Object.entries(CHARACTERS)) {
  for (const exp of EXPRESSIONS) {
    const filename = `${charName}-${exp}.svg`;
    const svgContent = generator(exp);
    fs.writeFileSync(path.join(charDir, filename), svgContent.trim(), 'utf8');
    count++;
  }
}

console.log(`Generated all ${count} character portrait assets in ${charDir}`);
