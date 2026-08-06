import { ReactElement } from "react";
import { useDivision } from "@/contexts/DivisionContext";

interface Props {
  bim: ReactElement;
  construction: ReactElement;
}

/**
 * Strict conditional rendering: exactly one division's page is mounted at a time.
 */
export default function DivisionRoute({ bim, construction }: Props) {
  const { division } = useDivision();
  return division === "construction" ? construction : bim;
}