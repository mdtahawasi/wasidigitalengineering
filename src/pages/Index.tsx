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
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, scaleIn, fadeIn, staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";

const ConstructionScene = lazy(() => import("@/components/ConstructionScene"));
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const serviceKeys = [
  { icon: Building2, titleKey: "svc.bimModeling", descKey: "svc.bimModelingDesc" },
  { icon: Layers3, titleKey: "svc.clashDetection", descKey: "svc.clashDetectionDesc" },
  { icon: ScanLine, titleKey: "svc.scanToBim", descKey: "svc.scanToBimDesc" },
  { icon: Cpu, titleKey: "svc.4d5dSim", descKey: "svc.4d5dSimDesc" },
  { icon: BarChart3, titleKey: "svc.bimConsulting", descKey: "svc.bimConsultingDesc" },
  { icon: Cog, titleKey: "svc.digitalTwin", descKey: "svc.digitalTwinDesc" },
];

const stats = [
  { value: 30, suffix: "+", labelKey: "stat.projectsDelivered" },
  { value: 6, suffix: "+", labelKey: "stat.yearsExperience" },
  { value: 10, suffix: "+", labelKey: "stat.disciplinesCovered" },
  { value: 100, suffix: "%", labelKey: "stat.clientSatisfaction" },
];

const projects = [
  { img: project1, title: "Al Maktoum Commercial Tower", categoryKey: "projects.commercial", location: "Dubai, UAE" },
  { img: project2, title: "Marina Residences", categoryKey: "projects.residential", location: "Abu Dhabi, UAE" },
  { img: project3, title: "Metro Line Extension", categoryKey: "projects.infrastructure", location: "Riyadh, KSA" },
  { img: project4, title: "King Faisal Medical City", categoryKey: "projects.healthcare", location: "Jeddah, KSA" },
];

const testimonials = [
  { quote: "WASI transformed our design workflow with their BIM expertise. Project delivery time reduced by 35%.", author: "Ahmad Al-Rashid", role: "Director, Al Futtaim Engineering" },
  { quote: "Their clash detection services saved us millions in rework costs. Exceptional attention to detail.", author: "Sarah Chen", role: "Project Manager, Consolidated Contractors" },
  { quote: "The digital twin solution they built gives us unparalleled insight into building operations.", author: "James Mitchell", role: "VP Operations, Emaar Properties" },
];

const processStepKeys = [
  { step: "01", titleKey: "process.discovery", descKey: "process.discoveryDesc", icon: Brain },
  { step: "02", titleKey: "process.bimSetup", descKey: "process.bimSetupDesc", icon: Monitor },
  { step: "03", titleKey: "process.modeling", descKey: "process.modelingDesc", icon: Building2 },
  { step: "04", titleKey: "process.coordination", descKey: "process.coordinationDesc", icon: Workflow },
  { step: "05", titleKey: "process.delivery", descKey: "process.deliveryDesc", icon: Award },
  { step: "06", titleKey: "process.support", descKey: "process.supportDesc", icon: Shield },
];

const industries = [
  { nameKey: "projects.commercial", count: "12+ Projects" },
  { nameKey: "projects.residential", count: "8+ Projects" },
  { nameKey: "projects.healthcare", count: "4+ Projects" },
  { nameKey: "projects.infrastructure", count: "3+ Projects" },
  { name: "Industrial", count: "2+ Projects" },
  { nameKey: "projects.education", count: "2+ Projects" },
];

