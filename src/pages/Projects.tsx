import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/animations";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categoryKeys = [
  { key: "All", tKey: "projects.all" },
  { key: "Commercial", tKey: "projects.commercial" },
  { key: "Residential", tKey: "projects.residential" },
  { key: "Infrastructure", tKey: "projects.infrastructure" },
  { key: "Healthcare", tKey: "projects.healthcare" },
  { key: "Hospitality", tKey: "projects.hospitality" },
  { key: "Education", tKey: "projects.education" },
];

const projects = [
  { img: project1, title: "Al Maktoum Commercial Tower", category: "Commercial", location: "Dubai, UAE", scope: "Architectural, Structural & MEP BIM", value: "$120M" },
  { img: project2, title: "Marina Residences", category: "Residential", location: "Abu Dhabi, UAE", scope: "Full BIM Coordination", value: "$85M" },
  { img: project3, title: "Metro Line Extension", category: "Infrastructure", location: "Riyadh, KSA", scope: "Civil & Structural BIM", value: "$2.1B" },
  { img: project4, title: "King Faisal Medical City", category: "Healthcare", location: "Jeddah, KSA", scope: "MEP BIM & Digital Twin", value: "$450M" },
  { img: project1, title: "The Palm Resort & Spa", category: "Hospitality", location: "Dubai, UAE", scope: "Architectural BIM & Visualization", value: "$200M" },
  { img: project2, title: "Knowledge Hub University", category: "Education", location: "Doha, Qatar", scope: "Full BIM & FM Handover", value: "$95M" },
  { img: project3, title: "Riyadh Business District", category: "Commercial", location: "Riyadh, KSA", scope: "Multi-discipline BIM", value: "$1.8B" },
  { img: project4, title: "Smart Housing Complex", category: "Residential", location: "Cairo, Egypt", scope: "BIM & IoT Integration", value: "$150M" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const getCategoryTranslation = (cat: string) => {
    const found = categoryKeys.find((c) => c.key === cat);
    return found ? t(found.tKey) : cat;
  };

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4"
            >
              {t("projects.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span> {t("projects.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("projects.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categoryKeys.map((cat, i) => (
              <motion.button
                key={cat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(cat.tKey)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div key={project.title} layout variants={staggerItem} className="group glass rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase bg-primary/90 text-primary-foreground">{getCategoryTranslation(project.category)}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground text-base mb-1">{project.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin size={12} /> {project.location}
                  </p>
                  <p className="text-xs text-muted-foreground">{project.scope}</p>
                  <div className="mt-3 pt-3 border-t border-border/50 flex justify-between text-xs">
                    <span className="text-muted-foreground">{t("projects.projectValue")}</span>
                    <span className="font-semibold text-primary">{project.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
