import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { teamMembers, companyValues } from "@/data/deals";
import { ArrowRight, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-light">
            About Weltmann Capital
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Investor-first deal sourcing across the Baltics, Germany & Spain.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8" />
              <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              We exist to serve investors who want access to European real estate opportunities 
              without the noise. In a market flooded with deal flow, we believe the most valuable 
              service is selectivity.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mandate is simple: we only represent deals we genuinely believe are good for 
              investors. If we wouldn't stand behind a transaction, we don't present it — regardless 
              of the potential fee.
            </p>
            <p className="text-lg text-muted-foreground">
              This approach means we walk away from more opportunities than we pursue. But it also 
              means that when we do bring something to market, it has been thoroughly vetted through 
              our institutional-grade underwriting process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8" />
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Our Team</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals with deep local knowledge across our target markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="h-8 w-8" />
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Our Values</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how we work with investors and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {companyValues.map((value) => (
              <Card key={value.title} className="hover-elevate">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-light">
            Ready to work with us?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Whether you're an investor looking for opportunities or an owner looking to sell, 
            we'd be happy to discuss how we can help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white" data-testid="button-contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/deals">
              <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur" data-testid="button-view-deals">
                View Current Deals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
