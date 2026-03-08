import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@wasidigital.com" },
  { icon: Phone, label: "Phone", value: "+971 569327490" },
  { icon: MapPin, label: "Head Office", value: "Nagpur, Maharashtra, India" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              Let's Start <span className="text-gradient">Building</span> Together
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind? Need BIM resources? Reach out — our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="glass rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Global Offices */}
              <div className="glass rounded-xl p-5">
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">Global Offices</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-foreground text-sm font-semibold">🇮🇳 Nagpur, India (HQ)</p>
                    <p className="text-xs text-muted-foreground">Main Office — Operations & Delivery Center</p>
                    <p className="text-xs text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-3">
                    <p className="text-foreground text-sm font-semibold">🇦🇪 Dubai, UAE</p>
                    <p className="text-xs text-muted-foreground">Regional Office — GCC Business Development</p>
                    <p className="text-xs text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM GST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+971 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="bim-services">BIM Services Inquiry</option>
                    <option value="consulting">BIM Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Career / Job Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OFFICE MAPS ===== */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="mb-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              <Globe size={12} className="inline mr-1 -mt-0.5" /> Our Locations
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Global Office Locations</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                city: "Nagpur, India",
                flag: "🇮🇳",
                label: "Headquarters",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.555723356!2d78.9382!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000",
              },
              {
                city: "Dubai, UAE",
                flag: "🇦🇪",
                label: "Regional Office",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3039567256!2d54.9474!3d25.0757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1700000000000",
              },
            ].map((office, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={office.src}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Map`}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display font-semibold text-foreground text-sm">{office.flag} {office.city}</p>
                  <p className="text-xs text-muted-foreground">{office.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
