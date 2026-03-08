import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import WorldMap from "@/components/WorldMap";
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
              <svg viewBox="0 0 1010 666" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="0.5" fill="hsl(var(--muted-foreground))" opacity="0.15" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="regionGlow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="1010" height="666" fill="url(#mapGrid)" rx="12" />

                {/* ===== REALISTIC CONTINENTS ===== */}
                {/* North America */}
                <path d="M 48,78 L 65,68 82,58 105,52 128,48 148,50 168,56 185,62 198,55 215,50 235,52 250,60 258,72 262,85 270,98 280,108 285,118 278,128 270,140 265,155 260,168 252,178 242,185 235,195 225,210 218,222 212,235 205,245 195,250 188,258 182,270 175,278 168,268 160,255 152,248 145,242 138,238 130,235 125,228 120,218 115,208 112,198 108,188 105,178 100,168 95,158 88,148 82,138 78,128 72,118 68,108 62,98 55,88 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.4" />
                {/* Central America */}
                <path d="M 182,270 L 188,278 195,288 198,298 202,308 208,315 215,320 218,328 215,335 208,338 202,342 198,348 L 192,345 188,338 185,330 182,322 180,312 178,302 176,292 178,282 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.35" />
                {/* South America */}
                <path d="M 198,348 L 208,345 220,348 232,355 245,365 255,378 262,392 268,408 272,425 275,442 272,460 268,478 262,495 255,508 248,518 240,528 232,535 225,540 218,542 212,538 205,530 200,518 195,505 192,490 190,475 188,458 185,442 182,425 180,408 178,392 180,378 185,365 190,355 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.4" />

                {/* Europe — HIGHLIGHTED */}
                <path d="M 442,62 L 455,55 468,52 482,50 498,52 512,58 525,65 535,72 542,82 545,92 548,105 545,118 540,128 532,135 525,142 515,148 508,152 498,155 488,152 478,148 468,142 458,135 450,128 445,118 442,108 440,98 438,88 440,75 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" filter="url(#regionGlow)" />
                {/* Scandinavia */}
                <path d="M 480,30 L 490,25 502,28 510,35 515,45 512,55 505,58 498,52 492,48 485,42 482,35 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.15" />
                {/* UK & Ireland */}
                <path d="M 420,65 L 428,58 435,62 438,72 436,82 430,88 424,85 420,78 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.2" />
                <path d="M 412,72 L 418,68 420,75 418,82 414,80 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.18" />

                {/* Africa */}
                <path d="M 462,195 L 478,188 498,185 518,188 535,195 548,205 558,218 565,235 568,255 570,278 568,298 565,318 560,338 555,358 548,378 540,395 530,408 518,418 505,425 492,428 478,425 465,418 455,408 448,395 442,378 438,358 435,338 432,318 430,298 432,278 435,255 438,235 442,218 448,205 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.4" />

                {/* Middle East / Arabian Peninsula — HIGHLIGHTED */}
                <path d="M 558,155 L 575,148 592,145 610,148 625,155 638,165 648,178 655,192 658,208 655,222 648,232 640,238 630,242 618,245 608,248 598,252 590,248 582,242 575,232 568,222 565,208 562,195 558,178 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" filter="url(#regionGlow)" />

                {/* India subcontinent — HIGHLIGHTED */}
                <path d="M 668,148 L 685,138 702,135 718,138 730,145 738,155 742,168 745,182 748,198 748,215 745,232 740,248 732,262 722,275 712,285 700,292 690,288 680,278 672,265 665,250 660,235 658,218 655,202 655,185 658,168 662,158 Z"
                  fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.35" filter="url(#regionGlow)" />
                {/* Sri Lanka */}
                <circle cx="710" cy="298" r="5" fill="hsl(var(--primary))" opacity="0.2" />

                {/* Central/East Asia */}
                <path d="M 660,55 L 690,48 720,42 750,40 780,42 808,48 832,55 852,65 865,78 872,92 878,108 882,125 878,140 872,152 862,162 848,168 832,172 812,175 790,172 770,168 752,162 738,155 730,145 718,138 708,130 700,118 695,105 688,92 680,78 672,65 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.35" />
                {/* Southeast Asia */}
                <path d="M 802,195 L 818,188 835,192 848,202 855,215 852,228 842,235 828,238 815,232 808,222 802,210 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.3" />
                {/* Japan */}
                <path d="M 878,95 L 888,88 895,95 898,108 895,118 888,122 882,118 878,108 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />

                {/* Indonesia */}
                <path d="M 795,285 L 812,280 830,282 848,285 865,288 878,292 888,298 882,305 868,308 848,308 828,305 812,302 800,298 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />

                {/* Australia */}
                <path d="M 825,378 L 848,365 872,358 898,355 922,358 942,368 955,382 960,398 958,418 952,435 942,448 928,458 912,462 895,462 878,458 862,448 848,435 838,418 832,402 828,388 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.8" opacity="0.4" />
                {/* New Zealand */}
                <path d="M 965,438 L 972,432 978,438 978,452 972,458 965,452 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />

                {/* Greenland */}
                <path d="M 295,20 L 318,15 340,18 355,28 358,42 352,55 340,60 325,58 312,50 302,40 295,30 Z"
                  fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />

                {/* ===== CONNECTION ARCS ===== */}
                {/* India to Middle East */}
                <path d="M 705,210 Q 665,165 615,200" fill="none" stroke="url(#connectionGrad)" strokeWidth="2" strokeDasharray="8,5" opacity="0.7">
                  <animate attributeName="stroke-dashoffset" values="0;-26" dur="2s" repeatCount="indefinite" />
                </path>
                {/* India to Europe */}
                <path d="M 690,175 Q 600,80 490,108" fill="none" stroke="url(#connectionGrad)" strokeWidth="1.5" strokeDasharray="8,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;-26" dur="3s" repeatCount="indefinite" />
                </path>
                {/* Middle East to Europe */}
                <path d="M 590,170 Q 540,120 510,128" fill="none" stroke="url(#connectionGrad)" strokeWidth="1.5" strokeDasharray="8,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;-26" dur="2.5s" repeatCount="indefinite" />
                </path>

                {/* ===== LOCATION PINS ===== */}
                {/* India HQ — Nagpur area */}
                <g filter="url(#glow)">
                  <circle cx="705" cy="215" r="10" fill="hsl(var(--primary))" opacity="0.3">
                    <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.08;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="705" cy="215" r="7" fill="hsl(var(--primary))" opacity="0.8" />
                  <circle cx="705" cy="215" r="3.5" fill="hsl(var(--primary-foreground))" />
                </g>
                <rect x="660" y="238" width="92" height="42" rx="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.9" />
                <text x="706" y="254" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="800">🇮🇳 INDIA (HQ)</text>
                <text x="706" y="270" textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="700">15+ Projects</text>

                {/* Dubai / Middle East */}
                <g filter="url(#glow)">
                  <circle cx="610" cy="200" r="9" fill="hsl(var(--primary))" opacity="0.3">
                    <animate attributeName="r" values="9;16;9" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="610" cy="200" r="6" fill="hsl(var(--primary))" opacity="0.75" />
                  <circle cx="610" cy="200" r="3" fill="hsl(var(--primary-foreground))" />
                </g>
                <rect x="555" y="258" width="110" height="42" rx="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.9" />
                <text x="610" y="274" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="800">🇦🇪 MIDDLE EAST</text>
                <text x="610" y="290" textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="700">12+ Projects</text>

                {/* Western Europe */}
                <g filter="url(#glow)">
                  <circle cx="468" cy="98" r="8" fill="hsl(var(--primary))" opacity="0.3">
                    <animate attributeName="r" values="8;14;8" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="468" cy="98" r="5.5" fill="hsl(var(--primary))" opacity="0.7" />
                  <circle cx="468" cy="98" r="2.8" fill="hsl(var(--primary-foreground))" />
                </g>
                <rect x="395" y="110" width="148" height="42" rx="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.9" />
                <text x="469" y="126" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="800">🇬🇧 WESTERN EUROPE</text>
                <text x="469" y="142" textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontWeight="700">5+ Projects</text>

                {/* ===== GLOBAL BIM HOTSPOT CITIES (small dots) ===== */}
                {/* New York */}
                <circle cx="215" cy="145" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
                <text x="215" y="138" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5" opacity="0.6">New York</text>
                {/* Chicago */}
                <circle cx="185" cy="135" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <text x="185" y="128" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Chicago</text>
                {/* Los Angeles */}
                <circle cx="110" cy="168" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <text x="110" y="162" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">LA</text>
                {/* London */}
                <circle cx="430" cy="75" r="3.5" fill="hsl(var(--accent-foreground))" opacity="0.6" />
                <text x="430" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5" opacity="0.7">London</text>
                {/* Berlin */}
                <circle cx="498" cy="72" r="2.5" fill="hsl(var(--accent-foreground))" opacity="0.5" />
                <text x="498" y="65" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.6">Berlin</text>
                {/* Paris */}
                <circle cx="458" cy="88" r="2.5" fill="hsl(var(--accent-foreground))" opacity="0.5" />
                <text x="458" y="82" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.6">Paris</text>
                {/* Singapore */}
                <circle cx="790" cy="278" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
                <text x="790" y="272" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5" opacity="0.6">Singapore</text>
                {/* Hong Kong */}
                <circle cx="818" cy="195" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.45" />
                <text x="818" y="188" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Hong Kong</text>
                {/* Tokyo */}
                <circle cx="892" cy="112" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.45" />
                <text x="892" y="105" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Tokyo</text>
                {/* Sydney */}
                <circle cx="928" cy="408" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.45" />
                <text x="928" y="422" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Sydney</text>
                {/* Dubai */}
                <circle cx="618" cy="195" r="3" fill="hsl(var(--primary))" opacity="0.6" />
                <text x="632" y="193" textAnchor="start" fill="hsl(var(--muted-foreground))" fontSize="6.5" opacity="0.7">Dubai</text>
                {/* Riyadh */}
                <circle cx="598" cy="212" r="2.5" fill="hsl(var(--primary))" opacity="0.5" />
                <text x="584" y="222" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.6">Riyadh</text>
                {/* Doha */}
                <circle cx="622" cy="215" r="2" fill="hsl(var(--primary))" opacity="0.45" />
                <text x="636" y="218" textAnchor="start" fill="hsl(var(--muted-foreground))" fontSize="5.5" opacity="0.5">Doha</text>
                {/* Mumbai */}
                <circle cx="680" cy="235" r="3" fill="hsl(var(--primary))" opacity="0.6" />
                <text x="668" y="245" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5" opacity="0.7">Mumbai</text>
                {/* Delhi */}
                <circle cx="698" cy="175" r="2.5" fill="hsl(var(--primary))" opacity="0.55" />
                <text x="698" y="168" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.6">Delhi</text>
                {/* Pune */}
                <circle cx="688" cy="242" r="2" fill="hsl(var(--primary))" opacity="0.45" />
                <text x="688" y="252" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5.5" opacity="0.5">Pune</text>
                {/* Toronto */}
                <circle cx="200" cy="120" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <text x="200" y="114" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Toronto</text>
                {/* Seoul */}
                <circle cx="862" cy="128" r="2.5" fill="hsl(var(--muted-foreground))" opacity="0.4" />
                <text x="862" y="122" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6" opacity="0.5">Seoul</text>
                {/* Stockholm */}
                <circle cx="492" cy="42" r="2" fill="hsl(var(--accent-foreground))" opacity="0.4" />
                <text x="492" y="36" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5.5" opacity="0.5">Stockholm</text>
                {/* Amsterdam */}
                <circle cx="462" cy="75" r="2" fill="hsl(var(--accent-foreground))" opacity="0.45" />
                <text x="475" y="74" textAnchor="start" fill="hsl(var(--muted-foreground))" fontSize="5.5" opacity="0.5">Amsterdam</text>

                {/* Equator line */}
                <line x1="0" y1="333" x2="1010" y2="333" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="4,8" opacity="0.3" />
                <text x="20" y="340" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.3">Equator</text>
              </svg>
            </div>

            {/* BIM Adoption Legend */}
            <motion.div {...fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary opacity-80" /> WASI Active Regions
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground opacity-50" /> Global BIM Hotspots
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary opacity-40 animate-pulse" /> Expanding Markets
              </div>
            </motion.div>

            {/* Region stats below map */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  region: "🇮🇳 India",
                  projects: "15+",
                  cities: "Nagpur, Mumbai, Delhi, Pune, Hyderabad",
                  sectors: "Commercial, Residential, Infrastructure, Healthcare",
                  bimNote: "BIM mandate for govt. projects >₹100Cr since 2024",
                  highlight: true,
                },
                {
                  region: "🇦🇪 Middle East",
                  projects: "12+",
                  cities: "Dubai, Abu Dhabi, Riyadh, Doha, Muscat",
                  sectors: "Commercial Towers, Hospitality, Mixed-Use, Mega Projects",
                  bimNote: "Dubai mandates BIM for all buildings >40 floors",
                  highlight: false,
                },
                {
                  region: "🇬🇧 Western Markets",
                  projects: "5+",
                  cities: "London, Berlin, Paris, Amsterdam, Stockholm",
                  sectors: "Residential, Retrofit, Data Centers, Industrial",
                  bimNote: "UK Level 2 BIM mandatory for all public projects",
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
                  <p className="text-xs text-muted-foreground mb-1"><span className="text-foreground font-medium">Sectors:</span> {r.sectors}</p>
                  <p className="text-[10px] text-primary/70 italic mt-2 border-t border-border/30 pt-2">📋 {r.bimNote}</p>
                </motion.div>
              ))}
            </div>

            {/* Top BIM Cities Worldwide */}
            <motion.div {...fadeUp} className="mt-8">
              <h3 className="font-display font-bold text-foreground text-sm mb-4 text-center">🌍 Top BIM-Adopted Cities Worldwide</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  { city: "London", country: "UK", adoption: "92%", mandate: "Level 2 BIM" },
                  { city: "Singapore", country: "SG", adoption: "89%", mandate: "BCA BIM" },
                  { city: "Dubai", country: "UAE", adoption: "85%", mandate: "BIM Mandate" },
                  { city: "New York", country: "US", adoption: "82%", mandate: "NYC DDC" },
                  { city: "Stockholm", country: "SE", adoption: "80%", mandate: "OpenBIM" },
                  { city: "Hong Kong", country: "HK", adoption: "78%", mandate: "CIC BIM" },
                  { city: "Berlin", country: "DE", adoption: "76%", mandate: "BIM.DE" },
                  { city: "Tokyo", country: "JP", adoption: "74%", mandate: "MLIT BIM" },
                  { city: "Sydney", country: "AU", adoption: "72%", mandate: "NatBIM" },
                  { city: "Seoul", country: "KR", adoption: "70%", mandate: "KBIMS" },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="rounded-lg border border-border/50 bg-card/30 p-3 text-center hover:border-primary/30 transition-all group"
                  >
                    <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">{c.city}</p>
                    <p className="text-[10px] text-muted-foreground">{c.country}</p>
                    <div className="mt-2 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: c.adoption }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      />
                    </div>
                    <p className="text-xs font-bold text-primary mt-1">{c.adoption}</p>
                    <p className="text-[9px] text-muted-foreground">{c.mandate}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
