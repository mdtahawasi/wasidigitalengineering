import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2, Layers3, ScanLine, Cpu, BarChart3, Cog,
  Hammer, FileCheck, Monitor, Zap, ArrowRight, CheckCircle2,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const allServices = [
  {
    icon: Building2,
    title: "Architectural BIM Modeling",
    desc: "Detailed 3D architectural models from LOD 100 to LOD 500. We create parametric Revit models for design development, construction documentation, and as-built records.",
    features: ["Conceptual & Detailed Design Models", "Construction Documentation", "Rendering & Visualization", "As-Built Documentation"],
  },
  {
    icon: Hammer,
    title: "Structural BIM Services",
    desc: "Complete structural modeling including steel detailing, rebar modeling, precast panel detailing, and structural analysis coordination.",
    features: ["Steel & Rebar Detailing", "Precast Panel Modeling", "Structural Analysis Integration", "Shop Drawing Generation"],
  },
  {
    icon: Cog,
    title: "MEP BIM Services",
    desc: "Comprehensive MEP modeling for HVAC, plumbing, electrical, and fire protection systems with full coordination and fabrication-ready outputs.",
    features: ["HVAC System Modeling", "Electrical & Plumbing BIM", "Fire Protection Design", "Fabrication-Ready Spool Drawings"],
  },
  {
    icon: Layers3,
    title: "BIM Coordination & Clash Detection",
    desc: "AI-enhanced multi-discipline coordination using Navisworks and Solibri. We detect, report, and resolve clashes before they reach the field.",
    features: ["Multi-Discipline Coordination", "AI-Powered Clash Reports", "Resolution Tracking", "Coordination Meetings"],
  },
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
    icon: Monitor,
    title: "Digital Twin Solutions",
    desc: "Create live digital replicas of your built assets connected to IoT sensors for real-time monitoring, predictive maintenance, and facility management.",
    features: ["IoT Integration", "Real-Time Monitoring", "Predictive Maintenance", "FM Handover"],
  },
  {
    icon: BarChart3,
    title: "BIM Consulting & Strategy",
    desc: "BIM execution plans, organizational readiness assessments, training programs, and digital transformation roadmaps for your organization.",
    features: ["BEP Development", "ISO 19650 Compliance", "Staff Training", "Digital Transformation"],
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

const disciplines = [
  "Architecture", "Structural Engineering", "Mechanical (HVAC)", "Electrical Engineering",
  "Plumbing & Fire Protection", "Civil Engineering", "Landscape Architecture", "Interior Design",
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
              Comprehensive <span className="text-gradient">BIM Solutions</span> for Every Phase
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From conceptual design to facility management, our end-to-end BIM services cover every discipline and every stage of the project lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allServices.map((service, i) => (
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

      {/* Disciplines */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Disciplines" title="Multi-Discipline Coverage" description="Our team covers all major AEC disciplines under one roof." />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {disciplines.map((d, i) => (
              <motion.span key={i} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.5 }} className="px-4 py-2 rounded-full glass text-sm text-foreground">
                {d}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Technology" title="Software & Tools" description="We work with industry-leading platforms." />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Autodesk Revit", "Navisworks", "AutoCAD", "Tekla Structures", "Solibri", "BIM 360", "Dynamo", "Grasshopper", "Rhino", "Bentley MicroStation", "Trimble Connect", "ACC"].map((tool, i) => (
              <motion.span key={i} {...fadeUp} transition={{ delay: i * 0.04, duration: 0.4 }} className="px-4 py-2 rounded-lg bg-muted text-sm text-foreground font-medium">
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
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Tell us about your project and we'll tailor our services to match.</p>
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
