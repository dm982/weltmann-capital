import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DomainSection } from "@/components/landing/DomainSection";
import { MidPageCTA } from "@/components/landing/MidPageCTA";
import { BusinessTabs } from "@/components/landing/BusinessTabs";
import { BrandSection } from "@/components/landing/BrandSection";
import { IntelligenceSection } from "@/components/landing/IntelligenceSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { EarlyAccessSection } from "@/components/landing/EarlyAccessSection";
import { Footer } from "@/components/landing/Footer";

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToEarlyAccess() {
  scrollToSection("early-access");
}

function scrollToHowItWorks() {
  scrollToSection("how-it-works");
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header onRequestAccess={scrollToEarlyAccess} />
      
      <main>
        <Hero onRequestAccess={scrollToEarlyAccess} />
        
        <HowItWorks onGetStarted={scrollToEarlyAccess} />
        
        <DomainSection onRequestDealFlow={scrollToEarlyAccess} />
        
        <MidPageCTA 
          onPartnerWithUs={scrollToEarlyAccess} 
          onInvestor={scrollToEarlyAccess} 
        />
        
        <BusinessTabs />
        
        <BrandSection onGetStarted={scrollToEarlyAccess} />
        
        <IntelligenceSection onGetStarted={scrollToEarlyAccess} />
        
        <FAQSection />
        
        <EarlyAccessSection />
      </main>
      
      <Footer />
    </div>
  );
}
