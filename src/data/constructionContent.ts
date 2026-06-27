import {
  HardHat, Building2, Hammer, Construction, Truck, Layers, Ruler, ShieldCheck,
  Wrench, Droplets, PaintBucket, Trees, Mountain, Map, Cog, ClipboardList,
  Forklift, Brush, Building, Workflow,
  Brain, FileCheck, Activity, Award, Clock, DollarSign, Users, Target,
  Sparkles, HeartHandshake, Lock, Scan, Plane, Printer, Cpu, Zap,
  Flame, ShieldAlert, LifeBuoy, Wind, Recycle, Volume2,
} from "lucide-react";
import heroCrane from "@/assets/hero-construction-crane.jpg";
import heroBridge from "@/assets/hero-construction-bridge.jpg";
import heroTower from "@/assets/hero-construction-tower.jpg";
import heroTeam from "@/assets/hero-construction-team.jpg";
import heroSite from "@/assets/hero-construction-site.jpg";

export const constructionHeroSlides = [
  {
    image: heroCrane,
    quote: "Building Tomorrow's Skyline — One Beam, One Slab, One Storey at a Time",
    sub: "High-Rise & RCC Construction",
  },
  {
    image: heroBridge,
    quote: "Bridges that Connect Communities — Infrastructure that Endures Generations",
    sub: "Bridges, Highways & Infrastructure",
  },
  {
    image: heroTower,
    quote: "Concrete, Steel & Trust — The Wasi Promise on Every Site in Nagpur",
    sub: "Residential & Commercial Towers",
  },
  {
    image: heroTeam,
    quote: "Safety First. Quality Always. Delivered On Time, Every Time.",
    sub: "Civil Engineering & Project Management",
  },
];

export const constructionServices = [
  { icon: Building2, title: "General Contracting", desc: "Single-point responsibility delivery of buildings — from groundbreaking to handover." },
  { icon: Hammer, title: "Civil & Structural Works", desc: "RCC, masonry, structural steel, formwork and shuttering for any scale." },
  { icon: Building, title: "RCC High-Rise Construction", desc: "Reinforced concrete towers built to IS 456 / 875 / 1893 with seismic detailing." },
  { icon: Construction, title: "Industrial & Warehouse Construction", desc: "Pre-engineered buildings, factories, godowns and logistics parks." },
  { icon: Map, title: "Road & Highway Construction", desc: "Bituminous and concrete pavements, urban roads, township internal roads." },
  { icon: Workflow, title: "Bridges & Flyovers", desc: "RCC and precast bridges, ROBs, culverts and pedestrian overpasses." },
  { icon: Mountain, title: "Site Development & Earthwork", desc: "Excavation, cutting, filling, leveling, and bulk earth movement." },
  { icon: Layers, title: "Foundation & Piling Works", desc: "Bored cast-in-situ piles, raft, isolated and combined foundations." },
  { icon: Wrench, title: "Steel Fabrication & Erection", desc: "Shop-fabricated structural steel, trusses, beams and bolted/welded erection." },
  { icon: Forklift, title: "Precast Concrete Construction", desc: "Precast panels, hollow-core slabs and modular precast assembly." },
  { icon: Cog, title: "MEP Installation Works", desc: "HVAC, electrical, plumbing and fire-fighting installation and commissioning." },
  { icon: Droplets, title: "Water Supply & Plumbing", desc: "Internal & external water supply, pumping stations and overhead tanks." },
  { icon: Truck, title: "Sewerage & Stormwater Networks", desc: "Underground drainage, manholes, catch pits and stormwater outfalls." },
  { icon: ShieldCheck, title: "Waterproofing & Roofing", desc: "Membrane, crystalline and APP waterproofing for terraces, basements & toilets." },
  { icon: PaintBucket, title: "Plastering, Painting & Finishing", desc: "Internal & external plaster, putty, primer and decorative painting." },
  { icon: Brush, title: "Interior Fit-Out Works", desc: "False ceilings, partitions, flooring, joinery and turnkey interiors." },
  { icon: Ruler, title: "Facade & Cladding Installation", desc: "ACP, stone, glass curtain wall and dry-cladding facade systems." },
  { icon: Trees, title: "Landscaping & Hardscaping", desc: "Soft landscaping, paving, kerbs, walkways and outdoor amenities." },
  { icon: HardHat, title: "Renovation & Retrofit", desc: "Structural strengthening, restoration and adaptive re-use of existing buildings." },
  { icon: ClipboardList, title: "Project Management & Supervision", desc: "PMC, construction supervision, QA/QC and on-site safety management." },
];

