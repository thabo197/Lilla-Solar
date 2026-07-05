"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="bg-forest-light/40 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Customer stories"
          title="What Our Customers Say"
          subtitle="Real feedback from homes and businesses now running on solar."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-2"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto pb-2">
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card">
                  <Quote size={26} className="text-gold" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={i < t.rating ? "fill-gold text-gold" : "text-ink/15"}
                      />
                    ))}
                  </div>
                  <div className="mt-3 border-t border-ink/8 pt-3">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-6 flex justify-center gap-1.5" />
        </div>
      </Container>
    </section>
  );
}
