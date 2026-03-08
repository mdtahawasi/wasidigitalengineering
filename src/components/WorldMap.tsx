import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

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

const continents = {
  northAmerica: `M ${pt(-168,72)} L ${pt(-141,74)} ${pt(-120,75)} ${pt(-95,72)} ${pt(-75,62)} ${pt(-58,52)} ${pt(-65,44)} ${pt(-70,42)} ${pt(-80,38)} ${pt(-82,30)} ${pt(-88,28)} ${pt(-90,22)} ${pt(-97,18)} ${pt(-105,20)} ${pt(-107,28)} ${pt(-117,32)} ${pt(-122,37)} ${pt(-124,42)} ${pt(-124,48)} ${pt(-130,54)} ${pt(-140,58)} ${pt(-150,60)} ${pt(-160,62)} ${pt(-168,65)} Z`,
  southAmerica: `M ${pt(-80,12)} L ${pt(-75,8)} ${pt(-65,4)} ${pt(-55,2)} ${pt(-48,0)} ${pt(-42,-2)} ${pt(-38,-8)} ${pt(-35,-12)} ${pt(-38,-18)} ${pt(-42,-22)} ${pt(-48,-26)} ${pt(-52,-30)} ${pt(-56,-34)} ${pt(-58,-38)} ${pt(-62,-42)} ${pt(-65,-48)} ${pt(-68,-52)} ${pt(-72,-54)} ${pt(-75,-50)} ${pt(-72,-44)} ${pt(-70,-38)} ${pt(-68,-32)} ${pt(-72,-26)} ${pt(-76,-18)} ${pt(-80,-6)} ${pt(-78,2)} ${pt(-82,8)} Z`,
  europe: `M ${pt(-10,36)} L ${pt(-8,42)} ${pt(-5,44)} ${pt(0,48)} ${pt(3,50)} ${pt(6,52)} ${pt(10,54)} ${pt(14,55)} ${pt(18,56)} ${pt(22,55)} ${pt(25,58)} ${pt(28,60)} ${pt(30,62)} ${pt(32,65)} ${pt(28,68)} ${pt(22,70)} ${pt(15,72)} ${pt(8,71)} ${pt(2,62)} ${pt(-4,58)} ${pt(-8,52)} ${pt(-10,48)} ${pt(-12,42)} Z`,
  scandinavia: `M ${pt(5,58)} L ${pt(8,62)} ${pt(12,64)} ${pt(15,68)} ${pt(18,70)} ${pt(22,72)} ${pt(28,71)} ${pt(32,68)} ${pt(30,64)} ${pt(26,60)} ${pt(20,58)} ${pt(14,57)} ${pt(10,56)} Z`,
  uk: `M ${pt(-6,50)} L ${pt(-4,52)} ${pt(-2,54)} ${pt(0,56)} ${pt(2,58)} ${pt(0,59)} ${pt(-2,58)} ${pt(-4,57)} ${pt(-6,56)} ${pt(-8,54)} ${pt(-7,52)} Z`,
  ireland: `M ${pt(-10,51)} L ${pt(-8,52)} ${pt(-6,54)} ${pt(-8,55)} ${pt(-10,54)} ${pt(-11,52)} Z`,
  africa: `M ${pt(-18,14)} L ${pt(-12,16)} ${pt(-5,36)} ${pt(0,36)} ${pt(10,36)} ${pt(15,32)} ${pt(22,32)} ${pt(30,30)} ${pt(35,28)} ${pt(40,22)} ${pt(42,16)} ${pt(48,12)} ${pt(50,8)} ${pt(50,2)} ${pt(48,-4)} ${pt(42,-12)} ${pt(38,-18)} ${pt(35,-24)} ${pt(30,-30)} ${pt(28,-34)} ${pt(22,-34)} ${pt(18,-28)} ${pt(15,-18)} ${pt(10,-8)} ${pt(5,0)} ${pt(0,4)} ${pt(-5,8)} ${pt(-12,10)} Z`,
  middleEast: `M ${pt(30,38)} L ${pt(35,36)} ${pt(40,34)} ${pt(45,32)} ${pt(48,30)} ${pt(52,28)} ${pt(55,24)} ${pt(56,20)} ${pt(58,18)} ${pt(60,24)} ${pt(55,28)} ${pt(50,30)} ${pt(48,32)} ${pt(45,36)} ${pt(42,38)} ${pt(38,40)} ${pt(34,40)} Z`,
  arabianPeninsula: `M ${pt(35,28)} L ${pt(40,26)} ${pt(45,24)} ${pt(50,22)} ${pt(55,20)} ${pt(56,16)} ${pt(55,14)} ${pt(50,12)} ${pt(45,14)} ${pt(42,16)} ${pt(38,18)} ${pt(36,22)} ${pt(34,26)} Z`,
  india: `M ${pt(68,36)} L ${pt(72,34)} ${pt(76,32)} ${pt(80,30)} ${pt(84,28)} ${pt(88,26)} ${pt(90,22)} ${pt(92,20)} ${pt(92,16)} ${pt(88,12)} ${pt(84,10)} ${pt(80,8)} ${pt(78,10)} ${pt(76,14)} ${pt(74,18)} ${pt(72,22)} ${pt(70,26)} ${pt(68,30)} Z`,
  russia: `M ${pt(30,72)} L ${pt(50,74)} ${pt(70,76)} ${pt(90,78)} ${pt(110,76)} ${pt(130,74)} ${pt(150,70)} ${pt(165,68)} ${pt(175,66)} ${pt(180,64)} ${pt(180,50)} ${pt(170,52)} ${pt(160,48)} ${pt(140,46)} ${pt(120,44)} ${pt(100,42)} ${pt(80,40)} ${pt(60,42)} ${pt(40,44)} ${pt(35,50)} ${pt(32,55)} ${pt(30,60)} ${pt(28,65)} Z`,
  china: `M ${pt(75,42)} L ${pt(80,44)} ${pt(88,46)} ${pt(95,48)} ${pt(102,46)} ${pt(108,44)} ${pt(115,42)} ${pt(120,40)} ${pt(125,38)} ${pt(128,34)} ${pt(125,30)} ${pt(122,26)} ${pt(118,22)} ${pt(112,20)} ${pt(108,22)} ${pt(102,24)} ${pt(98,28)} ${pt(92,32)} ${pt(88,34)} ${pt(82,38)} Z`,
  japan: `M ${pt(130,32)} L ${pt(132,34)} ${pt(134,36)} ${pt(136,38)} ${pt(140,40)} ${pt(142,42)} ${pt(144,44)} ${pt(142,46)} ${pt(140,44)} ${pt(138,42)} ${pt(136,40)} ${pt(134,38)} ${pt(132,36)} ${pt(130,34)} Z`,
  seAsia: `M ${pt(98,18)} L ${pt(102,16)} ${pt(106,14)} ${pt(108,10)} ${pt(106,6)} ${pt(104,2)} ${pt(100,0)} ${pt(96,2)} ${pt(94,6)} ${pt(96,10)} ${pt(98,14)} Z`,
  indonesia: `M ${pt(96,-2)} L ${pt(102,-4)} ${pt(108,-6)} ${pt(114,-6)} ${pt(120,-4)} ${pt(126,-4)} ${pt(132,-2)} ${pt(138,-4)} ${pt(140,-6)} ${pt(138,-8)} ${pt(132,-8)} ${pt(126,-8)} ${pt(118,-8)} ${pt(110,-8)} ${pt(104,-6)} ${pt(98,-4)} Z`,
  australia: `M ${pt(114,-14)} L ${pt(120,-16)} ${pt(128,-18)} ${pt(134,-20)} ${pt(140,-22)} ${pt(146,-24)} ${pt(150,-26)} ${pt(152,-30)} ${pt(154,-34)} ${pt(152,-38)} ${pt(148,-40)} ${pt(144,-38)} ${pt(138,-36)} ${pt(134,-34)} ${pt(128,-32)} ${pt(124,-28)} ${pt(118,-24)} ${pt(114,-20)} ${pt(112,-16)} Z`,
  newZealand: `M ${pt(166,-36)} L ${pt(168,-38)} ${pt(172,-40)} ${pt(176,-42)} ${pt(178,-44)} ${pt(176,-46)} ${pt(174,-48)} ${pt(172,-46)} ${pt(170,-44)} ${pt(168,-42)} ${pt(166,-40)} Z`,
  greenland: `M ${pt(-55,60)} L ${pt(-48,62)} ${pt(-40,66)} ${pt(-28,72)} ${pt(-20,76)} ${pt(-18,80)} ${pt(-22,82)} ${pt(-30,84)} ${pt(-42,82)} ${pt(-52,78)} ${pt(-58,72)} ${pt(-60,66)} Z`,
};