export const constructionProcess = [
  { step: "01", title: "Site Survey & DPR", desc: "Topographic survey, soil testing and Detailed Project Report." },
  { step: "02", title: "Design & BOQ", desc: "Structural design, drawings, specifications and bill of quantities." },
  { step: "03", title: "Mobilization", desc: "Site setup, labour camp, batching plant and equipment deployment." },
  { step: "04", title: "Substructure", desc: "Excavation, piling, foundation and plinth-level work." },
  { step: "05", title: "Superstructure", desc: "RCC framing, masonry, steel erection floor by floor." },
  { step: "06", title: "MEP & Finishing", desc: "Services, plaster, flooring, painting and external facade." },
  { step: "07", title: "Testing & Commissioning", desc: "QA/QC, snagging, MEP commissioning and statutory clearances." },
  { step: "08", title: "Handover & DLP", desc: "Owner handover, as-built documents and defect liability support." },
];

export const whatWeBuild = [
  { icon: Building, label: "Residential Towers" },
  { icon: Building2, label: "Commercial Complexes" },
  { icon: Construction, label: "Industrial Plants" },
  { icon: Workflow, label: "Bridges & Flyovers" },
  { icon: Map, label: "Roads & Highways" },
  { icon: Trees, label: "Townships & Layouts" },
];

// ============ CONSTRUCTION PROJECTS ============
export const constructionProjects = [
  {
    img: heroSite,
    title: "Luxury Modern Bungalow",
    category: "Residential",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    area: "3,500 sq.ft",
    desc: "Contemporary bungalow with smart-home automation, vastu-compliant layout, IS 456 & NBC 2016 compliant.",
    disciplines: ["Civil", "Structural", "Electrical", "Plumbing", "Interior"],
    tags: ["IS 456", "Vastu", "Smart Home"],
  },
  {
    img: heroTeam,
    title: "Traditional Heritage Bungalow",
    category: "Residential",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    area: "4,200 sq.ft",
    desc: "Classic Indian courtyard home with terracotta roofing, carved pillars and natural ventilation.",
    disciplines: ["Civil", "Structural", "Plumbing", "Landscaping", "Heritage"],
    tags: ["Courtyard", "Natural Ventilation", "IS 456"],
  },
  {
    img: heroTower,
    title: "Premium Luxury Villa",
    category: "Residential",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    area: "6,800 sq.ft",
    desc: "Infinity pool, landscaped terraces, home automation, private lifts — IGBC certified luxury living.",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Interior", "Automation"],
    tags: ["Luxury", "Smart Home", "IGBC"],
  },
  {
    img: heroCrane,
    title: "Skyline Residential Tower",
    category: "Residential",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    area: "2,50,000 sq.ft · 22 Floors",
    desc: "IS 1893 earthquake-resistant high-rise with advanced MEP systems and full RERA compliance.",
    disciplines: ["Civil", "Structural", "MEP", "Fire", "HVAC", "Elevator"],
    tags: ["IS 1893", "RERA", "High-Rise"],
  },
  {
    img: heroTower,
    title: "Corporate Office Complex",
    category: "Commercial",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    area: "1,80,000 sq.ft",
    desc: "Glass curtain wall, VRV HVAC, 100% DG backup — IGBC Gold certified Grade-A office.",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Fire", "BMS"],
    tags: ["IGBC Gold", "BMS", "Grade-A"],
  },
  {
    img: heroBridge,
    title: "Logistics Warehouse Hub",
    category: "Industrial",
    location: "MIDC, Nagpur",
    status: "Completed",
    area: "1,20,000 sq.ft",
    desc: "Pre-engineered steel structure with dock levelers, automated fire suppression and industrial flooring.",
    disciplines: ["Civil", "Structural", "Electrical", "Fire", "MEP"],
    tags: ["PEB", "Fire Safety", "Industrial"],
  },
  {
    img: heroCrane,
    title: "Manufacturing Plant",
    category: "Industrial",
    location: "Nagpur, Maharashtra",
    status: "In Progress",
    area: "3,00,000 sq.ft",
    desc: "Heavy industrial with crane gantry, chemical-resistant flooring, clean room zones, ETP/STP integration.",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Fire", "Automation"],
    tags: ["Heavy Industry", "Clean Room", "ETP"],
  },
];

