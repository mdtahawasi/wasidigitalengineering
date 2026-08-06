import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroCrane from "@/assets/hero-construction-crane.jpg";
import {
  wcHero, wcStats, wcHomeServices, wcWhyReasons, wcProjectTypes, wcPropertyTypes,
  wcPhases, wcBimAdvantages, wcTestimonials, wcCeo, wcCta,
} from "@/data/wasiConstructionData";

export default function ConstructionHome() {
  return (
    <Layout>
      <DivisionSEO
        title="Construction Company in Nagpur | WITEC Construction — Civil Engineering, Site Work & Building Contractor"
        description="WITEC Construction — Nagpur's premier construction company. Civil engineering, site work, building contractor, residential & commercial construction. Turnkey projects across Maharashtra."
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img src={heroCrane} alt="Construction site with tower crane at sunrise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center py-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            {wcHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground">
            <span className="block">{wcHero.title1}</span>
            <span className="block text-primary">{wcHero.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {wcHero.desc}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold tracking-widest text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              VIEW PROJECTS <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/40 text-primary text-sm font-semibold tracking-widest hover:bg-primary/10 transition-colors">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="border-y border-border/50 bg-card/40">
        <div className="container mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {wcStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-xl sm:text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* We take all projects */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <SectionHeading
          label="WE TAKE ALL PROJECTS"
          title="Every Scale, Every Sector"
          description="From residential homes to government mega-projects — we have the expertise, equipment, and team to deliver any scale of construction with excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wcProjectTypes.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-7 h-full hover:border-primary/40 transition-colors">
              <p.icon className="w-9 h-9 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Why Wasi */}
      <AnimatedSection className="bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <SectionHeading
            label="CLIENT-FIRST APPROACH"
            title="Why WITEC Construction?"
            description="We don't just build structures — we build trust. Here's why hundreds of clients across Nagpur and Maharashtra choose us for their most important projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wcWhyReasons.map((r) => (
              <div key={r.title} className="glass rounded-2xl p-7 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold mb-2 text-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Property types */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <SectionHeading
          label="WHAT WE BUILD"
          title="Property Types"
          description="From modern bungalows to high-rise apartments — we design and build every type of residential property with precision engineering and aesthetic excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wcPropertyTypes.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-8 h-full">
              <p.icon className="w-9 h-9 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-md border border-primary/30 text-primary">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Ideas to reality */}
      <AnimatedSection className="bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <SectionHeading
            label="OUR PROCESS"
            title="From Ideas to Reality"
            description="Our six-phase construction process ensures every project moves seamlessly from concept to completion — with BIM coordination at every stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wcPhases.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-7 h-full">
                <p.icon className="w-8 h-8 text-primary mb-3" />
                <p className="text-[10px] tracking-widest text-primary uppercase mb-1 font-bold">{p.step}</p>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* BIM & 3D integration */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <SectionHeading
          label="TECHNOLOGY ADVANTAGE"
          title="BIM & 3D Integration"
          description="Building Information Modeling transforms how we plan, design, and construct. Every project benefits from digital precision and real-time collaboration."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wcBimAdvantages.map((b) => (
            <div key={b.title} className="glass rounded-2xl p-7 h-full">
              <b.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-base font-semibold mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <SectionHeading label="WHAT WE OFFER" title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wcHomeServices.map((s) => (
              <Link key={s.title} to="/services" className="glass rounded-2xl p-8 block h-full hover:border-primary/40 transition-colors">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <SectionHeading label="CLIENT TESTIMONIALS" title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wcTestimonials.map((tm) => (
            <div key={tm.name} className="glass rounded-2xl p-7 h-full">
              <Quote className="w-6 h-6 text-primary/60 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{tm.quote}"</p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: tm.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-semibold text-foreground text-sm">{tm.name}</p>
              <p className="text-xs text-muted-foreground">{tm.location} • {tm.project}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CEO */}
      <AnimatedSection className="border-y border-border/50 bg-card/40">
        <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-2">{wcCeo.role}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">{wcCeo.name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">{wcCeo.desc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {wcCeo.badges.map((b) => (
              <div key={b} className="glass rounded-xl px-5 py-3">
                <p className="font-display text-sm text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to <span className="text-primary">Build</span>?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">{wcCta.desc}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-primary-foreground font-semibold text-sm tracking-widest" style={{ background: "var(--gradient-hero)" }}>
          START YOUR PROJECT <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </Layout>
  );
}
