import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import AnimatedSection from "@/components/AnimatedSection";
import {
  wcProjectsBg, wcContact, wcContactServices, wcContactCards, wcRegistrations,
} from "@/data/wasiConstructionData";

export default function ConstructionContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry: ${form.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${wcContact.email}?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const field = "w-full bg-secondary/50 border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors";

  return (
    <Layout>
      <DivisionSEO
        title="Contact WITEC Construction Nagpur | Free Quote for Civil Work & Site Work"
        description="Contact WITEC Construction for construction projects in Nagpur. Free quotes for civil work, site work, structural design, MEP and turnkey building contracts."
      />

      <section className="relative py-28 overflow-hidden">
        <img src={wcProjectsBg} alt="Contact WITEC Construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-primary font-semibold mb-4">{wcContact.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {wcContact.title1} <span className="text-primary">{wcContact.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto">{wcContact.desc}</motion.p>
        </div>
      </section>

      <AnimatedSection>
        <div className="container mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass rounded-2xl p-6 sm:p-10">
            <h2 className="font-display text-2xl font-bold mb-8 text-foreground">
              {wcContact.formTitle1} <span className="text-primary">{wcContact.formTitle2}</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Your Name" required className={field}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required className={field}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="tel" placeholder="Phone Number" required className={field}
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select required className={field} value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select Service Required</option>
                {wcContactServices.map((s) => <option key={s}>{s}</option>)}
              </select>
              <textarea placeholder="Tell us about your project..." rows={4} required className={`${field} resize-none`}
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-widest rounded-lg hover:opacity-90 transition-all">
                SEND MESSAGE <Send size={16} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Contact <span className="text-primary">Information</span>
            </h2>
            {wcContactCards.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6 flex items-start gap-4">
                <c.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-sm tracking-wider mb-1 text-foreground">{c.title}</h3>
                  {c.lines.map((l) =>
                    "isEmail" in c && c.isEmail ? (
                      <a key={l} href={`mailto:${wcContact.email}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                    ) : (
                      <p key={l} className="text-sm text-muted-foreground">{l}</p>
                    )
                  )}
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-sm tracking-wider text-primary mb-3">REGISTRATIONS & CERTIFICATIONS</h3>
              <div className="flex flex-wrap gap-3">
                {wcRegistrations.map((r) => (
                  <span key={r} className="px-3 py-1.5 text-[10px] font-semibold tracking-wider border border-primary/30 text-primary rounded-md">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}
