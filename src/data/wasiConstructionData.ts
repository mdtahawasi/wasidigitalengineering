/**
 * Content migrated verbatim from the Wasi Construction codebase.
 * CONSTRUCTION DIVISION ONLY — never import this from any BIM page.
 */
import {
  Building2, HardHat, Ruler, Zap, Shield, Cog, CheckCircle2, Clock, IndianRupee,
  FileCheck, HeadphonesIcon, Landmark, TrendingUp, ShieldCheck, Users, Handshake,
  Cpu, Home, Store, Factory, Lock, Building, Briefcase, Droplets, Flame, Wind, Wifi,
  Truck, TreePine, Wrench, PaintBucket, Hammer, Sofa, Leaf, Trash2, CircuitBoard,
  Award, Target, Globe, Lightbulb, PenTool, Layers, Eye, Workflow, Box, Castle,
} from "lucide-react";
import {
  FileText, Scan, Printer, Radio, Satellite, BrainCircuit, Siren, Thermometer,
  BarChart3, Boxes, AlertTriangle, HeartPulse, Gauge, CloudRain, GitBranch,
  MapPin, Mail,
} from "lucide-react";

import wcModernBungalow from "@/assets/wc-modern-bungalow.jpg";
import wcTraditionalBungalow from "@/assets/wc-traditional-bungalow.jpg";
import wcModernVilla from "@/assets/wc-modern-villa.jpg";
import wcHighriseApartment from "@/assets/wc-highrise-apartment.jpg";
import wcWarehouse from "@/assets/wc-warehouse.jpg";
import wcCommercialOffice from "@/assets/wc-commercial-office.jpg";
import wcIndustrialFactory from "@/assets/wc-industrial-factory.jpg";
import wcConstructionProgress from "@/assets/wc-construction-progress.jpg";
import wcModelRender from "@/assets/wc-3d-model-render.jpg";
import wcDetailedDocs from "@/assets/wc-detailed-documents.jpg";
import wcComponents3d from "@/assets/wc-3d-components.jpg";
import wcProjectsBg from "@/assets/wc-projects-bg.jpg";
import wcServicesBg from "@/assets/wc-services-bg.jpg";

export {
  wcProjectsBg, wcServicesBg,
};

/* ---------------------------------- HOME ---------------------------------- */

export const wcHero = {
  subtitle: "Nagpur's Premier Construction Company",
  title1: "ENGINEERING",
  title2: "EXCELLENCE",
  desc: "From foundation to finish — civil engineering, structural design, MEP services & turnkey construction. BIM-powered, IS code compliant, delivered on time.",
};

export const wcStats = [
  { value: "Multitude", label: "Projects Completed" },
  { value: "Decade+", label: "Years Experience" },
  { value: "Large-Scale", label: "Team Strength" },
  { value: "Multi-Crore", label: "Project Value" },
];

export const wcHomeServices = [
  { icon: Building2, title: "Civil Engineering", desc: "Foundation to finish — roads, bridges, buildings with IS 456 compliance" },
  { icon: Ruler, title: "Structural Design", desc: "RCC & steel structures engineered per IS 800 and IS 875 standards" },
  { icon: Zap, title: "MEP Services", desc: "Mechanical, electrical & plumbing systems with BIM integration" },
  { icon: HardHat, title: "Project Management", desc: "End-to-end construction management with real-time monitoring" },
  { icon: Shield, title: "Quality Assurance", desc: "NDT testing, material testing & NBC 2016 compliance auditing" },
  { icon: Cog, title: "Infrastructure", desc: "Highways, flyovers, metro projects with latest construction tech" },
];

export const wcWhyReasons = [
  { icon: CheckCircle2, title: "100% Code Compliant", desc: "Every project meets IS 456, IS 800, IS 1893, NBC 2016, and all local authority regulations — zero compromise on safety and legality." },
  { icon: Clock, title: "On-Time Delivery Guarantee", desc: "AI-driven project scheduling and real-time drone monitoring ensure your project is delivered on schedule, every single time." },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden costs. Detailed BOQ, milestone-based billing, and real-time budget tracking give you full financial visibility." },
  { icon: FileCheck, title: "Single-Window Approvals", desc: "We handle all permits — RERA registration, environmental clearance, fire NOC, structural stability certificate — so you don't have to." },
  { icon: HeadphonesIcon, title: "Dedicated Project Manager", desc: "Every client gets a single point of contact with 24/7 access to project dashboards, progress reports, and site cameras." },
  { icon: Landmark, title: "All Disciplines Under One Roof", desc: "Civil, structural, MEP, interior, landscaping — no need to coordinate multiple contractors. We deliver end-to-end." },
  { icon: TrendingUp, title: "Future-Ready Construction", desc: "BIM modeling, 3D concrete printing, IoT sensors, and green building tech ensure your structure is built for decades ahead." },
  { icon: ShieldCheck, title: "10-Year Structural Warranty", desc: "We stand behind our work with a comprehensive structural warranty, backed by third-party inspection reports." },
  { icon: Users, title: "500+ Skilled Professionals", desc: "Our team includes certified engineers, architects, quantity surveyors, and site supervisors — all in-house, no outsourcing." },
  { icon: Handshake, title: "Client-First Philosophy", desc: "Weekly progress meetings, change-order flexibility, and post-completion support — because our relationship doesn't end at handover." },
  { icon: Cpu, title: "Smart Building Integration", desc: "Home automation, energy management, security systems — we deliver intelligent buildings that reduce operating costs by up to 40%." },
  { icon: Shield, title: "ISO 9001 & BIS Certified", desc: "Quality management systems certified to international standards. Every material tested, every process documented." },
];

