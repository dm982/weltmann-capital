import { useState } from "react";
import { siteContent } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export function BusinessTabs() {
  const { businessTabs } = siteContent;
  const [activeTab, setActiveTab] = useState(businessTabs.tabs[0].id);

  const activeContent = businessTabs.content[activeTab as keyof typeof businessTabs.content];

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
            {businessTabs.headline}
          </h2>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-2xl font-bold sm:gap-3 sm:text-3xl lg:text-4xl">
            {businessTabs.animatedWords.map((word, index) => (
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
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {businessTabs.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all sm:px-6 sm:py-3 sm:text-base ${
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "border border-border bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground"
              }`}
              data-testid={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
        
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {activeContent.cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-2xl border border-border bg-muted/30 p-6 transition-all hover:border-foreground/20 hover:bg-muted/50"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
