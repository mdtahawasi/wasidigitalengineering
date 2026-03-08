import { motion } from "framer-motion";

interface OrgNode {
  name: string;
  role: string;
  children?: OrgNode[];
}

interface OrgChartProps {
  title: string;
  chart: OrgNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

function OrgNodeCard({ node, level = 0 }: { node: OrgNode; level?: number }) {
  const isRoot = level === 0;
  return (
    <div className="flex flex-col items-center">
      <motion.div
        {...fadeUp}
        transition={{ delay: level * 0.1, duration: 0.5 }}
        className={`rounded-xl p-4 text-center min-w-[160px] max-w-[200px] ${
          isRoot
            ? "bg-gradient-primary text-primary-foreground glow-primary"
            : "glass"
        }`}
      >
        <p className={`font-display font-semibold text-sm ${isRoot ? "text-primary-foreground" : "text-foreground"}`}>
          {node.name}
        </p>
        <p className={`text-xs mt-0.5 ${isRoot ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {node.role}
        </p>
      </motion.div>

      {node.children && node.children.length > 0 && (
        <>
          {/* Vertical line down */}
          <div className="w-px h-6 bg-border" />
          {/* Horizontal connector */}
          {node.children.length > 1 && (
            <div className="relative w-full flex justify-center">
              <div
                className="h-px bg-border absolute top-0"
                style={{
                  left: `${100 / (node.children.length * 2)}%`,
                  right: `${100 / (node.children.length * 2)}%`,
                }}
              />
            </div>
          )}
          {/* Children */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {node.children.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-6 bg-border" />
                <OrgNodeCard node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function OrgChart({ title, chart }: OrgChartProps) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground text-center mb-8">
        {title}
      </h3>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[600px] flex justify-center">
          <OrgNodeCard node={chart} />
        </div>
      </div>
    </div>
  );
}
