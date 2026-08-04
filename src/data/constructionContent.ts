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
    quote: "ENGINEERING EXCELLENCE — From Foundation to Finish",
    sub: "Turnkey Construction",
  },
  {
    image: heroBridge,
    quote: "BIM-Powered Construction — Zero Rework, On-Time Delivery",
    sub: "Smart Construction",
  },
  {
    image: heroTower,
    quote: "IS Code Compliant — Every Column, Every Beam, Every Slab",
    sub: "Structural Safety",
  },
  {
    image: heroTeam,
    quote: "Your Dream Home, Built to Perfection",
    sub: "Residential Construction",
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
  { icon: Layers,    title: "BIM Integration",      metric: "40% fewer RFIs · 30% less rework",  desc: "Federated Revit + Navisworks coordination across every trade before a single brick is laid.",
    features: ["Revit & Navisworks", "Clash Detection", "4D Scheduling", "5D Cost Estimation", "BIM 360 Cloud", "Digital Twin"] },
  { icon: Scan,      title: "3D LiDAR Scanning",    metric: "±2 mm accuracy · 1M pts/sec",       desc: "Terrestrial and aerial reality capture for as-built verification and deformation analysis.",
    features: ["Terrestrial Scanning", "Aerial LiDAR", "Point Cloud Processing", "As-Built Models", "Deformation Analysis", "Volume Calculation"] },
  { icon: Plane,     title: "Drone Surveying",      metric: "90% faster surveying",              desc: "DJI Matrice 300 photogrammetry for site mapping, volumetrics and weekly progress capture.",
    features: ["DJI Matrice 300", "Orthomosaic Maps", "Volumetric Analysis", "Thermal Imaging", "Progress Monitoring", "3D Site Models"] },
  { icon: Printer,   title: "3D Concrete Printing", metric: "60% less formwork cost",            desc: "COBOD-class printers for complex geometry without traditional shuttering and with less waste.",
    features: ["COBOD Printers", "Custom Geometry", "Rapid Prototyping", "Material Optimization", "Complex Facades", "Reduced Waste"] },
  { icon: Cpu,       title: "IoT Site Monitoring",  metric: "24/7 real-time monitoring",         desc: "Embedded sensors track vibration, curing temperature and structural tilt straight to the cloud.",
    features: ["Embedded Sensors", "Vibration Monitoring", "Curing Temperature", "Tilt Detection", "Cloud Dashboard", "Auto-Alerts"] },
  { icon: Brain,     title: "AI Project Management",metric: "25% schedule improvement",          desc: "Machine-learning scheduling, risk prediction and computer-vision progress tracking.",
    features: ["ML Scheduling", "Risk Prediction", "Computer Vision", "Resource Allocation", "Progress Tracking", "Cost Forecasting"] },
];

export const futureConstructionTech = [
  { title: "Modular Construction", desc: "Factory-built modules — 50% faster on-site, weather-independent assembly." },
  { title: "Self-Healing Concrete", desc: "Bacteria-embedded mix auto-repairs micro-cracks for 50+ year service life." },
  { title: "Net-Zero Buildings", desc: "Solar, wind, geothermal and passive design for a zero carbon footprint." },
  { title: "Blockchain Contracts", desc: "Smart contracts for tamper-proof milestone billing, material provenance and transparent payments." },
  { title: "AR On-Site Overlay", desc: "HoloLens and tablet AR overlays place the BIM model on the real slab for instant install verification." },
  { title: "Construction Robotics", desc: "Rebar-tying robots, bricklaying arms and autonomous surveying rovers for repetitive, high-precision work." },
];

