import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { Linkedin, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface HeaderProps {
  onRequestAccess: () => void;
}

export function Header({ onRequestAccess }: HeaderProps) {
  const { header } = siteContent;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center">
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base md:text-lg">
            {header.logo}
          </span>
        </div>
        
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <a
            href={header.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:block"
            data-testid="link-linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={header.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:block"
            data-testid="link-twitter"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/message"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:block"
            data-testid="link-whatsapp"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className="h-4 w-4" />
          </a>
          <Button
            onClick={onRequestAccess}
            size="sm"
            variant="outline"
            className="ml-1 border-foreground/20 text-xs sm:ml-2 sm:text-sm"
            data-testid="button-header-request-access"
          >
            <span className="hidden sm:inline">{header.ctaButton}</span>
            <span className="sm:hidden">Access</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
