import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import DivisionRoute from "./routes/DivisionRoute";
import {
  BimHome, BimAbout, BimServices, BimProjects, BimTechnology,
  BimInsightsPage, BimCareers, BimContact,
} from "./pages/bim";
import {
  ConstructionHome, ConstructionAbout, ConstructionServices, ConstructionProjects,
  ConstructionTechnology, ConstructionCareers, ConstructionContact,
} from "./pages/construction";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DivisionProvider } from "./contexts/DivisionContext";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<DivisionRoute bim={<BimHome />} construction={<ConstructionHome />} />} />
          <Route path="/about" element={<DivisionRoute bim={<BimAbout />} construction={<ConstructionAbout />} />} />
          <Route path="/services" element={<DivisionRoute bim={<BimServices />} construction={<ConstructionServices />} />} />
          <Route path="/projects" element={<DivisionRoute bim={<BimProjects />} construction={<ConstructionProjects />} />} />
          <Route path="/careers" element={<DivisionRoute bim={<BimCareers />} construction={<ConstructionCareers />} />} />
          <Route path="/contact" element={<DivisionRoute bim={<BimContact />} construction={<ConstructionContact />} />} />
          <Route path="/bim-insights" element={<DivisionRoute bim={<BimInsightsPage />} construction={<Navigate to="/" replace />} />} />
          <Route path="/technology" element={<DivisionRoute bim={<BimTechnology />} construction={<ConstructionTechnology />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <ThemeProvider>
    <DivisionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </DivisionProvider>
    </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