// ============ SAFETY — 8 PROTOCOLS ============
export const constructionSafetyProtocols = [
  { icon: HardHat,     title: "Mandatory PPE Compliance", desc: "Hard hats, harnesses, high-visibility vests, steel-toe boots, goggles and ear protection for all personnel, with RFID-enabled PPE tracking at entry gates." },
  { icon: Flame,       title: "Fire Safety Systems",      desc: "Extinguishers every 15 m, hydrant network, sprinklers, smoke detectors, fire-rated escape routes and weekly drills with trained marshals." },
  { icon: ShieldAlert, title: "Fall Protection",          desc: "Full-body harnesses above 2 m, guardrails on every open edge, safety nets, covered floor openings and daily certified scaffold inspection." },
  { icon: LifeBuoy,    title: "Emergency Response Plan",  desc: "Documented ERP with coordinators, illuminated evacuation routes, siren alerts, standby ambulance and a hospital within 15-minute response." },
  { icon: Activity,    title: "AI-Powered CCTV",          desc: "360° coverage with AI anomaly detection — alerts for unauthorised zone entry, PPE violations and near-misses, with 90-day audit footage." },
  { icon: FileCheck,   title: "Permit-to-Work System",    desc: "Digital permits for hot work, confined space, electrical work, excavation and work at height — each with hazard assessment and toolbox talk." },
  { icon: HeartHandshake, title: "First Aid & Medical",   desc: "First aid stations every 500 m², certified first-aiders each shift, AEDs on site and monthly health checkups for all workers." },
  { icon: Wind,        title: "Air Quality Monitoring",   desc: "IoT PM2.5/PM10 sensors with automatic water misting when dust exceeds thresholds and enclosed material handling zones." },
];

export const constructionWorkerWelfare = [
  { icon: ShieldCheck, title: "Comprehensive Insurance", desc: "Group insurance with ₹10L accidental cover, family medical insurance and ESIC registration — claims processed within 48 hours." },
  { icon: Users,       title: "Regular Safety Training", desc: "Weekly toolbox talks, monthly drills, quarterly certifications and mandatory 8-hour safety induction before site access." },
  { icon: Activity,    title: "Heat Stress Management",  desc: "Rest breaks during peak heat, shaded rest areas, ORS stations every 100 m and cooling vests for welders." },
  { icon: LifeBuoy,    title: "On-Site Medical Facility",desc: "Medical room with trained paramedic, oxygen, stretcher, spinal board and a direct ambulance hotline." },
  { icon: Droplets,    title: "Hygiene & Sanitation",    desc: "Clean drinking water on every floor, portable toilets at 1:25 ratio, changing rooms and covered mess halls with food inspection." },
  { icon: Lock,        title: "Site Access Control",     desc: "Biometric attendance, visitor escort protocol, RFID zone access, anti-climb perimeter fencing and 24/7 security." },
];

export const constructionSafetyStats = [
  { value: "Zero", label: "Fatalities Record" },
  { value: "100%", label: "Workers Safety Trained" },
  { value: "24/7", label: "Safety Monitoring" },
  { value: "100%", label: "PPE Compliance Rate" },
];

// ============ PROJECT COMPLETION METHODOLOGY ============
export const constructionCompletion = [
  { icon: Workflow,   title: "Lean Construction (LPS)",    stat: "35% faster delivery",     desc: "Last Planner System with weekly work planning, constraint analysis and percent-plan-complete tracking across all trades." },
  { icon: Activity,   title: "Primavera P6 Scheduling",    stat: "99.2% schedule accuracy", desc: "CPM master schedules with 3-week lookaheads, resource leveling, earned value management and S-curve delay alerts." },
  { icon: Truck,      title: "Just-in-Time Supply Chain",  stat: "Zero material delays",    desc: "ERP-integrated procurement, pre-qualified vendors, buffer stock and GPS-tracked deliveries with automated reorder triggers." },
  { icon: Target,     title: "6-Stage Quality Gates",      stat: "Zero-defect handover",    desc: "Sign-off gates at foundation, structure, MEP rough-in, finishing, commissioning and handover — each with test certificates." },
  { icon: Forklift,   title: "In-House Equipment Fleet",   stat: "50+ owned machines",      desc: "Tower cranes, batching plants, pumps and transit mixers owned outright — enabling 24/7 pours on fast-track projects." },
  { icon: Clock,      title: "Real-Time Client Dashboard", stat: "Daily client updates",    desc: "Live drone feeds, progress photos, milestone tracker, cost burn-down and RFI logs accessible from anywhere." },
];

