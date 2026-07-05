"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-[200] flex items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-white shadow-card"
          role="status"
        >
          <CheckCircle2 size={18} className="text-gold" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
