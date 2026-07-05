"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("Hi LILLA SOLAR, I'd like to chat.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LILLA SOLAR on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card animate-pulseRing transition-transform hover:scale-110"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
