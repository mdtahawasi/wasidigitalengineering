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
import PageHeroSlider from "@/components/PageHeroSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

import imgArchitecture from "@/assets/discipline-architecture.jpg";
import imgStructural from "@/assets/discipline-structural.jpg";
import imgInterior from "@/assets/discipline-interior.jpg";
import imgFacade from "@/assets/discipline-facade.jpg";
import imgLandscape from "@/assets/discipline-landscape.jpg";
import imgInfrastructure from "@/assets/discipline-infrastructure.jpg";
import imgMEPF from "@/assets/discipline-mepf.jpg";
import imgInfoMgmt from "@/assets/discipline-info-mgmt.jpg";
import imgCOBie from "@/assets/discipline-cobie.jpg";
import imgFacilityMgmt from "@/assets/discipline-facility-mgmt.jpg";
import imgScanToBIM from "@/assets/discipline-scan-to-bim.jpg";
import img4D5D from "@/assets/discipline-4d5d.jpg";
import imgQTO from "@/assets/discipline-qto.jpg";
import imgAI from "@/assets/discipline-ai-automation.jpg";
import heroServices1 from "@/assets/hero-services-1.jpg";
import heroServices2 from "@/assets/hero-services-2.jpg";

const servicesHeroSlides = [
  { image: heroServices1, badge: "Our Services", headline: "End-to-End", headlineHighlight: "BIM Solutions", headlineEnd: "for Every Discipline", subtitle: "From architectural concept to facility management — comprehensive digital engineering services across all AEC disciplines." },
  { image: heroServices2, badge: "14+ Disciplines", headline: "Precision", headlineHighlight: "Engineering", headlineEnd: "at Every Scale", subtitle: "Architecture, Structure, MEPF, Facade, Landscape, Infrastructure — delivering LOD 100 to LOD 500 with ISO 19650 compliance." },
  { image: imgArchitecture, badge: "Innovation", headline: "AI-Powered", headlineHighlight: "BIM Workflows", headlineEnd: "for the Future", subtitle: "Scan-to-BIM, Digital Twins, 4D/5D Simulation, and automated QTO — transforming traditional construction." },
];

