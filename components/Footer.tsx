import { Sun, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark pt-16 text-white/70">
      <Container className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-forest-dark">
              <Sun size={16} strokeWidth={2.4} />
            </span>
            LILLA SOLAR
          </div>
          <p className="mt-3 text-sm italic text-gold/90">&ldquo;{siteConfig.tagline}&rdquo;</p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {siteConfig.fullName}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Products</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>Solar Panels</li>
            <li>Batteries &amp; Inverters</li>
            <li>Charge Controllers</li>
            <li>Solar Street Lights</li>
            <li>Water Pumps</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold" />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold" />
              {siteConfig.email}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>© {year} {siteConfig.fullName} All rights reserved.</p>
          <p>Powered by sunlight, built in Zambia.</p>
        </Container>
      </div>
    </footer>
  );
}
