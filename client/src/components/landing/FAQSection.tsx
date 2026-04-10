import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";

export function FAQSection() {
  const { faq } = siteContent;

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {faq.headline}
          </h2>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xl font-medium sm:text-2xl">
            {faq.animatedWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-foreground/50"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-muted/30 px-6 transition-all hover:border-foreground/20 hover:bg-muted/50 data-[state=open]:border-foreground/20 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger
                  className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:text-lg"
                  data-testid={`faq-trigger-${index}`}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
