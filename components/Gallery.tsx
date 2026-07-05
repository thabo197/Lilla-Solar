"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GradientPlaceholder } from "./ui/GradientPlaceholder";
import { ImageOff } from "lucide-react";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));

  const active = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <section id="gallery" className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Recent work"
          title="Installations Across Zambia"
          subtitle="A look at rooftops, backup rooms and pump stations we've powered up."
        />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[190px] md:grid-cols-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest ${
                item.span === "tall" ? "row-span-2" : ""
              } ${item.span === "wide" ? "col-span-2" : ""}`}
              aria-label={`Open image: ${item.title}, ${item.location}`}
            >
              <GradientPlaceholder
                from={item.gradient[0]}
                to={item.gradient[1]}
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                icon={ImageOff}
                label={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} image viewer`}
          >
            <button
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-2xl"
            >
              <GradientPlaceholder
                from={active.gradient[0]}
                to={active.gradient[1]}
                className="aspect-[4/3] w-full"
                icon={ImageOff}
              />
              <div className="flex items-center gap-2 bg-white px-5 py-4">
                <MapPin size={15} className="text-forest" />
                <p className="text-sm font-medium text-ink">
                  {active.title} — {active.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
