/**
 * BIM & Engineering division pages.
 * These are thin wrappers around the existing, untouched page implementations.
 * DO NOT alter the underlying pages — they are the canonical BIM experience.
 */
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Technology from "@/pages/Technology";
import BIMInsights from "@/pages/BIMInsights";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

export const BimHome = () => <Index />;
export const BimAbout = () => <About />;
export const BimServices = () => <Services />;
export const BimProjects = () => <Projects />;
export const BimTechnology = () => <Technology />;
export const BimInsightsPage = () => <BIMInsights />;
export const BimCareers = () => <Careers />;
export const BimContact = () => <Contact />;