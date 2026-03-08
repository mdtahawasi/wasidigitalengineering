import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, Layers3, ScanLine, Cpu, BarChart3, Cog,
  CheckCircle2, ChevronRight, Globe, Zap, Shield, Brain, Monitor,
  Workflow, Users, Award, TrendingUp, Lock, Clock, Star, HeartHandshake,
  BadgeCheck, Target, Sparkles, DollarSign, FileCheck, Handshake
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import SoftwareShowcase from "@/components/SoftwareShowcase";

const ConstructionScene = lazy(() => import("@/components/ConstructionScene"));
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const services = [
  { icon: Building2, title: "BIM Modeling", desc: "Comprehensive 3D modeling for Architecture, Structure, and MEP across all LODs." },
  { icon: Layers3, title: "Clash Detection", desc: "AI-powered clash detection and coordination across all disciplines." },
  { icon: ScanLine, title: "Scan to BIM", desc: "Point cloud processing and as-built modeling from laser scans." },
  { icon: Cpu, title: "4D/5D Simulation", desc: "Construction sequencing and cost estimation integrated with BIM." },
  { icon: BarChart3, title: "BIM Consulting", desc: "BIM execution plans, standards, and digital transformation strategy." },
  { icon: Cog, title: "Digital Twin", desc: "Real-time digital replicas for facility management and operations." },
];

const stats = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Disciplines Covered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const projects = [
  { img: project1, title: "Al Maktoum Commercial Tower", category: "Commercial", location: "Dubai, UAE" },
  { img: project2, title: "Marina Residences", category: "Residential", location: "Abu Dhabi, UAE" },
  { img: project3, title: "Metro Line Extension", category: "Infrastructure", location: "Riyadh, KSA" },
  { img: project4, title: "King Faisal Medical City", category: "Healthcare", location: "Jeddah, KSA" },
];

const testimonials = [
  { quote: "WASI transformed our design workflow with their BIM expertise. Project delivery time reduced by 35%.", author: "Ahmad Al-Rashid", role: "Director, Al Futtaim Engineering" },
  { quote: "Their clash detection services saved us millions in rework costs. Exceptional attention to detail.", author: "Sarah Chen", role: "Project Manager, Consolidated Contractors" },
  { quote: "The digital twin solution they built gives us unparalleled insight into building operations.", author: "James Mitchell", role: "VP Operations, Emaar Properties" },
];


const processSteps = [
  { step: "01", title: "Discovery", desc: "Understand project scope, standards, and deliverables", icon: Brain },
  { step: "02", title: "BIM Setup", desc: "Templates, families, BEP, and collaboration setup", icon: Monitor },
  { step: "03", title: "Modeling", desc: "Multi-discipline BIM modeling across all LODs", icon: Building2 },
  { step: "04", title: "Coordination", desc: "Clash detection, resolution, and interdisciplinary review", icon: Workflow },
  { step: "05", title: "Delivery", desc: "Final QA/QC, documentation, and handover", icon: Award },
  { step: "06", title: "Support", desc: "Ongoing facility management and model maintenance", icon: Shield },
];

