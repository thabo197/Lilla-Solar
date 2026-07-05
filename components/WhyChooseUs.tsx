"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/whyChooseUs";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Trust Built on Every Install"
          subtitle="Six reasons Zambian homes and businesses choose LILLA SOLAR over the next quote."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ id, icon: Icon, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-ink/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-gold transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