export const wcProjectTypes = [
  { icon: Home, title: "Residential Projects", desc: "Bungalows, villas, apartments, row houses, and housing societies — designed with vastu compliance and modern amenities." },
  { icon: Store, title: "Commercial Projects", desc: "Office complexes, shopping malls, showrooms, hotels, and mixed-use developments — Grade A construction with BMS integration." },
  { icon: Factory, title: "Industrial Projects", desc: "Factories, warehouses, cold storage, manufacturing plants — PEB structures with heavy-duty flooring and ETP/STP systems." },
  { icon: Lock, title: "Private Projects", desc: "Custom luxury homes, farmhouses, private clubs, religious structures — bespoke design with premium finishes and smart home integration." },
  { icon: Building, title: "Government Projects", desc: "Public infrastructure, schools, hospitals, government offices — PWD/CPWD specification compliance with transparent documentation." },
  { icon: Briefcase, title: "Semi-Government Projects", desc: "PSU offices, railway infrastructure, defense housing, utility buildings — meeting stringent government quality and timeline standards." },
];

export const wcPropertyTypes = [
  {
    icon: Home,
    title: "Modern Bungalow",
    desc: "Contemporary design with open floor plans, large windows, and smart home features. IS 456 compliant RCC structure with modern finishes.",
    features: ["Open Floor Plan", "Smart Home Ready", "Vastu Compliant", "Energy Efficient"],
  },
  {
    icon: Castle,
    title: "Traditional Bungalow",
    desc: "Classic Indian architecture with courtyard design, carved pillars, and natural ventilation. Built with traditional techniques meeting modern safety standards.",
    features: ["Courtyard Design", "Natural Ventilation", "Carved Pillars", "Terracotta Roofing"],
  },
  {
    icon: Landmark,
    title: "Modern Villa",
    desc: "Ultra-luxury villa with infinity pool, landscaped terraces, home automation, and bespoke interiors. IGBC green building certified.",
    features: ["Infinity Pool", "Home Automation", "Landscaped Terraces", "Premium Finishes"],
  },
  {
    icon: Building,
    title: "High-Rise Apartment",
    desc: "State-of-the-art residential tower with earthquake-resistant design per IS 1893, advanced MEP systems, and world-class amenities.",
    features: ["Earthquake Resistant", "Advanced MEP", "RERA Compliant", "World-Class Amenities"],
  },
];

export const wcPhases = [
  { icon: Lightbulb, step: "PHASE 01", title: "Consultation & Planning", desc: "Understanding your vision, site analysis, feasibility study, and initial budget estimation with detailed project scoping." },
  { icon: PenTool, step: "PHASE 02", title: "Design & Engineering", desc: "Architectural design, structural analysis per IS codes, MEP planning, and 3D BIM modeling for visualization." },
  { icon: Layers, step: "PHASE 03", title: "BIM Coordination", desc: "Clash detection, 4D scheduling, 5D cost estimation, and multi-discipline coordination using Revit & Navisworks." },
  { icon: Eye, step: "PHASE 04", title: "Approvals & Permits", desc: "RERA registration, municipal approvals, environmental clearance, fire NOC, and all regulatory compliance." },
  { icon: Hammer, step: "PHASE 05", title: "Construction & Monitoring", desc: "On-site execution with drone monitoring, quality testing, milestone tracking, and real-time client dashboards." },
  { icon: CheckCircle2, step: "PHASE 06", title: "Handover & Support", desc: "Final inspection, defect rectification, documentation handover, OC/CC assistance, and post-construction support." },
];

export const wcBimAdvantages = [
  { icon: Cpu, title: "Clash Detection", desc: "Identify and resolve conflicts between structural, MEP, and architectural systems before construction begins." },
  { icon: Users, title: "Team Collaboration", desc: "Real-time cloud-based coordination between architects, engineers, and contractors using BIM 360." },
  { icon: FileCheck, title: "Accurate Documentation", desc: "Auto-generated drawings, BOQ, and specifications directly from the 3D model — zero manual errors." },
  { icon: Workflow, title: "4D Scheduling", desc: "Link construction activities to the 3D model for visual timeline planning and progress tracking." },
  { icon: Box, title: "5D Cost Estimation", desc: "Real-time budget tracking tied to model elements — know costs at every stage of construction." },
  { icon: Globe, title: "Digital Twin", desc: "Create a digital replica of the building for facility management, maintenance planning, and lifecycle analysis." },
];

