import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { BarChart3, Sparkles, ArrowRight } from "lucide-react";

const iconMap = {
  BarChart3,
  Sparkles,
};

interface IntelligenceSectionProps {
  onGetStarted: () => void;
}

export function IntelligenceSection({ onGetStarted }: IntelligenceSectionProps) {
  const { intelligence } = siteContent;

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {intelligence.headline}
          </h2>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-2xl font-bold sm:gap-3 sm:text-3xl lg:text-4xl">
            {intelligence.animatedWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-foreground/60"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <Button
            onClick={onGetStarted}
            className="mt-8"
            size="lg"
            data-testid="button-intelligence-get-started"
          >
            {intelligence.ctaButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {intelligence.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-muted/30 transition-all hover:border-foreground/20 hover:bg-muted/50">
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-muted/50 to-transparent">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background transition-all group-hover:border-foreground/20">
                      <IconComponent className="h-10 w-10 text-foreground/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
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
