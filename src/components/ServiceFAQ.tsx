import { useDivision } from "@/contexts/DivisionContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ_LABEL, SERVICE_FAQ } from "@/config/serviceFaq";

export default function ServiceFAQ() {
  const { division } = useDivision();
  const { language } = useLanguage();
  return (
    <section aria-labelledby="service-faq-heading" className="section-padding border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 id="service-faq-heading" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">{FAQ_LABEL[language]}</h2>
        <div className="space-y-6">
          {SERVICE_FAQ[division][language].map(({ question, answer }) => (
            <div key={question}>
              <h3 className="font-display font-semibold text-foreground mb-2">{question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}