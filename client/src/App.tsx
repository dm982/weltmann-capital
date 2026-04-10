import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import HowWeWorkPage from "@/pages/HowWeWorkPage";
import DealsPage from "@/pages/DealsPage";
import DealDetailPage from "@/pages/DealDetailPage";
import ForSellersPage from "@/pages/ForSellersPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/how-we-work" component={HowWeWorkPage} />
      <Route path="/deals" component={DealsPage} />
      <Route path="/deals/:id" component={DealDetailPage} />
      <Route path="/for-sellers" component={ForSellersPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
