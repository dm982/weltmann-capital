import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteContent } from "@/data/content";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/eeef14bd-368e-42dc-a040-e81e44ce78e0_1768217778341.png";

interface HeroProps {
  onRequestAccess: () => void;
}

export function Hero({ onRequestAccess }: HeroProps) {
  const { hero, earlyAccess } = siteContent;
  const { toast } = useToast();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % hero.animatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hero.animatedWords.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: earlyAccess.successMessage,
        description: `We'll be in touch at ${email}`,
        duration: 5000,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>
      
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 
            className="mx-auto max-w-[900px] font-bold tracking-tight text-white drop-shadow-lg"
            style={{ 
              fontSize: 'clamp(1.875rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            {hero.headline}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="text-xl text-white/80 drop-shadow-md sm:text-2xl lg:text-3xl">
              {hero.subheadline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-2xl"
          >
            <p className="text-base text-white/70 drop-shadow-sm sm:text-lg">
              {hero.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10"
          >
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-white/20 bg-black/30 text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/40"
                required
                data-testid="input-hero-email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                variant="outline"
                className="h-12 whitespace-nowrap border-white/30 bg-white text-black shadow-lg hover:bg-gray-100"
                data-testid="button-hero-submit"
              >
                {isSubmitting ? "Submitting..." : hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-1 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl bg-gradient-to-br from-white/10 to-transparent p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>
                <span className="ml-2">WELTMANN Pipeline</span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-white/60">Source</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-white drop-shadow-lg"
                  >
                    {hero.animatedWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="text-white/60">deals across Germany.</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="rounded-md border border-white/20 bg-black/30 px-3 py-1.5 text-sm text-white/80 backdrop-blur-sm">
                  Berlin MFH €12M
                </div>
                <div className="rounded-md border border-white/20 bg-black/30 px-3 py-1.5 text-sm text-white/80 backdrop-blur-sm">
                  Munich Dev €28M
                </div>
                <div className="rounded-md border border-white/20 bg-black/30 px-3 py-1.5 text-sm text-white/80 backdrop-blur-sm">
                  Hamburg Portfolio €45M
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
