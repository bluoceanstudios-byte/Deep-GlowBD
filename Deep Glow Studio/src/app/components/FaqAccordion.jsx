import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? "bg-ink-2 border-brand-cyan/35"
                : "bg-white/[0.025] border-white/[0.08] hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
            >
              <span className="font-medium text-base sm:text-lg text-white">{faq.question}</span>
              <span
                className={`w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-brand-cyan border-brand-cyan/40" : "text-white/75"
                }`}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm sm:text-base text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
