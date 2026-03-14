import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Users } from "lucide-react";

interface OrgNode {
  name: string;
  role: string;
  badge?: string;
  children?: OrgNode[];
}

interface OrgTeam {
  id: string;
  label: string;
  chart: OrgNode;
}

interface OrgChartProps {
  teams: OrgTeam[];
}

function OrgNodeCard({ node, level = 0, index = 0 }: { node: OrgNode; level?: number; index?: number }) {
  const isRoot = level === 0;
  const isLead = level === 1;

  const bgClass = isRoot
    ? "bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/20"
    : isLead
    ? "bg-primary/10 border border-primary/30"
    : "glass border border-border/50";

  const nameClass = isRoot
    ? "text-primary-foreground"
    : "text-foreground";

  const roleClass = isRoot
    ? "text-primary-foreground/80"
    : "text-muted-foreground";

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ delay: level * 0.08 + index * 0.04, duration: 0.4 }}
        whileHover={{ scale: 1.04, y: -2 }}
        className={`rounded-xl px-4 py-3 text-center min-w-[140px] max-w-[180px] transition-shadow duration-300 hover:shadow-md ${bgClass}`}
      >
        <p className={`font-display font-bold text-xs leading-tight ${nameClass}`}>{node.name}</p>
        <p className={`text-[10px] mt-0.5 leading-tight ${roleClass}`}>{node.role}</p>
        {node.badge && (
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-primary/20 text-primary">
            {node.badge}
          </span>
        )}
      </motion.div>

      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-5 bg-border/60" />
          {node.children.length > 1 && (
            <div className="relative w-full flex justify-center">
              <div
                className="h-px bg-gradient-to-r from-transparent via-border to-transparent absolute top-0"
                style={{
                  left: `${100 / (node.children.length * 2)}%`,
                  right: `${100 / (node.children.length * 2)}%`,
                }}
              />
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            {node.children.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-5 bg-border/60" />
                <OrgNodeCard node={child} level={level + 1} index={i} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function OrgChart({ teams }: OrgChartProps) {
  const [activeTeam, setActiveTeam] = useState(teams[0]?.id || "");
  const current = teams.find((t) => t.id === activeTeam) || teams[0];

  return (
    <div>
      {/* Tab Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => setActiveTeam(team.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 border ${
              activeTeam === team.id
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                : "glass border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            <Users size={12} className="inline mr-1.5 -mt-0.5" />
            {team.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="overflow-x-auto pb-4"
        >
          <div className="min-w-[700px] flex justify-center">
            <OrgNodeCard node={current.chart} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
