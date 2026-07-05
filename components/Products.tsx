"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GradientPlaceholder } from "./ui/GradientPlaceholder";
import { buildWhatsAppLink } from "@/lib/site";

export function Products() {
  return (
    <section id="products" className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we supply"
          title="Solar Products Built for Every Setup"
          subtitle="From a single-room starter kit to a full commercial array — sized, quoted and installed by our team."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-transform duration-300 hover:-translate-y-1.5"
            >
              <GradientPlaceholder
                from={product.gradient[0]}
                to={product.gradient[1]}
                className="h-44 w-full"
                label={product.title}
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-forest/70">
                  {product.category} · {product.spec}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink">{product.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {product.description}
                </p>
                <a
                  href={buildWhatsAppLink(`Hi LILLA SOLAR, I'd like a quote for ${product.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-gold-dim"
                >
                  Request Quote
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
