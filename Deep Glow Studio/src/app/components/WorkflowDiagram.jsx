import React from "react";
import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "../data/catalog";
import { AnimatedHeading } from "./AnimatedHeading";

export function WorkflowDiagram() {
  const preBranch = WORKFLOW_STEPS.filter((s) => !s.branch && parseInt(s.step, 10) <= 5);
  const branchSteps = WORKFLOW_STEPS.filter((s) => s.branch);
  const postBranch = WORKFLOW_STEPS.filter((s) => !s.branch && parseInt(s.step, 10) >= 7);

  const renderCard = (item, idx) => (
    <motion.div
      key={item.step}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-brand-cyan/35 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-display text-xs text-brand-cyan tracking-wider">{item.step}</span>
        {item.badge && (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
            {item.badge}
          </span>
        )}
      </div>
      <h3 className="font-display text-base sm:text-lg text-white mb-1.5 leading-snug">
        {item.title}
      </h3>
      {item.subtitle && <p className="text-sm text-white/60 mb-4">{item.subtitle}</p>}
      {item.tools?.length > 0 && (
        <div className="pt-3 border-t border-white/[0.08]">
          <span className="block text-[10px] uppercase tracking-[0.14em] text-white/40 mb-2">
            Tool stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-full text-xs bg-white/[0.06] border border-white/10 text-white/85"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-[1380px]">
        <div className="max-w-2xl mb-14">
          <span className="inline-block font-display text-xs uppercase tracking-[0.14em] text-brand-cyan mb-3">
            Our workflow
          </span>
          <AnimatedHeading
            text="From your brief / to the final cut"
            className="text-3xl sm:text-5xl mb-4"
          />
          <p className="body-text text-base sm:text-lg">
            Every project follows the same clear steps. Our team plans, writes, shoots and edits,
            using AI and pro tools to move faster.
          </p>
        </div>

        {/* Steps 01–05 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
          {preBranch.map((s, i) => renderCard(s, i))}
        </div>

        {/* Parallel Shoot Branch (06 AI vs 06 Physical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 lg:max-w-4xl lg:mx-auto">
          {branchSteps.map((s, i) => renderCard(s, i))}
        </div>

        {/* Steps 07–10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {postBranch.map((s, i) => renderCard(s, i))}
        </div>
      </div>
    </section>
  );
}