export const wcTestimonials = [
  { name: "Rajesh Sharma", location: "Nagpur, Maharashtra", project: "Residential Bungalow", rating: 5, quote: "Wasi Construction transformed our dream home into reality. Their attention to detail and adherence to IS codes gave us complete confidence in the structural integrity of our home." },
  { name: "Priya Deshmukh", location: "Wardha, Maharashtra", project: "Commercial Complex", rating: 5, quote: "The BIM coordination was exceptional. We could visualize every aspect of our commercial building before construction began. Zero surprises, on-time delivery." },
  { name: "Anil Patil", location: "Nagpur, Maharashtra", project: "Industrial Warehouse", rating: 5, quote: "Our 1,20,000 sq.ft warehouse was delivered ahead of schedule. The pre-engineered steel structure and quality of construction exceeded our expectations." },
  { name: "Meena Agrawal", location: "Amravati, Maharashtra", project: "Luxury Villa", rating: 5, quote: "From the infinity pool to the home automation system — every detail was executed flawlessly. Wasi Construction truly delivers premium quality." },
  { name: "Dr. Suresh Rao", location: "Nagpur, Maharashtra", project: "Hospital Building", rating: 4, quote: "Building a hospital requires specialized MEP systems and strict compliance. Wasi Construction handled everything professionally with complete transparency." },
  { name: "Vikram Singh", location: "Chandrapur, Maharashtra", project: "Government School", rating: 5, quote: "PWD specifications, tight deadlines, and government documentation — Wasi Construction managed it all efficiently. The school was completed on time and within budget." },
];

export const wcCeo = {
  name: "MD TAHA WASI",
  role: "Founder & CEO",
  desc: "A visionary civil engineer with deep expertise in BIM technology, structural analysis, and sustainable construction. Md Taha Wasi founded Wasi Construction with a mission to bring world-class construction standards to Nagpur and Central India.",
  badges: ["BIS Certified", "ISO 9001", "RERA Reg.", "NBC 2016"],
};

export const wcCta = {
  desc: "Let's discuss your project. From concept to completion, we deliver excellence at every stage.",
};

/* --------------------------------- ABOUT ---------------------------------- */

export const wcAbout = {
  eyebrow: "WHO WE ARE",
  title1: "Building the",
  title2: "Future",
  desc: "Wasi Construction is a leading construction company based in Nagpur, specializing in civil engineering, structural design, MEP services, and turnkey construction projects.",
  ceoDesc1: "With deep expertise in BIM technology, structural analysis, and sustainable construction practices, Md Taha Wasi brings a unique blend of technical excellence and visionary leadership to every project.",
  ceoDesc2: "His commitment to quality, innovation, and client satisfaction has made Wasi Construction one of the most trusted names in Nagpur's construction industry.",
};

export const wcValues = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every project, from material selection to final finishing." },
  { icon: Users, title: "Collaboration", desc: "We work closely with clients, architects, and consultants to deliver unified results." },
  { icon: Target, title: "Precision", desc: "BIM-powered accuracy ensures every dimension, joint, and connection is perfect." },
  { icon: Globe, title: "Innovation", desc: "We embrace new technologies — 3D printing, IoT sensors, drone surveys — to build smarter." },
];

export const wcCodes = [
  { code: "IS 456:2000", title: "Plain & Reinforced Concrete", desc: "Code of practice for structural concrete design" },
  { code: "IS 800:2007", title: "Steel Structures", desc: "General construction in steel — limit state method" },
  { code: "IS 1893:2016", title: "Seismic Design", desc: "Criteria for earthquake resistant design of structures" },
  { code: "IS 875", title: "Design Loads", desc: "Code of practice for design loads for buildings — Parts 1-5" },
  { code: "NBC 2016", title: "National Building Code", desc: "India's comprehensive building regulation standard" },
  { code: "IS 2950", title: "Foundation Design", desc: "Code of practice for design of raft foundations" },
];

/* -------------------------------- SERVICES -------------------------------- */

export const wcServicesIntro = {
  eyebrow: "ALL DISCIPLINES",
  title1: "Our",
  title2: "Services",
  desc: "From civil engineering to smart building automation — we offer comprehensive construction services under one roof, all backed by Indian Standard codes and international best practices.",
};

export const wcServiceCategories = [
  { key: "Core", label: "CORE SERVICES", desc: "Foundation construction services — civil, structural, project management, and infrastructure development." },
  { key: "MEP", label: "MEP SERVICES", desc: "Mechanical, Electrical, Plumbing & Fire protection systems — all integrated with BIM coordination." },
  { key: "Smart", label: "SMART SERVICES", desc: "Intelligent building technologies — automation, IoT, green building certifications & sustainability." },
  { key: "Maintenance", label: "MAINTENANCE SERVICES", desc: "Post-construction support — AMC, renovation, retrofitting & system upgrades." },
  { key: "Finishing", label: "FINISHING SERVICES", desc: "Final touches — interiors, landscaping, waterproofing & specialized finishing works." },
];

