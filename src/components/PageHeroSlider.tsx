import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlide {
  image: string;
  badge: string;
  headline: string;
  headlineHighlight: string;
  headlineEnd?: string;
  subtitle: string;
}

interface PageHeroSliderProps {
  slides: HeroSlide[];
  interval?: number;
}

export default function PageHeroSlider({ slides, interval = 5000 }: PageHeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const slide = slides[current];

  return (
    <section className="relative section-padding overflow-hidden min-h-[340px] md:min-h-[400px]">
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 mb-4 backdrop-blur-sm">
              {slide.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-3xl">
              {slide.headline}{" "}
              <span className="text-gradient">{slide.headlineHighlight}</span>
              {slide.headlineEnd && ` ${slide.headlineEnd}`}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-primary" : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
