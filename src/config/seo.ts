export const SEO_SITE = "https://witecglobal.lovable.app";
type PageMeta = { title: string; description: string; label: string };
export const PAGE_SEO: Record<"bim" | "construction", Record<string, PageMeta>> = {
  bim: {
    "/": { title: "WITEC | BIM Outsourcing & Engineering in Nagpur, India", description: "BIM outsourcing and AEC engineering from Nagpur, Vidarbha, India: architectural, structural and MEP modeling for projects in India and worldwide.", label: "BIM & Engineering" },
    "/about": { title: "About WITEC | Nagpur BIM & AEC Engineering, India", description: "Discover WITEC’s Nagpur-based BIM and AEC engineering team, multidisciplinary expertise and BIM outsourcing approach for India and global projects.", label: "About" },
    "/services": { title: "BIM Services Nagpur | India BIM Outsourcing — WITEC", description: "Explore BIM outsourcing from Nagpur, Vidarbha, India: Revit modeling, structural detailing, MEP coordination, clash detection and scan-to-BIM.", label: "Services" },
    "/projects": { title: "BIM Project Portfolio | Nagpur AEC Engineering — WITEC", description: "Browse WITEC’s BIM and AEC engineering portfolio: architectural models, structural detailing and MEP coordination from India for global projects.", label: "Projects" },
    "/technology": { title: "BIM Technology | Nagpur Digital Engineering — WITEC", description: "Explore Revit, Navisworks, digital twins and BIM technology supporting WITEC’s AEC engineering and BIM outsourcing from Nagpur, Vidarbha, India.", label: "Technology" },
    "/bim-insights": { title: "BIM Insights | India & Global AEC Engineering — WITEC", description: "Read BIM adoption, market and digital engineering insights from WITEC in Nagpur, India, covering global AEC trends and BIM outsourcing workflows.", label: "BIM Insights" },
    "/careers": { title: "BIM Careers Nagpur | AEC Engineering India — WITEC", description: "Explore BIM and AEC engineering careers with WITEC in Nagpur, India, including multidisciplinary modeling, coordination and digital project delivery.", label: "Careers" },
    "/contact": { title: "Contact WITEC | Nagpur BIM Outsourcing & Engineering", description: "Discuss BIM outsourcing and AEC engineering with WITEC’s Nagpur, Vidarbha, India team: architectural, structural and MEP modeling for global projects.", label: "Contact" },
  },
  construction: {
    "/": { title: "Construction Company in Nagpur | WITEC Construction", description: "Explore WITEC Construction in Nagpur: civil engineering, RCC structures, site work and turnkey residential, commercial and industrial construction.", label: "Construction" },
    "/about": { title: "About WITEC Construction | Civil Engineering Nagpur", description: "Meet WITEC Construction and explore its Nagpur construction expertise, civil engineering approach, company values and Indian building standards.", label: "About" },
    "/services": { title: "Construction Services Nagpur | Civil & RCC — WITEC", description: "Explore construction services in Nagpur: civil works, site development, RCC, structural design, MEP execution and turnkey building construction.", label: "Services" },
    "/projects": { title: "Construction Projects Nagpur | WITEC Portfolio", description: "Browse WITEC Construction’s Nagpur project portfolio: residential, commercial and industrial buildings, construction images and discipline scopes.", label: "Projects" },
    "/technology": { title: "Construction Technology & Site Safety Nagpur | WITEC", description: "Explore WITEC’s Nagpur construction technology, equipment, site safety, environmental protection and project completion methods for civil works.", label: "Technology" },
    "/careers": { title: "Construction Careers Nagpur | WITEC Construction", description: "Explore WITEC Construction careers in Nagpur. Civil engineering and construction opportunities will be announced when positions become available.", label: "Careers" },
    "/contact": { title: "Contact WITEC Construction | Nagpur Building Enquiries", description: "Discuss Nagpur construction with WITEC: civil works, site development, structural design, MEP and turnkey residential or commercial building projects.", label: "Contact" },
  },
};