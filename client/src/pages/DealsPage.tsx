import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageLayout } from "@/components/layout/PageLayout";
import { deals, Deal } from "@/data/deals";
import { MapPin, ArrowRight, CheckCircle, Filter } from "lucide-react";

type CountryFilter = "all" | "baltics" | "germany" | "spain";
type DealTypeFilter = "all" | "cashflow" | "value-add" | "development";
type StatusFilter = "all" | "open" | "closing" | "sold";

export default function DealsPage() {
  const [countryFilter, setCountryFilter] = useState<CountryFilter>("all");
  const [dealTypeFilter, setDealTypeFilter] = useState<DealTypeFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredDeals = deals.filter((deal) => {
    if (countryFilter !== "all" && deal.country !== countryFilter) return false;
    if (dealTypeFilter !== "all" && deal.dealType !== dealTypeFilter) return false;
    if (statusFilter !== "all" && deal.status !== statusFilter) return false;
    return true;
  });

  return (
    <PageLayout>
      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-light">
            Current Deals
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Opportunities that have passed our underwriting standards and are available to qualified investors.
          </p>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            
            <Select value={countryFilter} onValueChange={(v) => setCountryFilter(v as CountryFilter)}>
              <SelectTrigger className="w-40" data-testid="select-country">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="baltics">Baltics</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="spain">Spain</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dealTypeFilter} onValueChange={(v) => setDealTypeFilter(v as DealTypeFilter)}>
              <SelectTrigger className="w-40" data-testid="select-deal-type">
                <SelectValue placeholder="Deal Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="cashflow">Cashflow</SelectItem>
                <SelectItem value="value-add">Value-Add</SelectItem>
                <SelectItem value="development">Development</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
              <SelectTrigger className="w-40" data-testid="select-status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closing">Closing</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
              </SelectContent>
            </Select>

            <span className="text-sm text-muted-foreground ml-auto">
              {filteredDeals.length} deal{filteredDeals.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDeals.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No deals match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setCountryFilter("all");
                  setDealTypeFilter("all");
                  setStatusFilter("all");
                }}
                data-testid="button-clear-filters"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-light">
            Looking for something specific?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Tell us your investment criteria and we'll notify you when matching opportunities become available.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white" data-testid="button-request-custom">
                Request Custom Deal Flow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  const statusColors = {
    open: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    closing: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    sold: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
  };

  return (
    <Card className="overflow-hidden hover-elevate">
      <div className="h-48 bg-muted relative">
        <img 
          src={deal.image} 
          alt={deal.title}
          className="w-full h-full object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 ${statusColors[deal.status]}`}
        >
          {deal.status}
        </Badge>
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
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span className="text-muted-foreground">Price:</span>
            <span className="ml-1 font-medium">{deal.price}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Equity:</span>
            <span className="ml-1 font-medium">{deal.equityNeeded}</span>
          </div>
        </div>

        <ul className="text-sm text-muted-foreground space-y-1 mb-4">
          {deal.highlights.slice(0, 2).map((highlight, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 mt-1 shrink-0" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>

        <Link href={`/deals/${deal.id}`}>
          <Button 
            variant="outline" 
            className="w-full"
            disabled={deal.status === "sold"}
            data-testid={`button-view-deal-${deal.id}`}
          >
            {deal.status === "sold" ? "View Case Study" : "View Deal"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
