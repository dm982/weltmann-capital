import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Presentation, FolderOpen, ArrowRight } from "lucide-react";

const iconMap = {
  Presentation,
  FolderOpen,
};

interface BrandSectionProps {
  onGetStarted: () => void;
}

export function BrandSection({ onGetStarted }: BrandSectionProps) {
  const { brand } = siteContent;

  return (
    <section className="dark-section relative overflow-hidden py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="gradient-text-light text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {brand.headline}
          </h2>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-2xl font-bold sm:gap-3 sm:text-3xl lg:text-4xl">
            {brand.animatedWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white/60"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <Button
            onClick={onGetStarted}
            variant="outline"
            className="mt-8 border-white/20 bg-white text-black hover:bg-gray-100"
            size="lg"
            data-testid="button-brand-get-started"
          >
            {brand.ctaButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {brand.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-white/[0.05] to-transparent">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-white/20">
                      <IconComponent className="h-10 w-10 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
