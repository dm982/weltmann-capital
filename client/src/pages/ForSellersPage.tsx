import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageLayout } from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckCircle,
  Building2,
  Globe,
  Users,
  FileText,
  ArrowRight
} from "lucide-react";

const sellerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  assetType: z.string().min(1, "Please select an asset type"),
  location: z.string().min(2, "Please enter the asset location"),
  askingPrice: z.string().min(1, "Please provide an approximate asking price"),
  description: z.string().min(20, "Please provide a brief description (at least 20 characters)")
});

type SellerFormData = z.infer<typeof sellerFormSchema>;

const whoItsFor = [
  "Baltic developers seeking access to institutional capital",
  "Family offices looking to exit or restructure portfolios",
  "Asset owners who want professional deal preparation and marketing"
];

const dataChecklist = [
  "Recent property valuations or asking price rationale",
  "Rent roll and tenancy schedule (if income-producing)",
  "Historical financials (NOI, operating expenses)",
  "Building condition reports or capex requirements",
  "Title documentation and legal structure",
  "Development permits (if applicable)"
];

const howWeMarket = [
  {
    icon: Users,
    title: "Investor Network",
    description: "Direct access to qualified family offices, private investors, and small institutions across Europe."
  },
  {
    icon: Globe,
    title: "Cross-Border Reach",
    description: "We bridge local assets with international capital through our offices in Riga, Germany, and Spain."
  },
  {
    icon: FileText,
    title: "Professional Presentation",
    description: "Institutional-grade investment memos that communicate value clearly to sophisticated investors."
  }
];

export default function ForSellersPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SellerFormData>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      assetType: "",
      location: "",
      askingPrice: "",
      description: ""
    }
  });

  async function onSubmit(data: SellerFormData) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "Submission received",
      description: "Thank you for your interest. We'll review your asset and get back to you within 48 hours.",
      duration: 5000
    });
    
    form.reset();
  }

  return (
    <PageLayout>
      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-light max-w-4xl mx-auto">
            We don't list everything — we prepare what investors will actually close.
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            If you're a developer, family office, or asset owner in the Baltics looking for qualified 
            international investors, we can help position and market your opportunity.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-8">Who This Is For</h2>
              <ul className="space-y-4">
                {whoItsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-foreground shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold gradient-text mb-8 mt-16">What We Require</h2>
              <p className="text-muted-foreground mb-6">
                To properly evaluate and market your asset, we need the following information:
              </p>
              <ul className="space-y-3">
                {dataChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FileText className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">Submit an Asset</h3>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} data-testid="input-seller-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} data-testid="input-seller-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} data-testid="input-seller-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="assetType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Asset Type</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-asset-type">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="residential">Residential</SelectItem>
                                  <SelectItem value="office">Office</SelectItem>
                                  <SelectItem value="retail">Retail</SelectItem>
                                  <SelectItem value="hospitality">Hospitality</SelectItem>
                                  <SelectItem value="development">Development Land</SelectItem>
                                  <SelectItem value="mixed">Mixed-Use</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="City, Country" {...field} data-testid="input-seller-location" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="askingPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Approximate Asking Price</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., €2-3M" {...field} data-testid="input-seller-price" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brief Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about the asset, current status, and reason for sale..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="input-seller-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                        data-testid="button-submit-asset"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Asset"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">How We Market</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Your asset gets professional positioning and access to qualified investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeMarket.map((item) => (
              <Card key={item.title} className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
