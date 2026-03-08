import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2, Layers3, ScanLine, Cpu, BarChart3, Cog,
  Hammer, FileCheck, Monitor, Zap, ArrowRight, CheckCircle2,
  PenTool, Columns3, TreePine, Route, Wrench, Database, ClipboardCheck, Settings2,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const disciplines = [
  {
    icon: Building2,
    title: "Architecture",
    desc: "Comprehensive architectural BIM modeling from concept to construction documentation. We create parametric Revit models at LOD 100 through LOD 500, including 3D visualization, rendering, design development, construction drawings, and as-built documentation. Our architectural team handles space planning, building envelope design, code compliance, and accessibility analysis integrated within the BIM environment.",
    features: ["Conceptual & Schematic Design (LOD 100-200)", "Design Development & CD Sets (LOD 300-400)", "As-Built Documentation (LOD 500)", "3D Visualization & Rendering", "Code Compliance & Accessibility Analysis", "Space Planning & Area Schedules"],
  },
  {
    icon: Hammer,
    title: "Structural Engineering",
    subtitle: "RCC, Steel & Composite",
    desc: "Complete structural BIM services covering Reinforced Concrete (RCC), Structural Steel, and Composite structures. We deliver detailed rebar modeling with bar bending schedules, steel connection detailing, shop drawing generation, precast panel modeling, and structural analysis coordination. Our models integrate with analysis software for seamless structural design workflows.",
    features: ["RCC Detailing & Bar Bending Schedules", "Steel Connection Detailing & Shop Drawings", "Composite Structure Modeling", "Precast Panel Detailing", "Structural Analysis Integration (ETABS, SAP2000)", "Foundation & Pile Design Coordination"],
  },
  {
    icon: PenTool,
    title: "Interior Fit Out",
    desc: "Detailed interior fit-out BIM modeling for commercial offices, retail spaces, hospitality, and residential interiors. We model ceiling systems, partition walls, flooring layouts, joinery details, furniture, fixtures & equipment (FF&E), and all finishes with accurate material specifications and quantities for procurement and installation coordination.",
    features: ["Ceiling & Partition Modeling", "Joinery & Millwork Detailing", "FF&E Placement & Scheduling", "Material Finish Specifications", "Flooring & Tiling Layout Plans", "Interior Coordination with MEP"],
  },
  {
    icon: Columns3,
    title: "Facade Engineering",
    desc: "BIM modeling for facade systems including curtain walls, cladding panels, glazing systems, rain screens, and structural glazing. We provide detailed panel scheduling, bracket and anchor modeling, thermal performance analysis coordination, and fabrication-ready outputs for facade contractors.",
    features: ["Curtain Wall & Glazing Modeling", "Cladding Panel Scheduling", "Bracket & Anchor Detailing", "Thermal Performance Coordination", "Fabrication-Ready Panel Drawings", "Facade Coordination with Structure"],
  },
  {
    icon: TreePine,
    title: "Landscape Architecture",
    desc: "Landscape BIM modeling including hardscape design, softscape planting plans, irrigation systems, outdoor lighting, site furniture, and grading. We coordinate landscape models with civil, architectural, and MEP disciplines to ensure seamless site development and construction.",
    features: ["Hardscape & Softscape Modeling", "Irrigation System Design", "Grading & Drainage Coordination", "Site Furniture & Lighting", "Planting Plans & Schedules", "Landscape-Civil Coordination"],
  },
  {
    icon: Route,
    title: "Infrastructure",
    desc: "BIM services for infrastructure projects including roads, highways, bridges, tunnels, utilities, and site development. We use Civil 3D, InfraWorks, and OpenRoads for corridor modeling, earthwork calculations, utility clash detection, and construction sequencing for large-scale infrastructure delivery.",
    features: ["Road & Highway Corridor Modeling", "Bridge & Tunnel BIM", "Underground Utility Modeling", "Earthwork & Grading Calculations", "Drainage & Stormwater Design", "Utility Clash Detection & Resolution"],
  },
  {
    icon: Wrench,
    title: "MEPF & Coordination",
    desc: "Full Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) BIM modeling with multi-discipline coordination. We model complete HVAC systems, electrical distribution, plumbing networks, and fire suppression systems. Our AI-enhanced clash detection using Navisworks and Solibri ensures all services are coordinated before construction, saving time and eliminating costly rework.",
    features: ["HVAC Ductwork & Equipment Modeling", "Electrical Distribution & Cable Tray", "Plumbing & Drainage Systems", "Fire Protection & Sprinkler Design", "Multi-Discipline Clash Detection (Navisworks)", "Coordination Meetings & Issue Resolution"],
  },
  {
    icon: Database,
    title: "Information Management",
    desc: "BIM Information Management services including Common Data Environment (CDE) setup, BIM Execution Plans (BEP), information delivery planning, and ISO 19650 compliance. We establish data standards, naming conventions, model audit workflows, and ensure all project stakeholders can access and exchange information seamlessly throughout the project lifecycle.",
    features: ["CDE Setup & Administration", "BIM Execution Plan (BEP) Development", "ISO 19650 Compliance Framework", "Information Delivery Planning", "Model Audit & QA/QC Workflows", "Stakeholder Data Exchange Protocols"],
  },
  {
    icon: ClipboardCheck,
    title: "COBie & Asset Data",
    desc: "COBie (Construction Operations Building Information Exchange) data management for seamless handover of asset information from design and construction to facility management. We structure equipment schedules, maintenance data, warranty information, spare parts lists, and space data in COBie-compliant formats for building owners and facility managers.",
    features: ["COBie Data Collection & Structuring", "Equipment & Asset Scheduling", "Warranty & Maintenance Data", "Space & Zone Classification", "FM System Integration", "Owner Handover Documentation"],
  },
  {
    icon: Settings2,
    title: "Facility Management",
    desc: "BIM for Facility Management (BIM4FM) including digital twin setup, IoT sensor integration, predictive maintenance planning, energy monitoring, and space utilization analytics. We help building owners leverage their BIM investment for ongoing operations, reducing operational costs and extending asset lifecycle through data-driven facility management.",
    features: ["Digital Twin for FM Operations", "IoT Sensor Integration & Monitoring", "Predictive Maintenance Planning", "Energy Performance Analytics", "Space Utilization & Occupancy Tracking", "Asset Lifecycle Management"],
  },
];

