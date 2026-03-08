import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers3, ScanLine, Cpu, BarChart3, Cog, CheckCircle2, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

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
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-6">
              Engineering & BIM Consultancy
            </span>
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-all"
              >
                View Projects <ChevronRight size={16} />
              </Link>
            </div>
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
                className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                  <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
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

      {/* ===== PROJECTS ===== */}
      <section className="section-padding bg-card/30">
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

      {/* ===== WHY WASI ===== */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Why WASI"
            title="Your Trusted BIM Partner"
            description="We combine deep AEC expertise with cutting-edge technology to deliver measurable results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "ISO 19650 compliant BIM workflows",
              "AI-driven clash detection & resolution",
              "Certified Autodesk & Bentley professionals",
              "24/7 global project delivery capability",
              "Agile methodology with weekly milestones",
              "Integrated QA/QC at every LOD stage",
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6">
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
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
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
