import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageLayout } from "@/components/layout/PageLayout";
import { filterSteps, faqItems } from "@/data/deals";
import { 
  Download, 
  ArrowRight,
  Search,
  Calculator,
  FileCheck,
  Shield,
  Users
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "1. Sourcing",
    description: "We identify opportunities through our network of local operators, developers, and intermediaries across Germany, Spain, and the Baltics. Both on-market and off-market deals are evaluated."
  },
  {
    icon: Calculator,
    title: "2. Initial Screening",
    description: "Every opportunity goes through preliminary analysis: market fundamentals, seller motivation, pricing rationality, and basic return metrics. Most deals are filtered out at this stage."
  },
  {
    icon: FileCheck,
    title: "3. Deep Underwriting",
    description: "Deals that pass initial screening receive full underwriting: detailed financial modeling, cashflow stress testing, capex analysis, and risk assessment across multiple scenarios."
  },
  {
    icon: Shield,
    title: "4. Documentation",
    description: "We prepare comprehensive investment materials: investment memo, financial model, risk matrix, and document checklist. Everything you need for informed decision-making."
  },
  {
    icon: Users,
    title: "5. Investor Matching",
    description: "We match opportunities to investors based on risk appetite, capital availability, and strategic fit. Not every deal is right for every investor."
  }
];

export default function HowWeWorkPage() {
  return (
    <PageLayout>
      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-light">
            How We Work
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            A disciplined approach to deal sourcing and underwriting that puts investor interests first.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Our Process</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From sourcing to closing, every step is designed to protect investor interests
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <Card key={step.title} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">The Weltmann Filter</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our five-stage evaluation process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {filterSteps.map((step) => (
                <div key={step.step} className="text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground italic">
              If a deal doesn't pass — we don't represent it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Sample Materials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              See the quality of documentation we provide to investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="hover-elevate">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sample Investment Memo</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  See how we present opportunities with clear analysis and risk assessment.
                </p>
                <Button variant="outline" disabled data-testid="button-download-memo">
                  Download PDF (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sample Financial Model</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Review our standardized underwriting template and scenario analysis.
                </p>
                <Button variant="outline" disabled data-testid="button-download-model">
                  Download XLSX (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border"
                >
                  <AccordionTrigger 
                    className="text-left font-semibold"
                    data-testid={`accordion-question-${index}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-light">
            Ready to see our deal flow?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get access to opportunities that have passed our rigorous underwriting process.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white" data-testid="button-request-deal-flow">
                Request Deal Flow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
