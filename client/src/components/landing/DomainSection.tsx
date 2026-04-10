import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DomainSectionProps {
  onRequestDealFlow: () => void;
}

export function DomainSection({ onRequestDealFlow }: DomainSectionProps) {
  const { domain } = siteContent;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % domain.words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [domain.words.length]);

  return (
    <section className="dark-section relative overflow-hidden py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text-light text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {domain.headline}
          </h2>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-3xl font-bold sm:gap-4 sm:text-4xl lg:text-5xl">
            {domain.words.map((word, index) => (
              <AnimatePresence key={word} mode="wait">
                <motion.span
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: currentWordIndex === index ? 1 : 0.3,
                    scale: currentWordIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`transition-all ${
                    currentWordIndex === index 
                      ? "text-white text-glow-light" 
                      : "text-white/30"
                  }`}
                >
                  {word}
                </motion.span>
              </AnimatePresence>
            ))}
          </div>
          
          <p className="mx-auto mt-8 max-w-lg text-lg text-gray-400">
            {domain.subheadline}
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onRequestDealFlow}
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-white text-black hover:bg-gray-100 sm:w-auto"
              data-testid="button-request-deal-flow"
            >
              {domain.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
