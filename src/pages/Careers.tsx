import { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Briefcase, GraduationCap, Heart, Zap,
  Shield, Users, Target, Globe, Award, BookOpen, Lightbulb, Scale,
  Upload, Send, CheckCircle
} from "lucide-react";
import Layout from "@/components/Layout";
import DivisionSEO from "@/components/DivisionSEO";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDivision } from "@/contexts/DivisionContext";
import { constructionCareers } from "@/data/constructionContent";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import heroTeamCollab from "@/assets/hero-team-collab.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const perkKeys = [
  { icon: Briefcase, title: "Flexible Work", desc: "Remote-first culture with flexible hours. Work from anywhere across 12+ countries with our distributed team." },
  { icon: GraduationCap, title: "Learning & Growth", desc: "Annual learning budget of $2,000+, Autodesk certifications, conference sponsorships, and mentorship programs." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance, mental health support, gym memberships, and generous paid time off." },
  { icon: Zap, title: "Cutting-Edge Tech", desc: "Work with the latest BIM tools, AI/ML platforms, VR/AR visualization, and cloud infrastructure." },
];

const coreValues = [
  { icon: Shield, title: "Integrity First", desc: "We uphold the highest ethical standards in every project. Transparency with clients, honesty in deliverables, and accountability in timelines define how we operate." },
  { icon: Scale, title: "Fair & Inclusive", desc: "Equal opportunity for all — regardless of gender, ethnicity, or background. We maintain pay equity and foster a workplace where diverse perspectives are celebrated." },
  { icon: Target, title: "Excellence Driven", desc: "We don't settle for 'good enough.' Every BIM model, every clash report, every coordination meeting reflects our commitment to precision and quality." },
  { icon: Globe, title: "Sustainable Impact", desc: "We prioritize green building practices, energy-efficient designs, and sustainable construction methods. Our BIM workflows reduce material waste by up to 30%." },
  { icon: Lightbulb, title: "Innovation Culture", desc: "20% innovation time for personal R&D projects. We encourage experimentation with AI automation, generative design, and digital twin technologies." },
  { icon: Users, title: "Collaborative Spirit", desc: "Cross-functional teams, open-door leadership, and a flat hierarchy ensure every voice matters. Weekly knowledge-sharing sessions keep everyone growing." },
];

const whyJoinUs = [
  { number: "150+", label: "Team Members", desc: "Engineers, architects, and technologists across 12 countries" },
  { number: "500+", label: "Projects Delivered", desc: "Across commercial, residential, healthcare, and infrastructure" },
  { number: "98%", label: "Employee Retention", desc: "Our team stays because they love what they do" },
  { number: "4.8/5", label: "Glassdoor Rating", desc: "Rated as a top workplace in the AEC-tech industry" },
];

const growthPaths = [
  { icon: BookOpen, title: "Structured Onboarding", desc: "30-60-90 day plan with dedicated mentors, tool training, and project shadowing to set you up for success from day one." },
  { icon: Award, title: "Career Progression", desc: "Clear promotion pathways from Junior to Lead to Director. Annual reviews with transparent criteria and skill-based advancement." },
  { icon: GraduationCap, title: "Certifications Sponsored", desc: "Autodesk Certified Professional, PMP, LEED AP, and more — fully funded by the company with paid study leave." },
  { icon: Globe, title: "Global Mobility", desc: "Opportunities to work across our offices in Dubai, Riyadh, London, Cairo, and more. International project exposure guaranteed." },
];


