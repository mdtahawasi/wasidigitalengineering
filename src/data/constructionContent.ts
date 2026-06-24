import {
  HardHat, Building2, Hammer, Construction, Truck, Layers, Ruler, ShieldCheck,
  Wrench, Droplets, PaintBucket, Trees, Mountain, Map, Cog, ClipboardList,
  Forklift, Brush, Building, Workflow,
} from "lucide-react";
import heroCrane from "@/assets/hero-construction-crane.jpg";
import heroBridge from "@/assets/hero-construction-bridge.jpg";
import heroTower from "@/assets/hero-construction-tower.jpg";
import heroTeam from "@/assets/hero-construction-team.jpg";

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