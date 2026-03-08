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

      {/* ===== GLOBAL PROJECT MAP ===== */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              <Building2 size={12} className="inline mr-1 -mt-0.5" /> Global Reach
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Projects Delivered Worldwide</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">Delivering BIM excellence across 3 major regions — India, Middle East, and Western markets.</p>
          </motion.div>

          <motion.div {...fadeUp} className="glass rounded-2xl p-6 md:p-10 relative overflow-hidden">
            {/* SVG World Map */}
            <div className="relative w-full max-w-5xl mx-auto">
              <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" opacity="0.3" />
                  </pattern>
                  <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Simplified continent outlines */}
                {/* North America */}
                <path d="M 80 80 Q 120 60 180 70 L 220 90 Q 250 100 260 130 L 270 170 Q 240 200 200 210 L 160 200 Q 130 180 110 150 L 90 120 Z" 
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.5" />
                {/* South America */}
                <path d="M 200 260 Q 230 240 250 260 L 270 310 Q 280 350 260 390 L 240 420 Q 220 430 210 410 L 190 360 Q 180 310 190 280 Z" 
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.5" />
                {/* Europe - highlighted */}
                <path d="M 440 70 Q 470 55 510 60 L 540 75 Q 555 90 550 110 L 530 130 Q 510 140 480 135 L 455 120 Q 435 100 440 80 Z" 
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.25" />
                {/* UK */}
                <path d="M 425 70 Q 435 60 440 70 L 442 85 Q 438 95 430 90 L 425 80 Z" 
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
                {/* Africa */}
                <path d="M 460 160 Q 500 150 540 160 L 560 210 Q 570 270 550 330 L 520 380 Q 490 400 470 370 L 450 310 Q 440 250 445 200 Z" 
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.5" />
                {/* Middle East - highlighted */}
                <path d="M 560 120 Q 590 105 630 110 L 660 130 Q 680 150 670 180 L 640 200 Q 610 210 580 195 L 555 170 Q 545 145 555 125 Z" 
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.35" />
                {/* India - highlighted */}
                <path d="M 670 140 Q 710 120 750 130 L 770 160 Q 780 200 760 240 L 730 270 Q 700 280 680 260 L 660 220 Q 650 180 660 150 Z" 
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4" />
                {/* East Asia */}
                <path d="M 780 90 Q 830 70 880 80 L 910 110 Q 920 140 900 170 L 860 190 Q 820 195 790 175 L 770 140 Q 765 110 775 95 Z" 
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.5" />
                {/* Australia */}
                <path d="M 820 330 Q 860 310 910 320 L 930 350 Q 935 380 910 400 L 870 410 Q 840 405 825 385 L 815 360 Z" 
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.5" />

                {/* Connection lines between regions */}
                <line x1="720" y1="200" x2="620" y2="160" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="6,4" opacity="0.4" />
                <line x1="720" y1="200" x2="490" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="6,4" opacity="0.3" />
                <line x1="620" y1="160" x2="490" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="6,4" opacity="0.3" />

                {/* India pin - HQ */}
                <g filter="url(#glow)">
                  <circle cx="720" cy="200" r="8" fill="hsl(var(--primary))" opacity="0.9">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="720" cy="200" r="4" fill="hsl(var(--primary-foreground))" />
                </g>
                <text x="720" y="230" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="700" fontFamily="inherit">India (HQ)</text>
                <text x="720" y="244" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">15+ Projects</text>

                {/* Middle East pin */}
                <g filter="url(#glow)">
                  <circle cx="620" cy="160" r="7" fill="hsl(var(--primary))" opacity="0.8">
                    <animate attributeName="r" values="7;10;7" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="620" cy="160" r="3.5" fill="hsl(var(--primary-foreground))" />
                </g>
                <text x="620" y="145" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">Middle East</text>
                <text x="620" y="139" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">UAE • KSA • Qatar</text>
                <text x="620" y="125" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">12+ Projects</text>

                {/* Western pin */}
                <g filter="url(#glow)">
                  <circle cx="490" cy="100" r="6" fill="hsl(var(--primary))" opacity="0.7">
                    <animate attributeName="r" values="6;9;6" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="490" cy="100" r="3" fill="hsl(var(--primary-foreground))" />
                </g>
                <text x="490" y="68" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="700">Western Europe</text>
                <text x="490" y="56" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">UK • Germany • France</text>
                <text x="490" y="82" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">5+ Projects</text>
              </svg>
            </div>

            {/* Region stats below map */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  region: "🇮🇳 India",
                  projects: "15+",
                  cities: "Nagpur, Mumbai, Delhi, Pune, Hyderabad",
                  sectors: "Commercial, Residential, Infrastructure, Healthcare",
                  highlight: true,
                },
                {
                  region: "🇦🇪 Middle East",
                  projects: "12+",
                  cities: "Dubai, Abu Dhabi, Riyadh, Doha, Muscat",
                  sectors: "Commercial Towers, Hospitality, Mixed-Use, Mega Projects",
                  highlight: false,
                },
                {
                  region: "🇬🇧 Western Markets",
                  projects: "5+",
                  cities: "London, Berlin, Paris, Amsterdam",
                  sectors: "Residential, Retrofit, Data Centers, Industrial",
                  highlight: false,
                },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                  className={`rounded-xl p-5 border transition-all duration-300 ${
                    r.highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-border/50 bg-card/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-foreground text-base">{r.region}</h4>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{r.projects}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1"><span className="text-foreground font-medium">Cities:</span> {r.cities}</p>
                  <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Sectors:</span> {r.sectors}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