export default function CareersPage() {
  const { t } = useLanguage();
  const { division } = useDivision();
  const isConstruction = division === "construction";
  const perks = isConstruction
    ? constructionCareers.perks.map((p, i) => ({ ...p, icon: perkKeys[i % perkKeys.length].icon }))
    : perkKeys;
  const values = isConstruction
    ? constructionCareers.values.map((v, i) => ({ ...v, icon: coreValues[i % coreValues.length].icon }))
    : coreValues;
  const stats = isConstruction ? constructionCareers.stats : whyJoinUs;
  const growth = isConstruction
    ? constructionCareers.growth.map((g, i) => ({ ...g, icon: growthPaths[i % growthPaths.length].icon }))
    : growthPaths;
  
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", currentRole: "", experience: "",
    linkedIn: "", portfolio: "", expectedSalary: "", noticePeriod: "",
    coverLetter: "", skills: "", education: "", referral: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File) => {
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      toast({ title: "Invalid file type", description: "Please upload a PDF, DOC, or DOCX file.", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "File too large", description: "Maximum file size is 5MB.", variant: "destructive" });
      return;
    }
    setResumeFile(file);
    toast({ title: "Resume attached", description: file.name });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const handleApply = (jobTitle: string) => {
    setApplyingFor(jobTitle);
    setSubmitted(false);
    setResumeFile(null);
    setFormData({ fullName: "", email: "", phone: "", currentRole: "", experience: "", linkedIn: "", portfolio: "", expectedSalary: "", noticePeriod: "", coverLetter: "", skills: "", education: "", referral: "" });
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Application Submitted!", description: `Thank you for applying for ${applyingFor}. We'll review and get back within 5 business days.` });
  };

  return (
    <Layout>
      <DivisionSEO />
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroTeamCollab} alt="" className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              {t("careers.badge")}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              {isConstruction ? (
                <>{constructionCareers.hero.title} <span className="text-gradient">{constructionCareers.hero.highlight}</span> {constructionCareers.hero.end}</>
              ) : (
                <>{t("careers.title")} <span className="text-gradient">{t("careers.titleHighlight")}</span> {t("careers.titleEnd")}</>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {isConstruction ? constructionCareers.hero.desc : t("careers.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us - Stats */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Why Join Us" title={isConstruction ? "A Site That Builds Careers" : "A Workplace That Inspires"} description={isConstruction ? "500+ engineers, safety officers and skilled trades — building India's skyline together with zero-harm safety and clear growth paths." : "We're not just building models — we're building careers, communities, and the future of construction technology."} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Perks & Benefits" title="What We Offer" description={isConstruction ? "Statutory + welfare benefits, PPE, transport, accommodation and clear growth from Junior Engineer to Project Manager." : "Comprehensive benefits designed to support your professional growth, personal wellbeing, and work-life balance."} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ethics & Values */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Our Ethics & Values" title="What We Stand For" description={isConstruction ? "Safety, quality, fair wages and on-time delivery — the four pillars that guide every WITEC Construction site." : "Our culture is built on a foundation of integrity, inclusivity, and innovation. These aren't just words on a wall — they guide every decision we make."} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Growth & Development" title="Your Career Journey" description={isConstruction ? "Structured induction, sponsored certifications (NEBOSH, IOSH, Primavera) and cross-project mobility across Nagpur, Kolkata & MIDC." : "We invest heavily in your development with structured programs, certifications, and global opportunities."} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {growth.map((g, i) => (
              <motion.div key={i} variants={staggerItem} className="glass rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <g.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            label="Apply Now"
            title={applyingFor ? `Apply for: ${applyingFor}` : "Submit Your Application"}
            description="Fill in all relevant details below. Our HR team reviews every application personally and responds within 5 business days."
          />
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto glass rounded-xl p-10 text-center">
              <CheckCircle size={64} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Application Received!</h3>
              <p className="text-muted-foreground mb-2">Thank you for applying{applyingFor ? ` for ${applyingFor}` : ""}.</p>
              <p className="text-sm text-muted-foreground">Our team will review your application and reach out within <strong className="text-foreground">5 business days</strong>. Check your email for a confirmation.</p>
              <Button onClick={() => { setSubmitted(false); setApplyingFor(null); }} variant="outline" className="mt-6">
                Submit Another Application
              </Button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto glass rounded-xl p-6 md:p-8 space-y-6"
            >
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users size={18} className="text-primary" /> Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input placeholder="John Doe" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                    <Input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                    <Input type="tel" placeholder="+971 50 123 4567" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">LinkedIn Profile</label>
                    <Input placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedIn} onChange={e => setFormData({ ...formData, linkedIn: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-primary" /> Professional Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Current Role / Title</label>
                    <Input placeholder="e.g. BIM Coordinator" value={formData.currentRole} onChange={e => setFormData({ ...formData, currentRole: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Years of Experience *</label>
                    <Input placeholder="e.g. 5 years" value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Education / Qualification</label>
                    <Input placeholder="e.g. B.Tech Civil Engineering" value={formData.education} onChange={e => setFormData({ ...formData, education: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Portfolio / Website</label>
                    <Input placeholder="https://yourportfolio.com" value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Resume / CV Upload */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Upload size={18} className="text-primary" /> Resume / CV *
                </h3>
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : resumeFile
                      ? "border-primary/40 bg-primary/5"
                      : "border-border hover:border-primary/40 hover:bg-accent/30"
                  }`}
                  onClick={() => document.getElementById("resume-input")?.click()}
                >
                  <input
                    id="resume-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {resumeFile ? (
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle size={32} className="text-primary" />
                      <p className="text-sm font-medium text-foreground">{resumeFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={(e) => { e.stopPropagation(); setResumeFile(null); }}
                        className="mt-1"
                      >
                        Remove & Re-upload
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload size={32} className="text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground">
                        Drag & drop your resume here, or <span className="text-primary underline">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX — Max 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills & Compensation */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-primary" /> Skills & Expectations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Key Skills & Software Proficiency</label>
                    <Input placeholder="e.g. Revit, Navisworks, AutoCAD, Dynamo, Python" value={formData.skills} onChange={e => setFormData({ ...formData, skills: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Expected Salary (Annual)</label>
                    <Input placeholder="e.g. $60,000 - $75,000" value={formData.expectedSalary} onChange={e => setFormData({ ...formData, expectedSalary: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Notice Period</label>
                    <Input placeholder="e.g. 30 days / Immediately available" value={formData.noticePeriod} onChange={e => setFormData({ ...formData, noticePeriod: e.target.value })} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">How did you hear about us?</label>
                    <Input placeholder="e.g. LinkedIn, Referral, Job Board" value={formData.referral} onChange={e => setFormData({ ...formData, referral: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" /> Cover Letter / Message
                </h3>
                <Textarea
                  placeholder="Tell us why you're interested in this role, your key achievements, and what you'd bring to our team..."
                  className="min-h-[140px]"
                  value={formData.coverLetter}
                  onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">* Required fields. Your data is handled confidentially per our privacy policy.</p>
                <Button type="submit" className="bg-gradient-primary text-primary-foreground glow-primary px-8">
                  <Send size={16} /> Submit Application
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{t("careers.noMatch")}</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t("careers.noMatchDesc")}</p>
            <Button onClick={() => handleApply("General Application")} className="bg-gradient-primary text-primary-foreground glow-primary">
              {t("careers.submitResume")} <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
