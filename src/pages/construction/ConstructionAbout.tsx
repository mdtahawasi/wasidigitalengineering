import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import aboutBg from "@/assets/hero-construction-team.jpg";
import { wcAbout, wcValues, wcCodes, wcCeo } from "@/data/wasiConstructionData";

export default function ConstructionAbout() {
  return (
    <Layout>
      <DivisionSEO
        title="About WITEC Construction Nagpur | Best Building Contractor & Civil Engineering Company"
        description="Learn about WITEC Construction — Nagpur's trusted construction company founded by Md Taha Wasi. Expert civil engineering, structural design, site development & turnkey construction projects in Nagpur, Maharashtra."
      />

      <section className="relative py-28 overflow-hidden">
        <img src={aboutBg} alt="Construction engineering team on site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-4">{wcAbout.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {wcAbout.title1} <span className="text-primary">{wcAbout.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto">{wcAbout.desc}</motion.p>
        </div>
      </section>

      {/* CEO */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-72 sm:w-80 sm:h-96 rounded-2xl glass flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-5xl sm:text-6xl font-bold text-primary">MTW</p>
                <p className="text-xs tracking-[0.3em] text-muted-foreground mt-3 uppercase">{wcCeo.role}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-2">{wcCeo.role}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">{wcCeo.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{wcAbout.ceoDesc1}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{wcAbout.ceoDesc2}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all">
              Connect with the CEO <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <SectionHeading title="Our Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wcValues.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-8 text-center h-full">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-base font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Indian codes */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-20">
        <SectionHeading label="REGULATORY COMPLIANCE" title="Indian Standard Codes We Follow" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wcCodes.map((c) => (
            <div key={c.code} className="glass rounded-2xl p-6 h-full">
              <p className="font-display text-sm text-primary tracking-widest">{c.code}</p>
              <h3 className="font-display text-lg font-semibold mt-2 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Layout>
  );
}
