import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
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

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Healthcare", "Hospitality", "Education"];

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
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              Landmark <span className="text-gradient">BIM Projects</span> Worldwide
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore our portfolio of mega projects delivered with precision BIM methodology across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group glass rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase bg-primary/90 text-primary-foreground">{project.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground text-base mb-1">{project.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin size={12} /> {project.location}
                  </p>
                  <p className="text-xs text-muted-foreground">{project.scope}</p>
                  <div className="mt-3 pt-3 border-t border-border/50 flex justify-between text-xs">
                    <span className="text-muted-foreground">Project Value</span>
                    <span className="font-semibold text-primary">{project.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
