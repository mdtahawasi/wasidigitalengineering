import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import Hero3D from "@/components/three/Hero3D";
import servicesBg from "@/assets/hero-construction-site.jpg";
import { wcServicesIntro, wcServiceCategories, wcAllServices } from "@/data/wasiConstructionData";

export default function ConstructionServices() {
  return (
    <Layout>
      <DivisionSEO
        title="Construction Services in Nagpur | Civil Work, Site Work, MEP, Structural Design — WITEC Construction"
        description="Complete construction services in Nagpur — civil engineering, site work, structural design, MEP, plumbing, HVAC, fire protection, project management and turnkey construction."
      />

      <section className="relative py-28 overflow-hidden">
        <img src={servicesBg} alt="Active construction site works" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <Hero3D variant="construction" parallax={0.08} />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-4">{wcServicesIntro.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {wcServicesIntro.title1} <span className="text-primary">{wcServicesIntro.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto">{wcServicesIntro.desc}</motion.p>
        </div>
      </section>

      {wcServiceCategories.map((cat, ci) => {
        const items = wcAllServices.filter((s) => s.category === cat.key);
        return (
          <AnimatedSection key={cat.key} className={ci % 2 === 1 ? "bg-card/40 border-y border-border/50" : ""}>
            <div className="container mx-auto px-4 md:px-8 py-16">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="font-display text-xs tracking-[0.3em] text-primary">{cat.label}</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto mb-10">{cat.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                  <div key={s.title} className="glass rounded-2xl p-8 h-full">
                    <s.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-semibold tracking-wider border border-primary/30 text-primary rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </Layout>
  );
}