export default function HomePage() {
  const { t } = useLanguage();

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
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-6"
            >
              {t("hero.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground mb-6"
            >
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              {t("hero.desc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
              >
                {t("hero.exploreServices")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 hover:border-primary/30 transition-all"
              >
                {t("hero.viewProjects")} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-border/30"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">{t("hero.trustedBy")}</p>
              <div className="flex flex-wrap gap-6 items-center">
                {["AECOM", "Turner", "Arup", "Skanska", "Bechtel"].map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                    className="text-sm font-display font-medium text-muted-foreground/50 hover:text-primary/60 transition-colors"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            {...scaleIn}
            className="glass rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.servicesLabel")}
            title={t("index.servicesTitle")}
            description={t("index.servicesDesc")}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceKeys.map((service, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                    <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.5 }} className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              {t("index.viewAllServices")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-padding bg-card/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.processLabel")}
            title={t("index.processTitle")}
            description={t("index.processDesc")}
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
            >
              {processStepKeys.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerItemScale}
                  className="glass rounded-xl p-5 text-center relative group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mt-3 mb-3 group-hover:bg-gradient-primary transition-all duration-500">
                    <step.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{t(step.titleKey)}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.projectsLabel")}
            title={t("index.projectsTitle")}
            description={t("index.projectsDesc")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{t(project.categoryKey)}</span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.5 }} className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              {t("index.viewAllProjects")} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.industriesLabel")}
            title={t("index.industriesTitle")}
            description={t("index.industriesDesc")}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={staggerItemScale}
                className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all duration-500 cursor-default"
              >
                <h4 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{ind.nameKey ? t(ind.nameKey) : ind.name}</h4>
                <p className="text-xs text-muted-foreground">{ind.count}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SOFTWARE ECOSYSTEM ===== */}
      <SoftwareShowcase />

      {/* ===== WHY WASI ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label={t("index.whyLabel")}
            title={t("index.whyTitle")}
            description={t("index.whyDesc")}
          />

          {/* Priority pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10"
          >
            {[
              { icon: Lock, title: "Client Data Security", text: "Your intellectual property is sacred. We enforce enterprise-grade encryption (AES-256), NDA-backed access controls, ISO 27001 security protocols, and SOC 2-compliant data handling. Zero breaches since inception.", stat: "0 Breaches", priority: "🔒 #1 Priority" },
              { icon: HeartHandshake, title: "Client Satisfaction", text: "98% client satisfaction rate backed by structured feedback loops, dedicated account managers, and a 'no-surprise' policy. We treat every project as a partnership — your success is our KPI.", stat: "98% Satisfaction", priority: "⭐ Core Value" },
              { icon: Clock, title: "On-Time Delivery", text: "We deliver 98% of milestones on or before deadline using agile sprints, buffer planning, and real-time progress dashboards. Late delivery costs money — we respect your timeline like our own.", stat: "98% On-Time", priority: "⏱️ Guaranteed" },
              { icon: Star, title: "Best-in-Class Quality", text: "Every model passes our rigorous 5-stage QA/QC pipeline: automated rule checks, peer reviews, discipline coordination, client validation, and final audit. We don't ship anything less than excellent.", stat: "5-Stage QA", priority: "✅ Zero Defect" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden border-t-2 border-t-primary/40">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">{item.priority}</span>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-500">
                      <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.stat}</span>
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extended competitive advantages */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Shield, title: "ISO 19650 Compliance", text: "Full compliance with international BIM information management standards — proper BEPs, naming conventions, and audit trails from day one.", stat: "100% Compliant" },
              { icon: Brain, title: "AI-Driven Clash Detection", text: "Proprietary AI classifies clashes by severity, reducing manual review by 70% and eliminating costly on-site rework before construction begins.", stat: "70% Faster" },
              { icon: Award, title: "Certified Professionals", text: "50+ certifications across Autodesk, Bentley, Trimble, and buildingSMART. Continuous training keeps us ahead of industry evolution.", stat: "50+ Certs" },
              { icon: Globe, title: "24/7 Global Delivery", text: "Follow-the-sun model across India, UAE, and KSA. Your project progresses around the clock — faster turnarounds, zero downtime.", stat: "3 Time Zones" },
              { icon: Zap, title: "Agile BIM Methodology", text: "Sprint-based delivery with weekly milestones, daily standups, and real-time progress tracking. Predictable timelines with flexibility to adapt.", stat: "Weekly Sprints" },
              { icon: Cpu, title: "Automation & Scripting", text: "Custom Dynamo scripts, Revit plugins, and Python automations eliminate repetitive tasks — saving 40%+ engineering hours per project.", stat: "40% Time Saved" },
              { icon: DollarSign, title: "Cost-Effective Solutions", text: "Our offshore delivery model provides top-tier BIM talent at 40-60% lower cost than in-house teams — without compromising quality or timelines.", stat: "60% Cost Savings" },
              { icon: Target, title: "Scalable Team On-Demand", text: "Need 5 modelers this week and 20 next month? Our elastic workforce scales instantly to match project demands — no hiring delays or overhead.", stat: "Instant Scaling" },
              { icon: Workflow, title: "CDE & Collaboration", text: "We manage Common Data Environments on ACC, Aconex, and SharePoint with seamless model sharing, version control, and approval workflows.", stat: "Real-Time Sync" },
              { icon: FileCheck, title: "Transparent Reporting", text: "Weekly progress reports, model audit logs, clash resolution matrices, and live dashboards — you always know exactly where your project stands.", stat: "Full Visibility" },
              { icon: Handshake, title: "Long-Term Partnerships", text: "85% of our clients are repeat customers. We invest in understanding your standards, templates, and workflows for seamless ongoing collaboration.", stat: "85% Retention" },
              { icon: Sparkles, title: "Innovation-First Culture", text: "We actively invest in R&D — from generative design experiments to digital twin integrations — ensuring you always have access to next-gen BIM capabilities.", stat: "R&D Focused" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
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
          </motion.div>

          {/* Trust metrics bar */}
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 glass rounded-2xl p-8 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "98%", label: "On-Time Delivery Rate" },
                { value: "35%", label: "Avg. Cost Reduction" },
                { value: "500K+", label: "Clashes Resolved" },
                { value: "0", label: "Data Security Breaches" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="space-y-1"
                >
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{badge.value}</p>
                  <p className="text-xs text-muted-foreground">{badge.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("index.testimonialsLabel")} title={t("index.testimonialsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-xl p-6 relative"
              >
                <div className="absolute top-4 right-4 text-4xl text-primary/10 font-display font-bold">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6 relative z-10">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
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
                {t("index.ctaTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary-foreground/80 max-w-lg mx-auto mb-8"
              >
                {t("index.ctaDesc")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
                  {t("index.startConversation")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
                  {t("index.joinTeam")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
