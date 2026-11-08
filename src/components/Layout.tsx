import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AIChatWidget from "./AIChatWidget";
import { useGlobalParallax } from "@/hooks/useGlobalParallax";

export default function Layout({ children }: { children: ReactNode }) {
  useGlobalParallax();
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="division-surface min-w-0 flex-1">{children}</main>
        <Footer />
        <AIChatWidget />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
