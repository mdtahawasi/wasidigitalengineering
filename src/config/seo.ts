export const SEO_SITE = "https://witecglobal.com";
type PageMeta = { title: string; description: string; label: string };
export const PAGE_SEO: Record<"bim" | "construction", Record<string, PageMeta>> = {
  bim: {
    "/": { title: "WITEC Global | BIM & Engineering Services Worldwide", description: "Architectural, structural and MEP BIM, clash detection, scan-to-BIM, 4D/5D and digital twin services for AEC teams in India, UAE, USA, UK and Europe.", label: "BIM & Engineering" },
    "/about": { title: "About WITEC Global | BIM & Engineering Team", description: "Meet WITEC's BIM and engineering team in Nagpur and explore our multidisciplinary expertise, delivery approach and international project experience.", label: "About" },
    "/services": { title: "BIM Modeling & MEP Coordination Services | WITEC Global", description: "Explore architectural and structural BIM, MEP coordination, Revit modeling, clash detection, scan-to-BIM, quantity takeoffs and 4D/5D BIM services.", label: "Services" },
    "/projects": { title: "BIM & Engineering Project Portfolio | WITEC Global", description: "Explore WITEC's BIM and engineering project portfolio, including architectural modeling, structural detailing and multidisciplinary MEP coordination.", label: "Projects" },
    "/technology": { title: "BIM Technology, Revit & Digital Twins | WITEC Global", description: "Explore WITEC's BIM authoring, coordination and digital twin workflows, including Revit, Navisworks, scheduling and information management tools.", label: "Technology" },
    "/bim-insights": { title: "BIM Insights: Dimensions & Coordination | WITEC Global", description: "Explore BIM dimensions, architectural and structural modeling, MEP coordination, construction sequencing and digital engineering insights from WITEC.", label: "BIM Insights" },
    "/careers": { title: "BIM & Engineering Careers | WITEC Global", description: "Explore career opportunities with WITEC's BIM and engineering team. Submit your application for multidisciplinary modeling and coordination roles.", label: "Careers" },
    "/contact": { title: "Contact WITEC Global | BIM & Engineering Enquiries", description: "Contact WITEC's Nagpur-based BIM and engineering team about architectural, structural and MEP modeling or global project support: info@witecglobal.com.", label: "Contact" },
  },
  construction: {
    "/": { title: "Construction in Nagpur & Kolkata | WITEC Global", description: "WITEC delivers civil, RCC, structural and turnkey construction for residential, commercial and industrial projects in Nagpur and Kolkata.", label: "Construction" },
    "/about": { title: "About WITEC Construction | Nagpur & Kolkata", description: "Discover WITEC Construction's civil engineering expertise, project delivery approach and construction capabilities in Nagpur and Kolkata.", label: "About" },
    "/services": { title: "Civil, RCC & Turnkey Construction Services | WITEC", description: "Explore WITEC's civil works, RCC structures, steel construction, MEP execution and turnkey services for residential, commercial and industrial projects.", label: "Services" },
    "/projects": { title: "Construction Project Portfolio | WITEC Global", description: "Browse WITEC Construction's residential, commercial and industrial portfolio, with project details, construction images and sector-specific experience.", label: "Projects" },
    "/technology": { title: "Construction Technology & Site Safety | WITEC Global", description: "Explore WITEC's construction technology, site equipment, quality control, safety practices and environmental measures for civil project delivery.", label: "Technology" },
    "/careers": { title: "Construction Careers & Applications | WITEC Global", description: "Explore opportunities with WITEC Construction and submit your application to join our civil engineering and construction project delivery team.", label: "Careers" },
    "/contact": { title: "Contact WITEC Construction | Project Enquiries", description: "Discuss civil, RCC or turnkey construction in Nagpur and Kolkata with WITEC. Send project enquiries and requirements to taha@witecglobal.com.", label: "Contact" },
  },
};