type RegionKey = "india" | "middleEast" | "europe" | null;

interface CityData {
  name: string;
  lon: number;
  lat: number;
  size: number;
  bim: string;
  active?: boolean;
  wasi?: boolean;
  hq?: boolean;
  projects?: string;
  type?: string;
  sector?: string;
}

const bimCities: CityData[] = [
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

// Detailed city data for zoomed views
const regionDetails: Record<string, { title: string; flag: string; viewBox: string; cities: CityData[] }> = {
  india: {
    title: "India — WASI Headquarters",
    flag: "🇮🇳",
    viewBox: (() => {
      const [x1, y1] = proj(66, 38);
      const [x2, y2] = proj(98, 6);
      return `${x1} ${y1} ${x2 - x1} ${y2 - y1}`;
    })(),
    cities: [
      { name: "Nagpur (HQ)", lon: 79.1, lat: 21.1, size: 14, bim: "HQ", hq: true, wasi: true, projects: "Main Office", type: "Headquarters", sector: "All Disciplines" },
      { name: "Mumbai", lon: 72.9, lat: 19, size: 10, bim: "58%", wasi: true, projects: "4 Projects", type: "Commercial Hub", sector: "High-Rise, Commercial" },
      { name: "Delhi NCR", lon: 77.2, lat: 28.6, size: 9, bim: "55%", wasi: true, projects: "3 Projects", type: "Govt. & Infra", sector: "Infrastructure, Metro" },
      { name: "Pune", lon: 73.9, lat: 18.5, size: 8, bim: "52%", wasi: true, projects: "2 Projects", type: "IT & Mixed-Use", sector: "IT Parks, Residential" },
      { name: "Hyderabad", lon: 78.5, lat: 17.4, size: 8, bim: "50%", wasi: true, projects: "2 Projects", type: "Pharma & Tech", sector: "Data Centers, Pharma" },
      { name: "Bangalore", lon: 77.6, lat: 13, size: 7, bim: "48%", wasi: true, projects: "2 Projects", type: "Tech City", sector: "IT Campus, Residential" },
      { name: "Chennai", lon: 80.3, lat: 13.1, size: 6, bim: "42%", wasi: true, projects: "1 Project", type: "Industrial", sector: "Manufacturing, Port" },
      { name: "Kolkata", lon: 88.4, lat: 22.6, size: 5, bim: "38%", projects: "Pipeline", type: "Emerging", sector: "Metro, Residential" },
      { name: "Ahmedabad", lon: 72.6, lat: 23, size: 6, bim: "40%", projects: "1 Project", type: "Textile & Smart City", sector: "Smart City, Industrial" },
      { name: "Jaipur", lon: 75.8, lat: 26.9, size: 5, bim: "35%", projects: "Pipeline", type: "Heritage & Tourism", sector: "Hospitality" },
      { name: "Lucknow", lon: 81, lat: 26.8, size: 4, bim: "30%", projects: "Pipeline", type: "Emerging", sector: "Govt. Buildings" },
      { name: "Kochi", lon: 76.3, lat: 10, size: 4, bim: "32%", projects: "Pipeline", type: "Port City", sector: "Marine, Residential" },
    ],
  },
  middleEast: {
    title: "Middle East — GCC Operations",
    flag: "🇦🇪",
    viewBox: (() => {
      const [x1, y1] = proj(30, 38);
      const [x2, y2] = proj(62, 10);
      return `${x1} ${y1} ${x2 - x1} ${y2 - y1}`;
    })(),
    cities: [
      { name: "Dubai", lon: 55.3, lat: 25.2, size: 14, bim: "85%", wasi: true, projects: "5 Projects", type: "Regional HQ", sector: "Towers, Mixed-Use, Hospitality" },
      { name: "Abu Dhabi", lon: 54.4, lat: 24.5, size: 10, bim: "78%", wasi: true, projects: "3 Projects", type: "Capital Projects", sector: "Govt., Cultural, Museums" },
      { name: "Riyadh", lon: 46.7, lat: 24.7, size: 10, bim: "72%", wasi: true, projects: "2 Projects", type: "Vision 2030", sector: "Mega Projects, Giga Cities" },
      { name: "Doha", lon: 51.5, lat: 25.3, size: 8, bim: "70%", wasi: true, projects: "1 Project", type: "World Cup Legacy", sector: "Stadiums, Infrastructure" },
      { name: "Muscat", lon: 58.5, lat: 23.6, size: 6, bim: "55%", wasi: true, projects: "1 Project", type: "Emerging", sector: "Hospitality, Ports" },
      { name: "Jeddah", lon: 39.2, lat: 21.5, size: 8, bim: "65%", projects: "Pipeline", type: "Red Sea Hub", sector: "Jeddah Tower, Coastal" },
      { name: "NEOM", lon: 36.5, lat: 27.5, size: 7, bim: "90%", projects: "Pipeline", type: "Giga Project", sector: "Smart City, The Line" },
      { name: "Kuwait City", lon: 47.9, lat: 29.4, size: 6, bim: "52%", projects: "Pipeline", type: "Oil & Gas", sector: "Industrial, Commercial" },
      { name: "Manama", lon: 50.6, lat: 26.2, size: 5, bim: "50%", projects: "Pipeline", type: "Financial Hub", sector: "Commercial, Residential" },
      { name: "Sharjah", lon: 55.4, lat: 25.4, size: 5, bim: "60%", projects: "Pipeline", type: "Education City", sector: "Education, Residential" },
    ],
  },
  europe: {
    title: "Western Europe — Expanding Market",
    flag: "🇬🇧",
    viewBox: (() => {
      const [x1, y1] = proj(-14, 72);
      const [x2, y2] = proj(34, 36);
      return `${x1} ${y1} ${x2 - x1} ${y2 - y1}`;
    })(),
    cities: [
      { name: "London", lon: -0.12, lat: 51.5, size: 14, bim: "92%", wasi: true, projects: "2 Projects", type: "BIM Level 2 Hub", sector: "Residential, Retrofit" },
      { name: "Berlin", lon: 13.4, lat: 52.5, size: 10, bim: "76%", wasi: true, projects: "1 Project", type: "BIM.DE Standard", sector: "Data Centers" },
      { name: "Paris", lon: 2.35, lat: 48.9, size: 9, bim: "75%", wasi: true, projects: "1 Project", type: "BIM Mandate 2025", sector: "Infrastructure" },
      { name: "Amsterdam", lon: 4.9, lat: 52.4, size: 8, bim: "74%", wasi: true, projects: "1 Project", type: "OpenBIM Leader", sector: "Industrial, Marine" },
      { name: "Stockholm", lon: 18, lat: 59.3, size: 7, bim: "80%", projects: "Pipeline", type: "Nordic BIM", sector: "Sustainability" },
      { name: "Oslo", lon: 10.75, lat: 59.9, size: 6, bim: "78%", projects: "Pipeline", type: "BuildingSMART HQ", sector: "Oil Platforms, Residential" },
      { name: "Helsinki", lon: 24.9, lat: 60.2, size: 6, bim: "76%", projects: "Pipeline", type: "Senate Properties", sector: "Govt. Buildings" },
      { name: "Dublin", lon: -6.3, lat: 53.3, size: 5, bim: "62%", projects: "Pipeline", type: "Tech Hub", sector: "Data Centers, Pharma" },
      { name: "Zurich", lon: 8.5, lat: 47.4, size: 5, bim: "68%", projects: "Pipeline", type: "SIA Standards", sector: "Tunnels, Rail" },
      { name: "Barcelona", lon: 2.2, lat: 41.4, size: 5, bim: "55%", projects: "Pipeline", type: "Smart City", sector: "Urban, Hospitality" },
    ],
  },
};

const wasiPins = [
  { name: "INDIA (HQ)", lon: 79, lat: 21, projects: "15+", flag: "🇮🇳", region: "india" as RegionKey },
  { name: "MIDDLE EAST", lon: 54, lat: 25, projects: "12+", flag: "🇦🇪", region: "middleEast" as RegionKey },
  { name: "WESTERN EUROPE", lon: 2, lat: 50, projects: "5+", flag: "🇬🇧", region: "europe" as RegionKey },
];

export default function WorldMap() {
  const [zoomedRegion, setZoomedRegion] = useState<RegionKey>(null);

  const handleRegionClick = useCallback((region: RegionKey) => {
    setZoomedRegion((prev) => (prev === region ? null : region));
  }, []);

  const zoomData = zoomedRegion ? regionDetails[zoomedRegion] : null;

  return (
    <motion.div {...fadeUp} className="glass rounded-2xl p-4 md:p-8 relative overflow-hidden">
      {/* Instruction hint */}
      <AnimatePresence>
        {!zoomedRegion && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs text-muted-foreground mb-3"
          >
            👆 Click on a <span className="text-primary font-semibold">highlighted region</span> or label to zoom in
          </motion.p>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          {!zoomedRegion ? (
            /* ===== WORLD VIEW ===== */
            <motion.div
              key="world"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="0 0 2000 1000" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.4" fill="hsl(var(--muted-foreground))" opacity="0.12" />
                  </pattern>
                  <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  <filter id="softGlow"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                  </linearGradient>
                  <radialGradient id="ocean" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="hsl(var(--background))" />
                    <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.15" />
                  </radialGradient>
                </defs>

                <rect width="2000" height="1000" fill="url(#ocean)" rx="16" />
                <rect width="2000" height="1000" fill="url(#mapDots)" />

                {/* Grid lines */}
                {[-60, -40, -20, 0, 20, 40, 60].map((lat) => {
                  const [, y] = proj(0, lat);
                  return (
                    <g key={lat}>
                      <line x1="0" y1={y} x2="2000" y2={y} stroke="hsl(var(--border))" strokeWidth="0.4" strokeDasharray="6,12" opacity="0.2" />
                      {lat === 0 && <text x="12" y={y + 4} fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.25">Equator</text>}
                    </g>
                  );
                })}
                {[-120, -60, 0, 60, 120, 180].map((lon) => {
                  const [x] = proj(lon, 0);
                  return <line key={lon} x1={x} y1="30" x2={x} y2="970" stroke="hsl(var(--border))" strokeWidth="0.4" strokeDasharray="6,12" opacity="0.15" />;
                })}

                {/* Non-active continents */}
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

                {/* Clickable highlighted regions */}
                <g className="cursor-pointer" onClick={() => handleRegionClick("europe")}>
                  <path d={continents.europe} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.18" filter="url(#softGlow)" />
                  <path d={continents.scandinavia} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.12" />
                  <path d={continents.uk} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.2" />
                  <path d={continents.ireland} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.15" />
                  {/* Invisible hit area */}
                  <path d={continents.europe} fill="transparent" stroke="transparent" strokeWidth="30" />
                </g>
                <g className="cursor-pointer" onClick={() => handleRegionClick("middleEast")}>
                  <path d={continents.middleEast} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.22" filter="url(#softGlow)" />
                  <path d={continents.arabianPeninsula} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.25" filter="url(#softGlow)" />
                  <path d={continents.middleEast} fill="transparent" stroke="transparent" strokeWidth="30" />
                </g>
                <g className="cursor-pointer" onClick={() => handleRegionClick("india")}>
                  <path d={continents.india} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" filter="url(#softGlow)" />
                  <path d={continents.india} fill="transparent" stroke="transparent" strokeWidth="30" />
                </g>

                {/* Connection arcs */}
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

                {/* City dots */}
                {bimCities.map((city) => {
                  const [cx, cy] = proj(city.lon, city.lat);
                  return (
                    <g key={city.name}>
                      {city.hq && (
                        <circle cx={cx} cy={cy} r="20" fill="hsl(var(--primary))" opacity="0.08" filter="url(#softGlow)">
                          <animate attributeName="r" values="20;32;20" dur="3s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle cx={cx} cy={cy} r={city.size} fill={city.wasi || city.active ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} opacity={city.hq ? 0.95 : city.wasi ? 0.7 : city.active ? 0.55 : 0.3} />
                      {city.hq && <circle cx={cx} cy={cy} r={city.size * 0.45} fill="hsl(var(--primary-foreground))" />}
                      <text x={cx + city.size + 4} y={cy + 1} fill="hsl(var(--muted-foreground))" fontSize={city.hq ? "12" : city.wasi ? "10" : "9"} fontWeight={city.hq ? "800" : city.wasi ? "600" : "400"} opacity={city.hq ? 0.9 : city.wasi ? 0.7 : 0.45} dominantBaseline="middle">
                        {city.name}
                      </text>
                    </g>
                  );
                })}

                {/* Clickable region labels */}
                {wasiPins.map((pin, i) => {
                  const [cx, cy] = proj(pin.lon, pin.lat);
                  const labelY = pin.name === "WESTERN EUROPE" ? cy - 45 : cy + 35;
                  const boxW = pin.name.length * 9 + 50;
                  return (
                    <g key={i} filter="url(#glow)" className="cursor-pointer" onClick={() => handleRegionClick(pin.region)}>
                      <circle cx={cx} cy={cy} r="12" fill="hsl(var(--primary))" opacity="0.15">
                        <animate attributeName="r" values="12;22;12" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.15;0.03;0.15" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                      </circle>
                      <rect x={cx - boxW / 2} y={labelY - 14} width={boxW} height="30" rx="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.92" className="hover:opacity-100 transition-opacity" />
                      <text x={cx} y={labelY} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="800">{pin.flag} {pin.name}</text>
                      <text x={cx} y={labelY + 12} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="700">{pin.projects} Projects</text>
                      <line x1={cx} y1={cy} x2={cx} y2={pin.name === "WESTERN EUROPE" ? labelY + 16 : labelY - 14} stroke="hsl(var(--primary))" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.3" />
                      {/* "Click to zoom" hint */}
                      <text x={cx} y={labelY + 24} textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">🔍 Click to zoom</text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          ) : (
            /* ===== ZOOMED VIEW ===== */
            <motion.div
              key={`zoom-${zoomedRegion}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back button */}
              <button
                onClick={() => setZoomedRegion(null)}
                className="absolute top-2 left-2 z-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors backdrop-blur-sm"
              >
                ← Back to World
              </button>

              {/* Region title */}
              <div className="text-center mb-4">
                <h3 className="font-display font-bold text-foreground text-lg">{zoomData?.flag} {zoomData?.title}</h3>
                <p className="text-xs text-muted-foreground">Detailed city-level project breakdown</p>
              </div>

              <svg viewBox={zoomData?.viewBox} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="zoomDots" width="5" height="5" patternUnits="userSpaceOnUse">
                    <circle cx="2.5" cy="2.5" r="0.15" fill="hsl(var(--muted-foreground))" opacity="0.15" />
                  </pattern>
                  <filter id="zGlow"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  <filter id="zSoftGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  <radialGradient id="zOcean" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="hsl(var(--background))" />
                    <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.2" />
                  </radialGradient>
                </defs>

                {/* Background */}
                <rect x={zoomData?.viewBox.split(" ")[0]} y={zoomData?.viewBox.split(" ")[1]} width={zoomData?.viewBox.split(" ")[2]} height={zoomData?.viewBox.split(" ")[3]} fill="url(#zOcean)" />
                <rect x={zoomData?.viewBox.split(" ")[0]} y={zoomData?.viewBox.split(" ")[1]} width={zoomData?.viewBox.split(" ")[2]} height={zoomData?.viewBox.split(" ")[3]} fill="url(#zoomDots)" />

                {/* Region landmass */}
                {zoomedRegion === "india" && (
                  <path d={continents.india} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" filter="url(#zSoftGlow)" />
                )}
                {zoomedRegion === "middleEast" && (
                  <>
                    <path d={continents.middleEast} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.18" filter="url(#zSoftGlow)" />
                    <path d={continents.arabianPeninsula} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.22" filter="url(#zSoftGlow)" />
                    <path d={continents.africa} fill="hsl(var(--muted-foreground))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.06" />
                  </>
                )}
                {zoomedRegion === "europe" && (
                  <>
                    <path d={continents.europe} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.15" filter="url(#zSoftGlow)" />
                    <path d={continents.scandinavia} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.1" />
                    <path d={continents.uk} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.18" />
                    <path d={continents.ireland} fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.12" />
                  </>
                )}

                {/* City pins with detailed cards */}
                {zoomData?.cities.map((city, i) => {
                  const [cx, cy] = proj(city.lon, city.lat);
                  const isHq = city.hq;
                  const hasProjects = city.projects && !city.projects.includes("Pipeline");
                  const cardW = 110;
                  const cardH = 52;
                  // Alternate label position
                  const labelX = i % 2 === 0 ? cx + city.size + 6 : cx - city.size - cardW - 6;
                  const labelY = cy - cardH / 2;

                  return (
                    <g key={city.name}>
                      {/* Pulse ring for HQ */}
                      {isHq && (
                        <circle cx={cx} cy={cy} r={city.size * 1.5} fill="hsl(var(--primary))" opacity="0.1" filter="url(#zSoftGlow)">
                          <animate attributeName="r" values={`${city.size * 1.5};${city.size * 2.5};${city.size * 1.5}`} dur="2.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.1;0.02;0.1" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                      )}

                      {/* City dot */}
                      <circle
                        cx={cx} cy={cy} r={city.size}
                        fill={hasProjects || isHq ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                        opacity={isHq ? 0.95 : hasProjects ? 0.75 : 0.35}
                      />
                      {isHq && <circle cx={cx} cy={cy} r={city.size * 0.4} fill="hsl(var(--primary-foreground))" />}

                      {/* Connector line */}
                      <line x1={cx} y1={cy} x2={i % 2 === 0 ? labelX : labelX + cardW} y2={cy} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4" />

                      {/* Info card */}
                      <rect
                        x={labelX} y={labelY} width={cardW} height={cardH} rx="4"
                        fill="hsl(var(--background))"
                        stroke={isHq ? "hsl(var(--primary))" : hasProjects ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth={isHq ? "1.2" : "0.6"}
                        opacity="0.92"
                      />
                      <text x={labelX + 6} y={labelY + 12} fill="hsl(var(--foreground))" fontSize="7" fontWeight="700">{city.name}</text>
                      {city.projects && (
                        <text x={labelX + cardW - 6} y={labelY + 12} textAnchor="end" fill={hasProjects ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"} fontSize="6" fontWeight="600">
                          {city.projects}
                        </text>
                      )}
                      {city.type && (
                        <text x={labelX + 6} y={labelY + 23} fill="hsl(var(--muted-foreground))" fontSize="5.5">{city.type}</text>
                      )}
                      {city.sector && (
                        <text x={labelX + 6} y={labelY + 32} fill="hsl(var(--muted-foreground))" fontSize="5">{city.sector}</text>
                      )}
                      <text x={labelX + 6} y={labelY + 44} fill="hsl(var(--primary))" fontSize="6" fontWeight="700">BIM: {city.bim}</text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
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
        {zoomedRegion && (
          <button onClick={() => setZoomedRegion(null)} className="text-primary font-medium hover:underline">
            ← Back to world view
          </button>
        )}
      </div>
    </motion.div>
  );
}
