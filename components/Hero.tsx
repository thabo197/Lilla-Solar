"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PackageCheck, HardHat, CircleDollarSign } from "lucide-react";
import { Container } from "./ui/Container";
import { buildWhatsAppLink } from "@/lib/site";

const highlights = [
  { icon: PackageCheck, label: "Quality Products" },
  { icon: HardHat, label: "Professional Installation" },
  { icon: CircleDollarSign, label: "Affordable Pricing" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-dusk-fade pt-28"
    >
      {/* Ambient sun-arc backdrop standing in for a real installation photograph */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-sun-arc opacity-70 blur-2xl animate-sunTravel"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(20,37,26,0)_0%,_rgba(20,37,26,0.9)_75%)]" />
        {/* faint panel-grid texture along the base, evoking a rooftop array */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 64px), repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 64px)",
          }}
        />
      </div>

      <Container className="relative z-10 pb-16 sm:pb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow text-gold"
        >
          Lusaka, Zambia · Est. Solar Specialists
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl"
        >
          Reliable Solar Power for Homes &amp; Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-white/75 sm:text-lg"
        >
          Affordable, high-quality solar solutions for a brighter future — engineered for
          Zambia&apos;s sun and built to outlast load-shedding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Products
            <ArrowRight size={16} />
          </a>
          <a
            href={buildWhatsAppLink("Hi LILLA SOLAR, I'd like to request a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <MessageCircle size={16} />
            Request Quote
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                <Icon size={17} />
              </span>
              <span className="text-sm font-medium text-white/85">{label}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
