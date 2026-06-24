import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDivision } from "@/contexts/DivisionContext";

interface Props {
  bim: ReactNode;
  construction: ReactNode;
  className?: string;
}

export default function DivisionContent({ bim, construction, className = "" }: Props) {
  const { division } = useDivision();
  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={division}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {division === "bim" ? bim : construction}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}