export const wcAllServices = [
  { icon: Building2, title: "Civil Engineering", desc: "Foundation to superstructure — earthwork, RCC framing, masonry, plastering, flooring, and finishing per IS 456 & NBC 2016.", tags: ["IS 456", "NBC 2016", "CPWD"], category: "Core" },
  { icon: Ruler, title: "Structural Design", desc: "RCC & steel structural analysis and design per IS 800, IS 1893 (seismic), IS 875 (loads) using ETABS, STAAD Pro & SAP2000.", tags: ["IS 800", "IS 1893", "IS 875"], category: "Core" },
  { icon: Zap, title: "Electrical Systems", desc: "Complete electrical design and installation — HT/LT panels, transformers, DG synchronization, UPS, lighting per IS 3043 & IE Rules.", tags: ["IS 3043", "IE Rules", "NBC"], category: "MEP" },
  { icon: Droplets, title: "Plumbing & Sanitation", desc: "Water supply, drainage, rainwater harvesting, STP/ETP systems, and fire hydrant lines per IS 2065 & municipal regulations.", tags: ["IS 2065", "NBC 2016", "Municipal"], category: "MEP" },
  { icon: Flame, title: "Fire Protection", desc: "Fire detection, sprinkler systems, hydrant networks, smoke management, and TAC NOC compliance per NBC Part 4 & IS 15105.", tags: ["NBC Part 4", "TAC NOC", "IS 15105"], category: "MEP" },
  { icon: Wind, title: "HVAC Systems", desc: "Heating, ventilation & air conditioning — VRV/VRF systems, AHU, chiller plants, and ductwork per ASHRAE & IGBC standards.", tags: ["ASHRAE", "IGBC", "IS 3103"], category: "MEP" },
  { icon: HardHat, title: "Project Management", desc: "End-to-end project management — scheduling, cost control, quality assurance, risk management using Primavera & MS Project.", tags: ["PMI", "PERT/CPM", "EVM"], category: "Core" },
  { icon: Shield, title: "Quality Assurance", desc: "Material testing, NDT, concrete cube testing, soil investigation, and quality audits per IS 516, IS 2720 & NABL standards.", tags: ["IS 516", "IS 2720", "NABL"], category: "Core" },
  { icon: Cog, title: "Infrastructure", desc: "Roads, bridges, flyovers, metro rail, water treatment plants — designed per IRC, MoRTH & NHAI specifications.", tags: ["IRC", "MoRTH", "NHAI"], category: "Core" },
  { icon: Wifi, title: "Smart Buildings", desc: "Building automation, IoT sensors, energy management, access control, CCTV — integrated BMS solutions for modern buildings.", tags: ["BIM Level 2", "IoT", "IBMS"], category: "Smart" },
  { icon: Truck, title: "Equipment & Fleet", desc: "Own fleet of tower cranes, batching plants, transit mixers, excavators, piling rigs — all GPS-tracked and well-maintained.", tags: ["Own Fleet", "GPS Tracked", "Maintained"], category: "Core" },
  { icon: TreePine, title: "Green Building", desc: "Sustainable construction — solar integration, rainwater harvesting, waste management, energy-efficient design per IGBC & GRIHA.", tags: ["IGBC", "GRIHA", "LEED"], category: "Smart" },
  { icon: Wrench, title: "MEPF Maintenance & AMC", desc: "Annual maintenance contracts for Mechanical, Electrical, Plumbing & Fire systems. Preventive maintenance schedules, 24/7 emergency support, equipment health monitoring, and spare parts management for uninterrupted building operations.", tags: ["AMC", "Preventive", "24/7"], category: "Maintenance" },
  { icon: PaintBucket, title: "Renovation & Remodeling", desc: "Complete building renovation — structural retrofitting, facade upgrades, interior remodeling, MEP system overhaul, waterproofing restoration, and seismic strengthening for aging structures per IS 15988.", tags: ["Retrofitting", "IS 15988", "Facade"], category: "Maintenance" },
  { icon: Sofa, title: "Interior Design & Fit-Out", desc: "Turnkey interior solutions — space planning, modular furniture, false ceiling, flooring, wall finishes, lighting design, and furniture procurement for residential, commercial, and hospitality projects.", tags: ["Turnkey", "Modular", "Design"], category: "Finishing" },
  { icon: Leaf, title: "Landscaping & Hardscaping", desc: "Complete landscape architecture — garden design, irrigation systems, paved pathways, water features, outdoor lighting, vertical gardens, and terrace gardens with sustainable plant species.", tags: ["Landscape", "Irrigation", "Sustainable"], category: "Finishing" },
  { icon: ShieldCheck, title: "Waterproofing Solutions", desc: "Advanced waterproofing for basements, terraces, bathrooms, water tanks, swimming pools — using APP/SBS membranes, crystalline coatings, polyurethane systems, and injection grouting.", tags: ["APP/SBS", "Crystalline", "PU Coating"], category: "Finishing" },
  { icon: Trash2, title: "Demolition & Site Clearance", desc: "Controlled demolition of structures — mechanical demolition, implosion planning, debris removal, asbestos handling, site leveling, and environmental compliance for safe project handover.", tags: ["Controlled", "Environmental", "Safety"], category: "Core" },
  { icon: Hammer, title: "Formwork & Scaffolding", desc: "Mivan aluminum formwork, PERI systems, and conventional formwork for high-rise construction. Certified scaffolding with load calculations, safety nets, and IS 3696 compliance.", tags: ["Mivan", "PERI", "IS 3696"], category: "Core" },
  { icon: CircuitBoard, title: "Building Automation (BAS)", desc: "Integrated Building Automation Systems — HVAC control, lighting automation, access control, CCTV surveillance, energy management, and centralized BMS for operational efficiency.", tags: ["BAS", "IBMS", "Energy"], category: "Smart" },
];

