import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Clock, ArrowRight, Briefcase, GraduationCap, Heart, Zap,
  Shield, Users, Target, Globe, Award, BookOpen, Lightbulb, Scale,
  Upload, Send, CheckCircle, ChevronDown, ChevronUp
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
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

const openings = [
  { title: "Senior BIM Modeler (Revit)", dept: "Production", location: "Dubai, UAE", type: "Full-time", experience: "5+ years", salary: "$60K–$85K", desc: "Lead complex architectural and structural Revit models for mega-projects. Collaborate with coordination teams and ensure LOD 300-400 deliverables." },
  { title: "BIM Coordinator", dept: "Coordination", location: "Riyadh, KSA", type: "Full-time", experience: "4+ years", salary: "$55K–$75K", desc: "Manage multi-discipline BIM coordination, run clash detection using Navisworks, and facilitate resolution meetings with design teams." },
  { title: "Structural BIM Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-time", experience: "3+ years", salary: "$50K–$70K", desc: "Develop structural BIM models in Revit/Tekla, perform quantity takeoffs, and coordinate with architects and MEP engineers." },
  { title: "MEP BIM Lead", dept: "MEP", location: "Abu Dhabi, UAE", type: "Full-time", experience: "6+ years", salary: "$70K–$95K", desc: "Lead MEP modeling team, ensure systems coordination, and deliver fabrication-ready models for HVAC, plumbing, and electrical systems." },
  { title: "AI/ML Engineer - BIM Automation", dept: "Technology", location: "Remote", type: "Full-time", experience: "3+ years", salary: "$80K–$120K", desc: "Develop AI-powered tools for automated clash detection, design optimization, and predictive project analytics using Python and TensorFlow." },
  { title: "Scan to BIM Specialist", dept: "Production", location: "Doha, Qatar", type: "Contract", experience: "2+ years", salary: "$45K–$60K", desc: "Process point cloud data from 3D laser scans, create accurate as-built BIM models, and ensure quality control of deliverables." },
  { title: "BIM Consultant", dept: "Consulting", location: "London, UK", type: "Full-time", experience: "7+ years", salary: "$90K–$130K", desc: "Advise enterprise clients on BIM strategy, develop execution plans, and guide digital transformation initiatives across large portfolios." },
  { title: "Junior Revit Technician", dept: "Production", location: "Cairo, Egypt", type: "Full-time", experience: "0-2 years", salary: "$20K–$35K", desc: "Support senior modelers with Revit production work, learn BIM best practices, and grow into a specialist role with mentorship support." },
];

export default function CareersPage() {
  const { t } = useLanguage();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", currentRole: "", experience: "",
    linkedIn: "", portfolio: "", expectedSalary: "", noticePeriod: "",
    coverLetter: "", skills: "", education: "", referral: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (jobTitle: string) => {
    setApplyingFor(jobTitle);
    setSubmitted(false);
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
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4">
              {t("careers.badge")}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              {t("careers.title")} <span className="text-gradient">{t("careers.titleHighlight")}</span> {t("careers.titleEnd")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("careers.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us - Stats */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label="Why Join Us" title="A Workplace That Inspires" description="We're not just building models — we're building careers, communities, and the future of construction technology." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoinUs.map((stat, i) => (
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
          <SectionHeading label="Perks & Benefits" title="What We Offer" description="Comprehensive benefits designed to support your professional growth, personal wellbeing, and work-life balance." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perkKeys.map((p, i) => (
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
          <SectionHeading label="Our Ethics & Values" title="What We Stand For" description="Our culture is built on a foundation of integrity, inclusivity, and innovation. These aren't just words on a wall — they guide every decision we make." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
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
          <SectionHeading label="Growth & Development" title="Your Career Journey" description="We invest heavily in your development with structured programs, certifications, and global opportunities." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {growthPaths.map((g, i) => (
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

      {/* Open Positions */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading label={t("careers.openPositionsLabel")} title={t("careers.openPositionsTitle")} description={t("careers.openPositionsDesc")} />
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass rounded-xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer" onClick={() => setExpandedJob(expandedJob === i ? null : i)}>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{job.salary}</span>
                    {expandedJob === i ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                  </div>
                </div>
                {expandedJob === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3 }} className="px-5 pb-5 border-t border-border/50">
                    <div className="pt-4 space-y-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span><strong className="text-foreground">Experience:</strong> {job.experience}</span>
                        <span><strong className="text-foreground">Salary Range:</strong> {job.salary}</span>
                        <span><strong className="text-foreground">Type:</strong> {job.type}</span>
                        <span><strong className="text-foreground">Location:</strong> {job.location}</span>
                      </div>
                      <Button onClick={() => handleApply(job.title)} className="mt-2 bg-gradient-primary text-primary-foreground glow-primary">
                        Apply for this Position <ArrowRight size={14} />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
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
