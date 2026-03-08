import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

// Approximate Mercator projection: lon/lat → SVG x/y on 2000×1000 viewBox
function proj(lon: number, lat: number): [number, number] {
  const x = ((lon + 180) / 360) * 2000;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = 500 - (mercN / Math.PI) * 500;
  return [x, y];
}

function pt(lon: number, lat: number) {
  const [x, y] = proj(lon, lat);
  return `${x.toFixed(0)},${y.toFixed(0)}`;
}

// More realistic country/region polygons (simplified but recognizable)
const continents = {
  // North America
  northAmerica: `M ${pt(-168,72)} L ${pt(-141,74)} ${pt(-120,75)} ${pt(-95,72)} ${pt(-75,62)} ${pt(-58,52)} ${pt(-65,44)} ${pt(-70,42)} ${pt(-80,38)} ${pt(-82,30)} ${pt(-88,28)} ${pt(-90,22)} ${pt(-97,18)} ${pt(-105,20)} ${pt(-107,28)} ${pt(-117,32)} ${pt(-122,37)} ${pt(-124,42)} ${pt(-124,48)} ${pt(-130,54)} ${pt(-140,58)} ${pt(-150,60)} ${pt(-160,62)} ${pt(-168,65)} Z`,
  // South America  
  southAmerica: `M ${pt(-80,12)} L ${pt(-75,8)} ${pt(-65,4)} ${pt(-55,2)} ${pt(-48,0)} ${pt(-42,-2)} ${pt(-38,-8)} ${pt(-35,-12)} ${pt(-38,-18)} ${pt(-42,-22)} ${pt(-48,-26)} ${pt(-52,-30)} ${pt(-56,-34)} ${pt(-58,-38)} ${pt(-62,-42)} ${pt(-65,-48)} ${pt(-68,-52)} ${pt(-72,-54)} ${pt(-75,-50)} ${pt(-72,-44)} ${pt(-70,-38)} ${pt(-68,-32)} ${pt(-72,-26)} ${pt(-76,-18)} ${pt(-80,-6)} ${pt(-78,2)} ${pt(-82,8)} Z`,
  // Europe
  europe: `M ${pt(-10,36)} L ${pt(-8,42)} ${pt(-5,44)} ${pt(0,48)} ${pt(3,50)} ${pt(6,52)} ${pt(10,54)} ${pt(14,55)} ${pt(18,56)} ${pt(22,55)} ${pt(25,58)} ${pt(28,60)} ${pt(30,62)} ${pt(32,65)} ${pt(28,68)} ${pt(22,70)} ${pt(15,72)} ${pt(8,71)} ${pt(2,62)} ${pt(-4,58)} ${pt(-8,52)} ${pt(-10,48)} ${pt(-12,42)} Z`,
  // Scandinavia
  scandinavia: `M ${pt(5,58)} L ${pt(8,62)} ${pt(12,64)} ${pt(15,68)} ${pt(18,70)} ${pt(22,72)} ${pt(28,71)} ${pt(32,68)} ${pt(30,64)} ${pt(26,60)} ${pt(20,58)} ${pt(14,57)} ${pt(10,56)} Z`,
  // UK
  uk: `M ${pt(-6,50)} L ${pt(-4,52)} ${pt(-2,54)} ${pt(0,56)} ${pt(2,58)} ${pt(0,59)} ${pt(-2,58)} ${pt(-4,57)} ${pt(-6,56)} ${pt(-8,54)} ${pt(-7,52)} Z`,
  ireland: `M ${pt(-10,51)} L ${pt(-8,52)} ${pt(-6,54)} ${pt(-8,55)} ${pt(-10,54)} ${pt(-11,52)} Z`,
  // Africa
  africa: `M ${pt(-18,14)} L ${pt(-12,16)} ${pt(-5,36)} ${pt(0,36)} ${pt(10,36)} ${pt(15,32)} ${pt(22,32)} ${pt(30,30)} ${pt(35,28)} ${pt(40,22)} ${pt(42,16)} ${pt(48,12)} ${pt(50,8)} ${pt(50,2)} ${pt(48,-4)} ${pt(42,-12)} ${pt(38,-18)} ${pt(35,-24)} ${pt(30,-30)} ${pt(28,-34)} ${pt(22,-34)} ${pt(18,-28)} ${pt(15,-18)} ${pt(10,-8)} ${pt(5,0)} ${pt(0,4)} ${pt(-5,8)} ${pt(-12,10)} Z`,
  // Middle East
  middleEast: `M ${pt(30,38)} L ${pt(35,36)} ${pt(40,34)} ${pt(45,32)} ${pt(48,30)} ${pt(52,28)} ${pt(55,24)} ${pt(56,20)} ${pt(58,18)} ${pt(60,24)} ${pt(55,28)} ${pt(50,30)} ${pt(48,32)} ${pt(45,36)} ${pt(42,38)} ${pt(38,40)} ${pt(34,40)} Z`,
  arabianPeninsula: `M ${pt(35,28)} L ${pt(40,26)} ${pt(45,24)} ${pt(50,22)} ${pt(55,20)} ${pt(56,16)} ${pt(55,14)} ${pt(50,12)} ${pt(45,14)} ${pt(42,16)} ${pt(38,18)} ${pt(36,22)} ${pt(34,26)} Z`,
  // India
  india: `M ${pt(68,36)} L ${pt(72,34)} ${pt(76,32)} ${pt(80,30)} ${pt(84,28)} ${pt(88,26)} ${pt(90,22)} ${pt(92,20)} ${pt(92,16)} ${pt(88,12)} ${pt(84,10)} ${pt(80,8)} ${pt(78,10)} ${pt(76,14)} ${pt(74,18)} ${pt(72,22)} ${pt(70,26)} ${pt(68,30)} Z`,
  // Central Asia / Russia
  russia: `M ${pt(30,72)} L ${pt(50,74)} ${pt(70,76)} ${pt(90,78)} ${pt(110,76)} ${pt(130,74)} ${pt(150,70)} ${pt(165,68)} ${pt(175,66)} ${pt(180,64)} ${pt(180,50)} ${pt(170,52)} ${pt(160,48)} ${pt(140,46)} ${pt(120,44)} ${pt(100,42)} ${pt(80,40)} ${pt(60,42)} ${pt(40,44)} ${pt(35,50)} ${pt(32,55)} ${pt(30,60)} ${pt(28,65)} Z`,
  // China / East Asia
  china: `M ${pt(75,42)} L ${pt(80,44)} ${pt(88,46)} ${pt(95,48)} ${pt(102,46)} ${pt(108,44)} ${pt(115,42)} ${pt(120,40)} ${pt(125,38)} ${pt(128,34)} ${pt(125,30)} ${pt(122,26)} ${pt(118,22)} ${pt(112,20)} ${pt(108,22)} ${pt(102,24)} ${pt(98,28)} ${pt(92,32)} ${pt(88,34)} ${pt(82,38)} Z`,
  // Japan
  japan: `M ${pt(130,32)} L ${pt(132,34)} ${pt(134,36)} ${pt(136,38)} ${pt(140,40)} ${pt(142,42)} ${pt(144,44)} ${pt(142,46)} ${pt(140,44)} ${pt(138,42)} ${pt(136,40)} ${pt(134,38)} ${pt(132,36)} ${pt(130,34)} Z`,
  // Southeast Asia
  seAsia: `M ${pt(98,18)} L ${pt(102,16)} ${pt(106,14)} ${pt(108,10)} ${pt(106,6)} ${pt(104,2)} ${pt(100,0)} ${pt(96,2)} ${pt(94,6)} ${pt(96,10)} ${pt(98,14)} Z`,
  // Indonesia
  indonesia: `M ${pt(96,-2)} L ${pt(102,-4)} ${pt(108,-6)} ${pt(114,-6)} ${pt(120,-4)} ${pt(126,-4)} ${pt(132,-2)} ${pt(138,-4)} ${pt(140,-6)} ${pt(138,-8)} ${pt(132,-8)} ${pt(126,-8)} ${pt(118,-8)} ${pt(110,-8)} ${pt(104,-6)} ${pt(98,-4)} Z`,
  // Australia
  australia: `M ${pt(114,-14)} L ${pt(120,-16)} ${pt(128,-18)} ${pt(134,-20)} ${pt(140,-22)} ${pt(146,-24)} ${pt(150,-26)} ${pt(152,-30)} ${pt(154,-34)} ${pt(152,-38)} ${pt(148,-40)} ${pt(144,-38)} ${pt(138,-36)} ${pt(134,-34)} ${pt(128,-32)} ${pt(124,-28)} ${pt(118,-24)} ${pt(114,-20)} ${pt(112,-16)} Z`,
  // New Zealand
  newZealand: `M ${pt(166,-36)} L ${pt(168,-38)} ${pt(172,-40)} ${pt(176,-42)} ${pt(178,-44)} ${pt(176,-46)} ${pt(174,-48)} ${pt(172,-46)} ${pt(170,-44)} ${pt(168,-42)} ${pt(166,-40)} Z`,
  // Greenland
  greenland: `M ${pt(-55,60)} L ${pt(-48,62)} ${pt(-40,66)} ${pt(-28,72)} ${pt(-20,76)} ${pt(-18,80)} ${pt(-22,82)} ${pt(-30,84)} ${pt(-42,82)} ${pt(-52,78)} ${pt(-58,72)} ${pt(-60,66)} Z`,
};

