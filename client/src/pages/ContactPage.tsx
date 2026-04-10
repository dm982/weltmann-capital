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
  MapPin,
  Mail,
  ArrowRight
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  investorType: z.string().min(1, "Please select your investor type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const offices = [
  {
    city: "Riga",
    country: "Latvia",
    address: "Elizabetes iela 45",
    description: "Baltics headquarters"
  },
  {
    city: "Frankfurt",
    country: "Germany",
    address: "Neue Mainzer Straße 66",
    description: "DACH coverage"
  },
  {
    city: "Valencia",
    country: "Spain",
    address: "Carrer de Colón 48",
    description: "Iberia operations"
  }
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      investorType: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      duration: 5000
    });
    
    form.reset();
  }

  return (
    <PageLayout>
      <section className="dark-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text-light">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Whether you're an investor seeking deal flow or a seller with an asset to market, 
            we'd be happy to discuss how we can work together.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-8">Request Deal Flow</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll add you to our investor network. 
                You'll receive curated opportunities that match your investment criteria.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} data-testid="input-contact-name" />
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
                              <Input type="email" placeholder="you@example.com" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="investorType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Investor Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-investor-type">
                                  <SelectValue placeholder="Select your investor type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="family-office">Family Office</SelectItem>
                                <SelectItem value="private-investor">Private Investor</SelectItem>
                                <SelectItem value="institution">Institution</SelectItem>
                                <SelectItem value="syndicate">Syndicate / Club Deal</SelectItem>
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your investment criteria, preferred geographies, deal sizes, and any specific requirements..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="input-contact-message"
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
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold gradient-text mb-8">Our Offices</h2>
              <p className="text-muted-foreground mb-8">
                With presence across our target markets, we maintain local knowledge 
                and relationships essential for cross-border transactions.
              </p>

              <div className="space-y-6 mb-12">
                {offices.map((office) => (
                  <Card key={office.city} className="hover-elevate">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {office.city}, {office.country}
                          </h3>
                          <p className="text-muted-foreground text-sm">{office.address}</p>
                          <p className="text-muted-foreground text-sm mt-1">{office.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Map placeholder</p>
                  <p className="text-sm">Riga • Frankfurt • Valencia</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>info@weltmann-capital.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Compliance Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Weltmann Capital provides deal sourcing, underwriting, and transaction support services 
              for real estate investments. We do not provide investment advice, and information on 
              this website does not constitute an offer to buy or sell securities. All investment 
              opportunities are presented to qualified investors only and involve significant risk, 
              including potential loss of principal. Prospective investors should conduct their own 
              due diligence and consult with their own legal, tax, and financial advisors before 
              making any investment decision. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
