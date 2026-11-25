import React from "react";
import { motion } from "framer-motion";

/**
 * Splits lines on "/" (matching Lumas Creative CMS convention, e.g. "Work worth / pausing for")
 * and reveals words smoothly on viewport entry.
 */
export function AnimatedHeading({
  as: Tag = "h2",
  text = "",
  highlightLastLine = true,
  className = "",
}) {
  const lines = String(text)
    .split(" / ")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <Tag className={`font-display tracking-[-0.025em] leading-[1.08] ${className}`}>
      {lines.map((line, lineIdx) => {
        const isGradient = highlightLastLine && lines.length > 1 && lineIdx === lines.length - 1;
        return (
          <span key={lineIdx} className="block">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: lineIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${isGradient ? "text-gradient" : "display-sheen"}`}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

/**
 * Renders CMS text where *asterisks* mark highlighted strong spans inside .lead-dim
 */
export function RichLeadText({ text = "", className = "" }) {
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return (
    <p className={`lead-dim ${className}`}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <strong key={i}>{part.slice(1, -1)}</strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </p>
  );
}
