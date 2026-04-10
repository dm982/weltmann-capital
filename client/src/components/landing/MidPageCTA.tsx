import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, TrendingUp, ArrowRight } from "lucide-react";

interface MidPageCTAProps {
  onPartnerWithUs: () => void;
  onInvestor: () => void;
}

export function MidPageCTA({ onPartnerWithUs, onInvestor }: MidPageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Build your investor pipeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Qualified introductions through our partner referral dashboard
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onPartnerWithUs}
              size="lg"
              className="w-full sm:w-auto"
              data-testid="button-partner-with-us"
            >
              <Users className="mr-2 h-4 w-4" />
              Partner with us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={onInvestor}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              data-testid="button-i-am-investor"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              I am an investor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