/* -------------------------------- PROJECTS -------------------------------- */

export type WcSector = "all" | "residential" | "commercial" | "industrial";
export type WcViewMode = "designs" | "progress" | "3d-models" | "documents" | "components";

export const wcProjectsIntro = {
  eyebrow: "OUR PORTFOLIO",
  title1: "Project",
  title2: "Showcase",
  desc: "Explore our projects by sector, type, and discipline — with design renders, construction progress, 3D BIM models, and detailed documentation.",
  bySector:
    "By Sector: Residential • Commercial • Industrial — By Type: Bungalows • Villas • Apartments • Warehouses • Offices • Factories",
};

export const wcProjects = [
  {
    id: 1, name: "Luxury Modern Bungalow", sector: "residential" as const, type: "Bungalow",
    image: wcModernBungalow, area: "3,500 sq.ft", status: "Completed",
    disciplines: ["Civil", "Structural", "Electrical", "Plumbing", "Interior"],
    desc: "A contemporary bungalow with open floor plans, smart home integration, and vastu-compliant design. IS 456 & NBC 2016 compliant.",
    tags: ["IS 456", "Vastu", "Smart Home"],
  },
  {
    id: 2, name: "Traditional Heritage Bungalow", sector: "residential" as const, type: "Bungalow",
    image: wcTraditionalBungalow, area: "4,200 sq.ft", status: "Completed",
    disciplines: ["Civil", "Structural", "Plumbing", "Landscaping"],
    desc: "Classic Indian bungalow with courtyard design, terracotta roofing, carved pillars, and natural ventilation systems.",
    tags: ["Heritage", "Courtyard", "IS 456"],
  },
  {
    id: 3, name: "Premium Luxury Villa", sector: "residential" as const, type: "Villa",
    image: wcModernVilla, area: "6,800 sq.ft", status: "Completed",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Interior", "Automation"],
    desc: "Ultra-premium villa with infinity pool, landscaped terraces, home automation, private lifts, and bespoke finishes.",
    tags: ["Luxury", "Smart Home", "IGBC"],
  },
  {
    id: 4, name: "Skyline Residential Tower", sector: "residential" as const, type: "Apartment",
    image: wcHighriseApartment, area: "2,50,000 sq.ft", status: "In Progress",
    disciplines: ["Civil", "Structural", "MEP", "Fire", "HVAC", "Elevator"],
    desc: "State-of-the-art 22-floor residential tower with earthquake-resistant design (IS 1893), advanced MEP systems, and RERA compliance.",
    tags: ["IS 1893", "RERA", "High-Rise"],
  },
  {
    id: 5, name: "Corporate Office Complex", sector: "commercial" as const, type: "Office",
    image: wcCommercialOffice, area: "1,80,000 sq.ft", status: "Completed",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Fire", "BMS"],
    desc: "Grade-A commercial office with glass curtain wall facade, VRV HVAC system, 100% power backup, and IGBC Gold certification.",
    tags: ["IGBC Gold", "BMS", "Grade-A"],
  },
  {
    id: 6, name: "Logistics Warehouse Hub", sector: "industrial" as const, type: "Warehouse",
    image: wcWarehouse, area: "1,20,000 sq.ft", status: "Completed",
    disciplines: ["Civil", "Structural", "Electrical", "Fire", "MEP"],
    desc: "Pre-engineered steel warehouse with large-span structure, dock levelers, automated fire suppression, and industrial-grade flooring.",
    tags: ["PEB", "Fire Safety", "Industrial"],
  },
  {
    id: 7, name: "Manufacturing Plant", sector: "industrial" as const, type: "Factory",
    image: wcIndustrialFactory, area: "3,00,000 sq.ft", status: "In Progress",
    disciplines: ["Civil", "Structural", "MEP", "HVAC", "Fire", "Automation"],
    desc: "Heavy industrial manufacturing facility with crane gantry systems, chemical-resistant flooring, clean room zones, and ETP/STP plants.",
    tags: ["Heavy Industry", "Clean Room", "ETP"],
  },
];

