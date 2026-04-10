import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/layout/PageLayout";
import { deals } from "@/data/deals";
import { 
  MapPin, 
  ArrowLeft,
  ArrowRight,
  FileText,
  AlertTriangle,
  Shield,
  Clock,
  Building2,
  Percent
} from "lucide-react";

export default function DealDetailPage() {
  const params = useParams();
  const deal = deals.find(d => d.id === params.id);

  if (!deal) {
    return (
      <PageLayout>
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Deal Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The deal you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/deals">
            <Button data-testid="button-back-to-deals">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Deals
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const statusColors = {
    open: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    closing: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    sold: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
  };

  return (
    <PageLayout>
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/deals">
            <Button variant="ghost" className="mb-4" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Deals
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary">{deal.dealType}</Badge>
                  <Badge className={statusColors[deal.status]}>{deal.status}</Badge>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {deal.location}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{deal.title}</h1>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Business Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{deal.businessPlan}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {deal.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <Shield className="h-4 w-4 mt-1 shrink-0 text-foreground" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risks & Mitigations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Key Risks
                      </h4>
                      <ul className="space-y-2">
                        {deal.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-destructive mt-1">•</span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Mitigations
                      </h4>
                      <ul className="space-y-2">
                        {deal.mitigations.map((mitigation, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-green-600 mt-1">•</span>
                            {mitigation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Available Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Request access to the full information package:
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {deal.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-semibold text-lg">{deal.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground">Equity Needed</span>
                    <span className="font-semibold">{deal.equityNeeded}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Percent className="h-4 w-4" />
                      Leverage Range
                    </span>
                    <span className="font-semibold">{deal.leverageRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Timeline
                    </span>
                    <span className="font-semibold text-sm text-right">{deal.timeline}</span>
                  </div>

                  <div className="pt-4">
                    {deal.status === "sold" ? (
                      <Button variant="secondary" className="w-full" disabled data-testid="button-deal-closed">
                        This Deal Has Closed
                      </Button>
                    ) : (
                      <Link href="/contact">
                        <Button className="w-full" data-testid="button-request-full-pack">
                          Request Full Pack
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Information provided is for qualified investors only. 
                    This is not an offer to sell securities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            <strong>Important Notice:</strong> The information contained in this deal summary is 
            for informational purposes only and does not constitute investment advice or an offer 
            to buy or sell any securities. All investments involve risk, including potential loss 
            of principal. Prospective investors should conduct their own due diligence and consult 
            with their own legal, tax, and financial advisors before making any investment decision.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