const disciplines = [
  { icon: Building2, title: "Architecture", img: imgArchitecture, desc: "Comprehensive architectural BIM modeling from concept to construction documentation. We create parametric Revit models at LOD 100 through LOD 500, including 3D visualization, rendering, design development, construction drawings, and as-built documentation.", features: ["Conceptual & Schematic Design (LOD 100-200)", "Design Development & CD Sets (LOD 300-400)", "As-Built Documentation (LOD 500)", "3D Visualization & Rendering", "Code Compliance & Accessibility Analysis", "Space Planning & Area Schedules"] },
  { icon: Hammer, title: "Structural Engineering", img: imgStructural, subtitle: "RCC, Steel & Composite", desc: "Complete structural BIM services covering Reinforced Concrete (RCC), Structural Steel, and Composite structures.", features: ["RCC Detailing & Bar Bending Schedules", "Steel Connection Detailing & Shop Drawings", "Composite Structure Modeling", "Precast Panel Detailing", "Structural Analysis Integration (ETABS, SAP2000)", "Foundation & Pile Design Coordination"] },
  { icon: PenTool, title: "Interior Fit Out", img: imgInterior, desc: "Detailed interior fit-out BIM modeling for commercial offices, retail spaces, hospitality, and residential interiors.", features: ["Ceiling & Partition Modeling", "Joinery & Millwork Detailing", "FF&E Placement & Scheduling", "Material Finish Specifications", "Flooring & Tiling Layout Plans", "Interior Coordination with MEP"] },
  { icon: Columns3, title: "Facade Engineering", img: imgFacade, desc: "BIM modeling for facade systems including curtain walls, cladding panels, glazing systems, rain screens, and structural glazing.", features: ["Curtain Wall & Glazing Modeling", "Cladding Panel Scheduling", "Bracket & Anchor Detailing", "Thermal Performance Coordination", "Fabrication-Ready Panel Drawings", "Facade Coordination with Structure"] },
  { icon: TreePine, title: "Landscape Architecture", img: imgLandscape, desc: "Landscape BIM modeling including hardscape design, softscape planting plans, irrigation systems, outdoor lighting, site furniture, and grading.", features: ["Hardscape & Softscape Modeling", "Irrigation System Design", "Grading & Drainage Coordination", "Site Furniture & Lighting", "Planting Plans & Schedules", "Landscape-Civil Coordination"] },
  { icon: Route, title: "Infrastructure", img: imgInfrastructure, desc: "BIM services for infrastructure projects including roads, highways, bridges, tunnels, utilities, and site development.", features: ["Road & Highway Corridor Modeling", "Bridge & Tunnel BIM", "Underground Utility Modeling", "Earthwork & Grading Calculations", "Drainage & Stormwater Design", "Utility Clash Detection & Resolution"] },
  { icon: Wrench, title: "MEPF & Coordination", img: imgMEPF, desc: "Full Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) BIM modeling with multi-discipline coordination.", features: ["HVAC Ductwork & Equipment Modeling", "Electrical Distribution & Cable Tray", "Plumbing & Drainage Systems", "Fire Protection & Sprinkler Design", "Multi-Discipline Clash Detection (Navisworks)", "Coordination Meetings & Issue Resolution"] },
  { icon: Database, title: "Information Management", img: imgInfoMgmt, desc: "BIM Information Management services including Common Data Environment (CDE) setup, BIM Execution Plans (BEP), and ISO 19650 compliance.", features: ["CDE Setup & Administration", "BIM Execution Plan (BEP) Development", "ISO 19650 Compliance Framework", "Information Delivery Planning", "Model Audit & QA/QC Workflows", "Stakeholder Data Exchange Protocols"] },
  { icon: ClipboardCheck, title: "COBie & Asset Data", img: imgCOBie, desc: "COBie data management for seamless handover of asset information from design and construction to facility management.", features: ["COBie Data Collection & Structuring", "Equipment & Asset Scheduling", "Warranty & Maintenance Data", "Space & Zone Classification", "FM System Integration", "Owner Handover Documentation"] },
  { icon: Settings2, title: "Facility Management", img: imgFacilityMgmt, desc: "BIM for Facility Management (BIM4FM) including digital twin setup, IoT sensor integration, and predictive maintenance planning.", features: ["Digital Twin for FM Operations", "IoT Sensor Integration & Monitoring", "Predictive Maintenance Planning", "Energy Performance Analytics", "Space Utilization & Occupancy Tracking", "Asset Lifecycle Management"] },
];

const additionalServices = [
  { icon: ScanLine, title: "Scan to BIM", img: imgScanToBIM, desc: "Convert point cloud data from laser scans and drones into accurate BIM models for renovation, retrofit, and heritage projects.", features: ["Point Cloud Processing", "As-Built BIM Models", "Heritage & Retrofit", "Reality Capture Integration"] },
  { icon: Cpu, title: "4D & 5D BIM Simulation", img: img4D5D, desc: "Link your BIM models to construction schedules (4D) and cost estimates (5D) for powerful project visualization and control.", features: ["Construction Sequencing", "Schedule Integration", "Cost Estimation", "What-If Scenarios"] },
  { icon: FileCheck, title: "Quantity Takeoff & BOQ", img: imgQTO, desc: "Automated model-based quantity extraction for accurate bills of quantities, cost planning, and procurement optimization.", features: ["Automated Extraction", "BOQ Generation", "Cost Planning", "Procurement Support"] },
  { icon: Zap, title: "AI & Automation Services", img: imgAI, desc: "Custom AI tools for design optimization, generative design, automated code compliance checking, and intelligent BIM workflows.", features: ["Generative Design", "Code Compliance Checking", "Workflow Automation", "Custom AI Tools"] },
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
      <PageHeroSlider slides={servicesHeroSlides} />

      {/* Discipline-Specific Services */}
      <section id="disciplines" className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("services.disciplinesLabel")} title={t("services.disciplinesTitle")} description={t("services.disciplinesDesc")} />
          <div className="space-y-8">
            {disciplines.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.7 }}
                    className="lg:w-2/5 relative overflow-hidden"
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-48 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/20" />
                  </motion.div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xl text-foreground">{t(service.title)}</h3>
                        {service.subtitle && <p className="text-sm text-primary font-medium">{service.subtitle}</p>}
                      </div>
                    </div>
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
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">{t(service.title)}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(service.desc)}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f, fi) => (
                      <span key={fi} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-primary shrink-0" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section id="industry-sectors" className="section-padding">
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
      <section id="software-stack" className="section-padding bg-card/30">
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