// ============ CONSTRUCTION TESTIMONIALS ============
export const constructionTestimonials = [
  { author: "Rajesh Sharma", role: "Residential Bungalow, Nagpur", rating: 5,
    quote: "Wasi Construction transformed our dream home into reality. Their attention to detail and adherence to IS codes gave us complete confidence in the structural integrity of our home." },
  { author: "Priya Deshmukh", role: "Commercial Complex, Wardha", rating: 5,
    quote: "The BIM coordination was exceptional. We could visualize every aspect of our commercial building before construction began. Zero surprises, on-time delivery." },
  { author: "Anil Patil", role: "Industrial Warehouse, Nagpur", rating: 5,
    quote: "Our 1,20,000 sq.ft warehouse was delivered ahead of schedule. The pre-engineered steel structure and quality of construction exceeded our expectations." },
  { author: "Meena Agrawal", role: "Luxury Villa, Amravati", rating: 5,
    quote: "From the infinity pool to the home automation system — every detail was executed flawlessly. Wasi Construction truly delivers premium quality." },
  { author: "Dr. Suresh Rao", role: "Hospital Building, Nagpur", rating: 5,
    quote: "Building a hospital requires specialized MEP systems and strict compliance. Wasi Construction handled everything professionally with complete transparency." },
  { author: "Vikram Singh", role: "Government School, Chandrapur", rating: 5,
    quote: "PWD specifications, tight deadlines, and government documentation — Wasi Construction managed it all efficiently. The school was completed on time and within budget." },
];

// ============ HOMEPAGE CONSTRUCTION PROCESS (6-step stepper) ============
export const constructionHomeProcess = [
  { step: "01", icon: Brain,        title: "Consultation & Planning",  desc: "Understanding your vision, site analysis, feasibility study, and initial budget estimation." },
  { step: "02", icon: Ruler,        title: "Design & Engineering",     desc: "Architectural design, structural analysis per IS codes, MEP planning, and 3D BIM modeling." },
  { step: "03", icon: Workflow,     title: "BIM Coordination",         desc: "Clash detection, 4D scheduling, 5D cost estimation, multi-discipline coordination in Revit & Navisworks." },
  { step: "04", icon: FileCheck,    title: "Approvals & Permits",      desc: "RERA registration, municipal approvals, environmental clearance, fire NOC and all regulatory compliance." },
  { step: "05", icon: HardHat,      title: "Construction & Monitoring",desc: "On-site execution with drone monitoring, quality testing, milestone tracking, real-time dashboards." },
  { step: "06", icon: ShieldCheck,  title: "Handover & Support",       desc: "Final inspection, defect rectification, documentation handover, OC/CC assistance and post-construction support." },
];

// ============ WHY WITEC — CONSTRUCTION (12 cards) ============
export const constructionWhy = [
  { icon: ShieldCheck, title: "100% IS Code Compliant",   desc: "Every project meets IS 456, IS 800, IS 1893 and NBC 2016 standards." },
  { icon: Clock,       title: "On-Time Delivery Guarantee",desc: "AI-driven scheduling combined with drone monitoring keeps every milestone on track." },
  { icon: DollarSign,  title: "Transparent Pricing",       desc: "Detailed BOQ, milestone billing and real-time budget tracking for every client." },
  { icon: FileCheck,   title: "Single-Window Approvals",   desc: "RERA, fire NOC, environmental clearance and structural certificates handled in-house." },
  { icon: Users,       title: "Dedicated Project Manager", desc: "Single point of contact with 24/7 dashboard access for full project visibility." },
  { icon: Layers,      title: "All Disciplines Under One Roof", desc: "Civil, structural, MEP, interior and landscape — one team, one accountability." },
  { icon: Sparkles,    title: "Future-Ready Construction", desc: "BIM, 3D printing, IoT and green-building tech embedded in every project." },
  { icon: Award,       title: "10-Year Structural Warranty", desc: "Backed by third-party inspection reports and material test certificates." },
  { icon: HardHat,     title: "500+ Skilled Professionals", desc: "Engineers, architects and surveyors — all in-house, no subcontracted labour." },
  { icon: HeartHandshake, title: "Client-First Philosophy", desc: "Weekly meetings, change-order flexibility and lifelong post-completion support." },
  { icon: Activity,    title: "Smart Building Integration", desc: "Home automation and energy management reducing operating costs by up to 40%." },
  { icon: Lock,        title: "ISO 9001 & BIS Certified",   desc: "Every material tested in NABL labs, every process documented." },
];

