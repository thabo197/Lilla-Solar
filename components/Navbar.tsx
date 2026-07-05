"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";
import { Container } from "./ui/Container";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(30,36,32,0.08)] py-2"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-gold">
            <Sun size={18} strokeWidth={2.2} />
          </span>
          <span className={scrolled ? "text-ink" : "text-ink"}>
            LILLA <span className="text-forest">SOLAR</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={buildWhatsAppLink("Hi LILLA SOLAR, I'd like a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get a Quote
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-paper border-t border-ink/10"
          >
            <Container className="flex flex-col gap-1 py-4">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-forest-light hover:text-forest"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppLink("Hi LILLA SOLAR, I'd like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