// BIM hotspot cities with real coordinates
const bimCities = [
  { name: "London", lon: -0.12, lat: 51.5, size: 4, bim: "92%", active: true },
  { name: "Singapore", lon: 103.8, lat: 1.35, size: 3.5, bim: "89%" },
  { name: "Dubai", lon: 55.3, lat: 25.2, size: 4, bim: "85%", active: true },
  { name: "New York", lon: -74, lat: 40.7, size: 3.5, bim: "82%" },
  { name: "Stockholm", lon: 18, lat: 59.3, size: 2.5, bim: "80%", active: true },
  { name: "Hong Kong", lon: 114.2, lat: 22.3, size: 3, bim: "78%" },
  { name: "Berlin", lon: 13.4, lat: 52.5, size: 3, bim: "76%", active: true },
  { name: "Tokyo", lon: 139.7, lat: 35.7, size: 3, bim: "74%" },
  { name: "Sydney", lon: 151.2, lat: -33.9, size: 3, bim: "72%" },
  { name: "Seoul", lon: 127, lat: 37.6, size: 2.5, bim: "70%" },
  { name: "Paris", lon: 2.35, lat: 48.9, size: 3, bim: "75%", active: true },
  { name: "Amsterdam", lon: 4.9, lat: 52.4, size: 2.5, bim: "74%", active: true },
  { name: "Toronto", lon: -79.4, lat: 43.7, size: 2.5, bim: "68%" },
  { name: "Chicago", lon: -87.6, lat: 41.9, size: 2.5, bim: "66%" },
  { name: "LA", lon: -118.2, lat: 34, size: 2.5, bim: "64%" },
  { name: "Mumbai", lon: 72.9, lat: 19, size: 3.5, bim: "58%", active: true, wasi: true },
  { name: "Delhi", lon: 77.2, lat: 28.6, size: 3, bim: "55%", active: true, wasi: true },
  { name: "Nagpur", lon: 79.1, lat: 21.1, size: 4.5, bim: "HQ", active: true, wasi: true, hq: true },
  { name: "Pune", lon: 73.9, lat: 18.5, size: 2.5, bim: "52%", active: true, wasi: true },
  { name: "Hyderabad", lon: 78.5, lat: 17.4, size: 2.5, bim: "50%", active: true, wasi: true },
  { name: "Riyadh", lon: 46.7, lat: 24.7, size: 3, bim: "72%", active: true },
  { name: "Abu Dhabi", lon: 54.4, lat: 24.5, size: 2.5, bim: "78%", active: true },
  { name: "Doha", lon: 51.5, lat: 25.3, size: 2.5, bim: "70%", active: true },
  { name: "Muscat", lon: 58.5, lat: 23.6, size: 2, bim: "55%", active: true },
  { name: "Shanghai", lon: 121.5, lat: 31.2, size: 3, bim: "62%" },
  { name: "Melbourne", lon: 145, lat: -37.8, size: 2.5, bim: "68%" },
  { name: "Oslo", lon: 10.75, lat: 59.9, size: 2, bim: "78%" },
  { name: "Helsinki", lon: 24.9, lat: 60.2, size: 2, bim: "76%" },
];

