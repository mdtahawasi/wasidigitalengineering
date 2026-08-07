/**
 * Construction division pages — isolated from all BIM data.
 */
import ConstructionPlaceholder from "./ConstructionPlaceholder";

export { default as ConstructionHome } from "./ConstructionHome";
export { default as ConstructionAbout } from "./ConstructionAbout";
export { default as ConstructionServices } from "./ConstructionServices";
export { default as ConstructionProjects } from "./ConstructionProjects";
export { default as ConstructionTechnology } from "./ConstructionTechnology";
export { default as ConstructionContact } from "./ConstructionContact";

export const ConstructionCareers = () => (
  <ConstructionPlaceholder title="Careers at WITEC Construction" subtitle="Openings coming soon." />
);
