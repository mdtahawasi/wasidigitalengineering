import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AIChatWidget from "./AIChatWidget";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="min-w-0 flex-1">{children}</main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
}
