/**
 * Construction division pages — isolated from all BIM data.
 */
import ConstructionPlaceholder from "./ConstructionPlaceholder";

export { default as ConstructionHome } from "./ConstructionHome";
export { default as ConstructionAbout } from "./ConstructionAbout";
export { default as ConstructionServices } from "./ConstructionServices";

export const ConstructionProjects = () => (
  <ConstructionPlaceholder title="Construction Projects" subtitle="Project portfolio coming soon." />
);
export const ConstructionTechnology = () => (
  <ConstructionPlaceholder title="Construction Technology" subtitle="Technology and equipment details coming soon." />
);
export const ConstructionCareers = () => (
  <ConstructionPlaceholder title="Careers at WITEC Construction" subtitle="Openings coming soon." />
);
export const ConstructionContact = () => (
  <ConstructionPlaceholder title="Contact WITEC Construction" subtitle="Contact details coming soon." />
);
