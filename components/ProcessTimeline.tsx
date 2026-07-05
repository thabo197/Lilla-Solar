"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="bg-forest-dark py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From First Call to Full Power"
          subtitle="Five steps, start to finish — most residential installs are live within a week of quotation."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-5 sm:gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-4 pb-10 sm:flex-col sm:gap-0 sm:pb-0"
            >
              {/* connector line */}
              <div className="flex flex-col items-center sm:w-full">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 font-mono text-sm font-medium text-gold">
                  {step.step}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    className="mt-0 w-px flex-1 bg-gradient-to-b from-gold/40 to-transparent sm:mt-3 sm:h-px sm:w-full sm:flex-none sm:bg-gradient-to-r"
                    aria-hidden
                  />
                )}
              </div>
              <div className="sm:mt-4 sm:text-center">
                <h3 className="font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60 sm:mx-auto sm:max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
