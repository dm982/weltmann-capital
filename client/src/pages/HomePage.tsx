import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageLayout } from "@/components/layout/PageLayout";
import { deals, dealTypesContent, filterSteps } from "@/data/deals";
import { 
  Search, 
  FileText, 
  Handshake, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Building2,
  MapPin
} from "lucide-react";

function HeroSection() {
  return (
    <section className="dark-section py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-light max-w-4xl mx-auto leading-tight">
          Investor-first deal sourcing across the Baltics, Germany & Spain.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          We curate cashflow, value-add and development opportunities — only when they pass 
          our internal underwriting and we would stand behind the deal.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white" data-testid="button-request-deal-flow-hero">
              Request Deal Flow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/how-we-work">
            <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur" data-testid="button-how-we-work">
              See How We Work
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Selective mandate
          </Badge>
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
            <FileText className="mr-2 h-4 w-4" />
            Institutional-grade underwriting
          </Badge>
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
            <Handshake className="mr-2 h-4 w-4" />
            Cross-border execution
          </Badge>
        </div>
      </div>
    </section>
  );
}

function TrustStripSection() {
  const partners = [
    "Partner Network",
    "Legal & Tax Advisors",
    "Local Operators"
  ];

  return (
    <section className="py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Built with a network of local operators, legal and tax advisors in DE, ES and the Baltics.
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="text-muted-foreground/60 font-medium text-sm uppercase tracking-wider"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const services = [
    {
      icon: Search,
      title: "Deal Sourcing",
      description: "On- and off-market opportunities sourced through local networks."
    },
    {
      icon: FileText,
      title: "Underwriting & Due Diligence",
      description: "Investment memo, financial model, risk matrix and document checklist."
    },
    {
      icon: Handshake,
      title: "Transaction Support",
      description: "From term sheet to closing coordination — across borders."
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">What We Do</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            End-to-end support from sourcing to closing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover-elevate">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DealTypesSection() {
  const [activeTab, setActiveTab] = useState<"cashflow" | "value-add" | "development">("cashflow");

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Our Deal Types</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Opportunities across the risk-return spectrum
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cashflow" data-testid="tab-cashflow">Cashflow</TabsTrigger>
            <TabsTrigger value="value-add" data-testid="tab-value-add">Value-Add</TabsTrigger>
            <TabsTrigger value="development" data-testid="tab-development">Development</TabsTrigger>
          </TabsList>

          {Object.entries(dealTypesContent).map(([key, content]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Typical Assets
                    </h4>
                    <ul className="space-y-1">
                      {content.examples.map((example) => (
                        <li key={example} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground/70" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Target Investor Profile
                    </h4>
                    <p className="text-muted-foreground">{content.investorProfile}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Key Risk Focus
                    </h4>
                    <p className="text-muted-foreground">{content.riskFocus}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function FilterSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">The Weltmann Filter</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our rigorous process ensures only quality opportunities reach investors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div 
                key={step.step}
                className="flex gap-4 items-start p-4 rounded-lg bg-muted/50"
              >
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            If a deal doesn't pass — we don't represent it.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedDealsSection() {
  const featuredDeals = deals.filter(d => d.status === "open").slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Featured Deals</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Current opportunities that have passed our underwriting standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDeals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden hover-elevate">
              <div className="h-48 bg-muted relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {deal.dealType}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {deal.location}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{deal.title}</h3>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {deal.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 mt-1 shrink-0" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/deals/${deal.id}`}>
                  <Button variant="outline" className="w-full" data-testid={`button-view-deal-${deal.id}`}>
                    View Deal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/deals">
            <Button variant="outline" size="lg" data-testid="button-view-all-deals">
              View All Deals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="dark-section py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Building2 className="h-12 w-12 text-white/80 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text-light">
          Want curated deal flow?
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Get monthly opportunities with consistent underwriting and clear documentation.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white" data-testid="button-request-deal-flow-cta">
              Request Deal Flow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <TrustStripSection />
      <WhatWeDoSection />
      <DealTypesSection />
      <FilterSection />
      <FeaturedDealsSection />
      <CTASection />
    </PageLayout>
  );
}
