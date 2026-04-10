import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/capital_(2)_1772150955247.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/deals", label: "Deals" },
  { href: "/for-sellers", label: "For Sellers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <img
              src={logoImg}
              alt="Weltmann Capital"
              className="h-8 cursor-pointer"
              style={{ filter: "invert(1)" }}
              data-testid="link-logo"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors ${
                    location === item.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover-elevate"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button data-testid="button-request-deal-flow-nav">
                Request Deal Flow
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                      location === item.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Link href="/contact">
                  <Button 
                    className="w-full" 
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-request-deal-flow-mobile"
                  >
                    Request Deal Flow
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
