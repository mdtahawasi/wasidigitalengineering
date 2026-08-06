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
  { key: "Core", label: "CORE SERVICES", desc: "Foundational construction disciplines delivered end-to-end by our in-house engineering teams." },
  { key: "MEP", label: "MEP SERVICES", desc: "Mechanical, electrical, plumbing and fire systems engineered and installed to code." },
  { key: "Smart", label: "SMART SERVICES", desc: "Technology-led building systems — automation, IoT, and sustainable green building solutions." },
  { key: "Maintenance", label: "MAINTENANCE SERVICES", desc: "Keeping buildings performing at their peak long after handover." },
  { key: "Finishing", label: "FINISHING SERVICES", desc: "The final layer of craftsmanship — interiors, landscape, waterproofing and detailing." },
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
