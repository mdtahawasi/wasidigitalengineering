import { motion } from "framer-motion";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import {
  Building2, Layers3, ScanLine, Cpu, BarChart3, Cog,
  Hammer, FileCheck, Monitor, Zap, ArrowRight, CheckCircle2,
  PenTool, Columns3, TreePine, Route, Wrench, Database, ClipboardCheck, Settings2,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

const disciplines = [
  { icon: Building2, title: "Architecture", desc: "Comprehensive architectural BIM modeling from concept to construction documentation. We create parametric Revit models at LOD 100 through LOD 500, including 3D visualization, rendering, design development, construction drawings, and as-built documentation.", features: ["Conceptual & Schematic Design (LOD 100-200)", "Design Development & CD Sets (LOD 300-400)", "As-Built Documentation (LOD 500)", "3D Visualization & Rendering", "Code Compliance & Accessibility Analysis", "Space Planning & Area Schedules"] },
  { icon: Hammer, title: "Structural Engineering", subtitle: "RCC, Steel & Composite", desc: "Complete structural BIM services covering Reinforced Concrete (RCC), Structural Steel, and Composite structures.", features: ["RCC Detailing & Bar Bending Schedules", "Steel Connection Detailing & Shop Drawings", "Composite Structure Modeling", "Precast Panel Detailing", "Structural Analysis Integration (ETABS, SAP2000)", "Foundation & Pile Design Coordination"] },
  { icon: PenTool, title: "Interior Fit Out", desc: "Detailed interior fit-out BIM modeling for commercial offices, retail spaces, hospitality, and residential interiors.", features: ["Ceiling & Partition Modeling", "Joinery & Millwork Detailing", "FF&E Placement & Scheduling", "Material Finish Specifications", "Flooring & Tiling Layout Plans", "Interior Coordination with MEP"] },
  { icon: Columns3, title: "Facade Engineering", desc: "BIM modeling for facade systems including curtain walls, cladding panels, glazing systems, rain screens, and structural glazing.", features: ["Curtain Wall & Glazing Modeling", "Cladding Panel Scheduling", "Bracket & Anchor Detailing", "Thermal Performance Coordination", "Fabrication-Ready Panel Drawings", "Facade Coordination with Structure"] },
  { icon: TreePine, title: "Landscape Architecture", desc: "Landscape BIM modeling including hardscape design, softscape planting plans, irrigation systems, outdoor lighting, site furniture, and grading.", features: ["Hardscape & Softscape Modeling", "Irrigation System Design", "Grading & Drainage Coordination", "Site Furniture & Lighting", "Planting Plans & Schedules", "Landscape-Civil Coordination"] },
  { icon: Route, title: "Infrastructure", desc: "BIM services for infrastructure projects including roads, highways, bridges, tunnels, utilities, and site development.", features: ["Road & Highway Corridor Modeling", "Bridge & Tunnel BIM", "Underground Utility Modeling", "Earthwork & Grading Calculations", "Drainage & Stormwater Design", "Utility Clash Detection & Resolution"] },
  { icon: Wrench, title: "MEPF & Coordination", desc: "Full Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) BIM modeling with multi-discipline coordination.", features: ["HVAC Ductwork & Equipment Modeling", "Electrical Distribution & Cable Tray", "Plumbing & Drainage Systems", "Fire Protection & Sprinkler Design", "Multi-Discipline Clash Detection (Navisworks)", "Coordination Meetings & Issue Resolution"] },
  { icon: Database, title: "Information Management", desc: "BIM Information Management services including Common Data Environment (CDE) setup, BIM Execution Plans (BEP), and ISO 19650 compliance.", features: ["CDE Setup & Administration", "BIM Execution Plan (BEP) Development", "ISO 19650 Compliance Framework", "Information Delivery Planning", "Model Audit & QA/QC Workflows", "Stakeholder Data Exchange Protocols"] },
  { icon: ClipboardCheck, title: "COBie & Asset Data", desc: "COBie data management for seamless handover of asset information from design and construction to facility management.", features: ["COBie Data Collection & Structuring", "Equipment & Asset Scheduling", "Warranty & Maintenance Data", "Space & Zone Classification", "FM System Integration", "Owner Handover Documentation"] },
  { icon: Settings2, title: "Facility Management", desc: "BIM for Facility Management (BIM4FM) including digital twin setup, IoT sensor integration, and predictive maintenance planning.", features: ["Digital Twin for FM Operations", "IoT Sensor Integration & Monitoring", "Predictive Maintenance Planning", "Energy Performance Analytics", "Space Utilization & Occupancy Tracking", "Asset Lifecycle Management"] },
];

const additionalServices = [
  { icon: ScanLine, title: "Scan to BIM", desc: "Convert point cloud data from laser scans and drones into accurate BIM models for renovation, retrofit, and heritage projects.", features: ["Point Cloud Processing", "As-Built BIM Models", "Heritage & Retrofit", "Reality Capture Integration"] },
  { icon: Cpu, title: "4D & 5D BIM Simulation", desc: "Link your BIM models to construction schedules (4D) and cost estimates (5D) for powerful project visualization and control.", features: ["Construction Sequencing", "Schedule Integration", "Cost Estimation", "What-If Scenarios"] },
  { icon: FileCheck, title: "Quantity Takeoff & BOQ", desc: "Automated model-based quantity extraction for accurate bills of quantities, cost planning, and procurement optimization.", features: ["Automated Extraction", "BOQ Generation", "Cost Planning", "Procurement Support"] },
  { icon: Zap, title: "AI & Automation Services", desc: "Custom AI tools for design optimization, generative design, automated code compliance checking, and intelligent BIM workflows.", features: ["Generative Design", "Code Compliance Checking", "Workflow Automation", "Custom AI Tools"] },
];

const software = [
  "Autodesk Revit", "Navisworks", "AutoCAD", "Civil 3D", "InfraWorks",
  "Tekla Structures", "Solibri", "BIM 360 / ACC", "Dynamo", "Grasshopper",
  "Rhino", "Bentley MicroStation", "OpenRoads", "Trimble Connect",
  "ETABS", "SAP2000", "SketchUp", "Enscape", "Lumion",
];

export default function ServicesPage() {
  const { t } = useLanguage();

  useScrollToHash();

  return (
    <Layout>
      {/* Hero */}
      <section id="services-hero" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4"
            >
              {t("services.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span> {t("services.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("services.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Discipline-Specific Services */}
      <section id="disciplines" className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("services.disciplinesLabel")} title={t("services.disciplinesTitle")} description={t("services.disciplinesDesc")} />
          <div className="space-y-6">
            {disciplines.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                    className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                  >
                    <service.icon size={28} className="text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-1">{t(service.title)}</h3>
                    {service.subtitle && <p className="text-sm text-primary font-medium mb-2">{service.subtitle}</p>}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t(service.desc)}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {service.features.map((f, fi) => (
                        <span key={fi} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={13} className="text-primary shrink-0" /> {f}
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
      <section id="additional-services" className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("services.additionalLabel")} title={t("services.additionalTitle")} description={t("services.additionalDesc")} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {additionalServices.map((service, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t(service.title)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(service.desc)}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((f, fi) => (
                        <span key={fi} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 size={12} className="text-primary shrink-0" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("services.industriesLabel")} title={t("services.industriesTitle")} description={t("services.industriesDesc")} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {["Residential", "Commercial", "Industrial", "Healthcare", "Education", "Hospitality", "Retail", "Infrastructure", "Mixed-Use", "Data Centers"].map((d, i) => (
              <motion.span key={i} variants={staggerItem} className="px-5 py-2.5 rounded-full glass text-sm text-foreground font-medium">
                {d}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Software */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("services.techLabel")} title={t("services.techTitle")} description={t("services.techDesc")} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {software.map((tool, i) => (
              <motion.span key={i} variants={staggerItem} className="px-4 py-2 rounded-lg bg-muted text-sm text-foreground font-medium">
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4"
              >
                {t("services.ctaTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary-foreground/80 max-w-lg mx-auto mb-8"
              >
                {t("services.ctaDesc")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                  {t("services.requestProposal")} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
