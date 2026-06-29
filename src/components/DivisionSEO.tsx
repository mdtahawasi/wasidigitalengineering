import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useDivision } from "@/contexts/DivisionContext";

const SITE = "https://witecglobal.lovable.app";

const META: Record<"bim" | "construction", { title: string; description: string }> = {
  bim: {
    title: "WITEC — BIM & Engineering Consultancy | AI-Integrated Digital Construction",
    description:
      "AI-integrated BIM solutions for the AEC industry. 3D-7D modeling, clash detection, digital twins, VR/AR visualization. ISO 19650 compliant.",
  },
  construction: {
    title: "WITEC — Construction Company Nagpur | Civil Engineering & Turnkey Projects",
    description:
      "Nagpur's premier construction company. Civil engineering, structural design, MEP, turnkey construction. IS code compliant, 10-year warranty.",
  },
};

interface Props {
  /** Optional per-page override; default uses the division copy. */
  title?: string;
  description?: string;
}

export default function DivisionSEO({ title, description }: Props) {
  const { division } = useDivision();
  const { pathname } = useLocation();
  const m = META[division];
  const finalTitle = title ?? m.title;
  const finalDesc = description ?? m.description;
  const url = `${SITE}${pathname}`;
  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
    </Helmet>
  );
}