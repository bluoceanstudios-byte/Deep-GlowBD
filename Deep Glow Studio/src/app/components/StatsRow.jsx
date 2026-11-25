import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STUDIO_STATS } from "../data/catalog";

function StatItem({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1100;
    const start = performance.now();
    setCount(0);
    const step = (now) => {
      const elapsed = Math.max(0, now - start);
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(value * eased));
      if (t < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 sm:p-7 text-center sm:text-left">
      <div className="font-display text-3xl sm:text-4xl lg:text-[42px] text-gradient leading-none mb-2.5">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/65">{label}</div>
    </div>
  );
}

export function StatsRow({ className = "" }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${className}`}>
      {STUDIO_STATS.map((st) => (
        <StatItem key={st.label} {...st} />
      ))}
    </div>
  );
}
