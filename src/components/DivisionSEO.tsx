import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useDivision } from "@/contexts/DivisionContext";

const SITE = "https://witecglobal.lovable.app";

const META: Record<"bim" | "construction", { title: string; description: string; keywords: string }> = {
  bim: {
    title: "BIM Services in India, UAE, USA & UK | Revit BIM Modeling & Clash Detection — WITEC",
    description:
      "WITEC delivers BIM & engineering services across India, UAE, USA and UK — Revit BIM modeling, clash detection, 4D/5D BIM, scan-to-BIM, digital twin & VDC. ISO 19650 compliant.",
    keywords:
      "BIM services India, BIM company India, BIM services UAE, BIM company Dubai, BIM services USA, BIM company UK London, Revit BIM modeling, clash detection, 4D BIM, 5D BIM, scan to BIM, digital twin, ISO 19650, WITEC",
  },
  construction: {
    title: "Construction Company in Nagpur & Kolkata | Civil, Structural & Turnkey Contractors — WITEC",
    description:
      "WITEC is a leading construction company in Nagpur & Kolkata, India — civil, structural, MEP, RCC, turnkey residential, commercial & industrial construction. IS code compliant.",
    keywords:
      "construction company Nagpur, construction company Kolkata, civil contractor Nagpur, civil contractor Kolkata, building contractor Nagpur, RCC contractor Nagpur, turnkey construction India, structural contractor Maharashtra, structural contractor West Bengal, WITEC construction",
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
      <meta name="keywords" content={m.keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
    </Helmet>
  );
}