// ============ PROJECT TYPES WE TAKE ============
export const constructionProjectTypes = [
  { icon: Building,      title: "Residential",    desc: "Bungalows, villas, apartments, townships and gated communities — designed for modern living." },
  { icon: Building2,     title: "Commercial",     desc: "Office complexes, shopping malls, showrooms and hotels — built for business success." },
  { icon: Construction,  title: "Industrial",     desc: "Factories, warehouses and processing plants — engineered for efficiency and safety compliance." },
  { icon: Sparkles,      title: "Private",        desc: "Custom private estates, farmhouses and luxury retreats — tailored to your unique vision." },
  { icon: ClipboardList, title: "Government",     desc: "Schools, hospitals, public buildings and roads — to PWD/CPWD standards and specifications." },
  { icon: Award,         title: "Semi-Government",desc: "PSU offices, institutional buildings and R&D centres — reliable, documented and compliant." },
];

// ============ SIGNATURE BUILDS ============
export const constructionSignatureBuilds = [
  { img: heroTeam,   title: "Modern Bungalows",      desc: "Contemporary bungalows with clean lines, open floor plans, smart-home integration and energy-efficient design.",
    features: ["Open Floor Plan", "Smart Home Ready", "Energy Efficient", "Vastu Compliant"] },
  { img: heroSite,   title: "Traditional Bungalows", desc: "Classic Indian bungalows with courtyard design, terracotta roofing, carved pillars and natural ventilation.",
    features: ["Courtyard Design", "Natural Ventilation", "Heritage Craft", "IS 456 Compliant"] },
  { img: heroTower,  title: "Modern Luxury Villas",  desc: "Ultra-premium villas with infinity pools, home automation, private lifts and bespoke custom finishes.",
    features: ["Infinity Pool", "Home Automation", "Private Lift", "Custom Interiors"] },
  { img: heroCrane,  title: "High-Rise Apartments",  desc: "State-of-the-art residential towers with earthquake-resistant design, advanced MEP, smart parking and RERA-compliant documentation.",
    features: ["Earthquake Resistant", "Smart Parking", "RERA Compliant", "Club Amenities"] },
];

