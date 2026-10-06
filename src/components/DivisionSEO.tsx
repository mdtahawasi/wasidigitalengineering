import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useDivision } from "@/contexts/DivisionContext";
import { PAGE_SEO, SEO_SITE } from "@/config/seo";

const SITE = "https://witecglobal.com";

const META: Record<"bim" | "construction", { title: string; description: string; keywords: string }> = {
  bim: {
    title: "Best BIM Company in Nagpur, Kolkata, Dubai & UAE | Revit BIM, Clash Detection, 4D/5D — WITEC",
    description:
      "WITEC — top BIM company in Nagpur, Kolkata, Dubai, Abu Dhabi & Sharjah (UAE), also serving USA & UK. Revit BIM modeling, MEP/structural/architectural BIM, clash detection (Navisworks), 4D/5D BIM, scan-to-BIM & digital twin. ISO 19650 compliant.",
    keywords:
      "BIM company Nagpur, BIM services Nagpur, BIM company Kolkata, BIM services Kolkata, BIM company Dubai, BIM services Dubai, BIM company Abu Dhabi, BIM company Sharjah, BIM consultancy UAE, BIM services UAE, BIM services India, BIM company India, BIM services USA, BIM company UK London, Revit BIM modeling, MEP BIM, structural BIM, architectural BIM, clash detection Navisworks, 4D BIM scheduling, 5D BIM cost, scan to BIM, point cloud to BIM, digital twin, VDC services, ISO 19650, BIM outsourcing India, WITEC, WITEC Global",
  },
  construction: {
    title: "Best Construction Company in Nagpur & Kolkata | Civil, RCC, Structural & Turnkey Contractor — WITEC",
    description:
      "WITEC Construction — #1 construction company in Nagpur & Kolkata, India. Civil, RCC, structural, MEP, industrial, commercial & residential turnkey contractors. IS 456, IS 800, IS 1893 & NBC 2016 compliant. Serving Maharashtra, West Bengal & pan-India.",
    keywords:
      "construction company Nagpur, best construction company Nagpur, top construction company Nagpur, civil contractor Nagpur, RCC contractor Nagpur, building contractor Nagpur, turnkey contractor Nagpur, industrial construction Nagpur, commercial construction Nagpur, residential builder Nagpur, construction company Kolkata, best construction company Kolkata, civil contractor Kolkata, RCC contractor Kolkata, building contractor Kolkata, turnkey contractor Kolkata, structural contractor Maharashtra, structural contractor West Bengal, MIDC contractor Nagpur, EPC contractor India, IS 456 RCC design, WITEC Construction, Wasi Construction",
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
  const page = PAGE_SEO[division][pathname] ?? PAGE_SEO[division]["/"];
  const finalTitle = title && title.length <= 60 ? title : page.title;
  const finalDesc = description && description.length >= 50 && description.length <= 160 ? description : page.description;
  const normalizedPath = pathname === "/" ? "" : pathname;
  const url = `${SITE}${normalizedPath}?division=${division}`;
  const home = `${SEO_SITE}/?division=${division}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": pathname === "/projects" ? "CollectionPage" : pathname === "/about" ? "AboutPage" : pathname === "/contact" ? "ContactPage" : "WebPage", "@id": `${url}#webpage`, url, name: finalTitle, description: finalDesc, isPartOf: { "@id": `${SITE}/#website` }, about: { "@id": `${SITE}/#${division === "bim" ? "bim" : "construction"}-division` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: division === "bim" ? "BIM & Engineering" : "Construction", item: home },
        ...(pathname === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.label, item: url }]),
      ] },
      ...(pathname === "/services" ? [{ "@type": "ItemList", "@id": `${url}#services`, name: page.title, itemListElement: (division === "bim" ? ["Architectural BIM", "Structural BIM", "MEP coordination", "Clash detection", "Scan-to-BIM", "4D/5D BIM"] : ["Civil construction", "RCC construction", "Structural steel construction", "MEP execution", "Turnkey construction"]).map((name, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name, provider: { "@id": `${SITE}/#${division === "bim" ? "bim" : "construction"}-division` }, url } })) }] : []),
    ],
  };
  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <link rel="canonical" href={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
    </Helmet>
  );
}