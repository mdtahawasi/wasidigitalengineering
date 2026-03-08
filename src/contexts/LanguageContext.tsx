import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Language = "en" | "hi" | "ar" | "fr" | "de" | "es" | "zh" | "ja";

export const languages: { code: Language; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇦🇪", dir: "rtl" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "es", label: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "zh", label: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", label: "日本語", flag: "🇯🇵", dir: "ltr" },
];

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", hi: "होम", ar: "الرئيسية", fr: "Accueil", de: "Startseite", es: "Inicio", zh: "首页", ja: "ホーム" },
  "nav.about": { en: "About", hi: "हमारे बारे में", ar: "من نحن", fr: "À propos", de: "Über uns", es: "Nosotros", zh: "关于", ja: "会社概要" },
  "nav.services": { en: "Services", hi: "सेवाएँ", ar: "الخدمات", fr: "Services", de: "Dienstleistungen", es: "Servicios", zh: "服务", ja: "サービス" },
  "nav.projects": { en: "Projects", hi: "परियोजनाएँ", ar: "المشاريع", fr: "Projets", de: "Projekte", es: "Proyectos", zh: "项目", ja: "プロジェクト" },
  "nav.bimInsights": { en: "BIM Insights", hi: "BIM जानकारी", ar: "رؤى BIM", fr: "Perspectives BIM", de: "BIM Einblicke", es: "BIM Insights", zh: "BIM 洞察", ja: "BIM インサイト" },
  "nav.careers": { en: "Careers", hi: "करियर", ar: "الوظائف", fr: "Carrières", de: "Karriere", es: "Carreras", zh: "职业", ja: "採用情報" },
  "nav.contact": { en: "Contact", hi: "संपर्क", ar: "اتصل بنا", fr: "Contact", de: "Kontakt", es: "Contacto", zh: "联系", ja: "お問い合わせ" },
  "nav.getQuote": { en: "Get a Quote", hi: "कोटेशन प्राप्त करें", ar: "احصل على عرض سعر", fr: "Demander un devis", de: "Angebot anfordern", es: "Solicitar cotización", zh: "获取报价", ja: "見積もり依頼" },

  // Hero / Index
  "hero.tagline": { en: "BIM Excellence, Delivered Globally", hi: "BIM उत्कृष्टता, विश्व स्तर पर", ar: "تميز BIM عالمياً", fr: "Excellence BIM, livrée mondialement", de: "BIM-Exzellenz, weltweit geliefert", es: "Excelencia BIM, entregada globalmente", zh: "BIM 卓越，全球交付", ja: "BIM の卓越性をグローバルに" },
  "hero.title1": { en: "Transforming", hi: "रूपांतरण", ar: "تحويل", fr: "Transformer", de: "Transformation", es: "Transformando", zh: "变革", ja: "変革する" },
  "hero.title2": { en: "Construction", hi: "निर्माण", ar: "البناء", fr: "Construction", de: "Bauwesen", es: "Construcción", zh: "建筑", ja: "建設" },
  "hero.title3": { en: "with Digital Precision", hi: "डिजिटल सटीकता के साथ", ar: "بدقة رقمية", fr: "avec précision numérique", de: "mit digitaler Präzision", es: "con precisión digital", zh: "以数字精度", ja: "デジタル精度で" },
  "hero.description": {
    en: "We deliver world-class BIM modeling, coordination, and consulting services to architecture, engineering, and construction firms worldwide.",
    hi: "हम दुनिया भर में वास्तुकला, इंजीनियरिंग और निर्माण फर्मों को विश्वस्तरीय BIM मॉडलिंग, समन्वय और परामर्श सेवाएं प्रदान करते हैं।",
    ar: "نقدم خدمات نمذجة BIM والتنسيق والاستشارات على مستوى عالمي لشركات الهندسة المعمارية والهندسة والبناء في جميع أنحاء العالم.",
    fr: "Nous fournissons des services de modélisation BIM, de coordination et de conseil de classe mondiale aux entreprises d'architecture, d'ingénierie et de construction dans le monde entier.",
    de: "Wir liefern erstklassige BIM-Modellierung, Koordination und Beratungsdienste für Architektur-, Ingenieur- und Bauunternehmen weltweit.",
    es: "Ofrecemos servicios de modelado BIM, coordinación y consultoría de clase mundial a empresas de arquitectura, ingeniería y construcción en todo el mundo.",
    zh: "我们为全球建筑、工程和施工公司提供世界级的 BIM 建模、协调和咨询服务。",
    ja: "世界中の建築、エンジニアリング、建設企業に、ワールドクラスのBIMモデリング、コーディネーション、コンサルティングサービスを提供しています。",
  },
  "hero.exploreServices": { en: "Explore Services", hi: "सेवाएँ देखें", ar: "استكشف الخدمات", fr: "Découvrir les services", de: "Services entdecken", es: "Explorar servicios", zh: "探索服务", ja: "サービスを見る" },
  "hero.viewProjects": { en: "View Projects", hi: "परियोजनाएँ देखें", ar: "عرض المشاريع", fr: "Voir les projets", de: "Projekte ansehen", es: "Ver proyectos", zh: "查看项目", ja: "プロジェクトを見る" },

  // Footer
  "footer.company": { en: "Company", hi: "कंपनी", ar: "الشركة", fr: "Entreprise", de: "Unternehmen", es: "Empresa", zh: "公司", ja: "会社" },
  "footer.services": { en: "Services", hi: "सेवाएँ", ar: "الخدمات", fr: "Services", de: "Dienstleistungen", es: "Servicios", zh: "服务", ja: "サービス" },
  "footer.industries": { en: "Industries", hi: "उद्योग", ar: "الصناعات", fr: "Industries", de: "Branchen", es: "Industrias", zh: "行业", ja: "産業" },

  // Contact page
  "contact.title": { en: "Let's Start", hi: "चलिए शुरू करते हैं", ar: "لنبدأ", fr: "Commençons à", de: "Lassen Sie uns", es: "Empecemos a", zh: "让我们开始", ja: "一緒に" },
  "contact.titleHighlight": { en: "Building", hi: "निर्माण", ar: "البناء", fr: "Construire", de: "Bauen", es: "Construir", zh: "建设", ja: "建設" },
  "contact.titleEnd": { en: "Together", hi: "साथ में", ar: "معاً", fr: "Ensemble", de: "Gemeinsam", es: "Juntos", zh: "一起", ja: "しましょう" },
  "contact.subtitle": {
    en: "Have a project in mind? Need BIM resources? Reach out — our team responds within 24 hours.",
    hi: "क्या आपके मन में कोई परियोजना है? BIM संसाधनों की आवश्यकता है? संपर्क करें — हमारी टीम 24 घंटे में जवाब देती है।",
    ar: "هل لديك مشروع في ذهنك؟ تحتاج موارد BIM؟ تواصل معنا — فريقنا يرد خلال 24 ساعة.",
    fr: "Vous avez un projet en tête ? Besoin de ressources BIM ? Contactez-nous — notre équipe répond sous 24 heures.",
    de: "Haben Sie ein Projekt im Sinn? Brauchen Sie BIM-Ressourcen? Kontaktieren Sie uns — unser Team antwortet innerhalb von 24 Stunden.",
    es: "¿Tiene un proyecto en mente? ¿Necesita recursos BIM? Contáctenos — nuestro equipo responde en 24 horas.",
    zh: "有项目想法？需要 BIM 资源？联系我们 — 我们的团队将在 24 小时内回复。",
    ja: "プロジェクトをお考えですか？BIMリソースが必要ですか？お気軽にお問い合わせください — 24時間以内にご返答いたします。",
  },
  "contact.sendMessage": { en: "Send Message", hi: "संदेश भेजें", ar: "إرسال الرسالة", fr: "Envoyer le message", de: "Nachricht senden", es: "Enviar mensaje", zh: "发送消息", ja: "メッセージを送信" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("wasi-lang") as Language;
    return saved && languages.some((l) => l.code === saved) ? saved : "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("wasi-lang", lang);
    document.documentElement.dir = languages.find((l) => l.code === lang)?.dir || "ltr";
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language] || entry.en || key;
    },
    [language]
  );

  const dir = languages.find((l) => l.code === language)?.dir || "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