const industries = [
  { name: "Commercial", count: "12+ Projects" },
  { name: "Residential", count: "8+ Projects" },
  { name: "Healthcare", count: "4+ Projects" },
  { name: "Infrastructure", count: "3+ Projects" },
  { name: "Industrial", count: "2+ Projects" },
  { name: "Education", count: "2+ Projects" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <ConstructionScene />
        </Suspense>
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-6"
            >
              Engineering & BIM Consultancy
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground mb-6">
              Building the Future with{" "}
              <span className="text-gradient">Digital Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              AI-integrated BIM solutions powering the AEC industry. From concept to facility management — we digitize every dimension of construction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
              >
                Explore Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 hover:border-primary/30 transition-all"
              >
                View Projects <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trusted by ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-border/30"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-6 items-center">
                {["AECOM", "Turner", "Arup", "Skanska", "Bechtel"].map((name) => (
                  <span key={name} className="text-sm font-display font-medium text-muted-foreground/50 hover:text-primary/60 transition-colors">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Services"
            title="End-to-End BIM Solutions"
            description="Comprehensive digital engineering services spanning the entire project lifecycle, powered by AI and automation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                    <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-padding bg-card/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Our Process"
            title="From Concept to Completion"
            description="A proven 6-step methodology ensuring precision, compliance, and excellence at every stage."
          />
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                  className="glass rounded-xl p-5 text-center relative group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mt-3 mb-3 group-hover:bg-gradient-primary transition-all duration-500">
                    <step.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Featured Projects"
            title="Transforming Visions into Reality"
            description="Explore our portfolio of landmark projects delivered with precision BIM methodology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Industries We Serve"
            title="Cross-Sector BIM Excellence"
            description="Delivering precision BIM services across every major AEC sector."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all duration-500 cursor-default"
              >
                <h4 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{ind.name}</h4>
                <p className="text-xs text-muted-foreground">{ind.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOFTWARE ECOSYSTEM ===== */}
      <SoftwareShowcase />

      {/* ===== WHY WASI ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Why WASI"
            title="Your Trusted BIM Partner"
            description="We combine deep AEC domain expertise with cutting-edge technology to deliver measurable results across every phase of your project lifecycle."
          />

          {/* Key differentiators grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "ISO 19650 Compliance",
                text: "Every project follows ISO 19650 information management standards. We ensure proper BIM execution plans, naming conventions, and data security protocols are in place from day one.",
                stat: "100% Compliant",
              },
              {
                icon: Brain,
                title: "AI-Driven Clash Detection",
                text: "Our proprietary AI algorithms analyze multi-discipline models to detect and classify clashes by severity, reducing manual review time by 70% and eliminating costly on-site rework.",
                stat: "70% Faster",
              },
              {
                icon: Award,
                title: "Certified Professionals",
                text: "Our team holds 50+ certifications across Autodesk, Bentley, Trimble, and buildingSMART platforms. We invest in continuous training to stay ahead of industry evolution.",
                stat: "50+ Certifications",
              },
              {
                icon: Globe,
                title: "24/7 Global Delivery",
                text: "With teams across India, UAE, and KSA, we operate around the clock. Our follow-the-sun model ensures your project progresses even while you sleep — faster turnarounds, zero downtime.",
                stat: "3 Time Zones",
              },
              {
                icon: Zap,
                title: "Agile BIM Methodology",
                text: "We use sprint-based delivery with weekly milestones, daily standups, and transparent progress tracking. You get predictable delivery timelines and the flexibility to adapt scope in real-time.",
                stat: "Weekly Sprints",
              },
              {
                icon: TrendingUp,
                title: "QA/QC at Every LOD",
                text: "Our 5-stage quality gate process validates model accuracy, data integrity, and standard compliance at LOD 100 through LOD 500 — catching errors before they become expensive problems.",
                stat: "5-Stage QA",
              },
              {
                icon: Users,
                title: "Dedicated Project Managers",
                text: "Every engagement gets a dedicated BIM Manager who serves as your single point of contact. They coordinate across disciplines, manage timelines, and ensure deliverables exceed expectations.",
                stat: "1:1 Support",
              },
              {
                icon: Workflow,
                title: "CDE & Collaboration",
                text: "We set up and manage Common Data Environments on platforms like ACC, Aconex, and SharePoint. Seamless model sharing, version control, and approval workflows keep everyone aligned.",
                stat: "Real-Time Sync",
              },
              {
                icon: Cpu,
                title: "Automation & Scripting",
                text: "We build custom Dynamo scripts, Revit plugins, and Python automations that eliminate repetitive tasks — from batch parameter updates to automated drawing sheet generation, saving 40%+ hours.",
                stat: "40% Time Saved",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-500">
                      <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.stat}</span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.5 }} className="mt-12 glass rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "98%", label: "On-Time Delivery Rate" },
                { value: "35%", label: "Avg. Cost Reduction" },
                { value: "500K+", label: "Clashes Resolved" },
                { value: "0", label: "Data Security Breaches" },
              ].map((badge, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{badge.value}</p>
                  <p className="text-xs text-muted-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6 relative">
                <div className="absolute top-4 right-4 text-4xl text-primary/10 font-display font-bold">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Digitize Your Next Project?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Let's discuss how our BIM solutions can reduce costs, eliminate rework, and accelerate delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
