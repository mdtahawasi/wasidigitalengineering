import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import aboutTeam from "@/assets/about-team.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const values = [
  { icon: Target, title: "Precision", desc: "Every model we deliver is dimensionally accurate and meets international BIM standards." },
  { icon: Eye, title: "Innovation", desc: "We leverage AI, machine learning, and automation to push the boundaries of digital construction." },
  { icon: Heart, title: "Integrity", desc: "Transparent communication, honest timelines, and ethical business practices define our work." },
  { icon: Award, title: "Excellence", desc: "ISO 19650 certified processes ensure consistent quality across every deliverable." },
];

const timeline = [
  { year: "2015", event: "Founded in Dubai as a BIM consulting startup" },
  { year: "2017", event: "Expanded to 50+ professionals, opened KSA office" },
  { year: "2019", event: "Launched AI-powered clash detection platform" },
  { year: "2021", event: "Achieved ISO 19650 certification, entered European market" },
  { year: "2023", event: "Digital Twin solutions deployed for 10+ mega projects" },
  { year: "2025", event: "150+ professionals serving 25+ countries globally" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              Engineering the <span className="text-gradient">Digital Future</span> of Construction
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              WASI Digital Engineering is a leading BIM and digital engineering consultancy transforming the AEC industry through technology, expertise, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden">
              <img src={aboutTeam} alt="WASI Digital Engineering team" className="w-full h-auto object-cover rounded-2xl" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Founded in 2015 in Dubai, WASI Digital Engineering began with a clear mission: to bridge the gap between traditional construction methods and the digital future. What started as a small team of BIM enthusiasts has grown into a global consultancy serving some of the most ambitious projects in the AEC industry.</p>
                <p>Today, we're a team of 150+ architects, engineers, and BIM specialists working across 25+ countries. We combine deep domain expertise in Architecture, Structural, MEP, and Civil engineering with cutting-edge technologies like AI, IoT, and digital twin platforms.</p>
                <p>Our commitment to ISO 19650 standards, continuous innovation, and client-centric delivery has earned us the trust of developers, contractors, and consultants worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 10, suffix: "+", label: "Years Experience" },
              { value: 150, suffix: "+", label: "Team Members" },
              { value: 500, suffix: "+", label: "Projects Delivered" },
              { value: 25, suffix: "+", label: "Countries" },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Our Journey" title="Milestones" />
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <p className="text-foreground text-sm">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Leadership" title="Meet Our Team" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Waseem Al-Rashid", role: "Founder & CEO", initials: "WA" },
              { name: "Dr. Fatima Hassan", role: "CTO", initials: "FH" },
              { name: "David Morrison", role: "VP Operations", initials: "DM" },
            ].map((person, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15, duration: 0.6 }} className="glass rounded-xl p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-xl text-primary-foreground">{person.initials}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
