import { siteContent } from "@/data/content";
import { Linkedin, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

export function Footer() {
  const { footer, header } = siteContent;

  return (
    <footer className="dark-section relative overflow-hidden py-16">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <div>
            <span className="text-xl font-semibold text-white">
              {footer.logo}
            </span>
            <p className="mt-3 text-sm text-gray-400">
              {footer.description}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={header.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={header.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="h-4 w-4" />
            </a>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <p className="text-xs text-gray-500">{footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
