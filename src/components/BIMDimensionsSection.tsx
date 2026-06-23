import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const DIMS = [
  { d: "3D", title: "Visualization",    color: "#00d4ff", desc: "Three-dimensional geometric modeling of building elements with material properties and spatial relationships." },
  { d: "4D", title: "Time / Scheduling",color: "#3b82f6", desc: "Linking 3D models with construction schedules to simulate and optimize the building sequence over time." },
  { d: "5D", title: "Cost Estimation",  color: "#10b981", desc: "Integrating cost data with BIM for automated quantity takeoff, real-time budgeting, and value engineering." },
  { d: "6D", title: "Sustainability",   color: "#8b5cf6", desc: "Energy analysis, carbon footprint calculation, and green building certification compliance (LEED / IGBC)." },
  { d: "7D", title: "Facility Mgmt",    color: "#f59e0b", desc: "Asset data, maintenance schedules, and operations information for building lifecycle management." },
];

export default function BIMDimensionsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="● BIM Dimensions"
          title="From 3D to 7D — The Full Lifecycle"
          description="Every project flows through five connected dimensions of BIM intelligence — geometry, time, cost, sustainability, and operations."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {DIMS.map((d) => (
            <motion.div
              key={d.d}
              variants={staggerItem}
              className="glass rounded-xl p-5 relative overflow-hidden hover:translate-y-[-3px] transition-transform"
              style={{ borderTop: `3px solid ${d.color}` }}
            >
              <div className="font-display text-3xl font-extrabold mb-1" style={{ color: d.color }}>{d.d}</div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-2">{d.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-2xl" style={{ background: d.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}