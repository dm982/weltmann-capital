import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteContent } from "@/data/content";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function EarlyAccessSection() {
  const { earlyAccess } = siteContent;
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="early-access" className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {earlyAccess.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {earlyAccess.subheadline}
          </p>
          
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder={earlyAccess.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-12"
                  required
                  data-testid="input-early-access-email"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="h-12 shrink-0"
                data-testid="button-early-access-submit"
              >
                {isSubmitting ? "Submitting..." : earlyAccess.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
