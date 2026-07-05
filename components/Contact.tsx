"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Toast } from "./ui/Toast";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

export function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend: simulate submission and reset the form.
    setShowToast(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    window.setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <section id="contact" className="bg-forest-light/40 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Talk About Your Power"
          subtitle="Reach us directly or send a message — we typically reply within the same business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-5 rounded-2xl bg-white p-7 shadow-card">
              <a href="#" className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-light text-forest">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Address</p>
                  <p className="text-sm text-ink/60">{siteConfig.address}</p>
                </div>
              </a>
              <a href={siteConfig.phoneHref} className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-light text-forest">
                  <Phone size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <p className="text-sm text-ink/60 group-hover:text-forest">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={buildWhatsAppLink("Hi LILLA SOLAR, I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-light text-forest">
                  <MessageCircle size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <p className="text-sm text-ink/60 group-hover:text-forest">Chat with us instantly</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-light text-forest">
                  <Mail size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-ink/60 group-hover:text-forest">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            {/* Map placeholder — swap for an embedded Google Map iframe when a real address/API key is available */}
            <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-forest-dark">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 22px)",
                }}
              />
              <div className="relative flex flex-col items-center gap-2 text-white/70">
                <MapPin size={22} className="text-gold" />
                <p className="text-sm font-medium">Map preview — Lusaka, Zambia</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-card"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-forest"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+260 ..."
                  className="w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-forest"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-forest"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need power for..."
                className="w-full resize-none rounded-xl border border-ink/12 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-forest"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.98]"
            >
              Send Message
              <Send size={15} />
            </button>
          </motion.form>
        </div>
      </Container>

      <Toast show={showToast} message="Thank you! We'll contact you soon." />
    </section>
  );
}