export const wcSectorFilters = [
  { key: "all" as const, label: "All Projects", icon: Building2 },
  { key: "residential" as const, label: "Residential", icon: Home },
  { key: "commercial" as const, label: "Commercial", icon: Store },
  { key: "industrial" as const, label: "Industrial", icon: Factory },
];

export const wcViewModes = [
  { key: "designs" as const, label: "Design Renders", icon: Eye, desc: "Architectural visualization and rendered designs" },
  { key: "progress" as const, label: "Construction Progress", icon: Hammer, desc: "Live site photos and milestone tracking" },
  { key: "3d-models" as const, label: "3D BIM Models", icon: Box, desc: "Interactive 3D models and BIM coordination" },
  { key: "documents" as const, label: "Detailed Documents", icon: FileText, desc: "BOQ, drawings, specifications & reports" },
  { key: "components" as const, label: "3D Components", icon: Layers, desc: "Exploded views showing structural & MEP systems" },
];

export const wcViewModeImages: Record<WcViewMode, string> = {
  designs: wcModernVilla,
  progress: wcConstructionProgress,
  "3d-models": wcModelRender,
  documents: wcDetailedDocs,
  components: wcComponents3d,
};

export const wcViewModeDetails: Record<WcViewMode, { title: string; points: string[] }> = {
  designs: {
    title: "Photorealistic Design Renders",
    points: [
      "3D exterior & interior visualization using V-Ray / Lumion",
      "Day & night lighting simulation for realistic ambiance",
      "Material finishes, textures & color palette preview",
      "Landscape integration with surrounding context",
      "Client walkthroughs in VR before construction begins",
    ],
  },
  progress: {
    title: "Real-Time Construction Monitoring",
    points: [
      "Drone-captured aerial progress imagery every week",
      "Milestone-based photo documentation (foundation, RCC, finishing)",
      "Time-lapse videos from site-installed cameras",
      "Comparison overlays: planned vs. actual progress",
      "Digital dashboards accessible 24/7 from anywhere",
    ],
  },
  "3d-models": {
    title: "BIM Level 2 — 3D Coordination",
    points: [
      "Federated Revit models with all disciplines integrated",
      "Clash detection between Structural, MEP & Architecture",
      "4D scheduling — linking model to project timeline",
      "5D costing — real-time budget tracking per element",
      "Navisworks walkthroughs for stakeholder reviews",
    ],
  },
  documents: {
    title: "Comprehensive Project Documentation",
    points: [
      "Detailed architectural & structural drawings (AutoCAD / Revit)",
      "Bill of Quantities (BOQ) with item-wise cost breakdowns",
      "Material specifications & approved vendor lists",
      "Structural stability certificates & NDT test reports",
      "RERA documentation & local authority approvals",
    ],
  },
  components: {
    title: "Exploded 3D Component Views",
    points: [
      "Structural frame: columns, beams, slabs, shear walls",
      "MEP systems: ductwork, piping, cable trays, conduits",
      "Fire protection: sprinklers, hydrants, smoke detectors",
      "Facade system: curtain wall, cladding, waterproofing layers",
      "Foundation: pile caps, grade beams, raft foundations",
    ],
  },
};

export const wcDisciplineScope = [
  { discipline: "Civil Engineering", scope: "Earthwork, RCC, masonry, plastering, waterproofing, finishing works", codes: "IS 456, NBC 2016, CPWD", pct: "100%" },
  { discipline: "Structural Design", scope: "RCC & steel design, seismic analysis, wind load analysis, foundation design", codes: "IS 800, IS 1893, IS 875", pct: "100%" },
  { discipline: "Electrical Systems", scope: "HT/LT distribution, DG sets, UPS, lighting, BMS, fire alarm", codes: "IS 3043, IE Rules, NBC", pct: "100%" },
  { discipline: "Plumbing & Sanitation", scope: "Water supply, drainage, STP/ETP, RWH, firefighting systems", codes: "IS 2065, NBC 2016", pct: "100%" },
  { discipline: "HVAC Systems", scope: "Central AC, VRF/VRV, ventilation, clean room HVAC, BMS integration", codes: "ASHRAE, IGBC, IS 3103", pct: "100%" },
  { discipline: "Fire Protection", scope: "Detection, suppression, sprinklers, hydrants, smoke management", codes: "NBC Part 4, IS 15105", pct: "100%" },
];

/* --------------------------------- CONTACT -------------------------------- */

export const wcContact = {
  eyebrow: "GET IN TOUCH",
  title1: "Let's",
  title2: "Connect",
  desc: "Ready to start your project? Reach out to us for a free consultation and detailed project estimate.",
  formTitle1: "Send Us a",
  formTitle2: "Message",
  email: "taha@witecglobal.com",
  officeLines: ["WITEC Construction Division", "Sadar, Nagpur, Maharashtra, India"],
  hours: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
};

export const wcContactServices = [
  "Civil Engineering", "Structural Design", "MEP Services",
  "Project Management", "Infrastructure", "Smart Building", "Other",
];

