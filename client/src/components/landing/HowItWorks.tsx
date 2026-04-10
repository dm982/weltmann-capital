import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import { Search, FileText, CheckCircle, ArrowRight } from "lucide-react";

const iconMap = {
  Search,
  FileText,
  CheckCircle,
};

interface HowItWorksProps {
  onGetStarted: () => void;
}

export function HowItWorks({ onGetStarted }: HowItWorksProps) {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {howItWorks.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {howItWorks.subheadline}
          </p>
          <Button
            onClick={onGetStarted}
            className="mt-8"
            size="lg"
            data-testid="button-how-it-works-get-started"
          >
            {howItWorks.ctaButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        
        <div className="space-y-6">
          {howItWorks.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group overflow-hidden rounded-2xl border border-border bg-muted/30 transition-all hover:border-border hover:bg-muted/50">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-center bg-gradient-to-br from-muted/50 to-transparent p-8 lg:w-2/5 lg:p-12">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background transition-all group-hover:border-foreground/20 lg:h-28 lg:w-28">
                        <IconComponent className="h-10 w-10 text-foreground/80 lg:h-14 lg:w-14" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:w-3/5 lg:p-12">
                      <h3 className="text-xl font-semibold text-foreground lg:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
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