// ============ TECHNOLOGY PAGE — CONSTRUCTION TECH ============
export const coreConstructionTech = [
  { icon: Layers,    title: "BIM Integration",      metric: "40% fewer RFIs",      desc: "30% less rework via federated Revit + Navisworks coordination." },
  { icon: Scan,      title: "3D LiDAR Scanning",    metric: "±2 mm accuracy",      desc: "1 million points per second for as-built capture and verification." },
  { icon: Plane,     title: "Drone Surveying",      metric: "90% faster surveys",  desc: "DJI Matrice 300 photogrammetry for site mapping and progress." },
  { icon: Printer,   title: "3D Concrete Printing", metric: "60% less formwork",   desc: "COBOD-class printers for complex geometry without traditional shuttering." },
  { icon: Cpu,       title: "IoT Site Monitoring",  metric: "24/7 real-time",      desc: "Vibration, temperature and tilt sensors streaming to the cloud." },
  { icon: Brain,     title: "AI Project Management",metric: "25% better schedule", desc: "ML scheduling, risk prediction and automated progress analytics." },
];

export const futureConstructionTech = [
  { title: "Modular Construction", desc: "Factory-built modules — 50% faster on-site, weather-independent assembly." },
  { title: "Self-Healing Concrete", desc: "Bacteria-embedded mix auto-repairs micro-cracks for 50+ year service life." },
  { title: "Net-Zero Buildings", desc: "Solar, wind, geothermal and passive design for a zero carbon footprint." },
];

export const constructionSafety = [
  { icon: HardHat,    title: "PPE Compliance",     desc: "Mandatory helmets, safety shoes, harnesses, gloves and high-vis vests." },
  { icon: Flame,      title: "Fire Safety",        desc: "Extinguishers on every floor, hydrant systems, drills and hot-work permits." },
  { icon: ShieldAlert,title: "Fall Protection",    desc: "Safety nets, guardrails, personal fall arrest and scaffold inspection > 2 m." },
  { icon: LifeBuoy,   title: "Emergency Response", desc: "Trained response teams, evacuation plans, assembly points and incident reporting." },
];

export const constructionEnvironment = [
  { icon: Wind,    title: "Dust Control",     desc: "Anti-smog guns, water sprinklers, green barriers and covered material storage." },
  { icon: Recycle, title: "Water Management", desc: "Rainwater harvesting, construction water recycling, STP and zero-discharge sites." },
  { icon: Volume2, title: "Noise Control",    desc: "Sound barriers, equipment silencers, restricted hours and CPCB monitoring." },
];

export const constructionEquipment = [
  "Tower Cranes (Liebherr, Potain)",
  "Batching Plants (Schwing Stetter)",
  "Concrete Pumps (Putzmeister)",
  "Piling Rigs (Bauer, Soilmec)",
  "Excavators (Komatsu, CAT)",
  "Transit Mixers (Schwing Stetter)",
  "Telescopic Handlers (JCB, Manitou)",
  "Bar Bending Machines (Jaypee)",
  "Total Station (Leica, Topcon)",
  "Welding Machines (Lincoln, ESAB)",
  "Compactors & Rollers (Hamm)",
  "DG Sets (Cummins, Kirloskar)",
];

export const constructionCertifications = [
  "ISO 9001:2015 (Quality)",
  "ISO 14001:2015 (Environment)",
  "ISO 45001:2018 (OH&S)",
  "OHSAS 18001",
  "NBC 2016 Full Compliance",
  "IS 456 · IS 800 · IS 1893",
  "IGBC Green Building",
  "BOCW Act 1996",
];

// ============ CONTACT REGISTRATIONS ============
export const constructionRegistrations = [
  "RERA Registered", "ISO 9001:2015", "ISO 14001", "BIS Certified", "PWD Approved", "CPWD Empaneled",
];

// ============ HERO — CONSTRUCTION KPIs & TRUST STATS ============
export const constructionHeroKpis = [
  { value: 50,  suffix: "+",     label: "Projects" },
  { value: 7,   suffix: "+",     label: "Years" },
  { value: 500, suffix: "+",     label: "Team" },
  { value: 100, suffix: "Cr+ ₹", label: "Project Value" },
];

export const constructionTrustStats = [
  "500+ Skilled Professionals", "10-Year Warranty", "IS Code Compliant", "ISO 9001 Certified",
];