export const wcContactCards = [
  { icon: MapPin, title: "HEAD OFFICE", lines: wcContact.officeLines },
  { icon: Mail, title: "EMAIL", lines: [wcContact.email], isEmail: true },
  { icon: Clock, title: "WORKING HOURS", lines: wcContact.hours },
];

export const wcRegistrations = [
  "RERA Registered", "ISO 9001:2015", "ISO 14001", "BIS Certified", "PWD Approved", "CPWD Empaneled",
];

/* ------------------------------- TECHNOLOGY ------------------------------- */

export const wcTechIntro = {
  eyebrow: "INNOVATION HUB",
  title1: "Construction",
  title2: "Technology",
  safetyTitle: "Safety",
  desc: "We integrate cutting-edge technology with proven construction methods to deliver projects that are safer, faster, and more cost-effective. Our commitment to safety protects every life on site.",
};

export const wcCoreTechs = [
  { icon: Cpu, title: "BIM Modeling", desc: "Building Information Modeling for complete project lifecycle management — from design to facility management.", stats: "40% fewer RFIs · 30% less rework", features: ["Revit & Navisworks", "Clash Detection", "4D Scheduling", "5D Cost Estimation", "BIM 360 Cloud", "Digital Twin"] },
  { icon: Scan, title: "3D LiDAR Scanning", desc: "High-precision laser scanning for as-built documentation, deformation analysis, and volumetric calculations.", stats: "±2mm accuracy · 1M pts/sec", features: ["Terrestrial Scanning", "Aerial LiDAR", "Point Cloud Processing", "As-Built Models", "Deformation Analysis", "Volume Calculation"] },
  { icon: Satellite, title: "Drone Surveying", desc: "Aerial surveying, orthomosaic mapping, volumetric analysis, and real-time construction progress monitoring.", stats: "90% faster surveying", features: ["DJI Matrice 300", "Orthomosaic Maps", "Volumetric Analysis", "Thermal Imaging", "Progress Monitoring", "3D Site Models"] },
  { icon: Printer, title: "3D Concrete Printing", desc: "Additive manufacturing for complex architectural elements, formwork reduction, and rapid prototyping.", stats: "60% less formwork cost", features: ["COBOD Printers", "Custom Geometry", "Rapid Prototyping", "Material Optimization", "Complex Facades", "Reduced Waste"] },
  { icon: Radio, title: "IoT Monitoring", desc: "Embedded sensors for real-time structural health monitoring — temperature, vibration, tilt, and curing conditions.", stats: "24/7 real-time monitoring", features: ["Embedded Sensors", "Vibration Monitoring", "Curing Temperature", "Tilt Detection", "Cloud Dashboard", "Auto-Alerts"] },
  { icon: BrainCircuit, title: "AI Project Management", desc: "Machine learning for schedule optimization, risk prediction, resource allocation, and automated progress tracking.", stats: "25% schedule improvement", features: ["ML Scheduling", "Risk Prediction", "Computer Vision", "Resource Allocation", "Progress Tracking", "Cost Forecasting"] },
];

export const wcFuturisticTechs = [
  { icon: Layers, title: "Modular Construction", desc: "Factory-built modules assembled on-site — 50% faster construction, controlled quality, minimal waste, and weather-independent building." },
  { icon: Building2, title: "Self-Healing Concrete", desc: "Bacteria-embedded concrete that automatically repairs micro-cracks, extending structural life by 50+ years." },
  { icon: Leaf, title: "Net-Zero Buildings", desc: "Energy-positive buildings with solar, wind, geothermal systems, and passive design strategies for zero carbon footprint." },
  { icon: GitBranch, title: "Blockchain Contracts", desc: "Smart contracts for transparent milestone payments, supply chain tracking, and immutable project documentation." },
  { icon: Eye, title: "AR/VR Construction", desc: "Augmented reality for on-site construction guidance, virtual walkthroughs, and real-time design overlay on physical structures." },
  { icon: Zap, title: "Construction Robotics", desc: "Robotic bricklaying, automated rebar tying, 3D printing, and drone-based inspection for faster, safer construction." },
];

export const wcTechVision = {
  title: "Our Vision for 2030",
  desc: "By 2030, we aim to have 50% of our projects using modular construction, 100% BIM adoption, net-zero energy buildings, and fully automated quality inspection using AI and robotics.",
};

export const wcSafetyProtocols = [
  { icon: HardHat, title: "PPE Compliance", desc: "Mandatory helmets, safety shoes, harnesses, gloves, goggles, and high-visibility vests for all site personnel." },
  { icon: Flame, title: "Fire Safety", desc: "Fire extinguishers at every floor, fire hydrant systems, evacuation drills, and hot work permit procedures." },
  { icon: AlertTriangle, title: "Fall Protection", desc: "Safety nets, guardrails, personal fall arrest systems, and scaffold inspection for all work above 2 meters." },
  { icon: Siren, title: "Emergency Response", desc: "Trained emergency response teams, evacuation plans, emergency assembly points, and incident reporting systems." },
  { icon: Eye, title: "CCTV Surveillance", desc: "24/7 CCTV monitoring of all active construction zones with AI-based unsafe behavior detection." },
  { icon: FileCheck, title: "Permit to Work", desc: "Formal permit system for hot work, confined space entry, excavation, electrical work, and crane operations." },
  { icon: HeartPulse, title: "First Aid Stations", desc: "Fully equipped first aid stations on every floor with trained first responders and ambulance on standby." },
  { icon: Wind, title: "Air Quality Monitoring", desc: "Continuous dust monitoring, water sprinkler systems, anti-smog guns, and green barriers around construction zones." },
];