const wasiPins = [
  { name: "INDIA (HQ)", lon: 79, lat: 21, projects: "15+", flag: "🇮🇳" },
  { name: "MIDDLE EAST", lon: 54, lat: 25, projects: "12+", flag: "🇦🇪" },
  { name: "WESTERN EUROPE", lon: 2, lat: 50, projects: "5+", flag: "🇬🇧" },
];

export default function WorldMap() {
  return (
    <motion.div {...fadeUp} className="glass rounded-2xl p-4 md:p-8 relative overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto overflow-x-auto">
        <svg viewBox="0 0 2000 1000" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.4" fill="hsl(var(--muted-foreground))" opacity="0.12" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
            {/* Ocean gradient */}
            <radialGradient id="ocean" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="hsl(var(--background))" />
              <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.15" />
            </radialGradient>
          </defs>

          {/* Ocean background */}
          <rect width="2000" height="1000" fill="url(#ocean)" rx="16" />
          <rect width="2000" height="1000" fill="url(#mapDots)" />

          {/* Latitude lines */}
          {[-60, -40, -20, 0, 20, 40, 60].map((lat) => {
            const [, y] = proj(0, lat);
            return (
              <g key={lat}>
                <line x1="0" y1={y} x2="2000" y2={y} stroke="hsl(var(--border))" strokeWidth="0.4" strokeDasharray="6,12" opacity="0.2" />
                {lat === 0 && <text x="12" y={y + 4} fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.25">Equator</text>}
              </g>
            );
          })}
          {/* Longitude lines */}
          {[-120, -60, 0, 60, 120, 180].map((lon) => {
            const [x] = proj(lon, 0);
            return <line key={lon} x1={x} y1="30" x2={x} y2="970" stroke="hsl(var(--border))" strokeWidth="0.4" strokeDasharray="6,12" opacity="0.15" />;
          })}

          {/* ===== CONTINENTS ===== */}
          {/* Non-active continents (dimmed) */}
          <path d={continents.northAmerica} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.12" />
          <path d={continents.southAmerica} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.12" />
          <path d={continents.africa} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.12" />
          <path d={continents.russia} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.08" />
          <path d={continents.china} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.1" />
          <path d={continents.japan} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.12" />
          <path d={continents.seAsia} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.1" />
          <path d={continents.indonesia} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.1" />
          <path d={continents.australia} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.12" />
          <path d={continents.newZealand} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.1" />
          <path d={continents.greenland} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.08" />

          {/* HIGHLIGHTED: Europe */}
          <path d={continents.europe} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.18" filter="url(#softGlow)" />
          <path d={continents.scandinavia} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.12" />
          <path d={continents.uk} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.2" />
          <path d={continents.ireland} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.15" />

          {/* HIGHLIGHTED: Middle East */}
          <path d={continents.middleEast} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.22" filter="url(#softGlow)" />
          <path d={continents.arabianPeninsula} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.25" filter="url(#softGlow)" />

          {/* HIGHLIGHTED: India */}
          <path d={continents.india} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" filter="url(#softGlow)" />

          {/* ===== CONNECTION ARCS ===== */}
          {(() => {
            const [ix, iy] = proj(79, 21);
            const [mx, my] = proj(54, 25);
            const [ex, ey] = proj(2, 50);
            return (
              <>
                <path d={`M ${ix},${iy} Q ${(ix + mx) / 2},${Math.min(iy, my) - 60} ${mx},${my}`} fill="none" stroke="url(#arcGrad)" strokeWidth="2.5" strokeDasharray="10,6" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" values="0;-32" dur="2s" repeatCount="indefinite" />
                </path>
                <path d={`M ${ix},${iy} Q ${(ix + ex) / 2},${Math.min(iy, ey) - 120} ${ex},${ey}`} fill="none" stroke="url(#arcGrad)" strokeWidth="2" strokeDasharray="10,6" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;-32" dur="3s" repeatCount="indefinite" />
                </path>
                <path d={`M ${mx},${my} Q ${(mx + ex) / 2},${Math.min(my, ey) - 80} ${ex},${ey}`} fill="none" stroke="url(#arcGrad)" strokeWidth="1.8" strokeDasharray="10,6" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;-32" dur="2.5s" repeatCount="indefinite" />
                </path>
              </>
            );
          })()}

          {/* ===== BIM CITY DOTS ===== */}
          {bimCities.map((city) => {
            const [cx, cy] = proj(city.lon, city.lat);
            const isWasi = (city as any).wasi;
            const isHq = (city as any).hq;
            return (
              <g key={city.name}>
                {isHq && (
                  <circle cx={cx} cy={cy} r="20" fill="hsl(var(--primary))" opacity="0.08" filter="url(#softGlow)">
                    <animate attributeName="r" values="20;32;20" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.08;0.02;0.08" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={cx} cy={cy} r={city.size} fill={isWasi || city.active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} opacity={isHq ? 0.95 : isWasi ? 0.7 : city.active ? 0.55 : 0.3} />
                {isHq && <circle cx={cx} cy={cy} r={city.size * 0.45} fill="hsl(var(--primary-foreground))" />}
                <text
                  x={cx + (city.size + 4)}
                  y={cy + 1}
                  fill="hsl(var(--muted-foreground))"
                  fontSize={isHq ? "12" : isWasi ? "10" : "9"}
                  fontWeight={isHq ? "800" : isWasi ? "600" : "400"}
                  opacity={isHq ? 0.9 : isWasi ? 0.7 : 0.45}
                  dominantBaseline="middle"
                >
                  {city.name}
                </text>
                {isHq && (
                  <text x={cx + city.size + 4} y={cy + 14} fill="hsl(var(--primary))" fontSize="9" fontWeight="700" opacity="0.8">
                    ★ Headquarters
                  </text>
                )}
              </g>
            );
          })}

          {/* ===== WASI REGION LABELS ===== */}
          {wasiPins.map((pin, i) => {
            const [cx, cy] = proj(pin.lon, pin.lat);
            const labelY = pin.name === "WESTERN EUROPE" ? cy - 45 : cy + 35;
            const boxW = pin.name.length * 9 + 50;
            return (
              <g key={i} filter="url(#glow)">
                {/* Pulsing ring */}
                <circle cx={cx} cy={cy} r="12" fill="hsl(var(--primary))" opacity="0.15">
                  <animate attributeName="r" values="12;22;12" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.03;0.15" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                </circle>
                {/* Label box */}
                <rect x={cx - boxW / 2} y={labelY - 14} width={boxW} height="30" rx="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.92" />
                <text x={cx} y={labelY} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="800">
                  {pin.flag} {pin.name}
                </text>
                <text x={cx} y={labelY + 12} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="700">
                  {pin.projects} Projects
                </text>
                {/* Connector line */}
                <line x1={cx} y1={cy} x2={cx} y2={pin.name === "WESTERN EUROPE" ? labelY + 16 : labelY - 14} stroke="hsl(var(--primary))" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.3" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-primary opacity-80" /> WASI Active Regions
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground opacity-40" /> Global BIM Hotspots
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary opacity-40 animate-pulse" /> Expanding Markets
        </div>
      </div>
    </motion.div>
  );
}
