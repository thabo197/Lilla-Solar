"use client";

import { motion } from "framer-motion";
import { Zap, ZapOff } from "lucide-react";
import { Container } from "./ui/Container";

const stages = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

export function GridVsSolar() {
  return (
    <section aria-label="Load-shedding versus solar power comparison" className="bg-forest-dark py-6 sm:py-7">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:flex-row sm:justify-between sm:gap-6 sm:px-7"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/50">
            <ZapOff size={14} className="text-danger animate-flicker" />
            <span>Grid load-shedding:</span>
            <div className="flex gap-2">
              {stages.map((s) => (
                <span key={s} className="relative text-white/40">
                  {s}
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-danger/70" />
                </span>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-white/10 sm:h-8 sm:w-px" />

          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-gold">
            <Zap size={15} className="fill-gold" />
            <span>LILLA SOLAR status:</span>
            <span className="rounded-full bg-gold/10 px-3 py-1 text-gold shadow-glow">Always On</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
