import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import WorldMap from "@/components/WorldMap";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";
import { constructionRegistrations } from "@/data/constructionContent";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import { toast } from "sonner";
import heroConstruction from "@/assets/hero-construction-site.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const { t } = useLanguage();
  const { division } = useDivision();
  const isConstruction = division === "construction";

  const contactInfo = isConstruction ? [
    { icon: Mail, labelKey: "contact.email", value: "bimengineer11@gmail.com" },
    { icon: Phone, labelKey: "contact.phone", value: "+91 8177997522" },
    { icon: MapPin, labelKey: "contact.headOffice", value: "Sadar, Nagpur, Maharashtra, India" },
    { icon: Clock, labelKey: "contact.workingHours", value: "Mon–Sat: 9:00 AM – 7:00 PM · Sun: By appointment" },
  ] : [
    { icon: Mail, labelKey: "contact.email", value: "info@wasidigital.com" },
    { icon: Phone, labelKey: "contact.phone", value: "+971 569327490" },
    { icon: MapPin, labelKey: "contact.headOffice", value: "Nagpur, Maharashtra, India" },
    { icon: Clock, labelKey: "contact.workingHours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
  ];

  // Auto-select subject based on active division
  const defaultSubject = isConstruction ? "construction" : "bim-services";
  if (formData.subject === "" && defaultSubject) {
    // set default subject once on render
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.thankYou"));
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <DivisionSEO />
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroConstruction} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4"
            >
              {t("contact.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl"
            >
              {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span> {t("contact.titleEnd")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div {...fadeLeft} className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t(item.labelKey)}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-foreground text-sm mb-4">{t("contact.globalOffices")}</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-3">
                    <p className="text-foreground text-sm font-semibold">🇮🇳 Nagpur, India (HQ)</p>
                    <p className="text-xs text-muted-foreground">Main Office — Operations & Delivery Center</p>
                    <p className="text-xs text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <p className="text-foreground text-sm font-semibold">🏗️ Wasi Construction Pvt. Ltd. (Construction Division)</p>
                    <p className="text-xs text-muted-foreground">Sadar, Nagpur, Maharashtra</p>
                    <p className="text-xs text-muted-foreground">+91 8177997522 · bimengineer11@gmail.com</p>
                    <p className="text-xs text-muted-foreground">Mon–Sat 9AM–7PM · Sunday by appointment</p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-3">
                    <p className="text-foreground text-sm font-semibold">🇦🇪 Dubai, UAE</p>
                    <p className="text-xs text-muted-foreground">{t("contact.regionalOffice")} — GCC Business Development</p>
                    <p className="text-xs text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM GST</p>
                  </div>
                </div>
                {isConstruction && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Registered & Compliant</p>
                    <div className="flex flex-wrap gap-1.5">
                      {constructionRegistrations.map((r) => (
                        <span key={r} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{r}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeRight} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.fullName")} *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder={t("contact.fullName")} />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.email")} *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.phone")}</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+971 ..." />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.company")}</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder={t("contact.company")} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.subject")} *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">{t("contact.selectSubject")}</option>
                    <option value="bim-services">BIM & Engineering Inquiry</option>
                    <option value="construction">Construction & Civil Works Inquiry</option>
                    <option value="both">Both Divisions</option>
                    <option value="consulting">{t("contact.consulting")}</option>
                    <option value="partnership">{t("contact.partnership")}</option>
                    <option value="careers">{t("contact.careerApp")}</option>
                    <option value="other">{t("contact.other")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-1.5">{t("contact.message")} *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder={t("contact.message")} />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary">
                  <Send size={16} /> {t("contact.sendMessage")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OFFICE MAPS ===== */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...scaleIn} className="mb-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              <Globe size={12} className="inline mr-1 -mt-0.5" /> {t("contact.ourLocations")}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{t("contact.globalLocations")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { city: "Nagpur, India", flag: "🇮🇳", labelKey: "contact.headquarters", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.555723356!2d78.9382!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000" },
              { city: "Dubai, UAE", flag: "🇦🇪", labelKey: "contact.regionalOffice", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3039567256!2d54.9474!3d25.0757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1700000000000" },
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-xl overflow-hidden group"
              >
                <div className="aspect-[4/3] w-full">
                  <iframe src={office.src} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${office.city} Office Map`} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display font-semibold text-foreground text-sm">{office.flag} {office.city}</p>
                  <p className="text-xs text-muted-foreground">{t(office.labelKey)}</p>
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
              <Building2 size={12} className="inline mr-1 -mt-0.5" /> {t("contact.globalReach")}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{t("contact.projectsWorldwide")}</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">{t("contact.projectsWorldwideDesc")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <WorldMap />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { region: "🇮🇳 India", projects: "15+", cities: "Nagpur, Mumbai, Delhi, Pune, Hyderabad", sectors: "Commercial, Residential, Infrastructure, Healthcare", bimNote: "BIM mandate for govt. projects >₹100Cr since 2024", highlight: true },
              { region: "🇦🇪 Middle East", projects: "12+", cities: "Dubai, Abu Dhabi, Riyadh, Doha, Muscat", sectors: "Commercial Towers, Hospitality, Mixed-Use, Mega Projects", bimNote: "Dubai mandates BIM for all buildings >40 floors", highlight: false },
              { region: "🇬🇧 Western Markets", projects: "5+", cities: "London, Berlin, Paris, Amsterdam, Stockholm", sectors: "Residential, Retrofit, Data Centers, Industrial", bimNote: "UK Level 2 BIM mandatory for all public projects", highlight: false },
            ].map((r, i) => (
              <motion.div key={i} variants={staggerItem} className={`rounded-xl p-5 border transition-all duration-300 ${r.highlight ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card/30"}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-foreground text-base">{r.region}</h4>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{r.projects}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1"><span className="text-foreground font-medium">Cities:</span> {r.cities}</p>
                <p className="text-xs text-muted-foreground mb-1"><span className="text-foreground font-medium">Sectors:</span> {r.sectors}</p>
                <p className="text-[10px] text-primary/70 italic mt-2 border-t border-border/30 pt-2">📋 {r.bimNote}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-8">
            <h3 className="font-display font-bold text-foreground text-sm mb-4 text-center">🌍 {t("contact.topBimCities")}</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
            >
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
                <motion.div key={i} variants={staggerItemScale} className="rounded-lg border border-border/50 bg-card/30 p-3 text-center hover:border-primary/30 transition-all group">
                  <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">{c.city}</p>
                  <p className="text-[10px] text-muted-foreground">{c.country}</p>
                  <div className="mt-2 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: c.adoption }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }} className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full" />
                  </div>
                  <p className="text-xs font-bold text-primary mt-1">{c.adoption}</p>
                  <p className="text-[9px] text-muted-foreground">{c.mandate}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