export const wcWorkerWelfare = [
  { icon: Shield, title: "Insurance Coverage", desc: "Comprehensive insurance for all workers — health, accident, and life coverage as per BOCW Act 1996." },
  { icon: Users, title: "Safety Training", desc: "Monthly safety induction, toolbox talks, hands-on fire drill training, and safety certification programs." },
  { icon: Thermometer, title: "Heat Stress Prevention", desc: "Mandatory rest breaks, hydration stations, shaded rest areas, and modified work hours during summer months." },
  { icon: HeartPulse, title: "Medical Checkups", desc: "Pre-employment and periodic health checkups, hearing tests, lung function tests, and vision screening." },
  { icon: Droplets, title: "Site Hygiene", desc: "Clean drinking water, sanitary toilets, handwash stations, waste segregation, and regular pest control." },
  { icon: Lock, title: "Site Security", desc: "24/7 security guards, biometric attendance, material gate pass system, and visitor management protocols." },
];

export const wcSafetyStats = [
  { value: "0", label: "Fatalities" },
  { value: "500+", label: "Workers Trained" },
  { value: "24/7", label: "Site Monitoring" },
  { value: "100%", label: "Safety Compliance" },
];

export const wcEnvProtection = [
  { icon: Leaf, title: "Dust Control", desc: "Anti-smog guns, water sprinklers, green barriers, covered material storage, and wheel washing for all vehicles." },
  { icon: Droplets, title: "Water Management", desc: "Rainwater harvesting, construction water recycling, STP systems, and zero-discharge sites for water conservation." },
  { icon: Wind, title: "Noise Control", desc: "Sound barriers, equipment silencers, restricted working hours, and continuous noise level monitoring per CPCB standards." },
  { icon: CloudRain, title: "Waste Management", desc: "Construction waste segregation, recycling of steel and concrete debris, responsible disposal, and zero-landfill targets." },
  { icon: Gauge, title: "Carbon Reduction", desc: "Low-carbon concrete mixes, electric equipment fleet, solar-powered site offices, and carbon footprint tracking." },
  { icon: Wifi, title: "Environmental Monitoring", desc: "IoT-based continuous monitoring of air quality, noise levels, water quality, and soil contamination around sites." },
];

export const wcProjectCompletion = [
  { icon: Workflow, title: "Lean Construction", desc: "Lean principles eliminate waste, reduce costs, and accelerate timelines — Last Planner System & value stream mapping.", stat: "35% faster delivery" },
  { icon: BarChart3, title: "Primavera P6 Scheduling", desc: "CPM-based scheduling with resource leveling, critical path analysis, and earned value management for precise tracking.", stat: "99.2% schedule accuracy" },
  { icon: Boxes, title: "Supply Chain Management", desc: "Vendor pre-qualification, just-in-time delivery, material tracking, and strategic procurement for zero material delays.", stat: "Zero material delays" },
  { icon: Target, title: "Quality Control", desc: "Third-party inspection, 100% material testing, non-conformance reporting, and zero-defect handover guarantee.", stat: "Zero-defect handover" },
  { icon: Truck, title: "Fleet & Logistics", desc: "Own fleet of 50+ machines — tower cranes, batching plants, transit mixers — all GPS-tracked and maintained.", stat: "Own fleet of 50+ machines" },
  { icon: Clock, title: "Real-Time Dashboards", desc: "Client-facing dashboards with daily progress photos, milestone tracking, budget status, and quality reports.", stat: "Daily client dashboards" },
];

export const wcEquipment = [
  "Tower Cranes (Liebherr, Potain)", "Batching Plants (Schwing Stetter)", "Concrete Pumps (Putzmeister)",
  "Piling Rigs (Bauer, Soilmec)", "Excavators (Komatsu, CAT)", "Transit Mixers (Schwing Stetter)",
  "Telescopic Handlers (JCB, Manitou)", "Bar Bending Machines (Jaypee)", "Total Station (Leica, Topcon)",
  "Welding Machines (Lincoln, ESAB)", "Compactors & Rollers (Hamm)", "DG Sets (Cummins, Kirloskar)",
];

export const wcCertifications = [
  "ISO 9001:2015 — Quality Management", "ISO 14001:2015 — Environmental Management",
  "ISO 45001:2018 — Occupational Health & Safety", "OHSAS 18001 Compliant Processes",
  "NBC 2016 Full Compliance", "IS 456, IS 800, IS 1893 Adherence",
  "IGBC Green Building Standards", "BOCW Act 1996 Compliance",
];
