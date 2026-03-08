import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Briefcase, GraduationCap, Heart, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const perks = [
  { icon: Briefcase, title: "Flexible Work", desc: "Hybrid and remote options with flexible hours." },
  { icon: GraduationCap, title: "Growth & Learning", desc: "Sponsored certifications, conferences, and training programs." },
  { icon: Heart, title: "Health & Wellness", desc: "Premium medical, dental, and wellness benefits." },
  { icon: Zap, title: "Cutting-Edge Tech", desc: "Work with the latest BIM, AI, and cloud platforms." },
];

const openings = [
  { title: "Senior BIM Modeler (Revit)", dept: "Production", location: "Dubai, UAE", type: "Full-time" },
  { title: "BIM Coordinator", dept: "Coordination", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Structural BIM Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-time" },
  { title: "MEP BIM Lead", dept: "MEP", location: "Abu Dhabi, UAE", type: "Full-time" },
  { title: "AI/ML Engineer - BIM Automation", dept: "Technology", location: "Remote", type: "Full-time" },
  { title: "Scan to BIM Specialist", dept: "Production", location: "Doha, Qatar", type: "Contract" },
  { title: "BIM Consultant", dept: "Consulting", location: "London, UK", type: "Full-time" },
  { title: "Junior Revit Technician", dept: "Production", location: "Cairo, Egypt", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              Build Your <span className="text-gradient">Career</span> with Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Join a team of 150+ passionate engineers and architects shaping the future of digital construction. We're always looking for exceptional talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.6 }} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Open Positions" title="Current Opportunities" description="Find the role that fits your expertise." />
          <div className="max-w-3xl mx-auto space-y-3">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-all"
              >
                <div>
                  <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors shrink-0"
                >
                  Apply <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Don't see a match?</h2>
            <p className="text-muted-foreground mb-6">Send us your resume and we'll reach out when the right opportunity opens.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm glow-primary">
              Submit Your Resume <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
