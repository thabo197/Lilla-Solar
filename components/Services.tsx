"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Container } from "./ui/Container";
import { Sun } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-forest-light/40 py-24 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32"
        >
          <span className="section-eyebrow">What we do</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Services That Cover the Whole Job
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
            We don&apos;t just sell equipment — we design, install and stand behind every system
            we put up, residential or commercial.
          </p>
          <div className="mt-8 hidden items-center gap-3 rounded-2xl bg-forest px-5 py-4 text-white lg:flex">
            <Sun size={18} className="text-gold" />
            <p className="text-sm text-white/85">
              Not sure which service fits? Start with a free consultation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map(({ id, icon: Icon, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="rounded-2xl bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-light text-forest">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
