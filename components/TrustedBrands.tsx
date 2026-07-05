"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";
import { Container } from "./ui/Container";

export function TrustedBrands() {
  return (
    <section className="border-y border-ink/5 bg-white py-12">
      <Container>
        <p className="section-eyebrow text-center">Equipment we trust and install</p>
        <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <span className="cursor-default select-none text-center font-display text-lg font-bold text-ink/35 transition-all duration-300 hover:scale-110 hover:text-forest">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