// ============ GLOBAL LANDMARK INSPIRATION (Construction Projects page) ============
export const globalLandmarkProjects = [
  { year: "2010", name: "Burj Khalifa", location: "Dubai, UAE", height: "828 m", floors: 163, type: "Mixed-Use Skyscraper",
    tech: "Slip-form construction, high-performance C80 concrete, buttressed core structural system",
    desc: "The tallest structure ever built. The Y-shaped floor plan provides structural stability against extreme wind forces." },
  { year: "2015", name: "Shanghai Tower", location: "Shanghai, China", height: "632 m", floors: 128, type: "Office / Hotel Tower",
    tech: "Twisted façade reducing wind loads by 24%, double-skin curtain wall, mega-column system",
    desc: "China's tallest building featuring a 120° twist that dramatically reduces wind forces on the structure." },
  { year: "2014", name: "One World Trade Center", location: "New York, USA", height: "541 m", floors: 104, type: "Office Tower",
    tech: "Reinforced concrete core, blast-resistant base, chemical & biological air filtration",
    desc: "Rebuilt as a symbol of resilience with a massive concrete core and a steel perimeter structure." },
  { year: "2017", name: "Lotte World Tower", location: "Seoul, South Korea", height: "555 m", floors: 123, type: "Mixed-Use",
    tech: "Tapered silhouette, outrigger system, high-strength concrete up to 100 MPa",
    desc: "South Korea's tallest building — its gently tapered form reduces wind load by around 10%." },
  { year: "1998", name: "Petronas Twin Towers", location: "Kuala Lumpur, Malaysia", height: "452 m", floors: 88, type: "Office Towers",
    tech: "High-strength 80 MPa concrete, sky bridge at Level 41–42, Islamic geometric design",
    desc: "Held the record as the world's tallest buildings for six years." },
  { year: "2004", name: "Taipei 101", location: "Taipei, Taiwan", height: "508 m", floors: 101, type: "Office Tower",
    tech: "730-ton tuned mass damper, mega-columns, outrigger trusses, bamboo-inspired form",
    desc: "Engineered to withstand the typhoons and earthquakes common in Taiwan." },
  { year: "2012", name: "The Shard", location: "London, UK", height: "310 m", floors: 95, type: "Mixed-Use",
    tech: "Top-down construction, steel & concrete hybrid core, 11,000 glass panels",
    desc: "Western Europe's tallest building, built over a live railway station." },
  { year: "2022", name: "Merdeka 118", location: "Kuala Lumpur, Malaysia", height: "679 m", floors: 118, type: "Mixed-Use",
    tech: "Mega RC core walls, belt trusses, triangular floor plate reducing wind load",
    desc: "The world's second-tallest building, completed with advanced core-wall jump-form systems." },
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

// ============ ABOUT — CONSTRUCTION STORY ============
export const constructionAboutStory = {
  title: "Building India's Skyline — One Project at a Time",
  paragraphs: [
    "WITEC Construction division was born in Nagpur with one goal: to bring world-class construction execution to the Indian market, powered by BIM, drones and IoT. From residential bungalows to industrial plants, we build with IS-code precision and on-time delivery guarantees.",
    "With 500+ skilled professionals — engineers, architects, surveyors, safety officers and finishing specialists — every project is delivered under a single roof. No sub-contracted labour, no diluted accountability. Just clean execution, transparent BOQs and third-party inspection reports.",
    "Our portfolio spans Maharashtra, MP, Chhattisgarh and now Kolkata — luxury villas, RCC high-rises, MIDC industrial sheds, warehouses, hospitals and government schools. Every structure carries a 10-year structural warranty backed by NABL-tested materials and IS 456 / IS 1893 compliance.",
  ],
  timeline: [
    { year: "2018", event: "WITEC Construction founded in Nagpur — residential bungalows & villas" },
    { year: "2019", event: "First commercial complex delivered in Wardha (IGBC Gold)" },
    { year: "2020", event: "MIDC industrial warehouse projects — pre-engineered steel structures" },
    { year: "2021", event: "RERA-registered, ISO 9001:2015 certified, 100+ workforce" },
    { year: "2022", event: "First high-rise RCC tower (22 floors) completed in Nagpur" },
    { year: "2023", event: "Expanded to Kolkata; hospital & school PWD projects added" },
    { year: "2024", event: "500+ team, drone-monitored sites, ₹100 Cr+ project value delivered" },
    { year: "2025", event: "BIM-integrated 4D/5D workflows, 3D concrete printing pilots launched" },
  ],
  stats: [
    { value: 7,   suffix: "+",   labelKey: "stat.yearsExperience" },
    { value: 50,  suffix: "+",   labelKey: "stat.projectsDelivered" },
    { value: 500, suffix: "+",   labelKey: "stat.industrySectors" },
    { value: 100, suffix: "Cr+", labelKey: "stat.countries" },
  ],
};

// ============ CAREERS — CONSTRUCTION ROLES & COPY ============
export const constructionCareers = {
  hero: {
    title: "Build India's Future",
    highlight: "With Us",
    end: "",
    desc: "Join WITEC Construction — a 500-strong team of site engineers, structural specialists, MEP experts and safety officers delivering IS-code compliant projects across Maharashtra & beyond.",
  },
  perks: [
    { title: "Site Growth Path",   desc: "From Junior Engineer to Project Manager in 5 years — clear promotion ladders and quarterly reviews." },
    { title: "On-Site Training",   desc: "Autodesk Revit, Navisworks, Primavera, drone-piloting, IS-code masterclasses fully sponsored." },
    { title: "Health & Safety",    desc: "ESI, PF, group medical cover, family insurance and BOCW welfare — full statutory + more." },
    { title: "PPE & Comfort",      desc: "Company-issued PPE, air-cooled site offices, transport, canteen and accommodation at every project." },
  ],
  values: [
    { title: "Safety First",        desc: "Zero-harm culture. Daily toolbox talks, PPE audits and OHSAS 18001 compliance on every site." },
    { title: "Quality Never Compromised", desc: "Every pour tested, every rebar checked. NABL-lab material tests and third-party audits." },
    { title: "On-Time Delivery",    desc: "Milestones over meetings. AI-driven scheduling and drone monitoring keep us honest." },
    { title: "Fair Wages",          desc: "BOCW-compliant minimum wages, weekly labour payment, and skill-based increments." },
    { title: "Learning Culture",    desc: "Weekly IS-code sessions, on-site software training and mentorship from senior PMs." },
    { title: "Family Approach",     desc: "Small enough to know your name, big enough to give ₹100 Cr+ project exposure." },
  ],
  stats: [
    { number: "500+", label: "Team On-Site",     desc: "Engineers, architects, safety officers and skilled trades — all in-house" },
    { number: "50+",  label: "Projects Delivered", desc: "Residential, commercial, industrial and infrastructure" },
    { number: "0",    label: "Fatal Incidents",  desc: "7 years of zero-harm safety record across all sites" },
    { number: "95%",  label: "Team Retention",   desc: "Because we invest in people, not just projects" },
  ],
  growth: [
    { title: "Structured Site Induction", desc: "2-week induction covering IS codes, safety protocols, drawings reading and site hierarchy." },
    { title: "Career Ladder",             desc: "Junior Engineer → Site Engineer → Sr. Engineer → PM → Sr. PM. Transparent criteria, annual reviews." },
    { title: "Certifications Sponsored",  desc: "NEBOSH, IOSH, PMP, LEED AP, Primavera P6, Autodesk certifications — company funded." },
    { title: "Cross-Project Mobility",    desc: "Work across Nagpur, Kolkata, MIDC and highway projects for varied exposure." },
  ],
};

// ============ INSIGHTS — CONSTRUCTION INDUSTRY (INDIA FOCUS) ============
export const constructionInsights = {
  hero: {
    label: "Indian Construction Insights",
    title: "The Indian Construction",
    highlight: "Boom",
    desc: "Data-driven view of India's $1.4 trillion construction opportunity — from IS-code compliance, city-wise growth (Nagpur, Kolkata, Mumbai) to Smart City & PMAY-led demand.",
  },
  overview: [
    { value: 1400, prefix: "$", suffix: "B", label: "India Construction Market (2030)" },
    { value: 11.4, suffix: "%",  label: "CAGR (2024–2030)" },
    { value: 71,   suffix: "M",  label: "Workforce (2nd largest employer)" },
    { value: 13,   suffix: "%",  label: "Share of India's GDP" },
  ],
  cityMarkets: [
    { city: "Mumbai",     share: 92, focus: "High-rise & Metro",           status: "Mature",   growth: "9%"  },
    { city: "Delhi-NCR",  share: 88, focus: "Commercial & Infra",          status: "Mature",   growth: "10%" },
    { city: "Bengaluru",  share: 85, focus: "IT parks & Metro",            status: "Mature",   growth: "12%" },
    { city: "Hyderabad",  share: 80, focus: "IT & Pharma City",            status: "Growing",  growth: "14%" },
    { city: "Pune",       share: 78, focus: "Auto & Residential",          status: "Growing",  growth: "11%" },
    { city: "Kolkata",    share: 70, focus: "Metro Phase-2 & Housing",     status: "Growing",  growth: "13%" },
    { city: "Nagpur",     share: 68, focus: "MIHAN, MIDC, Smart City",     status: "Emerging", growth: "16%" },
    { city: "Ahmedabad",  share: 66, focus: "GIFT City & Industrial",      status: "Growing",  growth: "12%" },
    { city: "Chennai",    share: 72, focus: "Port & Auto Corridors",       status: "Growing",  growth: "11%" },
    { city: "Lucknow",    share: 55, focus: "Expressways & Housing",       status: "Emerging", growth: "15%" },
    { city: "Bhopal",     share: 50, focus: "Smart City Mission",          status: "Emerging", growth: "14%" },
    { city: "Raipur",     share: 45, focus: "Mining & Industrial",         status: "Emerging", growth: "15%" },
  ],
  drivers: [
    { title: "PMAY Housing Push",     desc: "3+ crore homes sanctioned under PMAY-U & PMAY-G. ₹2 lakh crore committed to affordable housing till 2027." },
    { title: "Smart Cities Mission",  desc: "100 smart cities including Nagpur, Bhopal, Raipur — ₹2 lakh crore infrastructure spend under execution." },
    { title: "Metro & Rail Expansion",desc: "27 cities with operational/upcoming metros. Nagpur, Kolkata, Pune Phase-2 driving ₹5 lakh crore contracts." },
    { title: "Highway & Bharatmala",  desc: "83,000 km of national highways under Bharatmala Pariyojana — largest road-building program in Indian history." },
    { title: "Industrial Corridors",  desc: "DMIC, CBIC, AKIC corridors driving factory, warehouse and logistics-park construction across 12 states." },
    { title: "BIM Mandate (2024)",    desc: "Government projects above ₹100 Cr now require BIM Level 2. IS 19650 alignment mandatory by 2026." },
  ],
  isCodes: [
    { code: "IS 456:2000",  title: "Plain & Reinforced Concrete",  desc: "Governs all RCC design, mix ratios, cover, curing and load-bearing capacity." },
    { code: "IS 800:2007",  title: "Structural Steel",             desc: "General construction in steel — welded, bolted and cold-formed sections." },
    { code: "IS 875",       title: "Design Loads",                 desc: "Dead, live, wind, snow and other loads for buildings and structures." },
    { code: "IS 1893:2016", title: "Seismic Design",               desc: "Earthquake-resistant design — zone factors, response spectrum, ductile detailing." },
    { code: "IS 13920",     title: "Ductile Detailing",            desc: "RCC members subjected to seismic forces — critical for high-rises." },
    { code: "NBC 2016",     title: "National Building Code",       desc: "Master code — occupancy, fire safety, plumbing, structural, MEP integration." },
  ],
  segments: [
    { segment: "Residential",   share: 41, growth: "12%" },
    { segment: "Infrastructure",share: 24, growth: "14%" },
    { segment: "Commercial",    share: 18, growth: "10%" },
    { segment: "Industrial",    share: 12, growth: "13%" },
    { segment: "Institutional", share: 5,  growth: "11%" },
  ],
  keyStats: [
    { value: "40%",   label: "cost overrun in non-BIM projects",  source: "NITI Aayog 2023" },
    { value: "₹111L Cr", label: "National Infrastructure Pipeline (2025)", source: "MoF, Govt of India" },
  { value: "30%",   label: "faster delivery with drone monitoring", source: "CIDC India" },
    { value: "50%",   label: "of new demand from Tier-2 cities",     source: "JLL India Outlook" },
    { value: "₹10L Cr", label: "annual construction spend by 2027",  source: "IBEF Report 2024" },
    { value: "22%",   label: "workforce shortage — skilled trades",  source: "NSDC Skill Gap" },
  ],
  timeline: [
    { year: "2005", event: "RERA-precursor state laws — first regulation attempts" },
    { year: "2014", event: "'Housing for All by 2022' PMAY launched" },
    { year: "2015", event: "Smart Cities Mission launched — 100 cities identified" },
    { year: "2016", event: "RERA Act enacted — buyer protection & builder accountability" },
    { year: "2017", event: "GST rollout — construction sector rationalized to 5%/12%" },
    { year: "2018", event: "Bharatmala Phase-1 approved — ₹5.35 lakh crore highway program" },
    { year: "2020", event: "Atmanirbhar package — ₹1 lakh crore Agri-Infra fund" },
    { year: "2022", event: "Gati Shakti Master Plan — integrated infra planning launched" },
    { year: "2024", event: "BIM mandate for government projects > ₹100 Cr" },
    { year: "2025", event: "National Infrastructure Pipeline crosses ₹111 lakh crore" },
    { year: "2030", event: "Projected: $1.4T market — 3rd largest construction economy globally" },
  ],
};