const additionalServices = [
  {
    icon: ScanLine,
    title: "Scan to BIM",
    desc: "Convert point cloud data from laser scans and drones into accurate BIM models for renovation, retrofit, and heritage projects.",
    features: ["Point Cloud Processing", "As-Built BIM Models", "Heritage & Retrofit", "Reality Capture Integration"],
  },
  {
    icon: Cpu,
    title: "4D & 5D BIM Simulation",
    desc: "Link your BIM models to construction schedules (4D) and cost estimates (5D) for powerful project visualization and control.",
    features: ["Construction Sequencing", "Schedule Integration", "Cost Estimation", "What-If Scenarios"],
  },
  {
    icon: FileCheck,
    title: "Quantity Takeoff & BOQ",
    desc: "Automated model-based quantity extraction for accurate bills of quantities, cost planning, and procurement optimization.",
    features: ["Automated Extraction", "BOQ Generation", "Cost Planning", "Procurement Support"],
  },
  {
    icon: Zap,
    title: "AI & Automation Services",
    desc: "Custom AI tools for design optimization, generative design, automated code compliance checking, and intelligent BIM workflows.",
    features: ["Generative Design", "Code Compliance Checking", "Workflow Automation", "Custom AI Tools"],
  },
];

const software = [
  "Autodesk Revit", "Navisworks", "AutoCAD", "Civil 3D", "InfraWorks",
  "Tekla Structures", "Solibri", "BIM 360 / ACC", "Dynamo", "Grasshopper",
  "Rhino", "Bentley MicroStation", "OpenRoads", "Trimble Connect",
  "ETABS", "SAP2000", "SketchUp", "Enscape", "Lumion",
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              Comprehensive <span className="text-gradient">BIM Solutions</span> for Every Discipline
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From conceptual design to facility management, our end-to-end BIM services cover every discipline and every stage of the project lifecycle — Architecture, Structure, Interior, Facade, Landscape, Infrastructure, MEPF, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discipline-Specific Services */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Specialized Disciplines" title="Discipline-Wise BIM Services" description="Each discipline is handled by specialist teams with deep domain expertise and industry-specific workflows." />
          <div className="space-y-6">
            {disciplines.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-1">{service.title}</h3>
                    {service.subtitle && <p className="text-sm text-primary font-medium mb-2">{service.subtitle}</p>}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {service.features.map((f, fi) => (
                        <span key={fi} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={13} className="text-primary shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Additional Services" title="Specialized BIM Solutions" description="Beyond core disciplines, we offer advanced BIM services powered by AI and automation." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((f, fi) => (
                        <span key={fi} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 size={12} className="text-primary shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Industries" title="Sectors We Serve" description="30+ projects delivered across all major AEC industry sectors." />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Residential", "Commercial", "Industrial", "Healthcare", "Education", "Hospitality", "Retail", "Infrastructure", "Mixed-Use", "Data Centers"].map((d, i) => (
              <motion.span key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.5 }} className="px-5 py-2.5 rounded-full glass text-sm text-foreground font-medium">
                {d}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Technology" title="Software & Tools" description="We work with industry-leading platforms across all disciplines." />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {software.map((tool, i) => (
              <motion.span key={i} {...fadeUp} transition={{ delay: i * 0.03, duration: 0.4 }} className="px-4 py-2 rounded-lg bg-muted text-sm text-foreground font-medium">
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-center">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Need a Custom BIM Solution?</h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Tell us about your project and we'll tailor our services to match your discipline and requirements.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                Request a Proposal <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
