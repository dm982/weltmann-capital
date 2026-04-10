import { Link } from "wouter";
import logoImg from "@assets/capital_(2)_1772150955247.png";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact" },
  ],
  investors: [
    { href: "/deals", label: "Current Deals" },
    { href: "/for-sellers", label: "For Sellers" },
  ],
};

export function Footer() {
  return (
    <footer className="dark-section text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img
              src={logoImg}
              alt="Weltmann Capital"
              className="h-8"
              data-testid="img-footer-logo"
            />
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              Investor-first deal sourcing across the Baltics, Germany & Spain. 
              We curate opportunities that pass our internal underwriting standards.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Investors</h4>
            <ul className="space-y-3">
              {footerLinks.investors.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Important Disclaimer</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Information on this website is for informational purposes only and does not constitute 
              investment advice, tax advice, legal advice, or an offer to buy or sell any securities. 
              Past performance is not indicative of future results. All investments involve significant 
              risk, including potential loss of principal invested. Real estate investments are illiquid 
              and may involve additional risks including but not limited to: market volatility, interest 
              rate fluctuations, currency risk, regulatory changes, and operational challenges.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mt-2">
              Prospective investors should conduct their own independent due diligence and consult with 
              qualified legal, tax, and financial advisors before making any investment decisions. 
              Weltmann Capital does not guarantee any specific outcomes or returns.
            </p>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Weltmann Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
